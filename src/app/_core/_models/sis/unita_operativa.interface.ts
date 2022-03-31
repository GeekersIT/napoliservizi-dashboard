export interface UnitaOperativaObj {
  __typename?: 'unita_operativa' | undefined;
  id: number;
  nome?: string | null | undefined;
  note?: string | null | undefined;
  toponimo?: any;
  civico?: string | null | undefined;
  updated_at: any;
  vecchie_denominazioni: {
    __typename?: 'vecchia_unita_operativa' | undefined;
    nome?: string | null | undefined;
    created_at: any;
  }[];
  membri: {
    __typename?: 'assegnazione_unita_operativa' | undefined;
    id: number;
    caposquadra: boolean;
    inizio_validita: any;
    fine_validita?: any;
    membro: any;
  }[];
}
