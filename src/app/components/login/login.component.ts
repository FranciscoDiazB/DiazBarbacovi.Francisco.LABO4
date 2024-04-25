import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {

    private router = inject(Router);

    mensaje:string = "Bienvenido";

    usuario: string = "Fran";
    contra:string = "1234";

    user :string = "";
    contras:string = ""

    protected Ingresar(){

        if(this.user == this.usuario && this.contras == this.contra){
          console.log("Ingreso exitoso");
          this.router.navigateByUrl("/home")
        }
        else{
          this.mensaje = "Usuario Incorrecto. Reingrese los datos!"
        }
    }

    protected Registrar(){
        
        this.mensaje = "Se clickeo en Registrar. Todavia no esta implementado"
    }

    protected Completar(){
      this.user = "Fran";
      this.contras = "1234";
    }
  
}
