export interface Customer {
    id: string;
    name: string;
    email: string;
    phone: string;
    active: string
}

export interface Country{
    code:string,
    name:string
}

export interface PaySlipPayload {
    EmployeeName: string
    BeginDate: Date
    EmployeeID: string
    EndDate:  any
    EmployeeAddress: string,
    WorkingDays: any
    StartDate: any
    PanNumber: any
    Stipend:number
    Deduction:number,
    NETSalary:number | any
}