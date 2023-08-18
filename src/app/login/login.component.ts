import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string='';
  password: string='';

  login() {
    // Perform login logic here
    if (this.username === 'admin' && this.password === 'password') {
      // Successful login
      console.log('Login successful');
    } else {
      // Invalid credentials
      console.log('Invalid credentials');
    }
  }

}
