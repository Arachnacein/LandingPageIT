import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { VideoComponent } from './components/video/video.component';
import { TechstackComponent } from './components/techstack/techstack.component';
import { StudiesComponent } from './components/studies/studies.component';
import { WorkComponent } from './components/work/work.component';

@Component({
  selector: 'app-root',
  imports: [NavbarComponent, HomeComponent, VideoComponent, TechstackComponent, StudiesComponent, WorkComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Jakub Łuka';
}
