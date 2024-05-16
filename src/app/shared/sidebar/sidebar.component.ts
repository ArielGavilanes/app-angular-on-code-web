import { Component } from '@angular/core';
interface SidebarItem {
  icon: string;
  label: string;
  showLabel: boolean;
}
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {

}
