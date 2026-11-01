import type { ScopeAddition } from './types';

const sa = 'SA STG & EML Hospital Level Adults, 2019 Gastro & Hepatology; SAGES Clinical Guidelines';
const intl = 'ACG Clinical Guidelines: Upper GI Bleeding 2021; Acute Pancreatitis 2024; AASLD Cirrhosis Guidance 2021';

const section = (
  id: string,
  title: string,
  content: string,
  recallQuestion: string,
  recallAnswer: string,
  references: string[] = [sa, intl],
  examAnchor?: string
) => ({
  id,
  title,
  content,
  recallQuestion,
  recallAnswer,
  references,
  ...(examAnchor ? { examAnchor } : {})
});

export const gastroExamScope: ScopeAddition = {
  topics: [
    {
      id: 'gx-gerd',
      systemId: 'gastroenterology',
      title: 'Gastro-Oesophageal Reflux Disease (GERD) & Oesophagitis',
      frequency: 2,
      sourcePages: 'Past Exam Bank pp. 11, 57; Clinical Scope',
      preview1Min: 'Reflux occurs when the lower oesophageal sphincter barrier fails, allowing acidic gastric contents to injure oesophageal mucosa. Recognize cardinal retrosternal burning, identify ALARM red flags requiring urgent endoscopy, and apply structured lifestyle and stepwise PPI therapy.',
      redFlags: [
        'Dysphagia (difficulty swallowing) or odynophagia (painful swallowing)',
        'Unintentional weight loss, anorexia, or persistent vomiting',
        'Evidence of GI bleeding (melaena, haematemesis) or unexplained iron deficiency anaemia',
        'New-onset dyspepsia in a patient older than 45–50 years'
      ],
      tags: ['GERD', 'Heartburn', 'PPI', 'Oesophagitis', 'Barrett Oesophagus'],
      sections: [
        section(
          'gx-gerd-pathophysiology',
          'Pathophysiology and Mechanisms of Acid Reflux',
          'Mechanism: Gastro-oesophageal reflux disease develops when the physiological anti-reflux barrier at the gastro-oesophageal junction becomes incompetent. Transient lower oesophageal sphincter relaxations (TLESRs), low resting basal sphincter tone, hiatal hernia, impaired oesophageal peristaltic clearance, and delayed gastric emptying allow caustic gastric acid and pepsin to contact squamous oesophageal epithelium.\nAggravating factors: Increased intra-abdominal pressure from obesity and pregnancy; lifestyle triggers including cigarette smoking, alcohol, caffeine, chocolate, fatty or spicy foods, and citrus; and medications that lower sphincter pressure (calcium channel blockers, nitrates, theophylline, anticholinergics).\nClinical presentation: Typical symptoms include retrosternal burning heartburn (pyrosis) aggravated by lying flat or bending over, acid regurgitation (water brash), and belching. Atypical extra-oesophageal manifestations include chronic nocturnal dry cough, laryngitis, hoarseness, asthma exacerbations, and non-cardiac chest pain that can closely mimic angina pectoris.',
          'What are the primary physiological mechanisms causing GERD?',
          'Incompetence of the lower oesophageal sphincter (frequent transient relaxations or hypotensive tone), anatomical distortion from hiatal hernia, delayed gastric emptying, and impaired oesophageal acid clearance.'
        ),
        section(
          'gx-gerd-investigation-management',
          'Diagnostic Strategy, Endoscopy Indications and Stepped Treatment',
          'Diagnostic approach: In younger patients (<45–50 years) presenting with typical uncomplicated reflux symptoms and no red flags, an empirical 4- to 8-week trial of once-daily proton pump inhibitor (PPI) therapy (e.g. omeprazole 20 mg daily taken 30–60 minutes before breakfast) serves both as diagnostic test and treatment.\nEndoscopy indications: Upper GI endoscopy (gastroscopy) is mandatory if ALARM features appear (dysphagia, odynophagia, weight loss, persistent vomiting, anaemia, haematemesis) or when symptoms fail to respond to empirical standard PPI therapy, to evaluate for erosive oesophagitis, peptic stricture, or Barrett oesophagus.\nNon-pharmacological measures: Crucial lifestyle modifications include weight loss in overweight patients, smoking cessation, alcohol reduction, avoiding meals within 3 hours of reclining, elevating the head of the bed by 15–20 cm (using bed risers, not extra pillows which bend the waist), and dietary trigger avoidance.\nPharmacotherapy: Stepped escalation from H2-receptor antagonists to standard-dose PPIs, doubling to twice-daily PPI for severe erosive disease or refractory symptoms, before considering surgical fundoplication.',
          'When is upper GI endoscopy required in a patient with suspected GERD?',
          'When any ALARM features are present (dysphagia, weight loss, anaemia, vomiting, haematemesis), when onset occurs over age 45–50, or when typical symptoms fail to respond to 4–8 weeks of PPI therapy.',
          [sa, intl],
          'Exam anchor: Retrosternal burning after meals must be differentiated from cardiac ischemia; non-pharmacological care requires elevating the head of the bed, not just adding pillows.'
        )
      ]
    },
    {
      id: 'gx-splenomegaly',
      systemId: 'gastroenterology',
      title: 'Splenomegaly & Portal Hypertension Classification',
      frequency: 3,
      sourcePages: 'Past Exam Bank pp. 41, 42, 57; Clinical Scope',
      preview1Min: 'The normal spleen measures 8–12 cm; splenomegaly >20 cm is massive. Distinguish splenic enlargement from renal masses using clinical examination landmarks. Classify portal hypertension into pre-hepatic, intra-hepatic, and post-hepatic etiologies to direct diagnostic imaging and management.',
      redFlags: [
        'Massive splenomegaly with hypersplenism (severe pancytopenia and bleeding)',
        'Haematemesis or melaena indicating ruptured gastro-oesophageal varices',
        'Ascites with acute abdominal pain or fever suggesting spontaneous bacterial peritonitis',
        'Rapid splenic enlargement with left upper quadrant pain indicating splenic infarction or rupture'
      ],
      tags: ['Splenomegaly', 'Portal Hypertension', 'Caput Medusae', 'Hypersplenism', 'Budd-Chiari'],
      sections: [
        section(
          'gx-spleen-exam-features',
          'Anatomy, Palpation Landmarks and Examination Differences',
          'Anatomical features: The normal adult spleen measures 8–12 cm longitudinally, weighs 150 g, and lies obliquely beneath the left 9th to 11th ribs in the left upper quadrant. It must enlarge two- to three-fold before its anterior border becomes palpable below the left costal margin.\nClinical landmarks: An enlarged spleen moves infero-medially towards the right iliac fossa during deep inspiration; has a distinct anterior splenic notch; is dull to percussion over Traube space and the splenic mass; cannot be gotten above (the examiner hand cannot be inserted between the upper border and the rib margin); and is not bimanually ballotable.\nDifferentiating from left kidney: A renal mass is bimanually ballotable; can often be "gotten above"; moves vertically rather than infero-medially; is resonant to percussion anteriorly due to overlying colonic gas; and has no anterior notch.\nMassive splenomegaly: Defined clinically as extending >8 cm below the left costal margin or measuring >20 cm on ultrasound. Classic causes: chronic myeloid leukaemia (CML), myelofibrosis, visceral leishmaniasis (kala-azar), severe chronic malaria (hyperreactive malarial splenomegaly), Gaucher disease, and tropical splenomegaly syndrome.',
          'List four physical examination features that differentiate an enlarged spleen from an enlarged left kidney.',
          'The spleen moves infero-medially on inspiration (kidney moves vertically), possesses an anterior notch, is dull to percussion without overlying bowel resonance, cannot be gotten above, and is not bimanually ballotable.'
        ),
        section(
          'gx-portal-htn-classification',
          'Etiological Classification: Pre-hepatic, Intra-hepatic and Post-hepatic',
          'Portal venous system: The portal vein is formed by the confluence of the superior mesenteric and splenic veins, normally operating at pressures between 5–10 mmHg. Portal hypertension exists when the hepatic venous pressure gradient (HVPG) exceeds 5 mmHg; clinical complications arise when HVPG exceeds 10–12 mmHg.\nPre-hepatic causes: Portal vein thrombosis, splenic vein thrombosis (often secondary to chronic pancreatitis or pancreatic cancer), extrinsic compression by neoplastic lymph nodes, and congenital portal vein stenosis.\nIntra-hepatic causes:\n- Presinusoidal: Schistosomiasis (Schistosoma mansoni periportal pipestem fibrosis), early primary biliary cholangitis, congenital hepatic fibrosis.\n- Sinusoidal: Cirrhosis of any etiology (alcohol, chronic Hepatitis B and C, metabolic dysfunction-associated steatohepatitis MASH/NASH, Wilson disease, haemochromatosis), acute alcoholic hepatitis, fulminant hepatic failure.\n- Postsinusoidal: Sinusoidal obstruction syndrome (veno-occlusive disease, pyrrolizidine alkaloid toxicity), nodular regenerative hyperplasia.\nPost-hepatic causes: Budd-Chiari syndrome (hepatic vein thrombosis), inferior vena cava web or obstruction, constrictive pericarditis, and severe right-sided heart failure (cardiac cirrhosis).\nClinical sequelae: Collateral vessel formation producing oesophageal and gastric varices (haematemesis, melaena), caput medusae over the anterior abdominal wall, anorectal varices, congestive splenomegaly with hypersplenism (thrombocytopenia, leukopenia), and transudative ascites.',
          'Classify portal hypertension into pre-hepatic, intra-hepatic, and post-hepatic with two clinical examples of each.',
          'Pre-hepatic: portal vein thrombosis, splenic vein thrombosis. Intra-hepatic: cirrhosis (sinusoidal), schistosomiasis (presinusoidal). Post-hepatic: Budd-Chiari syndrome (hepatic vein thrombosis), constrictive pericarditis.'
        )
      ]
    },
    {
      id: 'gx-nausea-vomiting',
      systemId: 'gastroenterology',
      title: 'Diagnostic Approach to Nausea, Vomiting & Metabolic Alkalosis',
      frequency: 2,
      sourcePages: 'Past Exam Bank pp. 16, 46, 57; Clinical Scope',
      preview1Min: 'Nausea and vomiting arise from coordinated brainstem chemoreceptor and vagal reflex pathways. Differentiate serious mechanical, intracranial, and metabolic causes from benign self-limiting illness, and recognize the classic hypochloraemic hypokalaemic metabolic alkalosis produced by gastric acid loss.',
      redFlags: [
        'Projectile vomiting with severe morning headache or focal neurology (raised intracranial pressure)',
        'Feculent vomiting with severe abdominal distension and obstipation (bowel obstruction)',
        'Haematemesis or "coffee-ground" vomitus indicating active gastrointestinal bleeding',
        'Severe dehydration, hypotension, oliguria, or refractory confusion'
      ],
      tags: ['Nausea', 'Vomiting', 'Metabolic Alkalosis', 'Bowel Obstruction', 'Antiemetics'],
      sections: [
        section(
          'gx-nv-etiology-classification',
          'Etiological Categorization: Serious vs Non-Serious Causes',
          'Pathophysiology: Emesis is orchestrated by the vomiting centre in the medulla, receiving afferent signals from the chemoreceptor trigger zone (CTZ in the area postrema, responsive to toxins and uremia), vagal and visceral GI afferents, vestibular nuclei (motion sickness), and higher cortical centres (anticipatory nausea, psychogenic).\nNon-serious and self-limiting causes: First-trimester pregnancy (hyperemesis gravidarum if intractable), acute alcohol intoxication, acute viral gastroenteritis, dietary indiscretion, and transient medication side effects (NSAIDs, iron supplements, early antibiotics).\nSerious gastrointestinal causes: Mechanical mechanical small bowel obstruction (adhesions, incarcerated hernia), gastric outlet obstruction (peptic stricture, pyloric cancer), acute peritonitis, acute pancreatitis, acute cholecystitis/cholangitis, acute mesenteric ischaemia, and gastroparesis (diabetic autonomic neuropathy).\nSerious extra-intestinal causes:\n- Neurological: Raised intracranial pressure (brain tumour, subdural haematoma, meningitis), migraine, labyrinthitis.\n- Metabolic and endocrine: Diabetic ketoacidosis, Addisonian crisis, uremia in acute or chronic renal failure, severe hypercalcaemia.\n- Cardiovascular: Inferior wall acute myocardial infarction (vagal irritation presenting as nausea and diaphoresis).\n- Toxins and drugs: Digoxin toxicity, chemotherapy, opioid overdose.',
          'What are five life-threatening extra-intestinal causes of persistent nausea and vomiting?',
          'Diabetic ketoacidosis, acute adrenal (Addisonian) crisis, raised intracranial pressure (subdural/mass lesion), acute inferior myocardial infarction, and severe uremia.'
        ),
        section(
          'gx-nv-acid-base-management',
          'Metabolic Alkalosis Pathophysiology and Emergency Management',
          'Acid-base consequences: Protracted vomiting expels large volumes of gastric hydrochloric acid (HCl) containing hydrogen and chloride ions. This loss leaves excess bicarbonate in extracellular fluid, initiating metabolic alkalosis. Volume depletion activates the renin-angiotensin-aldosterone system (RAAS), stimulating renal distal tubular sodium reabsorption in exchange for potassium and hydrogen ion excretion. The resulting syndrome is hypochloraemic, hypokalaemic metabolic alkalosis with paradoxical aciduria.\nInitial investigations: Blood gas (pH >7.45, high bicarbonate, hypochloraemia); urea, creatinine, and electrolytes (assess acute kidney injury and hypokalaemia); full blood count, liver function tests, and serum amylase/lipase; supine abdominal radiograph or CT to exclude obstruction or perforation.\nResuscitation: Intravenous fluid replenishment with isotonic 0.9% normal saline (provides chloride to restore renal bicarbonate excretion) with supplemental potassium chloride (KCl) to correct cellular potassium deficits.\nAntiemetic pharmacotherapy: Dopamine D2 antagonists (metoclopramide 10 mg 8-hourly IV/oral, prochlorperazine) are first-line in general settings; 5-HT3 antagonists (ondansetron 4–8 mg IV) for severe nausea, chemotherapy, or post-operative vomiting; avoid metoclopramide if mechanical bowel obstruction is suspected due to prokinetic risk.',
          'Explain why persistent gastric vomiting causes hypokalaemia and metabolic alkalosis.',
          'Loss of gastric hydrochloric acid (H+ and Cl-) causes primary metabolic alkalosis. Secondary hypovolaemia activates aldosterone, driving renal potassium and proton excretion to conserve sodium, producing profound hypokalaemia and worsening alkalosis.'
        )
      ]
    }
  ],
  sections: {
    'peptic-ulcer-bleed': [
      section(
        'gx-pud-alarms-biopsy',
        'ALARM Signs, Gastric vs Duodenal Ulcers, and Edge Biopsy Rationale',
        'ALARM features in dyspepsia: Anaemia (unexplained iron deficiency), Loss of weight (unintentional), Anorexia, Recent onset or rapid progression in older individuals, Melaena or haematemesis, and Swallowing difficulty (dysphagia or odynophagia). Any single ALARM symptom mandates prompt upper GI endoscopy (gastroscopy).\nDuodenal vs gastric ulcers: Duodenal ulcers (more common, >90% linked to H. pylori) classically produce epigastric burning pain 2–3 hours after meals or during the night, relieved by food or antacids, causing weight gain. Gastric ulcers (strongly linked to NSAIDs) produce pain worsened immediately by eating, causing food avoidance, anorexia, and weight loss.\nBiopsy of ulcer edge rationale: When a gastric ulcer is identified at gastroscopy, multiple biopsies (at least 6–8) must be taken from the raised ulcer margin and edge rather than the necrotic ulcer base. Rationale: 1) Malignant gastric adenocarcinomas ulcerate and can closely mimic benign ulcers; 2) Biopsying the necrotic fibrous base carries a high risk of iatrogenic free perforation into the peritoneal cavity and yields non-diagnostic necrotic debris rather than viable tissue.\nEndoscopic hemostasis for active ulcer bleeding: Dual endoscopic therapy is superior to monotherapy: injection of dilute epinephrine (1:10,000) for local vasoconstriction and tamponade PLUS either mechanical application of through-the-scope hemoclips or thermal contact coagulation (heater probe/bipolar probe), followed by high-dose IV proton pump inhibitor infusion (e.g. omeprazole 80 mg bolus then 8 mg/hr for 72 hours).',
        'Why should gastric ulcer biopsies be taken from the ulcer edge rather than the ulcer base?',
        'The ulcer edge yields viable tissue to differentiate benign peptic ulceration from gastric adenocarcinoma; biopsying the thin, necrotic ulcer base carries a substantial risk of wall perforation and provides only non-diagnostic necrotic debris.',
        [sa, intl],
        'Exam anchor: ALARM mnemonic: Anaemia, Loss of weight, Anorexia, Recent onset, Melaena, Swallowing difficulty. Biopsy the edge to exclude cancer and prevent perforation.'
      ),
      section(
        'gx-gi-bleed-upper-lower',
        'Upper vs Lower Gastrointestinal Bleeding: Differentiation and Workup',
        'Upper GI bleed: Bleeding origin proximal to the ligament of Treitz (duodenojejunal junction). Clinical hallmarks: haematemesis (bright red blood indicates brisk fresh hemorrhage; dark coffee-ground emesis reflects gastric acid oxidation of hemoglobin to hematin) and melaena (black, tarry, foul-smelling stools from bacterial breakdown of blood over >=14 hours). Common causes: peptic ulcer disease (50%), gastro-oesophageal varices, Mallory-Weiss tears (mucosal lacerations at the gastro-oesophageal junction after severe retching), erosive gastritis, and Dieulafoy lesions.\nLower GI bleed: Bleeding origin distal to the ligament of Treitz. Clinical hallmark: haematochezia (fresh red or maroon blood passed per rectum, often mixed with stool). Common causes: diverticular bleeding (painless, brisk arterial), angiodysplasia (elderly, cecum/right colon), colorectal carcinoma and polyps, hemorrhoids and anal fissures, inflammatory bowel disease, and ischemic colitis (crampy pain in watershed areas like splenic flexure).\nMassive upper bleed mimic: A massive, catastrophic upper GI bleed with rapid transit time can occasionally present as bright red haematochezia with circulatory shock; a nasogastric aspirate or immediate upper endoscopy confirms upper source.\nInitial emergency algorithm: Resuscitate ABCs first: two large-bore IV cannulae (16–18G), fluid resuscitation with crystalloids, group and cross-match blood (transfuse threshold Hb <70 g/L; <80 g/L in cardiovascular disease), correct coagulopathy, initiate IV PPI infusion, administer IV terlipressin/octreotide and prophylactic ceftriaxone if cirrhosis/varices suspected, and perform urgent upper endoscopy within 24 hours (within 12 hours if hemodynamically unstable).',
        'How do haematemesis, coffee-ground vomitus, melaena, and haematochezia differentiate the bleeding source?',
        'Haematemesis and coffee-ground emesis signify an upper GI bleed proximal to the ligament of Treitz; melaena signifies slow upper GI or small bowel blood degraded by bacteria; haematochezia typically indicates lower GI bleeding, but can occur in massive, rapid upper GI haemorrhage with shock.'
      )
    ],
    'cirrhosis-sbp': [
      section(
        'gx-cld-stigmata-failure',
        'Stigmata of Chronic Liver Disease vs Manifestations of Acute Liver Failure',
        'Peripheral stigmata of chronic liver disease (cirrhosis): Result from hyperdynamic circulation, portosystemic shunting, altered estrogen/androgen metabolism, and nutritional deficits:\n- Hands: Palmar erythema (thenar/hypothenar redness from vasodilatation), leukonychia (white nails from hypoalbuminemia), Terry nails, clubbing (associated with hepatopulmonary syndrome), Dupuytren contracture (fibromatosis associated with chronic alcohol consumption), and asterixis (flapping tremor/negative myoclonus of outstretched wrists indicating metabolic encephalopathy).\n- Head and neck: Scleral icterus (jaundice), parotid gland enlargement (sialadenosis in alcohol misuse), paper money skin, telangiectasias.\n- Chest and abdomen: Spider naevi (central arteriole with radiating vessels in SVC distribution; >5 is abnormal), gynaecomastia, loss of axillary and pubic hair, caput medusae (distended radiating paraumbilical veins recanalizing the umbilical vein due to portal hypertension), and testicular atrophy.\nSigns of decompensated liver failure: True functional hepatic failure is characterized by severe acute disruption of synthetic and metabolic capacity: 1) Jaundice with rapidly rising total and conjugated bilirubin; 2) Coagulopathy with prolonged prothrombin time / INR >=1.5 uncorrectable by parenteral vitamin K; 3) Hepatic encephalopathy (confusion, agitation, altered sleep-wake cycle, asterixis, coma); 4) Hypoglycaemia (depleted glycogen stores and impaired gluconeogenesis); 5) Fetor hepaticus (musty sweet breath from dimethyl sulfide); and 6) Development of refractory ascites or hepatorenal syndrome.',
        'Distinguish the physical signs of chronic portal hypertension/hyperestrogenism from signs of acute hepatic failure.',
        'Chronic stigmata include spider naevi, palmar erythema, gynaecomastia, Dupuytren contracture, and caput medusae. True hepatic failure is indicated by hepatic encephalopathy, asterixis, marked coagulopathy (INR >=1.5), profound jaundice, hypoglycaemia, and fetor hepaticus.',
        [sa, intl],
        'Exam anchor: Asterixis and fetor hepaticus reflect hepatic encephalopathy; spider naevi and caput medusae indicate hyperdynamic shunting and portal hypertension. Note: Rickets is NOT a sign of liver failure.'
      ),
      section(
        'gx-encephalopathy-grading-triggers',
        'Hepatic Encephalopathy Grading (West Haven) and Reversible Precipitants',
        'Pathophysiology: Liver dysfunction and portosystemic shunts allow toxic gut-derived nitrogenous substances (predominantly ammonia, mercaptans, and GABA) to bypass hepatic urea cycle clearance and cross the blood-brain barrier, triggering astrocyte swelling and neurotoxicity.\nWest Haven Clinical Staging:\n- Grade 1: Trivial lack of awareness, euphoria or anxiety, shortened attention span, mild confusion, impaired performance of addition/subtraction, reversed sleep rhythm; asterixis absent or slight.\n- Grade 2: Lethargy or apathy, minimal disorientation for time or place, subtle personality changes, inappropriate behaviour, constructional apraxia (inability to draw a five-pointed star); easily elicited flapping tremor (asterixis).\n- Grade 3: Somnolence to semi-stupor, responsive to verbal stimuli, marked confusion, gross disorientation, bizarre behaviour; asterixis present.\n- Grade 4: Coma; unresponsive to verbal or noxious stimuli; decerebrate or decorticate posturing.\nReversible precipitating factors: 1) Gastrointestinal bleeding (blood protein load in the gut is converted to ammonia by bacterial flora); 2) Infection (spontaneous bacterial peritonitis, UTI, pneumonia, sepsis); 3) Electrolyte disturbances (hypokalaemia and metabolic alkalosis increase renal ammonia production and facilitate diffusion across blood-brain barrier); 4) Constipation (prolongs gut transit time and ammonia absorption); 5) Excessive dietary protein intake; 6) Sedatives, benzodiazepines, and opioids; 7) Dehydration and over-diuresis; 8) Acute alcohol binge or superadded viral hepatitis.\nTreatment: Identify and treat the precipitant immediately; administer non-absorbable disaccharide lactulose (20–30 mL 2–4 times daily, titrated to achieve 2–3 soft bowel movements per day; converts ammonia NH3 to unabsorbable ammonium NH4+ and acidifies colonic contents); add rifaximin 550 mg BD for secondary prophylaxis.',
        'Name five common reversible triggers of hepatic encephalopathy and the mechanism of lactulose therapy.',
        'Triggers: gastrointestinal bleeding, infection/SBP, hypokalaemia/metabolic alkalosis, constipation, sedatives/opioids, and dehydration. Lactulose acidifies colonic contents to trap ammonia as non-absorbable ammonium (NH4+) and promotes osmotic catharsis.'
      )
    ],
    'pancreatitis': [
      section(
        'gx-pancreatitis-causes-enzymes',
        'Etiology Beyond Alcohol, Enzyme Kinetics, and Severity Stratification',
        'Etiology of acute pancreatitis: Gallstones (35–45%) and alcohol binge (30–40%) are the most common. Non-alcohol etiologies include: 1) Gallstone biliary microlithiasis/sludge; 2) Hypertriglyceridaemia (serum fasting triglycerides >11.3 mmol/L or 1000 mg/dL); 3) Post-ERCP (endoscopic retrograde cholangiopancreatography); 4) Hypercalcaemia (hyperparathyroidism); 5) Medications (antiretrovirals e.g. didanosine, tenofovir, protease inhibitors; azathioprine, thiazides, furosemide, valproate); 6) Abdominal trauma (blunt steering-wheel injury); 7) Infections (mumps, cytomegalovirus, Coxsackievirus B); 8) Autoimmune pancreatitis (IgG4-related); 9) Genetic mutations (PRSS1, CFTR, SPINK1); and 10) Scorpion venom (Tityus trinitatis).\nEnzyme kinetics: Acinar cell injury triggers premature intra-acinar activation of trypsinogen to trypsin, leading to enzyme autodigestion, microvascular injury, and capillary permeability. Amylase rises within 6–12 hours and normalizes within 3–5 days (short half-life, excreted in urine). Lipase rises within 4–8 hours, peaks at 24 hours, and remains elevated for 8–14 days. Serum lipase is significantly more sensitive and specific than amylase (remains elevated longer and is not produced by salivary glands).\nRadiological signs on plain films: Abdominal radiograph may show the "sentinel loop" (focal dilated segment of jejunum near the inflamed pancreas) or the "colon cut-off sign" (abrupt cessation of gas in the splenic flexure of the colon due to phrenicocolic ligament spasm). Chest X-ray frequently reveals left-sided pleural effusion, elevated left hemidiaphragm, basilar atelectasis, or diffuse bilateral infiltrates indicating ARDS.\nPredicting severe pancreatitis: Serum C-reactive protein (CRP) >150 mg/L at 48 hours is an established independent biochemical predictor of pancreatic necrosis and severe disease. Bedside clinical scores (BISAP >=3, APACHE II >=8) also guide high-care/ICU admission.',
        'Why is serum lipase preferred over amylase in diagnosing acute pancreatitis, and what lab cutoff predicts severe disease at 48 hours?',
        'Lipase is more specific to pancreatic tissue, rises reliably, and remains elevated longer (8–14 days vs 3–5 days for amylase). A serum CRP >150 mg/L at 48 hours indicates severe necrotizing pancreatitis.'
      ),
      section(
        'gx-pancreatitis-complications',
        'Immediate and Chronic Complications of Pancreatitis',
        'Immediate local complications (0–4 weeks): Acute peripancreatic fluid collections (APFC), acute necrotic collections (ANC; containing fluid and solid necrotic debris), splenic vein thrombosis with left-sided portal hypertension and gastric varices, pseudoaneurysm of the splenic or gastroduodenal artery (risk of catastrophic rupture), and infected pancreatic necrosis (requires fine-needle aspiration or step-up catheter drainage).\nDelayed local complications (>4 weeks): Pancreatic pseudocyst (an encapsulated collection of enzyme-rich fluid with a well-defined non-epithelial fibrous wall, developing >=4 weeks after onset; can cause pain, biliary obstruction, or rupture) and walled-off necrosis (WON).\nSystemic complications: Systemic inflammatory response syndrome (SIRS), multiorgan dysfunction syndrome (MODS), acute respiratory distress syndrome (ARDS) from circulating phospholipase A2 damaging surfactant, hypocalcaemia (due to fat saponification in retroperitoneal fat), and hyperglycaemia.\nChronic pancreatitis: Characterized by chronic, irreversible inflammation leading to pancreatic parenchymal destruction and fibrosis. Cardinal clinical triad: 1) Intractable epigastric pain radiating to the back (partially eased by sitting forward); 2) Exocrine pancreatic insufficiency causing steatorrhoea (bulky, foul-smelling, pale stools that float and are difficult to flush) and fat-soluble vitamin malabsorption (vitamins A, D, E, K); and 3) Endocrine pancreatic insufficiency causing secondary diabetes mellitus ("pancreatogenic" or Type 3c diabetes).\nDiagnostic gold standard in chronic disease: Contrast-enhanced CT demonstrating coarse pancreatic calcifications, ductal dilatation, and parenchymal atrophy; fecal elastase-1 <200 µg/g stool confirms exocrine insufficiency (<100 µg/g indicates severe deficiency).',
        'What is the classic clinical triad of chronic pancreatitis, and what test confirms exocrine failure?',
        'Triad: chronic epigastric pain radiating to the back (relieved sitting forward), steatorrhoea (fat malabsorption), and diabetes mellitus. Fecal elastase-1 (<200 µg/g) confirms exocrine pancreatic insufficiency.'
      )
    ],
    'dysphagia-ascites-saag': [
      section(
        'gx-ascites-saag-peritonitis',
        'Ascites Workup: SAAG Cutoffs, Paracentesis Analysis, and SBP Rules',
        'Ascites mechanism: Transudation or exudation of fluid into the peritoneal cavity. Clinical examination detects ascites when fluid exceeds 1500 mL via flank dullness, shifting dullness (most sensitive clinical sign), and fluid thrill/wave (specific for massive tense ascites).\nDiagnostic paracentesis: Mandatory in any newly discovered ascites or any cirrhotic patient admitted with clinical deterioration, fever, abdominal pain, encephalopathy, or renal decline.\nSerum-Ascites Albumin Gradient (SAAG): Calculated as: SAAG = [Serum Albumin] - [Ascitic Fluid Albumin] (measured on samples drawn on the same day).\n- High SAAG (>=11 g/L or >=1.1 g/dL) signifies PORTAL HYPERTENSION (increased hydrostatic sinusoidal pressure driving transudation):\n  * Cirrhosis (alcoholic, viral, MASH)\n  * Cardiac ascites / congestive heart failure / constrictive pericarditis (ascitic total protein is often high >25 g/L due to intact sinusoidal endothelium)\n  * Budd-Chiari syndrome (hepatic vein outflow obstruction)\n  * Massive liver metastases\n- Low SAAG (<11 g/L or <1.1 g/dL) signifies NORMAL PORTAL PRESSURE (diseased peritoneal membrane with altered permeability or lymphatic obstruction):\n  * Peritoneal carcinomatosis (metastatic ovarian, gastric, colonic malignancy; cytology positive)\n  * Tuberculous peritonitis (lymphocytic exudate, elevated adenosine deaminase ADA >30–40 U/L, positive GeneXpert)\n  * Nephrotic syndrome (profound hypoalbuminemia; low protein)\n  * Pancreatic ascites (high ascitic fluid amylase >1000 U/L)\n  * Biliary ascites (high fluid bilirubin greater than serum)\n  * Chylous ascites (milky fluid, triglycerides >2.2 mmol/L)\nSpontaneous Bacterial Peritonitis (SBP): Spontaneous infection of ascitic fluid without an intra-abdominal surgically treatable source. Diagnosis requires an ascitic fluid absolute polymorphonuclear neutrophil (PMN) count >=250 cells/µL (0.25 x 10^9/L). Monomicrobial infection is typical (Escherichia coli, Klebsiella pneumoniae, Streptococcus pneumoniae). Macroscopic appearance is cloudy or turbid. Immediate management: IV ceftriaxone 2 g daily or cefotaxime for 5 days PLUS IV albumin (1.5 g/kg within 6 hours, followed by 1.0 g/kg on day 3) to prevent hepatorenal syndrome and reduce mortality.',
        'How does the SAAG distinguish cirrhosis from peritoneal tuberculosis, and what diagnostic threshold confirms SBP?',
        'SAAG >=11 g/L indicates portal hypertension (cirrhosis, heart failure); SAAG <11 g/L indicates non-portal peritoneal pathology (TB, carcinomatosis, nephrotic syndrome). SBP is diagnosed when ascitic fluid absolute neutrophil count (PMN) is >=250 cells/µL.'
      ),
      section(
        'gx-dysphagia-bulbar-pseudobulbar',
        'Dysphagia Diagnostic Algorithm: Motility vs Mechanical & Bulbar vs Pseudobulbar',
        'Clinical differentiation of dysphagia:\n1. Solids and liquids simultaneously from symptom onset: Suggests a neuromuscular MOTILITY disorder:\n   - Achalasia (failure of lower oesophageal sphincter relaxation and aperistalsis; "bird-beak" sign on barium swallow)\n   - Diffuse oesophageal spasm (corky/corkscrew oesophagus on barium swallow, severe retrosternal chest pain)\n   - Systemic sclerosis / scleroderma (atrophy of smooth muscle, aperistalsis, severe acid reflux)\n   - Oropharyngeal neuromuscular disease (stroke, Parkinson, myasthenia gravis, bulbar palsy)\n2. Solids first, progressing over time to liquids: Suggests a progressive MECHANICAL / STRUCTURAL obstruction:\n   - Benign: Peptic stricture (longstanding GERD history), Schatzki lower oesophageal mucosal ring, oesophageal web (Plummer-Vinson syndrome: IDA, koilonychia, web)\n   - Malignant: Oesophageal squamous cell carcinoma or adenocarcinoma (rapidly progressive over weeks/months, profound weight loss, anorexia, older age)\nBulbar vs Pseudobulbar Palsy differentiation:\n- Bulbar Palsy: Lower motor neuron (LMN) lesion of the motor nuclei of cranial nerves IX, X, XI, XII in the medulla oblongata (causes: motor neuron disease / ALS, Guillain-Barré syndrome, myasthenia gravis, poliomyelitis, brainstem stroke). Clinical signs: flaccid, wasted, fasciculating tongue; absent gag reflex; normal or absent jaw jerk; quiet, hoarse, or nasal speech; difficulty coughing.\n- Pseudobulbar Palsy: Upper motor neuron (UMN) bilateral lesion of the corticobulbar tracts leading to the medulla (causes: bilateral cerebrovascular disease / lacunar strokes, multiple sclerosis, motor neuron disease). Clinical signs: spastic, contracted, immobile tongue with NO wasting and NO fasciculations; exaggerated/hyperactive gag reflex; brisk or exaggerated jaw jerk; strained, spastic dysarthria; and pseudobulbar affect (pathological, uncontrolled, mood-incongruent laughing or weeping / emotional lability).',
        'Compare the tongue examination, jaw jerk, and speech findings in bulbar palsy versus pseudobulbar palsy.',
        'Bulbar (LMN): tongue is flaccid, wasted, and fasciculating; jaw jerk is normal or absent; speech is nasal and quiet. Pseudobulbar (UMN): tongue is spastic and contracted without wasting or fasciculations; jaw jerk is exaggerated/brisk; speech is strained/spastic with emotional lability.'
      ),
      section(
        'gx-hepatitis-serology-interpretation',
        'Viral Hepatitis Profiles: Hepatitis A Transmission and Complete Hepatitis B Serology',
        'Hepatitis A virus (HAV): Picornavirus transmitted predominantly via the faeco-oral route through contaminated food or water, shellfish, crowded environments, and poor sanitation. Clinical features: acute self-limiting illness with prodromal malaise, anorexia, nausea, fever, followed by right upper quadrant tenderness, dark urine, pale stools, and jaundice. Never progresses to chronic infection or cirrhosis. Diagnosis: serum anti-HAV IgM antibodies (rises rapidly during acute illness, detectable from week 2 to month 6). Anti-HAV IgG indicates lifelong immunity from prior natural infection or vaccination.\nHepatitis B virus (HBV) serological marker interpretation:\n1. HBsAg (Hepatitis B surface antigen): First marker to appear (1–6 months after exposure); indicates presence of active Hepatitis B infection (either acute infection or chronic carrier if persisting >6 months).\n2. Anti-HBs (Antibody to HBsAg): Neutralizing protective antibody. Presence indicates recovery and lifelong immunity from prior cleared infection OR immunity conferred by Hepatitis B vaccination.\n3. Anti-HBc (Antibody to Hepatitis B core antigen):\n   - IgM anti-HBc: Indicates acute or recent infection (<6 months); sole marker during the "window period" when HBsAg has disappeared but anti-HBs is not yet detectable.\n   - IgG anti-HBc: Indicates past exposure or chronic infection; persists for life. CRITICAL: Anti-HBc is NEVER present in individuals immunized solely with the recombinant Hepatitis B vaccine!\n4. HBeAg (Hepatitis B envelope antigen): Marker of active viral replication and high infectivity.\n5. Anti-HBe: Indicates seroconversion to low viral replication and reduced infectivity.\n6. HBV DNA (PCR): Quantitative viral load measuring replication status and guiding antiviral therapy (tenofovir, entecavir).\nClassic Serological Scenarios:\n- Acute Hepatitis B: HBsAg (+), IgM anti-HBc (+), HBeAg (+), Anti-HBs (-).\n- Chronic Hepatitis B (active): HBsAg (+) >6 months, IgG anti-HBc (+), IgM anti-HBc (-), Anti-HBs (-), HBV DNA elevated.\n- Natural immunity after cleared infection: HBsAg (-), Anti-HBs (+), IgG anti-HBc (+).\n- Vaccination immunity: Anti-HBs (+) alone; HBsAg (-) and Anti-HBc (-).',
        'How does the Hepatitis B serological panel differentiate natural immunity from vaccine-induced immunity?',
        'Both states feature protective positive Anti-HBs antibodies. Natural immunity is confirmed by positive Anti-HBc (IgG) from prior viral exposure; vaccine-induced immunity features isolated Anti-HBs positivity with negative Anti-HBc.'
      ),
      section(
        'gx-diarrhoea-dysentery-algorithm',
        'Diarrhoea Classifications, Causes of Bloody Dysentery and Stool Testing',
        'Classification: Acute diarrhoea lasts <14 days (most commonly infective gastroenteritis, toxin-mediated food poisoning, or acute medication side effects). Persistent diarrhoea lasts 14–29 days. Chronic diarrhoea lasts >=30 days (malabsorption, inflammatory bowel disease, endocrine disorders, functional IBS, colonic neoplasm).\nInfective bloody diarrhoea (Dysentery): Stool containing visible blood and mucus associated with tenesmus and fever. Major bacterial pathogens: 1) Shigella dysenteriae / flexneri (produces Shiga toxin, causes severe mucosal ulceration and leukocytic exudate); 2) Salmonella enterica (non-typhoid, poultry/eggs); 3) Campylobacter jejuni (undercooked poultry, curved seagull-shaped rod, can trigger Guillain-Barré syndrome); 4) Enterohaemorrhagic E. coli (EHEC / STEC O157:H7; contaminated beef, produces Shiga-like toxin, avoid antibiotics because they increase risk of Haemolytic Uraemic Syndrome HUS); 5) Entamoeba histolytica (amoebic dysentery with flask-shaped colonic ulcers and potential amoebic liver abscess); 6) Clostridioides difficile (pseudomembranous colitis following antibiotic exposure).\nNon-infective bloody diarrhoea: Ulcerative colitis (continuous mucosal inflammation from rectum proximally), Crohn disease (transmural skip lesions), ischaemic colitis (elderly, vascular disease, severe post-prandial cramping), colonic adenocarcinoma, and large adenomatous polyps.\nStool laboratory workup: 1) Stool Microscopy, Culture & Sensitivity (MC&S) to identify bacterial pathogens and fecal leukocytes; 2) Stool ova, cysts, and parasites (wet mount and iodine stain for Entamoeba cysts, Giardia trophozoites, Cryptosporidium); 3) C. difficile toxin PCR and glutamate dehydrogenase (GDH); 4) Faecal calprotectin (distinguishes organic inflammatory bowel disease from functional irritable bowel syndrome); 5) Faecal occult blood test (FOBT) or Faecal Immunochemical Test (FIT) for occult blood.',
        'Name four bacterial causes of bloody diarrhoea (dysentery) and explain why antibiotics are withheld in suspected EHEC/STEC O157:H7.',
        'Bacterial causes: Shigella, Salmonella, Campylobacter, and Enterohaemorrhagic E. coli (EHEC O157:H7). In EHEC/STEC, antibiotics increase bacterial release of Shiga-like toxins, significantly raising the risk of Haemolytic Uraemic Syndrome (HUS).'
      )
    ]
  }
};
