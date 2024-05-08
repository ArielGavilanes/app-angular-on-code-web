import { Component } from '@angular/core';

@Component({
  selector: 'login-greeting',
  templateUrl: './login-greeting.component.html',
  styleUrls: ['./login-greeting.component.css'],
})
export class LoginGreetingComponent {
  greetingMessage: string = 'Que bueno es verte de nuevo!';
}
