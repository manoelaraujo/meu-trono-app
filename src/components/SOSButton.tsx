import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';
import {colors, radius, spacing} from '../theme';

type SOSButtonProps = {
  onPress?: () => void;
};

export function SOSButton({onPress}: SOSButtonProps) {
  return (
    <Pressable onPress={onPress} style={styles.button}>
      <Text style={styles.title}>SOS</Text>
      <Text style={styles.subtitle}>mais próximo</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.error,
    borderRadius: radius.md,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
  },
  title: {
    color: colors.onError,
    fontSize: 18,
    fontWeight: '900',
  },
  subtitle: {
    color: colors.onError,
    fontSize: 10,
    fontWeight: '800',
    opacity: 0.9,
    textTransform: 'uppercase',
  },
});
