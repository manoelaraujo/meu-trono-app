import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {AppCard} from '../../components/AppCard';
import {RatingStars} from '../../components/RatingStars';
import {Restroom} from '../../data/mockRestrooms';
import {colors, radius, spacing} from '../../theme';

type RestroomCardProps = {
  restroom: Restroom;
  onPress?: () => void;
};

export function RestroomCard({restroom, onPress}: RestroomCardProps) {
  return (
    <Pressable onPress={onPress} style={styles.pressable}>
      <AppCard>
        <View style={styles.top}>
          <View style={styles.tags}>
            {restroom.sponsored ? (
              <View style={styles.goldTag}>
                <Text style={styles.goldTagText}>Patrocinado</Text>
              </View>
            ) : null}
            {restroom.isOpen ? (
              <View style={styles.blueTag}>
                <Text style={styles.blueTagText}>Aberto</Text>
              </View>
            ) : null}
          </View>
          <View style={styles.rating}>
            <RatingStars rating={restroom.rating} />
            <Text style={styles.ratingText}>{restroom.rating.toFixed(1)}</Text>
          </View>
        </View>
        <Text style={styles.title}>{restroom.name}</Text>
        <Text style={styles.meta}>
          {restroom.distance} • {restroom.address}
        </Text>
      </AppCard>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressable: {
    marginTop: spacing.lg,
  },
  top: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: spacing.md,
  },
  tags: {
    flexDirection: 'row',
    gap: spacing.sm,
  },
  goldTag: {
    backgroundColor: colors.tertiaryFixed,
    borderRadius: radius.sm,
    paddingHorizontal: spacing.sm,
    paddingVertical: 5,
  },
  goldTagText: {
    color: colors.tertiary,
    fontSize: 10,
    fontWeight: '900',
    textTransform: 'uppercase',
  },
  blueTag: {
    backgroundColor: colors.primaryFixed,
    borderRadius: radius.sm,
    paddingHorizontal: spacing.sm,
    paddingVertical: 5,
  },
  blueTagText: {
    color: colors.primary,
    fontSize: 10,
    fontWeight: '900',
    textTransform: 'uppercase',
  },
  rating: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: spacing.xs,
  },
  ratingText: {
    color: colors.tertiary,
    fontSize: 14,
    fontWeight: '900',
  },
  title: {
    color: colors.onSurface,
    fontSize: 20,
    fontWeight: '800',
  },
  meta: {
    color: colors.onSurfaceVariant,
    fontSize: 14,
    marginTop: spacing.xs,
  },
});

