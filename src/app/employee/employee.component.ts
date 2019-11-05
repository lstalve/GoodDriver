import { Component, OnInit } from '@angular/core';
import { HttpClientService } from '../service/http-client.service';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  drivers:string[];

  constructor(
    private httpClientService:HttpClientService
  ) { }

  ngOnInit() {
    this.httpClientService.getEmployees().subscribe(
      response =>this.handleSuccessfulResponse(response),
     );
  }
  handleSuccessfulResponse(response: import("../service/http-client.service").Employee[]): void {
    throw new Error("Method not implemented.");
  }

}
