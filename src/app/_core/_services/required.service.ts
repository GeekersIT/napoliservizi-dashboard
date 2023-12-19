import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RequiredService {
  PIS_REQUIRED = 'assets/required/pis.json';
  SIS_REQUIRED = 'assets/required/sis.json';
  private _sis = Object();
  private _pis = Object();
  constructor(private http: HttpClient) {}
  pis(key: string) {
    // console.log(this._pis[key]);
    return this._pis[key];
  }
  sis(key: string) {
    return this._sis[key];
  }
  Init(): Promise<any> {
    return new Promise<void>((resolve) => {
      this.http.get(this.PIS_REQUIRED).subscribe((data) => {
        this._pis = data;
        // console.log('load data...');
      });
      this.http.get(this.SIS_REQUIRED).subscribe((data) => {
        this._sis = data;
        // console.log('load data...');
      });
      resolve();
    });
  }
}
