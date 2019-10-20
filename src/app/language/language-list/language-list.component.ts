import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { DataShareService } from '../../sharedata.service';

@Component({
  selector: 'app-language-list',
  templateUrl: './language-list.component.html',
  styleUrls: [ ]
})
export class LanguageListComponent implements OnInit {

  constructor(private http: HttpClient, private dataShareService: DataShareService, private ActRoute: ActivatedRoute) {
    this.ActRoute.params.subscribe( ()=> {
      this.loadData(this.dataShareService.apiCodeData);
    });
    this.dataShareService.shareDataSubject.subscribe(receiveddata=>{
      this.loadData(receiveddata);
    });
  }

  languageList = [];

  ngOnInit() {
  }

  loadData(dat){
    if(dat != ''){
      this.http.get('https://restcountries.eu/rest/v2/alpha/'+dat).subscribe(
        data => {
          this.languageList = data['languages'];
        },
        error => {
          console.log(error);
        }
      );
    }
  }
  
}
