import React from 'react';
import { View, Text, StyleSheet, Modal, TouchableOpacity, ScrollView } from 'react-native';
import { useAppContext } from '../context/AppContext';
import { projects } from '../data/mockData';

interface Props {
  visible: boolean;
  onClose: () => void;
}

export default function ProjectSwitchBottomSheet({ visible, onClose }: Props) {
  const { selectedProjectId, setSelectedProjectId } = useAppContext();

  const handleSelect = (id: string) => {
    setSelectedProjectId(id);
    onClose();
  };

  return (
    <Modal visible={visible} transparent animationType="slide" onRequestClose={onClose}>
      <TouchableOpacity style={styles.backdrop} activeOpacity={1} onPress={onClose}>
        <View />
      </TouchableOpacity>
      <View style={styles.sheetContainer}>
        <View style={styles.sheet}>
          <View style={styles.handle} />
          <Text style={styles.sheetTitle}>Select Project</Text>
          <ScrollView style={styles.listContainer} bounces={false}>
            {projects.map((project) => {
              const isSelected = project.id === selectedProjectId;
              return (
                <TouchableOpacity
                  key={project.id}
                  style={[styles.projectRow, isSelected && styles.selectedRow]}
                  activeOpacity={0.6}
                  onPress={() => handleSelect(project.id)}
                >
                  <View style={styles.projectInfo}>
                    <Text style={[styles.projectName, isSelected && styles.selectedName]}>
                      {project.name}
                    </Text>
                    <Text style={styles.projectSubtitle}>{project.subtitle}</Text>
                  </View>
                  {isSelected && <Text style={styles.check}>✓</Text>}
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.35)',
  },
  sheetContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  sheet: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingTop: 12,
    paddingBottom: 34,
    paddingHorizontal: 20,
  },
  handle: {
    width: 36,
    height: 4,
    backgroundColor: '#D0D0D0',
    borderRadius: 2,
    alignSelf: 'center',
    marginBottom: 18,
  },
  sheetTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1A1A1A',
    marginBottom: 16,
  },
  listContainer: {
    maxHeight: 320,
  },
  projectRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 14,
    paddingHorizontal: 14,
    borderRadius: 12,
    marginBottom: 4,
  },
  selectedRow: {
    backgroundColor: '#F0F4F8',
  },
  projectInfo: {
    flex: 1,
  },
  projectName: {
    fontSize: 15,
    fontWeight: '600',
    color: '#1A1A1A',
    marginBottom: 2,
  },
  selectedName: {
    fontWeight: '700',
  },
  projectSubtitle: {
    fontSize: 12,
    fontWeight: '400',
    color: '#888888',
  },
  check: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1F8A70',
    marginLeft: 12,
  },
});
