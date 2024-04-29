import { Component, OnInit } from '@angular/core';
import jspdf from 'jspdf';
import html2canvas from 'html2canvas';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { PaySlipPayload } from 'src/app/Model/Customer';


@Component({
  selector: 'app-payslip',
  templateUrl: './payslip.component.html',
  styleUrls: ['./payslip.component.css']
})
export class PayslipComponent implements OnInit{
  status:boolean=true
  paySlipData!:FormGroup 
  payload:PaySlipPayload | undefined
  constructor(){
    this.paySlipData = new FormGroup({
      EmployeeName: new FormControl('', [Validators.required]),
      BeginDate: new FormControl('', Validators.required),
      EmployeeID: new FormControl('', [Validators.required]),
      EndDate: new FormControl('', Validators.required),
      EmployeeAddress: new FormControl('', [Validators.required]),
      WorkingDays: new FormControl('', Validators.required),
      StartDate: new FormControl('', [Validators.required]),
      PanNumber: new FormControl('', Validators.required),
      Stipend: new FormControl('', Validators.required)
    })

    
  }
  ngOnInit(): void {
    
  }
  PaySlipFormData(){
    this.payload = {
      EmployeeName: this.paySlipData.controls['EmployeeName'].value ? this.paySlipData.controls['EmployeeName'].value : 'N/A',
      BeginDate: this.paySlipData.controls['BeginDate'].value ? this.paySlipData.controls['BeginDate'].value : 'N/A',
      EmployeeID: this.paySlipData.controls['EmployeeID'].value ? this.paySlipData.controls['EmployeeID'].value : 'N/A',
      EndDate: this.paySlipData.controls['EndDate'].value ? this.paySlipData.controls['EndDate'].value : 'N/A',
      EmployeeAddress: this.paySlipData.controls['EmployeeAddress'].value ? this.paySlipData.controls['EmployeeAddress'].value : 'N/A',
      WorkingDays: this.paySlipData.controls['WorkingDays'].value ? this.paySlipData.controls['WorkingDays'].value : 'N/A',
      StartDate: this.paySlipData.controls['StartDate'].value ? this.paySlipData.controls['StartDate'].value : 'N/A',
      PanNumber: this.paySlipData.controls['PanNumber'].value ? this.paySlipData.controls['PanNumber'].value : 'N/A',
      Stipend: this.paySlipData.controls['Stipend'].value ? this.paySlipData.controls['Stipend'].value : 'N/A',
    }
    this.status = false
   
  } 
  CancelPaySlip() {
    this.paySlipData.reset()
    this.status = true
  }

  generatePDF() {
  const elementToPrint: any = document.getElementById("payslip");
   html2canvas(elementToPrint,{scale:3}).then((canvas) => {
      const PDF = new jspdf();
      let imageWidth =190;
      let imageheigth =(canvas.height*imageWidth)/canvas.width
      PDF.addImage(canvas.toDataURL('image/png'), 'PNG', 10, 10,imageWidth,imageheigth);
      PDF.save('payslip.pdf')
      this.status = true
    })
  }
}
