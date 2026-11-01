import type { ScopeAddition } from './types';

export const neurologyScope: ScopeAddition = {
  topics: [
    {
      id: 'seizures-status',
      systemId: 'neurology',
      title: 'Seizures, Epilepsy & Status Epilepticus',
      frequency: 0,
      sourcePages: 'Exam scope breakdown',
      preview1Min: 'Status epilepticus = seizure ≥5 minutes or recurrent seizures without recovery. Benzodiazepine at 5 min, second-line agent at 20 min, anaesthesia at 40 min. Check glucose first. In HIV, new seizures need imaging and LP.',
      redFlags: [
        'Seizure lasting ≥5 minutes',
        'New-onset seizure in HIV (toxoplasmosis, TB, cryptococcus, lymphoma)',
        'Seizure with fever and meningism'
      ],
      tags: ['Status epilepticus', 'Lorazepam', 'Diazepam', 'Valproate', 'Phenytoin', 'Pregnancy'],
      sections: [
        {
          id: 'status-algorithm',
          title: 'Status Epilepticus Algorithm',
          content: '0–5 min: ABC, oxygen, recovery position, check bedside glucose — give 50 ml of 50% dextrose (preceded by thiamine in alcohol use) if low.\n5–20 min: benzodiazepine — diazepam 10 mg IV (or lorazepam 4 mg IV, or midazolam 10 mg IM/buccal if no IV access); may repeat once.\n20–40 min: second-line — phenytoin 20 mg/kg IV at ≤50 mg/min with ECG monitoring, or valproate 40 mg/kg IV, or levetiracetam 60 mg/kg IV.\n>40 min (refractory): ICU, intubation and anaesthetic infusion (propofol, midazolam or thiopentone) with EEG.\nFind the cause: electrolytes, glucose, drug levels/adherence, alcohol withdrawal, CNS infection, imaging.',
          dangerBox: 'Do not give more than two doses of benzodiazepine — respiratory depression rises without added benefit; move to a second-line drug.',
          recallQuestion: 'What is the first-line and second-line drug treatment of convulsive status epilepticus?',
          recallAnswer: 'First line: an IV benzodiazepine (diazepam/lorazepam, or IM/buccal midazolam), repeated once; second line: phenytoin 20 mg/kg, valproate or levetiracetam IV.',
          references: ['SA STG/EML Hospital Level Adults, 2019 – Status epilepticus', 'American Epilepsy Society Guideline for convulsive status epilepticus, 2016 (ESETT trial, 2019)']
        },
        {
          id: 'epilepsy-drug-choice',
          title: 'Choosing Antiseizure Medication',
          content: 'Generalised epilepsy: valproate is most effective, but avoid in women who could become pregnant (neural tube defects, neurodevelopmental harm); use lamotrigine or levetiracetam instead.\nFocal epilepsy: carbamazepine, lamotrigine or levetiracetam.\nEnzyme inducers (carbamazepine, phenytoin) reduce efficacy of hormonal contraception and interact with dolutegravir and other ART.\nAll women of child-bearing age on antiseizure drugs: folic acid 5 mg daily.\nDriving: counsel patients not to drive until seizure-free per local licensing rules.',
          recallQuestion: 'Why is valproate avoided in women of child-bearing potential, and what is used instead?',
          recallAnswer: 'It is highly teratogenic (neural tube and neurodevelopmental harm); lamotrigine or levetiracetam are used instead.',
          references: ['NICE NG217 Epilepsies in children, young people and adults, 2022 (updated 2025)', 'SA STG/EML Primary Health Care, 2024 – Epilepsy']
        }
      ]
    },
    {
      id: 'gbs-neuropathy',
      systemId: 'neurology',
      title: 'Guillain–Barré Syndrome & Peripheral Neuropathy',
      frequency: 0,
      sourcePages: 'Exam scope breakdown',
      preview1Min: 'Ascending symmetrical flaccid weakness with areflexia after an infection. Monitor FVC — intubate if falling. IVIG or plasma exchange. Peripheral neuropathy in SA: diabetes, HIV, isoniazid (give pyridoxine), alcohol, B12.',
      redFlags: [
        'FVC <20 ml/kg or rapidly falling (impending respiratory failure)',
        'Bulbar weakness or autonomic instability',
        'Sensory level or sphincter involvement (think spinal cord, not GBS)'
      ],
      tags: ['GBS', 'Areflexia', 'IVIG', 'FVC', 'Neuropathy', 'Pyridoxine'],
      sections: [
        {
          id: 'gbs-management',
          title: 'Guillain–Barré Syndrome',
          content: 'Typical: progressive symmetrical ascending weakness with reduced or absent reflexes over days to 4 weeks, often 1–3 weeks after Campylobacter or a viral illness. Mild distal sensory symptoms.\nInvestigations: LP — albuminocytological dissociation (raised protein, normal cell count; may be normal in week 1); nerve conduction studies. A CSF cell count >50 cells/µL suggests HIV seroconversion or another cause.\nMonitoring: FVC every 4–6 hours; ICU if FVC <20 ml/kg, bulbar weakness, or autonomic instability.\nTreatment: IVIG 0.4 g/kg/day for 5 days or plasma exchange; steroids are NOT effective. DVT prophylaxis, pain control.',
          recallQuestion: 'What is the classic CSF finding in Guillain–Barré syndrome and which treatments work?',
          recallAnswer: 'Raised protein with normal cell count (albuminocytological dissociation); IVIG or plasma exchange (not steroids).',
          references: ['European Academy of Neurology/PNS Guideline on Guillain–Barré syndrome, 2023', 'Davidson’s Principles and Practice of Medicine, 24th ed., 2023']
        },
        {
          id: 'peripheral-neuropathy',
          title: 'Approach to Peripheral Neuropathy',
          content: 'Pattern: distal symmetrical sensory ("glove and stocking") vs mononeuritis multiplex (vasculitis, diabetes, HIV) vs motor-predominant (GBS, CIDP).\nCommon causes in SA: diabetes, HIV itself, isoniazid (pyridoxine deficiency), alcohol, vitamin B12 deficiency, older ART (stavudine), chemotherapy.\nBasic screen: glucose/HbA1c, HIV, B12, TSH, renal function, syphilis serology, FBC.\nPrevention: pyridoxine 25 mg daily with isoniazid.\nPainful neuropathy: amitriptyline 10–25 mg at night, or carbamazepine; foot care for diabetics.',
          recallQuestion: 'How is isoniazid-induced neuropathy prevented?',
          recallAnswer: 'Give pyridoxine (vitamin B6) 25 mg daily throughout isoniazid therapy.',
          references: ['SA STG/EML Primary Health Care, 2024 – Peripheral neuropathy', 'SA National TB Management Guidelines, 2023']
        }
      ]
    }
  ],
  sections: {}
};
