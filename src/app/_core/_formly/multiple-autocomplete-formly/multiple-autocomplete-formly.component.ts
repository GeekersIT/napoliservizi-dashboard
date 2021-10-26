import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { FieldType } from '@ngx-formly/material';
import { MatInput } from '@angular/material/input';
import { MatAutocomplete, MatAutocompleteTrigger } from '@angular/material/autocomplete';
import { map, startWith } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import {COMMA, ENTER} from '@angular/cdk/keycodes';

export class ItemData {
  constructor(public item: any, public selected?: boolean) {
    if (selected === undefined) selected = false;
  }
}


@Component({
  selector: 'app-multiple-autocomplete-formly',
  templateUrl: './multiple-autocomplete-formly.component.html',
  styleUrls: ['./multiple-autocomplete-formly.component.scss']
})
export class MultipleAutocompleteFormlyComponent extends FieldType implements OnInit, AfterViewInit {
  formControl!: FormControl;
  @ViewChild(MatAutocompleteTrigger) autocomplete!: MatAutocompleteTrigger;
  @ViewChild(MatInput) formFieldControl!: MatInput;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  @ViewChild('auto', {static: false}) matAutocomplete!: MatAutocomplete;

  selectedData: ItemData[] = new Array<ItemData>();
  filteredData?: Observable<any>;

  ngOnInit(): void {
    this.filteredData = this.formControl.valueChanges.pipe(
      startWith<string | ItemData>(''),
      map(value => typeof value === 'string' ? value : ''),
      map(filter => this.filter(filter))
    );

    this.formControl.valueChanges.subscribe(d => {
      if(d === undefined || d === null){
        this.selectedData.map((data:ItemData) => this.toggleSelection(data))
      }
    });
  }


  filter = (filter: string): Array<ItemData> => {
    if (filter.length > 0) {
      return this.to.data.filter((option:ItemData) => {
        return this.to.filter(option,filter.trim());
      });
    } else {
      return this.to.data.slice();
    }
  };


  optionClicked = (event: Event, data: ItemData): void => {
    event.stopPropagation();
    this.toggleSelection(data);
  };

  toggleSelection = (data: ItemData): void => {
    data.selected = !data.selected;
    if (data.selected === true) {
      this.selectedData.push(data);
    } else {
      const i = this.selectedData.findIndex(value => value.item === data.item);
      this.selectedData.splice(i, 1);
    }
    this.formControl.setValue(this.selectedData);
  };

  removeChip = (data: ItemData): void => {
    this.toggleSelection(data);
  };

  displayFn = (): string => this.selectedData.length > 0 ? ' ': '';

  ngAfterViewInit() {
    super.ngAfterViewInit();
    // temporary fix for https://github.com/angular/material2/issues/6728
    (<any> this.autocomplete)._formField = this.formField;
  }

}
