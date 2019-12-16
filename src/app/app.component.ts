import { Component } from "@angular/core";

@Component({
  selector: "ogc-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.sass"]
})
export class AppComponent {
  title = "oGameCalculator";

  public universeSpeed: number = 7;
  public metallMineLvl: number = 26;
  public metallMineProd: number =
    30 *
    this.metallMineLvl *
    Math.pow(1.1, this.metallMineLvl) *
    this.universeSpeed;

  constructor() {}
}
