import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { PotafolioItemModule } from './potafolio-item/potafolio-item.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    PotafolioItemModule
  ],
  declarations: [HomeComponent],
  exports: [HomeComponent, PotafolioItemModule]
})
export class HomeModule { }
