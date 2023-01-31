import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {

  num1=0;
  num2=0;
  res=0;

    suma(valor1:number,valor2:number):number{
      return this.res = valor1 + valor2;
    }

    resta(valor1:number,valor2:number):number{
      return this.res=valor1-valor2
    }

    multi(valor1:number,valor2:number):number{
      return this.res=valor1*valor2
    }

}
