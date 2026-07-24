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

    <header class="site-header">
      <nav class="terminal-nav">
        <a routerLink="/" class="nav-brand" (click)="closeMobileMenu()">
          <span class="user">bruno</span><span class="at">&#64;</span
          ><span class="host">portfolio</span>
        </a>

        <button
          type="button"
          class="hamburger"
          [class.is-active]="mobileMenuOpen"
          (click)="toggleMobileMenu()"
          [attr.aria-expanded]="mobileMenuOpen"
          aria-controls="nav-menu"
          aria-label="Toggle menu"
        >
          <span class="hamburger-box">
            <span class="hamburger-inner"></span>
          </span>
        </button>

        <ul id="nav-menu" class="nav-menu" [class.is-open]="mobileMenuOpen">
          <li>
            <a
              routerLink="/"
              routerLinkActive="is-active"
              [routerLinkActiveOptions]="{ exact: true }"
              class="nav-link"
              (click)="closeMobileMenu()"
            >
              cd ~
            </a>
          </li>
          @for (section of sections; track section.id) {
            <li>
              <a
                routerLink="/"
                [fragment]="section.id"
                class="nav-link"
                (click)="closeMobileMenu()"
              >
                {{ section.cmd }}
              </a>
            </li>
          }
          <li>
            <a
              routerLink="/posts"
              routerLinkActive="is-active"
              class="nav-link nav-link--highlight"
              (click)="closeMobileMenu()"
            >
              ls posts/
            </a>
          </li>
        </ul>
      </nav>
    </header>

    @if (mobileMenuOpen) {
      <div class="nav-backdrop" (click)="closeMobileMenu()"></div>
    }

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
  mobileMenuOpen = false;

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

  toggleMobileMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  closeMobileMenu(): void {
    this.mobileMenuOpen = false;
  }
}
