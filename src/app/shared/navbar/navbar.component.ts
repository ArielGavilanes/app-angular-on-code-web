import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  items: MenuItem[] = [];

  constructor(private sharedService: SharedService) { }

  getAllCategories() {
    this.sharedService.getAllCategories().subscribe(
      (response: any[]) => {
        this.items = [
          {
            label: 'Categorías',
            icon: 'pi pi-shopping-cart',
            items: response.map(categoria => ({ label: categoria.nombre_categoria }))
          },
          { label: 'Contacto', icon: 'pi pi-envelope', routerLink: '/contacto' },
          { label: 'Acerca de', icon: 'pi pi-info', routerLink: '/acerca-de' },
        ];
        console.log('items', this.items)
      },
      (error) => {
        console.error('Error al obtener las categorías:', error);
      }
    );
  }
  ngOnInit(): void {
    this.getAllCategories();
  }
}
