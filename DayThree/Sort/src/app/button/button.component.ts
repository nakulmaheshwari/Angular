import { Component, OnInit, Output, EventEmitter  } from '@angular/core';


@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Output() RadioEvent = new EventEmitter<string>();
  radio = "";
  constructor() { }

  ngOnInit(): void {
  }
  
  onItemChange(){
    this.RadioEvent.emit(this.radio);
  }
}
