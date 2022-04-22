import { Component, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';
import { FieldType } from '@ngx-formly/material/form-field';
import { TranslateService } from '@ngx-translate/core';
import { AceEditorComponent } from 'ng2-ace-editor';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'formly-field-formula',
  templateUrl: './formula-formly.component.html',
  styleUrls: ['./formula-formly.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyFormulaComponent extends FieldType {
  @ViewChild('editor') editor: AceEditorComponent | undefined;
  error: string = '';
  selezionato: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  state: BehaviorSubject<string> = new BehaviorSubject<string>('');
  constructor(private _translate: TranslateService) {
    super();
  }

  ngOnInit(): void {
    this.formControl.statusChanges.subscribe((state) => {
      this.state.next(state);
      if (state == 'INVALID') {
        this.error = this.field.asyncValidators.formula.message();
      }
    });
  }

  ngAfterViewInit() {
    this.editor!.setTheme('eclipse');
    this.editor!.getEditor().setOptions(this.to.ace.options);

    this.editor!.getEditor().on('focus', (e: any) => {
      this.selezionato.next(true);
    });
    this.editor!.getEditor().on('blur', (e: any) => {
      if (
        this.to.required &&
        (this.value == undefined || this.value == '' || this.value == null)
      ) {
        this.state.next('INVALID');
        this.error = this._translate.instant('FORM.VALIDATION.REQUIRED');
      } else {
        this.selezionato.next(false);
      }
    });

    this.editor!.getEditor().on('paste', function (e: any) {
      e.text = e.text.replace(/[\r\n]+/g, ' ');
    });
    this.editor!.getEditor().renderer.screenToTextCoordinates = function (
      x: any,
      y: any
    ) {
      var pos = this.pixelToScreenCoordinates(x, y);
      return this.session.screenToDocumentPosition(
        Math.min(this.session.getScreenLength() - 1, Math.max(pos.row, 0)),
        Math.max(pos.column, 0)
      );
    };
    this.editor!.getEditor().commands.bindKey('Enter|Shift-Enter', 'null');
    this.editor!.getEditor().$blockScrolling = Infinity;
  }

  onChange(code: any) {}

  toControl(absCtrl: AbstractControl): FormControl {
    const ctrl = absCtrl as FormControl;
    // if(!ctrl) throw;
    return ctrl;
  }
}
