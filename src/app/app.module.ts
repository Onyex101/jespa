import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { FooterComponent } from './components/footer/footer.component';
import { GalleryCarouselComponent } from './components/gallery-carousel/gallery-carousel.component';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalComponent } from './components/modal/modal.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SidenavListComponent } from './components/sidenav-list/sidenav-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    GalleryComponent,
    CarouselComponent,
    FooterComponent,
    GalleryCarouselComponent,
    HeaderComponent,
    ModalComponent,
    SidenavListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxUsefulSwiperModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ModalComponent]
})
export class AppModule { }
