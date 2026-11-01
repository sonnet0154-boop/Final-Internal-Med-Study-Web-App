import type { ScopeAddition } from './types';

export const dermatologyScope: ScopeAddition = {
  topics: [
    {
      id: 'common-skin-hiv-derm',
      systemId: 'dermatology-rheumatology',
      title: 'Cellulitis, Psoriasis, Eczema & HIV-Related Skin Disease',
      frequency: 0,
      sourcePages: 'Exam scope breakdown',
      preview1Min: 'Cellulitis: spreading erythema, treat for Strep/Staph. Psoriasis: well-demarcated silvery plaques on extensors. Eczema: itchy flexural patches. In HIV, think Kaposi sarcoma, papular pruritic eruption and drug rashes.',
      redFlags: [
        'Pain out of proportion to skin findings (necrotising fasciitis)',
        'Erythroderma (>90% skin involvement)',
        'Rash with mucosal involvement after a new drug (SJS/TEN)'
      ],
      tags: ['Cellulitis', 'Psoriasis', 'Eczema', 'Kaposi sarcoma', 'HIV skin', 'Drug rash'],
      sections: [
        {
          id: 'cellulitis-psoriasis-eczema',
          title: 'Cellulitis, Psoriasis & Eczema',
          content: 'Cellulitis: unilateral spreading warm erythema with fever; usually Streptococcus pyogenes or Staphylococcus aureus. Treat with oral flucloxacillin or cloxacillin (or IV if systemically unwell); look for portal of entry such as tinea pedis. Bilateral red legs are usually not cellulitis (consider venous eczema).\nPsoriasis: well-demarcated erythematous plaques with silvery scale on extensors and scalp, nail pitting, Koebner phenomenon; can be severe in HIV. Treatment: emollients, topical steroids, coal tar, vitamin D analogues; methotrexate or phototherapy for extensive disease. Avoid systemic steroids (rebound pustular flare).\nAtopic eczema: itchy, ill-defined flexural patches; emollients, soap substitutes and topical steroids by potency; treat secondary infection.',
          recallQuestion: 'Why should systemic steroids be avoided in psoriasis?',
          recallAnswer: 'Withdrawal can trigger a severe rebound, including generalised pustular psoriasis or erythroderma.',
          references: ['SA STG/EML Primary Health Care, 2024 – Skin conditions', 'NICE NG141 Cellulitis and erysipelas: antimicrobial prescribing, 2019', 'NICE CG153 Psoriasis, 2012 (updated 2017)']
        },
        {
          id: 'hiv-skin',
          title: 'HIV-Related Skin Disease',
          content: 'Kaposi sarcoma: purple papules, plaques or nodules on skin, palate and legs, often with lymphoedema; caused by HHV-8. Check oral cavity, stool for blood and CXR for visceral disease. Start ART promptly; chemotherapy (paclitaxel or doxorubicin) for extensive or visceral KS.\nPapular pruritic eruption: very itchy papules on limbs, a marker of advanced HIV — improves with ART; antihistamines and topical steroids.\nSeborrhoeic dermatitis: greasy scale on face and scalp; ketoconazole cream/shampoo.\nHerpes zoster in a young adult: test for HIV; aciclovir within 72 hours.\nDrug rashes: cotrimoxazole, nevirapine and efavirenz commonly cause rashes — stop the drug if mucosal involvement, blistering, fever or raised ALT (DRESS/SJS).',
          recallQuestion: 'What virus causes Kaposi sarcoma and what is the first step in treatment?',
          recallAnswer: 'Human herpesvirus 8 (HHV-8); start antiretroviral therapy (adding chemotherapy for extensive or visceral disease).',
          references: ['Southern African HIV Clinicians Society Guideline on Kaposi sarcoma, 2018', 'SA National Consolidated Guidelines for HIV, 2023']
        }
      ]
    }
  ],
  sections: {}
};
