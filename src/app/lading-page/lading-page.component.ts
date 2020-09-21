import { Component, OnInit } from "@angular/core";
import { ServicesService } from "../services.service";

@Component({
  selector: "app-lading-page",
  templateUrl: "./lading-page.component.html",
  styleUrls: ["./lading-page.component.css"],
})
// clase principal del componente de la logica de negocio
export class LadingPageComponent implements OnInit {
  products = [];

  constructor(private serviceService: ServicesService) {}

  ngOnInit(): void {
    this.serviceService.getProduct("products/").subscribe((data: any[]) => {
      console.log(data);
      this.products = data;
    });
  }
}
