import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  timestamptz: any;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: Maybe<Scalars['Int']>;
  _gt?: Maybe<Scalars['Int']>;
  _gte?: Maybe<Scalars['Int']>;
  _in?: Maybe<Array<Scalars['Int']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Int']>;
  _lte?: Maybe<Scalars['Int']>;
  _neq?: Maybe<Scalars['Int']>;
  _nin?: Maybe<Array<Scalars['Int']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: Maybe<Scalars['String']>;
  _is_null?: Maybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: Maybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: Maybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: Maybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: Maybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: Maybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: Maybe<Scalars['String']>;
};

/** columns and relationships of "dug" */
export type Dug = {
  __typename?: 'dug';
  created_at: Scalars['timestamptz'];
  id: Scalars['Int'];
  nome: Scalars['String'];
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "dug" */
export type Dug_Aggregate = {
  __typename?: 'dug_aggregate';
  aggregate?: Maybe<Dug_Aggregate_Fields>;
  nodes: Array<Dug>;
};

/** aggregate fields of "dug" */
export type Dug_Aggregate_Fields = {
  __typename?: 'dug_aggregate_fields';
  avg?: Maybe<Dug_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Dug_Max_Fields>;
  min?: Maybe<Dug_Min_Fields>;
  stddev?: Maybe<Dug_Stddev_Fields>;
  stddev_pop?: Maybe<Dug_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Dug_Stddev_Samp_Fields>;
  sum?: Maybe<Dug_Sum_Fields>;
  var_pop?: Maybe<Dug_Var_Pop_Fields>;
  var_samp?: Maybe<Dug_Var_Samp_Fields>;
  variance?: Maybe<Dug_Variance_Fields>;
};


/** aggregate fields of "dug" */
export type Dug_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Dug_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Dug_Avg_Fields = {
  __typename?: 'dug_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "dug". All fields are combined with a logical 'AND'. */
export type Dug_Bool_Exp = {
  _and?: Maybe<Array<Dug_Bool_Exp>>;
  _not?: Maybe<Dug_Bool_Exp>;
  _or?: Maybe<Array<Dug_Bool_Exp>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  nome?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "dug" */
export enum Dug_Constraint {
  /** unique or primary key constraint */
  DugPkey = 'dug_pkey'
}

/** input type for incrementing numeric columns in table "dug" */
export type Dug_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "dug" */
export type Dug_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  nome?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Dug_Max_Fields = {
  __typename?: 'dug_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  nome?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Dug_Min_Fields = {
  __typename?: 'dug_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  nome?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "dug" */
export type Dug_Mutation_Response = {
  __typename?: 'dug_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Dug>;
};

/** input type for inserting object relation for remote table "dug" */
export type Dug_Obj_Rel_Insert_Input = {
  data: Dug_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Dug_On_Conflict>;
};

/** on conflict condition type for table "dug" */
export type Dug_On_Conflict = {
  constraint: Dug_Constraint;
  update_columns?: Array<Dug_Update_Column>;
  where?: Maybe<Dug_Bool_Exp>;
};

/** Ordering options when selecting data from "dug". */
export type Dug_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  nome?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: dug */
export type Dug_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "dug" */
export enum Dug_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Nome = 'nome',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "dug" */
export type Dug_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  nome?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Dug_Stddev_Fields = {
  __typename?: 'dug_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Dug_Stddev_Pop_Fields = {
  __typename?: 'dug_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Dug_Stddev_Samp_Fields = {
  __typename?: 'dug_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Dug_Sum_Fields = {
  __typename?: 'dug_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "dug" */
export enum Dug_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Nome = 'nome',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Dug_Var_Pop_Fields = {
  __typename?: 'dug_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Dug_Var_Samp_Fields = {
  __typename?: 'dug_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Dug_Variance_Fields = {
  __typename?: 'dug_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "municipalita" */
export type Municipalita = {
  __typename?: 'municipalita';
  created_at: Scalars['timestamptz'];
  id: Scalars['Int'];
  nome: Scalars['String'];
  /** An array relationship */
  pacchetti_quartiere: Array<Municipalita_Quartieri>;
  /** An aggregate relationship */
  pacchetti_quartiere_aggregate: Municipalita_Quartieri_Aggregate;
  updated_at: Scalars['timestamptz'];
  /** An array relationship */
  vecchie_denominazioni: Array<Vecchia_Municipalita>;
  /** An aggregate relationship */
  vecchie_denominazioni_aggregate: Vecchia_Municipalita_Aggregate;
};


/** columns and relationships of "municipalita" */
export type MunicipalitaPacchetti_QuartiereArgs = {
  distinct_on?: Maybe<Array<Municipalita_Quartieri_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Municipalita_Quartieri_Order_By>>;
  where?: Maybe<Municipalita_Quartieri_Bool_Exp>;
};


/** columns and relationships of "municipalita" */
export type MunicipalitaPacchetti_Quartiere_AggregateArgs = {
  distinct_on?: Maybe<Array<Municipalita_Quartieri_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Municipalita_Quartieri_Order_By>>;
  where?: Maybe<Municipalita_Quartieri_Bool_Exp>;
};


/** columns and relationships of "municipalita" */
export type MunicipalitaVecchie_DenominazioniArgs = {
  distinct_on?: Maybe<Array<Vecchia_Municipalita_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Vecchia_Municipalita_Order_By>>;
  where?: Maybe<Vecchia_Municipalita_Bool_Exp>;
};


/** columns and relationships of "municipalita" */
export type MunicipalitaVecchie_Denominazioni_AggregateArgs = {
  distinct_on?: Maybe<Array<Vecchia_Municipalita_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Vecchia_Municipalita_Order_By>>;
  where?: Maybe<Vecchia_Municipalita_Bool_Exp>;
};

/** aggregated selection of "municipalita" */
export type Municipalita_Aggregate = {
  __typename?: 'municipalita_aggregate';
  aggregate?: Maybe<Municipalita_Aggregate_Fields>;
  nodes: Array<Municipalita>;
};

/** aggregate fields of "municipalita" */
export type Municipalita_Aggregate_Fields = {
  __typename?: 'municipalita_aggregate_fields';
  avg?: Maybe<Municipalita_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Municipalita_Max_Fields>;
  min?: Maybe<Municipalita_Min_Fields>;
  stddev?: Maybe<Municipalita_Stddev_Fields>;
  stddev_pop?: Maybe<Municipalita_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Municipalita_Stddev_Samp_Fields>;
  sum?: Maybe<Municipalita_Sum_Fields>;
  var_pop?: Maybe<Municipalita_Var_Pop_Fields>;
  var_samp?: Maybe<Municipalita_Var_Samp_Fields>;
  variance?: Maybe<Municipalita_Variance_Fields>;
};


/** aggregate fields of "municipalita" */
export type Municipalita_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Municipalita_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Municipalita_Avg_Fields = {
  __typename?: 'municipalita_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "municipalita". All fields are combined with a logical 'AND'. */
export type Municipalita_Bool_Exp = {
  _and?: Maybe<Array<Municipalita_Bool_Exp>>;
  _not?: Maybe<Municipalita_Bool_Exp>;
  _or?: Maybe<Array<Municipalita_Bool_Exp>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  nome?: Maybe<String_Comparison_Exp>;
  pacchetti_quartiere?: Maybe<Municipalita_Quartieri_Bool_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  vecchie_denominazioni?: Maybe<Vecchia_Municipalita_Bool_Exp>;
};

/** unique or primary key constraints on table "municipalita" */
export enum Municipalita_Constraint {
  /** unique or primary key constraint */
  MunicipalitaPkey = 'municipalita_pkey'
}

/** input type for incrementing numeric columns in table "municipalita" */
export type Municipalita_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "municipalita" */
export type Municipalita_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  nome?: Maybe<Scalars['String']>;
  pacchetti_quartiere?: Maybe<Municipalita_Quartieri_Arr_Rel_Insert_Input>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  vecchie_denominazioni?: Maybe<Vecchia_Municipalita_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Municipalita_Max_Fields = {
  __typename?: 'municipalita_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  nome?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Municipalita_Min_Fields = {
  __typename?: 'municipalita_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  nome?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "municipalita" */
export type Municipalita_Mutation_Response = {
  __typename?: 'municipalita_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Municipalita>;
};

/** input type for inserting object relation for remote table "municipalita" */
export type Municipalita_Obj_Rel_Insert_Input = {
  data: Municipalita_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Municipalita_On_Conflict>;
};

/** on conflict condition type for table "municipalita" */
export type Municipalita_On_Conflict = {
  constraint: Municipalita_Constraint;
  update_columns?: Array<Municipalita_Update_Column>;
  where?: Maybe<Municipalita_Bool_Exp>;
};

/** Ordering options when selecting data from "municipalita". */
export type Municipalita_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  nome?: Maybe<Order_By>;
  pacchetti_quartiere_aggregate?: Maybe<Municipalita_Quartieri_Aggregate_Order_By>;
  updated_at?: Maybe<Order_By>;
  vecchie_denominazioni_aggregate?: Maybe<Vecchia_Municipalita_Aggregate_Order_By>;
};

/** primary key columns input for table: municipalita */
export type Municipalita_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** columns and relationships of "municipalita_quartieri" */
export type Municipalita_Quartieri = {
  __typename?: 'municipalita_quartieri';
  fine_validita?: Maybe<Scalars['timestamptz']>;
  inizio_validita: Scalars['timestamptz'];
  /** An object relationship */
  municipalita: Municipalita;
  municipalita_id: Scalars['Int'];
  pacchetto_id: Scalars['Int'];
  /** An array relationship */
  quartieri: Array<Pacchetto_Quartiere>;
  /** An aggregate relationship */
  quartieri_aggregate: Pacchetto_Quartiere_Aggregate;
};


/** columns and relationships of "municipalita_quartieri" */
export type Municipalita_QuartieriQuartieriArgs = {
  distinct_on?: Maybe<Array<Pacchetto_Quartiere_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Pacchetto_Quartiere_Order_By>>;
  where?: Maybe<Pacchetto_Quartiere_Bool_Exp>;
};


/** columns and relationships of "municipalita_quartieri" */
export type Municipalita_QuartieriQuartieri_AggregateArgs = {
  distinct_on?: Maybe<Array<Pacchetto_Quartiere_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Pacchetto_Quartiere_Order_By>>;
  where?: Maybe<Pacchetto_Quartiere_Bool_Exp>;
};

/** aggregated selection of "municipalita_quartieri" */
export type Municipalita_Quartieri_Aggregate = {
  __typename?: 'municipalita_quartieri_aggregate';
  aggregate?: Maybe<Municipalita_Quartieri_Aggregate_Fields>;
  nodes: Array<Municipalita_Quartieri>;
};

/** aggregate fields of "municipalita_quartieri" */
export type Municipalita_Quartieri_Aggregate_Fields = {
  __typename?: 'municipalita_quartieri_aggregate_fields';
  avg?: Maybe<Municipalita_Quartieri_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Municipalita_Quartieri_Max_Fields>;
  min?: Maybe<Municipalita_Quartieri_Min_Fields>;
  stddev?: Maybe<Municipalita_Quartieri_Stddev_Fields>;
  stddev_pop?: Maybe<Municipalita_Quartieri_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Municipalita_Quartieri_Stddev_Samp_Fields>;
  sum?: Maybe<Municipalita_Quartieri_Sum_Fields>;
  var_pop?: Maybe<Municipalita_Quartieri_Var_Pop_Fields>;
  var_samp?: Maybe<Municipalita_Quartieri_Var_Samp_Fields>;
  variance?: Maybe<Municipalita_Quartieri_Variance_Fields>;
};


/** aggregate fields of "municipalita_quartieri" */
export type Municipalita_Quartieri_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Municipalita_Quartieri_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "municipalita_quartieri" */
export type Municipalita_Quartieri_Aggregate_Order_By = {
  avg?: Maybe<Municipalita_Quartieri_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Municipalita_Quartieri_Max_Order_By>;
  min?: Maybe<Municipalita_Quartieri_Min_Order_By>;
  stddev?: Maybe<Municipalita_Quartieri_Stddev_Order_By>;
  stddev_pop?: Maybe<Municipalita_Quartieri_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Municipalita_Quartieri_Stddev_Samp_Order_By>;
  sum?: Maybe<Municipalita_Quartieri_Sum_Order_By>;
  var_pop?: Maybe<Municipalita_Quartieri_Var_Pop_Order_By>;
  var_samp?: Maybe<Municipalita_Quartieri_Var_Samp_Order_By>;
  variance?: Maybe<Municipalita_Quartieri_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "municipalita_quartieri" */
export type Municipalita_Quartieri_Arr_Rel_Insert_Input = {
  data: Array<Municipalita_Quartieri_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Municipalita_Quartieri_On_Conflict>;
};

/** aggregate avg on columns */
export type Municipalita_Quartieri_Avg_Fields = {
  __typename?: 'municipalita_quartieri_avg_fields';
  municipalita_id?: Maybe<Scalars['Float']>;
  pacchetto_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "municipalita_quartieri" */
export type Municipalita_Quartieri_Avg_Order_By = {
  municipalita_id?: Maybe<Order_By>;
  pacchetto_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "municipalita_quartieri". All fields are combined with a logical 'AND'. */
export type Municipalita_Quartieri_Bool_Exp = {
  _and?: Maybe<Array<Municipalita_Quartieri_Bool_Exp>>;
  _not?: Maybe<Municipalita_Quartieri_Bool_Exp>;
  _or?: Maybe<Array<Municipalita_Quartieri_Bool_Exp>>;
  fine_validita?: Maybe<Timestamptz_Comparison_Exp>;
  inizio_validita?: Maybe<Timestamptz_Comparison_Exp>;
  municipalita?: Maybe<Municipalita_Bool_Exp>;
  municipalita_id?: Maybe<Int_Comparison_Exp>;
  pacchetto_id?: Maybe<Int_Comparison_Exp>;
  quartieri?: Maybe<Pacchetto_Quartiere_Bool_Exp>;
};

/** unique or primary key constraints on table "municipalita_quartieri" */
export enum Municipalita_Quartieri_Constraint {
  /** unique or primary key constraint */
  MunicipalitaQuartieriPkey = 'municipalita_quartieri_pkey'
}

/** input type for incrementing numeric columns in table "municipalita_quartieri" */
export type Municipalita_Quartieri_Inc_Input = {
  municipalita_id?: Maybe<Scalars['Int']>;
  pacchetto_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "municipalita_quartieri" */
export type Municipalita_Quartieri_Insert_Input = {
  fine_validita?: Maybe<Scalars['timestamptz']>;
  inizio_validita?: Maybe<Scalars['timestamptz']>;
  municipalita?: Maybe<Municipalita_Obj_Rel_Insert_Input>;
  municipalita_id?: Maybe<Scalars['Int']>;
  pacchetto_id?: Maybe<Scalars['Int']>;
  quartieri?: Maybe<Pacchetto_Quartiere_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Municipalita_Quartieri_Max_Fields = {
  __typename?: 'municipalita_quartieri_max_fields';
  fine_validita?: Maybe<Scalars['timestamptz']>;
  inizio_validita?: Maybe<Scalars['timestamptz']>;
  municipalita_id?: Maybe<Scalars['Int']>;
  pacchetto_id?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "municipalita_quartieri" */
export type Municipalita_Quartieri_Max_Order_By = {
  fine_validita?: Maybe<Order_By>;
  inizio_validita?: Maybe<Order_By>;
  municipalita_id?: Maybe<Order_By>;
  pacchetto_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Municipalita_Quartieri_Min_Fields = {
  __typename?: 'municipalita_quartieri_min_fields';
  fine_validita?: Maybe<Scalars['timestamptz']>;
  inizio_validita?: Maybe<Scalars['timestamptz']>;
  municipalita_id?: Maybe<Scalars['Int']>;
  pacchetto_id?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "municipalita_quartieri" */
export type Municipalita_Quartieri_Min_Order_By = {
  fine_validita?: Maybe<Order_By>;
  inizio_validita?: Maybe<Order_By>;
  municipalita_id?: Maybe<Order_By>;
  pacchetto_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "municipalita_quartieri" */
export type Municipalita_Quartieri_Mutation_Response = {
  __typename?: 'municipalita_quartieri_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Municipalita_Quartieri>;
};

/** input type for inserting object relation for remote table "municipalita_quartieri" */
export type Municipalita_Quartieri_Obj_Rel_Insert_Input = {
  data: Municipalita_Quartieri_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Municipalita_Quartieri_On_Conflict>;
};

/** on conflict condition type for table "municipalita_quartieri" */
export type Municipalita_Quartieri_On_Conflict = {
  constraint: Municipalita_Quartieri_Constraint;
  update_columns?: Array<Municipalita_Quartieri_Update_Column>;
  where?: Maybe<Municipalita_Quartieri_Bool_Exp>;
};

/** Ordering options when selecting data from "municipalita_quartieri". */
export type Municipalita_Quartieri_Order_By = {
  fine_validita?: Maybe<Order_By>;
  inizio_validita?: Maybe<Order_By>;
  municipalita?: Maybe<Municipalita_Order_By>;
  municipalita_id?: Maybe<Order_By>;
  pacchetto_id?: Maybe<Order_By>;
  quartieri_aggregate?: Maybe<Pacchetto_Quartiere_Aggregate_Order_By>;
};

/** primary key columns input for table: municipalita_quartieri */
export type Municipalita_Quartieri_Pk_Columns_Input = {
  pacchetto_id: Scalars['Int'];
};

/** select columns of table "municipalita_quartieri" */
export enum Municipalita_Quartieri_Select_Column {
  /** column name */
  FineValidita = 'fine_validita',
  /** column name */
  InizioValidita = 'inizio_validita',
  /** column name */
  MunicipalitaId = 'municipalita_id',
  /** column name */
  PacchettoId = 'pacchetto_id'
}

/** input type for updating data in table "municipalita_quartieri" */
export type Municipalita_Quartieri_Set_Input = {
  fine_validita?: Maybe<Scalars['timestamptz']>;
  inizio_validita?: Maybe<Scalars['timestamptz']>;
  municipalita_id?: Maybe<Scalars['Int']>;
  pacchetto_id?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Municipalita_Quartieri_Stddev_Fields = {
  __typename?: 'municipalita_quartieri_stddev_fields';
  municipalita_id?: Maybe<Scalars['Float']>;
  pacchetto_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "municipalita_quartieri" */
export type Municipalita_Quartieri_Stddev_Order_By = {
  municipalita_id?: Maybe<Order_By>;
  pacchetto_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Municipalita_Quartieri_Stddev_Pop_Fields = {
  __typename?: 'municipalita_quartieri_stddev_pop_fields';
  municipalita_id?: Maybe<Scalars['Float']>;
  pacchetto_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "municipalita_quartieri" */
export type Municipalita_Quartieri_Stddev_Pop_Order_By = {
  municipalita_id?: Maybe<Order_By>;
  pacchetto_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Municipalita_Quartieri_Stddev_Samp_Fields = {
  __typename?: 'municipalita_quartieri_stddev_samp_fields';
  municipalita_id?: Maybe<Scalars['Float']>;
  pacchetto_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "municipalita_quartieri" */
export type Municipalita_Quartieri_Stddev_Samp_Order_By = {
  municipalita_id?: Maybe<Order_By>;
  pacchetto_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Municipalita_Quartieri_Sum_Fields = {
  __typename?: 'municipalita_quartieri_sum_fields';
  municipalita_id?: Maybe<Scalars['Int']>;
  pacchetto_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "municipalita_quartieri" */
export type Municipalita_Quartieri_Sum_Order_By = {
  municipalita_id?: Maybe<Order_By>;
  pacchetto_id?: Maybe<Order_By>;
};

/** update columns of table "municipalita_quartieri" */
export enum Municipalita_Quartieri_Update_Column {
  /** column name */
  FineValidita = 'fine_validita',
  /** column name */
  InizioValidita = 'inizio_validita',
  /** column name */
  MunicipalitaId = 'municipalita_id',
  /** column name */
  PacchettoId = 'pacchetto_id'
}

/** aggregate var_pop on columns */
export type Municipalita_Quartieri_Var_Pop_Fields = {
  __typename?: 'municipalita_quartieri_var_pop_fields';
  municipalita_id?: Maybe<Scalars['Float']>;
  pacchetto_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "municipalita_quartieri" */
export type Municipalita_Quartieri_Var_Pop_Order_By = {
  municipalita_id?: Maybe<Order_By>;
  pacchetto_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Municipalita_Quartieri_Var_Samp_Fields = {
  __typename?: 'municipalita_quartieri_var_samp_fields';
  municipalita_id?: Maybe<Scalars['Float']>;
  pacchetto_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "municipalita_quartieri" */
export type Municipalita_Quartieri_Var_Samp_Order_By = {
  municipalita_id?: Maybe<Order_By>;
  pacchetto_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Municipalita_Quartieri_Variance_Fields = {
  __typename?: 'municipalita_quartieri_variance_fields';
  municipalita_id?: Maybe<Scalars['Float']>;
  pacchetto_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "municipalita_quartieri" */
export type Municipalita_Quartieri_Variance_Order_By = {
  municipalita_id?: Maybe<Order_By>;
  pacchetto_id?: Maybe<Order_By>;
};

/** select columns of table "municipalita" */
export enum Municipalita_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Nome = 'nome',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "municipalita" */
export type Municipalita_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  nome?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Municipalita_Stddev_Fields = {
  __typename?: 'municipalita_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Municipalita_Stddev_Pop_Fields = {
  __typename?: 'municipalita_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Municipalita_Stddev_Samp_Fields = {
  __typename?: 'municipalita_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Municipalita_Sum_Fields = {
  __typename?: 'municipalita_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "municipalita" */
export enum Municipalita_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Nome = 'nome',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Municipalita_Var_Pop_Fields = {
  __typename?: 'municipalita_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Municipalita_Var_Samp_Fields = {
  __typename?: 'municipalita_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Municipalita_Variance_Fields = {
  __typename?: 'municipalita_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "dug" */
  delete_dug?: Maybe<Dug_Mutation_Response>;
  /** delete single row from the table: "dug" */
  delete_dug_by_pk?: Maybe<Dug>;
  /** delete data from the table: "municipalita" */
  delete_municipalita?: Maybe<Municipalita_Mutation_Response>;
  /** delete single row from the table: "municipalita" */
  delete_municipalita_by_pk?: Maybe<Municipalita>;
  /** delete data from the table: "municipalita_quartieri" */
  delete_municipalita_quartieri?: Maybe<Municipalita_Quartieri_Mutation_Response>;
  /** delete single row from the table: "municipalita_quartieri" */
  delete_municipalita_quartieri_by_pk?: Maybe<Municipalita_Quartieri>;
  /** delete data from the table: "pacchetto_quartiere" */
  delete_pacchetto_quartiere?: Maybe<Pacchetto_Quartiere_Mutation_Response>;
  /** delete single row from the table: "pacchetto_quartiere" */
  delete_pacchetto_quartiere_by_pk?: Maybe<Pacchetto_Quartiere>;
  /** delete data from the table: "pacchetto_toponimo" */
  delete_pacchetto_toponimo?: Maybe<Pacchetto_Toponimo_Mutation_Response>;
  /** delete single row from the table: "pacchetto_toponimo" */
  delete_pacchetto_toponimo_by_pk?: Maybe<Pacchetto_Toponimo>;
  /** delete data from the table: "quartiere" */
  delete_quartiere?: Maybe<Quartiere_Mutation_Response>;
  /** delete single row from the table: "quartiere" */
  delete_quartiere_by_pk?: Maybe<Quartiere>;
  /** delete data from the table: "quartiere_toponimi" */
  delete_quartiere_toponimi?: Maybe<Quartiere_Toponimi_Mutation_Response>;
  /** delete single row from the table: "quartiere_toponimi" */
  delete_quartiere_toponimi_by_pk?: Maybe<Quartiere_Toponimi>;
  /** delete data from the table: "test" */
  delete_test?: Maybe<Test_Mutation_Response>;
  /** delete single row from the table: "test" */
  delete_test_by_pk?: Maybe<Test>;
  /** delete data from the table: "tipologia" */
  delete_tipologia?: Maybe<Tipologia_Mutation_Response>;
  /** delete single row from the table: "tipologia" */
  delete_tipologia_by_pk?: Maybe<Tipologia>;
  /** delete data from the table: "toponimo" */
  delete_toponimo?: Maybe<Toponimo_Mutation_Response>;
  /** delete single row from the table: "toponimo" */
  delete_toponimo_by_pk?: Maybe<Toponimo>;
  /** delete data from the table: "vecchia_municipalita" */
  delete_vecchia_municipalita?: Maybe<Vecchia_Municipalita_Mutation_Response>;
  /** delete single row from the table: "vecchia_municipalita" */
  delete_vecchia_municipalita_by_pk?: Maybe<Vecchia_Municipalita>;
  /** delete data from the table: "vecchio_quartiere" */
  delete_vecchio_quartiere?: Maybe<Vecchio_Quartiere_Mutation_Response>;
  /** delete single row from the table: "vecchio_quartiere" */
  delete_vecchio_quartiere_by_pk?: Maybe<Vecchio_Quartiere>;
  /** delete data from the table: "vecchio_toponimo" */
  delete_vecchio_toponimo?: Maybe<Vecchio_Toponimo_Mutation_Response>;
  /** delete single row from the table: "vecchio_toponimo" */
  delete_vecchio_toponimo_by_pk?: Maybe<Vecchio_Toponimo>;
  /** insert data into the table: "dug" */
  insert_dug?: Maybe<Dug_Mutation_Response>;
  /** insert a single row into the table: "dug" */
  insert_dug_one?: Maybe<Dug>;
  /** insert data into the table: "municipalita" */
  insert_municipalita?: Maybe<Municipalita_Mutation_Response>;
  /** insert a single row into the table: "municipalita" */
  insert_municipalita_one?: Maybe<Municipalita>;
  /** insert data into the table: "municipalita_quartieri" */
  insert_municipalita_quartieri?: Maybe<Municipalita_Quartieri_Mutation_Response>;
  /** insert a single row into the table: "municipalita_quartieri" */
  insert_municipalita_quartieri_one?: Maybe<Municipalita_Quartieri>;
  /** insert data into the table: "pacchetto_quartiere" */
  insert_pacchetto_quartiere?: Maybe<Pacchetto_Quartiere_Mutation_Response>;
  /** insert a single row into the table: "pacchetto_quartiere" */
  insert_pacchetto_quartiere_one?: Maybe<Pacchetto_Quartiere>;
  /** insert data into the table: "pacchetto_toponimo" */
  insert_pacchetto_toponimo?: Maybe<Pacchetto_Toponimo_Mutation_Response>;
  /** insert a single row into the table: "pacchetto_toponimo" */
  insert_pacchetto_toponimo_one?: Maybe<Pacchetto_Toponimo>;
  /** insert data into the table: "quartiere" */
  insert_quartiere?: Maybe<Quartiere_Mutation_Response>;
  /** insert a single row into the table: "quartiere" */
  insert_quartiere_one?: Maybe<Quartiere>;
  /** insert data into the table: "quartiere_toponimi" */
  insert_quartiere_toponimi?: Maybe<Quartiere_Toponimi_Mutation_Response>;
  /** insert a single row into the table: "quartiere_toponimi" */
  insert_quartiere_toponimi_one?: Maybe<Quartiere_Toponimi>;
  /** insert data into the table: "test" */
  insert_test?: Maybe<Test_Mutation_Response>;
  /** insert a single row into the table: "test" */
  insert_test_one?: Maybe<Test>;
  /** insert data into the table: "tipologia" */
  insert_tipologia?: Maybe<Tipologia_Mutation_Response>;
  /** insert a single row into the table: "tipologia" */
  insert_tipologia_one?: Maybe<Tipologia>;
  /** insert data into the table: "toponimo" */
  insert_toponimo?: Maybe<Toponimo_Mutation_Response>;
  /** insert a single row into the table: "toponimo" */
  insert_toponimo_one?: Maybe<Toponimo>;
  /** insert data into the table: "vecchia_municipalita" */
  insert_vecchia_municipalita?: Maybe<Vecchia_Municipalita_Mutation_Response>;
  /** insert a single row into the table: "vecchia_municipalita" */
  insert_vecchia_municipalita_one?: Maybe<Vecchia_Municipalita>;
  /** insert data into the table: "vecchio_quartiere" */
  insert_vecchio_quartiere?: Maybe<Vecchio_Quartiere_Mutation_Response>;
  /** insert a single row into the table: "vecchio_quartiere" */
  insert_vecchio_quartiere_one?: Maybe<Vecchio_Quartiere>;
  /** insert data into the table: "vecchio_toponimo" */
  insert_vecchio_toponimo?: Maybe<Vecchio_Toponimo_Mutation_Response>;
  /** insert a single row into the table: "vecchio_toponimo" */
  insert_vecchio_toponimo_one?: Maybe<Vecchio_Toponimo>;
  /** update data of the table: "dug" */
  update_dug?: Maybe<Dug_Mutation_Response>;
  /** update single row of the table: "dug" */
  update_dug_by_pk?: Maybe<Dug>;
  /** update data of the table: "municipalita" */
  update_municipalita?: Maybe<Municipalita_Mutation_Response>;
  /** update single row of the table: "municipalita" */
  update_municipalita_by_pk?: Maybe<Municipalita>;
  /** update data of the table: "municipalita_quartieri" */
  update_municipalita_quartieri?: Maybe<Municipalita_Quartieri_Mutation_Response>;
  /** update single row of the table: "municipalita_quartieri" */
  update_municipalita_quartieri_by_pk?: Maybe<Municipalita_Quartieri>;
  /** update data of the table: "pacchetto_quartiere" */
  update_pacchetto_quartiere?: Maybe<Pacchetto_Quartiere_Mutation_Response>;
  /** update single row of the table: "pacchetto_quartiere" */
  update_pacchetto_quartiere_by_pk?: Maybe<Pacchetto_Quartiere>;
  /** update data of the table: "pacchetto_toponimo" */
  update_pacchetto_toponimo?: Maybe<Pacchetto_Toponimo_Mutation_Response>;
  /** update single row of the table: "pacchetto_toponimo" */
  update_pacchetto_toponimo_by_pk?: Maybe<Pacchetto_Toponimo>;
  /** update data of the table: "quartiere" */
  update_quartiere?: Maybe<Quartiere_Mutation_Response>;
  /** update single row of the table: "quartiere" */
  update_quartiere_by_pk?: Maybe<Quartiere>;
  /** update data of the table: "quartiere_toponimi" */
  update_quartiere_toponimi?: Maybe<Quartiere_Toponimi_Mutation_Response>;
  /** update single row of the table: "quartiere_toponimi" */
  update_quartiere_toponimi_by_pk?: Maybe<Quartiere_Toponimi>;
  /** update data of the table: "test" */
  update_test?: Maybe<Test_Mutation_Response>;
  /** update single row of the table: "test" */
  update_test_by_pk?: Maybe<Test>;
  /** update data of the table: "tipologia" */
  update_tipologia?: Maybe<Tipologia_Mutation_Response>;
  /** update single row of the table: "tipologia" */
  update_tipologia_by_pk?: Maybe<Tipologia>;
  /** update data of the table: "toponimo" */
  update_toponimo?: Maybe<Toponimo_Mutation_Response>;
  /** update single row of the table: "toponimo" */
  update_toponimo_by_pk?: Maybe<Toponimo>;
  /** update data of the table: "vecchia_municipalita" */
  update_vecchia_municipalita?: Maybe<Vecchia_Municipalita_Mutation_Response>;
  /** update single row of the table: "vecchia_municipalita" */
  update_vecchia_municipalita_by_pk?: Maybe<Vecchia_Municipalita>;
  /** update data of the table: "vecchio_quartiere" */
  update_vecchio_quartiere?: Maybe<Vecchio_Quartiere_Mutation_Response>;
  /** update single row of the table: "vecchio_quartiere" */
  update_vecchio_quartiere_by_pk?: Maybe<Vecchio_Quartiere>;
  /** update data of the table: "vecchio_toponimo" */
  update_vecchio_toponimo?: Maybe<Vecchio_Toponimo_Mutation_Response>;
  /** update single row of the table: "vecchio_toponimo" */
  update_vecchio_toponimo_by_pk?: Maybe<Vecchio_Toponimo>;
};


/** mutation root */
export type Mutation_RootDelete_DugArgs = {
  where: Dug_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Dug_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_MunicipalitaArgs = {
  where: Municipalita_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Municipalita_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Municipalita_QuartieriArgs = {
  where: Municipalita_Quartieri_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Municipalita_Quartieri_By_PkArgs = {
  pacchetto_id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Pacchetto_QuartiereArgs = {
  where: Pacchetto_Quartiere_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Pacchetto_Quartiere_By_PkArgs = {
  pacchetto_id: Scalars['Int'];
  quartiere_id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Pacchetto_ToponimoArgs = {
  where: Pacchetto_Toponimo_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Pacchetto_Toponimo_By_PkArgs = {
  pacchetto_id: Scalars['Int'];
  toponimo_id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_QuartiereArgs = {
  where: Quartiere_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Quartiere_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Quartiere_ToponimiArgs = {
  where: Quartiere_Toponimi_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Quartiere_Toponimi_By_PkArgs = {
  pacchetto_id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_TestArgs = {
  where: Test_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Test_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_TipologiaArgs = {
  where: Tipologia_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Tipologia_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_ToponimoArgs = {
  where: Toponimo_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Toponimo_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Vecchia_MunicipalitaArgs = {
  where: Vecchia_Municipalita_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Vecchia_Municipalita_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Vecchio_QuartiereArgs = {
  where: Vecchio_Quartiere_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Vecchio_Quartiere_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Vecchio_ToponimoArgs = {
  where: Vecchio_Toponimo_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Vecchio_Toponimo_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootInsert_DugArgs = {
  objects: Array<Dug_Insert_Input>;
  on_conflict?: Maybe<Dug_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Dug_OneArgs = {
  object: Dug_Insert_Input;
  on_conflict?: Maybe<Dug_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_MunicipalitaArgs = {
  objects: Array<Municipalita_Insert_Input>;
  on_conflict?: Maybe<Municipalita_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Municipalita_OneArgs = {
  object: Municipalita_Insert_Input;
  on_conflict?: Maybe<Municipalita_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Municipalita_QuartieriArgs = {
  objects: Array<Municipalita_Quartieri_Insert_Input>;
  on_conflict?: Maybe<Municipalita_Quartieri_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Municipalita_Quartieri_OneArgs = {
  object: Municipalita_Quartieri_Insert_Input;
  on_conflict?: Maybe<Municipalita_Quartieri_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Pacchetto_QuartiereArgs = {
  objects: Array<Pacchetto_Quartiere_Insert_Input>;
  on_conflict?: Maybe<Pacchetto_Quartiere_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Pacchetto_Quartiere_OneArgs = {
  object: Pacchetto_Quartiere_Insert_Input;
  on_conflict?: Maybe<Pacchetto_Quartiere_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Pacchetto_ToponimoArgs = {
  objects: Array<Pacchetto_Toponimo_Insert_Input>;
  on_conflict?: Maybe<Pacchetto_Toponimo_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Pacchetto_Toponimo_OneArgs = {
  object: Pacchetto_Toponimo_Insert_Input;
  on_conflict?: Maybe<Pacchetto_Toponimo_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_QuartiereArgs = {
  objects: Array<Quartiere_Insert_Input>;
  on_conflict?: Maybe<Quartiere_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Quartiere_OneArgs = {
  object: Quartiere_Insert_Input;
  on_conflict?: Maybe<Quartiere_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Quartiere_ToponimiArgs = {
  objects: Array<Quartiere_Toponimi_Insert_Input>;
  on_conflict?: Maybe<Quartiere_Toponimi_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Quartiere_Toponimi_OneArgs = {
  object: Quartiere_Toponimi_Insert_Input;
  on_conflict?: Maybe<Quartiere_Toponimi_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_TestArgs = {
  objects: Array<Test_Insert_Input>;
  on_conflict?: Maybe<Test_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Test_OneArgs = {
  object: Test_Insert_Input;
  on_conflict?: Maybe<Test_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_TipologiaArgs = {
  objects: Array<Tipologia_Insert_Input>;
  on_conflict?: Maybe<Tipologia_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Tipologia_OneArgs = {
  object: Tipologia_Insert_Input;
  on_conflict?: Maybe<Tipologia_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ToponimoArgs = {
  objects: Array<Toponimo_Insert_Input>;
  on_conflict?: Maybe<Toponimo_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Toponimo_OneArgs = {
  object: Toponimo_Insert_Input;
  on_conflict?: Maybe<Toponimo_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Vecchia_MunicipalitaArgs = {
  objects: Array<Vecchia_Municipalita_Insert_Input>;
  on_conflict?: Maybe<Vecchia_Municipalita_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Vecchia_Municipalita_OneArgs = {
  object: Vecchia_Municipalita_Insert_Input;
  on_conflict?: Maybe<Vecchia_Municipalita_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Vecchio_QuartiereArgs = {
  objects: Array<Vecchio_Quartiere_Insert_Input>;
  on_conflict?: Maybe<Vecchio_Quartiere_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Vecchio_Quartiere_OneArgs = {
  object: Vecchio_Quartiere_Insert_Input;
  on_conflict?: Maybe<Vecchio_Quartiere_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Vecchio_ToponimoArgs = {
  objects: Array<Vecchio_Toponimo_Insert_Input>;
  on_conflict?: Maybe<Vecchio_Toponimo_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Vecchio_Toponimo_OneArgs = {
  object: Vecchio_Toponimo_Insert_Input;
  on_conflict?: Maybe<Vecchio_Toponimo_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_DugArgs = {
  _inc?: Maybe<Dug_Inc_Input>;
  _set?: Maybe<Dug_Set_Input>;
  where: Dug_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Dug_By_PkArgs = {
  _inc?: Maybe<Dug_Inc_Input>;
  _set?: Maybe<Dug_Set_Input>;
  pk_columns: Dug_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_MunicipalitaArgs = {
  _inc?: Maybe<Municipalita_Inc_Input>;
  _set?: Maybe<Municipalita_Set_Input>;
  where: Municipalita_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Municipalita_By_PkArgs = {
  _inc?: Maybe<Municipalita_Inc_Input>;
  _set?: Maybe<Municipalita_Set_Input>;
  pk_columns: Municipalita_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Municipalita_QuartieriArgs = {
  _inc?: Maybe<Municipalita_Quartieri_Inc_Input>;
  _set?: Maybe<Municipalita_Quartieri_Set_Input>;
  where: Municipalita_Quartieri_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Municipalita_Quartieri_By_PkArgs = {
  _inc?: Maybe<Municipalita_Quartieri_Inc_Input>;
  _set?: Maybe<Municipalita_Quartieri_Set_Input>;
  pk_columns: Municipalita_Quartieri_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Pacchetto_QuartiereArgs = {
  _inc?: Maybe<Pacchetto_Quartiere_Inc_Input>;
  _set?: Maybe<Pacchetto_Quartiere_Set_Input>;
  where: Pacchetto_Quartiere_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Pacchetto_Quartiere_By_PkArgs = {
  _inc?: Maybe<Pacchetto_Quartiere_Inc_Input>;
  _set?: Maybe<Pacchetto_Quartiere_Set_Input>;
  pk_columns: Pacchetto_Quartiere_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Pacchetto_ToponimoArgs = {
  _inc?: Maybe<Pacchetto_Toponimo_Inc_Input>;
  _set?: Maybe<Pacchetto_Toponimo_Set_Input>;
  where: Pacchetto_Toponimo_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Pacchetto_Toponimo_By_PkArgs = {
  _inc?: Maybe<Pacchetto_Toponimo_Inc_Input>;
  _set?: Maybe<Pacchetto_Toponimo_Set_Input>;
  pk_columns: Pacchetto_Toponimo_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_QuartiereArgs = {
  _inc?: Maybe<Quartiere_Inc_Input>;
  _set?: Maybe<Quartiere_Set_Input>;
  where: Quartiere_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Quartiere_By_PkArgs = {
  _inc?: Maybe<Quartiere_Inc_Input>;
  _set?: Maybe<Quartiere_Set_Input>;
  pk_columns: Quartiere_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Quartiere_ToponimiArgs = {
  _inc?: Maybe<Quartiere_Toponimi_Inc_Input>;
  _set?: Maybe<Quartiere_Toponimi_Set_Input>;
  where: Quartiere_Toponimi_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Quartiere_Toponimi_By_PkArgs = {
  _inc?: Maybe<Quartiere_Toponimi_Inc_Input>;
  _set?: Maybe<Quartiere_Toponimi_Set_Input>;
  pk_columns: Quartiere_Toponimi_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_TestArgs = {
  _inc?: Maybe<Test_Inc_Input>;
  _set?: Maybe<Test_Set_Input>;
  where: Test_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Test_By_PkArgs = {
  _inc?: Maybe<Test_Inc_Input>;
  _set?: Maybe<Test_Set_Input>;
  pk_columns: Test_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_TipologiaArgs = {
  _inc?: Maybe<Tipologia_Inc_Input>;
  _set?: Maybe<Tipologia_Set_Input>;
  where: Tipologia_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Tipologia_By_PkArgs = {
  _inc?: Maybe<Tipologia_Inc_Input>;
  _set?: Maybe<Tipologia_Set_Input>;
  pk_columns: Tipologia_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_ToponimoArgs = {
  _inc?: Maybe<Toponimo_Inc_Input>;
  _set?: Maybe<Toponimo_Set_Input>;
  where: Toponimo_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Toponimo_By_PkArgs = {
  _inc?: Maybe<Toponimo_Inc_Input>;
  _set?: Maybe<Toponimo_Set_Input>;
  pk_columns: Toponimo_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Vecchia_MunicipalitaArgs = {
  _inc?: Maybe<Vecchia_Municipalita_Inc_Input>;
  _set?: Maybe<Vecchia_Municipalita_Set_Input>;
  where: Vecchia_Municipalita_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Vecchia_Municipalita_By_PkArgs = {
  _inc?: Maybe<Vecchia_Municipalita_Inc_Input>;
  _set?: Maybe<Vecchia_Municipalita_Set_Input>;
  pk_columns: Vecchia_Municipalita_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Vecchio_QuartiereArgs = {
  _inc?: Maybe<Vecchio_Quartiere_Inc_Input>;
  _set?: Maybe<Vecchio_Quartiere_Set_Input>;
  where: Vecchio_Quartiere_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Vecchio_Quartiere_By_PkArgs = {
  _inc?: Maybe<Vecchio_Quartiere_Inc_Input>;
  _set?: Maybe<Vecchio_Quartiere_Set_Input>;
  pk_columns: Vecchio_Quartiere_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Vecchio_ToponimoArgs = {
  _inc?: Maybe<Vecchio_Toponimo_Inc_Input>;
  _set?: Maybe<Vecchio_Toponimo_Set_Input>;
  where: Vecchio_Toponimo_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Vecchio_Toponimo_By_PkArgs = {
  _inc?: Maybe<Vecchio_Toponimo_Inc_Input>;
  _set?: Maybe<Vecchio_Toponimo_Set_Input>;
  pk_columns: Vecchio_Toponimo_Pk_Columns_Input;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** columns and relationships of "pacchetto_quartiere" */
export type Pacchetto_Quartiere = {
  __typename?: 'pacchetto_quartiere';
  /** An object relationship */
  municipalita: Municipalita_Quartieri;
  pacchetto_id: Scalars['Int'];
  /** An object relationship */
  quartiere: Quartiere;
  quartiere_id: Scalars['Int'];
};

/** aggregated selection of "pacchetto_quartiere" */
export type Pacchetto_Quartiere_Aggregate = {
  __typename?: 'pacchetto_quartiere_aggregate';
  aggregate?: Maybe<Pacchetto_Quartiere_Aggregate_Fields>;
  nodes: Array<Pacchetto_Quartiere>;
};

/** aggregate fields of "pacchetto_quartiere" */
export type Pacchetto_Quartiere_Aggregate_Fields = {
  __typename?: 'pacchetto_quartiere_aggregate_fields';
  avg?: Maybe<Pacchetto_Quartiere_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Pacchetto_Quartiere_Max_Fields>;
  min?: Maybe<Pacchetto_Quartiere_Min_Fields>;
  stddev?: Maybe<Pacchetto_Quartiere_Stddev_Fields>;
  stddev_pop?: Maybe<Pacchetto_Quartiere_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Pacchetto_Quartiere_Stddev_Samp_Fields>;
  sum?: Maybe<Pacchetto_Quartiere_Sum_Fields>;
  var_pop?: Maybe<Pacchetto_Quartiere_Var_Pop_Fields>;
  var_samp?: Maybe<Pacchetto_Quartiere_Var_Samp_Fields>;
  variance?: Maybe<Pacchetto_Quartiere_Variance_Fields>;
};


/** aggregate fields of "pacchetto_quartiere" */
export type Pacchetto_Quartiere_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Pacchetto_Quartiere_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "pacchetto_quartiere" */
export type Pacchetto_Quartiere_Aggregate_Order_By = {
  avg?: Maybe<Pacchetto_Quartiere_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Pacchetto_Quartiere_Max_Order_By>;
  min?: Maybe<Pacchetto_Quartiere_Min_Order_By>;
  stddev?: Maybe<Pacchetto_Quartiere_Stddev_Order_By>;
  stddev_pop?: Maybe<Pacchetto_Quartiere_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Pacchetto_Quartiere_Stddev_Samp_Order_By>;
  sum?: Maybe<Pacchetto_Quartiere_Sum_Order_By>;
  var_pop?: Maybe<Pacchetto_Quartiere_Var_Pop_Order_By>;
  var_samp?: Maybe<Pacchetto_Quartiere_Var_Samp_Order_By>;
  variance?: Maybe<Pacchetto_Quartiere_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "pacchetto_quartiere" */
export type Pacchetto_Quartiere_Arr_Rel_Insert_Input = {
  data: Array<Pacchetto_Quartiere_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Pacchetto_Quartiere_On_Conflict>;
};

/** aggregate avg on columns */
export type Pacchetto_Quartiere_Avg_Fields = {
  __typename?: 'pacchetto_quartiere_avg_fields';
  pacchetto_id?: Maybe<Scalars['Float']>;
  quartiere_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "pacchetto_quartiere" */
export type Pacchetto_Quartiere_Avg_Order_By = {
  pacchetto_id?: Maybe<Order_By>;
  quartiere_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "pacchetto_quartiere". All fields are combined with a logical 'AND'. */
export type Pacchetto_Quartiere_Bool_Exp = {
  _and?: Maybe<Array<Pacchetto_Quartiere_Bool_Exp>>;
  _not?: Maybe<Pacchetto_Quartiere_Bool_Exp>;
  _or?: Maybe<Array<Pacchetto_Quartiere_Bool_Exp>>;
  municipalita?: Maybe<Municipalita_Quartieri_Bool_Exp>;
  pacchetto_id?: Maybe<Int_Comparison_Exp>;
  quartiere?: Maybe<Quartiere_Bool_Exp>;
  quartiere_id?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "pacchetto_quartiere" */
export enum Pacchetto_Quartiere_Constraint {
  /** unique or primary key constraint */
  PacchettoQuartierePkey = 'pacchetto_quartiere_pkey'
}

/** input type for incrementing numeric columns in table "pacchetto_quartiere" */
export type Pacchetto_Quartiere_Inc_Input = {
  pacchetto_id?: Maybe<Scalars['Int']>;
  quartiere_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "pacchetto_quartiere" */
export type Pacchetto_Quartiere_Insert_Input = {
  municipalita?: Maybe<Municipalita_Quartieri_Obj_Rel_Insert_Input>;
  pacchetto_id?: Maybe<Scalars['Int']>;
  quartiere?: Maybe<Quartiere_Obj_Rel_Insert_Input>;
  quartiere_id?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Pacchetto_Quartiere_Max_Fields = {
  __typename?: 'pacchetto_quartiere_max_fields';
  pacchetto_id?: Maybe<Scalars['Int']>;
  quartiere_id?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "pacchetto_quartiere" */
export type Pacchetto_Quartiere_Max_Order_By = {
  pacchetto_id?: Maybe<Order_By>;
  quartiere_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Pacchetto_Quartiere_Min_Fields = {
  __typename?: 'pacchetto_quartiere_min_fields';
  pacchetto_id?: Maybe<Scalars['Int']>;
  quartiere_id?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "pacchetto_quartiere" */
export type Pacchetto_Quartiere_Min_Order_By = {
  pacchetto_id?: Maybe<Order_By>;
  quartiere_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "pacchetto_quartiere" */
export type Pacchetto_Quartiere_Mutation_Response = {
  __typename?: 'pacchetto_quartiere_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Pacchetto_Quartiere>;
};

/** on conflict condition type for table "pacchetto_quartiere" */
export type Pacchetto_Quartiere_On_Conflict = {
  constraint: Pacchetto_Quartiere_Constraint;
  update_columns?: Array<Pacchetto_Quartiere_Update_Column>;
  where?: Maybe<Pacchetto_Quartiere_Bool_Exp>;
};

/** Ordering options when selecting data from "pacchetto_quartiere". */
export type Pacchetto_Quartiere_Order_By = {
  municipalita?: Maybe<Municipalita_Quartieri_Order_By>;
  pacchetto_id?: Maybe<Order_By>;
  quartiere?: Maybe<Quartiere_Order_By>;
  quartiere_id?: Maybe<Order_By>;
};

/** primary key columns input for table: pacchetto_quartiere */
export type Pacchetto_Quartiere_Pk_Columns_Input = {
  pacchetto_id: Scalars['Int'];
  quartiere_id: Scalars['Int'];
};

/** select columns of table "pacchetto_quartiere" */
export enum Pacchetto_Quartiere_Select_Column {
  /** column name */
  PacchettoId = 'pacchetto_id',
  /** column name */
  QuartiereId = 'quartiere_id'
}

/** input type for updating data in table "pacchetto_quartiere" */
export type Pacchetto_Quartiere_Set_Input = {
  pacchetto_id?: Maybe<Scalars['Int']>;
  quartiere_id?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Pacchetto_Quartiere_Stddev_Fields = {
  __typename?: 'pacchetto_quartiere_stddev_fields';
  pacchetto_id?: Maybe<Scalars['Float']>;
  quartiere_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "pacchetto_quartiere" */
export type Pacchetto_Quartiere_Stddev_Order_By = {
  pacchetto_id?: Maybe<Order_By>;
  quartiere_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Pacchetto_Quartiere_Stddev_Pop_Fields = {
  __typename?: 'pacchetto_quartiere_stddev_pop_fields';
  pacchetto_id?: Maybe<Scalars['Float']>;
  quartiere_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "pacchetto_quartiere" */
export type Pacchetto_Quartiere_Stddev_Pop_Order_By = {
  pacchetto_id?: Maybe<Order_By>;
  quartiere_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Pacchetto_Quartiere_Stddev_Samp_Fields = {
  __typename?: 'pacchetto_quartiere_stddev_samp_fields';
  pacchetto_id?: Maybe<Scalars['Float']>;
  quartiere_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "pacchetto_quartiere" */
export type Pacchetto_Quartiere_Stddev_Samp_Order_By = {
  pacchetto_id?: Maybe<Order_By>;
  quartiere_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Pacchetto_Quartiere_Sum_Fields = {
  __typename?: 'pacchetto_quartiere_sum_fields';
  pacchetto_id?: Maybe<Scalars['Int']>;
  quartiere_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "pacchetto_quartiere" */
export type Pacchetto_Quartiere_Sum_Order_By = {
  pacchetto_id?: Maybe<Order_By>;
  quartiere_id?: Maybe<Order_By>;
};

/** update columns of table "pacchetto_quartiere" */
export enum Pacchetto_Quartiere_Update_Column {
  /** column name */
  PacchettoId = 'pacchetto_id',
  /** column name */
  QuartiereId = 'quartiere_id'
}

/** aggregate var_pop on columns */
export type Pacchetto_Quartiere_Var_Pop_Fields = {
  __typename?: 'pacchetto_quartiere_var_pop_fields';
  pacchetto_id?: Maybe<Scalars['Float']>;
  quartiere_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "pacchetto_quartiere" */
export type Pacchetto_Quartiere_Var_Pop_Order_By = {
  pacchetto_id?: Maybe<Order_By>;
  quartiere_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Pacchetto_Quartiere_Var_Samp_Fields = {
  __typename?: 'pacchetto_quartiere_var_samp_fields';
  pacchetto_id?: Maybe<Scalars['Float']>;
  quartiere_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "pacchetto_quartiere" */
export type Pacchetto_Quartiere_Var_Samp_Order_By = {
  pacchetto_id?: Maybe<Order_By>;
  quartiere_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Pacchetto_Quartiere_Variance_Fields = {
  __typename?: 'pacchetto_quartiere_variance_fields';
  pacchetto_id?: Maybe<Scalars['Float']>;
  quartiere_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "pacchetto_quartiere" */
export type Pacchetto_Quartiere_Variance_Order_By = {
  pacchetto_id?: Maybe<Order_By>;
  quartiere_id?: Maybe<Order_By>;
};

/** columns and relationships of "pacchetto_toponimo" */
export type Pacchetto_Toponimo = {
  __typename?: 'pacchetto_toponimo';
  pacchetto_id: Scalars['Int'];
  /** An object relationship */
  quartiere: Quartiere_Toponimi;
  /** An object relationship */
  toponimo: Toponimo;
  toponimo_id: Scalars['Int'];
};

/** aggregated selection of "pacchetto_toponimo" */
export type Pacchetto_Toponimo_Aggregate = {
  __typename?: 'pacchetto_toponimo_aggregate';
  aggregate?: Maybe<Pacchetto_Toponimo_Aggregate_Fields>;
  nodes: Array<Pacchetto_Toponimo>;
};

/** aggregate fields of "pacchetto_toponimo" */
export type Pacchetto_Toponimo_Aggregate_Fields = {
  __typename?: 'pacchetto_toponimo_aggregate_fields';
  avg?: Maybe<Pacchetto_Toponimo_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Pacchetto_Toponimo_Max_Fields>;
  min?: Maybe<Pacchetto_Toponimo_Min_Fields>;
  stddev?: Maybe<Pacchetto_Toponimo_Stddev_Fields>;
  stddev_pop?: Maybe<Pacchetto_Toponimo_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Pacchetto_Toponimo_Stddev_Samp_Fields>;
  sum?: Maybe<Pacchetto_Toponimo_Sum_Fields>;
  var_pop?: Maybe<Pacchetto_Toponimo_Var_Pop_Fields>;
  var_samp?: Maybe<Pacchetto_Toponimo_Var_Samp_Fields>;
  variance?: Maybe<Pacchetto_Toponimo_Variance_Fields>;
};


/** aggregate fields of "pacchetto_toponimo" */
export type Pacchetto_Toponimo_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Pacchetto_Toponimo_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "pacchetto_toponimo" */
export type Pacchetto_Toponimo_Aggregate_Order_By = {
  avg?: Maybe<Pacchetto_Toponimo_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Pacchetto_Toponimo_Max_Order_By>;
  min?: Maybe<Pacchetto_Toponimo_Min_Order_By>;
  stddev?: Maybe<Pacchetto_Toponimo_Stddev_Order_By>;
  stddev_pop?: Maybe<Pacchetto_Toponimo_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Pacchetto_Toponimo_Stddev_Samp_Order_By>;
  sum?: Maybe<Pacchetto_Toponimo_Sum_Order_By>;
  var_pop?: Maybe<Pacchetto_Toponimo_Var_Pop_Order_By>;
  var_samp?: Maybe<Pacchetto_Toponimo_Var_Samp_Order_By>;
  variance?: Maybe<Pacchetto_Toponimo_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "pacchetto_toponimo" */
export type Pacchetto_Toponimo_Arr_Rel_Insert_Input = {
  data: Array<Pacchetto_Toponimo_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Pacchetto_Toponimo_On_Conflict>;
};

/** aggregate avg on columns */
export type Pacchetto_Toponimo_Avg_Fields = {
  __typename?: 'pacchetto_toponimo_avg_fields';
  pacchetto_id?: Maybe<Scalars['Float']>;
  toponimo_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "pacchetto_toponimo" */
export type Pacchetto_Toponimo_Avg_Order_By = {
  pacchetto_id?: Maybe<Order_By>;
  toponimo_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "pacchetto_toponimo". All fields are combined with a logical 'AND'. */
export type Pacchetto_Toponimo_Bool_Exp = {
  _and?: Maybe<Array<Pacchetto_Toponimo_Bool_Exp>>;
  _not?: Maybe<Pacchetto_Toponimo_Bool_Exp>;
  _or?: Maybe<Array<Pacchetto_Toponimo_Bool_Exp>>;
  pacchetto_id?: Maybe<Int_Comparison_Exp>;
  quartiere?: Maybe<Quartiere_Toponimi_Bool_Exp>;
  toponimo?: Maybe<Toponimo_Bool_Exp>;
  toponimo_id?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "pacchetto_toponimo" */
export enum Pacchetto_Toponimo_Constraint {
  /** unique or primary key constraint */
  PacchettoToponimoPkey = 'pacchetto_toponimo_pkey'
}

/** input type for incrementing numeric columns in table "pacchetto_toponimo" */
export type Pacchetto_Toponimo_Inc_Input = {
  pacchetto_id?: Maybe<Scalars['Int']>;
  toponimo_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "pacchetto_toponimo" */
export type Pacchetto_Toponimo_Insert_Input = {
  pacchetto_id?: Maybe<Scalars['Int']>;
  quartiere?: Maybe<Quartiere_Toponimi_Obj_Rel_Insert_Input>;
  toponimo?: Maybe<Toponimo_Obj_Rel_Insert_Input>;
  toponimo_id?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Pacchetto_Toponimo_Max_Fields = {
  __typename?: 'pacchetto_toponimo_max_fields';
  pacchetto_id?: Maybe<Scalars['Int']>;
  toponimo_id?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "pacchetto_toponimo" */
export type Pacchetto_Toponimo_Max_Order_By = {
  pacchetto_id?: Maybe<Order_By>;
  toponimo_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Pacchetto_Toponimo_Min_Fields = {
  __typename?: 'pacchetto_toponimo_min_fields';
  pacchetto_id?: Maybe<Scalars['Int']>;
  toponimo_id?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "pacchetto_toponimo" */
export type Pacchetto_Toponimo_Min_Order_By = {
  pacchetto_id?: Maybe<Order_By>;
  toponimo_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "pacchetto_toponimo" */
export type Pacchetto_Toponimo_Mutation_Response = {
  __typename?: 'pacchetto_toponimo_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Pacchetto_Toponimo>;
};

/** on conflict condition type for table "pacchetto_toponimo" */
export type Pacchetto_Toponimo_On_Conflict = {
  constraint: Pacchetto_Toponimo_Constraint;
  update_columns?: Array<Pacchetto_Toponimo_Update_Column>;
  where?: Maybe<Pacchetto_Toponimo_Bool_Exp>;
};

/** Ordering options when selecting data from "pacchetto_toponimo". */
export type Pacchetto_Toponimo_Order_By = {
  pacchetto_id?: Maybe<Order_By>;
  quartiere?: Maybe<Quartiere_Toponimi_Order_By>;
  toponimo?: Maybe<Toponimo_Order_By>;
  toponimo_id?: Maybe<Order_By>;
};

/** primary key columns input for table: pacchetto_toponimo */
export type Pacchetto_Toponimo_Pk_Columns_Input = {
  pacchetto_id: Scalars['Int'];
  toponimo_id: Scalars['Int'];
};

/** select columns of table "pacchetto_toponimo" */
export enum Pacchetto_Toponimo_Select_Column {
  /** column name */
  PacchettoId = 'pacchetto_id',
  /** column name */
  ToponimoId = 'toponimo_id'
}

/** input type for updating data in table "pacchetto_toponimo" */
export type Pacchetto_Toponimo_Set_Input = {
  pacchetto_id?: Maybe<Scalars['Int']>;
  toponimo_id?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Pacchetto_Toponimo_Stddev_Fields = {
  __typename?: 'pacchetto_toponimo_stddev_fields';
  pacchetto_id?: Maybe<Scalars['Float']>;
  toponimo_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "pacchetto_toponimo" */
export type Pacchetto_Toponimo_Stddev_Order_By = {
  pacchetto_id?: Maybe<Order_By>;
  toponimo_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Pacchetto_Toponimo_Stddev_Pop_Fields = {
  __typename?: 'pacchetto_toponimo_stddev_pop_fields';
  pacchetto_id?: Maybe<Scalars['Float']>;
  toponimo_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "pacchetto_toponimo" */
export type Pacchetto_Toponimo_Stddev_Pop_Order_By = {
  pacchetto_id?: Maybe<Order_By>;
  toponimo_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Pacchetto_Toponimo_Stddev_Samp_Fields = {
  __typename?: 'pacchetto_toponimo_stddev_samp_fields';
  pacchetto_id?: Maybe<Scalars['Float']>;
  toponimo_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "pacchetto_toponimo" */
export type Pacchetto_Toponimo_Stddev_Samp_Order_By = {
  pacchetto_id?: Maybe<Order_By>;
  toponimo_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Pacchetto_Toponimo_Sum_Fields = {
  __typename?: 'pacchetto_toponimo_sum_fields';
  pacchetto_id?: Maybe<Scalars['Int']>;
  toponimo_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "pacchetto_toponimo" */
export type Pacchetto_Toponimo_Sum_Order_By = {
  pacchetto_id?: Maybe<Order_By>;
  toponimo_id?: Maybe<Order_By>;
};

/** update columns of table "pacchetto_toponimo" */
export enum Pacchetto_Toponimo_Update_Column {
  /** column name */
  PacchettoId = 'pacchetto_id',
  /** column name */
  ToponimoId = 'toponimo_id'
}

/** aggregate var_pop on columns */
export type Pacchetto_Toponimo_Var_Pop_Fields = {
  __typename?: 'pacchetto_toponimo_var_pop_fields';
  pacchetto_id?: Maybe<Scalars['Float']>;
  toponimo_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "pacchetto_toponimo" */
export type Pacchetto_Toponimo_Var_Pop_Order_By = {
  pacchetto_id?: Maybe<Order_By>;
  toponimo_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Pacchetto_Toponimo_Var_Samp_Fields = {
  __typename?: 'pacchetto_toponimo_var_samp_fields';
  pacchetto_id?: Maybe<Scalars['Float']>;
  toponimo_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "pacchetto_toponimo" */
export type Pacchetto_Toponimo_Var_Samp_Order_By = {
  pacchetto_id?: Maybe<Order_By>;
  toponimo_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Pacchetto_Toponimo_Variance_Fields = {
  __typename?: 'pacchetto_toponimo_variance_fields';
  pacchetto_id?: Maybe<Scalars['Float']>;
  toponimo_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "pacchetto_toponimo" */
export type Pacchetto_Toponimo_Variance_Order_By = {
  pacchetto_id?: Maybe<Order_By>;
  toponimo_id?: Maybe<Order_By>;
};

/** columns and relationships of "quartiere" */
export type Quartiere = {
  __typename?: 'quartiere';
  created_at: Scalars['timestamptz'];
  id: Scalars['Int'];
  /** An array relationship */
  municipalita: Array<Pacchetto_Quartiere>;
  /** An aggregate relationship */
  municipalita_aggregate: Pacchetto_Quartiere_Aggregate;
  nome: Scalars['String'];
  /** An array relationship */
  pacchetti_toponimo: Array<Quartiere_Toponimi>;
  /** An aggregate relationship */
  pacchetti_toponimo_aggregate: Quartiere_Toponimi_Aggregate;
  updated_at: Scalars['timestamptz'];
  /** An array relationship */
  vecchie_denominazioni: Array<Vecchio_Quartiere>;
  /** An aggregate relationship */
  vecchie_denominazioni_aggregate: Vecchio_Quartiere_Aggregate;
};


/** columns and relationships of "quartiere" */
export type QuartiereMunicipalitaArgs = {
  distinct_on?: Maybe<Array<Pacchetto_Quartiere_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Pacchetto_Quartiere_Order_By>>;
  where?: Maybe<Pacchetto_Quartiere_Bool_Exp>;
};


/** columns and relationships of "quartiere" */
export type QuartiereMunicipalita_AggregateArgs = {
  distinct_on?: Maybe<Array<Pacchetto_Quartiere_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Pacchetto_Quartiere_Order_By>>;
  where?: Maybe<Pacchetto_Quartiere_Bool_Exp>;
};


/** columns and relationships of "quartiere" */
export type QuartierePacchetti_ToponimoArgs = {
  distinct_on?: Maybe<Array<Quartiere_Toponimi_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Quartiere_Toponimi_Order_By>>;
  where?: Maybe<Quartiere_Toponimi_Bool_Exp>;
};


/** columns and relationships of "quartiere" */
export type QuartierePacchetti_Toponimo_AggregateArgs = {
  distinct_on?: Maybe<Array<Quartiere_Toponimi_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Quartiere_Toponimi_Order_By>>;
  where?: Maybe<Quartiere_Toponimi_Bool_Exp>;
};


/** columns and relationships of "quartiere" */
export type QuartiereVecchie_DenominazioniArgs = {
  distinct_on?: Maybe<Array<Vecchio_Quartiere_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Vecchio_Quartiere_Order_By>>;
  where?: Maybe<Vecchio_Quartiere_Bool_Exp>;
};


/** columns and relationships of "quartiere" */
export type QuartiereVecchie_Denominazioni_AggregateArgs = {
  distinct_on?: Maybe<Array<Vecchio_Quartiere_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Vecchio_Quartiere_Order_By>>;
  where?: Maybe<Vecchio_Quartiere_Bool_Exp>;
};

/** aggregated selection of "quartiere" */
export type Quartiere_Aggregate = {
  __typename?: 'quartiere_aggregate';
  aggregate?: Maybe<Quartiere_Aggregate_Fields>;
  nodes: Array<Quartiere>;
};

/** aggregate fields of "quartiere" */
export type Quartiere_Aggregate_Fields = {
  __typename?: 'quartiere_aggregate_fields';
  avg?: Maybe<Quartiere_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Quartiere_Max_Fields>;
  min?: Maybe<Quartiere_Min_Fields>;
  stddev?: Maybe<Quartiere_Stddev_Fields>;
  stddev_pop?: Maybe<Quartiere_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Quartiere_Stddev_Samp_Fields>;
  sum?: Maybe<Quartiere_Sum_Fields>;
  var_pop?: Maybe<Quartiere_Var_Pop_Fields>;
  var_samp?: Maybe<Quartiere_Var_Samp_Fields>;
  variance?: Maybe<Quartiere_Variance_Fields>;
};


/** aggregate fields of "quartiere" */
export type Quartiere_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Quartiere_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Quartiere_Avg_Fields = {
  __typename?: 'quartiere_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "quartiere". All fields are combined with a logical 'AND'. */
export type Quartiere_Bool_Exp = {
  _and?: Maybe<Array<Quartiere_Bool_Exp>>;
  _not?: Maybe<Quartiere_Bool_Exp>;
  _or?: Maybe<Array<Quartiere_Bool_Exp>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  municipalita?: Maybe<Pacchetto_Quartiere_Bool_Exp>;
  nome?: Maybe<String_Comparison_Exp>;
  pacchetti_toponimo?: Maybe<Quartiere_Toponimi_Bool_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  vecchie_denominazioni?: Maybe<Vecchio_Quartiere_Bool_Exp>;
};

/** unique or primary key constraints on table "quartiere" */
export enum Quartiere_Constraint {
  /** unique or primary key constraint */
  QuartierePkey = 'quartiere_pkey'
}

/** input type for incrementing numeric columns in table "quartiere" */
export type Quartiere_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "quartiere" */
export type Quartiere_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  municipalita?: Maybe<Pacchetto_Quartiere_Arr_Rel_Insert_Input>;
  nome?: Maybe<Scalars['String']>;
  pacchetti_toponimo?: Maybe<Quartiere_Toponimi_Arr_Rel_Insert_Input>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  vecchie_denominazioni?: Maybe<Vecchio_Quartiere_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Quartiere_Max_Fields = {
  __typename?: 'quartiere_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  nome?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Quartiere_Min_Fields = {
  __typename?: 'quartiere_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  nome?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "quartiere" */
export type Quartiere_Mutation_Response = {
  __typename?: 'quartiere_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Quartiere>;
};

/** input type for inserting object relation for remote table "quartiere" */
export type Quartiere_Obj_Rel_Insert_Input = {
  data: Quartiere_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Quartiere_On_Conflict>;
};

/** on conflict condition type for table "quartiere" */
export type Quartiere_On_Conflict = {
  constraint: Quartiere_Constraint;
  update_columns?: Array<Quartiere_Update_Column>;
  where?: Maybe<Quartiere_Bool_Exp>;
};

/** Ordering options when selecting data from "quartiere". */
export type Quartiere_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  municipalita_aggregate?: Maybe<Pacchetto_Quartiere_Aggregate_Order_By>;
  nome?: Maybe<Order_By>;
  pacchetti_toponimo_aggregate?: Maybe<Quartiere_Toponimi_Aggregate_Order_By>;
  updated_at?: Maybe<Order_By>;
  vecchie_denominazioni_aggregate?: Maybe<Vecchio_Quartiere_Aggregate_Order_By>;
};

/** primary key columns input for table: quartiere */
export type Quartiere_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "quartiere" */
export enum Quartiere_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Nome = 'nome',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "quartiere" */
export type Quartiere_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  nome?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Quartiere_Stddev_Fields = {
  __typename?: 'quartiere_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Quartiere_Stddev_Pop_Fields = {
  __typename?: 'quartiere_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Quartiere_Stddev_Samp_Fields = {
  __typename?: 'quartiere_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Quartiere_Sum_Fields = {
  __typename?: 'quartiere_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** columns and relationships of "quartiere_toponimi" */
export type Quartiere_Toponimi = {
  __typename?: 'quartiere_toponimi';
  fine_validita?: Maybe<Scalars['timestamptz']>;
  inizio_validita: Scalars['timestamptz'];
  pacchetto_id: Scalars['Int'];
  /** An object relationship */
  quartiere: Quartiere;
  quartiere_id: Scalars['Int'];
  /** An array relationship */
  toponimi: Array<Pacchetto_Toponimo>;
  /** An aggregate relationship */
  toponimi_aggregate: Pacchetto_Toponimo_Aggregate;
};


/** columns and relationships of "quartiere_toponimi" */
export type Quartiere_ToponimiToponimiArgs = {
  distinct_on?: Maybe<Array<Pacchetto_Toponimo_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Pacchetto_Toponimo_Order_By>>;
  where?: Maybe<Pacchetto_Toponimo_Bool_Exp>;
};


/** columns and relationships of "quartiere_toponimi" */
export type Quartiere_ToponimiToponimi_AggregateArgs = {
  distinct_on?: Maybe<Array<Pacchetto_Toponimo_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Pacchetto_Toponimo_Order_By>>;
  where?: Maybe<Pacchetto_Toponimo_Bool_Exp>;
};

/** aggregated selection of "quartiere_toponimi" */
export type Quartiere_Toponimi_Aggregate = {
  __typename?: 'quartiere_toponimi_aggregate';
  aggregate?: Maybe<Quartiere_Toponimi_Aggregate_Fields>;
  nodes: Array<Quartiere_Toponimi>;
};

/** aggregate fields of "quartiere_toponimi" */
export type Quartiere_Toponimi_Aggregate_Fields = {
  __typename?: 'quartiere_toponimi_aggregate_fields';
  avg?: Maybe<Quartiere_Toponimi_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Quartiere_Toponimi_Max_Fields>;
  min?: Maybe<Quartiere_Toponimi_Min_Fields>;
  stddev?: Maybe<Quartiere_Toponimi_Stddev_Fields>;
  stddev_pop?: Maybe<Quartiere_Toponimi_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Quartiere_Toponimi_Stddev_Samp_Fields>;
  sum?: Maybe<Quartiere_Toponimi_Sum_Fields>;
  var_pop?: Maybe<Quartiere_Toponimi_Var_Pop_Fields>;
  var_samp?: Maybe<Quartiere_Toponimi_Var_Samp_Fields>;
  variance?: Maybe<Quartiere_Toponimi_Variance_Fields>;
};


/** aggregate fields of "quartiere_toponimi" */
export type Quartiere_Toponimi_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Quartiere_Toponimi_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "quartiere_toponimi" */
export type Quartiere_Toponimi_Aggregate_Order_By = {
  avg?: Maybe<Quartiere_Toponimi_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Quartiere_Toponimi_Max_Order_By>;
  min?: Maybe<Quartiere_Toponimi_Min_Order_By>;
  stddev?: Maybe<Quartiere_Toponimi_Stddev_Order_By>;
  stddev_pop?: Maybe<Quartiere_Toponimi_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Quartiere_Toponimi_Stddev_Samp_Order_By>;
  sum?: Maybe<Quartiere_Toponimi_Sum_Order_By>;
  var_pop?: Maybe<Quartiere_Toponimi_Var_Pop_Order_By>;
  var_samp?: Maybe<Quartiere_Toponimi_Var_Samp_Order_By>;
  variance?: Maybe<Quartiere_Toponimi_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "quartiere_toponimi" */
export type Quartiere_Toponimi_Arr_Rel_Insert_Input = {
  data: Array<Quartiere_Toponimi_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Quartiere_Toponimi_On_Conflict>;
};

/** aggregate avg on columns */
export type Quartiere_Toponimi_Avg_Fields = {
  __typename?: 'quartiere_toponimi_avg_fields';
  pacchetto_id?: Maybe<Scalars['Float']>;
  quartiere_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "quartiere_toponimi" */
export type Quartiere_Toponimi_Avg_Order_By = {
  pacchetto_id?: Maybe<Order_By>;
  quartiere_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "quartiere_toponimi". All fields are combined with a logical 'AND'. */
export type Quartiere_Toponimi_Bool_Exp = {
  _and?: Maybe<Array<Quartiere_Toponimi_Bool_Exp>>;
  _not?: Maybe<Quartiere_Toponimi_Bool_Exp>;
  _or?: Maybe<Array<Quartiere_Toponimi_Bool_Exp>>;
  fine_validita?: Maybe<Timestamptz_Comparison_Exp>;
  inizio_validita?: Maybe<Timestamptz_Comparison_Exp>;
  pacchetto_id?: Maybe<Int_Comparison_Exp>;
  quartiere?: Maybe<Quartiere_Bool_Exp>;
  quartiere_id?: Maybe<Int_Comparison_Exp>;
  toponimi?: Maybe<Pacchetto_Toponimo_Bool_Exp>;
};

/** unique or primary key constraints on table "quartiere_toponimi" */
export enum Quartiere_Toponimi_Constraint {
  /** unique or primary key constraint */
  QuartiereToponimiPkey = 'quartiere_toponimi_pkey'
}

/** input type for incrementing numeric columns in table "quartiere_toponimi" */
export type Quartiere_Toponimi_Inc_Input = {
  pacchetto_id?: Maybe<Scalars['Int']>;
  quartiere_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "quartiere_toponimi" */
export type Quartiere_Toponimi_Insert_Input = {
  fine_validita?: Maybe<Scalars['timestamptz']>;
  inizio_validita?: Maybe<Scalars['timestamptz']>;
  pacchetto_id?: Maybe<Scalars['Int']>;
  quartiere?: Maybe<Quartiere_Obj_Rel_Insert_Input>;
  quartiere_id?: Maybe<Scalars['Int']>;
  toponimi?: Maybe<Pacchetto_Toponimo_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Quartiere_Toponimi_Max_Fields = {
  __typename?: 'quartiere_toponimi_max_fields';
  fine_validita?: Maybe<Scalars['timestamptz']>;
  inizio_validita?: Maybe<Scalars['timestamptz']>;
  pacchetto_id?: Maybe<Scalars['Int']>;
  quartiere_id?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "quartiere_toponimi" */
export type Quartiere_Toponimi_Max_Order_By = {
  fine_validita?: Maybe<Order_By>;
  inizio_validita?: Maybe<Order_By>;
  pacchetto_id?: Maybe<Order_By>;
  quartiere_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Quartiere_Toponimi_Min_Fields = {
  __typename?: 'quartiere_toponimi_min_fields';
  fine_validita?: Maybe<Scalars['timestamptz']>;
  inizio_validita?: Maybe<Scalars['timestamptz']>;
  pacchetto_id?: Maybe<Scalars['Int']>;
  quartiere_id?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "quartiere_toponimi" */
export type Quartiere_Toponimi_Min_Order_By = {
  fine_validita?: Maybe<Order_By>;
  inizio_validita?: Maybe<Order_By>;
  pacchetto_id?: Maybe<Order_By>;
  quartiere_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "quartiere_toponimi" */
export type Quartiere_Toponimi_Mutation_Response = {
  __typename?: 'quartiere_toponimi_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Quartiere_Toponimi>;
};

/** input type for inserting object relation for remote table "quartiere_toponimi" */
export type Quartiere_Toponimi_Obj_Rel_Insert_Input = {
  data: Quartiere_Toponimi_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Quartiere_Toponimi_On_Conflict>;
};

/** on conflict condition type for table "quartiere_toponimi" */
export type Quartiere_Toponimi_On_Conflict = {
  constraint: Quartiere_Toponimi_Constraint;
  update_columns?: Array<Quartiere_Toponimi_Update_Column>;
  where?: Maybe<Quartiere_Toponimi_Bool_Exp>;
};

/** Ordering options when selecting data from "quartiere_toponimi". */
export type Quartiere_Toponimi_Order_By = {
  fine_validita?: Maybe<Order_By>;
  inizio_validita?: Maybe<Order_By>;
  pacchetto_id?: Maybe<Order_By>;
  quartiere?: Maybe<Quartiere_Order_By>;
  quartiere_id?: Maybe<Order_By>;
  toponimi_aggregate?: Maybe<Pacchetto_Toponimo_Aggregate_Order_By>;
};

/** primary key columns input for table: quartiere_toponimi */
export type Quartiere_Toponimi_Pk_Columns_Input = {
  pacchetto_id: Scalars['Int'];
};

/** select columns of table "quartiere_toponimi" */
export enum Quartiere_Toponimi_Select_Column {
  /** column name */
  FineValidita = 'fine_validita',
  /** column name */
  InizioValidita = 'inizio_validita',
  /** column name */
  PacchettoId = 'pacchetto_id',
  /** column name */
  QuartiereId = 'quartiere_id'
}

/** input type for updating data in table "quartiere_toponimi" */
export type Quartiere_Toponimi_Set_Input = {
  fine_validita?: Maybe<Scalars['timestamptz']>;
  inizio_validita?: Maybe<Scalars['timestamptz']>;
  pacchetto_id?: Maybe<Scalars['Int']>;
  quartiere_id?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Quartiere_Toponimi_Stddev_Fields = {
  __typename?: 'quartiere_toponimi_stddev_fields';
  pacchetto_id?: Maybe<Scalars['Float']>;
  quartiere_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "quartiere_toponimi" */
export type Quartiere_Toponimi_Stddev_Order_By = {
  pacchetto_id?: Maybe<Order_By>;
  quartiere_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Quartiere_Toponimi_Stddev_Pop_Fields = {
  __typename?: 'quartiere_toponimi_stddev_pop_fields';
  pacchetto_id?: Maybe<Scalars['Float']>;
  quartiere_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "quartiere_toponimi" */
export type Quartiere_Toponimi_Stddev_Pop_Order_By = {
  pacchetto_id?: Maybe<Order_By>;
  quartiere_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Quartiere_Toponimi_Stddev_Samp_Fields = {
  __typename?: 'quartiere_toponimi_stddev_samp_fields';
  pacchetto_id?: Maybe<Scalars['Float']>;
  quartiere_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "quartiere_toponimi" */
export type Quartiere_Toponimi_Stddev_Samp_Order_By = {
  pacchetto_id?: Maybe<Order_By>;
  quartiere_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Quartiere_Toponimi_Sum_Fields = {
  __typename?: 'quartiere_toponimi_sum_fields';
  pacchetto_id?: Maybe<Scalars['Int']>;
  quartiere_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "quartiere_toponimi" */
export type Quartiere_Toponimi_Sum_Order_By = {
  pacchetto_id?: Maybe<Order_By>;
  quartiere_id?: Maybe<Order_By>;
};

/** update columns of table "quartiere_toponimi" */
export enum Quartiere_Toponimi_Update_Column {
  /** column name */
  FineValidita = 'fine_validita',
  /** column name */
  InizioValidita = 'inizio_validita',
  /** column name */
  PacchettoId = 'pacchetto_id',
  /** column name */
  QuartiereId = 'quartiere_id'
}

/** aggregate var_pop on columns */
export type Quartiere_Toponimi_Var_Pop_Fields = {
  __typename?: 'quartiere_toponimi_var_pop_fields';
  pacchetto_id?: Maybe<Scalars['Float']>;
  quartiere_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "quartiere_toponimi" */
export type Quartiere_Toponimi_Var_Pop_Order_By = {
  pacchetto_id?: Maybe<Order_By>;
  quartiere_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Quartiere_Toponimi_Var_Samp_Fields = {
  __typename?: 'quartiere_toponimi_var_samp_fields';
  pacchetto_id?: Maybe<Scalars['Float']>;
  quartiere_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "quartiere_toponimi" */
export type Quartiere_Toponimi_Var_Samp_Order_By = {
  pacchetto_id?: Maybe<Order_By>;
  quartiere_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Quartiere_Toponimi_Variance_Fields = {
  __typename?: 'quartiere_toponimi_variance_fields';
  pacchetto_id?: Maybe<Scalars['Float']>;
  quartiere_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "quartiere_toponimi" */
export type Quartiere_Toponimi_Variance_Order_By = {
  pacchetto_id?: Maybe<Order_By>;
  quartiere_id?: Maybe<Order_By>;
};

/** update columns of table "quartiere" */
export enum Quartiere_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Nome = 'nome',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Quartiere_Var_Pop_Fields = {
  __typename?: 'quartiere_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Quartiere_Var_Samp_Fields = {
  __typename?: 'quartiere_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Quartiere_Variance_Fields = {
  __typename?: 'quartiere_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "dug" */
  dug: Array<Dug>;
  /** fetch aggregated fields from the table: "dug" */
  dug_aggregate: Dug_Aggregate;
  /** fetch data from the table: "dug" using primary key columns */
  dug_by_pk?: Maybe<Dug>;
  /** fetch data from the table: "municipalita" */
  municipalita: Array<Municipalita>;
  /** fetch aggregated fields from the table: "municipalita" */
  municipalita_aggregate: Municipalita_Aggregate;
  /** fetch data from the table: "municipalita" using primary key columns */
  municipalita_by_pk?: Maybe<Municipalita>;
  /** fetch data from the table: "municipalita_quartieri" */
  municipalita_quartieri: Array<Municipalita_Quartieri>;
  /** fetch aggregated fields from the table: "municipalita_quartieri" */
  municipalita_quartieri_aggregate: Municipalita_Quartieri_Aggregate;
  /** fetch data from the table: "municipalita_quartieri" using primary key columns */
  municipalita_quartieri_by_pk?: Maybe<Municipalita_Quartieri>;
  /** fetch data from the table: "pacchetto_quartiere" */
  pacchetto_quartiere: Array<Pacchetto_Quartiere>;
  /** fetch aggregated fields from the table: "pacchetto_quartiere" */
  pacchetto_quartiere_aggregate: Pacchetto_Quartiere_Aggregate;
  /** fetch data from the table: "pacchetto_quartiere" using primary key columns */
  pacchetto_quartiere_by_pk?: Maybe<Pacchetto_Quartiere>;
  /** fetch data from the table: "pacchetto_toponimo" */
  pacchetto_toponimo: Array<Pacchetto_Toponimo>;
  /** fetch aggregated fields from the table: "pacchetto_toponimo" */
  pacchetto_toponimo_aggregate: Pacchetto_Toponimo_Aggregate;
  /** fetch data from the table: "pacchetto_toponimo" using primary key columns */
  pacchetto_toponimo_by_pk?: Maybe<Pacchetto_Toponimo>;
  /** fetch data from the table: "quartiere" */
  quartiere: Array<Quartiere>;
  /** fetch aggregated fields from the table: "quartiere" */
  quartiere_aggregate: Quartiere_Aggregate;
  /** fetch data from the table: "quartiere" using primary key columns */
  quartiere_by_pk?: Maybe<Quartiere>;
  /** fetch data from the table: "quartiere_toponimi" */
  quartiere_toponimi: Array<Quartiere_Toponimi>;
  /** fetch aggregated fields from the table: "quartiere_toponimi" */
  quartiere_toponimi_aggregate: Quartiere_Toponimi_Aggregate;
  /** fetch data from the table: "quartiere_toponimi" using primary key columns */
  quartiere_toponimi_by_pk?: Maybe<Quartiere_Toponimi>;
  /** fetch data from the table: "test" */
  test: Array<Test>;
  /** fetch aggregated fields from the table: "test" */
  test_aggregate: Test_Aggregate;
  /** fetch data from the table: "test" using primary key columns */
  test_by_pk?: Maybe<Test>;
  /** fetch data from the table: "tipologia" */
  tipologia: Array<Tipologia>;
  /** fetch aggregated fields from the table: "tipologia" */
  tipologia_aggregate: Tipologia_Aggregate;
  /** fetch data from the table: "tipologia" using primary key columns */
  tipologia_by_pk?: Maybe<Tipologia>;
  /** fetch data from the table: "toponimo" */
  toponimo: Array<Toponimo>;
  /** fetch aggregated fields from the table: "toponimo" */
  toponimo_aggregate: Toponimo_Aggregate;
  /** fetch data from the table: "toponimo" using primary key columns */
  toponimo_by_pk?: Maybe<Toponimo>;
  /** fetch data from the table: "vecchia_municipalita" */
  vecchia_municipalita: Array<Vecchia_Municipalita>;
  /** fetch aggregated fields from the table: "vecchia_municipalita" */
  vecchia_municipalita_aggregate: Vecchia_Municipalita_Aggregate;
  /** fetch data from the table: "vecchia_municipalita" using primary key columns */
  vecchia_municipalita_by_pk?: Maybe<Vecchia_Municipalita>;
  /** fetch data from the table: "vecchio_quartiere" */
  vecchio_quartiere: Array<Vecchio_Quartiere>;
  /** fetch aggregated fields from the table: "vecchio_quartiere" */
  vecchio_quartiere_aggregate: Vecchio_Quartiere_Aggregate;
  /** fetch data from the table: "vecchio_quartiere" using primary key columns */
  vecchio_quartiere_by_pk?: Maybe<Vecchio_Quartiere>;
  /** fetch data from the table: "vecchio_toponimo" */
  vecchio_toponimo: Array<Vecchio_Toponimo>;
  /** fetch aggregated fields from the table: "vecchio_toponimo" */
  vecchio_toponimo_aggregate: Vecchio_Toponimo_Aggregate;
  /** fetch data from the table: "vecchio_toponimo" using primary key columns */
  vecchio_toponimo_by_pk?: Maybe<Vecchio_Toponimo>;
};


export type Query_RootDugArgs = {
  distinct_on?: Maybe<Array<Dug_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Dug_Order_By>>;
  where?: Maybe<Dug_Bool_Exp>;
};


export type Query_RootDug_AggregateArgs = {
  distinct_on?: Maybe<Array<Dug_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Dug_Order_By>>;
  where?: Maybe<Dug_Bool_Exp>;
};


export type Query_RootDug_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootMunicipalitaArgs = {
  distinct_on?: Maybe<Array<Municipalita_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Municipalita_Order_By>>;
  where?: Maybe<Municipalita_Bool_Exp>;
};


export type Query_RootMunicipalita_AggregateArgs = {
  distinct_on?: Maybe<Array<Municipalita_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Municipalita_Order_By>>;
  where?: Maybe<Municipalita_Bool_Exp>;
};


export type Query_RootMunicipalita_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootMunicipalita_QuartieriArgs = {
  distinct_on?: Maybe<Array<Municipalita_Quartieri_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Municipalita_Quartieri_Order_By>>;
  where?: Maybe<Municipalita_Quartieri_Bool_Exp>;
};


export type Query_RootMunicipalita_Quartieri_AggregateArgs = {
  distinct_on?: Maybe<Array<Municipalita_Quartieri_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Municipalita_Quartieri_Order_By>>;
  where?: Maybe<Municipalita_Quartieri_Bool_Exp>;
};


export type Query_RootMunicipalita_Quartieri_By_PkArgs = {
  pacchetto_id: Scalars['Int'];
};


export type Query_RootPacchetto_QuartiereArgs = {
  distinct_on?: Maybe<Array<Pacchetto_Quartiere_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Pacchetto_Quartiere_Order_By>>;
  where?: Maybe<Pacchetto_Quartiere_Bool_Exp>;
};


export type Query_RootPacchetto_Quartiere_AggregateArgs = {
  distinct_on?: Maybe<Array<Pacchetto_Quartiere_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Pacchetto_Quartiere_Order_By>>;
  where?: Maybe<Pacchetto_Quartiere_Bool_Exp>;
};


export type Query_RootPacchetto_Quartiere_By_PkArgs = {
  pacchetto_id: Scalars['Int'];
  quartiere_id: Scalars['Int'];
};


export type Query_RootPacchetto_ToponimoArgs = {
  distinct_on?: Maybe<Array<Pacchetto_Toponimo_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Pacchetto_Toponimo_Order_By>>;
  where?: Maybe<Pacchetto_Toponimo_Bool_Exp>;
};


export type Query_RootPacchetto_Toponimo_AggregateArgs = {
  distinct_on?: Maybe<Array<Pacchetto_Toponimo_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Pacchetto_Toponimo_Order_By>>;
  where?: Maybe<Pacchetto_Toponimo_Bool_Exp>;
};


export type Query_RootPacchetto_Toponimo_By_PkArgs = {
  pacchetto_id: Scalars['Int'];
  toponimo_id: Scalars['Int'];
};


export type Query_RootQuartiereArgs = {
  distinct_on?: Maybe<Array<Quartiere_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Quartiere_Order_By>>;
  where?: Maybe<Quartiere_Bool_Exp>;
};


export type Query_RootQuartiere_AggregateArgs = {
  distinct_on?: Maybe<Array<Quartiere_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Quartiere_Order_By>>;
  where?: Maybe<Quartiere_Bool_Exp>;
};


export type Query_RootQuartiere_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootQuartiere_ToponimiArgs = {
  distinct_on?: Maybe<Array<Quartiere_Toponimi_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Quartiere_Toponimi_Order_By>>;
  where?: Maybe<Quartiere_Toponimi_Bool_Exp>;
};


export type Query_RootQuartiere_Toponimi_AggregateArgs = {
  distinct_on?: Maybe<Array<Quartiere_Toponimi_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Quartiere_Toponimi_Order_By>>;
  where?: Maybe<Quartiere_Toponimi_Bool_Exp>;
};


export type Query_RootQuartiere_Toponimi_By_PkArgs = {
  pacchetto_id: Scalars['Int'];
};


export type Query_RootTestArgs = {
  distinct_on?: Maybe<Array<Test_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Test_Order_By>>;
  where?: Maybe<Test_Bool_Exp>;
};


export type Query_RootTest_AggregateArgs = {
  distinct_on?: Maybe<Array<Test_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Test_Order_By>>;
  where?: Maybe<Test_Bool_Exp>;
};


export type Query_RootTest_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootTipologiaArgs = {
  distinct_on?: Maybe<Array<Tipologia_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Tipologia_Order_By>>;
  where?: Maybe<Tipologia_Bool_Exp>;
};


export type Query_RootTipologia_AggregateArgs = {
  distinct_on?: Maybe<Array<Tipologia_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Tipologia_Order_By>>;
  where?: Maybe<Tipologia_Bool_Exp>;
};


export type Query_RootTipologia_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootToponimoArgs = {
  distinct_on?: Maybe<Array<Toponimo_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Toponimo_Order_By>>;
  where?: Maybe<Toponimo_Bool_Exp>;
};


export type Query_RootToponimo_AggregateArgs = {
  distinct_on?: Maybe<Array<Toponimo_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Toponimo_Order_By>>;
  where?: Maybe<Toponimo_Bool_Exp>;
};


export type Query_RootToponimo_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootVecchia_MunicipalitaArgs = {
  distinct_on?: Maybe<Array<Vecchia_Municipalita_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Vecchia_Municipalita_Order_By>>;
  where?: Maybe<Vecchia_Municipalita_Bool_Exp>;
};


export type Query_RootVecchia_Municipalita_AggregateArgs = {
  distinct_on?: Maybe<Array<Vecchia_Municipalita_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Vecchia_Municipalita_Order_By>>;
  where?: Maybe<Vecchia_Municipalita_Bool_Exp>;
};


export type Query_RootVecchia_Municipalita_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootVecchio_QuartiereArgs = {
  distinct_on?: Maybe<Array<Vecchio_Quartiere_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Vecchio_Quartiere_Order_By>>;
  where?: Maybe<Vecchio_Quartiere_Bool_Exp>;
};


export type Query_RootVecchio_Quartiere_AggregateArgs = {
  distinct_on?: Maybe<Array<Vecchio_Quartiere_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Vecchio_Quartiere_Order_By>>;
  where?: Maybe<Vecchio_Quartiere_Bool_Exp>;
};


export type Query_RootVecchio_Quartiere_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootVecchio_ToponimoArgs = {
  distinct_on?: Maybe<Array<Vecchio_Toponimo_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Vecchio_Toponimo_Order_By>>;
  where?: Maybe<Vecchio_Toponimo_Bool_Exp>;
};


export type Query_RootVecchio_Toponimo_AggregateArgs = {
  distinct_on?: Maybe<Array<Vecchio_Toponimo_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Vecchio_Toponimo_Order_By>>;
  where?: Maybe<Vecchio_Toponimo_Bool_Exp>;
};


export type Query_RootVecchio_Toponimo_By_PkArgs = {
  id: Scalars['Int'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "dug" */
  dug: Array<Dug>;
  /** fetch aggregated fields from the table: "dug" */
  dug_aggregate: Dug_Aggregate;
  /** fetch data from the table: "dug" using primary key columns */
  dug_by_pk?: Maybe<Dug>;
  /** fetch data from the table: "municipalita" */
  municipalita: Array<Municipalita>;
  /** fetch aggregated fields from the table: "municipalita" */
  municipalita_aggregate: Municipalita_Aggregate;
  /** fetch data from the table: "municipalita" using primary key columns */
  municipalita_by_pk?: Maybe<Municipalita>;
  /** fetch data from the table: "municipalita_quartieri" */
  municipalita_quartieri: Array<Municipalita_Quartieri>;
  /** fetch aggregated fields from the table: "municipalita_quartieri" */
  municipalita_quartieri_aggregate: Municipalita_Quartieri_Aggregate;
  /** fetch data from the table: "municipalita_quartieri" using primary key columns */
  municipalita_quartieri_by_pk?: Maybe<Municipalita_Quartieri>;
  /** fetch data from the table: "pacchetto_quartiere" */
  pacchetto_quartiere: Array<Pacchetto_Quartiere>;
  /** fetch aggregated fields from the table: "pacchetto_quartiere" */
  pacchetto_quartiere_aggregate: Pacchetto_Quartiere_Aggregate;
  /** fetch data from the table: "pacchetto_quartiere" using primary key columns */
  pacchetto_quartiere_by_pk?: Maybe<Pacchetto_Quartiere>;
  /** fetch data from the table: "pacchetto_toponimo" */
  pacchetto_toponimo: Array<Pacchetto_Toponimo>;
  /** fetch aggregated fields from the table: "pacchetto_toponimo" */
  pacchetto_toponimo_aggregate: Pacchetto_Toponimo_Aggregate;
  /** fetch data from the table: "pacchetto_toponimo" using primary key columns */
  pacchetto_toponimo_by_pk?: Maybe<Pacchetto_Toponimo>;
  /** fetch data from the table: "quartiere" */
  quartiere: Array<Quartiere>;
  /** fetch aggregated fields from the table: "quartiere" */
  quartiere_aggregate: Quartiere_Aggregate;
  /** fetch data from the table: "quartiere" using primary key columns */
  quartiere_by_pk?: Maybe<Quartiere>;
  /** fetch data from the table: "quartiere_toponimi" */
  quartiere_toponimi: Array<Quartiere_Toponimi>;
  /** fetch aggregated fields from the table: "quartiere_toponimi" */
  quartiere_toponimi_aggregate: Quartiere_Toponimi_Aggregate;
  /** fetch data from the table: "quartiere_toponimi" using primary key columns */
  quartiere_toponimi_by_pk?: Maybe<Quartiere_Toponimi>;
  /** fetch data from the table: "test" */
  test: Array<Test>;
  /** fetch aggregated fields from the table: "test" */
  test_aggregate: Test_Aggregate;
  /** fetch data from the table: "test" using primary key columns */
  test_by_pk?: Maybe<Test>;
  /** fetch data from the table: "tipologia" */
  tipologia: Array<Tipologia>;
  /** fetch aggregated fields from the table: "tipologia" */
  tipologia_aggregate: Tipologia_Aggregate;
  /** fetch data from the table: "tipologia" using primary key columns */
  tipologia_by_pk?: Maybe<Tipologia>;
  /** fetch data from the table: "toponimo" */
  toponimo: Array<Toponimo>;
  /** fetch aggregated fields from the table: "toponimo" */
  toponimo_aggregate: Toponimo_Aggregate;
  /** fetch data from the table: "toponimo" using primary key columns */
  toponimo_by_pk?: Maybe<Toponimo>;
  /** fetch data from the table: "vecchia_municipalita" */
  vecchia_municipalita: Array<Vecchia_Municipalita>;
  /** fetch aggregated fields from the table: "vecchia_municipalita" */
  vecchia_municipalita_aggregate: Vecchia_Municipalita_Aggregate;
  /** fetch data from the table: "vecchia_municipalita" using primary key columns */
  vecchia_municipalita_by_pk?: Maybe<Vecchia_Municipalita>;
  /** fetch data from the table: "vecchio_quartiere" */
  vecchio_quartiere: Array<Vecchio_Quartiere>;
  /** fetch aggregated fields from the table: "vecchio_quartiere" */
  vecchio_quartiere_aggregate: Vecchio_Quartiere_Aggregate;
  /** fetch data from the table: "vecchio_quartiere" using primary key columns */
  vecchio_quartiere_by_pk?: Maybe<Vecchio_Quartiere>;
  /** fetch data from the table: "vecchio_toponimo" */
  vecchio_toponimo: Array<Vecchio_Toponimo>;
  /** fetch aggregated fields from the table: "vecchio_toponimo" */
  vecchio_toponimo_aggregate: Vecchio_Toponimo_Aggregate;
  /** fetch data from the table: "vecchio_toponimo" using primary key columns */
  vecchio_toponimo_by_pk?: Maybe<Vecchio_Toponimo>;
};


export type Subscription_RootDugArgs = {
  distinct_on?: Maybe<Array<Dug_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Dug_Order_By>>;
  where?: Maybe<Dug_Bool_Exp>;
};


export type Subscription_RootDug_AggregateArgs = {
  distinct_on?: Maybe<Array<Dug_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Dug_Order_By>>;
  where?: Maybe<Dug_Bool_Exp>;
};


export type Subscription_RootDug_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootMunicipalitaArgs = {
  distinct_on?: Maybe<Array<Municipalita_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Municipalita_Order_By>>;
  where?: Maybe<Municipalita_Bool_Exp>;
};


export type Subscription_RootMunicipalita_AggregateArgs = {
  distinct_on?: Maybe<Array<Municipalita_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Municipalita_Order_By>>;
  where?: Maybe<Municipalita_Bool_Exp>;
};


export type Subscription_RootMunicipalita_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootMunicipalita_QuartieriArgs = {
  distinct_on?: Maybe<Array<Municipalita_Quartieri_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Municipalita_Quartieri_Order_By>>;
  where?: Maybe<Municipalita_Quartieri_Bool_Exp>;
};


export type Subscription_RootMunicipalita_Quartieri_AggregateArgs = {
  distinct_on?: Maybe<Array<Municipalita_Quartieri_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Municipalita_Quartieri_Order_By>>;
  where?: Maybe<Municipalita_Quartieri_Bool_Exp>;
};


export type Subscription_RootMunicipalita_Quartieri_By_PkArgs = {
  pacchetto_id: Scalars['Int'];
};


export type Subscription_RootPacchetto_QuartiereArgs = {
  distinct_on?: Maybe<Array<Pacchetto_Quartiere_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Pacchetto_Quartiere_Order_By>>;
  where?: Maybe<Pacchetto_Quartiere_Bool_Exp>;
};


export type Subscription_RootPacchetto_Quartiere_AggregateArgs = {
  distinct_on?: Maybe<Array<Pacchetto_Quartiere_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Pacchetto_Quartiere_Order_By>>;
  where?: Maybe<Pacchetto_Quartiere_Bool_Exp>;
};


export type Subscription_RootPacchetto_Quartiere_By_PkArgs = {
  pacchetto_id: Scalars['Int'];
  quartiere_id: Scalars['Int'];
};


export type Subscription_RootPacchetto_ToponimoArgs = {
  distinct_on?: Maybe<Array<Pacchetto_Toponimo_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Pacchetto_Toponimo_Order_By>>;
  where?: Maybe<Pacchetto_Toponimo_Bool_Exp>;
};


export type Subscription_RootPacchetto_Toponimo_AggregateArgs = {
  distinct_on?: Maybe<Array<Pacchetto_Toponimo_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Pacchetto_Toponimo_Order_By>>;
  where?: Maybe<Pacchetto_Toponimo_Bool_Exp>;
};


export type Subscription_RootPacchetto_Toponimo_By_PkArgs = {
  pacchetto_id: Scalars['Int'];
  toponimo_id: Scalars['Int'];
};


export type Subscription_RootQuartiereArgs = {
  distinct_on?: Maybe<Array<Quartiere_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Quartiere_Order_By>>;
  where?: Maybe<Quartiere_Bool_Exp>;
};


export type Subscription_RootQuartiere_AggregateArgs = {
  distinct_on?: Maybe<Array<Quartiere_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Quartiere_Order_By>>;
  where?: Maybe<Quartiere_Bool_Exp>;
};


export type Subscription_RootQuartiere_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootQuartiere_ToponimiArgs = {
  distinct_on?: Maybe<Array<Quartiere_Toponimi_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Quartiere_Toponimi_Order_By>>;
  where?: Maybe<Quartiere_Toponimi_Bool_Exp>;
};


export type Subscription_RootQuartiere_Toponimi_AggregateArgs = {
  distinct_on?: Maybe<Array<Quartiere_Toponimi_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Quartiere_Toponimi_Order_By>>;
  where?: Maybe<Quartiere_Toponimi_Bool_Exp>;
};


export type Subscription_RootQuartiere_Toponimi_By_PkArgs = {
  pacchetto_id: Scalars['Int'];
};


export type Subscription_RootTestArgs = {
  distinct_on?: Maybe<Array<Test_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Test_Order_By>>;
  where?: Maybe<Test_Bool_Exp>;
};


export type Subscription_RootTest_AggregateArgs = {
  distinct_on?: Maybe<Array<Test_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Test_Order_By>>;
  where?: Maybe<Test_Bool_Exp>;
};


export type Subscription_RootTest_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootTipologiaArgs = {
  distinct_on?: Maybe<Array<Tipologia_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Tipologia_Order_By>>;
  where?: Maybe<Tipologia_Bool_Exp>;
};


export type Subscription_RootTipologia_AggregateArgs = {
  distinct_on?: Maybe<Array<Tipologia_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Tipologia_Order_By>>;
  where?: Maybe<Tipologia_Bool_Exp>;
};


export type Subscription_RootTipologia_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootToponimoArgs = {
  distinct_on?: Maybe<Array<Toponimo_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Toponimo_Order_By>>;
  where?: Maybe<Toponimo_Bool_Exp>;
};


export type Subscription_RootToponimo_AggregateArgs = {
  distinct_on?: Maybe<Array<Toponimo_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Toponimo_Order_By>>;
  where?: Maybe<Toponimo_Bool_Exp>;
};


export type Subscription_RootToponimo_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootVecchia_MunicipalitaArgs = {
  distinct_on?: Maybe<Array<Vecchia_Municipalita_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Vecchia_Municipalita_Order_By>>;
  where?: Maybe<Vecchia_Municipalita_Bool_Exp>;
};


export type Subscription_RootVecchia_Municipalita_AggregateArgs = {
  distinct_on?: Maybe<Array<Vecchia_Municipalita_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Vecchia_Municipalita_Order_By>>;
  where?: Maybe<Vecchia_Municipalita_Bool_Exp>;
};


export type Subscription_RootVecchia_Municipalita_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootVecchio_QuartiereArgs = {
  distinct_on?: Maybe<Array<Vecchio_Quartiere_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Vecchio_Quartiere_Order_By>>;
  where?: Maybe<Vecchio_Quartiere_Bool_Exp>;
};


export type Subscription_RootVecchio_Quartiere_AggregateArgs = {
  distinct_on?: Maybe<Array<Vecchio_Quartiere_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Vecchio_Quartiere_Order_By>>;
  where?: Maybe<Vecchio_Quartiere_Bool_Exp>;
};


export type Subscription_RootVecchio_Quartiere_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootVecchio_ToponimoArgs = {
  distinct_on?: Maybe<Array<Vecchio_Toponimo_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Vecchio_Toponimo_Order_By>>;
  where?: Maybe<Vecchio_Toponimo_Bool_Exp>;
};


export type Subscription_RootVecchio_Toponimo_AggregateArgs = {
  distinct_on?: Maybe<Array<Vecchio_Toponimo_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Vecchio_Toponimo_Order_By>>;
  where?: Maybe<Vecchio_Toponimo_Bool_Exp>;
};


export type Subscription_RootVecchio_Toponimo_By_PkArgs = {
  id: Scalars['Int'];
};

/** columns and relationships of "test" */
export type Test = {
  __typename?: 'test';
  count: Scalars['Int'];
  dcount: Scalars['Int'];
  id: Scalars['Int'];
};

/** aggregated selection of "test" */
export type Test_Aggregate = {
  __typename?: 'test_aggregate';
  aggregate?: Maybe<Test_Aggregate_Fields>;
  nodes: Array<Test>;
};

/** aggregate fields of "test" */
export type Test_Aggregate_Fields = {
  __typename?: 'test_aggregate_fields';
  avg?: Maybe<Test_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Test_Max_Fields>;
  min?: Maybe<Test_Min_Fields>;
  stddev?: Maybe<Test_Stddev_Fields>;
  stddev_pop?: Maybe<Test_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Test_Stddev_Samp_Fields>;
  sum?: Maybe<Test_Sum_Fields>;
  var_pop?: Maybe<Test_Var_Pop_Fields>;
  var_samp?: Maybe<Test_Var_Samp_Fields>;
  variance?: Maybe<Test_Variance_Fields>;
};


/** aggregate fields of "test" */
export type Test_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Test_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Test_Avg_Fields = {
  __typename?: 'test_avg_fields';
  count?: Maybe<Scalars['Float']>;
  dcount?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "test". All fields are combined with a logical 'AND'. */
export type Test_Bool_Exp = {
  _and?: Maybe<Array<Test_Bool_Exp>>;
  _not?: Maybe<Test_Bool_Exp>;
  _or?: Maybe<Array<Test_Bool_Exp>>;
  count?: Maybe<Int_Comparison_Exp>;
  dcount?: Maybe<Int_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "test" */
export enum Test_Constraint {
  /** unique or primary key constraint */
  TestPkey = 'test_pkey'
}

/** input type for incrementing numeric columns in table "test" */
export type Test_Inc_Input = {
  count?: Maybe<Scalars['Int']>;
  dcount?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "test" */
export type Test_Insert_Input = {
  count?: Maybe<Scalars['Int']>;
  dcount?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Test_Max_Fields = {
  __typename?: 'test_max_fields';
  count?: Maybe<Scalars['Int']>;
  dcount?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

/** aggregate min on columns */
export type Test_Min_Fields = {
  __typename?: 'test_min_fields';
  count?: Maybe<Scalars['Int']>;
  dcount?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

/** response of any mutation on the table "test" */
export type Test_Mutation_Response = {
  __typename?: 'test_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Test>;
};

/** on conflict condition type for table "test" */
export type Test_On_Conflict = {
  constraint: Test_Constraint;
  update_columns?: Array<Test_Update_Column>;
  where?: Maybe<Test_Bool_Exp>;
};

/** Ordering options when selecting data from "test". */
export type Test_Order_By = {
  count?: Maybe<Order_By>;
  dcount?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** primary key columns input for table: test */
export type Test_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "test" */
export enum Test_Select_Column {
  /** column name */
  Count = 'count',
  /** column name */
  Dcount = 'dcount',
  /** column name */
  Id = 'id'
}

/** input type for updating data in table "test" */
export type Test_Set_Input = {
  count?: Maybe<Scalars['Int']>;
  dcount?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Test_Stddev_Fields = {
  __typename?: 'test_stddev_fields';
  count?: Maybe<Scalars['Float']>;
  dcount?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Test_Stddev_Pop_Fields = {
  __typename?: 'test_stddev_pop_fields';
  count?: Maybe<Scalars['Float']>;
  dcount?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Test_Stddev_Samp_Fields = {
  __typename?: 'test_stddev_samp_fields';
  count?: Maybe<Scalars['Float']>;
  dcount?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Test_Sum_Fields = {
  __typename?: 'test_sum_fields';
  count?: Maybe<Scalars['Int']>;
  dcount?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "test" */
export enum Test_Update_Column {
  /** column name */
  Count = 'count',
  /** column name */
  Dcount = 'dcount',
  /** column name */
  Id = 'id'
}

/** aggregate var_pop on columns */
export type Test_Var_Pop_Fields = {
  __typename?: 'test_var_pop_fields';
  count?: Maybe<Scalars['Float']>;
  dcount?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Test_Var_Samp_Fields = {
  __typename?: 'test_var_samp_fields';
  count?: Maybe<Scalars['Float']>;
  dcount?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Test_Variance_Fields = {
  __typename?: 'test_variance_fields';
  count?: Maybe<Scalars['Float']>;
  dcount?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamptz']>;
  _gt?: Maybe<Scalars['timestamptz']>;
  _gte?: Maybe<Scalars['timestamptz']>;
  _in?: Maybe<Array<Scalars['timestamptz']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timestamptz']>;
  _lte?: Maybe<Scalars['timestamptz']>;
  _neq?: Maybe<Scalars['timestamptz']>;
  _nin?: Maybe<Array<Scalars['timestamptz']>>;
};

/** columns and relationships of "tipologia" */
export type Tipologia = {
  __typename?: 'tipologia';
  created_at: Scalars['timestamptz'];
  id: Scalars['Int'];
  nome: Scalars['String'];
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "tipologia" */
export type Tipologia_Aggregate = {
  __typename?: 'tipologia_aggregate';
  aggregate?: Maybe<Tipologia_Aggregate_Fields>;
  nodes: Array<Tipologia>;
};

/** aggregate fields of "tipologia" */
export type Tipologia_Aggregate_Fields = {
  __typename?: 'tipologia_aggregate_fields';
  avg?: Maybe<Tipologia_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Tipologia_Max_Fields>;
  min?: Maybe<Tipologia_Min_Fields>;
  stddev?: Maybe<Tipologia_Stddev_Fields>;
  stddev_pop?: Maybe<Tipologia_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Tipologia_Stddev_Samp_Fields>;
  sum?: Maybe<Tipologia_Sum_Fields>;
  var_pop?: Maybe<Tipologia_Var_Pop_Fields>;
  var_samp?: Maybe<Tipologia_Var_Samp_Fields>;
  variance?: Maybe<Tipologia_Variance_Fields>;
};


/** aggregate fields of "tipologia" */
export type Tipologia_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Tipologia_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Tipologia_Avg_Fields = {
  __typename?: 'tipologia_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "tipologia". All fields are combined with a logical 'AND'. */
export type Tipologia_Bool_Exp = {
  _and?: Maybe<Array<Tipologia_Bool_Exp>>;
  _not?: Maybe<Tipologia_Bool_Exp>;
  _or?: Maybe<Array<Tipologia_Bool_Exp>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  nome?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "tipologia" */
export enum Tipologia_Constraint {
  /** unique or primary key constraint */
  TipologiaPkey = 'tipologia_pkey'
}

/** input type for incrementing numeric columns in table "tipologia" */
export type Tipologia_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "tipologia" */
export type Tipologia_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  nome?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Tipologia_Max_Fields = {
  __typename?: 'tipologia_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  nome?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Tipologia_Min_Fields = {
  __typename?: 'tipologia_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  nome?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "tipologia" */
export type Tipologia_Mutation_Response = {
  __typename?: 'tipologia_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Tipologia>;
};

/** input type for inserting object relation for remote table "tipologia" */
export type Tipologia_Obj_Rel_Insert_Input = {
  data: Tipologia_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Tipologia_On_Conflict>;
};

/** on conflict condition type for table "tipologia" */
export type Tipologia_On_Conflict = {
  constraint: Tipologia_Constraint;
  update_columns?: Array<Tipologia_Update_Column>;
  where?: Maybe<Tipologia_Bool_Exp>;
};

/** Ordering options when selecting data from "tipologia". */
export type Tipologia_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  nome?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: tipologia */
export type Tipologia_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "tipologia" */
export enum Tipologia_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Nome = 'nome',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "tipologia" */
export type Tipologia_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  nome?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Tipologia_Stddev_Fields = {
  __typename?: 'tipologia_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Tipologia_Stddev_Pop_Fields = {
  __typename?: 'tipologia_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Tipologia_Stddev_Samp_Fields = {
  __typename?: 'tipologia_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Tipologia_Sum_Fields = {
  __typename?: 'tipologia_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "tipologia" */
export enum Tipologia_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Nome = 'nome',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Tipologia_Var_Pop_Fields = {
  __typename?: 'tipologia_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Tipologia_Var_Samp_Fields = {
  __typename?: 'tipologia_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Tipologia_Variance_Fields = {
  __typename?: 'tipologia_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "toponimo" */
export type Toponimo = {
  __typename?: 'toponimo';
  codice?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  /** An object relationship */
  dug?: Maybe<Dug>;
  dug_id?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
  nome: Scalars['String'];
  /** An array relationship */
  quartiere: Array<Pacchetto_Toponimo>;
  /** An aggregate relationship */
  quartiere_aggregate: Pacchetto_Toponimo_Aggregate;
  /** An object relationship */
  tipologia?: Maybe<Tipologia>;
  tipologia_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  /** An array relationship */
  vecchie_denominazioni: Array<Vecchio_Toponimo>;
  /** An aggregate relationship */
  vecchie_denominazioni_aggregate: Vecchio_Toponimo_Aggregate;
};


/** columns and relationships of "toponimo" */
export type ToponimoQuartiereArgs = {
  distinct_on?: Maybe<Array<Pacchetto_Toponimo_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Pacchetto_Toponimo_Order_By>>;
  where?: Maybe<Pacchetto_Toponimo_Bool_Exp>;
};


/** columns and relationships of "toponimo" */
export type ToponimoQuartiere_AggregateArgs = {
  distinct_on?: Maybe<Array<Pacchetto_Toponimo_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Pacchetto_Toponimo_Order_By>>;
  where?: Maybe<Pacchetto_Toponimo_Bool_Exp>;
};


/** columns and relationships of "toponimo" */
export type ToponimoVecchie_DenominazioniArgs = {
  distinct_on?: Maybe<Array<Vecchio_Toponimo_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Vecchio_Toponimo_Order_By>>;
  where?: Maybe<Vecchio_Toponimo_Bool_Exp>;
};


/** columns and relationships of "toponimo" */
export type ToponimoVecchie_Denominazioni_AggregateArgs = {
  distinct_on?: Maybe<Array<Vecchio_Toponimo_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Vecchio_Toponimo_Order_By>>;
  where?: Maybe<Vecchio_Toponimo_Bool_Exp>;
};

/** aggregated selection of "toponimo" */
export type Toponimo_Aggregate = {
  __typename?: 'toponimo_aggregate';
  aggregate?: Maybe<Toponimo_Aggregate_Fields>;
  nodes: Array<Toponimo>;
};

/** aggregate fields of "toponimo" */
export type Toponimo_Aggregate_Fields = {
  __typename?: 'toponimo_aggregate_fields';
  avg?: Maybe<Toponimo_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Toponimo_Max_Fields>;
  min?: Maybe<Toponimo_Min_Fields>;
  stddev?: Maybe<Toponimo_Stddev_Fields>;
  stddev_pop?: Maybe<Toponimo_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Toponimo_Stddev_Samp_Fields>;
  sum?: Maybe<Toponimo_Sum_Fields>;
  var_pop?: Maybe<Toponimo_Var_Pop_Fields>;
  var_samp?: Maybe<Toponimo_Var_Samp_Fields>;
  variance?: Maybe<Toponimo_Variance_Fields>;
};


/** aggregate fields of "toponimo" */
export type Toponimo_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Toponimo_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Toponimo_Avg_Fields = {
  __typename?: 'toponimo_avg_fields';
  dug_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  tipologia_id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "toponimo". All fields are combined with a logical 'AND'. */
export type Toponimo_Bool_Exp = {
  _and?: Maybe<Array<Toponimo_Bool_Exp>>;
  _not?: Maybe<Toponimo_Bool_Exp>;
  _or?: Maybe<Array<Toponimo_Bool_Exp>>;
  codice?: Maybe<String_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  dug?: Maybe<Dug_Bool_Exp>;
  dug_id?: Maybe<Int_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  nome?: Maybe<String_Comparison_Exp>;
  quartiere?: Maybe<Pacchetto_Toponimo_Bool_Exp>;
  tipologia?: Maybe<Tipologia_Bool_Exp>;
  tipologia_id?: Maybe<Int_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  vecchie_denominazioni?: Maybe<Vecchio_Toponimo_Bool_Exp>;
};

/** unique or primary key constraints on table "toponimo" */
export enum Toponimo_Constraint {
  /** unique or primary key constraint */
  ToponimoPkey = 'toponimo_pkey'
}

/** input type for incrementing numeric columns in table "toponimo" */
export type Toponimo_Inc_Input = {
  dug_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  tipologia_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "toponimo" */
export type Toponimo_Insert_Input = {
  codice?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  dug?: Maybe<Dug_Obj_Rel_Insert_Input>;
  dug_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  nome?: Maybe<Scalars['String']>;
  quartiere?: Maybe<Pacchetto_Toponimo_Arr_Rel_Insert_Input>;
  tipologia?: Maybe<Tipologia_Obj_Rel_Insert_Input>;
  tipologia_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  vecchie_denominazioni?: Maybe<Vecchio_Toponimo_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Toponimo_Max_Fields = {
  __typename?: 'toponimo_max_fields';
  codice?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  dug_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  nome?: Maybe<Scalars['String']>;
  tipologia_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Toponimo_Min_Fields = {
  __typename?: 'toponimo_min_fields';
  codice?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  dug_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  nome?: Maybe<Scalars['String']>;
  tipologia_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "toponimo" */
export type Toponimo_Mutation_Response = {
  __typename?: 'toponimo_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Toponimo>;
};

/** input type for inserting object relation for remote table "toponimo" */
export type Toponimo_Obj_Rel_Insert_Input = {
  data: Toponimo_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Toponimo_On_Conflict>;
};

/** on conflict condition type for table "toponimo" */
export type Toponimo_On_Conflict = {
  constraint: Toponimo_Constraint;
  update_columns?: Array<Toponimo_Update_Column>;
  where?: Maybe<Toponimo_Bool_Exp>;
};

/** Ordering options when selecting data from "toponimo". */
export type Toponimo_Order_By = {
  codice?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  dug?: Maybe<Dug_Order_By>;
  dug_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  nome?: Maybe<Order_By>;
  quartiere_aggregate?: Maybe<Pacchetto_Toponimo_Aggregate_Order_By>;
  tipologia?: Maybe<Tipologia_Order_By>;
  tipologia_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  vecchie_denominazioni_aggregate?: Maybe<Vecchio_Toponimo_Aggregate_Order_By>;
};

/** primary key columns input for table: toponimo */
export type Toponimo_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "toponimo" */
export enum Toponimo_Select_Column {
  /** column name */
  Codice = 'codice',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DugId = 'dug_id',
  /** column name */
  Id = 'id',
  /** column name */
  Nome = 'nome',
  /** column name */
  TipologiaId = 'tipologia_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "toponimo" */
export type Toponimo_Set_Input = {
  codice?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  dug_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  nome?: Maybe<Scalars['String']>;
  tipologia_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Toponimo_Stddev_Fields = {
  __typename?: 'toponimo_stddev_fields';
  dug_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  tipologia_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Toponimo_Stddev_Pop_Fields = {
  __typename?: 'toponimo_stddev_pop_fields';
  dug_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  tipologia_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Toponimo_Stddev_Samp_Fields = {
  __typename?: 'toponimo_stddev_samp_fields';
  dug_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  tipologia_id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Toponimo_Sum_Fields = {
  __typename?: 'toponimo_sum_fields';
  dug_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  tipologia_id?: Maybe<Scalars['Int']>;
};

/** update columns of table "toponimo" */
export enum Toponimo_Update_Column {
  /** column name */
  Codice = 'codice',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DugId = 'dug_id',
  /** column name */
  Id = 'id',
  /** column name */
  Nome = 'nome',
  /** column name */
  TipologiaId = 'tipologia_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Toponimo_Var_Pop_Fields = {
  __typename?: 'toponimo_var_pop_fields';
  dug_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  tipologia_id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Toponimo_Var_Samp_Fields = {
  __typename?: 'toponimo_var_samp_fields';
  dug_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  tipologia_id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Toponimo_Variance_Fields = {
  __typename?: 'toponimo_variance_fields';
  dug_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  tipologia_id?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "vecchia_municipalita" */
export type Vecchia_Municipalita = {
  __typename?: 'vecchia_municipalita';
  created_at: Scalars['timestamptz'];
  id: Scalars['Int'];
  municipalita_id: Scalars['Int'];
  nome: Scalars['String'];
};

/** aggregated selection of "vecchia_municipalita" */
export type Vecchia_Municipalita_Aggregate = {
  __typename?: 'vecchia_municipalita_aggregate';
  aggregate?: Maybe<Vecchia_Municipalita_Aggregate_Fields>;
  nodes: Array<Vecchia_Municipalita>;
};

/** aggregate fields of "vecchia_municipalita" */
export type Vecchia_Municipalita_Aggregate_Fields = {
  __typename?: 'vecchia_municipalita_aggregate_fields';
  avg?: Maybe<Vecchia_Municipalita_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Vecchia_Municipalita_Max_Fields>;
  min?: Maybe<Vecchia_Municipalita_Min_Fields>;
  stddev?: Maybe<Vecchia_Municipalita_Stddev_Fields>;
  stddev_pop?: Maybe<Vecchia_Municipalita_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Vecchia_Municipalita_Stddev_Samp_Fields>;
  sum?: Maybe<Vecchia_Municipalita_Sum_Fields>;
  var_pop?: Maybe<Vecchia_Municipalita_Var_Pop_Fields>;
  var_samp?: Maybe<Vecchia_Municipalita_Var_Samp_Fields>;
  variance?: Maybe<Vecchia_Municipalita_Variance_Fields>;
};


/** aggregate fields of "vecchia_municipalita" */
export type Vecchia_Municipalita_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Vecchia_Municipalita_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "vecchia_municipalita" */
export type Vecchia_Municipalita_Aggregate_Order_By = {
  avg?: Maybe<Vecchia_Municipalita_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Vecchia_Municipalita_Max_Order_By>;
  min?: Maybe<Vecchia_Municipalita_Min_Order_By>;
  stddev?: Maybe<Vecchia_Municipalita_Stddev_Order_By>;
  stddev_pop?: Maybe<Vecchia_Municipalita_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Vecchia_Municipalita_Stddev_Samp_Order_By>;
  sum?: Maybe<Vecchia_Municipalita_Sum_Order_By>;
  var_pop?: Maybe<Vecchia_Municipalita_Var_Pop_Order_By>;
  var_samp?: Maybe<Vecchia_Municipalita_Var_Samp_Order_By>;
  variance?: Maybe<Vecchia_Municipalita_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "vecchia_municipalita" */
export type Vecchia_Municipalita_Arr_Rel_Insert_Input = {
  data: Array<Vecchia_Municipalita_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Vecchia_Municipalita_On_Conflict>;
};

/** aggregate avg on columns */
export type Vecchia_Municipalita_Avg_Fields = {
  __typename?: 'vecchia_municipalita_avg_fields';
  id?: Maybe<Scalars['Float']>;
  municipalita_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "vecchia_municipalita" */
export type Vecchia_Municipalita_Avg_Order_By = {
  id?: Maybe<Order_By>;
  municipalita_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "vecchia_municipalita". All fields are combined with a logical 'AND'. */
export type Vecchia_Municipalita_Bool_Exp = {
  _and?: Maybe<Array<Vecchia_Municipalita_Bool_Exp>>;
  _not?: Maybe<Vecchia_Municipalita_Bool_Exp>;
  _or?: Maybe<Array<Vecchia_Municipalita_Bool_Exp>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  municipalita_id?: Maybe<Int_Comparison_Exp>;
  nome?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "vecchia_municipalita" */
export enum Vecchia_Municipalita_Constraint {
  /** unique or primary key constraint */
  VecchieMunicipalitaPkey = 'vecchie_municipalita_pkey'
}

/** input type for incrementing numeric columns in table "vecchia_municipalita" */
export type Vecchia_Municipalita_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  municipalita_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "vecchia_municipalita" */
export type Vecchia_Municipalita_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  municipalita_id?: Maybe<Scalars['Int']>;
  nome?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Vecchia_Municipalita_Max_Fields = {
  __typename?: 'vecchia_municipalita_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  municipalita_id?: Maybe<Scalars['Int']>;
  nome?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "vecchia_municipalita" */
export type Vecchia_Municipalita_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  municipalita_id?: Maybe<Order_By>;
  nome?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Vecchia_Municipalita_Min_Fields = {
  __typename?: 'vecchia_municipalita_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  municipalita_id?: Maybe<Scalars['Int']>;
  nome?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "vecchia_municipalita" */
export type Vecchia_Municipalita_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  municipalita_id?: Maybe<Order_By>;
  nome?: Maybe<Order_By>;
};

/** response of any mutation on the table "vecchia_municipalita" */
export type Vecchia_Municipalita_Mutation_Response = {
  __typename?: 'vecchia_municipalita_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Vecchia_Municipalita>;
};

/** on conflict condition type for table "vecchia_municipalita" */
export type Vecchia_Municipalita_On_Conflict = {
  constraint: Vecchia_Municipalita_Constraint;
  update_columns?: Array<Vecchia_Municipalita_Update_Column>;
  where?: Maybe<Vecchia_Municipalita_Bool_Exp>;
};

/** Ordering options when selecting data from "vecchia_municipalita". */
export type Vecchia_Municipalita_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  municipalita_id?: Maybe<Order_By>;
  nome?: Maybe<Order_By>;
};

/** primary key columns input for table: vecchia_municipalita */
export type Vecchia_Municipalita_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "vecchia_municipalita" */
export enum Vecchia_Municipalita_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  MunicipalitaId = 'municipalita_id',
  /** column name */
  Nome = 'nome'
}

/** input type for updating data in table "vecchia_municipalita" */
export type Vecchia_Municipalita_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  municipalita_id?: Maybe<Scalars['Int']>;
  nome?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Vecchia_Municipalita_Stddev_Fields = {
  __typename?: 'vecchia_municipalita_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  municipalita_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "vecchia_municipalita" */
export type Vecchia_Municipalita_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  municipalita_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Vecchia_Municipalita_Stddev_Pop_Fields = {
  __typename?: 'vecchia_municipalita_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  municipalita_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "vecchia_municipalita" */
export type Vecchia_Municipalita_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  municipalita_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Vecchia_Municipalita_Stddev_Samp_Fields = {
  __typename?: 'vecchia_municipalita_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  municipalita_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "vecchia_municipalita" */
export type Vecchia_Municipalita_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  municipalita_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Vecchia_Municipalita_Sum_Fields = {
  __typename?: 'vecchia_municipalita_sum_fields';
  id?: Maybe<Scalars['Int']>;
  municipalita_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "vecchia_municipalita" */
export type Vecchia_Municipalita_Sum_Order_By = {
  id?: Maybe<Order_By>;
  municipalita_id?: Maybe<Order_By>;
};

/** update columns of table "vecchia_municipalita" */
export enum Vecchia_Municipalita_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  MunicipalitaId = 'municipalita_id',
  /** column name */
  Nome = 'nome'
}

/** aggregate var_pop on columns */
export type Vecchia_Municipalita_Var_Pop_Fields = {
  __typename?: 'vecchia_municipalita_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  municipalita_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "vecchia_municipalita" */
export type Vecchia_Municipalita_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  municipalita_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Vecchia_Municipalita_Var_Samp_Fields = {
  __typename?: 'vecchia_municipalita_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  municipalita_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "vecchia_municipalita" */
export type Vecchia_Municipalita_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  municipalita_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Vecchia_Municipalita_Variance_Fields = {
  __typename?: 'vecchia_municipalita_variance_fields';
  id?: Maybe<Scalars['Float']>;
  municipalita_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "vecchia_municipalita" */
export type Vecchia_Municipalita_Variance_Order_By = {
  id?: Maybe<Order_By>;
  municipalita_id?: Maybe<Order_By>;
};

/** columns and relationships of "vecchio_quartiere" */
export type Vecchio_Quartiere = {
  __typename?: 'vecchio_quartiere';
  created_at: Scalars['timestamptz'];
  id: Scalars['Int'];
  nome: Scalars['String'];
  quartiere_id: Scalars['Int'];
};

/** aggregated selection of "vecchio_quartiere" */
export type Vecchio_Quartiere_Aggregate = {
  __typename?: 'vecchio_quartiere_aggregate';
  aggregate?: Maybe<Vecchio_Quartiere_Aggregate_Fields>;
  nodes: Array<Vecchio_Quartiere>;
};

/** aggregate fields of "vecchio_quartiere" */
export type Vecchio_Quartiere_Aggregate_Fields = {
  __typename?: 'vecchio_quartiere_aggregate_fields';
  avg?: Maybe<Vecchio_Quartiere_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Vecchio_Quartiere_Max_Fields>;
  min?: Maybe<Vecchio_Quartiere_Min_Fields>;
  stddev?: Maybe<Vecchio_Quartiere_Stddev_Fields>;
  stddev_pop?: Maybe<Vecchio_Quartiere_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Vecchio_Quartiere_Stddev_Samp_Fields>;
  sum?: Maybe<Vecchio_Quartiere_Sum_Fields>;
  var_pop?: Maybe<Vecchio_Quartiere_Var_Pop_Fields>;
  var_samp?: Maybe<Vecchio_Quartiere_Var_Samp_Fields>;
  variance?: Maybe<Vecchio_Quartiere_Variance_Fields>;
};


/** aggregate fields of "vecchio_quartiere" */
export type Vecchio_Quartiere_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Vecchio_Quartiere_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "vecchio_quartiere" */
export type Vecchio_Quartiere_Aggregate_Order_By = {
  avg?: Maybe<Vecchio_Quartiere_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Vecchio_Quartiere_Max_Order_By>;
  min?: Maybe<Vecchio_Quartiere_Min_Order_By>;
  stddev?: Maybe<Vecchio_Quartiere_Stddev_Order_By>;
  stddev_pop?: Maybe<Vecchio_Quartiere_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Vecchio_Quartiere_Stddev_Samp_Order_By>;
  sum?: Maybe<Vecchio_Quartiere_Sum_Order_By>;
  var_pop?: Maybe<Vecchio_Quartiere_Var_Pop_Order_By>;
  var_samp?: Maybe<Vecchio_Quartiere_Var_Samp_Order_By>;
  variance?: Maybe<Vecchio_Quartiere_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "vecchio_quartiere" */
export type Vecchio_Quartiere_Arr_Rel_Insert_Input = {
  data: Array<Vecchio_Quartiere_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Vecchio_Quartiere_On_Conflict>;
};

/** aggregate avg on columns */
export type Vecchio_Quartiere_Avg_Fields = {
  __typename?: 'vecchio_quartiere_avg_fields';
  id?: Maybe<Scalars['Float']>;
  quartiere_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "vecchio_quartiere" */
export type Vecchio_Quartiere_Avg_Order_By = {
  id?: Maybe<Order_By>;
  quartiere_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "vecchio_quartiere". All fields are combined with a logical 'AND'. */
export type Vecchio_Quartiere_Bool_Exp = {
  _and?: Maybe<Array<Vecchio_Quartiere_Bool_Exp>>;
  _not?: Maybe<Vecchio_Quartiere_Bool_Exp>;
  _or?: Maybe<Array<Vecchio_Quartiere_Bool_Exp>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  nome?: Maybe<String_Comparison_Exp>;
  quartiere_id?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "vecchio_quartiere" */
export enum Vecchio_Quartiere_Constraint {
  /** unique or primary key constraint */
  VecchiQuartieriPkey = 'vecchi_quartieri_pkey'
}

/** input type for incrementing numeric columns in table "vecchio_quartiere" */
export type Vecchio_Quartiere_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  quartiere_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "vecchio_quartiere" */
export type Vecchio_Quartiere_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  nome?: Maybe<Scalars['String']>;
  quartiere_id?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Vecchio_Quartiere_Max_Fields = {
  __typename?: 'vecchio_quartiere_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  nome?: Maybe<Scalars['String']>;
  quartiere_id?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "vecchio_quartiere" */
export type Vecchio_Quartiere_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  nome?: Maybe<Order_By>;
  quartiere_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Vecchio_Quartiere_Min_Fields = {
  __typename?: 'vecchio_quartiere_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  nome?: Maybe<Scalars['String']>;
  quartiere_id?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "vecchio_quartiere" */
export type Vecchio_Quartiere_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  nome?: Maybe<Order_By>;
  quartiere_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "vecchio_quartiere" */
export type Vecchio_Quartiere_Mutation_Response = {
  __typename?: 'vecchio_quartiere_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Vecchio_Quartiere>;
};

/** on conflict condition type for table "vecchio_quartiere" */
export type Vecchio_Quartiere_On_Conflict = {
  constraint: Vecchio_Quartiere_Constraint;
  update_columns?: Array<Vecchio_Quartiere_Update_Column>;
  where?: Maybe<Vecchio_Quartiere_Bool_Exp>;
};

/** Ordering options when selecting data from "vecchio_quartiere". */
export type Vecchio_Quartiere_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  nome?: Maybe<Order_By>;
  quartiere_id?: Maybe<Order_By>;
};

/** primary key columns input for table: vecchio_quartiere */
export type Vecchio_Quartiere_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "vecchio_quartiere" */
export enum Vecchio_Quartiere_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Nome = 'nome',
  /** column name */
  QuartiereId = 'quartiere_id'
}

/** input type for updating data in table "vecchio_quartiere" */
export type Vecchio_Quartiere_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  nome?: Maybe<Scalars['String']>;
  quartiere_id?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Vecchio_Quartiere_Stddev_Fields = {
  __typename?: 'vecchio_quartiere_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  quartiere_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "vecchio_quartiere" */
export type Vecchio_Quartiere_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  quartiere_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Vecchio_Quartiere_Stddev_Pop_Fields = {
  __typename?: 'vecchio_quartiere_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  quartiere_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "vecchio_quartiere" */
export type Vecchio_Quartiere_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  quartiere_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Vecchio_Quartiere_Stddev_Samp_Fields = {
  __typename?: 'vecchio_quartiere_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  quartiere_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "vecchio_quartiere" */
export type Vecchio_Quartiere_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  quartiere_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Vecchio_Quartiere_Sum_Fields = {
  __typename?: 'vecchio_quartiere_sum_fields';
  id?: Maybe<Scalars['Int']>;
  quartiere_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "vecchio_quartiere" */
export type Vecchio_Quartiere_Sum_Order_By = {
  id?: Maybe<Order_By>;
  quartiere_id?: Maybe<Order_By>;
};

/** update columns of table "vecchio_quartiere" */
export enum Vecchio_Quartiere_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Nome = 'nome',
  /** column name */
  QuartiereId = 'quartiere_id'
}

/** aggregate var_pop on columns */
export type Vecchio_Quartiere_Var_Pop_Fields = {
  __typename?: 'vecchio_quartiere_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  quartiere_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "vecchio_quartiere" */
export type Vecchio_Quartiere_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  quartiere_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Vecchio_Quartiere_Var_Samp_Fields = {
  __typename?: 'vecchio_quartiere_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  quartiere_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "vecchio_quartiere" */
export type Vecchio_Quartiere_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  quartiere_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Vecchio_Quartiere_Variance_Fields = {
  __typename?: 'vecchio_quartiere_variance_fields';
  id?: Maybe<Scalars['Float']>;
  quartiere_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "vecchio_quartiere" */
export type Vecchio_Quartiere_Variance_Order_By = {
  id?: Maybe<Order_By>;
  quartiere_id?: Maybe<Order_By>;
};

/** columns and relationships of "vecchio_toponimo" */
export type Vecchio_Toponimo = {
  __typename?: 'vecchio_toponimo';
  codice?: Maybe<Scalars['String']>;
  created_at: Scalars['timestamptz'];
  /** An object relationship */
  dug?: Maybe<Dug>;
  dug_id?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
  nome: Scalars['String'];
  /** An object relationship */
  tipologia?: Maybe<Tipologia>;
  tipologia_id?: Maybe<Scalars['Int']>;
  toponimo_id: Scalars['Int'];
};

/** aggregated selection of "vecchio_toponimo" */
export type Vecchio_Toponimo_Aggregate = {
  __typename?: 'vecchio_toponimo_aggregate';
  aggregate?: Maybe<Vecchio_Toponimo_Aggregate_Fields>;
  nodes: Array<Vecchio_Toponimo>;
};

/** aggregate fields of "vecchio_toponimo" */
export type Vecchio_Toponimo_Aggregate_Fields = {
  __typename?: 'vecchio_toponimo_aggregate_fields';
  avg?: Maybe<Vecchio_Toponimo_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Vecchio_Toponimo_Max_Fields>;
  min?: Maybe<Vecchio_Toponimo_Min_Fields>;
  stddev?: Maybe<Vecchio_Toponimo_Stddev_Fields>;
  stddev_pop?: Maybe<Vecchio_Toponimo_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Vecchio_Toponimo_Stddev_Samp_Fields>;
  sum?: Maybe<Vecchio_Toponimo_Sum_Fields>;
  var_pop?: Maybe<Vecchio_Toponimo_Var_Pop_Fields>;
  var_samp?: Maybe<Vecchio_Toponimo_Var_Samp_Fields>;
  variance?: Maybe<Vecchio_Toponimo_Variance_Fields>;
};


/** aggregate fields of "vecchio_toponimo" */
export type Vecchio_Toponimo_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Vecchio_Toponimo_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "vecchio_toponimo" */
export type Vecchio_Toponimo_Aggregate_Order_By = {
  avg?: Maybe<Vecchio_Toponimo_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Vecchio_Toponimo_Max_Order_By>;
  min?: Maybe<Vecchio_Toponimo_Min_Order_By>;
  stddev?: Maybe<Vecchio_Toponimo_Stddev_Order_By>;
  stddev_pop?: Maybe<Vecchio_Toponimo_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Vecchio_Toponimo_Stddev_Samp_Order_By>;
  sum?: Maybe<Vecchio_Toponimo_Sum_Order_By>;
  var_pop?: Maybe<Vecchio_Toponimo_Var_Pop_Order_By>;
  var_samp?: Maybe<Vecchio_Toponimo_Var_Samp_Order_By>;
  variance?: Maybe<Vecchio_Toponimo_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "vecchio_toponimo" */
export type Vecchio_Toponimo_Arr_Rel_Insert_Input = {
  data: Array<Vecchio_Toponimo_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Vecchio_Toponimo_On_Conflict>;
};

/** aggregate avg on columns */
export type Vecchio_Toponimo_Avg_Fields = {
  __typename?: 'vecchio_toponimo_avg_fields';
  dug_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  tipologia_id?: Maybe<Scalars['Float']>;
  toponimo_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "vecchio_toponimo" */
export type Vecchio_Toponimo_Avg_Order_By = {
  dug_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  tipologia_id?: Maybe<Order_By>;
  toponimo_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "vecchio_toponimo". All fields are combined with a logical 'AND'. */
export type Vecchio_Toponimo_Bool_Exp = {
  _and?: Maybe<Array<Vecchio_Toponimo_Bool_Exp>>;
  _not?: Maybe<Vecchio_Toponimo_Bool_Exp>;
  _or?: Maybe<Array<Vecchio_Toponimo_Bool_Exp>>;
  codice?: Maybe<String_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  dug?: Maybe<Dug_Bool_Exp>;
  dug_id?: Maybe<Int_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  nome?: Maybe<String_Comparison_Exp>;
  tipologia?: Maybe<Tipologia_Bool_Exp>;
  tipologia_id?: Maybe<Int_Comparison_Exp>;
  toponimo_id?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "vecchio_toponimo" */
export enum Vecchio_Toponimo_Constraint {
  /** unique or primary key constraint */
  VecchioToponimoPkey = 'vecchio_toponimo_pkey'
}

/** input type for incrementing numeric columns in table "vecchio_toponimo" */
export type Vecchio_Toponimo_Inc_Input = {
  dug_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  tipologia_id?: Maybe<Scalars['Int']>;
  toponimo_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "vecchio_toponimo" */
export type Vecchio_Toponimo_Insert_Input = {
  codice?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  dug?: Maybe<Dug_Obj_Rel_Insert_Input>;
  dug_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  nome?: Maybe<Scalars['String']>;
  tipologia?: Maybe<Tipologia_Obj_Rel_Insert_Input>;
  tipologia_id?: Maybe<Scalars['Int']>;
  toponimo_id?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Vecchio_Toponimo_Max_Fields = {
  __typename?: 'vecchio_toponimo_max_fields';
  codice?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  dug_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  nome?: Maybe<Scalars['String']>;
  tipologia_id?: Maybe<Scalars['Int']>;
  toponimo_id?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "vecchio_toponimo" */
export type Vecchio_Toponimo_Max_Order_By = {
  codice?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  dug_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  nome?: Maybe<Order_By>;
  tipologia_id?: Maybe<Order_By>;
  toponimo_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Vecchio_Toponimo_Min_Fields = {
  __typename?: 'vecchio_toponimo_min_fields';
  codice?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  dug_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  nome?: Maybe<Scalars['String']>;
  tipologia_id?: Maybe<Scalars['Int']>;
  toponimo_id?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "vecchio_toponimo" */
export type Vecchio_Toponimo_Min_Order_By = {
  codice?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  dug_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  nome?: Maybe<Order_By>;
  tipologia_id?: Maybe<Order_By>;
  toponimo_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "vecchio_toponimo" */
export type Vecchio_Toponimo_Mutation_Response = {
  __typename?: 'vecchio_toponimo_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Vecchio_Toponimo>;
};

/** on conflict condition type for table "vecchio_toponimo" */
export type Vecchio_Toponimo_On_Conflict = {
  constraint: Vecchio_Toponimo_Constraint;
  update_columns?: Array<Vecchio_Toponimo_Update_Column>;
  where?: Maybe<Vecchio_Toponimo_Bool_Exp>;
};

/** Ordering options when selecting data from "vecchio_toponimo". */
export type Vecchio_Toponimo_Order_By = {
  codice?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  dug?: Maybe<Dug_Order_By>;
  dug_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  nome?: Maybe<Order_By>;
  tipologia?: Maybe<Tipologia_Order_By>;
  tipologia_id?: Maybe<Order_By>;
  toponimo_id?: Maybe<Order_By>;
};

/** primary key columns input for table: vecchio_toponimo */
export type Vecchio_Toponimo_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "vecchio_toponimo" */
export enum Vecchio_Toponimo_Select_Column {
  /** column name */
  Codice = 'codice',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DugId = 'dug_id',
  /** column name */
  Id = 'id',
  /** column name */
  Nome = 'nome',
  /** column name */
  TipologiaId = 'tipologia_id',
  /** column name */
  ToponimoId = 'toponimo_id'
}

/** input type for updating data in table "vecchio_toponimo" */
export type Vecchio_Toponimo_Set_Input = {
  codice?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  dug_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  nome?: Maybe<Scalars['String']>;
  tipologia_id?: Maybe<Scalars['Int']>;
  toponimo_id?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Vecchio_Toponimo_Stddev_Fields = {
  __typename?: 'vecchio_toponimo_stddev_fields';
  dug_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  tipologia_id?: Maybe<Scalars['Float']>;
  toponimo_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "vecchio_toponimo" */
export type Vecchio_Toponimo_Stddev_Order_By = {
  dug_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  tipologia_id?: Maybe<Order_By>;
  toponimo_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Vecchio_Toponimo_Stddev_Pop_Fields = {
  __typename?: 'vecchio_toponimo_stddev_pop_fields';
  dug_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  tipologia_id?: Maybe<Scalars['Float']>;
  toponimo_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "vecchio_toponimo" */
export type Vecchio_Toponimo_Stddev_Pop_Order_By = {
  dug_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  tipologia_id?: Maybe<Order_By>;
  toponimo_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Vecchio_Toponimo_Stddev_Samp_Fields = {
  __typename?: 'vecchio_toponimo_stddev_samp_fields';
  dug_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  tipologia_id?: Maybe<Scalars['Float']>;
  toponimo_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "vecchio_toponimo" */
export type Vecchio_Toponimo_Stddev_Samp_Order_By = {
  dug_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  tipologia_id?: Maybe<Order_By>;
  toponimo_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Vecchio_Toponimo_Sum_Fields = {
  __typename?: 'vecchio_toponimo_sum_fields';
  dug_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  tipologia_id?: Maybe<Scalars['Int']>;
  toponimo_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "vecchio_toponimo" */
export type Vecchio_Toponimo_Sum_Order_By = {
  dug_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  tipologia_id?: Maybe<Order_By>;
  toponimo_id?: Maybe<Order_By>;
};

/** update columns of table "vecchio_toponimo" */
export enum Vecchio_Toponimo_Update_Column {
  /** column name */
  Codice = 'codice',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DugId = 'dug_id',
  /** column name */
  Id = 'id',
  /** column name */
  Nome = 'nome',
  /** column name */
  TipologiaId = 'tipologia_id',
  /** column name */
  ToponimoId = 'toponimo_id'
}

/** aggregate var_pop on columns */
export type Vecchio_Toponimo_Var_Pop_Fields = {
  __typename?: 'vecchio_toponimo_var_pop_fields';
  dug_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  tipologia_id?: Maybe<Scalars['Float']>;
  toponimo_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "vecchio_toponimo" */
export type Vecchio_Toponimo_Var_Pop_Order_By = {
  dug_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  tipologia_id?: Maybe<Order_By>;
  toponimo_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Vecchio_Toponimo_Var_Samp_Fields = {
  __typename?: 'vecchio_toponimo_var_samp_fields';
  dug_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  tipologia_id?: Maybe<Scalars['Float']>;
  toponimo_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "vecchio_toponimo" */
export type Vecchio_Toponimo_Var_Samp_Order_By = {
  dug_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  tipologia_id?: Maybe<Order_By>;
  toponimo_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Vecchio_Toponimo_Variance_Fields = {
  __typename?: 'vecchio_toponimo_variance_fields';
  dug_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  tipologia_id?: Maybe<Scalars['Float']>;
  toponimo_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "vecchio_toponimo" */
export type Vecchio_Toponimo_Variance_Order_By = {
  dug_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  tipologia_id?: Maybe<Order_By>;
  toponimo_id?: Maybe<Order_By>;
};

export type MunicipalitaSubscriptionVariables = Exact<{
  quartieri_id?: Maybe<Int_Comparison_Exp>;
}>;


export type MunicipalitaSubscription = { __typename?: 'subscription_root', municipalita: Array<{ __typename?: 'municipalita', id: number, nome: string, updated_at: any, vecchie_denominazioni: Array<{ __typename?: 'vecchia_municipalita', nome: string, created_at: any }>, pacchetti_quartiere: Array<{ __typename?: 'municipalita_quartieri', inizio_validita: any, fine_validita?: any | null | undefined, quartieri: Array<{ __typename?: 'pacchetto_quartiere', quartiere: { __typename?: 'quartiere', id: number, nome: string } }> }> }> };

export type UpdateMunicipalitaMutationVariables = Exact<{
  municipalita?: Maybe<Array<Municipalita_Insert_Input> | Municipalita_Insert_Input>;
}>;


export type UpdateMunicipalitaMutation = { __typename?: 'mutation_root', insert_municipalita?: { __typename?: 'municipalita_mutation_response', affected_rows: number } | null | undefined };

export type QuartieriSubscriptionVariables = Exact<{
  municipalita_id?: Maybe<Int_Comparison_Exp>;
}>;


export type QuartieriSubscription = { __typename?: 'subscription_root', quartiere: Array<{ __typename?: 'quartiere', id: number, nome: string, updated_at: any, vecchie_denominazioni: Array<{ __typename?: 'vecchio_quartiere', nome: string, created_at: any }>, municipalita: Array<{ __typename?: 'pacchetto_quartiere', municipalita: { __typename?: 'municipalita_quartieri', fine_validita?: any | null | undefined, inizio_validita: any, municipalita: { __typename?: 'municipalita', id: number, nome: string } } }> }> };

export type UpdateQuartiereMutationVariables = Exact<{
  quartiere?: Maybe<Array<Quartiere_Insert_Input> | Quartiere_Insert_Input>;
}>;


export type UpdateQuartiereMutation = { __typename?: 'mutation_root', insert_quartiere?: { __typename?: 'quartiere_mutation_response', affected_rows: number } | null | undefined };

export type MunicipalitaSelectQueryVariables = Exact<{ [key: string]: never; }>;


export type MunicipalitaSelectQuery = { __typename?: 'query_root', municipalita: Array<{ __typename?: 'municipalita', id: number, nome: string }> };

export type QuartiereSelectQueryVariables = Exact<{ [key: string]: never; }>;


export type QuartiereSelectQuery = { __typename?: 'query_root', quartiere: Array<{ __typename?: 'quartiere', id: number, nome: string }> };

export type DugSelectQueryVariables = Exact<{ [key: string]: never; }>;


export type DugSelectQuery = { __typename?: 'query_root', dug: Array<{ __typename?: 'dug', id: number, nome: string }> };

export type TipologiaSelectQueryVariables = Exact<{ [key: string]: never; }>;


export type TipologiaSelectQuery = { __typename?: 'query_root', tipologia: Array<{ __typename?: 'tipologia', id: number, nome: string }> };

export type ToponimiSubscriptionVariables = Exact<{
  dug_id?: Maybe<Int_Comparison_Exp>;
  tipologia_id?: Maybe<Int_Comparison_Exp>;
  quartieri_id?: Maybe<Int_Comparison_Exp>;
  municipalita_id?: Maybe<Int_Comparison_Exp>;
}>;


export type ToponimiSubscription = { __typename?: 'subscription_root', toponimo: Array<{ __typename?: 'toponimo', id: number, nome: string, codice?: string | null | undefined, updated_at?: any | null | undefined, dug?: { __typename?: 'dug', nome: string } | null | undefined, tipologia?: { __typename?: 'tipologia', nome: string } | null | undefined, vecchie_denominazioni: Array<{ __typename?: 'vecchio_toponimo', nome: string, created_at: any, dug?: { __typename?: 'dug', nome: string } | null | undefined, tipologia?: { __typename?: 'tipologia', nome: string } | null | undefined }>, quartiere: Array<{ __typename?: 'pacchetto_toponimo', quartiere: { __typename?: 'quartiere_toponimi', inizio_validita: any, fine_validita?: any | null | undefined, quartiere: { __typename?: 'quartiere', id: number, nome: string, municipalita: Array<{ __typename?: 'pacchetto_quartiere', municipalita: { __typename?: 'municipalita_quartieri', municipalita: { __typename?: 'municipalita', id: number, nome: string } } }> } } }> }> };

export type UpdateToponimoMutationVariables = Exact<{
  toponimo?: Maybe<Array<Toponimo_Insert_Input> | Toponimo_Insert_Input>;
  update_columns?: Maybe<Array<Toponimo_Update_Column> | Toponimo_Update_Column>;
}>;


export type UpdateToponimoMutation = { __typename?: 'mutation_root', insert_toponimo?: { __typename?: 'toponimo_mutation_response', affected_rows: number } | null | undefined };

export const MunicipalitaDocument = gql`
    subscription Municipalita($quartieri_id: Int_comparison_exp = {}) {
  municipalita(
    order_by: {nome: asc}
    where: {pacchetti_quartiere: {fine_validita: {_is_null: true}, quartieri: {quartiere_id: $quartieri_id}}}
  ) {
    id
    nome
    updated_at
    vecchie_denominazioni(order_by: {created_at: desc, nome: asc}) {
      nome
      created_at
    }
    pacchetti_quartiere(order_by: {fine_validita: asc_nulls_first}) {
      inizio_validita
      fine_validita
      quartieri(order_by: {quartiere: {nome: asc}}) {
        quartiere {
          id
          nome
        }
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class MunicipalitaGQL extends Apollo.Subscription<MunicipalitaSubscription, MunicipalitaSubscriptionVariables> {
    document = MunicipalitaDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UpdateMunicipalitaDocument = gql`
    mutation UpdateMunicipalita($municipalita: [municipalita_insert_input!] = {}) {
  insert_municipalita(
    on_conflict: {constraint: municipalita_pkey, update_columns: nome}
    objects: $municipalita
  ) {
    affected_rows
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UpdateMunicipalitaGQL extends Apollo.Mutation<UpdateMunicipalitaMutation, UpdateMunicipalitaMutationVariables> {
    document = UpdateMunicipalitaDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const QuartieriDocument = gql`
    subscription Quartieri($municipalita_id: Int_comparison_exp = {}) {
  quartiere(
    order_by: {nome: asc}
    where: {municipalita: {municipalita: {fine_validita: {_is_null: true}, municipalita: {id: $municipalita_id}}}}
  ) {
    id
    nome
    updated_at
    vecchie_denominazioni(order_by: {created_at: desc, nome: asc}) {
      nome
      created_at
    }
    municipalita(order_by: {municipalita: {fine_validita: asc_nulls_first}}) {
      municipalita {
        municipalita {
          id
          nome
        }
        fine_validita
        inizio_validita
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class QuartieriGQL extends Apollo.Subscription<QuartieriSubscription, QuartieriSubscriptionVariables> {
    document = QuartieriDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UpdateQuartiereDocument = gql`
    mutation UpdateQuartiere($quartiere: [quartiere_insert_input!] = {}) {
  insert_quartiere(
    on_conflict: {constraint: quartiere_pkey, update_columns: nome}
    objects: $quartiere
  ) {
    affected_rows
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UpdateQuartiereGQL extends Apollo.Mutation<UpdateQuartiereMutation, UpdateQuartiereMutationVariables> {
    document = UpdateQuartiereDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const MunicipalitaSelectDocument = gql`
    query MunicipalitaSelect {
  municipalita(order_by: {nome: asc}) {
    id
    nome
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class MunicipalitaSelectGQL extends Apollo.Query<MunicipalitaSelectQuery, MunicipalitaSelectQueryVariables> {
    document = MunicipalitaSelectDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const QuartiereSelectDocument = gql`
    query QuartiereSelect {
  quartiere(order_by: {nome: asc}) {
    id
    nome
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class QuartiereSelectGQL extends Apollo.Query<QuartiereSelectQuery, QuartiereSelectQueryVariables> {
    document = QuartiereSelectDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const DugSelectDocument = gql`
    query DugSelect {
  dug(order_by: {nome: asc}) {
    id
    nome
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DugSelectGQL extends Apollo.Query<DugSelectQuery, DugSelectQueryVariables> {
    document = DugSelectDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const TipologiaSelectDocument = gql`
    query TipologiaSelect {
  tipologia(order_by: {nome: asc}) {
    id
    nome
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class TipologiaSelectGQL extends Apollo.Query<TipologiaSelectQuery, TipologiaSelectQueryVariables> {
    document = TipologiaSelectDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ToponimiDocument = gql`
    subscription Toponimi($dug_id: Int_comparison_exp = {}, $tipologia_id: Int_comparison_exp = {}, $quartieri_id: Int_comparison_exp = {}, $municipalita_id: Int_comparison_exp = {}) {
  toponimo(
    where: {_and: {dug_id: $dug_id, tipologia_id: $tipologia_id, quartiere: {_and: {quartiere: {fine_validita: {_is_null: true}, quartiere: {id: $quartieri_id, municipalita: {municipalita: {municipalita: {id: $municipalita_id}}}}}}}}}
    order_by: {nome: asc}
  ) {
    id
    nome
    codice
    updated_at
    dug {
      nome
    }
    tipologia {
      nome
    }
    vecchie_denominazioni {
      nome
      created_at
      dug {
        nome
      }
      tipologia {
        nome
      }
    }
    quartiere(order_by: {quartiere: {fine_validita: desc_nulls_first}}) {
      quartiere {
        inizio_validita
        fine_validita
        quartiere {
          id
          nome
          municipalita(where: {municipalita: {fine_validita: {_is_null: true}}}, limit: 1) {
            municipalita {
              municipalita {
                id
                nome
              }
            }
          }
        }
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ToponimiGQL extends Apollo.Subscription<ToponimiSubscription, ToponimiSubscriptionVariables> {
    document = ToponimiDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UpdateToponimoDocument = gql`
    mutation UpdateToponimo($toponimo: [toponimo_insert_input!] = {}, $update_columns: [toponimo_update_column!] = [nome, dug_id, tipologia_id]) {
  insert_toponimo(
    on_conflict: {constraint: toponimo_pkey, update_columns: $update_columns}
    objects: $toponimo
  ) {
    affected_rows
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UpdateToponimoGQL extends Apollo.Mutation<UpdateToponimoMutation, UpdateToponimoMutationVariables> {
    document = UpdateToponimoDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }