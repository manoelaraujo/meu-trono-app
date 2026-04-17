import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors} from '../theme';

type RatingStarsProps = {
  rating: number;
  size?: number;
};

export function RatingStars({rating, size = 14}: RatingStarsProps) {
  return (
    <View style={styles.row}>
      {Array.from({length: 5}).map((_, index) => (
        <Text
          key={index}
          style={[
            styles.star,
            {fontSize: size},
            index < Math.round(rating) ? styles.active : styles.inactive,
          ]}>
          ★
        </Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  star: {
    fontWeight: '900',
  },
  active: {
    color: colors.tertiary,
  },
  inactive: {
    color: colors.outlineVariant,
  },
});

