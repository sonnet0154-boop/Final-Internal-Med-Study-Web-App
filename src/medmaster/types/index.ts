export type GuidelineMode = 'sa-primary' | 'international-active';

export interface ClinicalSection {
  id: string;
  title: string;
  content: string; // Markdown or formatted text
  dangerBox?: string;
  examAnchor?: string;
  saPublicSectorNote?: string;
  internationalNote?: string;
  recallQuestion?: string;
  recallAnswer?: string;
  diagnosticTable?: {
    headers: string[];
    rows: string[][];
  };
  /** Short citations (guideline name + year, URL) for researched scope additions. */
  references?: string[];
  /** True when added from the exam scope breakdown rather than the original study document. */
  scopeAddition?: boolean;
}

export interface Topic {
  id: string;
  systemId: string;
  title: string;
  frequency: number; // Page appearances in 2021-2022 SA exam source
  sourcePages: string;
  preview1Min: string;
  redFlags: string[];
  sections: ClinicalSection[];
  tags: string[];
  /** True when the whole topic was added from the exam scope breakdown. */
  scopeAddition?: boolean;
}

export interface ClinicalSystem {
  id: string;
  number: string;
  title: string;
  shortTitle: string;
  icon: string;
  color: string;
  description: string;
  topics: Topic[];
}

export interface CaseStudy {
  id: string;
  number: number;
  title: string;
  vignette: string;
  sourceThemes: string;
  system: string;
  timeLimitSeconds: number;
  questions: string[];
  answerStructure: {
    problemRepresentation: string;
    syndromeAndDangerousAlternative: string;
    nextSafeStep: string;
    usefulTest: string;
    modelAnswerKey: string[];
    localExamNote: string;
  };
}

export interface GuidelineDifference {
  id: string;
  topic: string;
  system: string;
  safeLearningPoint: string;
  saProtocol: string;
  internationalGuideline: string;
  examTrapWarning: string;
  sourceGuideline: string;
}

export interface ExamQuestion {
  id: string;
  systemId: string;
  systemTitle: string;
  topicId: string;
  sourceExam: string;
  pageRef: string;
  questionType: 'short-answer' | 'vignette' | 'staging-criteria' | 'osce-spotter';
  question: string;
  modelAnswer: string;
  keyScoringPoints: string[];
  clinicalPearl: string;
  difficulty: 'High-Yield Core' | 'Examiner Favourite' | 'Clinical Vignette';
}

