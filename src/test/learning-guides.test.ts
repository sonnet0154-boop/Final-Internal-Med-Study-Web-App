import { describe, expect, it } from 'vitest';
import { baseClinicalSystems } from '@/medmaster/data/masterDocData';
import { learningGuides } from '@/medmaster/data/scope/learningGuides';

describe('Connected theory guides', () => {
  it('provides a connecting explanation for every original topic without replacing its sections', () => {
    for (const topic of baseClinicalSystems.flatMap(system => system.topics)) {
      const guide = learningGuides[topic.id];
      expect(guide, topic.id).toBeDefined();
      expect(guide?.sequence.length, topic.id).toBe(4);
      expect(guide?.references.every(ref => ref.startsWith('https://')), topic.id).toBe(true);
    }
  });
});