import { Component, OnInit } from '@angular/core';
import { DataShareService } from '../../services/sharedata.service';
import { Subscription }   from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html', 
  styleUrls: [ ]
})
export class MainComponent implements OnInit {

  countrySelectData:any=[];
  countryValue = 'SelectCountry';
  subscription:Subscription[] = [];

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
    this.subscription.forEach(s => s.unsubscribe());
  }

}
