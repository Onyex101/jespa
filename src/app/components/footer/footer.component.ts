import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  @Output() modalEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  sendMessage() {
    this.modalEvent.emit();
  }

}
