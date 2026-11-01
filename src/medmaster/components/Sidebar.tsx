import React from 'react';
import { Search, CheckCircle2, Bookmark, Flame } from 'lucide-react';
import { ClinicalSystem } from '../types';
import { Button } from '@/components/ui/button';

interface SidebarProps {
  systems: ClinicalSystem[];
  selectedSystemId: string;
  setSelectedSystemId: (id: string) => void;
  selectedTopicId: string;
  setSelectedTopicId: (id: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  masteredTopics: string[];
  bookmarkedTopics: string[];
  filterMode: 'all' | 'high-yield' | 'bookmarked';
  setFilterMode: (mode: 'all' | 'high-yield' | 'bookmarked') => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  systems,
  selectedSystemId,
  setSelectedSystemId,
  selectedTopicId,
  setSelectedTopicId,
  searchQuery,
  setSearchQuery,
  masteredTopics,
  bookmarkedTopics,
  filterMode,
  setFilterMode
}) => {
  // Calculate total topic count and mastered count
  const allTopics = systems.flatMap(s => s.topics);
  const totalTopics = allTopics.length;
  const masteredCount = masteredTopics.length;
  const progressPercent = Math.round((masteredCount / Math.max(1, totalTopics)) * 100);

  // Filter topics if search query is active
  const filteredTopics = allTopics.filter(topic => {
    if (filterMode === 'bookmarked' && !bookmarkedTopics.includes(topic.id)) return false;
    if (filterMode === 'high-yield' && topic.frequency < 4) return false;
    
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return (
      topic.title.toLowerCase().includes(q) ||
      topic.preview1Min.toLowerCase().includes(q) ||
      topic.tags.some(t => t.toLowerCase().includes(q)) ||
      topic.redFlags.some(r => r.toLowerCase().includes(q))
    );
  });



  return (
    <aside className="study-contents no-print">
      
      {/* Search & Filter Header */}
      <div className="p-4 border-b border-border space-y-3 bg-background/70">
        <div className="relative">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search symptoms, criteria, drugs..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-3 py-2 text-xs bg-card border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/20 focus:border-primary transition-all"
          />
        </div>

        {/* Quick Filter Buttons */}
        <div className="flex items-center gap-1.5 p-1 bg-muted/60 rounded-lg text-xs">
          <Button variant="ghost"
            onClick={() => setFilterMode('all')}
            className={`flex-1 py-1 px-2 rounded-md font-medium text-center transition-all cursor-pointer whitespace-nowrap ${
              filterMode === 'all'
                ? 'bg-card text-foreground shadow-xs'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            All Systems
          </Button>
          <Button variant="ghost"
            onClick={() => setFilterMode('high-yield')}
            className={`flex-1 py-1 px-2 rounded-md font-medium text-center transition-all cursor-pointer flex items-center justify-center gap-1 whitespace-nowrap ${
              filterMode === 'high-yield'
                ? 'bg-card text-study-warm-foreground shadow-xs'
                : 'text-muted-foreground hover:text-foreground'
            }`}
            title="Topics appearing on 4 or more exam pages"
          >
            <Flame className="w-3 h-3 text-study-warm-foreground" />
            <span>High-Yield</span>
          </Button>
          <Button variant="ghost"
            onClick={() => setFilterMode('bookmarked')}
            className={`py-1 px-2.5 rounded-md font-medium text-center transition-all cursor-pointer flex items-center justify-center gap-1 whitespace-nowrap ${
              filterMode === 'bookmarked'
                ? 'bg-card text-study-cool-foreground shadow-xs'
                : 'text-muted-foreground hover:text-foreground'
            }`}
            title="Bookmarked topics"
          >
            <Bookmark className="w-3 h-3 text-study-cool-foreground" />
            <span>({bookmarkedTopics.length})</span>
          </Button>
        </div>

        {/* Progress Bar & ADHD Reinforcement */}
        <div className="pt-1">
          <div className="flex items-center justify-between text-[11px] text-muted-foreground mb-1">
            <span className="font-medium text-foreground">Exam Mastery Progress</span>
            <span className="font-mono">{masteredCount} / {totalTopics} ({progressPercent}%)</span>
          </div>
          <div className="w-full bg-muted h-1.5 rounded-full overflow-hidden">
            <div 
              className="bg-primary h-full transition-all duration-300 rounded-full"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>
      </div>

      {/* Topics / Systems Scrollable Area */}
      <div className="flex-1 overflow-y-auto divide-y divide-slate-100">
        
        {/* If searching or filtering, show flat topic list */}
        {searchQuery.trim() || filterMode !== 'all' ? (
          <div className="p-3 space-y-1">
            <div className="px-2 py-1 text-[11px] font-semibold text-muted-foreground ">
              {filteredTopics.length} MATCHING TOPICS
            </div>
            {filteredTopics.length === 0 ? (
              <div className="p-6 text-center text-xs text-muted-foreground">
                No matching clinical topics found. Try another search term.
              </div>
            ) : (
              filteredTopics.map(topic => {
                const isSelected = topic.id === selectedTopicId;
                const isMastered = masteredTopics.includes(topic.id);
                return (
                  <Button variant="ghost"
                    key={topic.id}
                    onClick={() => {
                      setSelectedSystemId(topic.systemId);
                      setSelectedTopicId(topic.id);
                    }}
                    className={`h-auto whitespace-normal w-full text-left p-2.5 rounded-lg text-xs transition-all cursor-pointer border ${
                      isSelected
                        ? 'bg-accent border-primary/30 text-primary font-medium shadow-xs'
                        : 'border-transparent hover:bg-background text-foreground'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <span className=" leading-relaxed">{topic.title}</span>
                      {isMastered && (
                        <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                      )}
                    </div>
                    <div className="flex items-center gap-2 mt-1.5 text-[10px] text-muted-foreground">
                      <span className="capitalize">{topic.systemId}</span>
                      <span aria-hidden="true">·</span>
                      <span className="font-mono text-study-warm-foreground font-semibold">{topic.scopeAddition ? 'Scope topic' : `${topic.frequency}x Tested`}</span>
                    </div>
                  </Button>
                );
              })
            )}
          </div>
        ) : (
          /* Normal System Grouping View */
          <div className="p-2 space-y-1">
            {systems.map(system => {
              const isSystemActive = system.id === selectedSystemId;
              const systemMastered = system.topics.filter(t => masteredTopics.includes(t.id)).length;
              const systemTotal = system.topics.length;
              
              return (
                <div key={system.id} className="rounded-lg overflow-hidden transition-all">
                  <Button variant="ghost"
                    onClick={() => {
                      setSelectedSystemId(system.id);
                      if (system.topics.length > 0) {
                        setSelectedTopicId(system.topics[0]?.id || selectedTopicId);
                      }
                    }}
                    className={`h-auto whitespace-normal w-full text-left px-3 py-2.5 flex items-center justify-between rounded-lg transition-all cursor-pointer ${
                      isSystemActive 
                        ? 'bg-muted font-semibold text-foreground shadow-xs' 
                        : 'hover:bg-background text-foreground font-medium'
                    }`}
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <span className="text-[11px] font-mono text-muted-foreground w-5 shrink-0">
                        {system.number}
                      </span>
                      <span className="text-sm truncate">{system.shortTitle}</span>
                    </div>
                    <div className="flex items-center gap-2 text-[10px] font-mono text-muted-foreground shrink-0">
                      <span>{systemMastered}/{systemTotal}</span>
                    </div>
                  </Button>

                  {/* Expanded Sub-Topics when System is Active */}
                  {isSystemActive && (
                    <div className="pl-6 pr-2 py-1.5 space-y-1 border-l-2 border-primary ml-4 my-1">
                      {system.topics.map(topic => {
                        const isTopicSelected = topic.id === selectedTopicId;
                        const isMastered = masteredTopics.includes(topic.id);
                        return (
                          <Button variant="ghost"
                            key={topic.id}
                            onClick={() => setSelectedTopicId(topic.id)}
                            className={`h-auto whitespace-normal w-full text-left px-2.5 py-1.5 rounded-md text-xs transition-all cursor-pointer flex items-center justify-between gap-2 ${
                              isTopicSelected
                                ? 'bg-accent text-primary font-semibold'
                                : 'hover:bg-muted text-muted-foreground'
                            }`}
                          >
                            <span className="whitespace-normal leading-snug">{topic.title}</span>
                            {isMastered ? (
                              <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />
                            ) : (
                              <span className="text-[10px] font-mono text-study-warm-foreground shrink-0">{topic.scopeAddition ? '✦' : `${topic.frequency}x`}</span>
                            )}
                          </Button>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

      </div>

      {/* Footer Info */}
      <div className="p-3 border-t border-border text-[11px] text-muted-foreground flex items-center justify-between bg-background/50">
        <span>SA AHL STG + Intl Guidelines</span>
        <span className="font-mono">2026 Edition</span>
      </div>

    </aside>
  );
};
