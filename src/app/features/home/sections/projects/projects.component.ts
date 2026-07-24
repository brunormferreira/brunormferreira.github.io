import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScrollRevealDirective } from '../../../../shared/directives/scroll-reveal.directive';
import { PROJECTS } from '../../../../content/portfolio-content';

@Component({
  selector: 'app-projects',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScrollRevealDirective],
  template: `
    <section id="projects" class="projects">
      <div class="section-cmd">
        <span class="prompt">bruno&#64;portfolio</span
        ><span class="colon">:</span><span class="path">~/projects</span
        ><span class="dollar">$</span>
        <span class="command"> gh repo list --source --limit 5</span>
      </div>

      <div class="project-list">
        @for (project of projects; track project.hash) {
          <div class="project-card" appScrollReveal>
            <div class="project-header">
              <span class="hash">{{ project.hash }}</span>
              <span class="type-badge">{{ project.type }}</span>
            </div>
            <div class="project-body">
              <h3 class="project-name">{{ project.name }}</h3>
              <p class="project-desc">{{ project.description }}</p>
              <div class="project-tech">
                @for (t of project.tech; track t) {
                  <span class="tech-tag">{{ t }}</span>
                }
              </div>
            </div>
            <div class="project-footer">
              <a
                [href]="project.url"
                target="_blank"
                rel="noopener noreferrer"
                class="project-link"
              >
                <span class="link-icon">→</span> view source
              </a>
            </div>
          </div>
        }
      </div>

      <div class="community-section" appScrollReveal>
        <div class="section-sub-cmd">
          <span class="command">// Open Source & Community</span>
        </div>
        <ul class="community-list">
          <li>
            <span class="bullet">▸</span>
            <strong>Creator of javascripts-docs</strong> — Open-source JS
            documentation with contributions from recognized devs (including
            Felipe Fialho) and community contributors
          </li>
          <li>
            <span class="bullet">▸</span>
            <strong>Mentor at ilegra</strong> — Guided interns through code
            reviews, PR corrections, and best practices
          </li>
          <li>
            <span class="bullet">▸</span>
            <strong>Technical blog</strong> — Published articles on frontend
            architecture and JavaScript patterns
          </li>
        </ul>
      </div>
    </section>
  `,
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  readonly projects = PROJECTS;
}
