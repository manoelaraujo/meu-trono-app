import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {AppCard} from '../../components/AppCard';
import {AppHeader} from '../../components/AppHeader';
import {Screen} from '../../components/Screen';
import {mockProfile} from '../../data/mockProfile';
import {colors, spacing} from '../../theme';

export function ProfileScreen() {
  return (
    <Screen>
      <AppHeader eyebrow="Perfil" title={mockProfile.displayName} subtitle={mockProfile.level} />

      <View style={styles.stats}>
        <AppCard style={styles.stat}>
          <Text style={styles.statValue}>{mockProfile.points}</Text>
          <Text style={styles.statLabel}>Pontos</Text>
        </AppCard>
        <AppCard style={styles.stat}>
          <Text style={styles.statValue}>{mockProfile.reviews}</Text>
          <Text style={styles.statLabel}>Avaliações</Text>
        </AppCard>
        <AppCard style={styles.stat}>
          <Text style={styles.statValue}>#{mockProfile.rank}</Text>
          <Text style={styles.statLabel}>Ranking</Text>
        </AppCard>
      </View>

      <Text style={styles.sectionTitle}>Desafios Semanais</Text>
      {mockProfile.weeklyChallenges.map(challenge => (
        <AppCard key={challenge.id} style={styles.challenge}>
          <Text style={styles.challengeTitle}>{challenge.title}</Text>
          <Text style={styles.challengeDescription}>{challenge.description}</Text>
          <View style={styles.progressBar}>
            <View
              style={[
                styles.progressFill,
                {width: `${(challenge.progress / challenge.goal) * 100}%`},
              ]}
            />
          </View>
          <Text style={styles.reward}>
            {challenge.progress}/{challenge.goal} • +{challenge.reward} pts
          </Text>
        </AppCard>
      ))}
    </Screen>
  );
}

const styles = StyleSheet.create({
  stats: {
    flexDirection: 'row',
    gap: spacing.md,
    marginTop: spacing.xl,
  },
  stat: {
    alignItems: 'center',
    flex: 1,
    paddingHorizontal: spacing.sm,
  },
  statValue: {
    color: colors.primary,
    fontSize: 22,
    fontWeight: '900',
  },
  statLabel: {
    color: colors.onSurfaceVariant,
    fontSize: 11,
    fontWeight: '800',
    marginTop: spacing.xs,
    textTransform: 'uppercase',
  },
  sectionTitle: {
    color: colors.onSurface,
    fontSize: 22,
    fontWeight: '900',
    marginTop: spacing.xl,
  },
  challenge: {
    marginTop: spacing.lg,
  },
  challengeTitle: {
    color: colors.onSurface,
    fontSize: 17,
    fontWeight: '900',
  },
  challengeDescription: {
    color: colors.onSurfaceVariant,
    fontSize: 14,
    lineHeight: 21,
    marginTop: spacing.sm,
  },
  progressBar: {
    backgroundColor: colors.surfaceHigh,
    borderRadius: 8,
    height: 10,
    marginTop: spacing.lg,
    overflow: 'hidden',
  },
  progressFill: {
    backgroundColor: colors.primaryContainer,
    height: '100%',
  },
  reward: {
    color: colors.tertiary,
    fontSize: 13,
    fontWeight: '900',
    marginTop: spacing.sm,
  },
});

