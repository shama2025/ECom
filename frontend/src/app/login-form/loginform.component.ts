import { Component } from '@angular/core';

@Component({
  selector: 'app-loginform',
  standalone: true,
  imports: [],
  templateUrl: './loginform.component.html',
  styleUrl: './loginform.component.css',
})
export class LoginformComponent {

/**
 * Attempts to confirm user credentials are accurate
 */
  login(): void{
    const email = document.getElementById('emailInput') as HTMLInputElement
    const password = document.getElementById('passwordInput') as HTMLInputElement
    const formData = new FormData()

    formData.append('email', email.value)
    formData.append('password', password.value)

    console.log(formData)
    // Send to API

  }

}
