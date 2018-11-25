import { Component, OnInit } from "@angular/core";
@Component({
  selector: "app-landing",
  templateUrl: "./landing.component.html",
  styleUrls: ["./landing.component.scss"]
})
export class LandingComponent implements OnInit {
  animatedText = "Welcome Between us";
  constructor() {}
  ngOnInit(): void {}
}
