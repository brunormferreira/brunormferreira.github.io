import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
} from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatrixRainComponent } from './layout/matrix-rain/matrix-rain.component';
import { NAV_SECTIONS } from './content/portfolio-content';

@Component({
  selector: 'app-root',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterModule, MatrixRainComponent],
  template: `
    <app-matrix-rain />

    <nav class="terminal-nav">
      <div class="nav-prompt">
        <span class="user">bruno</span><span class="at">&#64;</span
        ><span class="host">portfolio</span><span class="colon">:</span
        ><span class="path">~</span><span class="dollar">$</span>
      </div>
      <div class="nav-links">
        <a
          routerLink="/"
          routerLinkActive="is-active"
          [routerLinkActiveOptions]="{ exact: true }"
          class="nav-cmd"
        >
          cd ~
        </a>

        @for (section of sections; track section.id) {
          <a routerLink="/" [fragment]="section.id" class="nav-cmd">
            {{ section.cmd }}
          </a>
        }

        <a routerLink="/posts" routerLinkActive="is-active" class="nav-cmd">
          ls posts/
        </a>
      </div>
    </nav>

    <router-outlet />

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

    if (window.location.hash) {
      window.history.replaceState(
        window.history.state,
        document.title,
        window.location.pathname + window.location.search,
      );
    }
  }
}
