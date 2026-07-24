import { Component } from '@angular/core';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [ScrollRevealDirective],
  template: `
    <section id="about" class="about">
      <div class="section-cmd">
        <span class="prompt">bruno&#64;portfolio</span><span class="colon">:</span><span class="path">~/about</span><span class="dollar">$</span>
        <span class="command"> cat about.txt</span>
      </div>

      <div class="about-content" appScrollReveal>
        <div class="terminal-window">
          <div class="terminal-header">
            <span class="dot red"></span>
            <span class="dot yellow"></span>
            <span class="dot green"></span>
            <span class="terminal-title">about.txt</span>
          </div>
          <div class="terminal-body">
            <p class="about-text">
              <span class="line-num">1</span>
              Senior Frontend Engineer with <span class="highlight">7+ years</span> delivering
            </p>
            <p class="about-text">
              <span class="line-num">2</span>
              enterprise-grade SPAs, PWAs, and design systems using
            </p>
            <p class="about-text">
              <span class="line-num">3</span>
              <span class="highlight-angular">Angular</span> and <span class="highlight-react">React</span>.
            </p>
            <p class="about-text">
              <span class="line-num">4</span>
            </p>
            <p class="about-text">
              <span class="line-num">5</span>
              Early adopter of <span class="highlight-ai">AI-assisted development</span> —
            </p>
            <p class="about-text">
              <span class="line-num">6</span>
              leveraging GitHub Copilot, Claude Code, Figma MCP Agent,
            </p>
            <p class="about-text">
              <span class="line-num">7</span>
              and Vibe Coding to multiply productivity.
            </p>
            <p class="about-text">
              <span class="line-num">8</span>
            </p>
            <p class="about-text">
              <span class="line-num">9</span>
              Bilingual (PT/EN) with daily experience in
            </p>
            <p class="about-text">
              <span class="line-num">10</span>
              international distributed teams.
            </p>
          </div>
        </div>

        <div class="about-highlights">
          @for (item of highlights; track item.label) {
            <div class="highlight-card">
              <span class="highlight-icon">{{ item.icon }}</span>
              <span class="highlight-value">{{ item.value }}</span>
              <span class="highlight-label">{{ item.label }}</span>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  styles: [`
    @use '../../../styles/variables' as *;
    @use '../../../styles/mixins' as *;

    .about {
      padding-top: 80px;
    }

    .section-cmd {
      @include section-header();
      margin-bottom: $spacing-xl;

      .prompt { color: $text-primary; }
      .colon { color: $text-muted; }
      .path { color: $text-accent; }
      .dollar { color: $text-muted; }
      .command { color: $text-white; }
    }

    .about-content {
      @include fade-in-up();
    }

    .terminal-window {
      border: 1px solid $border-color;
      border-radius: 6px;
      overflow: hidden;
      margin-bottom: $spacing-2xl;
    }

    .terminal-header {
      background: $bg-tertiary;
      padding: $spacing-sm $spacing-md;
      display: flex;
      align-items: center;
      gap: $spacing-sm;
      border-bottom: 1px solid $border-color;
    }

    .dot {
      width: 10px;
      height: 10px;
      border-radius: 50%;

      &.red { background: #ff5f56; }
      &.yellow { background: #ffbd2e; }
      &.green { background: #27c93f; }
    }

    .terminal-title {
      color: $text-muted;
      font-size: $font-size-xs;
      margin-left: $spacing-sm;
    }

    .terminal-body {
      padding: $spacing-lg;
      background: $bg-card;
    }

    .about-text {
      font-size: $font-size-sm;
      line-height: 2;
      color: $text-white;
      display: flex;
      gap: $spacing-md;

      .line-num {
        color: $text-dim;
        min-width: 20px;
        text-align: right;
        user-select: none;
      }

      .highlight {
        color: $text-primary;
        font-weight: 600;
      }

      .highlight-angular {
        color: #dd0031;
        font-weight: 600;
      }

      .highlight-react {
        color: #61dafb;
        font-weight: 600;
      }

      .highlight-ai {
        color: $text-accent;
        font-weight: 600;
      }
    }

    .about-highlights {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
      gap: $spacing-md;
    }

    .highlight-card {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: $spacing-xs;
      padding: $spacing-lg $spacing-md;
      border: 1px solid $border-color;
      border-radius: 4px;
      transition: all $transition-base;

      &:hover {
        border-color: $text-primary;
        background: rgba(0, 255, 65, 0.02);
      }

      .highlight-icon {
        font-size: $font-size-lg;
      }

      .highlight-value {
        font-size: $font-size-md;
        font-weight: 700;
        color: $text-primary;
      }

      .highlight-label {
        font-size: $font-size-xs;
        color: $text-muted;
        text-transform: uppercase;
        letter-spacing: 0.5px;
      }
    }
  `],
})
export class AboutComponent {
  highlights = [
    { icon: '⚡', value: '7+', label: 'Years' },
    { icon: '🏢', value: '5+', label: 'Clients' },
    { icon: '🤖', value: 'AI', label: 'First' },
    { icon: '🌍', value: 'EN/PT', label: 'Bilingual' },
  ];
}
