import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {AppButton} from '../../components/AppButton';
import {AppChip} from '../../components/AppChip';
import {Screen} from '../../components/Screen';
import {AddRestroomStackParamList} from '../../app/routes';
import {colors, spacing} from '../../theme';

type RestroomDetailsFormScreenProps = {
  navigation: NativeStackNavigationProp<
    AddRestroomStackParamList,
    'RestroomDetailsForm'
  >;
};

export function RestroomDetailsFormScreen({
  navigation,
}: RestroomDetailsFormScreenProps) {
  return (
    <Screen>
      <Text style={styles.eyebrow}>Etapa 2 de 3</Text>
      <Text style={styles.title}>Detalhes do local</Text>

      <Text style={styles.label}>Nome do local</Text>
      <TextInput
        placeholder="Ex: Shopping Iguatemi - 3º Piso"
        placeholderTextColor={colors.onSurfaceVariant}
        style={styles.input}
        value="Shopping Iguatemi - 3º Piso"
      />

      <Text style={styles.label}>Tipo de estabelecimento</Text>
      <TextInput
        placeholder="Shopping, restaurante, posto..."
        placeholderTextColor={colors.onSurfaceVariant}
        style={styles.input}
        value="Shopping"
      />

      <Text style={styles.label}>Endereço completo</Text>
      <TextInput
        multiline
        placeholder="Rua, número, bairro..."
        placeholderTextColor={colors.onSurfaceVariant}
        style={[styles.input, styles.textArea]}
        value="Av. Brigadeiro Faria Lima, 2232 - São Paulo, SP"
      />

      <Text style={styles.sectionLabel}>Comodidades e atributos</Text>
      <View style={styles.chips}>
        <AppChip label="Acessível" selected />
        <AppChip label="Trocador" />
        <AppChip label="Gratuito" selected />
        <AppChip label="24h" />
        <AppChip label="Exige consumo" />
      </View>

      <View style={styles.actions}>
        <AppButton label="Voltar" variant="secondary" onPress={() => navigation.goBack()} />
        <AppButton
          label="Próximo"
          onPress={() => navigation.navigate('ReviewSubmission')}
        />
      </View>
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
    marginBottom: spacing.xl,
    marginTop: spacing.sm,
  },
  label: {
    color: colors.primary,
    fontSize: 11,
    fontWeight: '900',
    letterSpacing: 0.8,
    marginBottom: spacing.sm,
    marginTop: spacing.lg,
    textTransform: 'uppercase',
  },
  input: {
    backgroundColor: colors.surfaceHigh,
    borderRadius: 8,
    color: colors.onSurface,
    fontSize: 15,
    fontWeight: '700',
    padding: spacing.lg,
  },
  textArea: {
    minHeight: 88,
    textAlignVertical: 'top',
  },
  sectionLabel: {
    color: colors.primary,
    fontSize: 12,
    fontWeight: '900',
    letterSpacing: 0.8,
    marginTop: spacing.xl,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  chips: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.sm,
    justifyContent: 'center',
    marginTop: spacing.lg,
  },
  actions: {
    flexDirection: 'row',
    gap: spacing.md,
    marginTop: spacing.xl,
  },
});

