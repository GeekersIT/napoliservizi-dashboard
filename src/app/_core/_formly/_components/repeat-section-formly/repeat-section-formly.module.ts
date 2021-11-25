import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RepeatSectionFormlyComponent } from './repeat-section-formly.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormlyModule } from '@ngx-formly/core';



@NgModule({
  declarations: [
    RepeatSectionFormlyComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormlyModule.forChild({ 
      types: [
        { name: 'repeat', component: RepeatSectionFormlyComponent,defaultOptions: { templateOptions: {requiredN:0}} },
      ], 
    }),
    TranslateModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class RepeatSectionFormlyModule { }
