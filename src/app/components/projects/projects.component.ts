import { Component } from '@angular/core';
import { CarouselComponent } from '../carousel/carousel.component';

@Component({
  selector: 'app-projects',
  imports: [CarouselComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  scrollToSlide(carouselComponent: any, index: number, event: Event): void {
    event.preventDefault();
    carouselComponent.goToSlide(index);
    
    const el = document.getElementById('appCarouselPointer');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
  
  app = [
      'assets/carousel/app/budgetpage.png',
      'assets/carousel/app/statystyki.png',
      'assets/carousel/app/zleceniestaleniestandardowe.png',
      'assets/carousel/app/dodajwydatek.png',
      'assets/carousel/app/wplywy.png',
      'assets/carousel/app/konto.png',
      'assets/carousel/app/wzory.png',
      'assets/carousel/app/adminpanel.png',
      'assets/carousel/app/zleceniestale.png',
      'assets/carousel/app/login.png'
    ];
    master = [
      'assets/carousel/master/dodawaniezamowienia.png',
      'assets/carousel/master/magazyn.png',
      'assets/carousel/master/zamowienia.png',
      'assets/carousel/master/klienci.png'
    ];
}
