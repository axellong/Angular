import { Component, OnInit } from '@angular/core';
import { ServicesService } from "../services.service";

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.css']
})
export class SaleComponent implements OnInit {

  sale=[];

  constructor(private servicesService: ServicesService) { }

  ngOnInit(): void {
    this.servicesService.getSale("getSale").subscribe((data: any[]) => {
      console.log(data);
      this.sale = data;
    });
  }

}
