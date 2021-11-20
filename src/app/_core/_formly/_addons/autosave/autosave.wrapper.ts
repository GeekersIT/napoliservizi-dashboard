import { Component, AfterViewInit } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';

@Component({
  selector: 'formly-wrapper-clear',
  template: `
  <ng-container #fieldComponent></ng-container>
  `,
})
export class FormlyWrapperAutosaveAddon extends FieldWrapper implements AfterViewInit {
  ngAfterViewInit() {
    this.formControl?.valueChanges.subscribe((value:any) => {
      this.to.autosave(value,this.field);
    })

  }

}