import { ClinicalSystem } from '../types';
import { mergeScope, scopeAdditions } from './scope';

const baseSystems: ClinicalSystem[] = [
  // SYSTEM 01: CARDIOLOGY
  {
    id: 'cardiology',
    number: '01',
    title: 'Cardiology & Vascular Medicine',
    shortTitle: 'Cardiology',
    icon: 'Heart',
    color: 'rose',
    description: 'ECG interpretation, ACS reperfusion, Atrial Fibrillation, Heart Failure NYHA, Endocarditis Duke criteria, Rheumatic Fever Jones criteria, Secondary Hypertension, and Cardiac Tamponade.',
    topics: [
      {
        id: 'ecg-acs',
        systemId: 'cardiology',
        title: 'ECG Interpretation & Acute Coronary Syndromes (ACS)',
        frequency: 4,
        sourcePages: 'pp. 4, 14, 18, 56',
        preview1Min: 'Systematic 8-step ECG reading. STEMI vs NSTE-ACS. New LBBB is no longer an automatic STEMI diagnosis in isolation without Sgarbossa or instability. Rapid reperfusion principles (PCI vs Fibrinolysis).',
        redFlags: [
          'Hypotension, pulmonary oedema, or cardiogenic shock',
          'Ongoing ischemic chest pain refractory to nitrates',
          'Sustained VT, VF, or complete AV block',
          'STEMI equivalents: de Winter T-waves, Wellens sign, or isolated posterior MI'
        ],
        tags: ['ECG', 'STEMI', 'NSTEMI', 'Troponin', 'PCI', 'Fibrinolysis'],
        sections: [
          {
            id: 'ecg-system',
            title: 'Systematic ECG Interpretation Sequence',
            content: 'Read every 12-lead ECG in the exact same sequence to avoid diagnostic blind spots:\n1. Calibration & Patient: Name, timestamp, paper speed (standard 25 mm/s = 0.04s per small box, 0.20s per large box), voltage (10 mm/mV = 1 mV).\n2. Rate: Regular rhythm ≈ 300 ÷ large squares between R-R; Irregular rhythm = count QRS in 30 large squares (6 seconds) × 10.\n3. Rhythm: P-wave morphology (positive in lead II, inverted in aVR), 1:1 AV association, regularity.\n4. Axis: Check Lead I and aVF. Both positive = Normal (0° to +90°); Lead I positive + aVF negative = Left Axis (-30° to -90°); Lead I negative + aVF positive = Right Axis (+90° to +180°).\n5. Intervals: PR (120–200 ms = 3–5 small boxes); QRS width (<120 ms = <3 small boxes); QTc corrected (<450 ms in men, <460 ms in women; >500 ms high torsades risk).\n6. Waveforms: P-pulmonale / P-mitrale; Pathological Q waves (>1 mm wide, >2 mm deep or >25% QRS height); Poor R-wave progression (V1 to V4).\n7. ST-T Segment: Assess contiguous leads for elevation, depression, or T-wave inversion.\n8. Synthesis: Clinical diagnosis and comparison with prior tracings.',
            examAnchor: 'A normal first ECG does NOT rule out ACS. Up to 10% of acute MIs have a normal initial tracing. Repeat serial ECGs at 15–30 min intervals during active pain. [1, 8]',
            recallQuestion: 'What are the grid dimensions of one small box and one large box on standard ECG paper?',
            recallAnswer: 'One small box = 0.04 seconds (1 mm); one large box = 0.20 seconds (5 mm).'
          },
          {
            id: 'acs-management',
            title: 'ACS Risk Stratification & Reperfusion',
            content: 'Acute coronary syndrome encompasses STEMI, NSTEMI, and Unstable Angina. Immediate medical stabilization:\n- Aspirin 300 mg chewable stat (unless true anaphylaxis).\n- Second antiplatelet: Clopidogrel 300–600 mg loading dose (or Ticagrelor 180 mg where protocolized).\n- Anticoagulation: Enoxaparin 1 mg/kg SC 12-hourly or unfractionated heparin.\n- Nitrates: Sublingual GTN 0.5 mg every 5 min (up to 3 doses) provided SBP >100 mmHg and no PDE-5 inhibitor in last 24–48h. Contraindicated in right ventricular infarction!\n- Oxygen: ONLY for hypoxaemia (SpO2 <90%) or acute shock. Routine oxygen in normoxic ACS causes coronary vasoconstriction and increases infarct size.',
            dangerBox: 'DANGER: Always exclude acute aortic dissection before initiating antiplatelets and anticoagulants. Check radial-radial pulse symmetry and bilateral BP if pain radiates to interscapular region.',
            saPublicSectorNote: 'SA AHL STG Reperfusion Protocol: Primary PCI is preferred if patient can reach catheterization lab within 120 minutes of STEMI diagnosis. Otherwise, administer fibrinolytic therapy (Streptokinase 1.5 million units IV over 60 min or Alteplase/Tenecteplase) within 30 minutes of arrival if within 12 hours of onset and no contraindications.',
            internationalNote: 'ESC 2023 Guidelines: Emphasize modern high-sensitivity troponin 0h/1h or 0h/2h rapid algorithms. Recommends routine radial access and newer P2Y12 inhibitors (Ticagrelor/Prasugrel) over clopidogrel.',
            recallQuestion: 'What is the target door-to-needle time for fibrinolysis in eligible STEMI?',
            recallAnswer: 'Door-to-needle time should be within 30 minutes of arrival at hospital.'
          }
        ]
      },
      {
        id: 'atrial-fibrillation',
        systemId: 'cardiology',
        title: 'Atrial Fibrillation & Anticoagulation',
        frequency: 3,
        sourcePages: 'pp. 7, 37, 56',
        preview1Min: 'Irregularly irregular rhythm with absent P waves. Rate control vs rhythm control. Stroke risk stratification: CHA2DS2-VASc vs ESC 2024 CHA2DS2-VA. Anticoagulation choices in public sector vs private.',
        redFlags: [
          'Haemodynamic instability: SBP <90 mmHg, ongoing chest pain, acute pulmonary oedema, syncope → Immediate synchronized DC cardioversion!',
          'Rapid ventricular response (HR >150 bpm) with pre-excited WPW (wide complex irregular rhythm) → Do NOT give AV nodal blockers (digoxin, verapamil, beta-blockers)!'
        ],
        tags: ['AF', 'Anticoagulation', 'CHA2DS2-VASc', 'Cardioversion', 'Warfarin'],
        sections: [
          {
            id: 'af-risk-stratification',
            title: 'Stroke Prevention & Rate vs Rhythm Control',
            content: 'Atrial fibrillation leads to blood stasis in the left atrial appendage, multiplying stroke risk by fivefold. Rate control is first-line for most stable elderly patients (target resting HR <100–110 bpm):\n- First-line: Beta-blockers (Bisoprolol 2.5–10 mg, Atenolol 25–100 mg, Metoprolol) or non-dihydropyridine calcium channel blockers (Diltiazem, Verapamil).\n- Second-line / Heart failure: Digoxin or Amiodarone.\nRhythm control is preferred in young patients, highly symptomatic individuals, or heart failure precipitated by AF.',
            saPublicSectorNote: 'In SA public hospitals, Warfarin remains the primary anticoagulant for high-risk AF due to cost and tender availability. Target INR is 2.0–3.0. Educate on diet, drug interactions, and frequent INR clinic monitoring.',
            internationalNote: 'ESC 2024 Guidelines: Prioritises DOACs (Apixaban, Rivaroxaban, Dabigatran) over Warfarin due to superior safety (50% reduction in intracranial haemorrhage). Uses CHA2DS2-VA score (omitting the female sex point).',
            diagnosticTable: {
              headers: ['Score Component', 'Criteria Definition', 'Points'],
              rows: [
                ['C', 'Congestive Heart Failure / LVEF ≤40%', '1'],
                ['H', 'Hypertension (or on treatment)', '1'],
                ['A2', 'Age ≥ 75 years', '2'],
                ['D', 'Diabetes Mellitus', '1'],
                ['S2', 'Prior Stroke / TIA / Thromboembolism', '2'],
                ['V', 'Vascular Disease (prior MI, PAD, aortic plaque)', '1'],
                ['A', 'Age 65–74 years', '1'],
                ['Sc (Female)', 'Sex category: female (omitted in ESC 2024)', '1']
              ]
            },
            recallQuestion: 'At what CHA2DS2-VASc score is oral anticoagulation strongly indicated in men and women?',
            recallAnswer: 'Indicated for score ≥2 in men and ≥3 in women (or score ≥1 in men / ≥2 in women as a strong consideration).'
          }
        ]
      },
      {
        id: 'heart-failure',
        systemId: 'cardiology',
        title: 'Heart Failure (Left vs Right) & Valvular Murmurs',
        frequency: 4,
        sourcePages: 'pp. 11, 35, 56',
        preview1Min: 'HFrEF (<40%) vs HFpEF (≥50%). The four pillars of guideline-directed medical therapy. NYHA functional classes. Left vs right-sided heart failure examination signs. Valvular lesions: AS, MR, MS, AR murmurs and physical signs.',
        redFlags: [
          'Acute pulmonary oedema with pink frothy sputum and respiratory exhaustion',
          'Cardiogenic shock (hypoperfusion, cool peripheries, oliguria)',
          'Severe aortic stenosis with triad of syncope, angina, and dyspnoea'
        ],
        tags: ['Heart Failure', 'NYHA', 'Aortic Stenosis', 'Mitral Regurgitation', 'SGLT2i', 'Left vs Right HF'],
        sections: [
          {
            id: 'hf-pillars-nyha',
            title: 'NYHA Classification, Left vs Right Signs & HFrEF 4 Pillars',
            content: 'Left-sided vs Right-sided Heart Failure Examination Signs:\n- Left-sided HF: Exertional dyspnoea, orthopnoea, paroxysmal nocturnal dyspnoea (PND), bilateral basal inspiratory crackles (crepitations), displaced apex beat (left ventricular dilatation), S3 gallop (volume overload), S4 gallop (stiff ventricle), Cheyne-Stokes respiration.\n- Right-sided HF: Elevated Jugular Venous Pressure (JVP >3 cm above sternal angle), positive hepatojugular reflux, tender hepatomegaly (pulsatile in tricuspid regurgitation), bilateral pitting pedal and pre-sacral oedema, ascites, right ventricular heave.\n\nNYHA Functional Classification:\n- Class I: Cardiac disease without limitation of physical activity. Ordinary physical activity does not cause undue fatigue, palpitation, or dyspnoea.\n- Class II: Slight limitation of physical activity. Comfortable at rest, but ordinary activity causes fatigue or dyspnoea.\n- Class III: Marked limitation of physical activity. Comfortable at rest, but less than ordinary activity causes fatigue or dyspnoea.\n- Class IV: Inability to carry on any physical activity without discomfort. Symptoms present at rest.\n\nThe 4 Pillars of HFrEF Therapy (Mortality Benefit):\n1. ARNI (Sacubitril/Valsartan) or ACEi (Enalapril/Perindopril).\n2. Evidence-based Beta-Blocker (Carvedilol, Bisoprolol, or Metoprolol succinate).\n3. Mineralocorticoid Receptor Antagonist (Spironolactone or Eplerenone).\n4. SGLT2 Inhibitor (Dapagliflozin or Empagliflozin).',
            saPublicSectorNote: 'SA AHL STG baseline: Loop diuretics (Furosemide) for symptom congestion + Enalapril + Carvedilol + Spironolactone. SGLT2 inhibitors and ARNI are restricted to tertiary approval in many public hospitals.',
            internationalNote: 'ESC 2024 / AHA 2024: Mandates quadruple therapy initiation rapidly within weeks of diagnosis, even before discharge from acute decompensation.',
            recallQuestion: 'What are the 4 pharmacological pillars proven to reduce mortality in HFrEF?',
            recallAnswer: 'ACEi/ARNI, beta-blocker (carvedilol/bisoprolol), MRA (spironolactone), and SGLT2 inhibitor (dapagliflozin/empagliflozin).'
          },
          {
            id: 'valvular-lesions',
            title: 'Valvular Murmurs & Examination Signs',
            content: 'High-yield examination patterns:\n- Aortic Stenosis (AS): Harsh crescendo-decrescendo ejection systolic murmur at right 2nd ICS radiating to carotids; slow-rising, low-volume pulse (pulsus parvus et tardus); soft/absent A2; heaving, non-displaced apex beat.\n- Mitral Regurgitation (MR): Holosystolic / pansystolic blowing murmur at apex radiating to left axilla; displaced, hyperdynamic apex beat; soft S1.\n- Mitral Stenosis (MS): Low-pitched rumbling mid-diastolic murmur with opening snap at apex (heard best in left lateral position with bell); tapping apex beat; malar flush; strong association with rheumatic heart disease.\n- Aortic Regurgitation (AR): Early diastolic decrescendo murmur along left sternal edge (heard best leaning forward in expiration); collapsing / water-hammer pulse (Corrigan pulse); wide pulse pressure; Austin Flint murmur.',
            examAnchor: 'Exam Anchor: Aortic Stenosis classical symptom triad: Angina (5 yr survival), Syncope (3 yr survival), Dyspnoea/Heart failure (2 yr survival). Prompt surgical or transcatheter aortic valve replacement (TAVI) is indicated once symptomatic.',
            recallQuestion: 'Which murmur radiates to the carotids and features a slow-rising pulse?',
            recallAnswer: 'Aortic Stenosis.'
          }
        ]
      },
      {
        id: 'endocarditis-rheumatic',
        systemId: 'cardiology',
        title: 'Infective Endocarditis & Acute Rheumatic Fever',
        frequency: 3,
        sourcePages: 'pp. 34, 36, 56',
        preview1Min: 'Modified Duke criteria for Infective Endocarditis. Revised Jones criteria for Acute Rheumatic Fever. Staph aureus vs Strep viridans. Secondary antibiotic prophylaxis duration.',
        redFlags: [
          'New regurgitant murmur + unexplained fever in a patient with prosthetic valve or congenital heart disease',
          'Embolic stroke, Osler nodes, Janeway lesions, splinter haemorrhages, Roth spots',
          'Acute severe heart failure from chordae tendineae rupture or valve destruction'
        ],
        tags: ['Endocarditis', 'Duke Criteria', 'Rheumatic Fever', 'Jones Criteria'],
        sections: [
          {
            id: 'duke-criteria',
            title: 'Modified Duke Criteria for Infective Endocarditis',
            content: 'Diagnosis requires: 2 Major, OR 1 Major + 3 Minor, OR 5 Minor criteria.\nMajor Criteria:\n1. Positive Blood Cultures: Typical microorganisms (Staph aureus, Strep viridans, Enterococci, HACEK) from 2 separate blood cultures, or persistently positive cultures >12 hours apart, or single positive Coxiella burnetii.\n2. Endocardial Involvement on Echo: Vegetations, abscess, new partial dehiscence of prosthetic valve, or new valvular regurgitation.\nMinor Criteria:\n1. Predisposition (prosthetic valve, IV drug use, congenital heart disease).\n2. Fever ≥ 38.0°C.\n3. Vascular phenomena (major arterial emboli, septic pulmonary infarcts, mycotic aneurysm, Janeway lesions).\n4. Immunological phenomena (glomerulonephritis, Osler nodes, Roth spots, positive RF).\n5. Microbiological evidence not meeting major criteria.',
            dangerBox: 'DANGER: Always take 3 sets of blood cultures from separate venepuncture sites with strict aseptic technique BEFORE initiating empiric antibiotics, unless patient is in septic shock.',
            recallQuestion: 'What are the two major Duke criteria?',
            recallAnswer: 'Persistently positive blood cultures with typical organisms, and echocardiographic evidence of endocardial involvement (vegetation, abscess, new dehiscence, or new regurgitation).'
          },
          {
            id: 'jones-criteria',
            title: 'Revised Jones Criteria for Acute Rheumatic Fever (ARF)',
            content: 'ARF follows untreated Group A Streptococcus (GAS) pharyngeal infection after 2–4 weeks. Diagnosis requires evidence of preceding GAS infection (raised ASO titre or anti-DNase B, or positive throat swab) PLUS:\n2 Major criteria, OR 1 Major + 2 Minor criteria.\n\nMajor Criteria (JONES):\n- J: Joint involvement (Migratory Polyarthritis of large joints; in high-risk populations, monoarthritis or polyarthralgia is accepted).\n- O: Carditis (clinical or subclinical valvulitis on echocardiography).\n- N: Subcutaneous Nodules (painless, extensor surfaces).\n- E: Erythema Marginatum (serpiginous non-pruritic erythematous rings with clear centers).\n- S: Sydenham Chorea (involuntary choreiform movements, emotional lability).\n\nMinor Criteria:\n- Arthralgia (if arthritis not used as major)\n- Fever (≥38.0°C or ≥38.5°C depending on setting)\n- Raised ESR (≥30 mm/h) or CRP (≥30 mg/L)\n- Prolonged PR interval on ECG (unless carditis is major)',
            saPublicSectorNote: 'Secondary Prevention in SA: Intramuscular Benzathine Penicillin G 1.2 million units every 4 weeks. Duration: Rheumatic fever with carditis and persistent valvular disease = for at least 10 years after last attack or until age 40 (sometimes lifelong); with carditis but no valvular disease = 10 years or until age 21; without carditis = 5 years or until age 21.',
            recallQuestion: 'What is the standard antibiotic and frequency for secondary rheumatic fever prophylaxis?',
            recallAnswer: 'Intramuscular Benzathine Penicillin G (1.2 million units) every 4 weeks.'
          }
        ]
      },
      {
        id: 'hypertension-tamponade',
        systemId: 'cardiology',
        title: 'Hypertension, Secondary Causes & Pericardial Tamponade',
        frequency: 3,
        sourcePages: 'pp. 35, 38, 56',
        preview1Min: 'Hypertensive emergency vs urgency. Keith-Wagener fundoscopy grading. Secondary hypertension investigation. Beck’s triad and pulsus paradoxus in cardiac tamponade.',
        redFlags: [
          'Acute severe BP (>180/120) with target organ damage (encephalopathy, acute pulmonary oedema, aortic dissection, ACS, AKI) = Hypertensive Emergency!',
          'Beck’s Triad (Hypotension + Raised JVP + Muffled heart sounds) with pulsus paradoxus = Cardiac Tamponade → Emergency pericardiocentesis!'
        ],
        tags: ['Hypertension', 'Fundoscopy', 'Secondary HTN', 'Tamponade', 'Becks Triad'],
        sections: [
          {
            id: 'hypertension-evaluation',
            title: 'Hypertensive Urgency vs Emergency & Fundoscopy',
            content: 'Hypertensive Emergency requires acute target organ damage, NOT a numeric BP threshold alone. Management involves IV labetalol, hydralazine, or nicardipine with careful reduction (max 25% drop in first 2 hours to avoid watershed cerebral infarction).\n\nKeith-Wagener-Barker Fundoscopy Grading for Hypertensive Retinopathy:\n- Grade I: Arteriolar narrowing, tortuosity, "copper wiring" reflex.\n- Grade II: Arteriovenous nicking/nipping (vein compressed where artery crosses).\n- Grade III: Flame-shaped retinal haemorrhages, cotton-wool spots (microinfarcts), hard exudates (macular star).\n- Grade IV: Grade III features PLUS Papilloedema (blurred optic disc margins with optic cup obliteration) = Malignant/Accelerated Hypertension!\n\nScreening for Secondary Hypertension (10% of cases):\n- Renal Artery Stenosis: Abdominal flank bruit, unexplained deterioration in eGFR >30% after starting ACEi/ARB.\n- Primary Hyperaldosteronism (Conn Syndrome): Persistent hypertension with spontaneous or diuretic-induced hypokalaemia, aldosterone:renin ratio (ARR) >20–30.\n- Phaeochromocytoma: Classic triad of episodic headache, profuse sweating, and palpitations with labile hypertension; test 24h urinary metanephrines or plasma free metanephrines.\n- Coarctation of Aorta: Radio-femoral pulse delay, upper extremity BP significantly higher than lower extremity BP, rib notching on CXR.',
            recallQuestion: 'What retinal finding distinguishes Grade IV hypertensive retinopathy from Grade III?',
            recallAnswer: 'Papilloedema (swelling of the optic disc).'
          },
          {
            id: 'cardiac-tamponade',
            title: 'Pericardial Tamponade: Beck’s Triad & Pulsus Paradoxus',
            content: 'Accumulation of pericardial fluid under pressure compromising cardiac filling.\n- Beck’s Triad: (1) Hypotension, (2) Distended neck veins (elevated JVP with absent y-descent), (3) Muffled / distant heart sounds.\n- Pulsus Paradoxus: An exaggerated drop in systolic blood pressure (>10 mmHg) during quiet spontaneous inspiration.\n- 12-lead ECG: Low-voltage QRS complexes (<5 mm in limb leads) and Electrical Alternans (alternating amplitude and axis of QRS complexes from beat to beat as the heart swings in fluid).\n- Emergency Intervention: Immediate emergency echocardiography followed by ultrasound-guided or subxiphoid Pericardiocentesis.',
            dangerBox: 'DANGER: Vasodilators and diuretics are CONTRAINDICATED in cardiac tamponade! They reduce preload and precipitate immediate complete cardiovascular collapse. Maintain intravascular filling with IV crystalloids while preparing for pericardiocentesis.',
            recallQuestion: 'What is Beck’s triad for cardiac tamponade?',
            recallAnswer: 'Hypotension, elevated jugular venous pressure, and muffled/distant heart sounds.'
          }
        ]
      }
    ]
  },

  // SYSTEM 02: RESPIRATORY
  {
    id: 'respiratory',
    number: '02',
    title: 'Respiratory Medicine',
    shortTitle: 'Respiratory',
    icon: 'Wind',
    color: 'teal',
    description: 'Asthma GINA 2026, COPD GOLD 2026, Pneumonia CURB-65, Light’s criteria, Bronchiectasis, Lung Abscess, Lung Cancer, and Respiratory Failure.',
    topics: [
      {
        id: 'asthma-copd',
        systemId: 'respiratory',
        title: 'Asthma (GINA 2026) vs. COPD (GOLD 2026)',
        frequency: 4,
        sourcePages: 'pp. 3, 18, 27, 47, 55',
        preview1Min: 'Asthma controller tracks. GINA 2026 bans SABA-only monotherapy. COPD spirometric definition (post-BD FEV1/FVC <0.70). GOLD 2026 LABA/LAMA preference and selective ICS rules.',
        redFlags: [
          'Near-fatal asthma: Silent chest, exhaustion, drowsiness, cyanosis, paradoxical thoracoabdominal breathing, normal/rising PaCO2 on ABG',
          'Acute hypercapnic respiratory failure (PaCO2 >6.0 kPa, pH <7.35) requiring Non-Invasive Ventilation (NIV)'
        ],
        tags: ['Asthma', 'COPD', 'GINA 2026', 'GOLD 2026', 'SABA', 'ICS'],
        sections: [
          {
            id: 'asthma-gina',
            title: 'Asthma Controller Strategy & GINA 2026 Update',
            content: 'Asthma is characterized by chronic airway inflammation and variable expiratory airflow limitation.\nFundamental Rule: SABA monotherapy is unsafe and should NOT be prescribed in adults/adolescents. SABA-only treatment increases exacerbation risk and airway hyperresponsiveness.\n- GINA Track 1 (Preferred): Low-dose ICS-formoterol as reliever as-needed. In steps 3–5, same inhaler is used for maintenance and reliever therapy (MART).\n- GINA Track 2 (Alternative): Regular daily ICS maintenance + as-needed SABA reliever. Patient must demonstrate excellent adherence to daily ICS.',
            dangerBox: 'DANGER: A normal or elevated PaCO2 (>5.3 kPa / 40 mmHg) during an acute severe asthma attack indicates impending respiratory muscle exhaustion and near-fatal respiratory arrest. Call ICU immediately!',
            saPublicSectorNote: 'SA Adult Hospital Level STG: Uses regular Beclometasone or Budesonide metered-dose inhalers with Salbutamol as reliever, advancing to Budesonide/Formoterol combination inhalers in secondary/tertiary facilities.',
            internationalNote: 'GINA 2026: Continues to reinforce Track 1 (ICS-formoterol reliever) to reduce severe exacerbations and emergency department visits by 60%.',
            recallQuestion: 'Why is SABA monotherapy contraindicated in modern asthma management?',
            recallAnswer: 'It fails to treat underlying airway inflammation, downregulates beta-receptors, increases eosinophilia, and increases the risk of severe, fatal exacerbations.'
          },
          {
            id: 'copd-gold',
            title: 'COPD Diagnosis & GOLD 2026 Staging',
            content: 'Diagnosis requires spirometric confirmation: Post-bronchodilator FEV1/FVC < 0.70. Exposure to tobacco smoke, biomass fuel smoke (common in SA rural/peri-urban homes), or occupational dust.\nGOLD 2026 Treatment Principles:\n- Smoking cessation is the single most effective intervention to stop FEV1 decline.\n- Group A: Bronchodilator (SABA or LABA).\n- Group B: LABA + LAMA combination (superior to single agents for dyspnoea and exercise tolerance).\n- Group E (Exacerbation-prone: ≥2 moderate or ≥1 hospital admission): LABA + LAMA. Add ICS only if blood eosinophils ≥300 cells/µL or history of asthma.',
            saPublicSectorNote: 'SA STG/EML focuses on Ipratropium / Salbutamol combinations, smoking cessation, and oral Theophylline or Salmeterol in specialist clinics.',
            internationalNote: 'GOLD 2026: Discourages LABA/ICS combination as initial maintenance therapy; LAMA/LABA is preferred. Single-inhaler triple therapy (LAMA+LABA+ICS) is reserved for severe exacerbators with elevated eosinophils.',
            recallQuestion: 'What is the diagnostic threshold for COPD on post-bronchodilator spirometry?',
            recallAnswer: 'Post-bronchodilator FEV1/FVC ratio < 0.70.'
          }
        ]
      },
      {
        id: 'pneumonia-effusion',
        systemId: 'respiratory',
        title: 'Community-Acquired Pneumonia & Pleural Effusion',
        frequency: 4,
        sourcePages: 'pp. 3, 7, 17, 28, 55',
        preview1Min: 'CURB-65 pneumonia severity score. Light’s criteria for pleural fluid (Exudate vs Transudate). South African high-yield TB pleurisy workup (ADA >30–40 U/L).',
        redFlags: [
          'Pleural fluid pH <7.20, low glucose (<3.3 mmol/L), or gross pus = Complicated parapneumonic effusion / Empyema requiring immediate chest drain insertion!',
          'CURB-65 score ≥3 indicating high mortality and need for ICU/high-care admission'
        ],
        tags: ['Pneumonia', 'CURB-65', 'Pleural Effusion', 'Lights Criteria', 'Empyema'],
        sections: [
          {
            id: 'curb65-score',
            title: 'Pneumonia Severity & CURB-65 Stratification',
            content: 'CURB-65 criteria (1 point for each):\n- C: Confusion (abbreviated mental test score ≤8 or new disorientation)\n- U: Urea > 7.0 mmol/L\n- R: Respiratory rate ≥ 30/min\n- B: Blood pressure (SBP <90 mmHg or DBP ≤60 mmHg)\n- 65: Age ≥ 65 years\n\nScore Interpretation & Disposition:\n- Score 0–1: Low risk (<3% mortality) → Outpatient management with oral Amoxicillin 1g 8-hourly (or Azithromycin).\n- Score 2: Intermediate risk (~9% mortality) → Hospital admission / short-stay observation.\n- Score 3–5: High risk (15–40% mortality) → Urgent inpatient admission, consider ICU/High Care; IV Ceftriaxone + Macrolide.',
            recallQuestion: 'What does each letter in CURB-65 stand for?',
            recallAnswer: 'Confusion, Urea >7 mmol/L, Respiratory rate ≥30, Blood pressure (SBP <90 or DBP ≤60), Age ≥65.'
          },
          {
            id: 'lights-criteria',
            title: 'Light’s Criteria for Pleural Fluid',
            content: 'Differentiates Exudate (local pleural inflammation/permeability) from Transudate (systemic hydrostatic/oncotic imbalance):\nLight’s Criteria (Exudate if ANY ONE of the following is true):\n1. Pleural fluid protein / Serum protein ratio > 0.5\n2. Pleural fluid LDH / Serum LDH ratio > 0.6\n3. Pleural fluid LDH > 2/3 the upper limit of normal laboratory serum LDH',
            diagnosticTable: {
              headers: ['Classification', 'Common Causes in South Africa', 'Key Fluid Characteristics'],
              rows: [
                ['Transudate', 'Congestive Heart Failure, Cirrhosis with ascites, Nephrotic Syndrome, Severe Hypoalbuminaemia', 'Protein <30 g/L, Light criteria negative, normal ADA, low cell count'],
                ['Exudate: Infective', 'Tuberculous Pleurisy, Parapneumonic Effusion, Empyema', 'Protein >30 g/L, high LDH, high ADA (>30–40 U/L) in TB, neutrophilic in acute pneumonia'],
                ['Exudate: Malignant', 'Bronchogenic carcinoma, Breast adenocarcinoma, Lymphoma, Mesothelioma', 'Often blood-stained, positive cytology, lymphocytic predominance'],
                ['Exudate: Other', 'Pulmonary Embolism with infarction, Rheumatoid Arthritis, SLE, Pancreatitis (left-sided)', 'High amylase in pancreatitis; low glucose in RA']
              ]
            },
            saPublicSectorNote: 'In South Africa, TB pleurisy is the leading cause of unilateral exudative effusion. Pleural fluid ADA >30–40 U/L with lymphocytic predominance (>50%) has >90% sensitivity and specificity for TB pleurisy.',
            recallQuestion: 'What are the 3 criteria in Light’s rule?',
            recallAnswer: 'Pleural/serum protein >0.5, pleural/serum LDH >0.6, pleural LDH >2/3 upper limit of normal serum LDH.'
          }
        ]
      },
      {
        id: 'respiratory-signs-failure',
        systemId: 'respiratory',
        title: 'Respiratory Failure, Tracheal Deviation & Crackles',
        frequency: 3,
        sourcePages: 'pp. 11, 29, 32, 55',
        preview1Min: 'Type 1 (hypoxaemic) vs Type 2 (hypercapnic) failure. Direction of tracheal deviation (toward vs away). Fine vs coarse crackles. Bronchiectasis signet-ring sign. Lung cancer Horner syndrome and SVC obstruction.',
        redFlags: [
          'Tracheal deviation AWAY from lesion + severe hypotension/tachycardia = Tension Pneumothorax → Immediate needle thoracostomy!',
          'Superior Vena Cava (SVC) obstruction with facial plethora, distended non-pulsatile neck veins, and stridor'
        ],
        tags: ['Respiratory Failure', 'Tracheal Deviation', 'Crackles', 'Bronchiectasis', 'Lung Cancer'],
        sections: [
          {
            id: 'tracheal-deviation-crackles',
            title: 'Tracheal Deviation & Crackle Interpretation',
            content: 'Direction of Tracheal Deviation:\n- Towards the lesion: Complete lung collapse (atelectasis from plugged bronchus), pneumonectomy, massive apical pulmonary fibrosis.\n- Away from the lesion: Tension pneumothorax, massive unilateral pleural effusion, large thoracic space-occupying tumor.\n- Central (No deviation): Consolidation (pneumonia), pulmonary oedema, diffuse interstitial lung disease.\n\nBreath Sounds & Adventitious Sounds:\n- Fine End-Inspiratory Crackles: "Velcro-like", high-pitched, late inspiratory, bilateral bases, do NOT clear with coughing → Idiopathic Pulmonary Fibrosis (IPF), congestive heart failure.\n- Coarse Crackles: Lower-pitched, early-to-mid inspiratory, bubbling quality, often clear with coughing → Bronchiectasis, severe bronchitis, resolving pneumonia.\n- Bronchial Breathing: Harsh, tubular, hollow sound with an audible pause between inspiration and expiration → Dense lobar consolidation with a patent airway.',
            recallQuestion: 'Name two conditions that cause the trachea to deviate TOWARDS the side of the lesion.',
            recallAnswer: 'Complete lobar/lung collapse (atelectasis) and pneumonectomy (or massive unilateral fibrosis).'
          },
          {
            id: 'respiratory-failure-types',
            title: 'Type 1 vs Type 2 Respiratory Failure & Bronchiectasis',
            content: 'Classification of Respiratory Failure:\n- Type 1 (Hypoxaemic): PaO2 <8.0 kPa (60 mmHg) with normal or low PaCO2 (<6.0 kPa). Mechanism: V/Q mismatch or intrapulmonary shunt. Causes: Severe pneumonia, acute pulmonary oedema, pulmonary embolism, ARDS.\n- Type 2 (Hypercapnic): PaO2 <8.0 kPa AND elevated PaCO2 (>6.0 kPa / 45 mmHg). Mechanism: Alveolar hypoventilation. Causes: COPD exacerbation, severe asthma exhaustion, neuromuscular weakness (Guillain-Barré, Myasthenia), opiate/sedative toxicity, severe kyphoscoliosis.\n\nBronchiectasis:\n- Clinical: Chronic cough with copious, purulent sputum (often separating into 3 layers upon standing: frothy, turbid, sediment), recurrent haemoptysis, coarse crackles.\n- Radiology: High-Resolution CT (HRCT) is the gold standard showing dilated bronchi larger than adjacent pulmonary arteries ("Signet-ring sign") and thickened bronchial walls ("Tram-track lines").\n- Major causes in South Africa: Prior pulmonary tuberculosis (post-TB bronchiectasis), childhood measles/pertussis, cystic fibrosis, allergic bronchopulmonary aspergillosis (ABPA), and primary immunodeficiency.',
            recallQuestion: 'What defines Type 2 respiratory failure on arterial blood gas?',
            recallAnswer: 'PaO2 <8.0 kPa (60 mmHg) together with elevated PaCO2 >6.0 kPa (45 mmHg).'
          }
        ]
      }
    ]
  },

  // SYSTEM 03: GASTROENTEROLOGY & HEPATOLOGY
  {
    id: 'gastroenterology',
    number: '03',
    title: 'Gastroenterology & Hepatology',
    shortTitle: 'Gastroenterology',
    icon: 'Stethoscope',
    color: 'emerald',
    description: 'Cirrhosis, SBP, Portal HTN, Acute Pancreatitis (ACG 2024), Chronic Pancreatitis, PUD & Upper GI Bleeding, Dysphagia, Ascites & SAAG, and Diarrhoea/Dysentery.',
    topics: [
      {
        id: 'cirrhosis-sbp',
        systemId: 'gastroenterology',
        title: 'Cirrhosis, Portal Hypertension & SBP',
        frequency: 4,
        sourcePages: 'pp. 4, 8, 41, 57',
        preview1Min: 'Compensated vs decompensated cirrhosis. Diagnostic paracentesis is mandatory on admission. SBP diagnosis (PMN ≥250 cells/mm3). IV Albumin reduces hepatorenal syndrome. Baveno VIII non-invasive criteria.',
        redFlags: [
          'Variceal haemorrhage: massive haematemesis or melaena with hemodynamic shock',
          'Hepatorenal syndrome (progressive oliguria and creatinine rise unresponsive to volume expansion)',
          'Grade 3/4 hepatic encephalopathy with loss of airway reflexes'
        ],
        tags: ['Cirrhosis', 'SBP', 'Paracentesis', 'Albumin', 'Baveno VIII'],
        sections: [
          {
            id: 'sbp-management',
            title: 'Diagnostic Paracentesis & SBP Management',
            content: 'Spontaneous Bacterial Peritonitis (SBP) occurs in up to 25% of cirrhotic patients with ascites admitted to hospital:\n- Diagnostic Paracentesis: Must be performed immediately on admission for any patient with cirrhosis and ascites, especially if febrile, encephalopathic, or in pain.\n- Diagnostic Criterion: Ascitic fluid polymorphonuclear neutrophil (PMN) count ≥250 cells/mm³ (0.25 × 10^9/L).\n- Treatment: IV Ceftriaxone 1g–2g daily or IV Cefotaxime 2g 8-hourly for 5 days.\n- Mortality Reduction with Albumin: Administer IV Albumin 1.5 g/kg on Day 1, followed by 1.0 g/kg on Day 3. This significantly reduces the incidence of hepatorenal syndrome (from 30% to 10%) and reduces mortality.',
            dangerBox: 'DANGER: Never wait for bacterial culture results to treat SBP. Culture is negative in up to 40% of cases (culture-negative neutrocytic ascites). If PMN ≥250, start IV cephalosporins immediately.',
            saPublicSectorNote: 'SA AHL STG: Outlines diagnostic tap within hours of admission. Secondary prophylaxis after the first episode is mandatory using oral Ciprofloxacin 500 mg daily or Cotrimoxazole 160/800 mg daily.',
            internationalNote: 'Baveno VIII (2026): Confirms non-invasive liver stiffness measurement (LSM <20 kPa) and platelet count >150k safely rules out high-risk varices, avoiding screening endoscopy. Prioritizes carvedilol as non-selective beta blocker.',
            recallQuestion: 'What is the ascitic PMN cutoff for diagnosing SBP, and what is the albumin dosing schedule?',
            recallAnswer: 'PMN count ≥250 cells/mm³; IV Albumin 1.5 g/kg on Day 1, then 1.0 g/kg on Day 3.'
          }
        ]
      },
      {
        id: 'pancreatitis',
        systemId: 'gastroenterology',
        title: 'Acute & Chronic Pancreatitis (ACG 2024)',
        frequency: 3,
        sourcePages: 'pp. 7, 8, 43, 57',
        preview1Min: 'Acute pancreatitis diagnostic triad (2 of 3). ACG 2024 guidelines: Ringer’s lactate preferred, early oral feeding within 24h, NO prophylactic antibiotics. Chronic pancreatitis TIGAR-O etiology and enzyme replacement.',
        redFlags: [
          'Persistent organ failure (>48 hours): shock (SBP <90), respiratory failure (PaO2/FiO2 <300), or renal failure (creatinine >170 µmol/L) = Severe Acute Pancreatitis',
          'Infected pancreatic necrosis (gas on CT or deterioration after 10–14 days)'
        ],
        tags: ['Pancreatitis', 'Lipase', 'ACG 2024', 'Ringer Lactate', 'PERT'],
        sections: [
          {
            id: 'acute-pancreatitis-acg',
            title: 'Acute Pancreatitis Diagnostic & Resuscitation (ACG 2024)',
            content: 'Diagnosis requires at least 2 of the following 3 criteria:\n1. Severe epigastric abdominal pain radiating to the back.\n2. Serum amylase or lipase ≥ 3 times the upper limit of normal.\n3. Characteristic cross-sectional imaging findings (CT, MRI, or transabdominal US).\n\nKey Principles from ACG 2024 Guidelines:\n- Fluid Resuscitation: Goal-directed fluid resuscitation using Lactated Ringer’s (200–500 mL/h or 5–10 mL/kg/h) is preferred over normal saline (saline induces hyperchloraemic metabolic acidosis). Reassess volume status at 6h, 12h, and 24h.\n- Nutrition: Early oral feeding (low-fat solid or liquid diet) within 24 hours is strongly recommended for mild pancreatitis once nausea/vomiting resolves. Prolonged bowel rest (NPO) is obsolete.\n- Prophylactic Antibiotics: NOT recommended for prevention of infectious complications in acute pancreatitis or sterile necrosis. Use antibiotics only for established extra-pancreatic infections or proven infected necrosis.\n- Etiology: Gallstones (perform ultrasound and check LFTs) and Alcohol account for >80% of cases. Same-admission cholecystectomy for mild biliary pancreatitis.',
            recallQuestion: 'What are the 2 of 3 criteria required to diagnose acute pancreatitis?',
            recallAnswer: 'Epigastric pain radiating to back, serum amylase/lipase ≥3x upper limit of normal, and characteristic imaging findings.'
          },
          {
            id: 'chronic-pancreatitis',
            title: 'Chronic Pancreatitis & Exocrine Insufficiency',
            content: 'Chronic irreversible inflammatory fibro-inflammatory injury resulting in loss of endocrine and exocrine function.\n- Etiology (TIGAR-O): Toxic-metabolic (alcohol >70%, smoking), Idiopathic, Genetic (CFTR, PRSS1), Autoimmune (IgG4-related type 1), Recurrent severe acute pancreatitis, Obstructive.\n- Clinical Triad: (1) Intractable epigastric pain, (2) Malabsorption / Steatorrhoea (greasy, foul-smelling, floating stools), (3) Diabetes mellitus (late pancreatogenic Type 3c diabetes).\n- Diagnosis: Fecal elastase-1 <200 µg/g confirms pancreatic exocrine insufficiency (<100 indicates severe). Abdominal CT or X-ray shows classic coarse pancreatic calcifications and ductal dilatation.\n- Management: Complete cessation of alcohol and smoking; Pancreatic Enzyme Replacement Therapy (PERT: Creon) taken DURING meals; fat-soluble vitamin supplementation (A, D, E, K); analgesia.',
            recallQuestion: 'What is the diagnostic test of choice for pancreatic exocrine insufficiency?',
            recallAnswer: 'Fecal elastase-1 (<200 µg/g indicates insufficiency; <100 µg/g indicates severe deficiency).'
          }
        ]
      },
      {
        id: 'peptic-ulcer-bleed',
        systemId: 'gastroenterology',
        title: 'Peptic Ulcer Disease & Upper GI Bleeding',
        frequency: 4,
        sourcePages: 'pp. 15, 17, 39, 40, 57',
        preview1Min: 'Upper GI bleeding triage. Glasgow-Blatchford score vs Rockall score. Endoscopy within 24 hours. Forrest classification. H. pylori eradication regimens and NSAID prophylaxis.',
        redFlags: [
          'Haematemesis, melaena, or haematochezia with hypotension, postural drop, or syncope',
          'Glasgow-Blatchford Score >0 (patient cannot be safely managed as outpatient)',
          'Forrest Ia/Ib or IIa/IIb ulcers requiring endoscopic dual haemostasis'
        ],
        tags: ['PUD', 'Upper GI Bleed', 'Endoscopy', 'H. pylori', 'Glasgow-Blatchford'],
        sections: [
          {
            id: 'ugib-triage',
            title: 'Upper GI Bleeding Resuscitation & Endoscopy',
            content: 'Immediate resuscitation protocol:\n1. 2 large-bore IV cannulae (16G or 14G), blood crossmatch (2–4 units), FBC, U&E, INR, LFTs.\n2. Restrictive blood transfusion threshold: Transfuse when Hb <7.0 g/dL (target 7.0–9.0 g/dL); liberal transfusion increases portal venous pressure and rebleeding.\n3. IV Proton Pump Inhibitor: High-dose IV PPI (e.g., Esomeprazole or Omeprazole 80 mg IV bolus followed by 8 mg/hour infusion for 72 hours) for high-risk endoscopic stigmata.\n4. Endoscopy timing: Perform within 24 hours of presentation once stabilized.\n5. Forrest Classification of Ulcers:\n   - Ia: Spurting arterial bleed (endoscopic therapy mandatory)\n   - Ib: Oozing bleed (endoscopic therapy mandatory)\n   - IIa: Non-bleeding visible vessel (endoscopic therapy mandatory)\n   - IIb: Adherent clot (consider clot removal and endoscopic treatment)\n   - IIc: Flat pigmented spot (clean base, PPI therapy, no endoscopic therapy)\n   - III: Clean ulcer base (early discharge on oral PPI)',
            saPublicSectorNote: 'H. pylori Eradication in SA: First-line 14-day triple therapy: PPI (e.g. Omeprazole 20mg BD) + Amoxicillin 1g BD + Clarithromycin 500mg BD (or Metronidazole 400mg BD if penicillin-allergic). Re-test for eradication with stool antigen or urea breath test 4 weeks after finishing antibiotics.',
            recallQuestion: 'What is the transfusion threshold in non-bleeding-shock acute upper GI haemorrhage?',
            recallAnswer: 'Restrictive threshold: Transfuse when Haemoglobin is <7.0 g/dL (target 7.0–9.0 g/dL).'
          }
        ]
      },
      {
        id: 'dysphagia-ascites-saag',
        systemId: 'gastroenterology',
        title: 'Dysphagia, Ascites SAAG & Diarrhoea Differentials',
        frequency: 4,
        sourcePages: 'pp. 5, 13, 17, 44, 47, 49, 57',
        preview1Min: 'Dysphagia: solids vs liquids (mechanical vs motility). SAAG calculation (≥11 g/L vs <11 g/L). Clubbing causes (respiratory vs GI). Bloody diarrhoea / dysentery organisms and stool test selection.',
        redFlags: [
          'Progressive dysphagia for solids accompanied by unintentional weight loss = Oesophageal carcinoma until proven otherwise by urgent endoscopy!',
          'Acute dysentery with high fever, dehydration, or toxic megacolon → Do NOT give loperamide / antimotility agents!'
        ],
        tags: ['Dysphagia', 'SAAG', 'Ascites', 'Dysentery', 'Clubbing'],
        sections: [
          {
            id: 'dysphagia-approach',
            title: 'Diagnostic Approach to Dysphagia: Mechanical vs Motility',
            content: 'Step 1: Oropharyngeal (Transfer) vs Oesophageal Dysphagia:\n- Oropharyngeal: Difficulty initiating swallow, coughing, choking, nasal regurgitation immediately upon swallowing. Causes: Stroke, Parkinson disease, Myasthenia gravis, Bulbar/pseudobulbar palsy (cranial nerves IX, X, XII), Zenker diverticulum. Investigate with Video-fluoroscopic swallow study.\n- Oesophageal Dysphagia: Food sticking retrosternally several seconds after swallowing:\n  - Solids ONLY, progressive: Mechanical obstruction (Oesophageal carcinoma, benign peptic stricture, Schatzki ring, eosinophilic oesophagitis). Workup: Urgent Upper GI Endoscopy.\n  - Solids AND Liquids simultaneously from onset: Motility / Neuromuscular disorder (Achalasia, diffuse oesophageal spasm, systemic sclerosis). Workup: High-resolution oesophageal manometry and barium swallow ("bird’s beak" tapering in achalasia).',
            recallQuestion: 'What is the diagnostic significance of dysphagia for solids ONLY versus dysphagia for both solids and liquids from onset?',
            recallAnswer: 'Solids only suggests mechanical/structural obstruction (cancer, stricture); solids and liquids simultaneously suggests a motility/neuromuscular disorder (achalasia, spasm).'
          },
          {
            id: 'saag-ascites',
            title: 'Serum-Ascites Albumin Gradient (SAAG) & Clubbing',
            content: 'SAAG Calculation: SAAG = Serum Albumin (g/dL) - Ascitic Fluid Albumin (g/dL) from simultaneous blood and ascitic samples:\n- High SAAG (≥ 1.1 g/dL or ≥ 11 g/L) = Portal Hypertension (Hydrostatic pressure drives fluid):\n  - Cirrhosis (ascitic protein <25 g/L)\n  - Congestive Heart Failure / Constrictive Pericarditis (ascitic protein >25 g/L)\n  - Budd-Chiari syndrome (hepatic vein thrombosis)\n  - Portal vein thrombosis\n- Low SAAG (< 1.1 g/dL or < 11 g/L) = Non-Portal Hypertension (Capillary permeability or peritoneal pathology):\n  - Peritoneal carcinomatosis\n  - Tuberculous peritonitis\n  - Nephrotic syndrome\n  - Pancreatic ascites (high amylase)\n\nDifferential Diagnosis of Digital Clubbing (Schamroth Window Obliteration):\n- Respiratory Causes (Common): Bronchogenic lung carcinoma, Bronchiectasis, Lung abscess, Empyema, Idiopathic pulmonary fibrosis (IPF), Asbestosis. (Note: Uncomplicated COPD and asthma do NOT cause clubbing!).\n- Cardiovascular Causes: Infective endocarditis, Cyanotic congenital heart disease (e.g. Tetralogy of Fallot), Atrial myxoma.\n- Gastrointestinal & Hepatobiliary Causes: Cirrhosis, Inflammatory Bowel Disease (Crohn disease, Ulcerative colitis), Coeliac disease, Primary biliary cholangitis.',
            recallQuestion: 'What does a SAAG ≥1.1 g/dL (≥11 g/L) indicate?',
            recallAnswer: 'Presence of portal hypertension (most commonly cirrhosis, heart failure, or Budd-Chiari).'
          }
        ]
      }
    ]
  },

  // SYSTEM 04: NEUROLOGY
  {
    id: 'neurology',
    number: '04',
    title: 'Neurology',
    shortTitle: 'Neurology',
    icon: 'Brain',
    color: 'indigo',
    description: 'Acute Ischaemic Stroke & Thrombolysis (AHA/ASA 2026 vs SA STG), Status Epilepticus, Meningitis CSF interpretation, Delirium vs Dementia, Myasthenia Gravis, and Headaches.',
    topics: [
      {
        id: 'stroke-tia',
        systemId: 'neurology',
        title: 'Acute Ischaemic Stroke & TIA Management',
        frequency: 4,
        sourcePages: 'pp. 11, 15, 17, 23, 44, 52, 58',
        preview1Min: 'Time is brain: last seen well time. Non-contrast CT excludes haemorrhage. Reperfusion: SA STG 3-hour alteplase vs AHA/ASA 2026 4.5h tenecteplase. Strict BP control (<185/110). No aspirin in first 24h post-lytic.',
        redFlags: [
          'Hypoglycaemia mimic (always check fingerstick blood glucose immediately!)',
          'Intracranial haemorrhage on initial CT (hyperdense acute blood)',
          'Rapidly declining GCS or signs of herniation'
        ],
        tags: ['Stroke', 'Alteplase', 'Tenecteplase', 'CT Brain', 'AHA/ASA 2026'],
        sections: [
          {
            id: 'stroke-acute-protocol',
            title: 'Hyperacute Stroke Protocol & Reperfusion',
            content: 'Step 1: Check capillary glucose immediately to exclude hypoglycaemia.\nStep 2: Emergency non-contrast CT brain to differentiate ischemic stroke from intracranial haemorrhage.\nStep 3: Eligibility for IV thrombolysis:\n- Onset of symptoms (last-seen-normal) within eligible window.\n- Blood pressure must be <185/110 mmHg before thrombolysis (use IV labetalol 10–20 mg or hydralazine).\n- No prior intracranial haemorrhage, recent major surgery/trauma, active bleeding, or coagulopathy (INR ≤1.7, platelets ≥100,000).\nStep 4: Post-thrombolytic monitoring: Maintain BP <180/105 mmHg; NO aspirin, NSAIDs, or heparin for 24 hours until repeat CT brain rules out haemorrhagic transformation.',
            saPublicSectorNote: 'SA AHL STG (2025/2026): IV Alteplase (0.9 mg/kg, max 90 mg; 10% bolus over 1 min, remaining 90% over 1 hour) administered within 3 hours of symptom onset at designated stroke facilities.',
            internationalNote: 'AHA/ASA 2026: Recommends IV Tenecteplase (0.25 mg/kg single bolus) or Alteplase up to 4.5 hours. Supports Endovascular Thrombectomy (EVT) up to 24 hours in large-vessel occlusion selected by perfusion CT/MRI.',
            recallQuestion: 'What is the required blood pressure target before starting IV thrombolysis in acute stroke?',
            recallAnswer: 'Blood pressure must be strictly lower than 185/110 mmHg.'
          }
        ]
      },
      {
        id: 'meningitis-csf',
        systemId: 'neurology',
        title: 'Meningitis, Encephalitis & Lumbar Puncture CSF',
        frequency: 4,
        sourcePages: 'pp. 8, 24, 48, 53, 58',
        preview1Min: 'Meningitis classic triad vs atypical presentation. Never delay antibiotics for CT or LP. Indications for CT before LP. CSF patterns: Bacterial vs Viral vs TB vs Cryptococcal. Adjunctive dexamethasone.',
        redFlags: [
          'Non-blanching petechial/purpuric rash (Meningococcal septicaemia) → Immediate Ceftriaxone stat!',
          'Signs of raised ICP with risk of cerebellar tonsillar herniation (coning): papilloedema, focal neurological deficit, GCS <10, or new seizures → CT scan before lumbar puncture!'
        ],
        tags: ['Meningitis', 'Lumbar Puncture', 'CSF', 'Dexamethasone', 'Ceftriaxone'],
        sections: [
          {
            id: 'csf-interpretation',
            title: 'CSF Diagnostic Interpretation Matrix',
            content: 'Perform lumbar puncture safely unless contraindicated. Always collect paired serum glucose simultaneously.',
            diagnosticTable: {
              headers: ['Parameter', 'Normal CSF', 'Acute Bacterial', 'Viral (Aseptic)', 'Tuberculous (TBM)', 'Cryptococcal'],
              rows: [
                ['Opening Pressure', '100–200 mmH2O', 'Markedly Elevated (>250)', 'Normal to mildly raised', 'Markedly Elevated (>250)', 'Significantly Elevated (>250–400)'],
                ['Cell Count & Type', '<5 cells/µL (Mononuclear)', '>1000 cells/µL (>80% Neutrophils)', '50–500 cells/µL (Lymphocytes)', '100–500 cells/µL (Lymphocytes)', '20–200 cells/µL (Lymphocytes)'],
                ['Protein', '0.15–0.45 g/L', 'Markedly High (>1.0–2.0 g/L)', 'Normal to mild rise (<1.0)', 'Extremely High (>1.0–5.0 g/L)', 'Elevated (0.5–2.0 g/L)'],
                ['CSF : Serum Glucose', '>0.6 (60%)', 'Very Low (<0.4 / <40%)', 'Normal (>0.6)', 'Very Low (<0.3 / undetectable)', 'Low to normal (<0.4)'],
                ['Microscopy / Stains', 'Clear, sterile', 'Gram stain positive (60–80%)', 'Negative / PCR for HSV/enterovirus', 'Acid-fast bacilli / GeneXpert MTB', 'India ink positive / CrAg positive (>95%)']
              ]
            },
            saPublicSectorNote: 'SA AHL STG: Empiric treatment: IV Ceftriaxone 2g 12-hourly. Give adjunctive IV Dexamethasone 10mg immediately before or with first dose of antibiotics (continue for 4 days in pneumococcal meningitis). In suspected TB meningitis, start 2RHZE + high-dose Prednisone (60 mg/day tapered over 6–8 weeks) to reduce basal exudate complications.',
            recallQuestion: 'Which parameter on CSF analysis most reliably distinguishes bacterial from viral meningitis?',
            recallAnswer: 'Neutrophil predominance and low CSF:serum glucose ratio (<0.4 in bacterial; lymphocytic and normal glucose in viral).'
          }
        ]
      },
      {
        id: 'delirium-dementia-myasthenia',
        systemId: 'neurology',
        title: 'Delirium vs Dementia, Myasthenia Gravis & SAH',
        frequency: 4,
        sourcePages: 'pp. 9, 12, 18, 50, 54, 58',
        preview1Min: 'Delirium (acute, fluctuating, impaired attention, medical trigger) vs Dementia (insidious, progressive, alert). Reversible dementia screen. Myasthenia gravis fatigable weakness and crisis. Thunderclap headache SAH workup.',
        redFlags: [
          'Sudden thunderclap headache reaching maximum intensity in <1 minute = Subarachnoid Haemorrhage until proven otherwise!',
          'Myasthenic crisis: bulbar weakness, inability to swallow secretions, vital capacity <15 mL/kg → Elective intubation in ICU!'
        ],
        tags: ['Delirium', 'Dementia', 'Myasthenia Gravis', 'SAH', 'Thunderclap'],
        sections: [
          {
            id: 'delirium-vs-dementia',
            title: 'Delirium vs Dementia & Reversible Causes',
            content: 'Comparison:\n- Delirium: Acute onset (hours to days), fluctuating course, impaired attention/orientation, altered level of consciousness, hallucinations common, highly reversible with treatment of underlying trigger (infection, drugs, metabolic, hypoxia).\n- Dementia: Insidious onset (months to years), progressive decline, attention intact in early stages, clear consciousness, memory/executive impairment, irreversible in most neurodegenerative causes (Alzheimer, Vascular, Lewy Body, Frontotemporal).\n\nReversible Causes of Cognitive Decline ("DEMENTIA" Screen):\n- Drugs / Toxins (sedatives, anticholinergics, alcohol)\n- Endocrine: Hypothyroidism (check TSH)\n- Metabolic: Vitamin B12 deficiency (subacute combined degeneration), chronic renal/hepatic failure\n- Emotional: Pseudodementia of severe depression\n- Nutritional / Normal Pressure Hydrocephalus (Triad: gait ataxia, urinary incontinence, cognitive decline)\n- Tumour / Subdural haematoma (chronic subdural after mild fall in elderly)\n- Infection: Neurosyphilis, HIV-associated neurocognitive disorder, chronic meningitis.',
            recallQuestion: 'What core feature reliably distinguishes delirium from dementia at bedside?',
            recallAnswer: 'Acute onset with fluctuating course and prominent impairment of attention and level of consciousness.'
          },
          {
            id: 'myasthenia-gravis-sah',
            title: 'Myasthenia Gravis & Subarachnoid Haemorrhage (SAH)',
            content: 'Myasthenia Gravis:\n- Autoimmune neuromuscular junction disorder with antibodies against postsynaptic nicotinic Acetylcholine Receptors (anti-AChR ~85%) or Muscle-Specific Kinase (anti-MuSK).\n- Key Feature: Fatigable muscle weakness that worsens with repetitive exercise/evening and improves with rest. Ptosis, diplopia, bulbar weakness (dysphonia, dysphagia), proximal limb weakness. Reflexes and sensation remain normal!\n- Diagnostic tests: Ice pack test (improvement in ptosis after 2 minutes), Tensilon (Edrophonium) test, single-fiber electromyography (SFEMG), anti-AChR serology, chest CT for thymoma.\n- Management: Oral Pyridostigmine (acetylcholinesterase inhibitor 30–60 mg 4-hourly); Prednisone + steroid-sparing immunosuppressants (Azathioprine). Thymectomy in thymoma or generalized disease.\n- Myasthenic Crisis: Acute diaphragmatic and respiratory failure. Treat in ICU with Plasma Exchange (PEX) or IVIG. Avoid beta-blockers, aminoglycosides, and macrolides!\n\nSubarachnoid Haemorrhage (SAH):\n- Rupture of saccular (berry) aneurysm (85%) or arteriovenous malformation.\n- Presentation: "Worst headache of my life" (thunderclap onset, instantaneous peak <1 min), neck stiffness, vomiting, photophobia, subhyaloid retinal haemorrhages, transient syncope.\n- Diagnostic sequence: (1) Non-contrast brain CT within 6 hours (sensitivity >98%); (2) If CT negative, mandatory Lumbar Puncture performed ≥12 hours after symptom onset to detect Xanthochromia via spectrophotometry (breakdown of haemoglobin to bilirubin).\n- Medical Treatment: Nimodipine 60 mg orally every 4 hours for 21 days (prevents delayed cerebral ischaemic vasospasm); neurosurgical aneurysm clipping or endovascular coiling.',
            recallQuestion: 'Why must a lumbar puncture for suspected SAH with a negative CT be delayed until at least 12 hours after headache onset?',
            recallAnswer: 'To allow sufficient time for red blood cells in the CSF to lyse and enzymatically convert into bilirubin (xanthochromia).'
          }
        ]
      }
    ]
  },

  // SYSTEM 05: RENAL & ENDOCRINE
  {
    id: 'renal-endocrine',
    number: '05',
    title: 'Renal & Endocrine Medicine',
    shortTitle: 'Renal & Endocrine',
    icon: 'Activity',
    color: 'amber',
    description: 'Diabetic emergencies (DKA/HHS ADA 2024), Type 1 vs 2 DM, CKD KDIGO 2024, AKI, Nephritic vs Nephrotic, Thyroid storm, Adrenal crisis, Cushing syndrome, Dyslipidaemia, and Osteoporosis.',
    topics: [
      {
        id: 'dka-hhs',
        systemId: 'renal-endocrine',
        title: 'Diabetic Emergencies: DKA & HHS (ADA/EASD 2024)',
        frequency: 4,
        sourcePages: 'pp. 5, 9, 61',
        preview1Min: 'DKA diagnostic triad (glucose, ketones, acidosis). Euglycaemic DKA in SGLT2i users. HHS high osmolality and massive fluid deficit. POTASSIUM RULE: must be ≥3.5 mmol/L before insulin! 5% dextrose addition.',
        redFlags: [
          'Serum potassium <3.5 mmol/L with insulin administration (causes fatal ventricular arrhythmia / cardiac arrest)',
          'Rapid decline in serum osmolality causing cerebral oedema in young patients',
          'Vascular thrombosis in severe HHS due to profound dehydration (8–10 L deficit)'
        ],
        tags: ['DKA', 'HHS', 'ADA 2024', 'Potassium', 'Insulin', 'Euglycaemic DKA'],
        sections: [
          {
            id: 'dka-hhs-protocol',
            title: 'ADA/EASD 2024 Hyperglycemic Crises Protocol',
            content: '1. Diagnostic Differences:\n- DKA: Blood glucose >11.1 mmol/L (or known DM) + Venous pH <7.30 or Bicarbonate <18 mmol/L + Blood beta-hydroxybutyrate ≥3.0 mmol/L (or urine ketones ≥2+).\n- HHS: Blood glucose >33.3 mmol/L + Effective serum osmolality >320 mOsm/kg + pH >7.30, Bicarbonate >18 mmol/L, minimal/absent ketones. Severe altered sensorium/coma.\n\n2. Potassium Management (CRITICAL STEP):\n- If K < 3.5 mmol/L: HOLD insulin. Infuse IV KCl 20–40 mmol/h until K rises ≥3.5 mmol/L.\n- If K 3.5–5.5 mmol/L: Start insulin infusion AND add 20–30 mmol KCl per litre of IV fluid to prevent hypokalaemia.\n- If K > 5.5 mmol/L: Start insulin; check potassium every 2 hours; do not add KCl until K drops below 5.5.\n\n3. Fluid Resuscitation:\n- 1st hour: 1000 mL 0.9% NaCl.\n- Subsequent: 250–500 mL/h based on hydration status and sodium.\n- THE DEXTROSE SWITCH: When blood glucose drops to 11.1–14.0 mmol/L, switch to 5% Dextrose in 0.9% NaCl while CONTINUING insulin infusion. This prevents hypoglycaemia and cerebral oedema while driving resolution of ketoacidosis.\n\n4. Resolution Criteria:\n- Bicarbonate ≥18 mmol/L, venous pH >7.30, and normalized anion gap (<12). Continue subcutaneous basal insulin 1–2 hours BEFORE stopping IV insulin infusion to prevent rebound ketoacidosis.',
            dangerBox: 'DANGER: Euglycaemic DKA (blood glucose <11.1 mmol/L with high anion gap metabolic acidosis and ketonaemia) occurs in patients on SGLT2 inhibitors (dapagliflozin/empagliflozin) or during starvation/pregnancy. Never rule out DKA based on normal blood sugar alone!',
            recallQuestion: 'At what serum potassium level must you withhold insulin in DKA?',
            recallAnswer: 'Withhold insulin if serum potassium is below 3.5 mmol/L (international 3.3 mmol/L) until potassium is repleted.'
          }
        ]
      },
      {
        id: 'ckd-kdigo',
        systemId: 'renal-endocrine',
        title: 'Chronic Kidney Disease (KDIGO 2024), AKI & Glomerulonephritis',
        frequency: 4,
        sourcePages: 'pp. 1, 5, 10, 12, 13, 15, 20, 58, 60',
        preview1Min: 'KDIGO CKD definition (≥3 months abnormality). Staging by eGFR (G1–G5) and Albuminuria (A1–A3). First-line ACEi/ARB (never combined). Nephrotic vs Nephritic syndrome. AKI AEIOU dialysis indications.',
        redFlags: [
          'Refractory hyperkalaemia (K >6.5 mmol/L) with peaked T waves or widened QRS',
          'Severe metabolic acidosis (pH <7.10) refractory to medical treatment',
          'Uraemic pericarditis (friction rub) or uraemic encephalopathy'
        ],
        tags: ['CKD', 'KDIGO 2024', 'Nephrotic', 'Nephritic', 'Dialysis', 'AKI'],
        sections: [
          {
            id: 'ckd-staging-grid',
            title: 'KDIGO 2024 CKD Classification & Management',
            content: 'Definition: Abnormalities of kidney structure or function present for ≥ 3 months with implications for health.\nStaging combines eGFR and Albuminuria:\n- eGFR Staging: G1 (≥90), G2 (60–89), G3a (45–59), G3b (30–44), G4 (15–29), G5 (<15 = Kidney failure).\n- Albuminuria Staging: A1 (<3 mg/mmol = Normal), A2 (3–30 mg/mmol = Moderately increased), A3 (>30 mg/mmol = Severely increased / Nephrotic range).\n\nManagement Pillars:\n1. Blood pressure control: Target <120 mmHg systolic using standardized office BP measurement.\n2. Renin-Angiotensin-Aldosterone System (RAAS) Blockade: ACE inhibitor or ARB titrated to maximum tolerated dose for patients with hypertension and albuminuria (A2 or A3). Monitor creatinine and potassium within 2–4 weeks; an increase in creatinine up to 30% from baseline is acceptable.\n3. NEVER COMBINE ACEi + ARB: Dual RAAS blockade increases hyperkalaemia, hypotension, and acute kidney injury without cardiovascular benefit.\n4. SGLT2 Inhibitors (KDIGO 2024): Recommended for adults with CKD and eGFR ≥20 mL/min/1.73m² (with or without type 2 diabetes, especially if albuminuric or heart failure). Continue until dialysis initiation.',
            saPublicSectorNote: 'SA AHL STG: Focuses on Enalapril or Losartan, sodium restriction (<2g/day), BP target <130/80 mmHg, and timely referral to nephrology when eGFR <30 mL/min/1.73m² for renal replacement counseling.',
            recallQuestion: 'Why is combining an ACE inhibitor with an ARB strictly contraindicated in CKD?',
            recallAnswer: 'Dual RAAS blockade increases the risk of severe hyperkalaemia, syncope, and acute kidney injury without improving renal or survival outcomes.'
          },
          {
            id: 'nephrotic-vs-nephritic',
            title: 'Nephrotic vs Nephritic Syndrome & Dialysis (AEIOU)',
            content: 'Nephrotic Syndrome Tetrad:\n1. Heavy proteinuria (>3.5 g/24h or urine protein:creatinine ratio >350 mg/mmol)\n2. Hypoalbuminaemia (<30 g/L)\n3. Generalized peripheral oedema\n4. Hyperlipidaemia (accelerated atherogenesis) and Lipiduria (oval fat bodies / "Maltese cross" on polarized microscopy)\n*Complications: Venous thromboembolism (renal vein thrombosis due to urinary loss of Antithrombin III, Protein C, and S) and Encapsulated bacterial infection (loss of immunoglobulins).\n\nNephritic Syndrome Features:\n1. Haematuria with dysmorphic red blood cells and Red Cell Casts on microscopy\n2. Hypertension\n3. Oliguria and acute azotemia (rising creatinine)\n4. Mild to moderate sub-nephrotic proteinuria (<3 g/24h)\n*Causes: Post-streptococcal glomerulonephritis (ASO titre positive), IgA nephropathy (occurs within 1–2 days of synpharyngitic infection), Lupus nephritis, ANCA vasculitis, Anti-GBM (Goodpasture) disease.\n\nIndications for Urgent Dialysis in AKI (AEIOU):\n- A: Acidosis (severe metabolic acidosis with pH <7.15 refractory to medical therapy)\n- E: Electrolytes (severe refractory hyperkalaemia K >6.5 mmol/L with ECG changes)\n- I: Ingestion / Intoxication (toxic alcohols [methanol, ethylene glycol], lithium, salicylates)\n- O: Overload (pulmonary oedema refractory to high-dose loop diuretics)\n- U: Uraemia (uraemic pericarditis with pericardial rub, uraemic encephalopathy, uraemic bleeding)',
            recallQuestion: 'What are the classic "AEIOU" emergency indications for dialysis in acute kidney injury?',
            recallAnswer: 'Acidosis, Electrolyte abnormalities (refractory hyperkalaemia), Ingestions/toxins, Overload (pulmonary oedema), and Uraemic complications (pericarditis, encephalopathy).'
          }
        ]
      },
      {
        id: 'endocrine-disorders',
        systemId: 'renal-endocrine',
        title: 'Thyroid Storm, Adrenal Crisis, Cushing, Dyslipidaemia & Osteoporosis',
        frequency: 4,
        sourcePages: 'pp. 4, 9, 12, 18, 22, 61',
        preview1Min: 'Thyroid storm 4-step medical blockade. Addisonian crisis hydrocortisone stat. Cushing screening (1mg overnight dexamethasone). Dyslipidaemia xanthomas and high-intensity statins. Osteoporosis DEXA T-score ≤-2.5 and bisphosphonates.',
        redFlags: [
          'Acute adrenal crisis: refractory shock, high fever, severe abdominal pain, hyponatraemia, hyperkalaemia → IV Hydrocortisone 100 mg stat!',
          'Thyroid storm: fever >39°C, atrial fibrillation, delirium, jaundice → Do NOT give aspirin!'
        ],
        tags: ['Thyroid Storm', 'Addison', 'Cushing', 'Dyslipidaemia', 'Osteoporosis'],
        sections: [
          {
            id: 'thyroid-adrenal-crisis',
            title: 'Thyroid Storm & Addisonian Crisis',
            content: 'Thyroid Storm Treatment (Burch-Wartofsky score >45):\n1. Beta-blocker: IV Propranolol (blocks adrenergic surge and blocks peripheral T4 to T3 conversion).\n2. Thionamide: Propylthiouracil (PTU 200 mg 4-hourly) or Carbimazole.\n3. Inorganic Iodine: Lugol’s iodine or Potassium iodide GIVEN AT LEAST 1 HOUR AFTER THIONAMIDE (Wolff-Chaikoff effect; giving iodine first provides substrate for hormone synthesis).\n4. IV Glucocorticoids: Hydrocortisone 100 mg 8-hourly (treats relative adrenal failure and inhibits peripheral conversion).\n*Avoid Aspirin: Displaces thyroid hormones from thyroxine-binding globulin, worsening the crisis.\n\nAdrenal Insufficiency & Crisis:\n- Addison Disease: Primary failure of adrenal cortex. Signs: hyperpigmentation (buccal mucosa, palmar creases, skin scars), postural hypotension, salt craving, hyponatraemia, hyperkalaemia, hypoglycaemia. Diagnostic test: Short Synacthen test (08:00 morning cortisol <500 nmol/L at 30/60 min confirms disease).\n- Addisonian Crisis: Acute vascular collapse, severe vomiting, abdominal pain. Treatment: IV Hydrocortisone 100 mg stat, followed by 100 mg 8-hourly + aggressive IV 0.9% Normal Saline with 5% Dextrose. NEVER delay hydrocortisone while waiting for cortisol blood test results!',
            recallQuestion: 'Why must inorganic iodine be administered at least 1 hour AFTER thionamides in thyroid storm?',
            recallAnswer: 'Administering iodine before thionamide provides substrate that accelerates de novo thyroid hormone synthesis.'
          },
          {
            id: 'cushing-lipids-osteoporosis',
            title: 'Cushing Syndrome, Dyslipidaemia & Osteoporosis',
            content: 'Cushing Syndrome:\n- Clinical features: Moon facies, buffalo hump, central obesity, wide purple abdominal striae (>1 cm), proximal myopathy, easy bruising, osteoporosis, hypertension, glucose intolerance.\n- Initial Screening Tests: (1) Overnight 1 mg Dexamethasone Suppression Test (cortisol fails to suppress <50 nmol/L), (2) 24-hour urinary free cortisol (≥3x normal), (3) Late-night salivary cortisol.\n- Plasma ACTH: Low = ACTH-independent (adrenal adenoma/carcinoma; perform adrenal CT); High = ACTH-dependent (Cushing disease from pituitary adenoma vs ectopic ACTH from small-cell lung cancer).\n\nDyslipidaemia & Xanthomas:\n- Tendon Xanthomas (Achilles tendon, extensor tendons of fingers) are pathognomonic of Familial Hypercholesterolaemia (autosomal dominant LDL receptor mutation).\n- Eruptive xanthomas (yellow-red papules on buttocks/shoulders) indicate severe Hypertriglyceridaemia (chylomicronaemia; triglyceride >10 mmol/L; risk of acute pancreatitis).\n- First-line therapy: High-intensity statin (Atorvastatin 40–80 mg or Rosuvastatin 20–40 mg). Check baseline ALT; monitor for statin-induced myopathy.\n\nOsteoporosis:\n- Definition: Systemic skeletal disease characterized by low bone mass and microarchitectural deterioration leading to fragility fractures (vertebrae, femoral neck, distal radius [Colles]).\n- Diagnosis: Dual-energy X-ray absorptiometry (DEXA) scan:\n  - Normal: T-score ≥ -1.0 SD\n  - Osteopenia: T-score between -1.0 and -2.5 SD\n  - Osteoporosis: T-score ≤ -2.5 SD\n- Management: Oral Bisphosphonates (Alendronate 70 mg weekly or Risedronate 35 mg weekly) taken on an empty stomach with a full glass of water, remaining upright for 30–60 minutes to prevent chemical pill-induced oesophagitis. Co-prescribe Calcium 1000 mg and Vitamin D 800 IU daily.',
            recallQuestion: 'What DEXA T-score confirms the diagnosis of osteoporosis?',
            recallAnswer: 'T-score ≤ -2.5 standard deviations compared to young adult peak bone mass.'
          }
        ]
      }
    ]
  },

  // SYSTEM 06: HAEMATOLOGY
  {
    id: 'haematology',
    number: '06',
    title: 'Haematology & Oncology',
    shortTitle: 'Haematology',
    icon: 'Droplet',
    color: 'rose',
    description: 'FBC interpretation, Microcytic/Normocytic/Macrocytic Anaemias, Thrombocytopenia (ITP vs TTP), Lymphoma staging, Coagulation disorders, DIC, and Transfusion reactions.',
    topics: [
      {
        id: 'anaemia-fbc',
        systemId: 'haematology',
        title: 'Diagnostic Approach to Anaemias & FBC',
        frequency: 4,
        sourcePages: 'pp. 12, 15, 16, 39, 59',
        preview1Min: 'Systematic FBC review. Reticulocyte production index. Microcytic (Iron deficiency vs Thalassaemia vs ACD). Macrocytic (B12 vs Folate). Ferritin acute phase reactant traps. Endoscopy indications.',
        redFlags: [
          'Severe symptomatic anaemia (Hb <6.0 g/dL) with high-output heart failure or chest pain',
          'Pancytopenia with circulating blasts on peripheral blood smear (acute leukaemia)',
          'Microangiopathic haemolytic anaemia with schistocytes / helmet cells on smear'
        ],
        tags: ['Anaemia', 'Ferritin', 'Microcytic', 'Macrocytic', 'B12', 'Folate'],
        sections: [
          {
            id: 'anaemia-matrix',
            title: 'Anaemia Classification Matrix by MCV',
            content: 'Approach based on Mean Corpuscular Volume (MCV: 80–100 fL):',
            diagnosticTable: {
              headers: ['Pattern', 'Differential Diagnoses', 'Diagnostic Test Sequence'],
              rows: [
                ['Microcytic (MCV <80 fL)', 'Iron Deficiency Anaemia, Thalassaemia trait, Anaemia of Chronic Disease (ACD), Sideroblastic', 'Ferritin, Transferrin saturation, Haemoglobin electrophoresis (high HbA2 in beta-thal), bone marrow iron'],
                ['Normocytic (MCV 80–100 fL)', 'Acute blood loss, Anaemia of chronic kidney disease, Bone marrow infiltration, Haemolysis', 'Reticulocyte count, Creatinine/eGFR, Peripheral blood smear, Haemolysis panel (LDH, Bilirubin, Haptoglobin, Coombs)'],
                ['Macrocytic (MCV >100 fL)', 'B12 deficiency (Pernicious), Folate deficiency, Alcohol excess, Liver disease, Hypothyroidism, Myelodysplasia', 'Serum B12, Serum/RBC Folate, Thyroid TSH, LFTs, Blood smear for hypersegmented neutrophils (>5 lobes)']
              ]
            },
            examAnchor: 'Exam Anchor: Never administer Folic Acid alone in megaloblastic anaemia without checking or treating Vitamin B12! Folate corrects the haematological anaemia but accelerates irreversible subacute combined degeneration of the spinal cord.',
            recallQuestion: 'Why must you check Vitamin B12 levels before administering Folic Acid in macrocytic anaemia?',
            recallAnswer: 'Folic acid alone can mask and accelerate permanent neurological damage (subacute combined degeneration of the cord) caused by underlying B12 deficiency.'
          },
          {
            id: 'thrombocytopenia-ttp-lymphoma',
            title: 'Thrombocytopenia: ITP vs. TTP & Lymphoma Staging',
            content: 'Thrombocytopenia (platelets <150 × 10^9/L):\n- Immune Thrombocytopenia (ITP): Diagnosis of exclusion. Isolated thrombocytopenia with normal coagulation and normal blood film. Asymptomatic mild-moderate counts (>30 × 10^9/L) do not require urgent therapy. For bleeding or platelets <20–30, use oral Prednisone (1 mg/kg) or IVIG.\n- Thrombotic Thrombocytopenic Purpura (TTP): Pentad (FAT RN): Fever, Microangiopathic Anemia (schistocytes on smear), Thrombocytopenia, Renal dysfunction, Neurological signs (confusion, seizure, stroke). Caused by deficiency of ADAMTS13 protease.\n- EMERGENCY ACTION: TTP is an immediate medical emergency with 90% mortality if untreated. Initiate emergent Therapeutic Plasma Exchange (TPE) with fresh frozen plasma immediately. DO NOT transfuse platelets (fuels thrombotic microangiopathy) unless life-threatening intracranial haemorrhage occurs.\n\nLymphoma Staging & B-Symptoms:\n- B-Symptoms: Fever >38°C, drenching night sweats, unexplained weight loss >10% over 6 months.\n- Ann Arbor Staging:\n  - Stage I: Single lymph node region or single extralymphatic organ.\n  - Stage II: Two or more lymph node regions on the SAME side of diaphragm.\n  - Stage III: Lymph node regions on BOTH sides of the diaphragm.\n  - Stage IV: Diffuse multifocal involvement of extralymphatic organs (liver, bone marrow, lungs).\n- Hodgkin vs Non-Hodgkin: Reed-Sternberg cells (binucleated "owl-eye" appearance) pathognomonic of Hodgkin lymphoma; high association with EBV; younger age group.',
            dangerBox: 'DANGER: Platelet transfusion is CONTRAINDICATED in TTP. Transfusing platelets promotes microvascular thrombosis, myocardial infarction, and stroke.',
            recallQuestion: 'What are the classic "B-symptoms" in lymphoma staging?',
            recallAnswer: 'Fever >38°C, drenching night sweats, and unintentional weight loss >10% over 6 months.'
          }
        ]
      }
    ]
  },

  // SYSTEM 07: DERMATOLOGY & RHEUMATOLOGY
  {
    id: 'dermatology-rheumatology',
    number: '07',
    title: 'Dermatology & Rheumatology',
    shortTitle: 'Derm & Rheum',
    icon: 'Shield',
    color: 'purple',
    description: 'Skin emergencies (SJS/TEN, Necrotising fasciitis), Eczema/Psoriasis, Rheumatoid Arthritis, SLE ACR/EULAR, Scleroderma, Myositis, Gout, and Septic Arthritis.',
    topics: [
      {
        id: 'skin-emergencies',
        systemId: 'dermatology-rheumatology',
        title: 'Dermatological Emergencies: SJS/TEN & Necrotising Fasciitis',
        frequency: 3,
        sourcePages: 'pp. 10, 13, 21, 58',
        preview1Min: 'SJS (<10%) vs Overlap (10–30%) vs TEN (>30% BSA detachment). Positive Nikolsky sign. Culprit drugs (Allopurinol, Nevirapine, Cotrimoxazole, Carbamazepine). SCORTEN prognostic scale. Burns unit care.',
        redFlags: [
          'Skin pain out of proportion to physical findings, rapid spreading erythema, crepitus, or bullae = Necrotising Fasciitis → Immediate surgical debridement!',
          'Mucosal involvement (eyes, lips, genitals) with flaccid blisters and epidermal sloughing = SJS/TEN → Stop culprit drug immediately!'
        ],
        tags: ['SJS', 'TEN', 'SCORTEN', 'Necrotising Fasciitis', 'Allopurinol'],
        sections: [
          {
            id: 'sjs-ten-protocol',
            title: 'SJS/TEN Diagnostic Classification & Management',
            content: 'Severe cutaneous adverse reaction characterized by extensive keratinocyte death leading to epidermal detachment.\n- Classification by BSA Detachment:\n  1. Stevens-Johnson Syndrome (SJS): <10% Body Surface Area detachment.\n  2. SJS/TEN Overlap: 10%–30% Body Surface Area detachment.\n  3. Toxic Epidermal Necrolysis (TEN): >30% Body Surface Area detachment.\n- Common Culprit Drugs: Allopurinol, Aromatic Anticonvulsants (Carbamazepine, Phenytoin), Sulfonamides (Cotrimoxazole), Nevirapine (NNRTI in HIV), NSAIDs.\n- Management Priorities:\n  1. Immediately STOP the offending agent.\n  2. Transfer to an Intensive Care Unit or specialized Burns Unit.\n  3. Fluid resuscitation, thermal control (ambient room temperature ~30°C to prevent hypothermia), strict barrier nursing.\n  4. Urgent ophthalmology consultation: Daily eye lubrication and sweeping with glass rod to prevent irreversible symblepharon and corneal blindness.\n  5. Avoid routine high-dose steroids in established TEN due to sepsis risk.',
            recallQuestion: 'What are the BSA detachment percentage cutoffs for SJS, Overlap, and TEN?',
            recallAnswer: 'SJS <10%, SJS/TEN Overlap 10%–30%, TEN >30% of total body surface area.'
          }
        ]
      },
      {
        id: 'rheumatology-arthritis',
        systemId: 'dermatology-rheumatology',
        title: 'Inflammatory Arthritis, SLE, Scleroderma, Myositis & Gout',
        frequency: 4,
        sourcePages: 'pp. 5, 6, 8, 10, 13, 19, 20, 21, 22, 23, 24, 25, 26, 42, 59',
        preview1Min: 'Rheumatoid arthritis deformities and Methotrexate weekly rule. SLE ACR/EULAR entry ANA. Scleroderma CREST vs diffuse and renal crisis. Gout vs Septic joint (aspirate first). Myositis proximal weakness and CK.',
        redFlags: [
          'Acute hot, red, swollen joint with fever and inability to bear weight = Septic Arthritis until proven otherwise by urgent arthrocentesis!',
          'Scleroderma renal crisis with malignant hypertension and AKI → Captopril is life-saving; high-dose steroids provoke crisis!'
        ],
        tags: ['Rheumatoid Arthritis', 'SLE', 'Scleroderma', 'Myositis', 'Gout', 'Septic Joint'],
        sections: [
          {
            id: 'ra-and-sle',
            title: 'Rheumatoid Arthritis & Systemic Lupus Erythematosus (SLE)',
            content: 'Rheumatoid Arthritis (RA):\n- Symmetrical inflammatory polyarthritis of small joints (MCP, PIP, wrists, MTP), sparing DIP joints; prolonged morning stiffness >1 hour.\n- Classical hand deformities: Ulnar deviation of MCP joints, Swan-neck deformity (PIP hyperextension, DIP flexion), Boutonnière deformity (PIP flexion, DIP hyperextension), Z-deformity of thumb.\n- Serology: Anti-Cyclic Citrullinated Peptide (anti-CCP, sensitivity 70%, specificity >95%), Rheumatoid Factor (RF).\n- Management: Early Disease-Modifying Antirheumatic Drugs (DMARDs) initiated within 3 months. Methotrexate 15–25 mg is taken ONCE WEEKLY (co-prescribe Folic Acid 5 mg weekly on a different day). NEVER prescribe Methotrexate daily!\n\nSystemic Lupus Erythematosus (SLE):\n- 2019 EULAR/ACR Criteria: Required entry criterion is ANA ≥1:80 on HEp-2 cells. Additive criteria across domains (Malar butterfly rash sparing nasolabial fold, discoid lupus, oral ulcers, non-scarring alopecia, synovitis ≥2 joints, serositis, lupus nephritis on biopsy, autoimmune haemolytic anaemia, leukopenia, thrombocytopenia, anti-dsDNA, anti-Smith, low C3/C4).\n- Baseline Therapy: Hydroxychloroquine (HCQ 200–400 mg daily) is recommended for ALL SLE patients to prevent organ damage and mortality. Baseline ophthalmological retinal screening required.',
            dangerBox: 'DANGER: Methotrexate is administered WEEKLY, NEVER DAILY! Daily dosing causes fatal bone marrow suppression, pancytopenia, and mucositis. Always co-prescribe Folic Acid 5 mg weekly on a different day.',
            recallQuestion: 'Why is Hydroxychloroquine prescribed for all patients with Systemic Lupus Erythematosus?',
            recallAnswer: 'It reduces flare rates, prevents irreversible organ damage, decreases thrombotic events, and significantly improves long-term survival.'
          },
          {
            id: 'scleroderma-myositis-gout',
            title: 'Systemic Sclerosis, Inflammatory Myopathies & Gout',
            content: 'Systemic Sclerosis (Scleroderma):\n- Limited Cutaneous (CREST Syndrome): Calcinosis, Raynaud phenomenon, Esophageal dysmotility, Sclerodactyly, Telangiectasia. Skin involvement restricted to hands/face. Anti-centromere antibodies. Associated with pulmonary arterial hypertension.\n- Diffuse Cutaneous: Rapid skin thickening on trunk and proximal limbs. Anti-Scl-70 (anti-topoisomerase I). Associated with interstitial lung disease and Scleroderma Renal Crisis.\n- Scleroderma Renal Crisis: Sudden severe hypertension and acute kidney injury. ACE inhibitors (Captopril) are life-saving. Systemic corticosteroids are contraindicated (trigger renal crisis).\n\nInflammatory Myopathies (Polymyositis / Dermatomyositis):\n- Symmetric proximal muscle weakness (difficulty rising from chair, combing hair). Markedly elevated serum Creatine Kinase (CK >1000–5000 U/L), positive anti-Jo-1.\n- Dermatomyositis skin signs: Heliotrope rash (violaceous periorbital erythema), Gottron’s papules (violaceous scaly papules over MCP/PIP joints), Shawl sign.\n- Bedside assessment: Forced Vital Capacity (FVC) to monitor respiratory muscle weakness.\n\nAcute Gout vs Septic Arthritis:\n- Septic Arthritis: Hot, red, swollen joint; synovial fluid WBC >50,000/µL with >90% polymorphs. Urgent arthroscopy/washout + IV Cloxacillin.\n- Acute Gout: Needle-shaped, negatively birefringent monosodium urate crystals under polarized light. Treat flare with Colchicine or NSAIDs. Do NOT start or change Allopurinol during an acute attack!',
            recallQuestion: 'What class of medication is life-saving in Scleroderma Renal Crisis?',
            recallAnswer: 'ACE inhibitors (such as Captopril or Enalapril).'
          }
        ]
      }
    ]
  },

  // SYSTEM 08: HIV & INFECTIOUS DISEASES
  {
    id: 'hiv-infectious',
    number: '08',
    title: 'HIV & Infectious Diseases',
    shortTitle: 'HIV & Infections',
    icon: 'Bug',
    color: 'emerald',
    description: 'South African 3-test HIV algorithm, First-line TLD regimen, Rifampicin DTG doubling, ART timing in TB & Cryptococcal meningitis, Syphilis staging & treatment, and Severe Malaria.',
    topics: [
      {
        id: 'sa-hiv-protocol',
        systemId: 'hiv-infectious',
        title: 'SA 3-Test HIV Algorithm, TLD & Rifampicin Interaction',
        frequency: 4,
        sourcePages: 'pp. 3, 6, 13, 16, 29, 52, 61',
        preview1Min: 'National three-test confirmation algorithm. First-line adult regimen: TDF + 3TC + DTG (TLD). Rifampicin induction requires Dolutegravir 50mg extra (BD dosing). Viral load suppression and adherence pathways.',
        redFlags: [
          'Starting ART rapidly in cryptococcal meningitis (causes lethal intracranial hypertension and death from neuro-IRIS)',
          'Omitting extra DTG dose when co-treating TB with Rifampicin (causes virological failure and dolutegravir resistance)'
        ],
        tags: ['HIV', 'TLD', 'Dolutegravir', 'Rifampicin', '3-Test Algorithm', 'SA STG'],
        sections: [
          {
            id: 'hiv-testing-tld',
            title: 'Diagnostic Confirmation & First-Line TLD Regimen',
            content: '1. South African 3-Test Diagnostic Algorithm:\n- Test 1 (Screening Rapid Test): If non-reactive → Report Negative.\n- If Test 1 is reactive → Perform Test 2 (Confirmatory Rapid Test with different platform).\n- If Test 1 and Test 2 are reactive → Perform Test 3 (Tie-breaker / Verification Rapid Test). If all 3 are reactive → Confirmed HIV-Positive.\n- If discordant results occur, send laboratory ELISA or qualitative PCR; never start lifelong ART on unverified status.\n\n2. First-Line Adult ART Regimen:\n- Standard regimen: TLD = Tenofovir Disoproxil Fumarate (TDF 300mg) + Lamivudine (3TC 300mg) + Dolutegravir (DTG 50mg) as a once-daily fixed-dose combination tablet.\n- Renal baseline: Check serum creatinine and calculate CrCl before TDF. If CrCl <50 mL/min, substitute Abacavir (ABC) or dose-adjust per protocol.\n\n3. The Rifampicin–Dolutegravir Interaction (HIGH-YIELD EXAM QUESTION):\n- Rifampicin is a potent inducer of UGT1A1 and CYP3A4 enzymes, reducing dolutegravir plasma levels by ~54%.\n- MANAGEMENT: Add an EXTRA Dolutegravir 50 mg tablet taken 12 hours after the daily TLD tablet (i.e. DTG 50 mg twice daily). Continue this extra dose throughout rifampicin therapy AND for 2 weeks after stopping rifampicin.',
            recallQuestion: 'What specific ART dose adjustment is required when an adult on TLD takes Rifampicin for tuberculosis?',
            recallAnswer: 'Add an extra Dolutegravir 50 mg tablet 12 hours after the TLD tablet (DTG 50mg BD) until 2 weeks after finishing rifampicin.'
          },
          {
            id: 'art-timing-tb-cm',
            title: 'ART Timing Rules in TB and Cryptococcal Meningitis',
            content: 'Starting ART too early can precipitate catastrophic Immune Reconstitution Inflammatory Syndrome (IRIS), while delaying too long causes death from opportunistic infections.\n\nSouth African National Guidelines Rules:',
            diagnosticTable: {
              headers: ['Clinical Condition', 'CD4 Stratification', 'Mandatory ART Timing Principle'],
              rows: [
                ['Pulmonary / Extra-pulmonary TB', 'CD4 < 50 cells/µL', 'Start ART within 2 weeks of starting TB treatment (proven survival benefit).'],
                ['Pulmonary / Extra-pulmonary TB', 'CD4 ≥ 50 cells/µL', 'Start ART at 8 weeks after starting TB treatment.'],
                ['Tuberculous Meningitis (TBM)', 'Any CD4 count', 'DEFER ART until 8 weeks after starting TB treatment (early ART increases fatal cerebral swelling).'],
                ['Cryptococcal Meningitis (CM)', 'Any CD4 count', 'DEFER ART for 4 to 6 weeks after starting antifungal induction therapy (prevents fatal neuro-IRIS).']
              ]
            },
            dangerBox: 'DANGER: Always screen with serum Cryptococcal Antigen (CrAg) for any adult with CD4 <200 cells/µL before initiating ART. If serum CrAg is positive, perform lumbar puncture to rule out cryptococcal meningitis before starting ART!',
            recallQuestion: 'When should ART be started in a patient with Cryptococcal Meningitis?',
            recallAnswer: 'Defer ART for 4 to 6 weeks after initiating effective antifungal therapy (amphotericin B / flucytosine / fluconazole).'
          }
        ]
      },
      {
        id: 'syphilis-malaria',
        systemId: 'hiv-infectious',
        title: 'Syphilis Staging & Management and Severe Malaria (WHO)',
        frequency: 3,
        sourcePages: 'pp. 9, 19, 61',
        preview1Min: 'Syphilis stages (chancre, palms/soles rash, Argyll Robertson). Non-treponemal (RPR) vs treponemal (TPHA) serology. Benzathine penicillin G protocols. Severe malaria complications and IV Artesunate.',
        redFlags: [
          'Severe Falciparum Malaria: impaired consciousness, severe anaemia (Hb <7), acute pulmonary oedema, shock, metabolic acidosis → Immediate IV Artesunate!',
          'Jarisch-Herxheimer reaction: fever, tachycardia, hypotension occurring within hours of starting penicillin in secondary syphilis'
        ],
        tags: ['Syphilis', 'Penicillin', 'RPR', 'Malaria', 'Artesunate'],
        sections: [
          {
            id: 'syphilis-protocol',
            title: 'Syphilis Clinical Stages, Serology & SA Treatment',
            content: 'Syphilis is caused by the spirochaete Treponema pallidum:\n- Primary Syphilis: Painless, indurated, clean-based solitary ulcer (chancre) appearing 2–3 weeks after sexual contact, with non-tender regional lymphadenopathy.\n- Secondary Syphilis (4–10 weeks after chancre): Generalised non-pruritic maculopapular rash involving the PALMS and SOLES; condylomata lata (flat, moist, infectious perianal lesions); mucous patches in mouth; generalised lymphadenopathy; patchy "moth-eaten" alopecia.\n- Latent Syphilis: Asymptomatic positive serology. Early latent (<1 year duration); Late latent (>1 year or unknown duration).\n- Tertiary Syphilis (years later): Gummas (granulomatous destructive lesions of skin/bones), cardiovascular syphilis (aortitis, aortic aneurysm, aortic regurgitation), neurosyphilis (tabes dorsalis [sensory ataxia, lightning pains], general paresis of the insane, Argyll Robertson pupils [accommodates but does not react to light]).\n\nSerological Interpretation:\n- Non-Treponemal Tests (RPR / VDRL): Measure non-specific antibodies. Titres correlate with disease activity and are used to monitor treatment response (a 4-fold / 2-dilution drop, e.g. 1:32 to 1:8, confirms cure). Prone to biological false positives (SLE, pregnancy, malaria).\n- Treponemal Tests (TPHA, TPPA, FTA-ABS): Specific treponemal antibodies; once positive, remain positive for life and CANNOT be used to judge cure.\n\nSouth African Public Sector STG Treatment:\n- Primary, Secondary, or Early Latent: Benzathine Penicillin G 2.4 million units IM as a single dose.\n- Late Latent, Latent of Unknown Duration, or Gummatous: Benzathine Penicillin G 2.4 million units IM once weekly for 3 consecutive weeks.\n- Neurosyphilis: Aqueous crystalline penicillin G 18–24 million units IV daily (3–4 million units every 4 hours) for 10–14 days.\n- Penicillin allergy: Doxycycline 100 mg orally 12-hourly for 14 days (or 30 days for late latent).',
            recallQuestion: 'Which syphilis serological test is used to monitor treatment response and cure?',
            recallAnswer: 'Non-treponemal tests (RPR or VDRL), where a 4-fold (2-dilution) drop in titre confirms effective cure.'
          },
          {
            id: 'severe-malaria-who',
            title: 'Severe Falciparum Malaria: Criteria & IV Artesunate',
            content: 'Plasmodium falciparum is transmitted by the female Anopheles mosquito and accounts for virtually all severe and fatal malaria in Sub-Saharan Africa.\n\nWHO Diagnostic Criteria for Severe Malaria (Presence of P. falciparum asexual parasitaemia PLUS ≥1 of the following):\n1. Impaired Consciousness / Coma (Glasgow Coma Scale <11 in adults / Blantyre Coma Score <3 in children = Cerebral Malaria)\n2. Prostration / Extreme Weakness (inability to sit or walk without assistance)\n3. Severe Normocytic Anaemia (Haemoglobin <7.0 g/dL or Haematocrit <20%)\n4. Acute Kidney Injury (Serum creatinine >265 µmol/L or oliguria <400 mL/24h)\n5. Acute Pulmonary Oedema / ARDS (PaO2/FiO2 <300 or chest X-ray bilateral infiltrates)\n6. Hypoglycaemia (Blood glucose <2.2 mmol/L / <40 mg/dL; especially high risk in pregnant women and children)\n7. Metabolic Acidosis (Base deficit >8 mmol/L, venous plasma lactate >5.0 mmol/L, deep Kussmaul breathing)\n8. Circulatory Collapse / Shock (SBP <90 mmHg with cool extremities = Algid Malaria)\n9. Significant Bleeding / Coagulopathy (spontaneous bleeding from puncture sites or DIC)\n10. Hyperparasitaemia (>10% infected red blood cells in non-immune individuals)\n\nAntimicrobial Management:\n- Drug of Choice: Intravenous Artesunate 2.4 mg/kg given at 0, 12, and 24 hours, then once daily until patient can tolerate oral therapy (superior to IV Quinine; reduces mortality by 35%).\n- Once patient can tolerate oral medications: Complete a full 3-day course of Artemether-Lumefantrine (Coartem: 4 tablets twice daily with a fat-containing meal).',
            dangerBox: 'DANGER: Always monitor blood glucose closely in severe malaria! P. falciparum increases metabolic consumption, and IV quinine stimulates pancreatic insulin secretion, causing profound, recurrent, fatal hypoglycaemia.',
            recallQuestion: 'What is the first-line medication of choice for severe Falciparum malaria?',
            recallAnswer: 'Intravenous Artesunate (2.4 mg/kg at 0, 12, and 24 hours, then daily).'
          }
        ]
      }
    ]
  },

  // SYSTEM 09: UROLOGY & GERIATRIC MEDICINE
  {
    id: 'urology-geriatrics',
    number: '09',
    title: 'Urology & Geriatric Medicine',
    shortTitle: 'Urology & Geriatrics',
    icon: 'Activity',
    color: 'teal',
    description: 'Urinary incontinence (DIAPPERS mnemonic), Stress vs Urge vs Overflow incontinence, BPH, and Comprehensive Geriatric Assessment.',
    topics: [
      {
        id: 'urinary-incontinence',
        systemId: 'urology-geriatrics',
        title: 'Urinary Incontinence in Adults & The Elderly',
        frequency: 2,
        sourcePages: 'p. 3',
        preview1Min: 'Transient reversible causes: DIAPPERS mnemonic. Chronic incontinence types: Stress vs Urge vs Overflow vs Functional. Bladder diary, post-void residual, and pelvic floor management.',
        redFlags: [
          'Acute urinary retention with high post-void residual volume (>300 mL) causing obstructive post-renal acute kidney injury',
          'New-onset incontinence associated with bilateral leg weakness or saddle anaesthesia = Cauda Equina Syndrome!'
        ],
        tags: ['Incontinence', 'DIAPPERS', 'BPH', 'Post-Void Residual', 'Geriatrics'],
        sections: [
          {
            id: 'diappers-mnemonic',
            title: 'Reversible Causes: The DIAPPERS Mnemonic',
            content: 'Always exclude transient, treatable causes before diagnosing chronic degenerative incontinence:\n- D: Delirium / Acute confusional state\n- I: Infection (Symptomatic urinary tract infection)\n- A: Atrophic vaginitis / urethritis (estrogen deficiency)\n- P: Pharmaceuticals (Diuretics, anticholinergics, sedatives, narcotics, alpha-blockers, ACE inhibitors [cough])\n- P: Psychological causes (Severe major depression)\n- E: Excess fluid output (Hyperglycaemia, hypercalcaemia, congestive heart failure, excess intake)\n- R: Restricted mobility (Unable to reach commode or toilet in time)\n- S: Stool impaction / severe constipation (direct mechanical compression of bladder neck)',
            recallQuestion: 'What does the DIAPPERS mnemonic stand for in urinary incontinence?',
            recallAnswer: 'Delirium, Infection, Atrophic vaginitis, Pharmaceuticals, Psychological, Excess fluid, Restricted mobility, Stool impaction.'
          },
          {
            id: 'chronic-incontinence-types',
            title: 'Chronic Incontinence Types & Management',
            content: '1. Stress Incontinence:\n- Mechanism: Hypermobility of bladder neck or pelvic floor / urethral sphincter weakness.\n- Symptoms: Small-volume urine leakage during activities that increase intra-abdominal pressure (coughing, sneezing, laughing, lifting, exercise).\n- Treatment: Pelvic floor muscle training (Kegel exercises) for at least 3 months, weight reduction, vaginal pessaries, surgical mid-urethral sling.\n\n2. Urge Incontinence (Overactive Bladder):\n- Mechanism: Detrusor muscle overactivity / involuntary bladder contractions during filling.\n- Symptoms: Sudden, intense, compelling urge to void that cannot be deferred, followed immediately by involuntary large-volume urine leakage; nocturia and frequency.\n- Treatment: Bladder training / scheduled voiding, caffeine reduction, antimuscarinics (Oxybutynin, Tolterodine) or beta-3 adrenergic agonist (Mirabegron).\n\n3. Overflow Incontinence:\n- Mechanism: Incomplete bladder emptying due to anatomical bladder outlet obstruction (Benign Prostatic Hyperplasia, urethral stricture) or detrusor hypocontractility (diabetic autonomic neuropathy, anticholinergic medications).\n- Symptoms: Constant post-void dribbling, hesitancy, weak stream, sensation of incomplete bladder emptying; high post-void residual volume (>200–300 mL on ultrasound).\n- Treatment: Relieve obstruction; alpha-1 blockers (Tamsulosin, Doxazosin) and 5-alpha reductase inhibitors (Finasteride) for BPH; intermittent clean self-catheterization; surgical TURP.\n\n4. Functional Incontinence:\n- Normal bladder control, but physical or cognitive impairments (severe dementia, severe arthritis, physical restraints) prevent the patient from getting to the toilet in time.',
            recallQuestion: 'What type of urinary incontinence features constant dribbling and a high post-void residual volume?',
            recallAnswer: 'Overflow incontinence (commonly secondary to BPH or diabetic neurogenic bladder).'
          }
        ]
      }
    ]
  }
];

/** Original document content plus researched scope additions. */
export const baseClinicalSystems = baseSystems;
export const clinicalSystems: ClinicalSystem[] = mergeScope(baseSystems, scopeAdditions);
