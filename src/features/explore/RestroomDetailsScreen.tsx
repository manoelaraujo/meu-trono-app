import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {RouteProp} from '@react-navigation/native';
import {AppButton} from '../../components/AppButton';
import {AppCard} from '../../components/AppCard';
import {RatingStars} from '../../components/RatingStars';
import {Screen} from '../../components/Screen';
import {ExploreStackParamList} from '../../app/routes';
import {mockRestrooms} from '../../data/mockRestrooms';
import {colors, spacing, typography} from '../../theme';

type RestroomDetailsScreenProps = {
  route: RouteProp<ExploreStackParamList, 'RestroomDetails'>;
};

const metrics = [
  ['Limpeza', 5],
  ['Cheiro', 4],
  ['Papel', 5],
  ['Privacidade', 4],
  ['Acessibilidade', 5],
  ['Fila', 3],
] as const;

export function RestroomDetailsScreen({route}: RestroomDetailsScreenProps) {
  const restroom =
    mockRestrooms.find(item => item.id === route.params.restroomId) ??
    mockRestrooms[0];

  return (
    <Screen>
      <View style={styles.hero}>
        <Text style={styles.heroText}>Foto do trono</Text>
      </View>

      <Text style={styles.type}>{restroom.type}</Text>
      <Text style={styles.title}>{restroom.name}</Text>
      <Text style={styles.address}>
        {restroom.distance} • {restroom.address}
      </Text>

      <View style={styles.ratingRow}>
        <RatingStars rating={restroom.rating} size={18} />
        <Text style={styles.ratingText}>
          {restroom.rating.toFixed(1)} • {restroom.reviewCount} avaliações
        </Text>
      </View>

      <AppCard style={styles.metricsCard}>
        <Text style={styles.cardTitle}>Métricas de Realeza</Text>
        {metrics.map(([label, value]) => (
          <View key={label} style={styles.metricRow}>
            <Text style={styles.metricLabel}>{label}</Text>
            <RatingStars rating={value} />
          </View>
        ))}
      </AppCard>

      <AppButton label="Avaliar este Trono" />

      <Text style={styles.reviewsTitle}>O que dizem os Plebeus</Text>
      <AppCard style={styles.reviewCard}>
        <Text style={styles.reviewAuthor}>Marina Costa</Text>
        <Text style={styles.reviewText}>
          Limpo, bem iluminado e com papel. Um achado no meio da correria.
        </Text>
        <Text style={styles.reviewAction}>Curtir (24) • Comentar</Text>
      </AppCard>
    </Screen>
  );
}

const styles = StyleSheet.create({
  hero: {
    alignItems: 'center',
    backgroundColor: colors.surfaceHigh,
    borderRadius: 8,
    height: 260,
    justifyContent: 'center',
    marginBottom: spacing.xl,
  },
  heroText: {
    color: colors.primary,
    fontWeight: '900',
    textTransform: 'uppercase',
  },
  type: {
    ...typography.label,
    color: colors.primary,
  },
  title: {
    color: colors.onSurface,
    fontSize: 32,
    fontWeight: '900',
    lineHeight: 38,
    marginTop: spacing.sm,
  },
  address: {
    color: colors.onSurfaceVariant,
    fontSize: 15,
    marginTop: spacing.sm,
  },
  ratingRow: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: spacing.sm,
    marginTop: spacing.lg,
  },
  ratingText: {
    color: colors.tertiary,
    fontWeight: '900',
  },
  metricsCard: {
    marginVertical: spacing.xl,
    gap: spacing.md,
  },
  cardTitle: {
    color: colors.primary,
    fontSize: 13,
    fontWeight: '900',
    letterSpacing: 0.8,
    marginBottom: spacing.sm,
    textTransform: 'uppercase',
  },
  metricRow: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  metricLabel: {
    color: colors.onSurface,
    fontSize: 15,
    fontWeight: '700',
  },
  reviewsTitle: {
    color: colors.onSurface,
    fontSize: 24,
    fontWeight: '900',
    marginTop: spacing.xl,
  },
  reviewCard: {
    marginTop: spacing.lg,
  },
  reviewAuthor: {
    color: colors.onSurface,
    fontSize: 16,
    fontWeight: '900',
  },
  reviewText: {
    color: colors.onSurfaceVariant,
    fontSize: 15,
    lineHeight: 22,
    marginTop: spacing.sm,
  },
  reviewAction: {
    color: colors.primary,
    fontWeight: '800',
    marginTop: spacing.lg,
  },
});

