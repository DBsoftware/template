import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { ProductoService } from '../producto.service';

@Component({
  selector: 'app-potafolio-item',
  templateUrl: './potafolio-item.component.html',
  styles: []
})
export class PotafolioItemComponent implements OnInit {
  producto: any = null;
  cod: any = null;
  constructor(private _aR: ActivatedRoute, public _ps: ProductoService) {
    this._aR.params
    .pipe(map(data => data.id))
    .subscribe((param: string) => {
      this.cod = param.charAt(param.length - 1);
      this._ps.loadProduct(param)
        .subscribe((data: any) => {
        // this.loadingPro = false;
        this.producto = data;
      });
    });
  }

  ngOnInit() {
  }

}
