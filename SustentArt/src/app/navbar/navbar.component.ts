import { AlertasService } from './../service/alertas.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserLogin } from '../model/UserLogin';
import { AuthService } from '../service/auth.service';
import { environment } from 'src/environments/environment.prod';
// import { runInThisContext } from 'vm';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  email: string
  senha: string
  nome: string
  userLogin: UserLogin = new UserLogin

  constructor(
    public authService: AuthService,
    private router: Router,
    private alert: AlertasService
    ) { } 

  ngOnInit(){
  
    let ok = environment
    let token = environment.token

    
    
  }

  entrar(){
    return this.authService.logar(this.userLogin).subscribe((resp: UserLogin) => {
    this.userLogin = resp
    environment.token = this.userLogin.token
    environment.token = this.userLogin.email
    environment.token =this.userLogin.nome
    // localStorage.setItem('token', this.userLogin.token)
    // localStorage.setItem('email', this.userLogin.email)
    // localStorage.setItem('nome', this.userLogin.nome)
    
    this.router.navigate(['/feed']) })
  }
  
  sair(){
    this.router.navigate(['/home'])
    environment.token = ''
    this.alert.showAlertSuccess("Obrigado pela visita, até a próxima.. ;D")
  }


  
}
