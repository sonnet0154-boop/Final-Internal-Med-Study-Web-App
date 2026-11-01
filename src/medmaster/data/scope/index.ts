import type { ClinicalSystem } from '../../types';
import type { ScopeAddition } from './types';
import { respiratoryScope } from './respiratory';
import { cardiovascularScope } from './cardiovascular';
import { gastroScope } from './gastro';
import { neurologyScope } from './neurology';
import { rheumRenalScope } from './rheum-renal';
import { endoHaemScope } from './endo-haem';
import { infectiousScope } from './infectious';
import { dermatologyScope } from './dermatology';
import { cardiovascularExamScope } from './cardiovascular-exam';
import { respiratoryExamScope } from './respiratory-exam';
import { gastroExamScope } from './gastro-exam';
import { neurologyExamScope } from './neurology-exam';
import { rheumatologyExamScope } from './rheumatology-exam';
import { renalEndoExamScope } from './renal-endocrine-exam';
import { infectiousHaemExamScope } from './infectious-haem-exam';
import { dermatologyExamScope } from './dermatology-exam';

export const scopeAdditions: ScopeAddition[] = [
  respiratoryScope,
  cardiovascularScope,
  gastroScope,
  neurologyScope,
  rheumRenalScope,
  endoHaemScope,
  infectiousScope,
  dermatologyScope,
  cardiovascularExamScope,
  respiratoryExamScope,
  gastroExamScope,
  neurologyExamScope,
  rheumatologyExamScope,
  renalEndoExamScope,
  infectiousHaemExamScope,
  dermatologyExamScope,
];

const mark = <T extends object>(item: T) => ({ ...item, scopeAddition: true });

/** Appends scope additions without altering any original topic or section. */
export function mergeScope(base: ClinicalSystem[], additions: ScopeAddition[]): ClinicalSystem[] {
  return base.map(system => {
    const topics = system.topics.map(topic => {
      const extra = additions.flatMap(a => a.sections?.[topic.id] ?? []);
      return extra.length ? { ...topic, sections: [...topic.sections, ...extra.map(mark)] } : topic;
    });
    const newTopics = additions.flatMap(a => a.topics).filter(t => t.systemId === system.id)
      .map(t => ({ ...mark(t), sections: t.sections.map(mark) }));
    return { ...system, topics: [...topics, ...newTopics] };
  });
}
