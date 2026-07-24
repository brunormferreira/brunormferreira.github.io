import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
} from '@angular/core';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';
import { MatrixRainComponent } from './components/matrix-rain/matrix-rain.component';
import { NAV_SECTIONS } from './content/portfolio-content';

@Component({
  selector: 'app-root',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
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
        <span class="user">bruno</span><span class="at">&#64;</span
        ><span class="host">portfolio</span><span class="colon">:</span
        ><span class="path">~</span><span class="dollar">$</span>
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

    @if (showGoToTop) {
      <button
        type="button"
        class="go-top-btn"
        (click)="scrollToTop()"
        aria-label="Go to top"
      >
        ↑ GO TO TOP
      </button>
    }

    <footer class="terminal-footer">
      <p>
        <span class="text-muted">/* Built with Angular 19 & passion — </span>
        <span class="text-green">{{ currentYear }}</span>
        <span class="text-muted"> */</span>
      </p>
    </footer>
  `,
  styleUrl: './app.component.scss',
})
export class AppComponent {
  private readonly bottomThresholdPx = 220;

  readonly currentYear = new Date().getFullYear();

  readonly sections = NAV_SECTIONS;

  showGoToTop = false;

  @HostListener('window:scroll')
  onWindowScroll(): void {
    const scrollY = window.scrollY;
    const viewportBottom = scrollY + window.innerHeight;
    const pageBottom = document.documentElement.scrollHeight;

    this.showGoToTop =
      pageBottom - viewportBottom <= this.bottomThresholdPx && scrollY > 0;
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Keep current path/query but remove the section hash from the URL.
    if (window.location.hash) {
      window.history.replaceState(
        window.history.state,
        document.title,
        window.location.pathname + window.location.search,
      );
    }
  }
}
