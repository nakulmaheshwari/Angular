import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DisplayData';
  isClicked = false;

  onClick(){
    this.isClicked = true;
  }
}
