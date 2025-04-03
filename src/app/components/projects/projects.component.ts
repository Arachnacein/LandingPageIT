import { Component } from '@angular/core';
import { CarouselComponent } from '../carousel/carousel.component';

@Component({
  selector: 'app-projects',
  imports: [CarouselComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projekty = [
      'assets/carousel/eastsoft/pic1.png',
      'assets/carousel/eastsoft/pic2.png',
      'assets/carousel/eastsoft/pic3.png',
      'assets/carousel/eastsoft/pic4.png'
    ];
}
