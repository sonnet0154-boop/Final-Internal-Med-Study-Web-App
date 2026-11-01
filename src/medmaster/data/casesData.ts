import { CaseStudy } from '../types';

export const caseStudies: CaseStudy[] = [
  {
    id: 'case-1',
    number: 1,
    title: 'Fever, Rust-Coloured Sputum & Confusion',
    system: 'Respiratory',
    timeLimitSeconds: 90,
    sourceThemes: 'SA Block Exam pp. 3, 18, 27–28',
    vignette: 'A 58-year-old man presents with a 3-day history of high fever, rigors, productive cough with rust-coloured sputum, and right-sided pleuritic chest pain. His daughter notes he became increasingly drowsy and disoriented this morning. Observations: BP 88/54 mmHg, HR 122 bpm, RR 34/min, SpO2 87% on room air, Temp 39.1°C. Chest examination reveals bronchial breathing and dullness at the right lung base. Chest X-ray demonstrates dense right lower-lobe consolidation with air bronchograms.',
    questions: [
      'What is the most likely syndrome and what makes this patient high risk?',
      'Calculate the CURB-65 score and determine the immediate management priority.',
      'What empiric antimicrobial regimen is recommended in the SA Public Sector STG?'
    ],
    answerStructure: {
      problemRepresentation: 'Older male with acute febrile illness, toxic presentation, severe community-acquired pneumonia, respiratory failure (SpO2 87%, RR 34), septic shock (BP 88/54), and acute encephalopathy (confusion).',
      syndromeAndDangerousAlternative: 'Severe Community-Acquired Pneumonia (Streptococcus pneumoniae most likely). Dangerous alternative: Empyema, severe pulmonary sepsis with acute ARDS, or underlying cavitating TB.',
      nextSafeStep: 'Immediate ABCDE resuscitation: High-flow oxygen (target SpO2 92–96%), 2 large-bore IV cannulas, IV crystalloid fluid bolus (20–30 mL/kg for septic shock), blood cultures + sputum NAAT/Gram stain, and immediate IV empiric antibiotics within 1 hour.',
      usefulTest: 'Blood gas (PaO2/FiO2 ratio, lactate, pH) to assess severity of respiratory failure and tissue hypoperfusion; repeat ECG and cardiac troponin if septic myocardial dysfunction is suspected.',
      modelAnswerKey: [
        'CURB-65 Score = 4 (Confusion = 1, Urea >7 mmol/L expected = 1, RR ≥30 = 1, BP <90/60 = 1). Indicates severe CAP with >25% 30-day mortality risk; requires urgent ICU / High Care admission.',
        'Immediate priorities: Oxygen titration, fluid resuscitation for septic shock, blood cultures BEFORE antibiotics, blood gas, and urgent senior escalation.',
        'SA AHL STG Empiric regimen for severe CAP: IV Ceftriaxone 1g–2g daily PLUS IV/Oral Azithromycin 500mg daily (or oral Clarithromycin) for atypical coverage.',
        'In South Africa, always check HIV status and GeneXpert MTB/RIF on sputum given high burden of tuberculosis co-infection.'
      ],
      localExamNote: 'Do not forget the macrolide when writing the prescription for severe pneumonia; coverage for Legionella and atypical pathogens reduces mortality in bacteremic pneumococcal pneumonia.'
    }
  },
  {
    id: 'case-2',
    number: 2,
    title: 'A New Unilateral Pleural Effusion',
    system: 'Respiratory',
    timeLimitSeconds: 90,
    sourceThemes: 'SA Block Exam pp. 7, 17, 55',
    vignette: 'A 42-year-old woman presents with progressive dyspnoea, dry cough, evening fevers, drenching night sweats, and 5 kg weight loss over 4 weeks. Examination reveals reduced chest expansion, stony dullness to percussion, and absent breath sounds throughout the left lower and mid zones. Chest radiograph confirms a large left-sided pleural effusion with meniscus sign.',
    questions: [
      'How do you classify the pleural fluid using Light’s criteria?',
      'Name four important causes of an exudative pleural effusion in this context.',
      'What diagnostic investigations should be performed on the pleural aspirate?'
    ],
    answerStructure: {
      problemRepresentation: 'Young female presenting with a subacute B-symptom illness (fever, drenching sweats, weight loss) and a large unilateral left-sided pleural effusion.',
      syndromeAndDangerousAlternative: 'Exudative pleural effusion secondary to Tuberculous Pleurisy (most probable in South Africa). Dangerous alternatives: Parapneumonic effusion / empyema, malignant effusion (lymphoma, metastatic), or pulmonary embolism with infarction.',
      nextSafeStep: 'Diagnostic thoracentesis (pleural tap) under ultrasound guidance: withdraw 50 mL for biochemistry, cytology, and microbiology before considering therapeutic drainage.',
      usefulTest: 'Pleural fluid Adenosine Deaminase (ADA): in SA high TB burden settings, pleural fluid ADA >30–40 U/L with lymphocytic predominance (>50%) has high sensitivity and specificity for TB pleurisy.',
      modelAnswerKey: [
        'Light’s Criteria for Exudate (requires at least ONE): (1) Pleural fluid protein / Serum protein ratio >0.5; (2) Pleural fluid LDH / Serum LDH ratio >0.6; (3) Pleural fluid LDH > 2/3 the upper limit of normal serum LDH.',
        'Four common causes of exudate in SA: Tuberculous pleurisy, Parapneumonic effusion / empyema, Malignancy (bronchogenic, breast, lymphoma), Connective tissue disease (SLE, RA) / Pulmonary embolism.',
        'Pleural fluid tests: Protein, LDH (with paired serum protein & LDH), glucose, pH (in heparinised syringe if empyema suspected), cell count and differential, Gram stain, bacterial culture, GeneXpert MTB/RIF, ADA, and cytology for malignant cells.'
      ],
      localExamNote: 'Always measure paired serum protein and LDH on the same morning as the pleural aspirate to accurately calculate Light’s ratios. Never remove >1.5 L in one sitting to avoid re-expansion pulmonary oedema.'
    }
  },
  {
    id: 'case-3',
    number: 3,
    title: 'Acute Central Chest Pain & Borderline ECG',
    system: 'Cardiology',
    timeLimitSeconds: 90,
    sourceThemes: 'SA Block Exam pp. 4, 14, 18',
    vignette: 'A 54-year-old male smoker with poorly controlled hypertension and type 2 diabetes presents to the emergency department with 45 minutes of crushing retrosternal chest tightness radiating to the left jaw and shoulder, accompanied by nausea and cold sweats. The initial 12-lead ECG shows sinus rhythm, no definite ST-elevation, but 1 mm horizontal ST-depression in leads V4–V6.',
    questions: [
      'Classify the three main Acute Coronary Syndrome (ACS) categories.',
      'What are the mandatory immediate medical actions and serial testing protocol?',
      'Name two dangerous mimics of ACS that must be excluded before anticoagulation.'
    ],
    answerStructure: {
      problemRepresentation: 'Middle-aged male with high cardiovascular risk profile (smoking, hypertension, diabetes) presenting with hyperacute anginal chest pain and dynamic ischemic ST-depression.',
      syndromeAndDangerousAlternative: 'Non-ST-Elevation Acute Coronary Syndrome (NSTE-ACS: NSTEMI vs. Unstable Angina). Dangerous life-threatening alternatives: Acute aortic dissection (type A), massive pulmonary embolism, tension pneumothorax, or acute pericarditis.',
      nextSafeStep: 'Immediate bedside triage: ABCDE, continuous cardiac monitoring, defibrillator pads nearby, IV access, chewable aspirin 300 mg immediately, sublingual glyceryl trinitrate (GTN) if SBP >100 mmHg, and urgent high-sensitivity troponin assay.',
      usefulTest: 'Serial ECGs at 15–30 minute intervals (or with pain change) including posterior leads (V7–V9) and right ventricular leads (V4R) to exclude STEMI equivalents (e.g., isolated posterior MI).',
      modelAnswerKey: [
        'ACS Categories: (1) STEMI (requires urgent reperfusion within time window); (2) NSTEMI (troponin elevated without persistent ST-elevation); (3) Unstable Angina (ischemic symptoms without detectable troponin elevation).',
        'Immediate management: Aspirin 300 mg stat; second antiplatelet (clopidogrel 300–600 mg or ticagrelor per protocol); anticoagulation with LMWH (enoxaparin 1 mg/kg BD) or unfractionated heparin; pain relief (sublingual GTN / IV morphine).',
        'Oxygen only if SpO2 <90% or shock; routine oxygen in normoxic ACS increases myocardial infarct size.',
        'Dangerous mimics: Aortic dissection (check bilateral BP and radial pulses; anticoagulation is fatal in dissection) and acute pericarditis (diffuse PR depression, concave ST elevation).'
      ],
      localExamNote: 'A normal first ECG does NOT rule out acute coronary syndrome. Up to 10% of acute myocardial infarctions show a normal initial tracing. Repeat serial ECGs are mandatory.'
    }
  },
  {
    id: 'case-4',
    number: 4,
    title: 'Cirrhosis, Tense Ascites, Then Fever & Confusion',
    system: 'Gastroenterology',
    timeLimitSeconds: 90,
    sourceThemes: 'SA Block Exam pp. 41, 45, 57',
    vignette: 'A 51-year-old woman with known alcohol-related cirrhosis and chronic ascites is admitted for increasing abdominal distension. Over the past 12 hours, she has developed low-grade fever (38.2°C), generalised dull abdominal discomfort, and marked daytime somnolence with asterixis (flapping tremor). Abdomen is distended with shifting dullness and mild diffuse tenderness without rigid guarding.',
    questions: [
      'What time-critical bedside diagnostic procedure is required immediately?',
      'What diagnostic finding confirms Spontaneous Bacterial Peritonitis (SBP)?',
      'What is the comprehensive management plan according to SA AHL STG and Baveno VIII?'
    ],
    answerStructure: {
      problemRepresentation: 'Patient with decompensated chronic liver disease presenting with acute-on-chronic decompensation: fever, diffuse peritonitis, and grade 2 hepatic encephalopathy.',
      syndromeAndDangerousAlternative: 'Spontaneous Bacterial Peritonitis (SBP) precipitating Hepatic Encephalopathy. Dangerous alternative: Secondary bacterial peritonitis (viscus perforation) or acute variceal bleed.',
      nextSafeStep: 'Immediate diagnostic paracentesis (ascitic tap) before giving antibiotics: aspirate 20–50 mL and inoculate blood culture bottles directly at bedside.',
      usefulTest: 'Ascitic fluid polymorphonuclear (PMN) neutrophil count: count ≥250 cells/mm³ (0.25 × 10^9/L) establishes the diagnosis of SBP.',
      modelAnswerKey: [
        'Diagnostic paracentesis is mandatory on every cirrhotic admitted with ascites or clinical deterioration.',
        'SBP is confirmed when ascitic PMN count ≥250 cells/mm³, even if Gram stain and culture are negative.',
        'Antibiotic treatment: IV Ceftriaxone 1g–2g daily or IV Cefotaxime 2g 8-hourly for 5–7 days.',
        'IV Albumin infusion: 1.5 g/kg on Day 1, followed by 1.0 g/kg on Day 3. This significantly prevents hepatorenal syndrome and reduces in-hospital mortality.',
        'Management of encephalopathy: Lactulose titrated to 2–3 soft bowel motions per day; assess and correct precipitants (constipation, infection, GI bleed, sedatives, electrolyte disturbances).'
      ],
      localExamNote: 'Do not withhold antibiotics while awaiting microbiology culture results. If PMN ≥250 cells/mm³, initiate IV cephalosporin immediately. Secondary prophylaxis with oral ciprofloxacin or cotrimoxazole is indicated upon discharge.'
    }
  },
  {
    id: 'case-5',
    number: 5,
    title: 'Vomiting, Abdominal Pain & Kussmaul Breathing',
    system: 'Endocrinology',
    timeLimitSeconds: 90,
    sourceThemes: 'SA Block Exam pp. 5, 9, 61',
    vignette: 'A 22-year-old university student with type 1 diabetes presents with severe nausea, persistent vomiting, diffuse abdominal pain, and extreme thirst for 24 hours. She ran out of insulin cartridges two days ago. On examination: lethargic, dry mucous membranes, sunken eyes, skin turgor decreased. Respiratory rate is 32/min with deep, sighing breaths (Kussmaul breathing) and a fruity odour to her breath. BP 96/60 mmHg, HR 128 bpm. Point-of-care glucose: 26.4 mmol/L; urine dipstick: 4+ ketones, 4+ glucose.',
    questions: [
      'State the diagnostic triad for Diabetic Ketoacidosis (DKA) according to ADA/EASD 2024.',
      'What critical laboratory value MUST be confirmed before starting an insulin infusion?',
      'Outline the first 4 hours of fluid, potassium, and insulin resuscitation.'
    ],
    answerStructure: {
      problemRepresentation: 'Young female with known type 1 diabetes, insulin omission, presenting with severe dehydration, high-anion-gap metabolic acidosis, and classic diabetic ketoacidosis.',
      syndromeAndDangerousAlternative: 'Diabetic Ketoacidosis (DKA). Dangerous alternative / co-trigger: Acute surgical abdomen (acute appendicitis/pancreatitis), sepsis, or acute myocardial infarction.',
      nextSafeStep: 'Immediate aggressive IV fluid resuscitation with 0.9% Normal Saline (1–1.5 L in the first hour), venous blood gas, formal serum electrolytes (specifically potassium), and continuous telemetry.',
      usefulTest: 'Serum potassium level: insulin drives potassium into cells; starting insulin in a hypokalaemic patient triggers fatal cardiac arrest.',
      modelAnswerKey: [
        'Diagnostic Triad of DKA: (1) Hyperglycaemia (blood glucose >11.1 mmol/L or known DM); (2) Ketonaemia (blood beta-hydroxybutyrate ≥3.0 mmol/L or 2+ urine ketones); (3) Metabolic acidosis (venous pH <7.30 or serum bicarbonate <18 mmol/L).',
        'Potassium Rule: Serum potassium MUST be ≥3.5 mmol/L (international 3.3 mmol/L) before initiating IV insulin. If K <3.5 mmol/L, hold insulin and replace potassium (20–40 mmol/h) until safe.',
        'Insulin protocol: Fixed-rate regular insulin infusion at 0.1 units/kg/hour (or 0.05 units/kg/h with rapid hydration).',
        'Fluid protocol: 1000 mL 0.9% NaCl in 1st hour, then 500–1000 mL/h. When blood glucose drops below 11.1–14 mmol/L, switch fluids to 5% or 10% Dextrose-Saline while CONTINUING insulin infusion until ketoacidosis resolves (bicarbonate ≥18, pH >7.3, anion gap normal).',
        'Routine IV sodium bicarbonate is contraindicated (risk of paradoxical CSF acidosis, hypocalcaemia, and hypokalaemia).'
      ],
      localExamNote: 'Euglycaemic DKA (glucose <11.1 mmol/L with ketoacidosis) is increasingly seen in patients on SGLT2 inhibitors. Never rely on blood glucose level alone to rule out DKA.'
    }
  },
  {
    id: 'case-6',
    number: 6,
    title: 'Sudden Hemiparesis, Last Well 90 Minutes Ago',
    system: 'Neurology',
    timeLimitSeconds: 90,
    sourceThemes: 'SA Block Exam pp. 11, 23, 44',
    vignette: 'A 66-year-old woman with a history of non-valvular atrial fibrillation (non-adherent to warfarin) suddenly drops her coffee cup, slurs her speech, and collapses at 08:30. She arrives at the emergency unit at 09:45. Examination shows alert patient with expressive aphasia, right-sided facial droop, and right hemiplegia (power 0/5 right upper and lower limbs). NIHSS score is 16. BP 172/96 mmHg, capillary blood glucose is 6.2 mmol/L. Non-contrast brain CT at 10:00 shows no intracranial haemorrhage or early infarction signs.',
    questions: [
      'What is the reperfusion eligibility window in the SA AHL STG versus international 2026 guidelines?',
      'What blood pressure parameters must be strictly maintained before and after thrombolysis?',
      'Why is aspirin contraindicated during the first 24 hours post-thrombolysis?'
    ],
    answerStructure: {
      problemRepresentation: 'Elderly female with cardioembolic risk factor (atrial fibrillation) presenting within the hyperacute window (75 minutes from onset) with severe acute ischaemic stroke (NIHSS 16, aphasia, dense right hemiplegia).',
      syndromeAndDangerousAlternative: 'Hyperacute Ischaemic Stroke (likely left MCA territory cardioembolism). Dangerous alternative: Intracranial haemorrhage, acute subdural haematoma, or hypoglycaemic mimic.',
      nextSafeStep: 'Immediate bedside glucose check (normal), urgent non-contrast brain CT (excludes bleed), check coagulation/INR status, obtain informed consent, and initiate intravenous thrombolysis.',
      usefulTest: 'Urgent INR / Coagulation panel: if INR >1.7 on warfarin, IV thrombolysis is contraindicated due to prohibitive risk of symptomatic intracranial haemorrhage.',
      modelAnswerKey: [
        'Reperfusion windows: SA AHL STG (2025/2026) recommends IV alteplase (0.9 mg/kg, max 90 mg) administered within 3 hours of symptom onset at designated centers. International AHA/ASA 2026 guidelines extend the window to 4.5 hours with tenecteplase or alteplase, and mechanical thrombectomy up to 24 hours in selected patients with large-vessel occlusion.',
        'Blood Pressure Targets: BP must be <185/110 mmHg before administering thrombolytic agent, and maintained <180/105 mmHg for the first 24 hours (use IV labetalol or hydralazine per protocol).',
        'Antiplatelet Restriction: Withhold all antiplatelets (aspirin, clopidogrel) and anticoagulants for 24 hours post-thrombolysis until a repeat CT brain at 24 hours excludes secondary haemorrhagic transformation.',
        'Swallowing screen: Patient must be kept strictly nil per os until formal swallowing assessment confirms airway safety.'
      ],
      localExamNote: 'Always state the 3-hour window for South African public sector exams, followed by an explanation that international guidelines now permit up to 4.5 hours where advanced imaging is available.'
    }
  },
  {
    id: 'case-7',
    number: 7,
    title: 'Severe Headache, High Fever & Petechial Rash',
    system: 'Neurology',
    timeLimitSeconds: 90,
    sourceThemes: 'SA Block Exam pp. 8, 24, 48',
    vignette: 'A 19-year-old university student is brought by roommates with 14 hours of explosive generalised headache, photophobia, projectile vomiting, and high fever (39.6°C). On examination: Glasgow Coma Scale 13/15 (confused), marked neck stiffness, positive Kernig and Brudzinski signs. There are scattered non-blanching petechiae and purpuric lesions across his lower limbs and flanks. Pupil reflexes and fundoscopy are normal without papilloedema or focal motor deficits.',
    questions: [
      'What is the immediate management priority before performing a lumbar puncture?',
      'When is a CT brain required BEFORE performing a lumbar puncture?',
      'What is the role and timing of adjunctive dexamethasone in acute bacterial meningitis?'
    ],
    answerStructure: {
      problemRepresentation: 'Young adult presenting with hyperacute meningism, fever, altered sensorium, and non-blanching purpuric rash indicative of fulminant meningococcal meningitis / meningococcemia.',
      syndromeAndDangerousAlternative: 'Acute Bacterial Meningitis (Neisseria meningitidis or Streptococcus pneumoniae). Dangerous alternative: Tuberculous meningitis, Cryptococcal meningitis (in HIV), or viral encephalitis.',
      nextSafeStep: 'Immediate blood cultures and administration of empiric IV Ceftriaxone 2g stat. NEVER delay antibiotics for CT scanning or lumbar puncture!',
      usefulTest: 'Lumbar puncture (CSF analysis): opening pressure, WBC differential (>1000 cells/µL, predominantly neutrophils), protein (>1.0 g/L), glucose ratio (<0.4 CSF:serum), Gram stain and culture.',
      modelAnswerKey: [
        'Immediate action: Draw blood cultures and immediately administer IV Ceftriaxone 2g IV. Do NOT delay antimicrobial therapy to perform an LP or CT scan.',
        'Indications for CT brain BEFORE LP: Focal neurological signs, new-onset seizures, papilloedema on fundoscopy, severely impaired consciousness (GCS <10), or severe immunocompromise.',
        'Adjunctive Dexamethasone: 10 mg IV administered before or with the first dose of antibiotics (continue 10 mg 6-hourly for 4 days in pneumococcal meningitis). It reduces neurological sequelae, hearing loss, and mortality.',
        'Infection control: Droplet precautions; notify public health and provide chemoprophylaxis (single dose ciprofloxacin 500 mg or ceftriaxone 250 mg IM) to close household/dormitory contacts.'
      ],
      localExamNote: 'Dexamethasone is beneficial only if given before or concomitantly with the first antibiotic dose. If antibiotics have already been running for hours, steroids show minimal benefit.'
    }
  },
  {
    id: 'case-8',
    number: 8,
    title: 'Fatigue, Pallor, Microcytic Anaemia & Melaena',
    system: 'Haematology',
    timeLimitSeconds: 90,
    sourceThemes: 'SA Block Exam pp. 12, 15, 39',
    vignette: 'A 64-year-old man presents with progressive exertional breathlessness, severe lethargy, and dizzy spells over 6 weeks. He mentions noticing dark, tarry, foul-smelling stools intermittently. He has taken regular over-the-counter ibuprofen for knee osteoarthritis for 6 months. Examination: marked conjunctival and palmar crease pallor, koilonychia (spoon-shaped nails), HR 106 bpm, flow murmur over aortic area. FBC: Hb 5.8 g/dL, MCV 64 fL, MCH 20 pg, Platelets 480 × 10^9/L, WBC 7.2 × 10^9/L.',
    questions: [
      'What classic iron studies pattern confirms Iron Deficiency Anaemia?',
      'Why is ferritin sometimes normal or elevated despite severe iron deficiency?',
      'What essential diagnostic investigations are required to identify the source of blood loss?'
    ],
    answerStructure: {
      problemRepresentation: 'Elderly male with chronic NSAID exposure presenting with symptomatic severe microcytic hypochromic anaemia, thrombocytosis, and overt upper GI bleeding (melaena).',
      syndromeAndDangerousAlternative: 'Iron Deficiency Anaemia secondary to Peptic Ulcer Disease / NSAID-induced gastropathy. Dangerous alternative: Gastric or colorectal adenocarcinoma.',
      nextSafeStep: 'Hemodynamic assessment, crossmatch 2 units packed red blood cells for symptomatic severe anaemia (Hb <7 g/dL with tachycardia/dizziness), stop NSAIDs, start IV proton pump inhibitor, and arrange urgent endoscopy.',
      usefulTest: 'Upper GI Endoscopy (OGD) and Colonoscopy: in any male or postmenopausal female with iron deficiency anaemia, bidirectional GI endoscopy is mandatory to exclude malignancy.',
      modelAnswerKey: [
        'Classic Iron Studies Pattern: Low serum ferritin (<15–30 µg/L), low serum iron, high Total Iron Binding Capacity (TIBC / transferrin), and low transferrin saturation (<15–20%).',
        'Ferritin as an Acute-Phase Reactant: Ferritin is an acute-phase protein synthesized by hepatocytes in response to systemic inflammation, infection, renal failure, or liver disease. In the presence of inflammation, ferritin can be falsely normal or elevated (up to 100 µg/L) despite depleted bone marrow iron stores. Transferrin saturation (<20%) helps unmask iron deficiency.',
        'Source Investigation: Diagnostic Upper GI endoscopy (OGD) within 24 hours, followed by colonoscopy if OGD does not identify the definitive bleeding source.',
        'Iron replacement: Oral ferrous sulfate / fumarate (or IV iron if malabsorption / intolerance / severe deficit persists).'
      ],
      localExamNote: 'Never dismiss iron deficiency anaemia in an older adult as "poor diet". Always search for occult GI blood loss or malignancy.'
    }
  },
  {
    id: 'case-9',
    number: 9,
    title: 'Severe Epidermal Detachment Following Allopurinol',
    system: 'Dermatology',
    timeLimitSeconds: 90,
    sourceThemes: 'SA Block Exam pp. 13, 21, 58',
    vignette: 'A 48-year-old man with chronic gout was started on allopurinol 300 mg daily two weeks ago. He presents with high fever, sore throat, painful burning skin, and conjunctivitis for 3 days. On examination: extensive dusky, purpuric macules coalescing into flaccid bullae with sheets of epidermal peeling over his chest, back, and arms. Gently rubbing adjacent normal-appearing skin causes the epidermis to slide off (positive Nikolsky sign). Both lips show haemorrhagic crusting, and buccal mucosa has painful erosions. Total epidermal detachment is estimated at 22% of total body surface area.',
    questions: [
      'Classify this severe cutaneous adverse reaction based on body surface area detachment.',
      'What are the immediate critical steps in medical and supportive management?',
      'What is SCORTEN and why is it used?'
    ],
    answerStructure: {
      problemRepresentation: 'Adult male on recent allopurinol presenting with high fever, painful mucocutaneous blistering, positive Nikolsky sign, and 22% epidermal detachment.',
      syndromeAndDangerousAlternative: 'Stevens-Johnson Syndrome / Toxic Epidermal Necrolysis Overlap (SJS/TEN Overlap: 10–30% epidermal detachment). Dangerous alternative: Staphylococcal Scalded Skin Syndrome (SSSS), autoimmune pemphigus vulgaris, or generalized bullous fixed drug eruption.',
      nextSafeStep: 'IMMEDIATELY DISCONTINUE ALLOPURINOL and all non-essential medications. Transfer to an ICU or specialised Burns Unit immediately.',
      usefulTest: 'Urgent skin punch biopsy (frozen section) to demonstrate full-thickness epidermal necrosis and subepidermal cleavage.',
      modelAnswerKey: [
        'Classification by Detachment: (1) SJS: <10% body surface area; (2) SJS/TEN Overlap: 10–30% body surface area; (3) TEN: >30% body surface area.',
        'Immediate Management: Stop offending drug immediately; manage in ICU/Burns unit with strict barrier nursing; warm room environment (prevent hypothermia); careful fluid and electrolyte resuscitation (similar to burns but less aggressive); aggressive ophthalmology involvement with lubricating eye drops and glass rod lysis to prevent symblepharon / blindness; non-adherent dressings; enteral nutrition; pain control.',
        'Avoid routine prophylactic systemic corticosteroids or unproven immunosuppression unless directed by specialist burns team protocol.',
        'SCORTEN: A validated prognostic score calculated within the first 24 hours based on 7 clinical variables (Age ≥40, Malignancy, BSA detached ≥10%, Tachycardia ≥120, Urea >10 mmol/L, Glucose >14 mmol/L, Bicarbonate <20 mmol/L). It directly predicts mortality.'
      ],
      localExamNote: 'Ophthalmology consultation is an emergency in SJS/TEN. Mucosal scarring of the conjunctiva can cause permanent blindness.'
    }
  },
  {
    id: 'case-10',
    number: 10,
    title: 'Acute Hot, Red, Swollen Knee (Monoarthritis)',
    system: 'Rheumatology',
    timeLimitSeconds: 90,
    sourceThemes: 'SA Block Exam pp. 10, 26, 42',
    vignette: 'A 55-year-old male presents with acute onset of severe, agonising pain and swelling in his right knee that woke him from sleep 12 hours ago. He is unable to bear weight. He has a history of hyperuricaemia and had a beer-heavy barbecue two nights ago. On examination: Right knee is hot, tensely swollen with a large effusion, exquisitely tender, and skin is erythematous. Active and passive range of motion is severely restricted by pain. Temperature is 38.3°C, HR 102 bpm.',
    questions: [
      'What is the mandatory first diagnostic procedure?',
      'Why does finding uric acid crystals under polarised microscopy NOT rule out septic arthritis?',
      'Outline the immediate empiric antibiotic and supportive approach for septic arthritis.'
    ],
    answerStructure: {
      problemRepresentation: 'Middle-aged male with hyperuricaemia risk factor presenting with acute febrile monoarthritis of the right knee and inability to bear weight.',
      syndromeAndDangerousAlternative: 'Septic Arthritis (most urgent danger) versus Acute Gouty Arthritis. Dangerous alternative: Trauma with haemarthrosis, pseudogout (CPPD), or reactive arthritis.',
      nextSafeStep: 'Immediate aseptic needle arthrocentesis (synovial fluid aspiration) of the knee BEFORE administering antibiotics.',
      usefulTest: 'Synovial fluid analysis: macroscopic appearance (turbid/purulent), cell count and differential (WBC >50,000/µL with >90% polymorphs strongly suggests sepsis), Gram stain, bacterial culture, and polarised light microscopy for crystals.',
      modelAnswerKey: [
        'Mandatory procedure: Urgent diagnostic arthrocentesis under strict aseptic technique. Never assume acute monoarthritis is "just gout" based on history.',
        'Coexistence of Infection and Crystals: A patient with pre-existing gout can develop bacterial septic arthritis in the same joint. Finding monosodium urate crystals (negatively birefringent needle-shaped crystals) does NOT exclude co-existent septic arthritis!',
        'Immediate management for suspected Septic Arthritis: Send blood cultures and synovial fluid; start empiric IV Cloxacillin 2g 6-hourly (covers Staphylococcus aureus) plus Ceftriaxone if Gram-negative risk; urgent orthopaedic consultation for surgical washout / arthroscopic debridement; joint rest and analgesia.',
        'Do not start allopurinol during an acute attack of gout—it causes fluctuations in serum urate and prolongs the acute flare.'
      ],
      localExamNote: 'Septic arthritis is an orthopedic emergency: irreversible cartilage destruction occurs within 24–48 hours if decompression and targeted antibiotics are delayed.'
    }
  },
  {
    id: 'case-11',
    number: 11,
    title: 'Newly Diagnosed HIV & Active Sputum-Positive TB',
    system: 'HIV Medicine',
    timeLimitSeconds: 90,
    sourceThemes: 'SA Block Exam pp. 16, 29, 52',
    vignette: 'A 35-year-old woman presents with productive cough, fever, night sweats, and marked weight loss for 6 weeks. Sputum GeneXpert confirms Mycobacterium tuberculosis, rifampicin-sensitive. Voluntary counselling and testing confirms HIV-positive status via the SA 3-test algorithm. CD4 count is 28 cells/µL, serum cryptococcal antigen (CrAg) is negative, serum creatinine is 68 µmol/L, and ALT is 24 U/L.',
    questions: [
      'When should Antiretroviral Therapy (ART) be started in this patient with CD4 <50 cells/µL?',
      'What is the first-line ART regimen and what critical dosing adjustment is required with Rifampicin?',
      'What syndrome must you watch for after starting ART, and how is it managed?'
    ],
    answerStructure: {
      problemRepresentation: 'Young female with advanced HIV immunosuppression (CD4 28 cells/µL) presenting with active drug-sensitive pulmonary tuberculosis.',
      syndromeAndDangerousAlternative: 'HIV/TB Co-infection with Advanced HIV Disease. Dangerous alternative: Cryptococcal meningitis (CrAg negative here), multi-drug resistant TB, or disseminated fungal infection.',
      nextSafeStep: 'Initiate weight-based standard anti-TB therapy (2RHZE / 4RH) immediately with pyridoxine (vitamin B6) 25 mg daily; start Cotrimoxazole preventive therapy (CPT) 160/800 mg daily.',
      usefulTest: 'Serum Cryptococcal Antigen (CrAg) screening: mandatory in all patients with CD4 <200 cells/µL before ART initiation to prevent fatal unmasking cryptococcal meningitis.',
      modelAnswerKey: [
        'ART Timing Rule in TB: For patients with profound immunosuppression (CD4 <50 cells/µL), start ART within 2 weeks after initiating TB treatment. (For CD4 ≥50 cells/µL, start ART at 8 weeks. For TB meningitis, defer ART until 8 weeks regardless of CD4 to avoid fatal cerebral swelling).',
        'First-Line Regimen & Rifampicin Interaction: Standard adult regimen is TLD (Tenofovir 300mg + Lamivudine 300mg + Dolutegravir 50mg daily). Because Rifampicin induces UGT1A1 and CYP3A4, Dolutegravir levels are halved. ACTION: Add an EXTRA Dolutegravir 50 mg tablet 12 hours after the fixed-dose TLD combination (DTG 50mg BD) throughout TB therapy and for 2 weeks after stopping Rifampicin.',
        'Immune Reconstitution Inflammatory Syndrome (TB-IRIS): Paradoxical worsening of TB symptoms/radiology after ART initiation. Management: Rule out TB drug resistance, non-adherence, or secondary infection; CONTINUE both TB treatment and ART; administer oral prednisone (1.5 mg/kg/day tapered over 4 weeks) for moderate-to-severe symptoms.'
      ],
      localExamNote: 'Never delay TB treatment to start ART. TB treatment always starts first. In profound immunosuppression (CD4 <50), starting ART within 2 weeks provides a proven survival benefit.'
    }
  },
  {
    id: 'case-12',
    number: 12,
    title: 'Palpitations, Agitation, Fever & Diffuse Goitre',
    system: 'Endocrinology',
    timeLimitSeconds: 90,
    sourceThemes: 'SA Block Exam pp. 9, 22, 61',
    vignette: 'A 29-year-old woman with a 3-month history of heat intolerance, hand tremor, weight loss despite increased appetite, and palpitations presents to casualty in an agitated and delirious state. She developed a throat infection two days ago. On examination: Temp 39.8°C, HR 158 bpm (irregularly irregular, consistent with atrial fibrillation), BP 164/72 mmHg, RR 26/min. There is bilateral exophthalmos, lid lag, a diffuse non-tender goitre with an audible vascular bruit, and fine hand tremor.',
    questions: [
      'What life-threatening endocrine emergency has occurred?',
      'What clinical scoring system is used to assess this condition?',
      'List the four sequential medical pharmacological steps to treat this emergency.'
    ],
    answerStructure: {
      problemRepresentation: 'Young female with untreated Graves thyrotoxicosis presenting with high fever, tachyarrhythmia (atrial fibrillation), delirium, and hyperadrenergic storm precipitated by infection.',
      syndromeAndDangerousAlternative: 'Thyroid Storm (Accelerated Thyrotoxicosis). Dangerous alternative: Sepsis with hyperdynamic shock, pheochromocytoma crisis, anticholinergic toxidrome, or stimulant overdose.',
      nextSafeStep: 'Immediate supportive care in ICU: oxygen, cooling blankets (avoid aspirin!), aggressive IV fluids, and urgent pharmacological blockade of the thyroid axis.',
      usefulTest: 'Burch-Wartofsky Point Scale (BWPS) score >45 confirms thyroid storm; free T4/T3 and TSH (TSH suppressed <0.01 mIU/L, markedly elevated free T4/T3).',
      modelAnswerKey: [
        'Diagnosis: Thyroid Storm (Life-threatening decompensated thyrotoxicosis with mortality up to 20–30%).',
        'Scoring System: Burch-Wartofsky Point Scale (BWPS >45 highly suggestive; 25–44 impending storm) or Akamizu criteria.',
        'Four Sequential Pharmacological Steps: (1) Beta-blocker: IV Propranolol (blocks adrenergic stimulation and inhibits peripheral T4-to-T3 conversion); (2) Thionamide: High-dose Propylthiouracil (PTU) 200mg 4-hourly or Carbimazole (PTU preferred because it inhibits peripheral T4-to-T3 conversion); (3) Inorganic Iodine (Lugol iodine or Potassium Iodide): GIVEN AT LEAST 1 HOUR AFTER THIONAMIDE to prevent Wolff-Chaikoff substrate overload; (4) Glucocorticoids: IV Hydrocortisone 100mg 8-hourly (treats relative adrenal insufficiency and inhibits peripheral T4-to-T3 conversion).',
        'Avoid Aspirin: Aspirin displaces thyroid hormone from thyroid-binding globulin (TBG), increasing free T4/T3 levels and worsening the crisis. Use paracetamol for hyperthermia.'
      ],
      localExamNote: 'Always emphasize the timing of Iodine: Iodine must NEVER be administered before the thionamide. Administering iodine first provides substrate for accelerated de novo thyroid hormone synthesis.'
    }
  }
];
