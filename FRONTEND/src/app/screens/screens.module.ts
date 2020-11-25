import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScreensRoutingModule } from './screens-routing.module';
import { ScreensComponent } from './screens.component';
import { AdministratorScreenComponent } from './administrator-screen/administrator-screen.component';
import { ComentariosScreenComponent } from './comentarios-screen/comentarios-screen.component';
import { ContactoScreenComponent } from './contacto-screen/contacto-screen.component';
import { Covid19ScreenComponent } from './covid19-screen/covid19-screen.component';
import { DeportesScreenComponent } from './deportes-screen/deportes-screen.component';
import { FooterScreenComponent } from './footer-screen/footer-screen.component';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { InternacionalScreenComponent } from './internacional-screen/internacional-screen.component';
import { LoginRegisterScreenComponent } from './login-register-screen/login-register-screen.component';
import { NacionalScreenComponent } from './nacional-screen/nacional-screen.component';
import { NewNoticiaScreenComponent } from './new-noticia-screen/new-noticia-screen.component';
import { NoticiaScreenComponent } from './noticia-screen/noticia-screen.component';
import { ContactoListComponent } from '../components/contacto-list/contacto-list.component';
import { CoversorComponent } from '../components/coversor/coversor.component';
import { WeatherComponent } from '../components/weather/weather.component';
import { QualifierComponent } from '../components/qualifier/qualifier.component';
import { CategoryComponent } from '../components/category/category.component';
import { CardComponent } from '../components/card/card.component';
import { ClockDateComponent } from '../components/clock-date/clock-date.component';
import { CarouselComponent } from '../components/carousel/carousel.component';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ContactProviderService } from '../core/providers/contact/contact-provider.service';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from 'src/environments/environment';
import { NoticiaListComponent } from '../components/noticia-list/noticia-list.component';
import { NoticiaDetailComponent } from '../components/noticia-detail/noticia-detail.component';
import { TopVisitasComponent } from '../components/top-visitas/top-visitas.component';
import { AlterNoticiaScreenComponent } from './alter-noticia-screen/alter-noticia-screen.component';


@NgModule({
  declarations: [
    ScreensComponent,
    HomeScreenComponent,
    Covid19ScreenComponent,
    NacionalScreenComponent,
    InternacionalScreenComponent,
    DeportesScreenComponent,
    LoginRegisterScreenComponent,
    NoticiaScreenComponent,
    NewNoticiaScreenComponent,
    CarouselComponent,
    ClockDateComponent,
    CardComponent,
    CategoryComponent,
    QualifierComponent,
    WeatherComponent,
    CoversorComponent,
    ContactoScreenComponent,
    ComentariosScreenComponent,
    ContactoListComponent,
    AdministratorScreenComponent,
    NavbarComponent,
    FooterScreenComponent,
    NoticiaListComponent,
    NoticiaDetailComponent,
    TopVisitasComponent,
    AlterNoticiaScreenComponent,
  ],
  imports: [
    CommonModule,
    ScreensRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    ContactProviderService
  ]
})
export class ScreensModule { }