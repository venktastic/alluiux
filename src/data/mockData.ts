import { SeverityLevel, SafetyEventType } from '../utils/scoring';

export interface Project {
  id: string;
  name: string;
  subtitle: string;
  hasNAIFlow: boolean;
  hasNAIHub: boolean;
}

export interface FlowItem {
  id: string;
  label: string;
  color: string;
  iconType: 'observation' | 'nearmiss' | 'incident';
}

export interface HubBot {
  id: string;
  name: string;
  color: string;
  iconType: 'hse' | 'osha' | 'acwa';
}

export interface SafetyAlert {
  id: string;
  title: string;
  referenceId: string;
  eventType: SafetyEventType;
  severity: SeverityLevel;
  actionState: string;
  dueDate: Date;
  score: number;
}

export interface AppTheme {
  id: string;
  name: string;
  primary: string;
  dark: string;
  lightAccent: string;
}

export const projects: Project[] = [
  { id: 'navatech-prod', name: 'Navatech Production', subtitle: 'Navatech', hasNAIFlow: true, hasNAIHub: true },
  { id: 'qiddiya-demo', name: 'Qiddiya Demo Project', subtitle: 'Qiddiya', hasNAIFlow: true, hasNAIHub: false },
  { id: 'acwa-tower', name: 'ACWA Tower A', subtitle: 'ACWA Power', hasNAIFlow: false, hasNAIHub: true },
  { id: 'legacy-ws', name: 'Legacy Workspace', subtitle: 'Navatech', hasNAIFlow: false, hasNAIHub: false },
];

export const flowItems: FlowItem[] = [
  { id: 'obs', label: 'Observation', color: '#4CAF50', iconType: 'observation' },
  { id: 'inc', label: 'Incident', color: '#E53935', iconType: 'incident' },
  { id: 'nm', label: 'Near Miss', color: '#FB8C00', iconType: 'nearmiss' },
];

export const hubBots: HubBot[] = [
  { id: 'hse', name: 'HSE', color: '#1E88E5', iconType: 'hse' },
  { id: 'osha', name: 'OSHA', color: '#2E7D32', iconType: 'osha' },
  { id: 'acwa', name: 'ACWA Power', color: '#1565C0', iconType: 'acwa' },
];

const navProdAlerts: SafetyAlert[] = [
  {
    id: '1',
    title: 'Fall From Height',
    referenceId: 'NAVINC12',
    eventType: 'Incident',
    severity: 'S5',
    actionState: 'Pending investigation',
    dueDate: new Date('2025-12-12'),
    score: 8,
  },
  {
    id: '2',
    title: 'Scaffold Access Hazard',
    referenceId: 'NAVNM04',
    eventType: 'Near Miss',
    severity: 'S4',
    actionState: 'Pending closure',
    dueDate: new Date('2025-12-21'),
    score: 7,
  },
  {
    id: '3',
    title: 'PPE Non-Compliance',
    referenceId: 'NAVOBS08',
    eventType: 'Observation',
    severity: 'S3',
    actionState: 'Overdue',
    dueDate: new Date('2025-12-18'),
    score: 6,
  },
];

const projectAlerts: Record<string, SafetyAlert[]> = {
  'navatech-prod': navProdAlerts.sort((a, b) => b.score - a.score),
  'qiddiya-demo': [],
  'acwa-tower': [],
  'legacy-ws': [],
};

export function getAlertsForProject(projectId: string): SafetyAlert[] {
  return projectAlerts[projectId] || [];
}

export const themes: AppTheme[] = [
  { id: 'default', name: 'Default', primary: '#243447', dark: '#1A2332', lightAccent: '#E8EDF2' },
  { id: 'royal-blue', name: 'Royal Blue', primary: '#4E73DF', dark: '#3559C7', lightAccent: '#EAF0FF' },
  { id: 'emerald', name: 'Emerald', primary: '#1F8A70', dark: '#146C58', lightAccent: '#E7F6F1' },
  { id: 'safety-orange', name: 'Orange', primary: '#F08C00', dark: '#D97706', lightAccent: '#FFF4E6' },
  { id: 'deep-teal', name: 'Teal', primary: '#0F766E', dark: '#115E59', lightAccent: '#E6FFFB' },
  { id: 'plum', name: 'Plum', primary: '#7C3AED', dark: '#6D28D9', lightAccent: '#F3E8FF' },
  { id: 'slate-blue', name: 'Slate', primary: '#486581', dark: '#334E68', lightAccent: '#EAF2F8' },
];
