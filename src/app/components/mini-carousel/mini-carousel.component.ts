import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface CarouselImage {
  url: string;
  isBlurred: boolean;
  orientation: 'landscape' | 'portrait';
}

@Component({
  selector: 'app-mini-carousel',
  imports: [CommonModule],
  templateUrl: './mini-carousel.component.html',
  styleUrls: ['./mini-carousel.component.scss']
})
export class MiniCarouselComponent implements OnInit {
  @Input() images: string[] = [];
  @Input() blurred: boolean = false;

  carouselImages: CarouselImage[] = [];
  currentIndex = 0;

  ngOnInit(): void {
    this.carouselImages = this.images.map(url => ({
      url,
      isBlurred: this.blurred,
      orientation: 'portrait'
    }));

    this.carouselImages.forEach(img => {
      const image = new Image();
      image.src = img.url;
      image.onload = () => {
        img.orientation = image.naturalWidth >= image.naturalHeight ? 'landscape' : 'portrait';
      };
    });
  }

  get leftIndex(): number {
    return (this.currentIndex - 1 + this.carouselImages.length) % this.carouselImages.length;
  }

  get rightIndex(): number {
    return (this.currentIndex + 1) % this.carouselImages.length;
  }

  onImageClick(index: number): void {
    if (index === this.currentIndex) {
      if (this.carouselImages[index].isBlurred) {
        this.carouselImages[index].isBlurred = false;
      }
    } else {
      this.currentIndex = index;
    }
  }
  
}