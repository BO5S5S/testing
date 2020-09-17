import { CustomerComponent } from './CustomerApp.CustomerComponent';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomerRoutes } from '../Routing/CustomerApp.CustomerRouting';
import { CommonModule } from '@angular/common';






@NgModule({
  declarations: [
    CustomerComponent
  ],
  imports: [CommonModule,
    FormsModule,
    CustomerRoutes,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [CustomerComponent]
})
export class CustomerModule { }
