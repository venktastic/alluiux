import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useAppContext } from '../context/AppContext';
import { themes } from '../data/mockData';

export default function ThemePreviewSection() {
  const { currentTheme, setThemeId } = useAppContext();

  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Theme</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.swatchRow}
      >
        {themes.map((theme) => {
          const isActive = currentTheme.id === theme.id;
          return (
            <TouchableOpacity
              key={theme.id}
              style={styles.swatchItem}
              activeOpacity={0.7}
              onPress={() => setThemeId(theme.id)}
            >
              <View
                style={[
                  styles.swatch,
                  { backgroundColor: theme.primary },
                  isActive && styles.swatchActive,
                ]}
              >
                {isActive && <Text style={styles.swatchCheck}>✓</Text>}
              </View>
              <Text style={[styles.swatchLabel, isActive && styles.swatchLabelActive]}>
                {theme.name}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    marginTop: 28,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1A1A1A',
    paddingHorizontal: 20,
    marginBottom: 14,
  },
  swatchRow: {
    paddingHorizontal: 20,
    gap: 16,
  },
  swatchItem: {
    alignItems: 'center',
    width: 56,
  },
  swatch: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 6,
  },
  swatchActive: {
    borderWidth: 3,
    borderColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  swatchCheck: {
    fontSize: 18,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  swatchLabel: {
    fontSize: 11,
    fontWeight: '500',
    color: '#888888',
    textAlign: 'center',
  },
  swatchLabelActive: {
    fontWeight: '700',
    color: '#1A1A1A',
  },
});
