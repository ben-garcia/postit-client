export interface User {
  email?: string;
  username: string;
}

export interface Community {
  id: number;
  bannerUrl: string;
  bannerHeight: 'small' | 'medium' | 'large';
  coinCount: number;
  creator: User;
  description: string | null;
  iconUrl: string | null;
  isNsfw: boolean;
  location: string | null;
  name: string;
  themeColor: string;
  topics: string | null;
  type: 'private' | 'public' | 'restricted';
  createdAt: string;
  updatedAt: string;
}
