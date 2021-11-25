import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MappaFormlyComponent, marker } from './mappa-formly.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FormlyModule } from '@ngx-formly/core';



@NgModule({
  declarations: [
    MappaFormlyComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatToolbarModule,
    MatMenuModule,
    MatTooltipModule,
    FormlyModule.forChild({ 
      types: [
        { 
          name: 'mappa', 
          component: MappaFormlyComponent, 
          wrappers: [],
          defaultOptions: {
            defaultValue: [],
            templateOptions: {
              zoom: 18,
              center: [14.2612,40.8918],
              menu: [],
              lazyLoading: false
            },
          } 
        },
      ],
    }),
    TranslateModule,
    
  ]
})
export class MappaFormlyModule { }
