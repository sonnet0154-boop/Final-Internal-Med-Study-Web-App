import { useMemo, useState } from 'react';
import { ArrowLeft, ArrowRight, Brain, Check, Eye, RotateCcw, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { buildRecallCards, getRetryCards, summarizeRecall, type RecallCard, type RecallRating } from '../lib/recall';
import type { Topic } from '../types';

interface Props { topic: Topic; topics: Topic[]; onReturn: () => void; }

export function RecallQuiz({ topic, topics, onReturn }: Props) {
  const topicCards = useMemo(() => buildRecallCards([topic]), [topic]);
  const allCards = useMemo(() => buildRecallCards(topics), [topics]);
  const [scope, setScope] = useState<'topic' | 'all'>('topic');
  const [deck, setDeck] = useState<RecallCard[] | null>(null);
  const [index, setIndex] = useState(0);
  const [answer, setAnswer] = useState('');
  const [revealed, setRevealed] = useState(false);
  const [ratings, setRatings] = useState<Record<string, RecallRating>>({});
  const card = deck?.[index];
  const summary = summarizeRecall(ratings);
  const start = (cards: RecallCard[]) => {
    setDeck(cards); setIndex(0); setAnswer(''); setRevealed(false); setRatings({});
  };
  const rate = (rating: RecallRating) => {
    if (!card || !revealed) return;
    setRatings(prev => ({ ...prev, [card.id]: rating }));
    setIndex(prev => prev + 1); setAnswer(''); setRevealed(false);
  };
  return <section className="quiz-page" aria-labelledby="quiz-title">
    <Button variant="ghost" size="sm" onClick={onReturn} className="mb-7"><ArrowLeft />Back to theory</Button>
    <div className="quiz-heading"><span className="quiz-emblem"><Brain /></span><div><span className="quiz-eyebrow">A LITTLE PRACTICE, A LITTLE PROGRESS</span><h1 id="quiz-title">Recall garden<span aria-hidden="true"> 🌷</span></h1></div></div>
    {!deck ? <div className="quiz-setup">
      <h2>What are we practising?</h2>
      <div className="quiz-scope" role="group" aria-label="Quiz scope">
        <Button variant="outline" aria-pressed={scope === 'topic'} onClick={() => setScope('topic')} className={scope === 'topic' ? 'selected' : ''}><BookLabel />This topic <span>{topicCards.length}</span></Button>
        <Button variant="outline" aria-pressed={scope === 'all'} onClick={() => setScope('all')} className={scope === 'all' ? 'selected' : ''}><Sparkles />All topics <span>{allCards.length}</span></Button>
      </div>
      <p className="quiz-topic-label">{scope === 'topic' ? topic.title : 'Mixed internal medicine recall'}</p>
      {(scope === 'topic' ? topicCards : allCards).length === 0 ? <p>No recall questions are available for this topic.</p> : <Button size="lg" onClick={() => start(scope === 'topic' ? topicCards : [...allCards].sort(() => Math.random() - 0.5))}><Brain />Start recall quiz<ArrowRight /></Button>}
    </div> : card ? <div className="quiz-session">
      <div className="quiz-progress-label"><span>Question {index + 1} of {deck.length}</span><span>{summary.remembered} recalled</span></div>
      <progress className="quiz-progress" max={deck.length} value={index} aria-label="Quiz progress" />
      <div className="quiz-question" key={card.id}>
        <p className="quiz-topic-label">{card.topicTitle}</p>
        <h2>{card.question}</h2>
        <label htmlFor="recall-response">Your answer, from memory</label>
        <textarea id="recall-response" value={answer} onChange={event => setAnswer(event.target.value)} readOnly={revealed} placeholder="What can you remember?" rows={4} />
        {!revealed ? <div className="quiz-answer-actions"><Button disabled={!answer.trim()} onClick={() => setRevealed(true)}><Eye />Compare answer</Button><Button variant="ghost" onClick={() => setRevealed(true)}>I can't recall yet</Button></div> : <div className="quiz-feedback" aria-live="polite">
          <div className="quiz-model"><h3><Check />Model answer</h3><p>{card.answer}</p></div>
          <h3>How did your answer compare?</h3><p className="quiz-self-note">Self-assessed — your wording does not need to match exactly.</p>
          <div className="quiz-ratings"><Button variant="outline" onClick={() => rate('again')} className="rating-again"><RotateCcw />Not yet</Button><Button variant="outline" onClick={() => rate('partial')} className="rating-partial">Partly</Button><Button variant="outline" onClick={() => rate('remembered')} className="rating-remembered"><Check />Got it</Button></div>
        </div>}
      </div>
      <Button variant="ghost" size="sm" className="mt-5" onClick={() => setDeck(null)}>End session</Button>
    </div> : <div className="quiz-results" aria-live="polite">
      <span className="result-flower" aria-hidden="true">🌼</span><h2>Practice complete.</h2><p>{summary.remembered === summary.reviewed ? 'A lovely little win for your memory.' : 'Every attempt is a step forward.'}</p>
      <div className="quiz-stats"><div><strong>{summary.remembered}</strong><span>Got it</span></div><div><strong>{summary.partial}</strong><span>Partly</span></div><div><strong>{summary.again}</strong><span>Not yet</span></div></div>
      <p className="quiz-self-note">Your self-assessed recall this round · {summary.reviewed} questions</p>
      <div className="quiz-result-actions">{getRetryCards(deck, ratings).length > 0 && <Button onClick={() => start(getRetryCards(deck, ratings))}><RotateCcw />Practise missed questions ({getRetryCards(deck, ratings).length})</Button>}<Button variant="outline" onClick={() => start(deck)}><RotateCcw />Repeat quiz</Button><Button variant="ghost" onClick={onReturn}><ArrowLeft />Back to theory</Button></div>
    </div>}
  </section>;
}

function BookLabel() { return <span aria-hidden="true">📖</span>; }