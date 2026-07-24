import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TypingDirective } from '../../../../shared/directives/typing.directive';
import {
  CV_DOWNLOAD_URL,
  HERO_ASCII_NAME,
  HERO_ROLES,
} from '../../../../content/portfolio-content';

@Component({
  selector: 'app-hero',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TypingDirective],
  template: `
    <section id="hero" class="hero">
      <div class="hero-content">
        <div class="hero-avatar-wrap">
          <img
            [src]="avatarUrl"
            alt="Bruno Ramires avatar"
            class="hero-avatar"
            loading="eager"
            decoding="async"
          />
        </div>

        <div class="ascii-art" aria-hidden="true">
          <pre>{{ asciiName }}</pre>
        </div>

        <div class="hero-meta">
          <div class="prompt-line">
            <span class="prompt">❯</span>
            <span class="command">whoami</span>
          </div>
          <h1 class="hero-name">Bruno Ramires</h1>
          <p class="hero-role">
            <span class="prefix">&gt; </span>
            <span
              [appTyping]="roles"
              [typingSpeed]="70"
              [deletingSpeed]="40"
              [pauseDuration]="2500"
              class="typed-text"
            ></span>
          </p>
        </div>

        <div class="hero-stats">
          <div class="stat">
            <span class="stat-value">7+</span>
            <span class="stat-label">years</span>
          </div>
          <div class="stat">
            <span class="stat-value">∞</span>
            <span class="stat-label">curiosity</span>
          </div>
          <div class="stat">
            <span class="stat-value">AI</span>
            <span class="stat-label">first</span>
          </div>
        </div>

        <div class="hero-cta">
          <a href="#contact" class="cta-cmd">> hire_me --remote</a>
          <a href="#experience" class="cta-cmd cta-secondary"
            >> cat resume.log</a
          >
          <a
            [href]="cvUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="cta-cmd cta-secondary"
            >> open cv.pdf</a
          >
        </div>

        <div class="scroll-hint">
          <span class="text-muted">// scroll down</span>
          <span class="arrow">↓</span>
        </div>
      </div>
    </section>
  `,
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  readonly roles = HERO_ROLES;
  readonly asciiName = HERO_ASCII_NAME;
  readonly cvUrl = CV_DOWNLOAD_URL;
  readonly avatarUrl = 'https://avatars.githubusercontent.com/u/35575092?v=4';
}
