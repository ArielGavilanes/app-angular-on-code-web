import { Component, OnInit, Input } from '@angular/core';
import { Message, PrimeNGConfig } from 'primeng/api';
import { select, Store } from '@ngrx/store';
import { login } from 'src/app/state/actions/auth.actions';
import { selectAuthError } from 'src/app/state/selectors/auth.selectors';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private primengConfig: PrimeNGConfig,
    private store: Store<any>
  ) {}

  messages: Message[] = [];

  ngOnInit() {
    this.primengConfig.ripple = true;
    this.store.pipe(select(selectAuthError)).subscribe((error) => {
      if (error) {
        this.messages = [{severity:'error', summary:'Error de autenticación', detail: error}];
      } else {
        this.messages = [];
      }
    });
  }

  loginUser(payload: any) {
    this.store.dispatch(login({ payload }));
  }
}
