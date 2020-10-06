import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ClientComponent } from './components/body/client/client.component';
import { ContactComponent } from './components/body/contact/contact.component';
import { DetailComponent } from './components/body/detail/detail.component';
import { ExperienceComponent } from './components/body/experience/experience.component';
import { GalleryComponent } from './components/body/gallery/gallery.component';
import { SkillsComponent } from './components/body/skills/skills.component';
import { WelcomeComponent } from './components/body/welcome/welcome.component';
import { WorksComponent } from './components/body/works/works.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';



const appRoutes:Routes = [

];

@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    ContactComponent,
    DetailComponent,
    ExperienceComponent,
    GalleryComponent,
    SkillsComponent,
    WelcomeComponent,
    WorksComponent,
    FooterComponent,
    HeaderComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
