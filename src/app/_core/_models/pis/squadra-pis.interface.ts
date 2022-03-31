export interface SquadraPisObj {
  __typename?: 'squadra' | undefined;
  id: number;
  nome?: string | null | undefined;
  protezione_civile?: boolean | null | undefined;
  updated_at: any;
  vecchie_denominazioni: {
    __typename?: 'vecchia_squadra' | undefined;
    nome?: string | null | undefined;
    created_at: any;
  }[];
  membri: {
    __typename?: 'assegnazione_squadra' | undefined;
    id: number;
    caposquadra: boolean;
    inizio_validita: any;
    fine_validita?: any;
    membro: any;
  }[];
}

export interface OperatorePisSelectObj {
  __typename?: 'operatore';
  id: number;
  nome: string;
  cognome: string;
  matricola: string;
  squadre_aggregate: {
    __typename?: 'assegnazione_squadra_aggregate';
    aggregate?:
      | {
          __typename?: 'assegnazione_squadra_aggregate_fields';
          count: number;
        }
      | null
      | undefined;
  };
}

export interface OperatorePisObj {
  __typename?: 'operatore' | undefined;
  id: number;
  nome: string;
  cognome: string;
  matricola: string;
  squadre: {
    __typename?: 'assegnazione_squadra' | undefined;
    id: number;
    caposquadra: boolean;
    inizio_validita: any;
    fine_validita: any;
    squadra: {
      __typename?: 'squadra' | undefined;
      id: number;
      nome: string;
      protezione_civile: boolean;
    };
  }[];
}
