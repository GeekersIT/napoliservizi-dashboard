import { Component, TemplateRef, ViewChild, AfterViewInit } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';

@Component({
  selector: 'formly-wrapper-addons',
  template: `
  <ng-template #matPrefix *ngIf="to._prefix">
    <span
      
      [ngStyle]="{cursor: to._prefix.onClick ? 'pointer' : 'inherit'}"
      (click)="addonLeftClick($event)"
    >
      <mat-icon *ngIf="to._prefix.icon" [color]="to._prefix.color">{{ to._prefix.icon }}</mat-icon>
      <span *ngIf="to._prefix.text">{{ to._prefix.text }}</span>
    </span>
  </ng-template>

  <ng-container #fieldComponent></ng-container>

  <ng-template #matSuffix *ngIf="to._suffix">
    <span
      
      [ngStyle]="{cursor: to._suffix.onClick ? 'pointer' : 'inherit'}"
      (click)="addonRightClick($event)"
    >
      <mat-icon *ngIf="to._suffix.icon" [color]="to._suffix.color">{{ to._suffix.icon }}</mat-icon>
      <span *ngIf="to._suffix.text">{{ to._suffix.text }}</span>
    </span>
  </ng-template>
  `,
})
export class FormlyWrapperPrefixSuffixAddon extends FieldWrapper implements AfterViewInit {
  @ViewChild('matPrefix') matPrefix!: TemplateRef<any>;
  @ViewChild('matSuffix') matSuffix!: TemplateRef<any>;

  ngAfterViewInit() {
    if (this.matPrefix) {
      Promise.resolve().then(() => this.to.prefix = this.matPrefix);
    }

    if (this.matSuffix) {
      Promise.resolve().then(() => this.to.suffix = this.matSuffix);
    }
  }

  addonRightClick($event: any) {
    if (this.to._suffix.onClick) {
      this.to._suffix.onClick(this.to, this, $event);
    }
  }

  addonLeftClick($event: any) {
    if (this.to._prefix.onClick) {
      this.to._prefix.onClick(this.to, this, $event);
    }
  }
}