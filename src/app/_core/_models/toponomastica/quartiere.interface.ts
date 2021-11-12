export interface QuartiereSelectObj{
    __typename?: 'quartiere';
    id: number;
    nome: string;
    municipalita: {
        __typename?: "municipalita" | undefined; 
        municipalita_id: number
    }[]
}

export interface QuartiereObj{ 
    id: number; 
    nome: string; 
    updated_at: any; 
    vecchie_denominazioni: { 
        __typename?: "vecchio_quartiere" | undefined; 
        nome: string; 
        created_at: any; 
    }[]; 
    municipalita:  { 
        __typename?: "assegnazione_quartiere" | undefined; 
        inizio_validita: any; 
        fine_validita?: any; 
        municipalita: { 
            __typename?: "municipalita" | undefined; 
            id: number; 
            nome: string; 
        }; 
    }[];
 }