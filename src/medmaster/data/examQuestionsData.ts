import { ExamQuestion } from '../types/index';

export const examQuestionsList: ExamQuestion[] = [
  // ==========================================
  // 1. CARDIOVASCULAR MEDICINE (Heart & Vessels)
  // ==========================================
  {
    id: 'cv-q1',
    systemId: 'cardiology',
    systemTitle: 'Cardiovascular Medicine',
    topicId: 'heart-failure',
    sourceExam: 'Random CVS Questions p. 56, Q22',
    pageRef: 'p. 56',
    questionType: 'short-answer',
    question: 'Describe the characteristic arterial pulse finding in severe Aortic Regurgitation (AR).',
    modelAnswer: 'A collapsing pulse (also known as a Water-hammer pulse or Corrigan pulse) characterized by a rapid, high-amplitude systolic percussion wave followed by sudden diastolic collapse, leading to a wide pulse pressure.',
    keyScoringPoints: [
      'Collapsing pulse / Water-hammer pulse (Corrigan pulse)',
      'Rapid upstroke with sudden, precipitous diastolic collapse',
      'Markedly widened pulse pressure (e.g. 160/40 mmHg)',
      'Best elicited by palpating radial artery at heart level, then rapidly elevating the patient\'s arm vertically'
    ],
    clinicalPearl: 'Clinical Trap: Pulsus parvus et tardus (slow-rising, low-volume pulse) occurs in Aortic Stenosis (fixed LV outflow obstruction). Severe Aortic Regurgitation produces the exact opposite: large volume, rapid upstroke, and abrupt diastolic runoff into the LV.',
    difficulty: 'Examiner Favourite'
  },
  {
    id: 'cv-q2',
    systemId: 'cardiology',
    systemTitle: 'Cardiovascular Medicine',
    topicId: 'endocarditis-rheumatic',
    sourceExam: 'Random CVS Questions p. 56, Q8 & p. 36, Q11',
    pageRef: 'p. 36 & 56',
    questionType: 'short-answer',
    question: 'What is the required duration of secondary antibiotic prophylaxis in Acute Rheumatic Fever (ARF)?',
    modelAnswer: 'Intramuscular Benzathine Penicillin G (1.2 million units monthly) for a minimum of 5 years after the last acute episode OR until age 21, whichever period is LONGER. If carditis was present without persistent valvular damage: 10 years or until age 21 (whichever is longer). If residual chronic rheumatic heart disease (valvular disease) persists: 10 years or until age 40 (often lifelong in high-risk settings).',
    keyScoringPoints: [
      '5 years from last attack OR until age 21 — whichever is LONGER (not whichever is first)',
      'With carditis but no residual valve damage: 10 years or until age 21 (whichever is longer)',
      'With established RHD / permanent valve damage: 10 years or until age 40 (or lifelong)',
      'Drug of choice: Intramuscular Benzathine Penicillin G every 4 weeks (or 3-weekly in high-risk regions)'
    ],
    clinicalPearl: 'High-Yield Rule: The prevention duration always uses the phrase "whichever is LONGER". Stopping prophylaxis before age 21 in a teenager treated 5 years earlier leaves them vulnerable to recurrent Strep A pharyngitis and devastating valvular destruction.',
    difficulty: 'High-Yield Core'
  },
  {
    id: 'cv-q3',
    systemId: 'cardiology',
    systemTitle: 'Cardiovascular Medicine',
    topicId: 'endocarditis-rheumatic',
    sourceExam: 'Random CVS Questions p. 56, Q10 & p. 34, Q12',
    pageRef: 'p. 34 & 56',
    questionType: 'staging-criteria',
    question: 'Outline the diagnostic criteria combinations required to establish a diagnosis of Definite Infective Endocarditis under the Modified Duke Criteria.',
    modelAnswer: 'Definite clinical Infective Endocarditis strictly requires ONE of the following combinations: (1) 2 Major criteria, OR (2) 1 Major criterion PLUS 3 Minor criteria, OR (3) 5 Minor criteria. (Histological confirmation on excised valve or vegetation also establishes definite IE).',
    keyScoringPoints: [
      '2 Major criteria',
      '1 Major criterion PLUS 3 Minor criteria (1 major + 2 minor only equals "Possible IE")',
      '5 Minor criteria',
      'Major criteria: Typical bacteremia on blood cultures (2 positive >12h apart) + Endocardial involvement on Echo (oscillating mass, abscess, new valvular regurgitation)',
      'Minor criteria: Predisposing heart condition/IVDU, Fever >=38°C, Vascular phenomena (emboli, Janeway lesions), Immunological phenomena (Osler nodes, Roth spots, glomerulonephritis, +RF), Microbiological evidence not meeting major'
    ],
    clinicalPearl: 'Diagnostic Trap: 1 Major plus 2 Minor criteria only qualifies as "Possible Endocarditis", not definite. Memorize the rule: 2 major, 1 major + 3 minor, or 5 minor.',
    difficulty: 'Examiner Favourite'
  },
  {
    id: 'cv-q4',
    systemId: 'cardiology',
    systemTitle: 'Cardiovascular Medicine',
    topicId: 'ecg-acs',
    sourceExam: 'OSCE Block 1/2 2021 & Random CVS p. 56, Q14',
    pageRef: 'p. 14 & 56',
    questionType: 'vignette',
    question: 'A 58-year-old male presents with 45 minutes of crushing retrosternal chest pain radiating to his jaw and left arm. ECG demonstrates 3 mm ST-segment elevation in leads V1–V4 with reciprocal depression in II, III, and aVF. What is the definitive emergency management?',
    modelAnswer: 'Emergency reperfusion therapy: Immediate activation of the cardiac catheterization laboratory for Primary Percutaneous Coronary Intervention (PCI) within 120 minutes of first medical contact (door-to-balloon <90 min). If PCI cannot be delivered within 120 minutes, administer immediate pharmacological fibrinolysis (e.g., weight-adjusted Tenecteplase or Alteplase) within 30 minutes of presentation (door-to-needle <30 min), followed by transfer to a PCI-capable center.',
    keyScoringPoints: [
      'Definitive treatment: Emergency Reperfusion Therapy (Primary PCI or Fibrinolysis)',
      'Primary PCI is the preferred modality if achievable within 120 minutes',
      'Intravenous fibrinolytic (Tenecteplase / Alteplase) within 30 minutes if PCI transfer exceeds 120 min',
      'Adjunctive loading: Aspirin 300 mg chewed + P2Y12 inhibitor (Ticagrelor 180 mg or Clopidogrel 300-600 mg)',
      'Anticoagulation (Unfractionated heparin or Enoxaparin) is mandatory adjunctive co-therapy, NOT standalone definitive treatment'
    ],
    clinicalPearl: 'Exam Trap: Anticoagulation (heparin) prevents secondary thrombus propagation but does NOT dissolve the occluding coronary clot. Reperfusion (mechanical PCI or enzymatic fibrinolysis) is the sole definitive therapy.',
    difficulty: 'High-Yield Core'
  },
  {
    id: 'cv-q5',
    systemId: 'cardiology',
    systemTitle: 'Cardiovascular Medicine',
    topicId: 'heart-failure',
    sourceExam: 'OSCE Block 5 2022 Station 2 & Random CVS p. 56',
    pageRef: 'p. 11 & 56',
    questionType: 'vignette',
    question: 'A 64-year-old female presents with severe orthopnoea requiring 4 pillows. On examination, there is an audible loud S3 gallop and a blowing pansystolic murmur loudest at the apex radiating to the left axilla, increased on expiration. What is the diagnosis, and how is orthopnoea clinically graded?',
    modelAnswer: 'Diagnosis: Severe Mitral Regurgitation (MR) causing Left-sided Congestive Heart Failure and acute pulmonary venous congestion. Orthopnoea is graded clinically by the number of pillows required by the patient to sleep comfortably without awakening breathless (e.g., 2-pillow, 3-pillow, or 4-pillow orthopnoea, or sleeping upright in an armchair).',
    keyScoringPoints: [
      'Diagnosis: Mitral Regurgitation with Left Ventricular Heart Failure',
      'Murmur character: Holosystolic / pansystolic, apical, radiates to the axilla, unaffected or louder on expiration',
      'S3 gallop: indicates rapid ventricular filling into a dilated, non-compliant LV (hallmark of LV systolic volume overload)',
      'Orthopnoea grading: Quantified by the number of pillows required to prevent orthopnoeic dyspnoea'
    ],
    clinicalPearl: 'Auscultation Rule: Left-sided murmurs (Mitral Regurgitation, Aortic Stenosis) are louder or unchanged on expiration. Right-sided murmurs (Tricuspid Regurgitation, Pulmonary Stenosis) become louder on inspiration (Carvallo sign) due to increased venous return.',
    difficulty: 'Examiner Favourite'
  },
  {
    id: 'cv-q6',
    systemId: 'cardiology',
    systemTitle: 'Cardiovascular Medicine',
    topicId: 'cv-tachyarrhythmias',
    sourceExam: 'Random CVS Questions p. 56, Q15–16',
    pageRef: 'p. 56',
    questionType: 'short-answer',
    question: 'State the two cardinal physical examination signs and the three pathognomonic ECG findings of Atrial Fibrillation (AF).',
    modelAnswer: 'Physical Examination: (1) Irregularly irregular pulse (variable rate and variable volume), (2) Apex-radial pulse deficit (apical rate exceeds peripheral pulse rate). ECG Findings: (1) Absence of distinct P waves (replaced by disorganized baseline fibrillatory "f" waves), (2) Irregular R-R intervals, (3) Narrow QRS complexes (unless aberrant conduction or pre-existing bundle branch block is present).',
    keyScoringPoints: [
      'Pulse: Irregularly irregular rhythm with variable pulse volume',
      'Apex-radial pulse deficit (auscultated apical beats not transmitted to the radial artery)',
      'ECG: Complete absence of discrete P waves (fibrillatory baseline waves at 350-600/min)',
      'ECG: Irregularly irregular R-R intervals',
      'ECG: Typically narrow QRS morphology'
    ],
    clinicalPearl: 'Management Pearl: In hemodynamically unstable AF (hypotension, pulmonary edema, chest pain), perform immediate Synchronized DC Cardioversion (100–200 J). In stable AF, control rate with beta-blockers (bisoprolol/metoprolol) or diltiazem and calculate CHA2DS2-VASc stroke risk.',
    difficulty: 'High-Yield Core'
  },
  {
    id: 'cv-q7',
    systemId: 'cardiology',
    systemTitle: 'Cardiovascular Medicine',
    topicId: 'cardiomyopathy-pericarditis',
    sourceExam: 'Block 3/4 Questions 2022 & Random CVS p. 56',
    pageRef: 'p. 8 & 56',
    questionType: 'vignette',
    question: 'A 32-year-old male with confirmed pulmonary tuberculosis develops progressive dyspnoea, dizziness, and cold extremities. Examination reveals BP 85/55 mmHg, heart rate 125 bpm, engorged non-pulsatile neck veins to the angle of the jaw, and distant, muffled heart sounds. (a) What is the diagnostic triad? (b) What immediate bedside life-saving procedure is indicated?',
    modelAnswer: '(a) Beck\'s Triad for Cardiac Tamponade: Hypotension (low arterial blood pressure), Distended neck veins (elevated JVP), and Muffled/distant heart sounds. (b) Immediate life-saving procedure: Emergency ultrasound-guided pericardiocentesis (subxiphoid needle decompression with catheter drainage) to relieve elevated intrapericardial pressure and restore ventricular diastolic filling.',
    keyScoringPoints: [
      'Beck\'s Triad: Hypotension + Jugular Venous Distension + Muffled Heart Sounds',
      'Pathophysiology: Accumulation of pericardial fluid under pressure prevents ventricular diastolic filling, crashing cardiac output',
      'Additional signs: Pulsus paradoxus (>10 mmHg systolic drop on inspiration) and electrical alternans on ECG',
      'Emergency management: Immediate pericardiocentesis (subxiphoid puncture angled at 45° towards left shoulder)',
      'Do NOT administer diuretics or vasodilators (cardiac output is critically preload-dependent)'
    ],
    clinicalPearl: 'Haemodynamic Warning: Diuretics are strictly contraindicated in cardiac tamponade! The heart relies entirely on high systemic filling pressures to maintain stroke volume; reducing preload with furosemide causes immediate circulatory arrest.',
    difficulty: 'Examiner Favourite'
  },
  {
    id: 'cv-q8',
    systemId: 'cardiology',
    systemTitle: 'Cardiovascular Medicine',
    topicId: 'heart-failure',
    sourceExam: 'Random CVS Questions p. 56, Q20',
    pageRef: 'p. 56',
    questionType: 'short-answer',
    question: 'What is the characteristic physical finding of the apex beat in Aortic Stenosis versus Mitral Regurgitation?',
    modelAnswer: 'Aortic Stenosis produces a heaving, sustained, non-displaced apex beat (due to concentric Left Ventricular hypertrophy against pressure overload). Mitral Regurgitation produces a hyperdynamic, thrusting, laterally and inferiorly displaced apex beat (due to eccentric LV hypertrophy and dilation from volume overload).',
    keyScoringPoints: [
      'Aortic Stenosis: Heaving (sustained) apex beat — non-displaced or minimally displaced (concentric LVH)',
      'Mitral Regurgitation: Hyperdynamic, thrusting apex beat — displaced laterally/inferiorly beyond 5th ICS midclavicular line (eccentric LV dilation)',
      'AS is a pressure-overloaded lesion; MR is a volume-overloaded lesion'
    ],
    clinicalPearl: 'Exam Distinction: A "heaving" apex beat lifts the examining fingers throughout systole (pressure overload: AS, systemic hypertension). A "tapping" apex beat represents a palpable S1 (Mitral Stenosis). A "hyperdynamic" displaced apex beat indicates volume overload (MR, AR, dilated cardiomyopathy).',
    difficulty: 'High-Yield Core'
  },

  // ==========================================
  // 2. RESPIRATORY MEDICINE (Breathing)
  // ==========================================
  {
    id: 'rx-q1',
    systemId: 'respiratory',
    systemTitle: 'Respiratory Medicine',
    topicId: 'pneumonia-effusion',
    sourceExam: 'Block 3/4 Questions 2022 p. 7 & Random Resp p. 55',
    pageRef: 'p. 7 & 55',
    questionType: 'staging-criteria',
    question: 'State Light\'s Criteria used to differentiate an exudative pleural effusion from a transudative pleural effusion.',
    modelAnswer: 'Pleural fluid is classified as an EXUDATE if it satisfies at least ONE of the following three criteria: (1) Pleural fluid protein to serum protein ratio > 0.5; (2) Pleural fluid LDH to serum LDH ratio > 0.6; (3) Pleural fluid LDH > 2/3 of the laboratory\'s upper limit of normal for serum LDH. If none of these three criteria are met, the effusion is a TRANSUDATE.',
    keyScoringPoints: [
      'Criterion 1: Pleural fluid protein / serum protein ratio > 0.5',
      'Criterion 2: Pleural fluid LDH / serum LDH ratio > 0.6',
      'Criterion 3: Pleural fluid LDH > 2/3 of upper limit of normal serum LDH',
      'Only ONE positive criterion is required to confirm an exudate',
      'Transudate causes: Congestive heart failure, Cirrhosis/liver failure, Nephrotic syndrome (systemic hydrostatic/oncotic imbalance)',
      'Exudate causes: Pneumonia (parapneumonic/empyema), Tuberculosis, Malignancy, Pulmonary embolism (local pleural inflammation/permeability)'
    ],
    clinicalPearl: 'Diagnostic Pearl: If a patient with heart failure has received diuretics, total protein may falsely rise into the exudative range. Check the serum-to-pleural fluid albumin gradient: if >12 g/L, it confirms a transudative effusion from heart failure.',
    difficulty: 'High-Yield Core'
  },
  {
    id: 'rx-q2',
    systemId: 'respiratory',
    systemTitle: 'Respiratory Medicine',
    topicId: 'pneumonia-effusion',
    sourceExam: 'Block 1/2 2022 & Random Resp Questions p. 55, Q13',
    pageRef: 'p. 3 & 55',
    questionType: 'short-answer',
    question: 'Differentiate arterial blood gas (ABG) criteria between Type 1 and Type 2 Respiratory Failure, and explain why clinical signs alone cannot classify failure type.',
    modelAnswer: 'Type 1 Respiratory Failure (Hypoxaemic): PaO2 < 60 mmHg (8.0 kPa) on room air with a NORMAL or LOW PaCO2 (<45 mmHg / 6.0 kPa). Caused by V/Q mismatch or intrapulmonary shunt (e.g. pneumonia, pulmonary edema, PE, ARDS). Type 2 Respiratory Failure (Hypercapnic): PaCO2 > 45 mmHg (6.0 kPa), typically accompanied by hypoxaemia. Caused by alveolar hypoventilation or pump failure (e.g. COPD, neuromuscular disease, severe chest wall deformity, sedative overdose). Clinical signs (cyanosis, tachypnoea, drowsiness) overlap and cannot distinguish failure type without arterial blood gas confirmation.',
    keyScoringPoints: [
      'Type 1 ABG: PaO2 < 60 mmHg (hypoxaemia) with normal or low PaCO2 (<45 mmHg)',
      'Type 2 ABG: PaCO2 > 45 mmHg (hypercapnia), usually with concomitant hypoxaemia',
      'Type 1 mechanism: Gas exchange failure across alveolar-capillary membrane (V/Q mismatch, diffusion impairment)',
      'Type 2 mechanism: Ventilatory pump failure / alveolar hypoventilation',
      'Clinical signs alone CANNOT determine failure type; mandatory ABG is required'
    ],
    clinicalPearl: 'Exam Trap: Never classify respiratory failure based on symptoms like tachypnoea or hypotension. A patient with severe lobar pneumonia will hyperventilate and blow off CO2, producing Type 1 failure (low PaO2, low PaCO2). Type 2 only develops if respiratory muscles exhaust or severe underlying COPD is present.',
    difficulty: 'Examiner Favourite'
  },
  {
    id: 'rx-q3',
    systemId: 'respiratory',
    systemTitle: 'Respiratory Medicine',
    topicId: 'pneumonia-effusion',
    sourceExam: 'Scope Syllabus & Block 1/2 2022 p. 3',
    pageRef: 'p. 3',
    questionType: 'staging-criteria',
    question: 'Detail the CURB-65 scoring system used for risk stratification in Community-Acquired Pneumonia (CAP) and outline disposition guidelines.',
    modelAnswer: 'The CURB-65 score assigns 1 point for each of the following: C: New Confusion (AMT <=8 or disorientation in time/place/person); U: Blood Urea > 7 mmol/L (19 mg/dL); R: Respiratory Rate >= 30 breaths/min; B: Blood Pressure: Systolic < 90 mmHg OR Diastolic <= 60 mmHg; 65: Age >= 65 years. Disposition: Score 0–1: Low risk (<3% mortality) — treat safely as outpatient with oral amoxicillin. Score 2: Intermediate risk (approx. 9% mortality) — short hospital admission or monitored outpatient care. Score 3–5: High risk (15–40% mortality) — urgent hospital admission; scores 4–5 warrant ICU evaluation.',
    keyScoringPoints: [
      'C: Confusion (new mental confusion)',
      'U: Urea > 7 mmol/L',
      'R: Respiratory rate >= 30 breaths/min',
      'B: Blood pressure (SBP < 90 or DBP <= 60 mmHg)',
      '65: Age >= 65 years',
      '0-1 points = Outpatient care',
      '2 points = Inpatient hospital ward',
      '3-5 points = Severe CAP requiring hospital admission; consider ICU'
    ],
    clinicalPearl: 'Clinical Rule: Advanced HIV, hypoxaemia (SpO2 <92%), bilateral/multilobar infiltrates, or social vulnerability justify hospital admission regardless of a low CURB-65 score.',
    difficulty: 'High-Yield Core'
  },
  {
    id: 'rx-q4',
    systemId: 'respiratory',
    systemTitle: 'Respiratory Medicine',
    topicId: 'rx-bronchiectasis',
    sourceExam: 'Random Resp Questions p. 55, Q19 & Scope p. 27–33',
    pageRef: 'p. 29 & 55',
    questionType: 'short-answer',
    question: 'State the diagnostic gold-standard investigation for Bronchiectasis, two classic radiological signs on this modality, and the cardinal daily symptom.',
    modelAnswer: 'Diagnostic Gold Standard: High-Resolution Computed Tomography (HRCT) of the chest. Classic Radiological Signs: (1) "Signet-ring sign" — the internal diameter of the dilated bronchus exceeds the diameter of its accompanying pulmonary artery branch (broncho-arterial ratio >1.0); (2) "Tram-track lines" — parallel thickened non-tapering bronchial walls extending into the lung periphery. Cardinal Daily Symptom: Chronic, daily expectoration of copious purulent, foul-smelling sputum (frequently accompanied by coarse inspiratory crackles and recurrent haemoptysis).',
    keyScoringPoints: [
      'Gold standard: High-Resolution CT (HRCT) chest',
      'Signet-ring sign: Dilated bronchus diameter larger than adjacent pulmonary artery',
      'Tram-track lines / lack of bronchial tapering into peripheral 1 cm of lung',
      'Cardinal symptom: Chronic daily profuse purulent/mucopurulent sputum',
      'Major local etiology in SA: Post-tuberculosis bronchial scarring and architectural distortion'
    ],
    clinicalPearl: 'Radiological Pearl: A normal chest X-ray does NOT exclude bronchiectasis! Plain radiographs miss up to 50% of mild-to-moderate bronchiectasis; HRCT is essential to establish the diagnosis and map lobe distribution.',
    difficulty: 'Examiner Favourite'
  },
  {
    id: 'rx-q5',
    systemId: 'respiratory',
    systemTitle: 'Respiratory Medicine',
    topicId: 'asthma-copd',
    sourceExam: 'Random Resp Questions p. 55, Q10–12 & Scope',
    pageRef: 'p. 55',
    questionType: 'short-answer',
    question: 'Why is short-acting beta-agonist (SABA) monotherapy contraindicated in the modern management of asthma in adults and adolescents?',
    modelAnswer: 'Asthma is fundamentally a chronic inflammatory disease of the airways. SABA monotherapy relieves bronchospasm acutely but does not address the underlying eosinophilic/allergic inflammation. Regular or frequent SABA use causes beta-2 receptor downregulation, loss of bronchoprotection, increased airway hyperresponsiveness, and significantly increases the risk of severe life-threatening asthma exacerbations and asthma-related mortality. International (GINA) and SA guidelines require that all adults with asthma receive an Inhaled Corticosteroid (ICS)-containing regimen.',
    keyScoringPoints: [
      'Asthma is primarily an inflammatory airway disease; SABAs treat only smooth muscle contraction',
      'SABA monotherapy leads to beta-receptor downregulation and rebound bronchial hyperresponsiveness',
      'Frequent SABA use (>=3 canisters/year) is strongly associated with severe exacerbations and death',
      'Every patient with asthma requires an Inhaled Corticosteroid (ICS) controller'
    ],
    clinicalPearl: 'Safe Practice: In the public sector without combination inhalers, prescribe regular low-dose ICS (budesonide 200–400 µg BD) alongside as-needed salbutamol. Never discharge an asthma patient with salbutamol alone.',
    difficulty: 'High-Yield Core'
  },
  {
    id: 'rx-q6',
    systemId: 'respiratory',
    systemTitle: 'Respiratory Medicine',
    topicId: 'lung-cancer-ild',
    sourceExam: 'OSCE Block 5 2022 Station 1 & Random Resp p. 55, Q20',
    pageRef: 'p. 11 & 55',
    questionType: 'vignette',
    question: 'A 66-year-old male smoker (45 pack-year history) presents with right shoulder pain, ptosis of the right upper eyelid, a constricted right pupil, and absence of facial sweating on the right side. CXR reveals an apical lung mass. What is this clinical syndrome, its anatomical cause, and the underlying diagnosis?',
    modelAnswer: 'Clinical Syndrome: Horner Syndrome (partial ptosis, miosis, and anhidrosis) secondary to a Pancoast Tumor (Superior Sulcus Bronchial Carcinoma). Anatomical Cause: Direct tumor invasion into the cervical sympathetic trunk and inferior cervical / stellate ganglion at the thoracic apex. Underlying Diagnosis: Non-Small Cell Lung Carcinoma (most commonly Squamous Cell Carcinoma or Adenocarcinoma) originating in the lung apex.',
    keyScoringPoints: [
      'Pancoast tumor / Superior sulcus tumor',
      'Horner syndrome triad: Ipsilateral Ptosis, Miosis, Anhidrosis (plus enophthalmos)',
      'Invasion of sympathetic chain / stellate ganglion',
      'Shoulder/arm pain from invasion of brachial plexus (C8-T1 nerve roots causing ulnar distribution pain/weakness)',
      'Histology: Non-Small Cell Lung Cancer (NSCLC)'
    ],
    clinicalPearl: 'Paraneoplastic Pearls: SCLC (neuroendocrine) causes ectopic ACTH (Cushing) and SIADH (hyponatraemia). Squamous Cell Carcinoma causes Hypercalcemia via PTHrP secretion.',
    difficulty: 'Examiner Favourite'
  },
  {
    id: 'rx-q7',
    systemId: 'respiratory',
    systemTitle: 'Respiratory Medicine',
    topicId: 'pneumonia-effusion',
    sourceExam: 'Random Resp Questions p. 55, Q5–6',
    pageRef: 'p. 55',
    questionType: 'short-answer',
    question: 'List three respiratory causes that deviate the trachea TOWARDS the diseased side, and three causes that push the trachea AWAY from the diseased side.',
    modelAnswer: 'Tracheal deviation TOWARDS the lesion (due to loss of lung volume / negative intrapleural pressure): (1) Massive lobar or complete lung collapse (e.g. mucus plug, obstructing bronchogenic tumor, foreign body); (2) Severe pulmonary fibrosis / post-TB fibrocavitary scarring; (3) Surgical pneumonectomy / lobectomy. Tracheal deviation AWAY from the lesion (due to positive mass effect / space-occupying pathology): (1) Tension pneumothorax; (2) Massive pleural effusion; (3) Large thoracic mass or diaphragmatic hernia.',
    keyScoringPoints: [
      'Towards: Lung collapse / atelectasis',
      'Towards: Fibrosis / fibrothorax (post-TB fibrodestructive changes)',
      'Towards: Pneumonectomy',
      'Away: Tension pneumothorax (acute emergency!)',
      'Away: Massive pleural effusion',
      'Away: Large mediastinal or lung tumor'
    ],
    clinicalPearl: 'Emergency Warning: Severe tracheal deviation with hypotension, tachycardia, and unilateral hyperresonance is a Tension Pneumothorax. Perform immediate needle thoracocentesis (2nd ICS midclavicular line or 5th ICS anterior axillary line)—do NOT wait for a chest X-ray!',
    difficulty: 'High-Yield Core'
  },

  // ==========================================
  // 3. GASTROENTEROLOGY & HEPATOLOGY (Gut & Liver)
  // ==========================================
  {
    id: 'gx-q1',
    systemId: 'gastroenterology',
    systemTitle: 'Gastroenterology & Hepatology',
    topicId: 'pancreatitis',
    sourceExam: 'Random GIT Questions p. 57, Q18 & p. 7, Q2',
    pageRef: 'p. 7 & 57',
    questionType: 'short-answer',
    question: 'Correctly describe the anatomical locations of Grey Turner\'s sign versus Cullen\'s sign in severe acute necrotizing pancreatitis, and explain their underlying pathophysiology.',
    modelAnswer: 'Grey Turner\'s Sign: Blue-purple ecchymosis and bruising located in the FLANKS. Pathophysiology: Retroperitoneal extravasation of pancreatic enzymes and blood tracking from the retroperitoneum along the lateral border of quadratus lumborum into the subcutaneous tissue of the flanks. Cullen\'s Sign: Blue-purple ecchymosis and bruising located in the PERIUMBILICAL region. Pathophysiology: Retroperitoneal blood tracking along the gastrohepatic and falciform ligaments to the subcutaneous periumbilical space.',
    keyScoringPoints: [
      'Grey Turner sign = FLANK bruising ("turn onto your flank")',
      'Cullen sign = PERIUMBILICAL bruising ("C around the belly button")',
      'Pathophysiology: Extravasation of hemoperitoneum and digested retroperitoneal blood vessels',
      'Significance: Indicates severe acute necrotizing pancreatitis with retroperitoneal hemorrhage',
      'Associated with high mortality and severe Ranson/APACHE II scores'
    ],
    clinicalPearl: 'Anatomical Mnemonic: Grey Turner = "Turn on your side" (Flanks). Cullen = "Central / Circle around the umbilicus" (Umbilical). Never swap these locations!',
    difficulty: 'Examiner Favourite'
  },
  {
    id: 'gx-q2',
    systemId: 'gastroenterology',
    systemTitle: 'Gastroenterology & Hepatology',
    topicId: 'cirrhosis-sbp',
    sourceExam: 'OSCE Block 1/2 2021 & Random GIT p. 57, Q2',
    pageRef: 'p. 4 & 57',
    questionType: 'short-answer',
    question: 'State the five cardinal clinical and biochemical hallmarks that define Acute Liver Failure (fulminant hepatic failure).',
    modelAnswer: 'Acute liver failure is defined by rapid onset of severe hepatocellular injury in a patient without pre-existing cirrhosis, characterized by: (1) Hepatic Encephalopathy (altered mental status, confusion, coma); (2) Coagulopathy with prolonged Prothrombin Time / INR >= 1.5; (3) Marked Jaundice (hyperbilirubinemia); (4) Severe Hypoglycaemia (impaired glycogenolysis and gluconeogenesis); (5) Asterixis (flapping tremor).',
    keyScoringPoints: [
      'Hepatic encephalopathy (confusion, delirium, somnolence, coma)',
      'Severe coagulopathy (INR >= 1.5 due to lost synthetic factor production)',
      'Jaundice (deep conjugated and unconjugated hyperbilirubinemia)',
      'Hypoglycaemia (critical loss of hepatic glucose synthesis and storage)',
      'Asterixis (negative myoclonus / flapping tremor of outstretched hands)',
      'Absence of pre-existing chronic liver disease / cirrhosis'
    ],
    clinicalPearl: 'Clinical Distinction: Peripheral stigmata of chronic liver disease (spider naevi, palmar erythema, Dupuytren contracture, gynecomastia) reflect chronic estrogen dysregulation in cirrhosis. They are ABSENT in hyperacute liver failure (e.g. paracetamol overdose).',
    difficulty: 'High-Yield Core'
  },
  {
    id: 'gx-q3',
    systemId: 'gastroenterology',
    systemTitle: 'Gastroenterology & Hepatology',
    topicId: 'cirrhosis-sbp',
    sourceExam: 'Random GIT Questions p. 57, Q10 & Scope',
    pageRef: 'p. 57',
    questionType: 'staging-criteria',
    question: 'How is the Serum-Ascites Albumin Gradient (SAAG) calculated, and how does it differentiate causes of ascites?',
    modelAnswer: 'Calculation: SAAG = Serum Albumin concentration minus Ascitic Fluid Albumin concentration (measured on simultaneous samples). High Gradient (SAAG >= 11 g/L or >= 1.1 g/dL): Indicates PORTAL HYPERTENSION (increased hydrostatic capillary pressure). Causes: Cirrhosis, Heart Failure (tricuspid regurgitation, constrictive pericarditis), Budd-Chiari syndrome, Massive liver metastases. Low Gradient (SAAG < 11 g/L or < 1.1 g/dL): Indicates NON-PORTAL HYPERTENSIVE disease (increased peritoneal vascular permeability or decreased oncotic pressure). Causes: Peritoneal Tuberculosis, Peritoneal Carcinomatosis, Nephrotic syndrome, Pancreatic ascites.',
    keyScoringPoints: [
      'Formula: Serum Albumin - Ascitic Albumin',
      'Cutoff: 11 g/L (1.1 g/dL)',
      'High SAAG (>=11 g/L): Portal hypertension (Cirrhosis, cardiac ascites, Budd-Chiari)',
      'Low SAAG (<11 g/L): Peritoneal disease (Peritoneal TB, carcinomatosis, pancreatitis, nephrotic syndrome)',
      'Replaces the old, inaccurate exudate vs transudate total protein cut-offs for ascites'
    ],
    clinicalPearl: 'Tuberculosis Rule: In South Africa, a patient with ascites, fever, and a low SAAG (<11 g/L) with lymphocytic predominance and elevated adenosine deaminase (ADA >30 U/L) has Peritoneal Tuberculosis until proven otherwise.',
    difficulty: 'High-Yield Core'
  },
  {
    id: 'gx-q4',
    systemId: 'gastroenterology',
    systemTitle: 'Gastroenterology & Hepatology',
    topicId: 'cirrhosis-sbp',
    sourceExam: 'Block 3/4 2022 & Random GIT p. 57',
    pageRef: 'p. 8 & 57',
    questionType: 'vignette',
    question: 'A 54-year-old male with alcoholic cirrhosis and ascites presents with low-grade fever (38.1°C), mild diffuse abdominal tenderness, and increasing confusion. Diagnostic paracentesis yields cloudy fluid with an absolute neutrophil (PMN) count of 380 cells/µL. What is the diagnosis, and what is the immediate management?',
    modelAnswer: 'Diagnosis: Spontaneous Bacterial Peritonitis (SBP), defined as an ascitic fluid polymorphonuclear (PMN) count >= 250 cells/µL in the absence of an intra-abdominal surgically treatable source. Immediate Management: (1) Intravenous 3rd generation cephalosporin (Ceftriaxone 2 g daily or Cefotaxime 2 g 8-hourly) started immediately without waiting for culture results; (2) Intravenous Albumin (1.5 g/kg within 6 hours of diagnosis, followed by 1.0 g/kg on Day 3) to prevent hepatorenal syndrome and reduce mortality.',
    keyScoringPoints: [
      'Diagnosis: Spontaneous Bacterial Peritonitis (PMN >= 250 cells/µL)',
      'Empiric IV antibiotic: Ceftriaxone 2g IV daily or Cefotaxime',
      'Mandatory IV Albumin: 1.5 g/kg on Day 1, 1.0 g/kg on Day 3 (prevents fatal hepatorenal syndrome)',
      'Most common organisms: E. coli, Klebsiella pneumoniae, Pneumococcus (bacterial translocation)',
      'Secondary prophylaxis with oral ciprofloxacin or co-trimoxazole upon recovery'
    ],
    clinicalPearl: 'Critical Practice Point: Never withhold IV antibiotics waiting for bacterial culture! Over 40% of true SBP cases are culture-negative neutrocytic ascites (PMN >=250 with negative culture), which carries identical mortality if untreated.',
    difficulty: 'Examiner Favourite'
  },
  {
    id: 'gx-q5',
    systemId: 'gastroenterology',
    systemTitle: 'Gastroenterology & Hepatology',
    topicId: 'peptic-ulcer-bleed',
    sourceExam: 'Random GIT Questions p. 57, Q12',
    pageRef: 'p. 57',
    questionType: 'short-answer',
    question: 'List six cardinal ALARM features in a patient presenting with dyspepsia that mandate urgent upper gastrointestinal endoscopy (gastroscopy).',
    modelAnswer: 'ALARM Features: (1) Anaemia (unexplained iron-deficiency anaemia); (2) Loss of weight (unintentional, progressive); (3) Anorexia or early satiety; (4) Recent onset of progressive symptoms in an older patient (age >45–50); (5) Melaena or haematemesis (active or occult GI bleeding); (6) Swallowing difficulty (progressive Dysphagia or Odynophagia). Other acceptable signs: persistent vomiting, palpable epigastric mass.',
    keyScoringPoints: [
      'A: Anaemia (iron deficiency)',
      'L: Loss of weight (unintentional)',
      'A: Anorexia / early satiety',
      'R: Recent onset / rapid progression (age >45-50)',
      'M: Melaena / haematemesis',
      'S: Swallowing difficulty (dysphagia / odynophagia)'
    ],
    clinicalPearl: 'Malignancy Alert: Dysphagia in an older patient is an esophageal or gastric cardia malignancy until proven otherwise by urgent gastroscopy with tissue biopsy.',
    difficulty: 'High-Yield Core'
  },
  {
    id: 'gx-q6',
    systemId: 'gastroenterology',
    systemTitle: 'Gastroenterology & Hepatology',
    topicId: 'gx-splenomegaly',
    sourceExam: 'Random GIT Questions p. 57 & Scope',
    pageRef: 'p. 41 & 57',
    questionType: 'short-answer',
    question: 'List four physical examination findings that differentiate an enlarged spleen from an enlarged left kidney on abdominal palpation.',
    modelAnswer: '(1) Direction of movement: The spleen moves infero-medially towards the right iliac fossa on deep inspiration; the kidney moves vertically downwards. (2) Splenic notch: The anterior border of the spleen has a distinct palpable notch; the kidney has a smooth, rounded contour. (3) Percussion: The spleen is dull to percussion (Traube space obliterated); the kidney is resonant anteriorly due to overlying colonic gas. (4) Palpability: You cannot "get above" an enlarged spleen; you can often get your hand above a kidney. (5) Ballottability: The kidney is bimanually ballotable; the spleen is not ballotable.',
    keyScoringPoints: [
      'Movement: Spleen moves infero-medially towards RIF; kidney moves vertically',
      'Notch: Distinct anterior notch present on spleen, absent on kidney',
      'Percussion: Spleen is dull; kidney has overlying colonic resonance',
      'Upper border: Examiner cannot get fingers above spleen; can get above kidney',
      'Ballottability: Kidney is bimanually ballotable; spleen is not'
    ],
    clinicalPearl: 'Examination Pearl: To palpate a subtle spleen, roll the patient onto their right lateral decubitus position at 45 degrees with left hip flexed, and palpate during deep inspiration.',
    difficulty: 'Examiner Favourite'
  },

  // ==========================================
  // 4. NEUROLOGY (Brain & Nerves)
  // ==========================================
  {
    id: 'nx-q1',
    systemId: 'neurology',
    systemTitle: 'Neurology',
    topicId: 'delirium-dementia-myasthenia',
    sourceExam: 'OSCE Block 1/2 2022 p. 12, Q4 & Random Neuro p. 58',
    pageRef: 'p. 12 & 58',
    questionType: 'vignette',
    question: 'A 48-year-old chronic alcohol-dependent male is brought to the emergency department following a heavy binge with acute ataxia, disorientation, and horizontal nystagmus with bilateral lateral rectus palsy. Brain CT is normal. What is the diagnosis, and which specific vitamin must be administered immediately?',
    modelAnswer: 'Diagnosis: Wernicke Encephalopathy. Specific Treatment: Immediate High-Dose Intravenous Thiamine (Vitamin B1) — typically 500 mg IV infusion 8-hourly for 3 to 5 days, given BEFORE any intravenous glucose administration. (Followed by oral thiamine maintenance).',
    keyScoringPoints: [
      'Diagnosis: Wernicke Encephalopathy',
      'Classical Triad: Encephalopathy (confusion/delirium), Ataxia (broad-based gait), Ophthalmoplegia/Nystagmus (6th nerve lateral rectus palsy)',
      'Deficient Vitamin: Intravenous Thiamine (Vitamin B1)',
      'CRITICAL SAFETY RULE: Thiamine must be given BEFORE or simultaneously with IV glucose/dextrose infusions'
    ],
    clinicalPearl: 'Fatal Pitfall: Administering intravenous glucose to a thiamine-deficient patient accelerates pyruvate dehydrogenase failure, precipitating acute brainstem necrosis, irreversible Korsakoff psychosis, or fatal transtentorial herniation.',
    difficulty: 'Examiner Favourite'
  },
  {
    id: 'nx-q2',
    systemId: 'neurology',
    systemTitle: 'Neurology',
    topicId: 'stroke-tia',
    sourceExam: 'Random Neuro Questions p. 58, Q6 & Block 1/2 2021',
    pageRef: 'p. 15 & 58',
    questionType: 'short-answer',
    question: 'Localise the vascular territory of an ischaemic stroke: (a) Contralateral weakness and sensory loss affecting the Face and Arm significantly more than the Leg; (b) Contralateral weakness and sensory loss affecting the Leg significantly more than the Arm; (c) Dense contralateral hemiplegia affecting Face, Arm, and Leg equally with no cortical deficits.',
    modelAnswer: '(a) Middle Cerebral Artery (MCA) territory (supplies the lateral convexity of the cerebral cortex, which represents face and upper limb on the motor homunculus); (b) Anterior Cerebral Artery (ACA) territory (supplies the medial parasagittal cortex, representing the lower limb and micturition center); (c) Internal Capsule (posterior limb) / Pure Motor Lacunar Infarct (lenticulostriate penetrating branches of MCA).',
    keyScoringPoints: [
      'Face & Arm > Leg = Middle Cerebral Artery (MCA)',
      'Leg > Arm & Face = Anterior Cerebral Artery (ACA)',
      'Equal dense hemiplegia (Face = Arm = Leg) = Posterior limb of Internal Capsule (Lacunar stroke)',
      'Dominant MCA (left): also produces Broca\'s expressive or Wernicke\'s receptive aphasia',
      'Non-dominant MCA (right): produces hemispatial neglect, anosognosia, dressing apraxia'
    ],
    clinicalPearl: 'Localization Pearl: When motor and sensory deficits affect face, arm, and leg with total equality and WITHOUT cortical signs (no aphasia, no visual field deficit, no neglect), suspect a small vessel lacunar infarct in the internal capsule.',
    difficulty: 'High-Yield Core'
  },
  {
    id: 'nx-q3',
    systemId: 'neurology',
    systemTitle: 'Neurology',
    topicId: 'stroke-tia',
    sourceExam: 'OSCE Block 3/4 2021 & Random Neuro p. 58',
    pageRef: 'p. 17 & 58',
    questionType: 'short-answer',
    question: 'How do you clinically distinguish an Upper Motor Neuron (UMN) facial weakness from a Lower Motor Neuron (LMN) facial weakness on physical examination?',
    modelAnswer: 'Upper Motor Neuron (UMN) Facial Palsy: Weakness is limited to the CONTRALATERAL LOWER face (mouth droop, flattened nasolabial fold). FOREHEAD WRINKLING AND EYE CLOSURE ARE SPARED, because the upper facial nucleus receives bilateral cortical innervation from both motor cortices. Lower Motor Neuron (LMN) Facial Palsy (Bell\'s palsy): COMPLETE IPSILATERAL HEMIFACIAL PARALYSIS affecting both upper and lower face. Forehead wrinkling is lost, inability to close the eye (lagophthalmos with Bell\'s phenomenon), and drooping of the angle of the mouth.',
    keyScoringPoints: [
      'UMN lesion: Forehead is SPARED (patient can wrinkle forehead and close eyes tightly)',
      'UMN mechanism: Bilateral cortical innervation to frontalis/upper facial muscles',
      'LMN lesion: Entire ipsilateral face is PARALYZED, INCLUDING forehead and eyelid closure',
      'LMN signs: Loss of forehead furrows, inability to bury eyelashes, Bell\'s phenomenon (eyeball rolls upward on attempted closure)',
      'UMN lesion is located in contralateral motor cortex or internal capsule (stroke); LMN lesion is at the facial nerve nucleus or peripheral nerve (Bell palsy)'
    ],
    clinicalPearl: 'Clinical Rule: If a patient with a facial droop CAN wrinkle their forehead normally, it is an Upper Motor Neuron lesion—think acute stroke or intracranial mass!',
    difficulty: 'High-Yield Core'
  },
  {
    id: 'nx-q4',
    systemId: 'neurology',
    systemTitle: 'Neurology',
    topicId: 'meningitis-csf',
    sourceExam: 'Random Neuro Questions p. 58, Q9 & Block 3/4 2021',
    pageRef: 'p. 18 & 58',
    questionType: 'staging-criteria',
    question: 'Complete the Cerebrospinal Fluid (CSF) analysis comparison table for: (a) Acute Bacterial Meningitis, (b) Viral / Aseptic Meningitis, and (c) Tuberculous (TB) Meningitis.',
    modelAnswer: 'Bacterial Meningitis: Turbid / purulent appearance; Neutrophils markedly elevated (>1000 cells/µL); Protein high (>1.0–2.2 g/L); Glucose profoundly reduced (CSF:serum ratio < 0.4, absolute glucose < 2.0 mmol/L). Viral Meningitis: Clear / slightly opalescent appearance; Lymphocytes mildly elevated (50–500 cells/µL); Protein normal or mildly elevated (0.5–1.0 g/L); Glucose normal (CSF:serum ratio > 0.6). TB Meningitis: Straw-colored / xanthochromic, often forms a "fibrin spider-web clot" on standing; Lymphocytes markedly elevated (100–500 cells/µL, occasionally mixed early); Protein extremely high (>1.5–5.0 g/L); Glucose profoundly low (CSF:serum ratio < 0.3).',
    keyScoringPoints: [
      'Bacterial: Turbid, Neutrophil predominant (>80%), High protein, Markedly low glucose',
      'Viral: Clear, Lymphocyte predominant, Normal or mildly high protein, Normal glucose',
      'TB: Straw/xanthochromic + fibrin clot, Lymphocytic, Very high protein (>1.5-5.0 g/L), Very low glucose',
      'Cryptococcal in HIV: Clear to cloudy, variable opening pressure markedly elevated (>200-250 mm H2O), positive Cryptococcal Antigen (CrAg) / India Ink'
    ],
    clinicalPearl: 'Diagnostic Pearl: An extremely elevated CSF protein (>2.0 g/L) with very low glucose (<2.0 mmol/L) and lymphocytic pleocytosis in a South African setting is classic for Tuberculous Meningitis.',
    difficulty: 'High-Yield Core'
  },
  {
    id: 'nx-q5',
    systemId: 'neurology',
    systemTitle: 'Neurology',
    topicId: 'meningitis-csf',
    sourceExam: 'Random Neuro Questions p. 58, Q8 & Scope',
    pageRef: 'p. 58',
    questionType: 'short-answer',
    question: 'List five clinical contraindications to performing an immediate Lumbar Puncture in a patient with suspected meningitis.',
    modelAnswer: 'Immediate Lumbar Puncture is contraindicated in: (1) Signs of raised intracranial pressure or space-occupying lesion (papilloedema, altered consciousness GCS < 12); (2) Focal neurological deficits (unequal pupils, hemiparesis, conjugate gaze deviation); (3) Ongoing or recent seizures (within 30 minutes); (4) Coagulopathy or severe bleeding diathesis (thrombocytopenia < 50x10^9/L, INR > 1.5, or active anticoagulant therapy); (5) Local infection at the lumbar puncture site (overlying cellulitis/abscess). If LP is delayed, take blood cultures and administer empiric IV antibiotics and dexamethasone immediately.',
    keyScoringPoints: [
      'Papilloedema (fundoscopy)',
      'Focal neurological signs',
      'Depressed conscious level (GCS < 12)',
      'Severe coagulopathy or thrombocytopenia (<50k)',
      'Local skin sepsis over puncture site',
      'CRITICAL: Never delay empiric IV antibiotics while arranging neuroimaging (CT brain)'
    ],
    clinicalPearl: 'Safety Rule: If any contraindication exists, take blood cultures immediately, start intravenous ceftriaxone + vancomycin + dexamethasone, and then send the patient for emergency non-contrast CT brain. Never leave bacterial meningitis untreated for hours waiting for a CT scanner!',
    difficulty: 'Examiner Favourite'
  },
  {
    id: 'nx-q6',
    systemId: 'neurology',
    systemTitle: 'Neurology',
    topicId: 'delirium-dementia-myasthenia',
    sourceExam: 'Random Neuro Questions p. 58, Q18–19',
    pageRef: 'p. 58',
    questionType: 'short-answer',
    question: 'Describe three physical examination signs of fatigable weakness in Myasthenia Gravis, and name the two definitive serum autoantibodies.',
    modelAnswer: 'Examination Signs of Fatigability: (1) Ptosis worsening during sustained upward gaze for 60 seconds (Simpson test); (2) "Curtain sign" — manually elevating one droopy eyelid worsens the ptosis in the contralateral eye (due to Hering\'s law of equal motor innervation); (3) "Peek sign" — during gentle eye closure, the palpebral fissure slowly widens revealing sclera due to orbicularis oculi muscle fatigue; (4) Counting test — progressive vocal dysarthria and nasal twang when counting aloud to 50. Definitive Serum Autoantibodies: (1) Anti-Acetylcholine Receptor (Anti-AChR) antibodies (positive in 85% of generalized cases); (2) Anti-Muscle-Specific Tyrosine Kinase (Anti-MuSK) antibodies (positive in 40–50% of AChR-negative patients).',
    keyScoringPoints: [
      'Fatigable ptosis on sustained upward gaze for 60 seconds',
      'Curtain sign (Hering\'s law: elevating one eyelid drops the opposite lid)',
      'Peek sign (orbicularis oculi fatigue)',
      'Speech fatiguability (counting to 50)',
      'Autoantibodies: Anti-AChR (Acetylcholine receptor) antibodies',
      'Autoantibodies: Anti-MuSK (Muscle-specific kinase) antibodies'
    ],
    clinicalPearl: 'Radiological Pearl: Every newly diagnosed myasthenia gravis patient requires a contrast CT chest to screen for a Thymoma (present in 10-15% of patients) or thymic hyperplasia.',
    difficulty: 'High-Yield Core'
  },
  {
    id: 'nx-q7',
    systemId: 'neurology',
    systemTitle: 'Neurology',
    topicId: 'nx-seizures-epilepsy',
    sourceExam: 'Random Neuro Questions p. 58, Q15–17 & Scope',
    pageRef: 'p. 58',
    questionType: 'short-answer',
    question: 'State the stepwise pharmacological emergency protocol for Status Epilepticus (generalized convulsive seizure lasting >=5 minutes).',
    modelAnswer: 'Stage 1 (0–5 minutes): Protect airway, high-flow oxygen, check bedside capillary glucose (give IV 50% dextrose if hypoglycaemic), obtain IV access. Stage 2 (5–10 minutes - First-line Benzodiazepine): IV Lorazepam 4 mg (0.1 mg/kg) or IV Diazepam 10 mg slow push (repeated once at 10 minutes if seizure persists; or IM Midazolam 10 mg if no IV access). Stage 3 (10–30 minutes - Second-line IV Antiepileptic): IV Sodium Valproate (40 mg/kg over 10 min) OR IV Levetiracetam (60 mg/kg over 10 min) OR IV Phenytoin (20 mg/kg at max 50 mg/min with cardiac monitoring). Stage 4 (>30–60 minutes - Refractory Status): General anesthesia and endotracheal intubation in ICU with continuous IV infusion of Propofol, Midazolam, or Thiopental.',
    keyScoringPoints: [
      'Immediate: ABC, high-flow oxygen, bedside glucose check (rule out hypoglycaemia)',
      'First-line (at 5 min): IV Diazepam 10 mg or IV Lorazepam 4 mg (or IM Midazolam 10 mg)',
      'Second-line (at 10-20 min): IV Sodium Valproate (40 mg/kg) or IV Levetiracetam or IV Phenytoin',
      'Refractory (>30 min): ICU transfer, endotracheal intubation, continuous IV Propofol/Midazolam'
    ],
    clinicalPearl: 'Phenytoin Warning: IV Phenytoin cannot be infused faster than 50 mg/minute and must only be mixed in 0.9% Normal Saline (it precipitates in dextrose). Rapid infusion triggers severe hypotension and cardiac arrhythmias.',
    difficulty: 'Examiner Favourite'
  },

  // ==========================================
  // 5. RHEUMATOLOGY & MUSCULOSKELETAL (Joints)
  // ==========================================
  {
    id: 'rh-q1',
    systemId: 'rheumatology',
    systemTitle: 'Rheumatology',
    topicId: 'rheumatology-arthritis',
    sourceExam: 'Rheumatology Case Bank p. 20–22 & Random Rheum p. 59',
    pageRef: 'p. 20 & 59',
    questionType: 'short-answer',
    question: 'State the characteristic pattern of joint involvement in Rheumatoid Arthritis (RA), including the joints characteristically spared, and list four classic chronic hand deformities.',
    modelAnswer: 'Joint Pattern: Symmetrical, inflammatory polyarthritis predominantly affecting the small joints of the hands and feet: Metacarpophalangeal (MCP) joints, Proximal Interphalangeal (PIP) joints, and Wrists. Characteristically SPARES the Distal Interphalangeal (DIP) joints and thoracolumbar spine (except atlantoaxial C1-C2 subluxation). Classic Hand Deformities: (1) Ulnar deviation of fingers at the MCP joints; (2) Swan-neck deformity (hyperextension of PIP with flexion of DIP); (3) Boutonnière deformity (flexion of PIP with hyperextension of DIP); (4) Z-deformity of the thumb (hyperextension of IP with flexion of MCP).',
    keyScoringPoints: [
      'Pattern: Symmetrical inflammatory polyarthritis of small joints (MCP, PIP, wrists)',
      'Spared joints: Distal Interphalangeal (DIP) joints (involved in OA and psoriatic arthritis)',
      'Deformities: Ulnar deviation at MCP joints',
      'Deformities: Swan-neck deformity (PIP hyperextension, DIP flexion)',
      'Deformities: Boutonnière deformity (PIP flexion, DIP hyperextension)',
      'Deformities: Z-thumb deformity'
    ],
    clinicalPearl: 'Diagnostic Contrast: Morning joint stiffness lasting >60 minutes that improves with movement signifies inflammatory arthritis (RA). Morning stiffness lasting <30 minutes that worsens with joint use signifies degenerative disease (Osteoarthritis).',
    difficulty: 'High-Yield Core'
  },
  {
    id: 'rh-q2',
    systemId: 'rheumatology',
    systemTitle: 'Rheumatology',
    topicId: 'rheumatology-arthritis',
    sourceExam: 'Random Rheum Questions p. 59, Q7',
    pageRef: 'p. 59',
    questionType: 'short-answer',
    question: 'List the four cardinal radiological features of Osteoarthritis seen on plain plain radiographs (mnemonic: "LOSS").',
    modelAnswer: 'The mnemonic "LOSS" summarizes the four cardinal X-ray features of Osteoarthritis: L: Loss of joint space (characteristically asymmetrical joint space narrowing); O: Osteophytes (marginal bone spurs forming at joint margins); S: Subchondral sclerosis (dense, white sclerotic bone beneath the thinned cartilage due to mechanical stress); S: Subchondral cysts (radiolucent geode cysts forming beneath the articular surface).',
    keyScoringPoints: [
      'L: Loss of joint space (asymmetrical)',
      'O: Osteophytes (marginal bony projections)',
      'S: Subchondral sclerosis (increased bone density)',
      'S: Subchondral cysts (geodes)',
      'Contrasting with RA: RA causes symmetrical joint space loss, periarticular osteopenia, and marginal bone erosions'
    ],
    clinicalPearl: 'Radiological Distinction: Osteoarthritis produces sclerosis and osteophytes (bone formation). Rheumatoid arthritis produces osteopenia and marginal erosions (bone destruction).',
    difficulty: 'High-Yield Core'
  },
  {
    id: 'rh-q3',
    systemId: 'rheumatology',
    systemTitle: 'Rheumatology',
    topicId: 'rheumatology-arthritis',
    sourceExam: 'Random Rheum Questions p. 59, Q8–10',
    pageRef: 'p. 59',
    questionType: 'short-answer',
    question: 'Describe the synovial fluid analysis findings under polarized light microscopy in Gout, and state the rules regarding Allopurinol initiation.',
    modelAnswer: 'Polarized Light Microscopy: Monosodium urate (MSU) crystals that appear Needle-shaped with Strongly Negative Birefringence (crystals align yellow when parallel to the compensator axis, and blue when perpendicular). Allopurinol Initiation Rules: (1) NEVER initiate or dose-escalate Allopurinol during an acute gout flare (fluctuations in serum urate mobilize crystal stores, prolonging and worsening the flare); (2) Wait 2 to 4 weeks after the acute inflammatory flare has completely resolved before starting Allopurinol; (3) Always co-prescribe low-dose Colchicine (0.5 mg daily) or NSAIDs for 3 to 6 months as flare prophylaxis during urate-lowering titration; (4) If a patient is already taking Allopurinol when an acute flare occurs, DO NOT stop it.',
    keyScoringPoints: [
      'Microscopy: Needle-shaped crystals',
      'Optics: Strongly negatively birefringent (yellow under parallel polarized light)',
      'Initiation rule: Do not start Allopurinol during an acute flare',
      'Timing: Start 2–4 weeks after complete resolution of acute inflammation',
      'Prophylaxis: Mandatory co-prescription of low-dose colchicine or NSAID cover',
      'Continuation rule: If already established on allopurinol, continue current dose'
    ],
    clinicalPearl: 'Pseudogout Contrast: Calcium Pyrophosphate Dihydrate (CPPD / Pseudogout) crystals are Rhomboid-shaped with Weakly Positive Birefringence (blue when parallel to the compensator).',
    difficulty: 'Examiner Favourite'
  },
  {
    id: 'rh-q4',
    systemId: 'rheumatology',
    systemTitle: 'Rheumatology',
    topicId: 'rheumatology-arthritis',
    sourceExam: 'Random Rheum Questions p. 59, Q11–13',
    pageRef: 'p. 21 & 59',
    questionType: 'short-answer',
    question: 'List five clinical manifestations of Systemic Lupus Erythematosus (SLE), and name the screening autoantibody versus the two specific autoantibodies.',
    modelAnswer: 'Clinical Manifestations: (1) Malar "butterfly" rash over cheeks and bridge of nose (characteristically sparing the nasolabial folds); (2) Photosensitive dermatitis; (3) Painless oral or nasopharyngeal mucosal ulcers; (4) Non-erosive polyarthritis (migratory, non-deforming); (5) Serositis (pleuritis or pericarditis); (6) Lupus nephritis (proteinuria >0.5 g/day or cellular RBC casts). Autoantibodies: Screening test (>98% sensitive): Antinuclear Antibodies (ANA). Specific confirmatory tests: (1) Anti-dsDNA (highly specific; titers correlate directly with disease activity and lupus nephritis); (2) Anti-Smith (Anti-Sm) antibodies (most specific for SLE).',
    keyScoringPoints: [
      'Clinical: Malar rash (spares nasolabial folds)',
      'Clinical: Photosensitivity and non-scarring alopecia',
      'Clinical: Painless oral/nasal ulcers',
      'Clinical: Non-erosive inflammatory arthritis',
      'Clinical: Renal disease (proteinuria, glomerulonephritis)',
      'Screening autoantibody: ANA (sensitive, low specificity)',
      'Specific autoantibodies: Anti-dsDNA (monitors activity/nephritis) and Anti-Smith (anti-Sm)'
    ],
    clinicalPearl: 'Drug-Induced Lupus: Presents with arthritis, fever, serositis after drugs like Hydralazine, Isoniazid, or Procainamide. Characterized by Anti-Histone antibodies (>95%) and absence of renal/CNS involvement.',
    difficulty: 'High-Yield Core'
  },

  // ==========================================
  // 6. NEPHROLOGY & ENDOCRINOLOGY (Kidneys & Hormones)
  // ==========================================
  {
    id: 're-q1',
    systemId: 'renal-endocrine',
    systemTitle: 'Nephrology & Endocrinology',
    topicId: 'ckd-kdigo',
    sourceExam: 'Random Renal Questions p. 60, Q1',
    pageRef: 'p. 60',
    questionType: 'staging-criteria',
    question: 'State the KDIGO criteria for staging Acute Kidney Injury (AKI) based on serum creatinine rise and urine output.',
    modelAnswer: 'KDIGO AKI Staging: Stage 1: Serum creatinine 1.5–1.9 times baseline OR absolute rise >= 26.5 µmol/L (>=0.3 mg/dL) within 48h; Urine output < 0.5 mL/kg/h for 6–12 hours. Stage 2: Serum creatinine 2.0–2.9 times baseline; Urine output < 0.5 mL/kg/h for >= 12 hours. Stage 3: Serum creatinine 3.0 times baseline OR rise to >= 353 µmol/L (>=4.0 mg/dL) OR initiation of Renal Replacement Therapy (dialysis); Urine output < 0.3 mL/kg/h for >= 24 hours OR anuria for >= 12 hours.',
    keyScoringPoints: [
      'Stage 1: Creatinine 1.5-1.9x baseline OR rise >=26.5 µmol/L; Urine <0.5 mL/kg/h for 6-12h',
      'Stage 2: Creatinine 2.0-2.9x baseline; Urine <0.5 mL/kg/h for >=12h',
      'Stage 3: Creatinine 3.0x baseline OR >=353 µmol/L OR dialysis; Urine <0.3 mL/kg/h for >=24h or anuria >=12h',
      'Etiology: Pre-renal (hypovolaemia, sepsis) vs Intrinsic (ATN, glomerulonephritis, drugs) vs Post-renal (obstruction)'
    ],
    clinicalPearl: 'Ultrasound Pearl: In acute renal failure, renal ultrasound shows normal or enlarged kidneys with preserved cortical thickness. In chronic kidney disease (CKD), ultrasound shows small, shrunken (<9 cm), echogenic kidneys with cortical thinning (except diabetic nephropathy, amyloidosis, and HIVAN where kidneys remain normal/large).',
    difficulty: 'Examiner Favourite'
  },
  {
    id: 're-q2',
    systemId: 'renal-endocrine',
    systemTitle: 'Nephrology & Endocrinology',
    topicId: 'ckd-kdigo',
    sourceExam: 'Random Renal Questions p. 60, Q7–9',
    pageRef: 'p. 60',
    questionType: 'short-answer',
    question: 'Differentiate between Nephrotic Syndrome and Nephritic Syndrome in terms of clinical presentation, cardinal urinalysis findings, and diagnostic triads.',
    modelAnswer: 'Nephrotic Syndrome (Mnemonic "PHO"): Podocyte effacement with severe glomerular permeability leak. Triad: (1) Massive Proteinuria (> 3.5 g / 24 hours or urine protein:creatinine ratio >300 mg/mmol); (2) Hypoalbuminaemia (< 30 g/L); (3) Generalized Oedema (periorbital, dependent, ascites). Accompanied by Hyperlipidaemia and frothy urine. Nephritic Syndrome (Mnemonic "CHOC"): Inflammatory glomerular destruction with capillary wall breakdown. Tetrad: (1) Cola-colored urine (Gross or microscopic Haematuria with dysmorphic RBCs and RBC casts); (2) Hypertension; (3) Oliguria; (4) Cr rise / mild-to-moderate proteinuria (<3.5 g/24h).',
    keyScoringPoints: [
      'Nephrotic triad: Massive proteinuria (>3.5g/24h) + Hypoalbuminaemia (<30g/L) + Generalized edema',
      'Nephrotic complications: Hypercoagulability (loss of antithrombin III) and infection (loss of immunoglobulins)',
      'Nephritic tetrad: Haematuria (dysmorphic RBCs and RBC casts) + Hypertension + Oliguria + Azotemia',
      'Nephrotic causes: Minimal change disease, FSGS, Membranous nephropathy, Diabetic nephropathy',
      'Nephritic causes: Post-streptococcal GN, IgA nephropathy, Lupus nephritis, ANCA vasculitis'
    ],
    clinicalPearl: 'Urinalysis Pearl: Finding Red Blood Cell (RBC) Casts on urine microscopy is pathognomonic of glomerulonephritis (nephritic syndrome). Podocyte injury in nephrotic syndrome produces fatty casts and "Maltese cross" lipid droplets under polarized light.',
    difficulty: 'High-Yield Core'
  },
  {
    id: 're-q3',
    systemId: 'renal-endocrine',
    systemTitle: 'Nephrology & Endocrinology',
    topicId: 't2dm-hypoglycaemia',
    sourceExam: 'Random Endocrine Questions p. 61, Q5–7 & Scope',
    pageRef: 'p. 61',
    questionType: 'vignette',
    question: 'A 24-year-old female with Type 1 Diabetes presents drowsy with Kussmaul deep breathing, nausea, and diffuse abdominal pain. Capillary glucose is 28 mmol/L, venous pH is 7.15, serum bicarbonate is 11 mmol/L, and urine ketones are 4+. What is the diagnosis, and what is the vital potassium safety rule before initiating insulin infusion?',
    modelAnswer: 'Diagnosis: Diabetic Ketoacidosis (DKA). Potassium Safety Rule: Serum potassium MUST be checked before initiating intravenous insulin infusion. If serum potassium is < 3.5 mmol/L, HOLD insulin infusion and administer aggressive intravenous potassium replacement (e.g. 40 mmol KCl per litre of fluid) until K+ rises >= 3.5 mmol/L. Insulin drives potassium rapidly into cells; administering insulin to a hypokalaemic DKA patient precipitates fatal ventricular arrhythmias or respiratory muscle arrest. If K+ is 3.5–5.0 mmol/L, start insulin alongside 20–40 mmol KCl/L fluid.',
    keyScoringPoints: [
      'Diagnosis: Diabetic Ketoacidosis (DKA triad: Hyperglycaemia + Ketonaemia + Metabolic Acidosis)',
      'Mandatory Safety Rule: Check potassium BEFORE administering insulin',
      'If K+ < 3.5 mmol/L: Withhold insulin; give IV KCl replacement until K >=3.5',
      'Pathophysiology: Insulin shifts potassium intracellularly via Na+/K+-ATPase activation',
      'Fluid resuscitation: 0.9% Normal Saline 1L in 1st hour, followed by titrated saline and dextrose 5% once glucose <14 mmol/L'
    ],
    clinicalPearl: 'Dangerous Trap: Total body potassium in DKA is ALWAYS severely depleted due to osmotic diuresis, even if baseline serum potassium appears normal or elevated due to acidemic extracellular shift.',
    difficulty: 'Examiner Favourite'
  },
  {
    id: 're-q4',
    systemId: 'renal-endocrine',
    systemTitle: 'Nephrology & Endocrinology',
    topicId: 'endocrine-disorders',
    sourceExam: 'Random Endocrine Questions p. 61, Q8–11 & p. 9, Q4',
    pageRef: 'p. 9 & 61',
    questionType: 'short-answer',
    question: 'Contrast the definitive pharmacotherapy of Graves\' Disease (hyperthyroidism) versus Hashimoto\'s Thyroiditis (primary hypothyroidism), highlighting the dangerous mistake of confusing them.',
    modelAnswer: 'Graves\' Disease (Hyperthyroidism): Caused by stimulating TSH-receptor autoantibodies. Treatment: (1) Antithyroid drugs / Thionamides (Carbimazole 20–40 mg daily or Propylthiouracil PTU in 1st trimester pregnancy) to inhibit thyroid peroxidase hormone synthesis; (2) Beta-blockers (Propranolol) for immediate sympathetic symptom control; (3) Definitive therapy: Radioactive Iodine (I-131) or Subtotal Thyroidectomy. Hashimoto\'s Disease (Hypothyroidism): Caused by autoimmune destruction of thyroid parenchyma with anti-TPO antibodies. Treatment: Levothyroxine (synthetic T4) replacement therapy at 1.6 µg/kg/day taken on an empty stomach. Dangerous Mistake: Prescribing Levothyroxine to a Graves\' disease patient would massively aggravate thyrotoxicosis and precipitate a life-threatening Thyroid Storm (fever, tachyarrhythmias, heart failure, delirium)!',
    keyScoringPoints: [
      'Graves (Hyperthyroid): Thionamides (Carbimazole / Propylthiouracil) to block thyroid synthesis',
      'Graves symptom control: Beta-blockers (Propranolol) to block peripheral sympathetic effects',
      'Graves definitive: Radioiodine (I-131) ablation or surgery',
      'Hypothyroidism: Levothyroxine (T4) replacement at 1.6 µg/kg/day',
      'Dangerous error: Giving Levothyroxine to a thyrotoxic patient triggers fatal Thyroid Storm'
    ],
    clinicalPearl: 'Pharmacology Pearl: Patients starting Carbimazole must be warned to immediately stop the drug and obtain an urgent full blood count if they develop a sore throat or mouth ulcers, due to the risk of life-threatening Agranulocytosis (0.2–0.5%).',
    difficulty: 'Examiner Favourite'
  },
  {
    id: 're-q5',
    systemId: 'renal-endocrine',
    systemTitle: 'Nephrology & Endocrinology',
    topicId: 'endocrine-disorders',
    sourceExam: 'Random Endocrine Questions p. 61, Q12–13',
    pageRef: 'p. 61',
    questionType: 'short-answer',
    question: 'Contrast the clinical features and electrolyte derangements of Cushing\'s Syndrome versus Addison\'s Disease.',
    modelAnswer: 'Cushing\'s Syndrome (Hypercortisolaemia): Clinical: Central truncal obesity, moon face, buffalo hump, violaceous wide abdominal striae, proximal muscle weakness, easy bruising, hypertension. Electrolytes: Hypokalaemic metabolic alkalosis (cortisol cross-reacts with mineralocorticoid receptors driving K+ and H+ excretion) and Hyperglycaemia. Addison\'s Disease (Primary Adrenal Insufficiency): Clinical: Chronic fatigue, anorexia, weight loss, postural hypotension, Generalized hyperpigmentation of skin and mucosal creases/buccal mucosa (due to elevated POMC/ACTH stimulating melanocytes). Electrolytes: Hyponatraemia, Hyperkalaemia, and Non-anion gap metabolic acidosis (due to lack of aldosterone).',
    keyScoringPoints: [
      'Cushing: Central obesity, moon facies, purple striae, proximal weakness, hypertension',
      'Cushing biochemistry: Hypokalaemia, metabolic alkalosis, hyperglycaemia',
      'Addison: Hyperpigmentation of palmar creases and buccal mucosa, postural hypotension, weight loss',
      'Addison biochemistry: Hyponatraemia, Hyperkalaemia, metabolic acidosis',
      'Addison diagnosis: Short Synacthen (cosyntropin) stimulation test (failure of cortisol to double/rise >500 nmol/L)'
    ],
    clinicalPearl: 'Adrenal Crisis Warning: Addisonian crisis presents with refractory hypotension, shock, and abdominal pain. Treat immediately with IV Hydrocortisone 100 mg stat and 0.9% Normal Saline with 5% Dextrose. Never wait for ACTH/cortisol lab results!',
    difficulty: 'High-Yield Core'
  },

  // ==========================================
  // 7. INFECTIOUS DISEASES & HAEMATOLOGY (Infections & Blood)
  // ==========================================
  {
    id: 'id-q1',
    systemId: 'hiv-infectious',
    systemTitle: 'Infectious Diseases & Haematology',
    topicId: 'sa-hiv-protocol',
    sourceExam: 'OSCE Block 1/2 2022 p. 3, Q1–4 & Random ID p. 61',
    pageRef: 'p. 3 & 61',
    questionType: 'vignette',
    question: 'A 34-year-old emaciated male presents with 15 kg unintentional weight loss (>15% of body weight) and extensive scrapable white plaques on his tongue and buccal mucosa. (a) Under WHO staging, which stage is this patient? (b) Does he qualify to start ART? (c) What is the preferred first-line fixed-dose combination ART regimen in South Africa?',
    modelAnswer: '(a) WHO Clinical Stage 3 (due to unexplained severe weight loss >10% of body weight AND persistent oral candidiasis/thrush). (b) Yes, under the Universal Test-and-Treat policy, all individuals diagnosed with HIV qualify to initiate Antiretroviral Therapy (ART) immediately, irrespective of CD4 cell count or clinical staging. (c) First-Line Fixed-Dose Combination: TLD — Tenofovir Disoproxil Fumarate (TDF 300 mg) + Lamivudine (3TC 300 mg) + Dolutegravir (DTG 50 mg) taken as one single tablet once daily.',
    keyScoringPoints: [
      'WHO Stage 3: Severe weight loss (>10%) + oral candidiasis',
      'Universal ART eligibility: Start irrespective of CD4 count or clinical stage',
      'Preferred first-line: TLD (Tenofovir + Lamivudine + Dolutegravir)',
      'Advantages of Dolutegravir: High genetic barrier to resistance, rapid viral suppression, minimal neuropsychiatric side effects compared to Efavirenz'
    ],
    clinicalPearl: 'Drug Interaction Alert: If a patient on TLD is treated for Tuberculosis with Rifampicin, rifampicin induces UGT1A1/CYP3A4 and halves dolutegravir levels. You MUST add an extra Dolutegravir 50 mg tablet 12 hours after the daily TLD dose (DTG 50 mg BD)!',
    difficulty: 'High-Yield Core'
  },
  {
    id: 'id-q2',
    systemId: 'hiv-infectious',
    systemTitle: 'Infectious Diseases & Haematology',
    topicId: 'opportunistic-infections',
    sourceExam: 'OSCE Block 1/2 2022 p. 13, Q2 & Random ID p. 61',
    pageRef: 'p. 13 & 61',
    questionType: 'short-answer',
    question: 'What is the standard induction therapy for Cryptococcal Meningitis in an HIV-positive patient, and why must ART initiation be delayed?',
    modelAnswer: 'Standard Induction Therapy: Intravenous Amphotericin B deoxycholate (1.0 mg/kg/day) PLUS oral Flucytosine (100 mg/kg/day in 4 divided doses) for 7 days (or high-dose oral Fluconazole 1200 mg/day for 2 weeks if flucytosine is unavailable). Timing of ART Initiation: ART must be DELAYED for 4 to 6 weeks following initiation of antifungal therapy. Starting ART early triggers severe, fatal Cryptococcal Immune Reconstitution Inflammatory Syndrome (IRIS) with cerebral herniation.',
    keyScoringPoints: [
      'Induction: IV Amphotericin B + oral Flucytosine for 1 week',
      'Consolidation: Oral Fluconazole 800 mg daily for 8 weeks',
      'Maintenance / Secondary prophylaxis: Fluconazole 200 mg daily until CD4 >200 for >6 months',
      'ART Delay: Delay ART for 4–6 weeks after starting antifungal therapy',
      'Reason for delay: Prevents life-threatening intracranial IRIS and cerebral herniation'
    ],
    clinicalPearl: 'Diagnostic Contrast: Co-trimoxazole (Bactrim) treats Pneumocystis jirovecii pneumonia (PCP) and Cerebral Toxoplasmosis, but has ZERO activity against Cryptococcus neoformans. Never confuse them!',
    difficulty: 'Examiner Favourite'
  },
  {
    id: 'id-q3',
    systemId: 'hiv-infectious',
    systemTitle: 'Infectious Diseases & Haematology',
    topicId: 'tb-diagnosis-treatment',
    sourceExam: 'Random ID Questions p. 61, Q1–3 & Scope',
    pageRef: 'p. 61',
    questionType: 'short-answer',
    question: 'State the classic clinical symptom triad of Pulmonary Tuberculosis, the primary molecular diagnostic test, and the standard intensive-phase treatment regimen in South Africa.',
    modelAnswer: 'Symptom Triad: (1) Persistent chronic cough lasting >= 2 weeks; (2) Drenching night sweats; (3) Unintentional weight loss and anorexia (often with low-grade fever). Primary Molecular Diagnostic Test: GeneXpert MTB/RIF Ultra (nucleic acid amplification test that detects Mycobacterium tuberculosis DNA and simultaneously screens for Rifampicin resistance in <2 hours). Standard Intensive-Phase Regimen: Rifafour (RHZE: Rifampicin, Isoniazid, Pyrazinamide, Ethambutol) daily for 2 months, co-prescribed with Pyridoxine (Vitamin B6 25 mg daily) to prevent isoniazid peripheral neuropathy.',
    keyScoringPoints: [
      'Triad: Chronic cough (>2 weeks) + Night sweats + Weight loss',
      'Test: GeneXpert MTB/RIF Ultra on sputum',
      'Intensive phase: 2 months of RHZE (Rifampicin, Isoniazid, Pyrazinamide, Ethambutol)',
      'Continuation phase: 4 months of RH (Rifampicin + Isoniazid) — total 6 months',
      'Pyridoxine (Vitamin B6) co-prescription prevents INH-induced peripheral neuropathy'
    ],
    clinicalPearl: 'Monitoring Trap: GeneXpert detects both live and dead mycobacterial DNA and can remain positive for months after microbiological cure. NEVER use GeneXpert to monitor response to TB treatment—use sputum smear microscopy and culture at months 2, 4, and 6.',
    difficulty: 'High-Yield Core'
  },
  {
    id: 'id-q4',
    systemId: 'hiv-infectious',
    systemTitle: 'Infectious Diseases & Haematology',
    topicId: 'haem-malignancy-bleeding',
    sourceExam: 'Random Haem Questions p. 59, Q1–3',
    pageRef: 'p. 59',
    questionType: 'short-answer',
    question: 'Describe the typical Full Blood Count (FBC) and Iron Study profile in Iron Deficiency Anaemia, and state the definitive oral replacement dose.',
    modelAnswer: 'Full Blood Count (FBC): Microcytic, hypochromic anaemia: Low Haemoglobin, Low MCV (<80 fL), Low MCH (<27 pg), and Elevated Red Cell Distribution Width (RDW >15%). Blood smear shows anisopoikilocytosis and pencil cells. Iron Studies: (1) Serum Ferritin markedly reduced (<30 µg/L, pathognomonic); (2) Serum Iron decreased; (3) Total Iron Binding Capacity (TIBC) elevated; (4) Transferrin Saturation (TSAT) low (<16%). Definitive Oral Replacement: Oral Ferrous Sulfate 200 mg (supplying 65 mg elemental iron) daily or every other day, taken with vitamin C on an empty stomach.',
    keyScoringPoints: [
      'FBC: Microcytic (MCV <80), Hypochromic (low MCH), Elevated RDW',
      'Ferritin: Low (<30 µg/L) — most sensitive and specific biomarker',
      'Transferrin / TIBC: Elevated TIBC with low transferrin saturation (<16%)',
      'Definitive treatment: Ferrous sulfate 200 mg daily or alternate days for 3-6 months to replenish stores',
      'Investigation: Mandatory endoscopy in adult men and postmenopausal women to rule out occult GI malignancy'
    ],
    clinicalPearl: 'Endoscopy Rule: Iron deficiency anaemia in an adult male or post-menopausal female is gastrointestinal cancer (colorectal or gastric) until proven otherwise by bidirectional endoscopy (colonoscopy and gastroscopy).',
    difficulty: 'High-Yield Core'
  },
  {
    id: 'id-q5',
    systemId: 'hiv-infectious',
    systemTitle: 'Infectious Diseases & Haematology',
    topicId: 'haem-malignancy-bleeding',
    sourceExam: 'Random Haem Questions p. 59, Q5–7',
    pageRef: 'p. 59',
    questionType: 'short-answer',
    question: 'How do you differentiate Vitamin B12 deficiency from Folate deficiency anaemia on peripheral blood smear, and what unique neurological complication occurs in B12 deficiency?',
    modelAnswer: 'Peripheral Blood Smear: Both produce a Macrocytic Megaloblastic Anaemia (MCV > 100 fL, oval macrocytes) with Hypersegmented Neutrophils (>=5% of neutrophils with >=5 lobes, or any single neutrophil with >=6 lobes). Differentiation: Requires serum Vitamin B12 and red cell folate assays; serum methylmalonic acid (MMA) is elevated ONLY in B12 deficiency (normal in folate deficiency). Unique Neurological Complication: Subacute Combined Degeneration of the Spinal Cord (SCD), caused by demyelination of the Posterior Columns (loss of vibration and proprioception, sensory ataxia, positive Romberg test) AND Lateral Corticospinal Tracts (spastic paraparesis, hyperreflexia, positive Babinski sign) with absent ankle jerks (concomitant peripheral neuropathy).',
    keyScoringPoints: [
      'Smear: Macrocytosis (MCV >100) + Hypersegmented neutrophils (>=6 lobes)',
      'Biochemistry: Methylmalonic acid (MMA) elevated in B12 deficiency, normal in folate deficiency',
      'Neurological syndrome: Subacute Combined Degeneration of the Spinal Cord',
      'Posterior column loss (proprioception, vibration, ataxia) + Corticospinal tract signs (Babinski positive)',
      'Folate trap: Giving folic acid alone in B12 deficiency corrects anaemia but precipitates irreversible neurological damage'
    ],
    clinicalPearl: 'The Folate Trap: Never treat megaloblastic anaemia with folic acid monotherapy before verifying B12 status! Folate corrects the haematological abnormalities while allowing catastrophic, irreversible subacute combined degeneration of the spinal cord to progress.',
    difficulty: 'Examiner Favourite'
  },
  {
    id: 'id-q6',
    systemId: 'hiv-infectious',
    systemTitle: 'Infectious Diseases & Haematology',
    topicId: 'sa-hiv-protocol',
    sourceExam: 'Random ID Questions p. 61, Q8–10',
    pageRef: 'p. 61',
    questionType: 'staging-criteria',
    question: 'Describe the three stages of Syphilis (causative organism: Treponema pallidum) and the first-line antibiotic treatment for early syphilis.',
    modelAnswer: 'Stages: (1) Primary Syphilis (10–90 days post-exposure): A single, painless, indurated ulcer (Hard Chancre) with a clean base and rolled edges, accompanied by discrete, rubbery, non-tender regional lymphadenopathy; (2) Secondary Syphilis (4–10 weeks post-chancre): Disseminated systemic disease with a non-pruritic, symmetrical maculopapular copper-colored rash on trunk, PALMS, and SOLES; moist verrucous papules in intertriginous skin (Condylomata Lata); generalized lymphadenopathy; (3) Tertiary Syphilis (years/decades later): Destructive granulomatous lesions (Gummas), Cardiovascular syphilis (ascending aortic aneurysm, aortic regurgitation), and Neurosyphilis (tabes dorsalis, general paresis of the insane). First-Line Treatment: Benzathine Penicillin G 2.4 million units IM as a single dose (split into 1.2 MU into each buttock).',
    keyScoringPoints: [
      'Primary: Painless hard chancre + painless rubbery adenopathy',
      'Secondary: Maculopapular rash on palms and soles + Condylomata lata in skin folds',
      'Tertiary: Gummas + Syphilitic aortitis + Neurosyphilis (tabes dorsalis)',
      'Treatment: Benzathine Penicillin G 2.4 million units IM single dose',
      'Monitoring: Follow RPR / VDRL non-treponemal titers (4-fold decline indicates cure)'
    ],
    clinicalPearl: 'Physical Examination Pearl: A non-pruritic maculopapular rash that distinctly involves the PALMS of the hands and SOLES of the feet in a sexually active patient is secondary syphilis until proven otherwise.',
    difficulty: 'High-Yield Core'
  },

  // ==========================================
  // 8. DERMATOLOGY & SKIN DISORDERS (Skin)
  // ==========================================
  {
    id: 'dm-q1',
    systemId: 'dermatology',
    systemTitle: 'Dermatology',
    topicId: 'common-skin-hiv-derm',
    sourceExam: 'Dermatology Scope & Random Rheum/Derm p. 59',
    pageRef: 'p. 59',
    questionType: 'short-answer',
    question: 'Describe the hallmark clinical appearance of non-bullous Impetigo, the causative organisms, and the primary topical treatment.',
    modelAnswer: 'Clinical Appearance: Fragile erythematous vesicles or pustules that rapidly rupture and weep, drying into pathognomonic golden, honey-colored crusts typically situated around the nose, mouth, and exposed extremities. Causative Organisms: Staphylococcus aureus and Streptococcus pyogenes (Group A Beta-Haemolytic Streptococcus). Primary Topical Treatment: Topical Mupirocin 2% ointment applied 8-hourly for 5 days after gently soaking off crusts with warm saline. (If widespread or systemic symptoms, treat with oral flucloxacillin or cephalexin).',
    keyScoringPoints: [
      'Hallmark sign: Golden "honey-colored" crusted plaques',
      'Initial lesion: Fragile subcorneal pustules that rapidly rupture',
      'Causative organisms: Staphylococcus aureus and Streptococcus pyogenes (GAS)',
      'Topical treatment: Mupirocin 2% ointment for 5 days',
      'Complication: Post-streptococcal glomerulonephritis can follow nephritogenic Strep impetigo'
    ],
    clinicalPearl: 'Renal Connection: Post-streptococcal glomerulonephritis can follow cutaneous impetigo caused by nephritogenic Group A Strep strains. However, acute rheumatic fever follows pharyngeal infection ONLY, not skin infection.',
    difficulty: 'High-Yield Core'
  },
  {
    id: 'dm-q2',
    systemId: 'dermatology',
    systemTitle: 'Dermatology',
    topicId: 'common-skin-hiv-derm',
    sourceExam: 'Dermatology Scope & Exam Questions',
    pageRef: 'p. 25',
    questionType: 'short-answer',
    question: 'How do you clinically differentiate Erysipelas from Cellulitis on physical examination?',
    modelAnswer: 'Erysipelas: Acute infection of the upper dermis and superficial lymphatics, caused almost exclusively by Streptococcus pyogenes. Clinical examination shows a fiery red, shiny, markedly raised, indurated plaque with SHARPLY DEMARCATED, distinct borders separating normal from inflamed skin. Rapid onset with high fever and chills. Cellulitis: Deeper infection involving the deep dermis and subcutaneous fat, caused by Staphylococcus aureus and Streptococcus pyogenes. Clinical examination shows erythema, warmth, and swelling with ILL-DEFINED, diffuse, non-elevated borders that blend gradually into surrounding skin.',
    keyScoringPoints: [
      'Erysipelas: Upper dermis / superficial lymphatics; sharply demarcated raised borders',
      'Cellulitis: Deep dermis / subcutaneous fat; diffuse ill-defined borders',
      'Erysipelas pathogen: Streptococcus pyogenes (GAS)',
      'Cellulitis pathogen: S. aureus and S. pyogenes',
      'Erysipelas onset: Acute, intense fiery redness, early systemic toxaemia'
    ],
    clinicalPearl: 'Exam Tip: Sharply demarcated raised red edge on the face or lower leg = Erysipelas. Diffuse, spreading erythema with flat, poorly defined borders = Cellulitis.',
    difficulty: 'High-Yield Core'
  },
  {
    id: 'dm-q3',
    systemId: 'dermatology',
    systemTitle: 'Dermatology',
    topicId: 'common-skin-hiv-derm',
    sourceExam: 'Dermatology Scope & Exam Questions',
    pageRef: 'p. 26',
    questionType: 'short-answer',
    question: 'Describe the nocturnal symptom and pathognomonic physical finding in Scabies (Sarcoptes scabiei), and state the application instructions for Permethrin 5% cream.',
    modelAnswer: 'Nocturnal Symptom: Intense, intractable generalized pruritus (itching) that characteristically worsens markedly at night and in warm environments. Pathognomonic Finding: Sinuous, thread-like burrows (2–10 mm) with a tiny dark dot (the female mite) at the end, predominantly located in the interdigital web spaces of fingers, flexor wrists, axillae, umbilicus, and genitalia. Permethrin 5% Application: Apply Permethrin 5% cream meticulously from the neck down over the entire body (including under nails, between toes, web spaces, and genitalia). Leave on for 8 to 14 hours (overnight) before washing off. Repeat the application 7 days later to kill newly hatched larvae. All household members and sexual contacts must be treated simultaneously.',
    keyScoringPoints: [
      'Symptom: Severe nocturnal pruritus (delayed type IV hypersensitivity to mite/ova/faeces)',
      'Pathognomonic sign: Burrows in interdigital web spaces and wrist flexures',
      'Genital signs: Pruritic erythematous papules/nodules on penis and scrotum',
      'Treatment: Permethrin 5% cream applied from neck to toes overnight (8-14 hours)',
      'Repeat: Mandatory repeat application at 7 days to eliminate hatched eggs',
      'Contacts: Treat all close contacts simultaneously; wash linens in hot water'
    ],
    clinicalPearl: 'HIV Presentation: In advanced HIV/immunosuppression, scabies presents as Norwegian (Crusted) Scabies—hyperkeratotic psoriasiform scaly crusts loaded with millions of mites, with minimal pruritus due to diminished cellular immunity.',
    difficulty: 'Examiner Favourite'
  },
  {
    id: 'dm-q4',
    systemId: 'dermatology',
    systemTitle: 'Dermatology',
    topicId: 'common-skin-hiv-derm',
    sourceExam: 'Dermatology Scope & Exam Questions',
    pageRef: 'p. 25',
    questionType: 'short-answer',
    question: 'Why is systemic oral corticosteroid therapy strictly contraindicated in chronic plaque Psoriasis?',
    modelAnswer: 'Systemic oral corticosteroids (e.g. oral prednisone) must NEVER be prescribed for plaque psoriasis. While systemic steroids produce rapid temporary clearance of plaques, tapering or stopping the steroid triggers a life-threatening rebound flare of Generalized Pustular Psoriasis (von Zumbusch type) or Erythroderma, associated with severe sepsis, hypothermia, high-output cardiac failure, and significant mortality.',
    keyScoringPoints: [
      'Strict contraindication: Systemic oral corticosteroids',
      'Fatal risk: Rebound transition into Generalized Pustular Psoriasis (von Zumbusch)',
      'Fatal risk: Psoriatic erythroderma (>90% body surface area shedding)',
      'Appropriate therapy: Topical corticosteroids/calcipotriol, phototherapy, Methotrexate, or biologics (TNF/IL-17/IL-23 inhibitors)'
    ],
    clinicalPearl: 'Examination Signs: Auspitz sign (pinpoint bleeding when scale is scraped off thinned suprapapillary dermis) and Koebner phenomenon (psoriatic lesions developing along lines of skin trauma).',
    difficulty: 'Examiner Favourite'
  },
  {
    id: 'dm-q5',
    systemId: 'dermatology',
    systemTitle: 'Dermatology',
    topicId: 'skin-emergencies',
    sourceExam: 'Dermatology Scope & Exam Questions',
    pageRef: 'p. 26',
    questionType: 'staging-criteria',
    question: 'State the "ABCDE" criteria used to evaluate pigmented skin lesions for Malignant Melanoma.',
    modelAnswer: 'The ABCDE criteria for evaluating suspected Malignant Melanoma: A: Asymmetry (one half of the lesion does not match the other half in shape); B: Border irregularity (edges are ragged, notched, scalloped, or blurred); C: Colour variation (non-uniform pigmentation with shades of black, dark brown, tan, blue, red, or white); D: Diameter > 6 mm (greater than the size of a standard pencil eraser, though melanomas can be smaller); E: Evolving / Evolution (any progressive change in size, shape, elevation, color, or new symptoms like bleeding or itching).',
    keyScoringPoints: [
      'A: Asymmetry',
      'B: Border irregularity (notched, scalloped)',
      'C: Colour variegation (multiple shades)',
      'D: Diameter > 6 mm',
      'E: Evolving (change in size, shape, color, or sensation)',
      'Most important single sign: Evolving / progressive change ("the ugly duckling sign")',
      'Single strongest prognostic factor: Breslow thickness (microscopic depth of invasion in mm)'
    ],
    clinicalPearl: 'Prognostic Pearl: Breslow thickness (measured in millimeters from the granular layer of epidermis to the deepest tumor cell) is the single most powerful histological prognostic indicator for cutaneous melanoma.',
    difficulty: 'High-Yield Core'
  }
];
