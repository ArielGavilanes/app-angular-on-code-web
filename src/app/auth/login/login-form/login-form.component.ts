import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Message } from 'primeng/api';
import { Login } from 'src/app/database/interface/login.interface';

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent {
  loginMessage: String = 'Vamos a iniciar sesion';

  @Input() messages: Message[] = [];

  formSubmitted = false;

  @Output() sendLoginData: EventEmitter<Login> = new EventEmitter<Login>();

  loginForm: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      nombre_usuario: ['', [Validators.required]],
      contrasena_usuario: ['', [Validators.required]],
    });
  }

  onSubmit() {
    const payload = {
      nombre_usuario: this.loginForm.get('nombre_usuario')?.value,
      contrasena_usuario: this.loginForm.get('contrasena_usuario')?.value
    };

    this.formSubmitted = true;

    if (this.loginForm.valid) {
      this.sendLoginData.emit(payload);
    }
  }
}
