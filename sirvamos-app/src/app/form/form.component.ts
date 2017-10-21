import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
submit(){
  console.log('Hola')
  return false
}
  constructor() { }

  ngOnInit() {
  }

}
