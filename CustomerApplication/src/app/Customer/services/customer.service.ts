import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { customer } from '../models/customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private httpClient: HttpClient) { }

  getAllCustomerRecords() {
    return this.httpClient.get<customer>("http://localhost:5076/api/Customer/Customers");
  }

  deleteCustomerById(id: number) {
    return this.httpClient.delete("http://localhost:5076/api/Customer/DeleteCustomer/" + id);
  }

  addNewCustomer(customerObj: any) {
    return this.httpClient.post("http://localhost:5076/api/Customer/AddCustomer", customerObj);
  }

  getCustomerDataById(id: number) {
    return this.httpClient.get("http://localhost:5076/api/Customer/CustomerById/" + id);
  }

  updateCustomerData(id: number, customerObj: any) {
    return this.httpClient.post("http://localhost:5076/api/Customer/UpdateCustomer/" + id, customerObj);
  }


}
