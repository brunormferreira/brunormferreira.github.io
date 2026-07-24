import { Component } from '@angular/core';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

interface Project {
  hash: string;
  name: string;
  description: string;
  tech: string[];
  url: string;
  type: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ScrollRevealDirective],
  template: `
    <section id="projects" class="projects">
      <div class="section-cmd">
        <span class="prompt">bruno&#64;portfolio</span><span class="colon">:</span><span class="path">~/projects</span><span class="dollar">$</span>
        <span class="command"> git log --oneline --graph</span>
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
              <a [href]="project.url" target="_blank" rel="noopener noreferrer" class="project-link">
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
            <strong>Creator of javascripts-docs</strong> — Open-source JS documentation with contributions from recognized devs
          </li>
          <li>
            <span class="bullet">▸</span>
            <strong>Mentor at ilegra</strong> — Guided interns through code reviews, PR corrections, and best practices
          </li>
          <li>
            <span class="bullet">▸</span>
            <strong>Technical blog</strong> — Published articles on frontend architecture and JavaScript patterns
          </li>
        </ul>
      </div>
    </section>
  `,
  styles: [`
    @use '../../../styles/variables' as *;
    @use '../../../styles/mixins' as *;

    .projects {
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

    .project-list {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: $spacing-lg;
      margin-bottom: $spacing-3xl;
    }

    .project-card {
      border: 1px solid $border-color;
      border-radius: 4px;
      overflow: hidden;
      transition: all $transition-base;
      @include fade-in-up();

      &:hover {
        border-color: $text-primary;
        transform: translateY(-2px);
        box-shadow: 0 4px 20px rgba(0, 255, 65, 0.05);
      }
    }

    .project-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: $spacing-sm $spacing-md;
      background: $bg-tertiary;
      border-bottom: 1px solid $border-color;

      .hash {
        font-size: $font-size-xs;
        color: $text-accent;
      }

      .type-badge {
        font-size: 0.6rem;
        padding: 2px 6px;
        border: 1px solid $text-muted;
        border-radius: 2px;
        color: $text-muted;
        text-transform: uppercase;
      }
    }

    .project-body {
      padding: $spacing-md;
    }

    .project-name {
      font-size: $font-size-base;
      color: $text-secondary;
      font-weight: 600;
      margin-bottom: $spacing-sm;
    }

    .project-desc {
      font-size: $font-size-sm;
      color: $text-muted;
      line-height: 1.6;
      margin-bottom: $spacing-md;
    }

    .project-tech {
      display: flex;
      flex-wrap: wrap;
      gap: $spacing-xs;
    }

    .tech-tag {
      font-size: 0.65rem;
      padding: 2px 6px;
      background: rgba(0, 212, 255, 0.08);
      border: 1px solid rgba(0, 212, 255, 0.2);
      border-radius: 2px;
      color: $text-secondary;
    }

    .project-footer {
      padding: $spacing-sm $spacing-md;
      border-top: 1px solid $border-color;
    }

    .project-link {
      font-size: $font-size-xs;
      color: $text-muted;
      transition: color $transition-fast;
      display: inline-flex;
      align-items: center;
      gap: $spacing-xs;

      .link-icon {
        transition: transform $transition-fast;
      }

      &:hover {
        color: $text-primary;
        text-shadow: none;

        .link-icon {
          transform: translateX(3px);
        }
      }
    }

    .community-section {
      @include fade-in-up();
    }

    .section-sub-cmd {
      margin-bottom: $spacing-md;

      .command {
        color: $text-muted;
        font-size: $font-size-sm;
        font-style: italic;
      }
    }

    .community-list {
      list-style: none;
      padding: 0;

      li {
        display: flex;
        gap: $spacing-sm;
        font-size: $font-size-sm;
        color: $text-white;
        line-height: 2;
        padding-left: $spacing-sm;

        .bullet { color: $text-primary; flex-shrink: 0; }
        strong { color: $text-secondary; }
      }
    }
  `],
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      hash: 'a3f7c2d',
      name: 'javascripts-docs',
      description: 'Open-source JavaScript documentation with community contributions from recognized developers.',
      tech: ['JavaScript', 'Documentation', 'Open Source'],
      url: 'https://github.com/brunormferreira/javascripts-docs',
      type: 'OSS',
    },
    {
      hash: 'b8e1f4a',
      name: 'Krutch (Architecture)',
      description: 'Frontend architecture for BI product with AI capabilities. Angular 19, standalone, PWA, Clean Architecture.',
      tech: ['Angular 19', 'PWA', 'DDD', 'CQRS', 'Design Tokens'],
      url: 'https://github.com/brunormferreira',
      type: 'Enterprise',
    },
    {
      hash: 'c5d9e3b',
      name: 'AI Workflow Config',
      description: 'Custom GitHub Copilot instructions, agents, and skill files to enforce frontend architecture via AI.',
      tech: ['Copilot', 'Claude Code', 'Figma MCP', 'Vibe Coding'],
      url: 'https://github.com/brunormferreira',
      type: 'Tooling',
    },
    {
      hash: 'f2a8b1c',
      name: 'This Portfolio',
      description: 'Terminal-style portfolio built with Angular 19. Matrix rain, typing animations, CRT effects.',
      tech: ['Angular 19', 'SCSS', 'Canvas API', 'GitHub Pages'],
      url: 'https://github.com/brunormferreira/cv',
      type: 'Personal',
    },
  ];
}
