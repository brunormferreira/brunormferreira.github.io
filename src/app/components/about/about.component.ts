import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';
import { ABOUT_HIGHLIGHTS } from '../../content/portfolio-content';

@Component({
  selector: 'app-about',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScrollRevealDirective],
  template: `
    <section id="about" class="about">
      <div class="section-cmd">
        <span class="prompt">bruno&#64;portfolio</span
        ><span class="colon">:</span><span class="path">~/about</span
        ><span class="dollar">$</span>
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
              Senior Frontend Engineer with
              <span class="highlight">7+ years</span> delivering
            </p>
            <p class="about-text">
              <span class="line-num">2</span>
              enterprise-grade SPAs, PWAs, and design systems using
            </p>
            <p class="about-text">
              <span class="line-num">3</span>
              <span class="highlight-angular">Angular</span> and
              <span class="highlight-react">React</span>.
            </p>
            <p class="about-text">
              <span class="line-num">4</span>
            </p>
            <p class="about-text">
              <span class="line-num">5</span>
              Early adopter of
              <span class="highlight-ai">AI-assisted development</span> —
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
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  readonly highlights = ABOUT_HIGHLIGHTS;
}
