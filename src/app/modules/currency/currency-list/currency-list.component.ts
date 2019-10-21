import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataShareService } from '../../../services/sharedata.service';
import { Subscription }   from 'rxjs';


@Component({
  selector: 'app-currency-list',
  templateUrl: './currency-list.component.html',
  styleUrls: [ ]
})
export class CurrencyListComponent implements OnInit {

  currencyList = [];
  subscription:Subscription[] = [];

  constructor(private dataShareService: DataShareService, private ActRoute: ActivatedRoute) {
    this.subscription.push( 
      this.ActRoute.params.subscribe( ()=> {
        this.loadData(this.dataShareService.apiCodeData);
      })
    );
    
    this.subscription.push( 
      this.dataShareService.shareDataSubject.subscribe(receiveddata=>{
        this.loadData(receiveddata);
      })
    );
  }

  ngOnInit() {
  }

  loadData(dat){
    if(dat != ''){
      this.subscription.push(
        this.dataShareService.apiUrl2(dat).subscribe(
          data => {
            this.currencyList = data['currencies'];
          },
          error => {
            console.log(error);
          }
        )
      );
    }
  }
  
  ngOnDestroy() {
    this.subscription.forEach(s => s.unsubscribe());
  }

}
