import { I } from '@angular/cdk/keycodes';
import { Component, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { TranslateService } from '@ngx-translate/core';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'form-component',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  @Input() options: FormlyFormOptions = {};
  @Input() model: any = {};
  @Input() scrollable: boolean = false;
  @Input() fields: FormlyFieldConfig[] = [];
  @Input() actionsTemplate!: TemplateRef<any>;
  @Input() form: FormGroup = new FormGroup({});

  @Output() resetEvent = new EventEmitter<boolean>();


  constructor(
    public dialog: MatDialog,
    private _translateService: TranslateService
  ) { }

  ngOnInit(): void {
  }

  resetModel(){   
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: this._translateService.instant('Attenzione'),
        content: this._translateService.instant('Procedendo al reset del form tutto i campi verranno riportati allo stato originale.')
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        if(this.options.resetModel) this.options.resetModel();
        this.resetEvent.emit(true);
      }
    })
  }
}