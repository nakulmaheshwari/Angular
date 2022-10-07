import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  @Input() isClicked = false;
  textData : any;
  constructor(private apiService : ApiService) { }

  ngOnInit(): void {
    this.apiService.getData().subscribe(
      (data) => {
        this.textData = data;
      }
    );
  }
}
