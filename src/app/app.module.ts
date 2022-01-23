import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import { HeaderComponent } from './components/templates/header/header.component';
import { NavComponent } from './components/templates/nav/nav.component';
import { MatListModule } from '@angular/material/list';
import { FooterComponent } from './components/templates/footer/footer.component';
import { LacamentoCreateComponent } from './components/lancamentos/lancamento-create/lacamento-create.component';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from  '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { LacamentoListComponent } from './components/lancamentos/lancamento-list/lacamento-list.component';
import { MessagesModule } from 'primeng/messages';
import { MessageService } from 'primeng/api';
import { HomeComponent } from './components/templates/home/home.component';
import { MatTableModule } from '@angular/material/table'
import { MatPaginatorModule } from '@angular/material/paginator';
import { LancamentoUpdateComponent } from './components/lancamentos/lancamento-update/lancamento-update.component';
import { MatSnackBarModule } from  '@angular/material/snack-bar';
import { LancamentoDeleteComponent } from './components/lancamentos/lancamento-delete/lancamento-delete.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    FooterComponent,
    LacamentoCreateComponent,
    LacamentoListComponent,
    HomeComponent,
    LancamentoUpdateComponent,
    LancamentoDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatToolbarModule,
    MatButtonModule, 
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    FormsModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    MessagesModule,
    MatTableModule,
    MatPaginatorModule,
    MatSnackBarModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
