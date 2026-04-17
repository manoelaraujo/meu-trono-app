import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {AppChip} from '../../components/AppChip';
import {AppHeader} from '../../components/AppHeader';
import {Screen} from '../../components/Screen';
import {mockRestrooms} from '../../data/mockRestrooms';
import {ExploreStackParamList} from '../../app/routes';
import {colors, spacing, typography} from '../../theme';
import {RestroomCard} from './RestroomCard';
import {RestroomMapPreview} from './RestroomMapPreview';

type ExploreScreenProps = {
  navigation: NativeStackNavigationProp<ExploreStackParamList, 'ExploreHome'>;
};

const filters = ['Acessível', 'Grátis', '24h', 'Trocador'];

export function ExploreScreen({navigation}: ExploreScreenProps) {
  return (
    <Screen>
      <AppHeader title="Encontre um trono por perto." />

      <View style={styles.search}>
        <Text style={styles.searchText}>Buscar por shopping, parque ou rua...</Text>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.filters}>
        {filters.map((filter, index) => (
          <AppChip key={filter} label={filter} selected={index === 0} />
        ))}
      </ScrollView>

      <RestroomMapPreview />

      <View style={styles.sectionHeader}>
        <View>
          <Text style={styles.sectionTitle}>Banheiros próximos</Text>
          <Text style={styles.sectionSubtitle}>
            {mockRestrooms.length} tronos encontrados por perto
          </Text>
        </View>
        <Text style={styles.link}>Ver feed</Text>
      </View>

      {mockRestrooms.map(restroom => (
        <RestroomCard
          key={restroom.id}
          restroom={restroom}
          onPress={() =>
            navigation.navigate('RestroomDetails', {restroomId: restroom.id})
          }
        />
      ))}
    </Screen>
  );
}

const styles = StyleSheet.create({
  search: {
    backgroundColor: colors.surfaceHigh,
    borderRadius: 8,
    marginTop: spacing.xl,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.lg,
  },
  searchText: {
    color: colors.onSurfaceVariant,
    fontSize: 14,
    fontWeight: '600',
  },
  filters: {
    gap: spacing.sm,
    paddingTop: spacing.lg,
  },
  sectionHeader: {
    alignItems: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: spacing.xl,
  },
  sectionTitle: {
    ...typography.sectionTitle,
    color: colors.onSurface,
  },
  sectionSubtitle: {
    color: colors.onSurfaceVariant,
    fontSize: 14,
    marginTop: spacing.xs,
  },
  link: {
    color: colors.primary,
    fontSize: 14,
    fontWeight: '800',
  },
});

