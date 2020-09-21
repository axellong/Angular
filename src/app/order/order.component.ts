import { Component, OnInit } from "@angular/core";
import { ServicesService } from "../services.service";

@Component({
  selector: "app-order",
  templateUrl: "./order.component.html",
  styleUrls: ["./order.component.css"],
})
export class OrderComponent implements OnInit {
  
  orders = [];

  constructor(private servicesService: ServicesService) {}

  ngOnInit(): void {

    this.servicesService.getOrder("getOrder").subscribe((data: any[]) => {
      console.log(data);
      this.orders=data;
    });

  }
}
