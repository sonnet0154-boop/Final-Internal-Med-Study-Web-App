import { describe, expect, it } from 'vitest';
import { baseClinicalSystems, clinicalSystems } from '@/medmaster/data/masterDocData';
import { scopeAdditions } from '@/medmaster/data/scope';

const allTopics = clinicalSystems.flatMap(s => s.topics);

describe('Exam scope additions', () => {
  it('keeps every original topic and section exactly as written, in its original order', () => {
    for (const base of baseClinicalSystems) {
      const merged = clinicalSystems.find(s => s.id === base.id);
      expect(merged).toBeDefined();
      base.topics.forEach((topic, i) => {
        const m = merged!.topics[i]!;
        expect(m.id).toBe(topic.id);
        topic.sections.forEach((sec, j) => expect(m.sections[j]).toEqual(sec));
      });
    }
  });

  it('attaches every new topic and extra section to a real system or topic', () => {
    const systemIds = new Set(baseClinicalSystems.map(s => s.id));
    const baseTopicIds = new Set(baseClinicalSystems.flatMap(s => s.topics.map(t => t.id)));
    for (const add of scopeAdditions) {
      for (const t of add.topics) expect(systemIds.has(t.systemId), t.id).toBe(true);
      for (const id of Object.keys(add.sections ?? {})) expect(baseTopicIds.has(id), id).toBe(true);
    }
  });

  it('uses unique topic ids and unique section ids within each topic', () => {
    const ids = allTopics.map(t => t.id);
    expect(new Set(ids).size).toBe(ids.length);
    for (const t of allTopics) {
      const sec = t.sections.map(s => s.id);
      expect(new Set(sec).size, t.id).toBe(sec.length);
    }
  });

  it('gives every researched section content, sources and a recall question with answer', () => {
    const added = allTopics.flatMap(t => t.sections).filter(s => s.scopeAddition);
    expect(added.length).toBeGreaterThan(0);
    for (const s of added) {
      expect(s.content.trim().length, s.id).toBeGreaterThan(200);
      expect(s.references?.length ?? 0, s.id).toBeGreaterThan(0);
      expect(s.recallQuestion?.trim(), s.id).toBeTruthy();
      expect(s.recallAnswer?.trim(), s.id).toBeTruthy();
    }
  });
});
