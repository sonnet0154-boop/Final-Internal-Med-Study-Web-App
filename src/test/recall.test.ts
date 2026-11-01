import { describe, expect, it } from 'vitest';
import { buildRecallCards, getRetryCards, summarizeRecall } from '@/medmaster/lib/recall';
import { clinicalSystems } from '@/medmaster/data/masterDocData';

describe('Active recall', () => {
  const topics = clinicalSystems.flatMap(system => system.topics);
  const cards = buildRecallCards(topics);

  it('uses original model answers without modifying clinical values', () => {
    for (const topic of topics) {
      for (const section of topic.sections) {
        if (!section.recallQuestion || !section.recallAnswer) continue;
        const card = cards.find(item => item.id === `${topic.id}:${section.id}`);
        expect(card?.question).toBe(section.recallQuestion);
        expect(card?.answer).toBe(section.recallAnswer);
      }
    }
    expect(cards.length).toBeGreaterThan(0);
  });

  it('limits this-topic quizzes to that topic', () => {
    const topic = topics.find(item => item.id === 'ecg-acs');
    expect(topic).toBeDefined();
    const topicCards = buildRecallCards([topic]);
    expect(topicCards.length).toBeGreaterThanOrEqual(2);
    expect(topicCards.every(card => card.topicId === 'ecg-acs')).toBe(true);
  });

  it('retries partial and missed questions but excludes remembered questions', () => {
    const ratings = Object.fromEntries(cards.slice(0, 3).map((card, i) => [card.id, (['remembered', 'partial', 'again'] as const)[i] ?? 'again']));
    expect(getRetryCards(cards, ratings).map(card => card.id)).toEqual(cards.slice(1, 3).map(card => card.id));
  });

  it('counts self-assessment separately without equating it with topic mastery', () => {
    expect(summarizeRecall({ a: 'remembered', b: 'partial', c: 'again', d: 'remembered' })).toEqual({ reviewed: 4, remembered: 2, partial: 1, again: 1 });
  });
});