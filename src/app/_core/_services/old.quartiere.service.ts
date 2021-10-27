import { Injectable } from '@angular/core';
import { Apollo, gql, QueryRef } from 'apollo-angular';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuartiereService {
  private _dataQuery: any;
  private _data: any = null;


  constructor(private apollo: Apollo) {
    this._dataQuery = this.apollo.query<any>({
      query: gql`{
        quartiere(order_by: {nome: asc}) {
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
      }`
    });
  }

  private async _init(){
    let data = await this._dataQuery.toPromise();
    this._data = data.data.quartiere.map((element: { municipalita: any[]; }) => {
      return {
        ...element, 
        ...{municipalita: element.municipalita.filter((q:any) => q.municipalita.fine_validita == null).map((q:any) => q.municipalita.municipalita.nome).join(', ')},
        ...{municipalita_attuale: element.municipalita.filter((q:any) => q.municipalita.fine_validita == null)},
        ...{vecchie_municipalita: element.municipalita.filter((q:any) => q.municipalita.fine_validita != null)}

      }
    });
  }

  async getData(data?:never[]){
    if(this._data==null)
      await this._init();
    return data!==undefined ? data : this._data;
  }

  async getDataByMunicipalita(filter:any[], data?:never[]){
    data = await this.getData(data);
    if(filter.length == 0 || filter === undefined || filter === null)
      return data;
    return data!.filter((element:any) => {
      var main = element.municipalita_attuale.map((q:any) => q.municipalita.municipalita.id);
      return filter.some((f:any) => {
        return main.indexOf(f) + 1;
      })
    });
  }
  
  async getOptions(){
    let dataQuery = this.apollo.query<any>({
      query: gql`{
        quartiere {
          id
          nome
        }
      }`
    });
    let data = await dataQuery.toPromise();
    return data.data.quartiere;
  }
}
