import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.scss']
})
export class SidenavListComponent implements OnInit {
  @Output() sidenavClose = new EventEmitter();
  @Output() modalEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  sendMessage() {
    this.modalEvent.emit();
  }

  public onSidenavClose = () => {
    this.sidenavClose.emit();
  }

}
