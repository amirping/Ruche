import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import {
  MatAutocomplete,
  MatAutocompleteSelectedEvent,
  MatChipInputEvent
} from "@angular/material";
import { Observable } from "rxjs";
import { FormControl } from "@angular/forms";
import { map, startWith } from "rxjs/operators";
import { COMMA, ENTER } from "@angular/cdk/keycodes";
@Component({
  templateUrl: "./edit-profile.component.html",
  styleUrls: ["./edit-profile.component.scss"]
})
export class EditProfileComponent implements OnInit {
  user = {
    first_name: "",
    last_name: "",
    phone_number: "",
    birthday: "",
    about: "",
    cv_link: "",
    experience: [],
    location: "",
    projects: [],
    email: "",
    skills: [],
    title: "",
    wlf: ""
  };
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  skillCtrl = new FormControl();
  filteredSkills: Observable<string[]>;
  allSkills: string[] = ["Apple", "Lemon", "Lime", "Orange", "Strawberry"];

  @ViewChild("fruitInput") fruitInput: ElementRef<HTMLInputElement>;
  @ViewChild("auto") matAutocomplete: MatAutocomplete;
  constructor() {
    this.filteredSkills = this.skillCtrl.valueChanges.pipe(
      startWith(null),
      map((skill: string | null) =>
        skill ? this._filter(skill) : this.allSkills.slice()
      )
    );
  }

  ngOnInit() {}
  save(form) {}
  deleteExp() {}
  deleteEdc() {}
  deletePrj() {}
  add(event: MatChipInputEvent): void {
    // Add fruit only when MatAutocomplete is not open
    // To make sure this does not conflict with OptionSelected Event
    if (!this.matAutocomplete.isOpen) {
      const input = event.input;
      const value = event.value;

      // Add our fruit
      if ((value || "").trim()) {
        this.user.skills.push(value.trim());
      }

      // Reset the input value
      if (input) {
        input.value = "";
      }

      this.skillCtrl.setValue(null);
    }
  }

  remove(skill: string): void {
    const index = this.user.skills.indexOf(skill);

    if (index >= 0) {
      this.user.skills.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.user.skills.push(event.option.viewValue);
    this.fruitInput.nativeElement.value = "";
    this.skillCtrl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allSkills.filter(
      skill => skill.toLowerCase().indexOf(filterValue) === 0
    );
  }
}
