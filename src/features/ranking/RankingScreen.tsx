import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {AppCard} from '../../components/AppCard';
import {AppHeader} from '../../components/AppHeader';
import {Screen} from '../../components/Screen';
import {mockLeaderboard} from '../../data/mockLeaderboard';
import {colors, spacing} from '../../theme';

export function RankingScreen() {
  const [winner, second, third, ...rest] = mockLeaderboard;

  return (
    <Screen>
      <AppHeader
        eyebrow="Leaderboard"
        title="Ranking"
        subtitle="Os exploradores mais ativos da cidade."
      />

      <View style={styles.podium}>
        {[second, winner, third].map(entry => (
          <View key={entry.id} style={[styles.podiumItem, entry.rank === 1 && styles.winner]}>
            <Text style={styles.rank}>#{entry.rank}</Text>
            <Text style={styles.name}>{entry.name}</Text>
            <Text style={styles.points}>{entry.points} pts</Text>
          </View>
        ))}
      </View>

      {rest.map(entry => (
        <AppCard key={entry.id} style={entry.isCurrentUser ? styles.currentUser : styles.row}>
          <View style={styles.leaderRow}>
            <Text style={styles.rowRank}>#{entry.rank}</Text>
            <View style={styles.rowCopy}>
              <Text style={styles.rowName}>{entry.name}</Text>
              <Text style={styles.rowTitle}>{entry.title}</Text>
            </View>
            <Text style={styles.rowPoints}>{entry.points}</Text>
          </View>
        </AppCard>
      ))}
    </Screen>
  );
}

const styles = StyleSheet.create({
  podium: {
    alignItems: 'flex-end',
    flexDirection: 'row',
    gap: spacing.md,
    marginVertical: spacing.xl,
  },
  podiumItem: {
    alignItems: 'center',
    backgroundColor: colors.surfaceLowest,
    borderRadius: 8,
    flex: 1,
    minHeight: 132,
    padding: spacing.md,
  },
  winner: {
    minHeight: 170,
    backgroundColor: colors.tertiaryFixed,
  },
  rank: {
    color: colors.primary,
    fontSize: 22,
    fontWeight: '900',
  },
  name: {
    color: colors.onSurface,
    fontSize: 14,
    fontWeight: '900',
    marginTop: spacing.sm,
    textAlign: 'center',
  },
  points: {
    color: colors.onSurfaceVariant,
    fontSize: 12,
    fontWeight: '800',
    marginTop: spacing.sm,
  },
  row: {
    marginTop: spacing.md,
  },
  currentUser: {
    backgroundColor: colors.primaryFixed,
    marginTop: spacing.md,
  },
  leaderRow: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: spacing.md,
  },
  rowRank: {
    color: colors.primary,
    fontSize: 18,
    fontWeight: '900',
    width: 44,
  },
  rowCopy: {
    flex: 1,
  },
  rowName: {
    color: colors.onSurface,
    fontSize: 16,
    fontWeight: '900',
  },
  rowTitle: {
    color: colors.onSurfaceVariant,
    fontSize: 13,
    marginTop: spacing.xs,
  },
  rowPoints: {
    color: colors.tertiary,
    fontWeight: '900',
  },
});

