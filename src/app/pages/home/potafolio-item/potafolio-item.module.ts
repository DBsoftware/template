import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PotafolioItemComponent } from './potafolio-item.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PotafolioItemComponent],
  exports: [PotafolioItemComponent]
})
export class PotafolioItemModule { }
