import { Component, OnInit } from '@angular/core';
import { cosDependencies } from 'mathjs';
import { AuthService } from 'src/app/auth/services/auth.service';
import { DatabaseService } from 'src/app/database/database.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  constructor(
    private databaseService: DatabaseService,
    private authService: AuthService
  ) {}

  updateUserDataProfile(dato: any) {
    return this.databaseService.updateUserDataProfile(dato).subscribe((err) => {
      console.log(err);
    });
  }

  updateUserDataCover(dato: any) {
    return this.databaseService.updateUserDataCover(dato).subscribe((err) => {
      console.log(err);
    });
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

  dataForEstadistic: any[] = [];
  getMatriculeOfTheLast3Days() {
    return this.databaseService.getMatriculeOfTheLast3Days().subscribe(
      (response) => {
        this.dataForEstadistic = response;
      },
      (err) => {
        console.log('error en estadistica', err);
      }
    );
  }
  ngOnInit(): void {
    this.getProfile();
    this.getRoleId();
    if (this.id_rol === 1) {
      this.getCoursesWhereStudentsAreMatriculatedIn();
      this.buildStadisticGraphic();
    }

    if (this.id_rol === 2) {
      this.getCoursesByCreatorId();
    }
  }

  id_rol: number | null = 0;

  user: any = {};

  cursos: any[] = [];

  barChartData: any;

  barChartOptions: any;

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

  getProfile() {
    return this.databaseService.getProfile().subscribe(
      (response) => {
        this.user = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getRoleId() {
    this.id_rol = this.authService.getRoleId();
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
}
