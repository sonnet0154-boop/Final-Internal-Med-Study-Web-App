import React from 'react';
import { ExamQuestionBank } from './ExamQuestionBank';

interface AuditViewerProps {
  onSelectTopic: (topicId: string) => void;
}

/**
 * Re-exporting ExamQuestionBank as AuditViewer for backwards compatibility.
 * Provides the interactive past exam question bank and self-testing tool.
 */
export const AuditViewer: React.FC<AuditViewerProps> = (props) => {
  return <ExamQuestionBank {...props} />;
};
