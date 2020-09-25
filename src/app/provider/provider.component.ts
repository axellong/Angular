import { Component, OnInit } from '@angular/core';
import { ServicesService } from "../services.service";

@Component({
  selector: 'app-provider',
  templateUrl: './provider.component.html',
  styleUrls: ['./provider.component.css']
})
export class ProviderComponent implements OnInit {

  privider = [];

  constructor(private servicesService: ServicesService) { }

  ngOnInit(): void {
    
    this.servicesService.getProvider("getProvider").subscribe((data: any[]) => {
      console.log(data);
      this.privider=data;
    });
  }

}
