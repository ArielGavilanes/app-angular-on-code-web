import { Component } from '@angular/core';
import { PrimeIcons, MenuItem } from 'primeng/api';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  items: MenuItem[];

  constructor() {
    this.items = [];
  }

  ngOnInit() {
    this.items = [
      {
        icon: PrimeIcons.FACEBOOK,
      },
      {
        icon: PrimeIcons.INSTAGRAM
      },
      {
        icon: PrimeIcons.TWITTER
      },
      {
        icon: PrimeIcons.LINKEDIN
      }
    ];
  }
}
