import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from '../../../../node_modules/rxjs/operators';
import { ProductoService } from '../home/producto.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {
  productos: any[] = [];
  constructor(private _ar: ActivatedRoute, public _ps: ProductoService) {
    this._ar.params
    .pipe(map(data => data['termino']))
    .subscribe(data => {
      _ps.searchProducts(data);
    });
  }

  ngOnInit() {
  }

}
