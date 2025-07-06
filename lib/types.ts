export interface Agent {
  id: string;
  name: string;
  description: string;
  status: 'Active' | 'Beta' | 'Archived';
  category: string;
  pricingModel: 'Free Tier' | 'Subscription' | 'Per-Use';
}

export interface FilterState {
  searchQuery: string;
  selectedStatuses: string[];
  selectedCategories: string[];
  selectedPricingModel: string;
}
export interface User {
  id: string;
  name: string | null;
  email: string | null;
  image: string | null;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}
