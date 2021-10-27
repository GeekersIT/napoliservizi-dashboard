import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

@Injectable({
  providedIn: 'root'
})
export class MunicipalitaService {
  private _dataQuery: any;
  private _data: any = null;


  constructor(private apollo: Apollo) {
    this._dataQuery = this.apollo.query<any>({
      query: gql`{
        municipalita(order_by: {nome: asc}) {
          id
          nome
          updated_at,
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
      }`
    });
  }

  private async _init(){
    let data = await this._dataQuery.toPromise();
    this._data = data.data.municipalita.map((element:any) => {
      return {
        ...element, 
        ...{quartiere: element.pacchetti_quartiere.filter((q:any) => q.fine_validita == null).map((q:any) => q.quartieri.map((q:any) => q.quartiere.nome).join(', ')).join(', ')},
        ...{pacchetti_quartiere: element.pacchetti_quartiere.filter((q:any) => q.fine_validita == null).map((q:any) => { return {...q, nome: q.quartieri.map((q:any) => q.quartiere.nome).join(', ')}})[0]},
        ...{vecchi_pacchetti_quartiere: element.pacchetti_quartiere.filter((q:any) => q.fine_validita != null).map((q:any) => { return {...q,quartieri:q.quartieri.map((q:any) => q.quartiere.nome).join(', ')}})}
      }
    });
  }

  async getData(data?:never[]){
    if(this._data==null)
      await this._init();
    return data!==undefined ? data : this._data;
  }

  async getDataByQuartiere(filter:any[], data?:never[]){
    data = await this.getData();
    if(filter.length == 0 || filter === undefined || filter === null)
      return data;
    return data!.filter((element:any) => {
      var main = element.pacchetti_quartiere.quartieri.map((q:any) => q.quartiere.id);
      return filter.some((f:any) => {
        return main.indexOf(f) + 1;
      })
    });
  }
    
  async getOptions(){
    let dataQuery = this.apollo.query<any>({
      query: gql`{
        municipalita {
          id
          nome
        }
      }`
    });
    let data = await dataQuery.toPromise();
    return data.data.municipalita;
  }


  update(data:any){
    return this.apollo.mutate<any>({
      mutation: gql`mutation UpdateMunicipalita($id: Int!, $nome: String!) {
        update_municipalita(where: {id: {_eq: $id}}, _set: {nome: $nome}) {
          affected_rows
        }
      }`,
      variables: {
        "id": data.id,
        "nome": data.nome
      }
    });
  }
}
