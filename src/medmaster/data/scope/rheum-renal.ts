import type { ScopeAddition } from './types';

export const rheumRenalScope: ScopeAddition = {
  topics: [
    {
      id: 'electrolyte-emergencies',
      systemId: 'renal-endocrine',
      title: 'Electrolyte Emergencies: Hyperkalaemia, Hyponatraemia & Hypercalcaemia',
      frequency: 0,
      sourcePages: 'Exam scope breakdown',
      preview1Min: 'Hyperkalaemia: stabilise the heart (calcium), shift K⁺ in (insulin–dextrose, salbutamol), remove K⁺. Hyponatraemia: correct no faster than 8–10 mmol/L in 24 h. Hypercalcaemia: fluids first, then bisphosphonate.',
      redFlags: [
        'K⁺ ≥6.5 mmol/L or any ECG changes',
        'Hyponatraemia with seizures or reduced consciousness',
        'Corrected calcium >3.5 mmol/L or confusion'
      ],
      tags: ['Hyperkalaemia', 'Calcium gluconate', 'Hyponatraemia', 'ODS', 'Hypercalcaemia'],
      sections: [
        {
          id: 'hyperkalaemia-treatment',
          title: 'Hyperkalaemia',
          content: 'ECG: peaked T waves, flattened P, broad QRS, sine wave, VF.\n1. Stabilise myocardium: 10 ml of 10% calcium gluconate IV over 5–10 min, repeat if ECG changes persist (effect lasts 30–60 min).\n2. Shift potassium into cells: 10 units short-acting insulin in 50 ml of 50% dextrose IV over 15 min (monitor glucose); nebulised salbutamol 10–20 mg; sodium bicarbonate only if acidotic.\n3. Remove potassium: stop offending drugs (ACE-I, spironolactone, NSAIDs, cotrimoxazole), loop diuretic if passing urine, potassium binders, dialysis if refractory or anuric.',
          dangerBox: 'Calcium does not lower potassium — it only buys time. Always follow with insulin–dextrose.',
          recallQuestion: 'What are the three steps in treating hyperkalaemia with ECG changes?',
          recallAnswer: 'Stabilise the myocardium with IV calcium gluconate, shift K⁺ into cells with insulin–dextrose (± salbutamol), then remove K⁺ from the body (stop drugs, diuretics, binders or dialysis).',
          references: ['UK Kidney Association Clinical Practice Guideline: Treatment of Acute Hyperkalaemia in Adults, 2023', 'SA STG/EML Hospital Level Adults, 2019 – Hyperkalaemia']
        },
        {
          id: 'hyponatraemia-hypercalcaemia',
          title: 'Hyponatraemia & Hypercalcaemia',
          content: 'Hyponatraemia approach: confirm low serum osmolality, assess volume status, check urine osmolality and urine sodium. Causes: diuretics, SIADH (TB, pneumonia, small cell cancer, drugs such as carbamazepine), heart failure, cirrhosis, hypothyroidism, adrenal insufficiency.\nSevere symptoms (seizures, coma): 150 ml of 3% saline IV over 20 min, repeat until Na⁺ rises by 5 mmol/L.\nLimit correction to ≤8–10 mmol/L in 24 h to avoid osmotic demyelination; chronic cases with alcohol, malnutrition or hypokalaemia are highest risk.\nHypercalcaemia: causes mainly primary hyperparathyroidism and malignancy (also TB/sarcoid). Treat with IV 0.9% saline 3–4 L/day, then IV zoledronic acid 4 mg (or pamidronate); steroids for granulomatous disease.',
          recallQuestion: 'What is the maximum safe correction rate of chronic hyponatraemia and why?',
          recallAnswer: 'No more than 8–10 mmol/L in 24 hours, to avoid osmotic demyelination syndrome.',
          references: ['European Clinical Practice Guideline on hyponatraemia (ESE/ESICM/ERBP), 2014', 'Society for Endocrinology Emergency Guidance: Acute hypercalcaemia, 2016']
        }
      ]
    },
    {
      id: 'nephrotic-septic-arthritis',
      systemId: 'dermatology-rheumatology',
      title: 'Septic Arthritis, Vasculitis & Nephrotic vs Nephritic Syndrome',
      frequency: 0,
      sourcePages: 'Exam scope breakdown',
      preview1Min: 'A hot swollen single joint is septic until aspirated. Nephrotic: proteinuria >3.5 g/day, hypoalbuminaemia, oedema. Nephritic: haematuria, hypertension, oliguria. In SA, HIV-associated nephropathy is a key cause.',
      redFlags: [
        'Monoarthritis with fever (septic arthritis)',
        'Rapidly rising creatinine with active urine sediment (rapidly progressive GN)',
        'Pulmonary haemorrhage with renal failure (pulmonary–renal syndrome)'
      ],
      tags: ['Septic arthritis', 'Joint aspiration', 'Vasculitis', 'ANCA', 'Nephrotic', 'HIVAN'],
      sections: [
        {
          id: 'septic-arthritis',
          title: 'Acute Monoarthritis & Septic Arthritis',
          content: 'Aspirate the joint before antibiotics: Gram stain, culture, cell count (>50 000 WBC/µL suggests sepsis), crystal microscopy; take blood cultures.\nOrganisms: Staphylococcus aureus most common; Neisseria gonorrhoeae in young sexually active adults (migratory arthritis, tenosynovitis, pustules); Salmonella in sickle cell disease.\nEmpirical treatment: cloxacillin IV (plus ceftriaxone if gonococcus suspected; vancomycin if MRSA risk) for 2 weeks IV then oral to complete 4–6 weeks.\nDrainage: repeated needle aspiration or arthroscopic washout. Crystals do not exclude infection — both can coexist.',
          recallQuestion: 'What must be done before giving antibiotics to a patient with a hot swollen knee?',
          recallAnswer: 'Aspirate the joint for Gram stain, culture, cell count and crystals, and take blood cultures.',
          references: ['BSR/BOA guideline: Management of the hot swollen joint in adults, 2006 (reaffirmed)', 'SA STG/EML Hospital Level Adults, 2019 – Septic arthritis']
        },
        {
          id: 'nephrotic-nephritic',
          title: 'Nephrotic vs Nephritic Syndrome & Vasculitis',
          content: 'Nephrotic: proteinuria >3.5 g/day (uPCR >300 mg/mmol), albumin <30 g/L, oedema, hyperlipidaemia; risk of VTE and infection. Causes: minimal change, FSGS (including HIV-associated nephropathy), membranous (hepatitis B, SLE, drugs, cancer), diabetes, amyloid.\nNephritic: haematuria with red cell casts, hypertension, oliguria, rising creatinine. Causes: post-streptococcal GN, IgA nephropathy, lupus nephritis, ANCA vasculitis, anti-GBM disease.\nWork-up: urine dipstick and microscopy, uPCR, HIV, hepatitis B/C, syphilis, ANA, complement, ANCA, anti-GBM, ultrasound, renal biopsy.\nManagement: ACE-I/ARB for proteinuria, diuretics, statin, anticoagulation if albumin very low; treat the cause (ART for HIVAN; steroids and immunosuppression for immune GN).',
          recallQuestion: 'How do nephrotic and nephritic syndromes differ?',
          recallAnswer: 'Nephrotic: heavy proteinuria (>3.5 g/day), hypoalbuminaemia and oedema; nephritic: haematuria with red cell casts, hypertension, oliguria and rising creatinine.',
          references: ['KDIGO Clinical Practice Guideline for the Management of Glomerular Diseases, 2021', 'KDIGO ANCA-associated vasculitis guideline update, 2024']
        }
      ]
    }
  ],
  sections: {}
};
