import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';
import {colors, radius, spacing} from '../theme';

type AppChipProps = {
  label: string;
  selected?: boolean;
  onPress?: () => void;
};

export function AppChip({label, selected = false, onPress}: AppChipProps) {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.chip, selected ? styles.selected : styles.idle]}>
      <Text style={[styles.label, selected && styles.selectedLabel]}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  chip: {
    borderRadius: radius.full,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.sm,
  },
  idle: {
    backgroundColor: colors.surfaceHighest,
  },
  selected: {
    backgroundColor: colors.primary,
  },
  label: {
    color: colors.onSurfaceVariant,
    fontSize: 12,
    fontWeight: '800',
  },
  selectedLabel: {
    color: colors.onPrimary,
  },
});

