import { CommonModule } from '@angular/common';
import {  Component, Input, OnInit, OnDestroy  } from '@angular/core';

@Component({
  selector: 'app-carousel',
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent implements OnInit, OnDestroy {
  @Input() slides: string[] = [];
  @Input() interval: number = 5000;

  currentIndex: number = 0;
  private timer: any;

  ngOnInit() {
    this.startAutoSlide();
  }

  ngOnDestroy() {
    clearInterval(this.timer);
  }

  startAutoSlide() {
    this.timer = setInterval(() => {
      this.nextSlide();
    }, this.interval);
  }

  prevIndex: number = 0;

  nextSlide() {
    this.prevIndex = this.currentIndex;
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
  }

  prevSlide() {
    this.prevIndex = this.currentIndex;
    this.currentIndex =
    (this.currentIndex - 1 + this.slides.length) % this.slides.length;
  }

  goToSlide(index: number) {
    this.prevIndex = this.currentIndex;
    this.currentIndex = index;
  }

}