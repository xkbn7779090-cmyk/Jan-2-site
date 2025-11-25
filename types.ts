export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

export interface PortfolioItem {
  id: number;
  title: string;
  category: 'Oil' | 'Digital' | 'Music';
  imageUrl: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  isStreaming?: boolean;
}

export enum Section {
  HOME = 'home',
  ABOUT = 'about',
  TIMELINE = 'timeline',
  PORTFOLIO = 'portfolio',
  CONTACT = 'contact'
}