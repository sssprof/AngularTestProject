import { Component, Injector, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomerService } from '../services/customer.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-edit-customer',
  templateUrl: './add-edit-customer.component.html',
  styleUrls: ['./add-edit-customer.component.scss']
})
export class AddEditCustomerComponent implements OnInit {
  customerForm!: FormGroup;
  formBuilderService!: FormBuilder;
  customerService !: CustomerService;
  routerService!: Router

  constructor(private injectorService: Injector) {
    this.formBuilderService = injectorService.get<FormBuilder>(FormBuilder);
    this.customerService = injectorService.get<CustomerService>(CustomerService);
    this.routerService = injectorService.get<Router>(Router);
  }

  ngOnInit() {
    this.customerForm = this.formBuilderService.group({
      firstName: [""],
      lastName: [""],
      email: ["", Validators.required],
      phoneNumber: [""],
      countryCode: [""],
      gender: [""],
      balance: [""]
    })
  }

  onBtnSubmitClick() {
    let customerObj = {
      firstName: this.customerForm.get('firstName')?.value,
      lastName: this.customerForm.get('lastName')?.value,
      email: this.customerForm.get('email')?.value,
      phoneNumber: this.customerForm.get('phoneNumber')?.value,
      countryCode: this.customerForm.get('countryCode')?.value,
      gender: this.customerForm.get('gender')?.value,
      balance: +this.customerForm.get('balance')?.value
    }

    this.customerService.addNewCustomer(customerObj).subscribe((res) => {
      this.routerService.navigate([""]);      
    }, (error) => {
      console.log(error);
    })

  }

  onBtnClearClick() {
    this.customerForm.reset();
  }


}
