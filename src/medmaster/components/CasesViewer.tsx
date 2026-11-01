import React, { useState, useEffect } from 'react';
import { 
  Play, 
  Pause, 
  RotateCcw, 
  Sparkles, 
  Clock, 
  ChevronRight, 
  CheckCircle2, 
  ShieldAlert, 
  AlertCircle,
  HelpCircle,
  Award
} from 'lucide-react';
import { caseStudies } from '../data/casesData';
import { CaseStudy } from '../types';

export const CasesViewer: React.FC = () => {
  const [selectedCaseId, setSelectedCaseId] = useState<string>(caseStudies[0]!.id);
  const [revealedSteps, setRevealedSteps] = useState<Record<string, number>>({});
  
  // 90-second case timer state
  const [secondsLeft, setSecondsLeft] = useState<number>(90);
  const [isTimerActive, setIsTimerActive] = useState<boolean>(false);

  const currentCase = caseStudies.find(c => c.id === selectedCaseId) || caseStudies[0]!;
  const currentStep = revealedSteps[currentCase.id] || 0;

  // Timer effect
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isTimerActive && secondsLeft > 0) {
      interval = setInterval(() => {
        setSecondsLeft(prev => prev - 1);
      }, 1000);
    } else if (secondsLeft === 0) {
      setIsTimerActive(false);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isTimerActive, secondsLeft]);

  // Reset timer when changing case
  const handleSelectCase = (caseId: string) => {
    setSelectedCaseId(caseId);
    setSecondsLeft(90);
    setIsTimerActive(false);
  };

  const startTimer = () => setIsTimerActive(true);
  const pauseTimer = () => setIsTimerActive(false);
  const resetTimer = () => {
    setIsTimerActive(false);
    setSecondsLeft(90);
  };

  const advanceStep = () => {
    setRevealedSteps(prev => ({
      ...prev,
      [currentCase.id]: Math.min(5, (prev[currentCase.id] || 0) + 1)
    }));
  };

  const revealAll = () => {
    setRevealedSteps(prev => ({
      ...prev,
      [currentCase.id]: 5
    }));
  };

  const resetSteps = () => {
    setRevealedSteps(prev => ({
      ...prev,
      [currentCase.id]: 0
    }));
  };

  // Timer progress percentage
  const timerPercent = Math.round(((90 - secondsLeft) / 90) * 100);

  return (
    <div className="flex-1 bg-graph-paper min-h-[calc(100vh-65px)] p-4 sm:p-6 lg:p-10 max-w-6xl mx-auto space-y-8">
      
      {/* Intro Header */}
      <div className="bg-white rounded-xl border border-slate-200/90 p-5 md:p-6 shadow-xs break-inside-avoid">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800 uppercase tracking-wider mb-1">
              <Sparkles className="w-4 h-4 text-emerald-600" />
              <span>OSCE & 90-Second Rapid Case Simulator</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-display font-bold text-slate-900 tracking-tight">
              South African Internal Medicine Exam Cases
            </h1>
            <p className="text-xs md:text-sm text-slate-600 mt-1 max-w-2xl leading-relaxed">
              Adapted from verified 2021–2022 block exam papers. Practice formulating your problem representation, lethal differential, next safe step, and decisive test in 90 seconds.
            </p>
          </div>

          {/* Global Case Selector Dropdown for Mobile / Quick Jump */}
          <div className="w-full sm:w-auto">
            <select
              value={selectedCaseId}
              onChange={(e) => handleSelectCase(e.target.value)}
              className="w-full sm:w-64 px-3 py-2 text-xs font-medium bg-slate-50 border border-slate-200 rounded-lg text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-700/20"
            >
              {caseStudies.map(c => (
                <option key={c.id} value={c.id}>
                  Case {c.number}: {c.title}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* 90-Second Answer Strategy Guide */}
        <div className="mt-4 pt-4 border-t border-slate-100 grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs">
          <div className="p-2 rounded-lg bg-slate-50 border border-slate-100">
            <span className="font-bold text-slate-900 block">1. Problem Rep</span>
            <span className="text-[11px] text-slate-500">Age + Course + Pattern</span>
          </div>
          <div className="p-2 rounded-lg bg-slate-50 border border-slate-100">
            <span className="font-bold text-slate-900 block">2. Syndrome & Danger</span>
            <span className="text-[11px] text-slate-500">Most likely + Exclude lethal</span>
          </div>
          <div className="p-2 rounded-lg bg-slate-50 border border-slate-100">
            <span className="font-bold text-slate-900 block">3. Next Safe Step</span>
            <span className="text-[11px] text-slate-500">ABCDE & Resuscitate first</span>
          </div>
          <div className="p-2 rounded-lg bg-slate-50 border border-slate-100">
            <span className="font-bold text-slate-900 block">4. Decisive Test</span>
            <span className="text-[11px] text-slate-500">What changes your plan?</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Case Vignette & Questions (7 Cols) */}
        <div className="lg:col-span-7 space-y-6">
          
          <div className="bg-white rounded-xl border border-slate-200/90 p-6 shadow-xs space-y-5">
            
            {/* Case Badge & Source */}
            <div className="flex items-center justify-between gap-2 text-xs">
              <span className="px-2.5 py-0.5 rounded-md bg-emerald-100 text-emerald-900 font-bold font-mono">
                CASE {currentCase.number} OF {caseStudies.length}
              </span>
              <span className="text-slate-400 font-mono text-[11px]">
                {currentCase.sourceThemes}
              </span>
            </div>

            <h2 className="text-xl font-bold text-slate-900 tracking-tight">
              {currentCase.title}
            </h2>

            {/* Vignette Card */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 text-slate-800 text-xs md:text-sm leading-relaxed font-normal">
              <p className="whitespace-pre-line">{currentCase.vignette}</p>
            </div>

            {/* Exam Prompts */}
            <div className="space-y-2">
              <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                <HelpCircle className="w-3.5 h-3.5 text-slate-400" />
                <span>Exam Questions Asked</span>
              </h3>
              <ol className="list-decimal pl-5 space-y-1.5 text-xs md:text-sm font-medium text-slate-900">
                {currentCase.questions.map((q, idx) => (
                  <li key={idx} className="leading-relaxed">{q}</li>
                ))}
              </ol>
            </div>

            {/* Step-by-Step Reveal Controls */}
            <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
              <div className="text-xs text-slate-500">
                Step <span className="font-bold text-slate-900">{currentStep}</span> of 5 revealed
              </div>

              <div className="flex items-center gap-2">
                {currentStep < 5 ? (
                  <button
                    onClick={advanceStep}
                    className="px-4 py-2 bg-emerald-700 text-white text-xs font-bold rounded-lg hover:bg-emerald-800 transition-colors shadow-xs flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>Reveal Step {currentStep + 1}</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                ) : (
                  <button
                    onClick={resetSteps}
                    className="px-3 py-1.5 bg-slate-100 text-slate-700 text-xs font-semibold rounded-lg hover:bg-slate-200 transition-colors cursor-pointer"
                  >
                    Hide Answers
                  </button>
                )}

                {currentStep < 5 && (
                  <button
                    onClick={revealAll}
                    className="px-3 py-2 bg-white border border-slate-200 text-slate-700 text-xs font-semibold rounded-lg hover:bg-slate-50 transition-colors cursor-pointer"
                  >
                    Reveal Full Rubric
                  </button>
                )}
              </div>
            </div>

          </div>

          {/* Quick Case Switcher Ribbon */}
          <div className="flex items-center gap-1.5 overflow-x-auto p-2 bg-white rounded-xl border border-slate-200">
            {caseStudies.map(c => (
              <button
                key={c.id}
                onClick={() => handleSelectCase(c.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors cursor-pointer ${
                  c.id === selectedCaseId
                    ? 'bg-emerald-700 text-white font-bold shadow-xs'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                Case {c.number}
              </button>
            ))}
          </div>

        </div>

        {/* Right Column: 90s Countdown Timer + Step Answers (5 Cols) */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* 90-Second Exam Countdown Card */}
          <div className="bg-white rounded-xl border border-slate-200/90 p-5 shadow-xs space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-amber-600" />
                <span>90-Second OSCE Clock</span>
              </span>
              <span className={`font-mono text-2xl font-bold ${secondsLeft <= 15 ? 'text-rose-600 animate-pulse' : 'text-slate-900'}`}>
                00:{String(secondsLeft).padStart(2, '0')}
              </span>
            </div>

            {/* Visual Progress Bar */}
            <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
              <div 
                className={`h-full transition-all duration-1000 rounded-full ${
                  secondsLeft <= 15 ? 'bg-rose-500' : 'bg-emerald-600'
                }`}
                style={{ width: `${timerPercent}%` }}
              />
            </div>

            {/* Timer Buttons */}
            <div className="flex items-center justify-center gap-2 pt-1">
              {!isTimerActive ? (
                <button
                  onClick={startTimer}
                  className="px-4 py-2 bg-emerald-700 text-white text-xs font-bold rounded-lg hover:bg-emerald-800 transition-colors shadow-xs flex items-center gap-1.5 cursor-pointer"
                >
                  <Play className="w-3.5 h-3.5" />
                  <span>Start 90s Sprint</span>
                </button>
              ) : (
                <button
                  onClick={pauseTimer}
                  className="px-4 py-2 bg-amber-600 text-white text-xs font-bold rounded-lg hover:bg-amber-700 transition-colors shadow-xs flex items-center gap-1.5 cursor-pointer"
                >
                  <Pause className="w-3.5 h-3.5" />
                  <span>Pause Timer</span>
                </button>
              )}

              <button
                onClick={resetTimer}
                className="px-3 py-2 bg-slate-100 text-slate-700 text-xs font-semibold rounded-lg hover:bg-slate-200 transition-colors flex items-center gap-1 cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset</span>
              </button>
            </div>
          </div>

          {/* Model Answer Breakdown by Steps */}
          <div className="space-y-4">
            
            {/* Step 1: Problem Representation */}
            {currentStep >= 1 && (
              <div className="bg-white rounded-xl border border-sky-200 p-4 shadow-xs space-y-1.5 animate-fadeIn">
                <div className="text-[11px] font-bold text-sky-800 uppercase tracking-wider flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-sky-600" />
                  <span>Step 1: Problem Representation</span>
                </div>
                <p className="text-xs text-slate-800 font-medium leading-relaxed">
                  {currentCase.answerStructure.problemRepresentation}
                </p>
              </div>
            )}

            {/* Step 2: Syndrome & Dangerous Alternative */}
            {currentStep >= 2 && (
              <div className="bg-white rounded-xl border border-rose-200 p-4 shadow-xs space-y-1.5 animate-fadeIn">
                <div className="text-[11px] font-bold text-rose-800 uppercase tracking-wider flex items-center gap-1.5">
                  <AlertCircle className="w-3.5 h-3.5 text-rose-600" />
                  <span>Step 2: Syndrome & Dangerous Alternative</span>
                </div>
                <p className="text-xs text-slate-800 font-medium leading-relaxed">
                  {currentCase.answerStructure.syndromeAndDangerousAlternative}
                </p>
              </div>
            )}

            {/* Step 3: Next Safe Step */}
            {currentStep >= 3 && (
              <div className="bg-white rounded-xl border border-emerald-200 p-4 shadow-xs space-y-1.5 animate-fadeIn">
                <div className="text-[11px] font-bold text-emerald-800 uppercase tracking-wider flex items-center gap-1.5">
                  <ShieldAlert className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Step 3: Immediate Next Safe Step</span>
                </div>
                <p className="text-xs text-slate-800 font-medium leading-relaxed">
                  {currentCase.answerStructure.nextSafeStep}
                </p>
              </div>
            )}

            {/* Step 4: One Useful Test */}
            {currentStep >= 4 && (
              <div className="bg-white rounded-xl border border-amber-200 p-4 shadow-xs space-y-1.5 animate-fadeIn">
                <div className="text-[11px] font-bold text-amber-800 uppercase tracking-wider flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                  <span>Step 4: Decisive High-Yield Test</span>
                </div>
                <p className="text-xs text-slate-800 font-medium leading-relaxed">
                  {currentCase.answerStructure.usefulTest}
                </p>
              </div>
            )}

            {/* Step 5: Full Model Answer Key & Examiner Rubric */}
            {currentStep >= 5 && (
              <div className="bg-white rounded-xl border border-purple-200 p-5 shadow-xs space-y-3 animate-fadeIn">
                <div className="text-xs font-bold text-purple-900 uppercase tracking-wider flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-purple-600" />
                  <span>Step 5: Full Examiner Scoring Rubric</span>
                </div>
                <ul className="space-y-2">
                  {currentCase.answerStructure.modelAnswerKey.map((pt, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-slate-800 leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-600 mt-1.5 shrink-0" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>

                {/* Local Exam Note */}
                <div className="p-3 rounded-lg bg-amber-50 border border-amber-200 text-xs text-amber-950 font-medium leading-relaxed">
                  <span className="font-bold text-amber-900">SA Exam Warning: </span>
                  {currentCase.answerStructure.localExamNote}
                </div>
              </div>
            )}

            {currentStep === 0 && (
              <div className="p-8 text-center bg-white/70 rounded-xl border border-dashed border-slate-300 text-slate-500 text-xs space-y-2">
                <Clock className="w-6 h-6 mx-auto text-slate-400" />
                <p className="font-semibold text-slate-700">Ready to test yourself?</p>
                <p>Start the 90s clock and articulate your 4-step clinical plan before revealing answers.</p>
              </div>
            )}

          </div>

        </div>

      </div>

    </div>
  );
};
