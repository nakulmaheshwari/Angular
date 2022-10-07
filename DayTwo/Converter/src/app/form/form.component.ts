import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }
  from = ""
  to = ""
  amount = ""
  result = 0
  ngOnInit(): void {
  }
  currencies = ['Rupee', 'US Dollar', 'Euro', 'Pound', 'Yen'];
  onSubmit(form : NgForm){
    this.result = Number(form.value.amount) * 100;
  }
}

