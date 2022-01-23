import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { LancamentoService } from 'src/app/services/lancamento.service';
import { Lancamento } from 'src/shared/models/lacamento.model';

@Component({
  selector: 'app-lancamento-update',
  templateUrl: './lancamento-update.component.html',
  styleUrls: ['./lancamento-update.component.css']
})
export class LancamentoUpdateComponent implements OnInit {

  public data?: Lancamento;
  private title: string;

  constructor(private lancamentoService: LancamentoService, private messageService: MessageService,
    private router: Router, private route: ActivatedRoute ) { 
      this.route.params.subscribe(parametros => {
        this.title = parametros['title'];
      });
    }

  ngOnInit(): void {
    this.data = this.lancamentoService.recuperarTransacao(this.title);
  }


  update(form: NgForm) {
      this.messageService.clear;
      this.lancamentoService.save(this.data!);
      this.lancamentoService.showMessage("Transação atualizada com sucesso!");
      this.router.navigate(['/lancamentos-list']);

  }

  cancel(): void {
    this.router.navigate(['/lancamentos-list'])
  }

}
