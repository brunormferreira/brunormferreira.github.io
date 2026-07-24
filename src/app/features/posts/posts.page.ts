import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  computed,
  inject,
  signal,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';
import { POSTS } from '../../content/generated/posts.generated';
import { Locale, Post } from '../../content/posts.models';
import { LocaleService } from '../../shared/services/locale.service';
import { MetaService } from '../../shared/services/meta.service';

@Component({
  selector: 'app-posts-page',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScrollRevealDirective],
  template: `
    <section id="posts" class="posts">
      <div class="section-cmd">
        <span class="prompt">bruno&#64;dev</span
        ><span class="colon">:</span><span class="path">~/posts</span
        ><span class="dollar">$</span>
        <span class="command"> cat index.md | grep --tag</span>
      </div>

      <div class="filters" appScrollReveal role="group" aria-label="Posts filters">
        <div class="locale-toggle" role="group" aria-label="Language selection">
          <button
            type="button"
            class="locale-btn"
            [class.active]="locale() === 'pt-br'"
            (click)="setLocale('pt-br')"
            [attr.aria-pressed]="locale() === 'pt-br'"
            aria-label="Switch to Portuguese"
          >
            PT
          </button>
          <span class="locale-divider" aria-hidden="true">|</span>
          <button
            type="button"
            class="locale-btn"
            [class.active]="locale() === 'en-us'"
            (click)="setLocale('en-us')"
            [attr.aria-pressed]="locale() === 'en-us'"
            aria-label="Switch to English"
          >
            EN
          </button>
        </div>

        <button
          type="button"
          class="filter-btn"
          [class.active]="activeFilter() === 'all'"
          (click)="setFilter('all')"
          [attr.aria-pressed]="activeFilter() === 'all'"
        >
          all
        </button>

        @for (option of filterOptions(); track option) {
          <button
            type="button"
            class="filter-btn"
            [class.active]="activeFilter() === option"
            (click)="setFilter(option)"
            [attr.aria-pressed]="activeFilter() === option"
          >
            {{ option }}
          </button>
        }
      </div>

      @if (filteredPosts().length > 0) {
        <div class="post-list">
          @for (post of filteredPosts(); track post.slug) {
            <article class="post-card" appScrollReveal>
              <div class="post-header">
                <time class="post-date" [attr.datetime]="post.publishedAt">
                  {{ formatDayMonth(post.publishedAt) }}
                </time>
                <span class="post-category">{{ post.category }}</span>
              </div>

              <h3 class="post-title">{{ post.title }}</h3>
              <p class="post-desc">{{ post.description }}</p>

              @if (post.tags.length > 0) {
                <div class="post-tags">
                  @for (tag of post.tags; track tag) {
                    <span class="tag">#{{ tag }}</span>
                  }
                </div>
              }

              <a
                class="post-link"
                [attr.href]="getPostHref(post.slug)"
                (click)="openPost($event, post.slug)"
              >
                open post →
              </a>
            </article>
          }
        </div>
      } @else {
        <div class="empty-state" appScrollReveal>
          No posts found for this filter.
        </div>
      }
    </section>
  `,
  styleUrl: './posts.page.scss',
})
export class PostsPageComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly destroyRef = inject(DestroyRef);
  private readonly localeService = inject(LocaleService);
  private readonly metaService = inject(MetaService);

  readonly locale = this.localeService.locale;

  private readonly localePosts = computed(() =>
    POSTS.filter((p) => p.locale === this.locale()),
  );

  readonly activeFilter = signal('all');

  readonly filterOptions = computed(() =>
    this.buildFilterOptions(this.localePosts()),
  );

  readonly filteredPosts = computed(() => {
    const posts = this.localePosts();
    const filter = this.activeFilter();

    if (!filter || filter === 'all') return posts;

    const normalized = filter.toLowerCase();
    return posts.filter((post) => this.matchesFilter(post, normalized));
  });

  constructor() {
    // Set meta tags for posts list page
    this.metaService.updateMeta({
      title: 'Posts',
      description:
        'Technical articles on Angular, React, frontend architecture, and developer experience.',
      url: '/posts',
    });

    this.route.queryParamMap
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((params) => {
        const nextFilter = params.get('tag') ?? 'all';
        this.activeFilter.set(
          this.resolveFilterLabel(nextFilter) ?? nextFilter,
        );
      });
  }

  setLocale(locale: Locale): void {
    this.localeService.setLocale(locale);
    // Reset filter when switching locale to avoid stale tag selections
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { tag: null },
      queryParamsHandling: 'merge',
    });
  }

  setFilter(nextFilter: string): void {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { tag: nextFilter === 'all' ? null : nextFilter },
      queryParamsHandling: 'merge',
    });
  }

  getPostHref(slug: string): string {
    const postUrlTree = this.router.createUrlTree(['/posts', slug]);
    return this.router.serializeUrl(postUrlTree);
  }

  openPost(event: MouseEvent, slug: string): void {
    event.preventDefault();
    this.router.navigate(['/posts', slug]);
  }

  formatDayMonth(dateIso: string): string {
    const parsed = new Date(dateIso);
    return new Intl.DateTimeFormat('pt-BR', {
      day: '2-digit',
      month: '2-digit',
    }).format(parsed);
  }

  private resolveFilterLabel(raw: string): string | null {
    const normalized = raw.trim().toLowerCase();
    if (!normalized || normalized === 'all') return 'all';
    return (
      this.filterOptions().find(
        (option) => option.toLowerCase() === normalized,
      ) ?? null
    );
  }

  private buildFilterOptions(
    posts: ReadonlyArray<Post>,
  ): ReadonlyArray<string> {
    const options = new Set<string>();

    for (const post of posts) {
      options.add(post.category);
      for (const tag of post.tags) {
        options.add(tag);
      }
    }

    return [...options].sort((a, b) => a.localeCompare(b));
  }

  private matchesFilter(post: Post, normalizedFilter: string): boolean {
    if (post.category.toLowerCase() === normalizedFilter) {
      return true;
    }

    return post.tags.some((tag) => tag.toLowerCase() === normalizedFilter);
  }
}
