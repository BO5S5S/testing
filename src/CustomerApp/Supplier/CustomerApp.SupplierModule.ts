import { SupplierComponent } from './CustomerApp.SupplierComponent';


import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SupplierRoutes } from '../Routing/CustomerApp.SuplierRouting';
import { CommonModule } from '@angular/common';







@NgModule({
  declarations: [
SupplierComponent
  ],
  imports: [CommonModule,
    FormsModule,
    SupplierRoutes,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [SupplierComponent]
})
export class SupplierModule { }
