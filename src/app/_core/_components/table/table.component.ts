import { Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { BehaviorSubject } from 'rxjs';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import {animate, state, style, transition, trigger} from '@angular/animations';


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

  @Input() expandsTemplate!: TemplateRef<any>;
  @Input() actionsTemplate!: TemplateRef<any>;
  @Input() filterTemplate!: TemplateRef<any>;


  @Input() source!: BehaviorSubject<any>;
  @Input() columns!: Array<any>;

  dataSource: MatTableDataSource<any> = new MatTableDataSource<any>([]);
  @Input() isLoading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);

  expandedElement: any | null;


  displayedColumns!: string[];

  pageSize: number = 10;

  panelOpenState = false;

  constructor() {}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
    this.source.subscribe(s => {
      this.dataSource = new MatTableDataSource<any>(s);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
    this._updateDisplayedColumns();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
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
  }

  tooglePageSize(){
    this.pageSize = this.pageSize == 10 ? this.dataSource.data.length : 10;
    this.paginator.length = this.pageSize;
    this.paginator.pageSize = this.pageSize;
    this.dataSource.paginator = this.paginator;
  }

}
