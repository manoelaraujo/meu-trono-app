import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {AppButton} from '../../components/AppButton';
import {AppHeader} from '../../components/AppHeader';
import {Screen} from '../../components/Screen';
import {AddRestroomStackParamList} from '../../app/routes';
import {colors, spacing} from '../../theme';

type SelectLocationScreenProps = {
  navigation: NativeStackNavigationProp<
    AddRestroomStackParamList,
    'SelectLocation'
  >;
};

export function SelectLocationScreen({navigation}: SelectLocationScreenProps) {
  return (
    <Screen>
      <AppHeader
        eyebrow="Cadastro de Trono"
        title="Onde fica o trono?"
        subtitle="Selecione no mapa o local exato para iniciarmos o registro."
      />
      <View style={styles.map}>
        <Text style={styles.marker}>+</Text>
      </View>
      <View style={styles.detectedPlace}>
        <Text style={styles.label}>Endereço identificado</Text>
        <Text style={styles.place}>Shopping Iguatemi - Ala Sul</Text>
      </View>
      <AppButton
        label="Continuar"
        onPress={() => navigation.navigate('RestroomDetailsForm')}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  map: {
    alignItems: 'center',
    backgroundColor: '#dfe9ef',
    borderRadius: 8,
    height: 360,
    justifyContent: 'center',
    marginTop: spacing.xl,
  },
  marker: {
    color: colors.primary,
    fontSize: 56,
    fontWeight: '300',
  },
  detectedPlace: {
    backgroundColor: colors.surfaceLowest,
    borderRadius: 8,
    marginVertical: spacing.xl,
    padding: spacing.lg,
  },
  label: {
    color: colors.primary,
    fontSize: 11,
    fontWeight: '900',
    letterSpacing: 0.8,
    textTransform: 'uppercase',
  },
  place: {
    color: colors.onSurface,
    fontSize: 18,
    fontWeight: '800',
    marginTop: spacing.sm,
  },
});

