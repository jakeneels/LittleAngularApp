import { Injectable } from '@angular/core';
import { BehaviorSubject} from 'rxjs/BehaviorSubject';
 
@Injectable()
export class DataService {

  private items = new BehaviorSubject<any>(['First Example Item', 'Second Example Item', 'Third Example Item']);
  item = this.items.asObservable();
  private quants = new BehaviorSubject<any>(['1', '5', '2']);

 
  constructor() { }

  changeGoal(item)
  {
    this.items.next(item);
  }
}
