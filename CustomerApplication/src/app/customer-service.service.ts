import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {

  constructor(private httpClient:HttpClient) { }

  getAllCustomerRecords(){
   return this.httpClient.get("https://getinvoices.azurewebsites.net/api/Customers");
  }
}
