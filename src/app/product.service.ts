import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Response } from "@angular/http";

@Injectable()
export class ProductService {
  private _albumUrl = "../assets/album.json";

  constructor(private _http: Http) { }

  getAlbum(number id){ 
    
    return this._http.get(this._albumUrl)
  }
}
