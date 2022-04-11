import { Pis__Stato_Segnalazione_Enum } from '../../_services/generated/graphql';

export interface InterventoStraordinaioObj {
  __typename?: 'intervento_straordinario' | undefined;
  id: number;
  municipalita_storica?: any;
  quartiere_storico?: any;
  toponimo_storico?: any;
  data_inserimento?: any;
  data_inizio_lavori?: any;
  data_fine_lavori?: any;
  tipologia_intervento?: string | null | undefined;
  lavori_effettuati?: string | null | undefined;
  stato: Pis__Stato_Segnalazione_Enum;
  posizionamento_toponimo_punto_iniziale?:
    | {
        __typename?: 'posizionamento_toponimo' | undefined;
        id: number;
        civico?: string | null | undefined;
        ipi?: string | null | undefined;
        km?: string | null | undefined;
        connessione?: string | null | undefined;
        note?: string | null | undefined;
        geoloc?: any;
        tipologia?:
          | {
              __typename?: '_tipologia_posizionamento_toponimo' | undefined;
              id: number;
              nome: string;
            }
          | null
          | undefined;
        specifica?:
          | {
              __typename?: '_specifica_posizionamento_toponimo' | undefined;
              id: number;
              nome: string;
            }
          | null
          | undefined;
      }
    | null
    | undefined;
  posizionamento_toponimo_punto_finale?:
    | {
        __typename?: 'posizionamento_toponimo' | undefined;
        id: number;
        civico?: string | null | undefined;
        ipi?: string | null | undefined;
        km?: string | null | undefined;
        connessione?: string | null | undefined;
        note?: string | null | undefined;
        geoloc?: any;
        tipologia?:
          | {
              __typename?: '_tipologia_posizionamento_toponimo' | undefined;
              id: number;
              nome: string;
            }
          | null
          | undefined;
        specifica?:
          | {
              __typename?: '_specifica_posizionamento_toponimo' | undefined;
              id: number;
              nome: string;
            }
          | null
          | undefined;
      }
    | null
    | undefined;
  priorita?:
    | {
        __typename?: '_priorita' | undefined;
        id: number;
        nome: string;
      }
    | null
    | undefined;
}
