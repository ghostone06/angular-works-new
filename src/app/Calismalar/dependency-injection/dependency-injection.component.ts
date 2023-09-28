import { Component, OnInit } from '@angular/core';
import { Observable, Subject, toArray } from 'rxjs';
import { ProductService } from 'src/app/services/ProductService.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'dependency-injection',
  templateUrl: './dependency-injection.component.html',
  styleUrls: ['./dependency-injection.component.scss'],
})
export class DependencyInjectionComponent implements OnInit {

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
    console.log(this.productService.getProducts());
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
}
