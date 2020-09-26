import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Album } from './album';
import { type } from 'os';
import { Observable } from 'rxjs/Observable';
import { AlbumStorePage } from '../../e2e/app.po';

@Injectable()

export class ProductService {

  constructor(private _http: Http) { }
  private _albumUrl = '../assets/album.json';


  getAlbum(id:number): Observable<Album>{
    return this._http.get(this._albumUrl).map(response => <Album>response.json());
  }
}
