import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { data, dataTableHeader } from './data';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}
  test: number = 1;
  getObservableData(): Observable<string> {
    return of('Bu bir observable değerdir.');
  }

  getPromiseData2(): Promise<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/todos/1').toPromise();
  }

  getPromiseData(): Promise<any> {
    return Promise.resolve(data);
  }

  getPromiseDataTableHeader(): Promise<any> {
    return Promise.resolve(dataTableHeader);
  }
}


