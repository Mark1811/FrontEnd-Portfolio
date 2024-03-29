import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SobremiComponent } from './sobremi/sobremi.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { EducacionComponent } from './educacion/educacion.component';
import { ReactiveFormsModule} from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { SkillComponent } from './skill/skill.component';
import { ProyectoComponent } from './proyecto/proyecto.component';
import { FuterComponent } from './futer/futer.component';



const appRoutes:Routes=[
      {path:'', component:PortfolioComponent, pathMatch:'full'}
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SobremiComponent,
    ExperienciaComponent,
    EducacionComponent,
    PortfolioComponent,
    SkillComponent,
    ProyectoComponent,
    FuterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
