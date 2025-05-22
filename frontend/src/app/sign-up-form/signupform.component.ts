import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signupform',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './signupform.component.html',
  styleUrl: './signupform.component.css',
})
export class SignupformComponent {
  fname = '';
  lname = '';
  phoneNum = '';
  email = '';
  password = '';

  /**
   * Signs up a user using given credentials
   */
  signup(): void {
    const formData = new FormData();

    formData.append('firstName', this.fname);
    formData.append('lastName', this.lname);
    formData.append('phoneNumber', this.phoneNum);
    formData.append('email', this.email);
    formData.append('password', this.password);

    console.log(formData);

    // Send to API
  }
}
