import { describe, it, expect } from 'vitest';
import { examQuestionsList } from '../medmaster/data/examQuestionsData';
import { clinicalSystems } from '../medmaster/data/masterDocData';

describe('Exam Question Bank Verification', () => {
  it('contains exam questions covering all 8 body systems', () => {
    expect(examQuestionsList.length).toBeGreaterThanOrEqual(25);
    const systemIds = new Set(examQuestionsList.map(q => q.systemId));
    
    const requiredSystems = [
      'cardiology',
      'respiratory',
      'gastroenterology',
      'neurology',
      'rheumatology',
      'renal-endocrine',
      'hiv-infectious',
      'dermatology'
    ];

    for (const sys of requiredSystems) {
      expect(systemIds.has(sys)).toBe(true);
    }
  });

  it('ensures every exam question has authoritative content and scoring rubrics', () => {
    for (const q of examQuestionsList) {
      expect(q.id).toBeTruthy();
      expect(q.question.length).toBeGreaterThan(15);
      expect(q.modelAnswer.length).toBeGreaterThan(20);
      expect(q.keyScoringPoints.length).toBeGreaterThanOrEqual(3);
      expect(q.clinicalPearl.length).toBeGreaterThan(20);
      expect(q.sourceExam.length).toBeGreaterThan(3);
      expect(q.pageRef).toBeTruthy();
    }
  });

  it('links every exam question to a valid theory topic in clinicalSystems', () => {
    const allTopicIds = new Set(clinicalSystems.flatMap(s => s.topics.map(t => t.id)));
    const missing: string[] = [];
    for (const q of examQuestionsList) {
      if (!allTopicIds.has(q.topicId)) {
        missing.push(`${q.id} -> ${q.topicId}`);
      }
    }
    if (missing.length > 0) {
      console.log('Missing topic IDs:', missing);
    }
    expect(missing).toEqual([]);
  });

  it('contains zero errata meta-commentary or negative text about source docs', () => {
    const forbiddenPhrases = [
      'compilation',
      'erroneous',
      'source doc error',
      'flawed textbook',
      'incorrect answer in'
    ];

    for (const q of examQuestionsList) {
      for (const phrase of forbiddenPhrases) {
        expect(q.question.toLowerCase()).not.toContain(phrase);
        expect(q.modelAnswer.toLowerCase()).not.toContain(phrase);
        expect(q.clinicalPearl.toLowerCase()).not.toContain(phrase);
      }
    }
  });
});
