import { Component, OnInit } from '@angular/core';
import { Observable, Subject, toArray } from 'rxjs';
import { ProductService } from 'src/app/services/ProductService.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.scss'],
})
export class ObservableComponent implements OnInit {
  title = 'observableSample';
  observableData = this.dataService.getObservableData();
  promiseData: any;
  promiseDataTableHeader: any;

  constructor(
    private dataService: DataService, 
    private productService: ProductService /* ProductService ilgili servisin referansı ve DI Tokendır, prodductService prodviderdır*/
    ) {}

  ngOnInit(): void {
    this.getPromiseData();
    this.getPromiseData2();
  }

  getPromiseData() {
    this.dataService.getPromiseData()
      .then((data) => {
        console.log(data);
        this.promiseData = data;
        return this.dataService.getPromiseDataTableHeader(); // Bir sonraki then'e veriyi geçiyoruz
      })
      .then((header) => {
        this.promiseDataTableHeader = header;
      })
      .catch((err) => console.error(err));
  }
  
  getPromiseData2(){
    this.dataService.getPromiseData()
      .then(data => this.promiseData = data);
  }
  /*
  ngOnInit(): void {

    const subject = new Subject<any>();

    subject.subscribe((data) => {
      console.log(`ObserverA ${data}`);
    });
    subject.subscribe((data) => {
      console.log(`ObserverB ${data}`);
    });

    subject.next(3);
    subject.next(5);

    subject.subscribe((data) => {
      console.log(`ObserverC ${data}`);
    });

    subject.next(7);
    subject.next(9);
    subject.next('Ahmet');
  }
*/
  /*
  //First example
    ngOnInit(): void {
    // const observable = new Observable<number>((data) => {
    //   data.next(3);
    //   data.next(5);
    //   data.next(10);
    //   data.complete();
    // });

    //directly subscribe
    // observable.subscribe(data => {
    //   console.log(data);
    // });

    //Create func to assigned a const observer and subscribe to observable to with a parameter that is observer
    //1st way
    // const observer = function (data: any) {
    //   console.log(data);
    // };
    //2nd way
    // const observer =(data:any)=> {
    //   console.log(data)
    // };
    // observable.subscribe(observer);
    
  }*/
}