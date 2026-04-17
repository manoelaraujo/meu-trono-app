import React from 'react';
import {StyleSheet, View, ViewStyle} from 'react-native';
import {colors, radius, spacing} from '../theme';

type AppCardProps = {
  children: React.ReactNode;
  style?: ViewStyle;
};

export function AppCard({children, style}: AppCardProps) {
  return <View style={[styles.card, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.surfaceLowest,
    borderRadius: radius.md,
    padding: spacing.lg,
  },
});

