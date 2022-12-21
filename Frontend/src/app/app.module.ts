import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BeneficiarioComponent } from './beneficiarios/beneficiario/beneficiario.component';
import { NavComponent } from './nav/nav.component';
import { ProfissionalComponent } from './profissional/profissional.component';
import { CommonModule } from '@angular/common';
import { EspecialidadeComponent } from './especialidades/especialidade/especialidade.component';
import { HomeComponent } from './home/home.component';
import { OpcoesComponent } from './beneficiarios/beneficiario-opcoes/beneficiario-opcoes.component';
import { BeneficiarioEditarComponent } from './beneficiarios/beneficiario-editar/beneficiario-editar.component';
import { EspecialidadeOpcoesComponent } from './especialidades/especialidade-opcoes/especialidade-opcoes.component';
import { EspecialidadeEditarComponent } from './especialidades/especialidade-editar/especialidade-editar.component';

@NgModule({
  declarations: [
    AppComponent,
    BeneficiarioComponent,
    NavComponent,
    ProfissionalComponent,
    EspecialidadeComponent,
    HomeComponent,
    OpcoesComponent,
    BeneficiarioEditarComponent,
    OpcoesComponent,
    BeneficiarioEditarComponent,
    EspecialidadeOpcoesComponent,
    EspecialidadeEditarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
