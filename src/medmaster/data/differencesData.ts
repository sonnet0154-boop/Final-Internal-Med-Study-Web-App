import { GuidelineDifference } from '../types';

export const guidelineDifferences: GuidelineDifference[] = [
  {
    id: 'lbbb-acs',
    topic: 'ECG with New LBBB in Suspected ACS',
    system: 'Cardiology',
    safeLearningPoint: 'LBBB alone is NOT sufficient to diagnose acute STEMI. Use clinical presentation, serial ECGs, bedside echo, and high-sensitivity troponin assays.',
    saProtocol: 'SA Adult Hospital Level STG maintains prompt activation of local reperfusion pathway when high suspicion with new LBBB occurs.',
    internationalGuideline: 'ESC 2023 ACS: Prioritises modified Sgarbossa criteria, hemodynamic instability, or emergent echo rather than reflexively lytic-treating all isolated new LBBB.',
    examTrapWarning: 'Never state "new LBBB automatically = STEMI" without stating that modern practice requires clinical instability or Sgarbossa criteria.',
    sourceGuideline: 'SA AHL STG 2024 / ESC ACS Guidelines'
  },
  {
    id: 'asthma-reliever',
    topic: 'Asthma Reliever & Controller Strategy',
    system: 'Respiratory',
    safeLearningPoint: 'Never prescribe SABA-only monotherapy in adults/adolescents. Every patient requires an inhaled corticosteroid (ICS)-containing regimen.',
    saProtocol: 'SA STG/EML provides regular low-dose ICS (budesonide or beclometasone) with as-needed SABA (salbutamol) when combination inhalers are restricted.',
    internationalGuideline: 'GINA 2026 Track 1: Recommends as-needed low-dose ICS-formoterol as the preferred reliever across all asthma steps to prevent severe exacerbations.',
    examTrapWarning: 'Prescribing salbutamol alone is considered an unsafe exam answer. If combination ICS-formoterol is unavailable in public sector, state regular ICS + SABA.',
    sourceGuideline: 'GINA 2026 / SA AHL STG'
  },
  {
    id: 'copd-ics',
    topic: 'COPD Inhaled Steroid Use & Diagnosis',
    system: 'Respiratory',
    safeLearningPoint: 'Diagnosis strictly requires post-bronchodilator spirometry (FEV1/FVC < 0.70). Inhaled corticosteroids are never default monotherapy in COPD.',
    saProtocol: 'SA STG/EML prioritises short-acting bronchodilators, smoking cessation, and cautious addition of LABA/ICS for frequent exacerbators.',
    internationalGuideline: 'GOLD 2026: Favours LABA+LAMA combinations for symptomatic patients. Restricts ICS to patients with blood eosinophils ≥300 cells/µL or frequent exacerbations (≥2/year or ≥1 hospitalization).',
    examTrapWarning: 'Never initiate ICS monotherapy in COPD—it increases the risk of bacterial pneumonia without mortality benefit.',
    sourceGuideline: 'GOLD 2026 / SA AHL STG'
  },
  {
    id: 'tb-diagnostics',
    topic: 'TB Diagnosis vs. Monitoring',
    system: 'Infectious Diseases',
    safeLearningPoint: 'GeneXpert (NAAT / Ultra) is the diagnostic tool of choice and screens for rifampicin resistance. It must NEVER be used to monitor treatment response.',
    saProtocol: 'Standard drug-sensitive pulmonary regimen is 2RHZE / 4RH. Monitor response at month 2, 4, and 6 with sputum microscopy and culture, NOT GeneXpert.',
    internationalGuideline: 'WHO 2026: Confirms NAAT detects non-viable DNA for up to months after microbiological cure; follow-up must rely on smear microscopy and clinical weight/symptom response.',
    examTrapWarning: 'Ordering GeneXpert at month 2 to check "if TB is cleared" is a classic exam failure point. It will remain positive due to dead bacilli DNA.',
    sourceGuideline: 'National Tuberculosis Programme SA / WHO'
  },
  {
    id: 'hiv-first-line',
    topic: 'HIV First-Line ART & Rifampicin Interaction',
    system: 'HIV Medicine',
    safeLearningPoint: 'Adult first-line ART is DTG-based TLD (Tenofovir + Lamivudine + Dolutegravir). Concomitant rifampicin induces CYP3A4/UGT1A1, requiring dose doubling.',
    saProtocol: 'Add extra Dolutegravir 50 mg 12 hours after the daily TLD dose (DTG 50mg BD) throughout rifampicin treatment and for 2 weeks after stopping TB treatment.',
    internationalGuideline: 'WHO Consolidated ART Guidelines: TLD remains universal first-line; confirm negative cryptococcal antigen before rapid ART in CD4 <200.',
    examTrapWarning: 'Forgetting the extra DTG dose with rifampicin causes subtherapeutic dolutegravir levels and rapid viral breakthrough / resistance.',
    sourceGuideline: 'SA NDoH ART Clinical Guidelines / WHO'
  },
  {
    id: 'af-cardioversion',
    topic: 'Atrial Fibrillation Cardioversion & Risk Score',
    system: 'Cardiology',
    safeLearningPoint: 'Do not decide on cardioversion or long-term anticoagulation based solely on an arbitrary 48-hour symptom duration.',
    saProtocol: 'SA training exams often reference CHA2DS2-VASc scoring; public sector uses warfarin with target INR 2.0–3.0 due to DOAC formulary restrictions.',
    internationalGuideline: 'ESC 2024 AF Guidelines: Adopted CHA2DS2-VA (omitting the female sex category as a standalone risk factor). Recommends DOACs over VKAs as first-line.',
    examTrapWarning: 'Always specify whether you are applying CHA2DS2-VASc (SA standard) or CHA2DS2-VA (ESC 2024), and check TOE/anticoagulation status before elective cardioversion.',
    sourceGuideline: 'ESC 2024 Guidelines on AF / SA Heart Association'
  },
  {
    id: 'stroke-thrombolysis',
    topic: 'Acute Ischaemic Stroke Thrombolysis Window',
    system: 'Neurology',
    safeLearningPoint: 'Thrombolysis requires strict BP <185/110 mmHg and immediate non-contrast CT to exclude intracranial haemorrhage. Never give aspirin within 24 hours post-lytic.',
    saProtocol: 'SA AHL STG (2025/2026) specifies IV alteplase within a 3-hour window at designated regional/tertiary facilities with stroke protocols.',
    internationalGuideline: 'AHA/ASA 2026: Recommends IV tenecteplase (0.25 mg/kg) or alteplase up to 4.5 hours, and endovascular thrombectomy up to 24 hours in selected salvageable tissue.',
    examTrapWarning: 'In SA public exam, state the 3-hour local STG guideline first, then highlight the international 4.5h tenecteplase evidence where CT angiogram/perfusion is accessible.',
    sourceGuideline: 'SA AHL STG Neurology / AHA-ASA 2026'
  },
  {
    id: 'dka-management',
    topic: 'DKA vs HHS Diagnostic Criteria & Potassium Rule',
    system: 'Endocrinology',
    safeLearningPoint: 'DKA diagnosis requires hyperglycaemia (or known DM) + metabolic acidosis (bicarbonate <18 or venous pH <7.3) + ketonaemia (>3.0 mmol/L). Potassium must be checked BEFORE insulin!',
    saProtocol: 'SA AHL STG protocol: Resuscitate with 0.9% Normal Saline; start regular insulin at 0.1 U/kg/h ONLY if potassium ≥3.5 mmol/L (add KCL 20-40 mmol per litre once K <5.0).',
    internationalGuideline: 'ADA/EASD 2024 Consensus: Emphasises euglycaemic DKA in SGLT2 inhibitor patients. Insulin withheld if K <3.3 mmol/L. Dextrose 5-10% added as soon as glucose reaches 11.1–14 mmol/L.',
    examTrapWarning: 'Giving IV insulin without checking serum potassium is lethal (causes fatal hypokalaemic arrhythmia). Routine sodium bicarbonate is contraindicated.',
    sourceGuideline: 'ADA/EASD 2024 Hyperglycemic Crises Consensus / SA AHL STG'
  },
  {
    id: 'portal-hypertension',
    topic: 'Cirrhosis & Portal Hypertension / SBP',
    system: 'Gastroenterology',
    safeLearningPoint: 'Spontaneous Bacterial Peritonitis (SBP) is defined by ascitic fluid neutrophil (PMN) count ≥250 cells/mm³, regardless of culture or symptoms.',
    saProtocol: 'SA AHL STG: Prompt diagnostic paracentesis on admission. Treat with IV Cefotaxime / Ceftriaxone. Give IV albumin (1.5 g/kg day 1, 1.0 g/kg day 3) to prevent hepatorenal syndrome.',
    internationalGuideline: 'Baveno VIII (2026): Uses liver stiffness measurement (LSM <20 kPa) and platelet count (>150k) to rule out high-risk varices avoiding screening endoscopy. Prioritises non-selective beta-blockers (carvedilol).',
    examTrapWarning: 'Never wait for ascitic fluid bacterial culture to turn positive before starting antibiotics if PMN ≥250 cells/mm³.',
    sourceGuideline: 'Baveno VIII Consensus 2026 / SA AHL STG'
  },
  {
    id: 'ckd-sglt2',
    topic: 'Chronic Kidney Disease Definition & SGLT2i',
    system: 'Renal',
    safeLearningPoint: 'CKD requires structural or functional abnormalities present for ≥3 months (eGFR <60 or urine ACR ≥3 mg/mmol). Single isolated blood tests are never diagnostic.',
    saProtocol: 'SA STG/EML relies on ACEi or ARB (never both combined!) with strict titration and monitoring of creatinine and potassium within 1–2 weeks.',
    internationalGuideline: 'KDIGO 2024: Strongly recommends SGLT2 inhibitors (dapagliflozin/empagliflozin) for CKD with eGFR ≥20 mL/min/1.73m² (diabetic or non-diabetic albuminuric CKD).',
    examTrapWarning: 'Do not combine ACE inhibitors and ARBs together—this increases hyperkalaemia, syncope, and AKI without additional renal protection.',
    sourceGuideline: 'KDIGO 2024 Clinical Practice Guideline / SA AHL STG'
  },
  {
    id: 'acute-pancreatitis',
    topic: 'Acute Pancreatitis Diagnosis & Hydration',
    system: 'Gastroenterology',
    safeLearningPoint: 'Diagnosed by 2 of 3: (1) characteristic epigastric pain radiating to back, (2) serum amylase or lipase ≥3x upper limit of normal, (3) diagnostic abdominal imaging (CT/MRI/US).',
    saProtocol: 'Early goal-directed fluid resuscitation (target urine output >0.5 mL/kg/h); avoid prophylactic antibiotics for sterile necrosis; identify gallstones vs alcohol.',
    internationalGuideline: 'ACG 2024 Guidelines: Lactated Ringer’s preferred over normal saline (reduces systemic acidosis). Early oral feeding within 24 hours as tolerated. Prophylactic antibiotics strictly discouraged.',
    examTrapWarning: 'Routine CT on admission is NOT necessary if clinical pain + lipase ≥3x ULN are present, unless clinical uncertainty or peritonitis persists >48–72 hours.',
    sourceGuideline: 'ACG Acute Pancreatitis 2024 / SA AHL STG'
  },
  {
    id: 'hypertension-emergency',
    topic: 'Hypertensive Emergency vs. Urgency',
    system: 'Cardiology',
    safeLearningPoint: 'Hypertensive emergency is defined by acute target-organ damage (encephalopathy, stroke, pulmonary oedema, aortic dissection, ACS, AKI), NOT a numeric blood pressure cutoff alone.',
    saProtocol: 'SA AHL STG: For asymptomatic severe hypertension (urgency), lower blood pressure gradually over 24–48 hours using oral agents (amlodipine/enalapril).',
    internationalGuideline: 'ESC / ISH 2024: In hypertensive urgency without target-organ damage, aggressive rapid IV lowering is harmful (can precipitate cerebral ischaemia / watershed infarction).',
    examTrapWarning: 'Giving sublingual nifedipine or rapid IV boluses for asymptomatic severe BP without end-organ damage is an obsolete, dangerous practice.',
    sourceGuideline: 'SA Hypertension Society / ISH 2024 Guidelines'
  }
];
