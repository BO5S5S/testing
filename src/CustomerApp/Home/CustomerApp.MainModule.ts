

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './CustomerApp.HomeComponent';
import { MasterComponent } from './CustomerApp.MasterComponent';

import { AppRoutingModule } from '../Routing/CustomerApp.MainRouting';





@NgModule({
  declarations: [

    HomeComponent,
    MasterComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [MasterComponent]
})
export class MainModule { }
