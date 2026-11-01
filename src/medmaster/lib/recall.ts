import type { Topic } from '../types';

export interface RecallCard {
  id: string;
  topicId: string;
  topicTitle: string;
  question: string;
  answer: string;
}
export type RecallRating = 'remembered' | 'partial' | 'again';

export function buildRecallCards(topics: Topic[]): RecallCard[] {
  return topics.flatMap(topic => topic.sections.flatMap(section => {
    if (!section.recallQuestion?.trim() || !section.recallAnswer?.trim()) return [];
    return [{ id: `${topic.id}:${section.id}`, topicId: topic.id, topicTitle: topic.title,
      question: section.recallQuestion, answer: section.recallAnswer }];
  }));
}

export function getRetryCards(cards: RecallCard[], ratings: Record<string, RecallRating>): RecallCard[] {
  return cards.filter(card => ratings[card.id] === 'partial' || ratings[card.id] === 'again');
}

export function summarizeRecall(ratings: Record<string, RecallRating>) {
  const values = Object.values(ratings);
  return {
    reviewed: values.length,
    remembered: values.filter(rating => rating === 'remembered').length,
    partial: values.filter(rating => rating === 'partial').length,
    again: values.filter(rating => rating === 'again').length,
  };
}