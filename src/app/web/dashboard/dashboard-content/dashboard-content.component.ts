import { Component, Input } from '@angular/core';

@Component({
  selector: 'dashboard-content',
  templateUrl: './dashboard-content.component.html',
  styleUrls: ['./dashboard-content.component.css'],
})
export class DashboardContentComponent {
  @Input() id_rol: number | null = 0;

  @Input() cursos: any[] = [];

  @Input() barChartOptions: any;

  @Input() barChartData: any;
}
