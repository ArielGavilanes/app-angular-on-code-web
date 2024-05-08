import { Component } from '@angular/core';
import { TreeNode } from 'primeng/api';

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {

  createAccount: String = 'Crea una cuenta';
  nodes:  TreeNode<any>[] = [
    { label: 'Node 1', data: '1' },
    { label: 'Node 2', data: '2' },
  ];
}
