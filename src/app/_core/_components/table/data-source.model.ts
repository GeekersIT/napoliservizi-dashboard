import { MatTableDataSource } from "@angular/material/table";
import { BehaviorSubject } from "rxjs";

export class DataSource {
    constructor(public source?: BehaviorSubject<[]>, public isLoading?: BehaviorSubject<boolean>) {
      this.source = new BehaviorSubject<[]>([]);
      this.isLoading = new BehaviorSubject<boolean>(true);
    }
  }