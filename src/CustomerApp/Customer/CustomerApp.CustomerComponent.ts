// import { CustomerModule } from './CustomerApp.module';
import { Component } from '@angular/core';
import { Customer } from './CustomerApp.model';
@Component({
  templateUrl: './CustomerApp.CustomerView.html'
})
export class CustomerComponent {
  title = 'Boss';

  CustomerModel: Customer = new Customer();
  CustomerModels: Array<Customer> = new Array < Customer >();
  Add() {
this.CustomerModels.push(this.CustomerModel);

this.CustomerModel = new Customer();
  }
}
