import { StepperSelectionEvent } from '@angular/cdk/stepper';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { FieldType } from '@ngx-formly/material';

@Component({
  selector: 'app-stepper-formly',
  templateUrl: './stepper-formly.component.html',
  styleUrls: ['./stepper-formly.component.scss']
})
export class StepperFormlyComponent extends FieldType {
  submitted: boolean = false;

  @Output() close: EventEmitter<StepperSelectionEvent> = new EventEmitter();  

  isValid(field: FormlyFieldConfig):boolean {
    if(this.submitted){
      if (field.key) {
        return field.formControl!.valid;
      }
      return field.fieldGroup ? field.fieldGroup.every(f => this.isValid(f)) : true;
    }else{
      return true;
    }
  }

  ngOnInit(){
    this.to.selectionChange = this.close;
    if(this.to.submitted) this.to.submitted.subscribe((s:any) => {
      this.submitted = s;
    })
  }

  toggleOrientation(){
    let orientation = this.to.orientation ? this.to.orientation : 'horizontal';
    if(orientation=='horizontal'){
      this.to.orientation = 'vertical';
    }else if(orientation=='vertical'){
      this.to.orientation = 'horizontal';
    }
  }

  public onStepChange(event: StepperSelectionEvent): void {
    this.to.selectionChange.emit(event)
  }

}