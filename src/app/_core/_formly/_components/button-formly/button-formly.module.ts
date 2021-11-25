import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonFormlyComponent } from './button-formly.component';
import { FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    ButtonFormlyComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    FormlyModule.forChild({ 
      types: [
        { 
          name: 'button', 
          component: ButtonFormlyComponent, 
          wrappers: [],
          defaultOptions: {
            templateOptions: {
              onClick: (field:FormlyFieldConfig) => {}
            }
          } 
        },
      ],
    }),
  ]
})
export class ButtonFormlyModule { }
