export interface MunicipalitaSelectObj{
    __typename?: 'municipalita';
    id: number;
    nome: string;
}

export interface MunicipalitaObj { 
    __typename?: "municipalita" | undefined; 
    id: number; 
    nome: string; 
    updated_at: any;
    vecchie_denominazioni: { 
        __typename?: "vecchia_municipalita" | undefined; 
        nome: string; 
        created_at: any; 
    }[]; 
    quartieri: { 
        __typename?: "assegnazione_quartiere" | undefined; 
        inizio_validita: any; 
        fine_validita?: any; 
        quartiere: { 
            __typename?: "quartiere" | undefined; 
            id: number; 
            nome: string; 
        }; 
    }[]; 
}