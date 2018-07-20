import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InformacionService {
  infoShared: any = {};
  infoAbout: any = [];
  loadingShared = false;
  loadingAbout = false;
  constructor(private http: HttpClient) {
    this.loadDataShared();
    this.loadDataAbout();
  }
  loadDataShared() {
    this.http.get('assets/data/info.pagina.json')
                .subscribe(data => {
                  this.loadingShared = true;
                  this.infoShared = data;
                });
  }

  loadDataAbout() {
    this.http.get('https://modelo-3e11c.firebaseio.com/Nosotros.json')
    .subscribe(data => {
      this.loadingAbout = true;
      this.infoAbout = data;
    });
  }


}
