import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayCustomerComponent } from './Customer/display-customer/display-customer.component';

const routes: Routes = [
  {path:"", component:DisplayCustomerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
