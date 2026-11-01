/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { TopicViewer } from './components/TopicViewer';
import { CasesViewer } from './components/CasesViewer';
import { DifferencesTable } from './components/DifferencesTable';
import { ExportModal } from './components/ExportModal';
import { clinicalSystems } from './data/masterDocData';
import { GuidelineMode, Topic } from './types';
import { ExamQuestionBank } from './components/ExamQuestionBank';
import { Sheet, SheetContent, SheetTitle } from '@/components/ui/sheet';
import { RecallQuiz } from './components/RecallQuiz';
import { Button } from '@/components/ui/button';
import { Minimize2, Clock, Pause, Play } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<'systems' | 'differences' | 'cases' | 'recall' | 'audit'>('systems');
  const [selectedSystemId, setSelectedSystemId] = useState<string>('cardiology');
  const [selectedTopicId, setSelectedTopicId] = useState<string>('ecg-acs');
  const [guidelineMode, setGuidelineMode] = useState<GuidelineMode>('sa-primary');
  const [activeRecallMode, setActiveRecallMode] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [filterMode, setFilterMode] = useState<'all' | 'high-yield' | 'bookmarked'>('all');
  const [isExportOpen, setIsExportOpen] = useState<boolean>(false);
  const [contentsVisible, setContentsVisible] = useState(true);
  const [mobileContentsOpen, setMobileContentsOpen] = useState(false);
  const [focusMode, setFocusMode] = useState(false);

  useEffect(() => {
    if (!focusMode) return;
    const handleKey = (event: KeyboardEvent) => { if (event.key === 'Escape') setFocusMode(false); };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [focusMode]);

  // LocalStorage persistence for mastered and bookmarked topics
  const [masteredTopics, setMasteredTopics] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('im_mastered_topics');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [bookmarkedTopics, setBookmarkedTopics] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('im_bookmarked_topics');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('im_mastered_topics', JSON.stringify(masteredTopics));
    } catch {
      // ignore
    }
  }, [masteredTopics]);

  useEffect(() => {
    try {
      localStorage.setItem('im_bookmarked_topics', JSON.stringify(bookmarkedTopics));
    } catch {
      // ignore
    }
  }, [bookmarkedTopics]);

  // 15-Minute Study Sprint Timer
  const [timerSecondsLeft, setTimerSecondsLeft] = useState<number>(15 * 60);
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | null = null;
    if (isTimerRunning && timerSecondsLeft > 0) {
      interval = setInterval(() => {
        setTimerSecondsLeft(prev => prev - 1);
      }, 1000);
    } else if (timerSecondsLeft === 0) {
      setIsTimerRunning(false);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isTimerRunning, timerSecondsLeft]);

  const toggleTimer = () => {
    if (isTimerRunning) {
      setIsTimerRunning(false);
    } else {
      if (timerSecondsLeft === 0) setTimerSecondsLeft(15 * 60);
      setIsTimerRunning(true);
    }
  };

  const timerMinutes = Math.floor(timerSecondsLeft / 60);
  const timerSeconds = timerSecondsLeft % 60;

  // Toggle helpers
  const toggleMastered = (topicId: string) => {
    setMasteredTopics(prev => 
      prev.includes(topicId) ? prev.filter(id => id !== topicId) : [...prev, topicId]
    );
  };

  const toggleBookmark = (topicId: string) => {
    setBookmarkedTopics(prev => 
      prev.includes(topicId) ? prev.filter(id => id !== topicId) : [...prev, topicId]
    );
  };

  // Find active system and topic
  const currentSystem = clinicalSystems.find(s => s.id === selectedSystemId) || clinicalSystems[0];
  const currentTopic = currentSystem?.topics.find(t => t.id === selectedTopicId) || currentSystem?.topics[0];
  if (!currentSystem || !currentTopic) return null;

  const selectTopic = (id: string) => {
    setSelectedTopicId(id);
    setMobileContentsOpen(false);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };
  const allTopics = clinicalSystems.flatMap(sys => sys.topics);
  const topicIndex = allTopics.findIndex(t => t.id === currentTopic.id);
  const goTo = (t?: Topic) => { if (!t) return; setSelectedSystemId(t.systemId); selectTopic(t.id); };
  const sidebar = <Sidebar
    systems={clinicalSystems} selectedSystemId={selectedSystemId}
    setSelectedSystemId={setSelectedSystemId} selectedTopicId={selectedTopicId}
    setSelectedTopicId={selectTopic} searchQuery={searchQuery} setSearchQuery={setSearchQuery}
    masteredTopics={masteredTopics} bookmarkedTopics={bookmarkedTopics}
    filterMode={filterMode} setFilterMode={setFilterMode}
  />;

  return (
    <div className={`study-app ${focusMode ? 'reading-focus' : ''} min-h-screen bg-background flex flex-col text-foreground font-sans selection:bg-study-highlight`}>
      
      {/* 3-Zone Sticky Navigation Header */}
      {focusMode ? <div className="focus-bar no-print">
        <span className="focus-label">📖 Reading focus</span>
        <div className="flex gap-2 items-center">
          <Button variant="ghost" size="sm" className="font-mono" onClick={toggleTimer} aria-label={isTimerRunning ? 'Pause study timer' : 'Start study timer'}>{isTimerRunning ? <Pause /> : <Play />}{String(timerMinutes).padStart(2, '0')}:{String(timerSeconds).padStart(2, '0')}</Button>
          <Button variant="outline" size="sm" onClick={() => setFocusMode(false)}><Minimize2 />Exit focus</Button>
        </div>
      </div> : <Header
        onFocus={() => { setActiveTab('systems'); setMobileContentsOpen(false); setFocusMode(true); }}
        onToggleContents={() => {
          setActiveTab('systems');
          if (window.matchMedia('(min-width: 1024px)').matches) setContentsVisible(v => !v);
          else setMobileContentsOpen(true);
        }}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        guidelineMode={guidelineMode}
        setGuidelineMode={setGuidelineMode}
        activeRecallMode={activeRecallMode}
        setActiveRecallMode={setActiveRecallMode}
        onOpenExport={() => setIsExportOpen(true)}
        onToggleTimer={toggleTimer}
        isTimerRunning={isTimerRunning}
        timerMinutes={timerMinutes}
        timerSeconds={timerSeconds}
      />}

      {/* Main View Router */}
      <main className="flex-1 flex flex-col">
        {activeTab === 'systems' && (
          <div className={`study-layout ${contentsVisible && !focusMode ? 'with-contents' : ''}`}>
            {contentsVisible && !focusMode && <div className="desktop-contents no-print">{sidebar}</div>}
            <Sheet open={mobileContentsOpen} onOpenChange={setMobileContentsOpen}>
              <SheetContent side="left" className="study-app w-[min(90vw,360px)] max-w-none p-0 flex flex-col gap-0">
                <SheetTitle className="px-5 py-4 border-b border-border">Study contents</SheetTitle>
                {sidebar}
              </SheetContent>
            </Sheet>

            <TopicViewer
              prevTopic={allTopics[topicIndex - 1]}
              nextTopic={allTopics[topicIndex + 1]}
              onPrev={() => goTo(allTopics[topicIndex - 1])}
              onNext={() => goTo(allTopics[topicIndex + 1])}
              onStartQuiz={() => { setFocusMode(false); setActiveTab('recall'); window.scrollTo({ top: 0 }); }}
              key={currentTopic.id}
              topic={currentTopic}
              systemTitle={currentSystem.title}
              guidelineMode={guidelineMode}
              activeRecallMode={activeRecallMode}
              isMastered={masteredTopics.includes(currentTopic.id)}
              onToggleMastered={() => toggleMastered(currentTopic.id)}
              isBookmarked={bookmarkedTopics.includes(currentTopic.id)}
              onToggleBookmark={() => toggleBookmark(currentTopic.id)}
            />
          </div>
        )}

        {activeTab === 'differences' && (
          <DifferencesTable />
        )}

        {activeTab === 'cases' && (
          <CasesViewer />
        )}
        {activeTab === 'audit' && (
          <ExamQuestionBank 
            onSelectTopic={(topicId) => {
              const topic = allTopics.find(t => t.id === topicId);
              if (topic) {
                setSelectedSystemId(topic.systemId);
                setSelectedTopicId(topic.id);
              }
              setActiveTab('systems');
              window.scrollTo({ top: 0 });
            }}
          />
        )}
        {activeTab === 'recall' && <RecallQuiz key={currentTopic.id} topic={currentTopic} topics={clinicalSystems.flatMap(system => system.topics)} onReturn={() => { setActiveTab('systems'); window.scrollTo({ top: 0 }); }} />}
      </main>

      {/* Export & Print Modal */}
      <ExportModal
        isOpen={isExportOpen}
        onClose={() => setIsExportOpen(false)}
      />

    </div>
  );
}
