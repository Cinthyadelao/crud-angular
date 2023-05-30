import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  formLogin!: FormGroup;
  suscription!: Subscription;
  isSuccesfull: boolean = false;
  isLoading: boolean = false;
  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService) { }
  ngOnInit(): void {
    this.formLogin = this.fb.group({
      correo: ['', [Validators.required]],
      contrasena: ['', [Validators.required]],
    })
  }

  onSubmit() {
    console.warn(this.formLogin.value);
    this.isLoading = true;
    let usuario = {
      correo: this.formLogin.value.correo,
      contrasena: this.formLogin.value.contrasena
    };
    this.suscription = this.authService.login(usuario).subscribe({
      next: (respuesta) => {
        if (usuario.correo == respuesta.correo && usuario.contrasena == respuesta.contrasena) {
          this.isLoading = false;
          this.router.navigate(['/private/home']);
        } else {
          this.isLoading = false;
          this.isSuccesfull = true;
        }
      },
      error: (error: HttpErrorResponse) => {
        this.isLoading = false;
        console.error(error);
      }
    });

  }
  ngOnDestroy(): void {
    this.suscription?.unsubscribe();
  }

  get f() { return this.formLogin.controls; }
}
