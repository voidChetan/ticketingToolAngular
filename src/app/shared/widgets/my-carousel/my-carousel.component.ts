import { Component, OnInit ,Input } from '@angular/core';

@Component({
  selector: 'app-my-carousel',
  templateUrl: './my-carousel.component.html',
  styleUrls: ['./my-carousel.component.css']
})
export class MyCarouselComponent implements OnInit {

  @Input() imagesArray: any[] = [];
  @Input() showIcons:boolean= true;
  constructor() { }

  ngOnInit(): void {
  }

}
