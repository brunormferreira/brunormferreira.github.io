import { Component } from '@angular/core';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

interface SkillCategory {
  name: string;
  command: string;
  skills: { name: string; level: number }[];
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [ScrollRevealDirective],
  template: `
    <section id="skills" class="skills">
      <div class="section-cmd">
        <span class="prompt">bruno&#64;portfolio</span><span class="colon">:</span><span class="path">~/skills</span><span class="dollar">$</span>
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
                    <span class="bar-fill">[{{ getBar(skill.level) }}]</span>
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
  styles: [`
    @use '../../../styles/variables' as *;
    @use '../../../styles/mixins' as *;

    .skills {
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

    .skills-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
      gap: $spacing-lg;

      @include mobile {
        grid-template-columns: 1fr;
      }
    }

    .skill-category {
      border: 1px solid $border-color;
      border-radius: 4px;
      overflow: hidden;
      @include fade-in-up();
      transition: border-color $transition-base;

      &:hover {
        border-color: $text-primary;
      }
    }

    .category-header {
      display: flex;
      align-items: center;
      gap: $spacing-sm;
      padding: $spacing-sm $spacing-md;
      background: $bg-tertiary;
      border-bottom: 1px solid $border-color;
      font-size: $font-size-sm;

      .dir-icon { font-size: $font-size-base; }
      .dir-name { color: $text-secondary; font-weight: 600; }
      .dir-cmd { font-size: $font-size-xs; margin-left: auto; }
    }

    .skill-list {
      padding: $spacing-md;
    }

    .skill-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: $spacing-xs 0;
      font-size: $font-size-sm;
      gap: $spacing-sm;

      .skill-name {
        color: $text-white;
        white-space: nowrap;
      }

      .skill-bar {
        display: flex;
        align-items: center;
        gap: $spacing-sm;
        flex-shrink: 0;

        .bar-fill {
          color: $text-primary;
          font-size: $font-size-xs;
          letter-spacing: -1px;
        }

        .bar-percent {
          color: $text-muted;
          font-size: $font-size-xs;
          min-width: 30px;
          text-align: right;
        }
      }
    }
  `],
})
export class SkillsComponent {
  categories: SkillCategory[] = [
    {
      name: 'AI & Tooling',
      command: '6 items',
      skills: [
        { name: 'GitHub Copilot', level: 95 },
        { name: 'Claude Code', level: 90 },
        { name: 'Cursor', level: 85 },
        { name: 'Figma MCP Agent', level: 90 },
        { name: 'Vibe Coding', level: 92 },
        { name: 'Prompt Engineering', level: 88 },
      ],
    },
    {
      name: 'Angular',
      command: '7 items',
      skills: [
        { name: 'Standalone Components', level: 95 },
        { name: 'RxJS', level: 92 },
        { name: 'NgRx / Signals', level: 88 },
        { name: 'Angular Material', level: 90 },
        { name: 'PrimeNG', level: 85 },
        { name: 'CDK', level: 87 },
        { name: 'Angular 19', level: 95 },
      ],
    },
    {
      name: 'React',
      command: '6 items',
      skills: [
        { name: 'React 18+', level: 88 },
        { name: 'Next.js', level: 82 },
        { name: 'Redux Toolkit', level: 85 },
        { name: 'Zustand', level: 83 },
        { name: 'React Query', level: 85 },
        { name: 'React Hook Form', level: 87 },
      ],
    },
    {
      name: 'Styling',
      command: '7 items',
      skills: [
        { name: 'SCSS/Sass', level: 95 },
        { name: 'Tailwind CSS', level: 92 },
        { name: 'Design Tokens', level: 90 },
        { name: 'Styled Components', level: 85 },
        { name: 'CSS Custom Props', level: 93 },
        { name: 'BEM', level: 90 },
        { name: 'Atomic Design', level: 88 },
      ],
    },
    {
      name: 'Testing',
      command: '6 items',
      skills: [
        { name: 'Jest', level: 92 },
        { name: 'Cypress', level: 88 },
        { name: 'Playwright', level: 85 },
        { name: 'Testing Library', level: 90 },
        { name: 'Jasmine', level: 88 },
        { name: 'Storybook', level: 83 },
      ],
    },
    {
      name: 'Infra & Quality',
      command: '8 items',
      skills: [
        { name: 'Webpack / Vite', level: 88 },
        { name: 'Nx', level: 82 },
        { name: 'Docker', level: 78 },
        { name: 'GitHub Actions', level: 90 },
        { name: 'GitLab CI', level: 85 },
        { name: 'ESLint', level: 93 },
        { name: 'SonarQube', level: 85 },
        { name: 'Husky + Commitlint', level: 90 },
      ],
    },
  ];

  getBar(level: number): string {
    const filled = Math.round(level / 10);
    const empty = 10 - filled;
    return '█'.repeat(filled) + '░'.repeat(empty);
  }
}
