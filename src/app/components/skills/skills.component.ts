import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';
import { SKILL_CATEGORIES } from '../../content/portfolio-content';

@Component({
  selector: 'app-skills',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScrollRevealDirective],
  template: `
    <section id="skills" class="skills">
      <div class="section-cmd">
        <span class="prompt">bruno&#64;portfolio</span
        ><span class="colon">:</span><span class="path">~/skills</span
        ><span class="dollar">$</span>
        <span class="command"> ls -la</span>
      </div>

      <div class="skills-grid">
        @for (category of categories; track category.name) {
          <div class="skill-category" appScrollReveal>
            <div class="category-header">
              <span class="dir-icon">📂</span>
              <span class="dir-name">{{ category.name }}/</span>
              <span class="dir-cmd text-muted">{{ category.command }}</span>
            </div>

            <div class="skill-list">
              @for (skill of category.skills; track skill.name) {
                <div class="skill-item">
                  <span class="skill-name">{{ skill.name }}</span>
                  <span class="skill-bar">
                    <span class="bar-fill">[{{ skill.bar }}]</span>
                    <span class="bar-percent">{{ skill.level }}%</span>
                  </span>
                </div>
              }
            </div>
          </div>
        }
      </div>
    </section>
  `,
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  readonly categories = SKILL_CATEGORIES;
}
