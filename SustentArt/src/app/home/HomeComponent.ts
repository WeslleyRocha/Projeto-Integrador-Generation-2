import { AlertasService } from './../service/alertas.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/User';
import { AuthService } from '../service/auth.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user: User = new User()
  senha: string

  constructor(
    private authService: AuthService,
    private router: Router,
    private alert: AlertasService
  ) { }

  ngOnInit() {
   
  }

  conferirSenha(event: any) {
    this.senha = event.target.val

  }
  
  // cadastrar() {
  //   let x = document.getElementById("invalidCheck").checked
  //   if(this.senha === this.user.senha && x != false){
  //     this.authService.cadastrar(this.user).subscribe((resp: User) => {
  //       this.user = resp
  //       this.alert.showAlertSuccess('Cadastrado realizado com sucesso !')
  //     })
  //   } else {
  //     if(x){
  //       this.alert.showAlertDanger('Senhas não conferem !')
  //     }else{
  //       this.alert.showAlertInfo('Por Favor, Concorde com os termos de uso para avançar !')
  //     }
  //   }  
  // } 

  cadastrar() {

    if(this.senha === this.user.senha){
      this.authService.cadastrar(this.user).subscribe((resp: User) => {
        this.user = resp
        this.alert.showAlertSuccess('Cadastrado realizado com sucesso !')
      })
    } else {
        this.alert.showAlertDanger('Senhas não conferem !')
    }  
  } 

}
