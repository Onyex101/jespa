import { Component, OnInit, ViewEncapsulation, AfterViewInit, Output, EventEmitter, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit, AfterViewInit {

  @Output() buttonEvent = new EventEmitter<string>();
  navbarOpen = false;
  public clicked = false;
  _el: any;
  closeResult: string;
  message = 'open dialog';

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }
  ngAfterViewInit() {

  }

  sendMessage() {
    this.buttonEvent.emit(this.message)
  }
  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }


  onClick(event): void {
    event.preventDefault();
    event.stopPropagation();
    this.clicked = true;
  }

  @HostListener('document:click', ['event'])
  private clickedOutside(event): void {
    if (this.clicked) {
      this._el.nativeElement.querySelector('.dropdown-menu').classList.toggle('show');
    }
  }

}
