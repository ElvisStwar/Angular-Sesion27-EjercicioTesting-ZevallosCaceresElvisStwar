import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {

  num1:number=0;
  num2:number=0;
  res:number=0;

    suma(){
      this.res=this.num1+this.num2
    }

    resta(){
      this.res=this.num1-this.num2
    }

    multi(){
      this.res=this.num1*this.num2
    }

}
