import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ShipsService {

  url: string = 'https://swapi.dev/api/'
  headerDict = {
    'Authorization': 'none',
    'Access-Control-Allow-Origin': '*'
  }
  requestOptions = {                                                                                                                                                                                 
    headers: new HttpHeaders(this.headerDict), 
  };
  
  constructor( private http: HttpClient ) {}

  getShips(): Observable<any>{
    return this.http.get(this.url + "starships/").pipe( 
      map( data => { return data })
      );
  }

  getFilms(urlFilms) :Observable<any>{
    return this.http.get(urlFilms).pipe( 
      map( data => { return data })
      );
  }
}
