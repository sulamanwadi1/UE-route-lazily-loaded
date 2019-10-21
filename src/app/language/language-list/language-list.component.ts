import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataShareService } from '../../sharedata.service';

@Component({
  selector: 'app-language-list',
  templateUrl: './language-list.component.html',
  styleUrls: [ ]
})
export class LanguageListComponent implements OnInit {

  constructor(private dataShareService: DataShareService, private ActRoute: ActivatedRoute) {
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
      this.dataShareService.apiUrl2(dat).subscribe(
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
