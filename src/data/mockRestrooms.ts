export type Restroom = {
  id: string;
  name: string;
  type: string;
  address: string;
  distance: string;
  rating: number;
  reviewCount: number;
  sponsored?: boolean;
  isOpen?: boolean;
  accessible?: boolean;
  free?: boolean;
  babyChanging?: boolean;
  open24h?: boolean;
};

export const mockRestrooms: Restroom[] = [
  {
    id: 'starbucks-paulista',
    name: 'Starbucks Paulista',
    type: 'Café',
    address: 'Av. Paulista, 1234',
    distance: '200m',
    rating: 4.9,
    reviewCount: 128,
    sponsored: true,
    isOpen: true,
    accessible: true,
    free: false,
    babyChanging: true,
    open24h: false,
  },
  {
    id: 'parque-trianon',
    name: 'Parque Trianon',
    type: 'Público',
    address: 'Rua Peixoto Gomide, 949',
    distance: '450m',
    rating: 4.2,
    reviewCount: 64,
    isOpen: true,
    accessible: true,
    free: true,
    babyChanging: false,
    open24h: false,
  },
  {
    id: 'shopping-cidade-sp',
    name: 'Shopping Cidade SP',
    type: 'Shopping',
    address: 'Av. Paulista, 1230',
    distance: '620m',
    rating: 4.7,
    reviewCount: 92,
    isOpen: true,
    accessible: true,
    free: true,
    babyChanging: true,
    open24h: false,
  },
];

