import { Component } from '@angular/core';
import { FieldType, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-stepper-formly',
  templateUrl: './stepper-formly.component.html',
  styleUrls: ['./stepper-formly.component.scss']
})
export class StepperFormlyComponent extends FieldType {
  isValid(field: FormlyFieldConfig):boolean {
    if (field.key) {
      return field.formControl!.valid;
    }

    return field.fieldGroup!.every(f => this.isValid(f));
  }

  toggleOrientation(){
    let orientation = this.to.orientation ? this.to.orientation : 'horizontal';
    if(orientation=='horizontal'){
      this.to.orientation = 'vertical';
    }else if(orientation=='vertical'){
      this.to.orientation = 'horizontal';
    }
  }
}