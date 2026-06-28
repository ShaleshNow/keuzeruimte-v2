import { Table, StringColumn, ChoiceColumn } from '@servicenow/sdk/core'

export const x_967105_keuzeruim_case = Table({
    name: 'x_967105_keuzeruim_case',
    label: 'Keuzeruimte verzoek',
    extends: 'sn_customerservice_case',
    schema: {
        x_967105_keuzeruim_naam_vak_minor: StringColumn({
            label: 'Naam vak/minor',
            maxLength: 255,
            mandatory: true,
        }),
        x_967105_keuzeruim_binnen_buiten_vu: ChoiceColumn({
            label: 'Binnen of buiten de VU?',
            choices: {
                binnen_vu: { label: 'Binnen de VU', sequence: 1, inactive: false },
                buiten_vu: { label: 'Buiten de VU', sequence: 2, inactive: false },
            },
        }),
        x_967105_keuzeruim_naam_universiteit: StringColumn({
            label: 'Naam aanbiedende universiteit',
            maxLength: 255,
        }),
    },
})
