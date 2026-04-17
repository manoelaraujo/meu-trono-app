import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SOSButton} from '../../components/SOSButton';
import {colors, radius, spacing} from '../../theme';

export function RestroomMapPreview() {
  return (
    <View style={styles.container}>
      <View style={styles.gridLineOne} />
      <View style={styles.gridLineTwo} />
      <View style={[styles.marker, styles.primaryMarker]}>
        <Text style={styles.markerText}>WC</Text>
      </View>
      <View style={[styles.marker, styles.goldMarker]}>
        <Text style={styles.markerText}>★</Text>
      </View>
      <View style={[styles.marker, styles.softMarker]}>
        <Text style={styles.softMarkerText}>●</Text>
      </View>
      <View style={styles.sos}>
        <SOSButton />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#dfe9ef',
    borderRadius: radius.md,
    height: 300,
    marginTop: spacing.xl,
    overflow: 'hidden',
    position: 'relative',
  },
  gridLineOne: {
    backgroundColor: colors.surfaceLowest,
    height: 46,
    left: -20,
    opacity: 0.55,
    position: 'absolute',
    top: 72,
    transform: [{rotate: '-18deg'}],
    width: 380,
  },
  gridLineTwo: {
    backgroundColor: colors.surfaceLowest,
    height: 40,
    left: 70,
    opacity: 0.45,
    position: 'absolute',
    top: -10,
    transform: [{rotate: '64deg'}],
    width: 320,
  },
  marker: {
    alignItems: 'center',
    borderRadius: radius.md,
    height: 54,
    justifyContent: 'center',
    position: 'absolute',
    width: 54,
  },
  primaryMarker: {
    backgroundColor: colors.primary,
    left: 54,
    top: 70,
  },
  goldMarker: {
    backgroundColor: colors.tertiary,
    right: 54,
    top: 126,
  },
  softMarker: {
    backgroundColor: colors.primaryFixed,
    bottom: 72,
    left: 150,
  },
  markerText: {
    color: colors.surfaceLowest,
    fontSize: 15,
    fontWeight: '900',
  },
  softMarkerText: {
    color: colors.primary,
    fontSize: 18,
    fontWeight: '900',
  },
  sos: {
    bottom: spacing.lg,
    position: 'absolute',
    right: spacing.lg,
  },
});

