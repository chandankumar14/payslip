import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { PayslipComponent } from './component/payslip/payslip.component';

const routes: Routes = [
  {path:'payslip',component:PayslipComponent},
  {path:'',component:HomeComponent},
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
