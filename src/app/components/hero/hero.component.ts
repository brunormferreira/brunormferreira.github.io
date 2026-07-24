import { Component } from '@angular/core';
import { TypingDirective } from '../../directives/typing.directive';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [TypingDirective],
  template: `
    <section id="hero" class="hero">
      <div class="hero-content">
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
          <a href="#experience" class="cta-cmd cta-secondary">> cat resume.log</a>
        </div>

        <div class="scroll-hint">
          <span class="text-muted">// scroll down</span>
          <span class="arrow">↓</span>
        </div>
      </div>
    </section>
  `,
  styles: [`
    @use '../../../styles/variables' as *;
    @use '../../../styles/mixins' as *;

    .hero {
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      padding-top: 60px;
    }

    .hero-content {
      text-align: center;
    }

    .ascii-art {
      margin-bottom: $spacing-xl;
      
      pre {
        font-size: 0.5rem;
        line-height: 1.1;
        color: $text-primary;
        opacity: 0.6;
        white-space: pre;
        overflow: hidden;

        @include mobile {
          font-size: 0.3rem;
        }

        @include desktop {
          font-size: 0.65rem;
        }
      }
    }

    .hero-meta {
      margin-bottom: $spacing-2xl;
    }

    .prompt-line {
      font-size: $font-size-sm;
      margin-bottom: $spacing-sm;
      
      .prompt { color: $text-primary; }
      .command { color: $text-white; margin-left: $spacing-sm; }
    }

    .hero-name {
      font-size: $font-size-2xl;
      font-weight: 700;
      color: $text-white;
      letter-spacing: -1px;
      margin-bottom: $spacing-sm;
      @include glow(#ffffff, 0.1);

      @include mobile {
        font-size: $font-size-xl;
      }
    }

    .hero-role {
      font-size: $font-size-md;
      color: $text-primary;

      .prefix {
        color: $text-muted;
      }

      .typed-text {
        color: $text-primary;
        @include glow($text-primary, 0.3);
      }
    }

    .hero-stats {
      display: flex;
      justify-content: center;
      gap: $spacing-2xl;
      margin-bottom: $spacing-2xl;
      padding: $spacing-lg 0;
      border-top: 1px solid $border-color;
      border-bottom: 1px solid $border-color;

      @include mobile {
        gap: $spacing-lg;
      }
    }

    .stat {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: $spacing-xs;

      .stat-value {
        font-size: $font-size-lg;
        font-weight: 700;
        color: $text-secondary;
      }

      .stat-label {
        font-size: $font-size-xs;
        color: $text-muted;
        text-transform: uppercase;
        letter-spacing: 1px;
      }
    }

    .hero-cta {
      display: flex;
      justify-content: center;
      gap: $spacing-lg;
      margin-bottom: $spacing-3xl;
      flex-wrap: wrap;
    }

    .cta-cmd {
      font-size: $font-size-sm;
      padding: $spacing-sm $spacing-lg;
      border: 1px solid $text-primary;
      color: $text-primary;
      border-radius: 2px;
      transition: all $transition-fast;

      &:hover {
        background: rgba(0, 255, 65, 0.1);
        box-shadow: $glow-green;
        text-shadow: none;
      }

      &.cta-secondary {
        border-color: $text-muted;
        color: $text-muted;

        &:hover {
          border-color: $text-secondary;
          color: $text-secondary;
          background: rgba(0, 212, 255, 0.05);
          box-shadow: $glow-cyan;
        }
      }
    }

    .scroll-hint {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: $spacing-sm;
      font-size: $font-size-xs;
      animation: bounce 2s infinite;
      
      .arrow {
        color: $text-primary;
        font-size: $font-size-base;
      }
    }

    @keyframes bounce {
      0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
      40% { transform: translateY(-6px); }
      60% { transform: translateY(-3px); }
    }
  `],
})
export class HeroComponent {
  roles = [
    'Senior Frontend Engineer',
    'Angular & React Specialist',
    'AI-First Developer',
    'Design System Architect',
    'Open to Remote',
  ];

  asciiName = `
 ██████╗ ██████╗ ██╗   ██╗███╗   ██╗ ██████╗ 
 ██╔══██╗██╔══██╗██║   ██║████╗  ██║██╔═══██╗
 ██████╔╝██████╔╝██║   ██║██╔██╗ ██║██║   ██║
 ██╔══██╗██╔══██╗██║   ██║██║╚██╗██║██║   ██║
 ██████╔╝██║  ██║╚██████╔╝██║ ╚████║╚██████╔╝
 ╚═════╝ ╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═══╝ ╚═════╝ 
  `.trim();
}
