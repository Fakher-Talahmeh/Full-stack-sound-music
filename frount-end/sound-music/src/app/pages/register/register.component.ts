import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm = new FormGroup({
    username: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
    password2: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  constructor(private authServ: AuthService,private router:Router) {}

  ngOnInit(): void {}

  onSubmit() {
    if (this.registerForm.valid) {
      this.authServ
        .register(
          this.registerForm.value.username as string,
          this.registerForm.value.email as string,
          this.registerForm.value.password as string,
          this.registerForm.value.password2 as string
        )
        .subscribe({
          next: (response) => {
            this.router.navigate(['/']);
          },
          error: (error) => {
            console.error('Login error:', error);
          },
        });
        
        
    }
  }
}

