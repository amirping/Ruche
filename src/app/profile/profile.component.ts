import { Component, OnInit } from "@angular/core";
import { ThrowStmt } from "@angular/compiler";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"]
})
export class ProfileComponent implements OnInit {
  showDeep = false;
  gohide = false;
  selectedIndex;
  user = {
    name: "",
    last_name: "",
    title: "",
    b_date: "",
    phone: "",
    address: "",
    email: "",
    about: "",
    looking: "",
    skills: [
      { name: "Angular 5", value: 90 },
      { name: "Electronjs", value: 90 },
      { name: "Java", value: 90 },
      { name: "jEE", value: 70 },
      { name: "Android", value: 80 },
      { name: "C / C++", value: 90 },
      { name: ".NET", value: 80 },
      { name: "Symfony", value: 80 },
      { name: "Ionic", value: 100 },
      { name: "Perl", value: 30 }
    ],
    experience: [
      {
        company_name: "mkd-company",
        job: "mobile developer",
        start_date: new Date(),
        end_date: new Date(),
        dscrp:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit.\
          Maxime repellendus ullam expedita ducimus minima officiis voluptates incidunt quam sed aspernatur,\
          inventore ab dolor maiores porro natus ? Voluptate nam aspernatur illo?"
      },
      {
        company_name: "mkd-company",
        job: "mobile developer",
        start_date: new Date(),
        end_date: null,
        dscrp:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit.\
          Maxime repellendus ullam expedita ducimus minima officiis voluptates incidunt quam sed aspernatur,\
          inventore ab dolor maiores porro natus ? Voluptate nam aspernatur illo?"
      },
      {
        company_name: "mkd-company",
        job: "mobile developer",
        start_date: new Date(),
        end_date: new Date(),
        dscrp:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit.\
          Maxime repellendus ullam expedita ducimus minima officiis voluptates incidunt quam sed aspernatur,\
          inventore ab dolor maiores porro natus ? Voluptate nam aspernatur illo?"
      },
      {
        company_name: "mkd-company",
        job: "mobile developer",
        start_date: new Date(),
        end_date: new Date(),
        dscrp:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit.\
          Maxime repellendus ullam expedita ducimus minima officiis voluptates incidunt quam sed aspernatur,\
          inventore ab dolor maiores porro natus ? Voluptate nam aspernatur illo?"
      }
    ],
    projects: [
      {
        title: "Play-on Desktop APP",
        dscrp:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam\
            cumque veritatis fuga iure et ex provident, quos ducimus quam ipsam?\
            Consectetur",
        date: new Date(),
        link: "https://google.com",
        images: [
          "https://placeimg.com/640/480/tech",
          "https://placeimg.com/500/500/tech",
          "https://placeimg.com/640/980/tech"
        ]
      }
    ],
    education: [
      {
        degree: "Bac Informatique",
        start_date: new Date(),
        end_date: new Date(),
        dscrp: "",
        instut: "Khaznadar Secondery School"
      },
      {
        degree: "Licence fondamentale Science de l'informatique",
        start_date: new Date(),
        end_date: new Date(),
        dscrp:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam\
            cumque veritatis fuga iure et ex provident, quos ducimus quam ipsam?\
            Consectetur",
        instut: "FST , el Manar"
      },
      {
        degree: "Computer Science Engineering",
        start_date: new Date(),
        end_date: new Date(),
        dscrp:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam\
            cumque veritatis fuga iure et ex provident, quos ducimus quam ipsam?\
            Consectetur",
        instut: "ULT"
      }
    ]
  };
  constructor() {}

  ngOnInit() {}
  getDeep() {
    this.showDeep = true;
    setTimeout(() => {
      this.gohide = !this.gohide;
    }, 1000);
  }
}
