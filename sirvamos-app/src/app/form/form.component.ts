import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  exampleInputEmail1: any;
submit(){
  alert(nombreyapellido);
}
  constructor() { }

  ngOnInit() {
  }

}

// function limitText(limitField, limitNum) {
//   if (limitField.value.length > limitNum) {
//       limitField.value = limitField.value.substring(0, limitNum);
//   }
// }

function formularioDeContacto(){

}

function nombreyapellido(nombreyapellido){
    newFunction();

    function newFunction() {
        this.nombreyapellido;
    }
}