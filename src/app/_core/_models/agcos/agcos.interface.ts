export interface AgcosObj {
  __typename?: 'agcos_agcos' | undefined;
  civico?: string | null | undefined;
  costi_sostenuti?: string | null | undefined;
  created_at: any;
  data_sinistro?: any;
  esiste_citazione?: boolean | null | undefined;
  esiste_risarcimento?: boolean | null | undefined;
  esito_sentenza?: string | null | undefined;
  esiste_sentenza?: boolean | null | undefined;
  id: number;
  indicazione_approssimativa?: string | null | undefined;
  latitudine?: any;
  longitudine?: any;
  altro?: string | null | undefined;
  causa?: string | null | undefined;
  danno_cose?: boolean | null | undefined;
  danno_persone?: boolean | null | undefined;
  elemento?: string | null | undefined;
  presenza_acqua?: boolean | null | undefined;
  presenza_foglie?: boolean | null | undefined;
  scarsa_illuminazione_naturale?: boolean | null | undefined;
  scarsa_illuminazione_pubblica?: boolean | null | undefined;
  toponimo?:
    | {
        __typename?: 'toponomastica_toponimo' | undefined;
        id: number;
        nome: string;
        codice?: string | null | undefined;
        dug?:
          | {
              __typename?: 'toponomastica_dug' | undefined;
              id: number;
              nome: string;
            }
          | null
          | undefined;
        tipologia?:
          | {
              __typename?: 'toponomastica_tipologia' | undefined;
              id: number;
              nome: string;
            }
          | null
          | undefined;
        assegnazioni: {
          __typename?: 'toponomastica_assegnazione_toponimo' | undefined;
          municipalita: {
            __typename?: 'toponomastica_municipalita' | undefined;
            id: number;
            nome: string;
          };
          quartiere: {
            __typename?: 'toponomastica_quartiere' | undefined;
            id: number;
            nome: string;
          };
        }[];
      }
    | null
    | undefined;
}
