import {
    PlaybookDefinition,
    PlaybookTriggerTypes,
    wfa,
    ActivityDefinitions,
} from '@servicenow/sdk/automation'

const EXAMENCOMMISSIE = '336fe409833983d0b880f496feaad337'
const ONDERWIJSBUREAU = '7b6f2c49833983d0b880f496feaad387'
const EIGEN_ONDERWIJSBUREAU = '487f2c49833983d0b880f496feaad3c0'

PlaybookDefinition(
    {
        $id: Now.ID['playbook_toestemming_keuzeruimte'],
        label: 'Toestemming invulling keuzeruimte',
        name: 'toestemming_invulling_keuzeruimte',
        description: 'Begeleidingsproces voor aanvragen keuzeruimte invulling',
        parentTable: 'x_967105_keuzeruim_case',
        processType: 'Standard playbook',
        runStrategy: 'run_once',
        access: 'public',
    },
    {
        triggers: [
            wfa.playbook.trigger(
                PlaybookTriggerTypes.RecordCreate,
                {
                    $id: Now.ID['trig_keuzeruimte_case_created'],
                    label: 'Bij aanmaken keuzeruimte verzoek',
                },
                {
                    table: 'x_967105_keuzeruim_case',
                    condition: 'active=true',
                },
            ),
        ],
    },
    {
        lanes: (params) => {
            // LANE 1: Formulier indienen (order 100, altijd actief)
            const lane1_formulier = wfa.playbook.lane({
                config: {
                    $id: Now.ID['lane_formulier_indienen'],
                    label: 'Formulier indienen',
                    order: 100,
                    startRule: wfa.playbook.run.Immediately(),
                    restartRule: 'RUN_ONLY_ONCE',
                },
                activities: () => {
                    const verzoekIngediend = wfa.playbook.activity(
                        ActivityDefinitions.Core.Instruction,
                        {
                            $id: Now.ID['act_verzoek_ingediend'],
                            label: 'Verzoek ingediend',
                            order: 100,
                            startRule: wfa.playbook.run.Immediately(),
                            restartRule: 'RUN_ONLY_ONCE',
                        },
                        {
                            message: 'Uw verzoek voor toestemming invulling keuzeruimte is ingediend en wordt beoordeeld door de examencommissie.',
                            wait: 'no',
                        },
                        {
                            tagline: 'Stap 1',
                            title: 'Verzoek ingediend',
                        },
                    )
                    return { verzoekIngediend: verzoekIngediend }
                },
            })

            // LANE 2: Beoordeling examencommissie (order 200, altijd actief)
            const lane2_examencommissie = wfa.playbook.lane({
                config: {
                    $id: Now.ID['lane_beoordeling_examencommissie'],
                    label: 'Beoordeling examencommissie',
                    order: 200,
                    startRule: wfa.playbook.run.After(lane1_formulier),
                    restartRule: 'RUN_ONLY_ONCE',
                },
                activities: () => {
                    const beoordeelVerzoek = wfa.playbook.activity(
                        ActivityDefinitions.Core.RequestAdHocApproval,
                        {
                            $id: Now.ID['act_beoordeel_verzoek'],
                            label: 'Beoordeel verzoek',
                            order: 100,
                            startRule: wfa.playbook.run.Immediately(),
                            restartRule: 'RUN_ONLY_ONCE',
                        },
                        {
                            approver_group: EXAMENCOMMISSIE,
                            table: 'x_967105_keuzeruim_case',
                            record: wfa.playbook.dataPill(params.parentRecord),
                        },
                        {
                            tagline: 'Beoordeling',
                            title: 'Beoordeel verzoek',
                            description: 'Beoordeel het verzoek voor toestemming invulling keuzeruimte.',
                        },
                    )

                    const beslissingGoedkeuring = wfa.playbook.activity(
                        ActivityDefinitions.Core.Decision,
                        {
                            $id: Now.ID['decision_goedkeuring'],
                            label: 'Beslissing goedkeuring',
                            order: 200,
                            startRule: wfa.playbook.run.After(beoordeelVerzoek),
                            restartRule: 'RUN_ONLY_ONCE',
                        },
                        {
                            type: 'match_first',
                            branches: [
                                {
                                    id: 'afgewezen',
                                    label: 'Afgewezen',
                                    condition: `${wfa.playbook.dataPill(beoordeelVerzoek.outputs.state)}=rejected`,
                                },
                                { id: 'else', label: 'Else' },
                            ] as const,
                        },
                    )

                    const caseAfsluiten = wfa.playbook.activity(
                        ActivityDefinitions.Core.UpdateRecord,
                        {
                            $id: Now.ID['act_case_afsluiten_afgewezen'],
                            label: 'Case afsluiten (afgewezen)',
                            order: 300,
                            startRule: wfa.playbook.run.After(beslissingGoedkeuring.branches.afgewezen),
                            restartRule: 'RUN_ONLY_ONCE',
                        },
                        {
                            record: wfa.playbook.dataPill(params.parentRecord),
                            values: TemplateValue({
                                state: '7',
                                close_notes: 'Verzoek afgewezen door examencommissie.',
                            }),
                        },
                    )

                    return {
                        beoordeelVerzoek: beoordeelVerzoek,
                        beslissingGoedkeuring: beslissingGoedkeuring,
                        caseAfsluiten: caseAfsluiten,
                    }
                },
            })

            // LANE 3: Onderwijsbureau aanbiedende faculteit (order 300)
            // Conditie: binnen_vu EN niet gesloten
            const lane3_onderwijsbureau = wfa.playbook.lane({
                config: {
                    $id: Now.ID['lane_onderwijsbureau_aanbiedend'],
                    label: 'Onderwijsbureau aanbiedende faculteit',
                    order: 300,
                    startRule: wfa.playbook.run.After(lane2_examencommissie),
                    restartRule: 'RUN_ONLY_ONCE',
                    conditionToRun: 'input_record.x_967105_keuzeruim_binnen_buiten_vu=binnen_vu^input_record.state!=7',
                },
                activities: () => {
                    const reviewEnIntekenen = wfa.playbook.activity(
                        ActivityDefinitions.Core.RecordForm,
                        {
                            $id: Now.ID['act_review_en_intekenen'],
                            label: 'Review en intekenen',
                            order: 100,
                            startRule: wfa.playbook.run.Immediately(),
                            restartRule: 'RUN_ONLY_ONCE',
                        },
                        {
                            assignment_group: ONDERWIJSBUREAU,
                        },
                        {
                            tagline: 'Stap 3',
                            title: 'Review en intekenen',
                            description: 'Controleer het verzoek en teken in voor het vak binnen de VU.',
                        },
                    )
                    return { reviewEnIntekenen: reviewEnIntekenen }
                },
            })

            // LANE 4: Aanbiedende universiteit (order 400)
            // Conditie: buiten_vu EN niet gesloten
            const lane4_aanbiedende_universiteit = wfa.playbook.lane({
                config: {
                    $id: Now.ID['lane_aanbiedende_universiteit'],
                    label: 'Aanbiedende universiteit',
                    order: 400,
                    startRule: wfa.playbook.run.After(lane3_onderwijsbureau),
                    restartRule: 'RUN_ONLY_ONCE',
                    conditionToRun: 'input_record.x_967105_keuzeruim_binnen_buiten_vu=buiten_vu^input_record.state!=7',
                },
                activities: () => {
                    const goedkeuringAanvragenExtern = wfa.playbook.activity(
                        ActivityDefinitions.Core.RecordForm,
                        {
                            $id: Now.ID['act_goedkeuring_aanvragen_extern'],
                            label: 'Goedkeuring aanvragen externe universiteit',
                            order: 100,
                            startRule: wfa.playbook.run.Immediately(),
                            restartRule: 'RUN_ONLY_ONCE',
                        },
                        {
                            assigned_to: '{{pd.inputRecord.caller_id}}',
                        },
                        {
                            tagline: 'Stap 4',
                            title: 'Goedkeuring aanvragen externe universiteit',
                            description: 'Vraag goedkeuring aan bij de aanbiedende externe universiteit.',
                        },
                    )
                    return { goedkeuringAanvragenExtern: goedkeuringAanvragenExtern }
                },
            })

            // LANE 5: Externe resultaten (order 500)
            // Conditie: buiten_vu EN niet gesloten
            const lane5_externe_resultaten = wfa.playbook.lane({
                config: {
                    $id: Now.ID['lane_externe_resultaten'],
                    label: 'Externe resultaten',
                    order: 500,
                    startRule: wfa.playbook.run.After(lane4_aanbiedende_universiteit),
                    restartRule: 'RUN_ONLY_ONCE',
                    conditionToRun: 'input_record.x_967105_keuzeruim_binnen_buiten_vu=buiten_vu^input_record.state!=7',
                },
                activities: () => {
                    const externeResultatenToevoegen = wfa.playbook.activity(
                        ActivityDefinitions.Core.RecordForm,
                        {
                            $id: Now.ID['act_externe_resultaten_slcm'],
                            label: 'Externe resultaten toevoegen in SLcM',
                            order: 100,
                            startRule: wfa.playbook.run.Immediately(),
                            restartRule: 'RUN_ONLY_ONCE',
                        },
                        {
                            assignment_group: EIGEN_ONDERWIJSBUREAU,
                        },
                        {
                            tagline: 'Stap 5',
                            title: 'Externe resultaten toevoegen in SLcM',
                            description: 'Voeg de externe studieresultaten toe in het SLcM systeem.',
                        },
                    )
                    return { externeResultatenToevoegen: externeResultatenToevoegen }
                },
            })

            // LANE 6: Eigen onderwijsbureau (order 600, altijd actief als niet gesloten)
            const lane6_eigen_onderwijsbureau = wfa.playbook.lane({
                config: {
                    $id: Now.ID['lane_eigen_onderwijsbureau'],
                    label: 'Eigen onderwijsbureau',
                    order: 600,
                    startRule: wfa.playbook.run.After(lane5_externe_resultaten),
                    restartRule: 'RUN_ONLY_ONCE',
                    conditionToRun: 'input_record.state!=7',
                },
                activities: () => {
                    const beslissingVerwerking = wfa.playbook.activity(
                        ActivityDefinitions.Core.Decision,
                        {
                            $id: Now.ID['decision_verwerking_slcm'],
                            label: 'Bepaal verwerkingstype SLcM',
                            order: 100,
                            startRule: wfa.playbook.run.Immediately(),
                            restartRule: 'RUN_ONLY_ONCE',
                        },
                        {
                            type: 'match_first',
                            branches: [
                                {
                                    id: 'binnen_vu',
                                    label: 'Binnen de VU',
                                    condition: 'input_record.x_967105_keuzeruim_binnen_buiten_vu=binnen_vu',
                                },
                                { id: 'else', label: 'Else' },
                            ] as const,
                        },
                    )

                    const vakHangenAanStudie = wfa.playbook.activity(
                        ActivityDefinitions.Core.RecordForm,
                        {
                            $id: Now.ID['act_vak_hangen_aan_studie'],
                            label: 'Vak hangen aan studie in SLcM',
                            order: 200,
                            startRule: wfa.playbook.run.After(beslissingVerwerking.branches.binnen_vu),
                            restartRule: 'RUN_ONLY_ONCE',
                        },
                        {
                            assignment_group: EIGEN_ONDERWIJSBUREAU,
                        },
                        {
                            tagline: 'Stap 6',
                            title: 'Vak hangen aan studie in SLcM',
                            description: 'Koppel het goedgekeurde vak aan de studie van de student in SLcM.',
                        },
                    )

                    const resultatenVerwerken = wfa.playbook.activity(
                        ActivityDefinitions.Core.RecordForm,
                        {
                            $id: Now.ID['act_resultaten_verwerken_slcm'],
                            label: 'Resultaten verwerken in SLcM',
                            order: 300,
                            startRule: wfa.playbook.run.After(beslissingVerwerking.branches.else),
                            restartRule: 'RUN_ONLY_ONCE',
                        },
                        {
                            assignment_group: EIGEN_ONDERWIJSBUREAU,
                        },
                        {
                            tagline: 'Stap 6',
                            title: 'Resultaten verwerken in SLcM',
                            description: 'Verwerk de externe studieresultaten in het SLcM systeem.',
                        },
                    )

                    return {
                        beslissingVerwerking: beslissingVerwerking,
                        vakHangenAanStudie: vakHangenAanStudie,
                        resultatenVerwerken: resultatenVerwerken,
                    }
                },
            })

            return {
                lane1_formulier: lane1_formulier,
                lane2_examencommissie: lane2_examencommissie,
                lane3_onderwijsbureau: lane3_onderwijsbureau,
                lane4_aanbiedende_universiteit: lane4_aanbiedende_universiteit,
                lane5_externe_resultaten: lane5_externe_resultaten,
                lane6_eigen_onderwijsbureau: lane6_eigen_onderwijsbureau,
            }
        },
    },
)
