import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  ViewEncapsulation,
  effect,
  inject,
} from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { marked } from 'marked';
import { POSTS } from '../../../content/generated/posts.generated';
import { Post } from '../../../content/posts.models';
import { LocaleService } from '../../../shared/services/locale.service';

@Component({
  selector: 'app-post-detail-page',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  imports: [RouterLink],
  template: `
    <section class="post-detail">
      <div class="section-cmd">
        <span class="prompt">bruno&#64;portfolio</span
        ><span class="colon">:</span><span class="path">~/posts</span
        ><span class="dollar">$</span>
        <span class="command"> cat {{ activeSlug || 'post.md' }}</span>
      </div>

      <a routerLink="/posts" class="back-link">← back to posts</a>

      @if (post) {
        <article class="post-shell">
          <header class="post-meta">
            <h1 class="post-title">{{ post.title }}</h1>
            <p class="post-description">{{ post.description }}</p>

            <div class="post-meta-line">
              <time [attr.datetime]="post.publishedAt">
                {{ formatDate(post.publishedAt) }}
              </time>
              <span class="meta-divider">•</span>
              <span>{{ post.category }}</span>
              <span class="meta-divider">•</span>
              <span>{{ post.readTime }}</span>
            </div>
          </header>

          <div class="post-content" [innerHTML]="markdownHtml"></div>
        </article>
      } @else {
        <div class="not-found">
          Post not found for slug: <strong>{{ activeSlug }}</strong>
        </div>
      }
    </section>
  `,
  styleUrl: './post-detail.page.scss',
})
export class PostDetailPageComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly destroyRef = inject(DestroyRef);
  private readonly localeService = inject(LocaleService);

  readonly posts = POSTS;

  post: Post | null = null;
  markdownHtml = '';
  activeSlug = '';

  constructor() {
    this.route.paramMap
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((params) => {
        this.activeSlug = params.get('slug') ?? '';
        this.resolvePost(this.activeSlug);
      });

    effect(() => {
      this.localeService.locale(); // track locale changes
      this.resolvePost(this.activeSlug);
    });
  }

  formatDate(dateIso: string): string {
    const parsed = new Date(dateIso);
    return new Intl.DateTimeFormat('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    }).format(parsed);
  }

  private resolvePost(slug: string): void {
    const locale = this.localeService.locale();
    // Prefer current locale; fallback to any locale if translation doesn't exist yet
    const nextPost =
      this.posts.find((p) => p.slug === slug && p.locale === locale) ??
      this.posts.find((p) => p.slug === slug) ??
      null;

    this.post = nextPost;

    if (!nextPost) {
      this.markdownHtml = '';
      return;
    }

    const rendered = marked.parse(nextPost.content, { async: false });
    this.markdownHtml = typeof rendered === 'string' ? rendered : '';
  }
}
