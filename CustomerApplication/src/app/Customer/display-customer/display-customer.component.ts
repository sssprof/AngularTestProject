import { Component, Injector, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CustomerService } from '../services/customer.service';
import { customer } from '../models/customer.model';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-display-customer',
  templateUrl: './display-customer.component.html',
  styleUrls: ['./display-customer.component.scss']
})
export class DisplayCustomerComponent implements OnInit {
  customerService: CustomerService;
  private customerSubscription!: Subscription;
  allCustomerData!: customer[];
  constructor(private injectService: Injector) {
    this.customerService = injectService.get<CustomerService>(CustomerService);
  }


  ngOnInit() {
    this.customerSubscription = this.customerService.getAllCustomerRecords().subscribe((res: any) => {
      if (res) {
        this.allCustomerData = res;
        console.log(this.allCustomerData);
      }
    }, (error: any) => {
      console.log(error);
    })
  }

  onBtnDeleteClick(id: number, index: number) {
    console.log(index);
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {
        this.customerService.deleteCustomerById(id).subscribe((res) => {
          this.allCustomerData.splice(index, 1);
          Swal.fire(
            'Deleted!',
            'Row has been deleted.',
            'success'
          )
        }, (error) => {
          console.log(error);
        })
      }
    })
  }

  ngOnDestroy() {
    if (this.customerSubscription) {
      this.customerSubscription.unsubscribe();
    }
  }
}
