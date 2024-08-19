import { Component, inject,OnInit, } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

interface User {
  user: string;
  email: string;
  password: string;
}
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  users: User[] = [];

  constructor(private fb: FormBuilder, private router: Router) {
    this.form = this.fb.group({
      user: ['', Validators.required],
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
      const { user, email, password } = this.form.value;
      const userExists = this.users.some(u => u.email === email);

      if (userExists) {
        alert('This email is already registered.');
        this.router.navigate(['/user/user-login']);
      } else {
        this.users.push({ user, email, password });
        localStorage.setItem('users', JSON.stringify(this.users));
        alert('Registration successful!');
        this.router.navigate(['/user/user-login']);
      }
    } else {
      alert('Please fill out the form correctly');
    }
  }
}
