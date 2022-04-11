export interface MunicipalitaSelectObj {
  __typename?: 'municipalita';
  id: number;
  nome: string;
}

export interface MunicipalitaObj {
  id: number;
  nome: string;
  updated_at: any;
  vecchie_denominazioni: {
    __typename?: 'toponomastica_vecchia_municipalita' | undefined;
    nome: string;
    created_at: any;
  }[];
  quartieri: {
    __typename?: 'toponomastica_assegnazione_quartiere' | undefined;
    id: number;
    inizio_validita: any;
    fine_validita?: any;
    quartiere: {
      __typename?: 'toponomastica_quartiere' | undefined;
      id: number;
      nome: string;
    };
  }[];
}
