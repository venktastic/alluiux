import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafetyAlert } from '../data/mockData';
import AlertCard from './AlertCard';
import EmptyStateCard from './EmptyStateCard';

const MAX_ALERTS = 3;

interface Props {
  alerts: SafetyAlert[];
}

export default function PriorityAlertsSection({ alerts }: Props) {
  const topAlerts = alerts.slice(0, MAX_ALERTS);

  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Priority Alerts</Text>
      {topAlerts.length > 0 ? (
        <View style={styles.list}>
          {topAlerts.map((alert) => (
            <AlertCard key={alert.id} alert={alert} />
          ))}
        </View>
      ) : (
        <EmptyStateCard
          icon="✓"
          iconBg="#E8F5E9"
          iconColor="#2E7D32"
          title="No priority alerts"
          body="You're all caught up on critical safety events for this project."
          secondaryText="New incident or overdue observation alerts will appear here."
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    marginTop: 24,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1A1A1A',
    marginBottom: 14,
  },
  list: {
    gap: 0,
  },
});
