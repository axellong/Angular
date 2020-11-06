import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from "../service/Auth/auth-service.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit {

  constructor(private _authService : AuthServiceService, private _router: Router) { 
    if(_authService.isAuthenticade()==false){
      _router.navigate(["/"])
    }
  }

  ngOnInit(): void {
  }

}
