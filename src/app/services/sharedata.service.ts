import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DataShareService {
  constructor( private http: HttpClient,  ) { }
  apiCodeData='';
  url = 'https://restcountries.eu/rest/v2/';
  
  shareDataSubject = new Subject<any>(); //Decalring new RxJs Subject 
  sendDataToOtherComponent(somedata){
    this.apiCodeData = somedata;
    this.shareDataSubject.next(somedata);
  }
  
  DataShareService(somedata){
    this.apiCodeData = somedata;
    this.shareDataSubject.next(somedata);
  }

  apiUrl1(){
    return this.http.get(this.url+'all');
  }
  apiUrl2(dat){
    return this.http.get(this.url+'alpha/'+dat);
  }

}
