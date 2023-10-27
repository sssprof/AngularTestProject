import { Component, Injector, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CustomerService } from '../services/customer.service';
import { customer } from '../models/customer.model';

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
    this.customerSubscription = this.customerService.getAllCustomerRecords().subscribe((res:any) => {
        if(res){
          this.allCustomerData =res;
          console.log(this.allCustomerData);
        }
    }, (error: any) => {
        console.log(error);
    })
  }

  ngOnDestroy(){
    if(this.customerSubscription){
      this.customerSubscription.unsubscribe();
    }
  }
}
