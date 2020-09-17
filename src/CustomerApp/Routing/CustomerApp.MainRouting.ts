import { SupplierModule } from './../Supplier/CustomerApp.SupplierModule';
import { CustomerModule } from './../Customer/CustomerApp.CustomerModule';
import { HomeComponent } from '../Home/CustomerApp.HomeComponent';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
{path: 'Home',
    component : HomeComponent
},
{path: 'Supplier',
    loadChildren: () => import('../Supplier/CustomerApp.SupplierModule').then(m => m.SupplierModule)
},
{path: 'Customer',
 loadChildren: () => import('../Customer/CustomerApp.CustomerModule').then(m => m.CustomerModule)
},
{path: '', component : HomeComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
