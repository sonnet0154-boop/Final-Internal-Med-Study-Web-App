import type { ScopeAddition } from './types';

export const infectiousScope: ScopeAddition = {
  topics: [
    {
      id: 'tb-diagnosis-treatment',
      systemId: 'hiv-infectious',
      title: 'Tuberculosis: Diagnosis, Treatment & Drug-Resistant TB',
      frequency: 0,
      sourcePages: 'Exam scope breakdown',
      preview1Min: 'GeneXpert MTB/RIF Ultra on sputum is first-line; urine LAM for advanced HIV. Drug-sensitive TB: 2 months RHZE then 4 months RH. Rifampicin resistance: refer for the all-oral BPaL(M) regimen.',
      redFlags: [
        'Rifampicin resistance detected on GeneXpert',
        'Massive haemoptysis',
        'TB in HIV with CD4 <50 (start ART within 2 weeks)'
      ],
      tags: ['TB', 'GeneXpert', 'LAM', 'RHZE', 'DR-TB', 'BPaLM', 'TPT'],
      sections: [
        {
          id: 'tb-diagnosis',
          title: 'TB Diagnosis in South Africa',
          content: 'Symptom screen: cough (any duration in HIV), fever, night sweats, weight loss.\nFirst test: sputum GeneXpert MTB/RIF Ultra — detects M. tuberculosis and rifampicin resistance. "Trace" results in HIV-positive people are treated as positive.\nIf Xpert positive: send a sample for culture and drug susceptibility testing.\nUrine TB LAM: for HIV-positive inpatients with symptoms, CD4 ≤200, or who are seriously ill — a positive result allows immediate treatment.\nExtrapulmonary: fluid ADA (pleural, pericardial), lymph node FNA for Xpert, CSF Xpert Ultra.\nXpert-negative but strong suspicion: CXR, culture, clinical review; empirical treatment in seriously ill HIV-positive patients.',
          recallQuestion: 'When is urine TB LAM used?',
          recallAnswer: 'In HIV-positive adults with TB symptoms who are inpatients, seriously ill, or have CD4 ≤200 cells/µL.',
          references: ['SA National TB Management Guidelines, 2023', 'WHO Consolidated Guidelines on TB Module 3: Diagnosis, 2024']
        },
        {
          id: 'tb-treatment',
          title: 'Drug-Sensitive & Drug-Resistant TB Treatment, TPT',
          content: 'Drug-sensitive TB: intensive phase 2 months of rifampicin, isoniazid, pyrazinamide and ethambutol (RHZE) then continuation 4 months RH, weight-based fixed-dose combinations, plus pyridoxine. TB meningitis and spinal TB: extend to 9–12 months with steroids for TBM.\nSide effects: rifampicin — orange urine, enzyme induction (contraceptives, DTG, warfarin); isoniazid — neuropathy, hepatitis; pyrazinamide — hepatitis, gout; ethambutol — optic neuritis (check colour vision).\nRifampicin-resistant TB: refer to a DR-TB site; 6-month all-oral BPaLM (bedaquiline, pretomanid, linezolid, moxifloxacin); ECG for QT prolongation, FBC for linezolid myelosuppression.\nTB preventive therapy (TPT): for HIV-positive people and household contacts once active TB is excluded — 3HP (weekly isoniazid–rifapentine for 3 months) or 6–12 months isoniazid.',
          dangerBox: 'Never add a single drug to a failing TB regimen — it breeds resistance.',
          recallQuestion: 'What is the standard regimen for drug-sensitive pulmonary TB?',
          recallAnswer: '2 months of rifampicin, isoniazid, pyrazinamide and ethambutol (2RHZE), then 4 months of rifampicin and isoniazid (4RH), with pyridoxine.',
          references: ['SA National TB Management Guidelines, 2023', 'SA Clinical Reference Guide for the Management of Drug-Resistant TB, 2024', 'WHO Consolidated Guidelines on TB Module 4: Treatment, 2025']
        }
      ]
    },
    {
      id: 'opportunistic-infections',
      systemId: 'hiv-infectious',
      title: 'HIV Opportunistic Infections: PJP, Toxoplasmosis & Cryptococcus',
      frequency: 0,
      sourcePages: 'Exam scope breakdown',
      preview1Min: 'CD4 <200: PJP (subacute dry cough, hypoxia, clear CXR or bilateral infiltrates) — high-dose cotrimoxazole ± steroids. Ring-enhancing lesions: toxoplasmosis vs TB. Cryptococcal meningitis: amphotericin B + flucytosine, therapeutic LPs.',
      redFlags: [
        'Desaturation on exertion in advanced HIV (PJP)',
        'Headache with raised opening pressure (cryptococcal meningitis)',
        'Focal neurology or seizures in advanced HIV'
      ],
      tags: ['PJP', 'Cotrimoxazole', 'Toxoplasmosis', 'Cryptococcus', 'Amphotericin', 'Prophylaxis'],
      sections: [
        {
          id: 'pjp-toxo',
          title: 'PJP & Cerebral Toxoplasmosis',
          content: 'PJP: subacute dry cough, fever, exertional breathlessness and hypoxia; CXR bilateral perihilar ground-glass or normal; raised LDH. Treatment: cotrimoxazole 120 mg/kg/day (as trimethoprim 15–20 mg/kg/day) in divided doses for 21 days. Add prednisone 40 mg BD (tapering over 21 days) if PaO₂ <70 mmHg or SpO₂ <92% on room air.\nCerebral toxoplasmosis: headache, fever, focal signs, seizures; CT shows multiple ring-enhancing lesions in basal ganglia. Treat with high-dose cotrimoxazole for 4–6 weeks; expect improvement in 10–14 days — if not, consider TB, lymphoma or biopsy.\nPrimary prophylaxis: cotrimoxazole 960 mg daily for CD4 <200 (prevents PJP and toxoplasmosis); stop once CD4 >200 on ART.',
          recallQuestion: 'When are steroids added to PJP treatment?',
          recallAnswer: 'When PaO₂ <70 mmHg (or SpO₂ <92% on room air) — prednisone 40 mg twice daily tapering over 21 days.',
          references: ['SA National Consolidated Guidelines for HIV, 2023', 'Southern African HIV Clinicians Society Guideline on OIs, 2024']
        },
        {
          id: 'cryptococcal-meningitis',
          title: 'Cryptococcal Meningitis Treatment',
          content: 'Diagnosis: CSF CrAg (or India ink), high opening pressure; screen serum CrAg in all with CD4 <100 (or <200).\nInduction (WHO 2022, adopted in SA): single high-dose liposomal amphotericin B 10 mg/kg plus 14 days flucytosine and fluconazole 1200 mg daily. Alternative: amphotericin B deoxycholate 1 mg/kg/day plus flucytosine for 1 week, then fluconazole 1200 mg for 1 week.\nWith conventional amphotericin give pre-hydration with saline and potassium/magnesium supplements; monitor creatinine and potassium.\nRaised intracranial pressure: therapeutic LP to reduce opening pressure to <20 cmH₂O or by 50%, repeat daily until stable. Steroids, acetazolamide and mannitol are not used.\nConsolidation: fluconazole 800 mg for 8 weeks, then maintenance 200 mg until CD4 >100 and suppressed VL. Delay ART 4–6 weeks.',
          recallQuestion: 'How is raised intracranial pressure managed in cryptococcal meningitis?',
          recallAnswer: 'With repeated therapeutic lumbar punctures to lower opening pressure (to <20 cmH₂O or by 50%) — not steroids, mannitol or acetazolamide.',
          references: ['WHO Guidelines for diagnosing, preventing and managing cryptococcal disease, 2022', 'Southern African HIV Clinicians Society Cryptococcal guideline, 2019 (updated 2024)']
        }
      ]
    }
  ],
  sections: {}
};
