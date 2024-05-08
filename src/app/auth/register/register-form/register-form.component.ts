import { Component } from '@angular/core';
import { TreeNode } from 'primeng/api';

@Component({
  selector: 'register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css'],
})
export class RegisterFormComponent {
  createAccount: String = 'Crea una cuenta';
  nodes: TreeNode<any>[] = [
    { label: 'Node 1', data: '1' },
    { label: 'Node 2', data: '2' },
  ];
}
