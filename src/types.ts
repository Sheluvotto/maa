export interface Memory {
  id: string;
  type: 'flower' | 'tree' | 'river' | 'star';
  title: string;
  content: string;
  image?: string;
  audio?: string;
  author?: string;
  createdAt: Date;
}

export type Season = 'spring' | 'summer' | 'autumn' | 'winter';

export interface GardenState {
  season: Season;
  memories: Memory[];
  isWatering: boolean;
}