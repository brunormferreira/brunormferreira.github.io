import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { HeroComponent } from './sections/hero/hero.component';
import { AboutComponent } from './sections/about/about.component';
import { ExperienceComponent } from './sections/experience/experience.component';
import { SkillsComponent } from './sections/skills/skills.component';
import { ProjectsComponent } from './sections/projects/projects.component';
import { ContactComponent } from './sections/contact/contact.component';
import { MetaService } from '../../shared/services/meta.service';

@Component({
  selector: 'app-home-page',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    HeroComponent,
    AboutComponent,
    ExperienceComponent,
    SkillsComponent,
    ProjectsComponent,
    ContactComponent,
  ],
  template: `
    <main role="main">
      <app-hero />
      <app-about />
      <app-experience />
      <app-skills />
      <app-projects />
      <app-contact />
    </main>
  `,
})
export class HomePageComponent {
  private readonly metaService = inject(MetaService);

  constructor() {
    this.metaService.resetToDefaults();
  }
}
