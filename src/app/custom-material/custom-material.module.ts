import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatSliderModule } from "@angular/material/slider";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { MatSelectModule } from "@angular/material/select";
import { TextFieldModule } from "@angular/cdk/text-field";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    TextFieldModule
  ],
  exports: [
    MatSliderModule,
    MatSlideToggleModule,
    MatSelectModule,
    TextFieldModule
  ]
})
export class CustomMaterialModule {}
