export interface ContentBlock {
  type: string;
  children: {
    type: string;
    text: string;
  }[];
}

export interface Article {
  id: number;
  title: string;
  slug: string;
  content: ContentBlock[];
  views: number;
  isFeatured: boolean;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}
