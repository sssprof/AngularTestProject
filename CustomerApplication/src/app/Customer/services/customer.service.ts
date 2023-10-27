import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { customer } from '../models/customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private httpClient:HttpClient) { }

  getAllCustomerRecords(){
   return this.httpClient.get<customer>("https://getinvoices.azurewebsites.net/api/Customers");
  }
}
