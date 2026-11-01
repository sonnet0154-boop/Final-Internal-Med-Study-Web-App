/**
 * Presentation-only splitting of dense clinical prose into separate points.
 * Segments are exact substrings: joining them (with the trimmed whitespace)
 * reproduces the original text, so no clinical wording or units change.
 * Splits only at top-level semicolons, numbered "(1)" markers and sentence
 * ends — never inside parentheses, where qualifiers and thresholds live.
 */
export function splitPoints(text: string): string[] {
  const points: string[] = [];
  let depth = 0;
  let start = 0;
  const push = (end: number) => {
    const piece = text.slice(start, end).trim();
    if (piece) points.push(piece);
    start = end;
  };
  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    if (ch === '(' || ch === '[') {
      // A numbered marker like "(2) " at top level starts a new point.
      if (depth === 0 && /^\(\d{1,2}\)\s/.test(text.slice(i, i + 5)) && i > start) push(i);
      depth++;
    } else if (ch === ')' || ch === ']') depth = Math.max(0, depth - 1);
    else if (depth === 0 && ch === ';' && text[i + 1] === ' ') push(i + 1);
    else if (depth === 0 && ch === '.' && text[i + 1] === ' ' && /[A-Z0-9]/.test(text[i + 2] ?? '') && !/(\b[A-Z]|\b(?:e\.g|i\.e|vs|Dr|approx|etc))$/.test(text.slice(start, i))) push(i + 1);
  }
  push(text.length);
  return points;
}

const emojiRules: [RegExp, string][] = [
  [/danger|emergenc|red flag|shock|arrest|storm|crisis/i, '🚨'],
  [/treat|manag|therap|drug|pharmac|dose|step/i, '💊'],
  [/diagnos|criteria|investigat|test|ecg|imaging|lab/i, '🔍'],
  [/patho|mechanis|physiolog|cause|aetiolog/i, '⚙️'],
  [/present|symptom|sign|clinical|feature/i, '🩺'],
  [/score|classif|grade|stag/i, '📊'],
  [/complication|prognos|follow|monitor/i, '📈'],
];

export function sectionEmoji(title: string): string {
  return emojiRules.find(([re]) => re.test(title))?.[1] ?? '📍';
}

/** Mnemonics and named frameworks already written in the source text. */
const AUTHORED = /\b(ABCDE|CURB-65|CHA2DS2-VASc|CHA2DS2-VA|HAS-BLED|SOCRATES|MUDPILES|TIMI|GRACE|qSOFA|SIRS|FAST|AVPU|GCS|Diagnostic Triad[^.:\n]*|\d+ Pillars[^.:\n]*|Four [A-Z][a-z]+ [A-Za-z]+ Steps)\b/g;

export function findAuthoredMnemonics(texts: string[]): string[] {
  const found = new Set<string>();
  for (const t of texts) for (const m of t.matchAll(AUTHORED)) found.add(m[0].trim());
  return [...found].slice(0, 6);
}
