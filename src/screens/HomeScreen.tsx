import React, { useState } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { useAppContext } from '../context/AppContext';
import { getAlertsForProject } from '../data/mockData';
import AppBar from '../components/AppBar';
import NAIFlowSection from '../components/NAIFlowSection';
import NAIHubSection from '../components/NAIHubSection';
import PriorityAlertsSection from '../components/PriorityAlertsSection';
import EmptyStateCard from '../components/EmptyStateCard';
import ThemePreviewSection from '../components/ThemePreviewSection';
import ProjectSwitchBottomSheet from '../components/ProjectSwitchBottomSheet';
import BottomTabBar from '../components/BottomTabBar';

export default function HomeScreen() {
  const { currentProject } = useAppContext();
  const [showProjectSheet, setShowProjectSheet] = useState(false);

  const hasFlow = currentProject.hasNAIFlow;
  const hasHub = currentProject.hasNAIHub;
  const alerts = getAlertsForProject(currentProject.id);

  const showNoProducts = !hasFlow && !hasHub;
  const showFlowDisabledInfo = !hasFlow && hasHub;

  return (
    <View style={styles.container}>
      <AppBar onProjectPress={() => setShowProjectSheet(true)} />

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {showNoProducts ? (
          <View style={styles.emptyBody}>
            <EmptyStateCard
              icon="○"
              iconBg="#F0F0F0"
              iconColor="#999999"
              title="No products enabled"
              body="This project does not currently have nAI Flow or nAI Hub enabled."
              secondaryText="Contact your administrator to enable products for this workspace."
            />
          </View>
        ) : (
          <>
            {hasFlow && <NAIFlowSection />}
            {hasHub && <NAIHubSection />}
            {hasFlow && <PriorityAlertsSection alerts={alerts} />}
            {showFlowDisabledInfo && (
              <View style={styles.infoSection}>
                <EmptyStateCard
                  icon="i"
                  iconBg="#E3F2FD"
                  iconColor="#1565C0"
                  title="nAI Flow not enabled"
                  body="Safety workflows and priority alerts are not available for this project."
                />
              </View>
            )}
          </>
        )}

        <ThemePreviewSection />
        <View style={styles.bottomSpacer} />
      </ScrollView>

      <BottomTabBar />

      <ProjectSwitchBottomSheet
        visible={showProjectSheet}
        onClose={() => setShowProjectSheet(false)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEF2F5',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 20,
  },
  emptyBody: {
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  infoSection: {
    paddingHorizontal: 20,
    marginTop: 24,
  },
  bottomSpacer: {
    height: 20,
  },
});
