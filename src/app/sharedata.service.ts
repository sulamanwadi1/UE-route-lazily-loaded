import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DataShareService {
  constructor() { }
  apiCodeData='';
  
  shareDataSubject = new Subject<any>(); //Decalring new RxJs Subject 
  sendDataToOtherComponent(somedata){
    this.apiCodeData = somedata;
    this.shareDataSubject.next(somedata);
  }
  
  DataShareService(somedata){
    this.apiCodeData = somedata;
    this.shareDataSubject.next(somedata);
  }
}
