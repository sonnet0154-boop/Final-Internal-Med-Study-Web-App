import { BookOpen, ShieldAlert, Sparkles, Download, Clock, PanelLeft, Brain, Pause, Maximize2, GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { GuidelineMode } from '../types';

interface HeaderProps {
  activeTab: 'systems' | 'differences' | 'cases' | 'recall' | 'audit';
  setActiveTab: (tab: 'systems' | 'differences' | 'cases' | 'recall' | 'audit') => void;
  guidelineMode: GuidelineMode;
  setGuidelineMode: (mode: GuidelineMode) => void;
  activeRecallMode: boolean;
  setActiveRecallMode: (active: boolean) => void;
  onOpenExport: () => void;
  onToggleContents: () => void;
  onFocus: () => void;
  onToggleTimer: () => void;
  isTimerRunning: boolean;
  timerMinutes: number;
  timerSeconds: number;
}

export const Header: React.FC<HeaderProps> = (p) => (
  <header className="study-header no-print">
    <div className="header-main">
      <div className="flex items-center gap-2 min-w-0">
        <Button variant="ghost" size="icon" onClick={p.onToggleContents} aria-label="Toggle study contents" title="Study contents"><PanelLeft /></Button>
        <Button variant="ghost" onClick={() => p.setActiveTab('systems')} className="brand-button h-auto p-0 hover:bg-transparent">
          <span className="brand-mark"><BookOpen /></span>
          <span className="text-left"><span className="block font-display text-lg font-bold">MedMaster<span className="text-primary">.</span></span><span className="brand-subtitle">Approach to Everything</span></span>
        </Button>
      </div>
      <div className="flex items-center gap-1 sm:gap-2 shrink-0">
        <Button variant="ghost" size="sm" onClick={p.onFocus} aria-label="Enter reading focus mode" title="Reading focus"><Maximize2 /><span className="hidden sm:inline">Focus</span></Button>
        <Button size="sm" variant={p.isTimerRunning ? 'secondary' : 'ghost'} onClick={p.onToggleTimer} title="Start or pause 15-minute study sprint" aria-label={p.isTimerRunning ? 'Pause study timer' : 'Start study timer'} className="font-mono"><span className="hidden sm:block">{p.isTimerRunning ? <Pause /> : <Clock />}</span>{String(p.timerMinutes).padStart(2, '0')}:{String(p.timerSeconds).padStart(2, '0')}</Button>
        <Button variant="outline" size="sm" onClick={p.onOpenExport} title="Export master document" aria-label="Export master document"><Download /><span className="hidden sm:inline">Export</span></Button>
      </div>
    </div>
    <div className="header-navigation">
      <nav aria-label="Study views" className="flex items-center gap-1 shrink-0">
        <Button variant="ghost" size="sm" className={p.activeTab === 'systems' ? 'nav-active' : ''} onClick={() => p.setActiveTab('systems')}><BookOpen /><span>Theory</span></Button>
        <Button variant="ghost" size="sm" className={p.activeTab === 'audit' ? 'nav-active' : ''} onClick={() => p.setActiveTab('audit')}><GraduationCap /><span>Exam questions</span></Button>
        <Button variant="ghost" size="sm" className={p.activeTab === 'recall' ? 'nav-active' : ''} onClick={() => p.setActiveTab('recall')}><Brain /><span>Recall quiz</span></Button>
        <Button variant="ghost" size="sm" className={p.activeTab === 'differences' ? 'nav-active' : ''} onClick={() => p.setActiveTab('differences')}><ShieldAlert /><span>Guideline traps</span></Button>
        <Button variant="ghost" size="sm" className={p.activeTab === 'cases' ? 'nav-active' : ''} onClick={() => p.setActiveTab('cases')}><Sparkles /><span>OSCE cases</span></Button>
      </nav>
      <div className="flex gap-2 items-center shrink-0">
        <Button size="sm" variant="ghost" aria-pressed={p.activeRecallMode} className={p.activeRecallMode ? 'recall-active' : ''} onClick={() => { p.setActiveTab('systems'); p.setActiveRecallMode(!p.activeRecallMode); }}><Brain />Recall {p.activeRecallMode ? 'on' : 'off'}</Button>
        <div className="guideline-switch" role="group" aria-label="Guideline emphasis">
          <Button variant="ghost" size="sm" aria-pressed={p.guidelineMode === 'sa-primary'} className={p.guidelineMode === 'sa-primary' ? 'selected' : ''} onClick={() => p.setGuidelineMode('sa-primary')}>SA STG</Button>
          <Button variant="ghost" size="sm" aria-pressed={p.guidelineMode === 'international-active'} className={p.guidelineMode === 'international-active' ? 'selected' : ''} onClick={() => p.setGuidelineMode('international-active')}>International</Button>
        </div>
      </div>
    </div>
  </header>
);
