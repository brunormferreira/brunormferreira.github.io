import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScrollRevealDirective } from '../../../../shared/directives/scroll-reveal.directive';
import { CONTACT_LINKS } from '../../../../content/portfolio-content';

@Component({
  selector: 'app-contact',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScrollRevealDirective],
  template: `
    <section id="contact" class="contact">
      <div class="section-cmd">
        <span class="prompt">bruno&#64;portfolio</span
        ><span class="colon">:</span><span class="path">~/contact</span
        ><span class="dollar">$</span>
        <span class="command"> ping bruno --send-message</span>
      </div>

      <div class="contact-content" appScrollReveal>
        <div class="contact-terminal">
          <div class="terminal-output">
            <p class="output-line">
              <span class="success">[SUCCESS]</span> Connection established.
            </p>
            <p class="output-line">
              <span class="info">[INFO]</span> Bruno is open to remote
              opportunities.
            </p>
            <p class="output-line">
              <span class="info">[INFO]</span> Preferred stack: Angular, React,
              AI-first workflow.
            </p>
            <p class="output-line">
              <span class="info">[INFO]</span> Available channels:
            </p>
          </div>

          <div class="contact-links">
            @for (link of links; track link.label) {
              <a
                [href]="link.url"
                target="_blank"
                rel="noopener noreferrer"
                class="contact-cmd"
              >
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
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  readonly links = CONTACT_LINKS;
}
