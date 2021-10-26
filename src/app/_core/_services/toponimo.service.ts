import { Injectable } from '@angular/core';
import { Apollo, gql, QueryRef } from 'apollo-angular';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToponimoService {
  private _dataQuery: any;
  private _data: any = null;


  constructor(private apollo: Apollo) {
    this._dataQuery = this.apollo.query<any>({
      query: gql`{
        toponimo(order_by: {nome: asc}) {
          id
          nome
          dug {
            nome
          }
          tipologia {
            nome
          }
          updated_at
          vecchie_denominazioni(order_by: {created_at: desc, nome: asc}) {
            nome
            dug {
              nome
            }
            tipologia {
              nome
            }
            created_at
          }
          quartiere(order_by: {quartiere: {fine_validita: asc_nulls_first}}) {
            quartiere {
              quartiere {
                id
                nome
                municipalita(limit: 1, where: {municipalita: {fine_validita: {_is_null: true}}}) {
                  municipalita {
                    municipalita {
                      id
                      nome
                    }
                  }
                }
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
    this._data = data.data.toponimo.map((element: any) => {
      return {
        ...element, 
        ...{quartiere: element.quartiere.filter((q:any) => q.quartiere.fine_validita == null).map((q:any) => q.quartiere.quartiere.nome).join(', ')},
        ...{municipalita: [...new Set(element.quartiere.filter((q:any) => q.quartiere.fine_validita == null).map((q:any) => q.quartiere.quartiere.municipalita.length >0  ? q.quartiere.quartiere.municipalita[0].municipalita.municipalita.nome:''))].join(', ')},
        ...{quartieri: element.quartiere.filter((q:any) => q.quartiere.fine_validita == null)},
        ...{vecchi_quartieri: element.quartiere.filter((q:any) => q.quartiere.fine_validita != null)}
      }
    });
  }

  async getData(data?:never[]){
    if(this._data==null)
      await this._init();
    return data!==undefined ? data : this._data;
  }


  async getDataByQuartiere(filter:any[], data?:never[]){
    data = await this.getData(data);
    if(filter.length == 0 || filter === undefined || filter === null)
      return data;
    return data!.filter((element:any) => {
      var main = element.quartieri.map((q:any) => q.quartiere.quartiere.id);
      return filter.some((f:any) => {
        return main.indexOf(f) + 1;
      })
    });
  }

  async getDataByMunicipalita(filter:any[], data?:never[]){
    data = await this.getData(data);
    if(filter.length == 0 || filter === undefined || filter === null)
      return data;
    return data!.filter((element:any) => {
      var main = element.quartieri.reduce((a:[],q:any) => a.concat(q.quartiere.quartiere.municipalita.map((m:any) => m.municipalita.municipalita.id).flat(1)), []);
      return filter.some((f:any) => {
        return main.indexOf(f) + 1;
      })
    });
  }

}
