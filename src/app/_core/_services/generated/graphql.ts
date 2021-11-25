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
  bigint: any;
  float8: any;
  geography: any;
  geometry: any;
  jsonb: any;
  numeric: any;
  timestamptz: any;
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: Maybe<Scalars['Boolean']>;
  _gt?: Maybe<Scalars['Boolean']>;
  _gte?: Maybe<Scalars['Boolean']>;
  _in?: Maybe<Array<Scalars['Boolean']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Boolean']>;
  _lte?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Scalars['Boolean']>;
  _nin?: Maybe<Array<Scalars['Boolean']>>;
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

/** columns and relationships of "_condizioni_traffico" */
export type _Condizioni_Traffico = {
  __typename?: '_condizioni_traffico';
  created_at: Scalars['timestamptz'];
  id: Scalars['Int'];
  nome: Scalars['String'];
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "_condizioni_traffico" */
export type _Condizioni_Traffico_Aggregate = {
  __typename?: '_condizioni_traffico_aggregate';
  aggregate?: Maybe<_Condizioni_Traffico_Aggregate_Fields>;
  nodes: Array<_Condizioni_Traffico>;
};

/** aggregate fields of "_condizioni_traffico" */
export type _Condizioni_Traffico_Aggregate_Fields = {
  __typename?: '_condizioni_traffico_aggregate_fields';
  avg?: Maybe<_Condizioni_Traffico_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<_Condizioni_Traffico_Max_Fields>;
  min?: Maybe<_Condizioni_Traffico_Min_Fields>;
  stddev?: Maybe<_Condizioni_Traffico_Stddev_Fields>;
  stddev_pop?: Maybe<_Condizioni_Traffico_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<_Condizioni_Traffico_Stddev_Samp_Fields>;
  sum?: Maybe<_Condizioni_Traffico_Sum_Fields>;
  var_pop?: Maybe<_Condizioni_Traffico_Var_Pop_Fields>;
  var_samp?: Maybe<_Condizioni_Traffico_Var_Samp_Fields>;
  variance?: Maybe<_Condizioni_Traffico_Variance_Fields>;
};


/** aggregate fields of "_condizioni_traffico" */
export type _Condizioni_Traffico_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<_Condizioni_Traffico_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type _Condizioni_Traffico_Avg_Fields = {
  __typename?: '_condizioni_traffico_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "_condizioni_traffico". All fields are combined with a logical 'AND'. */
export type _Condizioni_Traffico_Bool_Exp = {
  _and?: Maybe<Array<_Condizioni_Traffico_Bool_Exp>>;
  _not?: Maybe<_Condizioni_Traffico_Bool_Exp>;
  _or?: Maybe<Array<_Condizioni_Traffico_Bool_Exp>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  nome?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "_condizioni_traffico" */
export enum _Condizioni_Traffico_Constraint {
  /** unique or primary key constraint */
  CondizioniTrafficoPkey = '_condizioni_traffico_pkey'
}

/** input type for incrementing numeric columns in table "_condizioni_traffico" */
export type _Condizioni_Traffico_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "_condizioni_traffico" */
export type _Condizioni_Traffico_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  nome?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type _Condizioni_Traffico_Max_Fields = {
  __typename?: '_condizioni_traffico_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  nome?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type _Condizioni_Traffico_Min_Fields = {
  __typename?: '_condizioni_traffico_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  nome?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "_condizioni_traffico" */
export type _Condizioni_Traffico_Mutation_Response = {
  __typename?: '_condizioni_traffico_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<_Condizioni_Traffico>;
};

/** input type for inserting object relation for remote table "_condizioni_traffico" */
export type _Condizioni_Traffico_Obj_Rel_Insert_Input = {
  data: _Condizioni_Traffico_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<_Condizioni_Traffico_On_Conflict>;
};

/** on conflict condition type for table "_condizioni_traffico" */
export type _Condizioni_Traffico_On_Conflict = {
  constraint: _Condizioni_Traffico_Constraint;
  update_columns?: Array<_Condizioni_Traffico_Update_Column>;
  where?: Maybe<_Condizioni_Traffico_Bool_Exp>;
};

/** Ordering options when selecting data from "_condizioni_traffico". */
export type _Condizioni_Traffico_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  nome?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: _condizioni_traffico */
export type _Condizioni_Traffico_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "_condizioni_traffico" */
export enum _Condizioni_Traffico_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Nome = 'nome',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "_condizioni_traffico" */
export type _Condizioni_Traffico_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  nome?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type _Condizioni_Traffico_Stddev_Fields = {
  __typename?: '_condizioni_traffico_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type _Condizioni_Traffico_Stddev_Pop_Fields = {
  __typename?: '_condizioni_traffico_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type _Condizioni_Traffico_Stddev_Samp_Fields = {
  __typename?: '_condizioni_traffico_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type _Condizioni_Traffico_Sum_Fields = {
  __typename?: '_condizioni_traffico_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "_condizioni_traffico" */
export enum _Condizioni_Traffico_Update_Column {
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
export type _Condizioni_Traffico_Var_Pop_Fields = {
  __typename?: '_condizioni_traffico_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type _Condizioni_Traffico_Var_Samp_Fields = {
  __typename?: '_condizioni_traffico_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type _Condizioni_Traffico_Variance_Fields = {
  __typename?: '_condizioni_traffico_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "_forma_dissesto" */
export type _Forma_Dissesto = {
  __typename?: '_forma_dissesto';
  created_at: Scalars['timestamptz'];
  id: Scalars['Int'];
  nome: Scalars['String'];
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "_forma_dissesto" */
export type _Forma_Dissesto_Aggregate = {
  __typename?: '_forma_dissesto_aggregate';
  aggregate?: Maybe<_Forma_Dissesto_Aggregate_Fields>;
  nodes: Array<_Forma_Dissesto>;
};

/** aggregate fields of "_forma_dissesto" */
export type _Forma_Dissesto_Aggregate_Fields = {
  __typename?: '_forma_dissesto_aggregate_fields';
  avg?: Maybe<_Forma_Dissesto_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<_Forma_Dissesto_Max_Fields>;
  min?: Maybe<_Forma_Dissesto_Min_Fields>;
  stddev?: Maybe<_Forma_Dissesto_Stddev_Fields>;
  stddev_pop?: Maybe<_Forma_Dissesto_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<_Forma_Dissesto_Stddev_Samp_Fields>;
  sum?: Maybe<_Forma_Dissesto_Sum_Fields>;
  var_pop?: Maybe<_Forma_Dissesto_Var_Pop_Fields>;
  var_samp?: Maybe<_Forma_Dissesto_Var_Samp_Fields>;
  variance?: Maybe<_Forma_Dissesto_Variance_Fields>;
};


/** aggregate fields of "_forma_dissesto" */
export type _Forma_Dissesto_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<_Forma_Dissesto_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type _Forma_Dissesto_Avg_Fields = {
  __typename?: '_forma_dissesto_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "_forma_dissesto". All fields are combined with a logical 'AND'. */
export type _Forma_Dissesto_Bool_Exp = {
  _and?: Maybe<Array<_Forma_Dissesto_Bool_Exp>>;
  _not?: Maybe<_Forma_Dissesto_Bool_Exp>;
  _or?: Maybe<Array<_Forma_Dissesto_Bool_Exp>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  nome?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "_forma_dissesto" */
export enum _Forma_Dissesto_Constraint {
  /** unique or primary key constraint */
  FormDissestoPkey = '_form_dissesto_pkey'
}

/** input type for incrementing numeric columns in table "_forma_dissesto" */
export type _Forma_Dissesto_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "_forma_dissesto" */
export type _Forma_Dissesto_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  nome?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type _Forma_Dissesto_Max_Fields = {
  __typename?: '_forma_dissesto_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  nome?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type _Forma_Dissesto_Min_Fields = {
  __typename?: '_forma_dissesto_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  nome?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "_forma_dissesto" */
export type _Forma_Dissesto_Mutation_Response = {
  __typename?: '_forma_dissesto_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<_Forma_Dissesto>;
};

/** input type for inserting object relation for remote table "_forma_dissesto" */
export type _Forma_Dissesto_Obj_Rel_Insert_Input = {
  data: _Forma_Dissesto_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<_Forma_Dissesto_On_Conflict>;
};

/** on conflict condition type for table "_forma_dissesto" */
export type _Forma_Dissesto_On_Conflict = {
  constraint: _Forma_Dissesto_Constraint;
  update_columns?: Array<_Forma_Dissesto_Update_Column>;
  where?: Maybe<_Forma_Dissesto_Bool_Exp>;
};

/** Ordering options when selecting data from "_forma_dissesto". */
export type _Forma_Dissesto_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  nome?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: _forma_dissesto */
export type _Forma_Dissesto_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "_forma_dissesto" */
export enum _Forma_Dissesto_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Nome = 'nome',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "_forma_dissesto" */
export type _Forma_Dissesto_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  nome?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type _Forma_Dissesto_Stddev_Fields = {
  __typename?: '_forma_dissesto_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type _Forma_Dissesto_Stddev_Pop_Fields = {
  __typename?: '_forma_dissesto_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type _Forma_Dissesto_Stddev_Samp_Fields = {
  __typename?: '_forma_dissesto_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type _Forma_Dissesto_Sum_Fields = {
  __typename?: '_forma_dissesto_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "_forma_dissesto" */
export enum _Forma_Dissesto_Update_Column {
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
export type _Forma_Dissesto_Var_Pop_Fields = {
  __typename?: '_forma_dissesto_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type _Forma_Dissesto_Var_Samp_Fields = {
  __typename?: '_forma_dissesto_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type _Forma_Dissesto_Variance_Fields = {
  __typename?: '_forma_dissesto_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "_giorni_trascorsi" */
export type _Giorni_Trascorsi = {
  __typename?: '_giorni_trascorsi';
  created_at: Scalars['timestamptz'];
  id: Scalars['Int'];
  nome: Scalars['String'];
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "_giorni_trascorsi" */
export type _Giorni_Trascorsi_Aggregate = {
  __typename?: '_giorni_trascorsi_aggregate';
  aggregate?: Maybe<_Giorni_Trascorsi_Aggregate_Fields>;
  nodes: Array<_Giorni_Trascorsi>;
};

/** aggregate fields of "_giorni_trascorsi" */
export type _Giorni_Trascorsi_Aggregate_Fields = {
  __typename?: '_giorni_trascorsi_aggregate_fields';
  avg?: Maybe<_Giorni_Trascorsi_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<_Giorni_Trascorsi_Max_Fields>;
  min?: Maybe<_Giorni_Trascorsi_Min_Fields>;
  stddev?: Maybe<_Giorni_Trascorsi_Stddev_Fields>;
  stddev_pop?: Maybe<_Giorni_Trascorsi_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<_Giorni_Trascorsi_Stddev_Samp_Fields>;
  sum?: Maybe<_Giorni_Trascorsi_Sum_Fields>;
  var_pop?: Maybe<_Giorni_Trascorsi_Var_Pop_Fields>;
  var_samp?: Maybe<_Giorni_Trascorsi_Var_Samp_Fields>;
  variance?: Maybe<_Giorni_Trascorsi_Variance_Fields>;
};


/** aggregate fields of "_giorni_trascorsi" */
export type _Giorni_Trascorsi_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<_Giorni_Trascorsi_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type _Giorni_Trascorsi_Avg_Fields = {
  __typename?: '_giorni_trascorsi_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "_giorni_trascorsi". All fields are combined with a logical 'AND'. */
export type _Giorni_Trascorsi_Bool_Exp = {
  _and?: Maybe<Array<_Giorni_Trascorsi_Bool_Exp>>;
  _not?: Maybe<_Giorni_Trascorsi_Bool_Exp>;
  _or?: Maybe<Array<_Giorni_Trascorsi_Bool_Exp>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  nome?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "_giorni_trascorsi" */
export enum _Giorni_Trascorsi_Constraint {
  /** unique or primary key constraint */
  GiorniTrascorsiPkey = '_giorni_trascorsi_pkey'
}

/** input type for incrementing numeric columns in table "_giorni_trascorsi" */
export type _Giorni_Trascorsi_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "_giorni_trascorsi" */
export type _Giorni_Trascorsi_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  nome?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type _Giorni_Trascorsi_Max_Fields = {
  __typename?: '_giorni_trascorsi_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  nome?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type _Giorni_Trascorsi_Min_Fields = {
  __typename?: '_giorni_trascorsi_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  nome?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "_giorni_trascorsi" */
export type _Giorni_Trascorsi_Mutation_Response = {
  __typename?: '_giorni_trascorsi_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<_Giorni_Trascorsi>;
};

/** input type for inserting object relation for remote table "_giorni_trascorsi" */
export type _Giorni_Trascorsi_Obj_Rel_Insert_Input = {
  data: _Giorni_Trascorsi_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<_Giorni_Trascorsi_On_Conflict>;
};

/** on conflict condition type for table "_giorni_trascorsi" */
export type _Giorni_Trascorsi_On_Conflict = {
  constraint: _Giorni_Trascorsi_Constraint;
  update_columns?: Array<_Giorni_Trascorsi_Update_Column>;
  where?: Maybe<_Giorni_Trascorsi_Bool_Exp>;
};

/** Ordering options when selecting data from "_giorni_trascorsi". */
export type _Giorni_Trascorsi_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  nome?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: _giorni_trascorsi */
export type _Giorni_Trascorsi_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "_giorni_trascorsi" */
export enum _Giorni_Trascorsi_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Nome = 'nome',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "_giorni_trascorsi" */
export type _Giorni_Trascorsi_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  nome?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type _Giorni_Trascorsi_Stddev_Fields = {
  __typename?: '_giorni_trascorsi_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type _Giorni_Trascorsi_Stddev_Pop_Fields = {
  __typename?: '_giorni_trascorsi_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type _Giorni_Trascorsi_Stddev_Samp_Fields = {
  __typename?: '_giorni_trascorsi_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type _Giorni_Trascorsi_Sum_Fields = {
  __typename?: '_giorni_trascorsi_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "_giorni_trascorsi" */
export enum _Giorni_Trascorsi_Update_Column {
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
export type _Giorni_Trascorsi_Var_Pop_Fields = {
  __typename?: '_giorni_trascorsi_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type _Giorni_Trascorsi_Var_Samp_Fields = {
  __typename?: '_giorni_trascorsi_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type _Giorni_Trascorsi_Variance_Fields = {
  __typename?: '_giorni_trascorsi_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "_materiale" */
export type _Materiale = {
  __typename?: '_materiale';
  created_at: Scalars['timestamptz'];
  id: Scalars['Int'];
  nome: Scalars['String'];
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "_materiale" */
export type _Materiale_Aggregate = {
  __typename?: '_materiale_aggregate';
  aggregate?: Maybe<_Materiale_Aggregate_Fields>;
  nodes: Array<_Materiale>;
};

/** aggregate fields of "_materiale" */
export type _Materiale_Aggregate_Fields = {
  __typename?: '_materiale_aggregate_fields';
  avg?: Maybe<_Materiale_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<_Materiale_Max_Fields>;
  min?: Maybe<_Materiale_Min_Fields>;
  stddev?: Maybe<_Materiale_Stddev_Fields>;
  stddev_pop?: Maybe<_Materiale_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<_Materiale_Stddev_Samp_Fields>;
  sum?: Maybe<_Materiale_Sum_Fields>;
  var_pop?: Maybe<_Materiale_Var_Pop_Fields>;
  var_samp?: Maybe<_Materiale_Var_Samp_Fields>;
  variance?: Maybe<_Materiale_Variance_Fields>;
};


/** aggregate fields of "_materiale" */
export type _Materiale_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<_Materiale_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type _Materiale_Avg_Fields = {
  __typename?: '_materiale_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "_materiale". All fields are combined with a logical 'AND'. */
export type _Materiale_Bool_Exp = {
  _and?: Maybe<Array<_Materiale_Bool_Exp>>;
  _not?: Maybe<_Materiale_Bool_Exp>;
  _or?: Maybe<Array<_Materiale_Bool_Exp>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  nome?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "_materiale" */
export enum _Materiale_Constraint {
  /** unique or primary key constraint */
  MaterialePkey = '_materiale_pkey'
}

/** input type for incrementing numeric columns in table "_materiale" */
export type _Materiale_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "_materiale" */
export type _Materiale_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  nome?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type _Materiale_Max_Fields = {
  __typename?: '_materiale_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  nome?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type _Materiale_Min_Fields = {
  __typename?: '_materiale_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  nome?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "_materiale" */
export type _Materiale_Mutation_Response = {
  __typename?: '_materiale_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<_Materiale>;
};

/** input type for inserting object relation for remote table "_materiale" */
export type _Materiale_Obj_Rel_Insert_Input = {
  data: _Materiale_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<_Materiale_On_Conflict>;
};

/** on conflict condition type for table "_materiale" */
export type _Materiale_On_Conflict = {
  constraint: _Materiale_Constraint;
  update_columns?: Array<_Materiale_Update_Column>;
  where?: Maybe<_Materiale_Bool_Exp>;
};

/** Ordering options when selecting data from "_materiale". */
export type _Materiale_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  nome?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: _materiale */
export type _Materiale_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "_materiale" */
export enum _Materiale_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Nome = 'nome',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "_materiale" */
export type _Materiale_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  nome?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type _Materiale_Stddev_Fields = {
  __typename?: '_materiale_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type _Materiale_Stddev_Pop_Fields = {
  __typename?: '_materiale_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type _Materiale_Stddev_Samp_Fields = {
  __typename?: '_materiale_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type _Materiale_Sum_Fields = {
  __typename?: '_materiale_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "_materiale" */
export enum _Materiale_Update_Column {
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
export type _Materiale_Var_Pop_Fields = {
  __typename?: '_materiale_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type _Materiale_Var_Samp_Fields = {
  __typename?: '_materiale_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type _Materiale_Variance_Fields = {
  __typename?: '_materiale_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "_priorita" */
export type _Priorita = {
  __typename?: '_priorita';
  created_at: Scalars['timestamptz'];
  id: Scalars['Int'];
  nome: Scalars['String'];
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "_priorita" */
export type _Priorita_Aggregate = {
  __typename?: '_priorita_aggregate';
  aggregate?: Maybe<_Priorita_Aggregate_Fields>;
  nodes: Array<_Priorita>;
};

/** aggregate fields of "_priorita" */
export type _Priorita_Aggregate_Fields = {
  __typename?: '_priorita_aggregate_fields';
  avg?: Maybe<_Priorita_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<_Priorita_Max_Fields>;
  min?: Maybe<_Priorita_Min_Fields>;
  stddev?: Maybe<_Priorita_Stddev_Fields>;
  stddev_pop?: Maybe<_Priorita_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<_Priorita_Stddev_Samp_Fields>;
  sum?: Maybe<_Priorita_Sum_Fields>;
  var_pop?: Maybe<_Priorita_Var_Pop_Fields>;
  var_samp?: Maybe<_Priorita_Var_Samp_Fields>;
  variance?: Maybe<_Priorita_Variance_Fields>;
};


/** aggregate fields of "_priorita" */
export type _Priorita_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<_Priorita_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type _Priorita_Avg_Fields = {
  __typename?: '_priorita_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "_priorita". All fields are combined with a logical 'AND'. */
export type _Priorita_Bool_Exp = {
  _and?: Maybe<Array<_Priorita_Bool_Exp>>;
  _not?: Maybe<_Priorita_Bool_Exp>;
  _or?: Maybe<Array<_Priorita_Bool_Exp>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  nome?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "_priorita" */
export enum _Priorita_Constraint {
  /** unique or primary key constraint */
  PrioritaPkey = '_priorita_pkey'
}

/** input type for incrementing numeric columns in table "_priorita" */
export type _Priorita_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "_priorita" */
export type _Priorita_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  nome?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type _Priorita_Max_Fields = {
  __typename?: '_priorita_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  nome?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type _Priorita_Min_Fields = {
  __typename?: '_priorita_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  nome?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "_priorita" */
export type _Priorita_Mutation_Response = {
  __typename?: '_priorita_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<_Priorita>;
};

/** input type for inserting object relation for remote table "_priorita" */
export type _Priorita_Obj_Rel_Insert_Input = {
  data: _Priorita_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<_Priorita_On_Conflict>;
};

/** on conflict condition type for table "_priorita" */
export type _Priorita_On_Conflict = {
  constraint: _Priorita_Constraint;
  update_columns?: Array<_Priorita_Update_Column>;
  where?: Maybe<_Priorita_Bool_Exp>;
};

/** Ordering options when selecting data from "_priorita". */
export type _Priorita_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  nome?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: _priorita */
export type _Priorita_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "_priorita" */
export enum _Priorita_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Nome = 'nome',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "_priorita" */
export type _Priorita_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  nome?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type _Priorita_Stddev_Fields = {
  __typename?: '_priorita_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type _Priorita_Stddev_Pop_Fields = {
  __typename?: '_priorita_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type _Priorita_Stddev_Samp_Fields = {
  __typename?: '_priorita_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type _Priorita_Sum_Fields = {
  __typename?: '_priorita_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "_priorita" */
export enum _Priorita_Update_Column {
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
export type _Priorita_Var_Pop_Fields = {
  __typename?: '_priorita_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type _Priorita_Var_Samp_Fields = {
  __typename?: '_priorita_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type _Priorita_Variance_Fields = {
  __typename?: '_priorita_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "_sezione_protocollo" */
export type _Sezione_Protocollo = {
  __typename?: '_sezione_protocollo';
  codice: Scalars['String'];
  created_at: Scalars['timestamptz'];
  id: Scalars['Int'];
  nome: Scalars['String'];
  sigla?: Maybe<Scalars['String']>;
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "_sezione_protocollo" */
export type _Sezione_Protocollo_Aggregate = {
  __typename?: '_sezione_protocollo_aggregate';
  aggregate?: Maybe<_Sezione_Protocollo_Aggregate_Fields>;
  nodes: Array<_Sezione_Protocollo>;
};

/** aggregate fields of "_sezione_protocollo" */
export type _Sezione_Protocollo_Aggregate_Fields = {
  __typename?: '_sezione_protocollo_aggregate_fields';
  avg?: Maybe<_Sezione_Protocollo_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<_Sezione_Protocollo_Max_Fields>;
  min?: Maybe<_Sezione_Protocollo_Min_Fields>;
  stddev?: Maybe<_Sezione_Protocollo_Stddev_Fields>;
  stddev_pop?: Maybe<_Sezione_Protocollo_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<_Sezione_Protocollo_Stddev_Samp_Fields>;
  sum?: Maybe<_Sezione_Protocollo_Sum_Fields>;
  var_pop?: Maybe<_Sezione_Protocollo_Var_Pop_Fields>;
  var_samp?: Maybe<_Sezione_Protocollo_Var_Samp_Fields>;
  variance?: Maybe<_Sezione_Protocollo_Variance_Fields>;
};


/** aggregate fields of "_sezione_protocollo" */
export type _Sezione_Protocollo_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<_Sezione_Protocollo_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type _Sezione_Protocollo_Avg_Fields = {
  __typename?: '_sezione_protocollo_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "_sezione_protocollo". All fields are combined with a logical 'AND'. */
export type _Sezione_Protocollo_Bool_Exp = {
  _and?: Maybe<Array<_Sezione_Protocollo_Bool_Exp>>;
  _not?: Maybe<_Sezione_Protocollo_Bool_Exp>;
  _or?: Maybe<Array<_Sezione_Protocollo_Bool_Exp>>;
  codice?: Maybe<String_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  nome?: Maybe<String_Comparison_Exp>;
  sigla?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "_sezione_protocollo" */
export enum _Sezione_Protocollo_Constraint {
  /** unique or primary key constraint */
  SezioneProtocolloPkey = '_sezione_protocollo_pkey'
}

/** input type for incrementing numeric columns in table "_sezione_protocollo" */
export type _Sezione_Protocollo_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "_sezione_protocollo" */
export type _Sezione_Protocollo_Insert_Input = {
  codice?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  nome?: Maybe<Scalars['String']>;
  sigla?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type _Sezione_Protocollo_Max_Fields = {
  __typename?: '_sezione_protocollo_max_fields';
  codice?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  nome?: Maybe<Scalars['String']>;
  sigla?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type _Sezione_Protocollo_Min_Fields = {
  __typename?: '_sezione_protocollo_min_fields';
  codice?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  nome?: Maybe<Scalars['String']>;
  sigla?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "_sezione_protocollo" */
export type _Sezione_Protocollo_Mutation_Response = {
  __typename?: '_sezione_protocollo_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<_Sezione_Protocollo>;
};

/** input type for inserting object relation for remote table "_sezione_protocollo" */
export type _Sezione_Protocollo_Obj_Rel_Insert_Input = {
  data: _Sezione_Protocollo_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<_Sezione_Protocollo_On_Conflict>;
};

/** on conflict condition type for table "_sezione_protocollo" */
export type _Sezione_Protocollo_On_Conflict = {
  constraint: _Sezione_Protocollo_Constraint;
  update_columns?: Array<_Sezione_Protocollo_Update_Column>;
  where?: Maybe<_Sezione_Protocollo_Bool_Exp>;
};

/** Ordering options when selecting data from "_sezione_protocollo". */
export type _Sezione_Protocollo_Order_By = {
  codice?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  nome?: Maybe<Order_By>;
  sigla?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: _sezione_protocollo */
export type _Sezione_Protocollo_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "_sezione_protocollo" */
export enum _Sezione_Protocollo_Select_Column {
  /** column name */
  Codice = 'codice',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Nome = 'nome',
  /** column name */
  Sigla = 'sigla',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "_sezione_protocollo" */
export type _Sezione_Protocollo_Set_Input = {
  codice?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  nome?: Maybe<Scalars['String']>;
  sigla?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type _Sezione_Protocollo_Stddev_Fields = {
  __typename?: '_sezione_protocollo_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type _Sezione_Protocollo_Stddev_Pop_Fields = {
  __typename?: '_sezione_protocollo_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type _Sezione_Protocollo_Stddev_Samp_Fields = {
  __typename?: '_sezione_protocollo_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type _Sezione_Protocollo_Sum_Fields = {
  __typename?: '_sezione_protocollo_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "_sezione_protocollo" */
export enum _Sezione_Protocollo_Update_Column {
  /** column name */
  Codice = 'codice',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Nome = 'nome',
  /** column name */
  Sigla = 'sigla',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type _Sezione_Protocollo_Var_Pop_Fields = {
  __typename?: '_sezione_protocollo_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type _Sezione_Protocollo_Var_Samp_Fields = {
  __typename?: '_sezione_protocollo_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type _Sezione_Protocollo_Variance_Fields = {
  __typename?: '_sezione_protocollo_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "_specifica_posizionamento_toponimo" */
export type _Specifica_Posizionamento_Toponimo = {
  __typename?: '_specifica_posizionamento_toponimo';
  created_at: Scalars['timestamptz'];
  id: Scalars['Int'];
  nome: Scalars['String'];
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "_specifica_posizionamento_toponimo" */
export type _Specifica_Posizionamento_Toponimo_Aggregate = {
  __typename?: '_specifica_posizionamento_toponimo_aggregate';
  aggregate?: Maybe<_Specifica_Posizionamento_Toponimo_Aggregate_Fields>;
  nodes: Array<_Specifica_Posizionamento_Toponimo>;
};

/** aggregate fields of "_specifica_posizionamento_toponimo" */
export type _Specifica_Posizionamento_Toponimo_Aggregate_Fields = {
  __typename?: '_specifica_posizionamento_toponimo_aggregate_fields';
  avg?: Maybe<_Specifica_Posizionamento_Toponimo_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<_Specifica_Posizionamento_Toponimo_Max_Fields>;
  min?: Maybe<_Specifica_Posizionamento_Toponimo_Min_Fields>;
  stddev?: Maybe<_Specifica_Posizionamento_Toponimo_Stddev_Fields>;
  stddev_pop?: Maybe<_Specifica_Posizionamento_Toponimo_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<_Specifica_Posizionamento_Toponimo_Stddev_Samp_Fields>;
  sum?: Maybe<_Specifica_Posizionamento_Toponimo_Sum_Fields>;
  var_pop?: Maybe<_Specifica_Posizionamento_Toponimo_Var_Pop_Fields>;
  var_samp?: Maybe<_Specifica_Posizionamento_Toponimo_Var_Samp_Fields>;
  variance?: Maybe<_Specifica_Posizionamento_Toponimo_Variance_Fields>;
};


/** aggregate fields of "_specifica_posizionamento_toponimo" */
export type _Specifica_Posizionamento_Toponimo_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<_Specifica_Posizionamento_Toponimo_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type _Specifica_Posizionamento_Toponimo_Avg_Fields = {
  __typename?: '_specifica_posizionamento_toponimo_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "_specifica_posizionamento_toponimo". All fields are combined with a logical 'AND'. */
export type _Specifica_Posizionamento_Toponimo_Bool_Exp = {
  _and?: Maybe<Array<_Specifica_Posizionamento_Toponimo_Bool_Exp>>;
  _not?: Maybe<_Specifica_Posizionamento_Toponimo_Bool_Exp>;
  _or?: Maybe<Array<_Specifica_Posizionamento_Toponimo_Bool_Exp>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  nome?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "_specifica_posizionamento_toponimo" */
export enum _Specifica_Posizionamento_Toponimo_Constraint {
  /** unique or primary key constraint */
  SpecificaPosizionamentoToponimoPkey = '_specifica_posizionamento_toponimo_pkey'
}

/** input type for incrementing numeric columns in table "_specifica_posizionamento_toponimo" */
export type _Specifica_Posizionamento_Toponimo_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "_specifica_posizionamento_toponimo" */
export type _Specifica_Posizionamento_Toponimo_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  nome?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type _Specifica_Posizionamento_Toponimo_Max_Fields = {
  __typename?: '_specifica_posizionamento_toponimo_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  nome?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type _Specifica_Posizionamento_Toponimo_Min_Fields = {
  __typename?: '_specifica_posizionamento_toponimo_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  nome?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "_specifica_posizionamento_toponimo" */
export type _Specifica_Posizionamento_Toponimo_Mutation_Response = {
  __typename?: '_specifica_posizionamento_toponimo_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<_Specifica_Posizionamento_Toponimo>;
};

/** input type for inserting object relation for remote table "_specifica_posizionamento_toponimo" */
export type _Specifica_Posizionamento_Toponimo_Obj_Rel_Insert_Input = {
  data: _Specifica_Posizionamento_Toponimo_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<_Specifica_Posizionamento_Toponimo_On_Conflict>;
};

/** on conflict condition type for table "_specifica_posizionamento_toponimo" */
export type _Specifica_Posizionamento_Toponimo_On_Conflict = {
  constraint: _Specifica_Posizionamento_Toponimo_Constraint;
  update_columns?: Array<_Specifica_Posizionamento_Toponimo_Update_Column>;
  where?: Maybe<_Specifica_Posizionamento_Toponimo_Bool_Exp>;
};

/** Ordering options when selecting data from "_specifica_posizionamento_toponimo". */
export type _Specifica_Posizionamento_Toponimo_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  nome?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: _specifica_posizionamento_toponimo */
export type _Specifica_Posizionamento_Toponimo_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "_specifica_posizionamento_toponimo" */
export enum _Specifica_Posizionamento_Toponimo_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Nome = 'nome',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "_specifica_posizionamento_toponimo" */
export type _Specifica_Posizionamento_Toponimo_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  nome?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type _Specifica_Posizionamento_Toponimo_Stddev_Fields = {
  __typename?: '_specifica_posizionamento_toponimo_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type _Specifica_Posizionamento_Toponimo_Stddev_Pop_Fields = {
  __typename?: '_specifica_posizionamento_toponimo_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type _Specifica_Posizionamento_Toponimo_Stddev_Samp_Fields = {
  __typename?: '_specifica_posizionamento_toponimo_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type _Specifica_Posizionamento_Toponimo_Sum_Fields = {
  __typename?: '_specifica_posizionamento_toponimo_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "_specifica_posizionamento_toponimo" */
export enum _Specifica_Posizionamento_Toponimo_Update_Column {
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
export type _Specifica_Posizionamento_Toponimo_Var_Pop_Fields = {
  __typename?: '_specifica_posizionamento_toponimo_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type _Specifica_Posizionamento_Toponimo_Var_Samp_Fields = {
  __typename?: '_specifica_posizionamento_toponimo_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type _Specifica_Posizionamento_Toponimo_Variance_Fields = {
  __typename?: '_specifica_posizionamento_toponimo_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "_stato_segnalazione" */
export type _Stato_Segnalazione = {
  __typename?: '_stato_segnalazione';
  text: Scalars['String'];
};

/** aggregated selection of "_stato_segnalazione" */
export type _Stato_Segnalazione_Aggregate = {
  __typename?: '_stato_segnalazione_aggregate';
  aggregate?: Maybe<_Stato_Segnalazione_Aggregate_Fields>;
  nodes: Array<_Stato_Segnalazione>;
};

/** aggregate fields of "_stato_segnalazione" */
export type _Stato_Segnalazione_Aggregate_Fields = {
  __typename?: '_stato_segnalazione_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<_Stato_Segnalazione_Max_Fields>;
  min?: Maybe<_Stato_Segnalazione_Min_Fields>;
};


/** aggregate fields of "_stato_segnalazione" */
export type _Stato_Segnalazione_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<_Stato_Segnalazione_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "_stato_segnalazione". All fields are combined with a logical 'AND'. */
export type _Stato_Segnalazione_Bool_Exp = {
  _and?: Maybe<Array<_Stato_Segnalazione_Bool_Exp>>;
  _not?: Maybe<_Stato_Segnalazione_Bool_Exp>;
  _or?: Maybe<Array<_Stato_Segnalazione_Bool_Exp>>;
  text?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "_stato_segnalazione" */
export enum _Stato_Segnalazione_Constraint {
  /** unique or primary key constraint */
  StatoSegnalazionePkey = '_stato_segnalazione_pkey'
}

export enum _Stato_Segnalazione_Enum {
  Aperta = 'APERTA',
  Assegnata = 'ASSEGNATA',
  Bozza = 'BOZZA',
  Completata = 'COMPLETATA',
  Pre = 'PRE',
  Protocollazione = 'PROTOCOLLAZIONE',
  Rimandata = 'RIMANDATA',
  Risolta = 'RISOLTA',
  Sospesa = 'SOSPESA'
}

/** Boolean expression to compare columns of type "_stato_segnalazione_enum". All fields are combined with logical 'AND'. */
export type _Stato_Segnalazione_Enum_Comparison_Exp = {
  _eq?: Maybe<_Stato_Segnalazione_Enum>;
  _in?: Maybe<Array<_Stato_Segnalazione_Enum>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<_Stato_Segnalazione_Enum>;
  _nin?: Maybe<Array<_Stato_Segnalazione_Enum>>;
};

/** input type for inserting data into table "_stato_segnalazione" */
export type _Stato_Segnalazione_Insert_Input = {
  text?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type _Stato_Segnalazione_Max_Fields = {
  __typename?: '_stato_segnalazione_max_fields';
  text?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type _Stato_Segnalazione_Min_Fields = {
  __typename?: '_stato_segnalazione_min_fields';
  text?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "_stato_segnalazione" */
export type _Stato_Segnalazione_Mutation_Response = {
  __typename?: '_stato_segnalazione_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<_Stato_Segnalazione>;
};

/** on conflict condition type for table "_stato_segnalazione" */
export type _Stato_Segnalazione_On_Conflict = {
  constraint: _Stato_Segnalazione_Constraint;
  update_columns?: Array<_Stato_Segnalazione_Update_Column>;
  where?: Maybe<_Stato_Segnalazione_Bool_Exp>;
};

/** Ordering options when selecting data from "_stato_segnalazione". */
export type _Stato_Segnalazione_Order_By = {
  text?: Maybe<Order_By>;
};

/** primary key columns input for table: _stato_segnalazione */
export type _Stato_Segnalazione_Pk_Columns_Input = {
  text: Scalars['String'];
};

/** select columns of table "_stato_segnalazione" */
export enum _Stato_Segnalazione_Select_Column {
  /** column name */
  Text = 'text'
}

/** input type for updating data in table "_stato_segnalazione" */
export type _Stato_Segnalazione_Set_Input = {
  text?: Maybe<Scalars['String']>;
};

/** update columns of table "_stato_segnalazione" */
export enum _Stato_Segnalazione_Update_Column {
  /** column name */
  Text = 'text'
}

/** columns and relationships of "_tipologia_dissesto" */
export type _Tipologia_Dissesto = {
  __typename?: '_tipologia_dissesto';
  created_at: Scalars['timestamptz'];
  id: Scalars['Int'];
  intervento?: Maybe<Scalars['String']>;
  nome: Scalars['String'];
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "_tipologia_dissesto" */
export type _Tipologia_Dissesto_Aggregate = {
  __typename?: '_tipologia_dissesto_aggregate';
  aggregate?: Maybe<_Tipologia_Dissesto_Aggregate_Fields>;
  nodes: Array<_Tipologia_Dissesto>;
};

/** aggregate fields of "_tipologia_dissesto" */
export type _Tipologia_Dissesto_Aggregate_Fields = {
  __typename?: '_tipologia_dissesto_aggregate_fields';
  avg?: Maybe<_Tipologia_Dissesto_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<_Tipologia_Dissesto_Max_Fields>;
  min?: Maybe<_Tipologia_Dissesto_Min_Fields>;
  stddev?: Maybe<_Tipologia_Dissesto_Stddev_Fields>;
  stddev_pop?: Maybe<_Tipologia_Dissesto_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<_Tipologia_Dissesto_Stddev_Samp_Fields>;
  sum?: Maybe<_Tipologia_Dissesto_Sum_Fields>;
  var_pop?: Maybe<_Tipologia_Dissesto_Var_Pop_Fields>;
  var_samp?: Maybe<_Tipologia_Dissesto_Var_Samp_Fields>;
  variance?: Maybe<_Tipologia_Dissesto_Variance_Fields>;
};


/** aggregate fields of "_tipologia_dissesto" */
export type _Tipologia_Dissesto_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<_Tipologia_Dissesto_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type _Tipologia_Dissesto_Avg_Fields = {
  __typename?: '_tipologia_dissesto_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "_tipologia_dissesto". All fields are combined with a logical 'AND'. */
export type _Tipologia_Dissesto_Bool_Exp = {
  _and?: Maybe<Array<_Tipologia_Dissesto_Bool_Exp>>;
  _not?: Maybe<_Tipologia_Dissesto_Bool_Exp>;
  _or?: Maybe<Array<_Tipologia_Dissesto_Bool_Exp>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  intervento?: Maybe<String_Comparison_Exp>;
  nome?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "_tipologia_dissesto" */
export enum _Tipologia_Dissesto_Constraint {
  /** unique or primary key constraint */
  TipologiaDissestoPkey = '_tipologia_dissesto_pkey'
}

/** input type for incrementing numeric columns in table "_tipologia_dissesto" */
export type _Tipologia_Dissesto_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "_tipologia_dissesto" */
export type _Tipologia_Dissesto_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  intervento?: Maybe<Scalars['String']>;
  nome?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type _Tipologia_Dissesto_Max_Fields = {
  __typename?: '_tipologia_dissesto_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  intervento?: Maybe<Scalars['String']>;
  nome?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type _Tipologia_Dissesto_Min_Fields = {
  __typename?: '_tipologia_dissesto_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  intervento?: Maybe<Scalars['String']>;
  nome?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "_tipologia_dissesto" */
export type _Tipologia_Dissesto_Mutation_Response = {
  __typename?: '_tipologia_dissesto_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<_Tipologia_Dissesto>;
};

/** input type for inserting object relation for remote table "_tipologia_dissesto" */
export type _Tipologia_Dissesto_Obj_Rel_Insert_Input = {
  data: _Tipologia_Dissesto_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<_Tipologia_Dissesto_On_Conflict>;
};

/** on conflict condition type for table "_tipologia_dissesto" */
export type _Tipologia_Dissesto_On_Conflict = {
  constraint: _Tipologia_Dissesto_Constraint;
  update_columns?: Array<_Tipologia_Dissesto_Update_Column>;
  where?: Maybe<_Tipologia_Dissesto_Bool_Exp>;
};

/** Ordering options when selecting data from "_tipologia_dissesto". */
export type _Tipologia_Dissesto_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  intervento?: Maybe<Order_By>;
  nome?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: _tipologia_dissesto */
export type _Tipologia_Dissesto_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "_tipologia_dissesto" */
export enum _Tipologia_Dissesto_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Intervento = 'intervento',
  /** column name */
  Nome = 'nome',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "_tipologia_dissesto" */
export type _Tipologia_Dissesto_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  intervento?: Maybe<Scalars['String']>;
  nome?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type _Tipologia_Dissesto_Stddev_Fields = {
  __typename?: '_tipologia_dissesto_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type _Tipologia_Dissesto_Stddev_Pop_Fields = {
  __typename?: '_tipologia_dissesto_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type _Tipologia_Dissesto_Stddev_Samp_Fields = {
  __typename?: '_tipologia_dissesto_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type _Tipologia_Dissesto_Sum_Fields = {
  __typename?: '_tipologia_dissesto_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "_tipologia_dissesto" */
export enum _Tipologia_Dissesto_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Intervento = 'intervento',
  /** column name */
  Nome = 'nome',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type _Tipologia_Dissesto_Var_Pop_Fields = {
  __typename?: '_tipologia_dissesto_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type _Tipologia_Dissesto_Var_Samp_Fields = {
  __typename?: '_tipologia_dissesto_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type _Tipologia_Dissesto_Variance_Fields = {
  __typename?: '_tipologia_dissesto_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "_tipologia_posizionamento_toponimo" */
export type _Tipologia_Posizionamento_Toponimo = {
  __typename?: '_tipologia_posizionamento_toponimo';
  created_at: Scalars['timestamptz'];
  id: Scalars['Int'];
  nome: Scalars['String'];
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "_tipologia_posizionamento_toponimo" */
export type _Tipologia_Posizionamento_Toponimo_Aggregate = {
  __typename?: '_tipologia_posizionamento_toponimo_aggregate';
  aggregate?: Maybe<_Tipologia_Posizionamento_Toponimo_Aggregate_Fields>;
  nodes: Array<_Tipologia_Posizionamento_Toponimo>;
};

/** aggregate fields of "_tipologia_posizionamento_toponimo" */
export type _Tipologia_Posizionamento_Toponimo_Aggregate_Fields = {
  __typename?: '_tipologia_posizionamento_toponimo_aggregate_fields';
  avg?: Maybe<_Tipologia_Posizionamento_Toponimo_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<_Tipologia_Posizionamento_Toponimo_Max_Fields>;
  min?: Maybe<_Tipologia_Posizionamento_Toponimo_Min_Fields>;
  stddev?: Maybe<_Tipologia_Posizionamento_Toponimo_Stddev_Fields>;
  stddev_pop?: Maybe<_Tipologia_Posizionamento_Toponimo_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<_Tipologia_Posizionamento_Toponimo_Stddev_Samp_Fields>;
  sum?: Maybe<_Tipologia_Posizionamento_Toponimo_Sum_Fields>;
  var_pop?: Maybe<_Tipologia_Posizionamento_Toponimo_Var_Pop_Fields>;
  var_samp?: Maybe<_Tipologia_Posizionamento_Toponimo_Var_Samp_Fields>;
  variance?: Maybe<_Tipologia_Posizionamento_Toponimo_Variance_Fields>;
};


/** aggregate fields of "_tipologia_posizionamento_toponimo" */
export type _Tipologia_Posizionamento_Toponimo_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<_Tipologia_Posizionamento_Toponimo_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type _Tipologia_Posizionamento_Toponimo_Avg_Fields = {
  __typename?: '_tipologia_posizionamento_toponimo_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "_tipologia_posizionamento_toponimo". All fields are combined with a logical 'AND'. */
export type _Tipologia_Posizionamento_Toponimo_Bool_Exp = {
  _and?: Maybe<Array<_Tipologia_Posizionamento_Toponimo_Bool_Exp>>;
  _not?: Maybe<_Tipologia_Posizionamento_Toponimo_Bool_Exp>;
  _or?: Maybe<Array<_Tipologia_Posizionamento_Toponimo_Bool_Exp>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  nome?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "_tipologia_posizionamento_toponimo" */
export enum _Tipologia_Posizionamento_Toponimo_Constraint {
  /** unique or primary key constraint */
  TipologiaPosizionamentoToponimoPkey = '_tipologia_posizionamento_toponimo_pkey'
}

/** input type for incrementing numeric columns in table "_tipologia_posizionamento_toponimo" */
export type _Tipologia_Posizionamento_Toponimo_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "_tipologia_posizionamento_toponimo" */
export type _Tipologia_Posizionamento_Toponimo_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  nome?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type _Tipologia_Posizionamento_Toponimo_Max_Fields = {
  __typename?: '_tipologia_posizionamento_toponimo_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  nome?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type _Tipologia_Posizionamento_Toponimo_Min_Fields = {
  __typename?: '_tipologia_posizionamento_toponimo_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  nome?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "_tipologia_posizionamento_toponimo" */
export type _Tipologia_Posizionamento_Toponimo_Mutation_Response = {
  __typename?: '_tipologia_posizionamento_toponimo_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<_Tipologia_Posizionamento_Toponimo>;
};

/** input type for inserting object relation for remote table "_tipologia_posizionamento_toponimo" */
export type _Tipologia_Posizionamento_Toponimo_Obj_Rel_Insert_Input = {
  data: _Tipologia_Posizionamento_Toponimo_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<_Tipologia_Posizionamento_Toponimo_On_Conflict>;
};

/** on conflict condition type for table "_tipologia_posizionamento_toponimo" */
export type _Tipologia_Posizionamento_Toponimo_On_Conflict = {
  constraint: _Tipologia_Posizionamento_Toponimo_Constraint;
  update_columns?: Array<_Tipologia_Posizionamento_Toponimo_Update_Column>;
  where?: Maybe<_Tipologia_Posizionamento_Toponimo_Bool_Exp>;
};

/** Ordering options when selecting data from "_tipologia_posizionamento_toponimo". */
export type _Tipologia_Posizionamento_Toponimo_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  nome?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: _tipologia_posizionamento_toponimo */
export type _Tipologia_Posizionamento_Toponimo_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "_tipologia_posizionamento_toponimo" */
export enum _Tipologia_Posizionamento_Toponimo_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Nome = 'nome',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "_tipologia_posizionamento_toponimo" */
export type _Tipologia_Posizionamento_Toponimo_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  nome?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type _Tipologia_Posizionamento_Toponimo_Stddev_Fields = {
  __typename?: '_tipologia_posizionamento_toponimo_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type _Tipologia_Posizionamento_Toponimo_Stddev_Pop_Fields = {
  __typename?: '_tipologia_posizionamento_toponimo_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type _Tipologia_Posizionamento_Toponimo_Stddev_Samp_Fields = {
  __typename?: '_tipologia_posizionamento_toponimo_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type _Tipologia_Posizionamento_Toponimo_Sum_Fields = {
  __typename?: '_tipologia_posizionamento_toponimo_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "_tipologia_posizionamento_toponimo" */
export enum _Tipologia_Posizionamento_Toponimo_Update_Column {
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
export type _Tipologia_Posizionamento_Toponimo_Var_Pop_Fields = {
  __typename?: '_tipologia_posizionamento_toponimo_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type _Tipologia_Posizionamento_Toponimo_Var_Samp_Fields = {
  __typename?: '_tipologia_posizionamento_toponimo_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type _Tipologia_Posizionamento_Toponimo_Variance_Fields = {
  __typename?: '_tipologia_posizionamento_toponimo_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "_titolo" */
export type _Titolo = {
  __typename?: '_titolo';
  created_at: Scalars['timestamptz'];
  id: Scalars['Int'];
  nome: Scalars['String'];
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "_titolo" */
export type _Titolo_Aggregate = {
  __typename?: '_titolo_aggregate';
  aggregate?: Maybe<_Titolo_Aggregate_Fields>;
  nodes: Array<_Titolo>;
};

/** aggregate fields of "_titolo" */
export type _Titolo_Aggregate_Fields = {
  __typename?: '_titolo_aggregate_fields';
  avg?: Maybe<_Titolo_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<_Titolo_Max_Fields>;
  min?: Maybe<_Titolo_Min_Fields>;
  stddev?: Maybe<_Titolo_Stddev_Fields>;
  stddev_pop?: Maybe<_Titolo_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<_Titolo_Stddev_Samp_Fields>;
  sum?: Maybe<_Titolo_Sum_Fields>;
  var_pop?: Maybe<_Titolo_Var_Pop_Fields>;
  var_samp?: Maybe<_Titolo_Var_Samp_Fields>;
  variance?: Maybe<_Titolo_Variance_Fields>;
};


/** aggregate fields of "_titolo" */
export type _Titolo_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<_Titolo_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type _Titolo_Avg_Fields = {
  __typename?: '_titolo_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "_titolo". All fields are combined with a logical 'AND'. */
export type _Titolo_Bool_Exp = {
  _and?: Maybe<Array<_Titolo_Bool_Exp>>;
  _not?: Maybe<_Titolo_Bool_Exp>;
  _or?: Maybe<Array<_Titolo_Bool_Exp>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  nome?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "_titolo" */
export enum _Titolo_Constraint {
  /** unique or primary key constraint */
  TitoloPkey = '_titolo_pkey'
}

/** input type for incrementing numeric columns in table "_titolo" */
export type _Titolo_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "_titolo" */
export type _Titolo_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  nome?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type _Titolo_Max_Fields = {
  __typename?: '_titolo_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  nome?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type _Titolo_Min_Fields = {
  __typename?: '_titolo_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  nome?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "_titolo" */
export type _Titolo_Mutation_Response = {
  __typename?: '_titolo_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<_Titolo>;
};

/** input type for inserting object relation for remote table "_titolo" */
export type _Titolo_Obj_Rel_Insert_Input = {
  data: _Titolo_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<_Titolo_On_Conflict>;
};

/** on conflict condition type for table "_titolo" */
export type _Titolo_On_Conflict = {
  constraint: _Titolo_Constraint;
  update_columns?: Array<_Titolo_Update_Column>;
  where?: Maybe<_Titolo_Bool_Exp>;
};

/** Ordering options when selecting data from "_titolo". */
export type _Titolo_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  nome?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: _titolo */
export type _Titolo_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "_titolo" */
export enum _Titolo_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Nome = 'nome',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "_titolo" */
export type _Titolo_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  nome?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type _Titolo_Stddev_Fields = {
  __typename?: '_titolo_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type _Titolo_Stddev_Pop_Fields = {
  __typename?: '_titolo_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type _Titolo_Stddev_Samp_Fields = {
  __typename?: '_titolo_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type _Titolo_Sum_Fields = {
  __typename?: '_titolo_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "_titolo" */
export enum _Titolo_Update_Column {
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
export type _Titolo_Var_Pop_Fields = {
  __typename?: '_titolo_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type _Titolo_Var_Samp_Fields = {
  __typename?: '_titolo_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type _Titolo_Variance_Fields = {
  __typename?: '_titolo_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "allegato" */
export type Allegato = {
  __typename?: 'allegato';
  created_at: Scalars['timestamptz'];
  delete: Scalars['Boolean'];
  file: Scalars['String'];
  id: Scalars['Int'];
  intervento_id?: Maybe<Scalars['Int']>;
  intervento_straordinario_id?: Maybe<Scalars['Int']>;
  nome: Scalars['String'];
  segnalazione_id?: Maybe<Scalars['Int']>;
  tipo: Scalars['String'];
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "allegato" */
export type Allegato_Aggregate = {
  __typename?: 'allegato_aggregate';
  aggregate?: Maybe<Allegato_Aggregate_Fields>;
  nodes: Array<Allegato>;
};

/** aggregate fields of "allegato" */
export type Allegato_Aggregate_Fields = {
  __typename?: 'allegato_aggregate_fields';
  avg?: Maybe<Allegato_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Allegato_Max_Fields>;
  min?: Maybe<Allegato_Min_Fields>;
  stddev?: Maybe<Allegato_Stddev_Fields>;
  stddev_pop?: Maybe<Allegato_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Allegato_Stddev_Samp_Fields>;
  sum?: Maybe<Allegato_Sum_Fields>;
  var_pop?: Maybe<Allegato_Var_Pop_Fields>;
  var_samp?: Maybe<Allegato_Var_Samp_Fields>;
  variance?: Maybe<Allegato_Variance_Fields>;
};


/** aggregate fields of "allegato" */
export type Allegato_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Allegato_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "allegato" */
export type Allegato_Aggregate_Order_By = {
  avg?: Maybe<Allegato_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Allegato_Max_Order_By>;
  min?: Maybe<Allegato_Min_Order_By>;
  stddev?: Maybe<Allegato_Stddev_Order_By>;
  stddev_pop?: Maybe<Allegato_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Allegato_Stddev_Samp_Order_By>;
  sum?: Maybe<Allegato_Sum_Order_By>;
  var_pop?: Maybe<Allegato_Var_Pop_Order_By>;
  var_samp?: Maybe<Allegato_Var_Samp_Order_By>;
  variance?: Maybe<Allegato_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "allegato" */
export type Allegato_Arr_Rel_Insert_Input = {
  data: Array<Allegato_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Allegato_On_Conflict>;
};

/** aggregate avg on columns */
export type Allegato_Avg_Fields = {
  __typename?: 'allegato_avg_fields';
  id?: Maybe<Scalars['Float']>;
  intervento_id?: Maybe<Scalars['Float']>;
  intervento_straordinario_id?: Maybe<Scalars['Float']>;
  segnalazione_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "allegato" */
export type Allegato_Avg_Order_By = {
  id?: Maybe<Order_By>;
  intervento_id?: Maybe<Order_By>;
  intervento_straordinario_id?: Maybe<Order_By>;
  segnalazione_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "allegato". All fields are combined with a logical 'AND'. */
export type Allegato_Bool_Exp = {
  _and?: Maybe<Array<Allegato_Bool_Exp>>;
  _not?: Maybe<Allegato_Bool_Exp>;
  _or?: Maybe<Array<Allegato_Bool_Exp>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  delete?: Maybe<Boolean_Comparison_Exp>;
  file?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  intervento_id?: Maybe<Int_Comparison_Exp>;
  intervento_straordinario_id?: Maybe<Int_Comparison_Exp>;
  nome?: Maybe<String_Comparison_Exp>;
  segnalazione_id?: Maybe<Int_Comparison_Exp>;
  tipo?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "allegato" */
export enum Allegato_Constraint {
  /** unique or primary key constraint */
  AllegatoPkey = 'allegato_pkey'
}

/** input type for incrementing numeric columns in table "allegato" */
export type Allegato_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  intervento_id?: Maybe<Scalars['Int']>;
  intervento_straordinario_id?: Maybe<Scalars['Int']>;
  segnalazione_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "allegato" */
export type Allegato_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  delete?: Maybe<Scalars['Boolean']>;
  file?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  intervento_id?: Maybe<Scalars['Int']>;
  intervento_straordinario_id?: Maybe<Scalars['Int']>;
  nome?: Maybe<Scalars['String']>;
  segnalazione_id?: Maybe<Scalars['Int']>;
  tipo?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Allegato_Max_Fields = {
  __typename?: 'allegato_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  file?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  intervento_id?: Maybe<Scalars['Int']>;
  intervento_straordinario_id?: Maybe<Scalars['Int']>;
  nome?: Maybe<Scalars['String']>;
  segnalazione_id?: Maybe<Scalars['Int']>;
  tipo?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "allegato" */
export type Allegato_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  file?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  intervento_id?: Maybe<Order_By>;
  intervento_straordinario_id?: Maybe<Order_By>;
  nome?: Maybe<Order_By>;
  segnalazione_id?: Maybe<Order_By>;
  tipo?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Allegato_Min_Fields = {
  __typename?: 'allegato_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  file?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  intervento_id?: Maybe<Scalars['Int']>;
  intervento_straordinario_id?: Maybe<Scalars['Int']>;
  nome?: Maybe<Scalars['String']>;
  segnalazione_id?: Maybe<Scalars['Int']>;
  tipo?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "allegato" */
export type Allegato_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  file?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  intervento_id?: Maybe<Order_By>;
  intervento_straordinario_id?: Maybe<Order_By>;
  nome?: Maybe<Order_By>;
  segnalazione_id?: Maybe<Order_By>;
  tipo?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "allegato" */
export type Allegato_Mutation_Response = {
  __typename?: 'allegato_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Allegato>;
};

/** input type for inserting object relation for remote table "allegato" */
export type Allegato_Obj_Rel_Insert_Input = {
  data: Allegato_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Allegato_On_Conflict>;
};

/** on conflict condition type for table "allegato" */
export type Allegato_On_Conflict = {
  constraint: Allegato_Constraint;
  update_columns?: Array<Allegato_Update_Column>;
  where?: Maybe<Allegato_Bool_Exp>;
};

/** Ordering options when selecting data from "allegato". */
export type Allegato_Order_By = {
  created_at?: Maybe<Order_By>;
  delete?: Maybe<Order_By>;
  file?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  intervento_id?: Maybe<Order_By>;
  intervento_straordinario_id?: Maybe<Order_By>;
  nome?: Maybe<Order_By>;
  segnalazione_id?: Maybe<Order_By>;
  tipo?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: allegato */
export type Allegato_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "allegato" */
export enum Allegato_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Delete = 'delete',
  /** column name */
  File = 'file',
  /** column name */
  Id = 'id',
  /** column name */
  InterventoId = 'intervento_id',
  /** column name */
  InterventoStraordinarioId = 'intervento_straordinario_id',
  /** column name */
  Nome = 'nome',
  /** column name */
  SegnalazioneId = 'segnalazione_id',
  /** column name */
  Tipo = 'tipo',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "allegato" */
export type Allegato_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  delete?: Maybe<Scalars['Boolean']>;
  file?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  intervento_id?: Maybe<Scalars['Int']>;
  intervento_straordinario_id?: Maybe<Scalars['Int']>;
  nome?: Maybe<Scalars['String']>;
  segnalazione_id?: Maybe<Scalars['Int']>;
  tipo?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Allegato_Stddev_Fields = {
  __typename?: 'allegato_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  intervento_id?: Maybe<Scalars['Float']>;
  intervento_straordinario_id?: Maybe<Scalars['Float']>;
  segnalazione_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "allegato" */
export type Allegato_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  intervento_id?: Maybe<Order_By>;
  intervento_straordinario_id?: Maybe<Order_By>;
  segnalazione_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Allegato_Stddev_Pop_Fields = {
  __typename?: 'allegato_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  intervento_id?: Maybe<Scalars['Float']>;
  intervento_straordinario_id?: Maybe<Scalars['Float']>;
  segnalazione_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "allegato" */
export type Allegato_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  intervento_id?: Maybe<Order_By>;
  intervento_straordinario_id?: Maybe<Order_By>;
  segnalazione_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Allegato_Stddev_Samp_Fields = {
  __typename?: 'allegato_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  intervento_id?: Maybe<Scalars['Float']>;
  intervento_straordinario_id?: Maybe<Scalars['Float']>;
  segnalazione_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "allegato" */
export type Allegato_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  intervento_id?: Maybe<Order_By>;
  intervento_straordinario_id?: Maybe<Order_By>;
  segnalazione_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Allegato_Sum_Fields = {
  __typename?: 'allegato_sum_fields';
  id?: Maybe<Scalars['Int']>;
  intervento_id?: Maybe<Scalars['Int']>;
  intervento_straordinario_id?: Maybe<Scalars['Int']>;
  segnalazione_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "allegato" */
export type Allegato_Sum_Order_By = {
  id?: Maybe<Order_By>;
  intervento_id?: Maybe<Order_By>;
  intervento_straordinario_id?: Maybe<Order_By>;
  segnalazione_id?: Maybe<Order_By>;
};

/** update columns of table "allegato" */
export enum Allegato_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Delete = 'delete',
  /** column name */
  File = 'file',
  /** column name */
  Id = 'id',
  /** column name */
  InterventoId = 'intervento_id',
  /** column name */
  InterventoStraordinarioId = 'intervento_straordinario_id',
  /** column name */
  Nome = 'nome',
  /** column name */
  SegnalazioneId = 'segnalazione_id',
  /** column name */
  Tipo = 'tipo',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Allegato_Var_Pop_Fields = {
  __typename?: 'allegato_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  intervento_id?: Maybe<Scalars['Float']>;
  intervento_straordinario_id?: Maybe<Scalars['Float']>;
  segnalazione_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "allegato" */
export type Allegato_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  intervento_id?: Maybe<Order_By>;
  intervento_straordinario_id?: Maybe<Order_By>;
  segnalazione_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Allegato_Var_Samp_Fields = {
  __typename?: 'allegato_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  intervento_id?: Maybe<Scalars['Float']>;
  intervento_straordinario_id?: Maybe<Scalars['Float']>;
  segnalazione_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "allegato" */
export type Allegato_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  intervento_id?: Maybe<Order_By>;
  intervento_straordinario_id?: Maybe<Order_By>;
  segnalazione_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Allegato_Variance_Fields = {
  __typename?: 'allegato_variance_fields';
  id?: Maybe<Scalars['Float']>;
  intervento_id?: Maybe<Scalars['Float']>;
  intervento_straordinario_id?: Maybe<Scalars['Float']>;
  segnalazione_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "allegato" */
export type Allegato_Variance_Order_By = {
  id?: Maybe<Order_By>;
  intervento_id?: Maybe<Order_By>;
  intervento_straordinario_id?: Maybe<Order_By>;
  segnalazione_id?: Maybe<Order_By>;
};

/** columns and relationships of "assegnazione_quartiere" */
export type Assegnazione_Quartiere = {
  __typename?: 'assegnazione_quartiere';
  fine_validita?: Maybe<Scalars['timestamptz']>;
  id: Scalars['Int'];
  inizio_validita: Scalars['timestamptz'];
  /** An object relationship */
  municipalita: Municipalita;
  municipalita_id: Scalars['Int'];
  /** An object relationship */
  quartiere: Quartiere;
  quartiere_id: Scalars['Int'];
};

/** aggregated selection of "assegnazione_quartiere" */
export type Assegnazione_Quartiere_Aggregate = {
  __typename?: 'assegnazione_quartiere_aggregate';
  aggregate?: Maybe<Assegnazione_Quartiere_Aggregate_Fields>;
  nodes: Array<Assegnazione_Quartiere>;
};

/** aggregate fields of "assegnazione_quartiere" */
export type Assegnazione_Quartiere_Aggregate_Fields = {
  __typename?: 'assegnazione_quartiere_aggregate_fields';
  avg?: Maybe<Assegnazione_Quartiere_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Assegnazione_Quartiere_Max_Fields>;
  min?: Maybe<Assegnazione_Quartiere_Min_Fields>;
  stddev?: Maybe<Assegnazione_Quartiere_Stddev_Fields>;
  stddev_pop?: Maybe<Assegnazione_Quartiere_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Assegnazione_Quartiere_Stddev_Samp_Fields>;
  sum?: Maybe<Assegnazione_Quartiere_Sum_Fields>;
  var_pop?: Maybe<Assegnazione_Quartiere_Var_Pop_Fields>;
  var_samp?: Maybe<Assegnazione_Quartiere_Var_Samp_Fields>;
  variance?: Maybe<Assegnazione_Quartiere_Variance_Fields>;
};


/** aggregate fields of "assegnazione_quartiere" */
export type Assegnazione_Quartiere_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Assegnazione_Quartiere_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "assegnazione_quartiere" */
export type Assegnazione_Quartiere_Aggregate_Order_By = {
  avg?: Maybe<Assegnazione_Quartiere_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Assegnazione_Quartiere_Max_Order_By>;
  min?: Maybe<Assegnazione_Quartiere_Min_Order_By>;
  stddev?: Maybe<Assegnazione_Quartiere_Stddev_Order_By>;
  stddev_pop?: Maybe<Assegnazione_Quartiere_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Assegnazione_Quartiere_Stddev_Samp_Order_By>;
  sum?: Maybe<Assegnazione_Quartiere_Sum_Order_By>;
  var_pop?: Maybe<Assegnazione_Quartiere_Var_Pop_Order_By>;
  var_samp?: Maybe<Assegnazione_Quartiere_Var_Samp_Order_By>;
  variance?: Maybe<Assegnazione_Quartiere_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "assegnazione_quartiere" */
export type Assegnazione_Quartiere_Arr_Rel_Insert_Input = {
  data: Array<Assegnazione_Quartiere_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Assegnazione_Quartiere_On_Conflict>;
};

/** aggregate avg on columns */
export type Assegnazione_Quartiere_Avg_Fields = {
  __typename?: 'assegnazione_quartiere_avg_fields';
  id?: Maybe<Scalars['Float']>;
  municipalita_id?: Maybe<Scalars['Float']>;
  quartiere_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "assegnazione_quartiere" */
export type Assegnazione_Quartiere_Avg_Order_By = {
  id?: Maybe<Order_By>;
  municipalita_id?: Maybe<Order_By>;
  quartiere_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "assegnazione_quartiere". All fields are combined with a logical 'AND'. */
export type Assegnazione_Quartiere_Bool_Exp = {
  _and?: Maybe<Array<Assegnazione_Quartiere_Bool_Exp>>;
  _not?: Maybe<Assegnazione_Quartiere_Bool_Exp>;
  _or?: Maybe<Array<Assegnazione_Quartiere_Bool_Exp>>;
  fine_validita?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  inizio_validita?: Maybe<Timestamptz_Comparison_Exp>;
  municipalita?: Maybe<Municipalita_Bool_Exp>;
  municipalita_id?: Maybe<Int_Comparison_Exp>;
  quartiere?: Maybe<Quartiere_Bool_Exp>;
  quartiere_id?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "assegnazione_quartiere" */
export enum Assegnazione_Quartiere_Constraint {
  /** unique or primary key constraint */
  AssegnazioneQuartierePkey = 'assegnazione_quartiere_pkey'
}

/** input type for incrementing numeric columns in table "assegnazione_quartiere" */
export type Assegnazione_Quartiere_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  municipalita_id?: Maybe<Scalars['Int']>;
  quartiere_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "assegnazione_quartiere" */
export type Assegnazione_Quartiere_Insert_Input = {
  fine_validita?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  inizio_validita?: Maybe<Scalars['timestamptz']>;
  municipalita?: Maybe<Municipalita_Obj_Rel_Insert_Input>;
  municipalita_id?: Maybe<Scalars['Int']>;
  quartiere?: Maybe<Quartiere_Obj_Rel_Insert_Input>;
  quartiere_id?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Assegnazione_Quartiere_Max_Fields = {
  __typename?: 'assegnazione_quartiere_max_fields';
  fine_validita?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  inizio_validita?: Maybe<Scalars['timestamptz']>;
  municipalita_id?: Maybe<Scalars['Int']>;
  quartiere_id?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "assegnazione_quartiere" */
export type Assegnazione_Quartiere_Max_Order_By = {
  fine_validita?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  inizio_validita?: Maybe<Order_By>;
  municipalita_id?: Maybe<Order_By>;
  quartiere_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Assegnazione_Quartiere_Min_Fields = {
  __typename?: 'assegnazione_quartiere_min_fields';
  fine_validita?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  inizio_validita?: Maybe<Scalars['timestamptz']>;
  municipalita_id?: Maybe<Scalars['Int']>;
  quartiere_id?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "assegnazione_quartiere" */
export type Assegnazione_Quartiere_Min_Order_By = {
  fine_validita?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  inizio_validita?: Maybe<Order_By>;
  municipalita_id?: Maybe<Order_By>;
  quartiere_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "assegnazione_quartiere" */
export type Assegnazione_Quartiere_Mutation_Response = {
  __typename?: 'assegnazione_quartiere_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Assegnazione_Quartiere>;
};

/** on conflict condition type for table "assegnazione_quartiere" */
export type Assegnazione_Quartiere_On_Conflict = {
  constraint: Assegnazione_Quartiere_Constraint;
  update_columns?: Array<Assegnazione_Quartiere_Update_Column>;
  where?: Maybe<Assegnazione_Quartiere_Bool_Exp>;
};

/** Ordering options when selecting data from "assegnazione_quartiere". */
export type Assegnazione_Quartiere_Order_By = {
  fine_validita?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  inizio_validita?: Maybe<Order_By>;
  municipalita?: Maybe<Municipalita_Order_By>;
  municipalita_id?: Maybe<Order_By>;
  quartiere?: Maybe<Quartiere_Order_By>;
  quartiere_id?: Maybe<Order_By>;
};

/** primary key columns input for table: assegnazione_quartiere */
export type Assegnazione_Quartiere_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "assegnazione_quartiere" */
export enum Assegnazione_Quartiere_Select_Column {
  /** column name */
  FineValidita = 'fine_validita',
  /** column name */
  Id = 'id',
  /** column name */
  InizioValidita = 'inizio_validita',
  /** column name */
  MunicipalitaId = 'municipalita_id',
  /** column name */
  QuartiereId = 'quartiere_id'
}

/** input type for updating data in table "assegnazione_quartiere" */
export type Assegnazione_Quartiere_Set_Input = {
  fine_validita?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  inizio_validita?: Maybe<Scalars['timestamptz']>;
  municipalita_id?: Maybe<Scalars['Int']>;
  quartiere_id?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Assegnazione_Quartiere_Stddev_Fields = {
  __typename?: 'assegnazione_quartiere_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  municipalita_id?: Maybe<Scalars['Float']>;
  quartiere_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "assegnazione_quartiere" */
export type Assegnazione_Quartiere_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  municipalita_id?: Maybe<Order_By>;
  quartiere_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Assegnazione_Quartiere_Stddev_Pop_Fields = {
  __typename?: 'assegnazione_quartiere_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  municipalita_id?: Maybe<Scalars['Float']>;
  quartiere_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "assegnazione_quartiere" */
export type Assegnazione_Quartiere_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  municipalita_id?: Maybe<Order_By>;
  quartiere_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Assegnazione_Quartiere_Stddev_Samp_Fields = {
  __typename?: 'assegnazione_quartiere_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  municipalita_id?: Maybe<Scalars['Float']>;
  quartiere_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "assegnazione_quartiere" */
export type Assegnazione_Quartiere_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  municipalita_id?: Maybe<Order_By>;
  quartiere_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Assegnazione_Quartiere_Sum_Fields = {
  __typename?: 'assegnazione_quartiere_sum_fields';
  id?: Maybe<Scalars['Int']>;
  municipalita_id?: Maybe<Scalars['Int']>;
  quartiere_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "assegnazione_quartiere" */
export type Assegnazione_Quartiere_Sum_Order_By = {
  id?: Maybe<Order_By>;
  municipalita_id?: Maybe<Order_By>;
  quartiere_id?: Maybe<Order_By>;
};

/** update columns of table "assegnazione_quartiere" */
export enum Assegnazione_Quartiere_Update_Column {
  /** column name */
  FineValidita = 'fine_validita',
  /** column name */
  Id = 'id',
  /** column name */
  InizioValidita = 'inizio_validita',
  /** column name */
  MunicipalitaId = 'municipalita_id',
  /** column name */
  QuartiereId = 'quartiere_id'
}

/** aggregate var_pop on columns */
export type Assegnazione_Quartiere_Var_Pop_Fields = {
  __typename?: 'assegnazione_quartiere_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  municipalita_id?: Maybe<Scalars['Float']>;
  quartiere_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "assegnazione_quartiere" */
export type Assegnazione_Quartiere_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  municipalita_id?: Maybe<Order_By>;
  quartiere_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Assegnazione_Quartiere_Var_Samp_Fields = {
  __typename?: 'assegnazione_quartiere_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  municipalita_id?: Maybe<Scalars['Float']>;
  quartiere_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "assegnazione_quartiere" */
export type Assegnazione_Quartiere_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  municipalita_id?: Maybe<Order_By>;
  quartiere_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Assegnazione_Quartiere_Variance_Fields = {
  __typename?: 'assegnazione_quartiere_variance_fields';
  id?: Maybe<Scalars['Float']>;
  municipalita_id?: Maybe<Scalars['Float']>;
  quartiere_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "assegnazione_quartiere" */
export type Assegnazione_Quartiere_Variance_Order_By = {
  id?: Maybe<Order_By>;
  municipalita_id?: Maybe<Order_By>;
  quartiere_id?: Maybe<Order_By>;
};

/** columns and relationships of "assegnazione_squadra" */
export type Assegnazione_Squadra = {
  __typename?: 'assegnazione_squadra';
  caposquadra: Scalars['Boolean'];
  delete?: Maybe<Scalars['Boolean']>;
  fine_validita?: Maybe<Scalars['timestamptz']>;
  id: Scalars['Int'];
  inizio_validita: Scalars['timestamptz'];
  /** An object relationship */
  membro: Membro;
  membro_id: Scalars['Int'];
  /** An object relationship */
  squadra: Squadra;
  squadra_id: Scalars['Int'];
};

/** aggregated selection of "assegnazione_squadra" */
export type Assegnazione_Squadra_Aggregate = {
  __typename?: 'assegnazione_squadra_aggregate';
  aggregate?: Maybe<Assegnazione_Squadra_Aggregate_Fields>;
  nodes: Array<Assegnazione_Squadra>;
};

/** aggregate fields of "assegnazione_squadra" */
export type Assegnazione_Squadra_Aggregate_Fields = {
  __typename?: 'assegnazione_squadra_aggregate_fields';
  avg?: Maybe<Assegnazione_Squadra_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Assegnazione_Squadra_Max_Fields>;
  min?: Maybe<Assegnazione_Squadra_Min_Fields>;
  stddev?: Maybe<Assegnazione_Squadra_Stddev_Fields>;
  stddev_pop?: Maybe<Assegnazione_Squadra_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Assegnazione_Squadra_Stddev_Samp_Fields>;
  sum?: Maybe<Assegnazione_Squadra_Sum_Fields>;
  var_pop?: Maybe<Assegnazione_Squadra_Var_Pop_Fields>;
  var_samp?: Maybe<Assegnazione_Squadra_Var_Samp_Fields>;
  variance?: Maybe<Assegnazione_Squadra_Variance_Fields>;
};


/** aggregate fields of "assegnazione_squadra" */
export type Assegnazione_Squadra_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Assegnazione_Squadra_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "assegnazione_squadra" */
export type Assegnazione_Squadra_Aggregate_Order_By = {
  avg?: Maybe<Assegnazione_Squadra_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Assegnazione_Squadra_Max_Order_By>;
  min?: Maybe<Assegnazione_Squadra_Min_Order_By>;
  stddev?: Maybe<Assegnazione_Squadra_Stddev_Order_By>;
  stddev_pop?: Maybe<Assegnazione_Squadra_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Assegnazione_Squadra_Stddev_Samp_Order_By>;
  sum?: Maybe<Assegnazione_Squadra_Sum_Order_By>;
  var_pop?: Maybe<Assegnazione_Squadra_Var_Pop_Order_By>;
  var_samp?: Maybe<Assegnazione_Squadra_Var_Samp_Order_By>;
  variance?: Maybe<Assegnazione_Squadra_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "assegnazione_squadra" */
export type Assegnazione_Squadra_Arr_Rel_Insert_Input = {
  data: Array<Assegnazione_Squadra_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Assegnazione_Squadra_On_Conflict>;
};

/** aggregate avg on columns */
export type Assegnazione_Squadra_Avg_Fields = {
  __typename?: 'assegnazione_squadra_avg_fields';
  id?: Maybe<Scalars['Float']>;
  membro_id?: Maybe<Scalars['Float']>;
  squadra_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "assegnazione_squadra" */
export type Assegnazione_Squadra_Avg_Order_By = {
  id?: Maybe<Order_By>;
  membro_id?: Maybe<Order_By>;
  squadra_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "assegnazione_squadra". All fields are combined with a logical 'AND'. */
export type Assegnazione_Squadra_Bool_Exp = {
  _and?: Maybe<Array<Assegnazione_Squadra_Bool_Exp>>;
  _not?: Maybe<Assegnazione_Squadra_Bool_Exp>;
  _or?: Maybe<Array<Assegnazione_Squadra_Bool_Exp>>;
  caposquadra?: Maybe<Boolean_Comparison_Exp>;
  delete?: Maybe<Boolean_Comparison_Exp>;
  fine_validita?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  inizio_validita?: Maybe<Timestamptz_Comparison_Exp>;
  membro?: Maybe<Membro_Bool_Exp>;
  membro_id?: Maybe<Int_Comparison_Exp>;
  squadra?: Maybe<Squadra_Bool_Exp>;
  squadra_id?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "assegnazione_squadra" */
export enum Assegnazione_Squadra_Constraint {
  /** unique or primary key constraint */
  AssegnazioneSquadraPkey = 'assegnazione_squadra_pkey'
}

/** input type for incrementing numeric columns in table "assegnazione_squadra" */
export type Assegnazione_Squadra_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  membro_id?: Maybe<Scalars['Int']>;
  squadra_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "assegnazione_squadra" */
export type Assegnazione_Squadra_Insert_Input = {
  caposquadra?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  fine_validita?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  inizio_validita?: Maybe<Scalars['timestamptz']>;
  membro?: Maybe<Membro_Obj_Rel_Insert_Input>;
  membro_id?: Maybe<Scalars['Int']>;
  squadra?: Maybe<Squadra_Obj_Rel_Insert_Input>;
  squadra_id?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Assegnazione_Squadra_Max_Fields = {
  __typename?: 'assegnazione_squadra_max_fields';
  fine_validita?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  inizio_validita?: Maybe<Scalars['timestamptz']>;
  membro_id?: Maybe<Scalars['Int']>;
  squadra_id?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "assegnazione_squadra" */
export type Assegnazione_Squadra_Max_Order_By = {
  fine_validita?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  inizio_validita?: Maybe<Order_By>;
  membro_id?: Maybe<Order_By>;
  squadra_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Assegnazione_Squadra_Min_Fields = {
  __typename?: 'assegnazione_squadra_min_fields';
  fine_validita?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  inizio_validita?: Maybe<Scalars['timestamptz']>;
  membro_id?: Maybe<Scalars['Int']>;
  squadra_id?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "assegnazione_squadra" */
export type Assegnazione_Squadra_Min_Order_By = {
  fine_validita?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  inizio_validita?: Maybe<Order_By>;
  membro_id?: Maybe<Order_By>;
  squadra_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "assegnazione_squadra" */
export type Assegnazione_Squadra_Mutation_Response = {
  __typename?: 'assegnazione_squadra_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Assegnazione_Squadra>;
};

/** on conflict condition type for table "assegnazione_squadra" */
export type Assegnazione_Squadra_On_Conflict = {
  constraint: Assegnazione_Squadra_Constraint;
  update_columns?: Array<Assegnazione_Squadra_Update_Column>;
  where?: Maybe<Assegnazione_Squadra_Bool_Exp>;
};

/** Ordering options when selecting data from "assegnazione_squadra". */
export type Assegnazione_Squadra_Order_By = {
  caposquadra?: Maybe<Order_By>;
  delete?: Maybe<Order_By>;
  fine_validita?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  inizio_validita?: Maybe<Order_By>;
  membro?: Maybe<Membro_Order_By>;
  membro_id?: Maybe<Order_By>;
  squadra?: Maybe<Squadra_Order_By>;
  squadra_id?: Maybe<Order_By>;
};

/** primary key columns input for table: assegnazione_squadra */
export type Assegnazione_Squadra_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "assegnazione_squadra" */
export enum Assegnazione_Squadra_Select_Column {
  /** column name */
  Caposquadra = 'caposquadra',
  /** column name */
  Delete = 'delete',
  /** column name */
  FineValidita = 'fine_validita',
  /** column name */
  Id = 'id',
  /** column name */
  InizioValidita = 'inizio_validita',
  /** column name */
  MembroId = 'membro_id',
  /** column name */
  SquadraId = 'squadra_id'
}

/** input type for updating data in table "assegnazione_squadra" */
export type Assegnazione_Squadra_Set_Input = {
  caposquadra?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  fine_validita?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  inizio_validita?: Maybe<Scalars['timestamptz']>;
  membro_id?: Maybe<Scalars['Int']>;
  squadra_id?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Assegnazione_Squadra_Stddev_Fields = {
  __typename?: 'assegnazione_squadra_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  membro_id?: Maybe<Scalars['Float']>;
  squadra_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "assegnazione_squadra" */
export type Assegnazione_Squadra_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  membro_id?: Maybe<Order_By>;
  squadra_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Assegnazione_Squadra_Stddev_Pop_Fields = {
  __typename?: 'assegnazione_squadra_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  membro_id?: Maybe<Scalars['Float']>;
  squadra_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "assegnazione_squadra" */
export type Assegnazione_Squadra_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  membro_id?: Maybe<Order_By>;
  squadra_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Assegnazione_Squadra_Stddev_Samp_Fields = {
  __typename?: 'assegnazione_squadra_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  membro_id?: Maybe<Scalars['Float']>;
  squadra_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "assegnazione_squadra" */
export type Assegnazione_Squadra_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  membro_id?: Maybe<Order_By>;
  squadra_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Assegnazione_Squadra_Sum_Fields = {
  __typename?: 'assegnazione_squadra_sum_fields';
  id?: Maybe<Scalars['Int']>;
  membro_id?: Maybe<Scalars['Int']>;
  squadra_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "assegnazione_squadra" */
export type Assegnazione_Squadra_Sum_Order_By = {
  id?: Maybe<Order_By>;
  membro_id?: Maybe<Order_By>;
  squadra_id?: Maybe<Order_By>;
};

/** update columns of table "assegnazione_squadra" */
export enum Assegnazione_Squadra_Update_Column {
  /** column name */
  Caposquadra = 'caposquadra',
  /** column name */
  Delete = 'delete',
  /** column name */
  FineValidita = 'fine_validita',
  /** column name */
  Id = 'id',
  /** column name */
  InizioValidita = 'inizio_validita',
  /** column name */
  MembroId = 'membro_id',
  /** column name */
  SquadraId = 'squadra_id'
}

/** aggregate var_pop on columns */
export type Assegnazione_Squadra_Var_Pop_Fields = {
  __typename?: 'assegnazione_squadra_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  membro_id?: Maybe<Scalars['Float']>;
  squadra_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "assegnazione_squadra" */
export type Assegnazione_Squadra_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  membro_id?: Maybe<Order_By>;
  squadra_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Assegnazione_Squadra_Var_Samp_Fields = {
  __typename?: 'assegnazione_squadra_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  membro_id?: Maybe<Scalars['Float']>;
  squadra_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "assegnazione_squadra" */
export type Assegnazione_Squadra_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  membro_id?: Maybe<Order_By>;
  squadra_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Assegnazione_Squadra_Variance_Fields = {
  __typename?: 'assegnazione_squadra_variance_fields';
  id?: Maybe<Scalars['Float']>;
  membro_id?: Maybe<Scalars['Float']>;
  squadra_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "assegnazione_squadra" */
export type Assegnazione_Squadra_Variance_Order_By = {
  id?: Maybe<Order_By>;
  membro_id?: Maybe<Order_By>;
  squadra_id?: Maybe<Order_By>;
};

/** columns and relationships of "assegnazione_toponimo" */
export type Assegnazione_Toponimo = {
  __typename?: 'assegnazione_toponimo';
  fine_validita?: Maybe<Scalars['timestamptz']>;
  id: Scalars['Int'];
  inizio_validita: Scalars['timestamptz'];
  /** An object relationship */
  municipalita: Municipalita;
  municipalita_id: Scalars['Int'];
  /** An object relationship */
  quartiere: Quartiere;
  quartiere_id: Scalars['Int'];
  /** An object relationship */
  toponimo: Toponimo;
  toponimo_id: Scalars['Int'];
};

/** aggregated selection of "assegnazione_toponimo" */
export type Assegnazione_Toponimo_Aggregate = {
  __typename?: 'assegnazione_toponimo_aggregate';
  aggregate?: Maybe<Assegnazione_Toponimo_Aggregate_Fields>;
  nodes: Array<Assegnazione_Toponimo>;
};

/** aggregate fields of "assegnazione_toponimo" */
export type Assegnazione_Toponimo_Aggregate_Fields = {
  __typename?: 'assegnazione_toponimo_aggregate_fields';
  avg?: Maybe<Assegnazione_Toponimo_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Assegnazione_Toponimo_Max_Fields>;
  min?: Maybe<Assegnazione_Toponimo_Min_Fields>;
  stddev?: Maybe<Assegnazione_Toponimo_Stddev_Fields>;
  stddev_pop?: Maybe<Assegnazione_Toponimo_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Assegnazione_Toponimo_Stddev_Samp_Fields>;
  sum?: Maybe<Assegnazione_Toponimo_Sum_Fields>;
  var_pop?: Maybe<Assegnazione_Toponimo_Var_Pop_Fields>;
  var_samp?: Maybe<Assegnazione_Toponimo_Var_Samp_Fields>;
  variance?: Maybe<Assegnazione_Toponimo_Variance_Fields>;
};


/** aggregate fields of "assegnazione_toponimo" */
export type Assegnazione_Toponimo_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Assegnazione_Toponimo_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "assegnazione_toponimo" */
export type Assegnazione_Toponimo_Aggregate_Order_By = {
  avg?: Maybe<Assegnazione_Toponimo_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Assegnazione_Toponimo_Max_Order_By>;
  min?: Maybe<Assegnazione_Toponimo_Min_Order_By>;
  stddev?: Maybe<Assegnazione_Toponimo_Stddev_Order_By>;
  stddev_pop?: Maybe<Assegnazione_Toponimo_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Assegnazione_Toponimo_Stddev_Samp_Order_By>;
  sum?: Maybe<Assegnazione_Toponimo_Sum_Order_By>;
  var_pop?: Maybe<Assegnazione_Toponimo_Var_Pop_Order_By>;
  var_samp?: Maybe<Assegnazione_Toponimo_Var_Samp_Order_By>;
  variance?: Maybe<Assegnazione_Toponimo_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "assegnazione_toponimo" */
export type Assegnazione_Toponimo_Arr_Rel_Insert_Input = {
  data: Array<Assegnazione_Toponimo_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Assegnazione_Toponimo_On_Conflict>;
};

/** aggregate avg on columns */
export type Assegnazione_Toponimo_Avg_Fields = {
  __typename?: 'assegnazione_toponimo_avg_fields';
  id?: Maybe<Scalars['Float']>;
  municipalita_id?: Maybe<Scalars['Float']>;
  quartiere_id?: Maybe<Scalars['Float']>;
  toponimo_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "assegnazione_toponimo" */
export type Assegnazione_Toponimo_Avg_Order_By = {
  id?: Maybe<Order_By>;
  municipalita_id?: Maybe<Order_By>;
  quartiere_id?: Maybe<Order_By>;
  toponimo_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "assegnazione_toponimo". All fields are combined with a logical 'AND'. */
export type Assegnazione_Toponimo_Bool_Exp = {
  _and?: Maybe<Array<Assegnazione_Toponimo_Bool_Exp>>;
  _not?: Maybe<Assegnazione_Toponimo_Bool_Exp>;
  _or?: Maybe<Array<Assegnazione_Toponimo_Bool_Exp>>;
  fine_validita?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  inizio_validita?: Maybe<Timestamptz_Comparison_Exp>;
  municipalita?: Maybe<Municipalita_Bool_Exp>;
  municipalita_id?: Maybe<Int_Comparison_Exp>;
  quartiere?: Maybe<Quartiere_Bool_Exp>;
  quartiere_id?: Maybe<Int_Comparison_Exp>;
  toponimo?: Maybe<Toponimo_Bool_Exp>;
  toponimo_id?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "assegnazione_toponimo" */
export enum Assegnazione_Toponimo_Constraint {
  /** unique or primary key constraint */
  AssegnazioneToponimoPkey = 'assegnazione_toponimo_pkey'
}

/** input type for incrementing numeric columns in table "assegnazione_toponimo" */
export type Assegnazione_Toponimo_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  municipalita_id?: Maybe<Scalars['Int']>;
  quartiere_id?: Maybe<Scalars['Int']>;
  toponimo_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "assegnazione_toponimo" */
export type Assegnazione_Toponimo_Insert_Input = {
  fine_validita?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  inizio_validita?: Maybe<Scalars['timestamptz']>;
  municipalita?: Maybe<Municipalita_Obj_Rel_Insert_Input>;
  municipalita_id?: Maybe<Scalars['Int']>;
  quartiere?: Maybe<Quartiere_Obj_Rel_Insert_Input>;
  quartiere_id?: Maybe<Scalars['Int']>;
  toponimo?: Maybe<Toponimo_Obj_Rel_Insert_Input>;
  toponimo_id?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Assegnazione_Toponimo_Max_Fields = {
  __typename?: 'assegnazione_toponimo_max_fields';
  fine_validita?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  inizio_validita?: Maybe<Scalars['timestamptz']>;
  municipalita_id?: Maybe<Scalars['Int']>;
  quartiere_id?: Maybe<Scalars['Int']>;
  toponimo_id?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "assegnazione_toponimo" */
export type Assegnazione_Toponimo_Max_Order_By = {
  fine_validita?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  inizio_validita?: Maybe<Order_By>;
  municipalita_id?: Maybe<Order_By>;
  quartiere_id?: Maybe<Order_By>;
  toponimo_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Assegnazione_Toponimo_Min_Fields = {
  __typename?: 'assegnazione_toponimo_min_fields';
  fine_validita?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  inizio_validita?: Maybe<Scalars['timestamptz']>;
  municipalita_id?: Maybe<Scalars['Int']>;
  quartiere_id?: Maybe<Scalars['Int']>;
  toponimo_id?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "assegnazione_toponimo" */
export type Assegnazione_Toponimo_Min_Order_By = {
  fine_validita?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  inizio_validita?: Maybe<Order_By>;
  municipalita_id?: Maybe<Order_By>;
  quartiere_id?: Maybe<Order_By>;
  toponimo_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "assegnazione_toponimo" */
export type Assegnazione_Toponimo_Mutation_Response = {
  __typename?: 'assegnazione_toponimo_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Assegnazione_Toponimo>;
};

/** on conflict condition type for table "assegnazione_toponimo" */
export type Assegnazione_Toponimo_On_Conflict = {
  constraint: Assegnazione_Toponimo_Constraint;
  update_columns?: Array<Assegnazione_Toponimo_Update_Column>;
  where?: Maybe<Assegnazione_Toponimo_Bool_Exp>;
};

/** Ordering options when selecting data from "assegnazione_toponimo". */
export type Assegnazione_Toponimo_Order_By = {
  fine_validita?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  inizio_validita?: Maybe<Order_By>;
  municipalita?: Maybe<Municipalita_Order_By>;
  municipalita_id?: Maybe<Order_By>;
  quartiere?: Maybe<Quartiere_Order_By>;
  quartiere_id?: Maybe<Order_By>;
  toponimo?: Maybe<Toponimo_Order_By>;
  toponimo_id?: Maybe<Order_By>;
};

/** primary key columns input for table: assegnazione_toponimo */
export type Assegnazione_Toponimo_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "assegnazione_toponimo" */
export enum Assegnazione_Toponimo_Select_Column {
  /** column name */
  FineValidita = 'fine_validita',
  /** column name */
  Id = 'id',
  /** column name */
  InizioValidita = 'inizio_validita',
  /** column name */
  MunicipalitaId = 'municipalita_id',
  /** column name */
  QuartiereId = 'quartiere_id',
  /** column name */
  ToponimoId = 'toponimo_id'
}

/** input type for updating data in table "assegnazione_toponimo" */
export type Assegnazione_Toponimo_Set_Input = {
  fine_validita?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  inizio_validita?: Maybe<Scalars['timestamptz']>;
  municipalita_id?: Maybe<Scalars['Int']>;
  quartiere_id?: Maybe<Scalars['Int']>;
  toponimo_id?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Assegnazione_Toponimo_Stddev_Fields = {
  __typename?: 'assegnazione_toponimo_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  municipalita_id?: Maybe<Scalars['Float']>;
  quartiere_id?: Maybe<Scalars['Float']>;
  toponimo_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "assegnazione_toponimo" */
export type Assegnazione_Toponimo_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  municipalita_id?: Maybe<Order_By>;
  quartiere_id?: Maybe<Order_By>;
  toponimo_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Assegnazione_Toponimo_Stddev_Pop_Fields = {
  __typename?: 'assegnazione_toponimo_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  municipalita_id?: Maybe<Scalars['Float']>;
  quartiere_id?: Maybe<Scalars['Float']>;
  toponimo_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "assegnazione_toponimo" */
export type Assegnazione_Toponimo_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  municipalita_id?: Maybe<Order_By>;
  quartiere_id?: Maybe<Order_By>;
  toponimo_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Assegnazione_Toponimo_Stddev_Samp_Fields = {
  __typename?: 'assegnazione_toponimo_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  municipalita_id?: Maybe<Scalars['Float']>;
  quartiere_id?: Maybe<Scalars['Float']>;
  toponimo_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "assegnazione_toponimo" */
export type Assegnazione_Toponimo_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  municipalita_id?: Maybe<Order_By>;
  quartiere_id?: Maybe<Order_By>;
  toponimo_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Assegnazione_Toponimo_Sum_Fields = {
  __typename?: 'assegnazione_toponimo_sum_fields';
  id?: Maybe<Scalars['Int']>;
  municipalita_id?: Maybe<Scalars['Int']>;
  quartiere_id?: Maybe<Scalars['Int']>;
  toponimo_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "assegnazione_toponimo" */
export type Assegnazione_Toponimo_Sum_Order_By = {
  id?: Maybe<Order_By>;
  municipalita_id?: Maybe<Order_By>;
  quartiere_id?: Maybe<Order_By>;
  toponimo_id?: Maybe<Order_By>;
};

/** update columns of table "assegnazione_toponimo" */
export enum Assegnazione_Toponimo_Update_Column {
  /** column name */
  FineValidita = 'fine_validita',
  /** column name */
  Id = 'id',
  /** column name */
  InizioValidita = 'inizio_validita',
  /** column name */
  MunicipalitaId = 'municipalita_id',
  /** column name */
  QuartiereId = 'quartiere_id',
  /** column name */
  ToponimoId = 'toponimo_id'
}

/** aggregate var_pop on columns */
export type Assegnazione_Toponimo_Var_Pop_Fields = {
  __typename?: 'assegnazione_toponimo_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  municipalita_id?: Maybe<Scalars['Float']>;
  quartiere_id?: Maybe<Scalars['Float']>;
  toponimo_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "assegnazione_toponimo" */
export type Assegnazione_Toponimo_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  municipalita_id?: Maybe<Order_By>;
  quartiere_id?: Maybe<Order_By>;
  toponimo_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Assegnazione_Toponimo_Var_Samp_Fields = {
  __typename?: 'assegnazione_toponimo_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  municipalita_id?: Maybe<Scalars['Float']>;
  quartiere_id?: Maybe<Scalars['Float']>;
  toponimo_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "assegnazione_toponimo" */
export type Assegnazione_Toponimo_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  municipalita_id?: Maybe<Order_By>;
  quartiere_id?: Maybe<Order_By>;
  toponimo_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Assegnazione_Toponimo_Variance_Fields = {
  __typename?: 'assegnazione_toponimo_variance_fields';
  id?: Maybe<Scalars['Float']>;
  municipalita_id?: Maybe<Scalars['Float']>;
  quartiere_id?: Maybe<Scalars['Float']>;
  toponimo_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "assegnazione_toponimo" */
export type Assegnazione_Toponimo_Variance_Order_By = {
  id?: Maybe<Order_By>;
  municipalita_id?: Maybe<Order_By>;
  quartiere_id?: Maybe<Order_By>;
  toponimo_id?: Maybe<Order_By>;
};

/** columns and relationships of "attrezzature_impiegate" */
export type Attrezzature_Impiegate = {
  __typename?: 'attrezzature_impiegate';
  created_at: Scalars['timestamptz'];
  delete?: Maybe<Scalars['Boolean']>;
  id: Scalars['Int'];
  intervento_id: Scalars['Int'];
  nome?: Maybe<Scalars['String']>;
  quantita?: Maybe<Scalars['float8']>;
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "attrezzature_impiegate" */
export type Attrezzature_Impiegate_Aggregate = {
  __typename?: 'attrezzature_impiegate_aggregate';
  aggregate?: Maybe<Attrezzature_Impiegate_Aggregate_Fields>;
  nodes: Array<Attrezzature_Impiegate>;
};

/** aggregate fields of "attrezzature_impiegate" */
export type Attrezzature_Impiegate_Aggregate_Fields = {
  __typename?: 'attrezzature_impiegate_aggregate_fields';
  avg?: Maybe<Attrezzature_Impiegate_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Attrezzature_Impiegate_Max_Fields>;
  min?: Maybe<Attrezzature_Impiegate_Min_Fields>;
  stddev?: Maybe<Attrezzature_Impiegate_Stddev_Fields>;
  stddev_pop?: Maybe<Attrezzature_Impiegate_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Attrezzature_Impiegate_Stddev_Samp_Fields>;
  sum?: Maybe<Attrezzature_Impiegate_Sum_Fields>;
  var_pop?: Maybe<Attrezzature_Impiegate_Var_Pop_Fields>;
  var_samp?: Maybe<Attrezzature_Impiegate_Var_Samp_Fields>;
  variance?: Maybe<Attrezzature_Impiegate_Variance_Fields>;
};


/** aggregate fields of "attrezzature_impiegate" */
export type Attrezzature_Impiegate_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Attrezzature_Impiegate_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "attrezzature_impiegate" */
export type Attrezzature_Impiegate_Aggregate_Order_By = {
  avg?: Maybe<Attrezzature_Impiegate_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Attrezzature_Impiegate_Max_Order_By>;
  min?: Maybe<Attrezzature_Impiegate_Min_Order_By>;
  stddev?: Maybe<Attrezzature_Impiegate_Stddev_Order_By>;
  stddev_pop?: Maybe<Attrezzature_Impiegate_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Attrezzature_Impiegate_Stddev_Samp_Order_By>;
  sum?: Maybe<Attrezzature_Impiegate_Sum_Order_By>;
  var_pop?: Maybe<Attrezzature_Impiegate_Var_Pop_Order_By>;
  var_samp?: Maybe<Attrezzature_Impiegate_Var_Samp_Order_By>;
  variance?: Maybe<Attrezzature_Impiegate_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "attrezzature_impiegate" */
export type Attrezzature_Impiegate_Arr_Rel_Insert_Input = {
  data: Array<Attrezzature_Impiegate_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Attrezzature_Impiegate_On_Conflict>;
};

/** aggregate avg on columns */
export type Attrezzature_Impiegate_Avg_Fields = {
  __typename?: 'attrezzature_impiegate_avg_fields';
  id?: Maybe<Scalars['Float']>;
  intervento_id?: Maybe<Scalars['Float']>;
  quantita?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "attrezzature_impiegate" */
export type Attrezzature_Impiegate_Avg_Order_By = {
  id?: Maybe<Order_By>;
  intervento_id?: Maybe<Order_By>;
  quantita?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "attrezzature_impiegate". All fields are combined with a logical 'AND'. */
export type Attrezzature_Impiegate_Bool_Exp = {
  _and?: Maybe<Array<Attrezzature_Impiegate_Bool_Exp>>;
  _not?: Maybe<Attrezzature_Impiegate_Bool_Exp>;
  _or?: Maybe<Array<Attrezzature_Impiegate_Bool_Exp>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  delete?: Maybe<Boolean_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  intervento_id?: Maybe<Int_Comparison_Exp>;
  nome?: Maybe<String_Comparison_Exp>;
  quantita?: Maybe<Float8_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "attrezzature_impiegate" */
export enum Attrezzature_Impiegate_Constraint {
  /** unique or primary key constraint */
  AttrezzatureImpiegatePkey = 'attrezzature_impiegate_pkey'
}

/** input type for incrementing numeric columns in table "attrezzature_impiegate" */
export type Attrezzature_Impiegate_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  intervento_id?: Maybe<Scalars['Int']>;
  quantita?: Maybe<Scalars['float8']>;
};

/** input type for inserting data into table "attrezzature_impiegate" */
export type Attrezzature_Impiegate_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  delete?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['Int']>;
  intervento_id?: Maybe<Scalars['Int']>;
  nome?: Maybe<Scalars['String']>;
  quantita?: Maybe<Scalars['float8']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Attrezzature_Impiegate_Max_Fields = {
  __typename?: 'attrezzature_impiegate_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  intervento_id?: Maybe<Scalars['Int']>;
  nome?: Maybe<Scalars['String']>;
  quantita?: Maybe<Scalars['float8']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "attrezzature_impiegate" */
export type Attrezzature_Impiegate_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  intervento_id?: Maybe<Order_By>;
  nome?: Maybe<Order_By>;
  quantita?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Attrezzature_Impiegate_Min_Fields = {
  __typename?: 'attrezzature_impiegate_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  intervento_id?: Maybe<Scalars['Int']>;
  nome?: Maybe<Scalars['String']>;
  quantita?: Maybe<Scalars['float8']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "attrezzature_impiegate" */
export type Attrezzature_Impiegate_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  intervento_id?: Maybe<Order_By>;
  nome?: Maybe<Order_By>;
  quantita?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "attrezzature_impiegate" */
export type Attrezzature_Impiegate_Mutation_Response = {
  __typename?: 'attrezzature_impiegate_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Attrezzature_Impiegate>;
};

/** on conflict condition type for table "attrezzature_impiegate" */
export type Attrezzature_Impiegate_On_Conflict = {
  constraint: Attrezzature_Impiegate_Constraint;
  update_columns?: Array<Attrezzature_Impiegate_Update_Column>;
  where?: Maybe<Attrezzature_Impiegate_Bool_Exp>;
};

/** Ordering options when selecting data from "attrezzature_impiegate". */
export type Attrezzature_Impiegate_Order_By = {
  created_at?: Maybe<Order_By>;
  delete?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  intervento_id?: Maybe<Order_By>;
  nome?: Maybe<Order_By>;
  quantita?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: attrezzature_impiegate */
export type Attrezzature_Impiegate_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "attrezzature_impiegate" */
export enum Attrezzature_Impiegate_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Delete = 'delete',
  /** column name */
  Id = 'id',
  /** column name */
  InterventoId = 'intervento_id',
  /** column name */
  Nome = 'nome',
  /** column name */
  Quantita = 'quantita',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "attrezzature_impiegate" */
export type Attrezzature_Impiegate_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  delete?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['Int']>;
  intervento_id?: Maybe<Scalars['Int']>;
  nome?: Maybe<Scalars['String']>;
  quantita?: Maybe<Scalars['float8']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Attrezzature_Impiegate_Stddev_Fields = {
  __typename?: 'attrezzature_impiegate_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  intervento_id?: Maybe<Scalars['Float']>;
  quantita?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "attrezzature_impiegate" */
export type Attrezzature_Impiegate_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  intervento_id?: Maybe<Order_By>;
  quantita?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Attrezzature_Impiegate_Stddev_Pop_Fields = {
  __typename?: 'attrezzature_impiegate_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  intervento_id?: Maybe<Scalars['Float']>;
  quantita?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "attrezzature_impiegate" */
export type Attrezzature_Impiegate_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  intervento_id?: Maybe<Order_By>;
  quantita?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Attrezzature_Impiegate_Stddev_Samp_Fields = {
  __typename?: 'attrezzature_impiegate_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  intervento_id?: Maybe<Scalars['Float']>;
  quantita?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "attrezzature_impiegate" */
export type Attrezzature_Impiegate_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  intervento_id?: Maybe<Order_By>;
  quantita?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Attrezzature_Impiegate_Sum_Fields = {
  __typename?: 'attrezzature_impiegate_sum_fields';
  id?: Maybe<Scalars['Int']>;
  intervento_id?: Maybe<Scalars['Int']>;
  quantita?: Maybe<Scalars['float8']>;
};

/** order by sum() on columns of table "attrezzature_impiegate" */
export type Attrezzature_Impiegate_Sum_Order_By = {
  id?: Maybe<Order_By>;
  intervento_id?: Maybe<Order_By>;
  quantita?: Maybe<Order_By>;
};

/** update columns of table "attrezzature_impiegate" */
export enum Attrezzature_Impiegate_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Delete = 'delete',
  /** column name */
  Id = 'id',
  /** column name */
  InterventoId = 'intervento_id',
  /** column name */
  Nome = 'nome',
  /** column name */
  Quantita = 'quantita',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Attrezzature_Impiegate_Var_Pop_Fields = {
  __typename?: 'attrezzature_impiegate_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  intervento_id?: Maybe<Scalars['Float']>;
  quantita?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "attrezzature_impiegate" */
export type Attrezzature_Impiegate_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  intervento_id?: Maybe<Order_By>;
  quantita?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Attrezzature_Impiegate_Var_Samp_Fields = {
  __typename?: 'attrezzature_impiegate_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  intervento_id?: Maybe<Scalars['Float']>;
  quantita?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "attrezzature_impiegate" */
export type Attrezzature_Impiegate_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  intervento_id?: Maybe<Order_By>;
  quantita?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Attrezzature_Impiegate_Variance_Fields = {
  __typename?: 'attrezzature_impiegate_variance_fields';
  id?: Maybe<Scalars['Float']>;
  intervento_id?: Maybe<Scalars['Float']>;
  quantita?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "attrezzature_impiegate" */
export type Attrezzature_Impiegate_Variance_Order_By = {
  id?: Maybe<Order_By>;
  intervento_id?: Maybe<Order_By>;
  quantita?: Maybe<Order_By>;
};

/** Boolean expression to compare columns of type "bigint". All fields are combined with logical 'AND'. */
export type Bigint_Comparison_Exp = {
  _eq?: Maybe<Scalars['bigint']>;
  _gt?: Maybe<Scalars['bigint']>;
  _gte?: Maybe<Scalars['bigint']>;
  _in?: Maybe<Array<Scalars['bigint']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['bigint']>;
  _lte?: Maybe<Scalars['bigint']>;
  _neq?: Maybe<Scalars['bigint']>;
  _nin?: Maybe<Array<Scalars['bigint']>>;
};

/** columns and relationships of "civico" */
export type Civico = {
  __typename?: 'civico';
  civico1?: Maybe<Scalars['String']>;
  cs1?: Maybe<Scalars['String']>;
  fk_color?: Maybe<Scalars['String']>;
  fk_t_code?: Maybe<Scalars['String']>;
  fk_text?: Maybe<Scalars['String']>;
  geom?: Maybe<Scalars['geometry']>;
  id: Scalars['bigint'];
  mix1?: Maybe<Scalars['String']>;
  nomestrada?: Maybe<Scalars['String']>;
  sezione1?: Maybe<Scalars['String']>;
};

/** aggregated selection of "civico" */
export type Civico_Aggregate = {
  __typename?: 'civico_aggregate';
  aggregate?: Maybe<Civico_Aggregate_Fields>;
  nodes: Array<Civico>;
};

/** aggregate fields of "civico" */
export type Civico_Aggregate_Fields = {
  __typename?: 'civico_aggregate_fields';
  avg?: Maybe<Civico_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Civico_Max_Fields>;
  min?: Maybe<Civico_Min_Fields>;
  stddev?: Maybe<Civico_Stddev_Fields>;
  stddev_pop?: Maybe<Civico_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Civico_Stddev_Samp_Fields>;
  sum?: Maybe<Civico_Sum_Fields>;
  var_pop?: Maybe<Civico_Var_Pop_Fields>;
  var_samp?: Maybe<Civico_Var_Samp_Fields>;
  variance?: Maybe<Civico_Variance_Fields>;
};


/** aggregate fields of "civico" */
export type Civico_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Civico_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Civico_Avg_Fields = {
  __typename?: 'civico_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "civico". All fields are combined with a logical 'AND'. */
export type Civico_Bool_Exp = {
  _and?: Maybe<Array<Civico_Bool_Exp>>;
  _not?: Maybe<Civico_Bool_Exp>;
  _or?: Maybe<Array<Civico_Bool_Exp>>;
  civico1?: Maybe<String_Comparison_Exp>;
  cs1?: Maybe<String_Comparison_Exp>;
  fk_color?: Maybe<String_Comparison_Exp>;
  fk_t_code?: Maybe<String_Comparison_Exp>;
  fk_text?: Maybe<String_Comparison_Exp>;
  geom?: Maybe<Geometry_Comparison_Exp>;
  id?: Maybe<Bigint_Comparison_Exp>;
  mix1?: Maybe<String_Comparison_Exp>;
  nomestrada?: Maybe<String_Comparison_Exp>;
  sezione1?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "civico" */
export enum Civico_Constraint {
  /** unique or primary key constraint */
  CivicoPkey = 'civico_pkey'
}

/** input type for incrementing numeric columns in table "civico" */
export type Civico_Inc_Input = {
  id?: Maybe<Scalars['bigint']>;
};

/** input type for inserting data into table "civico" */
export type Civico_Insert_Input = {
  civico1?: Maybe<Scalars['String']>;
  cs1?: Maybe<Scalars['String']>;
  fk_color?: Maybe<Scalars['String']>;
  fk_t_code?: Maybe<Scalars['String']>;
  fk_text?: Maybe<Scalars['String']>;
  geom?: Maybe<Scalars['geometry']>;
  id?: Maybe<Scalars['bigint']>;
  mix1?: Maybe<Scalars['String']>;
  nomestrada?: Maybe<Scalars['String']>;
  sezione1?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Civico_Max_Fields = {
  __typename?: 'civico_max_fields';
  civico1?: Maybe<Scalars['String']>;
  cs1?: Maybe<Scalars['String']>;
  fk_color?: Maybe<Scalars['String']>;
  fk_t_code?: Maybe<Scalars['String']>;
  fk_text?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['bigint']>;
  mix1?: Maybe<Scalars['String']>;
  nomestrada?: Maybe<Scalars['String']>;
  sezione1?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Civico_Min_Fields = {
  __typename?: 'civico_min_fields';
  civico1?: Maybe<Scalars['String']>;
  cs1?: Maybe<Scalars['String']>;
  fk_color?: Maybe<Scalars['String']>;
  fk_t_code?: Maybe<Scalars['String']>;
  fk_text?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['bigint']>;
  mix1?: Maybe<Scalars['String']>;
  nomestrada?: Maybe<Scalars['String']>;
  sezione1?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "civico" */
export type Civico_Mutation_Response = {
  __typename?: 'civico_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Civico>;
};

/** on conflict condition type for table "civico" */
export type Civico_On_Conflict = {
  constraint: Civico_Constraint;
  update_columns?: Array<Civico_Update_Column>;
  where?: Maybe<Civico_Bool_Exp>;
};

/** Ordering options when selecting data from "civico". */
export type Civico_Order_By = {
  civico1?: Maybe<Order_By>;
  cs1?: Maybe<Order_By>;
  fk_color?: Maybe<Order_By>;
  fk_t_code?: Maybe<Order_By>;
  fk_text?: Maybe<Order_By>;
  geom?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  mix1?: Maybe<Order_By>;
  nomestrada?: Maybe<Order_By>;
  sezione1?: Maybe<Order_By>;
};

/** primary key columns input for table: civico */
export type Civico_Pk_Columns_Input = {
  id: Scalars['bigint'];
};

/** select columns of table "civico" */
export enum Civico_Select_Column {
  /** column name */
  Civico1 = 'civico1',
  /** column name */
  Cs1 = 'cs1',
  /** column name */
  FkColor = 'fk_color',
  /** column name */
  FkTCode = 'fk_t_code',
  /** column name */
  FkText = 'fk_text',
  /** column name */
  Geom = 'geom',
  /** column name */
  Id = 'id',
  /** column name */
  Mix1 = 'mix1',
  /** column name */
  Nomestrada = 'nomestrada',
  /** column name */
  Sezione1 = 'sezione1'
}

/** input type for updating data in table "civico" */
export type Civico_Set_Input = {
  civico1?: Maybe<Scalars['String']>;
  cs1?: Maybe<Scalars['String']>;
  fk_color?: Maybe<Scalars['String']>;
  fk_t_code?: Maybe<Scalars['String']>;
  fk_text?: Maybe<Scalars['String']>;
  geom?: Maybe<Scalars['geometry']>;
  id?: Maybe<Scalars['bigint']>;
  mix1?: Maybe<Scalars['String']>;
  nomestrada?: Maybe<Scalars['String']>;
  sezione1?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Civico_Stddev_Fields = {
  __typename?: 'civico_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Civico_Stddev_Pop_Fields = {
  __typename?: 'civico_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Civico_Stddev_Samp_Fields = {
  __typename?: 'civico_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Civico_Sum_Fields = {
  __typename?: 'civico_sum_fields';
  id?: Maybe<Scalars['bigint']>;
};

/** update columns of table "civico" */
export enum Civico_Update_Column {
  /** column name */
  Civico1 = 'civico1',
  /** column name */
  Cs1 = 'cs1',
  /** column name */
  FkColor = 'fk_color',
  /** column name */
  FkTCode = 'fk_t_code',
  /** column name */
  FkText = 'fk_text',
  /** column name */
  Geom = 'geom',
  /** column name */
  Id = 'id',
  /** column name */
  Mix1 = 'mix1',
  /** column name */
  Nomestrada = 'nomestrada',
  /** column name */
  Sezione1 = 'sezione1'
}

/** aggregate var_pop on columns */
export type Civico_Var_Pop_Fields = {
  __typename?: 'civico_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Civico_Var_Samp_Fields = {
  __typename?: 'civico_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Civico_Variance_Fields = {
  __typename?: 'civico_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "connessione_grafo" */
export type Connessione_Grafo = {
  __typename?: 'connessione_grafo';
  fk_color?: Maybe<Scalars['String']>;
  fk_t_code?: Maybe<Scalars['String']>;
  fk_text?: Maybe<Scalars['String']>;
  geom?: Maybe<Scalars['geometry']>;
  id: Scalars['bigint'];
  x?: Maybe<Scalars['numeric']>;
  y?: Maybe<Scalars['numeric']>;
};

/** aggregated selection of "connessione_grafo" */
export type Connessione_Grafo_Aggregate = {
  __typename?: 'connessione_grafo_aggregate';
  aggregate?: Maybe<Connessione_Grafo_Aggregate_Fields>;
  nodes: Array<Connessione_Grafo>;
};

/** aggregate fields of "connessione_grafo" */
export type Connessione_Grafo_Aggregate_Fields = {
  __typename?: 'connessione_grafo_aggregate_fields';
  avg?: Maybe<Connessione_Grafo_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Connessione_Grafo_Max_Fields>;
  min?: Maybe<Connessione_Grafo_Min_Fields>;
  stddev?: Maybe<Connessione_Grafo_Stddev_Fields>;
  stddev_pop?: Maybe<Connessione_Grafo_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Connessione_Grafo_Stddev_Samp_Fields>;
  sum?: Maybe<Connessione_Grafo_Sum_Fields>;
  var_pop?: Maybe<Connessione_Grafo_Var_Pop_Fields>;
  var_samp?: Maybe<Connessione_Grafo_Var_Samp_Fields>;
  variance?: Maybe<Connessione_Grafo_Variance_Fields>;
};


/** aggregate fields of "connessione_grafo" */
export type Connessione_Grafo_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Connessione_Grafo_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Connessione_Grafo_Avg_Fields = {
  __typename?: 'connessione_grafo_avg_fields';
  id?: Maybe<Scalars['Float']>;
  x?: Maybe<Scalars['Float']>;
  y?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "connessione_grafo". All fields are combined with a logical 'AND'. */
export type Connessione_Grafo_Bool_Exp = {
  _and?: Maybe<Array<Connessione_Grafo_Bool_Exp>>;
  _not?: Maybe<Connessione_Grafo_Bool_Exp>;
  _or?: Maybe<Array<Connessione_Grafo_Bool_Exp>>;
  fk_color?: Maybe<String_Comparison_Exp>;
  fk_t_code?: Maybe<String_Comparison_Exp>;
  fk_text?: Maybe<String_Comparison_Exp>;
  geom?: Maybe<Geometry_Comparison_Exp>;
  id?: Maybe<Bigint_Comparison_Exp>;
  x?: Maybe<Numeric_Comparison_Exp>;
  y?: Maybe<Numeric_Comparison_Exp>;
};

/** unique or primary key constraints on table "connessione_grafo" */
export enum Connessione_Grafo_Constraint {
  /** unique or primary key constraint */
  ConnessioneGrafoPkey = 'connessione_grafo_pkey'
}

/** input type for incrementing numeric columns in table "connessione_grafo" */
export type Connessione_Grafo_Inc_Input = {
  id?: Maybe<Scalars['bigint']>;
  x?: Maybe<Scalars['numeric']>;
  y?: Maybe<Scalars['numeric']>;
};

/** input type for inserting data into table "connessione_grafo" */
export type Connessione_Grafo_Insert_Input = {
  fk_color?: Maybe<Scalars['String']>;
  fk_t_code?: Maybe<Scalars['String']>;
  fk_text?: Maybe<Scalars['String']>;
  geom?: Maybe<Scalars['geometry']>;
  id?: Maybe<Scalars['bigint']>;
  x?: Maybe<Scalars['numeric']>;
  y?: Maybe<Scalars['numeric']>;
};

/** aggregate max on columns */
export type Connessione_Grafo_Max_Fields = {
  __typename?: 'connessione_grafo_max_fields';
  fk_color?: Maybe<Scalars['String']>;
  fk_t_code?: Maybe<Scalars['String']>;
  fk_text?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['bigint']>;
  x?: Maybe<Scalars['numeric']>;
  y?: Maybe<Scalars['numeric']>;
};

/** aggregate min on columns */
export type Connessione_Grafo_Min_Fields = {
  __typename?: 'connessione_grafo_min_fields';
  fk_color?: Maybe<Scalars['String']>;
  fk_t_code?: Maybe<Scalars['String']>;
  fk_text?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['bigint']>;
  x?: Maybe<Scalars['numeric']>;
  y?: Maybe<Scalars['numeric']>;
};

/** response of any mutation on the table "connessione_grafo" */
export type Connessione_Grafo_Mutation_Response = {
  __typename?: 'connessione_grafo_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Connessione_Grafo>;
};

/** on conflict condition type for table "connessione_grafo" */
export type Connessione_Grafo_On_Conflict = {
  constraint: Connessione_Grafo_Constraint;
  update_columns?: Array<Connessione_Grafo_Update_Column>;
  where?: Maybe<Connessione_Grafo_Bool_Exp>;
};

/** Ordering options when selecting data from "connessione_grafo". */
export type Connessione_Grafo_Order_By = {
  fk_color?: Maybe<Order_By>;
  fk_t_code?: Maybe<Order_By>;
  fk_text?: Maybe<Order_By>;
  geom?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  x?: Maybe<Order_By>;
  y?: Maybe<Order_By>;
};

/** primary key columns input for table: connessione_grafo */
export type Connessione_Grafo_Pk_Columns_Input = {
  id: Scalars['bigint'];
};

/** select columns of table "connessione_grafo" */
export enum Connessione_Grafo_Select_Column {
  /** column name */
  FkColor = 'fk_color',
  /** column name */
  FkTCode = 'fk_t_code',
  /** column name */
  FkText = 'fk_text',
  /** column name */
  Geom = 'geom',
  /** column name */
  Id = 'id',
  /** column name */
  X = 'x',
  /** column name */
  Y = 'y'
}

/** input type for updating data in table "connessione_grafo" */
export type Connessione_Grafo_Set_Input = {
  fk_color?: Maybe<Scalars['String']>;
  fk_t_code?: Maybe<Scalars['String']>;
  fk_text?: Maybe<Scalars['String']>;
  geom?: Maybe<Scalars['geometry']>;
  id?: Maybe<Scalars['bigint']>;
  x?: Maybe<Scalars['numeric']>;
  y?: Maybe<Scalars['numeric']>;
};

/** aggregate stddev on columns */
export type Connessione_Grafo_Stddev_Fields = {
  __typename?: 'connessione_grafo_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  x?: Maybe<Scalars['Float']>;
  y?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Connessione_Grafo_Stddev_Pop_Fields = {
  __typename?: 'connessione_grafo_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  x?: Maybe<Scalars['Float']>;
  y?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Connessione_Grafo_Stddev_Samp_Fields = {
  __typename?: 'connessione_grafo_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  x?: Maybe<Scalars['Float']>;
  y?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Connessione_Grafo_Sum_Fields = {
  __typename?: 'connessione_grafo_sum_fields';
  id?: Maybe<Scalars['bigint']>;
  x?: Maybe<Scalars['numeric']>;
  y?: Maybe<Scalars['numeric']>;
};

/** update columns of table "connessione_grafo" */
export enum Connessione_Grafo_Update_Column {
  /** column name */
  FkColor = 'fk_color',
  /** column name */
  FkTCode = 'fk_t_code',
  /** column name */
  FkText = 'fk_text',
  /** column name */
  Geom = 'geom',
  /** column name */
  Id = 'id',
  /** column name */
  X = 'x',
  /** column name */
  Y = 'y'
}

/** aggregate var_pop on columns */
export type Connessione_Grafo_Var_Pop_Fields = {
  __typename?: 'connessione_grafo_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  x?: Maybe<Scalars['Float']>;
  y?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Connessione_Grafo_Var_Samp_Fields = {
  __typename?: 'connessione_grafo_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  x?: Maybe<Scalars['Float']>;
  y?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Connessione_Grafo_Variance_Fields = {
  __typename?: 'connessione_grafo_variance_fields';
  id?: Maybe<Scalars['Float']>;
  x?: Maybe<Scalars['Float']>;
  y?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "diario" */
export type Diario = {
  __typename?: 'diario';
  /** An object relationship */
  allegato?: Maybe<Allegato>;
  allegato_id?: Maybe<Scalars['Int']>;
  created_at: Scalars['timestamptz'];
  id: Scalars['Int'];
  messaggio?: Maybe<Scalars['String']>;
  /** An object relationship */
  segnalazione: Segnalazione;
  segnalazione_id: Scalars['Int'];
  utente: Scalars['jsonb'];
};


/** columns and relationships of "diario" */
export type DiarioUtenteArgs = {
  path?: Maybe<Scalars['String']>;
};

/** aggregated selection of "diario" */
export type Diario_Aggregate = {
  __typename?: 'diario_aggregate';
  aggregate?: Maybe<Diario_Aggregate_Fields>;
  nodes: Array<Diario>;
};

/** aggregate fields of "diario" */
export type Diario_Aggregate_Fields = {
  __typename?: 'diario_aggregate_fields';
  avg?: Maybe<Diario_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Diario_Max_Fields>;
  min?: Maybe<Diario_Min_Fields>;
  stddev?: Maybe<Diario_Stddev_Fields>;
  stddev_pop?: Maybe<Diario_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Diario_Stddev_Samp_Fields>;
  sum?: Maybe<Diario_Sum_Fields>;
  var_pop?: Maybe<Diario_Var_Pop_Fields>;
  var_samp?: Maybe<Diario_Var_Samp_Fields>;
  variance?: Maybe<Diario_Variance_Fields>;
};


/** aggregate fields of "diario" */
export type Diario_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Diario_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "diario" */
export type Diario_Aggregate_Order_By = {
  avg?: Maybe<Diario_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Diario_Max_Order_By>;
  min?: Maybe<Diario_Min_Order_By>;
  stddev?: Maybe<Diario_Stddev_Order_By>;
  stddev_pop?: Maybe<Diario_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Diario_Stddev_Samp_Order_By>;
  sum?: Maybe<Diario_Sum_Order_By>;
  var_pop?: Maybe<Diario_Var_Pop_Order_By>;
  var_samp?: Maybe<Diario_Var_Samp_Order_By>;
  variance?: Maybe<Diario_Variance_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Diario_Append_Input = {
  utente?: Maybe<Scalars['jsonb']>;
};

/** input type for inserting array relation for remote table "diario" */
export type Diario_Arr_Rel_Insert_Input = {
  data: Array<Diario_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Diario_On_Conflict>;
};

/** aggregate avg on columns */
export type Diario_Avg_Fields = {
  __typename?: 'diario_avg_fields';
  allegato_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  segnalazione_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "diario" */
export type Diario_Avg_Order_By = {
  allegato_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  segnalazione_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "diario". All fields are combined with a logical 'AND'. */
export type Diario_Bool_Exp = {
  _and?: Maybe<Array<Diario_Bool_Exp>>;
  _not?: Maybe<Diario_Bool_Exp>;
  _or?: Maybe<Array<Diario_Bool_Exp>>;
  allegato?: Maybe<Allegato_Bool_Exp>;
  allegato_id?: Maybe<Int_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  messaggio?: Maybe<String_Comparison_Exp>;
  segnalazione?: Maybe<Segnalazione_Bool_Exp>;
  segnalazione_id?: Maybe<Int_Comparison_Exp>;
  utente?: Maybe<Jsonb_Comparison_Exp>;
};

/** unique or primary key constraints on table "diario" */
export enum Diario_Constraint {
  /** unique or primary key constraint */
  DiarioPkey = 'diario_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Diario_Delete_At_Path_Input = {
  utente?: Maybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Diario_Delete_Elem_Input = {
  utente?: Maybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Diario_Delete_Key_Input = {
  utente?: Maybe<Scalars['String']>;
};

/** input type for incrementing numeric columns in table "diario" */
export type Diario_Inc_Input = {
  allegato_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  segnalazione_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "diario" */
export type Diario_Insert_Input = {
  allegato?: Maybe<Allegato_Obj_Rel_Insert_Input>;
  allegato_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  messaggio?: Maybe<Scalars['String']>;
  segnalazione?: Maybe<Segnalazione_Obj_Rel_Insert_Input>;
  segnalazione_id?: Maybe<Scalars['Int']>;
  utente?: Maybe<Scalars['jsonb']>;
};

/** aggregate max on columns */
export type Diario_Max_Fields = {
  __typename?: 'diario_max_fields';
  allegato_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  messaggio?: Maybe<Scalars['String']>;
  segnalazione_id?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "diario" */
export type Diario_Max_Order_By = {
  allegato_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  messaggio?: Maybe<Order_By>;
  segnalazione_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Diario_Min_Fields = {
  __typename?: 'diario_min_fields';
  allegato_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  messaggio?: Maybe<Scalars['String']>;
  segnalazione_id?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "diario" */
export type Diario_Min_Order_By = {
  allegato_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  messaggio?: Maybe<Order_By>;
  segnalazione_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "diario" */
export type Diario_Mutation_Response = {
  __typename?: 'diario_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Diario>;
};

/** on conflict condition type for table "diario" */
export type Diario_On_Conflict = {
  constraint: Diario_Constraint;
  update_columns?: Array<Diario_Update_Column>;
  where?: Maybe<Diario_Bool_Exp>;
};

/** Ordering options when selecting data from "diario". */
export type Diario_Order_By = {
  allegato?: Maybe<Allegato_Order_By>;
  allegato_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  messaggio?: Maybe<Order_By>;
  segnalazione?: Maybe<Segnalazione_Order_By>;
  segnalazione_id?: Maybe<Order_By>;
  utente?: Maybe<Order_By>;
};

/** primary key columns input for table: diario */
export type Diario_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Diario_Prepend_Input = {
  utente?: Maybe<Scalars['jsonb']>;
};

/** select columns of table "diario" */
export enum Diario_Select_Column {
  /** column name */
  AllegatoId = 'allegato_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Messaggio = 'messaggio',
  /** column name */
  SegnalazioneId = 'segnalazione_id',
  /** column name */
  Utente = 'utente'
}

/** input type for updating data in table "diario" */
export type Diario_Set_Input = {
  allegato_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  messaggio?: Maybe<Scalars['String']>;
  segnalazione_id?: Maybe<Scalars['Int']>;
  utente?: Maybe<Scalars['jsonb']>;
};

/** aggregate stddev on columns */
export type Diario_Stddev_Fields = {
  __typename?: 'diario_stddev_fields';
  allegato_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  segnalazione_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "diario" */
export type Diario_Stddev_Order_By = {
  allegato_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  segnalazione_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Diario_Stddev_Pop_Fields = {
  __typename?: 'diario_stddev_pop_fields';
  allegato_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  segnalazione_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "diario" */
export type Diario_Stddev_Pop_Order_By = {
  allegato_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  segnalazione_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Diario_Stddev_Samp_Fields = {
  __typename?: 'diario_stddev_samp_fields';
  allegato_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  segnalazione_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "diario" */
export type Diario_Stddev_Samp_Order_By = {
  allegato_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  segnalazione_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Diario_Sum_Fields = {
  __typename?: 'diario_sum_fields';
  allegato_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  segnalazione_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "diario" */
export type Diario_Sum_Order_By = {
  allegato_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  segnalazione_id?: Maybe<Order_By>;
};

/** update columns of table "diario" */
export enum Diario_Update_Column {
  /** column name */
  AllegatoId = 'allegato_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Messaggio = 'messaggio',
  /** column name */
  SegnalazioneId = 'segnalazione_id',
  /** column name */
  Utente = 'utente'
}

/** aggregate var_pop on columns */
export type Diario_Var_Pop_Fields = {
  __typename?: 'diario_var_pop_fields';
  allegato_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  segnalazione_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "diario" */
export type Diario_Var_Pop_Order_By = {
  allegato_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  segnalazione_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Diario_Var_Samp_Fields = {
  __typename?: 'diario_var_samp_fields';
  allegato_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  segnalazione_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "diario" */
export type Diario_Var_Samp_Order_By = {
  allegato_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  segnalazione_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Diario_Variance_Fields = {
  __typename?: 'diario_variance_fields';
  allegato_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  segnalazione_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "diario" */
export type Diario_Variance_Order_By = {
  allegato_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  segnalazione_id?: Maybe<Order_By>;
};

/** columns and relationships of "dissesto" */
export type Dissesto = {
  __typename?: 'dissesto';
  created_at: Scalars['timestamptz'];
  /** An object relationship */
  forma?: Maybe<_Forma_Dissesto>;
  forma_id?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
  note?: Maybe<Scalars['String']>;
  peso?: Maybe<Scalars['float8']>;
  prima_dimensione?: Maybe<Scalars['float8']>;
  profondita?: Maybe<Scalars['float8']>;
  seconda_dimensione?: Maybe<Scalars['float8']>;
  terza_dimensione?: Maybe<Scalars['float8']>;
  /** An object relationship */
  tipologia?: Maybe<_Tipologia_Dissesto>;
  tipologia_dissesto_id?: Maybe<Scalars['Int']>;
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "dissesto" */
export type Dissesto_Aggregate = {
  __typename?: 'dissesto_aggregate';
  aggregate?: Maybe<Dissesto_Aggregate_Fields>;
  nodes: Array<Dissesto>;
};

/** aggregate fields of "dissesto" */
export type Dissesto_Aggregate_Fields = {
  __typename?: 'dissesto_aggregate_fields';
  avg?: Maybe<Dissesto_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Dissesto_Max_Fields>;
  min?: Maybe<Dissesto_Min_Fields>;
  stddev?: Maybe<Dissesto_Stddev_Fields>;
  stddev_pop?: Maybe<Dissesto_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Dissesto_Stddev_Samp_Fields>;
  sum?: Maybe<Dissesto_Sum_Fields>;
  var_pop?: Maybe<Dissesto_Var_Pop_Fields>;
  var_samp?: Maybe<Dissesto_Var_Samp_Fields>;
  variance?: Maybe<Dissesto_Variance_Fields>;
};


/** aggregate fields of "dissesto" */
export type Dissesto_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Dissesto_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Dissesto_Avg_Fields = {
  __typename?: 'dissesto_avg_fields';
  forma_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  peso?: Maybe<Scalars['Float']>;
  prima_dimensione?: Maybe<Scalars['Float']>;
  profondita?: Maybe<Scalars['Float']>;
  seconda_dimensione?: Maybe<Scalars['Float']>;
  terza_dimensione?: Maybe<Scalars['Float']>;
  tipologia_dissesto_id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "dissesto". All fields are combined with a logical 'AND'. */
export type Dissesto_Bool_Exp = {
  _and?: Maybe<Array<Dissesto_Bool_Exp>>;
  _not?: Maybe<Dissesto_Bool_Exp>;
  _or?: Maybe<Array<Dissesto_Bool_Exp>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  forma?: Maybe<_Forma_Dissesto_Bool_Exp>;
  forma_id?: Maybe<Int_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  note?: Maybe<String_Comparison_Exp>;
  peso?: Maybe<Float8_Comparison_Exp>;
  prima_dimensione?: Maybe<Float8_Comparison_Exp>;
  profondita?: Maybe<Float8_Comparison_Exp>;
  seconda_dimensione?: Maybe<Float8_Comparison_Exp>;
  terza_dimensione?: Maybe<Float8_Comparison_Exp>;
  tipologia?: Maybe<_Tipologia_Dissesto_Bool_Exp>;
  tipologia_dissesto_id?: Maybe<Int_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "dissesto" */
export enum Dissesto_Constraint {
  /** unique or primary key constraint */
  DissestoPkey = 'dissesto_pkey'
}

/** input type for incrementing numeric columns in table "dissesto" */
export type Dissesto_Inc_Input = {
  forma_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  peso?: Maybe<Scalars['float8']>;
  prima_dimensione?: Maybe<Scalars['float8']>;
  profondita?: Maybe<Scalars['float8']>;
  seconda_dimensione?: Maybe<Scalars['float8']>;
  terza_dimensione?: Maybe<Scalars['float8']>;
  tipologia_dissesto_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "dissesto" */
export type Dissesto_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  forma?: Maybe<_Forma_Dissesto_Obj_Rel_Insert_Input>;
  forma_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  note?: Maybe<Scalars['String']>;
  peso?: Maybe<Scalars['float8']>;
  prima_dimensione?: Maybe<Scalars['float8']>;
  profondita?: Maybe<Scalars['float8']>;
  seconda_dimensione?: Maybe<Scalars['float8']>;
  terza_dimensione?: Maybe<Scalars['float8']>;
  tipologia?: Maybe<_Tipologia_Dissesto_Obj_Rel_Insert_Input>;
  tipologia_dissesto_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Dissesto_Max_Fields = {
  __typename?: 'dissesto_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  forma_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  note?: Maybe<Scalars['String']>;
  peso?: Maybe<Scalars['float8']>;
  prima_dimensione?: Maybe<Scalars['float8']>;
  profondita?: Maybe<Scalars['float8']>;
  seconda_dimensione?: Maybe<Scalars['float8']>;
  terza_dimensione?: Maybe<Scalars['float8']>;
  tipologia_dissesto_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Dissesto_Min_Fields = {
  __typename?: 'dissesto_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  forma_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  note?: Maybe<Scalars['String']>;
  peso?: Maybe<Scalars['float8']>;
  prima_dimensione?: Maybe<Scalars['float8']>;
  profondita?: Maybe<Scalars['float8']>;
  seconda_dimensione?: Maybe<Scalars['float8']>;
  terza_dimensione?: Maybe<Scalars['float8']>;
  tipologia_dissesto_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "dissesto" */
export type Dissesto_Mutation_Response = {
  __typename?: 'dissesto_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Dissesto>;
};

/** input type for inserting object relation for remote table "dissesto" */
export type Dissesto_Obj_Rel_Insert_Input = {
  data: Dissesto_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Dissesto_On_Conflict>;
};

/** on conflict condition type for table "dissesto" */
export type Dissesto_On_Conflict = {
  constraint: Dissesto_Constraint;
  update_columns?: Array<Dissesto_Update_Column>;
  where?: Maybe<Dissesto_Bool_Exp>;
};

/** Ordering options when selecting data from "dissesto". */
export type Dissesto_Order_By = {
  created_at?: Maybe<Order_By>;
  forma?: Maybe<_Forma_Dissesto_Order_By>;
  forma_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  note?: Maybe<Order_By>;
  peso?: Maybe<Order_By>;
  prima_dimensione?: Maybe<Order_By>;
  profondita?: Maybe<Order_By>;
  seconda_dimensione?: Maybe<Order_By>;
  terza_dimensione?: Maybe<Order_By>;
  tipologia?: Maybe<_Tipologia_Dissesto_Order_By>;
  tipologia_dissesto_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: dissesto */
export type Dissesto_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "dissesto" */
export enum Dissesto_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  FormaId = 'forma_id',
  /** column name */
  Id = 'id',
  /** column name */
  Note = 'note',
  /** column name */
  Peso = 'peso',
  /** column name */
  PrimaDimensione = 'prima_dimensione',
  /** column name */
  Profondita = 'profondita',
  /** column name */
  SecondaDimensione = 'seconda_dimensione',
  /** column name */
  TerzaDimensione = 'terza_dimensione',
  /** column name */
  TipologiaDissestoId = 'tipologia_dissesto_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "dissesto" */
export type Dissesto_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  forma_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  note?: Maybe<Scalars['String']>;
  peso?: Maybe<Scalars['float8']>;
  prima_dimensione?: Maybe<Scalars['float8']>;
  profondita?: Maybe<Scalars['float8']>;
  seconda_dimensione?: Maybe<Scalars['float8']>;
  terza_dimensione?: Maybe<Scalars['float8']>;
  tipologia_dissesto_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Dissesto_Stddev_Fields = {
  __typename?: 'dissesto_stddev_fields';
  forma_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  peso?: Maybe<Scalars['Float']>;
  prima_dimensione?: Maybe<Scalars['Float']>;
  profondita?: Maybe<Scalars['Float']>;
  seconda_dimensione?: Maybe<Scalars['Float']>;
  terza_dimensione?: Maybe<Scalars['Float']>;
  tipologia_dissesto_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Dissesto_Stddev_Pop_Fields = {
  __typename?: 'dissesto_stddev_pop_fields';
  forma_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  peso?: Maybe<Scalars['Float']>;
  prima_dimensione?: Maybe<Scalars['Float']>;
  profondita?: Maybe<Scalars['Float']>;
  seconda_dimensione?: Maybe<Scalars['Float']>;
  terza_dimensione?: Maybe<Scalars['Float']>;
  tipologia_dissesto_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Dissesto_Stddev_Samp_Fields = {
  __typename?: 'dissesto_stddev_samp_fields';
  forma_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  peso?: Maybe<Scalars['Float']>;
  prima_dimensione?: Maybe<Scalars['Float']>;
  profondita?: Maybe<Scalars['Float']>;
  seconda_dimensione?: Maybe<Scalars['Float']>;
  terza_dimensione?: Maybe<Scalars['Float']>;
  tipologia_dissesto_id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Dissesto_Sum_Fields = {
  __typename?: 'dissesto_sum_fields';
  forma_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  peso?: Maybe<Scalars['float8']>;
  prima_dimensione?: Maybe<Scalars['float8']>;
  profondita?: Maybe<Scalars['float8']>;
  seconda_dimensione?: Maybe<Scalars['float8']>;
  terza_dimensione?: Maybe<Scalars['float8']>;
  tipologia_dissesto_id?: Maybe<Scalars['Int']>;
};

/** update columns of table "dissesto" */
export enum Dissesto_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  FormaId = 'forma_id',
  /** column name */
  Id = 'id',
  /** column name */
  Note = 'note',
  /** column name */
  Peso = 'peso',
  /** column name */
  PrimaDimensione = 'prima_dimensione',
  /** column name */
  Profondita = 'profondita',
  /** column name */
  SecondaDimensione = 'seconda_dimensione',
  /** column name */
  TerzaDimensione = 'terza_dimensione',
  /** column name */
  TipologiaDissestoId = 'tipologia_dissesto_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Dissesto_Var_Pop_Fields = {
  __typename?: 'dissesto_var_pop_fields';
  forma_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  peso?: Maybe<Scalars['Float']>;
  prima_dimensione?: Maybe<Scalars['Float']>;
  profondita?: Maybe<Scalars['Float']>;
  seconda_dimensione?: Maybe<Scalars['Float']>;
  terza_dimensione?: Maybe<Scalars['Float']>;
  tipologia_dissesto_id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Dissesto_Var_Samp_Fields = {
  __typename?: 'dissesto_var_samp_fields';
  forma_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  peso?: Maybe<Scalars['Float']>;
  prima_dimensione?: Maybe<Scalars['Float']>;
  profondita?: Maybe<Scalars['Float']>;
  seconda_dimensione?: Maybe<Scalars['Float']>;
  terza_dimensione?: Maybe<Scalars['Float']>;
  tipologia_dissesto_id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Dissesto_Variance_Fields = {
  __typename?: 'dissesto_variance_fields';
  forma_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  peso?: Maybe<Scalars['Float']>;
  prima_dimensione?: Maybe<Scalars['Float']>;
  profondita?: Maybe<Scalars['Float']>;
  seconda_dimensione?: Maybe<Scalars['Float']>;
  terza_dimensione?: Maybe<Scalars['Float']>;
  tipologia_dissesto_id?: Maybe<Scalars['Float']>;
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

/** columns and relationships of "evento" */
export type Evento = {
  __typename?: 'evento';
  created_at: Scalars['timestamptz'];
  id: Scalars['Int'];
  note?: Maybe<Scalars['String']>;
  /** An object relationship */
  protocollo?: Maybe<Protocollo>;
  protocollo_id?: Maybe<Scalars['Int']>;
  /** An object relationship */
  risolutore?: Maybe<Segnalazione>;
  risoluzione_id?: Maybe<Scalars['Int']>;
  segnalazione_id: Scalars['Int'];
  /** An object relationship */
  squadra?: Maybe<Squadra>;
  squadra_id?: Maybe<Scalars['Int']>;
  stato: _Stato_Segnalazione_Enum;
};

/** aggregated selection of "evento" */
export type Evento_Aggregate = {
  __typename?: 'evento_aggregate';
  aggregate?: Maybe<Evento_Aggregate_Fields>;
  nodes: Array<Evento>;
};

/** aggregate fields of "evento" */
export type Evento_Aggregate_Fields = {
  __typename?: 'evento_aggregate_fields';
  avg?: Maybe<Evento_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Evento_Max_Fields>;
  min?: Maybe<Evento_Min_Fields>;
  stddev?: Maybe<Evento_Stddev_Fields>;
  stddev_pop?: Maybe<Evento_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Evento_Stddev_Samp_Fields>;
  sum?: Maybe<Evento_Sum_Fields>;
  var_pop?: Maybe<Evento_Var_Pop_Fields>;
  var_samp?: Maybe<Evento_Var_Samp_Fields>;
  variance?: Maybe<Evento_Variance_Fields>;
};


/** aggregate fields of "evento" */
export type Evento_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Evento_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "evento" */
export type Evento_Aggregate_Order_By = {
  avg?: Maybe<Evento_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Evento_Max_Order_By>;
  min?: Maybe<Evento_Min_Order_By>;
  stddev?: Maybe<Evento_Stddev_Order_By>;
  stddev_pop?: Maybe<Evento_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Evento_Stddev_Samp_Order_By>;
  sum?: Maybe<Evento_Sum_Order_By>;
  var_pop?: Maybe<Evento_Var_Pop_Order_By>;
  var_samp?: Maybe<Evento_Var_Samp_Order_By>;
  variance?: Maybe<Evento_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "evento" */
export type Evento_Arr_Rel_Insert_Input = {
  data: Array<Evento_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Evento_On_Conflict>;
};

/** aggregate avg on columns */
export type Evento_Avg_Fields = {
  __typename?: 'evento_avg_fields';
  id?: Maybe<Scalars['Float']>;
  protocollo_id?: Maybe<Scalars['Float']>;
  risoluzione_id?: Maybe<Scalars['Float']>;
  segnalazione_id?: Maybe<Scalars['Float']>;
  squadra_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "evento" */
export type Evento_Avg_Order_By = {
  id?: Maybe<Order_By>;
  protocollo_id?: Maybe<Order_By>;
  risoluzione_id?: Maybe<Order_By>;
  segnalazione_id?: Maybe<Order_By>;
  squadra_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "evento". All fields are combined with a logical 'AND'. */
export type Evento_Bool_Exp = {
  _and?: Maybe<Array<Evento_Bool_Exp>>;
  _not?: Maybe<Evento_Bool_Exp>;
  _or?: Maybe<Array<Evento_Bool_Exp>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  note?: Maybe<String_Comparison_Exp>;
  protocollo?: Maybe<Protocollo_Bool_Exp>;
  protocollo_id?: Maybe<Int_Comparison_Exp>;
  risolutore?: Maybe<Segnalazione_Bool_Exp>;
  risoluzione_id?: Maybe<Int_Comparison_Exp>;
  segnalazione_id?: Maybe<Int_Comparison_Exp>;
  squadra?: Maybe<Squadra_Bool_Exp>;
  squadra_id?: Maybe<Int_Comparison_Exp>;
  stato?: Maybe<_Stato_Segnalazione_Enum_Comparison_Exp>;
};

/** unique or primary key constraints on table "evento" */
export enum Evento_Constraint {
  /** unique or primary key constraint */
  EventoPkey = 'evento_pkey'
}

/** input type for incrementing numeric columns in table "evento" */
export type Evento_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  protocollo_id?: Maybe<Scalars['Int']>;
  risoluzione_id?: Maybe<Scalars['Int']>;
  segnalazione_id?: Maybe<Scalars['Int']>;
  squadra_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "evento" */
export type Evento_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  note?: Maybe<Scalars['String']>;
  protocollo?: Maybe<Protocollo_Obj_Rel_Insert_Input>;
  protocollo_id?: Maybe<Scalars['Int']>;
  risolutore?: Maybe<Segnalazione_Obj_Rel_Insert_Input>;
  risoluzione_id?: Maybe<Scalars['Int']>;
  segnalazione_id?: Maybe<Scalars['Int']>;
  squadra?: Maybe<Squadra_Obj_Rel_Insert_Input>;
  squadra_id?: Maybe<Scalars['Int']>;
  stato?: Maybe<_Stato_Segnalazione_Enum>;
};

/** aggregate max on columns */
export type Evento_Max_Fields = {
  __typename?: 'evento_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  note?: Maybe<Scalars['String']>;
  protocollo_id?: Maybe<Scalars['Int']>;
  risoluzione_id?: Maybe<Scalars['Int']>;
  segnalazione_id?: Maybe<Scalars['Int']>;
  squadra_id?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "evento" */
export type Evento_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  note?: Maybe<Order_By>;
  protocollo_id?: Maybe<Order_By>;
  risoluzione_id?: Maybe<Order_By>;
  segnalazione_id?: Maybe<Order_By>;
  squadra_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Evento_Min_Fields = {
  __typename?: 'evento_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  note?: Maybe<Scalars['String']>;
  protocollo_id?: Maybe<Scalars['Int']>;
  risoluzione_id?: Maybe<Scalars['Int']>;
  segnalazione_id?: Maybe<Scalars['Int']>;
  squadra_id?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "evento" */
export type Evento_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  note?: Maybe<Order_By>;
  protocollo_id?: Maybe<Order_By>;
  risoluzione_id?: Maybe<Order_By>;
  segnalazione_id?: Maybe<Order_By>;
  squadra_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "evento" */
export type Evento_Mutation_Response = {
  __typename?: 'evento_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Evento>;
};

/** on conflict condition type for table "evento" */
export type Evento_On_Conflict = {
  constraint: Evento_Constraint;
  update_columns?: Array<Evento_Update_Column>;
  where?: Maybe<Evento_Bool_Exp>;
};

/** Ordering options when selecting data from "evento". */
export type Evento_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  note?: Maybe<Order_By>;
  protocollo?: Maybe<Protocollo_Order_By>;
  protocollo_id?: Maybe<Order_By>;
  risolutore?: Maybe<Segnalazione_Order_By>;
  risoluzione_id?: Maybe<Order_By>;
  segnalazione_id?: Maybe<Order_By>;
  squadra?: Maybe<Squadra_Order_By>;
  squadra_id?: Maybe<Order_By>;
  stato?: Maybe<Order_By>;
};

/** primary key columns input for table: evento */
export type Evento_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "evento" */
export enum Evento_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Note = 'note',
  /** column name */
  ProtocolloId = 'protocollo_id',
  /** column name */
  RisoluzioneId = 'risoluzione_id',
  /** column name */
  SegnalazioneId = 'segnalazione_id',
  /** column name */
  SquadraId = 'squadra_id',
  /** column name */
  Stato = 'stato'
}

/** input type for updating data in table "evento" */
export type Evento_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  note?: Maybe<Scalars['String']>;
  protocollo_id?: Maybe<Scalars['Int']>;
  risoluzione_id?: Maybe<Scalars['Int']>;
  segnalazione_id?: Maybe<Scalars['Int']>;
  squadra_id?: Maybe<Scalars['Int']>;
  stato?: Maybe<_Stato_Segnalazione_Enum>;
};

/** aggregate stddev on columns */
export type Evento_Stddev_Fields = {
  __typename?: 'evento_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  protocollo_id?: Maybe<Scalars['Float']>;
  risoluzione_id?: Maybe<Scalars['Float']>;
  segnalazione_id?: Maybe<Scalars['Float']>;
  squadra_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "evento" */
export type Evento_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  protocollo_id?: Maybe<Order_By>;
  risoluzione_id?: Maybe<Order_By>;
  segnalazione_id?: Maybe<Order_By>;
  squadra_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Evento_Stddev_Pop_Fields = {
  __typename?: 'evento_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  protocollo_id?: Maybe<Scalars['Float']>;
  risoluzione_id?: Maybe<Scalars['Float']>;
  segnalazione_id?: Maybe<Scalars['Float']>;
  squadra_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "evento" */
export type Evento_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  protocollo_id?: Maybe<Order_By>;
  risoluzione_id?: Maybe<Order_By>;
  segnalazione_id?: Maybe<Order_By>;
  squadra_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Evento_Stddev_Samp_Fields = {
  __typename?: 'evento_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  protocollo_id?: Maybe<Scalars['Float']>;
  risoluzione_id?: Maybe<Scalars['Float']>;
  segnalazione_id?: Maybe<Scalars['Float']>;
  squadra_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "evento" */
export type Evento_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  protocollo_id?: Maybe<Order_By>;
  risoluzione_id?: Maybe<Order_By>;
  segnalazione_id?: Maybe<Order_By>;
  squadra_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Evento_Sum_Fields = {
  __typename?: 'evento_sum_fields';
  id?: Maybe<Scalars['Int']>;
  protocollo_id?: Maybe<Scalars['Int']>;
  risoluzione_id?: Maybe<Scalars['Int']>;
  segnalazione_id?: Maybe<Scalars['Int']>;
  squadra_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "evento" */
export type Evento_Sum_Order_By = {
  id?: Maybe<Order_By>;
  protocollo_id?: Maybe<Order_By>;
  risoluzione_id?: Maybe<Order_By>;
  segnalazione_id?: Maybe<Order_By>;
  squadra_id?: Maybe<Order_By>;
};

/** update columns of table "evento" */
export enum Evento_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Note = 'note',
  /** column name */
  ProtocolloId = 'protocollo_id',
  /** column name */
  RisoluzioneId = 'risoluzione_id',
  /** column name */
  SegnalazioneId = 'segnalazione_id',
  /** column name */
  SquadraId = 'squadra_id',
  /** column name */
  Stato = 'stato'
}

/** aggregate var_pop on columns */
export type Evento_Var_Pop_Fields = {
  __typename?: 'evento_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  protocollo_id?: Maybe<Scalars['Float']>;
  risoluzione_id?: Maybe<Scalars['Float']>;
  segnalazione_id?: Maybe<Scalars['Float']>;
  squadra_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "evento" */
export type Evento_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  protocollo_id?: Maybe<Order_By>;
  risoluzione_id?: Maybe<Order_By>;
  segnalazione_id?: Maybe<Order_By>;
  squadra_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Evento_Var_Samp_Fields = {
  __typename?: 'evento_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  protocollo_id?: Maybe<Scalars['Float']>;
  risoluzione_id?: Maybe<Scalars['Float']>;
  segnalazione_id?: Maybe<Scalars['Float']>;
  squadra_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "evento" */
export type Evento_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  protocollo_id?: Maybe<Order_By>;
  risoluzione_id?: Maybe<Order_By>;
  segnalazione_id?: Maybe<Order_By>;
  squadra_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Evento_Variance_Fields = {
  __typename?: 'evento_variance_fields';
  id?: Maybe<Scalars['Float']>;
  protocollo_id?: Maybe<Scalars['Float']>;
  risoluzione_id?: Maybe<Scalars['Float']>;
  segnalazione_id?: Maybe<Scalars['Float']>;
  squadra_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "evento" */
export type Evento_Variance_Order_By = {
  id?: Maybe<Order_By>;
  protocollo_id?: Maybe<Order_By>;
  risoluzione_id?: Maybe<Order_By>;
  segnalazione_id?: Maybe<Order_By>;
  squadra_id?: Maybe<Order_By>;
};

/** Boolean expression to compare columns of type "float8". All fields are combined with logical 'AND'. */
export type Float8_Comparison_Exp = {
  _eq?: Maybe<Scalars['float8']>;
  _gt?: Maybe<Scalars['float8']>;
  _gte?: Maybe<Scalars['float8']>;
  _in?: Maybe<Array<Scalars['float8']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['float8']>;
  _lte?: Maybe<Scalars['float8']>;
  _neq?: Maybe<Scalars['float8']>;
  _nin?: Maybe<Array<Scalars['float8']>>;
};

export type Geography_Cast_Exp = {
  geometry?: Maybe<Geometry_Comparison_Exp>;
};

/** Boolean expression to compare columns of type "geography". All fields are combined with logical 'AND'. */
export type Geography_Comparison_Exp = {
  _cast?: Maybe<Geography_Cast_Exp>;
  _eq?: Maybe<Scalars['geography']>;
  _gt?: Maybe<Scalars['geography']>;
  _gte?: Maybe<Scalars['geography']>;
  _in?: Maybe<Array<Scalars['geography']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['geography']>;
  _lte?: Maybe<Scalars['geography']>;
  _neq?: Maybe<Scalars['geography']>;
  _nin?: Maybe<Array<Scalars['geography']>>;
  /** is the column within a given distance from the given geography value */
  _st_d_within?: Maybe<St_D_Within_Geography_Input>;
  /** does the column spatially intersect the given geography value */
  _st_intersects?: Maybe<Scalars['geography']>;
};

export type Geometry_Cast_Exp = {
  geography?: Maybe<Geography_Comparison_Exp>;
};

/** Boolean expression to compare columns of type "geometry". All fields are combined with logical 'AND'. */
export type Geometry_Comparison_Exp = {
  _cast?: Maybe<Geometry_Cast_Exp>;
  _eq?: Maybe<Scalars['geometry']>;
  _gt?: Maybe<Scalars['geometry']>;
  _gte?: Maybe<Scalars['geometry']>;
  _in?: Maybe<Array<Scalars['geometry']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['geometry']>;
  _lte?: Maybe<Scalars['geometry']>;
  _neq?: Maybe<Scalars['geometry']>;
  _nin?: Maybe<Array<Scalars['geometry']>>;
  /** is the column within a given 3D distance from the given geometry value */
  _st_3d_d_within?: Maybe<St_D_Within_Input>;
  /** does the column spatially intersect the given geometry value in 3D */
  _st_3d_intersects?: Maybe<Scalars['geometry']>;
  /** does the column contain the given geometry value */
  _st_contains?: Maybe<Scalars['geometry']>;
  /** does the column cross the given geometry value */
  _st_crosses?: Maybe<Scalars['geometry']>;
  /** is the column within a given distance from the given geometry value */
  _st_d_within?: Maybe<St_D_Within_Input>;
  /** is the column equal to given geometry value (directionality is ignored) */
  _st_equals?: Maybe<Scalars['geometry']>;
  /** does the column spatially intersect the given geometry value */
  _st_intersects?: Maybe<Scalars['geometry']>;
  /** does the column 'spatially overlap' (intersect but not completely contain) the given geometry value */
  _st_overlaps?: Maybe<Scalars['geometry']>;
  /** does the column have atleast one point in common with the given geometry value */
  _st_touches?: Maybe<Scalars['geometry']>;
  /** is the column contained in the given geometry value */
  _st_within?: Maybe<Scalars['geometry']>;
};

/** columns and relationships of "intervento" */
export type Intervento = {
  __typename?: 'intervento';
  /** An array relationship */
  allegati: Array<Allegato>;
  /** An aggregate relationship */
  allegati_aggregate: Allegato_Aggregate;
  assistenza_pm?: Maybe<Scalars['Boolean']>;
  /** An array relationship */
  attrezzature_impiegate: Array<Attrezzature_Impiegate>;
  /** An aggregate relationship */
  attrezzature_impiegate_aggregate: Attrezzature_Impiegate_Aggregate;
  /** An object relationship */
  condizioni_traffico?: Maybe<_Condizioni_Traffico>;
  condizioni_traffico_id?: Maybe<Scalars['Int']>;
  created_at: Scalars['timestamptz'];
  data_fine_lavori?: Maybe<Scalars['timestamptz']>;
  data_inizio_lavori?: Maybe<Scalars['timestamptz']>;
  difformita?: Maybe<Scalars['String']>;
  dissesto_difforme?: Maybe<Scalars['Boolean']>;
  /** An object relationship */
  giorni_trascorsi?: Maybe<_Giorni_Trascorsi>;
  giorni_trascorsi_id?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
  /** An array relationship */
  materiali_dissesto: Array<Materiale_Dissesto>;
  /** An aggregate relationship */
  materiali_dissesto_aggregate: Materiale_Dissesto_Aggregate;
  note?: Maybe<Scalars['String']>;
  /** An array relationship */
  segnaletica_lasciata: Array<Segnaletica_Lasciata>;
  /** An aggregate relationship */
  segnaletica_lasciata_aggregate: Segnaletica_Lasciata_Aggregate;
  updated_at: Scalars['timestamptz'];
  /** An array relationship */
  veicoli_impiegati: Array<Veicoli_Impiegati>;
  /** An aggregate relationship */
  veicoli_impiegati_aggregate: Veicoli_Impiegati_Aggregate;
};


/** columns and relationships of "intervento" */
export type InterventoAllegatiArgs = {
  distinct_on?: Maybe<Array<Allegato_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Allegato_Order_By>>;
  where?: Maybe<Allegato_Bool_Exp>;
};


/** columns and relationships of "intervento" */
export type InterventoAllegati_AggregateArgs = {
  distinct_on?: Maybe<Array<Allegato_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Allegato_Order_By>>;
  where?: Maybe<Allegato_Bool_Exp>;
};


/** columns and relationships of "intervento" */
export type InterventoAttrezzature_ImpiegateArgs = {
  distinct_on?: Maybe<Array<Attrezzature_Impiegate_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Attrezzature_Impiegate_Order_By>>;
  where?: Maybe<Attrezzature_Impiegate_Bool_Exp>;
};


/** columns and relationships of "intervento" */
export type InterventoAttrezzature_Impiegate_AggregateArgs = {
  distinct_on?: Maybe<Array<Attrezzature_Impiegate_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Attrezzature_Impiegate_Order_By>>;
  where?: Maybe<Attrezzature_Impiegate_Bool_Exp>;
};


/** columns and relationships of "intervento" */
export type InterventoMateriali_DissestoArgs = {
  distinct_on?: Maybe<Array<Materiale_Dissesto_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Materiale_Dissesto_Order_By>>;
  where?: Maybe<Materiale_Dissesto_Bool_Exp>;
};


/** columns and relationships of "intervento" */
export type InterventoMateriali_Dissesto_AggregateArgs = {
  distinct_on?: Maybe<Array<Materiale_Dissesto_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Materiale_Dissesto_Order_By>>;
  where?: Maybe<Materiale_Dissesto_Bool_Exp>;
};


/** columns and relationships of "intervento" */
export type InterventoSegnaletica_LasciataArgs = {
  distinct_on?: Maybe<Array<Segnaletica_Lasciata_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Segnaletica_Lasciata_Order_By>>;
  where?: Maybe<Segnaletica_Lasciata_Bool_Exp>;
};


/** columns and relationships of "intervento" */
export type InterventoSegnaletica_Lasciata_AggregateArgs = {
  distinct_on?: Maybe<Array<Segnaletica_Lasciata_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Segnaletica_Lasciata_Order_By>>;
  where?: Maybe<Segnaletica_Lasciata_Bool_Exp>;
};


/** columns and relationships of "intervento" */
export type InterventoVeicoli_ImpiegatiArgs = {
  distinct_on?: Maybe<Array<Veicoli_Impiegati_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Veicoli_Impiegati_Order_By>>;
  where?: Maybe<Veicoli_Impiegati_Bool_Exp>;
};


/** columns and relationships of "intervento" */
export type InterventoVeicoli_Impiegati_AggregateArgs = {
  distinct_on?: Maybe<Array<Veicoli_Impiegati_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Veicoli_Impiegati_Order_By>>;
  where?: Maybe<Veicoli_Impiegati_Bool_Exp>;
};

/** aggregated selection of "intervento" */
export type Intervento_Aggregate = {
  __typename?: 'intervento_aggregate';
  aggregate?: Maybe<Intervento_Aggregate_Fields>;
  nodes: Array<Intervento>;
};

/** aggregate fields of "intervento" */
export type Intervento_Aggregate_Fields = {
  __typename?: 'intervento_aggregate_fields';
  avg?: Maybe<Intervento_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Intervento_Max_Fields>;
  min?: Maybe<Intervento_Min_Fields>;
  stddev?: Maybe<Intervento_Stddev_Fields>;
  stddev_pop?: Maybe<Intervento_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Intervento_Stddev_Samp_Fields>;
  sum?: Maybe<Intervento_Sum_Fields>;
  var_pop?: Maybe<Intervento_Var_Pop_Fields>;
  var_samp?: Maybe<Intervento_Var_Samp_Fields>;
  variance?: Maybe<Intervento_Variance_Fields>;
};


/** aggregate fields of "intervento" */
export type Intervento_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Intervento_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Intervento_Avg_Fields = {
  __typename?: 'intervento_avg_fields';
  condizioni_traffico_id?: Maybe<Scalars['Float']>;
  giorni_trascorsi_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "intervento". All fields are combined with a logical 'AND'. */
export type Intervento_Bool_Exp = {
  _and?: Maybe<Array<Intervento_Bool_Exp>>;
  _not?: Maybe<Intervento_Bool_Exp>;
  _or?: Maybe<Array<Intervento_Bool_Exp>>;
  allegati?: Maybe<Allegato_Bool_Exp>;
  assistenza_pm?: Maybe<Boolean_Comparison_Exp>;
  attrezzature_impiegate?: Maybe<Attrezzature_Impiegate_Bool_Exp>;
  condizioni_traffico?: Maybe<_Condizioni_Traffico_Bool_Exp>;
  condizioni_traffico_id?: Maybe<Int_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  data_fine_lavori?: Maybe<Timestamptz_Comparison_Exp>;
  data_inizio_lavori?: Maybe<Timestamptz_Comparison_Exp>;
  difformita?: Maybe<String_Comparison_Exp>;
  dissesto_difforme?: Maybe<Boolean_Comparison_Exp>;
  giorni_trascorsi?: Maybe<_Giorni_Trascorsi_Bool_Exp>;
  giorni_trascorsi_id?: Maybe<Int_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  materiali_dissesto?: Maybe<Materiale_Dissesto_Bool_Exp>;
  note?: Maybe<String_Comparison_Exp>;
  segnaletica_lasciata?: Maybe<Segnaletica_Lasciata_Bool_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  veicoli_impiegati?: Maybe<Veicoli_Impiegati_Bool_Exp>;
};

/** unique or primary key constraints on table "intervento" */
export enum Intervento_Constraint {
  /** unique or primary key constraint */
  InterventoPkey = 'intervento_pkey'
}

/** input type for incrementing numeric columns in table "intervento" */
export type Intervento_Inc_Input = {
  condizioni_traffico_id?: Maybe<Scalars['Int']>;
  giorni_trascorsi_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "intervento" */
export type Intervento_Insert_Input = {
  allegati?: Maybe<Allegato_Arr_Rel_Insert_Input>;
  assistenza_pm?: Maybe<Scalars['Boolean']>;
  attrezzature_impiegate?: Maybe<Attrezzature_Impiegate_Arr_Rel_Insert_Input>;
  condizioni_traffico?: Maybe<_Condizioni_Traffico_Obj_Rel_Insert_Input>;
  condizioni_traffico_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  data_fine_lavori?: Maybe<Scalars['timestamptz']>;
  data_inizio_lavori?: Maybe<Scalars['timestamptz']>;
  difformita?: Maybe<Scalars['String']>;
  dissesto_difforme?: Maybe<Scalars['Boolean']>;
  giorni_trascorsi?: Maybe<_Giorni_Trascorsi_Obj_Rel_Insert_Input>;
  giorni_trascorsi_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  materiali_dissesto?: Maybe<Materiale_Dissesto_Arr_Rel_Insert_Input>;
  note?: Maybe<Scalars['String']>;
  segnaletica_lasciata?: Maybe<Segnaletica_Lasciata_Arr_Rel_Insert_Input>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  veicoli_impiegati?: Maybe<Veicoli_Impiegati_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Intervento_Max_Fields = {
  __typename?: 'intervento_max_fields';
  condizioni_traffico_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  data_fine_lavori?: Maybe<Scalars['timestamptz']>;
  data_inizio_lavori?: Maybe<Scalars['timestamptz']>;
  difformita?: Maybe<Scalars['String']>;
  giorni_trascorsi_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  note?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Intervento_Min_Fields = {
  __typename?: 'intervento_min_fields';
  condizioni_traffico_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  data_fine_lavori?: Maybe<Scalars['timestamptz']>;
  data_inizio_lavori?: Maybe<Scalars['timestamptz']>;
  difformita?: Maybe<Scalars['String']>;
  giorni_trascorsi_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  note?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "intervento" */
export type Intervento_Mutation_Response = {
  __typename?: 'intervento_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Intervento>;
};

/** input type for inserting object relation for remote table "intervento" */
export type Intervento_Obj_Rel_Insert_Input = {
  data: Intervento_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Intervento_On_Conflict>;
};

/** on conflict condition type for table "intervento" */
export type Intervento_On_Conflict = {
  constraint: Intervento_Constraint;
  update_columns?: Array<Intervento_Update_Column>;
  where?: Maybe<Intervento_Bool_Exp>;
};

/** Ordering options when selecting data from "intervento". */
export type Intervento_Order_By = {
  allegati_aggregate?: Maybe<Allegato_Aggregate_Order_By>;
  assistenza_pm?: Maybe<Order_By>;
  attrezzature_impiegate_aggregate?: Maybe<Attrezzature_Impiegate_Aggregate_Order_By>;
  condizioni_traffico?: Maybe<_Condizioni_Traffico_Order_By>;
  condizioni_traffico_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  data_fine_lavori?: Maybe<Order_By>;
  data_inizio_lavori?: Maybe<Order_By>;
  difformita?: Maybe<Order_By>;
  dissesto_difforme?: Maybe<Order_By>;
  giorni_trascorsi?: Maybe<_Giorni_Trascorsi_Order_By>;
  giorni_trascorsi_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  materiali_dissesto_aggregate?: Maybe<Materiale_Dissesto_Aggregate_Order_By>;
  note?: Maybe<Order_By>;
  segnaletica_lasciata_aggregate?: Maybe<Segnaletica_Lasciata_Aggregate_Order_By>;
  updated_at?: Maybe<Order_By>;
  veicoli_impiegati_aggregate?: Maybe<Veicoli_Impiegati_Aggregate_Order_By>;
};

/** primary key columns input for table: intervento */
export type Intervento_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "intervento" */
export enum Intervento_Select_Column {
  /** column name */
  AssistenzaPm = 'assistenza_pm',
  /** column name */
  CondizioniTrafficoId = 'condizioni_traffico_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DataFineLavori = 'data_fine_lavori',
  /** column name */
  DataInizioLavori = 'data_inizio_lavori',
  /** column name */
  Difformita = 'difformita',
  /** column name */
  DissestoDifforme = 'dissesto_difforme',
  /** column name */
  GiorniTrascorsiId = 'giorni_trascorsi_id',
  /** column name */
  Id = 'id',
  /** column name */
  Note = 'note',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "intervento" */
export type Intervento_Set_Input = {
  assistenza_pm?: Maybe<Scalars['Boolean']>;
  condizioni_traffico_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  data_fine_lavori?: Maybe<Scalars['timestamptz']>;
  data_inizio_lavori?: Maybe<Scalars['timestamptz']>;
  difformita?: Maybe<Scalars['String']>;
  dissesto_difforme?: Maybe<Scalars['Boolean']>;
  giorni_trascorsi_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  note?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Intervento_Stddev_Fields = {
  __typename?: 'intervento_stddev_fields';
  condizioni_traffico_id?: Maybe<Scalars['Float']>;
  giorni_trascorsi_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Intervento_Stddev_Pop_Fields = {
  __typename?: 'intervento_stddev_pop_fields';
  condizioni_traffico_id?: Maybe<Scalars['Float']>;
  giorni_trascorsi_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Intervento_Stddev_Samp_Fields = {
  __typename?: 'intervento_stddev_samp_fields';
  condizioni_traffico_id?: Maybe<Scalars['Float']>;
  giorni_trascorsi_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "intervento_straordinario" */
export type Intervento_Straordinario = {
  __typename?: 'intervento_straordinario';
  /** An array relationship */
  allegati: Array<Allegato>;
  /** An aggregate relationship */
  allegati_aggregate: Allegato_Aggregate;
  created_at: Scalars['timestamptz'];
  data_fine_lavori?: Maybe<Scalars['timestamptz']>;
  data_inizio_lavori?: Maybe<Scalars['timestamptz']>;
  data_inserimento?: Maybe<Scalars['timestamptz']>;
  id: Scalars['Int'];
  lavori_effettuati?: Maybe<Scalars['String']>;
  municipalita?: Maybe<Municipalita>;
  municipalita_id?: Maybe<Scalars['Int']>;
  municipalita_storica?: Maybe<Scalars['jsonb']>;
  /** An object relationship */
  posizionamento_toponimo_punto_finale?: Maybe<Posizionamento_Toponimo>;
  /** An object relationship */
  posizionamento_toponimo_punto_iniziale?: Maybe<Posizionamento_Toponimo>;
  /** An object relationship */
  priorita?: Maybe<_Priorita>;
  priorita_id?: Maybe<Scalars['Int']>;
  punto_finale_posizionamento_id?: Maybe<Scalars['Int']>;
  punto_iniziale_posizionamento_id?: Maybe<Scalars['Int']>;
  quartiere?: Maybe<Quartiere>;
  quartiere_id?: Maybe<Scalars['Int']>;
  quartiere_storico?: Maybe<Scalars['jsonb']>;
  stato: _Stato_Segnalazione_Enum;
  tipologia_intervento?: Maybe<Scalars['String']>;
  toponimo?: Maybe<Toponimo>;
  toponimo_id?: Maybe<Scalars['Int']>;
  toponimo_storico?: Maybe<Scalars['jsonb']>;
  updated_at: Scalars['timestamptz'];
};


/** columns and relationships of "intervento_straordinario" */
export type Intervento_StraordinarioAllegatiArgs = {
  distinct_on?: Maybe<Array<Allegato_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Allegato_Order_By>>;
  where?: Maybe<Allegato_Bool_Exp>;
};


/** columns and relationships of "intervento_straordinario" */
export type Intervento_StraordinarioAllegati_AggregateArgs = {
  distinct_on?: Maybe<Array<Allegato_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Allegato_Order_By>>;
  where?: Maybe<Allegato_Bool_Exp>;
};


/** columns and relationships of "intervento_straordinario" */
export type Intervento_StraordinarioMunicipalita_StoricaArgs = {
  path?: Maybe<Scalars['String']>;
};


/** columns and relationships of "intervento_straordinario" */
export type Intervento_StraordinarioQuartiere_StoricoArgs = {
  path?: Maybe<Scalars['String']>;
};


/** columns and relationships of "intervento_straordinario" */
export type Intervento_StraordinarioToponimo_StoricoArgs = {
  path?: Maybe<Scalars['String']>;
};

/** aggregated selection of "intervento_straordinario" */
export type Intervento_Straordinario_Aggregate = {
  __typename?: 'intervento_straordinario_aggregate';
  aggregate?: Maybe<Intervento_Straordinario_Aggregate_Fields>;
  nodes: Array<Intervento_Straordinario>;
};

/** aggregate fields of "intervento_straordinario" */
export type Intervento_Straordinario_Aggregate_Fields = {
  __typename?: 'intervento_straordinario_aggregate_fields';
  avg?: Maybe<Intervento_Straordinario_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Intervento_Straordinario_Max_Fields>;
  min?: Maybe<Intervento_Straordinario_Min_Fields>;
  stddev?: Maybe<Intervento_Straordinario_Stddev_Fields>;
  stddev_pop?: Maybe<Intervento_Straordinario_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Intervento_Straordinario_Stddev_Samp_Fields>;
  sum?: Maybe<Intervento_Straordinario_Sum_Fields>;
  var_pop?: Maybe<Intervento_Straordinario_Var_Pop_Fields>;
  var_samp?: Maybe<Intervento_Straordinario_Var_Samp_Fields>;
  variance?: Maybe<Intervento_Straordinario_Variance_Fields>;
};


/** aggregate fields of "intervento_straordinario" */
export type Intervento_Straordinario_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Intervento_Straordinario_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Intervento_Straordinario_Append_Input = {
  municipalita_storica?: Maybe<Scalars['jsonb']>;
  quartiere_storico?: Maybe<Scalars['jsonb']>;
  toponimo_storico?: Maybe<Scalars['jsonb']>;
};

/** aggregate avg on columns */
export type Intervento_Straordinario_Avg_Fields = {
  __typename?: 'intervento_straordinario_avg_fields';
  id?: Maybe<Scalars['Float']>;
  municipalita_id?: Maybe<Scalars['Float']>;
  priorita_id?: Maybe<Scalars['Float']>;
  punto_finale_posizionamento_id?: Maybe<Scalars['Float']>;
  punto_iniziale_posizionamento_id?: Maybe<Scalars['Float']>;
  quartiere_id?: Maybe<Scalars['Float']>;
  toponimo_id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "intervento_straordinario". All fields are combined with a logical 'AND'. */
export type Intervento_Straordinario_Bool_Exp = {
  _and?: Maybe<Array<Intervento_Straordinario_Bool_Exp>>;
  _not?: Maybe<Intervento_Straordinario_Bool_Exp>;
  _or?: Maybe<Array<Intervento_Straordinario_Bool_Exp>>;
  allegati?: Maybe<Allegato_Bool_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  data_fine_lavori?: Maybe<Timestamptz_Comparison_Exp>;
  data_inizio_lavori?: Maybe<Timestamptz_Comparison_Exp>;
  data_inserimento?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  lavori_effettuati?: Maybe<String_Comparison_Exp>;
  municipalita_id?: Maybe<Int_Comparison_Exp>;
  municipalita_storica?: Maybe<Jsonb_Comparison_Exp>;
  posizionamento_toponimo_punto_finale?: Maybe<Posizionamento_Toponimo_Bool_Exp>;
  posizionamento_toponimo_punto_iniziale?: Maybe<Posizionamento_Toponimo_Bool_Exp>;
  priorita?: Maybe<_Priorita_Bool_Exp>;
  priorita_id?: Maybe<Int_Comparison_Exp>;
  punto_finale_posizionamento_id?: Maybe<Int_Comparison_Exp>;
  punto_iniziale_posizionamento_id?: Maybe<Int_Comparison_Exp>;
  quartiere_id?: Maybe<Int_Comparison_Exp>;
  quartiere_storico?: Maybe<Jsonb_Comparison_Exp>;
  stato?: Maybe<_Stato_Segnalazione_Enum_Comparison_Exp>;
  tipologia_intervento?: Maybe<String_Comparison_Exp>;
  toponimo_id?: Maybe<Int_Comparison_Exp>;
  toponimo_storico?: Maybe<Jsonb_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "intervento_straordinario" */
export enum Intervento_Straordinario_Constraint {
  /** unique or primary key constraint */
  InterventoStraordinarioPkey = 'intervento_straordinario_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Intervento_Straordinario_Delete_At_Path_Input = {
  municipalita_storica?: Maybe<Array<Scalars['String']>>;
  quartiere_storico?: Maybe<Array<Scalars['String']>>;
  toponimo_storico?: Maybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Intervento_Straordinario_Delete_Elem_Input = {
  municipalita_storica?: Maybe<Scalars['Int']>;
  quartiere_storico?: Maybe<Scalars['Int']>;
  toponimo_storico?: Maybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Intervento_Straordinario_Delete_Key_Input = {
  municipalita_storica?: Maybe<Scalars['String']>;
  quartiere_storico?: Maybe<Scalars['String']>;
  toponimo_storico?: Maybe<Scalars['String']>;
};

/** input type for incrementing numeric columns in table "intervento_straordinario" */
export type Intervento_Straordinario_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  municipalita_id?: Maybe<Scalars['Int']>;
  priorita_id?: Maybe<Scalars['Int']>;
  punto_finale_posizionamento_id?: Maybe<Scalars['Int']>;
  punto_iniziale_posizionamento_id?: Maybe<Scalars['Int']>;
  quartiere_id?: Maybe<Scalars['Int']>;
  toponimo_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "intervento_straordinario" */
export type Intervento_Straordinario_Insert_Input = {
  allegati?: Maybe<Allegato_Arr_Rel_Insert_Input>;
  created_at?: Maybe<Scalars['timestamptz']>;
  data_fine_lavori?: Maybe<Scalars['timestamptz']>;
  data_inizio_lavori?: Maybe<Scalars['timestamptz']>;
  data_inserimento?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  lavori_effettuati?: Maybe<Scalars['String']>;
  municipalita_id?: Maybe<Scalars['Int']>;
  municipalita_storica?: Maybe<Scalars['jsonb']>;
  posizionamento_toponimo_punto_finale?: Maybe<Posizionamento_Toponimo_Obj_Rel_Insert_Input>;
  posizionamento_toponimo_punto_iniziale?: Maybe<Posizionamento_Toponimo_Obj_Rel_Insert_Input>;
  priorita?: Maybe<_Priorita_Obj_Rel_Insert_Input>;
  priorita_id?: Maybe<Scalars['Int']>;
  punto_finale_posizionamento_id?: Maybe<Scalars['Int']>;
  punto_iniziale_posizionamento_id?: Maybe<Scalars['Int']>;
  quartiere_id?: Maybe<Scalars['Int']>;
  quartiere_storico?: Maybe<Scalars['jsonb']>;
  stato?: Maybe<_Stato_Segnalazione_Enum>;
  tipologia_intervento?: Maybe<Scalars['String']>;
  toponimo_id?: Maybe<Scalars['Int']>;
  toponimo_storico?: Maybe<Scalars['jsonb']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Intervento_Straordinario_Max_Fields = {
  __typename?: 'intervento_straordinario_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  data_fine_lavori?: Maybe<Scalars['timestamptz']>;
  data_inizio_lavori?: Maybe<Scalars['timestamptz']>;
  data_inserimento?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  lavori_effettuati?: Maybe<Scalars['String']>;
  municipalita_id?: Maybe<Scalars['Int']>;
  priorita_id?: Maybe<Scalars['Int']>;
  punto_finale_posizionamento_id?: Maybe<Scalars['Int']>;
  punto_iniziale_posizionamento_id?: Maybe<Scalars['Int']>;
  quartiere_id?: Maybe<Scalars['Int']>;
  tipologia_intervento?: Maybe<Scalars['String']>;
  toponimo_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Intervento_Straordinario_Min_Fields = {
  __typename?: 'intervento_straordinario_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  data_fine_lavori?: Maybe<Scalars['timestamptz']>;
  data_inizio_lavori?: Maybe<Scalars['timestamptz']>;
  data_inserimento?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  lavori_effettuati?: Maybe<Scalars['String']>;
  municipalita_id?: Maybe<Scalars['Int']>;
  priorita_id?: Maybe<Scalars['Int']>;
  punto_finale_posizionamento_id?: Maybe<Scalars['Int']>;
  punto_iniziale_posizionamento_id?: Maybe<Scalars['Int']>;
  quartiere_id?: Maybe<Scalars['Int']>;
  tipologia_intervento?: Maybe<Scalars['String']>;
  toponimo_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "intervento_straordinario" */
export type Intervento_Straordinario_Mutation_Response = {
  __typename?: 'intervento_straordinario_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Intervento_Straordinario>;
};

/** on conflict condition type for table "intervento_straordinario" */
export type Intervento_Straordinario_On_Conflict = {
  constraint: Intervento_Straordinario_Constraint;
  update_columns?: Array<Intervento_Straordinario_Update_Column>;
  where?: Maybe<Intervento_Straordinario_Bool_Exp>;
};

/** Ordering options when selecting data from "intervento_straordinario". */
export type Intervento_Straordinario_Order_By = {
  allegati_aggregate?: Maybe<Allegato_Aggregate_Order_By>;
  created_at?: Maybe<Order_By>;
  data_fine_lavori?: Maybe<Order_By>;
  data_inizio_lavori?: Maybe<Order_By>;
  data_inserimento?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  lavori_effettuati?: Maybe<Order_By>;
  municipalita_id?: Maybe<Order_By>;
  municipalita_storica?: Maybe<Order_By>;
  posizionamento_toponimo_punto_finale?: Maybe<Posizionamento_Toponimo_Order_By>;
  posizionamento_toponimo_punto_iniziale?: Maybe<Posizionamento_Toponimo_Order_By>;
  priorita?: Maybe<_Priorita_Order_By>;
  priorita_id?: Maybe<Order_By>;
  punto_finale_posizionamento_id?: Maybe<Order_By>;
  punto_iniziale_posizionamento_id?: Maybe<Order_By>;
  quartiere_id?: Maybe<Order_By>;
  quartiere_storico?: Maybe<Order_By>;
  stato?: Maybe<Order_By>;
  tipologia_intervento?: Maybe<Order_By>;
  toponimo_id?: Maybe<Order_By>;
  toponimo_storico?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: intervento_straordinario */
export type Intervento_Straordinario_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Intervento_Straordinario_Prepend_Input = {
  municipalita_storica?: Maybe<Scalars['jsonb']>;
  quartiere_storico?: Maybe<Scalars['jsonb']>;
  toponimo_storico?: Maybe<Scalars['jsonb']>;
};

/** select columns of table "intervento_straordinario" */
export enum Intervento_Straordinario_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DataFineLavori = 'data_fine_lavori',
  /** column name */
  DataInizioLavori = 'data_inizio_lavori',
  /** column name */
  DataInserimento = 'data_inserimento',
  /** column name */
  Id = 'id',
  /** column name */
  LavoriEffettuati = 'lavori_effettuati',
  /** column name */
  MunicipalitaId = 'municipalita_id',
  /** column name */
  MunicipalitaStorica = 'municipalita_storica',
  /** column name */
  PrioritaId = 'priorita_id',
  /** column name */
  PuntoFinalePosizionamentoId = 'punto_finale_posizionamento_id',
  /** column name */
  PuntoInizialePosizionamentoId = 'punto_iniziale_posizionamento_id',
  /** column name */
  QuartiereId = 'quartiere_id',
  /** column name */
  QuartiereStorico = 'quartiere_storico',
  /** column name */
  Stato = 'stato',
  /** column name */
  TipologiaIntervento = 'tipologia_intervento',
  /** column name */
  ToponimoId = 'toponimo_id',
  /** column name */
  ToponimoStorico = 'toponimo_storico',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "intervento_straordinario" */
export type Intervento_Straordinario_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  data_fine_lavori?: Maybe<Scalars['timestamptz']>;
  data_inizio_lavori?: Maybe<Scalars['timestamptz']>;
  data_inserimento?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  lavori_effettuati?: Maybe<Scalars['String']>;
  municipalita_id?: Maybe<Scalars['Int']>;
  municipalita_storica?: Maybe<Scalars['jsonb']>;
  priorita_id?: Maybe<Scalars['Int']>;
  punto_finale_posizionamento_id?: Maybe<Scalars['Int']>;
  punto_iniziale_posizionamento_id?: Maybe<Scalars['Int']>;
  quartiere_id?: Maybe<Scalars['Int']>;
  quartiere_storico?: Maybe<Scalars['jsonb']>;
  stato?: Maybe<_Stato_Segnalazione_Enum>;
  tipologia_intervento?: Maybe<Scalars['String']>;
  toponimo_id?: Maybe<Scalars['Int']>;
  toponimo_storico?: Maybe<Scalars['jsonb']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Intervento_Straordinario_Stddev_Fields = {
  __typename?: 'intervento_straordinario_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  municipalita_id?: Maybe<Scalars['Float']>;
  priorita_id?: Maybe<Scalars['Float']>;
  punto_finale_posizionamento_id?: Maybe<Scalars['Float']>;
  punto_iniziale_posizionamento_id?: Maybe<Scalars['Float']>;
  quartiere_id?: Maybe<Scalars['Float']>;
  toponimo_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Intervento_Straordinario_Stddev_Pop_Fields = {
  __typename?: 'intervento_straordinario_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  municipalita_id?: Maybe<Scalars['Float']>;
  priorita_id?: Maybe<Scalars['Float']>;
  punto_finale_posizionamento_id?: Maybe<Scalars['Float']>;
  punto_iniziale_posizionamento_id?: Maybe<Scalars['Float']>;
  quartiere_id?: Maybe<Scalars['Float']>;
  toponimo_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Intervento_Straordinario_Stddev_Samp_Fields = {
  __typename?: 'intervento_straordinario_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  municipalita_id?: Maybe<Scalars['Float']>;
  priorita_id?: Maybe<Scalars['Float']>;
  punto_finale_posizionamento_id?: Maybe<Scalars['Float']>;
  punto_iniziale_posizionamento_id?: Maybe<Scalars['Float']>;
  quartiere_id?: Maybe<Scalars['Float']>;
  toponimo_id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Intervento_Straordinario_Sum_Fields = {
  __typename?: 'intervento_straordinario_sum_fields';
  id?: Maybe<Scalars['Int']>;
  municipalita_id?: Maybe<Scalars['Int']>;
  priorita_id?: Maybe<Scalars['Int']>;
  punto_finale_posizionamento_id?: Maybe<Scalars['Int']>;
  punto_iniziale_posizionamento_id?: Maybe<Scalars['Int']>;
  quartiere_id?: Maybe<Scalars['Int']>;
  toponimo_id?: Maybe<Scalars['Int']>;
};

/** update columns of table "intervento_straordinario" */
export enum Intervento_Straordinario_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DataFineLavori = 'data_fine_lavori',
  /** column name */
  DataInizioLavori = 'data_inizio_lavori',
  /** column name */
  DataInserimento = 'data_inserimento',
  /** column name */
  Id = 'id',
  /** column name */
  LavoriEffettuati = 'lavori_effettuati',
  /** column name */
  MunicipalitaId = 'municipalita_id',
  /** column name */
  MunicipalitaStorica = 'municipalita_storica',
  /** column name */
  PrioritaId = 'priorita_id',
  /** column name */
  PuntoFinalePosizionamentoId = 'punto_finale_posizionamento_id',
  /** column name */
  PuntoInizialePosizionamentoId = 'punto_iniziale_posizionamento_id',
  /** column name */
  QuartiereId = 'quartiere_id',
  /** column name */
  QuartiereStorico = 'quartiere_storico',
  /** column name */
  Stato = 'stato',
  /** column name */
  TipologiaIntervento = 'tipologia_intervento',
  /** column name */
  ToponimoId = 'toponimo_id',
  /** column name */
  ToponimoStorico = 'toponimo_storico',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Intervento_Straordinario_Var_Pop_Fields = {
  __typename?: 'intervento_straordinario_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  municipalita_id?: Maybe<Scalars['Float']>;
  priorita_id?: Maybe<Scalars['Float']>;
  punto_finale_posizionamento_id?: Maybe<Scalars['Float']>;
  punto_iniziale_posizionamento_id?: Maybe<Scalars['Float']>;
  quartiere_id?: Maybe<Scalars['Float']>;
  toponimo_id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Intervento_Straordinario_Var_Samp_Fields = {
  __typename?: 'intervento_straordinario_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  municipalita_id?: Maybe<Scalars['Float']>;
  priorita_id?: Maybe<Scalars['Float']>;
  punto_finale_posizionamento_id?: Maybe<Scalars['Float']>;
  punto_iniziale_posizionamento_id?: Maybe<Scalars['Float']>;
  quartiere_id?: Maybe<Scalars['Float']>;
  toponimo_id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Intervento_Straordinario_Variance_Fields = {
  __typename?: 'intervento_straordinario_variance_fields';
  id?: Maybe<Scalars['Float']>;
  municipalita_id?: Maybe<Scalars['Float']>;
  priorita_id?: Maybe<Scalars['Float']>;
  punto_finale_posizionamento_id?: Maybe<Scalars['Float']>;
  punto_iniziale_posizionamento_id?: Maybe<Scalars['Float']>;
  quartiere_id?: Maybe<Scalars['Float']>;
  toponimo_id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Intervento_Sum_Fields = {
  __typename?: 'intervento_sum_fields';
  condizioni_traffico_id?: Maybe<Scalars['Int']>;
  giorni_trascorsi_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "intervento" */
export enum Intervento_Update_Column {
  /** column name */
  AssistenzaPm = 'assistenza_pm',
  /** column name */
  CondizioniTrafficoId = 'condizioni_traffico_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DataFineLavori = 'data_fine_lavori',
  /** column name */
  DataInizioLavori = 'data_inizio_lavori',
  /** column name */
  Difformita = 'difformita',
  /** column name */
  DissestoDifforme = 'dissesto_difforme',
  /** column name */
  GiorniTrascorsiId = 'giorni_trascorsi_id',
  /** column name */
  Id = 'id',
  /** column name */
  Note = 'note',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Intervento_Var_Pop_Fields = {
  __typename?: 'intervento_var_pop_fields';
  condizioni_traffico_id?: Maybe<Scalars['Float']>;
  giorni_trascorsi_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Intervento_Var_Samp_Fields = {
  __typename?: 'intervento_var_samp_fields';
  condizioni_traffico_id?: Maybe<Scalars['Float']>;
  giorni_trascorsi_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Intervento_Variance_Fields = {
  __typename?: 'intervento_variance_fields';
  condizioni_traffico_id?: Maybe<Scalars['Float']>;
  giorni_trascorsi_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export type Jsonb_Comparison_Exp = {
  /** is the column contained in the given json value */
  _contained_in?: Maybe<Scalars['jsonb']>;
  /** does the column contain the given json value at the top level */
  _contains?: Maybe<Scalars['jsonb']>;
  _eq?: Maybe<Scalars['jsonb']>;
  _gt?: Maybe<Scalars['jsonb']>;
  _gte?: Maybe<Scalars['jsonb']>;
  /** does the string exist as a top-level key in the column */
  _has_key?: Maybe<Scalars['String']>;
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: Maybe<Array<Scalars['String']>>;
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: Maybe<Array<Scalars['String']>>;
  _in?: Maybe<Array<Scalars['jsonb']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['jsonb']>;
  _lte?: Maybe<Scalars['jsonb']>;
  _neq?: Maybe<Scalars['jsonb']>;
  _nin?: Maybe<Array<Scalars['jsonb']>>;
};

/** columns and relationships of "materiale_dissesto" */
export type Materiale_Dissesto = {
  __typename?: 'materiale_dissesto';
  altro?: Maybe<Scalars['String']>;
  created_at: Scalars['timestamptz'];
  delete?: Maybe<Scalars['Boolean']>;
  id: Scalars['Int'];
  intervento_id: Scalars['Int'];
  /** An object relationship */
  materiale?: Maybe<_Materiale>;
  materiale_id?: Maybe<Scalars['Int']>;
  quantita?: Maybe<Scalars['float8']>;
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "materiale_dissesto" */
export type Materiale_Dissesto_Aggregate = {
  __typename?: 'materiale_dissesto_aggregate';
  aggregate?: Maybe<Materiale_Dissesto_Aggregate_Fields>;
  nodes: Array<Materiale_Dissesto>;
};

/** aggregate fields of "materiale_dissesto" */
export type Materiale_Dissesto_Aggregate_Fields = {
  __typename?: 'materiale_dissesto_aggregate_fields';
  avg?: Maybe<Materiale_Dissesto_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Materiale_Dissesto_Max_Fields>;
  min?: Maybe<Materiale_Dissesto_Min_Fields>;
  stddev?: Maybe<Materiale_Dissesto_Stddev_Fields>;
  stddev_pop?: Maybe<Materiale_Dissesto_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Materiale_Dissesto_Stddev_Samp_Fields>;
  sum?: Maybe<Materiale_Dissesto_Sum_Fields>;
  var_pop?: Maybe<Materiale_Dissesto_Var_Pop_Fields>;
  var_samp?: Maybe<Materiale_Dissesto_Var_Samp_Fields>;
  variance?: Maybe<Materiale_Dissesto_Variance_Fields>;
};


/** aggregate fields of "materiale_dissesto" */
export type Materiale_Dissesto_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Materiale_Dissesto_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "materiale_dissesto" */
export type Materiale_Dissesto_Aggregate_Order_By = {
  avg?: Maybe<Materiale_Dissesto_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Materiale_Dissesto_Max_Order_By>;
  min?: Maybe<Materiale_Dissesto_Min_Order_By>;
  stddev?: Maybe<Materiale_Dissesto_Stddev_Order_By>;
  stddev_pop?: Maybe<Materiale_Dissesto_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Materiale_Dissesto_Stddev_Samp_Order_By>;
  sum?: Maybe<Materiale_Dissesto_Sum_Order_By>;
  var_pop?: Maybe<Materiale_Dissesto_Var_Pop_Order_By>;
  var_samp?: Maybe<Materiale_Dissesto_Var_Samp_Order_By>;
  variance?: Maybe<Materiale_Dissesto_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "materiale_dissesto" */
export type Materiale_Dissesto_Arr_Rel_Insert_Input = {
  data: Array<Materiale_Dissesto_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Materiale_Dissesto_On_Conflict>;
};

/** aggregate avg on columns */
export type Materiale_Dissesto_Avg_Fields = {
  __typename?: 'materiale_dissesto_avg_fields';
  id?: Maybe<Scalars['Float']>;
  intervento_id?: Maybe<Scalars['Float']>;
  materiale_id?: Maybe<Scalars['Float']>;
  quantita?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "materiale_dissesto" */
export type Materiale_Dissesto_Avg_Order_By = {
  id?: Maybe<Order_By>;
  intervento_id?: Maybe<Order_By>;
  materiale_id?: Maybe<Order_By>;
  quantita?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "materiale_dissesto". All fields are combined with a logical 'AND'. */
export type Materiale_Dissesto_Bool_Exp = {
  _and?: Maybe<Array<Materiale_Dissesto_Bool_Exp>>;
  _not?: Maybe<Materiale_Dissesto_Bool_Exp>;
  _or?: Maybe<Array<Materiale_Dissesto_Bool_Exp>>;
  altro?: Maybe<String_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  delete?: Maybe<Boolean_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  intervento_id?: Maybe<Int_Comparison_Exp>;
  materiale?: Maybe<_Materiale_Bool_Exp>;
  materiale_id?: Maybe<Int_Comparison_Exp>;
  quantita?: Maybe<Float8_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "materiale_dissesto" */
export enum Materiale_Dissesto_Constraint {
  /** unique or primary key constraint */
  MaterialeDissestoPkey = 'materiale_dissesto_pkey'
}

/** input type for incrementing numeric columns in table "materiale_dissesto" */
export type Materiale_Dissesto_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  intervento_id?: Maybe<Scalars['Int']>;
  materiale_id?: Maybe<Scalars['Int']>;
  quantita?: Maybe<Scalars['float8']>;
};

/** input type for inserting data into table "materiale_dissesto" */
export type Materiale_Dissesto_Insert_Input = {
  altro?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  delete?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['Int']>;
  intervento_id?: Maybe<Scalars['Int']>;
  materiale?: Maybe<_Materiale_Obj_Rel_Insert_Input>;
  materiale_id?: Maybe<Scalars['Int']>;
  quantita?: Maybe<Scalars['float8']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Materiale_Dissesto_Max_Fields = {
  __typename?: 'materiale_dissesto_max_fields';
  altro?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  intervento_id?: Maybe<Scalars['Int']>;
  materiale_id?: Maybe<Scalars['Int']>;
  quantita?: Maybe<Scalars['float8']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "materiale_dissesto" */
export type Materiale_Dissesto_Max_Order_By = {
  altro?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  intervento_id?: Maybe<Order_By>;
  materiale_id?: Maybe<Order_By>;
  quantita?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Materiale_Dissesto_Min_Fields = {
  __typename?: 'materiale_dissesto_min_fields';
  altro?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  intervento_id?: Maybe<Scalars['Int']>;
  materiale_id?: Maybe<Scalars['Int']>;
  quantita?: Maybe<Scalars['float8']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "materiale_dissesto" */
export type Materiale_Dissesto_Min_Order_By = {
  altro?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  intervento_id?: Maybe<Order_By>;
  materiale_id?: Maybe<Order_By>;
  quantita?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "materiale_dissesto" */
export type Materiale_Dissesto_Mutation_Response = {
  __typename?: 'materiale_dissesto_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Materiale_Dissesto>;
};

/** on conflict condition type for table "materiale_dissesto" */
export type Materiale_Dissesto_On_Conflict = {
  constraint: Materiale_Dissesto_Constraint;
  update_columns?: Array<Materiale_Dissesto_Update_Column>;
  where?: Maybe<Materiale_Dissesto_Bool_Exp>;
};

/** Ordering options when selecting data from "materiale_dissesto". */
export type Materiale_Dissesto_Order_By = {
  altro?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  delete?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  intervento_id?: Maybe<Order_By>;
  materiale?: Maybe<_Materiale_Order_By>;
  materiale_id?: Maybe<Order_By>;
  quantita?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: materiale_dissesto */
export type Materiale_Dissesto_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "materiale_dissesto" */
export enum Materiale_Dissesto_Select_Column {
  /** column name */
  Altro = 'altro',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Delete = 'delete',
  /** column name */
  Id = 'id',
  /** column name */
  InterventoId = 'intervento_id',
  /** column name */
  MaterialeId = 'materiale_id',
  /** column name */
  Quantita = 'quantita',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "materiale_dissesto" */
export type Materiale_Dissesto_Set_Input = {
  altro?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  delete?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['Int']>;
  intervento_id?: Maybe<Scalars['Int']>;
  materiale_id?: Maybe<Scalars['Int']>;
  quantita?: Maybe<Scalars['float8']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Materiale_Dissesto_Stddev_Fields = {
  __typename?: 'materiale_dissesto_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  intervento_id?: Maybe<Scalars['Float']>;
  materiale_id?: Maybe<Scalars['Float']>;
  quantita?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "materiale_dissesto" */
export type Materiale_Dissesto_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  intervento_id?: Maybe<Order_By>;
  materiale_id?: Maybe<Order_By>;
  quantita?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Materiale_Dissesto_Stddev_Pop_Fields = {
  __typename?: 'materiale_dissesto_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  intervento_id?: Maybe<Scalars['Float']>;
  materiale_id?: Maybe<Scalars['Float']>;
  quantita?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "materiale_dissesto" */
export type Materiale_Dissesto_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  intervento_id?: Maybe<Order_By>;
  materiale_id?: Maybe<Order_By>;
  quantita?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Materiale_Dissesto_Stddev_Samp_Fields = {
  __typename?: 'materiale_dissesto_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  intervento_id?: Maybe<Scalars['Float']>;
  materiale_id?: Maybe<Scalars['Float']>;
  quantita?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "materiale_dissesto" */
export type Materiale_Dissesto_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  intervento_id?: Maybe<Order_By>;
  materiale_id?: Maybe<Order_By>;
  quantita?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Materiale_Dissesto_Sum_Fields = {
  __typename?: 'materiale_dissesto_sum_fields';
  id?: Maybe<Scalars['Int']>;
  intervento_id?: Maybe<Scalars['Int']>;
  materiale_id?: Maybe<Scalars['Int']>;
  quantita?: Maybe<Scalars['float8']>;
};

/** order by sum() on columns of table "materiale_dissesto" */
export type Materiale_Dissesto_Sum_Order_By = {
  id?: Maybe<Order_By>;
  intervento_id?: Maybe<Order_By>;
  materiale_id?: Maybe<Order_By>;
  quantita?: Maybe<Order_By>;
};

/** update columns of table "materiale_dissesto" */
export enum Materiale_Dissesto_Update_Column {
  /** column name */
  Altro = 'altro',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Delete = 'delete',
  /** column name */
  Id = 'id',
  /** column name */
  InterventoId = 'intervento_id',
  /** column name */
  MaterialeId = 'materiale_id',
  /** column name */
  Quantita = 'quantita',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Materiale_Dissesto_Var_Pop_Fields = {
  __typename?: 'materiale_dissesto_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  intervento_id?: Maybe<Scalars['Float']>;
  materiale_id?: Maybe<Scalars['Float']>;
  quantita?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "materiale_dissesto" */
export type Materiale_Dissesto_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  intervento_id?: Maybe<Order_By>;
  materiale_id?: Maybe<Order_By>;
  quantita?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Materiale_Dissesto_Var_Samp_Fields = {
  __typename?: 'materiale_dissesto_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  intervento_id?: Maybe<Scalars['Float']>;
  materiale_id?: Maybe<Scalars['Float']>;
  quantita?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "materiale_dissesto" */
export type Materiale_Dissesto_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  intervento_id?: Maybe<Order_By>;
  materiale_id?: Maybe<Order_By>;
  quantita?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Materiale_Dissesto_Variance_Fields = {
  __typename?: 'materiale_dissesto_variance_fields';
  id?: Maybe<Scalars['Float']>;
  intervento_id?: Maybe<Scalars['Float']>;
  materiale_id?: Maybe<Scalars['Float']>;
  quantita?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "materiale_dissesto" */
export type Materiale_Dissesto_Variance_Order_By = {
  id?: Maybe<Order_By>;
  intervento_id?: Maybe<Order_By>;
  materiale_id?: Maybe<Order_By>;
  quantita?: Maybe<Order_By>;
};

/** columns and relationships of "membro" */
export type Membro = {
  __typename?: 'membro';
  cognome: Scalars['String'];
  created_at: Scalars['timestamptz'];
  id: Scalars['Int'];
  matricola: Scalars['String'];
  nome: Scalars['String'];
  /** An array relationship */
  squadre: Array<Assegnazione_Squadra>;
  /** An aggregate relationship */
  squadre_aggregate: Assegnazione_Squadra_Aggregate;
  updated_at: Scalars['timestamptz'];
};


/** columns and relationships of "membro" */
export type MembroSquadreArgs = {
  distinct_on?: Maybe<Array<Assegnazione_Squadra_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Assegnazione_Squadra_Order_By>>;
  where?: Maybe<Assegnazione_Squadra_Bool_Exp>;
};


/** columns and relationships of "membro" */
export type MembroSquadre_AggregateArgs = {
  distinct_on?: Maybe<Array<Assegnazione_Squadra_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Assegnazione_Squadra_Order_By>>;
  where?: Maybe<Assegnazione_Squadra_Bool_Exp>;
};

/** aggregated selection of "membro" */
export type Membro_Aggregate = {
  __typename?: 'membro_aggregate';
  aggregate?: Maybe<Membro_Aggregate_Fields>;
  nodes: Array<Membro>;
};

/** aggregate fields of "membro" */
export type Membro_Aggregate_Fields = {
  __typename?: 'membro_aggregate_fields';
  avg?: Maybe<Membro_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Membro_Max_Fields>;
  min?: Maybe<Membro_Min_Fields>;
  stddev?: Maybe<Membro_Stddev_Fields>;
  stddev_pop?: Maybe<Membro_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Membro_Stddev_Samp_Fields>;
  sum?: Maybe<Membro_Sum_Fields>;
  var_pop?: Maybe<Membro_Var_Pop_Fields>;
  var_samp?: Maybe<Membro_Var_Samp_Fields>;
  variance?: Maybe<Membro_Variance_Fields>;
};


/** aggregate fields of "membro" */
export type Membro_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Membro_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Membro_Avg_Fields = {
  __typename?: 'membro_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "membro". All fields are combined with a logical 'AND'. */
export type Membro_Bool_Exp = {
  _and?: Maybe<Array<Membro_Bool_Exp>>;
  _not?: Maybe<Membro_Bool_Exp>;
  _or?: Maybe<Array<Membro_Bool_Exp>>;
  cognome?: Maybe<String_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  matricola?: Maybe<String_Comparison_Exp>;
  nome?: Maybe<String_Comparison_Exp>;
  squadre?: Maybe<Assegnazione_Squadra_Bool_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "membro" */
export enum Membro_Constraint {
  /** unique or primary key constraint */
  MembroPkey = 'membro_pkey'
}

/** input type for incrementing numeric columns in table "membro" */
export type Membro_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "membro" */
export type Membro_Insert_Input = {
  cognome?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  matricola?: Maybe<Scalars['String']>;
  nome?: Maybe<Scalars['String']>;
  squadre?: Maybe<Assegnazione_Squadra_Arr_Rel_Insert_Input>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Membro_Max_Fields = {
  __typename?: 'membro_max_fields';
  cognome?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  matricola?: Maybe<Scalars['String']>;
  nome?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Membro_Min_Fields = {
  __typename?: 'membro_min_fields';
  cognome?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  matricola?: Maybe<Scalars['String']>;
  nome?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "membro" */
export type Membro_Mutation_Response = {
  __typename?: 'membro_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Membro>;
};

/** input type for inserting object relation for remote table "membro" */
export type Membro_Obj_Rel_Insert_Input = {
  data: Membro_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Membro_On_Conflict>;
};

/** on conflict condition type for table "membro" */
export type Membro_On_Conflict = {
  constraint: Membro_Constraint;
  update_columns?: Array<Membro_Update_Column>;
  where?: Maybe<Membro_Bool_Exp>;
};

/** Ordering options when selecting data from "membro". */
export type Membro_Order_By = {
  cognome?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  matricola?: Maybe<Order_By>;
  nome?: Maybe<Order_By>;
  squadre_aggregate?: Maybe<Assegnazione_Squadra_Aggregate_Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: membro */
export type Membro_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "membro" */
export enum Membro_Select_Column {
  /** column name */
  Cognome = 'cognome',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Matricola = 'matricola',
  /** column name */
  Nome = 'nome',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "membro" */
export type Membro_Set_Input = {
  cognome?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  matricola?: Maybe<Scalars['String']>;
  nome?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Membro_Stddev_Fields = {
  __typename?: 'membro_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Membro_Stddev_Pop_Fields = {
  __typename?: 'membro_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Membro_Stddev_Samp_Fields = {
  __typename?: 'membro_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Membro_Sum_Fields = {
  __typename?: 'membro_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "membro" */
export enum Membro_Update_Column {
  /** column name */
  Cognome = 'cognome',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Matricola = 'matricola',
  /** column name */
  Nome = 'nome',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Membro_Var_Pop_Fields = {
  __typename?: 'membro_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Membro_Var_Samp_Fields = {
  __typename?: 'membro_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Membro_Variance_Fields = {
  __typename?: 'membro_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "municipalita" */
export type Municipalita = {
  __typename?: 'municipalita';
  created_at: Scalars['timestamptz'];
  id: Scalars['Int'];
  nome: Scalars['String'];
  /** An array relationship */
  quartieri: Array<Assegnazione_Quartiere>;
  /** An aggregate relationship */
  quartieri_aggregate: Assegnazione_Quartiere_Aggregate;
  updated_at: Scalars['timestamptz'];
  /** An array relationship */
  vecchie_denominazioni: Array<Vecchia_Municipalita>;
  /** An aggregate relationship */
  vecchie_denominazioni_aggregate: Vecchia_Municipalita_Aggregate;
};


/** columns and relationships of "municipalita" */
export type MunicipalitaQuartieriArgs = {
  distinct_on?: Maybe<Array<Assegnazione_Quartiere_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Assegnazione_Quartiere_Order_By>>;
  where?: Maybe<Assegnazione_Quartiere_Bool_Exp>;
};


/** columns and relationships of "municipalita" */
export type MunicipalitaQuartieri_AggregateArgs = {
  distinct_on?: Maybe<Array<Assegnazione_Quartiere_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Assegnazione_Quartiere_Order_By>>;
  where?: Maybe<Assegnazione_Quartiere_Bool_Exp>;
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
  quartieri?: Maybe<Assegnazione_Quartiere_Bool_Exp>;
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
  quartieri?: Maybe<Assegnazione_Quartiere_Arr_Rel_Insert_Input>;
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
  quartieri_aggregate?: Maybe<Assegnazione_Quartiere_Aggregate_Order_By>;
  updated_at?: Maybe<Order_By>;
  vecchie_denominazioni_aggregate?: Maybe<Vecchia_Municipalita_Aggregate_Order_By>;
};

/** primary key columns input for table: municipalita */
export type Municipalita_Pk_Columns_Input = {
  id: Scalars['Int'];
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
  /** delete data from the table: "_condizioni_traffico" */
  delete__condizioni_traffico?: Maybe<_Condizioni_Traffico_Mutation_Response>;
  /** delete single row from the table: "_condizioni_traffico" */
  delete__condizioni_traffico_by_pk?: Maybe<_Condizioni_Traffico>;
  /** delete data from the table: "_forma_dissesto" */
  delete__forma_dissesto?: Maybe<_Forma_Dissesto_Mutation_Response>;
  /** delete single row from the table: "_forma_dissesto" */
  delete__forma_dissesto_by_pk?: Maybe<_Forma_Dissesto>;
  /** delete data from the table: "_giorni_trascorsi" */
  delete__giorni_trascorsi?: Maybe<_Giorni_Trascorsi_Mutation_Response>;
  /** delete single row from the table: "_giorni_trascorsi" */
  delete__giorni_trascorsi_by_pk?: Maybe<_Giorni_Trascorsi>;
  /** delete data from the table: "_materiale" */
  delete__materiale?: Maybe<_Materiale_Mutation_Response>;
  /** delete single row from the table: "_materiale" */
  delete__materiale_by_pk?: Maybe<_Materiale>;
  /** delete data from the table: "_priorita" */
  delete__priorita?: Maybe<_Priorita_Mutation_Response>;
  /** delete single row from the table: "_priorita" */
  delete__priorita_by_pk?: Maybe<_Priorita>;
  /** delete data from the table: "_sezione_protocollo" */
  delete__sezione_protocollo?: Maybe<_Sezione_Protocollo_Mutation_Response>;
  /** delete single row from the table: "_sezione_protocollo" */
  delete__sezione_protocollo_by_pk?: Maybe<_Sezione_Protocollo>;
  /** delete data from the table: "_specifica_posizionamento_toponimo" */
  delete__specifica_posizionamento_toponimo?: Maybe<_Specifica_Posizionamento_Toponimo_Mutation_Response>;
  /** delete single row from the table: "_specifica_posizionamento_toponimo" */
  delete__specifica_posizionamento_toponimo_by_pk?: Maybe<_Specifica_Posizionamento_Toponimo>;
  /** delete data from the table: "_stato_segnalazione" */
  delete__stato_segnalazione?: Maybe<_Stato_Segnalazione_Mutation_Response>;
  /** delete single row from the table: "_stato_segnalazione" */
  delete__stato_segnalazione_by_pk?: Maybe<_Stato_Segnalazione>;
  /** delete data from the table: "_tipologia_dissesto" */
  delete__tipologia_dissesto?: Maybe<_Tipologia_Dissesto_Mutation_Response>;
  /** delete single row from the table: "_tipologia_dissesto" */
  delete__tipologia_dissesto_by_pk?: Maybe<_Tipologia_Dissesto>;
  /** delete data from the table: "_tipologia_posizionamento_toponimo" */
  delete__tipologia_posizionamento_toponimo?: Maybe<_Tipologia_Posizionamento_Toponimo_Mutation_Response>;
  /** delete single row from the table: "_tipologia_posizionamento_toponimo" */
  delete__tipologia_posizionamento_toponimo_by_pk?: Maybe<_Tipologia_Posizionamento_Toponimo>;
  /** delete data from the table: "_titolo" */
  delete__titolo?: Maybe<_Titolo_Mutation_Response>;
  /** delete single row from the table: "_titolo" */
  delete__titolo_by_pk?: Maybe<_Titolo>;
  /** delete data from the table: "allegato" */
  delete_allegato?: Maybe<Allegato_Mutation_Response>;
  /** delete single row from the table: "allegato" */
  delete_allegato_by_pk?: Maybe<Allegato>;
  /** delete data from the table: "assegnazione_quartiere" */
  delete_assegnazione_quartiere?: Maybe<Assegnazione_Quartiere_Mutation_Response>;
  /** delete single row from the table: "assegnazione_quartiere" */
  delete_assegnazione_quartiere_by_pk?: Maybe<Assegnazione_Quartiere>;
  /** delete data from the table: "assegnazione_squadra" */
  delete_assegnazione_squadra?: Maybe<Assegnazione_Squadra_Mutation_Response>;
  /** delete single row from the table: "assegnazione_squadra" */
  delete_assegnazione_squadra_by_pk?: Maybe<Assegnazione_Squadra>;
  /** delete data from the table: "assegnazione_toponimo" */
  delete_assegnazione_toponimo?: Maybe<Assegnazione_Toponimo_Mutation_Response>;
  /** delete single row from the table: "assegnazione_toponimo" */
  delete_assegnazione_toponimo_by_pk?: Maybe<Assegnazione_Toponimo>;
  /** delete data from the table: "attrezzature_impiegate" */
  delete_attrezzature_impiegate?: Maybe<Attrezzature_Impiegate_Mutation_Response>;
  /** delete single row from the table: "attrezzature_impiegate" */
  delete_attrezzature_impiegate_by_pk?: Maybe<Attrezzature_Impiegate>;
  /** delete data from the table: "civico" */
  delete_civico?: Maybe<Civico_Mutation_Response>;
  /** delete single row from the table: "civico" */
  delete_civico_by_pk?: Maybe<Civico>;
  /** delete data from the table: "connessione_grafo" */
  delete_connessione_grafo?: Maybe<Connessione_Grafo_Mutation_Response>;
  /** delete single row from the table: "connessione_grafo" */
  delete_connessione_grafo_by_pk?: Maybe<Connessione_Grafo>;
  /** delete data from the table: "diario" */
  delete_diario?: Maybe<Diario_Mutation_Response>;
  /** delete single row from the table: "diario" */
  delete_diario_by_pk?: Maybe<Diario>;
  /** delete data from the table: "dissesto" */
  delete_dissesto?: Maybe<Dissesto_Mutation_Response>;
  /** delete single row from the table: "dissesto" */
  delete_dissesto_by_pk?: Maybe<Dissesto>;
  /** delete data from the table: "dug" */
  delete_dug?: Maybe<Dug_Mutation_Response>;
  /** delete single row from the table: "dug" */
  delete_dug_by_pk?: Maybe<Dug>;
  /** delete data from the table: "evento" */
  delete_evento?: Maybe<Evento_Mutation_Response>;
  /** delete single row from the table: "evento" */
  delete_evento_by_pk?: Maybe<Evento>;
  /** delete data from the table: "intervento" */
  delete_intervento?: Maybe<Intervento_Mutation_Response>;
  /** delete single row from the table: "intervento" */
  delete_intervento_by_pk?: Maybe<Intervento>;
  /** delete data from the table: "intervento_straordinario" */
  delete_intervento_straordinario?: Maybe<Intervento_Straordinario_Mutation_Response>;
  /** delete single row from the table: "intervento_straordinario" */
  delete_intervento_straordinario_by_pk?: Maybe<Intervento_Straordinario>;
  /** delete data from the table: "materiale_dissesto" */
  delete_materiale_dissesto?: Maybe<Materiale_Dissesto_Mutation_Response>;
  /** delete single row from the table: "materiale_dissesto" */
  delete_materiale_dissesto_by_pk?: Maybe<Materiale_Dissesto>;
  /** delete data from the table: "membro" */
  delete_membro?: Maybe<Membro_Mutation_Response>;
  /** delete single row from the table: "membro" */
  delete_membro_by_pk?: Maybe<Membro>;
  /** delete data from the table: "municipalita" */
  delete_municipalita?: Maybe<Municipalita_Mutation_Response>;
  /** delete single row from the table: "municipalita" */
  delete_municipalita_by_pk?: Maybe<Municipalita>;
  /** delete data from the table: "posizionamento_toponimo" */
  delete_posizionamento_toponimo?: Maybe<Posizionamento_Toponimo_Mutation_Response>;
  /** delete single row from the table: "posizionamento_toponimo" */
  delete_posizionamento_toponimo_by_pk?: Maybe<Posizionamento_Toponimo>;
  /** delete data from the table: "protocollo" */
  delete_protocollo?: Maybe<Protocollo_Mutation_Response>;
  /** delete single row from the table: "protocollo" */
  delete_protocollo_by_pk?: Maybe<Protocollo>;
  /** delete data from the table: "protocollo_destinatario" */
  delete_protocollo_destinatario?: Maybe<Protocollo_Destinatario_Mutation_Response>;
  /** delete single row from the table: "protocollo_destinatario" */
  delete_protocollo_destinatario_by_pk?: Maybe<Protocollo_Destinatario>;
  /** delete data from the table: "protocollo_destinatario_esterno" */
  delete_protocollo_destinatario_esterno?: Maybe<Protocollo_Destinatario_Esterno_Mutation_Response>;
  /** delete single row from the table: "protocollo_destinatario_esterno" */
  delete_protocollo_destinatario_esterno_by_pk?: Maybe<Protocollo_Destinatario_Esterno>;
  /** delete data from the table: "quartiere" */
  delete_quartiere?: Maybe<Quartiere_Mutation_Response>;
  /** delete single row from the table: "quartiere" */
  delete_quartiere_by_pk?: Maybe<Quartiere>;
  /** delete data from the table: "segnalazione" */
  delete_segnalazione?: Maybe<Segnalazione_Mutation_Response>;
  /** delete single row from the table: "segnalazione" */
  delete_segnalazione_by_pk?: Maybe<Segnalazione>;
  /** delete data from the table: "segnalazione_collegata" */
  delete_segnalazione_collegata?: Maybe<Segnalazione_Collegata_Mutation_Response>;
  /** delete single row from the table: "segnalazione_collegata" */
  delete_segnalazione_collegata_by_pk?: Maybe<Segnalazione_Collegata>;
  /** delete data from the table: "segnaletica_lasciata" */
  delete_segnaletica_lasciata?: Maybe<Segnaletica_Lasciata_Mutation_Response>;
  /** delete single row from the table: "segnaletica_lasciata" */
  delete_segnaletica_lasciata_by_pk?: Maybe<Segnaletica_Lasciata>;
  /** delete data from the table: "sostegno_ipi" */
  delete_sostegno_ipi?: Maybe<Sostegno_Ipi_Mutation_Response>;
  /** delete single row from the table: "sostegno_ipi" */
  delete_sostegno_ipi_by_pk?: Maybe<Sostegno_Ipi>;
  /** delete data from the table: "squadra" */
  delete_squadra?: Maybe<Squadra_Mutation_Response>;
  /** delete single row from the table: "squadra" */
  delete_squadra_by_pk?: Maybe<Squadra>;
  /** delete data from the table: "tecnico_referente" */
  delete_tecnico_referente?: Maybe<Tecnico_Referente_Mutation_Response>;
  /** delete single row from the table: "tecnico_referente" */
  delete_tecnico_referente_by_pk?: Maybe<Tecnico_Referente>;
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
  /** delete data from the table: "vecchia_squadra" */
  delete_vecchia_squadra?: Maybe<Vecchia_Squadra_Mutation_Response>;
  /** delete single row from the table: "vecchia_squadra" */
  delete_vecchia_squadra_by_pk?: Maybe<Vecchia_Squadra>;
  /** delete data from the table: "vecchio_quartiere" */
  delete_vecchio_quartiere?: Maybe<Vecchio_Quartiere_Mutation_Response>;
  /** delete single row from the table: "vecchio_quartiere" */
  delete_vecchio_quartiere_by_pk?: Maybe<Vecchio_Quartiere>;
  /** delete data from the table: "vecchio_toponimo" */
  delete_vecchio_toponimo?: Maybe<Vecchio_Toponimo_Mutation_Response>;
  /** delete single row from the table: "vecchio_toponimo" */
  delete_vecchio_toponimo_by_pk?: Maybe<Vecchio_Toponimo>;
  /** delete data from the table: "veicoli_impiegati" */
  delete_veicoli_impiegati?: Maybe<Veicoli_Impiegati_Mutation_Response>;
  /** delete single row from the table: "veicoli_impiegati" */
  delete_veicoli_impiegati_by_pk?: Maybe<Veicoli_Impiegati>;
  /** insert data into the table: "_condizioni_traffico" */
  insert__condizioni_traffico?: Maybe<_Condizioni_Traffico_Mutation_Response>;
  /** insert a single row into the table: "_condizioni_traffico" */
  insert__condizioni_traffico_one?: Maybe<_Condizioni_Traffico>;
  /** insert data into the table: "_forma_dissesto" */
  insert__forma_dissesto?: Maybe<_Forma_Dissesto_Mutation_Response>;
  /** insert a single row into the table: "_forma_dissesto" */
  insert__forma_dissesto_one?: Maybe<_Forma_Dissesto>;
  /** insert data into the table: "_giorni_trascorsi" */
  insert__giorni_trascorsi?: Maybe<_Giorni_Trascorsi_Mutation_Response>;
  /** insert a single row into the table: "_giorni_trascorsi" */
  insert__giorni_trascorsi_one?: Maybe<_Giorni_Trascorsi>;
  /** insert data into the table: "_materiale" */
  insert__materiale?: Maybe<_Materiale_Mutation_Response>;
  /** insert a single row into the table: "_materiale" */
  insert__materiale_one?: Maybe<_Materiale>;
  /** insert data into the table: "_priorita" */
  insert__priorita?: Maybe<_Priorita_Mutation_Response>;
  /** insert a single row into the table: "_priorita" */
  insert__priorita_one?: Maybe<_Priorita>;
  /** insert data into the table: "_sezione_protocollo" */
  insert__sezione_protocollo?: Maybe<_Sezione_Protocollo_Mutation_Response>;
  /** insert a single row into the table: "_sezione_protocollo" */
  insert__sezione_protocollo_one?: Maybe<_Sezione_Protocollo>;
  /** insert data into the table: "_specifica_posizionamento_toponimo" */
  insert__specifica_posizionamento_toponimo?: Maybe<_Specifica_Posizionamento_Toponimo_Mutation_Response>;
  /** insert a single row into the table: "_specifica_posizionamento_toponimo" */
  insert__specifica_posizionamento_toponimo_one?: Maybe<_Specifica_Posizionamento_Toponimo>;
  /** insert data into the table: "_stato_segnalazione" */
  insert__stato_segnalazione?: Maybe<_Stato_Segnalazione_Mutation_Response>;
  /** insert a single row into the table: "_stato_segnalazione" */
  insert__stato_segnalazione_one?: Maybe<_Stato_Segnalazione>;
  /** insert data into the table: "_tipologia_dissesto" */
  insert__tipologia_dissesto?: Maybe<_Tipologia_Dissesto_Mutation_Response>;
  /** insert a single row into the table: "_tipologia_dissesto" */
  insert__tipologia_dissesto_one?: Maybe<_Tipologia_Dissesto>;
  /** insert data into the table: "_tipologia_posizionamento_toponimo" */
  insert__tipologia_posizionamento_toponimo?: Maybe<_Tipologia_Posizionamento_Toponimo_Mutation_Response>;
  /** insert a single row into the table: "_tipologia_posizionamento_toponimo" */
  insert__tipologia_posizionamento_toponimo_one?: Maybe<_Tipologia_Posizionamento_Toponimo>;
  /** insert data into the table: "_titolo" */
  insert__titolo?: Maybe<_Titolo_Mutation_Response>;
  /** insert a single row into the table: "_titolo" */
  insert__titolo_one?: Maybe<_Titolo>;
  /** insert data into the table: "allegato" */
  insert_allegato?: Maybe<Allegato_Mutation_Response>;
  /** insert a single row into the table: "allegato" */
  insert_allegato_one?: Maybe<Allegato>;
  /** insert data into the table: "assegnazione_quartiere" */
  insert_assegnazione_quartiere?: Maybe<Assegnazione_Quartiere_Mutation_Response>;
  /** insert a single row into the table: "assegnazione_quartiere" */
  insert_assegnazione_quartiere_one?: Maybe<Assegnazione_Quartiere>;
  /** insert data into the table: "assegnazione_squadra" */
  insert_assegnazione_squadra?: Maybe<Assegnazione_Squadra_Mutation_Response>;
  /** insert a single row into the table: "assegnazione_squadra" */
  insert_assegnazione_squadra_one?: Maybe<Assegnazione_Squadra>;
  /** insert data into the table: "assegnazione_toponimo" */
  insert_assegnazione_toponimo?: Maybe<Assegnazione_Toponimo_Mutation_Response>;
  /** insert a single row into the table: "assegnazione_toponimo" */
  insert_assegnazione_toponimo_one?: Maybe<Assegnazione_Toponimo>;
  /** insert data into the table: "attrezzature_impiegate" */
  insert_attrezzature_impiegate?: Maybe<Attrezzature_Impiegate_Mutation_Response>;
  /** insert a single row into the table: "attrezzature_impiegate" */
  insert_attrezzature_impiegate_one?: Maybe<Attrezzature_Impiegate>;
  /** insert data into the table: "civico" */
  insert_civico?: Maybe<Civico_Mutation_Response>;
  /** insert a single row into the table: "civico" */
  insert_civico_one?: Maybe<Civico>;
  /** insert data into the table: "connessione_grafo" */
  insert_connessione_grafo?: Maybe<Connessione_Grafo_Mutation_Response>;
  /** insert a single row into the table: "connessione_grafo" */
  insert_connessione_grafo_one?: Maybe<Connessione_Grafo>;
  /** insert data into the table: "diario" */
  insert_diario?: Maybe<Diario_Mutation_Response>;
  /** insert a single row into the table: "diario" */
  insert_diario_one?: Maybe<Diario>;
  /** insert data into the table: "dissesto" */
  insert_dissesto?: Maybe<Dissesto_Mutation_Response>;
  /** insert a single row into the table: "dissesto" */
  insert_dissesto_one?: Maybe<Dissesto>;
  /** insert data into the table: "dug" */
  insert_dug?: Maybe<Dug_Mutation_Response>;
  /** insert a single row into the table: "dug" */
  insert_dug_one?: Maybe<Dug>;
  /** insert data into the table: "evento" */
  insert_evento?: Maybe<Evento_Mutation_Response>;
  /** insert a single row into the table: "evento" */
  insert_evento_one?: Maybe<Evento>;
  /** insert data into the table: "intervento" */
  insert_intervento?: Maybe<Intervento_Mutation_Response>;
  /** insert a single row into the table: "intervento" */
  insert_intervento_one?: Maybe<Intervento>;
  /** insert data into the table: "intervento_straordinario" */
  insert_intervento_straordinario?: Maybe<Intervento_Straordinario_Mutation_Response>;
  /** insert a single row into the table: "intervento_straordinario" */
  insert_intervento_straordinario_one?: Maybe<Intervento_Straordinario>;
  /** insert data into the table: "materiale_dissesto" */
  insert_materiale_dissesto?: Maybe<Materiale_Dissesto_Mutation_Response>;
  /** insert a single row into the table: "materiale_dissesto" */
  insert_materiale_dissesto_one?: Maybe<Materiale_Dissesto>;
  /** insert data into the table: "membro" */
  insert_membro?: Maybe<Membro_Mutation_Response>;
  /** insert a single row into the table: "membro" */
  insert_membro_one?: Maybe<Membro>;
  /** insert data into the table: "municipalita" */
  insert_municipalita?: Maybe<Municipalita_Mutation_Response>;
  /** insert a single row into the table: "municipalita" */
  insert_municipalita_one?: Maybe<Municipalita>;
  /** insert data into the table: "posizionamento_toponimo" */
  insert_posizionamento_toponimo?: Maybe<Posizionamento_Toponimo_Mutation_Response>;
  /** insert a single row into the table: "posizionamento_toponimo" */
  insert_posizionamento_toponimo_one?: Maybe<Posizionamento_Toponimo>;
  /** insert data into the table: "protocollo" */
  insert_protocollo?: Maybe<Protocollo_Mutation_Response>;
  /** insert data into the table: "protocollo_destinatario" */
  insert_protocollo_destinatario?: Maybe<Protocollo_Destinatario_Mutation_Response>;
  /** insert data into the table: "protocollo_destinatario_esterno" */
  insert_protocollo_destinatario_esterno?: Maybe<Protocollo_Destinatario_Esterno_Mutation_Response>;
  /** insert a single row into the table: "protocollo_destinatario_esterno" */
  insert_protocollo_destinatario_esterno_one?: Maybe<Protocollo_Destinatario_Esterno>;
  /** insert a single row into the table: "protocollo_destinatario" */
  insert_protocollo_destinatario_one?: Maybe<Protocollo_Destinatario>;
  /** insert a single row into the table: "protocollo" */
  insert_protocollo_one?: Maybe<Protocollo>;
  /** insert data into the table: "quartiere" */
  insert_quartiere?: Maybe<Quartiere_Mutation_Response>;
  /** insert a single row into the table: "quartiere" */
  insert_quartiere_one?: Maybe<Quartiere>;
  /** insert data into the table: "segnalazione" */
  insert_segnalazione?: Maybe<Segnalazione_Mutation_Response>;
  /** insert data into the table: "segnalazione_collegata" */
  insert_segnalazione_collegata?: Maybe<Segnalazione_Collegata_Mutation_Response>;
  /** insert a single row into the table: "segnalazione_collegata" */
  insert_segnalazione_collegata_one?: Maybe<Segnalazione_Collegata>;
  /** insert a single row into the table: "segnalazione" */
  insert_segnalazione_one?: Maybe<Segnalazione>;
  /** insert data into the table: "segnaletica_lasciata" */
  insert_segnaletica_lasciata?: Maybe<Segnaletica_Lasciata_Mutation_Response>;
  /** insert a single row into the table: "segnaletica_lasciata" */
  insert_segnaletica_lasciata_one?: Maybe<Segnaletica_Lasciata>;
  /** insert data into the table: "sostegno_ipi" */
  insert_sostegno_ipi?: Maybe<Sostegno_Ipi_Mutation_Response>;
  /** insert a single row into the table: "sostegno_ipi" */
  insert_sostegno_ipi_one?: Maybe<Sostegno_Ipi>;
  /** insert data into the table: "squadra" */
  insert_squadra?: Maybe<Squadra_Mutation_Response>;
  /** insert a single row into the table: "squadra" */
  insert_squadra_one?: Maybe<Squadra>;
  /** insert data into the table: "tecnico_referente" */
  insert_tecnico_referente?: Maybe<Tecnico_Referente_Mutation_Response>;
  /** insert a single row into the table: "tecnico_referente" */
  insert_tecnico_referente_one?: Maybe<Tecnico_Referente>;
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
  /** insert data into the table: "vecchia_squadra" */
  insert_vecchia_squadra?: Maybe<Vecchia_Squadra_Mutation_Response>;
  /** insert a single row into the table: "vecchia_squadra" */
  insert_vecchia_squadra_one?: Maybe<Vecchia_Squadra>;
  /** insert data into the table: "vecchio_quartiere" */
  insert_vecchio_quartiere?: Maybe<Vecchio_Quartiere_Mutation_Response>;
  /** insert a single row into the table: "vecchio_quartiere" */
  insert_vecchio_quartiere_one?: Maybe<Vecchio_Quartiere>;
  /** insert data into the table: "vecchio_toponimo" */
  insert_vecchio_toponimo?: Maybe<Vecchio_Toponimo_Mutation_Response>;
  /** insert a single row into the table: "vecchio_toponimo" */
  insert_vecchio_toponimo_one?: Maybe<Vecchio_Toponimo>;
  /** insert data into the table: "veicoli_impiegati" */
  insert_veicoli_impiegati?: Maybe<Veicoli_Impiegati_Mutation_Response>;
  /** insert a single row into the table: "veicoli_impiegati" */
  insert_veicoli_impiegati_one?: Maybe<Veicoli_Impiegati>;
  /** update data of the table: "_condizioni_traffico" */
  update__condizioni_traffico?: Maybe<_Condizioni_Traffico_Mutation_Response>;
  /** update single row of the table: "_condizioni_traffico" */
  update__condizioni_traffico_by_pk?: Maybe<_Condizioni_Traffico>;
  /** update data of the table: "_forma_dissesto" */
  update__forma_dissesto?: Maybe<_Forma_Dissesto_Mutation_Response>;
  /** update single row of the table: "_forma_dissesto" */
  update__forma_dissesto_by_pk?: Maybe<_Forma_Dissesto>;
  /** update data of the table: "_giorni_trascorsi" */
  update__giorni_trascorsi?: Maybe<_Giorni_Trascorsi_Mutation_Response>;
  /** update single row of the table: "_giorni_trascorsi" */
  update__giorni_trascorsi_by_pk?: Maybe<_Giorni_Trascorsi>;
  /** update data of the table: "_materiale" */
  update__materiale?: Maybe<_Materiale_Mutation_Response>;
  /** update single row of the table: "_materiale" */
  update__materiale_by_pk?: Maybe<_Materiale>;
  /** update data of the table: "_priorita" */
  update__priorita?: Maybe<_Priorita_Mutation_Response>;
  /** update single row of the table: "_priorita" */
  update__priorita_by_pk?: Maybe<_Priorita>;
  /** update data of the table: "_sezione_protocollo" */
  update__sezione_protocollo?: Maybe<_Sezione_Protocollo_Mutation_Response>;
  /** update single row of the table: "_sezione_protocollo" */
  update__sezione_protocollo_by_pk?: Maybe<_Sezione_Protocollo>;
  /** update data of the table: "_specifica_posizionamento_toponimo" */
  update__specifica_posizionamento_toponimo?: Maybe<_Specifica_Posizionamento_Toponimo_Mutation_Response>;
  /** update single row of the table: "_specifica_posizionamento_toponimo" */
  update__specifica_posizionamento_toponimo_by_pk?: Maybe<_Specifica_Posizionamento_Toponimo>;
  /** update data of the table: "_stato_segnalazione" */
  update__stato_segnalazione?: Maybe<_Stato_Segnalazione_Mutation_Response>;
  /** update single row of the table: "_stato_segnalazione" */
  update__stato_segnalazione_by_pk?: Maybe<_Stato_Segnalazione>;
  /** update data of the table: "_tipologia_dissesto" */
  update__tipologia_dissesto?: Maybe<_Tipologia_Dissesto_Mutation_Response>;
  /** update single row of the table: "_tipologia_dissesto" */
  update__tipologia_dissesto_by_pk?: Maybe<_Tipologia_Dissesto>;
  /** update data of the table: "_tipologia_posizionamento_toponimo" */
  update__tipologia_posizionamento_toponimo?: Maybe<_Tipologia_Posizionamento_Toponimo_Mutation_Response>;
  /** update single row of the table: "_tipologia_posizionamento_toponimo" */
  update__tipologia_posizionamento_toponimo_by_pk?: Maybe<_Tipologia_Posizionamento_Toponimo>;
  /** update data of the table: "_titolo" */
  update__titolo?: Maybe<_Titolo_Mutation_Response>;
  /** update single row of the table: "_titolo" */
  update__titolo_by_pk?: Maybe<_Titolo>;
  /** update data of the table: "allegato" */
  update_allegato?: Maybe<Allegato_Mutation_Response>;
  /** update single row of the table: "allegato" */
  update_allegato_by_pk?: Maybe<Allegato>;
  /** update data of the table: "assegnazione_quartiere" */
  update_assegnazione_quartiere?: Maybe<Assegnazione_Quartiere_Mutation_Response>;
  /** update single row of the table: "assegnazione_quartiere" */
  update_assegnazione_quartiere_by_pk?: Maybe<Assegnazione_Quartiere>;
  /** update data of the table: "assegnazione_squadra" */
  update_assegnazione_squadra?: Maybe<Assegnazione_Squadra_Mutation_Response>;
  /** update single row of the table: "assegnazione_squadra" */
  update_assegnazione_squadra_by_pk?: Maybe<Assegnazione_Squadra>;
  /** update data of the table: "assegnazione_toponimo" */
  update_assegnazione_toponimo?: Maybe<Assegnazione_Toponimo_Mutation_Response>;
  /** update single row of the table: "assegnazione_toponimo" */
  update_assegnazione_toponimo_by_pk?: Maybe<Assegnazione_Toponimo>;
  /** update data of the table: "attrezzature_impiegate" */
  update_attrezzature_impiegate?: Maybe<Attrezzature_Impiegate_Mutation_Response>;
  /** update single row of the table: "attrezzature_impiegate" */
  update_attrezzature_impiegate_by_pk?: Maybe<Attrezzature_Impiegate>;
  /** update data of the table: "civico" */
  update_civico?: Maybe<Civico_Mutation_Response>;
  /** update single row of the table: "civico" */
  update_civico_by_pk?: Maybe<Civico>;
  /** update data of the table: "connessione_grafo" */
  update_connessione_grafo?: Maybe<Connessione_Grafo_Mutation_Response>;
  /** update single row of the table: "connessione_grafo" */
  update_connessione_grafo_by_pk?: Maybe<Connessione_Grafo>;
  /** update data of the table: "diario" */
  update_diario?: Maybe<Diario_Mutation_Response>;
  /** update single row of the table: "diario" */
  update_diario_by_pk?: Maybe<Diario>;
  /** update data of the table: "dissesto" */
  update_dissesto?: Maybe<Dissesto_Mutation_Response>;
  /** update single row of the table: "dissesto" */
  update_dissesto_by_pk?: Maybe<Dissesto>;
  /** update data of the table: "dug" */
  update_dug?: Maybe<Dug_Mutation_Response>;
  /** update single row of the table: "dug" */
  update_dug_by_pk?: Maybe<Dug>;
  /** update data of the table: "evento" */
  update_evento?: Maybe<Evento_Mutation_Response>;
  /** update single row of the table: "evento" */
  update_evento_by_pk?: Maybe<Evento>;
  /** update data of the table: "intervento" */
  update_intervento?: Maybe<Intervento_Mutation_Response>;
  /** update single row of the table: "intervento" */
  update_intervento_by_pk?: Maybe<Intervento>;
  /** update data of the table: "intervento_straordinario" */
  update_intervento_straordinario?: Maybe<Intervento_Straordinario_Mutation_Response>;
  /** update single row of the table: "intervento_straordinario" */
  update_intervento_straordinario_by_pk?: Maybe<Intervento_Straordinario>;
  /** update data of the table: "materiale_dissesto" */
  update_materiale_dissesto?: Maybe<Materiale_Dissesto_Mutation_Response>;
  /** update single row of the table: "materiale_dissesto" */
  update_materiale_dissesto_by_pk?: Maybe<Materiale_Dissesto>;
  /** update data of the table: "membro" */
  update_membro?: Maybe<Membro_Mutation_Response>;
  /** update single row of the table: "membro" */
  update_membro_by_pk?: Maybe<Membro>;
  /** update data of the table: "municipalita" */
  update_municipalita?: Maybe<Municipalita_Mutation_Response>;
  /** update single row of the table: "municipalita" */
  update_municipalita_by_pk?: Maybe<Municipalita>;
  /** update data of the table: "posizionamento_toponimo" */
  update_posizionamento_toponimo?: Maybe<Posizionamento_Toponimo_Mutation_Response>;
  /** update single row of the table: "posizionamento_toponimo" */
  update_posizionamento_toponimo_by_pk?: Maybe<Posizionamento_Toponimo>;
  /** update data of the table: "protocollo" */
  update_protocollo?: Maybe<Protocollo_Mutation_Response>;
  /** update single row of the table: "protocollo" */
  update_protocollo_by_pk?: Maybe<Protocollo>;
  /** update data of the table: "protocollo_destinatario" */
  update_protocollo_destinatario?: Maybe<Protocollo_Destinatario_Mutation_Response>;
  /** update single row of the table: "protocollo_destinatario" */
  update_protocollo_destinatario_by_pk?: Maybe<Protocollo_Destinatario>;
  /** update data of the table: "protocollo_destinatario_esterno" */
  update_protocollo_destinatario_esterno?: Maybe<Protocollo_Destinatario_Esterno_Mutation_Response>;
  /** update single row of the table: "protocollo_destinatario_esterno" */
  update_protocollo_destinatario_esterno_by_pk?: Maybe<Protocollo_Destinatario_Esterno>;
  /** update data of the table: "quartiere" */
  update_quartiere?: Maybe<Quartiere_Mutation_Response>;
  /** update single row of the table: "quartiere" */
  update_quartiere_by_pk?: Maybe<Quartiere>;
  /** update data of the table: "segnalazione" */
  update_segnalazione?: Maybe<Segnalazione_Mutation_Response>;
  /** update single row of the table: "segnalazione" */
  update_segnalazione_by_pk?: Maybe<Segnalazione>;
  /** update data of the table: "segnalazione_collegata" */
  update_segnalazione_collegata?: Maybe<Segnalazione_Collegata_Mutation_Response>;
  /** update single row of the table: "segnalazione_collegata" */
  update_segnalazione_collegata_by_pk?: Maybe<Segnalazione_Collegata>;
  /** update data of the table: "segnaletica_lasciata" */
  update_segnaletica_lasciata?: Maybe<Segnaletica_Lasciata_Mutation_Response>;
  /** update single row of the table: "segnaletica_lasciata" */
  update_segnaletica_lasciata_by_pk?: Maybe<Segnaletica_Lasciata>;
  /** update data of the table: "sostegno_ipi" */
  update_sostegno_ipi?: Maybe<Sostegno_Ipi_Mutation_Response>;
  /** update single row of the table: "sostegno_ipi" */
  update_sostegno_ipi_by_pk?: Maybe<Sostegno_Ipi>;
  /** update data of the table: "squadra" */
  update_squadra?: Maybe<Squadra_Mutation_Response>;
  /** update single row of the table: "squadra" */
  update_squadra_by_pk?: Maybe<Squadra>;
  /** update data of the table: "tecnico_referente" */
  update_tecnico_referente?: Maybe<Tecnico_Referente_Mutation_Response>;
  /** update single row of the table: "tecnico_referente" */
  update_tecnico_referente_by_pk?: Maybe<Tecnico_Referente>;
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
  /** update data of the table: "vecchia_squadra" */
  update_vecchia_squadra?: Maybe<Vecchia_Squadra_Mutation_Response>;
  /** update single row of the table: "vecchia_squadra" */
  update_vecchia_squadra_by_pk?: Maybe<Vecchia_Squadra>;
  /** update data of the table: "vecchio_quartiere" */
  update_vecchio_quartiere?: Maybe<Vecchio_Quartiere_Mutation_Response>;
  /** update single row of the table: "vecchio_quartiere" */
  update_vecchio_quartiere_by_pk?: Maybe<Vecchio_Quartiere>;
  /** update data of the table: "vecchio_toponimo" */
  update_vecchio_toponimo?: Maybe<Vecchio_Toponimo_Mutation_Response>;
  /** update single row of the table: "vecchio_toponimo" */
  update_vecchio_toponimo_by_pk?: Maybe<Vecchio_Toponimo>;
  /** update data of the table: "veicoli_impiegati" */
  update_veicoli_impiegati?: Maybe<Veicoli_Impiegati_Mutation_Response>;
  /** update single row of the table: "veicoli_impiegati" */
  update_veicoli_impiegati_by_pk?: Maybe<Veicoli_Impiegati>;
};


/** mutation root */
export type Mutation_RootDelete__Condizioni_TrafficoArgs = {
  where: _Condizioni_Traffico_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete__Condizioni_Traffico_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete__Forma_DissestoArgs = {
  where: _Forma_Dissesto_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete__Forma_Dissesto_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete__Giorni_TrascorsiArgs = {
  where: _Giorni_Trascorsi_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete__Giorni_Trascorsi_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete__MaterialeArgs = {
  where: _Materiale_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete__Materiale_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete__PrioritaArgs = {
  where: _Priorita_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete__Priorita_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete__Sezione_ProtocolloArgs = {
  where: _Sezione_Protocollo_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete__Sezione_Protocollo_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete__Specifica_Posizionamento_ToponimoArgs = {
  where: _Specifica_Posizionamento_Toponimo_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete__Specifica_Posizionamento_Toponimo_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete__Stato_SegnalazioneArgs = {
  where: _Stato_Segnalazione_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete__Stato_Segnalazione_By_PkArgs = {
  text: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete__Tipologia_DissestoArgs = {
  where: _Tipologia_Dissesto_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete__Tipologia_Dissesto_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete__Tipologia_Posizionamento_ToponimoArgs = {
  where: _Tipologia_Posizionamento_Toponimo_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete__Tipologia_Posizionamento_Toponimo_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete__TitoloArgs = {
  where: _Titolo_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete__Titolo_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_AllegatoArgs = {
  where: Allegato_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Allegato_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Assegnazione_QuartiereArgs = {
  where: Assegnazione_Quartiere_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Assegnazione_Quartiere_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Assegnazione_SquadraArgs = {
  where: Assegnazione_Squadra_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Assegnazione_Squadra_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Assegnazione_ToponimoArgs = {
  where: Assegnazione_Toponimo_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Assegnazione_Toponimo_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Attrezzature_ImpiegateArgs = {
  where: Attrezzature_Impiegate_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Attrezzature_Impiegate_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_CivicoArgs = {
  where: Civico_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Civico_By_PkArgs = {
  id: Scalars['bigint'];
};


/** mutation root */
export type Mutation_RootDelete_Connessione_GrafoArgs = {
  where: Connessione_Grafo_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Connessione_Grafo_By_PkArgs = {
  id: Scalars['bigint'];
};


/** mutation root */
export type Mutation_RootDelete_DiarioArgs = {
  where: Diario_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Diario_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_DissestoArgs = {
  where: Dissesto_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Dissesto_By_PkArgs = {
  id: Scalars['Int'];
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
export type Mutation_RootDelete_EventoArgs = {
  where: Evento_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Evento_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_InterventoArgs = {
  where: Intervento_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Intervento_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Intervento_StraordinarioArgs = {
  where: Intervento_Straordinario_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Intervento_Straordinario_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Materiale_DissestoArgs = {
  where: Materiale_Dissesto_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Materiale_Dissesto_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_MembroArgs = {
  where: Membro_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Membro_By_PkArgs = {
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
export type Mutation_RootDelete_Posizionamento_ToponimoArgs = {
  where: Posizionamento_Toponimo_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Posizionamento_Toponimo_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_ProtocolloArgs = {
  where: Protocollo_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Protocollo_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Protocollo_DestinatarioArgs = {
  where: Protocollo_Destinatario_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Protocollo_Destinatario_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Protocollo_Destinatario_EsternoArgs = {
  where: Protocollo_Destinatario_Esterno_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Protocollo_Destinatario_Esterno_By_PkArgs = {
  id: Scalars['Int'];
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
export type Mutation_RootDelete_SegnalazioneArgs = {
  where: Segnalazione_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Segnalazione_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Segnalazione_CollegataArgs = {
  where: Segnalazione_Collegata_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Segnalazione_Collegata_By_PkArgs = {
  segnalazione_collegata_id: Scalars['Int'];
  segnalazione_id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Segnaletica_LasciataArgs = {
  where: Segnaletica_Lasciata_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Segnaletica_Lasciata_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Sostegno_IpiArgs = {
  where: Sostegno_Ipi_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Sostegno_Ipi_By_PkArgs = {
  id: Scalars['bigint'];
};


/** mutation root */
export type Mutation_RootDelete_SquadraArgs = {
  where: Squadra_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Squadra_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Tecnico_ReferenteArgs = {
  where: Tecnico_Referente_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Tecnico_Referente_By_PkArgs = {
  id: Scalars['Int'];
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
export type Mutation_RootDelete_Vecchia_SquadraArgs = {
  where: Vecchia_Squadra_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Vecchia_Squadra_By_PkArgs = {
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
export type Mutation_RootDelete_Veicoli_ImpiegatiArgs = {
  where: Veicoli_Impiegati_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Veicoli_Impiegati_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootInsert__Condizioni_TrafficoArgs = {
  objects: Array<_Condizioni_Traffico_Insert_Input>;
  on_conflict?: Maybe<_Condizioni_Traffico_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert__Condizioni_Traffico_OneArgs = {
  object: _Condizioni_Traffico_Insert_Input;
  on_conflict?: Maybe<_Condizioni_Traffico_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert__Forma_DissestoArgs = {
  objects: Array<_Forma_Dissesto_Insert_Input>;
  on_conflict?: Maybe<_Forma_Dissesto_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert__Forma_Dissesto_OneArgs = {
  object: _Forma_Dissesto_Insert_Input;
  on_conflict?: Maybe<_Forma_Dissesto_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert__Giorni_TrascorsiArgs = {
  objects: Array<_Giorni_Trascorsi_Insert_Input>;
  on_conflict?: Maybe<_Giorni_Trascorsi_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert__Giorni_Trascorsi_OneArgs = {
  object: _Giorni_Trascorsi_Insert_Input;
  on_conflict?: Maybe<_Giorni_Trascorsi_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert__MaterialeArgs = {
  objects: Array<_Materiale_Insert_Input>;
  on_conflict?: Maybe<_Materiale_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert__Materiale_OneArgs = {
  object: _Materiale_Insert_Input;
  on_conflict?: Maybe<_Materiale_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert__PrioritaArgs = {
  objects: Array<_Priorita_Insert_Input>;
  on_conflict?: Maybe<_Priorita_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert__Priorita_OneArgs = {
  object: _Priorita_Insert_Input;
  on_conflict?: Maybe<_Priorita_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert__Sezione_ProtocolloArgs = {
  objects: Array<_Sezione_Protocollo_Insert_Input>;
  on_conflict?: Maybe<_Sezione_Protocollo_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert__Sezione_Protocollo_OneArgs = {
  object: _Sezione_Protocollo_Insert_Input;
  on_conflict?: Maybe<_Sezione_Protocollo_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert__Specifica_Posizionamento_ToponimoArgs = {
  objects: Array<_Specifica_Posizionamento_Toponimo_Insert_Input>;
  on_conflict?: Maybe<_Specifica_Posizionamento_Toponimo_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert__Specifica_Posizionamento_Toponimo_OneArgs = {
  object: _Specifica_Posizionamento_Toponimo_Insert_Input;
  on_conflict?: Maybe<_Specifica_Posizionamento_Toponimo_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert__Stato_SegnalazioneArgs = {
  objects: Array<_Stato_Segnalazione_Insert_Input>;
  on_conflict?: Maybe<_Stato_Segnalazione_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert__Stato_Segnalazione_OneArgs = {
  object: _Stato_Segnalazione_Insert_Input;
  on_conflict?: Maybe<_Stato_Segnalazione_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert__Tipologia_DissestoArgs = {
  objects: Array<_Tipologia_Dissesto_Insert_Input>;
  on_conflict?: Maybe<_Tipologia_Dissesto_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert__Tipologia_Dissesto_OneArgs = {
  object: _Tipologia_Dissesto_Insert_Input;
  on_conflict?: Maybe<_Tipologia_Dissesto_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert__Tipologia_Posizionamento_ToponimoArgs = {
  objects: Array<_Tipologia_Posizionamento_Toponimo_Insert_Input>;
  on_conflict?: Maybe<_Tipologia_Posizionamento_Toponimo_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert__Tipologia_Posizionamento_Toponimo_OneArgs = {
  object: _Tipologia_Posizionamento_Toponimo_Insert_Input;
  on_conflict?: Maybe<_Tipologia_Posizionamento_Toponimo_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert__TitoloArgs = {
  objects: Array<_Titolo_Insert_Input>;
  on_conflict?: Maybe<_Titolo_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert__Titolo_OneArgs = {
  object: _Titolo_Insert_Input;
  on_conflict?: Maybe<_Titolo_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_AllegatoArgs = {
  objects: Array<Allegato_Insert_Input>;
  on_conflict?: Maybe<Allegato_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Allegato_OneArgs = {
  object: Allegato_Insert_Input;
  on_conflict?: Maybe<Allegato_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Assegnazione_QuartiereArgs = {
  objects: Array<Assegnazione_Quartiere_Insert_Input>;
  on_conflict?: Maybe<Assegnazione_Quartiere_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Assegnazione_Quartiere_OneArgs = {
  object: Assegnazione_Quartiere_Insert_Input;
  on_conflict?: Maybe<Assegnazione_Quartiere_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Assegnazione_SquadraArgs = {
  objects: Array<Assegnazione_Squadra_Insert_Input>;
  on_conflict?: Maybe<Assegnazione_Squadra_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Assegnazione_Squadra_OneArgs = {
  object: Assegnazione_Squadra_Insert_Input;
  on_conflict?: Maybe<Assegnazione_Squadra_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Assegnazione_ToponimoArgs = {
  objects: Array<Assegnazione_Toponimo_Insert_Input>;
  on_conflict?: Maybe<Assegnazione_Toponimo_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Assegnazione_Toponimo_OneArgs = {
  object: Assegnazione_Toponimo_Insert_Input;
  on_conflict?: Maybe<Assegnazione_Toponimo_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Attrezzature_ImpiegateArgs = {
  objects: Array<Attrezzature_Impiegate_Insert_Input>;
  on_conflict?: Maybe<Attrezzature_Impiegate_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Attrezzature_Impiegate_OneArgs = {
  object: Attrezzature_Impiegate_Insert_Input;
  on_conflict?: Maybe<Attrezzature_Impiegate_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_CivicoArgs = {
  objects: Array<Civico_Insert_Input>;
  on_conflict?: Maybe<Civico_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Civico_OneArgs = {
  object: Civico_Insert_Input;
  on_conflict?: Maybe<Civico_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Connessione_GrafoArgs = {
  objects: Array<Connessione_Grafo_Insert_Input>;
  on_conflict?: Maybe<Connessione_Grafo_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Connessione_Grafo_OneArgs = {
  object: Connessione_Grafo_Insert_Input;
  on_conflict?: Maybe<Connessione_Grafo_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_DiarioArgs = {
  objects: Array<Diario_Insert_Input>;
  on_conflict?: Maybe<Diario_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Diario_OneArgs = {
  object: Diario_Insert_Input;
  on_conflict?: Maybe<Diario_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_DissestoArgs = {
  objects: Array<Dissesto_Insert_Input>;
  on_conflict?: Maybe<Dissesto_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Dissesto_OneArgs = {
  object: Dissesto_Insert_Input;
  on_conflict?: Maybe<Dissesto_On_Conflict>;
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
export type Mutation_RootInsert_EventoArgs = {
  objects: Array<Evento_Insert_Input>;
  on_conflict?: Maybe<Evento_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Evento_OneArgs = {
  object: Evento_Insert_Input;
  on_conflict?: Maybe<Evento_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_InterventoArgs = {
  objects: Array<Intervento_Insert_Input>;
  on_conflict?: Maybe<Intervento_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Intervento_OneArgs = {
  object: Intervento_Insert_Input;
  on_conflict?: Maybe<Intervento_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Intervento_StraordinarioArgs = {
  objects: Array<Intervento_Straordinario_Insert_Input>;
  on_conflict?: Maybe<Intervento_Straordinario_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Intervento_Straordinario_OneArgs = {
  object: Intervento_Straordinario_Insert_Input;
  on_conflict?: Maybe<Intervento_Straordinario_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Materiale_DissestoArgs = {
  objects: Array<Materiale_Dissesto_Insert_Input>;
  on_conflict?: Maybe<Materiale_Dissesto_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Materiale_Dissesto_OneArgs = {
  object: Materiale_Dissesto_Insert_Input;
  on_conflict?: Maybe<Materiale_Dissesto_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_MembroArgs = {
  objects: Array<Membro_Insert_Input>;
  on_conflict?: Maybe<Membro_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Membro_OneArgs = {
  object: Membro_Insert_Input;
  on_conflict?: Maybe<Membro_On_Conflict>;
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
export type Mutation_RootInsert_Posizionamento_ToponimoArgs = {
  objects: Array<Posizionamento_Toponimo_Insert_Input>;
  on_conflict?: Maybe<Posizionamento_Toponimo_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Posizionamento_Toponimo_OneArgs = {
  object: Posizionamento_Toponimo_Insert_Input;
  on_conflict?: Maybe<Posizionamento_Toponimo_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ProtocolloArgs = {
  objects: Array<Protocollo_Insert_Input>;
  on_conflict?: Maybe<Protocollo_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Protocollo_DestinatarioArgs = {
  objects: Array<Protocollo_Destinatario_Insert_Input>;
  on_conflict?: Maybe<Protocollo_Destinatario_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Protocollo_Destinatario_EsternoArgs = {
  objects: Array<Protocollo_Destinatario_Esterno_Insert_Input>;
  on_conflict?: Maybe<Protocollo_Destinatario_Esterno_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Protocollo_Destinatario_Esterno_OneArgs = {
  object: Protocollo_Destinatario_Esterno_Insert_Input;
  on_conflict?: Maybe<Protocollo_Destinatario_Esterno_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Protocollo_Destinatario_OneArgs = {
  object: Protocollo_Destinatario_Insert_Input;
  on_conflict?: Maybe<Protocollo_Destinatario_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Protocollo_OneArgs = {
  object: Protocollo_Insert_Input;
  on_conflict?: Maybe<Protocollo_On_Conflict>;
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
export type Mutation_RootInsert_SegnalazioneArgs = {
  objects: Array<Segnalazione_Insert_Input>;
  on_conflict?: Maybe<Segnalazione_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Segnalazione_CollegataArgs = {
  objects: Array<Segnalazione_Collegata_Insert_Input>;
  on_conflict?: Maybe<Segnalazione_Collegata_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Segnalazione_Collegata_OneArgs = {
  object: Segnalazione_Collegata_Insert_Input;
  on_conflict?: Maybe<Segnalazione_Collegata_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Segnalazione_OneArgs = {
  object: Segnalazione_Insert_Input;
  on_conflict?: Maybe<Segnalazione_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Segnaletica_LasciataArgs = {
  objects: Array<Segnaletica_Lasciata_Insert_Input>;
  on_conflict?: Maybe<Segnaletica_Lasciata_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Segnaletica_Lasciata_OneArgs = {
  object: Segnaletica_Lasciata_Insert_Input;
  on_conflict?: Maybe<Segnaletica_Lasciata_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Sostegno_IpiArgs = {
  objects: Array<Sostegno_Ipi_Insert_Input>;
  on_conflict?: Maybe<Sostegno_Ipi_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Sostegno_Ipi_OneArgs = {
  object: Sostegno_Ipi_Insert_Input;
  on_conflict?: Maybe<Sostegno_Ipi_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_SquadraArgs = {
  objects: Array<Squadra_Insert_Input>;
  on_conflict?: Maybe<Squadra_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Squadra_OneArgs = {
  object: Squadra_Insert_Input;
  on_conflict?: Maybe<Squadra_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Tecnico_ReferenteArgs = {
  objects: Array<Tecnico_Referente_Insert_Input>;
  on_conflict?: Maybe<Tecnico_Referente_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Tecnico_Referente_OneArgs = {
  object: Tecnico_Referente_Insert_Input;
  on_conflict?: Maybe<Tecnico_Referente_On_Conflict>;
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
export type Mutation_RootInsert_Vecchia_SquadraArgs = {
  objects: Array<Vecchia_Squadra_Insert_Input>;
  on_conflict?: Maybe<Vecchia_Squadra_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Vecchia_Squadra_OneArgs = {
  object: Vecchia_Squadra_Insert_Input;
  on_conflict?: Maybe<Vecchia_Squadra_On_Conflict>;
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
export type Mutation_RootInsert_Veicoli_ImpiegatiArgs = {
  objects: Array<Veicoli_Impiegati_Insert_Input>;
  on_conflict?: Maybe<Veicoli_Impiegati_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Veicoli_Impiegati_OneArgs = {
  object: Veicoli_Impiegati_Insert_Input;
  on_conflict?: Maybe<Veicoli_Impiegati_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate__Condizioni_TrafficoArgs = {
  _inc?: Maybe<_Condizioni_Traffico_Inc_Input>;
  _set?: Maybe<_Condizioni_Traffico_Set_Input>;
  where: _Condizioni_Traffico_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate__Condizioni_Traffico_By_PkArgs = {
  _inc?: Maybe<_Condizioni_Traffico_Inc_Input>;
  _set?: Maybe<_Condizioni_Traffico_Set_Input>;
  pk_columns: _Condizioni_Traffico_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate__Forma_DissestoArgs = {
  _inc?: Maybe<_Forma_Dissesto_Inc_Input>;
  _set?: Maybe<_Forma_Dissesto_Set_Input>;
  where: _Forma_Dissesto_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate__Forma_Dissesto_By_PkArgs = {
  _inc?: Maybe<_Forma_Dissesto_Inc_Input>;
  _set?: Maybe<_Forma_Dissesto_Set_Input>;
  pk_columns: _Forma_Dissesto_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate__Giorni_TrascorsiArgs = {
  _inc?: Maybe<_Giorni_Trascorsi_Inc_Input>;
  _set?: Maybe<_Giorni_Trascorsi_Set_Input>;
  where: _Giorni_Trascorsi_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate__Giorni_Trascorsi_By_PkArgs = {
  _inc?: Maybe<_Giorni_Trascorsi_Inc_Input>;
  _set?: Maybe<_Giorni_Trascorsi_Set_Input>;
  pk_columns: _Giorni_Trascorsi_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate__MaterialeArgs = {
  _inc?: Maybe<_Materiale_Inc_Input>;
  _set?: Maybe<_Materiale_Set_Input>;
  where: _Materiale_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate__Materiale_By_PkArgs = {
  _inc?: Maybe<_Materiale_Inc_Input>;
  _set?: Maybe<_Materiale_Set_Input>;
  pk_columns: _Materiale_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate__PrioritaArgs = {
  _inc?: Maybe<_Priorita_Inc_Input>;
  _set?: Maybe<_Priorita_Set_Input>;
  where: _Priorita_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate__Priorita_By_PkArgs = {
  _inc?: Maybe<_Priorita_Inc_Input>;
  _set?: Maybe<_Priorita_Set_Input>;
  pk_columns: _Priorita_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate__Sezione_ProtocolloArgs = {
  _inc?: Maybe<_Sezione_Protocollo_Inc_Input>;
  _set?: Maybe<_Sezione_Protocollo_Set_Input>;
  where: _Sezione_Protocollo_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate__Sezione_Protocollo_By_PkArgs = {
  _inc?: Maybe<_Sezione_Protocollo_Inc_Input>;
  _set?: Maybe<_Sezione_Protocollo_Set_Input>;
  pk_columns: _Sezione_Protocollo_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate__Specifica_Posizionamento_ToponimoArgs = {
  _inc?: Maybe<_Specifica_Posizionamento_Toponimo_Inc_Input>;
  _set?: Maybe<_Specifica_Posizionamento_Toponimo_Set_Input>;
  where: _Specifica_Posizionamento_Toponimo_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate__Specifica_Posizionamento_Toponimo_By_PkArgs = {
  _inc?: Maybe<_Specifica_Posizionamento_Toponimo_Inc_Input>;
  _set?: Maybe<_Specifica_Posizionamento_Toponimo_Set_Input>;
  pk_columns: _Specifica_Posizionamento_Toponimo_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate__Stato_SegnalazioneArgs = {
  _set?: Maybe<_Stato_Segnalazione_Set_Input>;
  where: _Stato_Segnalazione_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate__Stato_Segnalazione_By_PkArgs = {
  _set?: Maybe<_Stato_Segnalazione_Set_Input>;
  pk_columns: _Stato_Segnalazione_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate__Tipologia_DissestoArgs = {
  _inc?: Maybe<_Tipologia_Dissesto_Inc_Input>;
  _set?: Maybe<_Tipologia_Dissesto_Set_Input>;
  where: _Tipologia_Dissesto_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate__Tipologia_Dissesto_By_PkArgs = {
  _inc?: Maybe<_Tipologia_Dissesto_Inc_Input>;
  _set?: Maybe<_Tipologia_Dissesto_Set_Input>;
  pk_columns: _Tipologia_Dissesto_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate__Tipologia_Posizionamento_ToponimoArgs = {
  _inc?: Maybe<_Tipologia_Posizionamento_Toponimo_Inc_Input>;
  _set?: Maybe<_Tipologia_Posizionamento_Toponimo_Set_Input>;
  where: _Tipologia_Posizionamento_Toponimo_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate__Tipologia_Posizionamento_Toponimo_By_PkArgs = {
  _inc?: Maybe<_Tipologia_Posizionamento_Toponimo_Inc_Input>;
  _set?: Maybe<_Tipologia_Posizionamento_Toponimo_Set_Input>;
  pk_columns: _Tipologia_Posizionamento_Toponimo_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate__TitoloArgs = {
  _inc?: Maybe<_Titolo_Inc_Input>;
  _set?: Maybe<_Titolo_Set_Input>;
  where: _Titolo_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate__Titolo_By_PkArgs = {
  _inc?: Maybe<_Titolo_Inc_Input>;
  _set?: Maybe<_Titolo_Set_Input>;
  pk_columns: _Titolo_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_AllegatoArgs = {
  _inc?: Maybe<Allegato_Inc_Input>;
  _set?: Maybe<Allegato_Set_Input>;
  where: Allegato_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Allegato_By_PkArgs = {
  _inc?: Maybe<Allegato_Inc_Input>;
  _set?: Maybe<Allegato_Set_Input>;
  pk_columns: Allegato_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Assegnazione_QuartiereArgs = {
  _inc?: Maybe<Assegnazione_Quartiere_Inc_Input>;
  _set?: Maybe<Assegnazione_Quartiere_Set_Input>;
  where: Assegnazione_Quartiere_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Assegnazione_Quartiere_By_PkArgs = {
  _inc?: Maybe<Assegnazione_Quartiere_Inc_Input>;
  _set?: Maybe<Assegnazione_Quartiere_Set_Input>;
  pk_columns: Assegnazione_Quartiere_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Assegnazione_SquadraArgs = {
  _inc?: Maybe<Assegnazione_Squadra_Inc_Input>;
  _set?: Maybe<Assegnazione_Squadra_Set_Input>;
  where: Assegnazione_Squadra_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Assegnazione_Squadra_By_PkArgs = {
  _inc?: Maybe<Assegnazione_Squadra_Inc_Input>;
  _set?: Maybe<Assegnazione_Squadra_Set_Input>;
  pk_columns: Assegnazione_Squadra_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Assegnazione_ToponimoArgs = {
  _inc?: Maybe<Assegnazione_Toponimo_Inc_Input>;
  _set?: Maybe<Assegnazione_Toponimo_Set_Input>;
  where: Assegnazione_Toponimo_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Assegnazione_Toponimo_By_PkArgs = {
  _inc?: Maybe<Assegnazione_Toponimo_Inc_Input>;
  _set?: Maybe<Assegnazione_Toponimo_Set_Input>;
  pk_columns: Assegnazione_Toponimo_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Attrezzature_ImpiegateArgs = {
  _inc?: Maybe<Attrezzature_Impiegate_Inc_Input>;
  _set?: Maybe<Attrezzature_Impiegate_Set_Input>;
  where: Attrezzature_Impiegate_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Attrezzature_Impiegate_By_PkArgs = {
  _inc?: Maybe<Attrezzature_Impiegate_Inc_Input>;
  _set?: Maybe<Attrezzature_Impiegate_Set_Input>;
  pk_columns: Attrezzature_Impiegate_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_CivicoArgs = {
  _inc?: Maybe<Civico_Inc_Input>;
  _set?: Maybe<Civico_Set_Input>;
  where: Civico_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Civico_By_PkArgs = {
  _inc?: Maybe<Civico_Inc_Input>;
  _set?: Maybe<Civico_Set_Input>;
  pk_columns: Civico_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Connessione_GrafoArgs = {
  _inc?: Maybe<Connessione_Grafo_Inc_Input>;
  _set?: Maybe<Connessione_Grafo_Set_Input>;
  where: Connessione_Grafo_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Connessione_Grafo_By_PkArgs = {
  _inc?: Maybe<Connessione_Grafo_Inc_Input>;
  _set?: Maybe<Connessione_Grafo_Set_Input>;
  pk_columns: Connessione_Grafo_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_DiarioArgs = {
  _append?: Maybe<Diario_Append_Input>;
  _delete_at_path?: Maybe<Diario_Delete_At_Path_Input>;
  _delete_elem?: Maybe<Diario_Delete_Elem_Input>;
  _delete_key?: Maybe<Diario_Delete_Key_Input>;
  _inc?: Maybe<Diario_Inc_Input>;
  _prepend?: Maybe<Diario_Prepend_Input>;
  _set?: Maybe<Diario_Set_Input>;
  where: Diario_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Diario_By_PkArgs = {
  _append?: Maybe<Diario_Append_Input>;
  _delete_at_path?: Maybe<Diario_Delete_At_Path_Input>;
  _delete_elem?: Maybe<Diario_Delete_Elem_Input>;
  _delete_key?: Maybe<Diario_Delete_Key_Input>;
  _inc?: Maybe<Diario_Inc_Input>;
  _prepend?: Maybe<Diario_Prepend_Input>;
  _set?: Maybe<Diario_Set_Input>;
  pk_columns: Diario_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_DissestoArgs = {
  _inc?: Maybe<Dissesto_Inc_Input>;
  _set?: Maybe<Dissesto_Set_Input>;
  where: Dissesto_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Dissesto_By_PkArgs = {
  _inc?: Maybe<Dissesto_Inc_Input>;
  _set?: Maybe<Dissesto_Set_Input>;
  pk_columns: Dissesto_Pk_Columns_Input;
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
export type Mutation_RootUpdate_EventoArgs = {
  _inc?: Maybe<Evento_Inc_Input>;
  _set?: Maybe<Evento_Set_Input>;
  where: Evento_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Evento_By_PkArgs = {
  _inc?: Maybe<Evento_Inc_Input>;
  _set?: Maybe<Evento_Set_Input>;
  pk_columns: Evento_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_InterventoArgs = {
  _inc?: Maybe<Intervento_Inc_Input>;
  _set?: Maybe<Intervento_Set_Input>;
  where: Intervento_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Intervento_By_PkArgs = {
  _inc?: Maybe<Intervento_Inc_Input>;
  _set?: Maybe<Intervento_Set_Input>;
  pk_columns: Intervento_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Intervento_StraordinarioArgs = {
  _append?: Maybe<Intervento_Straordinario_Append_Input>;
  _delete_at_path?: Maybe<Intervento_Straordinario_Delete_At_Path_Input>;
  _delete_elem?: Maybe<Intervento_Straordinario_Delete_Elem_Input>;
  _delete_key?: Maybe<Intervento_Straordinario_Delete_Key_Input>;
  _inc?: Maybe<Intervento_Straordinario_Inc_Input>;
  _prepend?: Maybe<Intervento_Straordinario_Prepend_Input>;
  _set?: Maybe<Intervento_Straordinario_Set_Input>;
  where: Intervento_Straordinario_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Intervento_Straordinario_By_PkArgs = {
  _append?: Maybe<Intervento_Straordinario_Append_Input>;
  _delete_at_path?: Maybe<Intervento_Straordinario_Delete_At_Path_Input>;
  _delete_elem?: Maybe<Intervento_Straordinario_Delete_Elem_Input>;
  _delete_key?: Maybe<Intervento_Straordinario_Delete_Key_Input>;
  _inc?: Maybe<Intervento_Straordinario_Inc_Input>;
  _prepend?: Maybe<Intervento_Straordinario_Prepend_Input>;
  _set?: Maybe<Intervento_Straordinario_Set_Input>;
  pk_columns: Intervento_Straordinario_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Materiale_DissestoArgs = {
  _inc?: Maybe<Materiale_Dissesto_Inc_Input>;
  _set?: Maybe<Materiale_Dissesto_Set_Input>;
  where: Materiale_Dissesto_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Materiale_Dissesto_By_PkArgs = {
  _inc?: Maybe<Materiale_Dissesto_Inc_Input>;
  _set?: Maybe<Materiale_Dissesto_Set_Input>;
  pk_columns: Materiale_Dissesto_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_MembroArgs = {
  _inc?: Maybe<Membro_Inc_Input>;
  _set?: Maybe<Membro_Set_Input>;
  where: Membro_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Membro_By_PkArgs = {
  _inc?: Maybe<Membro_Inc_Input>;
  _set?: Maybe<Membro_Set_Input>;
  pk_columns: Membro_Pk_Columns_Input;
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
export type Mutation_RootUpdate_Posizionamento_ToponimoArgs = {
  _inc?: Maybe<Posizionamento_Toponimo_Inc_Input>;
  _set?: Maybe<Posizionamento_Toponimo_Set_Input>;
  where: Posizionamento_Toponimo_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Posizionamento_Toponimo_By_PkArgs = {
  _inc?: Maybe<Posizionamento_Toponimo_Inc_Input>;
  _set?: Maybe<Posizionamento_Toponimo_Set_Input>;
  pk_columns: Posizionamento_Toponimo_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_ProtocolloArgs = {
  _inc?: Maybe<Protocollo_Inc_Input>;
  _set?: Maybe<Protocollo_Set_Input>;
  where: Protocollo_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Protocollo_By_PkArgs = {
  _inc?: Maybe<Protocollo_Inc_Input>;
  _set?: Maybe<Protocollo_Set_Input>;
  pk_columns: Protocollo_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Protocollo_DestinatarioArgs = {
  _inc?: Maybe<Protocollo_Destinatario_Inc_Input>;
  _set?: Maybe<Protocollo_Destinatario_Set_Input>;
  where: Protocollo_Destinatario_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Protocollo_Destinatario_By_PkArgs = {
  _inc?: Maybe<Protocollo_Destinatario_Inc_Input>;
  _set?: Maybe<Protocollo_Destinatario_Set_Input>;
  pk_columns: Protocollo_Destinatario_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Protocollo_Destinatario_EsternoArgs = {
  _inc?: Maybe<Protocollo_Destinatario_Esterno_Inc_Input>;
  _set?: Maybe<Protocollo_Destinatario_Esterno_Set_Input>;
  where: Protocollo_Destinatario_Esterno_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Protocollo_Destinatario_Esterno_By_PkArgs = {
  _inc?: Maybe<Protocollo_Destinatario_Esterno_Inc_Input>;
  _set?: Maybe<Protocollo_Destinatario_Esterno_Set_Input>;
  pk_columns: Protocollo_Destinatario_Esterno_Pk_Columns_Input;
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
export type Mutation_RootUpdate_SegnalazioneArgs = {
  _append?: Maybe<Segnalazione_Append_Input>;
  _delete_at_path?: Maybe<Segnalazione_Delete_At_Path_Input>;
  _delete_elem?: Maybe<Segnalazione_Delete_Elem_Input>;
  _delete_key?: Maybe<Segnalazione_Delete_Key_Input>;
  _inc?: Maybe<Segnalazione_Inc_Input>;
  _prepend?: Maybe<Segnalazione_Prepend_Input>;
  _set?: Maybe<Segnalazione_Set_Input>;
  where: Segnalazione_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Segnalazione_By_PkArgs = {
  _append?: Maybe<Segnalazione_Append_Input>;
  _delete_at_path?: Maybe<Segnalazione_Delete_At_Path_Input>;
  _delete_elem?: Maybe<Segnalazione_Delete_Elem_Input>;
  _delete_key?: Maybe<Segnalazione_Delete_Key_Input>;
  _inc?: Maybe<Segnalazione_Inc_Input>;
  _prepend?: Maybe<Segnalazione_Prepend_Input>;
  _set?: Maybe<Segnalazione_Set_Input>;
  pk_columns: Segnalazione_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Segnalazione_CollegataArgs = {
  _inc?: Maybe<Segnalazione_Collegata_Inc_Input>;
  _set?: Maybe<Segnalazione_Collegata_Set_Input>;
  where: Segnalazione_Collegata_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Segnalazione_Collegata_By_PkArgs = {
  _inc?: Maybe<Segnalazione_Collegata_Inc_Input>;
  _set?: Maybe<Segnalazione_Collegata_Set_Input>;
  pk_columns: Segnalazione_Collegata_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Segnaletica_LasciataArgs = {
  _inc?: Maybe<Segnaletica_Lasciata_Inc_Input>;
  _set?: Maybe<Segnaletica_Lasciata_Set_Input>;
  where: Segnaletica_Lasciata_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Segnaletica_Lasciata_By_PkArgs = {
  _inc?: Maybe<Segnaletica_Lasciata_Inc_Input>;
  _set?: Maybe<Segnaletica_Lasciata_Set_Input>;
  pk_columns: Segnaletica_Lasciata_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Sostegno_IpiArgs = {
  _inc?: Maybe<Sostegno_Ipi_Inc_Input>;
  _set?: Maybe<Sostegno_Ipi_Set_Input>;
  where: Sostegno_Ipi_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Sostegno_Ipi_By_PkArgs = {
  _inc?: Maybe<Sostegno_Ipi_Inc_Input>;
  _set?: Maybe<Sostegno_Ipi_Set_Input>;
  pk_columns: Sostegno_Ipi_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_SquadraArgs = {
  _inc?: Maybe<Squadra_Inc_Input>;
  _set?: Maybe<Squadra_Set_Input>;
  where: Squadra_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Squadra_By_PkArgs = {
  _inc?: Maybe<Squadra_Inc_Input>;
  _set?: Maybe<Squadra_Set_Input>;
  pk_columns: Squadra_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Tecnico_ReferenteArgs = {
  _inc?: Maybe<Tecnico_Referente_Inc_Input>;
  _set?: Maybe<Tecnico_Referente_Set_Input>;
  where: Tecnico_Referente_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Tecnico_Referente_By_PkArgs = {
  _inc?: Maybe<Tecnico_Referente_Inc_Input>;
  _set?: Maybe<Tecnico_Referente_Set_Input>;
  pk_columns: Tecnico_Referente_Pk_Columns_Input;
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
export type Mutation_RootUpdate_Vecchia_SquadraArgs = {
  _inc?: Maybe<Vecchia_Squadra_Inc_Input>;
  _set?: Maybe<Vecchia_Squadra_Set_Input>;
  where: Vecchia_Squadra_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Vecchia_Squadra_By_PkArgs = {
  _inc?: Maybe<Vecchia_Squadra_Inc_Input>;
  _set?: Maybe<Vecchia_Squadra_Set_Input>;
  pk_columns: Vecchia_Squadra_Pk_Columns_Input;
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


/** mutation root */
export type Mutation_RootUpdate_Veicoli_ImpiegatiArgs = {
  _inc?: Maybe<Veicoli_Impiegati_Inc_Input>;
  _set?: Maybe<Veicoli_Impiegati_Set_Input>;
  where: Veicoli_Impiegati_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Veicoli_Impiegati_By_PkArgs = {
  _inc?: Maybe<Veicoli_Impiegati_Inc_Input>;
  _set?: Maybe<Veicoli_Impiegati_Set_Input>;
  pk_columns: Veicoli_Impiegati_Pk_Columns_Input;
};

/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
  _eq?: Maybe<Scalars['numeric']>;
  _gt?: Maybe<Scalars['numeric']>;
  _gte?: Maybe<Scalars['numeric']>;
  _in?: Maybe<Array<Scalars['numeric']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['numeric']>;
  _lte?: Maybe<Scalars['numeric']>;
  _neq?: Maybe<Scalars['numeric']>;
  _nin?: Maybe<Array<Scalars['numeric']>>;
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

/** columns and relationships of "posizionamento_toponimo" */
export type Posizionamento_Toponimo = {
  __typename?: 'posizionamento_toponimo';
  civico?: Maybe<Scalars['String']>;
  connessione?: Maybe<Scalars['String']>;
  created_at: Scalars['timestamptz'];
  geoloc?: Maybe<Scalars['geography']>;
  id: Scalars['Int'];
  ipi?: Maybe<Scalars['String']>;
  km?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
  /** An object relationship */
  specifica?: Maybe<_Specifica_Posizionamento_Toponimo>;
  specifica_id?: Maybe<Scalars['Int']>;
  /** An object relationship */
  tipologia?: Maybe<_Tipologia_Posizionamento_Toponimo>;
  tipologia_id?: Maybe<Scalars['Int']>;
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "posizionamento_toponimo" */
export type Posizionamento_Toponimo_Aggregate = {
  __typename?: 'posizionamento_toponimo_aggregate';
  aggregate?: Maybe<Posizionamento_Toponimo_Aggregate_Fields>;
  nodes: Array<Posizionamento_Toponimo>;
};

/** aggregate fields of "posizionamento_toponimo" */
export type Posizionamento_Toponimo_Aggregate_Fields = {
  __typename?: 'posizionamento_toponimo_aggregate_fields';
  avg?: Maybe<Posizionamento_Toponimo_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Posizionamento_Toponimo_Max_Fields>;
  min?: Maybe<Posizionamento_Toponimo_Min_Fields>;
  stddev?: Maybe<Posizionamento_Toponimo_Stddev_Fields>;
  stddev_pop?: Maybe<Posizionamento_Toponimo_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Posizionamento_Toponimo_Stddev_Samp_Fields>;
  sum?: Maybe<Posizionamento_Toponimo_Sum_Fields>;
  var_pop?: Maybe<Posizionamento_Toponimo_Var_Pop_Fields>;
  var_samp?: Maybe<Posizionamento_Toponimo_Var_Samp_Fields>;
  variance?: Maybe<Posizionamento_Toponimo_Variance_Fields>;
};


/** aggregate fields of "posizionamento_toponimo" */
export type Posizionamento_Toponimo_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Posizionamento_Toponimo_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Posizionamento_Toponimo_Avg_Fields = {
  __typename?: 'posizionamento_toponimo_avg_fields';
  id?: Maybe<Scalars['Float']>;
  specifica_id?: Maybe<Scalars['Float']>;
  tipologia_id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "posizionamento_toponimo". All fields are combined with a logical 'AND'. */
export type Posizionamento_Toponimo_Bool_Exp = {
  _and?: Maybe<Array<Posizionamento_Toponimo_Bool_Exp>>;
  _not?: Maybe<Posizionamento_Toponimo_Bool_Exp>;
  _or?: Maybe<Array<Posizionamento_Toponimo_Bool_Exp>>;
  civico?: Maybe<String_Comparison_Exp>;
  connessione?: Maybe<String_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  geoloc?: Maybe<Geography_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  ipi?: Maybe<String_Comparison_Exp>;
  km?: Maybe<String_Comparison_Exp>;
  note?: Maybe<String_Comparison_Exp>;
  specifica?: Maybe<_Specifica_Posizionamento_Toponimo_Bool_Exp>;
  specifica_id?: Maybe<Int_Comparison_Exp>;
  tipologia?: Maybe<_Tipologia_Posizionamento_Toponimo_Bool_Exp>;
  tipologia_id?: Maybe<Int_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "posizionamento_toponimo" */
export enum Posizionamento_Toponimo_Constraint {
  /** unique or primary key constraint */
  PosizionamentoToponimoPkey = 'posizionamento_toponimo_pkey'
}

/** input type for incrementing numeric columns in table "posizionamento_toponimo" */
export type Posizionamento_Toponimo_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  specifica_id?: Maybe<Scalars['Int']>;
  tipologia_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "posizionamento_toponimo" */
export type Posizionamento_Toponimo_Insert_Input = {
  civico?: Maybe<Scalars['String']>;
  connessione?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  geoloc?: Maybe<Scalars['geography']>;
  id?: Maybe<Scalars['Int']>;
  ipi?: Maybe<Scalars['String']>;
  km?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
  specifica?: Maybe<_Specifica_Posizionamento_Toponimo_Obj_Rel_Insert_Input>;
  specifica_id?: Maybe<Scalars['Int']>;
  tipologia?: Maybe<_Tipologia_Posizionamento_Toponimo_Obj_Rel_Insert_Input>;
  tipologia_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Posizionamento_Toponimo_Max_Fields = {
  __typename?: 'posizionamento_toponimo_max_fields';
  civico?: Maybe<Scalars['String']>;
  connessione?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  ipi?: Maybe<Scalars['String']>;
  km?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
  specifica_id?: Maybe<Scalars['Int']>;
  tipologia_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Posizionamento_Toponimo_Min_Fields = {
  __typename?: 'posizionamento_toponimo_min_fields';
  civico?: Maybe<Scalars['String']>;
  connessione?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  ipi?: Maybe<Scalars['String']>;
  km?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
  specifica_id?: Maybe<Scalars['Int']>;
  tipologia_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "posizionamento_toponimo" */
export type Posizionamento_Toponimo_Mutation_Response = {
  __typename?: 'posizionamento_toponimo_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Posizionamento_Toponimo>;
};

/** input type for inserting object relation for remote table "posizionamento_toponimo" */
export type Posizionamento_Toponimo_Obj_Rel_Insert_Input = {
  data: Posizionamento_Toponimo_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Posizionamento_Toponimo_On_Conflict>;
};

/** on conflict condition type for table "posizionamento_toponimo" */
export type Posizionamento_Toponimo_On_Conflict = {
  constraint: Posizionamento_Toponimo_Constraint;
  update_columns?: Array<Posizionamento_Toponimo_Update_Column>;
  where?: Maybe<Posizionamento_Toponimo_Bool_Exp>;
};

/** Ordering options when selecting data from "posizionamento_toponimo". */
export type Posizionamento_Toponimo_Order_By = {
  civico?: Maybe<Order_By>;
  connessione?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  geoloc?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  ipi?: Maybe<Order_By>;
  km?: Maybe<Order_By>;
  note?: Maybe<Order_By>;
  specifica?: Maybe<_Specifica_Posizionamento_Toponimo_Order_By>;
  specifica_id?: Maybe<Order_By>;
  tipologia?: Maybe<_Tipologia_Posizionamento_Toponimo_Order_By>;
  tipologia_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: posizionamento_toponimo */
export type Posizionamento_Toponimo_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "posizionamento_toponimo" */
export enum Posizionamento_Toponimo_Select_Column {
  /** column name */
  Civico = 'civico',
  /** column name */
  Connessione = 'connessione',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Geoloc = 'geoloc',
  /** column name */
  Id = 'id',
  /** column name */
  Ipi = 'ipi',
  /** column name */
  Km = 'km',
  /** column name */
  Note = 'note',
  /** column name */
  SpecificaId = 'specifica_id',
  /** column name */
  TipologiaId = 'tipologia_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "posizionamento_toponimo" */
export type Posizionamento_Toponimo_Set_Input = {
  civico?: Maybe<Scalars['String']>;
  connessione?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  geoloc?: Maybe<Scalars['geography']>;
  id?: Maybe<Scalars['Int']>;
  ipi?: Maybe<Scalars['String']>;
  km?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
  specifica_id?: Maybe<Scalars['Int']>;
  tipologia_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Posizionamento_Toponimo_Stddev_Fields = {
  __typename?: 'posizionamento_toponimo_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  specifica_id?: Maybe<Scalars['Float']>;
  tipologia_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Posizionamento_Toponimo_Stddev_Pop_Fields = {
  __typename?: 'posizionamento_toponimo_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  specifica_id?: Maybe<Scalars['Float']>;
  tipologia_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Posizionamento_Toponimo_Stddev_Samp_Fields = {
  __typename?: 'posizionamento_toponimo_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  specifica_id?: Maybe<Scalars['Float']>;
  tipologia_id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Posizionamento_Toponimo_Sum_Fields = {
  __typename?: 'posizionamento_toponimo_sum_fields';
  id?: Maybe<Scalars['Int']>;
  specifica_id?: Maybe<Scalars['Int']>;
  tipologia_id?: Maybe<Scalars['Int']>;
};

/** update columns of table "posizionamento_toponimo" */
export enum Posizionamento_Toponimo_Update_Column {
  /** column name */
  Civico = 'civico',
  /** column name */
  Connessione = 'connessione',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Geoloc = 'geoloc',
  /** column name */
  Id = 'id',
  /** column name */
  Ipi = 'ipi',
  /** column name */
  Km = 'km',
  /** column name */
  Note = 'note',
  /** column name */
  SpecificaId = 'specifica_id',
  /** column name */
  TipologiaId = 'tipologia_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Posizionamento_Toponimo_Var_Pop_Fields = {
  __typename?: 'posizionamento_toponimo_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  specifica_id?: Maybe<Scalars['Float']>;
  tipologia_id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Posizionamento_Toponimo_Var_Samp_Fields = {
  __typename?: 'posizionamento_toponimo_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  specifica_id?: Maybe<Scalars['Float']>;
  tipologia_id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Posizionamento_Toponimo_Variance_Fields = {
  __typename?: 'posizionamento_toponimo_variance_fields';
  id?: Maybe<Scalars['Float']>;
  specifica_id?: Maybe<Scalars['Float']>;
  tipologia_id?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "protocollo" */
export type Protocollo = {
  __typename?: 'protocollo';
  data?: Maybe<Scalars['timestamptz']>;
  /** An array relationship */
  destinatari: Array<Protocollo_Destinatario>;
  /** An aggregate relationship */
  destinatari_aggregate: Protocollo_Destinatario_Aggregate;
  id: Scalars['Int'];
  /** An object relationship */
  mittente?: Maybe<_Sezione_Protocollo>;
  mittente_id?: Maybe<Scalars['Int']>;
  note?: Maybe<Scalars['String']>;
  numero?: Maybe<Scalars['String']>;
};


/** columns and relationships of "protocollo" */
export type ProtocolloDestinatariArgs = {
  distinct_on?: Maybe<Array<Protocollo_Destinatario_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Protocollo_Destinatario_Order_By>>;
  where?: Maybe<Protocollo_Destinatario_Bool_Exp>;
};


/** columns and relationships of "protocollo" */
export type ProtocolloDestinatari_AggregateArgs = {
  distinct_on?: Maybe<Array<Protocollo_Destinatario_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Protocollo_Destinatario_Order_By>>;
  where?: Maybe<Protocollo_Destinatario_Bool_Exp>;
};

/** aggregated selection of "protocollo" */
export type Protocollo_Aggregate = {
  __typename?: 'protocollo_aggregate';
  aggregate?: Maybe<Protocollo_Aggregate_Fields>;
  nodes: Array<Protocollo>;
};

/** aggregate fields of "protocollo" */
export type Protocollo_Aggregate_Fields = {
  __typename?: 'protocollo_aggregate_fields';
  avg?: Maybe<Protocollo_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Protocollo_Max_Fields>;
  min?: Maybe<Protocollo_Min_Fields>;
  stddev?: Maybe<Protocollo_Stddev_Fields>;
  stddev_pop?: Maybe<Protocollo_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Protocollo_Stddev_Samp_Fields>;
  sum?: Maybe<Protocollo_Sum_Fields>;
  var_pop?: Maybe<Protocollo_Var_Pop_Fields>;
  var_samp?: Maybe<Protocollo_Var_Samp_Fields>;
  variance?: Maybe<Protocollo_Variance_Fields>;
};


/** aggregate fields of "protocollo" */
export type Protocollo_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Protocollo_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Protocollo_Avg_Fields = {
  __typename?: 'protocollo_avg_fields';
  id?: Maybe<Scalars['Float']>;
  mittente_id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "protocollo". All fields are combined with a logical 'AND'. */
export type Protocollo_Bool_Exp = {
  _and?: Maybe<Array<Protocollo_Bool_Exp>>;
  _not?: Maybe<Protocollo_Bool_Exp>;
  _or?: Maybe<Array<Protocollo_Bool_Exp>>;
  data?: Maybe<Timestamptz_Comparison_Exp>;
  destinatari?: Maybe<Protocollo_Destinatario_Bool_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  mittente?: Maybe<_Sezione_Protocollo_Bool_Exp>;
  mittente_id?: Maybe<Int_Comparison_Exp>;
  note?: Maybe<String_Comparison_Exp>;
  numero?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "protocollo" */
export enum Protocollo_Constraint {
  /** unique or primary key constraint */
  ProtocolloPkey = 'protocollo_pkey'
}

/** columns and relationships of "protocollo_destinatario" */
export type Protocollo_Destinatario = {
  __typename?: 'protocollo_destinatario';
  created_at: Scalars['timestamptz'];
  delete: Scalars['Boolean'];
  /** An object relationship */
  destinatario_esterno?: Maybe<Protocollo_Destinatario_Esterno>;
  /** An object relationship */
  destinatario_interno?: Maybe<_Sezione_Protocollo>;
  e_esterno: Scalars['Boolean'];
  esterno_id?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
  interno_id?: Maybe<Scalars['Int']>;
  protocollo_id: Scalars['Int'];
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "protocollo_destinatario" */
export type Protocollo_Destinatario_Aggregate = {
  __typename?: 'protocollo_destinatario_aggregate';
  aggregate?: Maybe<Protocollo_Destinatario_Aggregate_Fields>;
  nodes: Array<Protocollo_Destinatario>;
};

/** aggregate fields of "protocollo_destinatario" */
export type Protocollo_Destinatario_Aggregate_Fields = {
  __typename?: 'protocollo_destinatario_aggregate_fields';
  avg?: Maybe<Protocollo_Destinatario_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Protocollo_Destinatario_Max_Fields>;
  min?: Maybe<Protocollo_Destinatario_Min_Fields>;
  stddev?: Maybe<Protocollo_Destinatario_Stddev_Fields>;
  stddev_pop?: Maybe<Protocollo_Destinatario_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Protocollo_Destinatario_Stddev_Samp_Fields>;
  sum?: Maybe<Protocollo_Destinatario_Sum_Fields>;
  var_pop?: Maybe<Protocollo_Destinatario_Var_Pop_Fields>;
  var_samp?: Maybe<Protocollo_Destinatario_Var_Samp_Fields>;
  variance?: Maybe<Protocollo_Destinatario_Variance_Fields>;
};


/** aggregate fields of "protocollo_destinatario" */
export type Protocollo_Destinatario_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Protocollo_Destinatario_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "protocollo_destinatario" */
export type Protocollo_Destinatario_Aggregate_Order_By = {
  avg?: Maybe<Protocollo_Destinatario_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Protocollo_Destinatario_Max_Order_By>;
  min?: Maybe<Protocollo_Destinatario_Min_Order_By>;
  stddev?: Maybe<Protocollo_Destinatario_Stddev_Order_By>;
  stddev_pop?: Maybe<Protocollo_Destinatario_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Protocollo_Destinatario_Stddev_Samp_Order_By>;
  sum?: Maybe<Protocollo_Destinatario_Sum_Order_By>;
  var_pop?: Maybe<Protocollo_Destinatario_Var_Pop_Order_By>;
  var_samp?: Maybe<Protocollo_Destinatario_Var_Samp_Order_By>;
  variance?: Maybe<Protocollo_Destinatario_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "protocollo_destinatario" */
export type Protocollo_Destinatario_Arr_Rel_Insert_Input = {
  data: Array<Protocollo_Destinatario_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Protocollo_Destinatario_On_Conflict>;
};

/** aggregate avg on columns */
export type Protocollo_Destinatario_Avg_Fields = {
  __typename?: 'protocollo_destinatario_avg_fields';
  esterno_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  interno_id?: Maybe<Scalars['Float']>;
  protocollo_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "protocollo_destinatario" */
export type Protocollo_Destinatario_Avg_Order_By = {
  esterno_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  interno_id?: Maybe<Order_By>;
  protocollo_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "protocollo_destinatario". All fields are combined with a logical 'AND'. */
export type Protocollo_Destinatario_Bool_Exp = {
  _and?: Maybe<Array<Protocollo_Destinatario_Bool_Exp>>;
  _not?: Maybe<Protocollo_Destinatario_Bool_Exp>;
  _or?: Maybe<Array<Protocollo_Destinatario_Bool_Exp>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  delete?: Maybe<Boolean_Comparison_Exp>;
  destinatario_esterno?: Maybe<Protocollo_Destinatario_Esterno_Bool_Exp>;
  destinatario_interno?: Maybe<_Sezione_Protocollo_Bool_Exp>;
  e_esterno?: Maybe<Boolean_Comparison_Exp>;
  esterno_id?: Maybe<Int_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  interno_id?: Maybe<Int_Comparison_Exp>;
  protocollo_id?: Maybe<Int_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "protocollo_destinatario" */
export enum Protocollo_Destinatario_Constraint {
  /** unique or primary key constraint */
  ProtocolloDestinatarioPkey = 'protocollo_destinatario_pkey'
}

/** columns and relationships of "protocollo_destinatario_esterno" */
export type Protocollo_Destinatario_Esterno = {
  __typename?: 'protocollo_destinatario_esterno';
  codice_fiscale?: Maybe<Scalars['String']>;
  cognome?: Maybe<Scalars['String']>;
  created_at: Scalars['timestamptz'];
  email?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  nome?: Maybe<Scalars['String']>;
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "protocollo_destinatario_esterno" */
export type Protocollo_Destinatario_Esterno_Aggregate = {
  __typename?: 'protocollo_destinatario_esterno_aggregate';
  aggregate?: Maybe<Protocollo_Destinatario_Esterno_Aggregate_Fields>;
  nodes: Array<Protocollo_Destinatario_Esterno>;
};

/** aggregate fields of "protocollo_destinatario_esterno" */
export type Protocollo_Destinatario_Esterno_Aggregate_Fields = {
  __typename?: 'protocollo_destinatario_esterno_aggregate_fields';
  avg?: Maybe<Protocollo_Destinatario_Esterno_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Protocollo_Destinatario_Esterno_Max_Fields>;
  min?: Maybe<Protocollo_Destinatario_Esterno_Min_Fields>;
  stddev?: Maybe<Protocollo_Destinatario_Esterno_Stddev_Fields>;
  stddev_pop?: Maybe<Protocollo_Destinatario_Esterno_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Protocollo_Destinatario_Esterno_Stddev_Samp_Fields>;
  sum?: Maybe<Protocollo_Destinatario_Esterno_Sum_Fields>;
  var_pop?: Maybe<Protocollo_Destinatario_Esterno_Var_Pop_Fields>;
  var_samp?: Maybe<Protocollo_Destinatario_Esterno_Var_Samp_Fields>;
  variance?: Maybe<Protocollo_Destinatario_Esterno_Variance_Fields>;
};


/** aggregate fields of "protocollo_destinatario_esterno" */
export type Protocollo_Destinatario_Esterno_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Protocollo_Destinatario_Esterno_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Protocollo_Destinatario_Esterno_Avg_Fields = {
  __typename?: 'protocollo_destinatario_esterno_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "protocollo_destinatario_esterno". All fields are combined with a logical 'AND'. */
export type Protocollo_Destinatario_Esterno_Bool_Exp = {
  _and?: Maybe<Array<Protocollo_Destinatario_Esterno_Bool_Exp>>;
  _not?: Maybe<Protocollo_Destinatario_Esterno_Bool_Exp>;
  _or?: Maybe<Array<Protocollo_Destinatario_Esterno_Bool_Exp>>;
  codice_fiscale?: Maybe<String_Comparison_Exp>;
  cognome?: Maybe<String_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  email?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  nome?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "protocollo_destinatario_esterno" */
export enum Protocollo_Destinatario_Esterno_Constraint {
  /** unique or primary key constraint */
  ProtocolloDestinatarioEsternoPkey = 'protocollo_destinatario_esterno_pkey'
}

/** input type for incrementing numeric columns in table "protocollo_destinatario_esterno" */
export type Protocollo_Destinatario_Esterno_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "protocollo_destinatario_esterno" */
export type Protocollo_Destinatario_Esterno_Insert_Input = {
  codice_fiscale?: Maybe<Scalars['String']>;
  cognome?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  nome?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Protocollo_Destinatario_Esterno_Max_Fields = {
  __typename?: 'protocollo_destinatario_esterno_max_fields';
  codice_fiscale?: Maybe<Scalars['String']>;
  cognome?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  nome?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Protocollo_Destinatario_Esterno_Min_Fields = {
  __typename?: 'protocollo_destinatario_esterno_min_fields';
  codice_fiscale?: Maybe<Scalars['String']>;
  cognome?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  nome?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "protocollo_destinatario_esterno" */
export type Protocollo_Destinatario_Esterno_Mutation_Response = {
  __typename?: 'protocollo_destinatario_esterno_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Protocollo_Destinatario_Esterno>;
};

/** input type for inserting object relation for remote table "protocollo_destinatario_esterno" */
export type Protocollo_Destinatario_Esterno_Obj_Rel_Insert_Input = {
  data: Protocollo_Destinatario_Esterno_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Protocollo_Destinatario_Esterno_On_Conflict>;
};

/** on conflict condition type for table "protocollo_destinatario_esterno" */
export type Protocollo_Destinatario_Esterno_On_Conflict = {
  constraint: Protocollo_Destinatario_Esterno_Constraint;
  update_columns?: Array<Protocollo_Destinatario_Esterno_Update_Column>;
  where?: Maybe<Protocollo_Destinatario_Esterno_Bool_Exp>;
};

/** Ordering options when selecting data from "protocollo_destinatario_esterno". */
export type Protocollo_Destinatario_Esterno_Order_By = {
  codice_fiscale?: Maybe<Order_By>;
  cognome?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  nome?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: protocollo_destinatario_esterno */
export type Protocollo_Destinatario_Esterno_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "protocollo_destinatario_esterno" */
export enum Protocollo_Destinatario_Esterno_Select_Column {
  /** column name */
  CodiceFiscale = 'codice_fiscale',
  /** column name */
  Cognome = 'cognome',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  Nome = 'nome',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "protocollo_destinatario_esterno" */
export type Protocollo_Destinatario_Esterno_Set_Input = {
  codice_fiscale?: Maybe<Scalars['String']>;
  cognome?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  nome?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Protocollo_Destinatario_Esterno_Stddev_Fields = {
  __typename?: 'protocollo_destinatario_esterno_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Protocollo_Destinatario_Esterno_Stddev_Pop_Fields = {
  __typename?: 'protocollo_destinatario_esterno_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Protocollo_Destinatario_Esterno_Stddev_Samp_Fields = {
  __typename?: 'protocollo_destinatario_esterno_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Protocollo_Destinatario_Esterno_Sum_Fields = {
  __typename?: 'protocollo_destinatario_esterno_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "protocollo_destinatario_esterno" */
export enum Protocollo_Destinatario_Esterno_Update_Column {
  /** column name */
  CodiceFiscale = 'codice_fiscale',
  /** column name */
  Cognome = 'cognome',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  Nome = 'nome',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Protocollo_Destinatario_Esterno_Var_Pop_Fields = {
  __typename?: 'protocollo_destinatario_esterno_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Protocollo_Destinatario_Esterno_Var_Samp_Fields = {
  __typename?: 'protocollo_destinatario_esterno_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Protocollo_Destinatario_Esterno_Variance_Fields = {
  __typename?: 'protocollo_destinatario_esterno_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** input type for incrementing numeric columns in table "protocollo_destinatario" */
export type Protocollo_Destinatario_Inc_Input = {
  esterno_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  interno_id?: Maybe<Scalars['Int']>;
  protocollo_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "protocollo_destinatario" */
export type Protocollo_Destinatario_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  delete?: Maybe<Scalars['Boolean']>;
  destinatario_esterno?: Maybe<Protocollo_Destinatario_Esterno_Obj_Rel_Insert_Input>;
  destinatario_interno?: Maybe<_Sezione_Protocollo_Obj_Rel_Insert_Input>;
  e_esterno?: Maybe<Scalars['Boolean']>;
  esterno_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  interno_id?: Maybe<Scalars['Int']>;
  protocollo_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Protocollo_Destinatario_Max_Fields = {
  __typename?: 'protocollo_destinatario_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  esterno_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  interno_id?: Maybe<Scalars['Int']>;
  protocollo_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "protocollo_destinatario" */
export type Protocollo_Destinatario_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  esterno_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  interno_id?: Maybe<Order_By>;
  protocollo_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Protocollo_Destinatario_Min_Fields = {
  __typename?: 'protocollo_destinatario_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  esterno_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  interno_id?: Maybe<Scalars['Int']>;
  protocollo_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "protocollo_destinatario" */
export type Protocollo_Destinatario_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  esterno_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  interno_id?: Maybe<Order_By>;
  protocollo_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "protocollo_destinatario" */
export type Protocollo_Destinatario_Mutation_Response = {
  __typename?: 'protocollo_destinatario_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Protocollo_Destinatario>;
};

/** on conflict condition type for table "protocollo_destinatario" */
export type Protocollo_Destinatario_On_Conflict = {
  constraint: Protocollo_Destinatario_Constraint;
  update_columns?: Array<Protocollo_Destinatario_Update_Column>;
  where?: Maybe<Protocollo_Destinatario_Bool_Exp>;
};

/** Ordering options when selecting data from "protocollo_destinatario". */
export type Protocollo_Destinatario_Order_By = {
  created_at?: Maybe<Order_By>;
  delete?: Maybe<Order_By>;
  destinatario_esterno?: Maybe<Protocollo_Destinatario_Esterno_Order_By>;
  destinatario_interno?: Maybe<_Sezione_Protocollo_Order_By>;
  e_esterno?: Maybe<Order_By>;
  esterno_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  interno_id?: Maybe<Order_By>;
  protocollo_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: protocollo_destinatario */
export type Protocollo_Destinatario_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "protocollo_destinatario" */
export enum Protocollo_Destinatario_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Delete = 'delete',
  /** column name */
  EEsterno = 'e_esterno',
  /** column name */
  EsternoId = 'esterno_id',
  /** column name */
  Id = 'id',
  /** column name */
  InternoId = 'interno_id',
  /** column name */
  ProtocolloId = 'protocollo_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "protocollo_destinatario" */
export type Protocollo_Destinatario_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  delete?: Maybe<Scalars['Boolean']>;
  e_esterno?: Maybe<Scalars['Boolean']>;
  esterno_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  interno_id?: Maybe<Scalars['Int']>;
  protocollo_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Protocollo_Destinatario_Stddev_Fields = {
  __typename?: 'protocollo_destinatario_stddev_fields';
  esterno_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  interno_id?: Maybe<Scalars['Float']>;
  protocollo_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "protocollo_destinatario" */
export type Protocollo_Destinatario_Stddev_Order_By = {
  esterno_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  interno_id?: Maybe<Order_By>;
  protocollo_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Protocollo_Destinatario_Stddev_Pop_Fields = {
  __typename?: 'protocollo_destinatario_stddev_pop_fields';
  esterno_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  interno_id?: Maybe<Scalars['Float']>;
  protocollo_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "protocollo_destinatario" */
export type Protocollo_Destinatario_Stddev_Pop_Order_By = {
  esterno_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  interno_id?: Maybe<Order_By>;
  protocollo_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Protocollo_Destinatario_Stddev_Samp_Fields = {
  __typename?: 'protocollo_destinatario_stddev_samp_fields';
  esterno_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  interno_id?: Maybe<Scalars['Float']>;
  protocollo_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "protocollo_destinatario" */
export type Protocollo_Destinatario_Stddev_Samp_Order_By = {
  esterno_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  interno_id?: Maybe<Order_By>;
  protocollo_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Protocollo_Destinatario_Sum_Fields = {
  __typename?: 'protocollo_destinatario_sum_fields';
  esterno_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  interno_id?: Maybe<Scalars['Int']>;
  protocollo_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "protocollo_destinatario" */
export type Protocollo_Destinatario_Sum_Order_By = {
  esterno_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  interno_id?: Maybe<Order_By>;
  protocollo_id?: Maybe<Order_By>;
};

/** update columns of table "protocollo_destinatario" */
export enum Protocollo_Destinatario_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Delete = 'delete',
  /** column name */
  EEsterno = 'e_esterno',
  /** column name */
  EsternoId = 'esterno_id',
  /** column name */
  Id = 'id',
  /** column name */
  InternoId = 'interno_id',
  /** column name */
  ProtocolloId = 'protocollo_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Protocollo_Destinatario_Var_Pop_Fields = {
  __typename?: 'protocollo_destinatario_var_pop_fields';
  esterno_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  interno_id?: Maybe<Scalars['Float']>;
  protocollo_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "protocollo_destinatario" */
export type Protocollo_Destinatario_Var_Pop_Order_By = {
  esterno_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  interno_id?: Maybe<Order_By>;
  protocollo_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Protocollo_Destinatario_Var_Samp_Fields = {
  __typename?: 'protocollo_destinatario_var_samp_fields';
  esterno_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  interno_id?: Maybe<Scalars['Float']>;
  protocollo_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "protocollo_destinatario" */
export type Protocollo_Destinatario_Var_Samp_Order_By = {
  esterno_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  interno_id?: Maybe<Order_By>;
  protocollo_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Protocollo_Destinatario_Variance_Fields = {
  __typename?: 'protocollo_destinatario_variance_fields';
  esterno_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  interno_id?: Maybe<Scalars['Float']>;
  protocollo_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "protocollo_destinatario" */
export type Protocollo_Destinatario_Variance_Order_By = {
  esterno_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  interno_id?: Maybe<Order_By>;
  protocollo_id?: Maybe<Order_By>;
};

/** input type for incrementing numeric columns in table "protocollo" */
export type Protocollo_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  mittente_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "protocollo" */
export type Protocollo_Insert_Input = {
  data?: Maybe<Scalars['timestamptz']>;
  destinatari?: Maybe<Protocollo_Destinatario_Arr_Rel_Insert_Input>;
  id?: Maybe<Scalars['Int']>;
  mittente?: Maybe<_Sezione_Protocollo_Obj_Rel_Insert_Input>;
  mittente_id?: Maybe<Scalars['Int']>;
  note?: Maybe<Scalars['String']>;
  numero?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Protocollo_Max_Fields = {
  __typename?: 'protocollo_max_fields';
  data?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  mittente_id?: Maybe<Scalars['Int']>;
  note?: Maybe<Scalars['String']>;
  numero?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Protocollo_Min_Fields = {
  __typename?: 'protocollo_min_fields';
  data?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  mittente_id?: Maybe<Scalars['Int']>;
  note?: Maybe<Scalars['String']>;
  numero?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "protocollo" */
export type Protocollo_Mutation_Response = {
  __typename?: 'protocollo_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Protocollo>;
};

/** input type for inserting object relation for remote table "protocollo" */
export type Protocollo_Obj_Rel_Insert_Input = {
  data: Protocollo_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Protocollo_On_Conflict>;
};

/** on conflict condition type for table "protocollo" */
export type Protocollo_On_Conflict = {
  constraint: Protocollo_Constraint;
  update_columns?: Array<Protocollo_Update_Column>;
  where?: Maybe<Protocollo_Bool_Exp>;
};

/** Ordering options when selecting data from "protocollo". */
export type Protocollo_Order_By = {
  data?: Maybe<Order_By>;
  destinatari_aggregate?: Maybe<Protocollo_Destinatario_Aggregate_Order_By>;
  id?: Maybe<Order_By>;
  mittente?: Maybe<_Sezione_Protocollo_Order_By>;
  mittente_id?: Maybe<Order_By>;
  note?: Maybe<Order_By>;
  numero?: Maybe<Order_By>;
};

/** primary key columns input for table: protocollo */
export type Protocollo_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "protocollo" */
export enum Protocollo_Select_Column {
  /** column name */
  Data = 'data',
  /** column name */
  Id = 'id',
  /** column name */
  MittenteId = 'mittente_id',
  /** column name */
  Note = 'note',
  /** column name */
  Numero = 'numero'
}

/** input type for updating data in table "protocollo" */
export type Protocollo_Set_Input = {
  data?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  mittente_id?: Maybe<Scalars['Int']>;
  note?: Maybe<Scalars['String']>;
  numero?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Protocollo_Stddev_Fields = {
  __typename?: 'protocollo_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  mittente_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Protocollo_Stddev_Pop_Fields = {
  __typename?: 'protocollo_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  mittente_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Protocollo_Stddev_Samp_Fields = {
  __typename?: 'protocollo_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  mittente_id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Protocollo_Sum_Fields = {
  __typename?: 'protocollo_sum_fields';
  id?: Maybe<Scalars['Int']>;
  mittente_id?: Maybe<Scalars['Int']>;
};

/** update columns of table "protocollo" */
export enum Protocollo_Update_Column {
  /** column name */
  Data = 'data',
  /** column name */
  Id = 'id',
  /** column name */
  MittenteId = 'mittente_id',
  /** column name */
  Note = 'note',
  /** column name */
  Numero = 'numero'
}

/** aggregate var_pop on columns */
export type Protocollo_Var_Pop_Fields = {
  __typename?: 'protocollo_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  mittente_id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Protocollo_Var_Samp_Fields = {
  __typename?: 'protocollo_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  mittente_id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Protocollo_Variance_Fields = {
  __typename?: 'protocollo_variance_fields';
  id?: Maybe<Scalars['Float']>;
  mittente_id?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "quartiere" */
export type Quartiere = {
  __typename?: 'quartiere';
  created_at: Scalars['timestamptz'];
  id: Scalars['Int'];
  /** An array relationship */
  municipalita: Array<Assegnazione_Quartiere>;
  /** An aggregate relationship */
  municipalita_aggregate: Assegnazione_Quartiere_Aggregate;
  nome: Scalars['String'];
  /** An array relationship */
  toponimi: Array<Assegnazione_Toponimo>;
  /** An aggregate relationship */
  toponimi_aggregate: Assegnazione_Toponimo_Aggregate;
  updated_at: Scalars['timestamptz'];
  /** An array relationship */
  vecchie_denominazioni: Array<Vecchio_Quartiere>;
  /** An aggregate relationship */
  vecchie_denominazioni_aggregate: Vecchio_Quartiere_Aggregate;
};


/** columns and relationships of "quartiere" */
export type QuartiereMunicipalitaArgs = {
  distinct_on?: Maybe<Array<Assegnazione_Quartiere_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Assegnazione_Quartiere_Order_By>>;
  where?: Maybe<Assegnazione_Quartiere_Bool_Exp>;
};


/** columns and relationships of "quartiere" */
export type QuartiereMunicipalita_AggregateArgs = {
  distinct_on?: Maybe<Array<Assegnazione_Quartiere_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Assegnazione_Quartiere_Order_By>>;
  where?: Maybe<Assegnazione_Quartiere_Bool_Exp>;
};


/** columns and relationships of "quartiere" */
export type QuartiereToponimiArgs = {
  distinct_on?: Maybe<Array<Assegnazione_Toponimo_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Assegnazione_Toponimo_Order_By>>;
  where?: Maybe<Assegnazione_Toponimo_Bool_Exp>;
};


/** columns and relationships of "quartiere" */
export type QuartiereToponimi_AggregateArgs = {
  distinct_on?: Maybe<Array<Assegnazione_Toponimo_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Assegnazione_Toponimo_Order_By>>;
  where?: Maybe<Assegnazione_Toponimo_Bool_Exp>;
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
  municipalita?: Maybe<Assegnazione_Quartiere_Bool_Exp>;
  nome?: Maybe<String_Comparison_Exp>;
  toponimi?: Maybe<Assegnazione_Toponimo_Bool_Exp>;
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
  municipalita?: Maybe<Assegnazione_Quartiere_Arr_Rel_Insert_Input>;
  nome?: Maybe<Scalars['String']>;
  toponimi?: Maybe<Assegnazione_Toponimo_Arr_Rel_Insert_Input>;
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
  municipalita_aggregate?: Maybe<Assegnazione_Quartiere_Aggregate_Order_By>;
  nome?: Maybe<Order_By>;
  toponimi_aggregate?: Maybe<Assegnazione_Toponimo_Aggregate_Order_By>;
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
  /** fetch data from the table: "_condizioni_traffico" */
  _condizioni_traffico: Array<_Condizioni_Traffico>;
  /** fetch aggregated fields from the table: "_condizioni_traffico" */
  _condizioni_traffico_aggregate: _Condizioni_Traffico_Aggregate;
  /** fetch data from the table: "_condizioni_traffico" using primary key columns */
  _condizioni_traffico_by_pk?: Maybe<_Condizioni_Traffico>;
  /** fetch data from the table: "_forma_dissesto" */
  _forma_dissesto: Array<_Forma_Dissesto>;
  /** fetch aggregated fields from the table: "_forma_dissesto" */
  _forma_dissesto_aggregate: _Forma_Dissesto_Aggregate;
  /** fetch data from the table: "_forma_dissesto" using primary key columns */
  _forma_dissesto_by_pk?: Maybe<_Forma_Dissesto>;
  /** fetch data from the table: "_giorni_trascorsi" */
  _giorni_trascorsi: Array<_Giorni_Trascorsi>;
  /** fetch aggregated fields from the table: "_giorni_trascorsi" */
  _giorni_trascorsi_aggregate: _Giorni_Trascorsi_Aggregate;
  /** fetch data from the table: "_giorni_trascorsi" using primary key columns */
  _giorni_trascorsi_by_pk?: Maybe<_Giorni_Trascorsi>;
  /** fetch data from the table: "_materiale" */
  _materiale: Array<_Materiale>;
  /** fetch aggregated fields from the table: "_materiale" */
  _materiale_aggregate: _Materiale_Aggregate;
  /** fetch data from the table: "_materiale" using primary key columns */
  _materiale_by_pk?: Maybe<_Materiale>;
  /** fetch data from the table: "_priorita" */
  _priorita: Array<_Priorita>;
  /** fetch aggregated fields from the table: "_priorita" */
  _priorita_aggregate: _Priorita_Aggregate;
  /** fetch data from the table: "_priorita" using primary key columns */
  _priorita_by_pk?: Maybe<_Priorita>;
  /** fetch data from the table: "_sezione_protocollo" */
  _sezione_protocollo: Array<_Sezione_Protocollo>;
  /** fetch aggregated fields from the table: "_sezione_protocollo" */
  _sezione_protocollo_aggregate: _Sezione_Protocollo_Aggregate;
  /** fetch data from the table: "_sezione_protocollo" using primary key columns */
  _sezione_protocollo_by_pk?: Maybe<_Sezione_Protocollo>;
  /** fetch data from the table: "_specifica_posizionamento_toponimo" */
  _specifica_posizionamento_toponimo: Array<_Specifica_Posizionamento_Toponimo>;
  /** fetch aggregated fields from the table: "_specifica_posizionamento_toponimo" */
  _specifica_posizionamento_toponimo_aggregate: _Specifica_Posizionamento_Toponimo_Aggregate;
  /** fetch data from the table: "_specifica_posizionamento_toponimo" using primary key columns */
  _specifica_posizionamento_toponimo_by_pk?: Maybe<_Specifica_Posizionamento_Toponimo>;
  /** fetch data from the table: "_stato_segnalazione" */
  _stato_segnalazione: Array<_Stato_Segnalazione>;
  /** fetch aggregated fields from the table: "_stato_segnalazione" */
  _stato_segnalazione_aggregate: _Stato_Segnalazione_Aggregate;
  /** fetch data from the table: "_stato_segnalazione" using primary key columns */
  _stato_segnalazione_by_pk?: Maybe<_Stato_Segnalazione>;
  /** fetch data from the table: "_tipologia_dissesto" */
  _tipologia_dissesto: Array<_Tipologia_Dissesto>;
  /** fetch aggregated fields from the table: "_tipologia_dissesto" */
  _tipologia_dissesto_aggregate: _Tipologia_Dissesto_Aggregate;
  /** fetch data from the table: "_tipologia_dissesto" using primary key columns */
  _tipologia_dissesto_by_pk?: Maybe<_Tipologia_Dissesto>;
  /** fetch data from the table: "_tipologia_posizionamento_toponimo" */
  _tipologia_posizionamento_toponimo: Array<_Tipologia_Posizionamento_Toponimo>;
  /** fetch aggregated fields from the table: "_tipologia_posizionamento_toponimo" */
  _tipologia_posizionamento_toponimo_aggregate: _Tipologia_Posizionamento_Toponimo_Aggregate;
  /** fetch data from the table: "_tipologia_posizionamento_toponimo" using primary key columns */
  _tipologia_posizionamento_toponimo_by_pk?: Maybe<_Tipologia_Posizionamento_Toponimo>;
  /** fetch data from the table: "_titolo" */
  _titolo: Array<_Titolo>;
  /** fetch aggregated fields from the table: "_titolo" */
  _titolo_aggregate: _Titolo_Aggregate;
  /** fetch data from the table: "_titolo" using primary key columns */
  _titolo_by_pk?: Maybe<_Titolo>;
  /** fetch data from the table: "allegato" */
  allegato: Array<Allegato>;
  /** fetch aggregated fields from the table: "allegato" */
  allegato_aggregate: Allegato_Aggregate;
  /** fetch data from the table: "allegato" using primary key columns */
  allegato_by_pk?: Maybe<Allegato>;
  /** fetch data from the table: "assegnazione_quartiere" */
  assegnazione_quartiere: Array<Assegnazione_Quartiere>;
  /** fetch aggregated fields from the table: "assegnazione_quartiere" */
  assegnazione_quartiere_aggregate: Assegnazione_Quartiere_Aggregate;
  /** fetch data from the table: "assegnazione_quartiere" using primary key columns */
  assegnazione_quartiere_by_pk?: Maybe<Assegnazione_Quartiere>;
  /** fetch data from the table: "assegnazione_squadra" */
  assegnazione_squadra: Array<Assegnazione_Squadra>;
  /** fetch aggregated fields from the table: "assegnazione_squadra" */
  assegnazione_squadra_aggregate: Assegnazione_Squadra_Aggregate;
  /** fetch data from the table: "assegnazione_squadra" using primary key columns */
  assegnazione_squadra_by_pk?: Maybe<Assegnazione_Squadra>;
  /** fetch data from the table: "assegnazione_toponimo" */
  assegnazione_toponimo: Array<Assegnazione_Toponimo>;
  /** fetch aggregated fields from the table: "assegnazione_toponimo" */
  assegnazione_toponimo_aggregate: Assegnazione_Toponimo_Aggregate;
  /** fetch data from the table: "assegnazione_toponimo" using primary key columns */
  assegnazione_toponimo_by_pk?: Maybe<Assegnazione_Toponimo>;
  /** An array relationship */
  attrezzature_impiegate: Array<Attrezzature_Impiegate>;
  /** An aggregate relationship */
  attrezzature_impiegate_aggregate: Attrezzature_Impiegate_Aggregate;
  /** fetch data from the table: "attrezzature_impiegate" using primary key columns */
  attrezzature_impiegate_by_pk?: Maybe<Attrezzature_Impiegate>;
  /** fetch data from the table: "civico" */
  civico: Array<Civico>;
  /** fetch aggregated fields from the table: "civico" */
  civico_aggregate: Civico_Aggregate;
  /** fetch data from the table: "civico" using primary key columns */
  civico_by_pk?: Maybe<Civico>;
  /** fetch data from the table: "connessione_grafo" */
  connessione_grafo: Array<Connessione_Grafo>;
  /** fetch aggregated fields from the table: "connessione_grafo" */
  connessione_grafo_aggregate: Connessione_Grafo_Aggregate;
  /** fetch data from the table: "connessione_grafo" using primary key columns */
  connessione_grafo_by_pk?: Maybe<Connessione_Grafo>;
  /** An array relationship */
  diario: Array<Diario>;
  /** An aggregate relationship */
  diario_aggregate: Diario_Aggregate;
  /** fetch data from the table: "diario" using primary key columns */
  diario_by_pk?: Maybe<Diario>;
  /** fetch data from the table: "dissesto" */
  dissesto: Array<Dissesto>;
  /** fetch aggregated fields from the table: "dissesto" */
  dissesto_aggregate: Dissesto_Aggregate;
  /** fetch data from the table: "dissesto" using primary key columns */
  dissesto_by_pk?: Maybe<Dissesto>;
  /** fetch data from the table: "dug" */
  dug: Array<Dug>;
  /** fetch aggregated fields from the table: "dug" */
  dug_aggregate: Dug_Aggregate;
  /** fetch data from the table: "dug" using primary key columns */
  dug_by_pk?: Maybe<Dug>;
  /** fetch data from the table: "evento" */
  evento: Array<Evento>;
  /** fetch aggregated fields from the table: "evento" */
  evento_aggregate: Evento_Aggregate;
  /** fetch data from the table: "evento" using primary key columns */
  evento_by_pk?: Maybe<Evento>;
  /** fetch data from the table: "intervento" */
  intervento: Array<Intervento>;
  /** fetch aggregated fields from the table: "intervento" */
  intervento_aggregate: Intervento_Aggregate;
  /** fetch data from the table: "intervento" using primary key columns */
  intervento_by_pk?: Maybe<Intervento>;
  /** fetch data from the table: "intervento_straordinario" */
  intervento_straordinario: Array<Intervento_Straordinario>;
  /** fetch aggregated fields from the table: "intervento_straordinario" */
  intervento_straordinario_aggregate: Intervento_Straordinario_Aggregate;
  /** fetch data from the table: "intervento_straordinario" using primary key columns */
  intervento_straordinario_by_pk?: Maybe<Intervento_Straordinario>;
  /** fetch data from the table: "materiale_dissesto" */
  materiale_dissesto: Array<Materiale_Dissesto>;
  /** fetch aggregated fields from the table: "materiale_dissesto" */
  materiale_dissesto_aggregate: Materiale_Dissesto_Aggregate;
  /** fetch data from the table: "materiale_dissesto" using primary key columns */
  materiale_dissesto_by_pk?: Maybe<Materiale_Dissesto>;
  /** fetch data from the table: "membro" */
  membro: Array<Membro>;
  /** fetch aggregated fields from the table: "membro" */
  membro_aggregate: Membro_Aggregate;
  /** fetch data from the table: "membro" using primary key columns */
  membro_by_pk?: Maybe<Membro>;
  /** fetch data from the table: "municipalita" */
  municipalita: Array<Municipalita>;
  /** fetch aggregated fields from the table: "municipalita" */
  municipalita_aggregate: Municipalita_Aggregate;
  /** fetch data from the table: "municipalita" using primary key columns */
  municipalita_by_pk?: Maybe<Municipalita>;
  /** fetch data from the table: "posizionamento_toponimo" */
  posizionamento_toponimo: Array<Posizionamento_Toponimo>;
  /** fetch aggregated fields from the table: "posizionamento_toponimo" */
  posizionamento_toponimo_aggregate: Posizionamento_Toponimo_Aggregate;
  /** fetch data from the table: "posizionamento_toponimo" using primary key columns */
  posizionamento_toponimo_by_pk?: Maybe<Posizionamento_Toponimo>;
  /** fetch data from the table: "protocollo" */
  protocollo: Array<Protocollo>;
  /** fetch aggregated fields from the table: "protocollo" */
  protocollo_aggregate: Protocollo_Aggregate;
  /** fetch data from the table: "protocollo" using primary key columns */
  protocollo_by_pk?: Maybe<Protocollo>;
  /** fetch data from the table: "protocollo_destinatario" */
  protocollo_destinatario: Array<Protocollo_Destinatario>;
  /** fetch aggregated fields from the table: "protocollo_destinatario" */
  protocollo_destinatario_aggregate: Protocollo_Destinatario_Aggregate;
  /** fetch data from the table: "protocollo_destinatario" using primary key columns */
  protocollo_destinatario_by_pk?: Maybe<Protocollo_Destinatario>;
  /** fetch data from the table: "protocollo_destinatario_esterno" */
  protocollo_destinatario_esterno: Array<Protocollo_Destinatario_Esterno>;
  /** fetch aggregated fields from the table: "protocollo_destinatario_esterno" */
  protocollo_destinatario_esterno_aggregate: Protocollo_Destinatario_Esterno_Aggregate;
  /** fetch data from the table: "protocollo_destinatario_esterno" using primary key columns */
  protocollo_destinatario_esterno_by_pk?: Maybe<Protocollo_Destinatario_Esterno>;
  /** fetch data from the table: "quartiere" */
  quartiere: Array<Quartiere>;
  /** fetch aggregated fields from the table: "quartiere" */
  quartiere_aggregate: Quartiere_Aggregate;
  /** fetch data from the table: "quartiere" using primary key columns */
  quartiere_by_pk?: Maybe<Quartiere>;
  /** fetch data from the table: "segnalazione" */
  segnalazione: Array<Segnalazione>;
  /** fetch aggregated fields from the table: "segnalazione" */
  segnalazione_aggregate: Segnalazione_Aggregate;
  /** fetch data from the table: "segnalazione" using primary key columns */
  segnalazione_by_pk?: Maybe<Segnalazione>;
  /** fetch data from the table: "segnalazione_collegata" */
  segnalazione_collegata: Array<Segnalazione_Collegata>;
  /** fetch aggregated fields from the table: "segnalazione_collegata" */
  segnalazione_collegata_aggregate: Segnalazione_Collegata_Aggregate;
  /** fetch data from the table: "segnalazione_collegata" using primary key columns */
  segnalazione_collegata_by_pk?: Maybe<Segnalazione_Collegata>;
  /** An array relationship */
  segnaletica_lasciata: Array<Segnaletica_Lasciata>;
  /** An aggregate relationship */
  segnaletica_lasciata_aggregate: Segnaletica_Lasciata_Aggregate;
  /** fetch data from the table: "segnaletica_lasciata" using primary key columns */
  segnaletica_lasciata_by_pk?: Maybe<Segnaletica_Lasciata>;
  /** fetch data from the table: "sostegno_ipi" */
  sostegno_ipi: Array<Sostegno_Ipi>;
  /** fetch aggregated fields from the table: "sostegno_ipi" */
  sostegno_ipi_aggregate: Sostegno_Ipi_Aggregate;
  /** fetch data from the table: "sostegno_ipi" using primary key columns */
  sostegno_ipi_by_pk?: Maybe<Sostegno_Ipi>;
  /** fetch data from the table: "squadra" */
  squadra: Array<Squadra>;
  /** fetch aggregated fields from the table: "squadra" */
  squadra_aggregate: Squadra_Aggregate;
  /** fetch data from the table: "squadra" using primary key columns */
  squadra_by_pk?: Maybe<Squadra>;
  /** fetch data from the table: "tecnico_referente" */
  tecnico_referente: Array<Tecnico_Referente>;
  /** fetch aggregated fields from the table: "tecnico_referente" */
  tecnico_referente_aggregate: Tecnico_Referente_Aggregate;
  /** fetch data from the table: "tecnico_referente" using primary key columns */
  tecnico_referente_by_pk?: Maybe<Tecnico_Referente>;
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
  /** fetch data from the table: "vecchia_squadra" */
  vecchia_squadra: Array<Vecchia_Squadra>;
  /** fetch aggregated fields from the table: "vecchia_squadra" */
  vecchia_squadra_aggregate: Vecchia_Squadra_Aggregate;
  /** fetch data from the table: "vecchia_squadra" using primary key columns */
  vecchia_squadra_by_pk?: Maybe<Vecchia_Squadra>;
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
  /** An array relationship */
  veicoli_impiegati: Array<Veicoli_Impiegati>;
  /** An aggregate relationship */
  veicoli_impiegati_aggregate: Veicoli_Impiegati_Aggregate;
  /** fetch data from the table: "veicoli_impiegati" using primary key columns */
  veicoli_impiegati_by_pk?: Maybe<Veicoli_Impiegati>;
};


export type Query_Root_Condizioni_TrafficoArgs = {
  distinct_on?: Maybe<Array<_Condizioni_Traffico_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<_Condizioni_Traffico_Order_By>>;
  where?: Maybe<_Condizioni_Traffico_Bool_Exp>;
};


export type Query_Root_Condizioni_Traffico_AggregateArgs = {
  distinct_on?: Maybe<Array<_Condizioni_Traffico_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<_Condizioni_Traffico_Order_By>>;
  where?: Maybe<_Condizioni_Traffico_Bool_Exp>;
};


export type Query_Root_Condizioni_Traffico_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_Root_Forma_DissestoArgs = {
  distinct_on?: Maybe<Array<_Forma_Dissesto_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<_Forma_Dissesto_Order_By>>;
  where?: Maybe<_Forma_Dissesto_Bool_Exp>;
};


export type Query_Root_Forma_Dissesto_AggregateArgs = {
  distinct_on?: Maybe<Array<_Forma_Dissesto_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<_Forma_Dissesto_Order_By>>;
  where?: Maybe<_Forma_Dissesto_Bool_Exp>;
};


export type Query_Root_Forma_Dissesto_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_Root_Giorni_TrascorsiArgs = {
  distinct_on?: Maybe<Array<_Giorni_Trascorsi_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<_Giorni_Trascorsi_Order_By>>;
  where?: Maybe<_Giorni_Trascorsi_Bool_Exp>;
};


export type Query_Root_Giorni_Trascorsi_AggregateArgs = {
  distinct_on?: Maybe<Array<_Giorni_Trascorsi_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<_Giorni_Trascorsi_Order_By>>;
  where?: Maybe<_Giorni_Trascorsi_Bool_Exp>;
};


export type Query_Root_Giorni_Trascorsi_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_Root_MaterialeArgs = {
  distinct_on?: Maybe<Array<_Materiale_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<_Materiale_Order_By>>;
  where?: Maybe<_Materiale_Bool_Exp>;
};


export type Query_Root_Materiale_AggregateArgs = {
  distinct_on?: Maybe<Array<_Materiale_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<_Materiale_Order_By>>;
  where?: Maybe<_Materiale_Bool_Exp>;
};


export type Query_Root_Materiale_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_Root_PrioritaArgs = {
  distinct_on?: Maybe<Array<_Priorita_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<_Priorita_Order_By>>;
  where?: Maybe<_Priorita_Bool_Exp>;
};


export type Query_Root_Priorita_AggregateArgs = {
  distinct_on?: Maybe<Array<_Priorita_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<_Priorita_Order_By>>;
  where?: Maybe<_Priorita_Bool_Exp>;
};


export type Query_Root_Priorita_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_Root_Sezione_ProtocolloArgs = {
  distinct_on?: Maybe<Array<_Sezione_Protocollo_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<_Sezione_Protocollo_Order_By>>;
  where?: Maybe<_Sezione_Protocollo_Bool_Exp>;
};


export type Query_Root_Sezione_Protocollo_AggregateArgs = {
  distinct_on?: Maybe<Array<_Sezione_Protocollo_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<_Sezione_Protocollo_Order_By>>;
  where?: Maybe<_Sezione_Protocollo_Bool_Exp>;
};


export type Query_Root_Sezione_Protocollo_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_Root_Specifica_Posizionamento_ToponimoArgs = {
  distinct_on?: Maybe<Array<_Specifica_Posizionamento_Toponimo_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<_Specifica_Posizionamento_Toponimo_Order_By>>;
  where?: Maybe<_Specifica_Posizionamento_Toponimo_Bool_Exp>;
};


export type Query_Root_Specifica_Posizionamento_Toponimo_AggregateArgs = {
  distinct_on?: Maybe<Array<_Specifica_Posizionamento_Toponimo_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<_Specifica_Posizionamento_Toponimo_Order_By>>;
  where?: Maybe<_Specifica_Posizionamento_Toponimo_Bool_Exp>;
};


export type Query_Root_Specifica_Posizionamento_Toponimo_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_Root_Stato_SegnalazioneArgs = {
  distinct_on?: Maybe<Array<_Stato_Segnalazione_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<_Stato_Segnalazione_Order_By>>;
  where?: Maybe<_Stato_Segnalazione_Bool_Exp>;
};


export type Query_Root_Stato_Segnalazione_AggregateArgs = {
  distinct_on?: Maybe<Array<_Stato_Segnalazione_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<_Stato_Segnalazione_Order_By>>;
  where?: Maybe<_Stato_Segnalazione_Bool_Exp>;
};


export type Query_Root_Stato_Segnalazione_By_PkArgs = {
  text: Scalars['String'];
};


export type Query_Root_Tipologia_DissestoArgs = {
  distinct_on?: Maybe<Array<_Tipologia_Dissesto_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<_Tipologia_Dissesto_Order_By>>;
  where?: Maybe<_Tipologia_Dissesto_Bool_Exp>;
};


export type Query_Root_Tipologia_Dissesto_AggregateArgs = {
  distinct_on?: Maybe<Array<_Tipologia_Dissesto_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<_Tipologia_Dissesto_Order_By>>;
  where?: Maybe<_Tipologia_Dissesto_Bool_Exp>;
};


export type Query_Root_Tipologia_Dissesto_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_Root_Tipologia_Posizionamento_ToponimoArgs = {
  distinct_on?: Maybe<Array<_Tipologia_Posizionamento_Toponimo_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<_Tipologia_Posizionamento_Toponimo_Order_By>>;
  where?: Maybe<_Tipologia_Posizionamento_Toponimo_Bool_Exp>;
};


export type Query_Root_Tipologia_Posizionamento_Toponimo_AggregateArgs = {
  distinct_on?: Maybe<Array<_Tipologia_Posizionamento_Toponimo_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<_Tipologia_Posizionamento_Toponimo_Order_By>>;
  where?: Maybe<_Tipologia_Posizionamento_Toponimo_Bool_Exp>;
};


export type Query_Root_Tipologia_Posizionamento_Toponimo_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_Root_TitoloArgs = {
  distinct_on?: Maybe<Array<_Titolo_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<_Titolo_Order_By>>;
  where?: Maybe<_Titolo_Bool_Exp>;
};


export type Query_Root_Titolo_AggregateArgs = {
  distinct_on?: Maybe<Array<_Titolo_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<_Titolo_Order_By>>;
  where?: Maybe<_Titolo_Bool_Exp>;
};


export type Query_Root_Titolo_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootAllegatoArgs = {
  distinct_on?: Maybe<Array<Allegato_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Allegato_Order_By>>;
  where?: Maybe<Allegato_Bool_Exp>;
};


export type Query_RootAllegato_AggregateArgs = {
  distinct_on?: Maybe<Array<Allegato_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Allegato_Order_By>>;
  where?: Maybe<Allegato_Bool_Exp>;
};


export type Query_RootAllegato_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootAssegnazione_QuartiereArgs = {
  distinct_on?: Maybe<Array<Assegnazione_Quartiere_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Assegnazione_Quartiere_Order_By>>;
  where?: Maybe<Assegnazione_Quartiere_Bool_Exp>;
};


export type Query_RootAssegnazione_Quartiere_AggregateArgs = {
  distinct_on?: Maybe<Array<Assegnazione_Quartiere_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Assegnazione_Quartiere_Order_By>>;
  where?: Maybe<Assegnazione_Quartiere_Bool_Exp>;
};


export type Query_RootAssegnazione_Quartiere_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootAssegnazione_SquadraArgs = {
  distinct_on?: Maybe<Array<Assegnazione_Squadra_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Assegnazione_Squadra_Order_By>>;
  where?: Maybe<Assegnazione_Squadra_Bool_Exp>;
};


export type Query_RootAssegnazione_Squadra_AggregateArgs = {
  distinct_on?: Maybe<Array<Assegnazione_Squadra_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Assegnazione_Squadra_Order_By>>;
  where?: Maybe<Assegnazione_Squadra_Bool_Exp>;
};


export type Query_RootAssegnazione_Squadra_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootAssegnazione_ToponimoArgs = {
  distinct_on?: Maybe<Array<Assegnazione_Toponimo_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Assegnazione_Toponimo_Order_By>>;
  where?: Maybe<Assegnazione_Toponimo_Bool_Exp>;
};


export type Query_RootAssegnazione_Toponimo_AggregateArgs = {
  distinct_on?: Maybe<Array<Assegnazione_Toponimo_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Assegnazione_Toponimo_Order_By>>;
  where?: Maybe<Assegnazione_Toponimo_Bool_Exp>;
};


export type Query_RootAssegnazione_Toponimo_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootAttrezzature_ImpiegateArgs = {
  distinct_on?: Maybe<Array<Attrezzature_Impiegate_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Attrezzature_Impiegate_Order_By>>;
  where?: Maybe<Attrezzature_Impiegate_Bool_Exp>;
};


export type Query_RootAttrezzature_Impiegate_AggregateArgs = {
  distinct_on?: Maybe<Array<Attrezzature_Impiegate_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Attrezzature_Impiegate_Order_By>>;
  where?: Maybe<Attrezzature_Impiegate_Bool_Exp>;
};


export type Query_RootAttrezzature_Impiegate_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootCivicoArgs = {
  distinct_on?: Maybe<Array<Civico_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Civico_Order_By>>;
  where?: Maybe<Civico_Bool_Exp>;
};


export type Query_RootCivico_AggregateArgs = {
  distinct_on?: Maybe<Array<Civico_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Civico_Order_By>>;
  where?: Maybe<Civico_Bool_Exp>;
};


export type Query_RootCivico_By_PkArgs = {
  id: Scalars['bigint'];
};


export type Query_RootConnessione_GrafoArgs = {
  distinct_on?: Maybe<Array<Connessione_Grafo_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Connessione_Grafo_Order_By>>;
  where?: Maybe<Connessione_Grafo_Bool_Exp>;
};


export type Query_RootConnessione_Grafo_AggregateArgs = {
  distinct_on?: Maybe<Array<Connessione_Grafo_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Connessione_Grafo_Order_By>>;
  where?: Maybe<Connessione_Grafo_Bool_Exp>;
};


export type Query_RootConnessione_Grafo_By_PkArgs = {
  id: Scalars['bigint'];
};


export type Query_RootDiarioArgs = {
  distinct_on?: Maybe<Array<Diario_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Diario_Order_By>>;
  where?: Maybe<Diario_Bool_Exp>;
};


export type Query_RootDiario_AggregateArgs = {
  distinct_on?: Maybe<Array<Diario_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Diario_Order_By>>;
  where?: Maybe<Diario_Bool_Exp>;
};


export type Query_RootDiario_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootDissestoArgs = {
  distinct_on?: Maybe<Array<Dissesto_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Dissesto_Order_By>>;
  where?: Maybe<Dissesto_Bool_Exp>;
};


export type Query_RootDissesto_AggregateArgs = {
  distinct_on?: Maybe<Array<Dissesto_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Dissesto_Order_By>>;
  where?: Maybe<Dissesto_Bool_Exp>;
};


export type Query_RootDissesto_By_PkArgs = {
  id: Scalars['Int'];
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


export type Query_RootEventoArgs = {
  distinct_on?: Maybe<Array<Evento_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Evento_Order_By>>;
  where?: Maybe<Evento_Bool_Exp>;
};


export type Query_RootEvento_AggregateArgs = {
  distinct_on?: Maybe<Array<Evento_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Evento_Order_By>>;
  where?: Maybe<Evento_Bool_Exp>;
};


export type Query_RootEvento_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootInterventoArgs = {
  distinct_on?: Maybe<Array<Intervento_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Intervento_Order_By>>;
  where?: Maybe<Intervento_Bool_Exp>;
};


export type Query_RootIntervento_AggregateArgs = {
  distinct_on?: Maybe<Array<Intervento_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Intervento_Order_By>>;
  where?: Maybe<Intervento_Bool_Exp>;
};


export type Query_RootIntervento_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootIntervento_StraordinarioArgs = {
  distinct_on?: Maybe<Array<Intervento_Straordinario_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Intervento_Straordinario_Order_By>>;
  where?: Maybe<Intervento_Straordinario_Bool_Exp>;
};


export type Query_RootIntervento_Straordinario_AggregateArgs = {
  distinct_on?: Maybe<Array<Intervento_Straordinario_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Intervento_Straordinario_Order_By>>;
  where?: Maybe<Intervento_Straordinario_Bool_Exp>;
};


export type Query_RootIntervento_Straordinario_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootMateriale_DissestoArgs = {
  distinct_on?: Maybe<Array<Materiale_Dissesto_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Materiale_Dissesto_Order_By>>;
  where?: Maybe<Materiale_Dissesto_Bool_Exp>;
};


export type Query_RootMateriale_Dissesto_AggregateArgs = {
  distinct_on?: Maybe<Array<Materiale_Dissesto_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Materiale_Dissesto_Order_By>>;
  where?: Maybe<Materiale_Dissesto_Bool_Exp>;
};


export type Query_RootMateriale_Dissesto_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootMembroArgs = {
  distinct_on?: Maybe<Array<Membro_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Membro_Order_By>>;
  where?: Maybe<Membro_Bool_Exp>;
};


export type Query_RootMembro_AggregateArgs = {
  distinct_on?: Maybe<Array<Membro_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Membro_Order_By>>;
  where?: Maybe<Membro_Bool_Exp>;
};


export type Query_RootMembro_By_PkArgs = {
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


export type Query_RootPosizionamento_ToponimoArgs = {
  distinct_on?: Maybe<Array<Posizionamento_Toponimo_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Posizionamento_Toponimo_Order_By>>;
  where?: Maybe<Posizionamento_Toponimo_Bool_Exp>;
};


export type Query_RootPosizionamento_Toponimo_AggregateArgs = {
  distinct_on?: Maybe<Array<Posizionamento_Toponimo_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Posizionamento_Toponimo_Order_By>>;
  where?: Maybe<Posizionamento_Toponimo_Bool_Exp>;
};


export type Query_RootPosizionamento_Toponimo_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootProtocolloArgs = {
  distinct_on?: Maybe<Array<Protocollo_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Protocollo_Order_By>>;
  where?: Maybe<Protocollo_Bool_Exp>;
};


export type Query_RootProtocollo_AggregateArgs = {
  distinct_on?: Maybe<Array<Protocollo_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Protocollo_Order_By>>;
  where?: Maybe<Protocollo_Bool_Exp>;
};


export type Query_RootProtocollo_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootProtocollo_DestinatarioArgs = {
  distinct_on?: Maybe<Array<Protocollo_Destinatario_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Protocollo_Destinatario_Order_By>>;
  where?: Maybe<Protocollo_Destinatario_Bool_Exp>;
};


export type Query_RootProtocollo_Destinatario_AggregateArgs = {
  distinct_on?: Maybe<Array<Protocollo_Destinatario_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Protocollo_Destinatario_Order_By>>;
  where?: Maybe<Protocollo_Destinatario_Bool_Exp>;
};


export type Query_RootProtocollo_Destinatario_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootProtocollo_Destinatario_EsternoArgs = {
  distinct_on?: Maybe<Array<Protocollo_Destinatario_Esterno_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Protocollo_Destinatario_Esterno_Order_By>>;
  where?: Maybe<Protocollo_Destinatario_Esterno_Bool_Exp>;
};


export type Query_RootProtocollo_Destinatario_Esterno_AggregateArgs = {
  distinct_on?: Maybe<Array<Protocollo_Destinatario_Esterno_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Protocollo_Destinatario_Esterno_Order_By>>;
  where?: Maybe<Protocollo_Destinatario_Esterno_Bool_Exp>;
};


export type Query_RootProtocollo_Destinatario_Esterno_By_PkArgs = {
  id: Scalars['Int'];
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


export type Query_RootSegnalazioneArgs = {
  distinct_on?: Maybe<Array<Segnalazione_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Segnalazione_Order_By>>;
  where?: Maybe<Segnalazione_Bool_Exp>;
};


export type Query_RootSegnalazione_AggregateArgs = {
  distinct_on?: Maybe<Array<Segnalazione_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Segnalazione_Order_By>>;
  where?: Maybe<Segnalazione_Bool_Exp>;
};


export type Query_RootSegnalazione_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootSegnalazione_CollegataArgs = {
  distinct_on?: Maybe<Array<Segnalazione_Collegata_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Segnalazione_Collegata_Order_By>>;
  where?: Maybe<Segnalazione_Collegata_Bool_Exp>;
};


export type Query_RootSegnalazione_Collegata_AggregateArgs = {
  distinct_on?: Maybe<Array<Segnalazione_Collegata_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Segnalazione_Collegata_Order_By>>;
  where?: Maybe<Segnalazione_Collegata_Bool_Exp>;
};


export type Query_RootSegnalazione_Collegata_By_PkArgs = {
  segnalazione_collegata_id: Scalars['Int'];
  segnalazione_id: Scalars['Int'];
};


export type Query_RootSegnaletica_LasciataArgs = {
  distinct_on?: Maybe<Array<Segnaletica_Lasciata_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Segnaletica_Lasciata_Order_By>>;
  where?: Maybe<Segnaletica_Lasciata_Bool_Exp>;
};


export type Query_RootSegnaletica_Lasciata_AggregateArgs = {
  distinct_on?: Maybe<Array<Segnaletica_Lasciata_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Segnaletica_Lasciata_Order_By>>;
  where?: Maybe<Segnaletica_Lasciata_Bool_Exp>;
};


export type Query_RootSegnaletica_Lasciata_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootSostegno_IpiArgs = {
  distinct_on?: Maybe<Array<Sostegno_Ipi_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Sostegno_Ipi_Order_By>>;
  where?: Maybe<Sostegno_Ipi_Bool_Exp>;
};


export type Query_RootSostegno_Ipi_AggregateArgs = {
  distinct_on?: Maybe<Array<Sostegno_Ipi_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Sostegno_Ipi_Order_By>>;
  where?: Maybe<Sostegno_Ipi_Bool_Exp>;
};


export type Query_RootSostegno_Ipi_By_PkArgs = {
  id: Scalars['bigint'];
};


export type Query_RootSquadraArgs = {
  distinct_on?: Maybe<Array<Squadra_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Squadra_Order_By>>;
  where?: Maybe<Squadra_Bool_Exp>;
};


export type Query_RootSquadra_AggregateArgs = {
  distinct_on?: Maybe<Array<Squadra_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Squadra_Order_By>>;
  where?: Maybe<Squadra_Bool_Exp>;
};


export type Query_RootSquadra_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootTecnico_ReferenteArgs = {
  distinct_on?: Maybe<Array<Tecnico_Referente_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Tecnico_Referente_Order_By>>;
  where?: Maybe<Tecnico_Referente_Bool_Exp>;
};


export type Query_RootTecnico_Referente_AggregateArgs = {
  distinct_on?: Maybe<Array<Tecnico_Referente_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Tecnico_Referente_Order_By>>;
  where?: Maybe<Tecnico_Referente_Bool_Exp>;
};


export type Query_RootTecnico_Referente_By_PkArgs = {
  id: Scalars['Int'];
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


export type Query_RootVecchia_SquadraArgs = {
  distinct_on?: Maybe<Array<Vecchia_Squadra_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Vecchia_Squadra_Order_By>>;
  where?: Maybe<Vecchia_Squadra_Bool_Exp>;
};


export type Query_RootVecchia_Squadra_AggregateArgs = {
  distinct_on?: Maybe<Array<Vecchia_Squadra_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Vecchia_Squadra_Order_By>>;
  where?: Maybe<Vecchia_Squadra_Bool_Exp>;
};


export type Query_RootVecchia_Squadra_By_PkArgs = {
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


export type Query_RootVeicoli_ImpiegatiArgs = {
  distinct_on?: Maybe<Array<Veicoli_Impiegati_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Veicoli_Impiegati_Order_By>>;
  where?: Maybe<Veicoli_Impiegati_Bool_Exp>;
};


export type Query_RootVeicoli_Impiegati_AggregateArgs = {
  distinct_on?: Maybe<Array<Veicoli_Impiegati_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Veicoli_Impiegati_Order_By>>;
  where?: Maybe<Veicoli_Impiegati_Bool_Exp>;
};


export type Query_RootVeicoli_Impiegati_By_PkArgs = {
  id: Scalars['Int'];
};

/** columns and relationships of "segnalazione" */
export type Segnalazione = {
  __typename?: 'segnalazione';
  /** An array relationship */
  allegati: Array<Allegato>;
  /** An aggregate relationship */
  allegati_aggregate: Allegato_Aggregate;
  created_at: Scalars['timestamptz'];
  data?: Maybe<Scalars['timestamptz']>;
  /** An array relationship */
  diario: Array<Diario>;
  /** An aggregate relationship */
  diario_aggregate: Diario_Aggregate;
  /** An object relationship */
  dissesto?: Maybe<Dissesto>;
  dissesto_id?: Maybe<Scalars['Int']>;
  /** An array relationship */
  eventi: Array<Evento>;
  /** An aggregate relationship */
  eventi_aggregate: Evento_Aggregate;
  id: Scalars['Int'];
  /** An object relationship */
  intervento?: Maybe<Intervento>;
  intervento_id?: Maybe<Scalars['Int']>;
  municipalita?: Maybe<Municipalita>;
  municipalita_id?: Maybe<Scalars['Int']>;
  municipalita_storica?: Maybe<Scalars['jsonb']>;
  /** An object relationship */
  posizionamento_toponimo_punto_iniziale?: Maybe<Posizionamento_Toponimo>;
  /** An object relationship */
  priorita?: Maybe<_Priorita>;
  priorita_id?: Maybe<Scalars['Int']>;
  /** An object relationship */
  protocollo?: Maybe<Protocollo>;
  protocollo_id?: Maybe<Scalars['Int']>;
  punto_iniziale_posizionamento_id?: Maybe<Scalars['Int']>;
  quartiere?: Maybe<Quartiere>;
  quartiere_id?: Maybe<Scalars['Int']>;
  quartiere_storico?: Maybe<Scalars['jsonb']>;
  richiesta_protezione_civile?: Maybe<Scalars['Boolean']>;
  /** An array relationship */
  segnalazioni_collegate: Array<Segnalazione_Collegata>;
  /** An aggregate relationship */
  segnalazioni_collegate_aggregate: Segnalazione_Collegata_Aggregate;
  stato: _Stato_Segnalazione_Enum;
  /** An object relationship */
  tecnico_referente?: Maybe<Tecnico_Referente>;
  tecnico_referente_id?: Maybe<Scalars['Int']>;
  toponimo?: Maybe<Toponimo>;
  toponimo_id?: Maybe<Scalars['Int']>;
  toponimo_storico?: Maybe<Scalars['jsonb']>;
  updated_at: Scalars['timestamptz'];
};


/** columns and relationships of "segnalazione" */
export type SegnalazioneAllegatiArgs = {
  distinct_on?: Maybe<Array<Allegato_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Allegato_Order_By>>;
  where?: Maybe<Allegato_Bool_Exp>;
};


/** columns and relationships of "segnalazione" */
export type SegnalazioneAllegati_AggregateArgs = {
  distinct_on?: Maybe<Array<Allegato_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Allegato_Order_By>>;
  where?: Maybe<Allegato_Bool_Exp>;
};


/** columns and relationships of "segnalazione" */
export type SegnalazioneDiarioArgs = {
  distinct_on?: Maybe<Array<Diario_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Diario_Order_By>>;
  where?: Maybe<Diario_Bool_Exp>;
};


/** columns and relationships of "segnalazione" */
export type SegnalazioneDiario_AggregateArgs = {
  distinct_on?: Maybe<Array<Diario_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Diario_Order_By>>;
  where?: Maybe<Diario_Bool_Exp>;
};


/** columns and relationships of "segnalazione" */
export type SegnalazioneEventiArgs = {
  distinct_on?: Maybe<Array<Evento_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Evento_Order_By>>;
  where?: Maybe<Evento_Bool_Exp>;
};


/** columns and relationships of "segnalazione" */
export type SegnalazioneEventi_AggregateArgs = {
  distinct_on?: Maybe<Array<Evento_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Evento_Order_By>>;
  where?: Maybe<Evento_Bool_Exp>;
};


/** columns and relationships of "segnalazione" */
export type SegnalazioneMunicipalita_StoricaArgs = {
  path?: Maybe<Scalars['String']>;
};


/** columns and relationships of "segnalazione" */
export type SegnalazioneQuartiere_StoricoArgs = {
  path?: Maybe<Scalars['String']>;
};


/** columns and relationships of "segnalazione" */
export type SegnalazioneSegnalazioni_CollegateArgs = {
  distinct_on?: Maybe<Array<Segnalazione_Collegata_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Segnalazione_Collegata_Order_By>>;
  where?: Maybe<Segnalazione_Collegata_Bool_Exp>;
};


/** columns and relationships of "segnalazione" */
export type SegnalazioneSegnalazioni_Collegate_AggregateArgs = {
  distinct_on?: Maybe<Array<Segnalazione_Collegata_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Segnalazione_Collegata_Order_By>>;
  where?: Maybe<Segnalazione_Collegata_Bool_Exp>;
};


/** columns and relationships of "segnalazione" */
export type SegnalazioneToponimo_StoricoArgs = {
  path?: Maybe<Scalars['String']>;
};

/** aggregated selection of "segnalazione" */
export type Segnalazione_Aggregate = {
  __typename?: 'segnalazione_aggregate';
  aggregate?: Maybe<Segnalazione_Aggregate_Fields>;
  nodes: Array<Segnalazione>;
};

/** aggregate fields of "segnalazione" */
export type Segnalazione_Aggregate_Fields = {
  __typename?: 'segnalazione_aggregate_fields';
  avg?: Maybe<Segnalazione_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Segnalazione_Max_Fields>;
  min?: Maybe<Segnalazione_Min_Fields>;
  stddev?: Maybe<Segnalazione_Stddev_Fields>;
  stddev_pop?: Maybe<Segnalazione_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Segnalazione_Stddev_Samp_Fields>;
  sum?: Maybe<Segnalazione_Sum_Fields>;
  var_pop?: Maybe<Segnalazione_Var_Pop_Fields>;
  var_samp?: Maybe<Segnalazione_Var_Samp_Fields>;
  variance?: Maybe<Segnalazione_Variance_Fields>;
};


/** aggregate fields of "segnalazione" */
export type Segnalazione_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Segnalazione_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Segnalazione_Append_Input = {
  municipalita_storica?: Maybe<Scalars['jsonb']>;
  quartiere_storico?: Maybe<Scalars['jsonb']>;
  toponimo_storico?: Maybe<Scalars['jsonb']>;
};

/** aggregate avg on columns */
export type Segnalazione_Avg_Fields = {
  __typename?: 'segnalazione_avg_fields';
  dissesto_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  intervento_id?: Maybe<Scalars['Float']>;
  municipalita_id?: Maybe<Scalars['Float']>;
  priorita_id?: Maybe<Scalars['Float']>;
  protocollo_id?: Maybe<Scalars['Float']>;
  punto_iniziale_posizionamento_id?: Maybe<Scalars['Float']>;
  quartiere_id?: Maybe<Scalars['Float']>;
  tecnico_referente_id?: Maybe<Scalars['Float']>;
  toponimo_id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "segnalazione". All fields are combined with a logical 'AND'. */
export type Segnalazione_Bool_Exp = {
  _and?: Maybe<Array<Segnalazione_Bool_Exp>>;
  _not?: Maybe<Segnalazione_Bool_Exp>;
  _or?: Maybe<Array<Segnalazione_Bool_Exp>>;
  allegati?: Maybe<Allegato_Bool_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  data?: Maybe<Timestamptz_Comparison_Exp>;
  diario?: Maybe<Diario_Bool_Exp>;
  dissesto?: Maybe<Dissesto_Bool_Exp>;
  dissesto_id?: Maybe<Int_Comparison_Exp>;
  eventi?: Maybe<Evento_Bool_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  intervento?: Maybe<Intervento_Bool_Exp>;
  intervento_id?: Maybe<Int_Comparison_Exp>;
  municipalita_id?: Maybe<Int_Comparison_Exp>;
  municipalita_storica?: Maybe<Jsonb_Comparison_Exp>;
  posizionamento_toponimo_punto_iniziale?: Maybe<Posizionamento_Toponimo_Bool_Exp>;
  priorita?: Maybe<_Priorita_Bool_Exp>;
  priorita_id?: Maybe<Int_Comparison_Exp>;
  protocollo?: Maybe<Protocollo_Bool_Exp>;
  protocollo_id?: Maybe<Int_Comparison_Exp>;
  punto_iniziale_posizionamento_id?: Maybe<Int_Comparison_Exp>;
  quartiere_id?: Maybe<Int_Comparison_Exp>;
  quartiere_storico?: Maybe<Jsonb_Comparison_Exp>;
  richiesta_protezione_civile?: Maybe<Boolean_Comparison_Exp>;
  segnalazioni_collegate?: Maybe<Segnalazione_Collegata_Bool_Exp>;
  stato?: Maybe<_Stato_Segnalazione_Enum_Comparison_Exp>;
  tecnico_referente?: Maybe<Tecnico_Referente_Bool_Exp>;
  tecnico_referente_id?: Maybe<Int_Comparison_Exp>;
  toponimo_id?: Maybe<Int_Comparison_Exp>;
  toponimo_storico?: Maybe<Jsonb_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** columns and relationships of "segnalazione_collegata" */
export type Segnalazione_Collegata = {
  __typename?: 'segnalazione_collegata';
  created_at: Scalars['timestamptz'];
  delete: Scalars['Boolean'];
  /** An object relationship */
  segnalazione: Segnalazione;
  segnalazione_collegata_id: Scalars['Int'];
  segnalazione_id: Scalars['Int'];
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "segnalazione_collegata" */
export type Segnalazione_Collegata_Aggregate = {
  __typename?: 'segnalazione_collegata_aggregate';
  aggregate?: Maybe<Segnalazione_Collegata_Aggregate_Fields>;
  nodes: Array<Segnalazione_Collegata>;
};

/** aggregate fields of "segnalazione_collegata" */
export type Segnalazione_Collegata_Aggregate_Fields = {
  __typename?: 'segnalazione_collegata_aggregate_fields';
  avg?: Maybe<Segnalazione_Collegata_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Segnalazione_Collegata_Max_Fields>;
  min?: Maybe<Segnalazione_Collegata_Min_Fields>;
  stddev?: Maybe<Segnalazione_Collegata_Stddev_Fields>;
  stddev_pop?: Maybe<Segnalazione_Collegata_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Segnalazione_Collegata_Stddev_Samp_Fields>;
  sum?: Maybe<Segnalazione_Collegata_Sum_Fields>;
  var_pop?: Maybe<Segnalazione_Collegata_Var_Pop_Fields>;
  var_samp?: Maybe<Segnalazione_Collegata_Var_Samp_Fields>;
  variance?: Maybe<Segnalazione_Collegata_Variance_Fields>;
};


/** aggregate fields of "segnalazione_collegata" */
export type Segnalazione_Collegata_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Segnalazione_Collegata_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "segnalazione_collegata" */
export type Segnalazione_Collegata_Aggregate_Order_By = {
  avg?: Maybe<Segnalazione_Collegata_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Segnalazione_Collegata_Max_Order_By>;
  min?: Maybe<Segnalazione_Collegata_Min_Order_By>;
  stddev?: Maybe<Segnalazione_Collegata_Stddev_Order_By>;
  stddev_pop?: Maybe<Segnalazione_Collegata_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Segnalazione_Collegata_Stddev_Samp_Order_By>;
  sum?: Maybe<Segnalazione_Collegata_Sum_Order_By>;
  var_pop?: Maybe<Segnalazione_Collegata_Var_Pop_Order_By>;
  var_samp?: Maybe<Segnalazione_Collegata_Var_Samp_Order_By>;
  variance?: Maybe<Segnalazione_Collegata_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "segnalazione_collegata" */
export type Segnalazione_Collegata_Arr_Rel_Insert_Input = {
  data: Array<Segnalazione_Collegata_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Segnalazione_Collegata_On_Conflict>;
};

/** aggregate avg on columns */
export type Segnalazione_Collegata_Avg_Fields = {
  __typename?: 'segnalazione_collegata_avg_fields';
  segnalazione_collegata_id?: Maybe<Scalars['Float']>;
  segnalazione_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "segnalazione_collegata" */
export type Segnalazione_Collegata_Avg_Order_By = {
  segnalazione_collegata_id?: Maybe<Order_By>;
  segnalazione_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "segnalazione_collegata". All fields are combined with a logical 'AND'. */
export type Segnalazione_Collegata_Bool_Exp = {
  _and?: Maybe<Array<Segnalazione_Collegata_Bool_Exp>>;
  _not?: Maybe<Segnalazione_Collegata_Bool_Exp>;
  _or?: Maybe<Array<Segnalazione_Collegata_Bool_Exp>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  delete?: Maybe<Boolean_Comparison_Exp>;
  segnalazione?: Maybe<Segnalazione_Bool_Exp>;
  segnalazione_collegata_id?: Maybe<Int_Comparison_Exp>;
  segnalazione_id?: Maybe<Int_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "segnalazione_collegata" */
export enum Segnalazione_Collegata_Constraint {
  /** unique or primary key constraint */
  SegnalazioneCollegataPkey = 'segnalazione_collegata_pkey'
}

/** input type for incrementing numeric columns in table "segnalazione_collegata" */
export type Segnalazione_Collegata_Inc_Input = {
  segnalazione_collegata_id?: Maybe<Scalars['Int']>;
  segnalazione_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "segnalazione_collegata" */
export type Segnalazione_Collegata_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  delete?: Maybe<Scalars['Boolean']>;
  segnalazione?: Maybe<Segnalazione_Obj_Rel_Insert_Input>;
  segnalazione_collegata_id?: Maybe<Scalars['Int']>;
  segnalazione_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Segnalazione_Collegata_Max_Fields = {
  __typename?: 'segnalazione_collegata_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  segnalazione_collegata_id?: Maybe<Scalars['Int']>;
  segnalazione_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "segnalazione_collegata" */
export type Segnalazione_Collegata_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  segnalazione_collegata_id?: Maybe<Order_By>;
  segnalazione_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Segnalazione_Collegata_Min_Fields = {
  __typename?: 'segnalazione_collegata_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  segnalazione_collegata_id?: Maybe<Scalars['Int']>;
  segnalazione_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "segnalazione_collegata" */
export type Segnalazione_Collegata_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  segnalazione_collegata_id?: Maybe<Order_By>;
  segnalazione_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "segnalazione_collegata" */
export type Segnalazione_Collegata_Mutation_Response = {
  __typename?: 'segnalazione_collegata_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Segnalazione_Collegata>;
};

/** on conflict condition type for table "segnalazione_collegata" */
export type Segnalazione_Collegata_On_Conflict = {
  constraint: Segnalazione_Collegata_Constraint;
  update_columns?: Array<Segnalazione_Collegata_Update_Column>;
  where?: Maybe<Segnalazione_Collegata_Bool_Exp>;
};

/** Ordering options when selecting data from "segnalazione_collegata". */
export type Segnalazione_Collegata_Order_By = {
  created_at?: Maybe<Order_By>;
  delete?: Maybe<Order_By>;
  segnalazione?: Maybe<Segnalazione_Order_By>;
  segnalazione_collegata_id?: Maybe<Order_By>;
  segnalazione_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: segnalazione_collegata */
export type Segnalazione_Collegata_Pk_Columns_Input = {
  segnalazione_collegata_id: Scalars['Int'];
  segnalazione_id: Scalars['Int'];
};

/** select columns of table "segnalazione_collegata" */
export enum Segnalazione_Collegata_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Delete = 'delete',
  /** column name */
  SegnalazioneCollegataId = 'segnalazione_collegata_id',
  /** column name */
  SegnalazioneId = 'segnalazione_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "segnalazione_collegata" */
export type Segnalazione_Collegata_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  delete?: Maybe<Scalars['Boolean']>;
  segnalazione_collegata_id?: Maybe<Scalars['Int']>;
  segnalazione_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Segnalazione_Collegata_Stddev_Fields = {
  __typename?: 'segnalazione_collegata_stddev_fields';
  segnalazione_collegata_id?: Maybe<Scalars['Float']>;
  segnalazione_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "segnalazione_collegata" */
export type Segnalazione_Collegata_Stddev_Order_By = {
  segnalazione_collegata_id?: Maybe<Order_By>;
  segnalazione_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Segnalazione_Collegata_Stddev_Pop_Fields = {
  __typename?: 'segnalazione_collegata_stddev_pop_fields';
  segnalazione_collegata_id?: Maybe<Scalars['Float']>;
  segnalazione_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "segnalazione_collegata" */
export type Segnalazione_Collegata_Stddev_Pop_Order_By = {
  segnalazione_collegata_id?: Maybe<Order_By>;
  segnalazione_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Segnalazione_Collegata_Stddev_Samp_Fields = {
  __typename?: 'segnalazione_collegata_stddev_samp_fields';
  segnalazione_collegata_id?: Maybe<Scalars['Float']>;
  segnalazione_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "segnalazione_collegata" */
export type Segnalazione_Collegata_Stddev_Samp_Order_By = {
  segnalazione_collegata_id?: Maybe<Order_By>;
  segnalazione_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Segnalazione_Collegata_Sum_Fields = {
  __typename?: 'segnalazione_collegata_sum_fields';
  segnalazione_collegata_id?: Maybe<Scalars['Int']>;
  segnalazione_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "segnalazione_collegata" */
export type Segnalazione_Collegata_Sum_Order_By = {
  segnalazione_collegata_id?: Maybe<Order_By>;
  segnalazione_id?: Maybe<Order_By>;
};

/** update columns of table "segnalazione_collegata" */
export enum Segnalazione_Collegata_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Delete = 'delete',
  /** column name */
  SegnalazioneCollegataId = 'segnalazione_collegata_id',
  /** column name */
  SegnalazioneId = 'segnalazione_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Segnalazione_Collegata_Var_Pop_Fields = {
  __typename?: 'segnalazione_collegata_var_pop_fields';
  segnalazione_collegata_id?: Maybe<Scalars['Float']>;
  segnalazione_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "segnalazione_collegata" */
export type Segnalazione_Collegata_Var_Pop_Order_By = {
  segnalazione_collegata_id?: Maybe<Order_By>;
  segnalazione_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Segnalazione_Collegata_Var_Samp_Fields = {
  __typename?: 'segnalazione_collegata_var_samp_fields';
  segnalazione_collegata_id?: Maybe<Scalars['Float']>;
  segnalazione_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "segnalazione_collegata" */
export type Segnalazione_Collegata_Var_Samp_Order_By = {
  segnalazione_collegata_id?: Maybe<Order_By>;
  segnalazione_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Segnalazione_Collegata_Variance_Fields = {
  __typename?: 'segnalazione_collegata_variance_fields';
  segnalazione_collegata_id?: Maybe<Scalars['Float']>;
  segnalazione_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "segnalazione_collegata" */
export type Segnalazione_Collegata_Variance_Order_By = {
  segnalazione_collegata_id?: Maybe<Order_By>;
  segnalazione_id?: Maybe<Order_By>;
};

/** unique or primary key constraints on table "segnalazione" */
export enum Segnalazione_Constraint {
  /** unique or primary key constraint */
  SegnalazionePkey = 'segnalazione_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Segnalazione_Delete_At_Path_Input = {
  municipalita_storica?: Maybe<Array<Scalars['String']>>;
  quartiere_storico?: Maybe<Array<Scalars['String']>>;
  toponimo_storico?: Maybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Segnalazione_Delete_Elem_Input = {
  municipalita_storica?: Maybe<Scalars['Int']>;
  quartiere_storico?: Maybe<Scalars['Int']>;
  toponimo_storico?: Maybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Segnalazione_Delete_Key_Input = {
  municipalita_storica?: Maybe<Scalars['String']>;
  quartiere_storico?: Maybe<Scalars['String']>;
  toponimo_storico?: Maybe<Scalars['String']>;
};

/** input type for incrementing numeric columns in table "segnalazione" */
export type Segnalazione_Inc_Input = {
  dissesto_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  intervento_id?: Maybe<Scalars['Int']>;
  municipalita_id?: Maybe<Scalars['Int']>;
  priorita_id?: Maybe<Scalars['Int']>;
  protocollo_id?: Maybe<Scalars['Int']>;
  punto_iniziale_posizionamento_id?: Maybe<Scalars['Int']>;
  quartiere_id?: Maybe<Scalars['Int']>;
  tecnico_referente_id?: Maybe<Scalars['Int']>;
  toponimo_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "segnalazione" */
export type Segnalazione_Insert_Input = {
  allegati?: Maybe<Allegato_Arr_Rel_Insert_Input>;
  created_at?: Maybe<Scalars['timestamptz']>;
  data?: Maybe<Scalars['timestamptz']>;
  diario?: Maybe<Diario_Arr_Rel_Insert_Input>;
  dissesto?: Maybe<Dissesto_Obj_Rel_Insert_Input>;
  dissesto_id?: Maybe<Scalars['Int']>;
  eventi?: Maybe<Evento_Arr_Rel_Insert_Input>;
  id?: Maybe<Scalars['Int']>;
  intervento?: Maybe<Intervento_Obj_Rel_Insert_Input>;
  intervento_id?: Maybe<Scalars['Int']>;
  municipalita_id?: Maybe<Scalars['Int']>;
  municipalita_storica?: Maybe<Scalars['jsonb']>;
  posizionamento_toponimo_punto_iniziale?: Maybe<Posizionamento_Toponimo_Obj_Rel_Insert_Input>;
  priorita?: Maybe<_Priorita_Obj_Rel_Insert_Input>;
  priorita_id?: Maybe<Scalars['Int']>;
  protocollo?: Maybe<Protocollo_Obj_Rel_Insert_Input>;
  protocollo_id?: Maybe<Scalars['Int']>;
  punto_iniziale_posizionamento_id?: Maybe<Scalars['Int']>;
  quartiere_id?: Maybe<Scalars['Int']>;
  quartiere_storico?: Maybe<Scalars['jsonb']>;
  richiesta_protezione_civile?: Maybe<Scalars['Boolean']>;
  segnalazioni_collegate?: Maybe<Segnalazione_Collegata_Arr_Rel_Insert_Input>;
  stato?: Maybe<_Stato_Segnalazione_Enum>;
  tecnico_referente?: Maybe<Tecnico_Referente_Obj_Rel_Insert_Input>;
  tecnico_referente_id?: Maybe<Scalars['Int']>;
  toponimo_id?: Maybe<Scalars['Int']>;
  toponimo_storico?: Maybe<Scalars['jsonb']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Segnalazione_Max_Fields = {
  __typename?: 'segnalazione_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  data?: Maybe<Scalars['timestamptz']>;
  dissesto_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  intervento_id?: Maybe<Scalars['Int']>;
  municipalita_id?: Maybe<Scalars['Int']>;
  priorita_id?: Maybe<Scalars['Int']>;
  protocollo_id?: Maybe<Scalars['Int']>;
  punto_iniziale_posizionamento_id?: Maybe<Scalars['Int']>;
  quartiere_id?: Maybe<Scalars['Int']>;
  tecnico_referente_id?: Maybe<Scalars['Int']>;
  toponimo_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Segnalazione_Min_Fields = {
  __typename?: 'segnalazione_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  data?: Maybe<Scalars['timestamptz']>;
  dissesto_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  intervento_id?: Maybe<Scalars['Int']>;
  municipalita_id?: Maybe<Scalars['Int']>;
  priorita_id?: Maybe<Scalars['Int']>;
  protocollo_id?: Maybe<Scalars['Int']>;
  punto_iniziale_posizionamento_id?: Maybe<Scalars['Int']>;
  quartiere_id?: Maybe<Scalars['Int']>;
  tecnico_referente_id?: Maybe<Scalars['Int']>;
  toponimo_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "segnalazione" */
export type Segnalazione_Mutation_Response = {
  __typename?: 'segnalazione_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Segnalazione>;
};

/** input type for inserting object relation for remote table "segnalazione" */
export type Segnalazione_Obj_Rel_Insert_Input = {
  data: Segnalazione_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Segnalazione_On_Conflict>;
};

/** on conflict condition type for table "segnalazione" */
export type Segnalazione_On_Conflict = {
  constraint: Segnalazione_Constraint;
  update_columns?: Array<Segnalazione_Update_Column>;
  where?: Maybe<Segnalazione_Bool_Exp>;
};

/** Ordering options when selecting data from "segnalazione". */
export type Segnalazione_Order_By = {
  allegati_aggregate?: Maybe<Allegato_Aggregate_Order_By>;
  created_at?: Maybe<Order_By>;
  data?: Maybe<Order_By>;
  diario_aggregate?: Maybe<Diario_Aggregate_Order_By>;
  dissesto?: Maybe<Dissesto_Order_By>;
  dissesto_id?: Maybe<Order_By>;
  eventi_aggregate?: Maybe<Evento_Aggregate_Order_By>;
  id?: Maybe<Order_By>;
  intervento?: Maybe<Intervento_Order_By>;
  intervento_id?: Maybe<Order_By>;
  municipalita_id?: Maybe<Order_By>;
  municipalita_storica?: Maybe<Order_By>;
  posizionamento_toponimo_punto_iniziale?: Maybe<Posizionamento_Toponimo_Order_By>;
  priorita?: Maybe<_Priorita_Order_By>;
  priorita_id?: Maybe<Order_By>;
  protocollo?: Maybe<Protocollo_Order_By>;
  protocollo_id?: Maybe<Order_By>;
  punto_iniziale_posizionamento_id?: Maybe<Order_By>;
  quartiere_id?: Maybe<Order_By>;
  quartiere_storico?: Maybe<Order_By>;
  richiesta_protezione_civile?: Maybe<Order_By>;
  segnalazioni_collegate_aggregate?: Maybe<Segnalazione_Collegata_Aggregate_Order_By>;
  stato?: Maybe<Order_By>;
  tecnico_referente?: Maybe<Tecnico_Referente_Order_By>;
  tecnico_referente_id?: Maybe<Order_By>;
  toponimo_id?: Maybe<Order_By>;
  toponimo_storico?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: segnalazione */
export type Segnalazione_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Segnalazione_Prepend_Input = {
  municipalita_storica?: Maybe<Scalars['jsonb']>;
  quartiere_storico?: Maybe<Scalars['jsonb']>;
  toponimo_storico?: Maybe<Scalars['jsonb']>;
};

/** select columns of table "segnalazione" */
export enum Segnalazione_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Data = 'data',
  /** column name */
  DissestoId = 'dissesto_id',
  /** column name */
  Id = 'id',
  /** column name */
  InterventoId = 'intervento_id',
  /** column name */
  MunicipalitaId = 'municipalita_id',
  /** column name */
  MunicipalitaStorica = 'municipalita_storica',
  /** column name */
  PrioritaId = 'priorita_id',
  /** column name */
  ProtocolloId = 'protocollo_id',
  /** column name */
  PuntoInizialePosizionamentoId = 'punto_iniziale_posizionamento_id',
  /** column name */
  QuartiereId = 'quartiere_id',
  /** column name */
  QuartiereStorico = 'quartiere_storico',
  /** column name */
  RichiestaProtezioneCivile = 'richiesta_protezione_civile',
  /** column name */
  Stato = 'stato',
  /** column name */
  TecnicoReferenteId = 'tecnico_referente_id',
  /** column name */
  ToponimoId = 'toponimo_id',
  /** column name */
  ToponimoStorico = 'toponimo_storico',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "segnalazione" */
export type Segnalazione_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  data?: Maybe<Scalars['timestamptz']>;
  dissesto_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  intervento_id?: Maybe<Scalars['Int']>;
  municipalita_id?: Maybe<Scalars['Int']>;
  municipalita_storica?: Maybe<Scalars['jsonb']>;
  priorita_id?: Maybe<Scalars['Int']>;
  protocollo_id?: Maybe<Scalars['Int']>;
  punto_iniziale_posizionamento_id?: Maybe<Scalars['Int']>;
  quartiere_id?: Maybe<Scalars['Int']>;
  quartiere_storico?: Maybe<Scalars['jsonb']>;
  richiesta_protezione_civile?: Maybe<Scalars['Boolean']>;
  stato?: Maybe<_Stato_Segnalazione_Enum>;
  tecnico_referente_id?: Maybe<Scalars['Int']>;
  toponimo_id?: Maybe<Scalars['Int']>;
  toponimo_storico?: Maybe<Scalars['jsonb']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Segnalazione_Stddev_Fields = {
  __typename?: 'segnalazione_stddev_fields';
  dissesto_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  intervento_id?: Maybe<Scalars['Float']>;
  municipalita_id?: Maybe<Scalars['Float']>;
  priorita_id?: Maybe<Scalars['Float']>;
  protocollo_id?: Maybe<Scalars['Float']>;
  punto_iniziale_posizionamento_id?: Maybe<Scalars['Float']>;
  quartiere_id?: Maybe<Scalars['Float']>;
  tecnico_referente_id?: Maybe<Scalars['Float']>;
  toponimo_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Segnalazione_Stddev_Pop_Fields = {
  __typename?: 'segnalazione_stddev_pop_fields';
  dissesto_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  intervento_id?: Maybe<Scalars['Float']>;
  municipalita_id?: Maybe<Scalars['Float']>;
  priorita_id?: Maybe<Scalars['Float']>;
  protocollo_id?: Maybe<Scalars['Float']>;
  punto_iniziale_posizionamento_id?: Maybe<Scalars['Float']>;
  quartiere_id?: Maybe<Scalars['Float']>;
  tecnico_referente_id?: Maybe<Scalars['Float']>;
  toponimo_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Segnalazione_Stddev_Samp_Fields = {
  __typename?: 'segnalazione_stddev_samp_fields';
  dissesto_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  intervento_id?: Maybe<Scalars['Float']>;
  municipalita_id?: Maybe<Scalars['Float']>;
  priorita_id?: Maybe<Scalars['Float']>;
  protocollo_id?: Maybe<Scalars['Float']>;
  punto_iniziale_posizionamento_id?: Maybe<Scalars['Float']>;
  quartiere_id?: Maybe<Scalars['Float']>;
  tecnico_referente_id?: Maybe<Scalars['Float']>;
  toponimo_id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Segnalazione_Sum_Fields = {
  __typename?: 'segnalazione_sum_fields';
  dissesto_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  intervento_id?: Maybe<Scalars['Int']>;
  municipalita_id?: Maybe<Scalars['Int']>;
  priorita_id?: Maybe<Scalars['Int']>;
  protocollo_id?: Maybe<Scalars['Int']>;
  punto_iniziale_posizionamento_id?: Maybe<Scalars['Int']>;
  quartiere_id?: Maybe<Scalars['Int']>;
  tecnico_referente_id?: Maybe<Scalars['Int']>;
  toponimo_id?: Maybe<Scalars['Int']>;
};

/** update columns of table "segnalazione" */
export enum Segnalazione_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Data = 'data',
  /** column name */
  DissestoId = 'dissesto_id',
  /** column name */
  Id = 'id',
  /** column name */
  InterventoId = 'intervento_id',
  /** column name */
  MunicipalitaId = 'municipalita_id',
  /** column name */
  MunicipalitaStorica = 'municipalita_storica',
  /** column name */
  PrioritaId = 'priorita_id',
  /** column name */
  ProtocolloId = 'protocollo_id',
  /** column name */
  PuntoInizialePosizionamentoId = 'punto_iniziale_posizionamento_id',
  /** column name */
  QuartiereId = 'quartiere_id',
  /** column name */
  QuartiereStorico = 'quartiere_storico',
  /** column name */
  RichiestaProtezioneCivile = 'richiesta_protezione_civile',
  /** column name */
  Stato = 'stato',
  /** column name */
  TecnicoReferenteId = 'tecnico_referente_id',
  /** column name */
  ToponimoId = 'toponimo_id',
  /** column name */
  ToponimoStorico = 'toponimo_storico',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Segnalazione_Var_Pop_Fields = {
  __typename?: 'segnalazione_var_pop_fields';
  dissesto_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  intervento_id?: Maybe<Scalars['Float']>;
  municipalita_id?: Maybe<Scalars['Float']>;
  priorita_id?: Maybe<Scalars['Float']>;
  protocollo_id?: Maybe<Scalars['Float']>;
  punto_iniziale_posizionamento_id?: Maybe<Scalars['Float']>;
  quartiere_id?: Maybe<Scalars['Float']>;
  tecnico_referente_id?: Maybe<Scalars['Float']>;
  toponimo_id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Segnalazione_Var_Samp_Fields = {
  __typename?: 'segnalazione_var_samp_fields';
  dissesto_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  intervento_id?: Maybe<Scalars['Float']>;
  municipalita_id?: Maybe<Scalars['Float']>;
  priorita_id?: Maybe<Scalars['Float']>;
  protocollo_id?: Maybe<Scalars['Float']>;
  punto_iniziale_posizionamento_id?: Maybe<Scalars['Float']>;
  quartiere_id?: Maybe<Scalars['Float']>;
  tecnico_referente_id?: Maybe<Scalars['Float']>;
  toponimo_id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Segnalazione_Variance_Fields = {
  __typename?: 'segnalazione_variance_fields';
  dissesto_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  intervento_id?: Maybe<Scalars['Float']>;
  municipalita_id?: Maybe<Scalars['Float']>;
  priorita_id?: Maybe<Scalars['Float']>;
  protocollo_id?: Maybe<Scalars['Float']>;
  punto_iniziale_posizionamento_id?: Maybe<Scalars['Float']>;
  quartiere_id?: Maybe<Scalars['Float']>;
  tecnico_referente_id?: Maybe<Scalars['Float']>;
  toponimo_id?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "segnaletica_lasciata" */
export type Segnaletica_Lasciata = {
  __typename?: 'segnaletica_lasciata';
  created_at: Scalars['timestamptz'];
  delete?: Maybe<Scalars['Boolean']>;
  id: Scalars['Int'];
  intervento_id: Scalars['Int'];
  nome?: Maybe<Scalars['String']>;
  quantita?: Maybe<Scalars['float8']>;
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "segnaletica_lasciata" */
export type Segnaletica_Lasciata_Aggregate = {
  __typename?: 'segnaletica_lasciata_aggregate';
  aggregate?: Maybe<Segnaletica_Lasciata_Aggregate_Fields>;
  nodes: Array<Segnaletica_Lasciata>;
};

/** aggregate fields of "segnaletica_lasciata" */
export type Segnaletica_Lasciata_Aggregate_Fields = {
  __typename?: 'segnaletica_lasciata_aggregate_fields';
  avg?: Maybe<Segnaletica_Lasciata_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Segnaletica_Lasciata_Max_Fields>;
  min?: Maybe<Segnaletica_Lasciata_Min_Fields>;
  stddev?: Maybe<Segnaletica_Lasciata_Stddev_Fields>;
  stddev_pop?: Maybe<Segnaletica_Lasciata_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Segnaletica_Lasciata_Stddev_Samp_Fields>;
  sum?: Maybe<Segnaletica_Lasciata_Sum_Fields>;
  var_pop?: Maybe<Segnaletica_Lasciata_Var_Pop_Fields>;
  var_samp?: Maybe<Segnaletica_Lasciata_Var_Samp_Fields>;
  variance?: Maybe<Segnaletica_Lasciata_Variance_Fields>;
};


/** aggregate fields of "segnaletica_lasciata" */
export type Segnaletica_Lasciata_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Segnaletica_Lasciata_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "segnaletica_lasciata" */
export type Segnaletica_Lasciata_Aggregate_Order_By = {
  avg?: Maybe<Segnaletica_Lasciata_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Segnaletica_Lasciata_Max_Order_By>;
  min?: Maybe<Segnaletica_Lasciata_Min_Order_By>;
  stddev?: Maybe<Segnaletica_Lasciata_Stddev_Order_By>;
  stddev_pop?: Maybe<Segnaletica_Lasciata_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Segnaletica_Lasciata_Stddev_Samp_Order_By>;
  sum?: Maybe<Segnaletica_Lasciata_Sum_Order_By>;
  var_pop?: Maybe<Segnaletica_Lasciata_Var_Pop_Order_By>;
  var_samp?: Maybe<Segnaletica_Lasciata_Var_Samp_Order_By>;
  variance?: Maybe<Segnaletica_Lasciata_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "segnaletica_lasciata" */
export type Segnaletica_Lasciata_Arr_Rel_Insert_Input = {
  data: Array<Segnaletica_Lasciata_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Segnaletica_Lasciata_On_Conflict>;
};

/** aggregate avg on columns */
export type Segnaletica_Lasciata_Avg_Fields = {
  __typename?: 'segnaletica_lasciata_avg_fields';
  id?: Maybe<Scalars['Float']>;
  intervento_id?: Maybe<Scalars['Float']>;
  quantita?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "segnaletica_lasciata" */
export type Segnaletica_Lasciata_Avg_Order_By = {
  id?: Maybe<Order_By>;
  intervento_id?: Maybe<Order_By>;
  quantita?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "segnaletica_lasciata". All fields are combined with a logical 'AND'. */
export type Segnaletica_Lasciata_Bool_Exp = {
  _and?: Maybe<Array<Segnaletica_Lasciata_Bool_Exp>>;
  _not?: Maybe<Segnaletica_Lasciata_Bool_Exp>;
  _or?: Maybe<Array<Segnaletica_Lasciata_Bool_Exp>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  delete?: Maybe<Boolean_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  intervento_id?: Maybe<Int_Comparison_Exp>;
  nome?: Maybe<String_Comparison_Exp>;
  quantita?: Maybe<Float8_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "segnaletica_lasciata" */
export enum Segnaletica_Lasciata_Constraint {
  /** unique or primary key constraint */
  SegnaleticaLasciataPkey = 'segnaletica_lasciata_pkey'
}

/** input type for incrementing numeric columns in table "segnaletica_lasciata" */
export type Segnaletica_Lasciata_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  intervento_id?: Maybe<Scalars['Int']>;
  quantita?: Maybe<Scalars['float8']>;
};

/** input type for inserting data into table "segnaletica_lasciata" */
export type Segnaletica_Lasciata_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  delete?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['Int']>;
  intervento_id?: Maybe<Scalars['Int']>;
  nome?: Maybe<Scalars['String']>;
  quantita?: Maybe<Scalars['float8']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Segnaletica_Lasciata_Max_Fields = {
  __typename?: 'segnaletica_lasciata_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  intervento_id?: Maybe<Scalars['Int']>;
  nome?: Maybe<Scalars['String']>;
  quantita?: Maybe<Scalars['float8']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "segnaletica_lasciata" */
export type Segnaletica_Lasciata_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  intervento_id?: Maybe<Order_By>;
  nome?: Maybe<Order_By>;
  quantita?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Segnaletica_Lasciata_Min_Fields = {
  __typename?: 'segnaletica_lasciata_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  intervento_id?: Maybe<Scalars['Int']>;
  nome?: Maybe<Scalars['String']>;
  quantita?: Maybe<Scalars['float8']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "segnaletica_lasciata" */
export type Segnaletica_Lasciata_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  intervento_id?: Maybe<Order_By>;
  nome?: Maybe<Order_By>;
  quantita?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "segnaletica_lasciata" */
export type Segnaletica_Lasciata_Mutation_Response = {
  __typename?: 'segnaletica_lasciata_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Segnaletica_Lasciata>;
};

/** on conflict condition type for table "segnaletica_lasciata" */
export type Segnaletica_Lasciata_On_Conflict = {
  constraint: Segnaletica_Lasciata_Constraint;
  update_columns?: Array<Segnaletica_Lasciata_Update_Column>;
  where?: Maybe<Segnaletica_Lasciata_Bool_Exp>;
};

/** Ordering options when selecting data from "segnaletica_lasciata". */
export type Segnaletica_Lasciata_Order_By = {
  created_at?: Maybe<Order_By>;
  delete?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  intervento_id?: Maybe<Order_By>;
  nome?: Maybe<Order_By>;
  quantita?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: segnaletica_lasciata */
export type Segnaletica_Lasciata_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "segnaletica_lasciata" */
export enum Segnaletica_Lasciata_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Delete = 'delete',
  /** column name */
  Id = 'id',
  /** column name */
  InterventoId = 'intervento_id',
  /** column name */
  Nome = 'nome',
  /** column name */
  Quantita = 'quantita',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "segnaletica_lasciata" */
export type Segnaletica_Lasciata_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  delete?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['Int']>;
  intervento_id?: Maybe<Scalars['Int']>;
  nome?: Maybe<Scalars['String']>;
  quantita?: Maybe<Scalars['float8']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Segnaletica_Lasciata_Stddev_Fields = {
  __typename?: 'segnaletica_lasciata_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  intervento_id?: Maybe<Scalars['Float']>;
  quantita?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "segnaletica_lasciata" */
export type Segnaletica_Lasciata_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  intervento_id?: Maybe<Order_By>;
  quantita?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Segnaletica_Lasciata_Stddev_Pop_Fields = {
  __typename?: 'segnaletica_lasciata_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  intervento_id?: Maybe<Scalars['Float']>;
  quantita?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "segnaletica_lasciata" */
export type Segnaletica_Lasciata_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  intervento_id?: Maybe<Order_By>;
  quantita?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Segnaletica_Lasciata_Stddev_Samp_Fields = {
  __typename?: 'segnaletica_lasciata_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  intervento_id?: Maybe<Scalars['Float']>;
  quantita?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "segnaletica_lasciata" */
export type Segnaletica_Lasciata_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  intervento_id?: Maybe<Order_By>;
  quantita?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Segnaletica_Lasciata_Sum_Fields = {
  __typename?: 'segnaletica_lasciata_sum_fields';
  id?: Maybe<Scalars['Int']>;
  intervento_id?: Maybe<Scalars['Int']>;
  quantita?: Maybe<Scalars['float8']>;
};

/** order by sum() on columns of table "segnaletica_lasciata" */
export type Segnaletica_Lasciata_Sum_Order_By = {
  id?: Maybe<Order_By>;
  intervento_id?: Maybe<Order_By>;
  quantita?: Maybe<Order_By>;
};

/** update columns of table "segnaletica_lasciata" */
export enum Segnaletica_Lasciata_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Delete = 'delete',
  /** column name */
  Id = 'id',
  /** column name */
  InterventoId = 'intervento_id',
  /** column name */
  Nome = 'nome',
  /** column name */
  Quantita = 'quantita',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Segnaletica_Lasciata_Var_Pop_Fields = {
  __typename?: 'segnaletica_lasciata_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  intervento_id?: Maybe<Scalars['Float']>;
  quantita?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "segnaletica_lasciata" */
export type Segnaletica_Lasciata_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  intervento_id?: Maybe<Order_By>;
  quantita?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Segnaletica_Lasciata_Var_Samp_Fields = {
  __typename?: 'segnaletica_lasciata_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  intervento_id?: Maybe<Scalars['Float']>;
  quantita?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "segnaletica_lasciata" */
export type Segnaletica_Lasciata_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  intervento_id?: Maybe<Order_By>;
  quantita?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Segnaletica_Lasciata_Variance_Fields = {
  __typename?: 'segnaletica_lasciata_variance_fields';
  id?: Maybe<Scalars['Float']>;
  intervento_id?: Maybe<Scalars['Float']>;
  quantita?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "segnaletica_lasciata" */
export type Segnaletica_Lasciata_Variance_Order_By = {
  id?: Maybe<Order_By>;
  intervento_id?: Maybe<Order_By>;
  quantita?: Maybe<Order_By>;
};

/** columns and relationships of "sostegno_ipi" */
export type Sostegno_Ipi = {
  __typename?: 'sostegno_ipi';
  armatura1?: Maybe<Scalars['String']>;
  armatura2?: Maybe<Scalars['String']>;
  braccio?: Maybe<Scalars['String']>;
  fk_color?: Maybe<Scalars['String']>;
  fk_t_code?: Maybe<Scalars['String']>;
  fk_text?: Maybe<Scalars['String']>;
  geom?: Maybe<Scalars['geometry']>;
  id: Scalars['bigint'];
  id_cavo?: Maybe<Scalars['String']>;
  lampada1?: Maybe<Scalars['String']>;
  lampada2?: Maybe<Scalars['String']>;
  lampada__1?: Maybe<Scalars['String']>;
  lampada__2?: Maybe<Scalars['String']>;
  linea?: Maybe<Scalars['String']>;
  matricola?: Maybe<Scalars['String']>;
  sostegno?: Maybe<Scalars['String']>;
  sostegno_a?: Maybe<Scalars['String']>;
  ubicazione?: Maybe<Scalars['String']>;
  x?: Maybe<Scalars['String']>;
  y?: Maybe<Scalars['String']>;
};

/** aggregated selection of "sostegno_ipi" */
export type Sostegno_Ipi_Aggregate = {
  __typename?: 'sostegno_ipi_aggregate';
  aggregate?: Maybe<Sostegno_Ipi_Aggregate_Fields>;
  nodes: Array<Sostegno_Ipi>;
};

/** aggregate fields of "sostegno_ipi" */
export type Sostegno_Ipi_Aggregate_Fields = {
  __typename?: 'sostegno_ipi_aggregate_fields';
  avg?: Maybe<Sostegno_Ipi_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Sostegno_Ipi_Max_Fields>;
  min?: Maybe<Sostegno_Ipi_Min_Fields>;
  stddev?: Maybe<Sostegno_Ipi_Stddev_Fields>;
  stddev_pop?: Maybe<Sostegno_Ipi_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Sostegno_Ipi_Stddev_Samp_Fields>;
  sum?: Maybe<Sostegno_Ipi_Sum_Fields>;
  var_pop?: Maybe<Sostegno_Ipi_Var_Pop_Fields>;
  var_samp?: Maybe<Sostegno_Ipi_Var_Samp_Fields>;
  variance?: Maybe<Sostegno_Ipi_Variance_Fields>;
};


/** aggregate fields of "sostegno_ipi" */
export type Sostegno_Ipi_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Sostegno_Ipi_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Sostegno_Ipi_Avg_Fields = {
  __typename?: 'sostegno_ipi_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "sostegno_ipi". All fields are combined with a logical 'AND'. */
export type Sostegno_Ipi_Bool_Exp = {
  _and?: Maybe<Array<Sostegno_Ipi_Bool_Exp>>;
  _not?: Maybe<Sostegno_Ipi_Bool_Exp>;
  _or?: Maybe<Array<Sostegno_Ipi_Bool_Exp>>;
  armatura1?: Maybe<String_Comparison_Exp>;
  armatura2?: Maybe<String_Comparison_Exp>;
  braccio?: Maybe<String_Comparison_Exp>;
  fk_color?: Maybe<String_Comparison_Exp>;
  fk_t_code?: Maybe<String_Comparison_Exp>;
  fk_text?: Maybe<String_Comparison_Exp>;
  geom?: Maybe<Geometry_Comparison_Exp>;
  id?: Maybe<Bigint_Comparison_Exp>;
  id_cavo?: Maybe<String_Comparison_Exp>;
  lampada1?: Maybe<String_Comparison_Exp>;
  lampada2?: Maybe<String_Comparison_Exp>;
  lampada__1?: Maybe<String_Comparison_Exp>;
  lampada__2?: Maybe<String_Comparison_Exp>;
  linea?: Maybe<String_Comparison_Exp>;
  matricola?: Maybe<String_Comparison_Exp>;
  sostegno?: Maybe<String_Comparison_Exp>;
  sostegno_a?: Maybe<String_Comparison_Exp>;
  ubicazione?: Maybe<String_Comparison_Exp>;
  x?: Maybe<String_Comparison_Exp>;
  y?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "sostegno_ipi" */
export enum Sostegno_Ipi_Constraint {
  /** unique or primary key constraint */
  SostegnoIpiPkey = 'sostegno_ipi_pkey'
}

/** input type for incrementing numeric columns in table "sostegno_ipi" */
export type Sostegno_Ipi_Inc_Input = {
  id?: Maybe<Scalars['bigint']>;
};

/** input type for inserting data into table "sostegno_ipi" */
export type Sostegno_Ipi_Insert_Input = {
  armatura1?: Maybe<Scalars['String']>;
  armatura2?: Maybe<Scalars['String']>;
  braccio?: Maybe<Scalars['String']>;
  fk_color?: Maybe<Scalars['String']>;
  fk_t_code?: Maybe<Scalars['String']>;
  fk_text?: Maybe<Scalars['String']>;
  geom?: Maybe<Scalars['geometry']>;
  id?: Maybe<Scalars['bigint']>;
  id_cavo?: Maybe<Scalars['String']>;
  lampada1?: Maybe<Scalars['String']>;
  lampada2?: Maybe<Scalars['String']>;
  lampada__1?: Maybe<Scalars['String']>;
  lampada__2?: Maybe<Scalars['String']>;
  linea?: Maybe<Scalars['String']>;
  matricola?: Maybe<Scalars['String']>;
  sostegno?: Maybe<Scalars['String']>;
  sostegno_a?: Maybe<Scalars['String']>;
  ubicazione?: Maybe<Scalars['String']>;
  x?: Maybe<Scalars['String']>;
  y?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Sostegno_Ipi_Max_Fields = {
  __typename?: 'sostegno_ipi_max_fields';
  armatura1?: Maybe<Scalars['String']>;
  armatura2?: Maybe<Scalars['String']>;
  braccio?: Maybe<Scalars['String']>;
  fk_color?: Maybe<Scalars['String']>;
  fk_t_code?: Maybe<Scalars['String']>;
  fk_text?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['bigint']>;
  id_cavo?: Maybe<Scalars['String']>;
  lampada1?: Maybe<Scalars['String']>;
  lampada2?: Maybe<Scalars['String']>;
  lampada__1?: Maybe<Scalars['String']>;
  lampada__2?: Maybe<Scalars['String']>;
  linea?: Maybe<Scalars['String']>;
  matricola?: Maybe<Scalars['String']>;
  sostegno?: Maybe<Scalars['String']>;
  sostegno_a?: Maybe<Scalars['String']>;
  ubicazione?: Maybe<Scalars['String']>;
  x?: Maybe<Scalars['String']>;
  y?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Sostegno_Ipi_Min_Fields = {
  __typename?: 'sostegno_ipi_min_fields';
  armatura1?: Maybe<Scalars['String']>;
  armatura2?: Maybe<Scalars['String']>;
  braccio?: Maybe<Scalars['String']>;
  fk_color?: Maybe<Scalars['String']>;
  fk_t_code?: Maybe<Scalars['String']>;
  fk_text?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['bigint']>;
  id_cavo?: Maybe<Scalars['String']>;
  lampada1?: Maybe<Scalars['String']>;
  lampada2?: Maybe<Scalars['String']>;
  lampada__1?: Maybe<Scalars['String']>;
  lampada__2?: Maybe<Scalars['String']>;
  linea?: Maybe<Scalars['String']>;
  matricola?: Maybe<Scalars['String']>;
  sostegno?: Maybe<Scalars['String']>;
  sostegno_a?: Maybe<Scalars['String']>;
  ubicazione?: Maybe<Scalars['String']>;
  x?: Maybe<Scalars['String']>;
  y?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "sostegno_ipi" */
export type Sostegno_Ipi_Mutation_Response = {
  __typename?: 'sostegno_ipi_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Sostegno_Ipi>;
};

/** on conflict condition type for table "sostegno_ipi" */
export type Sostegno_Ipi_On_Conflict = {
  constraint: Sostegno_Ipi_Constraint;
  update_columns?: Array<Sostegno_Ipi_Update_Column>;
  where?: Maybe<Sostegno_Ipi_Bool_Exp>;
};

/** Ordering options when selecting data from "sostegno_ipi". */
export type Sostegno_Ipi_Order_By = {
  armatura1?: Maybe<Order_By>;
  armatura2?: Maybe<Order_By>;
  braccio?: Maybe<Order_By>;
  fk_color?: Maybe<Order_By>;
  fk_t_code?: Maybe<Order_By>;
  fk_text?: Maybe<Order_By>;
  geom?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  id_cavo?: Maybe<Order_By>;
  lampada1?: Maybe<Order_By>;
  lampada2?: Maybe<Order_By>;
  lampada__1?: Maybe<Order_By>;
  lampada__2?: Maybe<Order_By>;
  linea?: Maybe<Order_By>;
  matricola?: Maybe<Order_By>;
  sostegno?: Maybe<Order_By>;
  sostegno_a?: Maybe<Order_By>;
  ubicazione?: Maybe<Order_By>;
  x?: Maybe<Order_By>;
  y?: Maybe<Order_By>;
};

/** primary key columns input for table: sostegno_ipi */
export type Sostegno_Ipi_Pk_Columns_Input = {
  id: Scalars['bigint'];
};

/** select columns of table "sostegno_ipi" */
export enum Sostegno_Ipi_Select_Column {
  /** column name */
  Armatura1 = 'armatura1',
  /** column name */
  Armatura2 = 'armatura2',
  /** column name */
  Braccio = 'braccio',
  /** column name */
  FkColor = 'fk_color',
  /** column name */
  FkTCode = 'fk_t_code',
  /** column name */
  FkText = 'fk_text',
  /** column name */
  Geom = 'geom',
  /** column name */
  Id = 'id',
  /** column name */
  IdCavo = 'id_cavo',
  /** column name */
  Lampada1 = 'lampada1',
  /** column name */
  Lampada2 = 'lampada2',
  /** column name */
  Lampada_1 = 'lampada__1',
  /** column name */
  Lampada_2 = 'lampada__2',
  /** column name */
  Linea = 'linea',
  /** column name */
  Matricola = 'matricola',
  /** column name */
  Sostegno = 'sostegno',
  /** column name */
  SostegnoA = 'sostegno_a',
  /** column name */
  Ubicazione = 'ubicazione',
  /** column name */
  X = 'x',
  /** column name */
  Y = 'y'
}

/** input type for updating data in table "sostegno_ipi" */
export type Sostegno_Ipi_Set_Input = {
  armatura1?: Maybe<Scalars['String']>;
  armatura2?: Maybe<Scalars['String']>;
  braccio?: Maybe<Scalars['String']>;
  fk_color?: Maybe<Scalars['String']>;
  fk_t_code?: Maybe<Scalars['String']>;
  fk_text?: Maybe<Scalars['String']>;
  geom?: Maybe<Scalars['geometry']>;
  id?: Maybe<Scalars['bigint']>;
  id_cavo?: Maybe<Scalars['String']>;
  lampada1?: Maybe<Scalars['String']>;
  lampada2?: Maybe<Scalars['String']>;
  lampada__1?: Maybe<Scalars['String']>;
  lampada__2?: Maybe<Scalars['String']>;
  linea?: Maybe<Scalars['String']>;
  matricola?: Maybe<Scalars['String']>;
  sostegno?: Maybe<Scalars['String']>;
  sostegno_a?: Maybe<Scalars['String']>;
  ubicazione?: Maybe<Scalars['String']>;
  x?: Maybe<Scalars['String']>;
  y?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Sostegno_Ipi_Stddev_Fields = {
  __typename?: 'sostegno_ipi_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Sostegno_Ipi_Stddev_Pop_Fields = {
  __typename?: 'sostegno_ipi_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Sostegno_Ipi_Stddev_Samp_Fields = {
  __typename?: 'sostegno_ipi_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Sostegno_Ipi_Sum_Fields = {
  __typename?: 'sostegno_ipi_sum_fields';
  id?: Maybe<Scalars['bigint']>;
};

/** update columns of table "sostegno_ipi" */
export enum Sostegno_Ipi_Update_Column {
  /** column name */
  Armatura1 = 'armatura1',
  /** column name */
  Armatura2 = 'armatura2',
  /** column name */
  Braccio = 'braccio',
  /** column name */
  FkColor = 'fk_color',
  /** column name */
  FkTCode = 'fk_t_code',
  /** column name */
  FkText = 'fk_text',
  /** column name */
  Geom = 'geom',
  /** column name */
  Id = 'id',
  /** column name */
  IdCavo = 'id_cavo',
  /** column name */
  Lampada1 = 'lampada1',
  /** column name */
  Lampada2 = 'lampada2',
  /** column name */
  Lampada_1 = 'lampada__1',
  /** column name */
  Lampada_2 = 'lampada__2',
  /** column name */
  Linea = 'linea',
  /** column name */
  Matricola = 'matricola',
  /** column name */
  Sostegno = 'sostegno',
  /** column name */
  SostegnoA = 'sostegno_a',
  /** column name */
  Ubicazione = 'ubicazione',
  /** column name */
  X = 'x',
  /** column name */
  Y = 'y'
}

/** aggregate var_pop on columns */
export type Sostegno_Ipi_Var_Pop_Fields = {
  __typename?: 'sostegno_ipi_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Sostegno_Ipi_Var_Samp_Fields = {
  __typename?: 'sostegno_ipi_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Sostegno_Ipi_Variance_Fields = {
  __typename?: 'sostegno_ipi_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "squadra" */
export type Squadra = {
  __typename?: 'squadra';
  created_at: Scalars['timestamptz'];
  id: Scalars['Int'];
  /** An array relationship */
  membri: Array<Assegnazione_Squadra>;
  /** An aggregate relationship */
  membri_aggregate: Assegnazione_Squadra_Aggregate;
  nome: Scalars['String'];
  protezione_civile: Scalars['Boolean'];
  updated_at: Scalars['timestamptz'];
  /** An array relationship */
  vecchie_denominazioni: Array<Vecchia_Squadra>;
  /** An aggregate relationship */
  vecchie_denominazioni_aggregate: Vecchia_Squadra_Aggregate;
};


/** columns and relationships of "squadra" */
export type SquadraMembriArgs = {
  distinct_on?: Maybe<Array<Assegnazione_Squadra_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Assegnazione_Squadra_Order_By>>;
  where?: Maybe<Assegnazione_Squadra_Bool_Exp>;
};


/** columns and relationships of "squadra" */
export type SquadraMembri_AggregateArgs = {
  distinct_on?: Maybe<Array<Assegnazione_Squadra_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Assegnazione_Squadra_Order_By>>;
  where?: Maybe<Assegnazione_Squadra_Bool_Exp>;
};


/** columns and relationships of "squadra" */
export type SquadraVecchie_DenominazioniArgs = {
  distinct_on?: Maybe<Array<Vecchia_Squadra_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Vecchia_Squadra_Order_By>>;
  where?: Maybe<Vecchia_Squadra_Bool_Exp>;
};


/** columns and relationships of "squadra" */
export type SquadraVecchie_Denominazioni_AggregateArgs = {
  distinct_on?: Maybe<Array<Vecchia_Squadra_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Vecchia_Squadra_Order_By>>;
  where?: Maybe<Vecchia_Squadra_Bool_Exp>;
};

/** aggregated selection of "squadra" */
export type Squadra_Aggregate = {
  __typename?: 'squadra_aggregate';
  aggregate?: Maybe<Squadra_Aggregate_Fields>;
  nodes: Array<Squadra>;
};

/** aggregate fields of "squadra" */
export type Squadra_Aggregate_Fields = {
  __typename?: 'squadra_aggregate_fields';
  avg?: Maybe<Squadra_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Squadra_Max_Fields>;
  min?: Maybe<Squadra_Min_Fields>;
  stddev?: Maybe<Squadra_Stddev_Fields>;
  stddev_pop?: Maybe<Squadra_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Squadra_Stddev_Samp_Fields>;
  sum?: Maybe<Squadra_Sum_Fields>;
  var_pop?: Maybe<Squadra_Var_Pop_Fields>;
  var_samp?: Maybe<Squadra_Var_Samp_Fields>;
  variance?: Maybe<Squadra_Variance_Fields>;
};


/** aggregate fields of "squadra" */
export type Squadra_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Squadra_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Squadra_Avg_Fields = {
  __typename?: 'squadra_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "squadra". All fields are combined with a logical 'AND'. */
export type Squadra_Bool_Exp = {
  _and?: Maybe<Array<Squadra_Bool_Exp>>;
  _not?: Maybe<Squadra_Bool_Exp>;
  _or?: Maybe<Array<Squadra_Bool_Exp>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  membri?: Maybe<Assegnazione_Squadra_Bool_Exp>;
  nome?: Maybe<String_Comparison_Exp>;
  protezione_civile?: Maybe<Boolean_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  vecchie_denominazioni?: Maybe<Vecchia_Squadra_Bool_Exp>;
};

/** unique or primary key constraints on table "squadra" */
export enum Squadra_Constraint {
  /** unique or primary key constraint */
  SquadraPkey = 'squadra_pkey'
}

/** input type for incrementing numeric columns in table "squadra" */
export type Squadra_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "squadra" */
export type Squadra_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  membri?: Maybe<Assegnazione_Squadra_Arr_Rel_Insert_Input>;
  nome?: Maybe<Scalars['String']>;
  protezione_civile?: Maybe<Scalars['Boolean']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  vecchie_denominazioni?: Maybe<Vecchia_Squadra_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Squadra_Max_Fields = {
  __typename?: 'squadra_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  nome?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Squadra_Min_Fields = {
  __typename?: 'squadra_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  nome?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "squadra" */
export type Squadra_Mutation_Response = {
  __typename?: 'squadra_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Squadra>;
};

/** input type for inserting object relation for remote table "squadra" */
export type Squadra_Obj_Rel_Insert_Input = {
  data: Squadra_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Squadra_On_Conflict>;
};

/** on conflict condition type for table "squadra" */
export type Squadra_On_Conflict = {
  constraint: Squadra_Constraint;
  update_columns?: Array<Squadra_Update_Column>;
  where?: Maybe<Squadra_Bool_Exp>;
};

/** Ordering options when selecting data from "squadra". */
export type Squadra_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  membri_aggregate?: Maybe<Assegnazione_Squadra_Aggregate_Order_By>;
  nome?: Maybe<Order_By>;
  protezione_civile?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  vecchie_denominazioni_aggregate?: Maybe<Vecchia_Squadra_Aggregate_Order_By>;
};

/** primary key columns input for table: squadra */
export type Squadra_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "squadra" */
export enum Squadra_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Nome = 'nome',
  /** column name */
  ProtezioneCivile = 'protezione_civile',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "squadra" */
export type Squadra_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  nome?: Maybe<Scalars['String']>;
  protezione_civile?: Maybe<Scalars['Boolean']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Squadra_Stddev_Fields = {
  __typename?: 'squadra_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Squadra_Stddev_Pop_Fields = {
  __typename?: 'squadra_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Squadra_Stddev_Samp_Fields = {
  __typename?: 'squadra_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Squadra_Sum_Fields = {
  __typename?: 'squadra_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "squadra" */
export enum Squadra_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Nome = 'nome',
  /** column name */
  ProtezioneCivile = 'protezione_civile',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Squadra_Var_Pop_Fields = {
  __typename?: 'squadra_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Squadra_Var_Samp_Fields = {
  __typename?: 'squadra_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Squadra_Variance_Fields = {
  __typename?: 'squadra_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

export type St_D_Within_Geography_Input = {
  distance: Scalars['Float'];
  from: Scalars['geography'];
  use_spheroid?: Maybe<Scalars['Boolean']>;
};

export type St_D_Within_Input = {
  distance: Scalars['Float'];
  from: Scalars['geometry'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "_condizioni_traffico" */
  _condizioni_traffico: Array<_Condizioni_Traffico>;
  /** fetch aggregated fields from the table: "_condizioni_traffico" */
  _condizioni_traffico_aggregate: _Condizioni_Traffico_Aggregate;
  /** fetch data from the table: "_condizioni_traffico" using primary key columns */
  _condizioni_traffico_by_pk?: Maybe<_Condizioni_Traffico>;
  /** fetch data from the table: "_forma_dissesto" */
  _forma_dissesto: Array<_Forma_Dissesto>;
  /** fetch aggregated fields from the table: "_forma_dissesto" */
  _forma_dissesto_aggregate: _Forma_Dissesto_Aggregate;
  /** fetch data from the table: "_forma_dissesto" using primary key columns */
  _forma_dissesto_by_pk?: Maybe<_Forma_Dissesto>;
  /** fetch data from the table: "_giorni_trascorsi" */
  _giorni_trascorsi: Array<_Giorni_Trascorsi>;
  /** fetch aggregated fields from the table: "_giorni_trascorsi" */
  _giorni_trascorsi_aggregate: _Giorni_Trascorsi_Aggregate;
  /** fetch data from the table: "_giorni_trascorsi" using primary key columns */
  _giorni_trascorsi_by_pk?: Maybe<_Giorni_Trascorsi>;
  /** fetch data from the table: "_materiale" */
  _materiale: Array<_Materiale>;
  /** fetch aggregated fields from the table: "_materiale" */
  _materiale_aggregate: _Materiale_Aggregate;
  /** fetch data from the table: "_materiale" using primary key columns */
  _materiale_by_pk?: Maybe<_Materiale>;
  /** fetch data from the table: "_priorita" */
  _priorita: Array<_Priorita>;
  /** fetch aggregated fields from the table: "_priorita" */
  _priorita_aggregate: _Priorita_Aggregate;
  /** fetch data from the table: "_priorita" using primary key columns */
  _priorita_by_pk?: Maybe<_Priorita>;
  /** fetch data from the table: "_sezione_protocollo" */
  _sezione_protocollo: Array<_Sezione_Protocollo>;
  /** fetch aggregated fields from the table: "_sezione_protocollo" */
  _sezione_protocollo_aggregate: _Sezione_Protocollo_Aggregate;
  /** fetch data from the table: "_sezione_protocollo" using primary key columns */
  _sezione_protocollo_by_pk?: Maybe<_Sezione_Protocollo>;
  /** fetch data from the table: "_specifica_posizionamento_toponimo" */
  _specifica_posizionamento_toponimo: Array<_Specifica_Posizionamento_Toponimo>;
  /** fetch aggregated fields from the table: "_specifica_posizionamento_toponimo" */
  _specifica_posizionamento_toponimo_aggregate: _Specifica_Posizionamento_Toponimo_Aggregate;
  /** fetch data from the table: "_specifica_posizionamento_toponimo" using primary key columns */
  _specifica_posizionamento_toponimo_by_pk?: Maybe<_Specifica_Posizionamento_Toponimo>;
  /** fetch data from the table: "_stato_segnalazione" */
  _stato_segnalazione: Array<_Stato_Segnalazione>;
  /** fetch aggregated fields from the table: "_stato_segnalazione" */
  _stato_segnalazione_aggregate: _Stato_Segnalazione_Aggregate;
  /** fetch data from the table: "_stato_segnalazione" using primary key columns */
  _stato_segnalazione_by_pk?: Maybe<_Stato_Segnalazione>;
  /** fetch data from the table: "_tipologia_dissesto" */
  _tipologia_dissesto: Array<_Tipologia_Dissesto>;
  /** fetch aggregated fields from the table: "_tipologia_dissesto" */
  _tipologia_dissesto_aggregate: _Tipologia_Dissesto_Aggregate;
  /** fetch data from the table: "_tipologia_dissesto" using primary key columns */
  _tipologia_dissesto_by_pk?: Maybe<_Tipologia_Dissesto>;
  /** fetch data from the table: "_tipologia_posizionamento_toponimo" */
  _tipologia_posizionamento_toponimo: Array<_Tipologia_Posizionamento_Toponimo>;
  /** fetch aggregated fields from the table: "_tipologia_posizionamento_toponimo" */
  _tipologia_posizionamento_toponimo_aggregate: _Tipologia_Posizionamento_Toponimo_Aggregate;
  /** fetch data from the table: "_tipologia_posizionamento_toponimo" using primary key columns */
  _tipologia_posizionamento_toponimo_by_pk?: Maybe<_Tipologia_Posizionamento_Toponimo>;
  /** fetch data from the table: "_titolo" */
  _titolo: Array<_Titolo>;
  /** fetch aggregated fields from the table: "_titolo" */
  _titolo_aggregate: _Titolo_Aggregate;
  /** fetch data from the table: "_titolo" using primary key columns */
  _titolo_by_pk?: Maybe<_Titolo>;
  /** fetch data from the table: "allegato" */
  allegato: Array<Allegato>;
  /** fetch aggregated fields from the table: "allegato" */
  allegato_aggregate: Allegato_Aggregate;
  /** fetch data from the table: "allegato" using primary key columns */
  allegato_by_pk?: Maybe<Allegato>;
  /** fetch data from the table: "assegnazione_quartiere" */
  assegnazione_quartiere: Array<Assegnazione_Quartiere>;
  /** fetch aggregated fields from the table: "assegnazione_quartiere" */
  assegnazione_quartiere_aggregate: Assegnazione_Quartiere_Aggregate;
  /** fetch data from the table: "assegnazione_quartiere" using primary key columns */
  assegnazione_quartiere_by_pk?: Maybe<Assegnazione_Quartiere>;
  /** fetch data from the table: "assegnazione_squadra" */
  assegnazione_squadra: Array<Assegnazione_Squadra>;
  /** fetch aggregated fields from the table: "assegnazione_squadra" */
  assegnazione_squadra_aggregate: Assegnazione_Squadra_Aggregate;
  /** fetch data from the table: "assegnazione_squadra" using primary key columns */
  assegnazione_squadra_by_pk?: Maybe<Assegnazione_Squadra>;
  /** fetch data from the table: "assegnazione_toponimo" */
  assegnazione_toponimo: Array<Assegnazione_Toponimo>;
  /** fetch aggregated fields from the table: "assegnazione_toponimo" */
  assegnazione_toponimo_aggregate: Assegnazione_Toponimo_Aggregate;
  /** fetch data from the table: "assegnazione_toponimo" using primary key columns */
  assegnazione_toponimo_by_pk?: Maybe<Assegnazione_Toponimo>;
  /** An array relationship */
  attrezzature_impiegate: Array<Attrezzature_Impiegate>;
  /** An aggregate relationship */
  attrezzature_impiegate_aggregate: Attrezzature_Impiegate_Aggregate;
  /** fetch data from the table: "attrezzature_impiegate" using primary key columns */
  attrezzature_impiegate_by_pk?: Maybe<Attrezzature_Impiegate>;
  /** fetch data from the table: "civico" */
  civico: Array<Civico>;
  /** fetch aggregated fields from the table: "civico" */
  civico_aggregate: Civico_Aggregate;
  /** fetch data from the table: "civico" using primary key columns */
  civico_by_pk?: Maybe<Civico>;
  /** fetch data from the table: "connessione_grafo" */
  connessione_grafo: Array<Connessione_Grafo>;
  /** fetch aggregated fields from the table: "connessione_grafo" */
  connessione_grafo_aggregate: Connessione_Grafo_Aggregate;
  /** fetch data from the table: "connessione_grafo" using primary key columns */
  connessione_grafo_by_pk?: Maybe<Connessione_Grafo>;
  /** An array relationship */
  diario: Array<Diario>;
  /** An aggregate relationship */
  diario_aggregate: Diario_Aggregate;
  /** fetch data from the table: "diario" using primary key columns */
  diario_by_pk?: Maybe<Diario>;
  /** fetch data from the table: "dissesto" */
  dissesto: Array<Dissesto>;
  /** fetch aggregated fields from the table: "dissesto" */
  dissesto_aggregate: Dissesto_Aggregate;
  /** fetch data from the table: "dissesto" using primary key columns */
  dissesto_by_pk?: Maybe<Dissesto>;
  /** fetch data from the table: "dug" */
  dug: Array<Dug>;
  /** fetch aggregated fields from the table: "dug" */
  dug_aggregate: Dug_Aggregate;
  /** fetch data from the table: "dug" using primary key columns */
  dug_by_pk?: Maybe<Dug>;
  /** fetch data from the table: "evento" */
  evento: Array<Evento>;
  /** fetch aggregated fields from the table: "evento" */
  evento_aggregate: Evento_Aggregate;
  /** fetch data from the table: "evento" using primary key columns */
  evento_by_pk?: Maybe<Evento>;
  /** fetch data from the table: "intervento" */
  intervento: Array<Intervento>;
  /** fetch aggregated fields from the table: "intervento" */
  intervento_aggregate: Intervento_Aggregate;
  /** fetch data from the table: "intervento" using primary key columns */
  intervento_by_pk?: Maybe<Intervento>;
  /** fetch data from the table: "intervento_straordinario" */
  intervento_straordinario: Array<Intervento_Straordinario>;
  /** fetch aggregated fields from the table: "intervento_straordinario" */
  intervento_straordinario_aggregate: Intervento_Straordinario_Aggregate;
  /** fetch data from the table: "intervento_straordinario" using primary key columns */
  intervento_straordinario_by_pk?: Maybe<Intervento_Straordinario>;
  /** fetch data from the table: "materiale_dissesto" */
  materiale_dissesto: Array<Materiale_Dissesto>;
  /** fetch aggregated fields from the table: "materiale_dissesto" */
  materiale_dissesto_aggregate: Materiale_Dissesto_Aggregate;
  /** fetch data from the table: "materiale_dissesto" using primary key columns */
  materiale_dissesto_by_pk?: Maybe<Materiale_Dissesto>;
  /** fetch data from the table: "membro" */
  membro: Array<Membro>;
  /** fetch aggregated fields from the table: "membro" */
  membro_aggregate: Membro_Aggregate;
  /** fetch data from the table: "membro" using primary key columns */
  membro_by_pk?: Maybe<Membro>;
  /** fetch data from the table: "municipalita" */
  municipalita: Array<Municipalita>;
  /** fetch aggregated fields from the table: "municipalita" */
  municipalita_aggregate: Municipalita_Aggregate;
  /** fetch data from the table: "municipalita" using primary key columns */
  municipalita_by_pk?: Maybe<Municipalita>;
  /** fetch data from the table: "posizionamento_toponimo" */
  posizionamento_toponimo: Array<Posizionamento_Toponimo>;
  /** fetch aggregated fields from the table: "posizionamento_toponimo" */
  posizionamento_toponimo_aggregate: Posizionamento_Toponimo_Aggregate;
  /** fetch data from the table: "posizionamento_toponimo" using primary key columns */
  posizionamento_toponimo_by_pk?: Maybe<Posizionamento_Toponimo>;
  /** fetch data from the table: "protocollo" */
  protocollo: Array<Protocollo>;
  /** fetch aggregated fields from the table: "protocollo" */
  protocollo_aggregate: Protocollo_Aggregate;
  /** fetch data from the table: "protocollo" using primary key columns */
  protocollo_by_pk?: Maybe<Protocollo>;
  /** fetch data from the table: "protocollo_destinatario" */
  protocollo_destinatario: Array<Protocollo_Destinatario>;
  /** fetch aggregated fields from the table: "protocollo_destinatario" */
  protocollo_destinatario_aggregate: Protocollo_Destinatario_Aggregate;
  /** fetch data from the table: "protocollo_destinatario" using primary key columns */
  protocollo_destinatario_by_pk?: Maybe<Protocollo_Destinatario>;
  /** fetch data from the table: "protocollo_destinatario_esterno" */
  protocollo_destinatario_esterno: Array<Protocollo_Destinatario_Esterno>;
  /** fetch aggregated fields from the table: "protocollo_destinatario_esterno" */
  protocollo_destinatario_esterno_aggregate: Protocollo_Destinatario_Esterno_Aggregate;
  /** fetch data from the table: "protocollo_destinatario_esterno" using primary key columns */
  protocollo_destinatario_esterno_by_pk?: Maybe<Protocollo_Destinatario_Esterno>;
  /** fetch data from the table: "quartiere" */
  quartiere: Array<Quartiere>;
  /** fetch aggregated fields from the table: "quartiere" */
  quartiere_aggregate: Quartiere_Aggregate;
  /** fetch data from the table: "quartiere" using primary key columns */
  quartiere_by_pk?: Maybe<Quartiere>;
  /** fetch data from the table: "segnalazione" */
  segnalazione: Array<Segnalazione>;
  /** fetch aggregated fields from the table: "segnalazione" */
  segnalazione_aggregate: Segnalazione_Aggregate;
  /** fetch data from the table: "segnalazione" using primary key columns */
  segnalazione_by_pk?: Maybe<Segnalazione>;
  /** fetch data from the table: "segnalazione_collegata" */
  segnalazione_collegata: Array<Segnalazione_Collegata>;
  /** fetch aggregated fields from the table: "segnalazione_collegata" */
  segnalazione_collegata_aggregate: Segnalazione_Collegata_Aggregate;
  /** fetch data from the table: "segnalazione_collegata" using primary key columns */
  segnalazione_collegata_by_pk?: Maybe<Segnalazione_Collegata>;
  /** An array relationship */
  segnaletica_lasciata: Array<Segnaletica_Lasciata>;
  /** An aggregate relationship */
  segnaletica_lasciata_aggregate: Segnaletica_Lasciata_Aggregate;
  /** fetch data from the table: "segnaletica_lasciata" using primary key columns */
  segnaletica_lasciata_by_pk?: Maybe<Segnaletica_Lasciata>;
  /** fetch data from the table: "sostegno_ipi" */
  sostegno_ipi: Array<Sostegno_Ipi>;
  /** fetch aggregated fields from the table: "sostegno_ipi" */
  sostegno_ipi_aggregate: Sostegno_Ipi_Aggregate;
  /** fetch data from the table: "sostegno_ipi" using primary key columns */
  sostegno_ipi_by_pk?: Maybe<Sostegno_Ipi>;
  /** fetch data from the table: "squadra" */
  squadra: Array<Squadra>;
  /** fetch aggregated fields from the table: "squadra" */
  squadra_aggregate: Squadra_Aggregate;
  /** fetch data from the table: "squadra" using primary key columns */
  squadra_by_pk?: Maybe<Squadra>;
  /** fetch data from the table: "tecnico_referente" */
  tecnico_referente: Array<Tecnico_Referente>;
  /** fetch aggregated fields from the table: "tecnico_referente" */
  tecnico_referente_aggregate: Tecnico_Referente_Aggregate;
  /** fetch data from the table: "tecnico_referente" using primary key columns */
  tecnico_referente_by_pk?: Maybe<Tecnico_Referente>;
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
  /** fetch data from the table: "vecchia_squadra" */
  vecchia_squadra: Array<Vecchia_Squadra>;
  /** fetch aggregated fields from the table: "vecchia_squadra" */
  vecchia_squadra_aggregate: Vecchia_Squadra_Aggregate;
  /** fetch data from the table: "vecchia_squadra" using primary key columns */
  vecchia_squadra_by_pk?: Maybe<Vecchia_Squadra>;
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
  /** An array relationship */
  veicoli_impiegati: Array<Veicoli_Impiegati>;
  /** An aggregate relationship */
  veicoli_impiegati_aggregate: Veicoli_Impiegati_Aggregate;
  /** fetch data from the table: "veicoli_impiegati" using primary key columns */
  veicoli_impiegati_by_pk?: Maybe<Veicoli_Impiegati>;
};


export type Subscription_Root_Condizioni_TrafficoArgs = {
  distinct_on?: Maybe<Array<_Condizioni_Traffico_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<_Condizioni_Traffico_Order_By>>;
  where?: Maybe<_Condizioni_Traffico_Bool_Exp>;
};


export type Subscription_Root_Condizioni_Traffico_AggregateArgs = {
  distinct_on?: Maybe<Array<_Condizioni_Traffico_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<_Condizioni_Traffico_Order_By>>;
  where?: Maybe<_Condizioni_Traffico_Bool_Exp>;
};


export type Subscription_Root_Condizioni_Traffico_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_Root_Forma_DissestoArgs = {
  distinct_on?: Maybe<Array<_Forma_Dissesto_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<_Forma_Dissesto_Order_By>>;
  where?: Maybe<_Forma_Dissesto_Bool_Exp>;
};


export type Subscription_Root_Forma_Dissesto_AggregateArgs = {
  distinct_on?: Maybe<Array<_Forma_Dissesto_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<_Forma_Dissesto_Order_By>>;
  where?: Maybe<_Forma_Dissesto_Bool_Exp>;
};


export type Subscription_Root_Forma_Dissesto_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_Root_Giorni_TrascorsiArgs = {
  distinct_on?: Maybe<Array<_Giorni_Trascorsi_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<_Giorni_Trascorsi_Order_By>>;
  where?: Maybe<_Giorni_Trascorsi_Bool_Exp>;
};


export type Subscription_Root_Giorni_Trascorsi_AggregateArgs = {
  distinct_on?: Maybe<Array<_Giorni_Trascorsi_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<_Giorni_Trascorsi_Order_By>>;
  where?: Maybe<_Giorni_Trascorsi_Bool_Exp>;
};


export type Subscription_Root_Giorni_Trascorsi_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_Root_MaterialeArgs = {
  distinct_on?: Maybe<Array<_Materiale_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<_Materiale_Order_By>>;
  where?: Maybe<_Materiale_Bool_Exp>;
};


export type Subscription_Root_Materiale_AggregateArgs = {
  distinct_on?: Maybe<Array<_Materiale_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<_Materiale_Order_By>>;
  where?: Maybe<_Materiale_Bool_Exp>;
};


export type Subscription_Root_Materiale_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_Root_PrioritaArgs = {
  distinct_on?: Maybe<Array<_Priorita_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<_Priorita_Order_By>>;
  where?: Maybe<_Priorita_Bool_Exp>;
};


export type Subscription_Root_Priorita_AggregateArgs = {
  distinct_on?: Maybe<Array<_Priorita_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<_Priorita_Order_By>>;
  where?: Maybe<_Priorita_Bool_Exp>;
};


export type Subscription_Root_Priorita_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_Root_Sezione_ProtocolloArgs = {
  distinct_on?: Maybe<Array<_Sezione_Protocollo_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<_Sezione_Protocollo_Order_By>>;
  where?: Maybe<_Sezione_Protocollo_Bool_Exp>;
};


export type Subscription_Root_Sezione_Protocollo_AggregateArgs = {
  distinct_on?: Maybe<Array<_Sezione_Protocollo_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<_Sezione_Protocollo_Order_By>>;
  where?: Maybe<_Sezione_Protocollo_Bool_Exp>;
};


export type Subscription_Root_Sezione_Protocollo_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_Root_Specifica_Posizionamento_ToponimoArgs = {
  distinct_on?: Maybe<Array<_Specifica_Posizionamento_Toponimo_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<_Specifica_Posizionamento_Toponimo_Order_By>>;
  where?: Maybe<_Specifica_Posizionamento_Toponimo_Bool_Exp>;
};


export type Subscription_Root_Specifica_Posizionamento_Toponimo_AggregateArgs = {
  distinct_on?: Maybe<Array<_Specifica_Posizionamento_Toponimo_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<_Specifica_Posizionamento_Toponimo_Order_By>>;
  where?: Maybe<_Specifica_Posizionamento_Toponimo_Bool_Exp>;
};


export type Subscription_Root_Specifica_Posizionamento_Toponimo_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_Root_Stato_SegnalazioneArgs = {
  distinct_on?: Maybe<Array<_Stato_Segnalazione_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<_Stato_Segnalazione_Order_By>>;
  where?: Maybe<_Stato_Segnalazione_Bool_Exp>;
};


export type Subscription_Root_Stato_Segnalazione_AggregateArgs = {
  distinct_on?: Maybe<Array<_Stato_Segnalazione_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<_Stato_Segnalazione_Order_By>>;
  where?: Maybe<_Stato_Segnalazione_Bool_Exp>;
};


export type Subscription_Root_Stato_Segnalazione_By_PkArgs = {
  text: Scalars['String'];
};


export type Subscription_Root_Tipologia_DissestoArgs = {
  distinct_on?: Maybe<Array<_Tipologia_Dissesto_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<_Tipologia_Dissesto_Order_By>>;
  where?: Maybe<_Tipologia_Dissesto_Bool_Exp>;
};


export type Subscription_Root_Tipologia_Dissesto_AggregateArgs = {
  distinct_on?: Maybe<Array<_Tipologia_Dissesto_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<_Tipologia_Dissesto_Order_By>>;
  where?: Maybe<_Tipologia_Dissesto_Bool_Exp>;
};


export type Subscription_Root_Tipologia_Dissesto_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_Root_Tipologia_Posizionamento_ToponimoArgs = {
  distinct_on?: Maybe<Array<_Tipologia_Posizionamento_Toponimo_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<_Tipologia_Posizionamento_Toponimo_Order_By>>;
  where?: Maybe<_Tipologia_Posizionamento_Toponimo_Bool_Exp>;
};


export type Subscription_Root_Tipologia_Posizionamento_Toponimo_AggregateArgs = {
  distinct_on?: Maybe<Array<_Tipologia_Posizionamento_Toponimo_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<_Tipologia_Posizionamento_Toponimo_Order_By>>;
  where?: Maybe<_Tipologia_Posizionamento_Toponimo_Bool_Exp>;
};


export type Subscription_Root_Tipologia_Posizionamento_Toponimo_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_Root_TitoloArgs = {
  distinct_on?: Maybe<Array<_Titolo_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<_Titolo_Order_By>>;
  where?: Maybe<_Titolo_Bool_Exp>;
};


export type Subscription_Root_Titolo_AggregateArgs = {
  distinct_on?: Maybe<Array<_Titolo_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<_Titolo_Order_By>>;
  where?: Maybe<_Titolo_Bool_Exp>;
};


export type Subscription_Root_Titolo_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootAllegatoArgs = {
  distinct_on?: Maybe<Array<Allegato_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Allegato_Order_By>>;
  where?: Maybe<Allegato_Bool_Exp>;
};


export type Subscription_RootAllegato_AggregateArgs = {
  distinct_on?: Maybe<Array<Allegato_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Allegato_Order_By>>;
  where?: Maybe<Allegato_Bool_Exp>;
};


export type Subscription_RootAllegato_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootAssegnazione_QuartiereArgs = {
  distinct_on?: Maybe<Array<Assegnazione_Quartiere_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Assegnazione_Quartiere_Order_By>>;
  where?: Maybe<Assegnazione_Quartiere_Bool_Exp>;
};


export type Subscription_RootAssegnazione_Quartiere_AggregateArgs = {
  distinct_on?: Maybe<Array<Assegnazione_Quartiere_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Assegnazione_Quartiere_Order_By>>;
  where?: Maybe<Assegnazione_Quartiere_Bool_Exp>;
};


export type Subscription_RootAssegnazione_Quartiere_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootAssegnazione_SquadraArgs = {
  distinct_on?: Maybe<Array<Assegnazione_Squadra_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Assegnazione_Squadra_Order_By>>;
  where?: Maybe<Assegnazione_Squadra_Bool_Exp>;
};


export type Subscription_RootAssegnazione_Squadra_AggregateArgs = {
  distinct_on?: Maybe<Array<Assegnazione_Squadra_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Assegnazione_Squadra_Order_By>>;
  where?: Maybe<Assegnazione_Squadra_Bool_Exp>;
};


export type Subscription_RootAssegnazione_Squadra_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootAssegnazione_ToponimoArgs = {
  distinct_on?: Maybe<Array<Assegnazione_Toponimo_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Assegnazione_Toponimo_Order_By>>;
  where?: Maybe<Assegnazione_Toponimo_Bool_Exp>;
};


export type Subscription_RootAssegnazione_Toponimo_AggregateArgs = {
  distinct_on?: Maybe<Array<Assegnazione_Toponimo_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Assegnazione_Toponimo_Order_By>>;
  where?: Maybe<Assegnazione_Toponimo_Bool_Exp>;
};


export type Subscription_RootAssegnazione_Toponimo_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootAttrezzature_ImpiegateArgs = {
  distinct_on?: Maybe<Array<Attrezzature_Impiegate_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Attrezzature_Impiegate_Order_By>>;
  where?: Maybe<Attrezzature_Impiegate_Bool_Exp>;
};


export type Subscription_RootAttrezzature_Impiegate_AggregateArgs = {
  distinct_on?: Maybe<Array<Attrezzature_Impiegate_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Attrezzature_Impiegate_Order_By>>;
  where?: Maybe<Attrezzature_Impiegate_Bool_Exp>;
};


export type Subscription_RootAttrezzature_Impiegate_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootCivicoArgs = {
  distinct_on?: Maybe<Array<Civico_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Civico_Order_By>>;
  where?: Maybe<Civico_Bool_Exp>;
};


export type Subscription_RootCivico_AggregateArgs = {
  distinct_on?: Maybe<Array<Civico_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Civico_Order_By>>;
  where?: Maybe<Civico_Bool_Exp>;
};


export type Subscription_RootCivico_By_PkArgs = {
  id: Scalars['bigint'];
};


export type Subscription_RootConnessione_GrafoArgs = {
  distinct_on?: Maybe<Array<Connessione_Grafo_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Connessione_Grafo_Order_By>>;
  where?: Maybe<Connessione_Grafo_Bool_Exp>;
};


export type Subscription_RootConnessione_Grafo_AggregateArgs = {
  distinct_on?: Maybe<Array<Connessione_Grafo_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Connessione_Grafo_Order_By>>;
  where?: Maybe<Connessione_Grafo_Bool_Exp>;
};


export type Subscription_RootConnessione_Grafo_By_PkArgs = {
  id: Scalars['bigint'];
};


export type Subscription_RootDiarioArgs = {
  distinct_on?: Maybe<Array<Diario_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Diario_Order_By>>;
  where?: Maybe<Diario_Bool_Exp>;
};


export type Subscription_RootDiario_AggregateArgs = {
  distinct_on?: Maybe<Array<Diario_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Diario_Order_By>>;
  where?: Maybe<Diario_Bool_Exp>;
};


export type Subscription_RootDiario_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootDissestoArgs = {
  distinct_on?: Maybe<Array<Dissesto_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Dissesto_Order_By>>;
  where?: Maybe<Dissesto_Bool_Exp>;
};


export type Subscription_RootDissesto_AggregateArgs = {
  distinct_on?: Maybe<Array<Dissesto_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Dissesto_Order_By>>;
  where?: Maybe<Dissesto_Bool_Exp>;
};


export type Subscription_RootDissesto_By_PkArgs = {
  id: Scalars['Int'];
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


export type Subscription_RootEventoArgs = {
  distinct_on?: Maybe<Array<Evento_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Evento_Order_By>>;
  where?: Maybe<Evento_Bool_Exp>;
};


export type Subscription_RootEvento_AggregateArgs = {
  distinct_on?: Maybe<Array<Evento_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Evento_Order_By>>;
  where?: Maybe<Evento_Bool_Exp>;
};


export type Subscription_RootEvento_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootInterventoArgs = {
  distinct_on?: Maybe<Array<Intervento_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Intervento_Order_By>>;
  where?: Maybe<Intervento_Bool_Exp>;
};


export type Subscription_RootIntervento_AggregateArgs = {
  distinct_on?: Maybe<Array<Intervento_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Intervento_Order_By>>;
  where?: Maybe<Intervento_Bool_Exp>;
};


export type Subscription_RootIntervento_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootIntervento_StraordinarioArgs = {
  distinct_on?: Maybe<Array<Intervento_Straordinario_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Intervento_Straordinario_Order_By>>;
  where?: Maybe<Intervento_Straordinario_Bool_Exp>;
};


export type Subscription_RootIntervento_Straordinario_AggregateArgs = {
  distinct_on?: Maybe<Array<Intervento_Straordinario_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Intervento_Straordinario_Order_By>>;
  where?: Maybe<Intervento_Straordinario_Bool_Exp>;
};


export type Subscription_RootIntervento_Straordinario_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootMateriale_DissestoArgs = {
  distinct_on?: Maybe<Array<Materiale_Dissesto_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Materiale_Dissesto_Order_By>>;
  where?: Maybe<Materiale_Dissesto_Bool_Exp>;
};


export type Subscription_RootMateriale_Dissesto_AggregateArgs = {
  distinct_on?: Maybe<Array<Materiale_Dissesto_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Materiale_Dissesto_Order_By>>;
  where?: Maybe<Materiale_Dissesto_Bool_Exp>;
};


export type Subscription_RootMateriale_Dissesto_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootMembroArgs = {
  distinct_on?: Maybe<Array<Membro_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Membro_Order_By>>;
  where?: Maybe<Membro_Bool_Exp>;
};


export type Subscription_RootMembro_AggregateArgs = {
  distinct_on?: Maybe<Array<Membro_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Membro_Order_By>>;
  where?: Maybe<Membro_Bool_Exp>;
};


export type Subscription_RootMembro_By_PkArgs = {
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


export type Subscription_RootPosizionamento_ToponimoArgs = {
  distinct_on?: Maybe<Array<Posizionamento_Toponimo_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Posizionamento_Toponimo_Order_By>>;
  where?: Maybe<Posizionamento_Toponimo_Bool_Exp>;
};


export type Subscription_RootPosizionamento_Toponimo_AggregateArgs = {
  distinct_on?: Maybe<Array<Posizionamento_Toponimo_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Posizionamento_Toponimo_Order_By>>;
  where?: Maybe<Posizionamento_Toponimo_Bool_Exp>;
};


export type Subscription_RootPosizionamento_Toponimo_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootProtocolloArgs = {
  distinct_on?: Maybe<Array<Protocollo_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Protocollo_Order_By>>;
  where?: Maybe<Protocollo_Bool_Exp>;
};


export type Subscription_RootProtocollo_AggregateArgs = {
  distinct_on?: Maybe<Array<Protocollo_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Protocollo_Order_By>>;
  where?: Maybe<Protocollo_Bool_Exp>;
};


export type Subscription_RootProtocollo_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootProtocollo_DestinatarioArgs = {
  distinct_on?: Maybe<Array<Protocollo_Destinatario_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Protocollo_Destinatario_Order_By>>;
  where?: Maybe<Protocollo_Destinatario_Bool_Exp>;
};


export type Subscription_RootProtocollo_Destinatario_AggregateArgs = {
  distinct_on?: Maybe<Array<Protocollo_Destinatario_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Protocollo_Destinatario_Order_By>>;
  where?: Maybe<Protocollo_Destinatario_Bool_Exp>;
};


export type Subscription_RootProtocollo_Destinatario_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootProtocollo_Destinatario_EsternoArgs = {
  distinct_on?: Maybe<Array<Protocollo_Destinatario_Esterno_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Protocollo_Destinatario_Esterno_Order_By>>;
  where?: Maybe<Protocollo_Destinatario_Esterno_Bool_Exp>;
};


export type Subscription_RootProtocollo_Destinatario_Esterno_AggregateArgs = {
  distinct_on?: Maybe<Array<Protocollo_Destinatario_Esterno_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Protocollo_Destinatario_Esterno_Order_By>>;
  where?: Maybe<Protocollo_Destinatario_Esterno_Bool_Exp>;
};


export type Subscription_RootProtocollo_Destinatario_Esterno_By_PkArgs = {
  id: Scalars['Int'];
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


export type Subscription_RootSegnalazioneArgs = {
  distinct_on?: Maybe<Array<Segnalazione_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Segnalazione_Order_By>>;
  where?: Maybe<Segnalazione_Bool_Exp>;
};


export type Subscription_RootSegnalazione_AggregateArgs = {
  distinct_on?: Maybe<Array<Segnalazione_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Segnalazione_Order_By>>;
  where?: Maybe<Segnalazione_Bool_Exp>;
};


export type Subscription_RootSegnalazione_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootSegnalazione_CollegataArgs = {
  distinct_on?: Maybe<Array<Segnalazione_Collegata_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Segnalazione_Collegata_Order_By>>;
  where?: Maybe<Segnalazione_Collegata_Bool_Exp>;
};


export type Subscription_RootSegnalazione_Collegata_AggregateArgs = {
  distinct_on?: Maybe<Array<Segnalazione_Collegata_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Segnalazione_Collegata_Order_By>>;
  where?: Maybe<Segnalazione_Collegata_Bool_Exp>;
};


export type Subscription_RootSegnalazione_Collegata_By_PkArgs = {
  segnalazione_collegata_id: Scalars['Int'];
  segnalazione_id: Scalars['Int'];
};


export type Subscription_RootSegnaletica_LasciataArgs = {
  distinct_on?: Maybe<Array<Segnaletica_Lasciata_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Segnaletica_Lasciata_Order_By>>;
  where?: Maybe<Segnaletica_Lasciata_Bool_Exp>;
};


export type Subscription_RootSegnaletica_Lasciata_AggregateArgs = {
  distinct_on?: Maybe<Array<Segnaletica_Lasciata_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Segnaletica_Lasciata_Order_By>>;
  where?: Maybe<Segnaletica_Lasciata_Bool_Exp>;
};


export type Subscription_RootSegnaletica_Lasciata_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootSostegno_IpiArgs = {
  distinct_on?: Maybe<Array<Sostegno_Ipi_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Sostegno_Ipi_Order_By>>;
  where?: Maybe<Sostegno_Ipi_Bool_Exp>;
};


export type Subscription_RootSostegno_Ipi_AggregateArgs = {
  distinct_on?: Maybe<Array<Sostegno_Ipi_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Sostegno_Ipi_Order_By>>;
  where?: Maybe<Sostegno_Ipi_Bool_Exp>;
};


export type Subscription_RootSostegno_Ipi_By_PkArgs = {
  id: Scalars['bigint'];
};


export type Subscription_RootSquadraArgs = {
  distinct_on?: Maybe<Array<Squadra_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Squadra_Order_By>>;
  where?: Maybe<Squadra_Bool_Exp>;
};


export type Subscription_RootSquadra_AggregateArgs = {
  distinct_on?: Maybe<Array<Squadra_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Squadra_Order_By>>;
  where?: Maybe<Squadra_Bool_Exp>;
};


export type Subscription_RootSquadra_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootTecnico_ReferenteArgs = {
  distinct_on?: Maybe<Array<Tecnico_Referente_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Tecnico_Referente_Order_By>>;
  where?: Maybe<Tecnico_Referente_Bool_Exp>;
};


export type Subscription_RootTecnico_Referente_AggregateArgs = {
  distinct_on?: Maybe<Array<Tecnico_Referente_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Tecnico_Referente_Order_By>>;
  where?: Maybe<Tecnico_Referente_Bool_Exp>;
};


export type Subscription_RootTecnico_Referente_By_PkArgs = {
  id: Scalars['Int'];
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


export type Subscription_RootVecchia_SquadraArgs = {
  distinct_on?: Maybe<Array<Vecchia_Squadra_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Vecchia_Squadra_Order_By>>;
  where?: Maybe<Vecchia_Squadra_Bool_Exp>;
};


export type Subscription_RootVecchia_Squadra_AggregateArgs = {
  distinct_on?: Maybe<Array<Vecchia_Squadra_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Vecchia_Squadra_Order_By>>;
  where?: Maybe<Vecchia_Squadra_Bool_Exp>;
};


export type Subscription_RootVecchia_Squadra_By_PkArgs = {
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


export type Subscription_RootVeicoli_ImpiegatiArgs = {
  distinct_on?: Maybe<Array<Veicoli_Impiegati_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Veicoli_Impiegati_Order_By>>;
  where?: Maybe<Veicoli_Impiegati_Bool_Exp>;
};


export type Subscription_RootVeicoli_Impiegati_AggregateArgs = {
  distinct_on?: Maybe<Array<Veicoli_Impiegati_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Veicoli_Impiegati_Order_By>>;
  where?: Maybe<Veicoli_Impiegati_Bool_Exp>;
};


export type Subscription_RootVeicoli_Impiegati_By_PkArgs = {
  id: Scalars['Int'];
};

/** columns and relationships of "tecnico_referente" */
export type Tecnico_Referente = {
  __typename?: 'tecnico_referente';
  cognome?: Maybe<Scalars['String']>;
  created_at: Scalars['timestamptz'];
  id: Scalars['Int'];
  nome?: Maybe<Scalars['String']>;
  /** An object relationship */
  titolo?: Maybe<_Titolo>;
  titolo_id?: Maybe<Scalars['Int']>;
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "tecnico_referente" */
export type Tecnico_Referente_Aggregate = {
  __typename?: 'tecnico_referente_aggregate';
  aggregate?: Maybe<Tecnico_Referente_Aggregate_Fields>;
  nodes: Array<Tecnico_Referente>;
};

/** aggregate fields of "tecnico_referente" */
export type Tecnico_Referente_Aggregate_Fields = {
  __typename?: 'tecnico_referente_aggregate_fields';
  avg?: Maybe<Tecnico_Referente_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Tecnico_Referente_Max_Fields>;
  min?: Maybe<Tecnico_Referente_Min_Fields>;
  stddev?: Maybe<Tecnico_Referente_Stddev_Fields>;
  stddev_pop?: Maybe<Tecnico_Referente_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Tecnico_Referente_Stddev_Samp_Fields>;
  sum?: Maybe<Tecnico_Referente_Sum_Fields>;
  var_pop?: Maybe<Tecnico_Referente_Var_Pop_Fields>;
  var_samp?: Maybe<Tecnico_Referente_Var_Samp_Fields>;
  variance?: Maybe<Tecnico_Referente_Variance_Fields>;
};


/** aggregate fields of "tecnico_referente" */
export type Tecnico_Referente_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Tecnico_Referente_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Tecnico_Referente_Avg_Fields = {
  __typename?: 'tecnico_referente_avg_fields';
  id?: Maybe<Scalars['Float']>;
  titolo_id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "tecnico_referente". All fields are combined with a logical 'AND'. */
export type Tecnico_Referente_Bool_Exp = {
  _and?: Maybe<Array<Tecnico_Referente_Bool_Exp>>;
  _not?: Maybe<Tecnico_Referente_Bool_Exp>;
  _or?: Maybe<Array<Tecnico_Referente_Bool_Exp>>;
  cognome?: Maybe<String_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  nome?: Maybe<String_Comparison_Exp>;
  titolo?: Maybe<_Titolo_Bool_Exp>;
  titolo_id?: Maybe<Int_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "tecnico_referente" */
export enum Tecnico_Referente_Constraint {
  /** unique or primary key constraint */
  TecnicoReferentePkey = 'tecnico_referente_pkey'
}

/** input type for incrementing numeric columns in table "tecnico_referente" */
export type Tecnico_Referente_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  titolo_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "tecnico_referente" */
export type Tecnico_Referente_Insert_Input = {
  cognome?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  nome?: Maybe<Scalars['String']>;
  titolo?: Maybe<_Titolo_Obj_Rel_Insert_Input>;
  titolo_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Tecnico_Referente_Max_Fields = {
  __typename?: 'tecnico_referente_max_fields';
  cognome?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  nome?: Maybe<Scalars['String']>;
  titolo_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Tecnico_Referente_Min_Fields = {
  __typename?: 'tecnico_referente_min_fields';
  cognome?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  nome?: Maybe<Scalars['String']>;
  titolo_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "tecnico_referente" */
export type Tecnico_Referente_Mutation_Response = {
  __typename?: 'tecnico_referente_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Tecnico_Referente>;
};

/** input type for inserting object relation for remote table "tecnico_referente" */
export type Tecnico_Referente_Obj_Rel_Insert_Input = {
  data: Tecnico_Referente_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Tecnico_Referente_On_Conflict>;
};

/** on conflict condition type for table "tecnico_referente" */
export type Tecnico_Referente_On_Conflict = {
  constraint: Tecnico_Referente_Constraint;
  update_columns?: Array<Tecnico_Referente_Update_Column>;
  where?: Maybe<Tecnico_Referente_Bool_Exp>;
};

/** Ordering options when selecting data from "tecnico_referente". */
export type Tecnico_Referente_Order_By = {
  cognome?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  nome?: Maybe<Order_By>;
  titolo?: Maybe<_Titolo_Order_By>;
  titolo_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: tecnico_referente */
export type Tecnico_Referente_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "tecnico_referente" */
export enum Tecnico_Referente_Select_Column {
  /** column name */
  Cognome = 'cognome',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Nome = 'nome',
  /** column name */
  TitoloId = 'titolo_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "tecnico_referente" */
export type Tecnico_Referente_Set_Input = {
  cognome?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  nome?: Maybe<Scalars['String']>;
  titolo_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Tecnico_Referente_Stddev_Fields = {
  __typename?: 'tecnico_referente_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  titolo_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Tecnico_Referente_Stddev_Pop_Fields = {
  __typename?: 'tecnico_referente_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  titolo_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Tecnico_Referente_Stddev_Samp_Fields = {
  __typename?: 'tecnico_referente_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  titolo_id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Tecnico_Referente_Sum_Fields = {
  __typename?: 'tecnico_referente_sum_fields';
  id?: Maybe<Scalars['Int']>;
  titolo_id?: Maybe<Scalars['Int']>;
};

/** update columns of table "tecnico_referente" */
export enum Tecnico_Referente_Update_Column {
  /** column name */
  Cognome = 'cognome',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Nome = 'nome',
  /** column name */
  TitoloId = 'titolo_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Tecnico_Referente_Var_Pop_Fields = {
  __typename?: 'tecnico_referente_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  titolo_id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Tecnico_Referente_Var_Samp_Fields = {
  __typename?: 'tecnico_referente_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  titolo_id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Tecnico_Referente_Variance_Fields = {
  __typename?: 'tecnico_referente_variance_fields';
  id?: Maybe<Scalars['Float']>;
  titolo_id?: Maybe<Scalars['Float']>;
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
  /** An array relationship */
  assegnazioni: Array<Assegnazione_Toponimo>;
  /** An aggregate relationship */
  assegnazioni_aggregate: Assegnazione_Toponimo_Aggregate;
  codice?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  /** An object relationship */
  dug?: Maybe<Dug>;
  dug_id?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
  nome: Scalars['String'];
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
export type ToponimoAssegnazioniArgs = {
  distinct_on?: Maybe<Array<Assegnazione_Toponimo_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Assegnazione_Toponimo_Order_By>>;
  where?: Maybe<Assegnazione_Toponimo_Bool_Exp>;
};


/** columns and relationships of "toponimo" */
export type ToponimoAssegnazioni_AggregateArgs = {
  distinct_on?: Maybe<Array<Assegnazione_Toponimo_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Assegnazione_Toponimo_Order_By>>;
  where?: Maybe<Assegnazione_Toponimo_Bool_Exp>;
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
  assegnazioni?: Maybe<Assegnazione_Toponimo_Bool_Exp>;
  codice?: Maybe<String_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  dug?: Maybe<Dug_Bool_Exp>;
  dug_id?: Maybe<Int_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  nome?: Maybe<String_Comparison_Exp>;
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
  assegnazioni?: Maybe<Assegnazione_Toponimo_Arr_Rel_Insert_Input>;
  codice?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  dug?: Maybe<Dug_Obj_Rel_Insert_Input>;
  dug_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  nome?: Maybe<Scalars['String']>;
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
  assegnazioni_aggregate?: Maybe<Assegnazione_Toponimo_Aggregate_Order_By>;
  codice?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  dug?: Maybe<Dug_Order_By>;
  dug_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  nome?: Maybe<Order_By>;
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

/** columns and relationships of "vecchia_squadra" */
export type Vecchia_Squadra = {
  __typename?: 'vecchia_squadra';
  created_at: Scalars['timestamptz'];
  id: Scalars['Int'];
  nome: Scalars['String'];
  protezione_civile: Scalars['Boolean'];
  squadra_id: Scalars['Int'];
};

/** aggregated selection of "vecchia_squadra" */
export type Vecchia_Squadra_Aggregate = {
  __typename?: 'vecchia_squadra_aggregate';
  aggregate?: Maybe<Vecchia_Squadra_Aggregate_Fields>;
  nodes: Array<Vecchia_Squadra>;
};

/** aggregate fields of "vecchia_squadra" */
export type Vecchia_Squadra_Aggregate_Fields = {
  __typename?: 'vecchia_squadra_aggregate_fields';
  avg?: Maybe<Vecchia_Squadra_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Vecchia_Squadra_Max_Fields>;
  min?: Maybe<Vecchia_Squadra_Min_Fields>;
  stddev?: Maybe<Vecchia_Squadra_Stddev_Fields>;
  stddev_pop?: Maybe<Vecchia_Squadra_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Vecchia_Squadra_Stddev_Samp_Fields>;
  sum?: Maybe<Vecchia_Squadra_Sum_Fields>;
  var_pop?: Maybe<Vecchia_Squadra_Var_Pop_Fields>;
  var_samp?: Maybe<Vecchia_Squadra_Var_Samp_Fields>;
  variance?: Maybe<Vecchia_Squadra_Variance_Fields>;
};


/** aggregate fields of "vecchia_squadra" */
export type Vecchia_Squadra_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Vecchia_Squadra_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "vecchia_squadra" */
export type Vecchia_Squadra_Aggregate_Order_By = {
  avg?: Maybe<Vecchia_Squadra_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Vecchia_Squadra_Max_Order_By>;
  min?: Maybe<Vecchia_Squadra_Min_Order_By>;
  stddev?: Maybe<Vecchia_Squadra_Stddev_Order_By>;
  stddev_pop?: Maybe<Vecchia_Squadra_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Vecchia_Squadra_Stddev_Samp_Order_By>;
  sum?: Maybe<Vecchia_Squadra_Sum_Order_By>;
  var_pop?: Maybe<Vecchia_Squadra_Var_Pop_Order_By>;
  var_samp?: Maybe<Vecchia_Squadra_Var_Samp_Order_By>;
  variance?: Maybe<Vecchia_Squadra_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "vecchia_squadra" */
export type Vecchia_Squadra_Arr_Rel_Insert_Input = {
  data: Array<Vecchia_Squadra_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Vecchia_Squadra_On_Conflict>;
};

/** aggregate avg on columns */
export type Vecchia_Squadra_Avg_Fields = {
  __typename?: 'vecchia_squadra_avg_fields';
  id?: Maybe<Scalars['Float']>;
  squadra_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "vecchia_squadra" */
export type Vecchia_Squadra_Avg_Order_By = {
  id?: Maybe<Order_By>;
  squadra_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "vecchia_squadra". All fields are combined with a logical 'AND'. */
export type Vecchia_Squadra_Bool_Exp = {
  _and?: Maybe<Array<Vecchia_Squadra_Bool_Exp>>;
  _not?: Maybe<Vecchia_Squadra_Bool_Exp>;
  _or?: Maybe<Array<Vecchia_Squadra_Bool_Exp>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  nome?: Maybe<String_Comparison_Exp>;
  protezione_civile?: Maybe<Boolean_Comparison_Exp>;
  squadra_id?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "vecchia_squadra" */
export enum Vecchia_Squadra_Constraint {
  /** unique or primary key constraint */
  VecchiaSquadraPkey = 'vecchia_squadra_pkey'
}

/** input type for incrementing numeric columns in table "vecchia_squadra" */
export type Vecchia_Squadra_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  squadra_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "vecchia_squadra" */
export type Vecchia_Squadra_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  nome?: Maybe<Scalars['String']>;
  protezione_civile?: Maybe<Scalars['Boolean']>;
  squadra_id?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Vecchia_Squadra_Max_Fields = {
  __typename?: 'vecchia_squadra_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  nome?: Maybe<Scalars['String']>;
  squadra_id?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "vecchia_squadra" */
export type Vecchia_Squadra_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  nome?: Maybe<Order_By>;
  squadra_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Vecchia_Squadra_Min_Fields = {
  __typename?: 'vecchia_squadra_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  nome?: Maybe<Scalars['String']>;
  squadra_id?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "vecchia_squadra" */
export type Vecchia_Squadra_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  nome?: Maybe<Order_By>;
  squadra_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "vecchia_squadra" */
export type Vecchia_Squadra_Mutation_Response = {
  __typename?: 'vecchia_squadra_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Vecchia_Squadra>;
};

/** on conflict condition type for table "vecchia_squadra" */
export type Vecchia_Squadra_On_Conflict = {
  constraint: Vecchia_Squadra_Constraint;
  update_columns?: Array<Vecchia_Squadra_Update_Column>;
  where?: Maybe<Vecchia_Squadra_Bool_Exp>;
};

/** Ordering options when selecting data from "vecchia_squadra". */
export type Vecchia_Squadra_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  nome?: Maybe<Order_By>;
  protezione_civile?: Maybe<Order_By>;
  squadra_id?: Maybe<Order_By>;
};

/** primary key columns input for table: vecchia_squadra */
export type Vecchia_Squadra_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "vecchia_squadra" */
export enum Vecchia_Squadra_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Nome = 'nome',
  /** column name */
  ProtezioneCivile = 'protezione_civile',
  /** column name */
  SquadraId = 'squadra_id'
}

/** input type for updating data in table "vecchia_squadra" */
export type Vecchia_Squadra_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  nome?: Maybe<Scalars['String']>;
  protezione_civile?: Maybe<Scalars['Boolean']>;
  squadra_id?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Vecchia_Squadra_Stddev_Fields = {
  __typename?: 'vecchia_squadra_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  squadra_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "vecchia_squadra" */
export type Vecchia_Squadra_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  squadra_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Vecchia_Squadra_Stddev_Pop_Fields = {
  __typename?: 'vecchia_squadra_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  squadra_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "vecchia_squadra" */
export type Vecchia_Squadra_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  squadra_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Vecchia_Squadra_Stddev_Samp_Fields = {
  __typename?: 'vecchia_squadra_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  squadra_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "vecchia_squadra" */
export type Vecchia_Squadra_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  squadra_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Vecchia_Squadra_Sum_Fields = {
  __typename?: 'vecchia_squadra_sum_fields';
  id?: Maybe<Scalars['Int']>;
  squadra_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "vecchia_squadra" */
export type Vecchia_Squadra_Sum_Order_By = {
  id?: Maybe<Order_By>;
  squadra_id?: Maybe<Order_By>;
};

/** update columns of table "vecchia_squadra" */
export enum Vecchia_Squadra_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Nome = 'nome',
  /** column name */
  ProtezioneCivile = 'protezione_civile',
  /** column name */
  SquadraId = 'squadra_id'
}

/** aggregate var_pop on columns */
export type Vecchia_Squadra_Var_Pop_Fields = {
  __typename?: 'vecchia_squadra_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  squadra_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "vecchia_squadra" */
export type Vecchia_Squadra_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  squadra_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Vecchia_Squadra_Var_Samp_Fields = {
  __typename?: 'vecchia_squadra_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  squadra_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "vecchia_squadra" */
export type Vecchia_Squadra_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  squadra_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Vecchia_Squadra_Variance_Fields = {
  __typename?: 'vecchia_squadra_variance_fields';
  id?: Maybe<Scalars['Float']>;
  squadra_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "vecchia_squadra" */
export type Vecchia_Squadra_Variance_Order_By = {
  id?: Maybe<Order_By>;
  squadra_id?: Maybe<Order_By>;
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

/** columns and relationships of "veicoli_impiegati" */
export type Veicoli_Impiegati = {
  __typename?: 'veicoli_impiegati';
  created_at: Scalars['timestamptz'];
  delete?: Maybe<Scalars['Boolean']>;
  id: Scalars['Int'];
  intervento_id: Scalars['Int'];
  targa?: Maybe<Scalars['String']>;
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "veicoli_impiegati" */
export type Veicoli_Impiegati_Aggregate = {
  __typename?: 'veicoli_impiegati_aggregate';
  aggregate?: Maybe<Veicoli_Impiegati_Aggregate_Fields>;
  nodes: Array<Veicoli_Impiegati>;
};

/** aggregate fields of "veicoli_impiegati" */
export type Veicoli_Impiegati_Aggregate_Fields = {
  __typename?: 'veicoli_impiegati_aggregate_fields';
  avg?: Maybe<Veicoli_Impiegati_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Veicoli_Impiegati_Max_Fields>;
  min?: Maybe<Veicoli_Impiegati_Min_Fields>;
  stddev?: Maybe<Veicoli_Impiegati_Stddev_Fields>;
  stddev_pop?: Maybe<Veicoli_Impiegati_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Veicoli_Impiegati_Stddev_Samp_Fields>;
  sum?: Maybe<Veicoli_Impiegati_Sum_Fields>;
  var_pop?: Maybe<Veicoli_Impiegati_Var_Pop_Fields>;
  var_samp?: Maybe<Veicoli_Impiegati_Var_Samp_Fields>;
  variance?: Maybe<Veicoli_Impiegati_Variance_Fields>;
};


/** aggregate fields of "veicoli_impiegati" */
export type Veicoli_Impiegati_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Veicoli_Impiegati_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "veicoli_impiegati" */
export type Veicoli_Impiegati_Aggregate_Order_By = {
  avg?: Maybe<Veicoli_Impiegati_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Veicoli_Impiegati_Max_Order_By>;
  min?: Maybe<Veicoli_Impiegati_Min_Order_By>;
  stddev?: Maybe<Veicoli_Impiegati_Stddev_Order_By>;
  stddev_pop?: Maybe<Veicoli_Impiegati_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Veicoli_Impiegati_Stddev_Samp_Order_By>;
  sum?: Maybe<Veicoli_Impiegati_Sum_Order_By>;
  var_pop?: Maybe<Veicoli_Impiegati_Var_Pop_Order_By>;
  var_samp?: Maybe<Veicoli_Impiegati_Var_Samp_Order_By>;
  variance?: Maybe<Veicoli_Impiegati_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "veicoli_impiegati" */
export type Veicoli_Impiegati_Arr_Rel_Insert_Input = {
  data: Array<Veicoli_Impiegati_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Veicoli_Impiegati_On_Conflict>;
};

/** aggregate avg on columns */
export type Veicoli_Impiegati_Avg_Fields = {
  __typename?: 'veicoli_impiegati_avg_fields';
  id?: Maybe<Scalars['Float']>;
  intervento_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "veicoli_impiegati" */
export type Veicoli_Impiegati_Avg_Order_By = {
  id?: Maybe<Order_By>;
  intervento_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "veicoli_impiegati". All fields are combined with a logical 'AND'. */
export type Veicoli_Impiegati_Bool_Exp = {
  _and?: Maybe<Array<Veicoli_Impiegati_Bool_Exp>>;
  _not?: Maybe<Veicoli_Impiegati_Bool_Exp>;
  _or?: Maybe<Array<Veicoli_Impiegati_Bool_Exp>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  delete?: Maybe<Boolean_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  intervento_id?: Maybe<Int_Comparison_Exp>;
  targa?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "veicoli_impiegati" */
export enum Veicoli_Impiegati_Constraint {
  /** unique or primary key constraint */
  VeicoliImpiegatiPkey = 'veicoli_impiegati_pkey'
}

/** input type for incrementing numeric columns in table "veicoli_impiegati" */
export type Veicoli_Impiegati_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  intervento_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "veicoli_impiegati" */
export type Veicoli_Impiegati_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  delete?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['Int']>;
  intervento_id?: Maybe<Scalars['Int']>;
  targa?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Veicoli_Impiegati_Max_Fields = {
  __typename?: 'veicoli_impiegati_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  intervento_id?: Maybe<Scalars['Int']>;
  targa?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "veicoli_impiegati" */
export type Veicoli_Impiegati_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  intervento_id?: Maybe<Order_By>;
  targa?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Veicoli_Impiegati_Min_Fields = {
  __typename?: 'veicoli_impiegati_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  intervento_id?: Maybe<Scalars['Int']>;
  targa?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "veicoli_impiegati" */
export type Veicoli_Impiegati_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  intervento_id?: Maybe<Order_By>;
  targa?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "veicoli_impiegati" */
export type Veicoli_Impiegati_Mutation_Response = {
  __typename?: 'veicoli_impiegati_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Veicoli_Impiegati>;
};

/** on conflict condition type for table "veicoli_impiegati" */
export type Veicoli_Impiegati_On_Conflict = {
  constraint: Veicoli_Impiegati_Constraint;
  update_columns?: Array<Veicoli_Impiegati_Update_Column>;
  where?: Maybe<Veicoli_Impiegati_Bool_Exp>;
};

/** Ordering options when selecting data from "veicoli_impiegati". */
export type Veicoli_Impiegati_Order_By = {
  created_at?: Maybe<Order_By>;
  delete?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  intervento_id?: Maybe<Order_By>;
  targa?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: veicoli_impiegati */
export type Veicoli_Impiegati_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "veicoli_impiegati" */
export enum Veicoli_Impiegati_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Delete = 'delete',
  /** column name */
  Id = 'id',
  /** column name */
  InterventoId = 'intervento_id',
  /** column name */
  Targa = 'targa',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "veicoli_impiegati" */
export type Veicoli_Impiegati_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  delete?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['Int']>;
  intervento_id?: Maybe<Scalars['Int']>;
  targa?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Veicoli_Impiegati_Stddev_Fields = {
  __typename?: 'veicoli_impiegati_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  intervento_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "veicoli_impiegati" */
export type Veicoli_Impiegati_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  intervento_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Veicoli_Impiegati_Stddev_Pop_Fields = {
  __typename?: 'veicoli_impiegati_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  intervento_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "veicoli_impiegati" */
export type Veicoli_Impiegati_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  intervento_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Veicoli_Impiegati_Stddev_Samp_Fields = {
  __typename?: 'veicoli_impiegati_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  intervento_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "veicoli_impiegati" */
export type Veicoli_Impiegati_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  intervento_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Veicoli_Impiegati_Sum_Fields = {
  __typename?: 'veicoli_impiegati_sum_fields';
  id?: Maybe<Scalars['Int']>;
  intervento_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "veicoli_impiegati" */
export type Veicoli_Impiegati_Sum_Order_By = {
  id?: Maybe<Order_By>;
  intervento_id?: Maybe<Order_By>;
};

/** update columns of table "veicoli_impiegati" */
export enum Veicoli_Impiegati_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Delete = 'delete',
  /** column name */
  Id = 'id',
  /** column name */
  InterventoId = 'intervento_id',
  /** column name */
  Targa = 'targa',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Veicoli_Impiegati_Var_Pop_Fields = {
  __typename?: 'veicoli_impiegati_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  intervento_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "veicoli_impiegati" */
export type Veicoli_Impiegati_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  intervento_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Veicoli_Impiegati_Var_Samp_Fields = {
  __typename?: 'veicoli_impiegati_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  intervento_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "veicoli_impiegati" */
export type Veicoli_Impiegati_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  intervento_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Veicoli_Impiegati_Variance_Fields = {
  __typename?: 'veicoli_impiegati_variance_fields';
  id?: Maybe<Scalars['Float']>;
  intervento_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "veicoli_impiegati" */
export type Veicoli_Impiegati_Variance_Order_By = {
  id?: Maybe<Order_By>;
  intervento_id?: Maybe<Order_By>;
};

export type CiviciSelectQueryVariables = Exact<{
  fk_t_code?: Maybe<String_Comparison_Exp>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  civico1?: Maybe<String_Comparison_Exp>;
}>;


export type CiviciSelectQuery = { __typename?: 'query_root', civico: Array<{ __typename?: 'civico', id: any, civico1?: string | null | undefined, geom?: any | null | undefined }> };

export type SostegniIpiSelectQueryVariables = Exact<{
  fk_t_code?: Maybe<String_Comparison_Exp>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  matricola?: Maybe<String_Comparison_Exp>;
}>;


export type SostegniIpiSelectQuery = { __typename?: 'query_root', sostegno_ipi: Array<{ __typename?: 'sostegno_ipi', id: any, matricola?: string | null | undefined, geom?: any | null | undefined }> };

export type ConnessioniGrafoSelectQueryVariables = Exact<{
  fk_t_code?: Maybe<String_Comparison_Exp>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
}>;


export type ConnessioniGrafoSelectQuery = { __typename?: 'query_root', connessione_grafo: Array<{ __typename?: 'connessione_grafo', id: any, fk_t_code?: string | null | undefined, geom?: any | null | undefined }> };

export type DiarioSubscriptionVariables = Exact<{
  id: Scalars['Int'];
}>;


export type DiarioSubscription = { __typename?: 'subscription_root', diario: Array<{ __typename?: 'diario', created_at: any, messaggio?: string | null | undefined, utente: any, allegato?: { __typename?: 'allegato', file: string, id: number, nome: string, tipo: string, created_at: any } | null | undefined }> };

export type InsertDiarioMutationVariables = Exact<{
  objects?: Maybe<Array<Diario_Insert_Input> | Diario_Insert_Input>;
}>;


export type InsertDiarioMutation = { __typename?: 'mutation_root', insert_diario?: { __typename?: 'diario_mutation_response', affected_rows: number } | null | undefined };

export type InterventiStraordinariSubscriptionVariables = Exact<{
  where?: Maybe<Intervento_Straordinario_Bool_Exp>;
}>;


export type InterventiStraordinariSubscription = { __typename?: 'subscription_root', intervento_straordinario: Array<{ __typename?: 'intervento_straordinario', id: number, municipalita_storica?: any | null | undefined, quartiere_storico?: any | null | undefined, toponimo_storico?: any | null | undefined, data_inserimento?: any | null | undefined, data_inizio_lavori?: any | null | undefined, data_fine_lavori?: any | null | undefined, tipologia_intervento?: string | null | undefined, lavori_effettuati?: string | null | undefined, stato: _Stato_Segnalazione_Enum, posizionamento_toponimo_punto_iniziale?: { __typename?: 'posizionamento_toponimo', id: number, civico?: string | null | undefined, ipi?: string | null | undefined, km?: string | null | undefined, connessione?: string | null | undefined, note?: string | null | undefined, geoloc?: any | null | undefined, tipologia?: { __typename?: '_tipologia_posizionamento_toponimo', id: number, nome: string } | null | undefined, specifica?: { __typename?: '_specifica_posizionamento_toponimo', id: number, nome: string } | null | undefined } | null | undefined, posizionamento_toponimo_punto_finale?: { __typename?: 'posizionamento_toponimo', id: number, civico?: string | null | undefined, ipi?: string | null | undefined, km?: string | null | undefined, connessione?: string | null | undefined, note?: string | null | undefined, geoloc?: any | null | undefined, tipologia?: { __typename?: '_tipologia_posizionamento_toponimo', id: number, nome: string } | null | undefined, specifica?: { __typename?: '_specifica_posizionamento_toponimo', id: number, nome: string } | null | undefined } | null | undefined, priorita?: { __typename?: '_priorita', id: number, nome: string } | null | undefined, allegati: Array<{ __typename?: 'allegato', id: number, file: string, nome: string, tipo: string }> }> };

export type InterventoStraordinarioQueryVariables = Exact<{
  where: Intervento_Straordinario_Bool_Exp;
}>;


export type InterventoStraordinarioQuery = { __typename?: 'query_root', intervento_straordinario: Array<{ __typename?: 'intervento_straordinario', id: number, municipalita_storica?: any | null | undefined, quartiere_storico?: any | null | undefined, toponimo_storico?: any | null | undefined, data_inserimento?: any | null | undefined, data_inizio_lavori?: any | null | undefined, data_fine_lavori?: any | null | undefined, tipologia_intervento?: string | null | undefined, lavori_effettuati?: string | null | undefined, stato: _Stato_Segnalazione_Enum, municipalita?: { __typename?: 'municipalita', id: number, nome: string } | null | undefined, quartiere?: { __typename?: 'quartiere', id: number, nome: string, municipalita: Array<{ __typename?: 'assegnazione_quartiere', municipalita_id: number }> } | null | undefined, toponimo?: { __typename?: 'toponimo', id: number, nome: string, codice?: string | null | undefined, dug?: { __typename?: 'dug', id: number, nome: string } | null | undefined, assegnazioni: Array<{ __typename?: 'assegnazione_toponimo', quartiere_id: number }> } | null | undefined, posizionamento_toponimo_punto_iniziale?: { __typename?: 'posizionamento_toponimo', id: number, civico?: string | null | undefined, ipi?: string | null | undefined, km?: string | null | undefined, connessione?: string | null | undefined, note?: string | null | undefined, geoloc?: any | null | undefined, tipologia?: { __typename?: '_tipologia_posizionamento_toponimo', id: number, nome: string } | null | undefined, specifica?: { __typename?: '_specifica_posizionamento_toponimo', id: number, nome: string } | null | undefined } | null | undefined, posizionamento_toponimo_punto_finale?: { __typename?: 'posizionamento_toponimo', id: number, civico?: string | null | undefined, ipi?: string | null | undefined, km?: string | null | undefined, connessione?: string | null | undefined, note?: string | null | undefined, geoloc?: any | null | undefined, tipologia?: { __typename?: '_tipologia_posizionamento_toponimo', id: number, nome: string } | null | undefined, specifica?: { __typename?: '_specifica_posizionamento_toponimo', id: number, nome: string } | null | undefined } | null | undefined, priorita?: { __typename?: '_priorita', id: number, nome: string } | null | undefined, allegati: Array<{ __typename?: 'allegato', id: number, file: string, nome: string, tipo: string }> }> };

export type UpdateInterventoStraordinarioMutationVariables = Exact<{
  intervento?: Maybe<Array<Intervento_Straordinario_Insert_Input> | Intervento_Straordinario_Insert_Input>;
  on_conflict?: Maybe<Intervento_Straordinario_On_Conflict>;
}>;


export type UpdateInterventoStraordinarioMutation = { __typename?: 'mutation_root', insert_intervento_straordinario?: { __typename?: 'intervento_straordinario_mutation_response', returning: Array<{ __typename?: 'intervento_straordinario', id: number, allegati: Array<{ __typename?: 'allegato', id: number, file: string, nome: string, tipo: string }> }> } | null | undefined };

export type DeleteInterventoStraordinarioMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type DeleteInterventoStraordinarioMutation = { __typename?: 'mutation_root', delete_intervento_straordinario?: { __typename?: 'intervento_straordinario_mutation_response', affected_rows: number } | null | undefined };

export type SegnalazioniSubscriptionVariables = Exact<{
  where?: Maybe<Segnalazione_Bool_Exp>;
}>;


export type SegnalazioniSubscription = { __typename?: 'subscription_root', segnalazione: Array<{ __typename?: 'segnalazione', id: number, municipalita_id?: number | null | undefined, quartiere_id?: number | null | undefined, toponimo_id?: number | null | undefined, municipalita_storica?: any | null | undefined, quartiere_storico?: any | null | undefined, toponimo_storico?: any | null | undefined, data?: any | null | undefined, stato: _Stato_Segnalazione_Enum, richiesta_protezione_civile?: boolean | null | undefined, tecnico_referente?: { __typename?: 'tecnico_referente', id: number, nome?: string | null | undefined, cognome?: string | null | undefined, titolo?: { __typename?: '_titolo', id: number, nome: string } | null | undefined } | null | undefined, priorita?: { __typename?: '_priorita', id: number, nome: string } | null | undefined, protocollo?: { __typename?: 'protocollo', note?: string | null | undefined, numero?: string | null | undefined, id: number, data?: any | null | undefined, mittente?: { __typename?: '_sezione_protocollo', id: number, nome: string, sigla?: string | null | undefined, codice: string } | null | undefined, destinatari: Array<{ __typename?: 'protocollo_destinatario', id: number, e_esterno: boolean, destinatario_interno?: { __typename?: '_sezione_protocollo', id: number, nome: string, codice: string, sigla?: string | null | undefined } | null | undefined, destinatario_esterno?: { __typename?: 'protocollo_destinatario_esterno', id: number, cognome?: string | null | undefined, email?: string | null | undefined, codice_fiscale?: string | null | undefined, nome?: string | null | undefined } | null | undefined }> } | null | undefined, allegati: Array<{ __typename?: 'allegato', id: number, file: string, nome: string, tipo: string }>, dissesto?: { __typename?: 'dissesto', id: number, note?: string | null | undefined, peso?: any | null | undefined, prima_dimensione?: any | null | undefined, profondita?: any | null | undefined, seconda_dimensione?: any | null | undefined, terza_dimensione?: any | null | undefined, tipologia?: { __typename?: '_tipologia_dissesto', id: number, nome: string } | null | undefined, forma?: { __typename?: '_forma_dissesto', id: number, nome: string } | null | undefined } | null | undefined, posizionamento_toponimo_punto_iniziale?: { __typename?: 'posizionamento_toponimo', civico?: string | null | undefined, connessione?: string | null | undefined, geoloc?: any | null | undefined, id: number, ipi?: string | null | undefined, km?: string | null | undefined, note?: string | null | undefined, specifica?: { __typename?: '_specifica_posizionamento_toponimo', id: number, nome: string } | null | undefined, tipologia?: { __typename?: '_tipologia_posizionamento_toponimo', id: number, nome: string } | null | undefined } | null | undefined, diario: Array<{ __typename?: 'diario', id: number, messaggio?: string | null | undefined, utente: any, allegato?: { __typename?: 'allegato', id: number, file: string, nome: string, tipo: string } | null | undefined }>, segnalazioni_collegate: Array<{ __typename?: 'segnalazione_collegata', segnalazione: { __typename?: 'segnalazione', id: number, created_at: any, stato: _Stato_Segnalazione_Enum, protocollo?: { __typename?: 'protocollo', data?: any | null | undefined, numero?: string | null | undefined } | null | undefined } }>, eventi: Array<{ __typename?: 'evento', stato: _Stato_Segnalazione_Enum, note?: string | null | undefined, created_at: any, squadra?: { __typename?: 'squadra', nome: string } | null | undefined, protocollo?: { __typename?: 'protocollo', numero?: string | null | undefined, data?: any | null | undefined, note?: string | null | undefined } | null | undefined, risolutore?: { __typename?: 'segnalazione', protocollo?: { __typename?: 'protocollo', numero?: string | null | undefined, data?: any | null | undefined } | null | undefined } | null | undefined }>, intervento?: { __typename?: 'intervento', id: number, assistenza_pm?: boolean | null | undefined, data_fine_lavori?: any | null | undefined, data_inizio_lavori?: any | null | undefined, difformita?: string | null | undefined, dissesto_difforme?: boolean | null | undefined, note?: string | null | undefined, condizioni_traffico?: { __typename?: '_condizioni_traffico', nome: string, id: number } | null | undefined, attrezzature_impiegate: Array<{ __typename?: 'attrezzature_impiegate', id: number, nome?: string | null | undefined, quantita?: any | null | undefined }>, giorni_trascorsi?: { __typename?: '_giorni_trascorsi', id: number, nome: string } | null | undefined, materiali_dissesto: Array<{ __typename?: 'materiale_dissesto', id: number, quantita?: any | null | undefined, altro?: string | null | undefined, materiale?: { __typename?: '_materiale', id: number, nome: string } | null | undefined }>, segnaletica_lasciata: Array<{ __typename?: 'segnaletica_lasciata', id: number, nome?: string | null | undefined, quantita?: any | null | undefined }>, veicoli_impiegati: Array<{ __typename?: 'veicoli_impiegati', id: number, targa?: string | null | undefined }>, allegati: Array<{ __typename?: 'allegato', id: number, file: string, nome: string, tipo: string }> } | null | undefined }> };

export type SegnalazioneQueryVariables = Exact<{
  where: Segnalazione_Bool_Exp;
}>;


export type SegnalazioneQuery = { __typename?: 'query_root', segnalazione: Array<{ __typename?: 'segnalazione', id: number, municipalita_storica?: any | null | undefined, quartiere_storico?: any | null | undefined, toponimo_storico?: any | null | undefined, data?: any | null | undefined, stato: _Stato_Segnalazione_Enum, richiesta_protezione_civile?: boolean | null | undefined, municipalita?: { __typename?: 'municipalita', id: number, nome: string } | null | undefined, quartiere?: { __typename?: 'quartiere', id: number, nome: string, municipalita: Array<{ __typename?: 'assegnazione_quartiere', municipalita_id: number }> } | null | undefined, toponimo?: { __typename?: 'toponimo', id: number, nome: string, codice?: string | null | undefined, dug?: { __typename?: 'dug', id: number, nome: string } | null | undefined, assegnazioni: Array<{ __typename?: 'assegnazione_toponimo', quartiere_id: number }> } | null | undefined, tecnico_referente?: { __typename?: 'tecnico_referente', id: number, nome?: string | null | undefined, cognome?: string | null | undefined, titolo?: { __typename?: '_titolo', id: number, nome: string } | null | undefined } | null | undefined, priorita?: { __typename?: '_priorita', id: number, nome: string } | null | undefined, protocollo?: { __typename?: 'protocollo', note?: string | null | undefined, numero?: string | null | undefined, id: number, data?: any | null | undefined, mittente?: { __typename?: '_sezione_protocollo', id: number, nome: string, sigla?: string | null | undefined, codice: string } | null | undefined, destinatari: Array<{ __typename?: 'protocollo_destinatario', id: number, e_esterno: boolean, destinatario_interno?: { __typename?: '_sezione_protocollo', id: number, nome: string, codice: string, sigla?: string | null | undefined } | null | undefined, destinatario_esterno?: { __typename?: 'protocollo_destinatario_esterno', id: number, cognome?: string | null | undefined, email?: string | null | undefined, codice_fiscale?: string | null | undefined, nome?: string | null | undefined } | null | undefined }> } | null | undefined, allegati: Array<{ __typename?: 'allegato', id: number, file: string, nome: string, tipo: string }>, dissesto?: { __typename?: 'dissesto', id: number, note?: string | null | undefined, peso?: any | null | undefined, prima_dimensione?: any | null | undefined, profondita?: any | null | undefined, seconda_dimensione?: any | null | undefined, terza_dimensione?: any | null | undefined, tipologia?: { __typename?: '_tipologia_dissesto', id: number, nome: string, intervento?: string | null | undefined } | null | undefined, forma?: { __typename?: '_forma_dissesto', id: number, nome: string } | null | undefined } | null | undefined, posizionamento_toponimo_punto_iniziale?: { __typename?: 'posizionamento_toponimo', civico?: string | null | undefined, connessione?: string | null | undefined, geoloc?: any | null | undefined, id: number, ipi?: string | null | undefined, km?: string | null | undefined, note?: string | null | undefined, specifica?: { __typename?: '_specifica_posizionamento_toponimo', id: number, nome: string } | null | undefined, tipologia?: { __typename?: '_tipologia_posizionamento_toponimo', id: number, nome: string } | null | undefined } | null | undefined, diario: Array<{ __typename?: 'diario', id: number, messaggio?: string | null | undefined, utente: any, allegato?: { __typename?: 'allegato', id: number, file: string, nome: string, tipo: string } | null | undefined }>, segnalazioni_collegate: Array<{ __typename?: 'segnalazione_collegata', segnalazione: { __typename?: 'segnalazione', id: number, created_at: any, stato: _Stato_Segnalazione_Enum, protocollo?: { __typename?: 'protocollo', data?: any | null | undefined, numero?: string | null | undefined } | null | undefined } }>, eventi: Array<{ __typename?: 'evento', stato: _Stato_Segnalazione_Enum, note?: string | null | undefined, created_at: any, squadra?: { __typename?: 'squadra', nome: string } | null | undefined, protocollo?: { __typename?: 'protocollo', numero?: string | null | undefined, data?: any | null | undefined, note?: string | null | undefined } | null | undefined, risolutore?: { __typename?: 'segnalazione', protocollo?: { __typename?: 'protocollo', numero?: string | null | undefined, data?: any | null | undefined } | null | undefined } | null | undefined }>, intervento?: { __typename?: 'intervento', id: number, assistenza_pm?: boolean | null | undefined, data_fine_lavori?: any | null | undefined, data_inizio_lavori?: any | null | undefined, difformita?: string | null | undefined, dissesto_difforme?: boolean | null | undefined, note?: string | null | undefined, condizioni_traffico?: { __typename?: '_condizioni_traffico', nome: string, id: number } | null | undefined, attrezzature_impiegate: Array<{ __typename?: 'attrezzature_impiegate', id: number, nome?: string | null | undefined, quantita?: any | null | undefined }>, giorni_trascorsi?: { __typename?: '_giorni_trascorsi', id: number, nome: string } | null | undefined, materiali_dissesto: Array<{ __typename?: 'materiale_dissesto', id: number, quantita?: any | null | undefined, altro?: string | null | undefined, materiale?: { __typename?: '_materiale', id: number, nome: string } | null | undefined }>, segnaletica_lasciata: Array<{ __typename?: 'segnaletica_lasciata', id: number, nome?: string | null | undefined, quantita?: any | null | undefined }>, veicoli_impiegati: Array<{ __typename?: 'veicoli_impiegati', id: number, targa?: string | null | undefined }>, allegati: Array<{ __typename?: 'allegato', id: number, file: string, nome: string, tipo: string }> } | null | undefined }> };

export type UpdateSegnalazioneMutationVariables = Exact<{
  segnalazione?: Maybe<Array<Segnalazione_Insert_Input> | Segnalazione_Insert_Input>;
  on_conflict?: Maybe<Segnalazione_On_Conflict>;
}>;


export type UpdateSegnalazioneMutation = { __typename?: 'mutation_root', insert_segnalazione?: { __typename?: 'segnalazione_mutation_response', returning: Array<{ __typename?: 'segnalazione', id: number, protocollo?: { __typename?: 'protocollo', destinatari: Array<{ __typename?: 'protocollo_destinatario', id: number, destinatario_esterno?: { __typename?: 'protocollo_destinatario_esterno', id: number } | null | undefined }> } | null | undefined, allegati: Array<{ __typename?: 'allegato', id: number, file: string, nome: string, tipo: string }>, segnalazioni_collegate: Array<{ __typename?: 'segnalazione_collegata', segnalazione: { __typename?: 'segnalazione', id: number } }>, intervento?: { __typename?: 'intervento', attrezzature_impiegate: Array<{ __typename?: 'attrezzature_impiegate', id: number }>, materiali_dissesto: Array<{ __typename?: 'materiale_dissesto', id: number }>, segnaletica_lasciata: Array<{ __typename?: 'segnaletica_lasciata', id: number }>, veicoli_impiegati: Array<{ __typename?: 'veicoli_impiegati', id: number }>, allegati: Array<{ __typename?: 'allegato', id: number, file: string, nome: string, tipo: string }> } | null | undefined }> } | null | undefined };

export type DeleteSegnalazioneMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type DeleteSegnalazioneMutation = { __typename?: 'mutation_root', delete_segnalazione?: { __typename?: 'segnalazione_mutation_response', affected_rows: number } | null | undefined };

export type PrioritaSelectQueryVariables = Exact<{
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  nome?: Maybe<String_Comparison_Exp>;
}>;


export type PrioritaSelectQuery = { __typename?: 'query_root', _priorita: Array<{ __typename?: '_priorita', id: number, nome: string }> };

export type TipologiaPosizionamentoToponimoSelectQueryVariables = Exact<{
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  nome?: Maybe<String_Comparison_Exp>;
}>;


export type TipologiaPosizionamentoToponimoSelectQuery = { __typename?: 'query_root', _tipologia_posizionamento_toponimo: Array<{ __typename?: '_tipologia_posizionamento_toponimo', id: number, nome: string }> };

export type SpecificaPosizionamentoToponimoSelectQueryVariables = Exact<{
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  nome?: Maybe<String_Comparison_Exp>;
}>;


export type SpecificaPosizionamentoToponimoSelectQuery = { __typename?: 'query_root', _specifica_posizionamento_toponimo: Array<{ __typename?: '_specifica_posizionamento_toponimo', id: number, nome: string }> };

export type OperatorePisSelectQueryVariables = Exact<{
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  where?: Maybe<Membro_Bool_Exp>;
}>;


export type OperatorePisSelectQuery = { __typename?: 'query_root', membro: Array<{ __typename?: 'membro', id: number, nome: string, cognome: string, matricola: string, squadre_aggregate: { __typename?: 'assegnazione_squadra_aggregate', aggregate?: { __typename?: 'assegnazione_squadra_aggregate_fields', count: number } | null | undefined } }> };

export type FormaDissesoSelectQueryVariables = Exact<{
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  nome?: Maybe<String_Comparison_Exp>;
}>;


export type FormaDissesoSelectQuery = { __typename?: 'query_root', _forma_dissesto: Array<{ __typename?: '_forma_dissesto', id: number, nome: string }> };

export type TipologiaDissesoSelectQueryVariables = Exact<{
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  nome?: Maybe<String_Comparison_Exp>;
}>;


export type TipologiaDissesoSelectQuery = { __typename?: 'query_root', _tipologia_dissesto: Array<{ __typename?: '_tipologia_dissesto', id: number, nome: string, intervento?: string | null | undefined }> };

export type SezioneProtocolloSelectQueryVariables = Exact<{
  where?: Maybe<_Sezione_Protocollo_Bool_Exp>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
}>;


export type SezioneProtocolloSelectQuery = { __typename?: 'query_root', _sezione_protocollo: Array<{ __typename?: '_sezione_protocollo', id: number, nome: string, sigla?: string | null | undefined, codice: string }> };

export type TitoloSelectQueryVariables = Exact<{
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  nome?: Maybe<String_Comparison_Exp>;
}>;


export type TitoloSelectQuery = { __typename?: 'query_root', _titolo: Array<{ __typename?: '_titolo', id: number, nome: string }> };

export type SegnalazioneSelectQueryVariables = Exact<{
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  where?: Maybe<Segnalazione_Bool_Exp>;
}>;


export type SegnalazioneSelectQuery = { __typename?: 'query_root', segnalazione: Array<{ __typename?: 'segnalazione', id: number, created_at: any, protocollo?: { __typename?: 'protocollo', numero?: string | null | undefined, data?: any | null | undefined } | null | undefined }> };

export type SquadrePisSelectQueryVariables = Exact<{
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  where?: Maybe<Squadra_Bool_Exp>;
}>;


export type SquadrePisSelectQuery = { __typename?: 'query_root', squadra: Array<{ __typename?: 'squadra', id: number, nome: string, protezione_civile: boolean }> };

export type CondizioniTrafficoSelectQueryVariables = Exact<{
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  nome?: Maybe<String_Comparison_Exp>;
}>;


export type CondizioniTrafficoSelectQuery = { __typename?: 'query_root', _condizioni_traffico: Array<{ __typename?: '_condizioni_traffico', id: number, nome: string }> };

export type GiorniTrascorsiSelectQueryVariables = Exact<{
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  nome?: Maybe<String_Comparison_Exp>;
}>;


export type GiorniTrascorsiSelectQuery = { __typename?: 'query_root', _giorni_trascorsi: Array<{ __typename?: '_giorni_trascorsi', id: number, nome: string }> };

export type MaterialeSelectQueryVariables = Exact<{
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  nome?: Maybe<String_Comparison_Exp>;
}>;


export type MaterialeSelectQuery = { __typename?: 'query_root', _materiale: Array<{ __typename?: '_materiale', id: number, nome: string }> };

export type SquadrePisSubscriptionVariables = Exact<{
  where?: Maybe<Squadra_Bool_Exp>;
}>;


export type SquadrePisSubscription = { __typename?: 'subscription_root', squadra: Array<{ __typename?: 'squadra', id: number, nome: string, protezione_civile: boolean, updated_at: any, vecchie_denominazioni: Array<{ __typename?: 'vecchia_squadra', nome: string, created_at: any }>, membri: Array<{ __typename?: 'assegnazione_squadra', id: number, caposquadra: boolean, inizio_validita: any, fine_validita?: any | null | undefined, membro: { __typename?: 'membro', id: number, nome: string, cognome: string, matricola: string } }> }> };

export type UpdateSquadraPisMutationVariables = Exact<{
  squadra?: Maybe<Array<Squadra_Insert_Input> | Squadra_Insert_Input>;
}>;


export type UpdateSquadraPisMutation = { __typename?: 'mutation_root', insert_squadra?: { __typename?: 'squadra_mutation_response', affected_rows: number } | null | undefined };

export type DeleteSquadraPisMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type DeleteSquadraPisMutation = { __typename?: 'mutation_root', delete_squadra?: { __typename?: 'squadra_mutation_response', affected_rows: number } | null | undefined };

export type OperatoriPisSubscriptionVariables = Exact<{
  where?: Maybe<Membro_Bool_Exp>;
}>;


export type OperatoriPisSubscription = { __typename?: 'subscription_root', membro: Array<{ __typename?: 'membro', id: number, nome: string, cognome: string, matricola: string, squadre: Array<{ __typename?: 'assegnazione_squadra', id: number, caposquadra: boolean, inizio_validita: any, fine_validita?: any | null | undefined, squadra: { __typename?: 'squadra', id: number, nome: string, protezione_civile: boolean } }> }> };

export type UpdateOperatorePisMutationVariables = Exact<{
  membro?: Maybe<Array<Membro_Insert_Input> | Membro_Insert_Input>;
}>;


export type UpdateOperatorePisMutation = { __typename?: 'mutation_root', insert_membro?: { __typename?: 'membro_mutation_response', affected_rows: number } | null | undefined };

export type DeleteOperatorePisMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type DeleteOperatorePisMutation = { __typename?: 'mutation_root', delete_membro?: { __typename?: 'membro_mutation_response', affected_rows: number } | null | undefined };

export type MunicipalitaSubscriptionVariables = Exact<{
  where?: Maybe<Municipalita_Bool_Exp>;
}>;


export type MunicipalitaSubscription = { __typename?: 'subscription_root', municipalita: Array<{ __typename?: 'municipalita', id: number, nome: string, updated_at: any, vecchie_denominazioni: Array<{ __typename?: 'vecchia_municipalita', nome: string, created_at: any }>, quartieri: Array<{ __typename?: 'assegnazione_quartiere', id: number, inizio_validita: any, fine_validita?: any | null | undefined, quartiere: { __typename?: 'quartiere', id: number, nome: string } }> }> };

export type UpdateMunicipalitaMutationVariables = Exact<{
  municipalita?: Maybe<Array<Municipalita_Insert_Input> | Municipalita_Insert_Input>;
}>;


export type UpdateMunicipalitaMutation = { __typename?: 'mutation_root', insert_municipalita?: { __typename?: 'municipalita_mutation_response', affected_rows: number } | null | undefined };

export type DeleteMunicipalitaMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type DeleteMunicipalitaMutation = { __typename?: 'mutation_root', delete_municipalita?: { __typename?: 'municipalita_mutation_response', affected_rows: number } | null | undefined };

export type QuartieriSubscriptionVariables = Exact<{
  where?: Maybe<Quartiere_Bool_Exp>;
}>;


export type QuartieriSubscription = { __typename?: 'subscription_root', quartiere: Array<{ __typename?: 'quartiere', id: number, nome: string, updated_at: any, vecchie_denominazioni: Array<{ __typename?: 'vecchio_quartiere', nome: string, created_at: any }>, municipalita: Array<{ __typename?: 'assegnazione_quartiere', id: number, inizio_validita: any, fine_validita?: any | null | undefined, municipalita: { __typename?: 'municipalita', id: number, nome: string } }> }> };

export type UpdateQuartiereMutationVariables = Exact<{
  quartiere?: Maybe<Array<Quartiere_Insert_Input> | Quartiere_Insert_Input>;
}>;


export type UpdateQuartiereMutation = { __typename?: 'mutation_root', insert_quartiere?: { __typename?: 'quartiere_mutation_response', affected_rows: number } | null | undefined };

export type DeleteQuartiereMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type DeleteQuartiereMutation = { __typename?: 'mutation_root', delete_quartiere?: { __typename?: 'quartiere_mutation_response', affected_rows: number } | null | undefined };

export type MunicipalitaSelectQueryVariables = Exact<{
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  nome?: Maybe<String_Comparison_Exp>;
}>;


export type MunicipalitaSelectQuery = { __typename?: 'query_root', municipalita: Array<{ __typename?: 'municipalita', id: number, nome: string }> };

export type QuartiereSelectQueryVariables = Exact<{
  where?: Maybe<Quartiere_Bool_Exp>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
}>;


export type QuartiereSelectQuery = { __typename?: 'query_root', quartiere: Array<{ __typename?: 'quartiere', id: number, nome: string, municipalita: Array<{ __typename?: 'assegnazione_quartiere', municipalita_id: number }> }> };

export type ToponimoSelectQueryVariables = Exact<{
  where?: Maybe<Toponimo_Bool_Exp>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
}>;


export type ToponimoSelectQuery = { __typename?: 'query_root', toponimo: Array<{ __typename?: 'toponimo', id: number, nome: string, codice?: string | null | undefined, dug?: { __typename?: 'dug', id: number, nome: string } | null | undefined, assegnazioni: Array<{ __typename?: 'assegnazione_toponimo', quartiere_id: number }> }> };

export type DugSelectQueryVariables = Exact<{
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  nome?: Maybe<String_Comparison_Exp>;
}>;


export type DugSelectQuery = { __typename?: 'query_root', dug: Array<{ __typename?: 'dug', id: number, nome: string }> };

export type TipologiaSelectQueryVariables = Exact<{
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  nome?: Maybe<String_Comparison_Exp>;
}>;


export type TipologiaSelectQuery = { __typename?: 'query_root', tipologia: Array<{ __typename?: 'tipologia', id: number, nome: string }> };

export type ToponimoNomeSelectQueryVariables = Exact<{
  _in: Array<Scalars['String']> | Scalars['String'];
}>;


export type ToponimoNomeSelectQuery = { __typename?: 'query_root', toponimo: Array<{ __typename?: 'toponimo', nome: string, dug?: { __typename?: 'dug', id: number, nome: string } | null | undefined }> };

export type ToponimiSubscriptionVariables = Exact<{
  where?: Maybe<Toponimo_Bool_Exp>;
}>;


export type ToponimiSubscription = { __typename?: 'subscription_root', toponimo: Array<{ __typename?: 'toponimo', id: number, nome: string, codice?: string | null | undefined, updated_at?: any | null | undefined, dug?: { __typename?: 'dug', id: number, nome: string } | null | undefined, tipologia?: { __typename?: 'tipologia', id: number, nome: string } | null | undefined, vecchie_denominazioni: Array<{ __typename?: 'vecchio_toponimo', nome: string, codice?: string | null | undefined, created_at: any, dug?: { __typename?: 'dug', nome: string } | null | undefined, tipologia?: { __typename?: 'tipologia', nome: string } | null | undefined }>, assegnazioni: Array<{ __typename?: 'assegnazione_toponimo', id: number, inizio_validita: any, fine_validita?: any | null | undefined, municipalita: { __typename?: 'municipalita', id: number, nome: string }, quartiere: { __typename?: 'quartiere', id: number, nome: string } }> }> };

export type UpdateToponimoMutationVariables = Exact<{
  toponimo?: Maybe<Array<Toponimo_Insert_Input> | Toponimo_Insert_Input>;
}>;


export type UpdateToponimoMutation = { __typename?: 'mutation_root', insert_toponimo?: { __typename?: 'toponimo_mutation_response', affected_rows: number } | null | undefined };

export type DeleteToponimoMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type DeleteToponimoMutation = { __typename?: 'mutation_root', delete_toponimo?: { __typename?: 'toponimo_mutation_response', affected_rows: number } | null | undefined };

export const CiviciSelectDocument = gql`
    query CiviciSelect($fk_t_code: String_comparison_exp = {}, $limit: Int = 10, $offset: Int = 0, $civico1: String_comparison_exp = {}) {
  civico(
    where: {fk_t_code: $fk_t_code, civico1: $civico1}
    limit: $limit
    offset: $offset
  ) {
    id
    civico1
    geom
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CiviciSelectGQL extends Apollo.Query<CiviciSelectQuery, CiviciSelectQueryVariables> {
    document = CiviciSelectDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const SostegniIpiSelectDocument = gql`
    query SostegniIpiSelect($fk_t_code: String_comparison_exp = {}, $limit: Int = 10, $offset: Int = 0, $matricola: String_comparison_exp = {}) {
  sostegno_ipi(
    where: {fk_t_code: $fk_t_code, matricola: $matricola}
    limit: $limit
    offset: $offset
  ) {
    id
    matricola
    geom
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class SostegniIpiSelectGQL extends Apollo.Query<SostegniIpiSelectQuery, SostegniIpiSelectQueryVariables> {
    document = SostegniIpiSelectDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ConnessioniGrafoSelectDocument = gql`
    query ConnessioniGrafoSelect($fk_t_code: String_comparison_exp = {}, $limit: Int = 10, $offset: Int = 0) {
  connessione_grafo(
    where: {fk_t_code: $fk_t_code}
    limit: $limit
    offset: $offset
  ) {
    id
    fk_t_code
    geom
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ConnessioniGrafoSelectGQL extends Apollo.Query<ConnessioniGrafoSelectQuery, ConnessioniGrafoSelectQueryVariables> {
    document = ConnessioniGrafoSelectDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const DiarioDocument = gql`
    subscription Diario($id: Int!) {
  diario(where: {segnalazione_id: {_eq: $id}}, order_by: {created_at: desc}) {
    created_at
    messaggio
    allegato {
      file
      id
      nome
      tipo
      created_at
    }
    utente
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DiarioGQL extends Apollo.Subscription<DiarioSubscription, DiarioSubscriptionVariables> {
    document = DiarioDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const InsertDiarioDocument = gql`
    mutation InsertDiario($objects: [diario_insert_input!] = {}) {
  insert_diario(objects: $objects) {
    affected_rows
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class InsertDiarioGQL extends Apollo.Mutation<InsertDiarioMutation, InsertDiarioMutationVariables> {
    document = InsertDiarioDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const InterventiStraordinariDocument = gql`
    subscription InterventiStraordinari($where: intervento_straordinario_bool_exp = {}) {
  intervento_straordinario(where: $where) {
    id
    municipalita_storica
    quartiere_storico
    toponimo_storico
    posizionamento_toponimo_punto_iniziale {
      id
      tipologia {
        id
        nome
      }
      specifica {
        id
        nome
      }
      civico
      ipi
      km
      connessione
      note
      geoloc
    }
    posizionamento_toponimo_punto_finale {
      id
      tipologia {
        id
        nome
      }
      specifica {
        id
        nome
      }
      civico
      ipi
      km
      connessione
      note
      geoloc
    }
    data_inserimento
    priorita {
      id
      nome
    }
    data_inizio_lavori
    data_fine_lavori
    tipologia_intervento
    lavori_effettuati
    stato
    allegati {
      id
      file
      nome
      tipo
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class InterventiStraordinariGQL extends Apollo.Subscription<InterventiStraordinariSubscription, InterventiStraordinariSubscriptionVariables> {
    document = InterventiStraordinariDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const InterventoStraordinarioDocument = gql`
    query InterventoStraordinario($where: intervento_straordinario_bool_exp!) {
  intervento_straordinario(where: $where) {
    id
    municipalita {
      id
      nome
    }
    quartiere {
      id
      nome
      municipalita {
        municipalita_id
      }
    }
    toponimo {
      id
      nome
      dug {
        id
        nome
      }
      codice
      assegnazioni {
        quartiere_id
      }
    }
    municipalita_storica
    quartiere_storico
    toponimo_storico
    posizionamento_toponimo_punto_iniziale {
      id
      tipologia {
        id
        nome
      }
      specifica {
        id
        nome
      }
      civico
      ipi
      km
      connessione
      note
      geoloc
    }
    posizionamento_toponimo_punto_finale {
      id
      tipologia {
        id
        nome
      }
      specifica {
        id
        nome
      }
      civico
      ipi
      km
      connessione
      note
      geoloc
    }
    data_inserimento
    priorita {
      id
      nome
    }
    data_inizio_lavori
    data_fine_lavori
    tipologia_intervento
    lavori_effettuati
    stato
    allegati {
      id
      file
      nome
      tipo
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class InterventoStraordinarioGQL extends Apollo.Query<InterventoStraordinarioQuery, InterventoStraordinarioQueryVariables> {
    document = InterventoStraordinarioDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UpdateInterventoStraordinarioDocument = gql`
    mutation UpdateInterventoStraordinario($intervento: [intervento_straordinario_insert_input!] = {}, $on_conflict: intervento_straordinario_on_conflict = {constraint: intervento_straordinario_pkey}) {
  insert_intervento_straordinario(objects: $intervento, on_conflict: $on_conflict) {
    returning {
      id
      allegati {
        id
        file
        nome
        tipo
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UpdateInterventoStraordinarioGQL extends Apollo.Mutation<UpdateInterventoStraordinarioMutation, UpdateInterventoStraordinarioMutationVariables> {
    document = UpdateInterventoStraordinarioDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const DeleteInterventoStraordinarioDocument = gql`
    mutation DeleteInterventoStraordinario($id: Int!) {
  delete_intervento_straordinario(where: {id: {_eq: $id}}) {
    affected_rows
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DeleteInterventoStraordinarioGQL extends Apollo.Mutation<DeleteInterventoStraordinarioMutation, DeleteInterventoStraordinarioMutationVariables> {
    document = DeleteInterventoStraordinarioDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const SegnalazioniDocument = gql`
    subscription Segnalazioni($where: segnalazione_bool_exp = {}) {
  segnalazione(where: $where) {
    id
    municipalita_id
    quartiere_id
    toponimo_id
    municipalita_storica
    quartiere_storico
    toponimo_storico
    data
    tecnico_referente {
      id
      nome
      cognome
      titolo {
        id
        nome
      }
    }
    priorita {
      id
      nome
    }
    protocollo {
      note
      numero
      mittente {
        id
        nome
        sigla
        codice
      }
      id
      destinatari {
        id
        e_esterno
        destinatario_interno {
          id
          nome
          codice
          sigla
        }
        destinatario_esterno {
          id
          cognome
          email
          codice_fiscale
          nome
        }
      }
      data
    }
    stato
    richiesta_protezione_civile
    allegati {
      id
      file
      nome
      tipo
    }
    dissesto {
      id
      note
      peso
      prima_dimensione
      profondita
      seconda_dimensione
      terza_dimensione
      tipologia {
        id
        nome
      }
      forma {
        id
        nome
      }
    }
    posizionamento_toponimo_punto_iniziale {
      civico
      connessione
      geoloc
      id
      ipi
      km
      note
      specifica {
        id
        nome
      }
      tipologia {
        id
        nome
      }
    }
    diario {
      id
      messaggio
      utente
      allegato {
        id
        file
        nome
        tipo
      }
    }
    segnalazioni_collegate {
      segnalazione {
        id
        created_at
        protocollo {
          data
          numero
        }
        stato
      }
    }
    eventi {
      stato
      note
      squadra {
        nome
      }
      protocollo {
        numero
        data
        note
      }
      created_at
      risolutore {
        protocollo {
          numero
          data
        }
      }
    }
    intervento {
      id
      assistenza_pm
      condizioni_traffico {
        nome
        id
      }
      attrezzature_impiegate {
        id
        nome
        quantita
      }
      data_fine_lavori
      data_inizio_lavori
      difformita
      dissesto_difforme
      giorni_trascorsi {
        id
        nome
      }
      materiali_dissesto {
        id
        materiale {
          id
          nome
        }
        quantita
        altro
      }
      segnaletica_lasciata {
        id
        nome
        quantita
      }
      note
      veicoli_impiegati {
        id
        targa
      }
      allegati {
        id
        file
        nome
        tipo
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class SegnalazioniGQL extends Apollo.Subscription<SegnalazioniSubscription, SegnalazioniSubscriptionVariables> {
    document = SegnalazioniDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const SegnalazioneDocument = gql`
    query Segnalazione($where: segnalazione_bool_exp!) {
  segnalazione(where: $where) {
    id
    municipalita {
      id
      nome
    }
    quartiere {
      id
      nome
      municipalita {
        municipalita_id
      }
    }
    toponimo {
      id
      nome
      dug {
        id
        nome
      }
      codice
      assegnazioni {
        quartiere_id
      }
    }
    municipalita_storica
    quartiere_storico
    toponimo_storico
    data
    tecnico_referente {
      id
      nome
      cognome
      titolo {
        id
        nome
      }
    }
    priorita {
      id
      nome
    }
    protocollo {
      note
      numero
      mittente {
        id
        nome
        sigla
        codice
      }
      id
      destinatari {
        id
        e_esterno
        destinatario_interno {
          id
          nome
          codice
          sigla
        }
        destinatario_esterno {
          id
          cognome
          email
          codice_fiscale
          nome
        }
      }
      data
    }
    stato
    richiesta_protezione_civile
    allegati {
      id
      file
      nome
      tipo
    }
    dissesto {
      id
      note
      peso
      prima_dimensione
      profondita
      seconda_dimensione
      terza_dimensione
      tipologia {
        id
        nome
        intervento
      }
      forma {
        id
        nome
      }
    }
    posizionamento_toponimo_punto_iniziale {
      civico
      connessione
      geoloc
      id
      ipi
      km
      note
      specifica {
        id
        nome
      }
      tipologia {
        id
        nome
      }
    }
    diario {
      id
      messaggio
      utente
      allegato {
        id
        file
        nome
        tipo
      }
    }
    segnalazioni_collegate {
      segnalazione {
        id
        created_at
        protocollo {
          data
          numero
        }
        stato
      }
    }
    eventi {
      stato
      note
      squadra {
        nome
      }
      protocollo {
        numero
        data
        note
      }
      created_at
      risolutore {
        protocollo {
          numero
          data
        }
      }
    }
    intervento {
      id
      assistenza_pm
      condizioni_traffico {
        nome
        id
      }
      attrezzature_impiegate {
        id
        nome
        quantita
      }
      data_fine_lavori
      data_inizio_lavori
      difformita
      dissesto_difforme
      giorni_trascorsi {
        id
        nome
      }
      materiali_dissesto {
        id
        materiale {
          id
          nome
        }
        quantita
        altro
      }
      segnaletica_lasciata {
        id
        nome
        quantita
      }
      note
      veicoli_impiegati {
        id
        targa
      }
      allegati {
        id
        file
        nome
        tipo
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class SegnalazioneGQL extends Apollo.Query<SegnalazioneQuery, SegnalazioneQueryVariables> {
    document = SegnalazioneDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UpdateSegnalazioneDocument = gql`
    mutation UpdateSegnalazione($segnalazione: [segnalazione_insert_input!] = {}, $on_conflict: segnalazione_on_conflict = {constraint: segnalazione_pkey}) {
  insert_segnalazione(objects: $segnalazione, on_conflict: $on_conflict) {
    returning {
      id
      protocollo {
        destinatari {
          id
          destinatario_esterno {
            id
          }
        }
      }
      allegati {
        id
        file
        nome
        tipo
      }
      segnalazioni_collegate {
        segnalazione {
          id
        }
      }
      intervento {
        attrezzature_impiegate {
          id
        }
        materiali_dissesto {
          id
        }
        segnaletica_lasciata {
          id
        }
        veicoli_impiegati {
          id
        }
        allegati {
          id
          file
          nome
          tipo
        }
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UpdateSegnalazioneGQL extends Apollo.Mutation<UpdateSegnalazioneMutation, UpdateSegnalazioneMutationVariables> {
    document = UpdateSegnalazioneDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const DeleteSegnalazioneDocument = gql`
    mutation DeleteSegnalazione($id: Int!) {
  delete_segnalazione(where: {id: {_eq: $id}}) {
    affected_rows
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DeleteSegnalazioneGQL extends Apollo.Mutation<DeleteSegnalazioneMutation, DeleteSegnalazioneMutationVariables> {
    document = DeleteSegnalazioneDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const PrioritaSelectDocument = gql`
    query PrioritaSelect($limit: Int = 10, $offset: Int = 0, $nome: String_comparison_exp = {}) {
  _priorita(
    order_by: {nome: asc}
    limit: $limit
    offset: $offset
    where: {nome: $nome}
  ) {
    id
    nome
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class PrioritaSelectGQL extends Apollo.Query<PrioritaSelectQuery, PrioritaSelectQueryVariables> {
    document = PrioritaSelectDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const TipologiaPosizionamentoToponimoSelectDocument = gql`
    query TipologiaPosizionamentoToponimoSelect($limit: Int = 10, $offset: Int = 0, $nome: String_comparison_exp = {}) {
  _tipologia_posizionamento_toponimo(
    order_by: {nome: asc}
    limit: $limit
    offset: $offset
    where: {nome: $nome}
  ) {
    id
    nome
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class TipologiaPosizionamentoToponimoSelectGQL extends Apollo.Query<TipologiaPosizionamentoToponimoSelectQuery, TipologiaPosizionamentoToponimoSelectQueryVariables> {
    document = TipologiaPosizionamentoToponimoSelectDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const SpecificaPosizionamentoToponimoSelectDocument = gql`
    query SpecificaPosizionamentoToponimoSelect($limit: Int = 10, $offset: Int = 0, $nome: String_comparison_exp = {}) {
  _specifica_posizionamento_toponimo(
    order_by: {nome: asc}
    limit: $limit
    offset: $offset
    where: {nome: $nome}
  ) {
    id
    nome
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class SpecificaPosizionamentoToponimoSelectGQL extends Apollo.Query<SpecificaPosizionamentoToponimoSelectQuery, SpecificaPosizionamentoToponimoSelectQueryVariables> {
    document = SpecificaPosizionamentoToponimoSelectDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const OperatorePisSelectDocument = gql`
    query OperatorePisSelect($limit: Int = 10, $offset: Int = 0, $where: membro_bool_exp = {}) {
  membro(order_by: {nome: asc}, limit: $limit, offset: $offset, where: $where) {
    id
    nome
    cognome
    matricola
    squadre_aggregate(where: {fine_validita: {_is_null: true}}) {
      aggregate {
        count
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class OperatorePisSelectGQL extends Apollo.Query<OperatorePisSelectQuery, OperatorePisSelectQueryVariables> {
    document = OperatorePisSelectDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const FormaDissesoSelectDocument = gql`
    query FormaDissesoSelect($limit: Int = 10, $offset: Int = 0, $nome: String_comparison_exp = {}) {
  _forma_dissesto(
    order_by: {nome: asc}
    limit: $limit
    offset: $offset
    where: {nome: $nome}
  ) {
    id
    nome
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class FormaDissesoSelectGQL extends Apollo.Query<FormaDissesoSelectQuery, FormaDissesoSelectQueryVariables> {
    document = FormaDissesoSelectDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const TipologiaDissesoSelectDocument = gql`
    query TipologiaDissesoSelect($limit: Int = 10, $offset: Int = 0, $nome: String_comparison_exp = {}) {
  _tipologia_dissesto(
    order_by: {nome: asc}
    limit: $limit
    offset: $offset
    where: {nome: $nome}
  ) {
    id
    nome
    intervento
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class TipologiaDissesoSelectGQL extends Apollo.Query<TipologiaDissesoSelectQuery, TipologiaDissesoSelectQueryVariables> {
    document = TipologiaDissesoSelectDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const SezioneProtocolloSelectDocument = gql`
    query SezioneProtocolloSelect($where: _sezione_protocollo_bool_exp = {}, $limit: Int = 10, $offset: Int = 0) {
  _sezione_protocollo(
    order_by: {nome: asc}
    where: $where
    limit: $limit
    offset: $offset
  ) {
    id
    nome
    sigla
    codice
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class SezioneProtocolloSelectGQL extends Apollo.Query<SezioneProtocolloSelectQuery, SezioneProtocolloSelectQueryVariables> {
    document = SezioneProtocolloSelectDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const TitoloSelectDocument = gql`
    query TitoloSelect($limit: Int = 10, $offset: Int = 0, $nome: String_comparison_exp = {}) {
  _titolo(
    order_by: {nome: asc}
    limit: $limit
    offset: $offset
    where: {nome: $nome}
  ) {
    id
    nome
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class TitoloSelectGQL extends Apollo.Query<TitoloSelectQuery, TitoloSelectQueryVariables> {
    document = TitoloSelectDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const SegnalazioneSelectDocument = gql`
    query SegnalazioneSelect($limit: Int = 10, $offset: Int = 0, $where: segnalazione_bool_exp = {}) {
  segnalazione(
    order_by: {protocollo: {numero: asc}}
    limit: $limit
    offset: $offset
    where: $where
  ) {
    id
    created_at
    protocollo {
      numero
      data
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class SegnalazioneSelectGQL extends Apollo.Query<SegnalazioneSelectQuery, SegnalazioneSelectQueryVariables> {
    document = SegnalazioneSelectDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const SquadrePisSelectDocument = gql`
    query SquadrePisSelect($limit: Int = 10, $offset: Int = 0, $where: squadra_bool_exp = {}) {
  squadra(order_by: {nome: asc}, limit: $limit, offset: $offset, where: $where) {
    id
    nome
    protezione_civile
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class SquadrePisSelectGQL extends Apollo.Query<SquadrePisSelectQuery, SquadrePisSelectQueryVariables> {
    document = SquadrePisSelectDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CondizioniTrafficoSelectDocument = gql`
    query CondizioniTrafficoSelect($limit: Int = 10, $offset: Int = 0, $nome: String_comparison_exp = {}) {
  _condizioni_traffico(
    order_by: {nome: asc}
    limit: $limit
    offset: $offset
    where: {nome: $nome}
  ) {
    id
    nome
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CondizioniTrafficoSelectGQL extends Apollo.Query<CondizioniTrafficoSelectQuery, CondizioniTrafficoSelectQueryVariables> {
    document = CondizioniTrafficoSelectDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GiorniTrascorsiSelectDocument = gql`
    query GiorniTrascorsiSelect($limit: Int = 10, $offset: Int = 0, $nome: String_comparison_exp = {}) {
  _giorni_trascorsi(
    order_by: {nome: asc}
    limit: $limit
    offset: $offset
    where: {nome: $nome}
  ) {
    id
    nome
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GiorniTrascorsiSelectGQL extends Apollo.Query<GiorniTrascorsiSelectQuery, GiorniTrascorsiSelectQueryVariables> {
    document = GiorniTrascorsiSelectDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const MaterialeSelectDocument = gql`
    query MaterialeSelect($limit: Int = 10, $offset: Int = 0, $nome: String_comparison_exp = {}) {
  _materiale(
    order_by: {nome: asc}
    limit: $limit
    offset: $offset
    where: {nome: $nome}
  ) {
    id
    nome
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class MaterialeSelectGQL extends Apollo.Query<MaterialeSelectQuery, MaterialeSelectQueryVariables> {
    document = MaterialeSelectDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const SquadrePisDocument = gql`
    subscription SquadrePis($where: squadra_bool_exp = {}) {
  squadra(where: $where) {
    id
    nome
    protezione_civile
    updated_at
    vecchie_denominazioni(order_by: {created_at: desc}) {
      nome
      created_at
    }
    membri(order_by: {fine_validita: desc_nulls_first}) {
      id
      caposquadra
      inizio_validita
      fine_validita
      membro {
        id
        nome
        cognome
        matricola
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class SquadrePisGQL extends Apollo.Subscription<SquadrePisSubscription, SquadrePisSubscriptionVariables> {
    document = SquadrePisDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UpdateSquadraPisDocument = gql`
    mutation UpdateSquadraPis($squadra: [squadra_insert_input!] = {}) {
  insert_squadra(
    on_conflict: {constraint: squadra_pkey, update_columns: [nome, protezione_civile]}
    objects: $squadra
  ) {
    affected_rows
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UpdateSquadraPisGQL extends Apollo.Mutation<UpdateSquadraPisMutation, UpdateSquadraPisMutationVariables> {
    document = UpdateSquadraPisDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const DeleteSquadraPisDocument = gql`
    mutation DeleteSquadraPis($id: Int!) {
  delete_squadra(where: {id: {_eq: $id}}) {
    affected_rows
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DeleteSquadraPisGQL extends Apollo.Mutation<DeleteSquadraPisMutation, DeleteSquadraPisMutationVariables> {
    document = DeleteSquadraPisDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const OperatoriPisDocument = gql`
    subscription OperatoriPis($where: membro_bool_exp = {}) {
  membro(where: $where) {
    id
    nome
    cognome
    matricola
    squadre(order_by: {fine_validita: desc_nulls_first}) {
      id
      caposquadra
      inizio_validita
      fine_validita
      squadra {
        id
        nome
        protezione_civile
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class OperatoriPisGQL extends Apollo.Subscription<OperatoriPisSubscription, OperatoriPisSubscriptionVariables> {
    document = OperatoriPisDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UpdateOperatorePisDocument = gql`
    mutation UpdateOperatorePis($membro: [membro_insert_input!] = {}) {
  insert_membro(
    on_conflict: {constraint: membro_pkey, update_columns: [nome, cognome, matricola]}
    objects: $membro
  ) {
    affected_rows
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UpdateOperatorePisGQL extends Apollo.Mutation<UpdateOperatorePisMutation, UpdateOperatorePisMutationVariables> {
    document = UpdateOperatorePisDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const DeleteOperatorePisDocument = gql`
    mutation DeleteOperatorePis($id: Int!) {
  delete_membro(where: {id: {_eq: $id}}) {
    affected_rows
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DeleteOperatorePisGQL extends Apollo.Mutation<DeleteOperatorePisMutation, DeleteOperatorePisMutationVariables> {
    document = DeleteOperatorePisDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const MunicipalitaDocument = gql`
    subscription Municipalita($where: municipalita_bool_exp = {}) {
  municipalita(where: $where) {
    id
    nome
    updated_at
    vecchie_denominazioni(order_by: {created_at: desc}) {
      nome
      created_at
    }
    quartieri(order_by: {fine_validita: desc_nulls_first}) {
      id
      inizio_validita
      fine_validita
      quartiere {
        id
        nome
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
export const DeleteMunicipalitaDocument = gql`
    mutation DeleteMunicipalita($id: Int!) {
  delete_municipalita(where: {id: {_eq: $id}}) {
    affected_rows
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DeleteMunicipalitaGQL extends Apollo.Mutation<DeleteMunicipalitaMutation, DeleteMunicipalitaMutationVariables> {
    document = DeleteMunicipalitaDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const QuartieriDocument = gql`
    subscription Quartieri($where: quartiere_bool_exp = {}) {
  quartiere(where: $where) {
    id
    nome
    updated_at
    vecchie_denominazioni(order_by: {created_at: desc}) {
      nome
      created_at
    }
    municipalita(order_by: {fine_validita: desc_nulls_first}) {
      id
      inizio_validita
      fine_validita
      municipalita {
        id
        nome
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
export const DeleteQuartiereDocument = gql`
    mutation DeleteQuartiere($id: Int!) {
  delete_quartiere(where: {id: {_eq: $id}}) {
    affected_rows
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DeleteQuartiereGQL extends Apollo.Mutation<DeleteQuartiereMutation, DeleteQuartiereMutationVariables> {
    document = DeleteQuartiereDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const MunicipalitaSelectDocument = gql`
    query MunicipalitaSelect($limit: Int = 10, $offset: Int = 0, $nome: String_comparison_exp = {}) {
  municipalita(
    order_by: {nome: asc}
    limit: $limit
    offset: $offset
    where: {nome: $nome}
  ) {
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
    query QuartiereSelect($where: quartiere_bool_exp = {}, $limit: Int = 10, $offset: Int = 0) {
  quartiere(order_by: {nome: asc}, where: $where, limit: $limit, offset: $offset) {
    id
    nome
    municipalita {
      municipalita_id
    }
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
export const ToponimoSelectDocument = gql`
    query ToponimoSelect($where: toponimo_bool_exp = {}, $limit: Int = 10, $offset: Int = 0) {
  toponimo(order_by: {nome: asc}, where: $where, limit: $limit, offset: $offset) {
    id
    nome
    dug {
      id
      nome
    }
    codice
    assegnazioni {
      quartiere_id
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ToponimoSelectGQL extends Apollo.Query<ToponimoSelectQuery, ToponimoSelectQueryVariables> {
    document = ToponimoSelectDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const DugSelectDocument = gql`
    query DugSelect($limit: Int = 10, $offset: Int = 0, $nome: String_comparison_exp = {}) {
  dug(order_by: {nome: asc}, limit: $limit, offset: $offset, where: {nome: $nome}) {
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
    query TipologiaSelect($limit: Int = 10, $offset: Int = 0, $nome: String_comparison_exp = {}) {
  tipologia(
    order_by: {nome: asc}
    limit: $limit
    offset: $offset
    where: {nome: $nome}
  ) {
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
export const ToponimoNomeSelectDocument = gql`
    query ToponimoNomeSelect($_in: [String!]!) {
  toponimo(order_by: {nome: asc}, where: {codice: {_in: $_in}}) {
    nome
    dug {
      id
      nome
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ToponimoNomeSelectGQL extends Apollo.Query<ToponimoNomeSelectQuery, ToponimoNomeSelectQueryVariables> {
    document = ToponimoNomeSelectDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ToponimiDocument = gql`
    subscription Toponimi($where: toponimo_bool_exp = {}) {
  toponimo(where: $where) {
    id
    dug {
      id
      nome
    }
    nome
    tipologia {
      id
      nome
    }
    codice
    updated_at
    vecchie_denominazioni(order_by: {created_at: desc}) {
      dug {
        nome
      }
      nome
      tipologia {
        nome
      }
      codice
      created_at
    }
    assegnazioni(order_by: {fine_validita: desc_nulls_first}) {
      id
      inizio_validita
      fine_validita
      municipalita {
        id
        nome
      }
      quartiere {
        id
        nome
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
    mutation UpdateToponimo($toponimo: [toponimo_insert_input!] = {}) {
  insert_toponimo(
    on_conflict: {constraint: toponimo_pkey, update_columns: [nome, dug_id, tipologia_id]}
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
export const DeleteToponimoDocument = gql`
    mutation DeleteToponimo($id: Int!) {
  delete_toponimo(where: {id: {_eq: $id}}) {
    affected_rows
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DeleteToponimoGQL extends Apollo.Mutation<DeleteToponimoMutation, DeleteToponimoMutationVariables> {
    document = DeleteToponimoDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }