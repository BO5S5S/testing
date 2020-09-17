import { HomeComponent } from '../Home/CustomerApp.HomeComponent';
import { SupplierComponent } from '../Supplier/CustomerApp.SupplierComponent';
import { CustomerComponent } from '../Customer/CustomerApp.CustomerComponent';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
{path: 'Add',
 component : CustomerComponent}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutes { }
