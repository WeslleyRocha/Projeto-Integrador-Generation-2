import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { Postagem } from '../model/Postagem';
import { Tema } from '../model/Tema';
import { AuthService } from '../service/auth.service';
import { PostagemService } from '../service/postagem.service';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})

export class FeedComponent implements OnInit {

  key = 'data'
  reverse = true

  postagem: Postagem = new Postagem()
  listaPostagens: Postagem[]
  // listaPostagensData: Postagem[] e vai ser colocado futuramente-
  titulo: string

  tema: Tema = new Tema();
  listaTemas: Tema[];
  idTema: number;
  conteudo: string

  // dataI: stringe vai ser colocado futuramente-
  // dataF: string e vai ser colocado futuramente-

  regiao: string
  
  
  constructor(
    private postagemService: PostagemService,
    private temaService: TemaService,
    public auth: AuthService
  ) { }

    ngOnInit() {
    window.scroll(0,0)
    this.findAllPostagens()
    this.findAllTema()

  }

  findAllPostagens(){
    this.postagemService.getAllPostagens().subscribe((resp: Postagem[]) =>{
      this.listaPostagens = resp
    })
  }

  publicar(){
    this.tema.id = this.idTema
    this.postagem.tema = this.tema

    if(this.postagem.titulo == null || this.postagem.descricao == null || this.postagem.tema == null){
      alert('Preencha todos os campos antes de publicar!')
    } else{
      this.postagemService.postPostagem(this.postagem).subscribe((resp: Postagem) => {
        this.postagem = resp
        this.postagem = new Postagem()
        alert('Postagem realizada com sucesso!')
        this.findAllPostagens()
      })
    }
  }

  findAllTema(){
    this.temaService.getAllTemas().subscribe((resp: Tema[]) => {
      this.listaTemas = resp
    })
  }

  // findByDataPostagem(){
  //   this.postagemService.getAllData(this.dataI, this.dataF).subscribe((resp: Postagem[]) =>{
  //     this.listaPostagensData = resp e vai ser colocado futuramente
  //   })

  // }

  findByIdTema(){
    this.temaService.getByIdTema(this.idTema).subscribe((resp: Tema) => {
      this.tema = resp;
    })
  }

  findByTituloPostagem(){
    if(this.titulo === ''){
      this.findAllPostagens()
    }else{
      this.postagemService.getByTituloPostagem(this.titulo).subscribe((resp: Postagem[]) =>{
        this.listaPostagens = resp

      })

    }
  }

  findByNomeTema(){
    if(this.conteudo === ''){
      this.findAllTema()
    }else{
      this.temaService.getByNomeTema(this.conteudo).subscribe((resp: Tema[]) =>{
        this.listaTemas = resp
      })

    }

  }

  findByRegiaoPostagem(){
    if(this.regiao === ''){
      this.findAllPostagens()
    }else{
      this.postagemService.getByRegiaoPostagem(this.regiao).subscribe((resp: Postagem[])=>{
        this.listaPostagens = resp
    
    })
  }
  }

}
