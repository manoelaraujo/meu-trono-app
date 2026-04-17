import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {AppButton} from '../../components/AppButton';
import {AppCard} from '../../components/AppCard';
import {Screen} from '../../components/Screen';
import {colors, spacing} from '../../theme';

export function ReviewSubmissionScreen() {
  return (
    <Screen>
      <Text style={styles.eyebrow}>Etapa 3 de 3</Text>
      <Text style={styles.title}>Finalize o seu registro</Text>

      <View style={styles.photoBox}>
        <Text style={styles.photoIcon}>+</Text>
        <Text style={styles.photoText}>Adicionar foto opcional</Text>
      </View>

      <AppCard style={styles.review}>
        <Text style={styles.cardTitle}>Revisão das informações</Text>
        <Text style={styles.item}>Shopping Iguatemi - 3º Piso</Text>
        <Text style={styles.item}>Shopping • Gratuito • Acessível</Text>
        <Text style={styles.item}>
          Av. Brigadeiro Faria Lima, 2232 - São Paulo, SP
        </Text>
      </AppCard>

      <AppButton label="Enviar para moderação" />
    </Screen>
  );
}

const styles = StyleSheet.create({
  eyebrow: {
    color: colors.primary,
    fontSize: 12,
    fontWeight: '900',
    letterSpacing: 0.8,
    textTransform: 'uppercase',
  },
  title: {
    color: colors.onSurface,
    fontSize: 34,
    fontWeight: '900',
    lineHeight: 40,
    marginBottom: spacing.xl,
    marginTop: spacing.sm,
  },
  photoBox: {
    alignItems: 'center',
    backgroundColor: colors.surfaceHigh,
    borderRadius: 8,
    height: 190,
    justifyContent: 'center',
  },
  photoIcon: {
    color: colors.primary,
    fontSize: 40,
    fontWeight: '300',
  },
  photoText: {
    color: colors.onSurfaceVariant,
    fontSize: 15,
    fontWeight: '800',
    marginTop: spacing.sm,
  },
  review: {
    gap: spacing.sm,
    marginVertical: spacing.xl,
  },
  cardTitle: {
    color: colors.primary,
    fontSize: 13,
    fontWeight: '900',
    textTransform: 'uppercase',
  },
  item: {
    color: colors.onSurface,
    fontSize: 15,
    fontWeight: '700',
    lineHeight: 22,
  },
});

