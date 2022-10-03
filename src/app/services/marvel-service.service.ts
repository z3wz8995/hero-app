import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { catchError, Observable, retry, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MarvelServiceService {

  constructor(private http:HttpClient) { }
  getMarvel():Observable<any>{
    return this.http.get("https://gateway.marvel.com/v1/public/characters?apikey=3a36ecf253e262f43f07c4a73843bdb3&hash=bf22667b02d4a8ae9a517319704d8889&ts=1")
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
