import { Component, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';

@Component({
  selector: 'form-component',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  @Input() options: FormlyFormOptions = {};
  @Input() model: any = {};
  @Input() fields: FormlyFieldConfig[] = [];
  @Input() actionsTemplate!: TemplateRef<any>;

  @Output() resetEvent = new EventEmitter<boolean>();

  form = new FormGroup({});

  constructor() { }

  ngOnInit(): void {
  }

  resetModel(){
    if(this.options.resetModel) this.options.resetModel();
    this.resetEvent.emit(true);
  }

}
