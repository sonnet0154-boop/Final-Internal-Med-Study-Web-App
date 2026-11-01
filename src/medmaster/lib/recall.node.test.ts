import test from 'node:test';
import assert from 'node:assert/strict';
import { summarizeRecall, getRetryCards } from './recall.ts';

test('summarizeRecall computes accurate counts', () => {
  const result = summarizeRecall({
    q1: 'remembered',
    q2: 'remembered',
    q3: 'partial',
    q4: 'again',
  });
  assert.deepEqual(result, {
    reviewed: 4,
    remembered: 2,
    partial: 1,
    again: 1,
  });
});

test('getRetryCards filters out remembered questions', () => {
  const cards = [
    { id: 'c1', question: 'Q1', answer: 'A1', topicId: 't1', topicTitle: 'T1', systemId: 's1', systemTitle: 'S1' },
    { id: 'c2', question: 'Q2', answer: 'A2', topicId: 't1', topicTitle: 'T1', systemId: 's1', systemTitle: 'S1' },
    { id: 'c3', question: 'Q3', answer: 'A3', topicId: 't1', topicTitle: 'T1', systemId: 's1', systemTitle: 'S1' },
  ];
  const ratings = {
    c1: 'remembered' as const,
    c2: 'partial' as const,
    c3: 'again' as const,
  };
  const retry = getRetryCards(cards, ratings);
  assert.equal(retry.length, 2);
  assert.equal(retry[0].id, 'c2');
  assert.equal(retry[1].id, 'c3');
});
