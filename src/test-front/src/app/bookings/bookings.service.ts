import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class BookingsService{
  baseUrl: string;

  constructor(private http: HttpClient){
    this.baseUrl = 'https://5ba412108da2f20014654cf8.mockapi.io/api/v1/';
  }

  getFlights(){
    return this.http.get(this.baseUrl + 'flights', {});
  }
}
