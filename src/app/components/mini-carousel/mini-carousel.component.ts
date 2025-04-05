import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface CarouselImage {
  url: string;
  isBlurred: boolean;
}

@Component({
  selector: 'app-mini-carousel',
  standalone: true,
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
    // Przekształcamy listę URL-i na obiekty z początkowym stanem blur
    this.carouselImages = this.images.map(url => ({
      url,
      isBlurred: this.blurred
    }));
  }

  get leftIndex(): number {
    return (this.currentIndex - 1 + this.carouselImages.length) % this.carouselImages.length;
  }

  get rightIndex(): number {
    return (this.currentIndex + 1) % this.carouselImages.length;
  }

  onImageClick(index: number): void {
    if (index === this.currentIndex) {
      // Kliknięcie w środkowe zdjęcie – toggle blur
      this.carouselImages[index].isBlurred = !this.carouselImages[index].isBlurred;
    } else {
      // Kliknięcie w boczne zdjęcie – obrót karuzeli
      this.currentIndex = index;
    }
  }
}