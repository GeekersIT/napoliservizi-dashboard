import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FieldArrayType } from '@ngx-formly/core';

@Component({
  selector: 'app-repeat-section-formly',
  templateUrl: './repeat-section-formly.component.html',
  styleUrls: ['./repeat-section-formly.component.scss']
})
export class RepeatSectionFormlyComponent  extends FieldArrayType {

  delete(i:any){
    this._iter(this.formControl);
    this.remove(i);
  }
  private _iter(c:any){
    if(c.controls===undefined){
      c.updateValueAndValidity()
    }else{
      try{
        c.controls.forEach((e:any) => {
          this._iter(e);
        });
      }catch{
        let k = Object.keys(c.controls);
        k.forEach((e:any) => {
          this._iter(c.controls[e]);
        })
      }
    }
  }

}
