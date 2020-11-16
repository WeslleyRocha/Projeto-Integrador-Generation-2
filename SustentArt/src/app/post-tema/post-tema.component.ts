import { AlertasService } from './../service/alertas.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tema } from '../model/Tema';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-post-tema',
  templateUrl: './post-tema.component.html',
  styleUrls: ['./post-tema.component.css']
})
export class PostTemaComponent implements OnInit {

  tema: Tema = new Tema
  listaTema: Tema[]

  constructor(
    private temaService: TemaService,
    private router: Router,
    private alert: AlertasService
  ) { }

  ngOnInit(){
    this.findAllTema()
  }

  findAllTema(){
    this.temaService.getAllTemas().subscribe((resp: Tema[]) => {
      this.listaTema = resp
    })
  }

  findByIdTema(){
    this.temaService.getByIdTema(this.tema.id).subscribe((resp: Tema) => {
      this.tema = resp;
    })
  }

  cadastrar(){
    if (this.tema.conteudo == null){
      this.alert.showAlertSuccess('Preencha o campo de nome do tema corretamente')
    } else {
      this.temaService.postTema(this.tema).subscribe((resp: Tema) => {
        this.tema = resp
      this.router.navigate(['/feed'])
      this.alert.showAlertDanger('Tema cadastrado com sucesso')
      })
    }
  }
}
