import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {observable, Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class JSONPlaceholderService {


  url='https://restcountries.eu/rest/v2/all';
  constructor(private http:HttpClient) { }
  getData(): Observable<any>{

    return this.http.get<any>(this.url);
}
}
