import { Component, TemplateRef, ViewChild, AfterViewInit } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'formly-wrapper-clear',
  template: `
  <ng-container #fieldComponent></ng-container>

  <ng-template #clearSuffix>
    <span
      [ngStyle]="{cursor:'pointer'}"
      (click)="clear($event)"
    ><mat-icon>backspace</mat-icon>
    </span>
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
    this.field.formControl?.setValue('');
  }

}