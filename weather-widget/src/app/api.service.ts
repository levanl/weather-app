import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from './environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  API_URL = environment.API_URL
  API_KEY = environment.API_KEY
  constructor( private http: HttpClient) {}



  getWeatherData(): Observable<any>{
    return this.http.get(`${this.API_URL}/weather?q=${"Johannesburg"}&appid=${this.API_KEY}`)
  }
}
