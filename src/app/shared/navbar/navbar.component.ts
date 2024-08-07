import { Component, OnInit, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { SharedService } from '../shared.service';
import { Router } from '@angular/router';
import { OverlayPanel } from 'primeng/overlaypanel';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  items: MenuItem[] = [];

  query_curso: string = '';
  constructor(
    private sharedService: SharedService,
    private router: Router,
    private authService: AuthService
  ) {}

  getProfile() {
    return this.sharedService.getProfile().subscribe(
      (response) => {
        this.user = response;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  user: any = {};

  getAllCategories() {
    this.sharedService.getAllCategories().subscribe(
      (response: any[]) => {
        this.items = [
          {
            label: 'Categorías',
            icon: 'pi pi-shopping-cart',
            items: response.map((categoria) => ({
              label: categoria.nombre_categoria,
              routerLink: '/categorias/' + categoria.nombre_categoria,
            })),
          },
        ];
      },
      (error) => {
        console.error('Error al obtener las categorías:', error);
      }
    );
  }

  busquedaCurso() {
    if (this.query_curso) {
      this.router.navigate(['/cursos'], {
        queryParams: { curso_nombre: this.query_curso },
      });
    }
  }

  getPortadaBase64(portadaCurso: any): string {
    const buffer = portadaCurso?.data;
    const array = Array.from(new Uint8Array(buffer));
    const binary = array.map((byte) => String.fromCharCode(byte)).join('');
    return 'data:image;base64,' + btoa(binary);
  }

  ngOnInit(): void {
    this.getAllCategories();
    this.getProfile();
  }

  logout() {
    return this.authService.logout();
  }
  // @ViewChild('op') overlayPanel: OverlayPanel;

  // abrirPanel(event: Event) {
  //   this.overlayPanel.toggle(event);
  // }

  // cerrarPanel() {
  //   this.overlayPanel.hide();
  // }
}
