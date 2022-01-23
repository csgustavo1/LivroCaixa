import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LacamentoCreateComponent } from './components/lancamentos/lancamento-create/lacamento-create.component';
import { LancamentoDeleteComponent } from './components/lancamentos/lancamento-delete/lancamento-delete.component';
import { LacamentoListComponent } from './components/lancamentos/lancamento-list/lacamento-list.component';
import { LancamentoUpdateComponent } from './components/lancamentos/lancamento-update/lancamento-update.component';
import { HomeComponent } from './components/templates/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'lancamentos-create', component: LacamentoCreateComponent },
  { path: 'lancamentos-list', component: LacamentoListComponent },
  { path: 'lancamentos-update/:title', component: LancamentoUpdateComponent},
  { path: 'lancamentos-delete/:title', component: LancamentoDeleteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
