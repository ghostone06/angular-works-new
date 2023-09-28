import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { data, dataTableHeader } from './data';

@Injectable({  
  /*
  1-Injectable = service, 
  2-Bu etiketle işaretleyerek constructorda bağımlılık varsa arka planda hallet diyerek providera yazabilmemizi sağlar, bağlı olduğu servisi kullanacaksak 
  providersa bağlı olduğu servisi de eklemelisin yoksa null olur.
  */ 
  providedIn: 'root',
  /*
  providedIn değerleri: 
  1-root -> root module singleton olarak proive eder
  2-any: her modül için bir instance oluşur
  3-platform: servisin platforma özgü olduğunu gösterir
  4-Module adı verilip o module sınırları içerisinde kullanılmasını sağlar
  */
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


