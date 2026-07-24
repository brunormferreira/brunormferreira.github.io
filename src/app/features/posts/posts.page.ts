import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  inject,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';
import { POSTS } from '../../content/generated/posts.generated';
import { Post } from '../../content/posts.models';

@Component({
  selector: 'app-posts-page',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScrollRevealDirective],
  template: `
    <section id="posts" class="posts">
      <div class="section-cmd">
        <span class="prompt">bruno&#64;portfolio</span
        ><span class="colon">:</span><span class="path">~/posts</span
        ><span class="dollar">$</span>
        <span class="command"> cat index.md | grep --tag</span>
      </div>

      <div class="filters" appScrollReveal>
        <button
          type="button"
          class="filter-btn"
          [class.active]="activeFilter === 'all'"
          (click)="setFilter('all')"
        >
          all
        </button>

        @for (option of filterOptions; track option) {
          <button
            type="button"
            class="filter-btn"
            [class.active]="activeFilter === option"
            (click)="setFilter(option)"
          >
            {{ option }}
          </button>
        }
      </div>

      @if (filteredPosts.length > 0) {
        <div class="post-list">
          @for (post of filteredPosts; track post.slug) {
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

  readonly posts = POSTS;
  readonly filterOptions = this.buildFilterOptions(this.posts);

  activeFilter = 'all';
  filteredPosts = this.posts;

  constructor() {
    this.route.queryParamMap
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((params) => {
        const nextFilter = params.get('tag') ?? 'all';
        this.applyFilter(nextFilter);
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

  private applyFilter(nextFilter: string): void {
    const normalized = nextFilter.trim().toLowerCase();

    if (!normalized || normalized === 'all') {
      this.activeFilter = 'all';
      this.filteredPosts = this.posts;
      return;
    }

    this.activeFilter = this.findFilterLabel(normalized) ?? nextFilter;
    this.filteredPosts = this.posts.filter((post) =>
      this.matchesFilter(post, normalized),
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

  private findFilterLabel(normalizedFilter: string): string | null {
    return (
      this.filterOptions.find(
        (option) => option.toLowerCase() === normalizedFilter,
      ) ?? null
    );
  }

  private matchesFilter(post: Post, normalizedFilter: string): boolean {
    if (post.category.toLowerCase() === normalizedFilter) {
      return true;
    }

    return post.tags.some((tag) => tag.toLowerCase() === normalizedFilter);
  }
}
