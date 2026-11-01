import type { ClinicalSection, Topic } from '../../types';

/** Researched content that fills gaps between the exam scope breakdown and the original study document. */
export interface ScopeAddition {
  /** New topics; each topic.systemId must match an existing system id. */
  topics: Topic[];
  /** Extra sections appended to existing topics, keyed by existing topic id. */
  sections?: Record<string, ClinicalSection[]>;
}
