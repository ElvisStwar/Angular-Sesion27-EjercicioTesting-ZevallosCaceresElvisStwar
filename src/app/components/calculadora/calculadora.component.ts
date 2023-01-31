import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css'],
})

export class CalculadoraComponent {

  valor1=0;
  valor2=0;
  res=0;

    suma(num1:number,num2:number):number{
      return this.res = num1 + num2;
    }

    resta(num1:number,num2:number):number{
      return this.res=num1-num2
    }

    multi(num1:number,num2:number):number{
      return this.res=num1*num2
    }

}
