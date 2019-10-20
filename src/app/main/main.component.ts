import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DataShareService } from '../sharedata.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html', 
  styleUrls: [ ]
})
export class MainComponent implements OnInit {

  constructor(private http: HttpClient, private dataShareService: DataShareService) { }

  countrySelectData:any=[];
  countryValue = 'SelectCountry';

  ngOnInit() {
    this.http.get('https://restcountries.eu/rest/v2/all').subscribe(
      data => {
        this.countrySelectData = data;
      },
      error => {
        console.log(error);
      }
    );
  }

  countryChangeEvent(){
    this.dataShareService.DataShareService(this.countryValue);
  }

}
