import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListLoanComponent} from './list-loan/list-loan.component';


const routes: Routes = [
  { path: '', component: ListLoanComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoanRoutingModule { }
