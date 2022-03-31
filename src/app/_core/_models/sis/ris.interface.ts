import { _Stato_Ris_Enum } from '../../_services/generated/graphql';

export interface RisObj {
  __typename?: 'ris' | undefined;
  id: number;
  municipalita_storica?: any;
  quartiere_storico?: any;
  toponimo_storico?: any;
  altro?: string | null | undefined;
  conseguenza_veicolo_note?: string | null | undefined;
  data?: any;
  data_intervento?: any;
  data_presunta?: any;
  data_segnalazione?: any;
  decessi_certificato?: boolean | null | undefined;
  decessi_certificato_redattore?: string | null | undefined;
  decessi_certificato_redattore_in_servizio?: string | null | undefined;
  decessi_certificato_redattore_recapito?: string | null | undefined;
  decessi_intervento_polizia_mortuaria?: boolean | null | undefined;
  decessi_note?: string | null | undefined;
  decessi_notiziato_pm?: boolean | null | undefined;
  decessi_numero?: number | null | undefined;
  decessi_oggetti_rinvenuti?: boolean | null | undefined;
  decessi_successivo_data?: any;
  decessi_trasporto_salme_data?: any;
  decessi_trasporto_salme_presso?: string | null | undefined;
  decessi_verbale_riconoscimento_salma?: boolean | null | undefined;
  dinamica?: string | null | undefined;
  ente_primo_intervento_note?: string | null | undefined;
  ente_secondario_intervenuti_altro?: string | null | undefined;
  ente_secondario_intervenuti_motivazione?: string | null | undefined;
  ente_secondario_intervenuti_vvff_capo_pattuglia?: string | null | undefined;
  ente_secondario_intervenuti_vvff_comando?: string | null | undefined;
  ente_secondario_intervenuti_vvff_gia_intervenuti?: boolean | null | undefined;
  ente_segnalatore_note?: string | null | undefined;
  impianto_semaforico_note?: string | null | undefined;
  localizzazione_altro_note?: string | null | undefined;
  localizzazione_condizioni_atmosferiche_note?: string | null | undefined;
  localizzazione_condizioni_traffico_note?: string | null | undefined;
  localizzazione_extra_abitato_note?: string | null | undefined;
  localizzazione_fondo_stradale_note?: string | null | undefined;
  localizzazione_illuminazione_note?: string | null | undefined;
  localizzazione_note?: string | null | undefined;
  localizzazione_particolarita_strada_note?: string | null | undefined;
  localizzazione_pavimentazione_note?: string | null | undefined;
  localizzazione_tipo_strada_note?: string | null | undefined;
  localizzazione_visibilita_note?: string | null | undefined;
  natura_incidente_note?: string | null | undefined;
  note_intervento?: string | null | undefined;
  operazione_terminate_data?: any;
  posizione_finale_veicolo_carreggiata_note?: string | null | undefined;
  posizione_finale_veicolo_fuori_sede_note?: string | null | undefined;
  posizione_finale_veicolo_margini_note?: string | null | undefined;
  posizione_statica_descrizione_analitica?: string | null | undefined;
  posizione_statica_rilievi?: boolean | null | undefined;
  posizione_statica_rilievi_veicoli_rimossi?: boolean | null | undefined;
  punti_descrizione_analitica?: string | null | undefined;
  punti_investimento?: boolean | null | undefined;
  punti_investimento_multiplo?: boolean | null | undefined;
  punti_rilievi?: boolean | null | undefined;
  punti_urto?: boolean | null | undefined;
  punti_urto_accorda?: string | null | undefined;
  punti_urto_multiplo?: boolean | null | undefined;
  punti_urto_note?: string | null | undefined;
  ris_consegnato_a_altro?: string | null | undefined;
  ris_consegnato_data?: any;
  stato: _Stato_Ris_Enum;
  unita_operativa?:
    | {
        __typename?: 'unita_operativa' | undefined;
        id: number;
        nome?: string | null | undefined;
      }
    | null
    | undefined;
  agenti_accertatori: {
    __typename?: 'agente_accertatore' | undefined;
    agente: any;
  }[];
  infortunati: {
    __typename?: 'infortunato' | undefined;
    cognome?: string | null | undefined;
    cura_da_parte?: string | null | undefined;
    danni_lamentati?: string | null | undefined;
    id: number;
    nascita_citta_altro?: string | null | undefined;
    nascita_data?: any;
    nome?: string | null | undefined;
    telefono?: string | null | undefined;
    ospedale_altro?: string | null | undefined;
    ospedale_diagnosi?: string | null | undefined;
    ospedale_prognosi?: string | null | undefined;
    ospedale_referto?: string | null | undefined;
    ospedale_referto_rilasciato_da?: string | null | undefined;
    ospedale_ricoverato?: string | null | undefined;
    residente_citta_altro?: string | null | undefined;
    residente_indirizzo?: string | null | undefined;
    rifiuta_cure_immediate?: boolean | null | undefined;
    scheda_118?: number | null | undefined;
    trasportato_richiesta?: string | null | undefined;
    trasportato_targa_auto?: string | null | undefined;
    conducente?:
      | {
          __typename?: 'conducente' | undefined;
          id: number;
          nome?: string | null | undefined;
          cognome?: string | null | undefined;
          nascita_data?: any;
          nascita_citta_altro?: string | null | undefined;
          titolo?:
            | { __typename?: '_titolo_sis' | undefined; nome: string }
            | null
            | undefined;
          nascita_citta?:
            | {
                __typename?: '_citta' | undefined;
                citta?: string | null | undefined;
                p_abbreviazione?: string | null | undefined;
              }
            | null
            | undefined;
        }
      | null
      | undefined;
    informazioni: {
      __typename?: 'associazione_informazioni_infortunato' | undefined;
      id: number;
      informazione: {
        __typename?: '_infortunato_informazione' | undefined;
        id: number;
        nome?: string | null | undefined;
      };
    }[];
    nascita_citta?:
      | {
          __typename?: '_citta' | undefined;
          citta?: string | null | undefined;
          id: number;
          codice?: string | null | undefined;
          provincia?: string | null | undefined;
          p_abbreviazione?: string | null | undefined;
          regione?: string | null | undefined;
        }
      | null
      | undefined;
    pedone?:
      | {
          __typename?: 'pedone' | undefined;
          id: number;
          nome?: string | null | undefined;
          cognome?: string | null | undefined;
          nascita_data?: any;
          nascita_citta_altro?: string | null | undefined;
          titolo?:
            | { __typename?: '_titolo_sis' | undefined; nome: string }
            | null
            | undefined;
          nascita_citta?:
            | {
                __typename?: '_citta' | undefined;
                citta?: string | null | undefined;
                p_abbreviazione?: string | null | undefined;
              }
            | null
            | undefined;
        }
      | null
      | undefined;
    residente_citta?:
      | {
          __typename?: '_citta' | undefined;
          citta?: string | null | undefined;
          codice?: string | null | undefined;
          id: number;
          p_abbreviazione?: string | null | undefined;
          provincia?: string | null | undefined;
          regione?: string | null | undefined;
        }
      | null
      | undefined;
    sesso?:
      | { __typename?: '_sesso' | undefined; id: number; nome: string }
      | null
      | undefined;
    titolo?:
      | { __typename?: '_titolo_sis' | undefined; id: number; nome: string }
      | null
      | undefined;
    trasportato?:
      | {
          __typename?: 'trasportato' | undefined;
          id: number;
          nome?: string | null | undefined;
          cognome?: string | null | undefined;
          nascita_data?: any;
          nascita_citta_altro?: string | null | undefined;
          titolo?:
            | { __typename?: '_titolo_sis' | undefined; nome: string }
            | null
            | undefined;
          nascita_citta?:
            | {
                __typename?: '_citta' | undefined;
                citta?: string | null | undefined;
                p_abbreviazione?: string | null | undefined;
              }
            | null
            | undefined;
        }
      | null
      | undefined;
    trasportato_ambulanza?:
      | {
          __typename?: '_intortunato_tasportato' | undefined;
          id: number;
          nome: string;
        }
      | null
      | undefined;
    veicolo?:
      | {
          __typename?: 'veicolo' | undefined;
          id: number;
          marca?: string | null | undefined;
          modello?: string | null | undefined;
          targa?: string | null | undefined;
        }
      | null
      | undefined;
  }[];
  municipalita?:
    | { __typename?: 'municipalita' | undefined; id: number; nome: string }
    | null
    | undefined;
  quartiere?:
    | {
        __typename?: 'quartiere' | undefined;
        id: number;
        nome: string;
        municipalita: {
          __typename?: 'assegnazione_quartiere' | undefined;
          municipalita_id: number;
        }[];
      }
    | null
    | undefined;
  toponimo?:
    | {
        __typename?: 'toponimo' | undefined;
        id: number;
        nome: string;
        codice?: string | null | undefined;
        dug?:
          | { __typename?: 'dug' | undefined; id: number; nome: string }
          | null
          | undefined;
        assegnazioni: {
          __typename?: 'assegnazione_toponimo' | undefined;
          quartiere_id: number;
        }[];
      }
    | null
    | undefined;
  accertamenti: {
    __typename?: 'accertamento' | undefined;
    centro_abitato?: boolean | null | undefined;
    condizioni_meteo_illuminazione?: string | null | undefined;
    condizioni_meteo_tempo?: string | null | undefined;
    condizioni_meteo_visibilita_limitata?: string | null | undefined;
    condizioni_meteo_visibilita_limitata_tipologia_metri?:
      | string
      | null
      | undefined;
    data?: any;
    descrizione_piano_note?: string | null | undefined;
    descrizione_piano_pavimentazione?: string | null | undefined;
    descrizione_piano_stato_fondo?: string | null | undefined;
    direzione_a?: string | null | undefined;
    direzione_da?: string | null | undefined;
    id: number;
    segnaletica?: string | null | undefined;
    tipologia_strada_carreggiate?: string | null | undefined;
    tipologia_strada_carreggiate_n?: string | null | undefined;
    tipologia_strada_conformazione?: string | null | undefined;
    traffico?: string | null | undefined;
    condizioni_meteo_visibilita_limitata_tipologia: {
      __typename?:
        | 'assegnazione_condizioni_meteo_visibilita_limitata_tipologia'
        | undefined;
      id: number;
      condizioni_meteo_visibilita_limitata_tipologia: {
        __typename?:
          | '_condizioni_meteo_visibilita_limitata_tipologia'
          | undefined;
        id: number;
        nome: string;
      };
    }[];
  }[];
  altri: {
    __typename?: 'altro' | undefined;
    id: number;
    note?: string | null | undefined;
  }[];
  conducenti: {
    __typename?: 'conducente' | undefined;
    cap_numero?: string | null | undefined;
    cap_rilasciata_da_ddt?: string | null | undefined;
    cap_rilasciata_da_ddt_data?: any;
    cap_tipo?: string | null | undefined;
    cognome?: string | null | undefined;
    id: number;
    nascita_citta_altro?: string | null | undefined;
    nascita_data?: any;
    nome?: string | null | undefined;
    osservazioni_note?: string | null | undefined;
    patente_altro_note?: string | null | undefined;
    patente_categoria_altro?: string | null | undefined;
    patente_numero?: string | null | undefined;
    patente_prescrizioni?: string | null | undefined;
    patente_rilasciata_da?: string | null | undefined;
    patente_rilasciata_data?: any;
    patente_rilasciata_valida_data?: any;
    professione?: string | null | undefined;
    prova_etilometro?: boolean | null | undefined;
    prova_etilometro_esito?: string | null | undefined;
    prova_narcotest?: boolean | null | undefined;
    prova_narcotest_esito?: string | null | undefined;
    residente_citta_altro?: string | null | undefined;
    residente_indirizzo?: string | null | undefined;
    richiesta_esami?: boolean | null | undefined;
    richiesta_esami_effettuati_presso?: string | null | undefined;
    telefono?: string | null | undefined;
    nascita_citta?:
      | {
          __typename?: '_citta' | undefined;
          citta?: string | null | undefined;
          codice?: string | null | undefined;
          p_abbreviazione?: string | null | undefined;
          id: number;
          provincia?: string | null | undefined;
          regione?: string | null | undefined;
        }
      | null
      | undefined;
    patente_rilasciata_da_citta?:
      | {
          __typename?: '_citta' | undefined;
          citta?: string | null | undefined;
          codice?: string | null | undefined;
          id: number;
          p_abbreviazione?: string | null | undefined;
          provincia?: string | null | undefined;
          regione?: string | null | undefined;
        }
      | null
      | undefined;
    patente_sinoaltro?:
      | { __typename?: '_sinoaltro' | undefined; id: number; nome: string }
      | null
      | undefined;
    residente_citta?:
      | {
          __typename?: '_citta' | undefined;
          citta?: string | null | undefined;
          codice?: string | null | undefined;
          id: number;
          p_abbreviazione?: string | null | undefined;
          provincia?: string | null | undefined;
          regione?: string | null | undefined;
        }
      | null
      | undefined;
    sesso?:
      | { __typename?: '_sesso' | undefined; id: number; nome: string }
      | null
      | undefined;
    titolo?:
      | { __typename?: '_titolo_sis' | undefined; id: number; nome: string }
      | null
      | undefined;
    patente: {
      __typename?: 'associazione_patente' | undefined;
      id: number;
      patente_categoria: {
        __typename?: '_patente_categoria' | undefined;
        id: number;
        nome?: string | null | undefined;
      };
    }[];
  }[];
  conseguenze_veicolo: {
    __typename?: 'associazione_conseguenza_veicolo' | undefined;
    id: number;
    conseguenza_veicolo: {
      __typename?: '_conseguenza_veicolo' | undefined;
      nome?: string | null | undefined;
      id: number;
    };
  }[];
  decessi_tipologie: {
    __typename?: 'associazione_decessi_tipologie' | undefined;
    id: number;
    decessi_tipologia: {
      __typename?: '_decessi_tipologia' | undefined;
      id: number;
      nome: string;
    };
  }[];
  enti_primo_intervento: {
    __typename?: 'associazione_ente_primo_intervento' | undefined;
    id: number;
    targa_auto?: string | null | undefined;
    tipo?: string | null | undefined;
    ente: {
      __typename?: '_ente' | undefined;
      nome?: string | null | undefined;
      id: number;
    };
  }[];
  enti_secondario_intervenuti: {
    __typename?: 'associazione_ente_secondario_intervenuti' | undefined;
    id: number;
    ente_secondario: {
      __typename?: '_ente_secondario' | undefined;
      id: number;
      nome?: string | null | undefined;
    };
  }[];
  enti_segnalatori: {
    __typename?: 'associazione_ente_segnalatore' | undefined;
    id: number;
    ente: {
      __typename?: '_ente' | undefined;
      id: number;
      label_tipo?: string | null | undefined;
      nome?: string | null | undefined;
      abbreviazione?: string | null | undefined;
    };
  }[];
  eventi: {
    __typename?: 'evento_sis' | undefined;
    stato: _Stato_Ris_Enum;
    note?: string | null | undefined;
    motivazione_cancellazione?: string | null | undefined;
    created_at: any;
    cancellatore?: any;
    protocollo?:
      | {
          __typename?: 'protocollo_sis' | undefined;
          numero?: string | null | undefined;
          data?: any;
          note?: string | null | undefined;
        }
      | null
      | undefined;
  }[];
  impianti_semaforici: {
    __typename?: 'associazione_impianto_semaforico' | undefined;
    id: number;
    impianto_semaforico: {
      __typename?: '_impianto_semaforico' | undefined;
      id: number;
      nome?: string | null | undefined;
    };
  }[];
  infrazioni: {
    __typename?: 'infrazione' | undefined;
    verbale_n?: string | null | undefined;
    verbale_data?: any;
    art_80_data?: any;
    art_80_dtt?: string | null | undefined;
    articolo?: string | null | undefined;
    data_trasmissione_rapporto?: any;
    id: number;
    note?: string | null | undefined;
    uffici_provinciale?: string | null | undefined;
    utg_prefettura?: string | null | undefined;
    conducente?:
      | {
          __typename?: 'conducente' | undefined;
          cognome?: string | null | undefined;
          id: number;
          nascita_citta_altro?: string | null | undefined;
          nascita_data?: any;
          nome?: string | null | undefined;
          patente_altro_note?: string | null | undefined;
          patente_categoria_altro?: string | null | undefined;
          patente_numero?: string | null | undefined;
          patente_prescrizioni?: string | null | undefined;
          patente_rilasciata_da?: string | null | undefined;
          patente_rilasciata_data?: any;
          patente_rilasciata_valida_data?: any;
          residente_citta_altro?: string | null | undefined;
          residente_indirizzo?: string | null | undefined;
          telefono?: string | null | undefined;
          nascita_citta?:
            | {
                __typename?: '_citta' | undefined;
                citta?: string | null | undefined;
                codice?: string | null | undefined;
                p_abbreviazione?: string | null | undefined;
                id: number;
                provincia?: string | null | undefined;
                regione?: string | null | undefined;
              }
            | null
            | undefined;
          patente_rilasciata_da_citta?:
            | {
                __typename?: '_citta' | undefined;
                citta?: string | null | undefined;
                codice?: string | null | undefined;
                id: number;
                p_abbreviazione?: string | null | undefined;
                provincia?: string | null | undefined;
                regione?: string | null | undefined;
              }
            | null
            | undefined;
          patente_sinoaltro?:
            | {
                __typename?: '_sinoaltro' | undefined;
                id: number;
                nome: string;
              }
            | null
            | undefined;
          residente_citta?:
            | {
                __typename?: '_citta' | undefined;
                citta?: string | null | undefined;
                codice?: string | null | undefined;
                id: number;
                p_abbreviazione?: string | null | undefined;
                provincia?: string | null | undefined;
                regione?: string | null | undefined;
              }
            | null
            | undefined;
          sesso?:
            | { __typename?: '_sesso' | undefined; id: number; nome: string }
            | null
            | undefined;
          titolo?:
            | {
                __typename?: '_titolo_sis' | undefined;
                id: number;
                nome: string;
              }
            | null
            | undefined;
          patente: {
            __typename?: 'associazione_patente' | undefined;
            id: number;
            patente_categoria: {
              __typename?: '_patente_categoria' | undefined;
              id: number;
              nome?: string | null | undefined;
            };
          }[];
        }
      | null
      | undefined;
    pedone?:
      | {
          __typename?: 'pedone' | undefined;
          id: number;
          nome?: string | null | undefined;
          cognome?: string | null | undefined;
          nascita_data?: any;
          telefono?: string | null | undefined;
          nascita_citta_altro?: string | null | undefined;
          residente_citta_altro?: string | null | undefined;
          residente_indirizzo?: string | null | undefined;
          documento_numero?: string | null | undefined;
          documento_rilasciato_da?: string | null | undefined;
          documento_rilasciato_data?: any;
          documento_tipo?: string | null | undefined;
          titolo?:
            | { __typename?: '_titolo_sis' | undefined; nome: string }
            | null
            | undefined;
          nascita_citta?:
            | {
                __typename?: '_citta' | undefined;
                citta?: string | null | undefined;
                p_abbreviazione?: string | null | undefined;
              }
            | null
            | undefined;
          sesso?:
            | { __typename?: '_sesso' | undefined; id: number; nome: string }
            | null
            | undefined;
          residente_citta?:
            | {
                __typename?: '_citta' | undefined;
                citta?: string | null | undefined;
                codice?: string | null | undefined;
                id: number;
                p_abbreviazione?: string | null | undefined;
                provincia?: string | null | undefined;
                regione?: string | null | undefined;
              }
            | null
            | undefined;
          documento_rilasciato_da_citta?:
            | {
                __typename?: '_citta' | undefined;
                id: number;
                citta?: string | null | undefined;
                codice?: string | null | undefined;
                p_abbreviazione?: string | null | undefined;
                provincia?: string | null | undefined;
                regione?: string | null | undefined;
              }
            | null
            | undefined;
        }
      | null
      | undefined;
    veicolo?:
      | {
          __typename?: 'veicolo' | undefined;
          id: number;
          colore_carrozzeria?: string | null | undefined;
          marca?: string | null | undefined;
          modello?: string | null | undefined;
          targa?: string | null | undefined;
          telaio?: string | null | undefined;
          nazione?:
            | {
                __typename?: '_nazione_sis' | undefined;
                nome?: string | null | undefined;
              }
            | null
            | undefined;
        }
      | null
      | undefined;
  }[];
  localizzazioni_altro: {
    __typename?: 'associazione_localizzazione_altro' | undefined;
    id: number;
    localizzazione_altro: {
      __typename?: '_localizzazione_altro' | undefined;
      id: number;
      nome?: string | null | undefined;
    };
  }[];
  localizzazioni_condizioni_atmosferiche: {
    __typename?:
      | 'associazione_localizzazione_condizioni_atmosferiche'
      | undefined;
    id: number;
    localizzazione_condizioni_atmosferiche: {
      __typename?: '_localizzazione_condizioni_atmosferiche' | undefined;
      id: number;
      nome?: string | null | undefined;
    };
  }[];
  localizzazioni_condizioni_traffico: {
    __typename?: 'associzione_localizzazione_condizioni_traffico' | undefined;
    id: number;
    localizzazione_condizioni_traffico: {
      __typename?: '_localizzazione_condizioni_traffico' | undefined;
      id: number;
      nome?: string | null | undefined;
    };
  }[];
  localizzazioni_extra_abitato: {
    __typename?: 'associazione_localizzazione_extra_abitato' | undefined;
    id: number;
    localizzazione_extra_abitato: {
      __typename?: '_localizzazione_extra_abitato' | undefined;
      id: number;
      nome?: string | null | undefined;
    };
  }[];
  localizzazioni_fondo_stradale: {
    __typename?: 'associazione_localizzazione_fondo_stradale' | undefined;
    id: number;
    localizzazione_fondo_stradale: {
      __typename?: '_localizzazione_fondo_stradale' | undefined;
      id: number;
      nome?: string | null | undefined;
    };
  }[];
  localizzazioni_illuminazione: {
    __typename?: 'associazione_localizzazione_illuminazione' | undefined;
    id: number;
    localizzazione_illuminazione: {
      __typename?: '_localizzazione_illuminazione' | undefined;
      id: number;
      nome?: string | null | undefined;
    };
  }[];
  localizzazioni_particolarita_strada: {
    __typename?: 'associazione_localizzazione_particolarita_strada' | undefined;
    id: number;
    localizzazione_particolarita_strada: {
      __typename?: '_localizzazione_particolarita_strada' | undefined;
      id: number;
      nome?: string | null | undefined;
    };
  }[];
  localizzazioni_pavimentazione: {
    __typename?: 'associazione_localizzazione_pavimentazione' | undefined;
    id: number;
    localizzazione_pavimentazione: {
      __typename?: '_localizzazione_pavimentazione' | undefined;
      id: number;
      nome?: string | null | undefined;
    };
  }[];
  localizzazioni_tipo_strade: {
    __typename?: 'associazione_localizzazione_tipo_strada' | undefined;
    id: number;
    localizzazione_tipo_strada: {
      __typename?: '_localizzazione_tipo_strada' | undefined;
      id: number;
      nome?: string | null | undefined;
    };
  }[];
  localizzazioni_visibilita: {
    __typename?: 'associazione_localizzazione_visibilita' | undefined;
    id: number;
    localizzazione_visibilitum: {
      __typename?: '_localizzazione_visibilita' | undefined;
      nome?: string | null | undefined;
      id: number;
    };
  }[];
  locatari: {
    __typename?: 'locatario' | undefined;
    id: number;
    nome?: string | null | undefined;
    cognome?: string | null | undefined;
    telefono?: string | null | undefined;
    residente_indirizzo?: string | null | undefined;
    residente_citta_altro?: string | null | undefined;
    nascita_data?: any;
    nascita_citta_altro?: string | null | undefined;
    titolo?:
      | { __typename?: '_titolo_sis' | undefined; id: number; nome: string }
      | null
      | undefined;
    sesso?:
      | { __typename?: '_sesso' | undefined; id: number; nome: string }
      | null
      | undefined;
    residente_citta?:
      | {
          __typename?: '_citta' | undefined;
          citta?: string | null | undefined;
          codice?: string | null | undefined;
          id: number;
          p_abbreviazione?: string | null | undefined;
          provincia?: string | null | undefined;
          regione?: string | null | undefined;
        }
      | null
      | undefined;
    nascita_citta?:
      | {
          __typename?: '_citta' | undefined;
          citta?: string | null | undefined;
          codice?: string | null | undefined;
          id: number;
          p_abbreviazione?: string | null | undefined;
          provincia?: string | null | undefined;
          regione?: string | null | undefined;
        }
      | null
      | undefined;
  }[];
  nature_incidente: {
    __typename?: 'associazione_natura_incidente' | undefined;
    id: number;
    natura_incidente: {
      __typename?: '_natura_incidente' | undefined;
      id: number;
      nome?: string | null | undefined;
    };
  }[];
  pedoni: {
    __typename?: 'pedone' | undefined;
    id: number;
    nome?: string | null | undefined;
    cognome?: string | null | undefined;
    nascita_data?: any;
    nascita_citta_altro?: string | null | undefined;
    documento_numero?: string | null | undefined;
    documento_rilasciato_da?: string | null | undefined;
    documento_rilasciato_data?: any;
    documento_tipo?: string | null | undefined;
    residente_citta_altro?: string | null | undefined;
    residente_indirizzo?: string | null | undefined;
    telefono?: string | null | undefined;
    titolo?:
      | { __typename?: '_titolo_sis' | undefined; nome: string; id: number }
      | null
      | undefined;
    nascita_citta?:
      | {
          __typename?: '_citta' | undefined;
          citta?: string | null | undefined;
          p_abbreviazione?: string | null | undefined;
          codice?: string | null | undefined;
          provincia?: string | null | undefined;
          regione?: string | null | undefined;
          id: number;
        }
      | null
      | undefined;
    documento_rilasciato_da_citta?:
      | {
          __typename?: '_citta' | undefined;
          id: number;
          citta?: string | null | undefined;
          codice?: string | null | undefined;
          p_abbreviazione?: string | null | undefined;
          provincia?: string | null | undefined;
          regione?: string | null | undefined;
        }
      | null
      | undefined;
    residente_citta?:
      | {
          __typename?: '_citta' | undefined;
          citta?: string | null | undefined;
          codice?: string | null | undefined;
          id: number;
          p_abbreviazione?: string | null | undefined;
          provincia?: string | null | undefined;
          regione?: string | null | undefined;
        }
      | null
      | undefined;
    sesso?:
      | { __typename?: '_sesso' | undefined; id: number; nome: string }
      | null
      | undefined;
  }[];
  posizionamento_toponimo?:
    | {
        __typename?: 'posizionamento_toponimo_sis' | undefined;
        civico?: string | null | undefined;
        connessione?: string | null | undefined;
        geoloc?: any;
        id: number;
        ipi?: string | null | undefined;
        km?: string | null | undefined;
        note?: string | null | undefined;
        specifica?:
          | {
              __typename?: '_specifica_posizionamento_toponimo_sis' | undefined;
              id: number;
              nome: string;
            }
          | null
          | undefined;
        tipologia?:
          | {
              __typename?: '_tipologia_posizionamento_toponimo_sis' | undefined;
              id: number;
              nome: string;
            }
          | null
          | undefined;
      }
    | null
    | undefined;
  posizione_statica_rilievi_no_tipologia?:
    | {
        __typename?: '_punti_rilievi_no_tipologia' | undefined;
        id: number;
        nome: string;
      }
    | null
    | undefined;
  posizioni_finali_veicolo_carreggiata: {
    __typename?:
      | 'associazione_posizione_finale_veicolo_carreggiata'
      | undefined;
    id: number;
    posizione_finale_veicolo_carreggiata: {
      __typename?: '_posizione_finale_veicolo_carreggiata' | undefined;
      id: number;
      nome?: string | null | undefined;
    };
  }[];
  posizioni_finali_veicolo_fuori_sede: {
    __typename?: 'associazione_posizione_finale_veicolo_fuori_sede' | undefined;
    id: number;
    posizione_finale_veicolo_fuori_sede: {
      __typename?: '_posizione_finale_veicolo_fuori_sede' | undefined;
      id: number;
      nome?: string | null | undefined;
    };
  }[];
  posizioni_finali_veicolo_margini: {
    __typename?: 'associazione_posizione_finale_veicolo_margini' | undefined;
    id: number;
    posizione_finale_veicolo_margini: {
      __typename?: '_posizione_finale_veicolo_margini' | undefined;
      id: number;
      nome?: string | null | undefined;
    };
  }[];
  proprietari: {
    __typename?: 'proprietario' | undefined;
    cognome?: string | null | undefined;
    id: number;
    nascita_citta_altro?: string | null | undefined;
    nascita_data?: any;
    nome?: string | null | undefined;
    residente_citta_altro?: string | null | undefined;
    residente_indirizzo?: string | null | undefined;
    telefono?: string | null | undefined;
    nascita_citta?:
      | {
          __typename?: '_citta' | undefined;
          citta?: string | null | undefined;
          codice?: string | null | undefined;
          id: number;
          p_abbreviazione?: string | null | undefined;
          provincia?: string | null | undefined;
          regione?: string | null | undefined;
        }
      | null
      | undefined;
    residente_citta?:
      | {
          __typename?: '_citta' | undefined;
          citta?: string | null | undefined;
          codice?: string | null | undefined;
          id: number;
          p_abbreviazione?: string | null | undefined;
          provincia?: string | null | undefined;
          regione?: string | null | undefined;
        }
      | null
      | undefined;
    sesso?:
      | { __typename?: '_sesso' | undefined; id: number; nome: string }
      | null
      | undefined;
    titolo?:
      | { __typename?: '_titolo_sis' | undefined; id: number; nome: string }
      | null
      | undefined;
  }[];
  proprietari_giuridico: {
    __typename?: 'proprietario_giuridico' | undefined;
    citta_altro?: string | null | undefined;
    codice_fiscale?: string | null | undefined;
    id: number;
    indirizzo?: string | null | undefined;
    partita_iva?: string | null | undefined;
    ragione_sociale?: string | null | undefined;
    telefono?: string | null | undefined;
    citta?:
      | {
          __typename?: '_citta' | undefined;
          citta?: string | null | undefined;
          codice?: string | null | undefined;
          id: number;
          p_abbreviazione?: string | null | undefined;
          provincia?: string | null | undefined;
          regione?: string | null | undefined;
        }
      | null
      | undefined;
  }[];
  protocollo?:
    | {
        __typename?: 'protocollo_sis' | undefined;
        note?: string | null | undefined;
        numero?: string | null | undefined;
        id: number;
        data?: any;
        mittente?:
          | {
              __typename?: '_sezione_protocollo_sis' | undefined;
              id: number;
              nome: string;
              sigla: string;
              codice: string;
            }
          | null
          | undefined;
        destinatari: {
          __typename?: 'protocollo_destinatario_sis' | undefined;
          id: number;
          e_esterno: boolean;
          destinatario_interno?:
            | {
                __typename?: '_sezione_protocollo_sis' | undefined;
                id: number;
                nome: string;
                codice: string;
                sigla: string;
              }
            | null
            | undefined;
          destinatario_esterno?:
            | {
                __typename?: 'protocollo_destinatario_esterno_sis' | undefined;
                id: number;
                cognome?: string | null | undefined;
                email?: string | null | undefined;
                codice_fiscale?: string | null | undefined;
                nome?: string | null | undefined;
              }
            | null
            | undefined;
        }[];
      }
    | null
    | undefined;
  punti_rilievi_no_tipologia?:
    | {
        __typename?: '_punti_rilievi_no_tipologia' | undefined;
        id: number;
        nome: string;
      }
    | null
    | undefined;
  ris_consegnato_a?:
    | { __typename?: '_ris_consegnato_a' | undefined; id: number; nome: string }
    | null
    | undefined;
  testimoni: {
    __typename?: 'testimone' | undefined;
    cognome?: string | null | undefined;
    documento_numero?: string | null | undefined;
    documento_rilasciato_da?: string | null | undefined;
    documento_rilasciato_data?: any;
    documento_tipo?: string | null | undefined;
    id: number;
    nascita_citta_altro?: string | null | undefined;
    nascita_data?: any;
    nome?: string | null | undefined;
    residente_citta_altro?: string | null | undefined;
    residente_indirizzo?: string | null | undefined;
    telefono?: string | null | undefined;
    documento_rilasciato_da_citta?:
      | {
          __typename?: '_citta' | undefined;
          citta?: string | null | undefined;
          codice?: string | null | undefined;
          id: number;
          p_abbreviazione?: string | null | undefined;
          regione?: string | null | undefined;
          provincia?: string | null | undefined;
        }
      | null
      | undefined;
    nascita_citta?:
      | {
          __typename?: '_citta' | undefined;
          citta?: string | null | undefined;
          codice?: string | null | undefined;
          id: number;
          p_abbreviazione?: string | null | undefined;
          provincia?: string | null | undefined;
          regione?: string | null | undefined;
        }
      | null
      | undefined;
    residente_citta?:
      | {
          __typename?: '_citta' | undefined;
          citta?: string | null | undefined;
          codice?: string | null | undefined;
          ordine?: number | null | undefined;
          p_abbreviazione?: string | null | undefined;
          provincia?: string | null | undefined;
          regione?: string | null | undefined;
        }
      | null
      | undefined;
    sesso?:
      | { __typename?: '_sesso' | undefined; id: number; nome: string }
      | null
      | undefined;
    titolo?:
      | { __typename?: '_titolo_sis' | undefined; id: number; nome: string }
      | null
      | undefined;
  }[];
  tipologie_ris: {
    __typename?: 'associazione_tipologia_ris' | undefined;
    id: number;
    tipologia: {
      __typename?: '_tipologia_ris' | undefined;
      id: number;
      nome?: string | null | undefined;
    };
  }[];
  trasportati: {
    __typename?: 'trasportato' | undefined;
    accertamento_attivazione_airbag?: boolean | null | undefined;
    accertamento_uso_casco?: boolean | null | undefined;
    accertamento_uso_cintura?: boolean | null | undefined;
    accertamento_uso_sistema_bambini?: boolean | null | undefined;
    cognome?: string | null | undefined;
    documento_numero?: string | null | undefined;
    documento_rilasciato_da?: string | null | undefined;
    documento_rilasciato_data?: any;
    documento_tipo?: string | null | undefined;
    id: number;
    nascita_citta_altro?: string | null | undefined;
    nascita_data?: any;
    nome?: string | null | undefined;
    residente_citta_altro?: string | null | undefined;
    residente_citta_id?: number | null | undefined;
    residente_indirizzo?: string | null | undefined;
    telefono?: string | null | undefined;
    documento_rilasciato_da_citta?:
      | {
          __typename?: '_citta' | undefined;
          citta?: string | null | undefined;
          codice?: string | null | undefined;
          id: number;
          p_abbreviazione?: string | null | undefined;
          provincia?: string | null | undefined;
          regione?: string | null | undefined;
        }
      | null
      | undefined;
    nascita_citta?:
      | {
          __typename?: '_citta' | undefined;
          codice?: string | null | undefined;
          citta?: string | null | undefined;
          id: number;
          p_abbreviazione?: string | null | undefined;
          provincia?: string | null | undefined;
          regione?: string | null | undefined;
        }
      | null
      | undefined;
    posizione?:
      | {
          __typename?: '_trasportato_posizione' | undefined;
          id: number;
          nome: string;
        }
      | null
      | undefined;
    residente_citta?:
      | {
          __typename?: '_citta' | undefined;
          citta?: string | null | undefined;
          codice?: string | null | undefined;
          id: number;
          p_abbreviazione?: string | null | undefined;
          provincia?: string | null | undefined;
          regione?: string | null | undefined;
        }
      | null
      | undefined;
    sesso?:
      | { __typename?: '_sesso' | undefined; id: number; nome: string }
      | null
      | undefined;
    stato?:
      | {
          __typename?: '_trasportato_stato' | undefined;
          id: number;
          nome: string;
        }
      | null
      | undefined;
    titolo?:
      | { __typename?: '_titolo_sis' | undefined; id: number; nome: string }
      | null
      | undefined;
  }[];
  veicoli: {
    __typename?: 'veicolo' | undefined;
    accertamenti_abs?: boolean | null | undefined;
    accertamenti_attivazione?: boolean | null | undefined;
    accertamenti_uso_casco_altro_note?: string | null | undefined;
    accertamenti_uso_cintura_altro_note?: string | null | undefined;
    accertamento_uso_antiabbandono_altro_note?: string | null | undefined;
    accertamento_uso_sistema_bambini_altro_note?: string | null | undefined;
    alimentazione_note?: string | null | undefined;
    anno_prima_immatricolazione?: string | null | undefined;
    assicurazione_agenzia?: string | null | undefined;
    assicurazione_altro_note?: string | null | undefined;
    assicurazione_data_fine?: any;
    assicurazione_data_inizio?: any;
    assicurazione_polizza?: string | null | undefined;
    assicurazione_societa?: string | null | undefined;
    carta_circolazione?: string | null | undefined;
    carta_circolazione_altro_note?: string | null | undefined;
    carta_circolazione_data?: any;
    carta_circolazione_ddt?: string | null | undefined;
    carta_circolazione_ril?: string | null | undefined;
    cilindrata?: string | null | undefined;
    codice_merce_pericolasa?: string | null | undefined;
    codice_pericolo?: string | null | undefined;
    colore_carrozzeria?: string | null | undefined;
    danni_del_veicolo_a_cose?: string | null | undefined;
    danni_del_veicolo_a_cose_rilievo?: boolean | null | undefined;
    danni_del_veicolo_a_cose_rilievo_data_fine?: string | null | undefined;
    danni_del_veicolo_a_cose_rilievo_data_inizio?: string | null | undefined;
    danni_del_veicolo_a_cose_rilievo_difensore?: boolean | null | undefined;
    danni_del_veicolo_a_cose_rilievo_presente?: boolean | null | undefined;
    danni_su_veicolo_constatati?: string | null | undefined;
    data_ultima_revisione?: any;
    destinazione_data?: any;
    destinazione_decisione_altro?: string | null | undefined;
    destinazione_decisione_id?: number | null | undefined;
    destinazione_persona_affidataria?: string | null | undefined;
    destinazione_ritirato?: boolean | null | undefined;
    destinazione_sequestrato?: boolean | null | undefined;
    destinazione_trasportato_presso?: string | null | undefined;
    dispositivi_acustici?: string | null | undefined;
    dotazione_airbag?: boolean | null | undefined;
    dotazione_cinture?: boolean | null | undefined;
    generale?: string | null | undefined;
    id: number;
    impianto_illuminazione?: string | null | undefined;
    indicatori_direzione?: string | null | undefined;
    km_percorsi?: string | null | undefined;
    luci_arresto?: string | null | undefined;
    marca?: string | null | undefined;
    marcia_inserita?: string | null | undefined;
    modello?: string | null | undefined;
    p_c?: string | null | undefined;
    p_u?: string | null | undefined;
    peso?: string | null | undefined;
    posti?: string | null | undefined;
    stato_pneumatici?: string | null | undefined;
    tara?: string | null | undefined;
    targa?: string | null | undefined;
    telaio?: string | null | undefined;
    tipologia_veicolo_note?: string | null | undefined;
    traccia_suolo?: boolean | null | undefined;
    traccia_suolo_abs?: boolean | null | undefined;
    traccia_suolo_metri?: string | null | undefined;
    traccia_suolo_terminazione_metri?: string | null | undefined;
    velocita_presunta?: string | null | undefined;
    accertamenti_uso_casco_sinoaltro?:
      | { __typename?: '_sinoaltro' | undefined; id: number; nome: string }
      | null
      | undefined;
    accertamenti_uso_cintura_sinoaltro?:
      | { __typename?: '_sinoaltro' | undefined; id: number; nome: string }
      | null
      | undefined;
    accertamento_uso_antiabbandono_sinoaltro?:
      | { __typename?: '_sinoaltro' | undefined; id: number; nome: string }
      | null
      | undefined;
    accertamento_uso_sistema_bambini_sinoaltro?:
      | { __typename?: '_sinoaltro' | undefined; id: number; nome: string }
      | null
      | undefined;
    alimentazione?:
      | {
          __typename?: '_alimentazione_veicolo' | undefined;
          id: number;
          nome: string;
        }
      | null
      | undefined;
    assicurazione_sinoaltro?:
      | { __typename?: '_sinoaltro' | undefined; id: number; nome: string }
      | null
      | undefined;
    carta_circolazione_sinoaltro?:
      | { __typename?: '_sinoaltro' | undefined; id: number; nome: string }
      | null
      | undefined;
    conducente?:
      | {
          __typename?: 'conducente' | undefined;
          cap_numero?: string | null | undefined;
          cap_rilasciata_da_ddt?: string | null | undefined;
          cap_rilasciata_da_ddt_data?: any;
          cap_tipo?: string | null | undefined;
          cognome?: string | null | undefined;
          id: number;
          nascita_citta_altro?: string | null | undefined;
          nascita_data?: any;
          nome?: string | null | undefined;
          osservazioni_note?: string | null | undefined;
          patente_altro_note?: string | null | undefined;
          patente_categoria_altro?: string | null | undefined;
          patente_numero?: string | null | undefined;
          patente_prescrizioni?: string | null | undefined;
          patente_rilasciata_da?: string | null | undefined;
          patente_rilasciata_data?: any;
          patente_rilasciata_valida_data?: any;
          professione?: string | null | undefined;
          prova_etilometro?: boolean | null | undefined;
          prova_etilometro_esito?: string | null | undefined;
          prova_narcotest?: boolean | null | undefined;
          prova_narcotest_esito?: string | null | undefined;
          residente_citta_altro?: string | null | undefined;
          residente_indirizzo?: string | null | undefined;
          richiesta_esami?: boolean | null | undefined;
          richiesta_esami_effettuati_presso?: string | null | undefined;
          telefono?: string | null | undefined;
          nascita_citta?:
            | {
                __typename?: '_citta' | undefined;
                citta?: string | null | undefined;
                codice?: string | null | undefined;
                p_abbreviazione?: string | null | undefined;
                id: number;
                provincia?: string | null | undefined;
                regione?: string | null | undefined;
              }
            | null
            | undefined;
          patente_rilasciata_da_citta?:
            | {
                __typename?: '_citta' | undefined;
                citta?: string | null | undefined;
                codice?: string | null | undefined;
                id: number;
                p_abbreviazione?: string | null | undefined;
                provincia?: string | null | undefined;
                regione?: string | null | undefined;
              }
            | null
            | undefined;
          patente_sinoaltro?:
            | {
                __typename?: '_sinoaltro' | undefined;
                id: number;
                nome: string;
              }
            | null
            | undefined;
          residente_citta?:
            | {
                __typename?: '_citta' | undefined;
                citta?: string | null | undefined;
                codice?: string | null | undefined;
                id: number;
                p_abbreviazione?: string | null | undefined;
                provincia?: string | null | undefined;
                regione?: string | null | undefined;
              }
            | null
            | undefined;
          sesso?:
            | { __typename?: '_sesso' | undefined; id: number; nome: string }
            | null
            | undefined;
          titolo?:
            | {
                __typename?: '_titolo_sis' | undefined;
                id: number;
                nome: string;
              }
            | null
            | undefined;
          patente: {
            __typename?: 'associazione_patente' | undefined;
            id: number;
            patente_categoria: {
              __typename?: '_patente_categoria' | undefined;
              id: number;
              nome?: string | null | undefined;
            };
          }[];
        }
      | null
      | undefined;
    destinazione_decisione?:
      | {
          __typename?: '_destinazione_decisione' | undefined;
          id: number;
          nome: string;
        }
      | null
      | undefined;
    locatario?:
      | {
          __typename?: 'locatario' | undefined;
          id: number;
          nome?: string | null | undefined;
          cognome?: string | null | undefined;
          nascita_data?: any;
          nascita_citta_altro?: string | null | undefined;
          residente_citta_altro?: string | null | undefined;
          residente_indirizzo?: string | null | undefined;
          titolo?:
            | { __typename?: '_titolo_sis' | undefined; nome: string }
            | null
            | undefined;
          nascita_citta?:
            | {
                __typename?: '_citta' | undefined;
                citta?: string | null | undefined;
                p_abbreviazione?: string | null | undefined;
              }
            | null
            | undefined;
          residente_citta?:
            | {
                __typename?: '_citta' | undefined;
                citta?: string | null | undefined;
                codice?: string | null | undefined;
                id: number;
                p_abbreviazione?: string | null | undefined;
                provincia?: string | null | undefined;
                regione?: string | null | undefined;
              }
            | null
            | undefined;
        }
      | null
      | undefined;
    nazione?:
      | {
          __typename?: '_nazione_sis' | undefined;
          id: number;
          nome?: string | null | undefined;
        }
      | null
      | undefined;
    proprietario?:
      | {
          __typename?: 'proprietario' | undefined;
          id: number;
          nome?: string | null | undefined;
          cognome?: string | null | undefined;
          nascita_data?: any;
          nascita_citta_altro?: string | null | undefined;
          residente_citta_altro?: string | null | undefined;
          residente_indirizzo?: string | null | undefined;
          titolo?:
            | { __typename?: '_titolo_sis' | undefined; nome: string }
            | null
            | undefined;
          nascita_citta?:
            | {
                __typename?: '_citta' | undefined;
                citta?: string | null | undefined;
                p_abbreviazione?: string | null | undefined;
              }
            | null
            | undefined;
          residente_citta?:
            | {
                __typename?: '_citta' | undefined;
                citta?: string | null | undefined;
                codice?: string | null | undefined;
                id: number;
                p_abbreviazione?: string | null | undefined;
                provincia?: string | null | undefined;
                regione?: string | null | undefined;
              }
            | null
            | undefined;
        }
      | null
      | undefined;
    proprietario_giuridico?:
      | {
          __typename?: 'proprietario_giuridico' | undefined;
          id: number;
          ragione_sociale?: string | null | undefined;
          partita_iva?: string | null | undefined;
          codice_fiscale?: string | null | undefined;
          citta_altro?: string | null | undefined;
          citta?:
            | {
                __typename?: '_citta' | undefined;
                citta?: string | null | undefined;
                p_abbreviazione?: string | null | undefined;
              }
            | null
            | undefined;
        }
      | null
      | undefined;
    retrovisore_esterno?:
      | {
          __typename?: '_retrovisore_esterno' | undefined;
          id: number;
          nome: string;
        }
      | null
      | undefined;
    stato?:
      | { __typename?: '_stato_veicolo' | undefined; id: number; nome: string }
      | null
      | undefined;
    tipologia_veicolo?:
      | {
          __typename?: '_tipologia_veicolo' | undefined;
          id: number;
          nome?: string | null | undefined;
        }
      | null
      | undefined;
    traccia_suolo_frenata_tipologium?:
      | {
          __typename?: '_traccia_suolo_frenata_tipologia' | undefined;
          nome: string;
          id: number;
        }
      | null
      | undefined;
    traccia_suolo_terminazione?:
      | {
          __typename?: '_traccia_suolo_terminazione' | undefined;
          id: number;
          nome: string;
        }
      | null
      | undefined;
    traccia_suolo_terminazione_andamento?:
      | {
          __typename?: '_traccia_suolo_terminazione_andamento' | undefined;
          id: number;
          nome?: string | null | undefined;
        }
      | null
      | undefined;
    traccia_suolo_terminazione_forma?:
      | {
          __typename?: '_traccia_suolo_terminazione_forma' | undefined;
          id: number;
          nome?: string | null | undefined;
        }
      | null
      | undefined;
    traccia_suolo_terminazione_intensitum?:
      | {
          __typename?: '_traccia_suolo_terminazione_intensita' | undefined;
          id: number;
          nome?: string | null | undefined;
        }
      | null
      | undefined;
    traccia_suolo_terminazione_tipologium?:
      | {
          __typename?: '_traccia_suolo_terminazione_tipologia' | undefined;
          id: number;
          nome?: string | null | undefined;
        }
      | null
      | undefined;
    traccia_suolo_tipologium?:
      | {
          __typename?: '_traccia_suolo_tipologia' | undefined;
          id: number;
          nome: string;
        }
      | null
      | undefined;
    trasportati: {
      __typename?: 'trasportati_veicolo' | undefined;
      id: number;
      trasportato: {
        __typename?: 'trasportato' | undefined;
        id: number;
        nome?: string | null | undefined;
        cognome?: string | null | undefined;
        nascita_data?: any;
        nascita_citta_altro?: string | null | undefined;
        residente_citta_altro?: string | null | undefined;
        residente_indirizzo?: string | null | undefined;
        documento_numero?: string | null | undefined;
        documento_rilasciato_da?: string | null | undefined;
        documento_rilasciato_data?: any;
        documento_tipo?: string | null | undefined;
        accertamento_uso_cintura?: boolean | null | undefined;
        accertamento_uso_casco?: boolean | null | undefined;
        accertamento_attivazione_airbag?: boolean | null | undefined;
        accertamento_uso_sistema_bambini?: boolean | null | undefined;
        titolo?:
          | { __typename?: '_titolo_sis' | undefined; nome: string }
          | null
          | undefined;
        nascita_citta?:
          | {
              __typename?: '_citta' | undefined;
              citta?: string | null | undefined;
              p_abbreviazione?: string | null | undefined;
            }
          | null
          | undefined;
        residente_citta?:
          | {
              __typename?: '_citta' | undefined;
              citta?: string | null | undefined;
              codice?: string | null | undefined;
              id: number;
              p_abbreviazione?: string | null | undefined;
              provincia?: string | null | undefined;
              regione?: string | null | undefined;
            }
          | null
          | undefined;
        documento_rilasciato_da_citta?:
          | {
              __typename?: '_citta' | undefined;
              id: number;
              citta?: string | null | undefined;
              codice?: string | null | undefined;
              p_abbreviazione?: string | null | undefined;
              provincia?: string | null | undefined;
              regione?: string | null | undefined;
            }
          | null
          | undefined;
        posizione?:
          | {
              __typename?: '_trasportato_posizione' | undefined;
              id: number;
              nome: string;
            }
          | null
          | undefined;
        stato?:
          | {
              __typename?: '_trasportato_stato' | undefined;
              id: number;
              nome: string;
            }
          | null
          | undefined;
      };
    }[];
    uso_veicolo?:
      | { __typename?: '_uso_veicolo' | undefined; id: number; nome: string }
      | null
      | undefined;
  }[];
  verbali: {
    __typename?: 'verbale' | undefined;
    cellulare?: string | null | undefined;
    cognome?: string | null | undefined;
    coniugato?: number | null | undefined;
    data?: any;
    dichiarazione?: string | null | undefined;
    documento_numero?: string | null | undefined;
    documento_rilasciato_da?: string | null | undefined;
    documento_rilasciato_data?: any;
    documento_tipo?: string | null | undefined;
    id: number;
    motivazione_no_sottoscrizione?: string | null | undefined;
    nascita_citta_altro?: string | null | undefined;
    nascita_data?: any;
    nome?: string | null | undefined;
    professione?: string | null | undefined;
    residente_citta_altro?: string | null | undefined;
    residente_indirizzo?: string | null | undefined;
    telefono?: string | null | undefined;
    veicolo?:
      | {
          __typename?: 'veicolo' | undefined;
          id: number;
          marca?: string | null | undefined;
          modello?: string | null | undefined;
          targa?: string | null | undefined;
        }
      | null
      | undefined;
    conducente?:
      | {
          __typename?: 'conducente' | undefined;
          cognome?: string | null | undefined;
          id: number;
          nascita_citta_altro?: string | null | undefined;
          nascita_data?: any;
          nome?: string | null | undefined;
          patente_altro_note?: string | null | undefined;
          patente_categoria_altro?: string | null | undefined;
          patente_numero?: string | null | undefined;
          patente_prescrizioni?: string | null | undefined;
          patente_rilasciata_da?: string | null | undefined;
          patente_rilasciata_data?: any;
          patente_rilasciata_valida_data?: any;
          residente_citta_altro?: string | null | undefined;
          residente_indirizzo?: string | null | undefined;
          telefono?: string | null | undefined;
          nascita_citta?:
            | {
                __typename?: '_citta' | undefined;
                citta?: string | null | undefined;
                codice?: string | null | undefined;
                p_abbreviazione?: string | null | undefined;
                id: number;
                provincia?: string | null | undefined;
                regione?: string | null | undefined;
              }
            | null
            | undefined;
          patente_rilasciata_da_citta?:
            | {
                __typename?: '_citta' | undefined;
                citta?: string | null | undefined;
                codice?: string | null | undefined;
                id: number;
                p_abbreviazione?: string | null | undefined;
                provincia?: string | null | undefined;
                regione?: string | null | undefined;
              }
            | null
            | undefined;
          patente_sinoaltro?:
            | {
                __typename?: '_sinoaltro' | undefined;
                id: number;
                nome: string;
              }
            | null
            | undefined;
          residente_citta?:
            | {
                __typename?: '_citta' | undefined;
                citta?: string | null | undefined;
                codice?: string | null | undefined;
                id: number;
                p_abbreviazione?: string | null | undefined;
                provincia?: string | null | undefined;
                regione?: string | null | undefined;
              }
            | null
            | undefined;
          sesso?:
            | { __typename?: '_sesso' | undefined; id: number; nome: string }
            | null
            | undefined;
          titolo?:
            | {
                __typename?: '_titolo_sis' | undefined;
                id: number;
                nome: string;
              }
            | null
            | undefined;
          patente: {
            __typename?: 'associazione_patente' | undefined;
            id: number;
            patente_categoria: {
              __typename?: '_patente_categoria' | undefined;
              id: number;
              nome?: string | null | undefined;
            };
          }[];
        }
      | null
      | undefined;
    documento_rilasciato_da_citta?:
      | {
          __typename?: '_citta' | undefined;
          citta?: string | null | undefined;
          codice?: string | null | undefined;
          id: number;
          p_abbreviazione?: string | null | undefined;
          provincia?: string | null | undefined;
          regione?: string | null | undefined;
        }
      | null
      | undefined;
    locatario?:
      | {
          __typename?: 'locatario' | undefined;
          id: number;
          nome?: string | null | undefined;
          cognome?: string | null | undefined;
          telefono?: string | null | undefined;
          nascita_data?: any;
          nascita_citta_altro?: string | null | undefined;
          residente_citta_altro?: string | null | undefined;
          residente_indirizzo?: string | null | undefined;
          titolo?:
            | { __typename?: '_titolo_sis' | undefined; nome: string }
            | null
            | undefined;
          sesso?:
            | { __typename?: '_sesso' | undefined; id: number; nome: string }
            | null
            | undefined;
          nascita_citta?:
            | {
                __typename?: '_citta' | undefined;
                citta?: string | null | undefined;
                p_abbreviazione?: string | null | undefined;
              }
            | null
            | undefined;
          residente_citta?:
            | {
                __typename?: '_citta' | undefined;
                citta?: string | null | undefined;
                codice?: string | null | undefined;
                id: number;
                p_abbreviazione?: string | null | undefined;
                provincia?: string | null | undefined;
                regione?: string | null | undefined;
              }
            | null
            | undefined;
        }
      | null
      | undefined;
    nascita_citta?:
      | {
          __typename?: '_citta' | undefined;
          citta?: string | null | undefined;
          codice?: string | null | undefined;
          id: number;
          p_abbreviazione?: string | null | undefined;
          provincia?: string | null | undefined;
          regione?: string | null | undefined;
        }
      | null
      | undefined;
    pedone?:
      | {
          __typename?: 'pedone' | undefined;
          id: number;
          nome?: string | null | undefined;
          cognome?: string | null | undefined;
          nascita_data?: any;
          telefono?: string | null | undefined;
          nascita_citta_altro?: string | null | undefined;
          residente_citta_altro?: string | null | undefined;
          residente_indirizzo?: string | null | undefined;
          documento_numero?: string | null | undefined;
          documento_rilasciato_da?: string | null | undefined;
          documento_rilasciato_data?: any;
          documento_tipo?: string | null | undefined;
          titolo?:
            | { __typename?: '_titolo_sis' | undefined; nome: string }
            | null
            | undefined;
          nascita_citta?:
            | {
                __typename?: '_citta' | undefined;
                citta?: string | null | undefined;
                p_abbreviazione?: string | null | undefined;
              }
            | null
            | undefined;
          sesso?:
            | { __typename?: '_sesso' | undefined; id: number; nome: string }
            | null
            | undefined;
          residente_citta?:
            | {
                __typename?: '_citta' | undefined;
                citta?: string | null | undefined;
                codice?: string | null | undefined;
                id: number;
                p_abbreviazione?: string | null | undefined;
                provincia?: string | null | undefined;
                regione?: string | null | undefined;
              }
            | null
            | undefined;
          documento_rilasciato_da_citta?:
            | {
                __typename?: '_citta' | undefined;
                id: number;
                citta?: string | null | undefined;
                codice?: string | null | undefined;
                p_abbreviazione?: string | null | undefined;
                provincia?: string | null | undefined;
                regione?: string | null | undefined;
              }
            | null
            | undefined;
        }
      | null
      | undefined;
    proprietario?:
      | {
          __typename?: 'proprietario' | undefined;
          id: number;
          nome?: string | null | undefined;
          cognome?: string | null | undefined;
          telefono?: string | null | undefined;
          nascita_data?: any;
          nascita_citta_altro?: string | null | undefined;
          residente_citta_altro?: string | null | undefined;
          residente_indirizzo?: string | null | undefined;
          titolo?:
            | { __typename?: '_titolo_sis' | undefined; nome: string }
            | null
            | undefined;
          sesso?:
            | { __typename?: '_sesso' | undefined; id: number; nome: string }
            | null
            | undefined;
          nascita_citta?:
            | {
                __typename?: '_citta' | undefined;
                citta?: string | null | undefined;
                p_abbreviazione?: string | null | undefined;
              }
            | null
            | undefined;
          residente_citta?:
            | {
                __typename?: '_citta' | undefined;
                citta?: string | null | undefined;
                codice?: string | null | undefined;
                id: number;
                p_abbreviazione?: string | null | undefined;
                provincia?: string | null | undefined;
                regione?: string | null | undefined;
              }
            | null
            | undefined;
        }
      | null
      | undefined;
    residente_citta?:
      | {
          __typename?: '_citta' | undefined;
          citta?: string | null | undefined;
          codice?: string | null | undefined;
          id: number;
          p_abbreviazione?: string | null | undefined;
          provincia?: string | null | undefined;
          regione?: string | null | undefined;
        }
      | null
      | undefined;
    sesso?:
      | { __typename?: '_sesso' | undefined; id: number; nome: string }
      | null
      | undefined;
    testimone?:
      | {
          __typename?: 'testimone' | undefined;
          id: number;
          nome?: string | null | undefined;
          cognome?: string | null | undefined;
          nascita_data?: any;
          telefono?: string | null | undefined;
          nascita_citta_altro?: string | null | undefined;
          residente_citta_altro?: string | null | undefined;
          residente_indirizzo?: string | null | undefined;
          documento_numero?: string | null | undefined;
          documento_rilasciato_da?: string | null | undefined;
          documento_rilasciato_data?: any;
          documento_tipo?: string | null | undefined;
          titolo?:
            | { __typename?: '_titolo_sis' | undefined; nome: string }
            | null
            | undefined;
          nascita_citta?:
            | {
                __typename?: '_citta' | undefined;
                citta?: string | null | undefined;
                p_abbreviazione?: string | null | undefined;
              }
            | null
            | undefined;
          sesso?:
            | { __typename?: '_sesso' | undefined; id: number; nome: string }
            | null
            | undefined;
          residente_citta?:
            | {
                __typename?: '_citta' | undefined;
                citta?: string | null | undefined;
                codice?: string | null | undefined;
                id: number;
                p_abbreviazione?: string | null | undefined;
                provincia?: string | null | undefined;
                regione?: string | null | undefined;
              }
            | null
            | undefined;
          documento_rilasciato_da_citta?:
            | {
                __typename?: '_citta' | undefined;
                id: number;
                citta?: string | null | undefined;
                codice?: string | null | undefined;
                p_abbreviazione?: string | null | undefined;
                provincia?: string | null | undefined;
                regione?: string | null | undefined;
              }
            | null
            | undefined;
        }
      | null
      | undefined;
    tipologia_verbale?:
      | {
          __typename?: '_tipologia_verbale' | undefined;
          id: number;
          nome?: string | null | undefined;
        }
      | null
      | undefined;
    titolo?:
      | { __typename?: '_titolo_sis' | undefined; id: number; nome: string }
      | null
      | undefined;
  }[];
}
