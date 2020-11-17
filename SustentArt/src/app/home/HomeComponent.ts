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
  foto: string
  constructor(private authService: AuthService, private router: Router) { }
  
  ngOnInit() {
  
  }

  conferirSenha(event: any){
    this.senha = event.target.value

  }
  cadastrar() {

    if(this.senha === this.user.senha){
      this.authService.cadastrar(this.user).subscribe((resp: User) => {
        this.user = resp
        alert('Usuário cadastrado com sucesso!')
      })
    } else {
        alert('Suas senhas não conferem')
    }  
  } 

 }
