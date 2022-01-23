import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { LancamentoService } from 'src/app/services/lancamento.service';
import { Lancamento } from 'src/shared/models/lacamento.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lacamento-create',
  templateUrl: './lacamento-create.component.html',
  styleUrls: ['./lacamento-create.component.css']
})
export class LacamentoCreateComponent implements OnInit {
  
  public data?: Lancamento;

  constructor(private lacamentoService: LancamentoService, private messageService: MessageService,
    private router: Router) { }


  ngOnInit(): void {
    this.data = new Lancamento();
  }

   public save(form: NgForm){
     this.messageService.clear;
     this.lacamentoService.save(this.data!);
     this.lacamentoService.showMessage("Transação realizada com sucesso!");
     this.router.navigate(['/']);
   }

   cancel(): void {
    this.router.navigate(['/']);
  }


}
