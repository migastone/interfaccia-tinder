export interface Profile {
  id: string;
  name: string;
  role: string;
  company: string;
  location: string;
  imageUrl?: string;
  affinityScore: number;
  reliabilityScore: number; // 0-100
  isSponsored?: boolean;
  industry: string;
  connectorType: string;
  matchingCount: number;
  distance: number; // km
}

export interface StatMetric {
  id: string;
  label: string;
  value: string | number;
  icon: 'network' | 'star' | 'handshake' | 'check';
  subLabel?: string;
}

export type SwipeDirection = 'left' | 'right' | null;

export enum Tab {
  Connectors = 'connectors',
  Billboard = 'billboard',
  Favorites = 'favorites',
  Matchings = 'matchings',
  Companies = 'companies',
}