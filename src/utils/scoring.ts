export type SeverityLevel = 'S1' | 'S2' | 'S3' | 'S4' | 'S5';
export type SafetyEventType = 'Incident' | 'Near Miss' | 'Observation';

const SEVERITY_LABELS: Record<SeverityLevel, string> = {
  S1: 'Minor',
  S2: 'Low',
  S3: 'Moderate',
  S4: 'High',
  S5: 'Catastrophic',
};

export function getSeverityLabel(severity: SeverityLevel): string {
  return `${severity}. ${SEVERITY_LABELS[severity]}`;
}

export function getAccentColor(severity: SeverityLevel, actionState: string): string {
  if (severity === 'S4' || severity === 'S5') return '#E53935';
  if (actionState.toLowerCase().includes('overdue') || severity === 'S3') return '#FB8C00';
  return '#1E88E5';
}
