import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { catchError, Observable, retry, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MarvelServiceService {

  constructor(private http:HttpClient) { }
  getMarvel(page:number=1):Observable<any>{
    const limit=10;
    const offset=10*(page-1);
    const apikey="3a36ecf253e262f43f07c4a73843bdb3";
    const hash="bf22667b02d4a8ae9a517319704d8889"
    return this.http.get(`https://gateway.marvel.com/v1/public/characters?apikey=${apikey}&hash=${hash}&ts=1&limit=${limit}&offset=${offset}`)
      .pipe(retry(1), catchError(this.processError));

  }
  getMarvelbyid(id:number):Observable<any>{
    const apikey="3a36ecf253e262f43f07c4a73843bdb3";
    const hash="bf22667b02d4a8ae9a517319704d8889"
    return this.http.get(`https://gateway.marvel.com/v1/public/characters/${id}?apikey=${apikey}&hash=${hash}&ts=1`)
      .pipe(retry(1), catchError(this.processError));

  }
  getMarvelcomicsbyid(id:number):Observable<any>{
    const apikey="3a36ecf253e262f43f07c4a73843bdb3";
    const hash="bf22667b02d4a8ae9a517319704d8889";
    const limit=10;
    return this.http.get(`https://gateway.marvel.com/v1/public/characters/${id}/comics?apikey=${apikey}&hash=${hash}&ts=1&limit=${limit}`)
      .pipe(retry(1), catchError(this.processError));

  }
  getMarvelstoriesbyid(id:number):Observable<any>{
    const apikey="3a36ecf253e262f43f07c4a73843bdb3";
    const hash="bf22667b02d4a8ae9a517319704d8889";
    const limit=10;
    return this.http.get(`https://gateway.marvel.com/v1/public/characters/${id}/series?apikey=${apikey}&hash=${hash}&ts=1&limit=${limit}`)
      .pipe(retry(1), catchError(this.processError));

  }
  getMarveleventsbyid(id:number):Observable<any>{
    const apikey="3a36ecf253e262f43f07c4a73843bdb3";
    const hash="bf22667b02d4a8ae9a517319704d8889";
    const limit=10;
    return this.http.get(`https://gateway.marvel.com/v1/public/characters/${id}/events?apikey=${apikey}&hash=${hash}&ts=1&limit=${limit}`)
      .pipe(retry(1), catchError(this.processError));

  }
  processError(err: any) {
    let message = '';
    if (err.error instanceof ErrorEvent) {
      message = err.error.message;
    } else {
      message = `Error Code: ${err.status}\nMessage: ${err.message}`;
    }
    console.log(message);
    return throwError(() => {
      message;
    });
  }
}
