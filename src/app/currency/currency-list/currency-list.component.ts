import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataShareService } from '../../sharedata.service';


@Component({
  selector: 'app-currency-list',
  templateUrl: './currency-list.component.html',
  styleUrls: [ ]
})
export class CurrencyListComponent implements OnInit {

  constructor(private dataShareService: DataShareService, private ActRoute: ActivatedRoute) {
    this.ActRoute.params.subscribe( ()=> {
      this.loadData(this.dataShareService.apiCodeData);
    });
    this.dataShareService.shareDataSubject.subscribe(receiveddata=>{
      this.loadData(receiveddata);
    });
  }

  currencyList = [];

  ngOnInit() {
  }

  loadData(dat){
    if(dat != ''){
      this.dataShareService.apiUrl2(dat).subscribe(
        data => {
          this.currencyList = data['currencies'];
        },
        error => {
          console.log(error);
        }
      );
    }
  }
  
}
