import { BehaviorSubject } from "rxjs";

export class DataSource {
    constructor(public source?: BehaviorSubject<any>, public isLoading?: BehaviorSubject<boolean>) {
      this.source = new BehaviorSubject<any>([]);
      this.isLoading = new BehaviorSubject<boolean>(true);
    }
  }