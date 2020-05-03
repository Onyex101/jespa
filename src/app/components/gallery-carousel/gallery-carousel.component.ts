import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { SwiperOptions } from 'swiper';
import { SwiperComponent } from 'ngx-useful-swiper';

@Component({
  selector: 'app-gallery-carousel',
  templateUrl: './gallery-carousel.component.html',
  styleUrls: ['./gallery-carousel.component.scss']
})
export class GalleryCarouselComponent implements OnInit {

  @Input() imageData: any[];
  @ViewChild('usefulSwiper', { static: false }) usefulSwiper: SwiperComponent;
  imgags = [
    'assets/Gallery/gal10.jpg',
    'assets/Gallery/gal11.jpg',
    'assets/Gallery/gal12.jpg',
    'assets/Gallery/gal13.jpg',
    // 'assets/Gallery/gal14.jpg',
    // 'assets/Gallery/gal15.jpg',
    // 'assets/Gallery/gal16.jpg',
    // 'assets/Gallery/gal17.jpg',
    // 'assets/Gallery/gal18.jpg',
    // 'assets/Gallery/gal19.jpg',
    // 'assets/Gallery/gal20.jpg',
    // 'assets/Gallery/gal21.jpg',
    // 'assets/Gallery/gal22.jpg',
    // 'assets/Gallery/gal23.jpg',
    // 'assets/Gallery/gal24.jpg',
    // 'assets/Gallery/gal25.jpg',
    // 'assets/Gallery/gal26.jpg',
    // 'assets/Gallery/gal27.jpg',
    // 'assets/Gallery/gal28.jpg',
    // 'assets/Gallery/gal29.jpg',
    // 'assets/Gallery/gal30.jpg',
  ];
  slideData = [
    {
      id: 382,
      name: 'Metal bluetooth cyan',
    }, {
      id: 822,
      name: 'Avon',
    }, {
      id: 159,
      name: 'Infrastructures',
    }, {
      id: 424,
      name: 'Users Cotton',
    }, {
      id: 572,
      name: 'Haptic Oklahoma Jewelery',
    }, {
      id: 127,
      name: 'Circles Integration Street',
    }, {
      id: 1009,
      name: 'uniform Communications Tuna',
    }, {
      id: 619,
      name: 'North Carolina',
    }, {
      id: 716,
      name: 'Eyeballs Rubber',
    }, {
      id: 382,
      name: 'Nevada green unleash',
    }
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
        slidesPerView: 4
      },
      500: {
        slidesPerView: 3
      },
      400: {
        slidesPerView: 2
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
    spaceBetween: 30
  };

  constructor() { }

  ngOnInit(): void {
  }

  nextSlide() {
    this.usefulSwiper.swiper.slideNext();
  }

  previousSlide() {
    this.usefulSwiper.swiper.slidePrev();
  }

  slideToThis(index) {
    this.usefulSwiper.swiper.slideTo(index);
  }
}
