import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { FlowItem, flowItems } from '../data/mockData';

function FlowIcon({ type, color }: { type: FlowItem['iconType']; color: string }) {
  if (type === 'observation') {
    return (
      <View style={[styles.iconCircle, { backgroundColor: color + '26' }]}>
        <View style={styles.eyeOuter}>
          <View style={[styles.eyeShape, { borderColor: color }]}>
            <View style={[styles.eyePupil, { backgroundColor: color }]} />
          </View>
        </View>
      </View>
    );
  }
  if (type === 'nearmiss') {
    return (
      <View style={[styles.iconCircle, { backgroundColor: color + '26' }]}>
        <View style={[styles.diamondOuter, { borderColor: color }]}>
          <Text style={[styles.diamondBang, { color }]}>!</Text>
        </View>
      </View>
    );
  }
  return (
    <View style={[styles.iconCircle, { backgroundColor: color + '26' }]}>
      <View style={[styles.exclamationCircle, { borderColor: color }]}>
        <Text style={[styles.exclamationMark, { color }]}>!</Text>
      </View>
    </View>
  );
}

function WatermarkDecoration({ color }: { color: string }) {
  return (
    <View style={styles.watermark}>
      <View style={[styles.watermarkCircle, styles.watermarkOuter, { borderColor: color + '12' }]} />
      <View style={[styles.watermarkCircle, styles.watermarkInner, { borderColor: color + '10' }]} />
    </View>
  );
}

function FlowCard({ item }: { item: FlowItem }) {
  return (
    <TouchableOpacity style={styles.card} activeOpacity={0.7}>
      <WatermarkDecoration color={item.color} />
      <FlowIcon type={item.iconType} color={item.color} />
      <Text style={styles.cardLabel}>{item.label}</Text>
    </TouchableOpacity>
  );
}

export default function NAIFlowSection() {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>nAI Flow</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {flowItems.map((item) => (
          <FlowCard key={item.id} item={item} />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1A1A1A',
    paddingHorizontal: 20,
    marginBottom: 12,
  },
  scrollContent: {
    paddingHorizontal: 20,
    gap: 12,
  },
  card: {
    width: 140,
    height: 130,
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    padding: 16,
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
    overflow: 'hidden',
  },
  iconCircle: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1A1A1A',
    marginTop: 8,
  },
  eyeOuter: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  eyeShape: {
    width: 22,
    height: 14,
    borderRadius: 11,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  eyePupil: {
    width: 7,
    height: 7,
    borderRadius: 3.5,
  },
  diamondOuter: {
    width: 20,
    height: 20,
    borderRadius: 4,
    borderWidth: 2.5,
    transform: [{ rotate: '45deg' }],
    alignItems: 'center',
    justifyContent: 'center',
  },
  diamondBang: {
    fontSize: 11,
    fontWeight: '800',
    transform: [{ rotate: '-45deg' }],
    marginTop: -1,
  },
  exclamationCircle: {
    width: 22,
    height: 22,
    borderRadius: 11,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  exclamationMark: {
    fontSize: 13,
    fontWeight: '700',
    marginTop: -1,
  },
  watermark: {
    position: 'absolute',
    right: -10,
    bottom: -5,
    width: 80,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  watermarkCircle: {
    position: 'absolute',
    borderWidth: 12,
    borderRadius: 999,
  },
  watermarkOuter: {
    width: 80,
    height: 80,
  },
  watermarkInner: {
    width: 50,
    height: 50,
  },
});
