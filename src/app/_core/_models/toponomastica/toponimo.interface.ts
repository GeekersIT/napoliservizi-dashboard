export interface ToponimoSelectObj {
  __typename?: 'toponimo';
  id: number;
  nome: string;
  dug?:
    | {
        __typename?: 'dug' | undefined;
        id: number;
        nome: string;
      }
    | null
    | undefined;
  codice?: string | null | undefined;
  assegnazioni: {
    __typename?: 'assegnazione_toponimo' | undefined;
    municipalita_id: number;
  }[];
}

export interface ToponimoObj {
  id: number;
  nome?: string;
  codice?: string | null | undefined;
  updated_at?: any;
  dug?:
    | {
        __typename?: 'dug' | undefined;
        id: number;
        nome: string;
      }
    | null
    | undefined;
  tipologia?:
    | {
        __typename?: 'tipologia' | undefined;
        id: number;
        nome: string;
      }
    | null
    | undefined;
  vecchie_denominazioni?: {
    __typename?: 'vecchio_toponimo' | undefined;
    nome: string;
    codice?: string | null | undefined;
    created_at: any;
    dug?:
      | {
          __typename?: 'dug' | undefined;
          nome: string;
        }
      | null
      | undefined;
    tipologia?:
      | {
          __typename?: 'tipologia' | undefined;
          nome: string;
        }
      | null
      | undefined;
  }[];
  assegnazioni: {
    __typename?: 'assegnazione_toponimo' | undefined;
    inizio_validita: any;
    fine_validita?: any;
    municipalita: {
      __typename?: 'municipalita' | undefined;
      id: number;
      nome: string;
    };
    quartiere: {
      __typename?: 'quartiere' | undefined;
      id: number;
      nome: string;
    };
  }[];
}
