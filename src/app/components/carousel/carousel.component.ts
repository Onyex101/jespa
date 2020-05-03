import { Component, ViewChild, OnInit } from '@angular/core';
import { SwiperOptions } from 'swiper';
import { SwiperComponent } from 'ngx-useful-swiper';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  @ViewChild('usefulSwiper', { static: false }) usefulSwiper: SwiperComponent;

  slideData = [
    {
      img: 'assets/Gallery/gal10.jpg',
    },
    {
      img: 'assets/Gallery/gal11.jpg',
    },
    {
      img: 'assets/Gallery/gal12.jpg',
    },
    {
      img: 'assets/Gallery/gal13.jpg',
    },
    {
      img: 'assets/Gallery/gal14.jpg',
    },
    {
      img: 'assets/Gallery/gal15.jpg',
    },
  ];

  config: SwiperOptions = {
    pagination: { el: '.swiper-pagination', clickable: true },
    autoHeight: true,
    allowTouchMove: true,
    autoplay: {
      delay: 6000,
      disableOnInteraction: true
    },
    breakpoints: {
      1024: {
        slidesPerView: 1
      },
      500: {
        slidesPerView: 1
      },
      400: {
        slidesPerView: 1
      },
      300: {
        slidesPerView: 1
      }
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    loop: true,
  };
  constructor() { }

  ngOnInit(): void {
  }

}
