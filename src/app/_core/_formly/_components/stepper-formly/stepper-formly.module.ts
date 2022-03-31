import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepperFormlyComponent } from './stepper-formly.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatStepperModule } from '@angular/material/stepper';
import { TranslateModule } from '@ngx-translate/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FormlyModule } from '@ngx-formly/core';



@NgModule({
  declarations: [
    StepperFormlyComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatStepperModule,
    FormlyModule.forChild({ 
      types: [
        { 
          name: 'stepper', 
          component: StepperFormlyComponent, 
          wrappers: [],
          defaultOptions: {
            templateOptions: {
              activeStep: 0,
              selectionChange: null,
              submitted: null,
              buttonSwitch: true
            },
          } 
        },
      ], 
    }),
    TranslateModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule
  ]
})
export class StepperFormlyModule { }
