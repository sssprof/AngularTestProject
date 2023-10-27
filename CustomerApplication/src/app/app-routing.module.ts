import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayCustomerComponent } from './Customer/display-customer/display-customer.component';
import { AddEditCustomerComponent } from './Customer/add-edit-customer/add-edit-customer.component';

const routes: Routes = [
  {path:"", component:DisplayCustomerComponent},
  {path:"add-edit", component:AddEditCustomerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
