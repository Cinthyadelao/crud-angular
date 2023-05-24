import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formLogin!: FormGroup;
  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService) { }
  ngOnInit(): void {
    this.formLogin = this.fb.group({
      correo: ['', [Validators.required]],
      contrasena: ['', [Validators.required]],
    })
  }

  onSubmit() {
    console.warn(this.formLogin.value);
    let usuario = {
      correo: this.formLogin.value.correo,
      contrasena: this.formLogin.value.contrasena
    };
    this.authService.login(usuario).subscribe({
      next: () => {
        this.router.navigate(['/private/home']);
      },
      error: (error: HttpErrorResponse) => {
        console.error(error);
      }
    });

  }


  get f() { return this.formLogin.controls; }
}
