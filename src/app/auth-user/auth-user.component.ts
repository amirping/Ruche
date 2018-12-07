import { UserService } from "./../providers/user.service";
import { Component, OnInit } from "@angular/core";
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
  FormGroup
} from "@angular/forms";
@Component({
  selector: "app-auth-user",
  templateUrl: "./auth-user.component.html",
  styleUrls: ["./auth-user.component.scss"]
})
export class AuthUserComponent implements OnInit {
  prosOn = false;
  userType = "us";
  regForm = new FormGroup({
    user_type: new FormControl(this.userType, [Validators.required]),
    name: new FormControl("", [Validators.required]),
    last_name: new FormControl("", [Validators.required]),
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [
      Validators.required,
      Validators.minLength(6)
    ]),
    password_c: new FormControl("", [Validators.required]),
    c_name: new FormControl(""),
    c_email: new FormControl(""),
    c_password: new FormControl(""),
    c_password_c: new FormControl("")
  });
  showPhase = {
    signin: true,
    signup: false
  };

  constructor(private _uService: UserService) {}

  ngOnInit() {}
  register() {
    console.log(this.regForm.value);
    this._uService
      .createUser({
        email: this.regForm.value.email,
        password: this.regForm.value.password,
        first_name: this.regForm.value.name,
        last_name: this.regForm.value.last_name
      })
      .subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log(err);
          alert(" we got problem with connection");
        }
      );
  }
}
