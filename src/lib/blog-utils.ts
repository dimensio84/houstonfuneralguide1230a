export type Category = {
  id: string;
  name: string;
  description: string;
};

export const CATEGORIES: Record<string, Category> = {
  'funeral-planning': {
    id: 'funeral-planning',
    name: 'Funeral Planning',
    description: 'Guides and resources for planning funeral services'
  },
  'costs-planning': {
    id: 'costs-planning',
    name: 'Costs & Planning',
    description: 'Information about funeral costs and financial planning'
  },
  'legal-regulations': {
    id: 'legal-regulations',
    name: 'Legal & Regulations',
    description: 'Understanding funeral laws and regulations'
  },
  // Add other categories...
};

export const formatDate = (date: Date): string => {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(date);
};

export const slugify = (text: string): string => {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');
};