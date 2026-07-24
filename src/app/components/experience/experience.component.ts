import { Component } from '@angular/core';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

interface Experience {
  period: string;
  role: string;
  company: string;
  type: string;
  project: string;
  highlights: string[];
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [ScrollRevealDirective],
  template: `
    <section id="experience" class="experience">
      <div class="section-cmd">
        <span class="prompt">bruno&#64;portfolio</span><span class="colon">:</span><span class="path">~/experience</span><span class="dollar">$</span>
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
                <span class="badge" [class.current]="i === 0">{{ i === 0 ? 'CURRENT' : exp.type }}</span>
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
    </section>
  `,
  styles: [`
    @use '../../../styles/variables' as *;
    @use '../../../styles/mixins' as *;

    .experience {
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

    .timeline {
      position: relative;
    }

    .timeline-item {
      display: flex;
      gap: $spacing-lg;
      margin-bottom: $spacing-2xl;
      @include fade-in-up();

      @include mobile {
        gap: $spacing-md;
      }
    }

    .timeline-marker {
      display: flex;
      flex-direction: column;
      align-items: center;
      flex-shrink: 0;

      .marker-dot {
        width: 12px;
        height: 12px;
        border-radius: 50%;
        border: 2px solid $text-muted;
        background: $bg-primary;
        transition: all $transition-base;

        &.active {
          border-color: $text-primary;
          background: $text-primary;
          box-shadow: $glow-green;
        }
      }

      .marker-line {
        flex: 1;
        width: 1px;
        background: $border-color;
        margin-top: $spacing-sm;
      }
    }

    .timeline-content {
      flex: 1;
      border: 1px solid $border-color;
      border-radius: 4px;
      overflow: hidden;
      transition: border-color $transition-base;

      &:hover {
        border-color: $text-primary;
      }
    }

    .timeline-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: $spacing-sm $spacing-md;
      background: $bg-tertiary;
      border-bottom: 1px solid $border-color;

      .period {
        font-size: $font-size-xs;
        color: $text-secondary;
      }

      .badge {
        font-size: 0.6rem;
        padding: 2px 6px;
        border: 1px solid $text-muted;
        border-radius: 2px;
        color: $text-muted;
        text-transform: uppercase;
        letter-spacing: 0.5px;

        &.current {
          border-color: $text-primary;
          color: $text-primary;
          background: rgba(0, 255, 65, 0.1);
        }
      }
    }

    .timeline-body {
      padding: $spacing-md;
    }

    .role-line {
      margin-bottom: $spacing-xs;

      .prompt-sm {
        color: $text-primary;
        margin-right: $spacing-sm;
      }

      .role {
        color: $text-white;
        font-weight: 600;
      }

      .at-company {
        color: $text-secondary;
      }
    }

    .project-line {
      margin-bottom: $spacing-md;

      .comment {
        font-size: $font-size-xs;
        color: $text-muted;
        font-style: italic;
      }
    }

    .highlight-list {
      list-style: none;
      padding: 0;

      li {
        display: flex;
        gap: $spacing-sm;
        font-size: $font-size-sm;
        color: $text-white;
        line-height: 1.8;
        padding-left: $spacing-sm;

        .bullet {
          color: $text-primary;
          flex-shrink: 0;
        }
      }
    }
  `],
})
export class ExperienceComponent {
  experiences: Experience[] = [
    {
      period: 'Jan 2026 – Present',
      role: 'Software Developer',
      company: 'ilegra',
      type: 'Remote',
      project: 'Krutch — BI product with AI capabilities for sales teams',
      highlights: [
        'Defined frontend architecture from scratch (<strong>Angular 19</strong>, standalone, PWA, Clean Architecture + DDD/CQRS)',
        'Built token-based design system with light/dark/high-contrast theming',
        'Integrated <strong>Figma MCP Agent</strong> for automated design-to-code workflows',
        'Configured <strong>GitHub Copilot ecosystem</strong> (custom instructions, agents, skill files)',
        'Applied <strong>Vibe Coding</strong> — rapid prototyping with Copilot Chat + Claude Code',
      ],
    },
    {
      period: 'Jun 2025 – Dec 2025',
      role: 'Software Developer',
      company: 'ilegra',
      type: 'Remote',
      project: 'Thomson Reuters — CPV (Cross Partner Visibility) – Catalyst Team',
      highlights: [
        'Architected project from zero using <strong>Saffron design system</strong>',
        'Achieved <strong>100% unit test coverage</strong>; WCAG accessibility compliance',
        'Used Copilot Chat and Agents for test generation, refactoring, and features',
        'English-speaking international environment',
      ],
    },
    {
      period: 'Dec 2021 – Jun 2025',
      role: 'Software Developer',
      company: 'ilegra',
      type: 'Remote',
      project: 'Thomson Reuters — Legacy Modernization (3.5 years)',
      highlights: [
        'Modernized legacy frontend systems with <strong>Angular ecosystem</strong>',
        'Built code generators using <strong>Visitor Pattern</strong> (JSON → code pipeline)',
        'Pioneered AI adoption, creating Copilot usage guidelines for legacy codebases',
        'Comprehensive unit testing with Jest',
      ],
    },
    {
      period: 'Nov 2020 – Dec 2021',
      role: 'Software Developer PL',
      company: 'ilegra',
      type: 'Hybrid',
      project: 'Banco Agibank — Portal Corban',
      highlights: [
        'Built financial features with <strong>React</strong>, design systems, and third-party libraries',
        'Led frontend feature definition; prototyped in Figma based on UX principles',
        'Scrum/Kanban in cross-functional teams',
      ],
    },
    {
      period: 'Apr 2019 – Nov 2020',
      role: 'Software Developer Intern',
      company: 'ilegra',
      type: 'On-site',
      project: 'Multiple projects — React, Vue.js, Angular',
      highlights: [
        'Worked across React, Vue.js, and Angular on multiple projects',
        'Financial project (Acerta Promotora): React + custom design system',
        'Unit tests (Jest) and integration tests (Cypress)',
      ],
    },
  ];
}
