import { Component } from '@angular/core';
import { Form, FormBuilder, Validators } from '@angular/forms';
import { Route } from '@angular/router';
import { subscribeOn } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-registr',
  templateUrl: './registr.component.html',
  styleUrls: ['./registr.component.scss']
})
export class RegistrComponent {

  formRegistro: FormGroup = this.fb.group({
    email:["",[Validators.required, Validators.email]],
    senha:["",[Validators.required, Validators.minLength(6)]]
  });
  erro: string = "";

  constructor(private fb: FormBuilder,private authservice: AuthService,
    private router:Router){}

  //métados 

  onSubmit(){
    if(this.formRegistro.valid){
      this.authService.registrar(this.formRegistro.value).subscribe(
        {
          next: () => {
            alert ("Usuário registrado com sucesso!");
            this.router.navigate(["/login"]);
          },
          error:(e) => this.erro = e.message
        }
      );
    }
  }



}
