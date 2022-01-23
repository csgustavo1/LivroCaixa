import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { LancamentoService } from 'src/app/services/lancamento.service';
import { Lancamento } from 'src/shared/models/lacamento.model';

@Component({
  selector: 'app-lancamento-delete',
  templateUrl: './lancamento-delete.component.html',
  styleUrls: ['./lancamento-delete.component.css'],
})
export class LancamentoDeleteComponent implements OnInit {
  public data?: Lancamento;
  private title: string;

  constructor(
    private lancamentoService: LancamentoService,
    private messageService: MessageService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe((parametros) => {
      this.title = parametros['title'];
    });
  }

  ngOnInit(): void {
    this.data = this.lancamentoService.recuperarTransacao(this.title);
  }

  remove(title: String) {
    this.messageService.clear;
    this.lancamentoService.delete(this.title);
    this.lancamentoService.showMessage('Transação removida com sucesso!');
    this.router.navigate(['/lancamentos-list']);
  }

  cancel() {
    this.router.navigate(['/lancamentos-list']);
  }
}
