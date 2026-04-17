import React from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';

const nearbyRestrooms = [
  {
    name: 'Shopping Metrô',
    distance: '200m',
    rating: '4.9',
    tag: 'Patrocinado',
  },
  {
    name: 'Parque Trianon',
    distance: '450m',
    rating: '4.2',
    tag: 'Grátis',
  },
];

function App() {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="dark-content" backgroundColor={colors.surface} />
      <SafeAreaView style={styles.safeArea}>
        <ScrollView
          contentContainerStyle={styles.content}
          showsVerticalScrollIndicator={false}>
          <View style={styles.header}>
            <View>
              <Text style={styles.eyebrow}>Meu Trono</Text>
              <Text style={styles.title}>Encontre um trono por perto.</Text>
            </View>
            <TouchableOpacity activeOpacity={0.85} style={styles.alertButton}>
              <Text style={styles.alertIcon}>!</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.mapPreview}>
            <View style={styles.mapGrid} />
            <View style={[styles.marker, styles.primaryMarker]}>
              <Text style={styles.markerText}>WC</Text>
            </View>
            <View style={[styles.marker, styles.goldMarker]}>
              <Text style={styles.markerText}>★</Text>
            </View>
            <TouchableOpacity activeOpacity={0.9} style={styles.sosButton}>
              <Text style={styles.sosTitle}>SOS</Text>
              <Text style={styles.sosSubtitle}>mais próximo</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.sectionHeader}>
            <View>
              <Text style={styles.sectionTitle}>Banheiros próximos</Text>
              <Text style={styles.sectionSubtitle}>2 encontrados agora</Text>
            </View>
            <Text style={styles.link}>Ver todos</Text>
          </View>

          {nearbyRestrooms.map(restroom => (
            <View key={restroom.name} style={styles.card}>
              <View style={styles.cardTop}>
                <View style={styles.tag}>
                  <Text style={styles.tagText}>{restroom.tag}</Text>
                </View>
                <Text style={styles.rating}>★ {restroom.rating}</Text>
              </View>
              <Text style={styles.cardTitle}>{restroom.name}</Text>
              <Text style={styles.cardMeta}>{restroom.distance} de você</Text>
            </View>
          ))}

          <TouchableOpacity activeOpacity={0.9} style={styles.primaryButton}>
            <Text style={styles.primaryButtonText}>Cadastrar novo trono</Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const colors = {
  surface: '#f7fafc',
  surfaceLow: '#f1f4f6',
  surfaceLowest: '#ffffff',
  surfaceHigh: '#e5e9eb',
  primary: '#005e9a',
  primaryContainer: '#0077c2',
  primaryFixed: '#d0e4ff',
  onSurface: '#181c1e',
  onSurfaceVariant: '#404751',
  tertiary: '#795300',
  tertiaryFixed: '#ffdeac',
  error: '#ba1a1a',
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.surface,
  },
  content: {
    padding: 24,
    paddingBottom: 40,
  },
  header: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 20,
  },
  eyebrow: {
    color: colors.primary,
    fontSize: 13,
    fontWeight: '800',
    letterSpacing: 0.8,
    marginBottom: 8,
    textTransform: 'uppercase',
  },
  title: {
    color: colors.onSurface,
    fontSize: 38,
    fontWeight: '800',
    lineHeight: 44,
    maxWidth: 290,
  },
  alertButton: {
    alignItems: 'center',
    backgroundColor: colors.surfaceHigh,
    borderRadius: 8,
    height: 44,
    justifyContent: 'center',
    width: 44,
  },
  alertIcon: {
    color: colors.primary,
    fontSize: 20,
    fontWeight: '900',
  },
  mapPreview: {
    backgroundColor: colors.surfaceLow,
    borderRadius: 8,
    height: 300,
    marginTop: 28,
    overflow: 'hidden',
    position: 'relative',
  },
  mapGrid: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#dfe9ef',
    opacity: 0.85,
  },
  marker: {
    alignItems: 'center',
    borderRadius: 8,
    height: 54,
    justifyContent: 'center',
    position: 'absolute',
    width: 54,
  },
  primaryMarker: {
    backgroundColor: colors.primary,
    left: 60,
    top: 72,
  },
  goldMarker: {
    backgroundColor: colors.tertiary,
    right: 58,
    top: 132,
  },
  markerText: {
    color: colors.surfaceLowest,
    fontSize: 15,
    fontWeight: '900',
  },
  sosButton: {
    backgroundColor: colors.error,
    borderRadius: 8,
    bottom: 18,
    paddingHorizontal: 18,
    paddingVertical: 14,
    position: 'absolute',
    right: 18,
  },
  sosTitle: {
    color: colors.surfaceLowest,
    fontSize: 18,
    fontWeight: '900',
  },
  sosSubtitle: {
    color: colors.surfaceLowest,
    fontSize: 11,
    fontWeight: '700',
    opacity: 0.9,
    textTransform: 'uppercase',
  },
  sectionHeader: {
    alignItems: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 28,
  },
  sectionTitle: {
    color: colors.onSurface,
    fontSize: 22,
    fontWeight: '800',
  },
  sectionSubtitle: {
    color: colors.onSurfaceVariant,
    fontSize: 14,
    marginTop: 4,
  },
  link: {
    color: colors.primary,
    fontSize: 14,
    fontWeight: '800',
  },
  card: {
    backgroundColor: colors.surfaceLowest,
    borderRadius: 8,
    marginTop: 16,
    padding: 18,
  },
  cardTop: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 14,
  },
  tag: {
    backgroundColor: colors.tertiaryFixed,
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  tagText: {
    color: colors.tertiary,
    fontSize: 10,
    fontWeight: '900',
    letterSpacing: 0.6,
    textTransform: 'uppercase',
  },
  rating: {
    color: colors.tertiary,
    fontSize: 15,
    fontWeight: '900',
  },
  cardTitle: {
    color: colors.onSurface,
    fontSize: 20,
    fontWeight: '800',
  },
  cardMeta: {
    color: colors.onSurfaceVariant,
    fontSize: 14,
    marginTop: 6,
  },
  primaryButton: {
    alignItems: 'center',
    backgroundColor: colors.primaryContainer,
    borderRadius: 8,
    marginTop: 24,
    padding: 18,
  },
  primaryButtonText: {
    color: colors.surfaceLowest,
    fontSize: 16,
    fontWeight: '900',
  },
});

export default App;
