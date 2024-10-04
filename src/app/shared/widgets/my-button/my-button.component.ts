import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-my-button',
  templateUrl: './my-button.component.html',
  styleUrls: ['./my-button.component.css']
})
export class MyButtonComponent implements OnInit {

  @Input() btnText: string = '';
  @Input() btnClass: string = '';

  @Output() onClick = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }
  btnClicked() {
    debugger;
    this.onClick.emit('Hii');
  }

}
