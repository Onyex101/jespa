import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  images: any[];
  constructor() {
    this.images = [
      {
        img: 'assets/Gallery/facility1.jpg',
      },
      {
        img: 'assets/Gallery/facility2.jpg',
      },
      {
        img: 'assets/Gallery/facility3.jpg'
      },
      {
        img: 'assets/Gallery/facility4.jpg',
      }
    ];
  }

  ngOnInit(): void {
  }

}
