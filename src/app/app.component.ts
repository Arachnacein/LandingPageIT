import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { VideoComponent } from './components/video/video.component';

@Component({
  selector: 'app-root',
  imports: [NavbarComponent, HomeComponent, VideoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'LandingPageIT';
}
