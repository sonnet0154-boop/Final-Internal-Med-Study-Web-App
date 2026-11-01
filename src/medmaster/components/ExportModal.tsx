import React, { useState } from 'react';
import { 
  X, 
  Printer, 
  Download, 
  Copy, 
  Check, 
  FileText, 
  Tablet, 
  ShieldCheck 
} from 'lucide-react';
import { clinicalSystems } from '../data/masterDocData';
import { caseStudies } from '../data/casesData';
import { guidelineDifferences } from '../data/differencesData';

interface ExportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ExportModal: React.FC<ExportModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  // Generate comprehensive, consolidated markdown string of the complete guide
  const generateMarkdownDoc = () => {
    let doc = `# Approach to Everything: Internal Medicine Master Document (2026 Edition)\n\n`;
    doc += `*An ADHD-Friendly Clinical Revision Guide based on South African Block/OSCE Papers & STG/EML Guidelines*\n\n`;
    doc += `---\n\n`;

    // High Risk Discrepancies Matrix
    doc += `## 00. High-Risk Exam Updates & Guideline Pitfalls\n\n`;
    guidelineDifferences.forEach(item => {
      doc += `### ${item.topic} (${item.system})\n`;
      doc += `- **Safe Exam Answer:** ${item.safeLearningPoint}\n`;
      doc += `- **SA Public Sector STG Baseline:** ${item.saProtocol}\n`;
      doc += `- **International Evidence Update:** ${item.internationalGuideline}\n`;
      doc += `- **EXAM TRAP WARNING:** ${item.examTrapWarning}\n\n`;
    });

    doc += `---\n\n`;

    // Clinical Systems & Topics
    clinicalSystems.forEach(sys => {
      doc += `## System ${sys.number}: ${sys.title}\n\n`;
      sys.topics.forEach(topic => {
        doc += `### ${topic.title} (${topic.scopeAddition ? 'Scope addition' : `${topic.frequency}x Tested`} | ${topic.sourcePages})\n\n`;
        doc += `**1-Minute Clinical Preview:** ${topic.preview1Min}\n\n`;
        
        if (topic.redFlags && topic.redFlags.length > 0) {
          doc += `**RED FLAGS & DANGER SIGNS:**\n`;
          topic.redFlags.forEach(f => {
            doc += `- ⚠️ ${f}\n`;
          });
          doc += `\n`;
        }

        topic.sections.forEach(sec => {
          doc += `#### ${sec.title}\n\n${sec.content}\n\n`;
          if (sec.examAnchor) doc += `> **EXAM ANCHOR:** ${sec.examAnchor}\n\n`;
          if (sec.dangerBox) doc += `> **DANGER:** ${sec.dangerBox}\n\n`;
          if (sec.saPublicSectorNote) doc += `> **SA STG/EML PROTOCOL:** ${sec.saPublicSectorNote}\n\n`;
          if (sec.internationalNote) doc += `> **INTERNATIONAL EVIDENCE:** ${sec.internationalNote}\n\n`;
          if (sec.recallQuestion) doc += `**Recall Question:** ${sec.recallQuestion}\n*Answer:* ${sec.recallAnswer}\n\n`;
        });
      });
      doc += `---\n\n`;
    });

    // OSCE Case Studies
    doc += `## 12 OSCE & Rapid Clinical Vignette Cases\n\n`;
    caseStudies.forEach(c => {
      doc += `### Case ${c.number}: ${c.title} (${c.sourceThemes})\n\n`;
      doc += `**Vignette:**\n${c.vignette}\n\n`;
      doc += `**Questions:**\n`;
      c.questions.forEach((q, idx) => {
        doc += `${idx + 1}. ${q}\n`;
      });
      doc += `\n**Model Answer Structure (90 Seconds):**\n`;
      doc += `- **Problem Representation:** ${c.answerStructure.problemRepresentation}\n`;
      doc += `- **Syndrome & Lethal Alternative:** ${c.answerStructure.syndromeAndDangerousAlternative}\n`;
      doc += `- **Next Safe Step:** ${c.answerStructure.nextSafeStep}\n`;
      doc += `- **Decisive Test:** ${c.answerStructure.usefulTest}\n\n`;
      doc += `**Full Examiner Scoring Rubric:**\n`;
      c.answerStructure.modelAnswerKey.forEach(pt => {
        doc += `- ${pt}\n`;
      });
      doc += `\n*SA Exam Warning:* ${c.answerStructure.localExamNote}\n\n---\n\n`;
    });

    return doc;
  };

  const handleDownloadMarkdown = () => {
    const text = generateMarkdownDoc();
    const blob = new Blob([text], { type: 'text/markdown;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Approach_to_Everything_Internal_Med_Master_Doc.md';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleCopyClipboard = () => {
    const text = generateMarkdownDoc();
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs no-print">
      <div className="bg-white rounded-2xl max-w-xl w-full border border-slate-200 shadow-2xl overflow-hidden animate-fadeIn">
        
        {/* Modal Header */}
        <div className="p-5 border-b border-slate-100 flex items-center justify-between bg-slate-50">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-emerald-700 text-white flex items-center justify-center font-bold text-xs">
              <Download className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900">
                Export Internal Medicine Master Doc
              </h3>
              <p className="text-xs text-slate-500">
                Tablet, iPad, GoodNotes, and Print Ready
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-200/60 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content / Options */}
        <div className="p-6 space-y-4">
          
          {/* Option 1: Print / Save to PDF */}
          <div className="p-4 rounded-xl border border-slate-200 hover:border-emerald-500 transition-all bg-white hover:bg-emerald-50/20 group">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                  <Printer className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">
                    Print to PDF (Clean Tablet / iPad Layout)
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                    Uses high-contrast print styling, pagination page-breaks, and tabular formatting. Ideal for saving as a PDF into GoodNotes or Notability.
                  </p>
                </div>
              </div>
              <button
                onClick={handlePrint}
                className="px-3 py-1.5 bg-slate-900 group-hover:bg-emerald-700 text-white text-xs font-semibold rounded-lg transition-colors shrink-0 cursor-pointer shadow-xs"
              >
                Print / PDF
              </button>
            </div>
          </div>

          {/* Option 2: Download Consolidated Markdown */}
          <div className="p-4 rounded-xl border border-slate-200 hover:border-emerald-500 transition-all bg-white hover:bg-emerald-50/20 group">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-indigo-100 text-indigo-800 flex items-center justify-center shrink-0">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">
                    Download Master Markdown (.md)
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                    A single comprehensive markdown file including all 10 body systems, guideline differences matrix, and 12 OSCE answer rubrics.
                  </p>
                </div>
              </div>
              <button
                onClick={handleDownloadMarkdown}
                className="px-3 py-1.5 bg-slate-900 group-hover:bg-indigo-700 text-white text-xs font-semibold rounded-lg transition-colors shrink-0 cursor-pointer shadow-xs"
              >
                Download .md
              </button>
            </div>
          </div>

          {/* Option 3: Copy to Clipboard */}
          <div className="p-4 rounded-xl border border-slate-200 hover:border-emerald-500 transition-all bg-white hover:bg-emerald-50/20 group">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
                  <Copy className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">
                    Copy Complete Text to Clipboard
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                    Quickly copy the entire text to paste into Notion, Obsidian, Microsoft Word, or an email.
                  </p>
                </div>
              </div>
              <button
                onClick={handleCopyClipboard}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors shrink-0 cursor-pointer shadow-xs ${
                  copied 
                    ? 'bg-emerald-600 text-white' 
                    : 'bg-slate-900 group-hover:bg-amber-700 text-white'
                }`}
              >
                {copied ? 'Copied! ✓' : 'Copy Text'}
              </button>
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-100 text-center text-[11px] text-slate-500">
          Source traceable to 2021–2022 South African papers and 2026 guidelines.
        </div>

      </div>
    </div>
  );
};
