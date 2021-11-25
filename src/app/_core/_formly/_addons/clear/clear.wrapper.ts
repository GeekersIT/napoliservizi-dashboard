import { Component, TemplateRef, ViewChild, AfterViewInit } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';

@Component({
  selector: 'formly-wrapper-clear',
  template: `
  <ng-container #fieldComponent></ng-container>

  <ng-template #clearSuffix *ngIf="!to.disabled">
    <mat-icon [ngStyle]="{cursor:'pointer'}" (click)="clear($event)" >backspace</mat-icon>
  </ng-template>
  `,
})
export class FormlyWrapperClearAddon extends FieldWrapper implements AfterViewInit {
  @ViewChild('clearSuffix') clearSuffix: TemplateRef<any> | undefined;
  ngAfterViewInit() {
    if (this.clearSuffix) {
      
      Promise.resolve().then(() => this.to.suffix = this.clearSuffix);
    }
  }

  clear($event: any) {
    $event.stopPropagation();
    this.formControl.reset();
    if(this.to.parentReset) this.to.parentReset(this.field);
  }

}