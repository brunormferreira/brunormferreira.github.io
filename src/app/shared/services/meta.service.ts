import { Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';

interface PageMeta {
  title: string;
  description: string;
  url?: string;
  type?: string;
}

const DEFAULT_TITLE = 'Bruno Ramires — Senior Frontend Engineer';
const DEFAULT_DESCRIPTION =
  'Senior Frontend Engineer | 7+ years | Angular & React | AI-first workflow | Open to Remote';
const SITE_URL = 'https://brunormferreira.github.io';

@Injectable({ providedIn: 'root' })
export class MetaService {
  private readonly meta = inject(Meta);
  private readonly title = inject(Title);
  private readonly document = inject(DOCUMENT);

  updateMeta(page: PageMeta): void {
    const fullTitle = page.title
      ? `${page.title} — Bruno Ramires`
      : DEFAULT_TITLE;
    const description = page.description || DEFAULT_DESCRIPTION;
    const url = page.url ? `${SITE_URL}${page.url}` : SITE_URL;
    const type = page.type || 'website';

    // Update title
    this.title.setTitle(fullTitle);

    // Update standard meta tags
    this.meta.updateTag({ name: 'description', content: description });

    // Update Open Graph tags
    this.meta.updateTag({ property: 'og:title', content: fullTitle });
    this.meta.updateTag({ property: 'og:description', content: description });
    this.meta.updateTag({ property: 'og:url', content: url });
    this.meta.updateTag({ property: 'og:type', content: type });

    // Update Twitter Card tags
    this.meta.updateTag({ name: 'twitter:title', content: fullTitle });
    this.meta.updateTag({ name: 'twitter:description', content: description });

    // Update canonical URL
    this.updateCanonical(url);
  }

  resetToDefaults(): void {
    this.title.setTitle(DEFAULT_TITLE);
    this.meta.updateTag({ name: 'description', content: DEFAULT_DESCRIPTION });
    this.meta.updateTag({ property: 'og:title', content: DEFAULT_TITLE });
    this.meta.updateTag({
      property: 'og:description',
      content: DEFAULT_DESCRIPTION,
    });
    this.meta.updateTag({ property: 'og:url', content: SITE_URL });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ name: 'twitter:title', content: DEFAULT_TITLE });
    this.meta.updateTag({
      name: 'twitter:description',
      content: DEFAULT_DESCRIPTION,
    });
    this.updateCanonical(SITE_URL);
  }

  private updateCanonical(url: string): void {
    let link = this.document.querySelector(
      'link[rel="canonical"]',
    ) as HTMLLinkElement | null;

    if (!link) {
      link = this.document.createElement('link');
      link.setAttribute('rel', 'canonical');
      this.document.head.appendChild(link);
    }

    link.setAttribute('href', url);
  }
}
