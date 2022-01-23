import { Injectable } from '@angular/core';
import { Lancamento } from 'src/shared/models/lacamento.model';
import { MatSnackBar } from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class LancamentoService {

  constructor(private snackBar: MatSnackBar) { }

  public save(data: Lancamento) {
      localStorage.setItem(data.title.toString(), JSON.stringify(data));
  }

  public search(): Array<Lancamento>{
    let lancamentos: Lancamento[] = [];
    for(let i = 0; i < localStorage.length; i++){
       lancamentos.push(
         JSON.parse(
             localStorage.getItem(
               localStorage.key(i)
          )
         )
       );
    }
    return lancamentos
  }


  public recuperarTransacao(title: string): Lancamento{
       return JSON.parse(localStorage.getItem(title));
  }


  public delete(title: string): void {
      localStorage.removeItem(title);
  }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, "X", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ["msg-error"] : ["msg-success"],
    });
  }



}
