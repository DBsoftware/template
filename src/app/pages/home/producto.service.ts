import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  productos: any[] = [];
  productFiltered: any[] = [];
  producto: any = null;
  loading: boolean;
  loadingPro: boolean;
  constructor(private http: HttpClient) {
    this.loadProductsIdx();
  }

  loadProductsIdx() {
  return new Promise((resolve, reject) => {
    this.loading = true;
    if (this.productos.length === 0) {
      this.http.get('https://modelo-3e11c.firebaseio.com/Productos_idx.json')
      .subscribe((data: any) => {
        this.loading = false;
        this.productos = data;
        resolve();
      });
    }
  });

  }

  filtrado(termino) {
  return new Promise((resolve, reject) => {
    this.loading = false;
    resolve(this.productos.filter(e => e.titulo.includes(termino)));
  });


  }

  searchProducts(termino: string) {
    this.loading = true;
    (this.productos.length === 0) ?
    this.loadProductsIdx().then(() => this.filtrado(termino).then((data: any[]) => this.productFiltered = data )) :
    this.filtrado(termino).then((data: any[]) => this.productFiltered = data );
  }
  // ref.child('user').orderByChild('name').startAt(name).endAt(name+'\uf8ff') --> con firestore

  loadProduct(idx: string) {
      return this.http.get(`https://modelo-3e11c.firebaseio.com/Productos/${idx}.json`);
    }

}
