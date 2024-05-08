import { Component, OnInit } from '@angular/core';
import { RegisterService } from './service/register.service';
import { Router } from '@angular/router';
import { TreeNode } from 'primeng/api';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  constructor(
    private registerService: RegisterService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getAllRoles();
  }

  roles: TreeNode[] = [];

  getAllRoles() {
    return this.registerService.getAllRoles().subscribe(
      (response) => {
        this.roles = response.map((role) => ({
          label:
            role.nombre_rol.charAt(0).toUpperCase() + role.nombre_rol.slice(1),
          data: role.id_rol,
        }));
      },
      (err) => console.log(err)
    );
  }

  registerUser(user: any) {
    const formData = new FormData();
    for (const key in user) {
      formData.append(key, user[key]);
    }

    return this.registerService.registerUser(formData).subscribe(
      (response) => {
        this.router.navigate(['/login']);
      },
      (err) => console.log('Error al registro', err)
    );
  }
}
