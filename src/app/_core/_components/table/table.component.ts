import { Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { BehaviorSubject } from 'rxjs';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { DataSource } from './data-source.model';

@Component({
  selector: 'table-component',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class TableComponent implements OnInit {
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  @Input() expandsTemplate: TemplateRef<any>|undefined = undefined;
  @Input() actionsTemplate: TemplateRef<any>|undefined = undefined;
  @Input() filterTemplate: TemplateRef<any>|undefined = undefined;


  @Input() dataSource!: DataSource;
  @Input() columns!: Array<any>;

  source: MatTableDataSource<any> = new MatTableDataSource<any>([]);
  expandedElement: any | null;
  displayedColumns!: string[];
  pageSize: number = 10;

  panelOpenState = false;

  constructor() {}

  ngAfterViewInit() {
    this.source.paginator = this.paginator;
    this.source.sort = this.sort;
  }

  ngOnInit(): void {
    this.dataSource.source!.subscribe(s => {
      this.source = new MatTableDataSource<any>(s);
      this.source.paginator = this.paginator;
      this.source.sort = this.sort;
    })
    this._updateDisplayedColumns();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.source.filter = filterValue.trim().toLowerCase();

    if (this.source.paginator) {
      this.source.paginator.firstPage();
    }
  }

  columnToogle(column: any){
    column.show = !column.show;
    this._updateDisplayedColumns();
  }

  private _updateDisplayedColumns(){
    this.displayedColumns = this.columns.reduce((filtered, option) => {
      if(option.show){
        filtered.push(option.columnDef);
      }
      return filtered;
    }, []);
    this.displayedColumns = this.expandsTemplate ? ['expands'].concat(this.displayedColumns) : this.displayedColumns;
    this.displayedColumns = this.actionsTemplate ? this.displayedColumns.concat(['actions']) : this.displayedColumns;
  }

  tooglePageSize(){
    this.pageSize = this.pageSize == 10 ? this.source.data.length : 10;
    this.paginator.length = this.pageSize;
    this.paginator.pageSize = this.pageSize;
    this.source.paginator = this.paginator;
  }

}
