import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  loggedIn = false;

  constructor() { }

  login() {
    this.loggedIn = true;
  }

  logout() {
    this.loggedIn = false;
  }

  isAuthenticated() {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(this.loggedIn), 800);
    });
  }

}
