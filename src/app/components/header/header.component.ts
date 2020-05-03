import { Component, OnInit, ViewEncapsulation, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {

  @Output() modalEvent = new EventEmitter();
  @Output() public sidenavToggle = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  sendMessage() {
    this.modalEvent.emit();
  }

  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }
}
