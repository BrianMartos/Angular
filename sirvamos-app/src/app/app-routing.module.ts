import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { PostComponent } from './post/post.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';



const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'contacto', component: ContactComponent },
  {path: 'nosotros', component: NosotrosComponent },
  {path: 'servicios', component: ServiciosComponent },
  {path: 'post/:id', component: PostComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
