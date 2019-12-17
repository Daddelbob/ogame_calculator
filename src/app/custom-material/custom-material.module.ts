import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { MatSliderModule } from "@angular/material/slider";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { MatSelectModule } from "@angular/material/select";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [MatSliderModule, MatSlideToggleModule, MatSelectModule]
})
export class CustomMaterialModule {}
