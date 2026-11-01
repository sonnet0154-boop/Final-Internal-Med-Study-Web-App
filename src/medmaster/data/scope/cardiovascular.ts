import type { ScopeAddition } from './types';

export const cardiovascularScope: ScopeAddition = {
  topics: [
    {
      id: 'bradyarrhythmia-dissection',
      systemId: 'cardiology',
      title: 'Bradyarrhythmias, Heart Block & Aortic Dissection',
      frequency: 0,
      sourcePages: 'Exam scope breakdown',
      preview1Min: 'Unstable bradycardia: atropine, then pacing. Know the four degrees of AV block. Tearing chest pain to the back with pulse or BP difference between arms is aortic dissection until proven otherwise — never thrombolyse.',
      redFlags: [
        'Bradycardia with shock, syncope, heart failure or myocardial ischaemia',
        'Mobitz II or complete heart block (risk of asystole)',
        'Chest pain radiating to the back with BP difference >20 mmHg between arms'
      ],
      tags: ['Bradycardia', 'AV block', 'Atropine', 'Pacing', 'Aortic dissection'],
      sections: [
        {
          id: 'av-block-management',
          title: 'AV Block Types & Bradycardia Algorithm',
          content: 'First degree: PR >200 ms, every P conducted — benign.\nMobitz I (Wenckebach): progressive PR lengthening then a dropped beat — usually AV nodal, often benign.\nMobitz II: constant PR with sudden dropped beats — infranodal, high risk of complete block; needs pacing.\nThird degree: complete AV dissociation, regular slow escape rhythm; needs pacing.\nUnstable bradycardia: atropine 500 µg IV, repeat to 3 mg total; if no response, adrenaline infusion 2–10 µg/min or transcutaneous pacing, then transvenous pacing. Look for reversible causes: inferior MI, hyperkalaemia, beta-blocker/digoxin toxicity, hypothyroidism.',
          recallQuestion: 'How do Mobitz I and Mobitz II differ on ECG and in risk?',
          recallAnswer: 'Mobitz I shows progressive PR lengthening before a dropped beat and is usually benign; Mobitz II has a constant PR with sudden dropped beats and carries high risk of complete heart block, needing pacing.',
          references: ['Resuscitation Council UK Adult bradycardia algorithm, 2021', 'ESC Guidelines on cardiac pacing, 2021']
        },
        {
          id: 'aortic-dissection',
          title: 'Acute Aortic Dissection',
          content: 'Risk factors: hypertension (most common), Marfan syndrome, bicuspid aortic valve, cocaine, tertiary syphilis (aortitis — relevant in SA).\nClinical: sudden tearing pain radiating to the back, pulse deficit or BP difference between arms, new aortic regurgitation murmur, stroke or limb ischaemia.\nImaging: CT aortic angiography (stable); transoesophageal echo if unstable. CXR may show widened mediastinum.\nStanford A (ascending aorta): emergency surgery. Stanford B (descending only): medical therapy.\nMedical therapy: IV beta-blocker first (e.g. labetalol) to heart rate <60 and systolic BP 100–120 mmHg, then add vasodilator; opioid analgesia.',
          dangerBox: 'Never give thrombolysis or heparin when dissection is possible — exclude it in any "STEMI" with back pain or pulse deficit.',
          recallQuestion: 'What are the heart-rate and BP targets in acute aortic dissection and which drug is given first?',
          recallAnswer: 'Heart rate <60/min and systolic BP 100–120 mmHg, using an IV beta-blocker first (before any vasodilator).',
          references: ['ACC/AHA Guideline for the Diagnosis and Management of Aortic Disease, 2022', 'ESC Guidelines on aortic diseases, 2024']
        }
      ]
    },
    {
      id: 'cardiomyopathy-pericarditis',
      systemId: 'cardiology',
      title: 'Cardiomyopathies & Pericarditis (incl. TB Pericarditis)',
      frequency: 0,
      sourcePages: 'Exam scope breakdown',
      preview1Min: 'Dilated (incl. peripartum), hypertrophic and restrictive cardiomyopathy. Acute pericarditis: pleuritic chest pain eased by sitting forward, rub, widespread saddle ST elevation with PR depression. In SA, large effusions are TB until proven otherwise.',
      redFlags: [
        'Peripartum woman with new breathlessness and oedema (peripartum cardiomyopathy)',
        'Syncope on exertion in a young athlete (HCM)',
        'Pericardial effusion with hypotension and raised JVP (tamponade)'
      ],
      tags: ['DCM', 'HCM', 'Peripartum', 'Pericarditis', 'TB pericarditis', 'Colchicine'],
      sections: [
        {
          id: 'cardiomyopathy-types',
          title: 'Cardiomyopathy Types',
          content: 'Dilated: dilated, poorly contracting LV. Causes: alcohol, HIV, viral myocarditis, peripartum, familial, doxorubicin. Treat as HFrEF.\nPeripartum cardiomyopathy: HFrEF in the last month of pregnancy to 5 months postpartum; common in South Africa. Treat HF (avoid ACE inhibitors before delivery), consider bromocriptine, anticoagulate if EF very low.\nHypertrophic: asymmetric septal hypertrophy, autosomal dominant; ejection systolic murmur louder with Valsalva or standing; risk of sudden death. Avoid dehydration, nitrates and vasodilators; beta-blockers first line; ICD for high risk.\nRestrictive: amyloid, sarcoid, haemochromatosis, endomyocardial fibrosis — right-sided failure with normal-sized ventricles.',
          recallQuestion: 'Which manoeuvre makes the HCM murmur louder, and which drugs should be avoided?',
          recallAnswer: 'Valsalva or standing (reduced preload) makes it louder; avoid nitrates, vasodilators and dehydration.',
          references: ['ESC Guidelines on the management of cardiomyopathies, 2023', 'ESC Heart Failure Association position statement on peripartum cardiomyopathy, 2019']
        },
        {
          id: 'pericarditis-management',
          title: 'Acute Pericarditis & TB Pericarditis',
          content: 'Diagnosis (2 of 4): pleuritic chest pain relieved by leaning forward, pericardial rub, widespread concave ST elevation with PR depression, new or worsening effusion.\nIdiopathic/viral: high-dose aspirin or ibuprofen with gastric protection plus colchicine 0.5 mg daily–twice daily for 3 months (reduces recurrence); restrict exercise.\nTB pericarditis (most common cause of large effusion in SA, especially HIV-positive): pericardiocentesis if tamponade or for diagnosis (lymphocytic exudate, high ADA), start standard TB treatment. Prednisone may reduce constriction in HIV-negative patients.\nComplication: constrictive pericarditis — raised JVP with Kussmaul sign, pericardial knock; needs pericardiectomy.',
          saPublicSectorNote: 'Empirical TB treatment is reasonable for a large exudative effusion in an endemic setting when other causes are excluded.',
          recallQuestion: 'What drug combination treats acute idiopathic pericarditis and reduces recurrence?',
          recallAnswer: 'High-dose NSAID or aspirin (with gastric protection) plus colchicine for 3 months.',
          references: ['ESC Guidelines for the diagnosis and management of pericardial diseases, 2015', 'Mayosi BM et al. IMPI trial, NEJM 2014']
        }
      ]
    }
  ],
  sections: {}
};
