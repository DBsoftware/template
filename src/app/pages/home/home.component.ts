import { Component, OnInit } from '@angular/core';
import { ProductoService } from './producto.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {
  constructor(public _ps: ProductoService) {}
  ngOnInit() {
  }

}
