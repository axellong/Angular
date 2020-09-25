import { Component, OnInit } from '@angular/core';
import { ServicesService } from "../services.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product=[];

  constructor(private servicesService: ServicesService) { }

  ngOnInit(): void {

    this.servicesService.getProduct("getProduct").subscribe((data: any[]) => {
      console.log(data);
      this.product=data;
    });

  }

}
