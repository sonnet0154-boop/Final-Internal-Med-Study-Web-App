import type { ScopeAddition } from './types';

export const respiratoryScope: ScopeAddition = {
  topics: [
    {
      id: 'pulmonary-embolism',
      systemId: 'respiratory',
      title: 'Pulmonary Embolism: Wells, PERC & Risk-Stratified Treatment',
      frequency: 0,
      sourcePages: 'Exam scope breakdown',
      preview1Min: 'Pre-test probability first (Wells), then D-dimer only if PE is unlikely, CTPA if likely. Stratify by haemodynamics: massive PE with shock gets systemic thrombolysis; stable PE gets anticoagulation.',
      redFlags: [
        'Systolic BP <90 mmHg or drop ≥40 mmHg for >15 min (high-risk / massive PE)',
        'RV dilatation on echo with raised troponin in a normotensive patient (intermediate-high risk)',
        'Syncope or new right heart strain on ECG (S1Q3T3, RBBB, T inversion V1–V4)'
      ],
      tags: ['PE', 'Wells', 'D-dimer', 'CTPA', 'Thrombolysis', 'Anticoagulation'],
      sections: [
        {
          id: 'pe-diagnosis',
          title: 'Diagnostic Pathway for Suspected PE',
          content: '1. Clinical probability: Wells score (PE likely >4). Use PERC only when gestalt probability is low.\n2. PE unlikely: measure D-dimer; a normal result excludes PE. Age-adjusted cut-off (age × 10 µg/L) in patients >50 years.\n3. PE likely or D-dimer raised: CT pulmonary angiogram (CTPA). V/Q scan if contrast is contraindicated or in pregnancy with a normal chest X-ray.\n4. Unstable patient who cannot go to CT: bedside echo showing RV dysfunction is enough to justify reperfusion.\n5. Supportive findings: sinus tachycardia (most common ECG finding), S1Q3T3, type 1 respiratory failure with a clear chest X-ray.',
          examAnchor: 'Do not order D-dimer in a high-probability patient — a negative result does not exclude PE there.',
          recallQuestion: 'In which patients does a normal D-dimer safely exclude pulmonary embolism?',
          recallAnswer: 'Only in patients with a low/unlikely clinical probability (Wells ≤4 or low gestalt); high-probability patients go straight to CTPA.',
          references: ['ESC Guidelines on acute pulmonary embolism, 2019 (escardio.org)', 'SA Standard Treatment Guidelines & EML, Hospital Level Adults, 2019 (knowledgehub.health.gov.za)']
        },
        {
          id: 'pe-treatment',
          title: 'Risk-Stratified Treatment',
          content: 'High-risk (shock/hypotension): unfractionated heparin bolus then systemic thrombolysis (e.g. streptokinase or alteplase per local availability); surgical or catheter embolectomy if thrombolysis contraindicated or fails.\nIntermediate-risk: anticoagulate and monitor closely; rescue thrombolysis only if haemodynamic decompensation.\nLow-risk: anticoagulate; consider early discharge.\nAnticoagulation in SA public sector: enoxaparin 1 mg/kg 12-hourly overlapped with warfarin for ≥5 days until INR 2–3 on two consecutive days. DOACs are preferred internationally if available and renal function allows.\nDuration: 3 months for provoked PE; consider long-term for unprovoked or recurrent PE or active cancer.',
          dangerBox: 'Avoid warfarin-only starts: warfarin initially lowers protein C and is prothrombotic — always overlap with heparin.',
          saPublicSectorNote: 'Enoxaparin + warfarin remains the standard state-sector regimen; DOAC access is limited.',
          recallQuestion: 'What is the treatment of a PE with hypotension (systolic <90 mmHg)?',
          recallAnswer: 'Heparin anticoagulation plus systemic thrombolysis; embolectomy if thrombolysis is contraindicated or fails.',
          references: ['ESC Guidelines on acute pulmonary embolism, 2019', 'SA STG/EML Hospital Level Adults, 2019 – Venous thromboembolism']
        }
      ]
    },
    {
      id: 'lung-cancer-ild',
      systemId: 'respiratory',
      title: 'Lung Cancer & Interstitial Lung Disease',
      frequency: 0,
      sourcePages: 'Exam scope breakdown',
      preview1Min: 'Smoker with haemoptysis, weight loss or non-resolving pneumonia needs a CXR and CT; exclude TB first in SA. Know the paraneoplastic syndromes. ILD: fine end-inspiratory crackles, clubbing, restrictive spirometry with low DLCO.',
      redFlags: [
        'Superior vena cava obstruction (facial swelling, distended non-pulsatile neck veins)',
        'Stridor or massive haemoptysis',
        'Hypercalcaemia with confusion (squamous cell PTHrP)'
      ],
      tags: ['Lung cancer', 'SIADH', 'Hypercalcaemia', 'ILD', 'Restrictive', 'HRCT'],
      sections: [
        {
          id: 'lung-cancer-approach',
          title: 'Presentation, Paraneoplastic Syndromes & Work-up',
          content: 'Symptoms: cough, haemoptysis, weight loss, chest pain, hoarseness (recurrent laryngeal nerve), Horner syndrome (Pancoast tumour).\nParaneoplastic: small cell — SIADH (hyponatraemia), ectopic ACTH (hypokalaemic alkalosis), Lambert–Eaton syndrome; squamous cell — PTHrP hypercalcaemia; adenocarcinoma — hypertrophic pulmonary osteoarthropathy, migratory thrombophlebitis.\nWork-up: CXR, contrast CT chest and upper abdomen, tissue diagnosis (bronchoscopy, CT-guided biopsy, or pleural fluid cytology), staging; sputum GeneXpert to exclude TB.',
          examAnchor: 'In South Africa, always exclude TB in a patient with haemoptysis and an upper-lobe lesion.',
          recallQuestion: 'Which lung cancer type causes SIADH and which causes hypercalcaemia?',
          recallAnswer: 'Small cell causes SIADH (and ectopic ACTH); squamous cell causes PTHrP-mediated hypercalcaemia.',
          references: ['NICE NG122 Lung cancer: diagnosis and management, 2019 (updated 2024)', 'Davidson’s Principles and Practice of Medicine, 24th ed., 2023']
        },
        {
          id: 'ild-approach',
          title: 'Interstitial Lung Disease Recognition',
          content: 'Clinical: progressive exertional dyspnoea, dry cough, fine bibasal "velcro" end-inspiratory crackles, clubbing (especially idiopathic pulmonary fibrosis).\nSpirometry: restrictive (FEV1/FVC normal or high, reduced FVC and TLC) with reduced DLCO.\nImaging: high-resolution CT; usual interstitial pneumonia pattern (basal subpleural honeycombing) supports IPF.\nCauses: connective tissue disease (scleroderma, RA), occupational dusts (silicosis and asbestosis — important in SA miners), drugs (amiodarone, methotrexate, nitrofurantoin), hypersensitivity pneumonitis, sarcoidosis.\nManagement: remove exposure, treat the cause; antifibrotics (nintedanib, pirfenidone) for IPF; oxygen and pulmonary rehabilitation.',
          recallQuestion: 'What spirometry and gas-transfer pattern is typical of interstitial lung disease?',
          recallAnswer: 'Restrictive pattern (reduced FVC and TLC with normal or raised FEV1/FVC) with a reduced DLCO.',
          references: ['ATS/ERS/JRS/ALAT Idiopathic Pulmonary Fibrosis guideline, 2022', 'Davidson’s Principles and Practice of Medicine, 24th ed., 2023']
        }
      ]
    }
  ],
  sections: {}
};
