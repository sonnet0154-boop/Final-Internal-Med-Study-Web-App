import React, { useState, useEffect } from 'react';
import { 
  GraduationCap, Search, CheckCircle2, Bookmark, ArrowRight, 
  Sparkles, ShieldAlert, BookOpen, Layers, Eye, EyeOff, RotateCcw,
  HelpCircle, Award, Stethoscope, ChevronRight, Check, X
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { examQuestionsList } from '../data/examQuestionsData';
import { ExamQuestion } from '../types';

interface ExamQuestionBankProps {
  onSelectTopic: (topicId: string) => void;
}

export const ExamQuestionBank: React.FC<ExamQuestionBankProps> = ({ onSelectTopic }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSystem, setSelectedSystem] = useState<string>('all');
  const [selectedType, setSelectedType] = useState<string>('all');
  const [masteryFilter, setMasteryFilter] = useState<'all' | 'unmastered' | 'mastered'>('all');
  const [isSelfTestMode, setIsSelfTestMode] = useState<boolean>(true);
  
  // Track revealed answers in self-test mode
  const [revealedIds, setRevealedIds] = useState<string[]>([]);
  // Track user typed attempts in scratchpads
  const [userAnswers, setUserAnswers] = useState<Record<string, string>>({});
  
  // Mastered questions stored in localStorage
  const [masteredQuestionIds, setMasteredQuestionIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('im_mastered_exam_questions');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('im_mastered_exam_questions', JSON.stringify(masteredQuestionIds));
    } catch {
      // ignore storage errors
    }
  }, [masteredQuestionIds]);

  const toggleMastery = (qId: string) => {
    setMasteredQuestionIds(prev => 
      prev.includes(qId) ? prev.filter(id => id !== qId) : [...prev, qId]
    );
  };

  const toggleReveal = (qId: string) => {
    setRevealedIds(prev => 
      prev.includes(qId) ? prev.filter(id => id !== qId) : [...prev, qId]
    );
  };

  const revealAll = () => {
    setRevealedIds(examQuestionsList.map(q => q.id));
  };

  const hideAll = () => {
    setRevealedIds([]);
  };

  // Filter questions
  const filteredQuestions = examQuestionsList.filter(q => {
    const matchesSearch = 
      q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.modelAnswer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.clinicalPearl.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.pageRef.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.sourceExam.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.keyScoringPoints.some(pt => pt.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesSystem = selectedSystem === 'all' || q.systemId === selectedSystem;
    const matchesType = selectedType === 'all' || q.questionType === selectedType;
    const isMastered = masteredQuestionIds.includes(q.id);
    const matchesMastery = 
      masteryFilter === 'all' || 
      (masteryFilter === 'mastered' && isMastered) || 
      (masteryFilter === 'unmastered' && !isMastered);

    return matchesSearch && matchesSystem && matchesType && matchesMastery;
  });

  const totalCount = examQuestionsList.length;
  const masteredCount = masteredQuestionIds.length;
  const progressPercent = Math.round((masteredCount / totalCount) * 100);

  const systemsList = [
    { id: 'all', label: 'All Systems', icon: '📚' },
    { id: 'cardiology', label: 'Cardiology', icon: '🫀' },
    { id: 'respiratory', label: 'Respiratory', icon: '🫁' },
    { id: 'gastroenterology', label: 'Gastro & Liver', icon: '🍽️' },
    { id: 'neurology', label: 'Neurology', icon: '🧠' },
    { id: 'rheumatology', label: 'Rheumatology', icon: '🦴' },
    { id: 'renal-endocrine', label: 'Nephro & Endo', icon: '💧' },
    { id: 'hiv-infectious', label: 'Infections & Haem', icon: '🦠' },
    { id: 'dermatology', label: 'Dermatology', icon: '✨' },
  ];

  return (
    <div className="study-reader max-w-5xl mx-auto px-4 py-6 space-y-6">
      
      {/* Hero Exam Header Banner */}
      <div className="rounded-2xl p-6 bg-gradient-to-r from-slate-900 via-indigo-950/60 to-slate-900 border border-indigo-500/30 text-white shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-6 -mr-6 w-36 h-36 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none" />
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-5 relative z-10">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-semibold tracking-wide uppercase border border-indigo-500/30">
              <GraduationCap size={14} /> Past Exam Question Bank & Self-Testing Tool
            </div>
            <h1 className="text-2xl md:text-3xl font-bold font-display tracking-tight text-white">
              Past Exam Questions & Gold-Standard Model Answers
            </h1>
            <p className="text-indigo-200/80 text-sm max-w-2xl leading-relaxed">
              Curated from 61 pages of South African MBChB internal medicine block exams, OSCE stations, and clinical vivas. Practice active recall, review authoritative scoring rubrics, and learn the exact questions examiners ask.
            </p>
          </div>

          {/* Quick Mastery Stat Block */}
          <div className="flex flex-row md:flex-col gap-3 shrink-0 p-3.5 rounded-xl bg-slate-900/80 border border-indigo-500/30 min-w-[180px]">
            <div className="flex items-center justify-between gap-3 text-xs">
              <span className="text-slate-400 font-medium">Exam Mastery:</span>
              <span className="font-bold text-indigo-300">{masteredCount} / {totalCount} ({progressPercent}%)</span>
            </div>
            <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-indigo-500 to-emerald-400 transition-all duration-300 rounded-full"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
            <div className="text-[11px] text-slate-400 flex items-center justify-between">
              <span>8 Systems Covered</span>
              <span>61 Exam Pages</span>
            </div>
          </div>
        </div>
      </div>

      {/* Control & Filter Toolbar */}
      <div className="space-y-3">
        {/* Search Bar + Mode Toggle */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <input
              type="text"
              placeholder="Search exam questions by disease, sign, drug, or page (e.g., 'Aortic regurgitation', 'CURB-65', 'Thiamine', 'p. 56')..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-sm rounded-xl bg-card border border-border focus:outline-none focus:ring-2 focus:ring-primary shadow-xs"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground text-xs"
              >
                Clear
              </button>
            )}
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <Button
              size="sm"
              variant={isSelfTestMode ? 'default' : 'outline'}
              onClick={() => setIsSelfTestMode(v => !v)}
              className="text-xs h-9 gap-1.5 font-medium shadow-xs"
            >
              <Award size={14} />
              {isSelfTestMode ? 'Self-Test Mode: Active' : 'Browse All Answers'}
            </Button>

            {isSelfTestMode && (
              <Button
                size="sm"
                variant="ghost"
                onClick={revealedIds.length > 0 ? hideAll : revealAll}
                className="text-xs h-9 text-muted-foreground hover:text-foreground"
                title="Toggle reveal all answers"
              >
                {revealedIds.length > 0 ? <EyeOff size={14} className="mr-1" /> : <Eye size={14} className="mr-1" />}
                {revealedIds.length > 0 ? 'Hide All' : 'Reveal All'}
              </Button>
            )}
          </div>
        </div>

        {/* System Filter Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1.5 scrollbar-thin">
          {systemsList.map(sys => (
            <Button
              key={sys.id}
              size="sm"
              variant={selectedSystem === sys.id ? 'secondary' : 'ghost'}
              onClick={() => setSelectedSystem(sys.id)}
              className={`text-xs h-7.5 px-2.5 rounded-lg shrink-0 ${selectedSystem === sys.id ? 'font-semibold border border-primary/30' : 'text-muted-foreground'}`}
            >
              <span className="mr-1">{sys.icon}</span>
              {sys.label}
            </Button>
          ))}
        </div>

        {/* Sub-Filters: Question Format & Mastery Filter */}
        <div className="flex flex-wrap items-center justify-between gap-2 text-xs pt-1 border-t border-border/60">
          <div className="flex items-center gap-1.5">
            <span className="text-muted-foreground font-medium">Format:</span>
            <button
              onClick={() => setSelectedType('all')}
              className={`px-2 py-0.5 rounded text-[11px] ${selectedType === 'all' ? 'bg-primary/20 text-primary font-semibold' : 'text-muted-foreground hover:text-foreground'}`}
            >
              All Types
            </button>
            <button
              onClick={() => setSelectedType('short-answer')}
              className={`px-2 py-0.5 rounded text-[11px] ${selectedType === 'short-answer' ? 'bg-primary/20 text-primary font-semibold' : 'text-muted-foreground hover:text-foreground'}`}
            >
              Short-Answer
            </button>
            <button
              onClick={() => setSelectedType('vignette')}
              className={`px-2 py-0.5 rounded text-[11px] ${selectedType === 'vignette' ? 'bg-primary/20 text-primary font-semibold' : 'text-muted-foreground hover:text-foreground'}`}
            >
              Clinical Vignettes / OSCE
            </button>
            <button
              onClick={() => setSelectedType('staging-criteria')}
              className={`px-2 py-0.5 rounded text-[11px] ${selectedType === 'staging-criteria' ? 'bg-primary/20 text-primary font-semibold' : 'text-muted-foreground hover:text-foreground'}`}
            >
              Criteria & Staging
            </button>
          </div>

          <div className="flex items-center gap-1.5">
            <span className="text-muted-foreground font-medium">Status:</span>
            <button
              onClick={() => setMasteryFilter('all')}
              className={`px-2 py-0.5 rounded text-[11px] ${masteryFilter === 'all' ? 'bg-muted font-semibold text-foreground' : 'text-muted-foreground hover:text-foreground'}`}
            >
              All ({examQuestionsList.length})
            </button>
            <button
              onClick={() => setMasteryFilter('unmastered')}
              className={`px-2 py-0.5 rounded text-[11px] ${masteryFilter === 'unmastered' ? 'bg-amber-500/20 text-amber-300 font-semibold' : 'text-muted-foreground hover:text-foreground'}`}
            >
              To Practice ({totalCount - masteredCount})
            </button>
            <button
              onClick={() => setMasteryFilter('mastered')}
              className={`px-2 py-0.5 rounded text-[11px] ${masteryFilter === 'mastered' ? 'bg-emerald-500/20 text-emerald-300 font-semibold' : 'text-muted-foreground hover:text-foreground'}`}
            >
              Mastered ({masteredCount})
            </button>
          </div>
        </div>
      </div>

      {/* Questions Results Count */}
      <div className="flex items-center justify-between text-xs text-muted-foreground px-1">
        <span>Showing {filteredQuestions.length} of {totalCount} exam questions</span>
        {filteredQuestions.length === 0 && (
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => { setSearchQuery(''); setSelectedSystem('all'); setSelectedType('all'); setMasteryFilter('all'); }}
            className="text-xs h-6 text-primary"
          >
            Reset all filters
          </Button>
        )}
      </div>

      {/* Question Cards List */}
      <div className="space-y-5">
        {filteredQuestions.map((item, index) => {
          const isRevealed = !isSelfTestMode || revealedIds.includes(item.id);
          const isMastered = masteredQuestionIds.includes(item.id);
          const userAttempt = userAnswers[item.id] || '';

          return (
            <div 
              key={item.id}
              className={`rounded-2xl border transition-all duration-200 bg-card overflow-hidden shadow-sm ${
                isMastered 
                  ? 'border-emerald-500/40 bg-emerald-950/5' 
                  : 'border-border hover:border-border/80'
              }`}
            >
              {/* Question Header Bar */}
              <div className="px-5 py-3.5 bg-muted/40 border-b border-border/70 flex flex-wrap items-center justify-between gap-2.5">
                <div className="flex flex-wrap items-center gap-2 text-xs">
                  <span className="font-mono font-bold text-primary px-2 py-0.5 rounded bg-primary/10">
                    Q{index + 1}
                  </span>
                  <span className="px-2 py-0.5 rounded-md bg-secondary/80 font-medium text-secondary-foreground text-[11px]">
                    {item.systemTitle}
                  </span>
                  <span className="px-2 py-0.5 rounded-md bg-muted font-mono text-[11px] text-muted-foreground">
                    {item.sourceExam}
                  </span>
                  <span className={`px-2 py-0.5 rounded-md text-[11px] font-medium ${
                    item.difficulty === 'Examiner Favourite' 
                      ? 'bg-amber-500/15 text-amber-300 border border-amber-500/30' 
                      : item.difficulty === 'Clinical Vignette'
                      ? 'bg-purple-500/15 text-purple-300 border border-purple-500/30'
                      : 'bg-blue-500/15 text-blue-300 border border-blue-500/30'
                  }`}>
                    {item.difficulty}
                  </span>
                </div>

                <div className="flex items-center gap-1.5 shrink-0">
                  <Button
                    size="sm"
                    variant={isMastered ? 'default' : 'outline'}
                    onClick={() => toggleMastery(item.id)}
                    className={`h-7 px-2.5 text-xs rounded-lg gap-1 ${
                      isMastered 
                        ? 'bg-emerald-600 hover:bg-emerald-700 text-white border-transparent' 
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    <CheckCircle2 size={13} className={isMastered ? 'text-white' : 'text-muted-foreground'} />
                    {isMastered ? 'Mastered' : 'Mark Mastered'}
                  </Button>
                </div>
              </div>

              {/* Question Prompt Body */}
              <div className="p-5 space-y-4">
                <div className="text-base sm:text-lg font-semibold text-foreground leading-snug">
                  {item.question}
                </div>

                {/* Self-Test Scratchpad (when in self-test mode) */}
                {isSelfTestMode && !isRevealed && (
                  <div className="space-y-3 pt-1">
                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-muted-foreground flex items-center justify-between">
                        <span>💡 Practice active recall before revealing the model answer:</span>
                        <span className="text-[11px] text-muted-foreground font-mono">Optional scratchpad</span>
                      </label>
                      <textarea
                        rows={2}
                        value={userAttempt}
                        onChange={(e) => setUserAnswers(prev => ({ ...prev, [item.id]: e.target.value }))}
                        placeholder="Type your clinical thought, diagnostic criteria, or drug plan here..."
                        className="w-full text-xs p-3 rounded-xl bg-muted/40 border border-border focus:outline-none focus:ring-1 focus:ring-primary font-sans resize-none"
                      />
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <Button
                        size="sm"
                        onClick={() => toggleReveal(item.id)}
                        className="text-xs h-8 px-4 rounded-xl gap-1.5 bg-primary text-primary-foreground font-semibold shadow-xs"
                      >
                        <Eye size={14} /> Reveal Gold-Standard Model Answer
                      </Button>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => {
                          toggleReveal(item.id);
                          if (!isMastered) toggleMastery(item.id);
                        }}
                        className="text-xs h-8 text-muted-foreground hover:text-emerald-400"
                      >
                        I knew this (reveal & master)
                      </Button>
                    </div>
                  </div>
                )}

                {/* Revealed Answer & Scoring Rubric */}
                {isRevealed && (
                  <div className="space-y-4 pt-2 border-t border-border/60 animate-in fade-in duration-200">
                    
                    {/* User's attempt comparison (if they typed anything) */}
                    {isSelfTestMode && userAttempt.trim() && (
                      <div className="p-3 rounded-xl bg-muted/50 border border-border text-xs space-y-1">
                        <span className="font-semibold text-muted-foreground block text-[11px] uppercase tracking-wider">
                          Your Practice Response:
                        </span>
                        <p className="text-foreground italic font-sans whitespace-pre-wrap">{userAttempt}</p>
                      </div>
                    )}

                    {/* Gold Standard Model Answer Box */}
                    <div className="rounded-xl p-4 bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-300 dark:border-emerald-500/40 text-emerald-950 dark:text-emerald-100 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-wider">
                          <CheckCircle2 size={14} className="text-emerald-600 dark:text-emerald-400" /> Gold-Standard Model Answer
                        </span>
                        {isSelfTestMode && (
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => toggleReveal(item.id)}
                            className="text-[11px] h-6 px-2 text-emerald-700 dark:text-emerald-400 hover:text-emerald-800 dark:hover:text-emerald-300 hover:bg-emerald-100 dark:hover:bg-emerald-900/30"
                          >
                            <EyeOff size={12} className="mr-1" /> Hide
                          </Button>
                        )}
                      </div>
                      <p className="text-sm font-medium leading-relaxed text-emerald-950 dark:text-emerald-50">
                        {item.modelAnswer}
                      </p>
                    </div>

                    {/* Key Scoring Points Examiners Look For */}
                    <div className="rounded-xl p-4 bg-muted/40 border border-border space-y-2">
                      <span className="text-xs font-bold text-foreground uppercase tracking-wider flex items-center gap-1.5">
                        <Award size={13} className="text-primary" /> Key Scoring Criteria (Examiner Checklist):
                      </span>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-muted-foreground pt-1">
                        {item.keyScoringPoints.map((point, pIdx) => (
                          <li key={pIdx} className="flex items-start gap-2 bg-card/60 p-2 rounded-lg border border-border/50">
                            <span className="text-primary font-bold mt-0.5">•</span>
                            <span className="text-foreground/90 font-medium">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Clinical Pearl & Examiner Trap Box */}
                    <div className="rounded-xl p-4 bg-amber-50 dark:bg-amber-950/25 border border-amber-300 dark:border-amber-500/35 text-amber-950 dark:text-amber-100 flex items-start gap-3">
                      <ShieldAlert size={18} className="text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                      <div className="space-y-1 text-xs">
                        <span className="font-bold text-amber-800 dark:text-amber-300 block">
                          Examiner Pearl & High-Yield Clinical Trap:
                        </span>
                        <p className="text-amber-900 dark:text-amber-200/90 leading-relaxed font-sans">
                          {item.clinicalPearl}
                        </p>
                      </div>
                    </div>

                    {/* Footer Actions: Jump to Theory + Mastery Toggle */}
                    <div className="flex flex-wrap items-center justify-between gap-3 pt-2 text-xs">
                      <Button
                        size="sm"
                        variant="secondary"
                        onClick={() => onSelectTopic(item.topicId)}
                        className="h-8 px-3 rounded-lg text-xs gap-1.5 font-medium hover:bg-primary/20 hover:text-primary transition-colors"
                      >
                        <BookOpen size={13} />
                        Read Deep Theory on this Topic <ArrowRight size={13} />
                      </Button>

                      <div className="flex items-center gap-2">
                        <span className="text-muted-foreground text-[11px]">
                          {isMastered ? 'Mastered in Question Bank' : 'Needs more practice'}
                        </span>
                        <Button
                          size="sm"
                          variant={isMastered ? 'outline' : 'default'}
                          onClick={() => toggleMastery(item.id)}
                          className={`h-8 px-3 rounded-lg text-xs font-semibold gap-1.5 ${
                            isMastered 
                              ? 'text-emerald-400 border-emerald-500/40 hover:bg-emerald-950/30' 
                              : 'bg-emerald-600 hover:bg-emerald-700 text-white'
                          }`}
                        >
                          {isMastered ? <Check size={14} /> : <CheckCircle2 size={14} />}
                          {isMastered ? 'Mastered ✓' : 'Mark as Mastered'}
                        </Button>
                      </div>
                    </div>

                  </div>
                )}

              </div>
            </div>
          );
        })}
      </div>

      {/* Footer Navigation Tip */}
      <div className="p-4 rounded-xl bg-muted/40 border border-border text-center text-xs text-muted-foreground space-y-1">
        <p className="font-medium text-foreground">
          Study Recommendation: Practice in Active Recall mode first before reading the model answers.
        </p>
        <p>
          Mastering these questions gives you comprehensive coverage of the tested scenarios across all 8 systems in the 61-page exam textbook.
        </p>
      </div>

    </div>
  );
};
