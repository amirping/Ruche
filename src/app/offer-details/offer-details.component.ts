import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
@Component({
  templateUrl: "./offer-details.component.html",
  styleUrls: ["./offer-details.component.scss"]
})
export class OfferDetailsComponent implements OnInit {
  offer;
  constructor(
    public dialogRef: MatDialogRef<OfferDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data
  ) {
    this.offer = this.data.offer;
  }

  ngOnInit() {
    console.log(this.data);
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
