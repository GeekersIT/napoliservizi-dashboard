export interface IndicatoriObj {
  __typename?: 'pms_formula' | undefined;
  code?: string | null | undefined;
  description?: string | null | undefined;
  formula?: string | null | undefined;
  id: number;
  name?: string | null | undefined;
  puntuale?: boolean | null | undefined;
  tipologia_dissesto?:
    | {
        __typename?: 'pis__tipologia_dissesto' | undefined;
        id: number;
        intervento?: string | null | undefined;
        nome: string;
      }
    | null
    | undefined;
}

export interface IndicatoriPerformanceObj {
  __typename?: 'pms_indice_performance' | undefined;
  code?: string | null | undefined;
  formula?: string | null | undefined;
  description?: string | null | undefined;
  id: number;
  name?: string | null | undefined;
  tipologia_dissesto?:
    | {
        __typename?: 'pis__tipologia_dissesto' | undefined;
        id: number;
        intervento?: string | null | undefined;
        nome: string;
      }
    | null
    | undefined;
}

export interface IndicatoriGlobaliObj {
  __typename?: 'pms_indice_globale' | undefined;
  code?: string | null | undefined;
  formula?: string | null | undefined;
  description?: string | null | undefined;
  id: number;
  name?: string | null | undefined;
}
