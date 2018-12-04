import { Component, OnInit, ViewChild, HostListener } from "@angular/core";
import { MatSidenav } from "@angular/material";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  events: string[] = [];
  opened = true;
  sideType = "side";
  isScreenBig = false;
  isScreenMed = true;
  isScreenSmall = false;
  readytoSHOW = false;
  search = {
    wrd: "",
    offerTypes: [],
    skills: [],
    exp: 0
  };
  offerTypes = [
    { type: "Summer internship", stat: true },
    { type: "Final Study internship", stat: false },
    { type: "Full-time job", stat: false },
    { type: "Freelancer", stat: false },
    { type: "Part-time Job", stat: false }
  ];
  skillsList: string[] = [
    "AngularJS",
    "Angular 2-7",
    "Electron.js",
    "Ionic",
    "Node JS",
    "PHP",
    "Symfony",
    ".NET core",
    "JAVA",
    "jEE",
    "IA",
    "python"
  ];

  constructor() {}

  ngOnInit() {
    this.layoutFixer();
    setTimeout(() => {
      this.readytoSHOW = true;
    }, 3000);
    console.log(this.search);
  }

  @HostListener("window:resize", ["$event"])
  onResize(event) {
    this.layoutFixer();
  }
  layoutFixer() {
    if (window.innerWidth < 500) {
      this.opened = false;
      this.isScreenSmall = true;
      this.isScreenBig = false;
      this.isScreenMed = false;
      this.sideType = "over";
    } else {
      this.opened = true;
      this.sideType = "side";
      if (window.innerWidth < 900) {
        this.isScreenSmall = false;
        this.isScreenBig = false;
        this.isScreenMed = true;
      } else {
        this.isScreenSmall = false;
        this.isScreenBig = true;
        this.isScreenMed = false;
      }
    }
  }
  searchDo() {
    console.log(this.search);
  }
}
