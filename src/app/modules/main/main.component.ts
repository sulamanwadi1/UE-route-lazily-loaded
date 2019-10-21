import { Component, OnInit } from '@angular/core';
import { DataShareService } from '../../services/sharedata.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html', 
  styleUrls: [ ]
})
export class MainComponent implements OnInit {

  countrySelectData:any=[];
  countryValue = 'SelectCountry';
  subscription:any = [];

  constructor(private dataShareService: DataShareService) { }

  ngOnInit() {
    this.subscription.push( 
      this.dataShareService.apiUrl1().subscribe(
        data => {
          this.countrySelectData = data;
        },
        error => {
          console.log(error);
        }
      )
    );
  }

  countryChangeEvent(){
    this.dataShareService.DataShareService(this.countryValue);
  }
  
  ngOnDestroy() {
    for(let i=0; i<this.subscription.length; i++){
      this.subscription[i].unsubscribe();
    }
  }

}
