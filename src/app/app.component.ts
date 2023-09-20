import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Techtez';
  user = {
    id: '',
    name: '',
    profilePhoto: null,
    gender: '',
    address: '',
    city: '',
    pin: '',
    state: '',
    email: '',
    contact: ''
  };

  onSubmit() {
    // Handle form submission here, e.g., send data to a server
    console.log('Form submitted:', this.user);
  }

  onFileSelected(event: any) {
    // Handle file selection (profile photo upload) here
    const file = event.target.files[0];
    if (file) {
      this.user.profilePhoto = file;
    }
  }




}
