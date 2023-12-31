import { Component, Injector, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomerService } from '../services/customer.service';
import Swal from 'sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';
import { customer } from '../models/customer.model';
@Component({
  selector: 'app-add-edit-customer',
  templateUrl: './add-edit-customer.component.html',
  styleUrls: ['./add-edit-customer.component.scss']
})
export class AddEditCustomerComponent implements OnInit {
  customerForm!: FormGroup;
  formBuilderService!: FormBuilder;
  customerService !: CustomerService;
  routerService!: Router;
  activateRouterService!: ActivatedRoute;
  customerData!: customer;
  isUpdateRecord: boolean = false;
  customerId!: number;

  constructor(private injectorService: Injector) {
    this.formBuilderService = injectorService.get<FormBuilder>(FormBuilder);
    this.customerService = injectorService.get<CustomerService>(CustomerService);
    this.routerService = injectorService.get<Router>(Router);
    this.activateRouterService = injectorService.get<ActivatedRoute>(ActivatedRoute);
  }

  ngOnInit() {
    this.customerForm = this.formBuilderService.group({
      firstName: [""],
      lastName: [""],
      email: ["", [Validators.required, Validators.email]],
      phoneNumber: [""],
      countryCode: [""],
      gender: [""],
      balance: [""]
    })
    this.getCustomerId();
  }

  getCustomerId() {
    this.activateRouterService.queryParams.subscribe(params => {
      this.customerId = params["cusotmerId"];
      this.customerService.getCustomerDataById(this.customerId).subscribe((res: any) => {
        if (res) {
          this.isUpdateRecord = true;
          this.customerData = res;
          this.customerForm.patchValue({
            firstName: this.customerData.firstName,
            lastName: this.customerData.lastName,
            email: this.customerData.email,
            phoneNumber: this.customerData.phoneNumber,
            countryCode: this.customerData.countryCode,
            gender: this.customerData.gender,
            balance: this.customerData.balance
          })
        }
        else {
          this.isUpdateRecord = false;
        }
      }, (error) => {
        console.log(error)
      })
    });
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

    if (this.isUpdateRecord) {
      this.updateCustomerData(customerObj);
    }
    else {
      this.createNewCustomerData(customerObj);
    }

  }

  createNewCustomerData(customerObj: any) {
    this.customerService.addNewCustomer(customerObj).subscribe((res) => {
      this.routerService.navigate([""]);
    }, (error) => {
      console.log(error);
    })
  }

  updateCustomerData(customerObj: any) {
    this.customerService.updateCustomerData(this.customerId, customerObj).subscribe((res) => {
      this.routerService.navigate([""]);
    }, (error) => {
      console.log(error);
    })
  }

  onBtnClearClick() {
    this.customerForm.reset();
  }
}
