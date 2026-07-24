export interface Post {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  category: string;
  tags: ReadonlyArray<string>;
  content: string;
  readTime: string;
}
