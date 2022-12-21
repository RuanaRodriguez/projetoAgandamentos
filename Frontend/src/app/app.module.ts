import { ProfissionalEditarComponent } from './profissionais/profissional-editar/profissional-editar.component';
import { ListaProfissionalComponent } from './profissionais/profissional-lista/profissional-lista.component';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastrarBeneficiarioComponent } from './beneficiarios/beneficiario-cadastrar/beneficiario-cadastrar.component';
import { NavComponent } from './nav/nav.component';
import { CadastrarProfissionalComponent } from './profissionais/profissional-cadastrar/profissional-cadastrar.component';
import { CadastrarEspecialidadeComponent } from './especialidades/especialidade-cadastrar/especialidade-cadastrar.component';
import { HomeComponent } from './home/home.component';
import { ListaBeneficiarioComponent } from './beneficiarios/beneficiario-lista/beneficiario-lista.component';
import { BeneficiarioEditarComponent } from './beneficiarios/beneficiario-editar/beneficiario-editar.component';
import { ListaEspecialidadeComponent } from './especialidades/especialidade-lista/especialidade-lista.component';
import { EspecialidadeEditarComponent } from './especialidades/especialidade-editar/especialidade-editar.component';
import { HospitalCadastrarComponent } from './hospitais/hospital-cadastrar/hospital-cadastrar.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    CadastrarBeneficiarioComponent,
    ListaBeneficiarioComponent,
    BeneficiarioEditarComponent,
    CadastrarEspecialidadeComponent,
    CadastrarProfissionalComponent,
    ListaEspecialidadeComponent,
    EspecialidadeEditarComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
