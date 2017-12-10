import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule, appRoutingProviders} from './app.routes';

// Sections
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { IntroductionComponent } from './components/introduction/introduction.component';
import { OverviewComponent } from './components/overview/overview.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { GridComponent } from './components/grid/grid.component';
import { ReflectionComponent } from './components/reflection/reflection.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { CarouselComponent } from './components/carousel/carousel.component';


@NgModule({
  declarations: [
    AppComponent,
    appRoutingProviders,
    NavbarComponent,
    HeaderComponent,
    IntroductionComponent,
    OverviewComponent,
    TimelineComponent,
    GridComponent,
    ReflectionComponent,
    ContactComponent,
    FooterComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
