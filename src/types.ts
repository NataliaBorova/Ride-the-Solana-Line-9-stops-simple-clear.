export type ZoneType = 'start' | 'works' | 'safety';

export interface StationStop {
  id: number;
  name: string;
  shortName: string;
  zone: ZoneType;
  zoneLabel: string;
  cx: number;
  cy: number;
  isHub?: boolean;
  title: string;
  headline: string;
  body: string;
  analogy: string;
  proTip: string;
  badge?: string;
  iconName?: string;
}

export interface GlossaryTerm {
  term: string;
  definition: string;
  tag: string;
  simpleAnalogy: string;
}

export interface SignalWarning {
  id: string;
  num: string;
  title: string;
  detail: string;
  severity: 'high' | 'critical' | 'caution';
}
