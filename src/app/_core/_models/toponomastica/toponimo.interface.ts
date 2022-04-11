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
  nome: string;
  codice?: string | null | undefined;
  updated_at?: any;
  dug?:
    | { __typename?: 'toponomastica_dug' | undefined; id: number; nome: string }
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
  vecchie_denominazioni: {
    __typename?: 'toponomastica_vecchio_toponimo' | undefined;
    nome: string;
    codice?: string | null | undefined;
    created_at: any;
    dug?:
      | { __typename?: 'toponomastica_dug' | undefined; nome: string }
      | null
      | undefined;
    tipologia?:
      | { __typename?: 'toponomastica_tipologia' | undefined; nome: string }
      | null
      | undefined;
  }[];
  assegnazioni: {
    __typename?: 'toponomastica_assegnazione_toponimo' | undefined;
    id: number;
    inizio_validita: any;
    fine_validita?: any;
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
