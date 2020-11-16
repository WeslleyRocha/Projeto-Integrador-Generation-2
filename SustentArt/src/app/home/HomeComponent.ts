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
    this.senha = event.target.value

  }
  cadastrar() {

    if (this.senha === this.user.senha) {
      this.authService.cadastrar(this.user).subscribe((resp: User) => {
        this.user = resp
        this.alert.showAlertSuccess('Usuário cadastrado com sucesso!')
      })
    } else {
      this.alert.showAlertDanger('Suas senhas não conferem')
    }
  }

}
