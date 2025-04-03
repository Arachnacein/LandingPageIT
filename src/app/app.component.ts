import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { VideoComponent } from './components/video/video.component';
import { TechstackComponent } from './components/techstack/techstack.component';
import { StudiesComponent } from './components/studies/studies.component';
import { WorkComponent } from './components/work/work.component';
import { ProjectsComponent } from "./components/projects/projects.component";
import { EmailComponent } from './components/email/email.component';

@Component({
  selector: 'app-root',
  imports: [NavbarComponent, HomeComponent, VideoComponent, TechstackComponent, 
    StudiesComponent, WorkComponent, ProjectsComponent, EmailComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Jakub Łuka';
}
