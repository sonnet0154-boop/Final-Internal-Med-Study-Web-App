import React, { useState } from 'react';
import { AlertTriangle, Flame, Bookmark, CheckCircle2, Eye, EyeOff, Globe, ShieldCheck, Brain, ArrowUp, Heart, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heartIllustration from '@/assets/heart-study.jpg';
import { Topic, GuidelineMode } from '../types';
import { splitPoints } from '../lib/points';
import { learningGuides } from '../data/scope/learningGuides';
import { ChevronLeft, ChevronRight, Sparkles, Library } from 'lucide-react';

interface TopicViewerProps {
  topic: Topic;
  systemTitle: string;
  guidelineMode: GuidelineMode;
  activeRecallMode: boolean;
  isMastered: boolean;
  onToggleMastered: () => void;
  isBookmarked: boolean;
  onToggleBookmark: () => void;
  onStartQuiz: () => void;
  prevTopic?: { title: string } | undefined;
  nextTopic?: { title: string } | undefined;
  onPrev: () => void;
  onNext: () => void;
}

function Emphasis({ text, tags }: { text: string; tags: string[] }) {
  const escaped = tags.filter(t => t.length > 2).map(t => t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
  if (!escaped.length) return <>{text}</>;
  const pattern = new RegExp(`(${escaped.join('|')})`, 'gi');
  return <>{text.split(pattern).map((part, i) => tags.some(t => t.toLowerCase() === part.toLowerCase()) ? <mark key={i}>{part}</mark> : part)}</>;
}

function Points({ text, tags }: { text: string; tags: string[] }) {
  const pts = splitPoints(text);
  if (pts.length < 2) return <p><Emphasis text={text} tags={tags} /></p>;
  return <ul className="point-list">{pts.map((pt, i) => <li key={i}><Emphasis text={pt} tags={tags} /></li>)}</ul>;
}

function TheoryText({ text, tags }: { text: string; tags: string[] }) {
  return <div className="theory-prose">{text.split('\n').filter(Boolean).map((line, i) => {
    const number = line.match(/^(\d+)\.\s/);
    const bullet = /^[-•]\s/.test(line);
    const body = line.replace(/^(\d+\.\s|[-•]\s)/, '');
    const colon = body.indexOf(':');
    const label = colon > 0 && colon < 85 ? body.slice(0, colon + 1) : '';
    const rest = label ? body.slice(colon + 1).trim() : body;
    const pts = splitPoints(rest);
    return <div key={i} className={number ? 'theory-step' : bullet ? 'theory-bullet' : 'theory-paragraph'}>
      {number && <span className="step-number">{number[1]}</span>}
      {bullet && <span className="bullet-dot" aria-hidden="true" />}
      <div className="min-w-0 flex-1">{label && <strong className="point-label">{label}</strong>}{pts.length > 1 ? <ul className="point-list">{pts.map((pt, j) => <li key={j}><Emphasis text={pt} tags={tags} /></li>)}</ul> : <p className={label ? 'inline' : ''}>{label && ' '}<Emphasis text={rest} tags={tags} /></p>}</div>
    </div>;
  })}</div>;
}

const systemEmojis: Record<string, string> = { cardiology: '🫀', respiratory: '🫁', pulmonology: '🫁', neurology: '🧠', gastroenterology: '🍽️', nephrology: '💧', endocrinology: '⚖️', haematology: '🩸', infectious: '🦠', rheumatology: '🦴' };

export const TopicViewer: React.FC<TopicViewerProps> = ({ topic, systemTitle, guidelineMode, activeRecallMode, isMastered, onToggleMastered, isBookmarked, onToggleBookmark, onStartQuiz, prevTopic, nextTopic, onPrev, onNext }) => {
  const learningGuide = learningGuides[topic.id];
  const [revealed, setRevealed] = useState<Record<string, boolean>>({});
  const toggle = (id: string) => setRevealed(prev => ({ ...prev, [id]: !prev[id] }));
  return <article className="study-reader" id="topic-top">
    <div className="reader-breadcrumb"><span aria-hidden="true">{systemEmojis[topic.systemId] || '📚'}</span>{systemTitle}{topic.scopeAddition ? <span className="test-frequency"><Sparkles size={14} />Added from exam scope</span> : <span className="test-frequency"><Flame size={14} />{topic.frequency}x tested</span>}</div>
    <header className="topic-heading">
      <h1>{topic.title}</h1>
      <div className="topic-actions no-print">
        <Button variant="outline" size="sm" aria-pressed={isBookmarked} aria-label={isBookmarked ? 'Remove bookmark' : 'Bookmark topic'} onClick={onToggleBookmark}><Bookmark className={isBookmarked ? 'fill-primary text-primary' : ''} />{isBookmarked ? 'Saved' : 'Save'}</Button>
        <Button variant={isMastered ? 'secondary' : 'outline'} size="sm" onClick={onToggleMastered} aria-pressed={isMastered}><CheckCircle2 />{isMastered ? 'Mastered' : 'Mark as mastered'}</Button>
        <Button variant="secondary" size="sm" onClick={onStartQuiz}><Brain />Quiz me</Button>
        <span className="topic-source">Exam source: {topic.sourcePages}</span>
      </div>
    </header>

    <section className={`clinical-preview ${topic.systemId === 'cardiology' ? 'has-illustration' : ''}`} aria-labelledby="preview-title">
      <div><h2 id="preview-title"><BookOpen size={17} />The one-minute overview</h2><p><Emphasis text={topic.preview1Min} tags={topic.tags} /></p><div className="topic-tags">{topic.tags.map(tag => <span key={tag}>{tag}</span>)}</div></div>
      {topic.systemId === 'cardiology' && <figure className="heart-illustration"><img src={heartIllustration} width={768} height={768} alt="Illustrative anterior view of the heart" /><figcaption><Heart size={12} />Cardiology</figcaption></figure>}
    </section>

    {learningGuide && <section className="concept-guide" aria-labelledby="concept-guide-title">
      <h2 id="concept-guide-title">How the concepts connect</h2>
      <p>{learningGuide.explanation}</p>
      <ol className="concept-sequence">{learningGuide.sequence.map((step, i) => <li key={step}><span>{i + 1}</span>{step}</li>)}</ol>
      <details className="section-references"><summary><Library size={14} />Explanation sources</summary><ul>{learningGuide.references.map(ref => <li key={ref}><a href={ref} target="_blank" rel="noreferrer">{ref}</a></li>)}</ul></details>
    </section>}
    <details className="reader-outline no-print"><summary><BookOpen size={16} />Topic outline</summary><nav aria-label="On this page" className="section-jumps"><div>{topic.sections.map((s, i) => <a href={`#section-${s.id}`} key={s.id}><span>{String(i + 1).padStart(2, '0')}</span>{s.title}</a>)}</div></nav></details>

    {topic.redFlags.length > 0 && <section className="study-callout danger red-flags"><h2><AlertTriangle size={18} />Red flags — don't miss these</h2><ul>{topic.redFlags.map((flag, i) => <li key={i}>{flag}</li>)}</ul></section>}

    {activeRecallMode && <div className="recall-toolbar no-print"><span><Brain size={18} />Active recall</span><div className="flex gap-2"><Button size="sm" variant="outline" onClick={() => setRevealed(Object.fromEntries(topic.sections.map(s => [s.id, true])))}><Eye />Reveal all</Button><Button size="sm" variant="ghost" onClick={() => setRevealed({})}><EyeOff />Hide all</Button></div></div>}

    {topic.sections.map((section, idx) => <section id={`section-${section.id}`} key={section.id} className={`theory-section section-tone-${idx % 3}`}>
      <div className="section-heading"><span className="section-number" aria-hidden="true">{String(idx + 1).padStart(2, '0')}</span><h2>{section.title}</h2>{section.scopeAddition && <span className="scope-chip"><Sparkles size={12} />Researched</span>}</div>
      <TheoryText text={section.content} tags={[]} />
      {section.diagnosticTable && <div className="diagnostic-table" role="region" aria-label={`${section.title} reference table`} tabIndex={0}><table><thead><tr>{section.diagnosticTable.headers.map((h, i) => <th key={i}>{h}</th>)}</tr></thead><tbody>{section.diagnosticTable.rows.map((row, i) => <tr key={i}>{row.map((cell, j) => <td key={j}>{cell}</td>)}</tr>)}</tbody></table></div>}
      {section.dangerBox && <aside className="study-callout danger"><h3><AlertTriangle size={17} />Safety warning</h3><Points text={section.dangerBox} tags={[]} /></aside>}
    </section>)}
    <section className="supporting-notes" aria-labelledby="supporting-notes-title">
      <h2 id="supporting-notes-title">Exam notes & protocols</h2>
      {topic.sections.filter(section => section.examAnchor || section.saPublicSectorNote || section.internationalNote || section.references?.length).map(section => <details key={section.id} className="topic-note">
        <summary>{section.title}</summary>
        {section.examAnchor && <aside className="study-callout exam"><h3><Flame size={17} />Exam anchor</h3><Points text={section.examAnchor} tags={[]} /></aside>}
        {section.saPublicSectorNote && <aside className="study-callout local"><h3><ShieldCheck size={17} />South African STG / EML protocol</h3><Points text={section.saPublicSectorNote} tags={[]} /></aside>}
        {section.internationalNote && <aside className={`study-callout international ${guidelineMode === 'international-active' ? 'emphasized' : ''}`}><h3><Globe size={17} />International evidence update</h3><Points text={section.internationalNote} tags={[]} /></aside>}
        {section.references && <div className="section-references"><h3><Library size={14} />Sources</h3><ul>{section.references.map((ref, i) => <li key={i}>{ref}</li>)}</ul></div>}
      </details>)}
    </section>
    <section className="supporting-notes" aria-labelledby="recall-notes-title">
      <h2 id="recall-notes-title">Recall practice</h2>
      {topic.sections.filter(section => section.recallQuestion).map(section => <details key={section.id} className="topic-note" open={activeRecallMode || undefined}>
        <summary>{section.title}</summary>
        <div className="recall-question"><p className="font-semibold">{section.recallQuestion}</p>{activeRecallMode && !revealed[section.id] ? <Button variant="outline" onClick={() => toggle(section.id)} className="recall-reveal no-print"><Eye />Reveal answer</Button> : <details className="recall-answer"><summary>Model answer</summary><Points text={section.recallAnswer ?? ''} tags={[]} /></details>}</div>
      </details>)}
    </section>

    <footer className="reader-completion no-print"><div><CheckCircle2 /><h2>{isMastered ? 'Another topic mastered.' : 'One topic closer.'}</h2></div><Button onClick={onToggleMastered} variant={isMastered ? 'secondary' : 'default'}><CheckCircle2 />{isMastered ? 'Marked as mastered' : 'Mark as mastered'}</Button><a href="#topic-top" aria-label="Back to top" title="Back to top"><ArrowUp size={18} /></a></footer>
    <nav className="topic-pager no-print" aria-label="Topic navigation">
      {prevTopic ? <Button variant="outline" onClick={onPrev} className="pager-btn"><ChevronLeft /><span><small>Previous</small>{prevTopic.title}</span></Button> : <span />}
      {nextTopic && <Button onClick={onNext} className="pager-btn next"><span><small>Next topic</small>{nextTopic.title}</span><ChevronRight /></Button>}
    </nav>
  </article>;
};
