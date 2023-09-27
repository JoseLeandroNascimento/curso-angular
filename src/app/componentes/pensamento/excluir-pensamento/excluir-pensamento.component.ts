import { ActivatedRoute, Router } from '@angular/router';
import { PensamentoService } from '../pensamento.service';
import { Pensamento } from './../pensamento';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-excluir-pensamento',
  templateUrl: './excluir-pensamento.component.html',
  styleUrls: ['./excluir-pensamento.component.css']
})
export class ExcluirPensamentoComponent implements OnInit {

  pensamento: Pensamento = {
    id:0,
    conteudo:'',
    autoria: '',
    modelo: ''
  }

  constructor(
    private service: PensamentoService,
    private router: Router,
    private activatedRouter: ActivatedRoute
  ) { }

  ngOnInit(): void {

    const id = this.activatedRouter.snapshot.paramMap.get('id');

    this.service.buscarPorId(parseInt(id!)).subscribe((pensamento: Pensamento)=>{
      this.pensamento = pensamento;
    })
  }

  cancelarPensamento(){

    this.router.navigate(['listarPensamento']);

  }
  excluirPensamento(){

    if(this.pensamento.id){

      this.service.excluir(this.pensamento.id).subscribe(()=>{
        this.router.navigate(['listarPensamento']);
      })
    }
  }





}
