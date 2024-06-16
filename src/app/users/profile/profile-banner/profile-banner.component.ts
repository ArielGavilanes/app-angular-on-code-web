import { Component, Input, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/database/database.service';

@Component({
  selector: 'profile-banner',
  templateUrl: './profile-banner.component.html',
  styleUrls: ['./profile-banner.component.css'],
})
export class ProfileBannerComponent implements OnInit {
  constructor(private databaseService: DatabaseService) {}
  @Input() user: any = {};

  ngOnInit(): void {}
  profilePhotoUrl: string =
    'https://p16-va-default.akamaized.net/img/musically-maliva-obj/1665282759496710~c5_720x720.jpeg';
  coverPhotoUrl: string =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAKthpmQNa--6ZneTDfAi5GgZxQEn16OOPGQ&s';
  username: string = '@dilan001001';

  uploadProfilePhoto() {
    document.getElementById('profilePhotoInput')?.click();
  }

  getPortadaBase64(portadaCurso: any): string {
    const buffer = portadaCurso?.data;
    const array = Array.from(new Uint8Array(buffer));
    const binary = array.map((byte) => String.fromCharCode(byte)).join('');
    return 'data:image;base64,' + btoa(binary);
  }

  onProfilePhotoSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.profilePhotoUrl = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

  uploadCoverPhoto() {
    document.getElementById('coverPhotoInput')?.click();
  }

  onCoverPhotoSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.coverPhotoUrl = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }
}
