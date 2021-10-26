import { Injectable } from '@angular/core';
import { gql, Subscription } from 'apollo-angular';

@Injectable({
  providedIn: 'root'
})
export class MunicipalitaSubService extends Subscription  {
  document = gql`subscription Municipalita{
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
  }`;
}
