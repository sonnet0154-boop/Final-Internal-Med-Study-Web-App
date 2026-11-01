import { describe, expect, it } from 'vitest';
import { splitPoints } from '@/medmaster/lib/points';
import { clinicalSystems } from '@/medmaster/data/masterDocData';

const squash = (s: string) => s.replace(/\s+/g, '');

describe('splitPoints', () => {
  it('keeps semicolons inside brackets with their measurement', () => {
    const t = 'PR (120–200 ms = 3–5 small boxes); QTc corrected (<450 ms in men, <460 ms in women; >500 ms high torsades risk).';
    expect(splitPoints(t)).toEqual(['PR (120–200 ms = 3–5 small boxes);', 'QTc corrected (<450 ms in men, <460 ms in women; >500 ms high torsades risk).']);
  });
  it('starts a new point at each numbered criterion', () => {
    expect(splitPoints('Criteria: (1) Glucose >11; (2) Ketones ≥3')).toEqual(['Criteria:', '(1) Glucose >11;', '(2) Ketones ≥3']);
  });
  it('never changes any clinical text across the whole document', () => {
    for (const s of clinicalSystems) for (const t of s.topics) for (const sec of t.sections)
      for (const line of sec.content.split('\n')) expect(squash(splitPoints(line).join(''))).toBe(squash(line));
  });
});
