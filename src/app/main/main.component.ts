import { Component, OnInit } from '@angular/core';
import { DataShareService } from '../sharedata.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html', 
  styleUrls: [ ]
})
export class MainComponent implements OnInit {

  constructor(private dataShareService: DataShareService) { }

  countrySelectData:any=[];
  countryValue = 'SelectCountry';

  ngOnInit() {
    this.dataShareService.apiUrl1().subscribe(
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
