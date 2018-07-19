import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InformacionService {
  info: any = {};
  loading = false;
  constructor(private http: HttpClient) {
    this.info = this.http.get('assets/data/info.pagina.json')
                .subscribe(data => {
                  this.loading = true;
                  this.info = data;
                });
  }



}
