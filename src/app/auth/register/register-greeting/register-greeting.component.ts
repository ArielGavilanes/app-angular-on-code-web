import { Component } from '@angular/core';

@Component({
  selector: 'register-greeting',
  templateUrl: './register-greeting.component.html',
  styleUrls: ['./register-greeting.component.css'],
})
export class RegisterGreetingComponent {
  greetingMessage: string = 'Hola! Un gusto conocerte';
}
