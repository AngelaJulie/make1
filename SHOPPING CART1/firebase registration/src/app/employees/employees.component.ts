import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './shared/employee.service';
//import { Forms } from '@angular/forms';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
  providers: [EmployeeService]
})
export class EmployeesComponent implements OnInit {

  constructor(private employeeSrv: EmployeeService) { }

  ngOnInit() {
  }

}
