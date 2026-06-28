import {
    CatalogItemRecordProducer,
    CatalogUiPolicy,
    SingleLineTextVariable,
    SelectBoxVariable,
} from '@servicenow/sdk/core'

export const VerzoekToestemmingKeuzeruimte = CatalogItemRecordProducer({
    $id: Now.ID['verzoek_toestemming_keuzeruimte'],
    name: 'Verzoek toestemming invulling keuzeruimte',
    table: 'x_967105_keuzeruim_case',
    shortDescription: 'Vraag toestemming aan voor het volgen van een vak of minor buiten je opleiding',
    description: 'Gebruik dit formulier om toestemming te vragen voor het invullen van uw keuzeruimte met een vak of minor.',
    catalogs: ['65bcd377c3011200b12d9f2974d3aea0'],
    hideAddToCart: true,
    hideSaveAsDraft: false,
    script: `
current.x_967105_keuzeruim_naam_vak_minor = producer.naam_vak_minor;
current.x_967105_keuzeruim_binnen_buiten_vu = producer.binnen_buiten_vu;
current.x_967105_keuzeruim_naam_universiteit = producer.naam_universiteit;
current.short_description = 'Toestemming keuzeruimte: ' + producer.naam_vak_minor;
`,
    variables: {
        naam_vak_minor: SingleLineTextVariable({
            question: 'Naam vak/minor',
            order: 100,
            mandatory: true,
        }),
        binnen_buiten_vu: SelectBoxVariable({
            question: 'Binnen of buiten de VU?',
            order: 200,
            mandatory: true,
            choices: {
                binnen_vu: { label: 'Binnen de VU', sequence: 1, inactive: false },
                buiten_vu: { label: 'Buiten de VU', sequence: 2, inactive: false },
            },
        }),
        naam_universiteit: SingleLineTextVariable({
            question: 'Naam aanbiedende universiteit',
            order: 300,
            mandatory: false,
        }),
    },
})

CatalogUiPolicy({
    $id: Now.ID['uip_toon_naam_universiteit'],
    shortDescription: 'Toon naam universiteit veld als buiten de VU',
    catalogItem: VerzoekToestemmingKeuzeruimte,
    catalogCondition: 'binnen_buiten_vu=buiten_vu',
    reverseIfFalse: true,
    onLoad: true,
    active: true,
    actions: [
        {
            variableName: 'naam_universiteit',
            visible: true,
            mandatory: true,
        },
    ],
})
