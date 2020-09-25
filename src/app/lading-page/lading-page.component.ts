import { Component, OnInit } from "@angular/core";
import { ServicesService } from "../services.service";

@Component({
  selector: "app-lading-page",
  templateUrl: "./lading-page.component.html",
  styleUrls: ["./lading-page.component.css"],
})
// clase principal del componente de la logica de negocio
export class LadingPageComponent implements OnInit {

  status : Boolean = true;
  products = [];
  info = "no hay nada";
  nameButon: string='mostrar'


  constructor(private serviceService: ServicesService) {}

  ngOnInit(): void {
    this.info="si hay datos"
    this.serviceService.getProduct("products").subscribe((data: any[]) => {
      console.log(data);
      this.products = data;
    });

  }

  sendServices(){
  }

  cleanServices(){
    this.products=[]
    
  }

  showHide(){
    this.status= !this.status;
    if (this.status) {
      this.nameButon = 'ocultar';  
    }else{
      this.nameButon = 'mostar';  
    }
  }

  
}
