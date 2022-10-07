import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit, OnChanges {

  textdata : any;
  @Input() radio = "";
  constructor(private apiService : ApiService) { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['radio']) {
      this.SortData();
    }
  }
  SortData(){
    if(this.radio == 'firstName'){
      let newa = this.textdata.sort((a, b) => 
      {
        if(a.firstName > b.firstName){
          return 1
        }
        else if(a.firstName < b.firstName){
          return -1;
        }
        else{
          return 0;
        }
      });
      this.textdata = newa;
    }
    if(this.radio == 'birthDate'){
      let newa = this.textdata.sort((a, b) => 
      {
        if(a.birthDate > b.birthDate){
          return 1
        }
        else if(a.birthDate < b.birthDate){
          return -1;
        }
        else{
          return 0;
        }
      });
      this.textdata = newa;
    }
  }

  ngOnInit(): void {
    this.apiService.getData().subscribe(
      (data) => {
        this.textdata = data;
      }
    )
  }
}
