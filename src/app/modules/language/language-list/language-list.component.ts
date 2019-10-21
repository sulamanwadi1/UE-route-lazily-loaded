import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataShareService } from '../../../services/sharedata.service';

@Component({
  selector: 'app-language-list',
  templateUrl: './language-list.component.html',
  styleUrls: [ ]
})
export class LanguageListComponent implements OnInit {

  languageList = [];
  subscription:any = [];

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
            this.languageList = data['languages'];
          },
          error => {
            console.log(error);
          }
        )
      );
    }
  }
  
  ngOnDestroy() {
    for(let i=0; i<this.subscription.length; i++){
      this.subscription[i].unsubscribe();
    }
  }
  
}
