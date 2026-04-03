import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { HubBot, hubBots } from '../data/mockData';

function HubIcon({ type, color }: { type: HubBot['iconType']; color: string }) {
  if (type === 'hse') {
    return (
      <View style={[styles.iconCircle, { backgroundColor: color + '20' }]}>
        <View style={styles.hseContainer}>
          <View style={[styles.hseRoof, { borderBottomColor: color }]} />
          <View style={[styles.hseBody, { backgroundColor: color }]}>
            <View style={[styles.hseArrow, { borderBottomColor: '#FFFFFF' }]} />
          </View>
        </View>
      </View>
    );
  }
  if (type === 'osha') {
    return (
      <View style={[styles.iconCircle, { backgroundColor: color + '20' }]}>
        <View style={[styles.oshaOuter, { borderColor: color }]}>
          <View style={[styles.oshaInner, { backgroundColor: color }]} />
        </View>
      </View>
    );
  }
  return (
    <View style={[styles.iconCircle, { backgroundColor: color + '20' }]}>
      <View style={[styles.acwaOuter, { borderColor: color }]}>
        <View style={[styles.acwaInner, { backgroundColor: color }]} />
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

function HubCard({ bot }: { bot: HubBot }) {
  return (
    <TouchableOpacity style={styles.card} activeOpacity={0.7}>
      <WatermarkDecoration color={bot.color} />
      <HubIcon type={bot.iconType} color={bot.color} />
      <Text style={styles.botName}>{bot.name}</Text>
      <View style={styles.askPill}>
        <Text style={styles.askText}>Ask Anything →</Text>
      </View>
    </TouchableOpacity>
  );
}

export default function NAIHubSection() {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>nAI Hub</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {hubBots.map((bot) => (
          <HubCard key={bot.id} bot={bot} />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    marginTop: 24,
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
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
    overflow: 'hidden',
  },
  iconCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  botName: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1A1A1A',
    marginBottom: 10,
  },
  askPill: {
    backgroundColor: '#E8F5E9',
    borderRadius: 12,
    paddingVertical: 5,
    paddingHorizontal: 10,
    alignSelf: 'flex-start',
    flexDirection: 'row',
  },
  askText: {
    fontSize: 11,
    fontWeight: '600',
    color: '#2E7D32',
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
  hseContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  hseRoof: {
    width: 0,
    height: 0,
    borderLeftWidth: 10,
    borderRightWidth: 10,
    borderBottomWidth: 8,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    marginBottom: -1,
  },
  hseBody: {
    width: 14,
    height: 10,
    borderRadius: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  hseArrow: {
    width: 0,
    height: 0,
    borderLeftWidth: 3,
    borderRightWidth: 3,
    borderBottomWidth: 5,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    marginTop: -2,
  },
  oshaOuter: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  oshaInner: {
    width: 7,
    height: 7,
    borderRadius: 3.5,
  },
  acwaOuter: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  acwaInner: {
    width: 6,
    height: 6,
    borderRadius: 3,
  },
});
