import { Component, OnInit } from '@angular/core';
import { InformacionService } from '../../providers/informacion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {
  constructor( public _is: InformacionService, private router: Router) {
  }

  ngOnInit() {
  }

  buscar(value: string) {
    this.router.navigate(['/search', value]);
  }

}
