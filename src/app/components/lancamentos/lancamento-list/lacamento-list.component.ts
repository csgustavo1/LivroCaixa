import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/api';
import { LancamentoService } from 'src/app/services/lancamento.service';
import { Lancamento } from 'src/shared/models/lacamento.model';

@Component({
  selector: 'app-lacamento-list',
  templateUrl: './lacamento-list.component.html',
  styleUrls: ['./lacamento-list.component.css']
})
export class LacamentoListComponent implements OnInit {

  public data?: Lancamento;
  private title: string;

  lancamentos: Lancamento[];
  displayedColumns = ['title', 'type', 'value', 'action']

  constructor(private lancamentoService: LancamentoService, private messageService: MessageService, 
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.lancamentos = this.lancamentoService.search();
  }

}
