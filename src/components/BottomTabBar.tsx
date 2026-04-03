import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useAppContext } from '../context/AppContext';

function TaskIcon() {
  return (
    <View style={styles.taskIcon}>
      <View style={styles.taskLine} />
      <View style={[styles.taskLine, { width: 14 }]} />
      <View style={[styles.taskLine, { width: 10 }]} />
    </View>
  );
}

function NAILogo({ color }: { color: string }) {
  return (
    <View style={[styles.logoContainer, { backgroundColor: color }]}>
      <View style={[styles.logoCircle, { backgroundColor: color }]}>
        <Text style={styles.logoN}>N</Text>
      </View>
    </View>
  );
}

function DashboardIcon() {
  return (
    <View style={styles.dashIcon}>
      <View style={styles.dashRow}>
        <View style={[styles.dashBar, { height: 10, backgroundColor: '#999' }]} />
        <View style={[styles.dashBar, { height: 16, backgroundColor: '#999' }]} />
        <View style={[styles.dashBar, { height: 8, backgroundColor: '#999' }]} />
      </View>
    </View>
  );
}

export default function BottomTabBar() {
  const { currentTheme } = useAppContext();

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.tab} activeOpacity={0.6}>
        <TaskIcon />
        <Text style={styles.tabLabel}>Task</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.centerTab} activeOpacity={0.7}>
        <NAILogo color={currentTheme.dark} />
        <Text style={[styles.centerLabel, { color: currentTheme.dark }]}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.tab} activeOpacity={0.6}>
        <DashboardIcon />
        <Text style={styles.tabLabel}>Dashboard</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    paddingBottom: 24,
    paddingTop: 8,
    borderTopWidth: 1,
    borderTopColor: '#EEEEEE',
    alignItems: 'flex-end',
    justifyContent: 'space-around',
  },
  tab: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 4,
    flex: 1,
  },
  tabLabel: {
    fontSize: 11,
    fontWeight: '400',
    color: '#999999',
    marginTop: 4,
  },
  centerTab: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    marginTop: -30,
  },
  centerLabel: {
    fontSize: 11,
    fontWeight: '600',
    marginTop: 4,
  },
  logoContainer: {
    width: 56,
    height: 56,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 6,
  },
  logoCircle: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: 'rgba(255,255,255,0.15)',
  },
  logoN: {
    fontSize: 22,
    fontWeight: '700',
    color: '#FFFFFF',
    letterSpacing: 1,
  },
  taskIcon: {
    width: 20,
    height: 16,
    justifyContent: 'space-between',
  },
  taskLine: {
    width: 18,
    height: 2.5,
    backgroundColor: '#999999',
    borderRadius: 1,
  },
  dashIcon: {
    width: 22,
    height: 18,
    justifyContent: 'flex-end',
  },
  dashRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    height: 18,
  },
  dashBar: {
    width: 5,
    borderRadius: 1.5,
  },
});
