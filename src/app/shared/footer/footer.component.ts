import { Component, OnInit } from '@angular/core';
import { InformacionService } from '../../providers/informacion.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styles: []
})
export class FooterComponent implements OnInit {
  year = new Date().getFullYear();
  constructor(public _is: InformacionService) { }

  ngOnInit() {
  }

}
