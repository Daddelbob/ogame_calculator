import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSliderModule,
    MatSlideToggleModule
  ],
  exports: [
    MatSliderModule,
    MatSlideToggleModule
  ]
})
export class CustomMaterialModule { }
