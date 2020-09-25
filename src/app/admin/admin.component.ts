import { Component, OnInit } from '@angular/core';
import { ServicesService } from "../services.service";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  admin=[];

  constructor(private servicesService: ServicesService) { }

  ngOnInit(): void {
    this.servicesService.getOrder("getOrder").subscribe((data: any[]) => {
      console.log(data);
      this.admin = data;
    });
  }

}
