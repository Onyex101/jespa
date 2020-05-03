import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  images = [
    {img: 'assets/Gallery/gal10.jpg'}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
