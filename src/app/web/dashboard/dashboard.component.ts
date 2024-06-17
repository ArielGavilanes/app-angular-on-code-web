import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { DatabaseService } from 'src/app/database/database.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor(
    private databaseService: DatabaseService,
    private authService: AuthService
  ) {}

  id_rol: number | null = 0;

  barChartData: any;

  barChartOptions: any;

  dataForEstadistic: any[] = [];

  cursos: any[] = [];

  getRoleId() {
    this.id_rol = this.authService.getRoleId();
  }

  getCoursesByCreatorId() {
    return this.databaseService.getCoursesByCreatorId().subscribe(
      (response) => {
        this.cursos = response;
      },
      (err) => {
        console.log(err);
      }
    );
  }
  getCoursesWhereStudentsAreMatriculatedIn() {
    return this.databaseService
      .getCoursesWhereStudentsAreMatriculatedIn()
      .subscribe(
        (response) => {
          this.cursos = response;
        },
        (err) => {
          console.log(err);
        }
      );
  }

  ngOnInit(): void {
    this.getRoleId();
    this.getRoleId();
    if (this.id_rol === 1) {
      this.getCoursesWhereStudentsAreMatriculatedIn();
      this.buildStadisticGraphic();
    }

    if (this.id_rol === 2) {
      this.getCoursesByCreatorId();
    }
  }

  buildStadisticGraphic() {
    return this.databaseService.getMatriculeOfTheLast3Days().subscribe(
      (response) => {
        this.dataForEstadistic = response;
        this.barChartData = {
          labels: this.dataForEstadistic.map((data) => {
            const date = new Date(data.fecha);
            return date.toLocaleDateString();
          }),
          datasets: [
            {
              label: 'Cursos a los que te has matriculado',
              backgroundColor: '#42A5F5',
              data: this.dataForEstadistic.map((data) => data.id_estudiante),
            },
          ],
        };

        this.barChartOptions = {
          plugins: {
            title: {
              display: true,
              text: 'Tu aprendizaje',
            },
          },
          scales: {
            y: {
              beginAtZero: true,
              ticks: {
                stepSize: 1,
              },
            },
          },
          responsive: true,
          maintainAspectRatio: false,
        };
      },
      (err) => {
        console.log('error en estadistica', err);
      }
    );
  }
}
