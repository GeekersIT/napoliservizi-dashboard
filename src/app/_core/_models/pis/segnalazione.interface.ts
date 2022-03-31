import { _Stato_Segnalazione_Enum } from '../../_services/generated/graphql';

export interface SegnalazioneObj {
  __typename?: 'segnalazione' | undefined;
  id: number;
  municipalita_id?: number | null | undefined;
  quartiere_id?: number | null | undefined;
  toponimo_id?: number | null | undefined;
  municipalita_storica?: any;
  quartiere_storico?: any;
  toponimo_storico?: any;
  data?: any;
  stato: _Stato_Segnalazione_Enum;
  richiesta_protezione_civile?: boolean | null | undefined;
  tecnico_referente?:
    | {
        __typename?: 'tecnico_referente' | undefined;
        id: number;
        nome?: string | null | undefined;
        cognome?: string | null | undefined;
        titolo?:
          | { __typename?: '_titolo' | undefined; id: number; nome: string }
          | null
          | undefined;
      }
    | null
    | undefined;
  priorita?:
    | { __typename?: '_priorita' | undefined; id: number; nome: string }
    | null
    | undefined;
  protocollo?:
    | {
        __typename?: 'protocollo' | undefined;
        note?: string | null | undefined;
        numero?: string | null | undefined;
        id: number;
        data?: any;
        mittente?:
          | {
              __typename?: '_sezione_protocollo' | undefined;
              id: number;
              nome: string;
              sigla?: string | null | undefined;
              codice: string;
            }
          | null
          | undefined;
        destinatari: {
          __typename?: 'protocollo_destinatario' | undefined;
          id: number;
          e_esterno: boolean;
          destinatario_interno?:
            | {
                __typename?: '_sezione_protocollo' | undefined;
                id: number;
                nome: string;
                codice: string;
                sigla?: string | null | undefined;
              }
            | null
            | undefined;
          destinatario_esterno?:
            | {
                __typename?: 'protocollo_destinatario_esterno' | undefined;
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
  dissesto?:
    | {
        __typename?: 'dissesto' | undefined;
        id: number;
        note?: string | null | undefined;
        peso?: any;
        prima_dimensione?: any;
        profondita?: any;
        seconda_dimensione?: any;
        terza_dimensione?: any;
        tipologia?:
          | {
              __typename?: '_tipologia_dissesto' | undefined;
              id: number;
              nome: string;
            }
          | null
          | undefined;
        forma?:
          | {
              __typename?: '_forma_dissesto' | undefined;
              id: number;
              nome: string;
            }
          | null
          | undefined;
      }
    | null
    | undefined;
  posizionamento_toponimo_punto_iniziale?:
    | {
        __typename?: 'posizionamento_toponimo' | undefined;
        civico?: string | null | undefined;
        connessione?: string | null | undefined;
        geoloc?: any;
        id: number;
        ipi?: string | null | undefined;
        km?: string | null | undefined;
        note?: string | null | undefined;
        specifica?:
          | {
              __typename?: '_specifica_posizionamento_toponimo' | undefined;
              id: number;
              nome: string;
            }
          | null
          | undefined;
        tipologia?:
          | {
              __typename?: '_tipologia_posizionamento_toponimo' | undefined;
              id: number;
              nome: string;
            }
          | null
          | undefined;
      }
    | null
    | undefined;
  diario: {
    __typename?: 'diario' | undefined;
    id: number;
    messaggio?: string | null | undefined;
    utente: any;
  }[];
  segnalazioni_collegate: {
    __typename?: 'segnalazione_collegata' | undefined;
    segnalazione: {
      __typename?: 'segnalazione' | undefined;
      id: number;
      created_at: any;
      stato: _Stato_Segnalazione_Enum;
      protocollo?:
        | {
            __typename?: 'protocollo' | undefined;
            data?: any;
            numero?: string | null | undefined;
          }
        | null
        | undefined;
    };
  }[];
  eventi: {
    __typename?: 'evento' | undefined;
    stato: _Stato_Segnalazione_Enum;
    note?: string | null | undefined;
    created_at: any;
    squadra?:
      | { __typename?: 'squadra' | undefined; nome: string }
      | null
      | undefined;
    protocollo?:
      | {
          __typename?: 'protocollo' | undefined;
          numero?: string | null | undefined;
          data?: any;
          note?: string | null | undefined;
        }
      | null
      | undefined;
    risolutore?:
      | {
          __typename?: 'segnalazione' | undefined;
          protocollo?:
            | {
                __typename?: 'protocollo' | undefined;
                numero?: string | null | undefined;
                data?: any;
              }
            | null
            | undefined;
        }
      | null
      | undefined;
  }[];
  intervento?:
    | {
        __typename?: 'intervento' | undefined;
        id: number;
        assistenza_pm?: boolean | null | undefined;
        data_fine_lavori?: any;
        data_inizio_lavori?: any;
        difformita?: string | null | undefined;
        dissesto_difforme?: boolean | null | undefined;
        note?: string | null | undefined;
        condizioni_traffico?:
          | {
              __typename?: '_condizioni_traffico' | undefined;
              nome: string;
              id: number;
            }
          | null
          | undefined;
        attrezzature_impiegate: {
          __typename?: 'attrezzature_impiegate' | undefined;
          id: number;
          nome?: string | null | undefined;
          quantita?: any;
        }[];
        giorni_trascorsi?:
          | {
              __typename?: '_giorni_trascorsi' | undefined;
              id: number;
              nome: string;
            }
          | null
          | undefined;
        materiali_dissesto: {
          __typename?: 'materiale_dissesto' | undefined;
          id: number;
          quantita?: any;
          altro?: string | null | undefined;
          materiale?:
            | {
                __typename?: '_materiale' | undefined;
                id: number;
                nome: string;
              }
            | null
            | undefined;
        }[];
        segnaletica_lasciata: {
          __typename?: 'segnaletica_lasciata' | undefined;
          id: number;
          nome?: string | null | undefined;
          quantita?: any;
        }[];
        veicoli_impiegati: {
          __typename?: 'veicoli_impiegati' | undefined;
          id: number;
          targa?: string | null | undefined;
        }[];
      }
    | null
    | undefined;
}
