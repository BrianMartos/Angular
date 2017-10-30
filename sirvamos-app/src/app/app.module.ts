import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injectable } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormComponent } from './form/form.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { TakerComponent } from './taker/taker.component';
import { GiverComponent } from './giver/giver.component';
import { Http } from '@angular/http';
import { PostComponent } from './post/post.component';
import { PostService } from './post.service';
//import { ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    NavBarComponent,
    ContactComponent,
    HomeComponent,
    NosotrosComponent,
    FormComponent,
    ServiciosComponent,
    TakerComponent,
    GiverComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    NgxPaginationModule
    //ReactiveFormsModule
  ],
  providers: [
    PostService
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
