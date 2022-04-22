import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JsonParsePipe } from './json-parse.pipe';

@NgModule({
  declarations: [JsonParsePipe],
  exports: [JsonParsePipe],
  imports: [CommonModule],
})
export class PipesModule {}
