import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel-feed',
  templateUrl: './carousel-feed.component.html',
  styleUrls: ['./carousel-feed.component.css']
})
export class CarouselFeedComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.scroll(0, 0)
  }

}
