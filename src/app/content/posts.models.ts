export type Locale = 'pt-br' | 'en-us';

export const SUPPORTED_LOCALES: ReadonlyArray<Locale> = ['pt-br', 'en-us'];

export interface Post {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  category: string;
  tags: ReadonlyArray<string>;
  content: string;
  readTime: string;
  locale: Locale;
}
