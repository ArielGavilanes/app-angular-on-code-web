import { Component } from '@angular/core';

@Component({
  selector: 'profile-banner',
  templateUrl: './profile-banner.component.html',
  styleUrls: ['./profile-banner.component.css']
})
export class ProfileBannerComponent {
  profilePhotoUrl: string = 'https://via.placeholder.com/200';
  coverPhotoUrl: string = 'https://via.placeholder.com/1200x400';
  username: string = '@dilan001001';  

  uploadProfilePhoto() {
    document.getElementById('profilePhotoInput')?.click();
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
