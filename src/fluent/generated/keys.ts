import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    act_beoordeel_verzoek: {
                        table: 'sys_pd_activity'
                        id: '7693bcc6a60946b499ab8b6eb05f8a64'
                    }
                    act_case_afsluiten_afgewezen: {
                        table: 'sys_pd_activity'
                        id: '1bc59c2eebc146f08b273e0a259e0518'
                    }
                    act_externe_resultaten_slcm: {
                        table: 'sys_pd_activity'
                        id: '5d724108909949ab9e024443e793538c'
                    }
                    act_goedkeuring_aanvragen_extern: {
                        table: 'sys_pd_activity'
                        id: 'c227d592cff5479cb02f2d45878f0870'
                    }
                    act_resultaten_verwerken_slcm: {
                        table: 'sys_pd_activity'
                        id: '685d370c80e1435583f84455de387aa4'
                    }
                    act_review_en_intekenen: {
                        table: 'sys_pd_activity'
                        id: '716d6cfa8a8347e0bd85be576a669b7f'
                    }
                    act_vak_hangen_aan_studie: {
                        table: 'sys_pd_activity'
                        id: 'e727209e012e43a4810f286e2577315b'
                    }
                    act_verzoek_ingediend: {
                        table: 'sys_pd_activity'
                        id: '1dbf733f90f34f50a07b59b4ca24e171'
                    }
                    bom_json: {
                        table: 'sys_module'
                        id: 'ace10d3c741549e8929cea1f39785b75'
                    }
                    decision_goedkeuring: {
                        table: 'sys_pd_activity'
                        id: 'be811ecd2f424bdeae25989273c271ba'
                    }
                    decision_verwerking_slcm: {
                        table: 'sys_pd_activity'
                        id: 'a7e659632bfc4b188366d6a8fd9a2e2c'
                    }
                    lane_aanbiedende_universiteit: {
                        table: 'sys_pd_lane'
                        id: 'fd2908e2ba03427e8007eb2c885b2fc8'
                    }
                    lane_beoordeling_examencommissie: {
                        table: 'sys_pd_lane'
                        id: '079ed7b27d7e49869d6568bbeadbae07'
                    }
                    lane_eigen_onderwijsbureau: {
                        table: 'sys_pd_lane'
                        id: '2c0a49c4488048369b3542692a2a8d54'
                    }
                    lane_externe_resultaten: {
                        table: 'sys_pd_lane'
                        id: 'f717c114d8c442d8a438946a332aa9fa'
                    }
                    lane_formulier_indienen: {
                        table: 'sys_pd_lane'
                        id: '9ea79d3e19704ffcbb0b031ad12ab4b7'
                    }
                    lane_onderwijsbureau_aanbiedend: {
                        table: 'sys_pd_lane'
                        id: 'f618547603404d64a08d7e1abb9ef665'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: 'd6b891ce01d6471b9c3fbe63927cbd5e'
                    }
                    playbook_toestemming_keuzeruimte: {
                        table: 'sys_pd_process_definition'
                        id: '40de9c41a6ce495c9cdf98799da9442f'
                    }
                    trig_keuzeruimte_case_created: {
                        table: 'sys_pd_trigger_instance'
                        id: '7e4766a3f4ba44e3ae0a27db6fd5705f'
                    }
                    uip_toon_naam_universiteit: {
                        table: 'catalog_ui_policy'
                        id: '5c2e764c92eb4b04ba03ae7597b8abf5'
                    }
                    verzoek_toestemming_keuzeruimte: {
                        table: 'sc_cat_item_producer'
                        id: '834f0af9767e4924b58da96cf3bcbdca'
                    }
                }
                composite: [
                    {
                        table: 'sys_element_mapping'
                        id: '0061078c06014260a39b985c14cd1d4a'
                        key: {
                            field: 'title'
                            table: 'var__m_sys_pd_activity_type_prop_d4dde0875b00001070e4492c11f91a90'
                            id: '1dbf733f90f34f50a07b59b4ca24e171'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '01edcec62c7e43a484bb2b6933b6bf60'
                        key: {
                            document_key: '7e4766a3f4ba44e3ae0a27db6fd5705f'
                            variable: 'a8ae38d1ff2200108c8733af793bf15c'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '02357a4569254ff0967722c5305ba76c'
                        key: {
                            document_key: 'a7e659632bfc4b188366d6a8fd9a2e2c'
                            variable: '0f4e18f6c7ad5110bfbaf89f51c260f0'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '02602aec66bd4de7ae5c455abe7691c1'
                        key: {
                            document_key: '5d724108909949ab9e024443e793538c'
                            variable: '13597d8ac7200010bfbaf89f51c2609e'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '02f7e860840b446cb55a1621c96f78cc'
                        key: {
                            document_key: '716d6cfa8a8347e0bd85be576a669b7f'
                            variable: '13597d8ac7200010bfbaf89f51c2609e'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '0509c074aa534989ace01a8891b2463e'
                        key: {
                            field: 'title'
                            table: 'var__m_sys_pd_activity_type_prop_e12af577871333003058d1a936cb0ba4'
                            id: 'e727209e012e43a4810f286e2577315b'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '062b8c3ffdbf427387a30693c90b6c97'
                        key: {
                            name: 'x_967105_keuzeruim_case'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '07165dd49e40442e9a86d1bbc61c6f52'
                        key: {
                            document_key: '1bc59c2eebc146f08b273e0a259e0518'
                            variable: 'ad4db04673030010fe4a6da44cf6a798'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '07bbe110dce04be9914ee9c4fde87dcd'
                        key: {
                            document_key: '1bc59c2eebc146f08b273e0a259e0518'
                            variable: '13597d8ac7200010bfbaf89f51c2609e'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '084bb0ec5d594888af5b27fe26ef22e1'
                        key: {
                            document_key: 'e727209e012e43a4810f286e2577315b'
                            variable: '4612be72c3211010381b60bc0eba8f47'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '0a39a8bc047444bbb179c934306aa0c8'
                        key: {
                            document_key: '1dbf733f90f34f50a07b59b4ca24e171'
                            variable: '6c9c4ee31b630010affd0e55cc4bcbbf'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '0aa9ac087dd548aca22518376df8e7cb'
                        key: {
                            document_key: '1dbf733f90f34f50a07b59b4ca24e171'
                            variable: 'ec5d96eac7e60010bfbaf89f51c2605d'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '0b6def79a7b04d1d8f675c6588859ac3'
                        key: {
                            field: 'title'
                            table: 'var__m_sys_pd_activity_type_prop_e12af577871333003058d1a936cb0ba4'
                            id: '716d6cfa8a8347e0bd85be576a669b7f'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '0bf449c7495144de84dbda0ce076473a'
                        key: {
                            field: 'table'
                            table: 'var__m_sys_pd_activity_type_prop_fdbeceb95b61001070e4492c11f91a28'
                            id: '7693bcc6a60946b499ab8b6eb05f8a64'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '0c95c710ae314b7b9a356ca628959c4e'
                        key: {
                            document_key: '1dbf733f90f34f50a07b59b4ca24e171'
                            variable: '78f334b8c763001085f5532bb4c26009'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '0e334f37a4ff4bf58d4ac854320f9739'
                        key: {
                            document_key: '685d370c80e1435583f84455de387aa4'
                            variable: '4f9fdae51bbb001094630f28cc4bcb66'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '0ef73ee1bd184d6c97229fa7fca7d93c'
                        key: {
                            field: 'list_title'
                            table: 'var__m_sys_pd_activity_type_prop_fdbeceb95b61001070e4492c11f91a28'
                            id: '7693bcc6a60946b499ab8b6eb05f8a64'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '1456b64f81024f988b2adef3095507ac'
                        key: {
                            field: 'type'
                            table: 'var__m_sys_hub_flow_input_401bd436c7ad5110bfbaf89f51c260be'
                            id: 'be811ecd2f424bdeae25989273c271ba'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '1482e271b13841bf89353e69cf68c8c9'
                        key: {
                            field: 'experience_status_table'
                            table: 'var__m_sys_pd_activity_type_prop_e12af577871333003058d1a936cb0ba4'
                            id: 'c227d592cff5479cb02f2d45878f0870'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '14e52e0c985842c19183cbc84e5bc6e3'
                        key: {
                            name: 'x_967105_keuzeruim_case'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '16cee56dc23848d5a6f09149bbd2ed3c'
                        key: {
                            field: 'assignment_group'
                            table: 'var__m_sys_hub_flow_input_cb18ceef1b230010affd0e55cc4bcbf2'
                            id: 'e727209e012e43a4810f286e2577315b'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: '16ec424936bf41d1a34499f004392c1f'
                        key: {
                            question: {
                                id: '33820b96463d4183acf90dd3a4ea3297'
                                key: {
                                    cat_item: '834f0af9767e4924b58da96cf3bcbdca'
                                    variable_set: 'NULL'
                                    name: 'binnen_buiten_vu'
                                }
                            }
                            value: 'binnen_vu'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '178a2c091f9e4591be32f7e4f1270488'
                        key: {
                            field: 'associated_table'
                            table: 'var__m_sys_pd_activity_type_prop_fdbeceb95b61001070e4492c11f91a28'
                            id: '7693bcc6a60946b499ab8b6eb05f8a64'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '18a568a1d9b5441fb939aa80e83f758d'
                        key: {
                            field: 'record'
                            table: 'var__m_sys_hub_action_input_baf174c8c3c232002841b63b12d3aee4'
                            id: '1bc59c2eebc146f08b273e0a259e0518'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '192916f1064d40f4b889e4ff70e43ed4'
                        key: {
                            field: 'associated_table'
                            table: 'var__m_sys_pd_activity_type_prop_d4dde0875b00001070e4492c11f91a90'
                            id: '1dbf733f90f34f50a07b59b4ca24e171'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '1c5eed9bb1cd4dba8eea0bc20e1e9c83'
                        key: {
                            document_key: '1bc59c2eebc146f08b273e0a259e0518'
                            variable: 'e7d270ccc3c632002841b63b12d3ae8b'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '1d830ffaabcf46c4aa310a28481fc0c3'
                        key: {
                            field: 'values'
                            table: 'var__m_sys_hub_action_input_baf174c8c3c232002841b63b12d3aee4'
                            id: '1bc59c2eebc146f08b273e0a259e0518'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '1e8b3c0f2b91445a83ac3f69525ca7ec'
                        key: {
                            field: 'description'
                            table: 'var__m_sys_pd_activity_type_prop_e12af577871333003058d1a936cb0ba4'
                            id: '1bc59c2eebc146f08b273e0a259e0518'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '1ea9ab2a38404e76b125bdaf16b678af'
                        key: {
                            field: 'associated_record'
                            table: 'var__m_sys_pd_activity_type_prop_fdbeceb95b61001070e4492c11f91a28'
                            id: '7693bcc6a60946b499ab8b6eb05f8a64'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '1f488058574b429c83317f4dd501ba5f'
                        key: {
                            field: 'icon'
                            table: 'var__m_sys_pd_activity_type_prop_d4dde0875b00001070e4492c11f91a90'
                            id: '1dbf733f90f34f50a07b59b4ca24e171'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '20bf18a1c9694030adb8cea5a8c8f92a'
                        key: {
                            document_key: '716d6cfa8a8347e0bd85be576a669b7f'
                            variable: '5e5272b2c3211010381b60bc0eba8f13'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '20e28f35347b46ea85119525f9b5351f'
                        key: {
                            document_key: 'c227d592cff5479cb02f2d45878f0870'
                            variable: '9a0c340673030010fe4a6da44cf6a7de'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '21fabdb8e55342618ad6628e6a4df2fd'
                        key: {
                            document_key: 'e727209e012e43a4810f286e2577315b'
                            variable: '13597d8ac7200010bfbaf89f51c2609e'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '2386c9d43d9a45bfaa39c507badd42ef'
                        key: {
                            field: 'row_count'
                            table: 'var__m_sys_pd_activity_type_prop_fdbeceb95b61001070e4492c11f91a28'
                            id: '7693bcc6a60946b499ab8b6eb05f8a64'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '248184f44adf475da411f0d7b8883d41'
                        key: {
                            field: 'title'
                            table: 'var__m_sys_pd_activity_type_prop_e12af577871333003058d1a936cb0ba4'
                            id: '5d724108909949ab9e024443e793538c'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '2a934214f8cd4c979446b0dddf66155a'
                        key: {
                            document_key: '7693bcc6a60946b499ab8b6eb05f8a64'
                            variable: 'ca4591f25b21001070e4492c11f91a01'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '2d6f9cfaef8549d8892260b05233e958'
                        key: {
                            document_key: '1bc59c2eebc146f08b273e0a259e0518'
                            variable: '77edf4e40f100010f5bf5ae9c4767edb'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '2ed5473e06f94f9c8ae53d70f0e434d1'
                        key: {
                            document_key: '7693bcc6a60946b499ab8b6eb05f8a64'
                            variable: '29255db25b21001070e4492c11f91ac5'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '3096735e12b54c9eaf535d8273b34d25'
                        key: {
                            document_key: '7693bcc6a60946b499ab8b6eb05f8a64'
                            variable: '1d8b12fe5b61001070e4492c11f91a19'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '319b06c6a14c442c9fe5b61940e2eb35'
                        key: {
                            cat_item: '834f0af9767e4924b58da96cf3bcbdca'
                            variable_set: 'NULL'
                            name: 'naam_vak_minor'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '332927c53969462288423f7f6829f9bc'
                        key: {
                            document_key: '1bc59c2eebc146f08b273e0a259e0518'
                            variable: 'e3d270ccc3c632002841b63b12d3ae98'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '33820b96463d4183acf90dd3a4ea3297'
                        key: {
                            cat_item: '834f0af9767e4924b58da96cf3bcbdca'
                            variable_set: 'NULL'
                            name: 'binnen_buiten_vu'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '33851dc051864bb0bdadd8fda8ec0343'
                        key: {
                            field: 'experience_status_record'
                            table: 'var__m_sys_pd_activity_type_prop_d4dde0875b00001070e4492c11f91a90'
                            id: '1dbf733f90f34f50a07b59b4ca24e171'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '3471567b29b541b688745b0e9e92c9f2'
                        key: {
                            document_key: '7693bcc6a60946b499ab8b6eb05f8a64'
                            variable: '6f2f7ecf5b21001070e4492c11f91a77'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '35387154fcba49ad8a75e39f34002da4'
                        key: {
                            document_key: '1dbf733f90f34f50a07b59b4ca24e171'
                            variable: '267e68875b00001070e4492c11f91a34'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: '38b632c1cda845ee9f9dedb7375bbed5'
                        key: {
                            question: {
                                id: '33820b96463d4183acf90dd3a4ea3297'
                                key: {
                                    cat_item: '834f0af9767e4924b58da96cf3bcbdca'
                                    variable_set: 'NULL'
                                    name: 'binnen_buiten_vu'
                                }
                            }
                            value: 'buiten_vu'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '3a41f81a67df48d2a8992466236e834b'
                        key: {
                            field: 'tagline'
                            table: 'var__m_sys_pd_activity_type_prop_fdbeceb95b61001070e4492c11f91a28'
                            id: '7693bcc6a60946b499ab8b6eb05f8a64'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '3a4f7034a57f4b22997f5b2cdc697542'
                        key: {
                            field: 'experience_status_record'
                            table: 'var__m_sys_pd_activity_type_prop_e12af577871333003058d1a936cb0ba4'
                            id: '716d6cfa8a8347e0bd85be576a669b7f'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '3d1631c0fe7946dbbba7644c1225dabc'
                        key: {
                            document_key: '7693bcc6a60946b499ab8b6eb05f8a64'
                            variable: '01fcbc0673030010fe4a6da44cf6a7d6'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '3e05ffb372d84a32a9e221cb3582f051'
                        key: {
                            document_key: 'be811ecd2f424bdeae25989273c271ba'
                            variable: '0f4e18f6c7ad5110bfbaf89f51c260f0'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '3edf1dc567ea486f93b3a292620fbddd'
                        key: {
                            field: 'experience_status_record'
                            table: 'var__m_sys_pd_activity_type_prop_e12af577871333003058d1a936cb0ba4'
                            id: '685d370c80e1435583f84455de387aa4'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '43dc4ac490cd439fa61e459a63bb9a34'
                        key: {
                            document_key: '5d724108909949ab9e024443e793538c'
                            variable: '5e5272b2c3211010381b60bc0eba8f13'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '48e7692624d9411f9fb308fcff5b7d95'
                        key: {
                            name: 'x_967105_keuzeruim_case'
                            element: 'x_967105_keuzeruim_binnen_buiten_vu'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '4a94f2a7d21844c886786d46b5b5199e'
                        key: {
                            field: 'table'
                            table: 'var__m_sys_hub_flow_input_8ec899171b934150db4bba63cc4bcb22'
                            id: '7693bcc6a60946b499ab8b6eb05f8a64'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '4b5165255f804c54a746de4e0d393ac5'
                        key: {
                            document_key: '1dbf733f90f34f50a07b59b4ca24e171'
                            variable: '9c6b7e22c3211010381b60bc0eba8f98'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '4e633a57d30d4d49ba5a8f10dade16d6'
                        key: {
                            name: 'x_967105_keuzeruim_case'
                            element: 'x_967105_keuzeruim_binnen_buiten_vu'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '4ea96656fb22431daa94fd36207965d0'
                        key: {
                            field: 'description'
                            table: 'var__m_sys_pd_activity_type_prop_e12af577871333003058d1a936cb0ba4'
                            id: 'e727209e012e43a4810f286e2577315b'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '4ec9abce38024cafa94031e6aef279c9'
                        key: {
                            document_key: '5d724108909949ab9e024443e793538c'
                            variable: '9a0c340673030010fe4a6da44cf6a7de'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '5036ed8a39d14fb79ebbf755ca86f184'
                        key: {
                            document_key: 'be811ecd2f424bdeae25989273c271ba'
                            variable: '074e5876c7ad5110bfbaf89f51c26087'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '52288bac650746aab3af04debbfe3753'
                        key: {
                            document_key: '7693bcc6a60946b499ab8b6eb05f8a64'
                            variable: 'd18061f287d300102252c88fc0e3eccb'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '53ef57b65da54d79a566611bf1987104'
                        key: {
                            field: 'is_automated'
                            table: 'var__m_sys_pd_activity_type_prop_d4dde0875b00001070e4492c11f91a90'
                            id: '1dbf733f90f34f50a07b59b4ca24e171'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '54cb505152ed43b6a9bad8f8ed912bcf'
                        key: {
                            document_key: 'c227d592cff5479cb02f2d45878f0870'
                            variable: '1d27b10ac7200010bfbaf89f51c26016'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '567e404f04e748a8aeb497192e6c1150'
                        key: {
                            field: 'assigned_to'
                            table: 'var__m_sys_hub_flow_input_cb18ceef1b230010affd0e55cc4bcbf2'
                            id: 'c227d592cff5479cb02f2d45878f0870'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '578994fc8ff840368cd83a1f6498392a'
                        key: {
                            field: 'description'
                            table: 'var__m_sys_pd_activity_type_prop_e12af577871333003058d1a936cb0ba4'
                            id: '685d370c80e1435583f84455de387aa4'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '5dc9de2ae3c34730a2b83c229fe9bd75'
                        key: {
                            name: 'x_967105_keuzeruim_case'
                            element: 'x_967105_keuzeruim_binnen_buiten_vu'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '5e0f5fcac61f4847915ba949c826085b'
                        key: {
                            field: 'list_query'
                            table: 'var__m_sys_pd_activity_type_prop_fdbeceb95b61001070e4492c11f91a28'
                            id: '7693bcc6a60946b499ab8b6eb05f8a64'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '618da97c531f44d094d810a1a11916ba'
                        key: {
                            field: 'title'
                            table: 'var__m_sys_pd_activity_type_prop_e12af577871333003058d1a936cb0ba4'
                            id: '685d370c80e1435583f84455de387aa4'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '62104fa1502c4b7fbce4807b6f0c5e9e'
                        key: {
                            document_key: '685d370c80e1435583f84455de387aa4'
                            variable: '4612be72c3211010381b60bc0eba8f47'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '62774fc9e9384d7ea87cabed0280da8c'
                        key: {
                            field: 'experience_status_table'
                            table: 'var__m_sys_pd_activity_type_prop_d4dde0875b00001070e4492c11f91a90'
                            id: '1dbf733f90f34f50a07b59b4ca24e171'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '62a2465489b24e129398bc2135e50e57'
                        key: {
                            field: 'experience_status_table'
                            table: 'var__m_sys_pd_activity_type_prop_fdbeceb95b61001070e4492c11f91a28'
                            id: '7693bcc6a60946b499ab8b6eb05f8a64'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '683de3b2eb7244bd9c5c00290b173499'
                        key: {
                            field: 'is_automated'
                            table: 'var__m_sys_pd_activity_type_prop_e12af577871333003058d1a936cb0ba4'
                            id: '1bc59c2eebc146f08b273e0a259e0518'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '6ae73856d1ba49bb866708138e57e2db'
                        key: {
                            field: 'tagline'
                            table: 'var__m_sys_pd_activity_type_prop_e12af577871333003058d1a936cb0ba4'
                            id: 'c227d592cff5479cb02f2d45878f0870'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '6bdae51b58b84003b44741b8186bcc2d'
                        key: {
                            field: 'description'
                            table: 'var__m_sys_pd_activity_type_prop_e12af577871333003058d1a936cb0ba4'
                            id: 'c227d592cff5479cb02f2d45878f0870'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '6be4855fbd1648e78f9581630207a960'
                        key: {
                            document_key: 'c227d592cff5479cb02f2d45878f0870'
                            variable: '3499c6631b630010affd0e55cc4bcb90'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '6f3247dade2c4b4ead17317dd48eb76a'
                        key: {
                            name: 'x_967105_keuzeruim_case'
                            element: 'x_967105_keuzeruim_naam_vak_minor'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '70b458ed8ef741259804a2d607b8eb21'
                        key: {
                            field: 'parent_record'
                            table: 'var__m_sys_pd_process_input_40de9c41a6ce495c9cdf98799da9442f'
                            id: '7e4766a3f4ba44e3ae0a27db6fd5705f'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '7387804030ff4248aa24e6d8dba2c243'
                        key: {
                            name: 'x_967105_keuzeruim_case'
                            element: 'x_967105_keuzeruim_naam_universiteit'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '7406bb0832864144a2ef4eb2e95d1826'
                        key: {
                            field: 'icon'
                            table: 'var__m_sys_pd_activity_type_prop_e12af577871333003058d1a936cb0ba4'
                            id: '1bc59c2eebc146f08b273e0a259e0518'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '75e95377f9984c06ae0eaff82cfd94f3'
                        key: {
                            field: 'title'
                            table: 'var__m_sys_pd_activity_type_prop_e12af577871333003058d1a936cb0ba4'
                            id: 'c227d592cff5479cb02f2d45878f0870'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '777117903400470589df6fb1bd613ad0'
                        key: {
                            field: 'experience_status_record'
                            table: 'var__m_sys_pd_activity_type_prop_e12af577871333003058d1a936cb0ba4'
                            id: 'c227d592cff5479cb02f2d45878f0870'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '778af65117d249d6bf95467cb498fa5b'
                        key: {
                            field: 'icon'
                            table: 'var__m_sys_pd_activity_type_prop_fdbeceb95b61001070e4492c11f91a28'
                            id: '7693bcc6a60946b499ab8b6eb05f8a64'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '7b3b03f1e74c4cc8ac7498612c3330d7'
                        key: {
                            field: 'experience_status_table'
                            table: 'var__m_sys_pd_activity_type_prop_e12af577871333003058d1a936cb0ba4'
                            id: 'e727209e012e43a4810f286e2577315b'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '7ee1f57b0b9c49c5ac4443f82f1d21ba'
                        key: {
                            field: 'tagline'
                            table: 'var__m_sys_pd_activity_type_prop_d4dde0875b00001070e4492c11f91a90'
                            id: '1dbf733f90f34f50a07b59b4ca24e171'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '81151d6afba046b98052bbe2f98783a3'
                        key: {
                            field: 'pending_title'
                            table: 'var__m_sys_pd_activity_type_prop_e12af577871333003058d1a936cb0ba4'
                            id: '1bc59c2eebc146f08b273e0a259e0518'
                        }
                    },
                    {
                        table: 'sc_cat_item_catalog'
                        id: '813cbe55d9b447e89a19f419b3cb30cc'
                        key: {
                            sc_cat_item: '834f0af9767e4924b58da96cf3bcbdca'
                            sc_catalog: '65bcd377c3011200b12d9f2974d3aea0'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '8278669a1df74e8da50900261f09b59a'
                        key: {
                            document_key: 'e727209e012e43a4810f286e2577315b'
                            variable: '9a0c340673030010fe4a6da44cf6a7de'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '82a8a318c83043e98829a63f57658e5e'
                        key: {
                            field: 'description'
                            table: 'var__m_sys_pd_activity_type_prop_d4dde0875b00001070e4492c11f91a90'
                            id: '1dbf733f90f34f50a07b59b4ca24e171'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '85db0578d57d4358835ba791e64c6d22'
                        key: {
                            field: 'tagline'
                            table: 'var__m_sys_pd_activity_type_prop_e12af577871333003058d1a936cb0ba4'
                            id: '685d370c80e1435583f84455de387aa4'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '85f8b307ea0748ccbb4c4bc6203c7408'
                        key: {
                            field: 'assignment_group'
                            table: 'var__m_sys_hub_flow_input_cb18ceef1b230010affd0e55cc4bcbf2'
                            id: '716d6cfa8a8347e0bd85be576a669b7f'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '8616e411aac44124a7bda02f8147acc4'
                        key: {
                            field: 'experience_status_record'
                            table: 'var__m_sys_pd_activity_type_prop_fdbeceb95b61001070e4492c11f91a28'
                            id: '7693bcc6a60946b499ab8b6eb05f8a64'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '86cf45deeb7541c08dc50820bbdd1b37'
                        key: {
                            field: 'approver_group'
                            table: 'var__m_sys_hub_flow_input_8ec899171b934150db4bba63cc4bcb22'
                            id: '7693bcc6a60946b499ab8b6eb05f8a64'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '8b5136e5c8a74d829fa01ce54d3754fb'
                        key: {
                            document_key: '685d370c80e1435583f84455de387aa4'
                            variable: '13597d8ac7200010bfbaf89f51c2609e'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '8c0007c749df4613be9abf948bf73567'
                        key: {
                            document_key: '685d370c80e1435583f84455de387aa4'
                            variable: '5e5272b2c3211010381b60bc0eba8f13'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '8d6b8fecf36545fe8161c37ace5395f6'
                        key: {
                            field: 'tagline'
                            table: 'var__m_sys_pd_activity_type_prop_e12af577871333003058d1a936cb0ba4'
                            id: 'e727209e012e43a4810f286e2577315b'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '8f2745ecb9b844d89d5304f86ecc57ea'
                        key: {
                            document_key: '7693bcc6a60946b499ab8b6eb05f8a64'
                            variable: '091e9aeac7e60010bfbaf89f51c260ea'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '9086b8be22ce4719ad50831a2f746e19'
                        key: {
                            document_key: '7693bcc6a60946b499ab8b6eb05f8a64'
                            variable: '12e9e761870300102252c88fc0e3ecb2'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '911cf4ccc1ef496e9a3aab3bdc61dd07'
                        key: {
                            document_key: '1bc59c2eebc146f08b273e0a259e0518'
                            variable: '4612be72c3211010381b60bc0eba8f47'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '94c465f440bb4a25b26fa25f046fc5e8'
                        key: {
                            field: 'wait'
                            table: 'var__m_sys_hub_flow_input_2b8b42e31b630010affd0e55cc4bcbe9'
                            id: '1dbf733f90f34f50a07b59b4ca24e171'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '97fa13208d36423b898c03f4a92bef9f'
                        key: {
                            field: 'columns'
                            table: 'var__m_sys_pd_activity_type_prop_fdbeceb95b61001070e4492c11f91a28'
                            id: '7693bcc6a60946b499ab8b6eb05f8a64'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '9974a2c51a044333bf6b846a759c15e1'
                        key: {
                            field: 'experience_status_table'
                            table: 'var__m_sys_pd_activity_type_prop_e12af577871333003058d1a936cb0ba4'
                            id: '685d370c80e1435583f84455de387aa4'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '9c52cbd3b8734223af1e379023dd6af4'
                        key: {
                            document_key: '1dbf733f90f34f50a07b59b4ca24e171'
                            variable: '55628762c3211010381b60bc0eba8fec'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '9cd4aed0588d404e9262595af6ae6e27'
                        key: {
                            field: 'description'
                            table: 'var__m_sys_pd_activity_type_prop_e12af577871333003058d1a936cb0ba4'
                            id: '5d724108909949ab9e024443e793538c'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '9d358de5060242eead607fa74a314d9a'
                        key: {
                            document_key: '7693bcc6a60946b499ab8b6eb05f8a64'
                            variable: 'c3aeb10a1bf749d0db4bba63cc4bcbc0'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '9f62822d2a3842f9b0171a69d0458e20'
                        key: {
                            document_key: '1dbf733f90f34f50a07b59b4ca24e171'
                            variable: 'eb0474b8c763001085f5532bb4c260f5'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '9fe8e613eccf4c7b927d3cdf251e5d21'
                        key: {
                            field: 'is_automated'
                            table: 'var__m_sys_pd_activity_type_prop_fdbeceb95b61001070e4492c11f91a28'
                            id: '7693bcc6a60946b499ab8b6eb05f8a64'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'a25b95b792b64561b5fcf0484baaa3bd'
                        key: {
                            field: 'record'
                            table: 'var__m_sys_hub_flow_input_8ec899171b934150db4bba63cc4bcb22'
                            id: '7693bcc6a60946b499ab8b6eb05f8a64'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'a2df7831e3114a0885d181beef81310e'
                        key: {
                            document_key: '716d6cfa8a8347e0bd85be576a669b7f'
                            variable: '4f9fdae51bbb001094630f28cc4bcb66'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'a3d310236d804e6c812569a96c543631'
                        key: {
                            document_key: '1bc59c2eebc146f08b273e0a259e0518'
                            variable: 'e9ae23190700101070e493d0fad300c1'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'a3e5baf75e4c46b3a40755b1f528b67c'
                        key: {
                            field: 'tagline'
                            table: 'var__m_sys_pd_activity_type_prop_e12af577871333003058d1a936cb0ba4'
                            id: '1bc59c2eebc146f08b273e0a259e0518'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'a587c3b6b25442d5a855045c615a9d91'
                        key: {
                            field: 'description'
                            table: 'var__m_sys_pd_activity_type_prop_e12af577871333003058d1a936cb0ba4'
                            id: '716d6cfa8a8347e0bd85be576a669b7f'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'a5cca91288704b25b5e7aaf651f7fe71'
                        key: {
                            document_key: '5d724108909949ab9e024443e793538c'
                            variable: '1d27b10ac7200010bfbaf89f51c26016'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a5e68d91015742798a4d5948124683ed'
                        key: {
                            name: 'x_967105_keuzeruim_case'
                            element: 'x_967105_keuzeruim_binnen_buiten_vu'
                            value: 'buiten_vu'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'a705a01153904e3e89a752419e057b1f'
                        key: {
                            document_key: 'e727209e012e43a4810f286e2577315b'
                            variable: '4f9fdae51bbb001094630f28cc4bcb66'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'a79963abd93641569e9c3424e749b649'
                        key: {
                            document_key: 'c227d592cff5479cb02f2d45878f0870'
                            variable: '5e5272b2c3211010381b60bc0eba8f13'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'a94b2f44bf6440fc8f2529205f783355'
                        key: {
                            document_key: '7693bcc6a60946b499ab8b6eb05f8a64'
                            variable: '5fa0e1f287d300102252c88fc0e3ec66'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'a985fb9fefed4c2ea993dc545c2b4677'
                        key: {
                            document_key: '716d6cfa8a8347e0bd85be576a669b7f'
                            variable: '9a0c340673030010fe4a6da44cf6a7de'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'a9f2c8152ce545619d47fd945eae8266'
                        key: {
                            field: 'experience_status_table'
                            table: 'var__m_sys_pd_activity_type_prop_e12af577871333003058d1a936cb0ba4'
                            id: '716d6cfa8a8347e0bd85be576a669b7f'
                        }
                    },
                    {
                        table: 'catalog_ui_policy_action'
                        id: 'acbb26fce4ce4b4d9f988dfdec0af698'
                        key: {
                            ui_policy: '5c2e764c92eb4b04ba03ae7597b8abf5'
                            catalog_variable: 'IO:naam_universiteit'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'ad1e2f8e2fe943fe9ee8c111174c6483'
                        key: {
                            field: 'experience_status_table'
                            table: 'var__m_sys_pd_activity_type_prop_e12af577871333003058d1a936cb0ba4'
                            id: '1bc59c2eebc146f08b273e0a259e0518'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'adcb8555280b4b448e02c1bf190345c0'
                        key: {
                            field: 'message'
                            table: 'var__m_sys_hub_flow_input_2b8b42e31b630010affd0e55cc4bcbe9'
                            id: '1dbf733f90f34f50a07b59b4ca24e171'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'ae0691d92cdd4a0a954ab6e0e1cc6baf'
                        key: {
                            document_key: '685d370c80e1435583f84455de387aa4'
                            variable: '9a0c340673030010fe4a6da44cf6a7de'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'b14a0c508578436580e8677b43aeb9cb'
                        key: {
                            field: 'experience_status_table'
                            table: 'var__m_sys_pd_activity_type_prop_e12af577871333003058d1a936cb0ba4'
                            id: '5d724108909949ab9e024443e793538c'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: 'b6065db627f54dd29ec443699ca83b95'
                        key: {
                            cat_item: '834f0af9767e4924b58da96cf3bcbdca'
                            variable_set: 'NULL'
                            name: 'naam_universiteit'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'b7769c64bcab4dfb9b3b9447d996b78b'
                        key: {
                            field: 'associated_table'
                            table: 'var__m_sys_pd_activity_type_prop_e12af577871333003058d1a936cb0ba4'
                            id: '1bc59c2eebc146f08b273e0a259e0518'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'b847bfa210fb41fabc90f020f9169685'
                        key: {
                            field: 'type'
                            table: 'var__m_sys_hub_flow_input_401bd436c7ad5110bfbaf89f51c260be'
                            id: 'a7e659632bfc4b188366d6a8fd9a2e2c'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'b881fc53e086478ca8695ffc6c5be98a'
                        key: {
                            field: 'experience_status_record'
                            table: 'var__m_sys_pd_activity_type_prop_e12af577871333003058d1a936cb0ba4'
                            id: '5d724108909949ab9e024443e793538c'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'ba1f3753fe094a4daa42b42e89b69378'
                        key: {
                            field: 'tagline'
                            table: 'var__m_sys_pd_activity_type_prop_e12af577871333003058d1a936cb0ba4'
                            id: '716d6cfa8a8347e0bd85be576a669b7f'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'bc5a146638b04c0c842165326d845c7d'
                        key: {
                            document_key: '685d370c80e1435583f84455de387aa4'
                            variable: '1d27b10ac7200010bfbaf89f51c26016'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'bc7f577f42754fcab50eefaae5a9117a'
                        key: {
                            document_key: 'e727209e012e43a4810f286e2577315b'
                            variable: '1d27b10ac7200010bfbaf89f51c26016'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'bce91ccbd95b4343a7da659e1872e15a'
                        key: {
                            document_key: '1bc59c2eebc146f08b273e0a259e0518'
                            variable: '1d27b10ac7200010bfbaf89f51c26016'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'bf1e71396a924768bd00899ccdb743d7'
                        key: {
                            document_key: '7e4766a3f4ba44e3ae0a27db6fd5705f'
                            variable: 'f7d94b716b714b5fb17863bd74038383'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'c073e7b1b14a4cdcaa1185dcef771812'
                        key: {
                            field: 'description'
                            table: 'var__m_sys_pd_activity_type_prop_fdbeceb95b61001070e4492c11f91a28'
                            id: '7693bcc6a60946b499ab8b6eb05f8a64'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'c1b653214c2b4827ac5a9b474fb9aa04'
                        key: {
                            document_key: '7693bcc6a60946b499ab8b6eb05f8a64'
                            variable: '8cfe36a7c3611010381b60bc0eba8fd2'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'c482fe1a011b40e48a14f422cb4a0fa7'
                        key: {
                            document_key: '1dbf733f90f34f50a07b59b4ca24e171'
                            variable: '24bdf44673030010fe4a6da44cf6a707'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'c63537ad2eea49aa8eaf0ba78b975b10'
                        key: {
                            document_key: '7693bcc6a60946b499ab8b6eb05f8a64'
                            variable: '1ec899171b934150db4bba63cc4bcb3a'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'c78ef26b68cf4425aa85a6b226e0bf67'
                        key: {
                            document_key: '7693bcc6a60946b499ab8b6eb05f8a64'
                            variable: '47ceb192777220102a272f589a10616d'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'c8dbae03e3794f34acfef63a14616419'
                        key: {
                            document_key: '1dbf733f90f34f50a07b59b4ca24e171'
                            variable: '661d304673030010fe4a6da44cf6a7b1'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'c94d2ec9a5d8456bbe74a023e30ba24a'
                        key: {
                            field: 'assignment_group'
                            table: 'var__m_sys_hub_flow_input_cb18ceef1b230010affd0e55cc4bcbf2'
                            id: '685d370c80e1435583f84455de387aa4'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'cd77e8fc94d84fd988d155cb57fe0e40'
                        key: {
                            document_key: '7e4766a3f4ba44e3ae0a27db6fd5705f'
                            variable: '2a8a7851ff2200108c8733af793bf131'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'cdd0fae86d4741f28f527ca86c85d8d9'
                        key: {
                            document_key: '716d6cfa8a8347e0bd85be576a669b7f'
                            variable: '1d27b10ac7200010bfbaf89f51c26016'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'd526872ffff143f69d6d77c86c15203c'
                        key: {
                            document_key: '7693bcc6a60946b499ab8b6eb05f8a64'
                            variable: 'a86e10711bbbc1d0ca592f092a4bcb91'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'd917a3d7c0f64470885adadd56e91892'
                        key: {
                            field: 'title'
                            table: 'var__m_sys_pd_activity_type_prop_e12af577871333003058d1a936cb0ba4'
                            id: '1bc59c2eebc146f08b273e0a259e0518'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'd9c6db385dac4f8992ff47195f01ccb3'
                        key: {
                            document_key: '1bc59c2eebc146f08b273e0a259e0518'
                            variable: '63fd1eeac7e60010bfbaf89f51c26059'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'da1d08fe49744a36807961470018551a'
                        key: {
                            name: 'x_967105_keuzeruim_case'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'db38096ae66c46d6aa21522334917440'
                        key: {
                            document_key: '7693bcc6a60946b499ab8b6eb05f8a64'
                            variable: 'd6d1f7585b92001022527d6f7281c7cc'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'db609abd87d94f20aac065fd3adaa09c'
                        key: {
                            field: 'max_columns'
                            table: 'var__m_sys_pd_activity_type_prop_fdbeceb95b61001070e4492c11f91a28'
                            id: '7693bcc6a60946b499ab8b6eb05f8a64'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'dddf00839a6c47eeab1e80b98a708078'
                        key: {
                            field: 'tagline'
                            table: 'var__m_sys_pd_activity_type_prop_e12af577871333003058d1a936cb0ba4'
                            id: '5d724108909949ab9e024443e793538c'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'deb9189f6ff64f7da1ed2388803d62dd'
                        key: {
                            document_key: '7693bcc6a60946b499ab8b6eb05f8a64'
                            variable: '3f9d744673030010fe4a6da44cf6a7b9'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'e0eb02d77338455c99b942b13874771d'
                        key: {
                            document_key: '1dbf733f90f34f50a07b59b4ca24e171'
                            variable: 'c23322e91bbb001094630f28cc4bcbae'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'e7a4e785734b4b0d97ac2004a14e78e3'
                        key: {
                            document_key: 'c227d592cff5479cb02f2d45878f0870'
                            variable: '13597d8ac7200010bfbaf89f51c2609e'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e80ae083435149c3a87045758f5c0807'
                        key: {
                            name: 'x_967105_keuzeruim_case'
                            element: 'x_967105_keuzeruim_naam_universiteit'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'e833c0cbfb974b2a97df496816dd6a80'
                        key: {
                            document_key: '1dbf733f90f34f50a07b59b4ca24e171'
                            variable: '49ed24875b00001070e4492c11f91aa5'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'e9b8b085781343c0949ab0d6d616a499'
                        key: {
                            field: 'experience_status_record'
                            table: 'var__m_sys_pd_activity_type_prop_e12af577871333003058d1a936cb0ba4'
                            id: 'e727209e012e43a4810f286e2577315b'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'eb00ee5a725946c1bbda8ac370da7d66'
                        key: {
                            document_key: '1bc59c2eebc146f08b273e0a259e0518'
                            variable: '8c1ef8e40f100010f5bf5ae9c4767ed6'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'eca6965570e94e659eb0d5bc1d5a7abd'
                        key: {
                            document_key: '1bc59c2eebc146f08b273e0a259e0518'
                            variable: '9a0c340673030010fe4a6da44cf6a7de'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'f045be8f8d164910a4c0bb5072215889'
                        key: {
                            name: 'x_967105_keuzeruim_case'
                            element: 'x_967105_keuzeruim_binnen_buiten_vu'
                            value: 'binnen_vu'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'f0b6cfb9d4374c75950b25bf56a98a02'
                        key: {
                            document_key: '7693bcc6a60946b499ab8b6eb05f8a64'
                            variable: '9d2ff6a7c3611010381b60bc0eba8f3c'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'f36d7b4cab594933af4cad37a73a8c87'
                        key: {
                            field: 'associated_record'
                            table: 'var__m_sys_pd_activity_type_prop_e12af577871333003058d1a936cb0ba4'
                            id: '1bc59c2eebc146f08b273e0a259e0518'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'f3d5059478e742e1a65e7f5760dd6316'
                        key: {
                            document_key: '7693bcc6a60946b499ab8b6eb05f8a64'
                            variable: '66c5b3885b16001022527d6f7281c77c'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'f68d454b307b430abd4b117ec70867b0'
                        key: {
                            document_key: '716d6cfa8a8347e0bd85be576a669b7f'
                            variable: '4612be72c3211010381b60bc0eba8f47'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'f6bacb9f1fc24e4e9adbf7e69eae37fa'
                        key: {
                            document_key: '5d724108909949ab9e024443e793538c'
                            variable: '4612be72c3211010381b60bc0eba8f47'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: 'f708f8a00f4e4d97b6184976e40850d5'
                        key: {
                            name: 'x_967105_keuzeruim_case'
                        }
                    },
                    {
                        table: 'sys_pd_process_input'
                        id: 'f7d94b716b714b5fb17863bd74038383'
                        key: {
                            element: 'parent_record'
                            model: '40de9c41a6ce495c9cdf98799da9442f'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'f851ddbf09554daca7a9e1b552f0fbb0'
                        key: {
                            document_key: 'a7e659632bfc4b188366d6a8fd9a2e2c'
                            variable: '074e5876c7ad5110bfbaf89f51c26087'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'f8c5117d242b4831b2c08c038a111d7d'
                        key: {
                            document_key: '5d724108909949ab9e024443e793538c'
                            variable: '4f9fdae51bbb001094630f28cc4bcb66'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'f95b6a3fc188481ca75562e4d0fe931b'
                        key: {
                            document_key: 'c227d592cff5479cb02f2d45878f0870'
                            variable: '4612be72c3211010381b60bc0eba8f47'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'fab6c8d5e5214db7aeddbc6639da3b21'
                        key: {
                            field: 'assignment_group'
                            table: 'var__m_sys_hub_flow_input_cb18ceef1b230010affd0e55cc4bcbf2'
                            id: '5d724108909949ab9e024443e793538c'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'fb16c101cd3a48208d6f0b3e500b5393'
                        key: {
                            field: 'associated_record'
                            table: 'var__m_sys_pd_activity_type_prop_d4dde0875b00001070e4492c11f91a90'
                            id: '1dbf733f90f34f50a07b59b4ca24e171'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'fb25dd1e6976449aafe97beb78f8dcd1'
                        key: {
                            document_key: 'e727209e012e43a4810f286e2577315b'
                            variable: '5e5272b2c3211010381b60bc0eba8f13'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'fbc1f2a30c1e410a8f7bef4f85a87cc2'
                        key: {
                            field: 'title'
                            table: 'var__m_sys_pd_activity_type_prop_fdbeceb95b61001070e4492c11f91a28'
                            id: '7693bcc6a60946b499ab8b6eb05f8a64'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'fe338a99f16c4789adee136e29fadb8e'
                        key: {
                            name: 'x_967105_keuzeruim_case'
                            element: 'x_967105_keuzeruim_naam_vak_minor'
                        }
                    },
                ]
            }
        }
    }
}
