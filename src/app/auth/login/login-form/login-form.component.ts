import { Component } from '@angular/core';
import { TreeNode } from 'primeng/api';

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  loginMessage: String = 'Vamos a iniciar sesion'
}
