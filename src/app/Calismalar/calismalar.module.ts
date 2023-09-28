import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../services/ProductService.service';
import { DataService } from '../services/data.service';
import { ObservableComponent } from './observable/observable.component';
import { DependencyInjectionComponent } from './dependency-injection/dependency-injection.component';
import { DataBindingsComponent } from './data-bindings/data-bindings.component';

@NgModule({
  declarations: [
    ObservableComponent,
    DependencyInjectionComponent,
    DataBindingsComponent,
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule, 
    HttpClientModule, 
    FormsModule
  ],
  providers: [ProductService, DataService],
  bootstrap: [
    ObservableComponent,
    DependencyInjectionComponent,
    DataBindingsComponent,
  ],
  exports:[
    ObservableComponent,
    DependencyInjectionComponent,
    DataBindingsComponent,],
})
export class CalismalarModule {}
