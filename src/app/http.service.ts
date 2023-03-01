import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient: HttpClient) { }

  public getAllPosts(): Observable<any[]>{
    return of([{
      title: "First Post"
    },
    {
      title: "Second Post"
    }]);
  }



}
