import type { ScopeAddition } from './types';

export const gastroScope: ScopeAddition = {
  topics: [
    {
      id: 'viral-hepatitis-dili',
      systemId: 'gastroenterology',
      title: 'Viral Hepatitis B & Drug-Induced Liver Injury (TB Drugs)',
      frequency: 0,
      sourcePages: 'Exam scope breakdown',
      preview1Min: 'Read hepatitis B serology systematically. TDF-containing ART treats HBV in co-infection. Stop TB drugs when ALT >3× ULN with symptoms or >5× without, then reintroduce sequentially.',
      redFlags: [
        'Jaundice with confusion or INR >1.5 (acute liver failure)',
        'ALT rise with jaundice on TB treatment',
        'Stopping tenofovir in HBV co-infection (hepatitis flare)'
      ],
      tags: ['HBV', 'HBsAg', 'Tenofovir', 'DILI', 'TB drugs', 'Rechallenge'],
      sections: [
        {
          id: 'hbv-serology',
          title: 'Hepatitis B Serology & Treatment',
          content: 'HBsAg positive = current infection (chronic if >6 months).\nAnti-HBc IgM = acute infection. Anti-HBc IgG with negative HBsAg and positive anti-HBs = past cleared infection.\nAnti-HBs alone = vaccinated.\nHBeAg = high replication and infectivity.\nTreatment: tenofovir (TDF) or entecavir for chronic HBV with raised ALT and viral load, cirrhosis, or HIV co-infection. In HIV/HBV co-infection use a TDF + 3TC (or FTC) based regimen such as TLD; never stop tenofovir abruptly.\nScreen for hepatocellular carcinoma with ultrasound ± AFP every 6 months in cirrhosis.',
          recallQuestion: 'What serology pattern indicates past cleared hepatitis B infection?',
          recallAnswer: 'HBsAg negative, anti-HBc IgG positive and anti-HBs positive.',
          references: ['WHO Guidelines for the prevention, diagnosis, care and treatment of chronic hepatitis B, 2024', 'SA National Guidelines for the Management of Viral Hepatitis, 2019']
        },
        {
          id: 'tb-dili',
          title: 'Anti-TB Drug-Induced Liver Injury',
          content: 'Hepatotoxic drugs: isoniazid, rifampicin and pyrazinamide (ethambutol is not hepatotoxic).\nStop all hepatotoxic TB drugs if ALT >3× upper limit with symptoms or jaundice, or >5× upper limit without symptoms.\nExclude viral hepatitis, alcohol, and other drugs (e.g. cotrimoxazole, fluconazole, nevirapine).\nIf the patient is very ill or TB is severe, give a non-hepatotoxic bridging regimen (e.g. ethambutol, levofloxacin, an aminoglycoside or linezolid per specialist advice).\nRechallenge once ALT <2× upper limit: rifampicin first, then isoniazid; pyrazinamide is often omitted (then extend treatment to 9 months).',
          dangerBox: 'Never continue TB drugs in a jaundiced patient while "waiting to see" — fulminant hepatic failure can follow.',
          recallQuestion: 'At what ALT levels must hepatotoxic TB drugs be stopped?',
          recallAnswer: 'ALT >3× upper limit of normal with symptoms or jaundice, or >5× upper limit without symptoms.',
          references: ['SA National TB Management Guidelines, 2023', 'ATS Official Statement: Hepatotoxicity of Antituberculosis Therapy, 2006']
        }
      ]
    },
    {
      id: 'ibd-lower-gi-bleed',
      systemId: 'gastroenterology',
      title: 'Inflammatory Bowel Disease & Lower GI Bleeding',
      frequency: 0,
      sourcePages: 'Exam scope breakdown',
      preview1Min: 'Ulcerative colitis vs Crohn disease. Truelove and Witts for acute severe UC: admit, IV steroids, exclude infection (including CMV and amoebae). In SA, rule out intestinal TB before diagnosing Crohn disease.',
      redFlags: [
        '≥6 bloody stools daily with fever, tachycardia, anaemia or raised ESR (acute severe UC)',
        'Colonic dilatation >6 cm (toxic megacolon)',
        'Haemodynamic instability with rectal bleeding (consider brisk upper GI source)'
      ],
      tags: ['Ulcerative colitis', 'Crohn', 'Truelove & Witts', 'Intestinal TB', 'Lower GI bleed'],
      sections: [
        {
          id: 'uc-vs-crohn',
          title: 'UC vs Crohn Disease & Acute Severe Colitis',
          content: 'Ulcerative colitis: continuous mucosal inflammation starting in the rectum; bloody diarrhoea; associated with primary sclerosing cholangitis; smoking is protective.\nCrohn disease: mouth-to-anus, skip lesions, transmural, granulomas; fistulae, strictures, perianal disease; smoking worsens it.\nAcute severe UC (Truelove and Witts): ≥6 bloody stools/day plus any of pulse >90, temp >37.8 °C, Hb <105 g/L, ESR >30.\nManagement: admit, IV hydrocortisone 100 mg 6-hourly, VTE prophylaxis, stool cultures and C. difficile, AXR; rescue therapy (infliximab or ciclosporin) or colectomy if no response by day 3.\nIntestinal TB mimics ileocaecal Crohn disease — check CXR, GeneXpert and biopsies for caseating granulomas before immunosuppression.',
          recallQuestion: 'What are the Truelove and Witts criteria for acute severe ulcerative colitis?',
          recallAnswer: '≥6 bloody stools per day plus at least one systemic sign: pulse >90, temperature >37.8 °C, Hb <105 g/L or ESR >30 mm/h.',
          references: ['British Society of Gastroenterology IBD guideline, 2025', 'ECCO Guidelines on Ulcerative Colitis, 2022']
        },
        {
          id: 'lower-gi-bleed',
          title: 'Approach to Lower GI Bleeding',
          content: 'Causes: diverticular disease, angiodysplasia, haemorrhoids, colorectal cancer, colitis (IBD, infective, ischaemic).\nResuscitate first: two large-bore cannulae, crossmatch, restrictive transfusion (Hb threshold 70 g/L, or 80 g/L in cardiovascular disease).\nUse the shock index (HR/SBP >1) to identify unstable bleeding; unstable patients need CT angiography and exclusion of an upper GI source (up to 15% of brisk "lower" bleeds) with gastroscopy.\nStable patients: colonoscopy after bowel preparation.\nPersistent bleeding: interventional radiology embolisation, then surgery.',
          recallQuestion: 'In a patient with haemodynamically unstable fresh rectal bleeding, which source must be excluded and how?',
          recallAnswer: 'A brisk upper GI bleed, excluded with urgent gastroscopy (after CT angiography if the patient remains unstable).',
          references: ['British Society of Gastroenterology Acute Lower GI Bleeding guideline, 2019', 'ACG Clinical Guideline: Management of Patients With Acute Lower GI Bleeding, 2023']
        }
      ]
    }
  ],
  sections: {}
};
