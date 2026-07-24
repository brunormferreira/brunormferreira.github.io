import { Component } from '@angular/core';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';
import { MatrixRainComponent } from './components/matrix-rain/matrix-rain.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeroComponent,
    AboutComponent,
    ExperienceComponent,
    SkillsComponent,
    ProjectsComponent,
    ContactComponent,
    MatrixRainComponent,
  ],
  template: `
    <app-matrix-rain />

    <nav class="terminal-nav">
      <div class="nav-prompt">
        <span class="user">bruno</span><span class="at">&#64;</span><span class="host">portfolio</span><span class="colon">:</span><span class="path">~</span><span class="dollar">$</span>
      </div>
      <div class="nav-links">
        @for (section of sections; track section.id) {
          <a [href]="'#' + section.id" class="nav-cmd">{{ section.cmd }}</a>
        }
      </div>
    </nav>

    <main>
      <app-hero />
      <app-about />
      <app-experience />
      <app-skills />
      <app-projects />
      <app-contact />
    </main>

    <footer class="terminal-footer">
      <p>
        <span class="text-muted">/* Built with Angular 19 & passion — </span>
        <span class="text-green">{{ currentYear }}</span>
        <span class="text-muted"> */</span>
      </p>
    </footer>
  `,
  styles: [`
    @use '../styles/variables' as *;
    @use '../styles/mixins' as *;

    :host {
      display: block;
    }

    .terminal-nav {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: $z-nav;
      background: rgba($bg-primary, 0.92);
      backdrop-filter: blur(8px);
      border-bottom: 1px solid $border-color;
      padding: $spacing-sm $spacing-xl;
      display: flex;
      align-items: center;
      gap: $spacing-lg;

      @include mobile {
        flex-direction: column;
        align-items: flex-start;
        gap: $spacing-sm;
        padding: $spacing-sm $spacing-md;
      }
    }

    .nav-prompt {
      font-size: $font-size-sm;
      white-space: nowrap;

      .user { color: $text-primary; }
      .at { color: $text-muted; }
      .host { color: $text-secondary; }
      .colon { color: $text-muted; }
      .path { color: $text-accent; }
      .dollar { color: $text-muted; margin-left: 2px; }
    }

    .nav-links {
      display: flex;
      gap: $spacing-md;
      flex-wrap: wrap;
    }

    .nav-cmd {
      font-size: $font-size-xs;
      color: $text-muted;
      padding: $spacing-xs $spacing-sm;
      border: 1px solid transparent;
      border-radius: 2px;
      transition: all $transition-fast;

      &:hover {
        color: $text-primary;
        border-color: $text-primary;
        background: rgba(0, 255, 65, 0.05);
        text-shadow: none;
      }
    }

    .terminal-footer {
      text-align: center;
      padding: $spacing-xl;
      font-size: $font-size-xs;
      border-top: 1px solid $border-color;
    }
  `],
})
export class AppComponent {
  currentYear = new Date().getFullYear();

  sections = [
    { id: 'hero', cmd: './about' },
    { id: 'experience', cmd: 'cat experience.log' },
    { id: 'skills', cmd: 'ls skills/' },
    { id: 'projects', cmd: 'git log' },
    { id: 'contact', cmd: 'ping bruno' },
  ];
}
