import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  playgroundImgs: any;
  culdayImgs: any;
  sportsImgs: any;
  gradImgs: any;
  constructor() {
    this.allImages();
  }

  ngOnInit(): void {
  }

  allImages() {
    this.playgroundImgs = [
      { img: 'assets/Gallery/gal17.jpg' },
      { img: 'assets/Gallery/gal18.jpg' },
      { img: 'assets/Gallery/gal19.jpg' },
      { img: 'assets/Gallery/gal20.jpg' },
      { img: 'assets/Gallery/gal21.jpg' },
    ];

    this.culdayImgs = [
      { img: 'assets/Gallery/gal26.jpg' },
      { img: 'assets/Gallery/gal27.jpg' },
      { img: 'assets/Gallery/gal28.jpg' },
      { img: 'assets/Gallery/gal29.jpg' },
      { img: 'assets/Gallery/gal30.jpg' }
    ];

    this.sportsImgs = [
      { img: 'assets/Gallery/gal20.jpg' },
      { img: 'assets/Gallery/gal21.jpg' },
      { img: 'assets/Gallery/gal22.jpg' },
      { img: 'assets/Gallery/gal23.jpg' },
      { img: 'assets/Gallery/gal18.jpg' },
      { img: 'assets/Gallery/gal19.jpg' }
    ];

    this.gradImgs = [
      { img: 'assets/Gallery/gal15.jpg' },
      { img: 'assets/Gallery/gal14.jpg' },
      { img: 'assets/Gallery/gal13.jpg' },
      { img: 'assets/Gallery/gal12.jpg' },
      { img: 'assets/Gallery/gal11.jpg' },
      { img: 'assets/Gallery/gal10.jpg' },
    ];
  }

}
