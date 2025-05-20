import { Component } from '@angular/core';

@Component({
  selector: 'app-signupform',
  standalone: true,
  imports: [],
  templateUrl: './signupform.component.html',
  styleUrl: './signupform.component.css',
})
export class SignupformComponent {
  /**
   * Signs up a user using given credentials
   */
  signup(): void {
    const fName = document.getElementById('fnameInput') as HTMLInputElement;
    const lName = document.getElementById('lnameInput') as HTMLInputElement;
    const phoneNum = document.getElementById('phoneNum') as HTMLInputElement;
    const email = document.getElementById('emailInput') as HTMLInputElement;
    const password = document.getElementById(
      'passwordInput',
    ) as HTMLInputElement;
    const formData = new FormData();

    formData.append('firstName', fName.value);
    formData.append('lastName', lName.value);
    formData.append('phoneNumber', phoneNum.value);
    formData.append('email', email.value);
    formData.append('password', password.value);

    console.log(formData);

    // Send to API
  }
}
