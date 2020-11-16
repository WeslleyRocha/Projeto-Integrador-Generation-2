import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/User';
import { UserLogin } from '../model/UserLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  logar(userLogin: UserLogin){
    return this.http.post('http://localhost:8080/usuarios/login', userLogin)

  }

  cadastrar(user: User)
  {
    return this.http.post('http://localhost:8080/usuarios/cadastrar', user)
  }

  btnSair(){

    let ok = false
    let token = localStorage.getItem('token')

    if(token != null){
      ok = true

    }
    return ok

  }
  btnLogin(){
    let ok = false
    let token = localStorage.getItem('token')

    if(token == null){
      ok = true

    }
    return ok

  }
  adm(){
    let ok = true
    let email = localStorage.getItem('email')
    if(email.indexOf('@adm.com') == -1){
      ok = false
    } 
    return ok
  }

  nomeUser()
  {
    let nome = localStorage.getItem('nome')
    return nome
  }
}
