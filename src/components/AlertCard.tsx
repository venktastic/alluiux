import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafetyAlert } from '../data/mockData';
import { getSeverityLabel, getAccentColor } from '../utils/scoring';

const TYPE_COLORS: Record<string, { bg: string; dot: string; text: string }> = {
  Incident: { bg: '#FDEDED', dot: '#E53935', text: '#C62828' },
  'Near Miss': { bg: '#FFF3E0', dot: '#FB8C00', text: '#E65100' },
  Observation: { bg: '#E8F5E9', dot: '#4CAF50', text: '#2E7D32' },
};

const STATE_COLORS: Record<string, { bg: string; text: string }> = {
  'Pending investigation': { bg: '#FDEDED', text: '#C62828' },
  'Overdue': { bg: '#FFF3E0', text: '#E65100' },
  'Pending closure': { bg: '#FFF3E0', text: '#E65100' },
  'Awaiting corrective action': { bg: '#FDEDED', text: '#C62828' },
  'Pending review': { bg: '#E3F2FD', text: '#1565C0' },
};

function formatDate(date: Date): string {
  const months = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
  ];
  return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
}

export default function AlertCard({ alert }: { alert: SafetyAlert }) {
  const typeColors = TYPE_COLORS[alert.eventType] || TYPE_COLORS.Incident;
  const stateColors = STATE_COLORS[alert.actionState] || STATE_COLORS['Overdue'];
  const accentColor = getAccentColor(alert.severity, alert.actionState);
  const sevIsCritical = alert.severity === 'S4' || alert.severity === 'S5';
  const sevColor = sevIsCritical ? '#E53935' : '#1E88E5';
  const dateColor = stateColors.text;

  return (
    <View style={[styles.card, { borderLeftColor: accentColor }]}>
      <View style={styles.pillRow}>
        <View style={[styles.pill, { backgroundColor: typeColors.bg }]}>
          <View style={[styles.dot, { backgroundColor: typeColors.dot }]} />
          <Text style={[styles.pillText, { color: typeColors.text }]}>
            {alert.eventType}
          </Text>
        </View>

        <View style={[styles.pill, styles.severityPill, { borderColor: sevColor }]}>
          <View style={[styles.dot, { backgroundColor: sevColor }]} />
          <Text style={[styles.pillText, { color: sevColor }]}>
            {getSeverityLabel(alert.severity)}
          </Text>
        </View>

        <View style={[styles.pill, { backgroundColor: stateColors.bg }]}>
          <Text style={[styles.pillText, styles.stateText, { color: stateColors.text }]}>
            {alert.actionState}
          </Text>
        </View>
      </View>

      <Text style={styles.title} numberOfLines={1}>{alert.title}</Text>

      <View style={styles.idRow}>
        <View style={styles.idChip}>
          <Text style={styles.idText}>{alert.referenceId}</Text>
        </View>
      </View>

      <View style={styles.dateRow}>
        <View style={[styles.datePill, { borderColor: accentColor + '40' }]}>
          <Text style={[styles.dateIcon, { color: dateColor }]}>⚑</Text>
          <Text style={[styles.dateText, { color: dateColor }]}>
            {formatDate(alert.dueDate)}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    paddingTop: 14,
    paddingBottom: 12,
    paddingRight: 14,
    paddingLeft: 16,
    marginBottom: 12,
    borderLeftWidth: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 3,
    elevation: 2,
  },
  pillRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
    marginBottom: 10,
  },
  pill: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 20,
    paddingVertical: 3,
    paddingHorizontal: 9,
    gap: 4,
  },
  severityPill: {
    borderWidth: 1,
    backgroundColor: '#FFFFFF',
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
  },
  pillText: {
    fontSize: 11,
    fontWeight: '600',
  },
  stateText: {
    fontWeight: '700',
  },
  title: {
    fontSize: 15,
    fontWeight: '700',
    color: '#1A1A1A',
    marginBottom: 8,
  },
  idRow: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  idChip: {
    backgroundColor: '#F0F0F0',
    borderRadius: 6,
    paddingVertical: 3,
    paddingHorizontal: 8,
  },
  idText: {
    fontSize: 11,
    fontWeight: '600',
    color: '#888888',
  },
  dateRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  datePill: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 20,
    paddingVertical: 3,
    paddingHorizontal: 9,
    gap: 4,
  },
  dateIcon: {
    fontSize: 12,
  },
  dateText: {
    fontSize: 12,
    fontWeight: '600',
  },
});
