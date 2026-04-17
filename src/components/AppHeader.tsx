import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors, radius, spacing, typography} from '../theme';

type AppHeaderProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
};

export function AppHeader({eyebrow = 'Meu Trono', title, subtitle}: AppHeaderProps) {
  return (
    <View style={styles.header}>
      <View style={styles.copy}>
        <Text style={styles.eyebrow}>{eyebrow}</Text>
        <Text style={styles.title}>{title}</Text>
        {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
      </View>
      <View style={styles.notification}>
        <Text style={styles.notificationText}>!</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    gap: spacing.lg,
    justifyContent: 'space-between',
  },
  copy: {
    flex: 1,
  },
  eyebrow: {
    ...typography.label,
    color: colors.primary,
    marginBottom: spacing.sm,
  },
  title: {
    ...typography.title,
    color: colors.onSurface,
  },
  subtitle: {
    ...typography.body,
    color: colors.onSurfaceVariant,
    marginTop: spacing.sm,
  },
  notification: {
    alignItems: 'center',
    backgroundColor: colors.surfaceHigh,
    borderRadius: radius.md,
    height: 44,
    justifyContent: 'center',
    width: 44,
  },
  notificationText: {
    color: colors.primary,
    fontSize: 20,
    fontWeight: '900',
  },
});

