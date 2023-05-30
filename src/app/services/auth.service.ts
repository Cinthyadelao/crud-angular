import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  login(usuario: any): Observable<any> {
    //return this.httpClient.post<any>('', usuario);
    return new Observable<any>((suscriber) => {
      const timeOut = setTimeout(() => {
        suscriber.next({
          correo: "cinthya@hotmail.com",
          contrasena: "123"
        });
      }, 3000);
      return () => {
        clearTimeout(timeOut);
      }
    })
  }
}
