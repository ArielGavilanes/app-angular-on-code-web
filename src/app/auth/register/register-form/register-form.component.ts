import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TreeNode } from 'primeng/api';
import { Register } from 'src/app/database/interface/register.interface';
import { passwordMatchValidator } from 'src/app/validators/password-match.validator';

@Component({
  selector: 'register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css'],
})
export class RegisterFormComponent {
  createAccount: String = 'Crea una cuenta';
  @Input() roles: TreeNode[] = [];
  formSubmitted = false;
  selectedRole: String = '';
  @Output() sendRegisterData: EventEmitter<Register> =
    new EventEmitter<Register>();
  registerData: Register = {
    nombre_usuario: '',
    contrasena_usuario: '',
    id_rol: 0,
    email_usuario: '',
    nombre_usuario_real: '',
    apellido_usuario: '',
  };
  registerForm: FormGroup = new FormGroup({});
  constructor(private formBuilder: FormBuilder) {
    this.registerForm = this.formBuilder.group(
      {
        nombre_usuario: ['', [Validators.required, Validators.minLength(10)]],
        id_rol: ['', [Validators.required]],
        contrasena_usuario: [
          '',
          [Validators.required, Validators.minLength(8)],
        ],
        confirmar_contrasena: ['', [Validators.required]],
        email_usuario: ['', [Validators.required, Validators.email]],
        nombre_usuario_real: ['', [Validators.required]],
        apellido_usuario: ['', [Validators.required]],
      },
      {
        validator: passwordMatchValidator,
      }
    );
  }

  onSubmit() {
    this.registerData.nombre_usuario =
      this.registerForm.get('nombre_usuario')?.value;
    this.registerData.contrasena_usuario =
      this.registerForm.get('contrasena_usuario')?.value;
    this.registerData.id_rol = this.registerForm.get('id_rol')?.value.data;
    this.registerData.email_usuario =
      this.registerForm.get('email_usuario')?.value;
    this.registerData.nombre_usuario_real = this.registerForm.get(
      'nombre_usuario_real'
    )?.value;
    this.registerData.apellido_usuario =
      this.registerForm.get('apellido_usuario')?.value;
    console.log(this.registerData);
    this.formSubmitted = true;
    if (this.registerForm.valid) {
      this.sendRegisterData.emit(this.registerData);
    }
  }
}
