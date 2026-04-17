export type LeaderboardEntry = {
  id: string;
  name: string;
  title: string;
  points: number;
  rank: number;
  isCurrentUser?: boolean;
};

export const mockLeaderboard: LeaderboardEntry[] = [
  {id: 'bia', name: 'Bia Prado', title: 'Rainha da limpeza', points: 4820, rank: 1},
  {id: 'leo', name: 'Leo Ramos', title: 'Caçador de tronos', points: 4310, rank: 2},
  {id: 'ana', name: 'Ana Paula', title: 'Fiscal da Paulista', points: 3980, rank: 3},
  {id: 'caio', name: 'Caio Mendes', title: 'Explorador urbano', points: 3100, rank: 4},
  {
    id: 'me',
    name: 'Você',
    title: 'Rei do Trono',
    points: 2560,
    rank: 8,
    isCurrentUser: true,
  },
];

