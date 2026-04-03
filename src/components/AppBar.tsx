import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useAppContext } from '../context/AppContext';

interface Props {
  onProjectPress: () => void;
}

export default function AppBar({ onProjectPress }: Props) {
  const { currentProject, currentTheme } = useAppContext();

  return (
    <View style={[styles.container, { backgroundColor: currentTheme.dark }]}>
      <View style={styles.topRow}>
        <TouchableOpacity style={styles.hamburger} activeOpacity={0.6}>
          <View style={styles.hamburgerLine} />
          <View style={styles.hamburgerLine} />
          <View style={styles.hamburgerLine} />
        </TouchableOpacity>

        <Text style={styles.title}>Navatech</Text>

        <View style={styles.avatar}>
          <Text style={styles.avatarText}>VM</Text>
        </View>
      </View>

      <TouchableOpacity
        style={[styles.projectPill, { backgroundColor: 'rgba(255,255,255,0.12)' }]}
        activeOpacity={0.6}
        onPress={onProjectPress}
      >
        <Text style={styles.projectText} numberOfLines={1}>
          {currentProject.name}
        </Text>
        <Text style={styles.projectChevron}>▾</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 8,
    paddingBottom: 14,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 44,
  },
  hamburger: {
    width: 28,
    height: 20,
    justifyContent: 'space-between',
    paddingVertical: 2,
  },
  hamburgerLine: {
    width: 22,
    height: 2.5,
    backgroundColor: '#FFFFFF',
    borderRadius: 2,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: '#FFFFFF',
    letterSpacing: 0.3,
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#E8505B',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '700',
  },
  projectPill: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 16,
    paddingVertical: 5,
    paddingHorizontal: 14,
    marginTop: 4,
    gap: 4,
    maxWidth: 260,
  },
  projectText: {
    fontSize: 13,
    fontWeight: '500',
    color: 'rgba(255,255,255,0.8)',
    flexShrink: 1,
  },
  projectChevron: {
    fontSize: 13,
    color: 'rgba(255,255,255,0.6)',
  },
});
