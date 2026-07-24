import { Component } from '@angular/core';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ScrollRevealDirective],
  template: `
    <section id="contact" class="contact">
      <div class="section-cmd">
        <span class="prompt">bruno&#64;portfolio</span><span class="colon">:</span><span class="path">~/contact</span><span class="dollar">$</span>
        <span class="command"> ping bruno --send-message</span>
      </div>

      <div class="contact-content" appScrollReveal>
        <div class="contact-terminal">
          <div class="terminal-output">
            <p class="output-line"><span class="success">[SUCCESS]</span> Connection established.</p>
            <p class="output-line"><span class="info">[INFO]</span> Bruno is open to remote opportunities.</p>
            <p class="output-line"><span class="info">[INFO]</span> Preferred stack: Angular, React, AI-first workflow.</p>
            <p class="output-line"><span class="info">[INFO]</span> Available channels:</p>
          </div>

          <div class="contact-links">
            @for (link of links; track link.label) {
              <a [href]="link.url" target="_blank" rel="noopener noreferrer" class="contact-cmd">
                <span class="cmd-prefix">$</span>
                <span class="cmd-action">{{ link.command }}</span>
                <span class="cmd-arrow">→</span>
                <span class="cmd-value">{{ link.label }}</span>
              </a>
            }
          </div>

          <div class="terminal-cursor">
            <span class="prompt-end">bruno&#64;portfolio:~$</span>
            <span class="cursor-blink">█</span>
          </div>
        </div>

        <div class="contact-cta">
          <p class="cta-text">
            <span class="comment">// Let's build something great together</span>
          </p>
        </div>
      </div>
    </section>
  `,
  styles: [`
    @use '../../../styles/variables' as *;
    @use '../../../styles/mixins' as *;

    .contact {
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

    .contact-content {
      @include fade-in-up();
    }

    .contact-terminal {
      border: 1px solid $border-color;
      border-radius: 4px;
      padding: $spacing-xl;
      background: $bg-card;
      margin-bottom: $spacing-xl;
    }

    .terminal-output {
      margin-bottom: $spacing-xl;

      .output-line {
        font-size: $font-size-sm;
        color: $text-white;
        line-height: 2;

        .success {
          color: $text-primary;
          font-weight: 600;
        }

        .info {
          color: $text-secondary;
        }
      }
    }

    .contact-links {
      display: flex;
      flex-direction: column;
      gap: $spacing-sm;
      margin-bottom: $spacing-xl;
    }

    .contact-cmd {
      display: flex;
      align-items: center;
      gap: $spacing-sm;
      padding: $spacing-sm $spacing-md;
      border: 1px solid transparent;
      border-radius: 2px;
      font-size: $font-size-sm;
      transition: all $transition-fast;

      &:hover {
        border-color: $text-primary;
        background: rgba(0, 255, 65, 0.03);
        text-shadow: none;

        .cmd-value {
          color: $text-primary;
        }
      }

      .cmd-prefix {
        color: $text-primary;
      }

      .cmd-action {
        color: $text-white;
      }

      .cmd-arrow {
        color: $text-muted;
      }

      .cmd-value {
        color: $text-secondary;
        transition: color $transition-fast;
      }
    }

    .terminal-cursor {
      display: flex;
      align-items: center;
      gap: $spacing-sm;
      font-size: $font-size-sm;

      .prompt-end {
        color: $text-muted;
      }

      .cursor-blink {
        color: $text-primary;
        animation: blink 1s step-end infinite;
      }
    }

    @keyframes blink {
      0%, 100% { opacity: 1; }
      50% { opacity: 0; }
    }

    .contact-cta {
      text-align: center;

      .cta-text {
        .comment {
          color: $text-muted;
          font-style: italic;
          font-size: $font-size-sm;
        }
      }
    }
  `],
})
export class ContactComponent {
  links = [
    {
      command: 'open linkedin',
      label: 'linkedin.com/in/bruno-ramires',
      url: 'https://www.linkedin.com/in/bruno-ramires-80395517b/',
    },
    {
      command: 'open github',
      label: 'github.com/brunormferreira',
      url: 'https://github.com/brunormferreira',
    },
    {
      command: 'mailto',
      label: 'brunormferreira@hotmail.com',
      url: 'mailto:brunormferreira@hotmail.com',
    },
    {
      command: 'call',
      label: '+55 51 9 8946-7135',
      url: 'tel:+5551989467135',
    },
  ];
}
