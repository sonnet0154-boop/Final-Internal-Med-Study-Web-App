import type { ScopeAddition } from './types';

export const endoHaemScope: ScopeAddition = {
  topics: [
    {
      id: 't2dm-hypoglycaemia',
      systemId: 'renal-endocrine',
      title: 'Type 2 Diabetes Management & Hypoglycaemia',
      frequency: 0,
      sourcePages: 'Exam scope breakdown',
      preview1Min: 'Diagnosis: HbA1c ≥6.5%, fasting glucose ≥7.0 mmol/L or random ≥11.1 with symptoms. Metformin first; add sulphonylurea or insulin in the SA public sector. Hypoglycaemia <4 mmol/L: treat immediately with oral or IV glucose.',
      redFlags: [
        'Glucose <3 mmol/L or reduced consciousness',
        'Sulphonylurea-induced hypoglycaemia (prolonged — admit)',
        'Foot ulcer with infection or ischaemia'
      ],
      tags: ['T2DM', 'HbA1c', 'Metformin', 'Insulin', 'Hypoglycaemia', 'SEMDSA'],
      sections: [
        {
          id: 't2dm-stepwise',
          title: 'Stepwise Treatment of Type 2 Diabetes',
          content: 'Diagnosis: HbA1c ≥6.5%, fasting plasma glucose ≥7.0 mmol/L, 2-hour OGTT ≥11.1 mmol/L, or random ≥11.1 mmol/L with symptoms (asymptomatic patients need a repeat test).\nTarget HbA1c generally <7% (individualise: higher in frail elderly).\nStep 1: lifestyle plus metformin (stop if eGFR <30; reduce if 30–45).\nStep 2: add a sulphonylurea (gliclazide) in the public sector; SGLT2 inhibitor or GLP-1 receptor agonist preferred where available for established cardiovascular disease, heart failure or CKD.\nStep 3: add basal insulin at bedtime (e.g. 10 units, titrate by fasting glucose).\nAlso: statin, BP target <140/90 (or <130/80 if tolerated), ACE-I if albuminuria, annual eye, foot and urine albumin checks.',
          saPublicSectorNote: 'SA STG: metformin → add sulphonylurea → add insulin; SGLT2 inhibitors are now on the adult hospital EML for selected patients.',
          recallQuestion: 'What are the diagnostic thresholds for diabetes using HbA1c and fasting glucose?',
          recallAnswer: 'HbA1c ≥6.5% or fasting plasma glucose ≥7.0 mmol/L (repeat in asymptomatic patients).',
          references: ['SEMDSA Guidelines for the Management of Type 2 Diabetes, 2017 (2024 update)', 'ADA Standards of Care in Diabetes, 2025']
        },
        {
          id: 'hypoglycaemia-management',
          title: 'Hypoglycaemia Management',
          content: 'Definition: glucose <4 mmol/L (level 2 <3 mmol/L; severe = needing assistance).\nConscious and able to swallow: 15–20 g fast-acting glucose (e.g. sugar in water), recheck after 15 min, then a complex carbohydrate snack.\nUnconscious or unable to swallow: 50 ml of 50% dextrose IV (or 100 ml of 20%) then 10% dextrose infusion; glucagon 1 mg IM if no IV access (ineffective in alcohol-related or starvation hypoglycaemia).\nGive thiamine first in malnourished or alcohol-dependent patients.\nSulphonylurea or long-acting insulin overdose: admit and run a dextrose infusion for at least 24 hours — hypoglycaemia recurs.',
          recallQuestion: 'How do you treat hypoglycaemia in an unconscious patient?',
          recallAnswer: 'IV dextrose (50 ml of 50% or 100 ml of 20%) followed by a 10% dextrose infusion; IM glucagon 1 mg if no IV access; thiamine first if malnourished or alcohol dependent.',
          references: ['SA STG/EML Hospital Level Adults, 2019 – Hypoglycaemia', 'JBDS-IP: The hospital management of hypoglycaemia in adults with diabetes, 2023']
        }
      ]
    },
    {
      id: 'haem-malignancy-bleeding',
      systemId: 'haematology',
      title: 'Haematological Malignancy, Bleeding Disorders & DIC',
      frequency: 0,
      sourcePages: 'Exam scope breakdown',
      preview1Min: 'Pancytopenia or blasts on smear = urgent referral. HIV raises risk of lymphoma. Platelet vs coagulation bleeding patterns. DIC: low platelets, prolonged PT/aPTT, low fibrinogen, raised D-dimer — treat the cause.',
      redFlags: [
        'Fever in a neutropenic patient (neutrophils <0.5 × 10⁹/L)',
        'Blasts on peripheral smear or WBC >100 × 10⁹/L (leukostasis)',
        'Bleeding with low fibrinogen (DIC)'
      ],
      tags: ['Leukaemia', 'Lymphoma', 'Myeloma', 'ITP', 'DIC', 'Neutropenic sepsis'],
      sections: [
        {
          id: 'haem-malignancy',
          title: 'Recognising Leukaemia, Lymphoma & Myeloma',
          content: 'Acute leukaemia: short history, pancytopenia features (fatigue, infection, bleeding), blasts on smear; AML with Auer rods; APML causes DIC — give ATRA urgently.\nLymphoma: painless lymphadenopathy, B symptoms (fever, night sweats, >10% weight loss); HIV-associated diffuse large B-cell and Burkitt lymphoma are common in SA. Excision node biopsy (not FNA) and exclude TB.\nMultiple myeloma (CRAB): hyperCalcaemia, Renal failure, Anaemia, Bone lesions; high ESR, rouleaux; serum protein electrophoresis, free light chains, urine Bence Jones protein.\nNeutropenic sepsis: empirical broad-spectrum antibiotics (e.g. piperacillin–tazobactam) within 1 hour.\nTumour lysis: hyperuricaemia, hyperkalaemia, hyperphosphataemia, hypocalcaemia — hydrate and give allopurinol or rasburicase.',
          recallQuestion: 'What does the CRAB mnemonic for multiple myeloma stand for?',
          recallAnswer: 'HyperCalcaemia, Renal impairment, Anaemia and Bone lesions.',
          references: ['International Myeloma Working Group diagnostic criteria, 2014', 'NICE NG151 Neutropenic sepsis, 2012 (updated 2020)']
        },
        {
          id: 'bleeding-dic',
          title: 'Bleeding Disorders, ITP & DIC',
          content: 'Platelet-type bleeding: petechiae, mucosal bleeding, epistaxis — think thrombocytopenia (ITP, HIV, drugs, TTP) or von Willebrand disease.\nCoagulation-type bleeding: haemarthroses and deep muscle haematomas — haemophilia (prolonged aPTT), warfarin or liver disease (prolonged PT/INR).\nITP: isolated thrombocytopenia, normal smear otherwise; check HIV and hepatitis C. Treat if bleeding or platelets <20–30 × 10⁹/L: prednisone 1 mg/kg; IVIG for severe bleeding.\nTTP: thrombocytopenia, microangiopathic haemolytic anaemia (schistocytes), fever, neurological and renal signs — associated with HIV in SA; urgent plasma exchange; avoid platelet transfusion.\nDIC: low platelets, prolonged PT and aPTT, low fibrinogen, high D-dimer. Treat the cause (sepsis, obstetric, malignancy); give platelets, FFP and cryoprecipitate only if bleeding.',
          dangerBox: 'Platelet transfusion in TTP can worsen thrombosis — give plasma exchange instead.',
          recallQuestion: 'Which laboratory pattern indicates DIC?',
          recallAnswer: 'Low platelets, prolonged PT and aPTT, low fibrinogen and raised D-dimer.',
          references: ['ISTH guidance on DIC diagnosis, 2013 (updated 2023)', 'American Society of Hematology ITP guideline, 2019']
        }
      ]
    }
  ],
  sections: {}
};
