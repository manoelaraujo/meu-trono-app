import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';
import {colors, radius, spacing} from '../theme';

type AppButtonProps = {
  label: string;
  onPress?: () => void;
  variant?: 'primary' | 'secondary' | 'danger';
};

export function AppButton({label, onPress, variant = 'primary'}: AppButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => [
        styles.button,
        styles[variant],
        pressed && styles.pressed,
      ]}>
      <Text style={[styles.label, variant === 'secondary' && styles.secondaryLabel]}>
        {label}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    borderRadius: radius.md,
    paddingHorizontal: spacing.xl,
    paddingVertical: spacing.lg,
  },
  primary: {
    backgroundColor: colors.primaryContainer,
  },
  secondary: {
    backgroundColor: colors.surfaceHighest,
  },
  danger: {
    backgroundColor: colors.error,
  },
  pressed: {
    opacity: 0.82,
    transform: [{scale: 0.99}],
  },
  label: {
    color: colors.onPrimary,
    fontSize: 15,
    fontWeight: '900',
  },
  secondaryLabel: {
    color: colors.onSurface,
  },
});

