export interface AppScreenshot {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  description: string;
  tag: 'inicio' | 'ssh' | 'servidor' | 'remoto' | 'conectado';
  highlights: string[];
}

export interface FeatureItem {
  id: string;
  iconName: string;
  title: string;
  description: string;
  badge?: string;
}

export interface FaqItem {
  question: string;
  answer: React.ReactNode;
}
