import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { PotafolioItemModule } from './potafolio-item/potafolio-item.module';

@NgModule({
  imports: [
    CommonModule,
    PotafolioItemModule
  ],
  declarations: [HomeComponent],
  exports: [HomeComponent, PotafolioItemModule]
})
export class HomeModule { }
