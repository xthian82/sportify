import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {AuthService} from "./auth/authorization";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html"
})
export class AppComponent implements OnInit {
  query: string;

  constructor(public router: Router, public authService: AuthService) {
  }

  ngOnInit(): void {

  }
}
