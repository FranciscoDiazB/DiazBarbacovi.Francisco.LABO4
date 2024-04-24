import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Calculadora';
  numeroUno : number = 0;
  numeroDos : number = 0;
  total : number = 0;
  resultado : any;
  promedio : any;
  

  ngOnInit(){
    console.log("Arrancamos");
  }

  protected OnBtnCalcuar(){
    this.resultado = "Resultado Total: ";
    this.promedio = "Promedio: "
    this.total = this.numeroUno + this.numeroDos;

    this.resultado += this.total;
    this.promedio += (this.total / 2);

    console.log(this.total);
  }

  protected OnBtnLimpiar(){
    this.numeroUno = 0;
    this.numeroDos = 0;
    this.resultado = 'Resultado Total: ';
    this.promedio = "Promedio: "
  }
}
