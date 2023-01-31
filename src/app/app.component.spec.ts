import { TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { CalculadoraComponent } from './components/calculadora/calculadora.component';
import { ComponentsModule } from './components/components.module';
import { HeaderComponent } from './components/header/header.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule,
        ComponentsModule
      ],
      declarations: [
        AppComponent,
        CalculadoraComponent,
        HeaderComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'testing'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('testing');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('testing');
  });

  
  it('should add two number, sumar(num1:number, num2:number)', ()=>{
    const fixture = TestBed.createComponent(CalculadoraComponent);
    const app = fixture.componentInstance;

    const data = { num1: 3, num2: 2};
    const expectedResult = 5;

    const result = app.suma(data.num1, data.num2);
    expect(result).toEqual(expectedResult);
  });

  it('should add two number, restar(num1:number, num2:number)', ()=>{
    const fixture = TestBed.createComponent(CalculadoraComponent);
    const app = fixture.componentInstance;

    const data = { num1: 3, num2: 2};
    const expectedResult = 1;

    const result = app.resta(data.num1, data.num2);
    expect(result).toEqual(expectedResult);
  });

  it('should add two number, multiplicacion(num1:number, num2:number)', ()=>{
    const fixture = TestBed.createComponent(CalculadoraComponent);
    const app = fixture.componentInstance;

    const data = { num1: 3, num2: 2};
    const expectedResult = 6;

    const result = app.multi(data.num1, data.num2);
    expect(result).toEqual(expectedResult);
  });
  
});
