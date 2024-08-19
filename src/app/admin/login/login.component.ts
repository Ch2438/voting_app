import { UserModule } from './../../user/user.module';
import { Component, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    // const savedEmail = localStorage.getItem('loggedInEmail');
    // if (savedEmail) {
    //   this.router.navigate(['/positions']);
    // }
  }

  onSubmit(): void {
    if (this.form.valid) {
      const { email, password } = this.form.value;
      const mail:any = 'admin@mail.com';
      const key : any = 'test';
      if (email === mail && password === key) {
        // localStorage.setItem('loggedInEmail', email);
        // localStorage.setItem('loggedInPass', password);
        this.router.navigate(['admin/admin-positions']);
      } else {
        alert('Invalid email or password');
      }
    }
  }
  Login(){
    this.onSubmit();
  }
  userLogin(): void {
    this.router.navigate(['/user']);
  }

}
