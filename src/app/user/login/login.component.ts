import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterComponent } from '../register/register.component';

interface User {
  user: string;
  email: string;
  password: string;
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  users: User[] = [];

  constructor(private fb: FormBuilder, private router: Router) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    const storedUsers = localStorage.getItem('users');
    if (storedUsers) {
      this.users = JSON.parse(storedUsers);
    }
  }

  onSubmit(): void {
    if (this.form.valid) {
      const { email, password } = this.form.value;
      const user = this.users.find(u => u.email === email);

      if (!user) {
        alert('User does not exist');
        return;
      }

      if (user.password === password) {
        localStorage.setItem('loggedInEmail', email);
        this.router.navigate(['/user/user-positions']);
      } else {
        alert('Incorrect password');
      }
    }
  }
}
