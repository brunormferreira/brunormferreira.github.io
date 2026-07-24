import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';
import {
  EXPERIENCES,
  SELECTED_CONTRIBUTIONS,
} from '../../content/portfolio-content';

@Component({
  selector: 'app-experience',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScrollRevealDirective],
  template: `
    <section id="experience" class="experience">
      <div class="section-cmd">
        <span class="prompt">bruno&#64;portfolio</span
        ><span class="colon">:</span><span class="path">~/experience</span
        ><span class="dollar">$</span>
        <span class="command"> cat experience.log | sort -r</span>
      </div>

      <div class="timeline">
        @for (exp of experiences; track exp.period; let i = $index) {
          <div class="timeline-item" appScrollReveal>
            <div class="timeline-marker">
              <div class="marker-dot" [class.active]="i === 0"></div>
              <div class="marker-line"></div>
            </div>

            <div class="timeline-content">
              <div class="timeline-header">
                <span class="period">{{ exp.period }}</span>
                <span class="badge" [class.current]="i === 0">{{
                  i === 0 ? 'CURRENT' : exp.type
                }}</span>
              </div>

              <div class="timeline-body">
                <div class="role-line">
                  <span class="prompt-sm">$</span>
                  <span class="role">{{ exp.role }}</span>
                  <span class="at-company">&#64; {{ exp.company }}</span>
                </div>
                <div class="project-line">
                  <span class="comment">// {{ exp.project }}</span>
                </div>

                <ul class="highlight-list">
                  @for (h of exp.highlights; track h) {
                    <li>
                      <span class="bullet">▸</span>
                      <span [innerHTML]="h"></span>
                    </li>
                  }
                </ul>
              </div>
            </div>
          </div>
        }
      </div>

      <div class="contrib-block" appScrollReveal>
        <div class="sub-cmd">
          <span class="command"
            >// Selected contributions (point engagements)</span
          >
        </div>

        <div class="contrib-grid">
          @for (item of selectedContributions; track item.context) {
            <article class="contrib-card">
              <p class="contrib-context">{{ item.context }}</p>
              <p class="contrib-text">{{ item.contribution }}</p>
              <p class="contrib-impact">
                <span class="label">impact:</span> {{ item.impact }}
              </p>
            </article>
          }
        </div>
      </div>
    </section>
  `,
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent {
  readonly experiences = EXPERIENCES;
  readonly selectedContributions = SELECTED_CONTRIBUTIONS;
}
