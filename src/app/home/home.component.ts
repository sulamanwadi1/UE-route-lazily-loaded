import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataShareService } from '../sharedata.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: []
})
export class HomeComponent implements OnInit {

  constructor(private dataShareService: DataShareService, private ActRoute: ActivatedRoute) {
    this.ActRoute.params.subscribe( ()=> {
      this.loadData(this.dataShareService.apiCodeData);
    });
    this.dataShareService.shareDataSubject.subscribe(receiveddata=>{
      this.loadData(receiveddata);
    });
  }
  
  countryDetail:any={}

  ngOnInit() {
  }

  loadData(dat){
    if(dat != ''){
      this.dataShareService.apiUrl2(dat).subscribe(
        data => {
          this.countryDetail = data;
        },
        error => {
          console.log(error);
        }
      );
    }
  }
  
}
