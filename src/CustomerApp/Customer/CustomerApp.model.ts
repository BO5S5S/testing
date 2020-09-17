import {FormGroup, NgForm, FormControl, FormBuilder, Validators} from '@angular/forms';

// import { OnInit } from '@angular/core';
// for doing validation we use ccc process
// 1 Creat
// 2 connect
// 3 check

export class Customer  {

    CustomerCode = '';
    CustomerName = '';
    CustomerAmount = 0;
    formCustomerGroup: FormGroup = null;
     submitted = false;
//    formbuilder: any;
    constructor() {
        const formbuilder = new FormBuilder();
        this.formCustomerGroup = formbuilder.group({
    CustomerNameControl: ['', Validators.required],
    CustomerCodeControl: ['', [Validators.required, Validators.pattern('^[0-9](4,4)$')]]
       });



    }
 get FormData() { return this.formCustomerGroup.controls; }
     onSubmit() {
this.submitted = true;
if (this.formCustomerGroup.invalid) {
    return;
}
alert(JSON.stringify(this.formCustomerGroup.value));
     }
}
