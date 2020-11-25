import { ResourceLoader } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators, ReactiveFormsModule, FormBuilder} from '@angular/forms';
import { LoginRegisterService } from 'src/app/services/login-register/login-register.service';
import { MustMatch } from 'src/app/utilities/must-match.validator';
import { User } from '../../models/user.model';



@Component({
  selector: 'app-login-register-screen',
  templateUrl: './login-register-screen.component.html',
  styleUrls: ['./login-register-screen.component.sass']
})
export class LoginRegisterScreenComponent implements OnInit {

  loginSend: boolean;
  registerSend: boolean;
  
  usua: User = new User();
 // periodista: boolean;
  
  checkoutFormLogin: FormGroup;
  checkoutFormRegister: FormGroup;


  constructor(private servicioLoginRegister: LoginRegisterService, private formBuilder: FormBuilder) { 
    this.checkoutFormLogin = this.createFormGroupLogin();
    this.checkoutFormRegister = this.createFormGroupRegister();
   // this.periodista=false;
  }

  createFormGroupLogin() {

    return this.formBuilder.group({
      usuario: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
  });
    
   /* return new FormGroup({
      usuario: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    });*/
    
  }

  createFormGroupRegister(){

    return this.formBuilder.group({
      user: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      contra: ['', [Validators.required, Validators.minLength(8)]],
      confcontra: ['', [Validators.required]],
      periodista: ['']
  }, {
      validator: MustMatch('contra', 'confcontra')
  });

  /*return new FormGroup({
      user:  new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      contra: new FormControl('', [Validators.required, Validators.minLength(8)]),
      confcontra: new FormControl('', [Validators.required]),
      
    });
    */
  }


  ngOnInit(): void {}

  onSubmitLogin(){// para cuando le den al boton iniciar sesion
    this.loginSend= true;
    this.usua.nick= this.usuario.value;
    this.usua.contraseña= this.password.value;

    if (this.checkoutFormLogin.valid) { // si es formulario valido
      console.log("usuario:", this.usua.nick, "con:", this.usua.contraseña);

    }
  }

  // para cuando le den al boton registrar
  onSubmitRegister(){
    this.registerSend=true;
    this.usua.nick= this.user.value;
    this.usua.correo = this.email.value;
    this.usua.contraseña = this.contra.value;
    this.usua.permiso=1;
    
    
    if (this.checkoutFormRegister.valid) { // si es formulario valido
      if (!this.periodista.value){
        console.log("periodista falso");
      }
      console.log("user:", this.usua.nick, "email:", this.usua.correo, "contra:", this.contra.value, "contra2:", this.confcontra.value, this.periodista.value);
    }
 
  }


  get usuario() { return this.checkoutFormLogin.get('usuario'); }
  get password() { return this.checkoutFormLogin.get('password'); }

  get user() { return this.checkoutFormRegister.get('user'); }
  get email() { return this.checkoutFormRegister.get('email'); }
  get contra() { return this.checkoutFormRegister.get('contra'); }
  get confcontra() { return this.checkoutFormRegister.get('confcontra'); }
  get periodista() { return this.checkoutFormRegister.get('periodista'); }
}
