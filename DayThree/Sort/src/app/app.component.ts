import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  radio = "";
  title = 'Sort';

  receiveRadio($event:any){
    this.radio = $event;
  }
}
