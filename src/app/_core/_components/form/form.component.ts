import { Component, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { TranslateService } from '@ngx-translate/core';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';

// const savingTime = 10000000;
const savingTime = 10000;

@Component({
  selector: 'form-component',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  @Input() options: FormlyFormOptions = {};
  @Input() model: any = {};
  @Input() scrollable: boolean = true;
  @Input() reset: boolean = true;
  @Input() autosave: boolean = true;
  @Input() fields: FormlyFieldConfig[] = [];
  @Input() actionsTemplate!: TemplateRef<any>;
  @Input() form: FormGroup = new FormGroup({});
  @Output() resetEvent = new EventEmitter<boolean>();
  @Output() changeEvent = new EventEmitter<boolean>();
  @Output() onSubmit = new EventEmitter<{loading:boolean,type:string}>();
  @Output() submitted = new EventEmitter<boolean>();

  constructor(
    public dialog: MatDialog,
    private _translateService: TranslateService
  ) { }

  stepper: any = null;

  findStepper(field:any):any{
    if(field!==undefined){
      let stepper = field.find((f:any) => f.type == "stepper");
      return stepper ? stepper : this.findStepper(field.fieldGroup)
    }else{
      return null;
    }
  }


  ngOnInit(): void {
    // if(this.autosave) setInterval(() => this.onSubmit.emit({loading:false,type:'bozza'}), savingTime);

    this.stepper = this.findStepper(this.fields);

    if(this.stepper) this.stepper.templateOptions!.submitted = this.submitted;


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
        if(this.stepper) this.stepper.templateOptions?.submitted.emit(false);
      }
    })
  }

  submit(event:SubmitEvent){
    let type:string = event.submitter?.getAttribute('name')!;
    if(type == 'bozza'){
      this.onSubmit.emit({loading:true,type:type});
    }else{
      if(this.stepper) this.stepper.templateOptions?.submitted.emit(true);
      if(this.form.valid) this.onSubmit.emit({loading:true,type:type});
    }
  }

  change(event:any): void {
    this.changeEvent.emit(true);
  }
}

export abstract class Dirty{
  dirty: boolean = false;

  isDirty(){
    return this.dirty;
  }

  change(event:boolean){
    this.dirty = event;
  }

}