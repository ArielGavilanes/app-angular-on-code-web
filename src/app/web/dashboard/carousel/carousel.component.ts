import { Component, OnInit } from '@angular/core';

interface Product {
  id: string;
  name: string;
  image: string;
}

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  products: Product[] = [];
  responsiveOptions: any[] = [];

  constructor() { }

  ngOnInit() {
    this.products = [
      {
        id: '1',
        name: 'Product 1',
        image: 'assets/img/carrusel/express.png'
      },
      {
        id: '2',
        name: 'Product 2',
        image: 'assets/img/carrusel/next.png',
      },
      {
        id: '3',
        name: 'Product 3',
        image: 'assets/img/carrusel/react.png',
      },
      {
      id: '4',
      name: 'Product 3',
      image: 'assets/img/carrusel/angular.png',
    }
    ];

    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 1,
        numScroll: 1
      },
      {
        breakpoint: '768px',
        numVisible: 1,
        numScroll: 1
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }
}
