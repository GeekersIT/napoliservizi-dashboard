export interface QuartiereSelectObj {
  __typename?: 'quartiere';
  id: number;
  nome: string;
  municipalita: {
    __typename?: 'municipalita' | undefined;
    municipalita_id: number;
  }[];
}

export interface QuartiereObj {
  id: number;
  nome: string;
  updated_at: any;
  vecchie_denominazioni: {
    __typename?: 'toponomastica_vecchio_quartiere' | undefined;
    nome: string;
    created_at: any;
  }[];
  municipalita: {
    __typename?: 'toponomastica_assegnazione_quartiere' | undefined;
    id: number;
    inizio_validita: any;
    fine_validita?: any;
    municipalita: {
      __typename?: 'toponomastica_municipalita' | undefined;
      id: number;
      nome: string;
    };
  }[];
}
