import React, { useState } from 'react';
import { 
  ShieldAlert, 
  Search, 
  AlertTriangle, 
  CheckCircle2, 
  HelpCircle,
  Globe,
  Filter
} from 'lucide-react';
import { guidelineDifferences } from '../data/differencesData';

export const DifferencesTable: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSystem, setSelectedSystem] = useState<string>('all');

  const systems = ['all', ...Array.from(new Set(guidelineDifferences.map(d => d.system)))];

  const filteredDifferences = guidelineDifferences.filter(item => {
    if (selectedSystem !== 'all' && item.system !== selectedSystem) return false;
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return (
      item.topic.toLowerCase().includes(q) ||
      item.safeLearningPoint.toLowerCase().includes(q) ||
      item.saProtocol.toLowerCase().includes(q) ||
      item.internationalGuideline.toLowerCase().includes(q) ||
      item.examTrapWarning.toLowerCase().includes(q)
    );
  });

  return (
    <div className="flex-1 bg-graph-paper min-h-[calc(100vh-65px)] p-4 sm:p-6 lg:p-10 max-w-6xl mx-auto space-y-8">
      
      {/* Header Banner */}
      <div className="bg-white rounded-xl border border-slate-200/90 p-5 md:p-6 shadow-xs break-inside-avoid">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-rose-800 uppercase tracking-wider mb-1">
              <ShieldAlert className="w-4 h-4 text-rose-600" />
              <span>High-Risk Clinical Traps & Discrepancy Matrix</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-display font-bold text-slate-900 tracking-tight">
              Where Older Notes Fail & Guidelines Differ
            </h1>
            <p className="text-xs md:text-sm text-slate-600 mt-1 max-w-3xl leading-relaxed">
              Older student summaries and outdated question banks contain dangerous answers that lose marks in current exams. This matrix sets out the safe, contemporary point and distinguishes South African Public Sector (STG/EML) protocols from newer international evidence.
            </p>
          </div>
        </div>

        {/* Search & System Filter Bar */}
        <div className="mt-5 pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center gap-3">
          <div className="relative flex-1 w-full">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search guideline differences, drug rules, traps..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-700/20"
            />
          </div>

          <div className="flex items-center gap-1.5 w-full sm:w-auto overflow-x-auto pb-1 sm:pb-0">
            {systems.map(sys => (
              <button
                key={sys}
                onClick={() => setSelectedSystem(sys)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium capitalize whitespace-nowrap transition-colors cursor-pointer ${
                  selectedSystem === sys
                    ? 'bg-emerald-700 text-white font-bold shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {sys}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Difference Cards Grid */}
      <div className="space-y-5">
        {filteredDifferences.map((item, idx) => (
          <div
            key={item.id}
            className="bg-white rounded-xl border border-slate-200/90 p-5 md:p-6 shadow-xs space-y-4 break-inside-avoid"
          >
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold text-slate-400">
                  #{idx + 1}
                </span>
                <h3 className="text-base md:text-lg font-bold text-slate-900 tracking-tight">
                  {item.topic}
                </h3>
              </div>
              <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 text-xs font-medium">
                {item.system}
              </span>
            </div>

            {/* Safer Learning Point */}
            <div className="p-3.5 rounded-lg bg-emerald-50/70 border border-emerald-200/80 text-emerald-950 text-xs md:text-sm leading-relaxed">
              <span className="font-bold text-emerald-900 flex items-center gap-1.5 mb-1 text-xs uppercase tracking-wider">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />
                Safer, Current Exam Answer:
              </span>
              <p>{item.safeLearningPoint}</p>
            </div>

            {/* Side-by-Side Comparison: SA Protocol vs International Guideline */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs md:text-sm">
              
              {/* South African STG */}
              <div className="p-4 rounded-lg bg-slate-50 border border-slate-200/90 text-slate-800 space-y-1">
                <div className="font-bold text-slate-900 flex items-center gap-1.5 text-xs uppercase tracking-wider">
                  <span className="w-2 h-2 rounded-full bg-emerald-600" />
                  <span>South African Public Sector STG Baseline</span>
                </div>
                <p className="text-slate-700 leading-relaxed font-normal">
                  {item.saProtocol}
                </p>
              </div>

              {/* International Guideline */}
              <div className="p-4 rounded-lg bg-indigo-50/70 border border-indigo-200 text-indigo-950 space-y-1">
                <div className="font-bold text-indigo-900 flex items-center gap-1.5 text-xs uppercase tracking-wider">
                  <Globe className="w-3.5 h-3.5 text-indigo-600" />
                  <span>International Guideline Update</span>
                </div>
                <p className="text-indigo-950/90 leading-relaxed font-normal">
                  {item.internationalGuideline}
                </p>
              </div>

            </div>

            {/* Exam Trap Alert Box */}
            <div className="p-3 rounded-lg bg-rose-50 border border-rose-200 text-rose-950 text-xs leading-relaxed flex items-start gap-2">
              <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-rose-900">Classic Exam Trap: </span>
                <span>{item.examTrapWarning}</span>
              </div>
            </div>

            <div className="text-[11px] text-slate-400 font-mono text-right">
              Source: {item.sourceGuideline}
            </div>

          </div>
        ))}

        {filteredDifferences.length === 0 && (
          <div className="p-12 text-center bg-white rounded-xl border border-slate-200 text-slate-500 text-xs">
            No matching guideline differences found for your filter.
          </div>
        )}
      </div>

    </div>
  );
};
