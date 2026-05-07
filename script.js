const TRANSLATIONS = {
  "en": {
    "page_title": "Poop Sheet — Pediatric Constipation Management",
    "header_emoji": "💩",
    "header_title": "Poop",
    "header_title_highlight": "Sheet",
    "header_subtitle": "Evidence-based strategies and weight-based PEG 3350 dosing for constipation in children, based on SickKids AboutKidsHealth, CHEO, and CPS guidelines.",
    "print_btn": "Print Sheet",
    "lang_selector_label": "Language",

    /* Section 1 */
    "s1_heading": "What is Constipation?",
    "defn_box_heading": "Clinical Definition",
    "bss_chip_1_label": "Bristol 1–2",
    "bss_chip_1_desc": "Constipation",
    "bss_chip_34_label": "Bristol 3–4",
    "bss_chip_34_desc": "Ideal",
    "bss_chip_67_label": "Bristol 6–7",
    "bss_chip_67_desc": "Diarrhea",
    "defn_note_html": "<strong>Constipation</strong> is defined as fewer than 2 bowel movements per week, or stools that are hard, dry, and painful to pass (Bristol types 1–2). Bristol types 3–4 are the target consistency — soft, well-formed, and easy to pass. Types 6–7 indicate diarrhea. Constipation is extremely common in children and is usually not serious — most cases respond well to dietary changes and laxatives.",
    "redflag_title": "Red Flag Symptoms — Seek Medical Attention",
    "redflag_1": "Blood in the stool",
    "redflag_2": "Ribbon-like or pencil-thin stools",
    "redflag_3": "Severe abdominal distension",
    "redflag_4": "Vomiting with constipation",
    "redflag_5": "No meconium passed within 48 hours of birth",
    "redflag_6": "Constipation beginning in the first month of life",
    "redflag_7": "Neurological symptoms (weakness, decreased tone)",

    /* Section 2 — calculator */
    "s2_heading": "PEG 3350 Dosing Calculator",
    "peg_box_heading": "About PEG 3350",
    "peg_box_html": "PEG 3350 is sold in Canada as <strong>Lax-A-Day</strong> and <strong>RestoraLAX</strong> (and generically). It is an osmotic laxative — tasteless and odourless. Suitable for children <strong>≥ 6 months</strong>. One standard sachet or one full RestoraLAX cap = <strong>17 g</strong>.",
    "label_weight": "Child's Weight",
    "weight_placeholder": "—",
    "warn_low_weight": "⚠️ Weight under 5 kg — confirm age ≥ 6 months before starting PEG 3350.",

    /* Phase labels */
    "phase_disimp_label": "Phase 1 — Disimpaction",
    "phase_maint_label": "Phase 2 — Maintenance",

    /* Disimpaction banner */
    "disimp_dose_label": "Disimpaction Dose",
    "disimp_dose_sub": "1.5 g/kg/day · max 100 g/day",
    "disimp_duration_label": "Duration",
    "disimp_duration_val": "3–6 days",
    "disimp_duration_sub": "Until disimpaction confirmed",
    "disimp_max_label": "Daily Maximum",
    "disimp_max_val": "100 g / 10 caps",
    "disimp_max_sub": "Physician guidance required",

    /* Disimpaction result card */
    "disimp_result_heading": "Disimpaction Dose — Calculated",
    "res_disimp_g": "Daily dose (g)",
    "res_disimp_cap": "Daily dose (caps)",
    "res_disimp_cap_sub": "17 g per cap",
    "res_disimp_split": "Split dose (g)",
    "res_disimp_split_cap": "Split dose (caps)",
    "res_disimp_cap_sub2": "17 g per cap",
    "disimp_group_daily": "Single Daily Dose",
    "disimp_group_split": "Split — Twice Daily (each dose)",
    "disimp_note_html": "<strong>Physician guidance required.</strong> Confirm impaction before starting. Give 1.5 g/kg/day for <strong>3–6 days</strong>. May be given as a single daily dose or split into two doses. Once disimpaction is confirmed (soft stool passed, abdomen soft), stop and transition immediately to maintenance dosing below. Maximum 100 g/day.",

    /* Maintenance banner */
    "maint_low_label": "Low End",
    "maint_low_sub": "0.4 g/kg/day",
    "maint_high_label": "High End",
    "maint_high_sub": "0.8 g/kg/day",
    "maint_duration_label": "Duration",
    "maint_duration_val": "Weeks–months",
    "maint_duration_sub": "Until regular habits established",
    "maint_max_label": "Daily Maximum",
    "maint_max_sub": "1 standard sachet / 1 full cap",

    /* Maintenance result card */
    "maint_result_heading": "Maintenance Dose — Calculated",
    "res_low_g": "Low end (g/day)",
    "res_high_g": "High end (g/day)",
    "res_cap_low": "Cap measure (low)",
    "res_cap_high": "Cap measure (high)",
    "res_cap_unit": "of a 17 g cap",
    "res_cap_unit2": "of a 17 g cap",
    "maint_note_html": "<strong>Start at the low end</strong> and titrate upward to achieve one soft stool per day. Effects may take 2–3 days. Maximum is 17 g/day (one standard Lax-A-Day / RestoraLAX sachet or one full cap). May be given as a single daily dose or split into two. Continue for <strong>weeks to months</strong> until regular bowel habits are well established before gradually weaning.",

    /* Mix card */
    "mix_heading": "How to Mix PEG 3350 (Lax-A-Day / RestoraLAX)",
    "mix_body_html": "Mix the powder in <strong>250 mL (1 cup)</strong> of water, juice, or milk. Stir until fully dissolved — it is <strong>tasteless and odourless</strong>. Can be mixed into a child's favourite drink. Do not mix with carbonated beverages. Suitable for children <strong>≥ 6 months</strong>.",

    /* Section 3 — strategies */
    "s3_heading": "Other Evidence-Based Strategies",
    "strat_fibre_title": "Dietary Fibre",
    "strat_fibre_target_html": "<strong>Target:</strong> child's age in years + 5 g/day (e.g. a 4-year-old needs ~9 g/day)",
    "strat_fibre_foods_html": "<strong>High-fibre foods:</strong> pears, prunes, apples (with skin), berries, broccoli, carrots, peas, oatmeal, whole wheat bread, bran cereals, beans, lentils",
    "strat_fibre_dairy": "Avoid excessive dairy (milk, cheese) — can worsen constipation",
    "strat_fibre_gradual": "Introduce fibre gradually to avoid gas and bloating",
    "strat_fluid_title": "Fluid Intake",
    "fluid_col_age": "Age",
    "fluid_col_amount": "Target / day",
    "fluid_age_1": "1–3 years",
    "fluid_amt_1": "~4 cups (1 L)",
    "fluid_age_2": "4–8 years",
    "fluid_amt_2": "~5 cups (1.2 L)",
    "fluid_age_3": "9–13 years",
    "fluid_amt_3": "~7–8 cups (1.7 L)",
    "strat_fluid_best": "Water and milk are best; limit juice to ≤ 125 mL/day for toddlers",
    "strat_fluid_prune_html": "<strong>Prune juice</strong> has evidence for mild constipation: 60–120 mL/day for infants >1 month; 125 mL/day for toddlers",
    "strat_toilet_title": "Toilet Routine",
    "strat_toilet_gcr_html": "Scheduled sitting <strong>after meals</strong> — gastrocolic reflex is strongest 20–30 min after eating",
    "strat_toilet_sit": "Sit for 5–10 minutes; avoid rushing or pressuring the child",
    "strat_toilet_stool_html": "Use a <strong>footstool</strong> so knees are above hips — squatting position relaxes the puborectalis muscle",
    "strat_toilet_praise": "Positive reinforcement — praise the attempt, not just success",
    "strat_activity_title": "Physical Activity",
    "strat_activity_motility": "Regular physical activity stimulates bowel motility",
    "strat_activity_goal": "Aim for 60 minutes of moderate activity per day for school-age children",
    "strat_activity_walk": "Even short walks after meals can help",
    "strat_behav_title": "Behavioural Strategies",
    "strat_behav_diary": "Keep a stool diary to track frequency, consistency, and any pain",
    "strat_behav_chart": "Reward charts for toilet sitting (not for producing a stool — reduces performance anxiety)",
    "strat_behav_accidents": "Avoid punishing accidents — withholding is often involuntary and not deliberate",
    "strat_behav_training": "For toilet-training age children: ensure readiness before training; regression during training is common with constipation",

    /* Section 4 — emergency */
    "s4_heading": "When to Seek Medical Attention",
    "emerg_title": "When to Seek Medical Attention",
    "emerg_tier_ed": "Go to the Emergency Department if:",
    "emerg_ed_1": "Blood in stool (significant amount)",
    "emerg_ed_2": "Severe abdominal pain or distension",
    "emerg_ed_3": "Bilious (green) vomiting with constipation",
    "emerg_ed_4": "Child appears very unwell or lethargic",
    "emerg_tier_doc": "See your doctor or nurse practitioner if:",
    "emerg_doc_1": "No bowel movement for more than 1 week despite home management",
    "emerg_doc_2": "Constipation has been present since birth or early infancy",
    "emerg_doc_3": "Child is losing weight or not growing well",
    "emerg_doc_4": "Painful anal fissures or rectal prolapse",
    "emerg_doc_5": "Urinary symptoms: recurrent UTIs or daytime wetting",
    "emerg_doc_6": "You are concerned for any reason",

    /* Footer */
    "footer_html": "<strong>Disclaimer:</strong> This sheet is a clinical reference aid. PEG 3350 doses are based on published Canadian pediatric guidelines (SickKids AboutKidsHealth, CHEO, CPS). Individual patient factors including age, organ function, concurrent medications, and clinical context must always be considered. This tool does not replace clinical judgment or individualized medical advice.",

    /* Shared display strings */
    "unit_g": "g",
    "unit_tsp": "tsp",
    "unit_cap": "cap",
    "dash": "—",
    "enter_weight": "Enter weight above"
  },

  /* ═══════════════════════════════════════════════════
     FRENCH
  ═══════════════════════════════════════════════════ */
  "fr": {
    "page_title": "Feuille Caca — Gestion de la Constipation Pédiatrique",
    "header_emoji": "💩",
    "header_title": "Feuille",
    "header_title_highlight": "Caca",
    "header_subtitle": "Stratégies fondées sur des données probantes et dosage du PEG 3350 selon le poids pour la constipation chez l'enfant, basées sur les lignes directrices de SickKids AboutKidsHealth, du CHEO et de la SCP.",
    "print_btn": "Imprimer",
    "lang_selector_label": "Langue",

    "s1_heading": "Qu'est-ce que la constipation?",
    "defn_box_heading": "Définition clinique",
    "bss_chip_1_label": "Bristol 1–2",
    "bss_chip_1_desc": "Constipation",
    "bss_chip_34_label": "Bristol 3–4",
    "bss_chip_34_desc": "Idéal",
    "bss_chip_67_label": "Bristol 6–7",
    "bss_chip_67_desc": "Diarrhée",
    "defn_note_html": "<strong>La constipation</strong> est définie comme moins de 2 selles par semaine, ou des selles dures, sèches et douloureuses à évacuer (types Bristol 1–2). Les types Bristol 3–4 sont la consistance cible — molles, bien formées et faciles à passer. Les types 6–7 indiquent la diarrhée. La constipation est extrêmement fréquente chez l'enfant et n'est généralement pas grave — la plupart des cas répondent bien aux changements alimentaires et aux laxatifs.",
    "redflag_title": "Signes d'alarme — Consulter un médecin",
    "redflag_1": "Sang dans les selles",
    "redflag_2": "Selles en ruban ou très minces",
    "redflag_3": "Distension abdominale sévère",
    "redflag_4": "Vomissements avec constipation",
    "redflag_5": "Absence de méconium dans les 48 heures suivant la naissance",
    "redflag_6": "Constipation débutant dans le premier mois de vie",
    "redflag_7": "Symptômes neurologiques (faiblesse, tonus diminué)",

    "s2_heading": "Calculateur de dosage du PEG 3350",
    "peg_box_heading": "À propos du PEG 3350",
    "peg_box_html": "Le PEG 3350 est vendu au Canada sous les noms de <strong>Lax-A-Day</strong> et <strong>RestoraLAX</strong> (et en version générique). C'est un laxatif osmotique — sans goût ni odeur. Convient aux enfants <strong>≥ 6 mois</strong>. Un sachet standard ou un bouchon plein de RestoraLAX = <strong>17 g</strong>.",
    "label_weight": "Poids de l'enfant",
    "weight_placeholder": "—",
    "warn_low_weight": "⚠️ Poids inférieur à 5 kg — confirmer l'âge ≥ 6 mois avant de commencer le PEG 3350.",

    "phase_disimp_label": "Phase 1 — Désimpaction",
    "phase_maint_label": "Phase 2 — Entretien",

    "disimp_dose_label": "Dose de désimpaction",
    "disimp_dose_sub": "1,5 g/kg/jour · max 100 g/jour",
    "disimp_duration_label": "Durée",
    "disimp_duration_val": "3–6 jours",
    "disimp_duration_sub": "Jusqu'à confirmation de la désimpaction",
    "disimp_max_label": "Maximum journalier",
    "disimp_max_val": "100 g / 10 bouchons",
    "disimp_max_sub": "Encadrement médical requis",

    "disimp_result_heading": "Dose de désimpaction — Calculée",
    "res_disimp_g": "Dose quotidienne (g)",
    "res_disimp_cap": "Dose quotidienne (bouchons)",
    "res_disimp_cap_sub": "17 g par bouchon",
    "res_disimp_split": "Dose fractionnée (g)",
    "res_disimp_split_cap": "Dose fractionnée (bouchons)",
    "res_disimp_cap_sub2": "17 g par bouchon",
    "disimp_group_daily": "Dose unique quotidienne",
    "disimp_group_split": "Fractionné — Deux fois par jour (chaque dose)",
    "disimp_note_html": "<strong>Encadrement médical requis.</strong> Confirmer l'impaction avant de commencer. Donner 1,5 g/kg/jour pendant <strong>3–6 jours</strong>. Peut être administré en dose unique ou en deux doses fractionnées. Une fois la désimpaction confirmée (selle molle évacuée, abdomen souple), cesser et passer immédiatement à la dose d'entretien ci-dessous. Maximum 100 g/jour.",

    "maint_low_label": "Dose minimale",
    "maint_low_sub": "0,4 g/kg/jour",
    "maint_high_label": "Dose maximale",
    "maint_high_sub": "0,8 g/kg/jour",
    "maint_duration_label": "Durée",
    "maint_duration_val": "Semaines–mois",
    "maint_duration_sub": "Jusqu'à l'établissement d'habitudes régulières",
    "maint_max_label": "Maximum journalier",
    "maint_max_sub": "1 sachet standard / 1 bouchon plein",

    "maint_result_heading": "Dose d'entretien — Calculée",
    "res_low_g": "Dose minimale (g/jour)",
    "res_high_g": "Dose maximale (g/jour)",
    "res_cap_low": "Mesure en bouchon (min)",
    "res_cap_high": "Mesure en bouchon (max)",
    "res_cap_unit": "d'un bouchon de 17 g",
    "res_cap_unit2": "d'un bouchon de 17 g",
    "maint_note_html": "<strong>Commencer à la dose minimale</strong> et augmenter progressivement pour obtenir une selle molle par jour. Les effets peuvent prendre 2–3 jours. Le maximum est de 17 g/jour (un sachet standard Lax-A-Day / RestoraLAX ou un bouchon plein). Peut être administré en dose unique ou en deux doses. Poursuivre pendant <strong>des semaines à des mois</strong> jusqu'à l'établissement de bonnes habitudes intestinales avant de diminuer progressivement.",

    "mix_heading": "Comment mélanger le PEG 3350 (Lax-A-Day / RestoraLAX)",
    "mix_body_html": "Mélanger la poudre dans <strong>250 mL (1 tasse)</strong> d'eau, de jus ou de lait. Remuer jusqu'à dissolution complète — il est <strong>sans goût ni odeur</strong>. Peut être mélangé à la boisson préférée de l'enfant. Ne pas mélanger avec des boissons gazeuses. Convient aux enfants <strong>≥ 6 mois</strong>.",

    "s3_heading": "Autres stratégies fondées sur des données probantes",
    "strat_fibre_title": "Fibres alimentaires",
    "strat_fibre_target_html": "<strong>Objectif :</strong> âge de l'enfant en années + 5 g/jour (ex. un enfant de 4 ans a besoin d'environ 9 g/jour)",
    "strat_fibre_foods_html": "<strong>Aliments riches en fibres :</strong> poires, pruneaux, pommes (avec la peau), baies, brocoli, carottes, pois, flocons d'avoine, pain de blé entier, céréales son, haricots, lentilles",
    "strat_fibre_dairy": "Éviter les produits laitiers en excès (lait, fromage) — peuvent aggraver la constipation",
    "strat_fibre_gradual": "Introduire les fibres progressivement pour éviter les gaz et les ballonnements",
    "strat_fluid_title": "Apport en liquides",
    "fluid_col_age": "Âge",
    "fluid_col_amount": "Objectif / jour",
    "fluid_age_1": "1–3 ans",
    "fluid_amt_1": "~4 tasses (1 L)",
    "fluid_age_2": "4–8 ans",
    "fluid_amt_2": "~5 tasses (1,2 L)",
    "fluid_age_3": "9–13 ans",
    "fluid_amt_3": "~7–8 tasses (1,7 L)",
    "strat_fluid_best": "L'eau et le lait sont les meilleurs choix; limiter le jus à ≤ 125 mL/jour pour les tout-petits",
    "strat_fluid_prune_html": "<strong>Le jus de pruneaux</strong> a démontré son efficacité pour la constipation légère : 60–120 mL/jour pour les nourrissons >1 mois; 125 mL/jour pour les tout-petits",
    "strat_toilet_title": "Routine aux toilettes",
    "strat_toilet_gcr_html": "Séances planifiées <strong>après les repas</strong> — le réflexe gastro-colique est le plus fort 20–30 min après avoir mangé",
    "strat_toilet_sit": "S'asseoir 5–10 minutes; éviter de brusquer ou de faire pression sur l'enfant",
    "strat_toilet_stool_html": "Utiliser un <strong>marchepied</strong> pour que les genoux soient au-dessus des hanches — la position accroupie détend le muscle pubo-rectal",
    "strat_toilet_praise": "Renforcement positif — féliciter l'effort, pas seulement le succès",
    "strat_activity_title": "Activité physique",
    "strat_activity_motility": "L'activité physique régulière stimule la motilité intestinale",
    "strat_activity_goal": "Viser 60 minutes d'activité modérée par jour pour les enfants d'âge scolaire",
    "strat_activity_walk": "Même de courtes marches après les repas peuvent aider",
    "strat_behav_title": "Stratégies comportementales",
    "strat_behav_diary": "Tenir un journal des selles pour suivre la fréquence, la consistance et toute douleur",
    "strat_behav_chart": "Tableaux de récompenses pour les séances aux toilettes (non pour la production de selles — réduit l'anxiété de performance)",
    "strat_behav_accidents": "Éviter de punir les accidents — la rétention est souvent involontaire et non délibérée",
    "strat_behav_training": "Pour les enfants en apprentissage de la propreté : s'assurer de la disposition avant l'entraînement; la régression pendant l'entraînement est fréquente en cas de constipation",

    "s4_heading": "Quand consulter un médecin",
    "emerg_title": "Quand consulter un médecin",
    "emerg_tier_ed": "Aller aux urgences si :",
    "emerg_ed_1": "Sang dans les selles (quantité significative)",
    "emerg_ed_2": "Douleur ou distension abdominale sévère",
    "emerg_ed_3": "Vomissements bilieux (verts) avec constipation",
    "emerg_ed_4": "L'enfant semble très malade ou léthargique",
    "emerg_tier_doc": "Consulter votre médecin ou infirmier(ère) praticien(ne) si :",
    "emerg_doc_1": "Absence de selle depuis plus d'une semaine malgré la prise en charge à domicile",
    "emerg_doc_2": "Constipation présente depuis la naissance ou la petite enfance",
    "emerg_doc_3": "L'enfant perd du poids ou ne grandit pas bien",
    "emerg_doc_4": "Fissures anales douloureuses ou prolapsus rectal",
    "emerg_doc_5": "Symptômes urinaires : infections urinaires récurrentes ou énurésie diurne",
    "emerg_doc_6": "Vous êtes inquiet(e) pour quelque raison que ce soit",

    "footer_html": "<strong>Avis de non-responsabilité :</strong> Cette feuille est un aide-mémoire clinique. Les doses de PEG 3350 sont basées sur les lignes directrices pédiatriques canadiennes publiées (SickKids AboutKidsHealth, CHEO, SCP). Les facteurs propres à chaque patient, notamment l'âge, la fonction des organes, les médicaments concomitants et le contexte clinique, doivent toujours être pris en compte. Cet outil ne remplace pas le jugement clinique ni les conseils médicaux personnalisés.",

    "unit_g": "g",
    "unit_tsp": "c. à thé",
    "unit_cap": "bouchon",
    "dash": "—",
    "enter_weight": "Entrer le poids ci-dessus"
  },

  /* ═══════════════════════════════════════════════════
     SPANISH
  ═══════════════════════════════════════════════════ */
  "es": {
    "page_title": "Hoja del Popó — Manejo del Estreñimiento Pediátrico",
    "header_emoji": "💩",
    "header_title": "Hoja del",
    "header_title_highlight": "Popó",
    "header_subtitle": "Estrategias basadas en evidencia y dosificación de PEG 3350 según el peso para el estreñimiento en niños, basadas en las guías de SickKids AboutKidsHealth, CHEO y CPS.",
    "print_btn": "Imprimir",
    "lang_selector_label": "Idioma",

    "s1_heading": "¿Qué es el estreñimiento?",
    "defn_box_heading": "Definición clínica",
    "bss_chip_1_label": "Bristol 1–2",
    "bss_chip_1_desc": "Estreñimiento",
    "bss_chip_34_label": "Bristol 3–4",
    "bss_chip_34_desc": "Ideal",
    "bss_chip_67_label": "Bristol 6–7",
    "bss_chip_67_desc": "Diarrea",
    "defn_note_html": "<strong>El estreñimiento</strong> se define como menos de 2 deposiciones por semana, o heces duras, secas y dolorosas de evacuar (tipos Bristol 1–2). Los tipos Bristol 3–4 son la consistencia objetivo — blandas, bien formadas y fáciles de evacuar. Los tipos 6–7 indican diarrea. El estreñimiento es extremadamente frecuente en niños y generalmente no es grave — la mayoría de los casos responden bien a cambios en la dieta y laxantes.",
    "redflag_title": "Señales de alarma — Buscar atención médica",
    "redflag_1": "Sangre en las heces",
    "redflag_2": "Heces en forma de cinta o muy delgadas",
    "redflag_3": "Distensión abdominal severa",
    "redflag_4": "Vómitos con estreñimiento",
    "redflag_5": "Ausencia de meconio en las primeras 48 horas de vida",
    "redflag_6": "Estreñimiento desde el primer mes de vida",
    "redflag_7": "Síntomas neurológicos (debilidad, tono disminuido)",

    "s2_heading": "Calculadora de dosis de PEG 3350",
    "peg_box_heading": "Sobre el PEG 3350",
    "peg_box_html": "El PEG 3350 se vende en Canadá como <strong>Lax-A-Day</strong> y <strong>RestoraLAX</strong> (y genérico). Es un laxante osmótico — sin sabor ni olor. Apto para niños <strong>≥ 6 meses</strong>. Un sobre estándar o una tapa llena de RestoraLAX = <strong>17 g</strong>.",
    "label_weight": "Peso del niño",
    "weight_placeholder": "—",
    "warn_low_weight": "⚠️ Peso menor de 5 kg — confirmar edad ≥ 6 meses antes de iniciar PEG 3350.",

    "phase_disimp_label": "Fase 1 — Desimpactación",
    "phase_maint_label": "Fase 2 — Mantenimiento",

    "disimp_dose_label": "Dosis de desimpactación",
    "disimp_dose_sub": "1,5 g/kg/día · máx 100 g/día",
    "disimp_duration_label": "Duración",
    "disimp_duration_val": "3–6 días",
    "disimp_duration_sub": "Hasta confirmar desimpactación",
    "disimp_max_label": "Máximo diario",
    "disimp_max_val": "100 g / 10 tapas",
    "disimp_max_sub": "Requiere supervisión médica",

    "disimp_result_heading": "Dosis de desimpactación — Calculada",
    "res_disimp_g": "Dosis diaria (g)",
    "res_disimp_cap": "Dosis diaria (tapas)",
    "res_disimp_cap_sub": "17 g por tapa",
    "res_disimp_split": "Dosis fraccionada (g)",
    "res_disimp_split_cap": "Dosis fraccionada (tapas)",
    "res_disimp_cap_sub2": "17 g por tapa",
    "disimp_group_daily": "Dosis única diaria",
    "disimp_group_split": "Fraccionado — Dos veces al día (cada dosis)",
    "disimp_note_html": "<strong>Requiere supervisión médica.</strong> Confirmar impactación antes de iniciar. Dar 1,5 g/kg/día durante <strong>3–6 días</strong>. Puede administrarse en dosis única o dividida en dos. Una vez confirmada la desimpactación (heces blandas, abdomen blando), detener y pasar inmediatamente a la dosis de mantenimiento. Máximo 100 g/día.",

    "maint_low_label": "Dosis mínima",
    "maint_low_sub": "0,4 g/kg/día",
    "maint_high_label": "Dosis máxima",
    "maint_high_sub": "0,8 g/kg/día",
    "maint_duration_label": "Duración",
    "maint_duration_val": "Semanas–meses",
    "maint_duration_sub": "Hasta establecer hábitos regulares",
    "maint_max_label": "Máximo diario",
    "maint_max_sub": "1 sobre estándar / 1 tapa llena",

    "maint_result_heading": "Dosis de mantenimiento — Calculada",
    "res_low_g": "Dosis mínima (g/día)",
    "res_high_g": "Dosis máxima (g/día)",
    "res_cap_low": "Medida en tapa (mín)",
    "res_cap_high": "Medida en tapa (máx)",
    "res_cap_unit": "de una tapa de 17 g",
    "res_cap_unit2": "de una tapa de 17 g",
    "maint_note_html": "<strong>Comenzar con la dosis mínima</strong> y aumentar gradualmente para lograr una deposición blanda al día. Los efectos pueden tardar 2–3 días. El máximo es de 17 g/día (un sobre estándar Lax-A-Day / RestoraLAX o una tapa llena). Puede administrarse en dosis única o dividida. Continuar durante <strong>semanas a meses</strong> hasta establecer hábitos intestinales regulares antes de reducir gradualmente.",

    "mix_heading": "Cómo preparar el PEG 3350 (Lax-A-Day / RestoraLAX)",
    "mix_body_html": "Disolver el polvo en <strong>250 mL (1 taza)</strong> de agua, jugo o leche. Revolver hasta disolución completa — es <strong>sin sabor ni olor</strong>. Se puede mezclar con la bebida favorita del niño. No mezclar con bebidas carbonatadas. Apto para niños <strong>≥ 6 meses</strong>.",

    "s3_heading": "Otras estrategias basadas en evidencia",
    "strat_fibre_title": "Fibra dietética",
    "strat_fibre_target_html": "<strong>Objetivo:</strong> edad del niño en años + 5 g/día (ej. un niño de 4 años necesita ~9 g/día)",
    "strat_fibre_foods_html": "<strong>Alimentos ricos en fibra:</strong> peras, ciruelas pasas, manzanas (con cáscara), bayas, brócoli, zanahorias, arvejas, avena, pan integral, cereales de salvado, frijoles, lentejas",
    "strat_fibre_dairy": "Evitar exceso de lácteos (leche, queso) — pueden empeorar el estreñimiento",
    "strat_fibre_gradual": "Introducir la fibra gradualmente para evitar gases e hinchazón",
    "strat_fluid_title": "Ingesta de líquidos",
    "fluid_col_age": "Edad",
    "fluid_col_amount": "Objetivo / día",
    "fluid_age_1": "1–3 años",
    "fluid_amt_1": "~4 tazas (1 L)",
    "fluid_age_2": "4–8 años",
    "fluid_amt_2": "~5 tazas (1,2 L)",
    "fluid_age_3": "9–13 años",
    "fluid_amt_3": "~7–8 tazas (1,7 L)",
    "strat_fluid_best": "El agua y la leche son las mejores opciones; limitar el jugo a ≤ 125 mL/día en niños pequeños",
    "strat_fluid_prune_html": "<strong>El jugo de ciruela pasa</strong> tiene evidencia para el estreñimiento leve: 60–120 mL/día para lactantes >1 mes; 125 mL/día para niños pequeños",
    "strat_toilet_title": "Rutina en el baño",
    "strat_toilet_gcr_html": "Sentarse programado <strong>después de las comidas</strong> — el reflejo gastrocólico es más fuerte 20–30 min después de comer",
    "strat_toilet_sit": "Sentarse 5–10 minutos; evitar presionar o apurar al niño",
    "strat_toilet_stool_html": "Usar un <strong>banquito</strong> para que las rodillas queden por encima de las caderas — la posición en cuclillas relaja el músculo puborrectal",
    "strat_toilet_praise": "Refuerzo positivo — elogiar el intento, no solo el éxito",
    "strat_activity_title": "Actividad física",
    "strat_activity_motility": "La actividad física regular estimula la motilidad intestinal",
    "strat_activity_goal": "Buscar 60 minutos de actividad moderada diaria para niños en edad escolar",
    "strat_activity_walk": "Incluso caminatas cortas después de comer pueden ayudar",
    "strat_behav_title": "Estrategias conductuales",
    "strat_behav_diary": "Llevar un diario de deposiciones para registrar frecuencia, consistencia y cualquier dolor",
    "strat_behav_chart": "Tablas de recompensas por sentarse en el baño (no por hacer deposición — reduce la ansiedad por desempeño)",
    "strat_behav_accidents": "Evitar castigar los accidentes — la retención suele ser involuntaria y no deliberada",
    "strat_behav_training": "Para niños en entrenamiento del baño: asegurar disposición antes de entrenar; la regresión durante el entrenamiento es común con estreñimiento",

    "s4_heading": "Cuándo buscar atención médica",
    "emerg_title": "Cuándo buscar atención médica",
    "emerg_tier_ed": "Ir a urgencias si:",
    "emerg_ed_1": "Sangre en heces (cantidad significativa)",
    "emerg_ed_2": "Dolor o distensión abdominal severa",
    "emerg_ed_3": "Vómitos biliosos (verdes) con estreñimiento",
    "emerg_ed_4": "El niño parece muy enfermo o letárgico",
    "emerg_tier_doc": "Consultar al médico o enfermero(a) si:",
    "emerg_doc_1": "Sin deposición por más de 1 semana a pesar del manejo en casa",
    "emerg_doc_2": "Estreñimiento presente desde el nacimiento o la infancia temprana",
    "emerg_doc_3": "El niño está perdiendo peso o no crece bien",
    "emerg_doc_4": "Fisuras anales dolorosas o prolapso rectal",
    "emerg_doc_5": "Síntomas urinarios: infecciones urinarias recurrentes o incontinencia diurna",
    "emerg_doc_6": "Usted está preocupado(a) por alguna razón",

    "footer_html": "<strong>Descargo de responsabilidad:</strong> Esta hoja es una ayuda de referencia clínica. Las dosis de PEG 3350 se basan en guías pediátricas canadienses publicadas (SickKids AboutKidsHealth, CHEO, CPS). Siempre deben considerarse los factores individuales del paciente, incluyendo edad, función orgánica, medicamentos concomitantes y contexto clínico. Esta herramienta no reemplaza el juicio clínico ni el consejo médico individualizado.",

    "unit_g": "g",
    "unit_tsp": "cdta",
    "unit_cap": "tapa",
    "dash": "—",
    "enter_weight": "Ingresar peso arriba"
  },

  /* ═══════════════════════════════════════════════════
     PORTUGUESE (Brazilian)
  ═══════════════════════════════════════════════════ */
  "pt": {
    "page_title": "Folha do Cocô — Manejo da Constipação Pediátrica",
    "header_emoji": "💩",
    "header_title": "Folha do",
    "header_title_highlight": "Cocô",
    "header_subtitle": "Estratégias baseadas em evidências e dosagem de PEG 3350 por peso para constipação em crianças, baseadas nas diretrizes do SickKids AboutKidsHealth, CHEO e CPS.",
    "print_btn": "Imprimir",
    "lang_selector_label": "Idioma",

    "s1_heading": "O que é constipação?",
    "defn_box_heading": "Definição clínica",
    "bss_chip_1_label": "Bristol 1–2",
    "bss_chip_1_desc": "Constipação",
    "bss_chip_34_label": "Bristol 3–4",
    "bss_chip_34_desc": "Ideal",
    "bss_chip_67_label": "Bristol 6–7",
    "bss_chip_67_desc": "Diarreia",
    "defn_note_html": "<strong>Constipação</strong> é definida como menos de 2 evacuações por semana, ou fezes duras, secas e dolorosas (tipos Bristol 1–2). Os tipos Bristol 3–4 são a consistência ideal — macias, bem formadas e fáceis de evacuar. Os tipos 6–7 indicam diarreia. A constipação é muito comum em crianças e geralmente não é grave — a maioria dos casos responde bem a mudanças na dieta e laxantes.",
    "redflag_title": "Sinais de Alerta — Procure Atenção Médica",
    "redflag_1": "Sangue nas fezes",
    "redflag_2": "Fezes em fita ou muito finas",
    "redflag_3": "Distensão abdominal grave",
    "redflag_4": "Vômitos com constipação",
    "redflag_5": "Ausência de mecônio nas primeiras 48 horas de vida",
    "redflag_6": "Constipação iniciando no primeiro mês de vida",
    "redflag_7": "Sintomas neurológicos (fraqueza, tônus diminuído)",

    "s2_heading": "Calculadora de dosagem do PEG 3350",
    "peg_box_heading": "Sobre o PEG 3350",
    "peg_box_html": "O PEG 3350 é vendido no Canadá como <strong>Lax-A-Day</strong> e <strong>RestoraLAX</strong> (e genérico). É um laxante osmótico — sem sabor e sem odor. Adequado para crianças <strong>≥ 6 meses</strong>. Um sachê padrão ou uma tampa cheia de RestoraLAX = <strong>17 g</strong>.",
    "label_weight": "Peso da criança",
    "weight_placeholder": "—",
    "warn_low_weight": "⚠️ Peso abaixo de 5 kg — confirmar idade ≥ 6 meses antes de iniciar PEG 3350.",

    "phase_disimp_label": "Fase 1 — Desimpactação",
    "phase_maint_label": "Fase 2 — Manutenção",

    "disimp_dose_label": "Dose de desimpactação",
    "disimp_dose_sub": "1,5 g/kg/dia · máx 100 g/dia",
    "disimp_duration_label": "Duração",
    "disimp_duration_val": "3–6 dias",
    "disimp_duration_sub": "Até confirmar desimpactação",
    "disimp_max_label": "Máximo diário",
    "disimp_max_val": "100 g / 10 tampas",
    "disimp_max_sub": "Orientação médica necessária",

    "disimp_result_heading": "Dose de desimpactação — Calculada",
    "res_disimp_g": "Dose diária (g)",
    "res_disimp_cap": "Dose diária (tampas)",
    "res_disimp_cap_sub": "17 g por tampa",
    "res_disimp_split": "Dose fracionada (g)",
    "res_disimp_split_cap": "Dose fracionada (tampas)",
    "res_disimp_cap_sub2": "17 g por tampa",
    "disimp_group_daily": "Dose única diária",
    "disimp_group_split": "Fracionado — Duas vezes ao dia (cada dose)",
    "disimp_note_html": "<strong>Orientação médica necessária.</strong> Confirmar impactação antes de iniciar. Dar 1,5 g/kg/dia por <strong>3–6 dias</strong>. Pode ser administrado em dose única ou dividido em duas doses. Após confirmar a desimpactação (fezes macias, abdome mole), interromper e passar imediatamente para a dose de manutenção abaixo. Máximo 100 g/dia.",

    "maint_low_label": "Dose mínima",
    "maint_low_sub": "0,4 g/kg/dia",
    "maint_high_label": "Dose máxima",
    "maint_high_sub": "0,8 g/kg/dia",
    "maint_duration_label": "Duração",
    "maint_duration_val": "Semanas–meses",
    "maint_duration_sub": "Até estabelecer hábitos regulares",
    "maint_max_label": "Máximo diário",
    "maint_max_sub": "1 sachê padrão / 1 tampa cheia",

    "maint_result_heading": "Dose de manutenção — Calculada",
    "res_low_g": "Dose mínima (g/dia)",
    "res_high_g": "Dose máxima (g/dia)",
    "res_cap_low": "Medida em tampa (mín)",
    "res_cap_high": "Medida em tampa (máx)",
    "res_cap_unit": "de uma tampa de 17 g",
    "res_cap_unit2": "de uma tampa de 17 g",
    "maint_note_html": "<strong>Começar com a dose mínima</strong> e ajustar para cima até obter uma evacuação macia por dia. Os efeitos podem levar 2–3 dias. O máximo é de 17 g/dia (um sachê padrão Lax-A-Day / RestoraLAX ou uma tampa cheia). Pode ser administrado em dose única ou dividido. Continuar por <strong>semanas a meses</strong> até estabelecer hábitos intestinais regulares antes de reduzir gradualmente.",

    "mix_heading": "Como preparar o PEG 3350 (Lax-A-Day / RestoraLAX)",
    "mix_body_html": "Dissolver o pó em <strong>250 mL (1 xícara)</strong> de água, suco ou leite. Mexer até dissolver completamente — é <strong>sem sabor e sem odor</strong>. Pode ser misturado na bebida preferida da criança. Não misturar com bebidas carbonatadas. Adequado para crianças <strong>≥ 6 meses</strong>.",

    "s3_heading": "Outras estratégias baseadas em evidências",
    "strat_fibre_title": "Fibra alimentar",
    "strat_fibre_target_html": "<strong>Meta:</strong> idade da criança em anos + 5 g/dia (ex. uma criança de 4 anos precisa de ~9 g/dia)",
    "strat_fibre_foods_html": "<strong>Alimentos ricos em fibra:</strong> peras, ameixas, maçãs (com casca), frutas vermelhas, brócolis, cenouras, ervilhas, aveia, pão integral, cereais de farelo, feijão, lentilhas",
    "strat_fibre_dairy": "Evitar excesso de laticínios (leite, queijo) — podem piorar a constipação",
    "strat_fibre_gradual": "Introduzir fibras gradualmente para evitar gases e inchaço",
    "strat_fluid_title": "Ingestão de líquidos",
    "fluid_col_age": "Idade",
    "fluid_col_amount": "Meta / dia",
    "fluid_age_1": "1–3 anos",
    "fluid_amt_1": "~4 xícaras (1 L)",
    "fluid_age_2": "4–8 anos",
    "fluid_amt_2": "~5 xícaras (1,2 L)",
    "fluid_age_3": "9–13 anos",
    "fluid_amt_3": "~7–8 xícaras (1,7 L)",
    "strat_fluid_best": "Água e leite são as melhores opções; limitar suco a ≤ 125 mL/dia para crianças pequenas",
    "strat_fluid_prune_html": "<strong>Suco de ameixa</strong> tem evidência para constipação leve: 60–120 mL/dia para bebês >1 mês; 125 mL/dia para crianças pequenas",
    "strat_toilet_title": "Rotina no banheiro",
    "strat_toilet_gcr_html": "Sentar programado <strong>após as refeições</strong> — o reflexo gastrocólico é mais forte 20–30 min após comer",
    "strat_toilet_sit": "Sentar por 5–10 minutos; evitar apressar ou pressionar a criança",
    "strat_toilet_stool_html": "Usar um <strong>apoio para os pés</strong> para que os joelhos fiquem acima do quadril — a posição de agachamento relaxa o músculo puborretal",
    "strat_toilet_praise": "Reforço positivo — elogiar a tentativa, não apenas o sucesso",
    "strat_activity_title": "Atividade física",
    "strat_activity_motility": "A atividade física regular estimula a motilidade intestinal",
    "strat_activity_goal": "Buscar 60 minutos de atividade moderada por dia para crianças em idade escolar",
    "strat_activity_walk": "Até pequenas caminhadas após as refeições podem ajudar",
    "strat_behav_title": "Estratégias comportamentais",
    "strat_behav_diary": "Manter um diário de fezes para registrar frequência, consistência e qualquer dor",
    "strat_behav_chart": "Tabelas de recompensa por sentar no banheiro (não por evacuar — reduz a ansiedade de desempenho)",
    "strat_behav_accidents": "Evitar punir acidentes — a retenção costuma ser involuntária e não deliberada",
    "strat_behav_training": "Para crianças em treinamento do banheiro: garantir prontidão antes do treinamento; a regressão durante o treinamento é comum com constipação",

    "s4_heading": "Quando procurar atenção médica",
    "emerg_title": "Quando procurar atenção médica",
    "emerg_tier_ed": "Vá ao Pronto-Socorro se:",
    "emerg_ed_1": "Sangue nas fezes (quantidade significativa)",
    "emerg_ed_2": "Dor ou distensão abdominal grave",
    "emerg_ed_3": "Vômitos biliosos (verdes) com constipação",
    "emerg_ed_4": "A criança parece muito doente ou letárgica",
    "emerg_tier_doc": "Consulte seu médico ou enfermeiro(a) se:",
    "emerg_doc_1": "Sem evacuação por mais de 1 semana apesar do manejo em casa",
    "emerg_doc_2": "Constipação presente desde o nascimento ou a infância precoce",
    "emerg_doc_3": "A criança está perdendo peso ou não está crescendo bem",
    "emerg_doc_4": "Fissuras anais dolorosas ou prolapso retal",
    "emerg_doc_5": "Sintomas urinários: infecções urinárias recorrentes ou enurese diurna",
    "emerg_doc_6": "Você está preocupado(a) por qualquer motivo",

    "footer_html": "<strong>Aviso:</strong> Esta folha é um auxílio de referência clínica. As doses de PEG 3350 são baseadas em diretrizes pediátricas canadenses publicadas (SickKids AboutKidsHealth, CHEO, CPS). Fatores individuais do paciente, incluindo idade, função orgânica, medicamentos concomitantes e contexto clínico, devem sempre ser considerados. Esta ferramenta não substitui o julgamento clínico nem o aconselhamento médico individualizado.",

    "unit_g": "g",
    "unit_tsp": "col. chá",
    "unit_cap": "tampa",
    "dash": "—",
    "enter_weight": "Insira o peso acima"
  },

  /* ═══════════════════════════════════════════════════
     SIMPLIFIED CHINESE
  ═══════════════════════════════════════════════════ */
  "zh-CN": {
    "page_title": "便便指南 — 儿科便秘管理",
    "header_emoji": "💩",
    "header_title": "便便",
    "header_title_highlight": "指南",
    "header_subtitle": "基于循证的便秘管理策略及儿童PEG 3350体重计算剂量，参考SickKids AboutKidsHealth、CHEO及CPS指南。",
    "print_btn": "打印",
    "lang_selector_label": "语言",

    "s1_heading": "什么是便秘？",
    "defn_box_heading": "临床定义",
    "bss_chip_1_label": "Bristol 1–2",
    "bss_chip_1_desc": "便秘",
    "bss_chip_34_label": "Bristol 3–4",
    "bss_chip_34_desc": "理想",
    "bss_chip_67_label": "Bristol 6–7",
    "bss_chip_67_desc": "腹泻",
    "defn_note_html": "<strong>便秘</strong>定义为每周排便少于2次，或大便干硬、干燥、排出困难（Bristol 1–2型）。Bristol 3–4型是目标性状——柔软、成形、易于排出。6–7型表示腹泻。便秘在儿童中极为常见，通常不严重——大多数情况通过饮食调整和通便药物可得到良好改善。",
    "redflag_title": "警示症状 — 请就医",
    "redflag_1": "大便中有血",
    "redflag_2": "带状或铅笔状细便",
    "redflag_3": "严重腹胀",
    "redflag_4": "便秘伴呕吐",
    "redflag_5": "出生后48小时内未排胎粪",
    "redflag_6": "出生后第一个月即出现便秘",
    "redflag_7": "神经系统症状（无力、肌张力下降）",

    "s2_heading": "PEG 3350 剂量计算器",
    "peg_box_heading": "关于PEG 3350",
    "peg_box_html": "PEG 3350在加拿大以<strong>Lax-A-Day</strong>和<strong>RestoraLAX</strong>（及仿制药）出售。它是一种渗透性通便药——无色无味。适用于<strong>≥ 6个月</strong>的儿童。一个标准小包或一满盖RestoraLAX = <strong>17 g</strong>。",
    "label_weight": "儿童体重",
    "weight_placeholder": "—",
    "warn_low_weight": "⚠️ 体重低于5 kg — 开始使用PEG 3350前请确认年龄≥ 6个月。",

    "phase_disimp_label": "第一阶段 — 解除嵌塞",
    "phase_maint_label": "第二阶段 — 维持治疗",

    "disimp_dose_label": "解除嵌塞剂量",
    "disimp_dose_sub": "1.5 g/kg/天 · 最多100 g/天",
    "disimp_duration_label": "疗程",
    "disimp_duration_val": "3–6天",
    "disimp_duration_sub": "直至确认解除嵌塞",
    "disimp_max_label": "每日最大剂量",
    "disimp_max_val": "100 g / 10盖",
    "disimp_max_sub": "需在医生指导下使用",

    "disimp_result_heading": "解除嵌塞剂量 — 计算结果",
    "res_disimp_g": "每日剂量（g）",
    "res_disimp_cap": "每日剂量（盖）",
    "res_disimp_cap_sub": "每盖17 g",
    "res_disimp_split": "分次剂量（g）",
    "res_disimp_split_cap": "分次剂量（盖）",
    "res_disimp_cap_sub2": "每盖17 g",
    "disimp_group_daily": "每日单次剂量",
    "disimp_group_split": "分次 — 每日两次（每次剂量）",
    "disimp_note_html": "<strong>需在医生指导下使用。</strong>开始前确认嵌塞。给予1.5 g/kg/天，持续<strong>3–6天</strong>。可单次或分两次给药。一旦确认解除嵌塞（排出软便、腹部松软），立即停止并转为以下维持剂量。最大100 g/天。",

    "maint_low_label": "最低剂量",
    "maint_low_sub": "0.4 g/kg/天",
    "maint_high_label": "最高剂量",
    "maint_high_sub": "0.8 g/kg/天",
    "maint_duration_label": "疗程",
    "maint_duration_val": "数周至数月",
    "maint_duration_sub": "直至建立规律排便习惯",
    "maint_max_label": "每日最大剂量",
    "maint_max_sub": "1个标准包 / 1满盖",

    "maint_result_heading": "维持剂量 — 计算结果",
    "res_low_g": "最低剂量（g/天）",
    "res_high_g": "最高剂量（g/天）",
    "res_cap_low": "盖量（最低）",
    "res_cap_high": "盖量（最高）",
    "res_cap_unit": "（17 g盖）",
    "res_cap_unit2": "（17 g盖）",
    "maint_note_html": "<strong>从最低剂量开始</strong>，逐渐增量至每天一次软便。效果可能需2–3天。最大剂量为17 g/天（一个标准Lax-A-Day / RestoraLAX包或一满盖）。可单次或分两次给药。继续<strong>数周至数月</strong>直至建立规律排便习惯后逐渐减量。",

    "mix_heading": "如何冲调PEG 3350（Lax-A-Day / RestoraLAX）",
    "mix_body_html": "将粉末溶于<strong>250 mL（1杯）</strong>水、果汁或牛奶中。搅拌至完全溶解——<strong>无色无味</strong>。可混入儿童喜爱的饮料中。不要与碳酸饮料混合。适用于<strong>≥ 6个月</strong>的儿童。",

    "s3_heading": "其他循证策略",
    "strat_fibre_title": "膳食纤维",
    "strat_fibre_target_html": "<strong>目标：</strong>儿童年龄（岁）+ 5 g/天（例如4岁儿童需约9 g/天）",
    "strat_fibre_foods_html": "<strong>高纤维食物：</strong>梨、西梅、苹果（带皮）、浆果、西兰花、胡萝卜、豌豆、燕麦、全麦面包、麸皮谷物、豆类、扁豆",
    "strat_fibre_dairy": "避免过多乳制品（牛奶、奶酪）——可能加重便秘",
    "strat_fibre_gradual": "逐渐增加纤维摄入，以避免胀气和腹胀",
    "strat_fluid_title": "液体摄入",
    "fluid_col_age": "年龄",
    "fluid_col_amount": "目标/天",
    "fluid_age_1": "1–3岁",
    "fluid_amt_1": "约4杯（1 L）",
    "fluid_age_2": "4–8岁",
    "fluid_amt_2": "约5杯（1.2 L）",
    "fluid_age_3": "9–13岁",
    "fluid_amt_3": "约7–8杯（1.7 L）",
    "strat_fluid_best": "水和牛奶是最佳选择；幼儿每天果汁限量≤ 125 mL",
    "strat_fluid_prune_html": "<strong>西梅汁</strong>对轻度便秘有循证支持：>1个月婴儿每天60–120 mL；幼儿每天125 mL",
    "strat_toilet_title": "如厕训练",
    "strat_toilet_gcr_html": "安排<strong>饭后</strong>坐厕——胃结肠反射在进食后20–30分钟最强",
    "strat_toilet_sit": "坐5–10分钟；避免催促或给儿童施压",
    "strat_toilet_stool_html": "使用<strong>脚凳</strong>使膝盖高于臀部——蹲姿可放松耻骨直肠肌",
    "strat_toilet_praise": "正向强化——表扬尝试的行为，而不仅仅是成功",
    "strat_activity_title": "体育活动",
    "strat_activity_motility": "规律运动可促进肠道蠕动",
    "strat_activity_goal": "学龄儿童每天应进行60分钟中等强度活动",
    "strat_activity_walk": "饭后短暂散步也有帮助",
    "strat_behav_title": "行为策略",
    "strat_behav_diary": "记录大便日记，追踪排便频率、性状及任何疼痛",
    "strat_behav_chart": "为坐厕行为设置奖励表（而非为排便——有助于减少表现焦虑）",
    "strat_behav_accidents": "避免惩罚意外——憋便通常是无意识的，并非故意为之",
    "strat_behav_training": "对处于如厕训练年龄的儿童：训练前确认准备就绪；便秘期间训练退步很常见",

    "s4_heading": "何时就医",
    "emerg_title": "何时就医",
    "emerg_tier_ed": "如有以下情况请去急诊：",
    "emerg_ed_1": "大便中有血（明显量）",
    "emerg_ed_2": "严重腹痛或腹胀",
    "emerg_ed_3": "便秘伴胆汁性（绿色）呕吐",
    "emerg_ed_4": "儿童看起来非常不适或嗜睡",
    "emerg_tier_doc": "如有以下情况请就诊医生或执业护士：",
    "emerg_doc_1": "尽管在家处理，仍超过1周无排便",
    "emerg_doc_2": "便秘自出生或婴儿期早期即存在",
    "emerg_doc_3": "儿童体重减轻或发育不良",
    "emerg_doc_4": "疼痛性肛裂或直肠脱垂",
    "emerg_doc_5": "泌尿系统症状：反复泌尿道感染或日间遗尿",
    "emerg_doc_6": "您出于任何原因感到担忧",

    "footer_html": "<strong>免责声明：</strong>本指南为临床参考工具。PEG 3350剂量基于已发布的加拿大儿科指南（SickKids AboutKidsHealth、CHEO、CPS）。在使用时应始终考虑患者个体因素，包括年龄、器官功能、合并用药及临床情境。本工具不能替代临床判断或个体化医疗建议。",

    "unit_g": "g",
    "unit_tsp": "茶匙",
    "unit_cap": "盖",
    "dash": "—",
    "enter_weight": "请在上方输入体重"
  },

  /* ═══════════════════════════════════════════════════
     TRADITIONAL CHINESE
  ═══════════════════════════════════════════════════ */
  "zh-TW": {
    "page_title": "便便指南 — 兒科便秘管理",
    "header_emoji": "💩",
    "header_title": "便便",
    "header_title_highlight": "指南",
    "header_subtitle": "基於實證的便秘管理策略及兒童PEG 3350體重計算劑量，參考SickKids AboutKidsHealth、CHEO及CPS指引。",
    "print_btn": "列印",
    "lang_selector_label": "語言",

    "s1_heading": "什麼是便秘？",
    "defn_box_heading": "臨床定義",
    "bss_chip_1_label": "Bristol 1–2",
    "bss_chip_1_desc": "便秘",
    "bss_chip_34_label": "Bristol 3–4",
    "bss_chip_34_desc": "理想",
    "bss_chip_67_label": "Bristol 6–7",
    "bss_chip_67_desc": "腹瀉",
    "defn_note_html": "<strong>便秘</strong>定義為每週排便少於2次，或大便乾硬、乾燥、排出困難（Bristol 1–2型）。Bristol 3–4型是目標性狀——柔軟、成形、易於排出。6–7型表示腹瀉。便秘在兒童中極為常見，通常不嚴重——大多數情況通過飲食調整和通便藥物可得到良好改善。",
    "redflag_title": "警示症狀 — 請就醫",
    "redflag_1": "糞便中有血",
    "redflag_2": "帶狀或鉛筆狀細便",
    "redflag_3": "嚴重腹脹",
    "redflag_4": "便秘伴嘔吐",
    "redflag_5": "出生後48小時內未排胎便",
    "redflag_6": "出生後第一個月即出現便秘",
    "redflag_7": "神經系統症狀（無力、肌張力下降）",

    "s2_heading": "PEG 3350 劑量計算器",
    "peg_box_heading": "關於PEG 3350",
    "peg_box_html": "PEG 3350在加拿大以<strong>Lax-A-Day</strong>和<strong>RestoraLAX</strong>（及學名藥）出售。它是一種滲透性通便藥——無色無味。適用於<strong>≥ 6個月</strong>的兒童。一個標準小包或一滿蓋RestoraLAX = <strong>17 g</strong>。",
    "label_weight": "兒童體重",
    "weight_placeholder": "—",
    "warn_low_weight": "⚠️ 體重低於5 kg — 開始使用PEG 3350前請確認年齡≥ 6個月。",

    "phase_disimp_label": "第一階段 — 解除嵌塞",
    "phase_maint_label": "第二階段 — 維持治療",

    "disimp_dose_label": "解除嵌塞劑量",
    "disimp_dose_sub": "1.5 g/kg/天 · 最多100 g/天",
    "disimp_duration_label": "療程",
    "disimp_duration_val": "3–6天",
    "disimp_duration_sub": "直至確認解除嵌塞",
    "disimp_max_label": "每日最大劑量",
    "disimp_max_val": "100 g / 10蓋",
    "disimp_max_sub": "需在醫師指導下使用",

    "disimp_result_heading": "解除嵌塞劑量 — 計算結果",
    "res_disimp_g": "每日劑量（g）",
    "res_disimp_cap": "每日劑量（蓋）",
    "res_disimp_cap_sub": "每蓋17 g",
    "res_disimp_split": "分次劑量（g）",
    "res_disimp_split_cap": "分次劑量（蓋）",
    "res_disimp_cap_sub2": "每蓋17 g",
    "disimp_group_daily": "每日單次劑量",
    "disimp_group_split": "分次 — 每日兩次（每次劑量）",
    "disimp_note_html": "<strong>需在醫師指導下使用。</strong>開始前確認嵌塞。給予1.5 g/kg/天，持續<strong>3–6天</strong>。可單次或分兩次給藥。一旦確認解除嵌塞（排出軟便、腹部鬆軟），立即停止並轉為以下維持劑量。最大100 g/天。",

    "maint_low_label": "最低劑量",
    "maint_low_sub": "0.4 g/kg/天",
    "maint_high_label": "最高劑量",
    "maint_high_sub": "0.8 g/kg/天",
    "maint_duration_label": "療程",
    "maint_duration_val": "數週至數月",
    "maint_duration_sub": "直至建立規律排便習慣",
    "maint_max_label": "每日最大劑量",
    "maint_max_sub": "1個標準包 / 1滿蓋",

    "maint_result_heading": "維持劑量 — 計算結果",
    "res_low_g": "最低劑量（g/天）",
    "res_high_g": "最高劑量（g/天）",
    "res_cap_low": "蓋量（最低）",
    "res_cap_high": "蓋量（最高）",
    "res_cap_unit": "（17 g蓋）",
    "res_cap_unit2": "（17 g蓋）",
    "maint_note_html": "<strong>從最低劑量開始</strong>，逐漸增量至每天一次軟便。效果可能需2–3天。最大劑量為17 g/天（一個標準Lax-A-Day / RestoraLAX包或一滿蓋）。可單次或分兩次給藥。繼續<strong>數週至數月</strong>直至建立規律排便習慣後逐漸減量。",

    "mix_heading": "如何沖調PEG 3350（Lax-A-Day / RestoraLAX）",
    "mix_body_html": "將粉末溶於<strong>250 mL（1杯）</strong>水、果汁或牛奶中。攪拌至完全溶解——<strong>無色無味</strong>。可混入兒童喜愛的飲料中。請勿與碳酸飲料混合。適用於<strong>≥ 6個月</strong>的兒童。",

    "s3_heading": "其他實證策略",
    "strat_fibre_title": "膳食纖維",
    "strat_fibre_target_html": "<strong>目標：</strong>兒童年齡（歲）+ 5 g/天（例如4歲兒童需約9 g/天）",
    "strat_fibre_foods_html": "<strong>高纖維食物：</strong>梨、西梅、蘋果（帶皮）、漿果、花椰菜、胡蘿蔔、豌豆、燕麥、全麥麵包、麩皮穀物、豆類、扁豆",
    "strat_fibre_dairy": "避免過多乳製品（牛奶、乳酪）——可能加重便秘",
    "strat_fibre_gradual": "逐漸增加纖維攝入，以避免脹氣和腹脹",
    "strat_fluid_title": "液體攝入",
    "fluid_col_age": "年齡",
    "fluid_col_amount": "目標/天",
    "fluid_age_1": "1–3歲",
    "fluid_amt_1": "約4杯（1 L）",
    "fluid_age_2": "4–8歲",
    "fluid_amt_2": "約5杯（1.2 L）",
    "fluid_age_3": "9–13歲",
    "fluid_amt_3": "約7–8杯（1.7 L）",
    "strat_fluid_best": "水和牛奶是最佳選擇；幼兒每天果汁限量≤ 125 mL",
    "strat_fluid_prune_html": "<strong>西梅汁</strong>對輕度便秘有實證支持：>1個月嬰兒每天60–120 mL；幼兒每天125 mL",
    "strat_toilet_title": "如廁訓練",
    "strat_toilet_gcr_html": "安排<strong>飯後</strong>坐廁——胃結腸反射在進食後20–30分鐘最強",
    "strat_toilet_sit": "坐5–10分鐘；避免催促或給兒童施壓",
    "strat_toilet_stool_html": "使用<strong>腳凳</strong>使膝蓋高於臀部——蹲姿可放鬆恥骨直腸肌",
    "strat_toilet_praise": "正向強化——表揚嘗試的行為，而不僅僅是成功",
    "strat_activity_title": "體育活動",
    "strat_activity_motility": "規律運動可促進腸道蠕動",
    "strat_activity_goal": "學齡兒童每天應進行60分鐘中等強度活動",
    "strat_activity_walk": "飯後短暫散步也有幫助",
    "strat_behav_title": "行為策略",
    "strat_behav_diary": "記錄大便日記，追蹤排便頻率、性狀及任何疼痛",
    "strat_behav_chart": "為坐廁行為設置獎勵表（而非為排便——有助於減少表現焦慮）",
    "strat_behav_accidents": "避免懲罰意外——憋便通常是無意識的，並非故意為之",
    "strat_behav_training": "對處於如廁訓練年齡的兒童：訓練前確認準備就緒；便秘期間訓練退步很常見",

    "s4_heading": "何時就醫",
    "emerg_title": "何時就醫",
    "emerg_tier_ed": "如有以下情況請去急診：",
    "emerg_ed_1": "糞便中有血（明顯量）",
    "emerg_ed_2": "嚴重腹痛或腹脹",
    "emerg_ed_3": "便秘伴膽汁性（綠色）嘔吐",
    "emerg_ed_4": "兒童看起來非常不適或嗜睡",
    "emerg_tier_doc": "如有以下情況請就診醫師或執業護理師：",
    "emerg_doc_1": "儘管在家處理，仍超過1週無排便",
    "emerg_doc_2": "便秘自出生或嬰兒期早期即存在",
    "emerg_doc_3": "兒童體重減輕或發育不良",
    "emerg_doc_4": "疼痛性肛裂或直腸脫垂",
    "emerg_doc_5": "泌尿系統症狀：反覆泌尿道感染或日間遺尿",
    "emerg_doc_6": "您出於任何原因感到擔憂",

    "footer_html": "<strong>免責聲明：</strong>本指南為臨床參考工具。PEG 3350劑量基於已發佈的加拿大兒科指引（SickKids AboutKidsHealth、CHEO、CPS）。在使用時應始終考慮患者個體因素，包括年齡、器官功能、合併用藥及臨床情境。本工具不能替代臨床判斷或個別化醫療建議。",

    "unit_g": "g",
    "unit_tsp": "茶匙",
    "unit_cap": "蓋",
    "dash": "—",
    "enter_weight": "請在上方輸入體重"
  },

  /* ═══════════════════════════════════════════════════
     PUNJABI (Gurmukhi)
  ═══════════════════════════════════════════════════ */
  "pa": {
    "page_title": "ਟੱਟੀ ਸ਼ੀਟ — ਬੱਚਿਆਂ ਵਿੱਚ ਕਬਜ਼ ਪ੍ਰਬੰਧਨ",
    "header_emoji": "💩",
    "header_title": "ਟੱਟੀ",
    "header_title_highlight": "ਸ਼ੀਟ",
    "header_subtitle": "ਬੱਚਿਆਂ ਵਿੱਚ ਕਬਜ਼ ਲਈ ਸਬੂਤ-ਆਧਾਰਿਤ ਰਣਨੀਤੀਆਂ ਅਤੇ ਭਾਰ-ਅਧਾਰਿਤ PEG 3350 ਖੁਰਾਕ, SickKids AboutKidsHealth, CHEO ਅਤੇ CPS ਦਿਸ਼ਾ-ਨਿਰਦੇਸ਼ਾਂ ਦੇ ਆਧਾਰ 'ਤੇ।",
    "print_btn": "ਪ੍ਰਿੰਟ ਕਰੋ",
    "lang_selector_label": "ਭਾਸ਼ਾ",

    "s1_heading": "ਕਬਜ਼ ਕੀ ਹੈ?",
    "defn_box_heading": "ਕਲੀਨਿਕਲ ਪਰਿਭਾਸ਼ਾ",
    "bss_chip_1_label": "Bristol 1–2",
    "bss_chip_1_desc": "ਕਬਜ਼",
    "bss_chip_34_label": "Bristol 3–4",
    "bss_chip_34_desc": "ਆਦਰਸ਼",
    "bss_chip_67_label": "Bristol 6–7",
    "bss_chip_67_desc": "ਦਸਤ",
    "defn_note_html": "<strong>ਕਬਜ਼</strong> ਨੂੰ ਹਫ਼ਤੇ ਵਿੱਚ 2 ਤੋਂ ਘੱਟ ਵਾਰ ਟੱਟੀ ਆਉਣਾ, ਜਾਂ ਟੱਟੀ ਜੋ ਸਖ਼ਤ, ਸੁੱਕੀ ਅਤੇ ਦਰਦਨਾਕ ਹੋਵੇ (Bristol ਕਿਸਮ 1–2) ਵਜੋਂ ਪਰਿਭਾਸ਼ਿਤ ਕੀਤਾ ਜਾਂਦਾ ਹੈ। Bristol 3–4 ਟਾਰਗੇਟ ਇਕਸਾਰਤਾ ਹੈ — ਨਰਮ, ਚੰਗੀ ਤਰ੍ਹਾਂ ਬਣੀ ਅਤੇ ਆਸਾਨੀ ਨਾਲ ਆਉਣ ਵਾਲੀ। 6–7 ਦਸਤ ਦਰਸਾਉਂਦੇ ਹਨ। ਬੱਚਿਆਂ ਵਿੱਚ ਕਬਜ਼ ਬਹੁਤ ਆਮ ਹੈ ਅਤੇ ਆਮ ਤੌਰ 'ਤੇ ਗੰਭੀਰ ਨਹੀਂ ਹੁੰਦੀ — ਜ਼ਿਆਦਾਤਰ ਮਾਮਲੇ ਖੁਰਾਕ ਤਬਦੀਲੀਆਂ ਅਤੇ ਜੁਲਾਬਾਂ ਨਾਲ ਠੀਕ ਹੋ ਜਾਂਦੇ ਹਨ।",
    "redflag_title": "ਚੇਤਾਵਨੀ ਦੇ ਲੱਛਣ — ਡਾਕਟਰੀ ਮਦਦ ਲਓ",
    "redflag_1": "ਟੱਟੀ ਵਿੱਚ ਖੂਨ",
    "redflag_2": "ਰਿਬਨ ਜਾਂ ਪੈਨਸਿਲ ਵਰਗੀ ਪਤਲੀ ਟੱਟੀ",
    "redflag_3": "ਗੰਭੀਰ ਪੇਟ ਫੁੱਲਣਾ",
    "redflag_4": "ਕਬਜ਼ ਦੇ ਨਾਲ ਉਲਟੀਆਂ",
    "redflag_5": "ਜਨਮ ਤੋਂ 48 ਘੰਟਿਆਂ ਵਿੱਚ ਮੇਕੋਨੀਅਮ ਨਾ ਆਉਣਾ",
    "redflag_6": "ਜ਼ਿੰਦਗੀ ਦੇ ਪਹਿਲੇ ਮਹੀਨੇ ਵਿੱਚ ਕਬਜ਼",
    "redflag_7": "ਤੰਤੂ-ਵਿਗਿਆਨ ਸੰਬੰਧੀ ਲੱਛਣ (ਕਮਜ਼ੋਰੀ, ਘੱਟ ਟੋਨ)",

    "s2_heading": "PEG 3350 ਖੁਰਾਕ ਕੈਲਕੁਲੇਟਰ",
    "peg_box_heading": "PEG 3350 ਬਾਰੇ",
    "peg_box_html": "PEG 3350 ਕੈਨੇਡਾ ਵਿੱਚ <strong>Lax-A-Day</strong> ਅਤੇ <strong>RestoraLAX</strong> (ਅਤੇ ਜੈਨਰਿਕ) ਨਾਮ ਨਾਲ ਵਿਕਦਾ ਹੈ। ਇਹ ਇੱਕ ਓਸਮੋਟਿਕ ਜੁਲਾਬ ਹੈ — ਬੇਸੁਆਦ ਅਤੇ ਬੇਗੰਧ। <strong>≥ 6 ਮਹੀਨੇ</strong> ਉਮਰ ਦੇ ਬੱਚਿਆਂ ਲਈ ਉਚਿਤ। ਇੱਕ ਮਿਆਰੀ ਸੈਸ਼ੇ ਜਾਂ ਇੱਕ ਭਰਿਆ RestoraLAX ਕੈਪ = <strong>17 g</strong>।",
    "label_weight": "ਬੱਚੇ ਦਾ ਭਾਰ",
    "weight_placeholder": "—",
    "warn_low_weight": "⚠️ ਭਾਰ 5 kg ਤੋਂ ਘੱਟ — PEG 3350 ਸ਼ੁਰੂ ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ ਉਮਰ ≥ 6 ਮਹੀਨੇ ਦੀ ਪੁਸ਼ਟੀ ਕਰੋ।",

    "phase_disimp_label": "ਪੜਾਅ 1 — ਡਿਸਇੰਪੈਕਸ਼ਨ",
    "phase_maint_label": "ਪੜਾਅ 2 — ਰੱਖ-ਰਖਾਵ",

    "disimp_dose_label": "ਡਿਸਇੰਪੈਕਸ਼ਨ ਖੁਰਾਕ",
    "disimp_dose_sub": "1.5 g/kg/ਦਿਨ · ਵੱਧ ਤੋਂ ਵੱਧ 100 g/ਦਿਨ",
    "disimp_duration_label": "ਮਿਆਦ",
    "disimp_duration_val": "3–6 ਦਿਨ",
    "disimp_duration_sub": "ਡਿਸਇੰਪੈਕਸ਼ਨ ਪੁਸ਼ਟੀ ਹੋਣ ਤੱਕ",
    "disimp_max_label": "ਰੋਜ਼ਾਨਾ ਵੱਧ ਤੋਂ ਵੱਧ",
    "disimp_max_val": "100 g / 10 ਕੈਪ",
    "disimp_max_sub": "ਡਾਕਟਰੀ ਨਿਰਦੇਸ਼ਨ ਜ਼ਰੂਰੀ",

    "disimp_result_heading": "ਡਿਸਇੰਪੈਕਸ਼ਨ ਖੁਰਾਕ — ਗਣਨਾ ਕੀਤੀ",
    "res_disimp_g": "ਰੋਜ਼ਾਨਾ ਖੁਰਾਕ (g)",
    "res_disimp_cap": "ਰੋਜ਼ਾਨਾ ਖੁਰਾਕ (ਕੈਪ)",
    "res_disimp_cap_sub": "ਪ੍ਰਤੀ ਕੈਪ 17 g",
    "res_disimp_split": "ਵੰਡੀ ਖੁਰਾਕ (g)",
    "res_disimp_split_cap": "ਵੰਡੀ ਖੁਰਾਕ (ਕੈਪ)",
    "res_disimp_cap_sub2": "ਪ੍ਰਤੀ ਕੈਪ 17 g",
    "disimp_group_daily": "ਇੱਕ ਰੋਜ਼ਾਨਾ ਖੁਰਾਕ",
    "disimp_group_split": "ਵੰਡੀ — ਦਿਨ ਵਿੱਚ ਦੋ ਵਾਰ (ਹਰ ਖੁਰਾਕ)",
    "disimp_note_html": "<strong>ਡਾਕਟਰੀ ਨਿਰਦੇਸ਼ਨ ਜ਼ਰੂਰੀ।</strong> ਸ਼ੁਰੂ ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ ਇੰਪੈਕਸ਼ਨ ਦੀ ਪੁਸ਼ਟੀ ਕਰੋ। <strong>3–6 ਦਿਨਾਂ</strong> ਲਈ 1.5 g/kg/ਦਿਨ ਦਿਓ। ਇਕੱਲੀ ਜਾਂ ਦੋ ਵੰਡੀਆਂ ਖੁਰਾਕਾਂ ਵਿੱਚ ਦਿੱਤਾ ਜਾ ਸਕਦਾ ਹੈ। ਡਿਸਇੰਪੈਕਸ਼ਨ ਦੀ ਪੁਸ਼ਟੀ ਹੋਣ 'ਤੇ (ਨਰਮ ਟੱਟੀ, ਨਰਮ ਪੇਟ) ਰੋਕ ਦਿਓ ਅਤੇ ਤੁਰੰਤ ਹੇਠਾਂ ਦਿੱਤੀ ਰੱਖ-ਰਖਾਵ ਖੁਰਾਕ 'ਤੇ ਜਾਓ। ਵੱਧ ਤੋਂ ਵੱਧ 100 g/ਦਿਨ।",

    "maint_low_label": "ਘੱਟੋ-ਘੱਟ",
    "maint_low_sub": "0.4 g/kg/ਦਿਨ",
    "maint_high_label": "ਵੱਧ ਤੋਂ ਵੱਧ",
    "maint_high_sub": "0.8 g/kg/ਦਿਨ",
    "maint_duration_label": "ਮਿਆਦ",
    "maint_duration_val": "ਹਫ਼ਤੇ–ਮਹੀਨੇ",
    "maint_duration_sub": "ਨਿਯਮਿਤ ਆਦਤਾਂ ਬਣਨ ਤੱਕ",
    "maint_max_label": "ਰੋਜ਼ਾਨਾ ਵੱਧ ਤੋਂ ਵੱਧ",
    "maint_max_sub": "1 ਮਿਆਰੀ ਸੈਸ਼ੇ / 1 ਭਰਿਆ ਕੈਪ",

    "maint_result_heading": "ਰੱਖ-ਰਖਾਵ ਖੁਰਾਕ — ਗਣਨਾ ਕੀਤੀ",
    "res_low_g": "ਘੱਟੋ-ਘੱਟ (g/ਦਿਨ)",
    "res_high_g": "ਵੱਧ ਤੋਂ ਵੱਧ (g/ਦਿਨ)",
    "res_cap_low": "ਕੈਪ ਮਾਪ (ਘੱਟ)",
    "res_cap_high": "ਕੈਪ ਮਾਪ (ਵੱਧ)",
    "res_cap_unit": "17 g ਕੈਪ ਦਾ",
    "res_cap_unit2": "17 g ਕੈਪ ਦਾ",
    "maint_note_html": "<strong>ਘੱਟੋ-ਘੱਟ ਖੁਰਾਕ ਤੋਂ ਸ਼ੁਰੂ ਕਰੋ</strong> ਅਤੇ ਰੋਜ਼ਾਨਾ ਇੱਕ ਨਰਮ ਟੱਟੀ ਲਈ ਹੌਲੀ-ਹੌਲੀ ਵਧਾਓ। ਪ੍ਰਭਾਵ 2–3 ਦਿਨ ਲੱਗ ਸਕਦੇ ਹਨ। ਵੱਧ ਤੋਂ ਵੱਧ 17 g/ਦਿਨ (ਇੱਕ ਮਿਆਰੀ Lax-A-Day / RestoraLAX ਸੈਸ਼ੇ ਜਾਂ ਭਰਿਆ ਕੈਪ)। ਇਕੱਲੀ ਜਾਂ ਦੋ ਵੰਡੀਆਂ ਖੁਰਾਕਾਂ ਵਿੱਚ। ਹੌਲੀ-ਹੌਲੀ ਘਟਾਉਣ ਤੋਂ ਪਹਿਲਾਂ ਨਿਯਮਿਤ ਟੱਟੀ ਦੀਆਂ ਆਦਤਾਂ ਬਣਨ ਤੱਕ <strong>ਹਫ਼ਤਿਆਂ ਤੋਂ ਮਹੀਨਿਆਂ</strong> ਤੱਕ ਜਾਰੀ ਰੱਖੋ।",

    "mix_heading": "PEG 3350 (Lax-A-Day / RestoraLAX) ਕਿਵੇਂ ਮਿਲਾਉਣਾ ਹੈ",
    "mix_body_html": "ਪਾਊਡਰ ਨੂੰ <strong>250 mL (1 ਕੱਪ)</strong> ਪਾਣੀ, ਜੂਸ ਜਾਂ ਦੁੱਧ ਵਿੱਚ ਮਿਲਾਓ। ਪੂਰੀ ਤਰ੍ਹਾਂ ਘੁਲਣ ਤੱਕ ਹਿਲਾਓ — ਇਹ <strong>ਬੇਸੁਆਦ ਅਤੇ ਬੇਗੰਧ</strong> ਹੈ। ਬੱਚੇ ਦੇ ਮਨਪਸੰਦ ਪੀਣ ਵਿੱਚ ਮਿਲਾਇਆ ਜਾ ਸਕਦਾ ਹੈ। ਕਾਰਬੋਨੇਟਡ ਪੀਣ ਨਾਲ ਨਾ ਮਿਲਾਓ। <strong>≥ 6 ਮਹੀਨੇ</strong> ਉਮਰ ਦੇ ਬੱਚਿਆਂ ਲਈ ਉਚਿਤ।",

    "s3_heading": "ਹੋਰ ਸਬੂਤ-ਆਧਾਰਿਤ ਰਣਨੀਤੀਆਂ",
    "strat_fibre_title": "ਖੁਰਾਕੀ ਰੇਸ਼ਾ",
    "strat_fibre_target_html": "<strong>ਟੀਚਾ:</strong> ਬੱਚੇ ਦੀ ਉਮਰ (ਸਾਲਾਂ ਵਿੱਚ) + 5 g/ਦਿਨ (ਜਿਵੇਂ 4 ਸਾਲ ਦੇ ਬੱਚੇ ਨੂੰ ~9 g/ਦਿਨ ਚਾਹੀਦਾ ਹੈ)",
    "strat_fibre_foods_html": "<strong>ਰੇਸ਼ੇ ਨਾਲ ਭਰਪੂਰ ਭੋਜਨ:</strong> ਨਾਸ਼ਪਾਤੀ, ਪਲਮ, ਸੇਬ (ਛਿਲਕੇ ਸਮੇਤ), ਬੇਰੀਆਂ, ਬਰੌਕਲੀ, ਗਾਜਰਾਂ, ਮਟਰ, ਓਟਮੀਲ, ਕਣਕ ਦੀ ਰੋਟੀ, ਬ੍ਰੈਨ ਸੀਰੀਅਲ, ਦਾਲਾਂ, ਮਸੂਰ",
    "strat_fibre_dairy": "ਬਹੁਤ ਜ਼ਿਆਦਾ ਡੇਅਰੀ (ਦੁੱਧ, ਪਨੀਰ) ਤੋਂ ਪਰਹੇਜ਼ ਕਰੋ — ਕਬਜ਼ ਵਧਾ ਸਕਦੀ ਹੈ",
    "strat_fibre_gradual": "ਗੈਸ ਅਤੇ ਫੁੱਲਣ ਤੋਂ ਬਚਣ ਲਈ ਹੌਲੀ-ਹੌਲੀ ਰੇਸ਼ਾ ਵਧਾਓ",
    "strat_fluid_title": "ਤਰਲ ਪਦਾਰਥ",
    "fluid_col_age": "ਉਮਰ",
    "fluid_col_amount": "ਟੀਚਾ / ਦਿਨ",
    "fluid_age_1": "1–3 ਸਾਲ",
    "fluid_amt_1": "~4 ਕੱਪ (1 L)",
    "fluid_age_2": "4–8 ਸਾਲ",
    "fluid_amt_2": "~5 ਕੱਪ (1.2 L)",
    "fluid_age_3": "9–13 ਸਾਲ",
    "fluid_amt_3": "~7–8 ਕੱਪ (1.7 L)",
    "strat_fluid_best": "ਪਾਣੀ ਅਤੇ ਦੁੱਧ ਸਭ ਤੋਂ ਵਧੀਆ ਹਨ; ਛੋਟੇ ਬੱਚਿਆਂ ਲਈ ਜੂਸ ≤ 125 mL/ਦਿਨ ਤੱਕ ਸੀਮਿਤ ਕਰੋ",
    "strat_fluid_prune_html": "<strong>ਪਲਮ ਦਾ ਜੂਸ</strong> ਹਲਕੀ ਕਬਜ਼ ਲਈ ਸਬੂਤ-ਆਧਾਰਿਤ ਹੈ: >1 ਮਹੀਨੇ ਦੇ ਬੱਚਿਆਂ ਲਈ 60–120 mL/ਦਿਨ; ਛੋਟੇ ਬੱਚਿਆਂ ਲਈ 125 mL/ਦਿਨ",
    "strat_toilet_title": "ਪਖਾਨੇ ਦੀ ਰੁਟੀਨ",
    "strat_toilet_gcr_html": "<strong>ਖਾਣੇ ਤੋਂ ਬਾਅਦ</strong> ਨਿਯਤ ਬੈਠਣਾ — ਗੈਸਟ੍ਰੋਕੋਲਿਕ ਰਿਫਲੈਕਸ ਖਾਣੇ ਤੋਂ 20–30 ਮਿੰਟ ਬਾਅਦ ਸਭ ਤੋਂ ਮਜ਼ਬੂਤ ਹੁੰਦਾ ਹੈ",
    "strat_toilet_sit": "5–10 ਮਿੰਟ ਬੈਠੋ; ਬੱਚੇ 'ਤੇ ਕਾਹਲੀ ਜਾਂ ਦਬਾਅ ਨਾ ਪਾਓ",
    "strat_toilet_stool_html": "<strong>ਫੁੱਟਸਟੂਲ</strong> ਵਰਤੋ ਤਾਂ ਜੋ ਗੋਡੇ ਕੁੱਲ੍ਹੇ ਤੋਂ ਉੱਪਰ ਹੋਣ — ਬੈਠਕ ਵਾਲੀ ਸਥਿਤੀ ਪਿਊਬੋਰੈਕਟਲਿਸ ਮਾਸਪੇਸ਼ੀ ਨੂੰ ਢਿੱਲੀ ਕਰਦੀ ਹੈ",
    "strat_toilet_praise": "ਸਕਾਰਾਤਮਕ ਹੌਸਲਾ-ਅਫ਼ਜ਼ਾਈ — ਕੋਸ਼ਿਸ਼ ਦੀ ਪ੍ਰਸ਼ੰਸਾ ਕਰੋ, ਨਾ ਕਿ ਸਿਰਫ਼ ਸਫਲਤਾ ਦੀ",
    "strat_activity_title": "ਸਰੀਰਕ ਗਤੀਵਿਧੀ",
    "strat_activity_motility": "ਨਿਯਮਿਤ ਸਰੀਰਕ ਗਤੀਵਿਧੀ ਅੰਤੜੀਆਂ ਦੀ ਗਤੀਸ਼ੀਲਤਾ ਨੂੰ ਉਤਸ਼ਾਹਿਤ ਕਰਦੀ ਹੈ",
    "strat_activity_goal": "ਸਕੂਲ ਉਮਰ ਦੇ ਬੱਚਿਆਂ ਲਈ ਰੋਜ਼ਾਨਾ 60 ਮਿੰਟ ਦਰਮਿਆਨੀ ਗਤੀਵਿਧੀ ਦਾ ਟੀਚਾ ਰੱਖੋ",
    "strat_activity_walk": "ਖਾਣੇ ਤੋਂ ਬਾਅਦ ਛੋਟੀਆਂ ਸੈਰਾਂ ਵੀ ਮਦਦ ਕਰ ਸਕਦੀਆਂ ਹਨ",
    "strat_behav_title": "ਵਿਵਹਾਰਕ ਰਣਨੀਤੀਆਂ",
    "strat_behav_diary": "ਬਾਰੰਬਾਰਤਾ, ਇਕਸਾਰਤਾ ਅਤੇ ਕਿਸੇ ਵੀ ਦਰਦ ਨੂੰ ਟ੍ਰੈਕ ਕਰਨ ਲਈ ਟੱਟੀ ਡਾਇਰੀ ਰੱਖੋ",
    "strat_behav_chart": "ਪਖਾਨੇ ਵਿੱਚ ਬੈਠਣ ਲਈ ਇਨਾਮ ਚਾਰਟ (ਟੱਟੀ ਕਰਨ ਲਈ ਨਹੀਂ — ਪ੍ਰਦਰਸ਼ਨ ਚਿੰਤਾ ਘਟਾਉਂਦਾ ਹੈ)",
    "strat_behav_accidents": "ਦੁਰਘਟਨਾਵਾਂ ਲਈ ਸਜ਼ਾ ਦੇਣ ਤੋਂ ਬਚੋ — ਰੋਕਣਾ ਅਕਸਰ ਅਣਇੱਛਤ ਹੁੰਦਾ ਹੈ",
    "strat_behav_training": "ਪਖਾਨੇ ਦੀ ਸਿਖਲਾਈ ਦੀ ਉਮਰ ਦੇ ਬੱਚਿਆਂ ਲਈ: ਸਿਖਲਾਈ ਤੋਂ ਪਹਿਲਾਂ ਤਿਆਰੀ ਯਕੀਨੀ ਕਰੋ; ਕਬਜ਼ ਦੌਰਾਨ ਸਿਖਲਾਈ ਵਿੱਚ ਰੁਕਾਵਟ ਆਮ ਹੈ",

    "s4_heading": "ਡਾਕਟਰੀ ਮਦਦ ਕਦੋਂ ਲੈਣੀ ਹੈ",
    "emerg_title": "ਡਾਕਟਰੀ ਮਦਦ ਕਦੋਂ ਲੈਣੀ ਹੈ",
    "emerg_tier_ed": "ਐਮਰਜੈਂਸੀ ਵਿਭਾਗ ਵਿੱਚ ਜਾਓ ਜੇ:",
    "emerg_ed_1": "ਟੱਟੀ ਵਿੱਚ ਖੂਨ (ਮਹੱਤਵਪੂਰਨ ਮਾਤਰਾ)",
    "emerg_ed_2": "ਗੰਭੀਰ ਪੇਟ ਦਰਦ ਜਾਂ ਫੁੱਲਣਾ",
    "emerg_ed_3": "ਕਬਜ਼ ਦੇ ਨਾਲ ਪਿੱਤ (ਹਰੀਆਂ) ਉਲਟੀਆਂ",
    "emerg_ed_4": "ਬੱਚਾ ਬਹੁਤ ਬਿਮਾਰ ਜਾਂ ਸੁਸਤ ਲੱਗਦਾ ਹੈ",
    "emerg_tier_doc": "ਆਪਣੇ ਡਾਕਟਰ ਜਾਂ ਨਰਸ ਪ੍ਰੈਕਟੀਸ਼ਨਰ ਨੂੰ ਮਿਲੋ ਜੇ:",
    "emerg_doc_1": "ਘਰੇਲੂ ਪ੍ਰਬੰਧਨ ਦੇ ਬਾਵਜੂਦ 1 ਹਫ਼ਤੇ ਤੋਂ ਵੱਧ ਟੱਟੀ ਨਹੀਂ ਆਈ",
    "emerg_doc_2": "ਜਨਮ ਤੋਂ ਜਾਂ ਬਚਪਨ ਤੋਂ ਕਬਜ਼ ਹੈ",
    "emerg_doc_3": "ਬੱਚੇ ਦਾ ਭਾਰ ਘੱਟ ਰਿਹਾ ਹੈ ਜਾਂ ਵਿਕਾਸ ਸਹੀ ਨਹੀਂ",
    "emerg_doc_4": "ਦਰਦਨਾਕ ਗੁਦਾ ਫਿਸ਼ਰ ਜਾਂ ਰੈਕਟਲ ਪ੍ਰੋਲੈਪਸ",
    "emerg_doc_5": "ਪਿਸ਼ਾਬ ਦੇ ਲੱਛਣ: ਵਾਰ-ਵਾਰ UTIs ਜਾਂ ਦਿਨ ਵੇਲੇ ਪਿਸ਼ਾਬ ਲੀਕ ਹੋਣਾ",
    "emerg_doc_6": "ਤੁਸੀਂ ਕਿਸੇ ਵੀ ਕਾਰਨ ਚਿੰਤਤ ਹੋ",

    "footer_html": "<strong>ਬੇਦਾਅਵਾ:</strong> ਇਹ ਸ਼ੀਟ ਇੱਕ ਕਲੀਨਿਕਲ ਸੰਦਰਭ ਸਹਾਇਤਾ ਹੈ। PEG 3350 ਦੀਆਂ ਖੁਰਾਕਾਂ ਪ੍ਰਕਾਸ਼ਿਤ ਕੈਨੇਡੀਅਨ ਬੱਚਿਆਂ ਦੇ ਦਿਸ਼ਾ-ਨਿਰਦੇਸ਼ਾਂ (SickKids AboutKidsHealth, CHEO, CPS) 'ਤੇ ਆਧਾਰਿਤ ਹਨ। ਵਿਅਕਤੀਗਤ ਮਰੀਜ਼ ਕਾਰਕਾਂ ਨੂੰ ਹਮੇਸ਼ਾ ਧਿਆਨ ਵਿੱਚ ਰੱਖਣਾ ਚਾਹੀਦਾ ਹੈ। ਇਹ ਸਾਧਨ ਕਲੀਨਿਕਲ ਨਿਰਣੇ ਦੀ ਥਾਂ ਨਹੀਂ ਲੈਂਦਾ।",

    "unit_g": "g",
    "unit_tsp": "ਚਾਹ ਦਾ ਚਮਚ",
    "unit_cap": "ਕੈਪ",
    "dash": "—",
    "enter_weight": "ਉੱਪਰ ਭਾਰ ਦਰਜ ਕਰੋ"
  },

  /* ═══════════════════════════════════════════════════
     HINDI
  ═══════════════════════════════════════════════════ */
  "hi": {
    "page_title": "पॉटी शीट — बच्चों में कब्ज़ प्रबंधन",
    "header_emoji": "💩",
    "header_title": "पॉटी",
    "header_title_highlight": "शीट",
    "header_subtitle": "बच्चों में कब्ज़ के लिए साक्ष्य-आधारित रणनीतियाँ और वज़न-आधारित PEG 3350 खुराक, SickKids AboutKidsHealth, CHEO और CPS दिशानिर्देशों पर आधारित।",
    "print_btn": "प्रिंट करें",
    "lang_selector_label": "भाषा",

    "s1_heading": "कब्ज़ क्या है?",
    "defn_box_heading": "नैदानिक परिभाषा",
    "bss_chip_1_label": "Bristol 1–2",
    "bss_chip_1_desc": "कब्ज़",
    "bss_chip_34_label": "Bristol 3–4",
    "bss_chip_34_desc": "आदर्श",
    "bss_chip_67_label": "Bristol 6–7",
    "bss_chip_67_desc": "दस्त",
    "defn_note_html": "<strong>कब्ज़</strong> को सप्ताह में 2 से कम बार मल त्याग, या कठोर, सूखा और दर्दनाक मल (Bristol प्रकार 1–2) के रूप में परिभाषित किया जाता है। Bristol 3–4 प्रकार लक्ष्य स्थिरता है — नरम, अच्छी तरह से बना और आसानी से निकलने वाला। 6–7 प्रकार दस्त दर्शाते हैं। बच्चों में कब्ज़ बेहद सामान्य है और आमतौर पर गंभीर नहीं होती — अधिकांश मामले आहार परिवर्तन और जुलाब से ठीक हो जाते हैं।",
    "redflag_title": "चेतावनी के लक्षण — चिकित्सा सहायता लें",
    "redflag_1": "मल में खून",
    "redflag_2": "रिबन जैसा या बहुत पतला मल",
    "redflag_3": "गंभीर पेट फूलना",
    "redflag_4": "कब्ज़ के साथ उल्टी",
    "redflag_5": "जन्म के 48 घंटों के भीतर मेकोनियम न निकलना",
    "redflag_6": "जीवन के पहले महीने में कब्ज़",
    "redflag_7": "तंत्रिका संबंधी लक्षण (कमज़ोरी, कम मांसपेशी-टोन)",

    "s2_heading": "PEG 3350 खुराक कैलकुलेटर",
    "peg_box_heading": "PEG 3350 के बारे में",
    "peg_box_html": "PEG 3350 कनाडा में <strong>Lax-A-Day</strong> और <strong>RestoraLAX</strong> (और जेनेरिक) नाम से बिकता है। यह एक ऑस्मोटिक जुलाब है — स्वादहीन और गंधहीन। <strong>≥ 6 महीने</strong> के बच्चों के लिए उपयुक्त। एक मानक सैशे या एक भरा हुआ RestoraLAX कैप = <strong>17 g</strong>।",
    "label_weight": "बच्चे का वज़न",
    "weight_placeholder": "—",
    "warn_low_weight": "⚠️ वज़न 5 kg से कम — PEG 3350 शुरू करने से पहले आयु ≥ 6 महीने की पुष्टि करें।",

    "phase_disimp_label": "चरण 1 — डिसइम्पैक्शन",
    "phase_maint_label": "चरण 2 — रखरखाव",

    "disimp_dose_label": "डिसइम्पैक्शन खुराक",
    "disimp_dose_sub": "1.5 g/kg/दिन · अधिकतम 100 g/दिन",
    "disimp_duration_label": "अवधि",
    "disimp_duration_val": "3–6 दिन",
    "disimp_duration_sub": "डिसइम्पैक्शन की पुष्टि होने तक",
    "disimp_max_label": "दैनिक अधिकतम",
    "disimp_max_val": "100 g / 10 कैप",
    "disimp_max_sub": "चिकित्सक का मार्गदर्शन आवश्यक",

    "disimp_result_heading": "डिसइम्पैक्शन खुराक — गणना की गई",
    "res_disimp_g": "दैनिक खुराक (g)",
    "res_disimp_cap": "दैनिक खुराक (कैप)",
    "res_disimp_cap_sub": "17 g प्रति कैप",
    "res_disimp_split": "विभाजित खुराक (g)",
    "res_disimp_split_cap": "विभाजित खुराक (कैप)",
    "res_disimp_cap_sub2": "17 g प्रति कैप",
    "disimp_group_daily": "एकल दैनिक खुराक",
    "disimp_group_split": "विभाजित — दिन में दो बार (प्रत्येक खुराक)",
    "disimp_note_html": "<strong>चिकित्सक का मार्गदर्शन आवश्यक।</strong> शुरू करने से पहले इम्पैक्शन की पुष्टि करें। <strong>3–6 दिनों</strong> के लिए 1.5 g/kg/दिन दें। एकल या दो विभाजित खुराकों में दिया जा सकता है। डिसइम्पैक्शन की पुष्टि होने पर (नरम मल, पेट नरम) रोकें और तुरंत नीचे दी गई रखरखाव खुराक पर जाएं। अधिकतम 100 g/दिन।",

    "maint_low_label": "न्यूनतम",
    "maint_low_sub": "0.4 g/kg/दिन",
    "maint_high_label": "अधिकतम",
    "maint_high_sub": "0.8 g/kg/दिन",
    "maint_duration_label": "अवधि",
    "maint_duration_val": "सप्ताह–महीने",
    "maint_duration_sub": "नियमित आदतें बनने तक",
    "maint_max_label": "दैनिक अधिकतम",
    "maint_max_sub": "1 मानक सैशे / 1 भरा कैप",

    "maint_result_heading": "रखरखाव खुराक — गणना की गई",
    "res_low_g": "न्यूनतम (g/दिन)",
    "res_high_g": "अधिकतम (g/दिन)",
    "res_cap_low": "कैप माप (न्यून)",
    "res_cap_high": "कैप माप (उच्च)",
    "res_cap_unit": "17 g कैप का",
    "res_cap_unit2": "17 g कैप का",
    "maint_note_html": "<strong>न्यूनतम खुराक से शुरू करें</strong> और प्रतिदिन एक नरम मल के लिए धीरे-धीरे बढ़ाएं। प्रभाव 2–3 दिन ले सकता है। अधिकतम 17 g/दिन (एक मानक Lax-A-Day / RestoraLAX सैशे या एक भरा कैप)। एकल या दो खुराकों में दिया जा सकता है। धीरे-धीरे कम करने से पहले नियमित मल-त्याग की आदतें बनने तक <strong>सप्ताहों से महीनों</strong> तक जारी रखें।",

    "mix_heading": "PEG 3350 (Lax-A-Day / RestoraLAX) कैसे मिलाएं",
    "mix_body_html": "पाउडर को <strong>250 mL (1 कप)</strong> पानी, जूस या दूध में मिलाएं। पूरी तरह घुलने तक हिलाएं — यह <strong>स्वादहीन और गंधहीन</strong> है। बच्चे के पसंदीदा पेय में मिलाया जा सकता है। कार्बोनेटेड पेय के साथ न मिलाएं। <strong>≥ 6 महीने</strong> के बच्चों के लिए उपयुक्त।",

    "s3_heading": "अन्य साक्ष्य-आधारित रणनीतियाँ",
    "strat_fibre_title": "आहार रेशा",
    "strat_fibre_target_html": "<strong>लक्ष्य:</strong> बच्चे की आयु (वर्षों में) + 5 g/दिन (जैसे 4 वर्षीय बच्चे को ~9 g/दिन चाहिए)",
    "strat_fibre_foods_html": "<strong>उच्च-रेशे वाले खाद्य पदार्थ:</strong> नाशपाती, आलूबुखारा, सेब (छिलके सहित), जामुन, ब्रोकली, गाजर, मटर, ओटमील, गेहूं की रोटी, चोकर अनाज, फलियाँ, मसूर",
    "strat_fibre_dairy": "अत्यधिक डेयरी (दूध, पनीर) से बचें — कब्ज़ बढ़ा सकते हैं",
    "strat_fibre_gradual": "गैस और सूजन से बचने के लिए धीरे-धीरे रेशा बढ़ाएं",
    "strat_fluid_title": "तरल पदार्थ",
    "fluid_col_age": "आयु",
    "fluid_col_amount": "लक्ष्य / दिन",
    "fluid_age_1": "1–3 वर्ष",
    "fluid_amt_1": "~4 कप (1 L)",
    "fluid_age_2": "4–8 वर्ष",
    "fluid_amt_2": "~5 कप (1.2 L)",
    "fluid_age_3": "9–13 वर्ष",
    "fluid_amt_3": "~7–8 कप (1.7 L)",
    "strat_fluid_best": "पानी और दूध सबसे अच्छे हैं; छोटे बच्चों के लिए जूस ≤ 125 mL/दिन तक सीमित करें",
    "strat_fluid_prune_html": "<strong>आलूबुखारे का रस</strong> हल्की कब्ज़ के लिए साक्ष्य-समर्थित है: >1 महीने के शिशुओं के लिए 60–120 mL/दिन; छोटे बच्चों के लिए 125 mL/दिन",
    "strat_toilet_title": "शौचालय की दिनचर्या",
    "strat_toilet_gcr_html": "<strong>खाने के बाद</strong> नियमित बैठना — गैस्ट्रोकोलिक रिफ्लेक्स खाने के 20–30 मिनट बाद सबसे मज़बूत होता है",
    "strat_toilet_sit": "5–10 मिनट बैठें; बच्चे को जल्दी करने या दबाव डालने से बचें",
    "strat_toilet_stool_html": "<strong>फुटस्टूल</strong> का उपयोग करें ताकि घुटने कूल्हों से ऊपर हों — बैठने की स्थिति प्यूबोरेक्टलिस मांसपेशी को शिथिल करती है",
    "strat_toilet_praise": "सकारात्मक सुदृढ़ीकरण — प्रयास की प्रशंसा करें, केवल सफलता की नहीं",
    "strat_activity_title": "शारीरिक गतिविधि",
    "strat_activity_motility": "नियमित शारीरिक गतिविधि आंत्र गतिशीलता को उत्तेजित करती है",
    "strat_activity_goal": "स्कूली बच्चों के लिए प्रतिदिन 60 मिनट मध्यम गतिविधि का लक्ष्य रखें",
    "strat_activity_walk": "खाने के बाद छोटी सैर भी मदद कर सकती है",
    "strat_behav_title": "व्यवहार संबंधी रणनीतियाँ",
    "strat_behav_diary": "आवृत्ति, स्थिरता और किसी भी दर्द को ट्रैक करने के लिए मल डायरी रखें",
    "strat_behav_chart": "शौचालय पर बैठने के लिए पुरस्कार चार्ट (मल त्याग के लिए नहीं — प्रदर्शन चिंता कम करता है)",
    "strat_behav_accidents": "दुर्घटनाओं के लिए दंडित करने से बचें — रोकना अक्सर अनैच्छिक होता है",
    "strat_behav_training": "शौचालय-प्रशिक्षण आयु के बच्चों के लिए: प्रशिक्षण से पहले तत्परता सुनिश्चित करें; कब्ज़ के दौरान प्रशिक्षण में प्रतिगमन सामान्य है",

    "s4_heading": "चिकित्सा सहायता कब लें",
    "emerg_title": "चिकित्सा सहायता कब लें",
    "emerg_tier_ed": "आपातकालीन विभाग में जाएं यदि:",
    "emerg_ed_1": "मल में खून (महत्वपूर्ण मात्रा)",
    "emerg_ed_2": "गंभीर पेट दर्द या सूजन",
    "emerg_ed_3": "कब्ज़ के साथ पित्त (हरी) उल्टी",
    "emerg_ed_4": "बच्चा बहुत बीमार या सुस्त लगे",
    "emerg_tier_doc": "अपने डॉक्टर या नर्स प्रैक्टिशनर से मिलें यदि:",
    "emerg_doc_1": "घरेलू प्रबंधन के बावजूद 1 सप्ताह से अधिक मल त्याग नहीं",
    "emerg_doc_2": "जन्म से या शैशवावस्था से कब्ज़",
    "emerg_doc_3": "बच्चे का वज़न कम हो रहा है या विकास अच्छा नहीं",
    "emerg_doc_4": "दर्दनाक गुदा विदर या रेक्टल प्रोलैप्स",
    "emerg_doc_5": "मूत्र संबंधी लक्षण: बार-बार UTI या दिन में मूत्र रिसाव",
    "emerg_doc_6": "आप किसी भी कारण से चिंतित हों",

    "footer_html": "<strong>अस्वीकरण:</strong> यह शीट एक नैदानिक संदर्भ सहायता है। PEG 3350 की खुराकें प्रकाशित कैनेडियन बाल रोग दिशानिर्देशों (SickKids AboutKidsHealth, CHEO, CPS) पर आधारित हैं। आयु, अंग कार्य, सहवर्ती दवाओं और नैदानिक संदर्भ सहित व्यक्तिगत रोगी कारकों पर हमेशा विचार किया जाना चाहिए। यह उपकरण नैदानिक निर्णय या व्यक्तिगत चिकित्सा सलाह का विकल्प नहीं है।",

    "unit_g": "g",
    "unit_tsp": "चाय का चम्मच",
    "unit_cap": "कैप",
    "dash": "—",
    "enter_weight": "ऊपर वज़न दर्ज करें"
  },

  /* ═══════════════════════════════════════════════════
     URDU (RTL)
  ═══════════════════════════════════════════════════ */
  "ur": {
    "page_title": "پوٹی شیٹ — بچوں میں قبض کا انتظام",
    "header_emoji": "💩",
    "header_title": "پوٹی",
    "header_title_highlight": "شیٹ",
    "header_subtitle": "بچوں میں قبض کے لیے شواہد پر مبنی حکمت عملی اور وزن کے مطابق PEG 3350 خوراک، SickKids AboutKidsHealth، CHEO اور CPS رہنما اصولوں کی بنیاد پر۔",
    "print_btn": "پرنٹ کریں",
    "lang_selector_label": "زبان",

    "s1_heading": "قبض کیا ہے؟",
    "defn_box_heading": "طبی تعریف",
    "bss_chip_1_label": "Bristol 1–2",
    "bss_chip_1_desc": "قبض",
    "bss_chip_34_label": "Bristol 3–4",
    "bss_chip_34_desc": "مثالی",
    "bss_chip_67_label": "Bristol 6–7",
    "bss_chip_67_desc": "اسہال",
    "defn_note_html": "<strong>قبض</strong> کی تعریف ہفتے میں 2 سے کم بار پاخانہ آنا، یا سخت، خشک اور تکلیف دہ پاخانہ (Bristol اقسام 1–2) کے طور پر کی جاتی ہے۔ Bristol 3–4 مطلوبہ ساخت ہے — نرم، اچھی طرح بنا ہوا اور آسانی سے آنے والا۔ 6–7 اسہال کی نشاندہی کرتے ہیں۔ بچوں میں قبض انتہائی عام ہے اور عموماً سنگین نہیں ہوتی — زیادہ تر معاملات خوراک میں تبدیلی اور جلاب سے ٹھیک ہو جاتے ہیں۔",
    "redflag_title": "خطرے کی علامات — فوری طبی مدد لیں",
    "redflag_1": "پاخانے میں خون",
    "redflag_2": "ربن یا پنسل جیسا پتلا پاخانہ",
    "redflag_3": "شدید پیٹ پھولنا",
    "redflag_4": "قبض کے ساتھ قے",
    "redflag_5": "پیدائش کے 48 گھنٹوں میں میکونیم نہ آنا",
    "redflag_6": "زندگی کے پہلے مہینے میں قبض",
    "redflag_7": "اعصابی علامات (کمزوری، کم پٹھوں کا ٹون)",

    "s2_heading": "PEG 3350 خوراک کیلکولیٹر",
    "peg_box_heading": "PEG 3350 کے بارے میں",
    "peg_box_html": "PEG 3350 کینیڈا میں <strong>Lax-A-Day</strong> اور <strong>RestoraLAX</strong> (اور جنیرک) کے نام سے فروخت ہوتی ہے۔ یہ ایک اوسموٹک جلاب ہے — بے ذائقہ اور بے بو۔ <strong>≥ 6 ماہ</strong> کے بچوں کے لیے موزوں۔ ایک معیاری سیشے یا ایک بھرا RestoraLAX کیپ = <strong>17 g</strong>۔",
    "label_weight": "بچے کا وزن",
    "weight_placeholder": "—",
    "warn_low_weight": "⚠️ وزن 5 kg سے کم — PEG 3350 شروع کرنے سے پہلے عمر ≥ 6 ماہ کی تصدیق کریں۔",

    "phase_disimp_label": "مرحلہ 1 — ڈس امپیکشن",
    "phase_maint_label": "مرحلہ 2 — بحالی",

    "disimp_dose_label": "ڈس امپیکشن خوراک",
    "disimp_dose_sub": "1.5 g/kg/دن · زیادہ سے زیادہ 100 g/دن",
    "disimp_duration_label": "مدت",
    "disimp_duration_val": "3–6 دن",
    "disimp_duration_sub": "ڈس امپیکشن کی تصدیق تک",
    "disimp_max_label": "روزانہ زیادہ سے زیادہ",
    "disimp_max_val": "100 g / 10 کیپ",
    "disimp_max_sub": "ڈاکٹر کی نگرانی ضروری",

    "disimp_result_heading": "ڈس امپیکشن خوراک — حساب شدہ",
    "res_disimp_g": "روزانہ خوراک (g)",
    "res_disimp_cap": "روزانہ خوراک (کیپ)",
    "res_disimp_cap_sub": "فی کیپ 17 g",
    "res_disimp_split": "تقسیم شدہ خوراک (g)",
    "res_disimp_split_cap": "تقسیم شدہ خوراک (کیپ)",
    "res_disimp_cap_sub2": "فی کیپ 17 g",
    "disimp_group_daily": "ایک روزانہ خوراک",
    "disimp_group_split": "تقسیم — دن میں دو بار (ہر خوراک)",
    "disimp_note_html": "<strong>ڈاکٹر کی نگرانی ضروری۔</strong> شروع کرنے سے پہلے امپیکشن کی تصدیق کریں۔ <strong>3–6 دن</strong> کے لیے 1.5 g/kg/دن دیں۔ ایک یا دو تقسیم شدہ خوراکوں میں دیا جا سکتا ہے۔ ڈس امپیکشن کی تصدیق ہونے پر (نرم پاخانہ، نرم پیٹ) بند کریں اور فوری نیچے دی گئی بحالی خوراک پر جائیں۔ زیادہ سے زیادہ 100 g/دن۔",

    "maint_low_label": "کم سے کم",
    "maint_low_sub": "0.4 g/kg/دن",
    "maint_high_label": "زیادہ سے زیادہ",
    "maint_high_sub": "0.8 g/kg/دن",
    "maint_duration_label": "مدت",
    "maint_duration_val": "ہفتے–مہینے",
    "maint_duration_sub": "باقاعدہ عادات قائم ہونے تک",
    "maint_max_label": "روزانہ زیادہ سے زیادہ",
    "maint_max_sub": "1 معیاری سیشے / 1 بھرا کیپ",

    "maint_result_heading": "بحالی خوراک — حساب شدہ",
    "res_low_g": "کم سے کم (g/دن)",
    "res_high_g": "زیادہ سے زیادہ (g/دن)",
    "res_cap_low": "کیپ پیمائش (کم)",
    "res_cap_high": "کیپ پیمائش (زیادہ)",
    "res_cap_unit": "17 g کیپ کا",
    "res_cap_unit2": "17 g کیپ کا",
    "maint_note_html": "<strong>کم سے کم خوراک سے شروع کریں</strong> اور روزانہ ایک نرم پاخانے کے لیے آہستہ آہستہ بڑھائیں۔ اثر 2–3 دن لگ سکتا ہے۔ زیادہ سے زیادہ 17 g/دن (ایک معیاری Lax-A-Day / RestoraLAX سیشے یا ایک بھرا کیپ)۔ ایک یا دو خوراکوں میں دیا جا سکتا ہے۔ آہستہ آہستہ کم کرنے سے پہلے باقاعدہ آنتوں کی عادات قائم ہونے تک <strong>ہفتوں سے مہینوں</strong> تک جاری رکھیں۔",

    "mix_heading": "PEG 3350 (Lax-A-Day / RestoraLAX) کیسے ملائیں",
    "mix_body_html": "پاؤڈر کو <strong>250 mL (1 کپ)</strong> پانی، جوس یا دودھ میں ملائیں۔ مکمل طور پر گھلنے تک ہلائیں — یہ <strong>بے ذائقہ اور بے بو</strong> ہے۔ بچے کے پسندیدہ مشروب میں ملایا جا سکتا ہے۔ کاربونیٹڈ مشروبات کے ساتھ نہ ملائیں۔ <strong>≥ 6 ماہ</strong> کے بچوں کے لیے موزوں۔",

    "s3_heading": "دیگر شواہد پر مبنی حکمت عملی",
    "strat_fibre_title": "غذائی ریشہ",
    "strat_fibre_target_html": "<strong>ہدف:</strong> بچے کی عمر (سالوں میں) + 5 g/دن (مثلاً 4 سالہ بچے کو ~9 g/دن چاہیے)",
    "strat_fibre_foods_html": "<strong>ریشے سے بھرپور غذائیں:</strong> ناشپاتی، آلو بخارہ، سیب (چھلکے سمیت)، بیریاں، بروکولی، گاجریں، مٹر، اوٹ میل، گندم کی روٹی، چوکر اناج، پھلیاں، مسور",
    "strat_fibre_dairy": "بہت زیادہ ڈیری (دودھ، پنیر) سے پرہیز کریں — قبض بڑھا سکتے ہیں",
    "strat_fibre_gradual": "گیس اور سوجن سے بچنے کے لیے آہستہ آہستہ ریشہ بڑھائیں",
    "strat_fluid_title": "مائعات",
    "fluid_col_age": "عمر",
    "fluid_col_amount": "ہدف / دن",
    "fluid_age_1": "1–3 سال",
    "fluid_amt_1": "~4 کپ (1 L)",
    "fluid_age_2": "4–8 سال",
    "fluid_amt_2": "~5 کپ (1.2 L)",
    "fluid_age_3": "9–13 سال",
    "fluid_amt_3": "~7–8 کپ (1.7 L)",
    "strat_fluid_best": "پانی اور دودھ بہترین ہیں؛ چھوٹے بچوں کے لیے جوس ≤ 125 mL/دن تک محدود کریں",
    "strat_fluid_prune_html": "<strong>آلو بخارے کا رس</strong> ہلکی قبض کے لیے شواہد پر مبنی ہے: >1 ماہ کے شیرخواروں کے لیے 60–120 mL/دن؛ چھوٹے بچوں کے لیے 125 mL/دن",
    "strat_toilet_title": "بیت الخلاء کا معمول",
    "strat_toilet_gcr_html": "<strong>کھانے کے بعد</strong> باقاعدہ بیٹھنا — گیسٹروکولک ریفلیکس کھانے کے 20–30 منٹ بعد سب سے مضبوط ہوتا ہے",
    "strat_toilet_sit": "5–10 منٹ بیٹھیں؛ بچے کو جلدی یا دباؤ نہ ڈالیں",
    "strat_toilet_stool_html": "<strong>فٹ اسٹول</strong> استعمال کریں تاکہ گھٹنے کولہوں سے اوپر ہوں — بیٹھنے کی پوزیشن پیوبورییکٹالیس پٹھے کو ڈھیلا کرتی ہے",
    "strat_toilet_praise": "مثبت تقویت — کوشش کی تعریف کریں، صرف کامیابی کی نہیں",
    "strat_activity_title": "جسمانی سرگرمی",
    "strat_activity_motility": "باقاعدہ جسمانی سرگرمی آنتوں کی حرکت کو تیز کرتی ہے",
    "strat_activity_goal": "اسکول جانے والے بچوں کے لیے روزانہ 60 منٹ اعتدال پسند سرگرمی کا ہدف رکھیں",
    "strat_activity_walk": "کھانے کے بعد چھوٹی سیر بھی مدد کر سکتی ہے",
    "strat_behav_title": "رویے کی حکمت عملی",
    "strat_behav_diary": "تعدد، ساخت اور کسی بھی درد کو ٹریک کرنے کے لیے پاخانہ ڈائری رکھیں",
    "strat_behav_chart": "بیت الخلاء میں بیٹھنے کے لیے انعامی چارٹ (پاخانہ کرنے کے لیے نہیں — کارکردگی کی پریشانی کم کرتا ہے)",
    "strat_behav_accidents": "حادثات پر سزا دینے سے گریز کریں — روکنا اکثر غیر ارادی ہوتا ہے",
    "strat_behav_training": "بیت الخلاء کی تربیت کی عمر کے بچوں کے لیے: تربیت سے پہلے تیاری یقینی بنائیں؛ قبض کے دوران تربیت میں پسپائی عام ہے",

    "s4_heading": "طبی مدد کب لیں",
    "emerg_title": "طبی مدد کب لیں",
    "emerg_tier_ed": "ایمرجنسی ڈیپارٹمنٹ جائیں اگر:",
    "emerg_ed_1": "پاخانے میں خون (قابل ذکر مقدار)",
    "emerg_ed_2": "شدید پیٹ درد یا پھولنا",
    "emerg_ed_3": "قبض کے ساتھ پت (سبز) کی قے",
    "emerg_ed_4": "بچہ بہت بیمار یا سست لگے",
    "emerg_tier_doc": "اپنے ڈاکٹر یا نرس پریکٹیشنر سے ملیں اگر:",
    "emerg_doc_1": "گھریلو علاج کے باوجود 1 ہفتے سے زیادہ پاخانہ نہ آئے",
    "emerg_doc_2": "پیدائش سے یا بچپن کے ابتدائی دور سے قبض",
    "emerg_doc_3": "بچے کا وزن کم ہو رہا ہے یا نشوونما ٹھیک نہیں",
    "emerg_doc_4": "تکلیف دہ مقعد شگاف یا ریکٹل پرولیپس",
    "emerg_doc_5": "پیشاب کی علامات: بار بار UTIs یا دن میں پیشاب کا اخراج",
    "emerg_doc_6": "آپ کسی بھی وجہ سے فکرمند ہوں",

    "footer_html": "<strong>دستبرداری:</strong> یہ شیٹ ایک طبی حوالہ جاتی امداد ہے۔ PEG 3350 کی خوراکیں شائع شدہ کینیڈین بچوں کے رہنما اصولوں (SickKids AboutKidsHealth, CHEO, CPS) پر مبنی ہیں۔ انفرادی مریض کے عوامل بشمول عمر، اعضاء کے کام، ہم آہنگ ادویات اور طبی سیاق و سباق کو ہمیشہ مدنظر رکھنا چاہیے۔ یہ آلہ طبی فیصلے یا انفرادی طبی مشورے کا متبادل نہیں ہے۔",

    "unit_g": "g",
    "unit_tsp": "چائے کا چمچ",
    "unit_cap": "کیپ",
    "dash": "—",
    "enter_weight": "اوپر وزن درج کریں"
  },

  /* ═══════════════════════════════════════════════════
     ARABIC (RTL)
  ═══════════════════════════════════════════════════ */
  "ar": {
    "page_title": "ورقة البراز — إدارة الإمساك عند الأطفال",
    "header_emoji": "💩",
    "header_title": "ورقة",
    "header_title_highlight": "البراز",
    "header_subtitle": "استراتيجيات مبنية على الأدلة وجرعات PEG 3350 حسب الوزن لإمساك الأطفال، استناداً إلى إرشادات SickKids AboutKidsHealth وCHEO وCPS.",
    "print_btn": "طباعة",
    "lang_selector_label": "اللغة",

    "s1_heading": "ما هو الإمساك؟",
    "defn_box_heading": "التعريف السريري",
    "bss_chip_1_label": "Bristol 1–2",
    "bss_chip_1_desc": "إمساك",
    "bss_chip_34_label": "Bristol 3–4",
    "bss_chip_34_desc": "مثالي",
    "bss_chip_67_label": "Bristol 6–7",
    "bss_chip_67_desc": "إسهال",
    "defn_note_html": "<strong>الإمساك</strong> يُعرَّف بأقل من مرتين تبرز في الأسبوع، أو براز صلب وجاف ومؤلم (أنواع Bristol 1–2). أنواع Bristol 3–4 هي القوام المستهدف — لين ومتشكل ويمر بسهولة. الأنواع 6–7 تشير إلى الإسهال. الإمساك شائع جداً عند الأطفال وعادةً ليس خطيراً — معظم الحالات تستجيب جيداً لتغييرات الغذاء والملينات.",
    "redflag_title": "أعراض تحذيرية — اطلب الرعاية الطبية",
    "redflag_1": "دم في البراز",
    "redflag_2": "براز على شكل شريط أو رفيع جداً",
    "redflag_3": "انتفاخ شديد في البطن",
    "redflag_4": "قيء مع الإمساك",
    "redflag_5": "عدم خروج العقي خلال 48 ساعة من الولادة",
    "redflag_6": "إمساك منذ الشهر الأول من الحياة",
    "redflag_7": "أعراض عصبية (ضعف، توتر عضلي منخفض)",

    "s2_heading": "حاسبة جرعات PEG 3350",
    "peg_box_heading": "عن PEG 3350",
    "peg_box_html": "يُباع PEG 3350 في كندا باسم <strong>Lax-A-Day</strong> و<strong>RestoraLAX</strong> (وكأدوية جنيسة). إنه ملين أوزموزي — عديم الطعم والرائحة. مناسب للأطفال <strong>≥ 6 أشهر</strong>. كيس معياري واحد أو غطاء RestoraLAX ممتلئ = <strong>17 g</strong>.",
    "label_weight": "وزن الطفل",
    "weight_placeholder": "—",
    "warn_low_weight": "⚠️ الوزن أقل من 5 kg — تأكد أن العمر ≥ 6 أشهر قبل البدء بـ PEG 3350.",

    "phase_disimp_label": "المرحلة 1 — إزالة الانسداد",
    "phase_maint_label": "المرحلة 2 — الصيانة",

    "disimp_dose_label": "جرعة إزالة الانسداد",
    "disimp_dose_sub": "1.5 g/kg/يوم · الحد الأقصى 100 g/يوم",
    "disimp_duration_label": "المدة",
    "disimp_duration_val": "3–6 أيام",
    "disimp_duration_sub": "حتى تأكيد إزالة الانسداد",
    "disimp_max_label": "الحد اليومي الأقصى",
    "disimp_max_val": "100 g / 10 أغطية",
    "disimp_max_sub": "يتطلب إشراف طبي",

    "disimp_result_heading": "جرعة إزالة الانسداد — المحسوبة",
    "res_disimp_g": "الجرعة اليومية (g)",
    "res_disimp_cap": "الجرعة اليومية (أغطية)",
    "res_disimp_cap_sub": "17 g لكل غطاء",
    "res_disimp_split": "الجرعة المقسمة (g)",
    "res_disimp_split_cap": "الجرعة المقسمة (أغطية)",
    "res_disimp_cap_sub2": "17 g لكل غطاء",
    "disimp_group_daily": "جرعة يومية واحدة",
    "disimp_group_split": "مقسمة — مرتين يومياً (كل جرعة)",
    "disimp_note_html": "<strong>يتطلب إشراف طبي.</strong> تأكد من الانسداد قبل البدء. أعطِ 1.5 g/kg/يوم لمدة <strong>3–6 أيام</strong>. يمكن إعطاؤها كجرعة يومية واحدة أو مقسمة إلى جرعتين. بعد تأكيد إزالة الانسداد (براز ليّن، بطن ليّنة)، أوقف وانتقل فوراً إلى جرعة الصيانة أدناه. الحد الأقصى 100 g/يوم.",

    "maint_low_label": "الحد الأدنى",
    "maint_low_sub": "0.4 g/kg/يوم",
    "maint_high_label": "الحد الأعلى",
    "maint_high_sub": "0.8 g/kg/يوم",
    "maint_duration_label": "المدة",
    "maint_duration_val": "أسابيع–أشهر",
    "maint_duration_sub": "حتى ترسيخ العادات المنتظمة",
    "maint_max_label": "الحد اليومي الأقصى",
    "maint_max_sub": "كيس معياري واحد / غطاء ممتلئ",

    "maint_result_heading": "جرعة الصيانة — المحسوبة",
    "res_low_g": "الحد الأدنى (g/يوم)",
    "res_high_g": "الحد الأعلى (g/يوم)",
    "res_cap_low": "قياس الغطاء (أدنى)",
    "res_cap_high": "قياس الغطاء (أعلى)",
    "res_cap_unit": "من غطاء 17 g",
    "res_cap_unit2": "من غطاء 17 g",
    "maint_note_html": "<strong>ابدأ بالجرعة الأدنى</strong> وزدها تدريجياً لتحقيق حركة أمعاء ليّنة يومياً. قد تستغرق التأثيرات 2–3 أيام. الحد الأقصى 17 g/يوم (كيس Lax-A-Day / RestoraLAX المعياري أو غطاء ممتلئ). يمكن إعطاؤها كجرعة واحدة أو مقسمة. استمر <strong>أسابيع إلى أشهر</strong> حتى ترسيخ عادات الأمعاء المنتظمة قبل التخفيض التدريجي.",

    "mix_heading": "كيفية تحضير PEG 3350 (Lax-A-Day / RestoraLAX)",
    "mix_body_html": "اخلط المسحوق في <strong>250 mL (كوب واحد)</strong> من الماء أو العصير أو الحليب. حرّك حتى يذوب تماماً — إنه <strong>عديم الطعم والرائحة</strong>. يمكن خلطه في المشروب المفضل للطفل. لا تخلطه مع المشروبات الغازية. مناسب للأطفال <strong>≥ 6 أشهر</strong>.",

    "s3_heading": "استراتيجيات أخرى مبنية على الأدلة",
    "strat_fibre_title": "الألياف الغذائية",
    "strat_fibre_target_html": "<strong>الهدف:</strong> عمر الطفل بالسنوات + 5 g/يوم (مثلاً طفل عمره 4 سنوات يحتاج ~9 g/يوم)",
    "strat_fibre_foods_html": "<strong>أطعمة غنية بالألياف:</strong> كمثرى، برقوق، تفاح (مع قشره)، توت، بروكلي، جزر، بازلاء، شوفان، خبز القمح الكامل، حبوب النخالة، فاصولياء، عدس",
    "strat_fibre_dairy": "تجنب الإفراط في منتجات الألبان (الحليب، الجبن) — قد تزيد الإمساك",
    "strat_fibre_gradual": "أدخل الألياف تدريجياً لتجنب الغازات والانتفاخ",
    "strat_fluid_title": "تناول السوائل",
    "fluid_col_age": "العمر",
    "fluid_col_amount": "الهدف / يوم",
    "fluid_age_1": "1–3 سنوات",
    "fluid_amt_1": "~4 أكواب (1 L)",
    "fluid_age_2": "4–8 سنوات",
    "fluid_amt_2": "~5 أكواب (1.2 L)",
    "fluid_age_3": "9–13 سنة",
    "fluid_amt_3": "~7–8 أكواب (1.7 L)",
    "strat_fluid_best": "الماء والحليب الأفضل؛ حدّد عصير الفاكهة بـ ≤ 125 mL/يوم للأطفال الصغار",
    "strat_fluid_prune_html": "<strong>عصير البرقوق</strong> ثبتت فعاليته للإمساك الخفيف: 60–120 mL/يوم للرضع >1 شهر؛ 125 mL/يوم للأطفال الصغار",
    "strat_toilet_title": "روتين المرحاض",
    "strat_toilet_gcr_html": "الجلوس المنتظم <strong>بعد الوجبات</strong> — المنعكس المعدي القولوني أقوى ما يكون بعد 20–30 دقيقة من الأكل",
    "strat_toilet_sit": "اجلس 5–10 دقائق؛ تجنب الاستعجال أو الضغط على الطفل",
    "strat_toilet_stool_html": "استخدم <strong>كرسياً للقدمين</strong> لرفع الركبتين فوق الوركين — وضعية القرفصاء تريّح عضلة العانة المستقيمة",
    "strat_toilet_praise": "التعزيز الإيجابي — امدح المحاولة وليس النجاح فقط",
    "strat_activity_title": "النشاط البدني",
    "strat_activity_motility": "النشاط البدني المنتظم يحفز حركية الأمعاء",
    "strat_activity_goal": "استهدف 60 دقيقة من النشاط المعتدل يومياً للأطفال في سن المدرسة",
    "strat_activity_walk": "حتى المشي القصير بعد الوجبات يمكن أن يساعد",
    "strat_behav_title": "الاستراتيجيات السلوكية",
    "strat_behav_diary": "احتفظ بيومية للبراز لتتبع التكرار والقوام وأي ألم",
    "strat_behav_chart": "جداول المكافآت للجلوس على المرحاض (ليس لإنتاج البراز — يقلل قلق الأداء)",
    "strat_behav_accidents": "تجنب عقاب الحوادث — الحبس غالباً لا إرادي وغير متعمد",
    "strat_behav_training": "للأطفال في سن تدريب المرحاض: تأكد من الاستعداد قبل التدريب؛ التراجع أثناء التدريب شائع مع الإمساك",

    "s4_heading": "متى تطلب الرعاية الطبية",
    "emerg_title": "متى تطلب الرعاية الطبية",
    "emerg_tier_ed": "اذهب إلى قسم الطوارئ إذا:",
    "emerg_ed_1": "دم في البراز (كمية ملحوظة)",
    "emerg_ed_2": "ألم شديد في البطن أو انتفاخ",
    "emerg_ed_3": "قيء صفراوي (أخضر) مع الإمساك",
    "emerg_ed_4": "يبدو الطفل مريضاً جداً أو خاملاً",
    "emerg_tier_doc": "راجع طبيبك أو الممرضة الممارسة إذا:",
    "emerg_doc_1": "لا تبرز لأكثر من أسبوع رغم العلاج المنزلي",
    "emerg_doc_2": "الإمساك موجود منذ الولادة أو الرضاعة المبكرة",
    "emerg_doc_3": "الطفل يفقد وزنه أو لا ينمو جيداً",
    "emerg_doc_4": "شقوق شرجية مؤلمة أو انتباج مستقيمي",
    "emerg_doc_5": "أعراض بولية: التهابات مجرى البول المتكررة أو التبول النهاري اللاإرادي",
    "emerg_doc_6": "أنت قلق لأي سبب",

    "footer_html": "<strong>إخلاء المسؤولية:</strong> هذه الورقة أداة مرجعية سريرية. جرعات PEG 3350 مستندة إلى الإرشادات الكندية البيدياترية المنشورة (SickKids AboutKidsHealth, CHEO, CPS). يجب دائماً مراعاة عوامل المريض الفردية بما فيها العمر، ووظائف الأعضاء، والأدوية المصاحبة، والسياق السريري. هذه الأداة لا تحل محل الحكم السريري أو المشورة الطبية الفردية.",

    "unit_g": "g",
    "unit_tsp": "ملعقة صغيرة",
    "unit_cap": "غطاء",
    "dash": "—",
    "enter_weight": "أدخل الوزن أعلاه"
  }

  /* ═══════════════════════════════════════════════════
     TAGALOG
  ═══════════════════════════════════════════════════ */
  "tl": {
    "page_title": "Tae Sheet — Pamamahala ng Constipation sa mga Bata",
    "header_emoji": "💩",
    "header_title": "Tae",
    "header_title_highlight": "Sheet",
    "header_subtitle": "Mga estratehiyang batay sa ebidensya at dosis ng PEG 3350 ayon sa timbang para sa constipation ng mga bata, batay sa mga alituntunin ng SickKids AboutKidsHealth, CHEO, at CPS.",
    "print_btn": "I-print",
    "lang_selector_label": "Wika",

    "s1_heading": "Ano ang Constipation?",
    "defn_box_heading": "Klinikong Kahulugan",
    "bss_chip_1_label": "Bristol 1–2",
    "bss_chip_1_desc": "Constipation",
    "bss_chip_34_label": "Bristol 3–4",
    "bss_chip_34_desc": "Ideal",
    "bss_chip_67_label": "Bristol 6–7",
    "bss_chip_67_desc": "Diarrhea",
    "defn_note_html": "<strong>Ang constipation</strong> ay tinukoy bilang wala pang 2 beses na pagdadumi sa isang linggo, o dumia na matigas, tuyo, at masakit ilabas (Bristol uri 1–2). Ang mga uri 3–4 ang target na konsistensya — malambot, maayos na hugis, at madaling ilabas. Ang mga uri 6–7 ay nagpapahiwatig ng diarrhea. Ang constipation ay napaka-karaniwan sa mga bata at karaniwang hindi seryoso — karamihan sa mga kaso ay tumutugon nang maayos sa pagbabago ng diyeta at laxatives.",
    "redflag_title": "Mga Babala — Humingi ng Medikal na Tulong",
    "redflag_1": "Dugo sa dumi",
    "redflag_2": "Dumi na parang laso o manipis na lapis",
    "redflag_3": "Malubhang pamamaga ng tiyan",
    "redflag_4": "Pagsusuka kasabay ng constipation",
    "redflag_5": "Walang naipasa na meconium sa loob ng 48 oras matapos ipanganak",
    "redflag_6": "Constipation na nagsimula sa unang buwan ng buhay",
    "redflag_7": "Mga sintomas sa nerbiyos (kahinaan, bumababang tono ng kalamnan)",

    "s2_heading": "Kalkulador ng Dosis ng PEG 3350",
    "peg_box_heading": "Tungkol sa PEG 3350",
    "peg_box_html": "Ang PEG 3350 ay ibinebenta sa Canada bilang <strong>Lax-A-Day</strong> at <strong>RestoraLAX</strong> (at generic). Ito ay isang osmotic laxative — walang lasa at walang amoy. Angkop para sa mga batang <strong>≥ 6 buwan</strong>. Isang karaniwang sachet o isang puno na RestoraLAX cap = <strong>17 g</strong>.",
    "label_weight": "Timbang ng Bata",
    "weight_placeholder": "—",
    "warn_low_weight": "⚠️ Timbang na wala pang 5 kg — kumpirmahin ang edad ≥ 6 buwan bago simulan ang PEG 3350.",

    "phase_disimp_label": "Yugto 1 — Disimpaction",
    "phase_maint_label": "Yugto 2 — Maintenance",

    "disimp_dose_label": "Dosis ng Disimpaction",
    "disimp_dose_sub": "1.5 g/kg/araw · max 100 g/araw",
    "disimp_duration_label": "Tagal",
    "disimp_duration_val": "3–6 araw",
    "disimp_duration_sub": "Hanggang makumpirma ang disimpaction",
    "disimp_max_label": "Pang-araw-araw na Maximum",
    "disimp_max_val": "100 g / 10 cap",
    "disimp_max_sub": "Kailangan ang gabay ng doktor",

    "disimp_result_heading": "Dosis ng Disimpaction — Kinalkula",
    "res_disimp_g": "Pang-araw-araw na dosis (g)",
    "res_disimp_cap": "Pang-araw-araw na dosis (cap)",
    "res_disimp_cap_sub": "17 g bawat cap",
    "res_disimp_split": "Nahahating dosis (g)",
    "res_disimp_split_cap": "Nahahating dosis (cap)",
    "res_disimp_cap_sub2": "17 g bawat cap",
    "disimp_group_daily": "Isang Dosis sa Isang Araw",
    "disimp_group_split": "Nahahati — Dalawang Beses sa Isang Araw (bawat dosis)",
    "disimp_note_html": "<strong>Kailangan ang gabay ng doktor.</strong> Kumpirmahin ang impaction bago magsimula. Ibigay ang 1.5 g/kg/araw sa loob ng <strong>3–6 araw</strong>. Maaaring ibigay bilang isang dosis sa isang araw o nahahati sa dalawa. Kapag nakumpirma na ang disimpaction (malambot na dumi, malambot na tiyan), itigil at agad lumipat sa dosis ng maintenance sa ibaba. Maximum 100 g/araw.",

    "maint_low_label": "Pinakamababa",
    "maint_low_sub": "0.4 g/kg/araw",
    "maint_high_label": "Pinakamataas",
    "maint_high_sub": "0.8 g/kg/araw",
    "maint_duration_label": "Tagal",
    "maint_duration_val": "Mga linggo–buwan",
    "maint_duration_sub": "Hanggang maestablish ang regular na gawi",
    "maint_max_label": "Pang-araw-araw na Maximum",
    "maint_max_sub": "1 karaniwang sachet / 1 puno na cap",

    "maint_result_heading": "Dosis ng Maintenance — Kinalkula",
    "res_low_g": "Pinakamababa (g/araw)",
    "res_high_g": "Pinakamataas (g/araw)",
    "res_cap_low": "Sukat sa cap (mababa)",
    "res_cap_high": "Sukat sa cap (mataas)",
    "res_cap_unit": "ng isang 17 g cap",
    "res_cap_unit2": "ng isang 17 g cap",
    "maint_note_html": "<strong>Magsimula sa pinakamababang dosis</strong> at dahan-dahang taasan upang makamit ang isang malambot na dumi bawat araw. Maaaring tumagal ng 2–3 araw ang epekto. Maximum 17 g/araw (isang karaniwang Lax-A-Day / RestoraLAX sachet o isang puno na cap). Maaaring ibigay bilang isang dosis o nahahati. Ipagpatuloy ng <strong>mga linggo hanggang buwan</strong> hanggang maestablish ang regular na gawi sa paggamit ng banyo bago dahan-dahang bawasan.",

    "mix_heading": "Paano Ihalo ang PEG 3350 (Lax-A-Day / RestoraLAX)",
    "mix_body_html": "Ihalo ang pulbos sa <strong>250 mL (1 tasa)</strong> ng tubig, juice, o gatas. Haluin hanggang ganap na matunaw — ito ay <strong>walang lasa at walang amoy</strong>. Maaaring ihalo sa paboritong inumin ng bata. Huwag ihalo sa mga carbonated na inumin. Angkop para sa mga batang <strong>≥ 6 buwan</strong>.",

    "s3_heading": "Iba Pang Mga Estratehiyang Batay sa Ebidensya",
    "strat_fibre_title": "Dietary Fibre",
    "strat_fibre_target_html": "<strong>Target:</strong> edad ng bata sa taon + 5 g/araw (hal. ang isang 4-taong-gulid ay nangangailangan ng ~9 g/araw)",
    "strat_fibre_foods_html": "<strong>Mga pagkaing mayaman sa fibre:</strong> peras, prunes, mansanas (may balat), berries, broccoli, karot, gisantes, oatmeal, tinapay na whole wheat, bran cereals, beans, lentils",
    "strat_fibre_dairy": "Iwasang masyadong maraming dairy (gatas, keso) — maaaring lumala ang constipation",
    "strat_fibre_gradual": "Dahan-dahang dagdagan ang fibre upang maiwasan ang gas at pamamaga",
    "strat_fluid_title": "Pag-inom ng Likido",
    "fluid_col_age": "Edad",
    "fluid_col_amount": "Target / araw",
    "fluid_age_1": "1–3 taon",
    "fluid_amt_1": "~4 tasa (1 L)",
    "fluid_age_2": "4–8 taon",
    "fluid_amt_2": "~5 tasa (1.2 L)",
    "fluid_age_3": "9–13 taon",
    "fluid_amt_3": "~7–8 tasa (1.7 L)",
    "strat_fluid_best": "Ang tubig at gatas ang pinakamainam; limitahan ang juice sa ≤ 125 mL/araw para sa maliliit na bata",
    "strat_fluid_prune_html": "<strong>Ang prune juice</strong> ay may ebidensya para sa banayad na constipation: 60–120 mL/araw para sa mga sanggol na >1 buwan; 125 mL/araw para sa maliliit na bata",
    "strat_toilet_title": "Rutina sa Banyo",
    "strat_toilet_gcr_html": "Nakatakdang pag-upo <strong>pagkatapos kumain</strong> — ang gastrocolic reflex ay pinakamatapang 20–30 minuto pagkatapos kumain",
    "strat_toilet_sit": "Umupo ng 5–10 minuto; iwasang magmadali o pilitin ang bata",
    "strat_toilet_stool_html": "Gumamit ng <strong>footstool</strong> para mas mataas ang mga tuhod kaysa sa balakang — ang posisyon ng pag-upo ay nagpaparelaks ng puborectalis muscle",
    "strat_toilet_praise": "Positibong pagpapalakas — purihin ang pagsisikap, hindi lang ang tagumpay",
    "strat_activity_title": "Pisikal na Aktibidad",
    "strat_activity_motility": "Ang regular na pisikal na aktibidad ay nagpapagana ng motility ng bituka",
    "strat_activity_goal": "Layunin ang 60 minuto ng katamtamang aktibidad bawat araw para sa mga batang nag-aaral",
    "strat_activity_walk": "Kahit maikling paglalakad pagkatapos kumain ay makakatulong",
    "strat_behav_title": "Mga Estratehiya sa Ugali",
    "strat_behav_diary": "Mag-ingat ng talaan ng dumi upang subaybayan ang dalas, konsistensya, at anumang sakit",
    "strat_behav_chart": "Reward charts para sa pag-upo sa banyo (hindi para sa paggawa ng dumi — nagbabawas ng pagkabalisa sa pagganap)",
    "strat_behav_accidents": "Iwasang parusahan ang mga aksidente — ang pagpigil ay madalas na hindi sinasadya",
    "strat_behav_training": "Para sa mga batang may edad para sa pagsasanay sa banyo: tiyaking handa bago magsanay; ang pag-urong habang nagsasanay ay karaniwan sa constipation",

    "s4_heading": "Kailan Humingi ng Medikal na Tulong",
    "emerg_title": "Kailan Humingi ng Medikal na Tulong",
    "emerg_tier_ed": "Pumunta sa Emergency Department kung:",
    "emerg_ed_1": "Dugo sa dumi (malaking halaga)",
    "emerg_ed_2": "Matinding sakit o pamamaga ng tiyan",
    "emerg_ed_3": "Pagsusukang may apdo (berde) kasabay ng constipation",
    "emerg_ed_4": "Ang bata ay mukhang napakasama o manhid",
    "emerg_tier_doc": "Kumonsulta sa inyong doktor o nurse practitioner kung:",
    "emerg_doc_1": "Walang pagdadumi nang higit sa 1 linggo kahit may pamamahala sa bahay",
    "emerg_doc_2": "Ang constipation ay naroroon mula pa sa kapanganakan o maagang sanggol",
    "emerg_doc_3": "Ang bata ay nawawalan ng timbang o hindi lumalaki nang maayos",
    "emerg_doc_4": "Masakit na anal fissures o rectal prolapse",
    "emerg_doc_5": "Mga sintomas sa ihi: paulit-ulit na UTI o pag-aanak sa araw",
    "emerg_doc_6": "Nagaalala ka sa anumang dahilan",

    "footer_html": "<strong>Disclaimer:</strong> Ang sheet na ito ay isang klinikong sanggunian. Ang mga dosis ng PEG 3350 ay batay sa mga nai-publish na Canadian pediatric guidelines (SickKids AboutKidsHealth, CHEO, CPS). Ang mga indibidwal na salik ng pasyente kabilang ang edad, tungkulin ng organ, kasabay na gamot, at klinikong konteksto ay dapat palaging isaalang-alang. Ang tool na ito ay hindi pumapalit sa kliniko na pagpapasya o indibidwal na medikal na payo.",

    "unit_g": "g",
    "unit_tsp": "kutsarita",
    "unit_cap": "cap",
    "dash": "—",
    "enter_weight": "Ilagay ang timbang sa itaas"
  },

  /* ═══════════════════════════════════════════════════
     TAMIL
  ═══════════════════════════════════════════════════ */
  "ta": {
    "page_title": "மலக் குறிப்பு — குழந்தைகளில் மலச்சிக்கல் மேலாண்மை",
    "header_emoji": "💩",
    "header_title": "மலக்",
    "header_title_highlight": "குறிப்பு",
    "header_subtitle": "குழந்தைகளில் மலச்சிக்கலுக்கான சான்று அடிப்படையிலான உத்திகள் மற்றும் எடை அடிப்படையிலான PEG 3350 அளவுகள், SickKids AboutKidsHealth, CHEO மற்றும் CPS வழிகாட்டுதல்களின் அடிப்படையில்.",
    "print_btn": "அச்சிடு",
    "lang_selector_label": "மொழி",

    "s1_heading": "மலச்சிக்கல் என்றால் என்ன?",
    "defn_box_heading": "மருத்துவ வரையறை",
    "bss_chip_1_label": "Bristol 1–2",
    "bss_chip_1_desc": "மலச்சிக்கல்",
    "bss_chip_34_label": "Bristol 3–4",
    "bss_chip_34_desc": "சிறந்தது",
    "bss_chip_67_label": "Bristol 6–7",
    "bss_chip_67_desc": "வயிற்றுப்போக்கு",
    "defn_note_html": "<strong>மலச்சிக்கல்</strong> என்பது வாரத்தில் 2 முறைக்கும் குறைவான மலம் கழித்தல், அல்லது கடினமான, உலர்ந்த மற்றும் வலிமிகுந்த மலம் (Bristol வகை 1–2) என வரையறுக்கப்படுகிறது. Bristol 3–4 வகைகள் இலக்கு நிலைத்தன்மை — மென்மையான, நன்கு வடிவமைக்கப்பட்ட மற்றும் எளிதாக கடந்து செல்லும். 6–7 வகைகள் வயிற்றுப்போக்கை குறிக்கின்றன. மலச்சிக்கல் குழந்தைகளில் மிகவும் பொதுவானது மற்றும் பொதுவாக தீவிரமானதல்ல — பெரும்பாலான வழக்குகள் உணவு மாற்றங்கள் மற்றும் மலமிளக்கிகளுக்கு நன்றாக பதிலளிக்கின்றன.",
    "redflag_title": "எச்சரிக்கை அறிகுறிகள் — மருத்துவ உதவி பெறுங்கள்",
    "redflag_1": "மலத்தில் இரத்தம்",
    "redflag_2": "நாடா அல்லது பென்சில் போன்ற மெல்லிய மலம்",
    "redflag_3": "கடுமையான வயிற்று வீக்கம்",
    "redflag_4": "மலச்சிக்கலுடன் வாந்தி",
    "redflag_5": "பிறந்த 48 மணி நேரத்திற்குள் மெக்கோனியம் வெளியிடாமல் இருத்தல்",
    "redflag_6": "வாழ்க்கையின் முதல் மாதத்தில் தொடங்கும் மலச்சிக்கல்",
    "redflag_7": "நரம்பியல் அறிகுறிகள் (பலவீனம், குறைந்த தசை தொனி)",

    "s2_heading": "PEG 3350 அளவு கணிப்பான்",
    "peg_box_heading": "PEG 3350 பற்றி",
    "peg_box_html": "PEG 3350 கனடாவில் <strong>Lax-A-Day</strong> மற்றும் <strong>RestoraLAX</strong> (மற்றும் பொதுவான) என விற்கப்படுகிறது. இது ஒரு ஆஸ்மோடிக் மலமிளக்கி — சுவையற்ற மற்றும் மணமற்றது. <strong>≥ 6 மாதங்கள்</strong> வயது குழந்தைகளுக்கு ஏற்றது. ஒரு நிலையான சாஷே அல்லது ஒரு நிரம்பிய RestoraLAX மூடி = <strong>17 g</strong>.",
    "label_weight": "குழந்தையின் எடை",
    "weight_placeholder": "—",
    "warn_low_weight": "⚠️ எடை 5 kg க்கும் குறைவு — PEG 3350 தொடங்குவதற்கு முன் வயது ≥ 6 மாதங்கள் என உறுதிப்படுத்தவும்.",

    "phase_disimp_label": "கட்டம் 1 — அடைப்பு நீக்கம்",
    "phase_maint_label": "கட்டம் 2 — பராமரிப்பு",

    "disimp_dose_label": "அடைப்பு நீக்க அளவு",
    "disimp_dose_sub": "1.5 g/kg/நாள் · அதிகபட்சம் 100 g/நாள்",
    "disimp_duration_label": "காலம்",
    "disimp_duration_val": "3–6 நாட்கள்",
    "disimp_duration_sub": "அடைப்பு நீக்கம் உறுதிப்படும் வரை",
    "disimp_max_label": "அன்றாட அதிகபட்சம்",
    "disimp_max_val": "100 g / 10 மூடிகள்",
    "disimp_max_sub": "மருத்துவர் வழிகாட்டுதல் தேவை",

    "disimp_result_heading": "அடைப்பு நீக்க அளவு — கணக்கிடப்பட்டது",
    "res_disimp_g": "அன்றாட அளவு (g)",
    "res_disimp_cap": "அன்றாட அளவு (மூடிகள்)",
    "res_disimp_cap_sub": "ஒரு மூடிக்கு 17 g",
    "res_disimp_split": "பிரிக்கப்பட்ட அளவு (g)",
    "res_disimp_split_cap": "பிரிக்கப்பட்ட அளவு (மூடிகள்)",
    "res_disimp_cap_sub2": "ஒரு மூடிக்கு 17 g",
    "disimp_group_daily": "தினசரி ஒரே அளவு",
    "disimp_group_split": "பிரிக்கப்பட்டது — நாளில் இருமுறை (ஒவ்வொரு அளவும்)",
    "disimp_note_html": "<strong>மருத்துவர் வழிகாட்டுதல் தேவை.</strong> தொடங்குவதற்கு முன் அடைப்பை உறுதிப்படுத்தவும். <strong>3–6 நாட்கள்</strong> 1.5 g/kg/நாள் கொடுங்கள். ஒரே அளவாக அல்லது இரண்டு அளவுகளாக பிரித்துக் கொடுக்கலாம். அடைப்பு நீக்கம் உறுதிப்பட்டதும் (மென்மையான மலம், மென்மையான வயிறு), நிறுத்தி உடனே கீழே உள்ள பராமரிப்பு அளவுக்கு மாறவும். அதிகபட்சம் 100 g/நாள்.",

    "maint_low_label": "குறைந்தபட்சம்",
    "maint_low_sub": "0.4 g/kg/நாள்",
    "maint_high_label": "அதிகபட்சம்",
    "maint_high_sub": "0.8 g/kg/நாள்",
    "maint_duration_label": "காலம்",
    "maint_duration_val": "வாரங்கள்–மாதங்கள்",
    "maint_duration_sub": "வழக்கமான பழக்கங்கள் நிலைநாட்டப்படும் வரை",
    "maint_max_label": "அன்றாட அதிகபட்சம்",
    "maint_max_sub": "1 நிலையான சாஷே / 1 நிரம்பிய மூடி",

    "maint_result_heading": "பராமரிப்பு அளவு — கணக்கிடப்பட்டது",
    "res_low_g": "குறைந்தபட்சம் (g/நாள்)",
    "res_high_g": "அதிகபட்சம் (g/நாள்)",
    "res_cap_low": "மூடி அளவு (குறைவு)",
    "res_cap_high": "மூடி அளவு (அதிகம்)",
    "res_cap_unit": "17 g மூடியில்",
    "res_cap_unit2": "17 g மூடியில்",
    "maint_note_html": "<strong>குறைந்தபட்ச அளவில் தொடங்கவும்</strong> மற்றும் நாள்தோறும் ஒரு மென்மையான மலம் பெற படிப்படியாக அதிகரிக்கவும். விளைவுகள் 2–3 நாட்கள் ஆகலாம். அதிகபட்சம் 17 g/நாள் (ஒரு நிலையான Lax-A-Day / RestoraLAX சாஷே அல்லது ஒரு நிரம்பிய மூடி). ஒரே அளவாக அல்லது இரண்டாக பிரித்துக் கொடுக்கலாம். படிப்படியாக குறைப்பதற்கு முன் வழக்கமான குடல் பழக்கங்கள் நன்கு நிலைநாட்டப்படும் வரை <strong>வாரங்கள் முதல் மாதங்கள் வரை</strong> தொடரவும்.",

    "mix_heading": "PEG 3350 (Lax-A-Day / RestoraLAX) எப்படி கலப்பது",
    "mix_body_html": "தூளை <strong>250 mL (1 கப்)</strong> தண்ணீர், ஜூஸ் அல்லது பாலில் கலக்கவும். முழுமையாக கரையும் வரை கலக்கவும் — இது <strong>சுவையற்ற மற்றும் மணமற்றது</strong>. குழந்தையின் விருப்பமான பானத்தில் கலக்கலாம். கார்பனேட்டட் பானங்களுடன் கலக்க வேண்டாம். <strong>≥ 6 மாதங்கள்</strong> வயது குழந்தைகளுக்கு ஏற்றது.",

    "s3_heading": "சான்று அடிப்படையிலான பிற உத்திகள்",
    "strat_fibre_title": "உணவு நார்ச்சத்து",
    "strat_fibre_target_html": "<strong>இலக்கு:</strong> குழந்தையின் வயது ஆண்டுகளில் + 5 g/நாள் (எ.கா. 4 வயது குழந்தைக்கு ~9 g/நாள் தேவை)",
    "strat_fibre_foods_html": "<strong>நார்ச்சத்து நிறைந்த உணவுகள்:</strong> பேரிக்காய், கொடிமுந்திரி, ஆப்பிள் (தோலுடன்), பெர்ரிகள், ப்ரோக்கோலி, கேரட், பச்சைப்பட்டாணி, ஓட்மீல், முழு கோதுமை ரொட்டி, தவிட்டு தானியங்கள், பீன்ஸ், பருப்பு",
    "strat_fibre_dairy": "அதிகமான பால் பொருட்களை (பால், சீஸ்) தவிர்க்கவும் — மலச்சிக்கலை மோசமாக்கலாம்",
    "strat_fibre_gradual": "வாயு மற்றும் வீக்கத்தை தவிர்க்க படிப்படியாக நார்ச்சத்தை அதிகரிக்கவும்",
    "strat_fluid_title": "திரவ உட்கொள்ளல்",
    "fluid_col_age": "வயது",
    "fluid_col_amount": "இலக்கு / நாள்",
    "fluid_age_1": "1–3 வருடங்கள்",
    "fluid_amt_1": "~4 கப் (1 L)",
    "fluid_age_2": "4–8 வருடங்கள்",
    "fluid_amt_2": "~5 கப் (1.2 L)",
    "fluid_age_3": "9–13 வருடங்கள்",
    "fluid_amt_3": "~7–8 கப் (1.7 L)",
    "strat_fluid_best": "தண்ணீரும் பாலும் சிறந்தவை; சிறு குழந்தைகளுக்கு ஜூஸை ≤ 125 mL/நாள் என்று கட்டுப்படுத்தவும்",
    "strat_fluid_prune_html": "<strong>கொடிமுந்திரி ஜூஸ்</strong> லேசான மலச்சிக்கலுக்கு சான்று உள்ளது: >1 மாத குழந்தைகளுக்கு 60–120 mL/நாள்; சிறு குழந்தைகளுக்கு 125 mL/நாள்",
    "strat_toilet_title": "கழிவறை வழக்கம்",
    "strat_toilet_gcr_html": "<strong>உணவுக்கு பிறகு</strong> திட்டமிட்ட அமர்வு — சாப்பிட்ட 20–30 நிமிடங்களுக்கு பிறகு இரைப்பை-பெருங்குடல் பிரதிபலிப்பு மிகவும் வலிமையாக இருக்கும்",
    "strat_toilet_sit": "5–10 நிமிடங்கள் உட்காரவும்; குழந்தையை அவசரப்படுத்தவோ அழுத்தம் கொடுக்கவோ வேண்டாம்",
    "strat_toilet_stool_html": "<strong>கால் ஆதரவு</strong> பயன்படுத்தி முழங்காலை இடுப்பை விட உயரமாக வைக்கவும் — குந்து நிலை புபோரெக்டலிஸ் தசையை தளர்த்துகிறது",
    "strat_toilet_praise": "நேர்மறை வலுவூட்டல் — முயற்சியை பாராட்டவும், வெற்றியை மட்டும் அல்ல",
    "strat_activity_title": "உடற்பயிற்சி",
    "strat_activity_motility": "தொடர்ந்த உடற்பயிற்சி குடல் இயக்கத்தை தூண்டுகிறது",
    "strat_activity_goal": "பள்ளிக்கூட வயது குழந்தைகளுக்கு நாளும் 60 நிமிட மிதமான செயல்பாட்டை இலக்காக கொள்ளவும்",
    "strat_activity_walk": "சாப்பிட்ட பிறகு குறுகிய நடைப்பயிற்சிகளும் உதவும்",
    "strat_behav_title": "நடத்தை உத்திகள்",
    "strat_behav_diary": "அதிர்வெண், நிலைத்தன்மை மற்றும் வலியை கண்காணிக்க மல நாட்குறிப்பு வைத்திருக்கவும்",
    "strat_behav_chart": "கழிவறையில் அமர்வதற்கான பரிசு அட்டவணைகள் (மலம் கழிப்பதற்கு அல்ல — செயல்திறன் கவலையை குறைக்கிறது)",
    "strat_behav_accidents": "விபத்துக்களை தண்டிக்க வேண்டாம் — தடுப்பு பெரும்பாலும் தன்னிச்சையற்றது",
    "strat_behav_training": "கழிவறை பயிற்சி வயது குழந்தைகளுக்கு: பயிற்சிக்கு முன் தயார்நிலையை உறுதிப்படுத்தவும்; மலச்சிக்கல் நேரத்தில் பயிற்சியில் பின்னடைவு பொதுவானது",

    "s4_heading": "மருத்துவ உதவி எப்போது பெறுவது",
    "emerg_title": "மருத்துவ உதவி எப்போது பெறுவது",
    "emerg_tier_ed": "அவசர சேவைக்கு செல்லுங்கள் என்றால்:",
    "emerg_ed_1": "மலத்தில் இரத்தம் (குறிப்பிடத்தக்க அளவு)",
    "emerg_ed_2": "கடுமையான வயிற்று வலி அல்லது வீக்கம்",
    "emerg_ed_3": "மலச்சிக்கலுடன் பித்த (பச்சை) வாந்தி",
    "emerg_ed_4": "குழந்தை மிகவும் நோய்வாய்ப்பட்டதாக அல்லது சோர்வாக தெரிகிறது",
    "emerg_tier_doc": "உங்கள் மருத்துவர் அல்லது நர்ஸ் பிராக்டிஷனரை பாருங்கள் என்றால்:",
    "emerg_doc_1": "வீட்டில் மேலாண்மை இருந்தும் 1 வாரத்துக்கும் மேல் மலம் இல்லை",
    "emerg_doc_2": "பிறப்பிலிருந்து அல்லது ஆரம்பகால குழந்தை பருவத்திலிருந்து மலச்சிக்கல்",
    "emerg_doc_3": "குழந்தை எடை குறைக்கிறது அல்லது நன்றாக வளரவில்லை",
    "emerg_doc_4": "வலிமிகுந்த குத வெடிப்புகள் அல்லது மலக்குடல் வெளியேறல்",
    "emerg_doc_5": "சிறுநீர் அறிகுறிகள்: திரும்பத்திரும்ப UTI அல்லது பகல் நேர சிறுநீர் கட்டுப்பாடு இழப்பு",
    "emerg_doc_6": "நீங்கள் எந்த காரணத்திற்காகவும் கவலைப்படுகிறீர்கள்",

    "footer_html": "<strong>மறுப்பு:</strong> இந்த தாள் ஒரு மருத்துவ குறிப்பு உதவி. PEG 3350 அளவுகள் வெளியிடப்பட்ட கனடிய குழந்தை மருத்துவ வழிகாட்டுதல்களை (SickKids AboutKidsHealth, CHEO, CPS) அடிப்படையாகக் கொண்டவை. வயது, உறுப்பு செயல்பாடு, ஒரே நேரத்தில் உள்ள மருந்துகள் மற்றும் மருத்துவ சூழல் உட்பட தனிப்பட்ட நோயாளி காரணிகளை எப்போதும் கருத்தில் கொள்ள வேண்டும். இந்த கருவி மருத்துவ தீர்ப்பையோ தனிப்பயனாக்கப்பட்ட மருத்துவ ஆலோசனையையோ மாற்றாது.",

    "unit_g": "g",
    "unit_tsp": "தேக்கரண்டி",
    "unit_cap": "மூடி",
    "dash": "—",
    "enter_weight": "மேலே எடையை உள்ளிடவும்"
  },

  /* ═══════════════════════════════════════════════════
     VIETNAMESE
  ═══════════════════════════════════════════════════ */
  "vi": {
    "page_title": "Tờ Hướng Dẫn Táo Bón — Quản Lý Táo Bón Nhi Khoa",
    "header_emoji": "💩",
    "header_title": "Tờ Hướng Dẫn",
    "header_title_highlight": "Táo Bón",
    "header_subtitle": "Các chiến lược dựa trên bằng chứng và liều PEG 3350 theo cân nặng cho táo bón ở trẻ em, dựa trên hướng dẫn của SickKids AboutKidsHealth, CHEO và CPS.",
    "print_btn": "In",
    "lang_selector_label": "Ngôn ngữ",

    "s1_heading": "Táo Bón Là Gì?",
    "defn_box_heading": "Định Nghĩa Lâm Sàng",
    "bss_chip_1_label": "Bristol 1–2",
    "bss_chip_1_desc": "Táo bón",
    "bss_chip_34_label": "Bristol 3–4",
    "bss_chip_34_desc": "Lý tưởng",
    "bss_chip_67_label": "Bristol 6–7",
    "bss_chip_67_desc": "Tiêu chảy",
    "defn_note_html": "<strong>Táo bón</strong> được định nghĩa là ít hơn 2 lần đi ngoài mỗi tuần, hoặc phân cứng, khô và đau khi đi (Bristol loại 1–2). Bristol loại 3–4 là độ đặc mục tiêu — mềm, hình dạng tốt, dễ đi. Loại 6–7 cho thấy tiêu chảy. Táo bón rất phổ biến ở trẻ em và thường không nghiêm trọng — hầu hết các trường hợp đáp ứng tốt với thay đổi chế độ ăn và thuốc nhuận tràng.",
    "redflag_title": "Dấu Hiệu Cảnh Báo — Tìm Kiếm Sự Chăm Sóc Y Tế",
    "redflag_1": "Máu trong phân",
    "redflag_2": "Phân dạng dải hoặc mỏng như bút chì",
    "redflag_3": "Chướng bụng nghiêm trọng",
    "redflag_4": "Nôn mửa kèm táo bón",
    "redflag_5": "Không có phân su trong vòng 48 giờ sau khi sinh",
    "redflag_6": "Táo bón bắt đầu trong tháng đầu tiên của cuộc sống",
    "redflag_7": "Triệu chứng thần kinh (yếu cơ, giảm trương lực)",

    "s2_heading": "Máy Tính Liều PEG 3350",
    "peg_box_heading": "Về PEG 3350",
    "peg_box_html": "PEG 3350 được bán ở Canada dưới tên <strong>Lax-A-Day</strong> và <strong>RestoraLAX</strong> (và thuốc gốc). Đây là thuốc nhuận tràng thẩm thấu — không có mùi vị. Thích hợp cho trẻ em <strong>≥ 6 tháng</strong>. Một gói tiêu chuẩn hoặc một nắp đầy RestoraLAX = <strong>17 g</strong>.",
    "label_weight": "Cân Nặng Của Trẻ",
    "weight_placeholder": "—",
    "warn_low_weight": "⚠️ Cân nặng dưới 5 kg — xác nhận tuổi ≥ 6 tháng trước khi bắt đầu PEG 3350.",

    "phase_disimp_label": "Giai Đoạn 1 — Giải Phóng Tắc Nghẽn",
    "phase_maint_label": "Giai Đoạn 2 — Duy Trì",

    "disimp_dose_label": "Liều Giải Phóng Tắc Nghẽn",
    "disimp_dose_sub": "1,5 g/kg/ngày · tối đa 100 g/ngày",
    "disimp_duration_label": "Thời Gian",
    "disimp_duration_val": "3–6 ngày",
    "disimp_duration_sub": "Cho đến khi xác nhận giải phóng tắc nghẽn",
    "disimp_max_label": "Tối Đa Hàng Ngày",
    "disimp_max_val": "100 g / 10 nắp",
    "disimp_max_sub": "Cần có hướng dẫn của bác sĩ",

    "disimp_result_heading": "Liều Giải Phóng Tắc Nghẽn — Đã Tính",
    "res_disimp_g": "Liều hàng ngày (g)",
    "res_disimp_cap": "Liều hàng ngày (nắp)",
    "res_disimp_cap_sub": "17 g mỗi nắp",
    "res_disimp_split": "Liều chia nhỏ (g)",
    "res_disimp_split_cap": "Liều chia nhỏ (nắp)",
    "res_disimp_cap_sub2": "17 g mỗi nắp",
    "disimp_group_daily": "Liều Duy Nhất Hàng Ngày",
    "disimp_group_split": "Chia Nhỏ — Hai Lần Mỗi Ngày (mỗi liều)",
    "disimp_note_html": "<strong>Cần có hướng dẫn của bác sĩ.</strong> Xác nhận tắc nghẽn trước khi bắt đầu. Cho 1,5 g/kg/ngày trong <strong>3–6 ngày</strong>. Có thể cho liều duy nhất hàng ngày hoặc chia thành hai liều. Sau khi xác nhận giải phóng tắc nghẽn (phân mềm, bụng mềm), dừng lại và chuyển ngay sang liều duy trì bên dưới. Tối đa 100 g/ngày.",

    "maint_low_label": "Liều Thấp",
    "maint_low_sub": "0,4 g/kg/ngày",
    "maint_high_label": "Liều Cao",
    "maint_high_sub": "0,8 g/kg/ngày",
    "maint_duration_label": "Thời Gian",
    "maint_duration_val": "Tuần–tháng",
    "maint_duration_sub": "Cho đến khi thiết lập thói quen đều đặn",
    "maint_max_label": "Tối Đa Hàng Ngày",
    "maint_max_sub": "1 gói tiêu chuẩn / 1 nắp đầy",

    "maint_result_heading": "Liều Duy Trì — Đã Tính",
    "res_low_g": "Liều thấp (g/ngày)",
    "res_high_g": "Liều cao (g/ngày)",
    "res_cap_low": "Đo theo nắp (thấp)",
    "res_cap_high": "Đo theo nắp (cao)",
    "res_cap_unit": "của nắp 17 g",
    "res_cap_unit2": "của nắp 17 g",
    "maint_note_html": "<strong>Bắt đầu ở liều thấp</strong> và tăng dần để đạt một lần đi ngoài phân mềm mỗi ngày. Có thể mất 2–3 ngày mới có hiệu quả. Tối đa là 17 g/ngày (một gói Lax-A-Day / RestoraLAX tiêu chuẩn hoặc một nắp đầy). Có thể cho liều duy nhất hoặc chia nhỏ. Tiếp tục <strong>vài tuần đến vài tháng</strong> cho đến khi thói quen đại tiện đều đặn được thiết lập tốt trước khi giảm dần.",

    "mix_heading": "Cách Pha PEG 3350 (Lax-A-Day / RestoraLAX)",
    "mix_body_html": "Hòa tan bột vào <strong>250 mL (1 cốc)</strong> nước, nước ép hoặc sữa. Khuấy cho đến khi tan hoàn toàn — <strong>không mùi không vị</strong>. Có thể pha vào đồ uống yêu thích của trẻ. Không pha với đồ uống có ga. Thích hợp cho trẻ em <strong>≥ 6 tháng</strong>.",

    "s3_heading": "Các Chiến Lược Khác Dựa Trên Bằng Chứng",
    "strat_fibre_title": "Chất Xơ Trong Chế Độ Ăn",
    "strat_fibre_target_html": "<strong>Mục tiêu:</strong> tuổi của trẻ tính bằng năm + 5 g/ngày (ví dụ trẻ 4 tuổi cần ~9 g/ngày)",
    "strat_fibre_foods_html": "<strong>Thực phẩm giàu chất xơ:</strong> lê, mận khô, táo (có vỏ), quả mọng, bông cải xanh, cà rốt, đậu Hà Lan, yến mạch, bánh mì nguyên cám, ngũ cốc cám, đậu, đậu lăng",
    "strat_fibre_dairy": "Tránh dùng quá nhiều sản phẩm từ sữa (sữa, phô mai) — có thể làm nặng thêm táo bón",
    "strat_fibre_gradual": "Tăng chất xơ từ từ để tránh đầy hơi và chướng bụng",
    "strat_fluid_title": "Lượng Nước Uống",
    "fluid_col_age": "Tuổi",
    "fluid_col_amount": "Mục tiêu / ngày",
    "fluid_age_1": "1–3 tuổi",
    "fluid_amt_1": "~4 cốc (1 L)",
    "fluid_age_2": "4–8 tuổi",
    "fluid_amt_2": "~5 cốc (1,2 L)",
    "fluid_age_3": "9–13 tuổi",
    "fluid_amt_3": "~7–8 cốc (1,7 L)",
    "strat_fluid_best": "Nước và sữa là tốt nhất; hạn chế nước ép ≤ 125 mL/ngày cho trẻ nhỏ",
    "strat_fluid_prune_html": "<strong>Nước ép mận</strong> có bằng chứng cho táo bón nhẹ: 60–120 mL/ngày cho trẻ sơ sinh >1 tháng; 125 mL/ngày cho trẻ nhỏ",
    "strat_toilet_title": "Thói Quen Vệ Sinh",
    "strat_toilet_gcr_html": "Ngồi theo lịch <strong>sau bữa ăn</strong> — phản xạ dạ dày-kết tràng mạnh nhất 20–30 phút sau khi ăn",
    "strat_toilet_sit": "Ngồi 5–10 phút; tránh vội vàng hoặc gây áp lực cho trẻ",
    "strat_toilet_stool_html": "Dùng <strong>ghế kê chân</strong> để đầu gối cao hơn hông — tư thế ngồi xổm giúp thư giãn cơ mu-trực tràng",
    "strat_toilet_praise": "Củng cố tích cực — khen nỗ lực, không chỉ khi thành công",
    "strat_activity_title": "Hoạt Động Thể Chất",
    "strat_activity_motility": "Hoạt động thể chất đều đặn kích thích nhu động ruột",
    "strat_activity_goal": "Hướng tới 60 phút hoạt động vừa phải mỗi ngày cho trẻ em độ tuổi đi học",
    "strat_activity_walk": "Ngay cả đi bộ ngắn sau bữa ăn cũng có thể giúp ích",
    "strat_behav_title": "Chiến Lược Hành Vi",
    "strat_behav_diary": "Ghi nhật ký phân để theo dõi tần suất, độ đặc và bất kỳ cơn đau nào",
    "strat_behav_chart": "Bảng khen thưởng cho việc ngồi bồn cầu (không phải để đi ngoài — giảm lo lắng về kết quả)",
    "strat_behav_accidents": "Tránh phạt vì tai nạn — nhịn đi thường là không cố ý",
    "strat_behav_training": "Đối với trẻ trong độ tuổi luyện vệ sinh: đảm bảo sẵn sàng trước khi luyện tập; thoái lui trong quá trình luyện tập là phổ biến với táo bón",

    "s4_heading": "Khi Nào Cần Tìm Kiếm Sự Chăm Sóc Y Tế",
    "emerg_title": "Khi Nào Cần Tìm Kiếm Sự Chăm Sóc Y Tế",
    "emerg_tier_ed": "Đến Phòng Cấp Cứu nếu:",
    "emerg_ed_1": "Máu trong phân (lượng đáng kể)",
    "emerg_ed_2": "Đau bụng hoặc chướng bụng nghiêm trọng",
    "emerg_ed_3": "Nôn mật (xanh) kèm táo bón",
    "emerg_ed_4": "Trẻ trông rất yếu hoặc li bì",
    "emerg_tier_doc": "Gặp bác sĩ hoặc điều dưỡng thực hành nếu:",
    "emerg_doc_1": "Không đi ngoài hơn 1 tuần mặc dù đã chăm sóc tại nhà",
    "emerg_doc_2": "Táo bón có từ khi sinh hoặc thời kỳ sơ sinh",
    "emerg_doc_3": "Trẻ sụt cân hoặc phát triển không tốt",
    "emerg_doc_4": "Nứt hậu môn đau hoặc sa trực tràng",
    "emerg_doc_5": "Triệu chứng tiết niệu: nhiễm khuẩn tiết niệu tái phát hoặc tiểu không kiểm soát ban ngày",
    "emerg_doc_6": "Bạn lo lắng vì bất kỳ lý do gì",

    "footer_html": "<strong>Tuyên bố miễn trách nhiệm:</strong> Tờ này là tài liệu tham khảo lâm sàng. Liều PEG 3350 dựa trên các hướng dẫn nhi khoa Canada đã được công bố (SickKids AboutKidsHealth, CHEO, CPS). Các yếu tố cá nhân của bệnh nhân bao gồm tuổi, chức năng cơ quan, thuốc dùng kèm và bối cảnh lâm sàng phải luôn được xem xét. Công cụ này không thay thế phán đoán lâm sàng hoặc lời khuyên y tế cá nhân hóa.",

    "unit_g": "g",
    "unit_tsp": "thìa cà phê",
    "unit_cap": "nắp",
    "dash": "—",
    "enter_weight": "Nhập cân nặng ở trên"
  },

  /* ═══════════════════════════════════════════════════
     KOREAN
  ═══════════════════════════════════════════════════ */
  "ko": {
    "page_title": "변비 안내 — 소아 변비 관리",
    "header_emoji": "💩",
    "header_title": "변비",
    "header_title_highlight": "안내",
    "header_subtitle": "SickKids AboutKidsHealth, CHEO 및 CPS 지침에 기반한 소아 변비의 근거 중심 전략 및 체중 기반 PEG 3350 용량.",
    "print_btn": "인쇄",
    "lang_selector_label": "언어",

    "s1_heading": "변비란 무엇인가요?",
    "defn_box_heading": "임상적 정의",
    "bss_chip_1_label": "Bristol 1–2",
    "bss_chip_1_desc": "변비",
    "bss_chip_34_label": "Bristol 3–4",
    "bss_chip_34_desc": "이상적",
    "bss_chip_67_label": "Bristol 6–7",
    "bss_chip_67_desc": "설사",
    "defn_note_html": "<strong>변비</strong>는 일주일에 2회 미만의 배변 또는 딱딱하고 건조하며 배변 시 통증이 있는 변(Bristol 1–2형)으로 정의됩니다. Bristol 3–4형이 목표 변 상태로 — 부드럽고 잘 형성되며 쉽게 배출됩니다. 6–7형은 설사를 나타냅니다. 변비는 소아에서 매우 흔하며 일반적으로 심각하지 않습니다 — 대부분의 경우 식이 변화와 완하제로 잘 호전됩니다.",
    "redflag_title": "경고 증상 — 의료 도움 받기",
    "redflag_1": "변에 혈액",
    "redflag_2": "리본 모양이나 연필처럼 가는 변",
    "redflag_3": "심한 복부 팽창",
    "redflag_4": "변비와 함께 구토",
    "redflag_5": "출생 후 48시간 이내 태변 미배출",
    "redflag_6": "생후 첫 달부터 시작된 변비",
    "redflag_7": "신경학적 증상 (무력증, 근 긴장도 저하)",

    "s2_heading": "PEG 3350 용량 계산기",
    "peg_box_heading": "PEG 3350 소개",
    "peg_box_html": "PEG 3350은 캐나다에서 <strong>Lax-A-Day</strong>와 <strong>RestoraLAX</strong>(및 일반 의약품)로 판매됩니다. 삼투성 완하제로 — 무미무취입니다. <strong>≥ 6개월</strong> 소아에 적합합니다. 표준 1회용 봉지 또는 RestoraLAX 뚜껑 1개 = <strong>17 g</strong>.",
    "label_weight": "아이의 체중",
    "weight_placeholder": "—",
    "warn_low_weight": "⚠️ 체중 5 kg 미만 — PEG 3350 시작 전 월령 ≥ 6개월 확인.",

    "phase_disimp_label": "1단계 — 변 제거",
    "phase_maint_label": "2단계 — 유지",

    "disimp_dose_label": "변 제거 용량",
    "disimp_dose_sub": "1.5 g/kg/일 · 최대 100 g/일",
    "disimp_duration_label": "기간",
    "disimp_duration_val": "3–6일",
    "disimp_duration_sub": "변 제거 확인될 때까지",
    "disimp_max_label": "1일 최대",
    "disimp_max_val": "100 g / 뚜껑 10개",
    "disimp_max_sub": "의사 지도 필요",

    "disimp_result_heading": "변 제거 용량 — 계산 결과",
    "res_disimp_g": "1일 용량 (g)",
    "res_disimp_cap": "1일 용량 (뚜껑)",
    "res_disimp_cap_sub": "뚜껑당 17 g",
    "res_disimp_split": "분할 용량 (g)",
    "res_disimp_split_cap": "분할 용량 (뚜껑)",
    "res_disimp_cap_sub2": "뚜껑당 17 g",
    "disimp_group_daily": "1일 1회 용량",
    "disimp_group_split": "분할 — 1일 2회 (각 용량)",
    "disimp_note_html": "<strong>의사 지도 필요.</strong> 시작 전 변비 덩어리를 확인하세요. <strong>3–6일</strong> 동안 1.5 g/kg/일을 투여하세요. 1일 1회 또는 2회로 나누어 투여할 수 있습니다. 변 제거가 확인되면(부드러운 변, 복부 이완), 즉시 중단하고 유지 용량으로 전환하세요. 최대 100 g/일.",

    "maint_low_label": "최소",
    "maint_low_sub": "0.4 g/kg/일",
    "maint_high_label": "최대",
    "maint_high_sub": "0.8 g/kg/일",
    "maint_duration_label": "기간",
    "maint_duration_val": "수주–수개월",
    "maint_duration_sub": "규칙적인 습관이 형성될 때까지",
    "maint_max_label": "1일 최대",
    "maint_max_sub": "표준 봉지 1개 / 뚜껑 1개",

    "maint_result_heading": "유지 용량 — 계산 결과",
    "res_low_g": "최소 (g/일)",
    "res_high_g": "최대 (g/일)",
    "res_cap_low": "뚜껑 측정 (최소)",
    "res_cap_high": "뚜껑 측정 (최대)",
    "res_cap_unit": "17 g 뚜껑 기준",
    "res_cap_unit2": "17 g 뚜껑 기준",
    "maint_note_html": "<strong>최소 용량부터 시작</strong>하여 하루 1회 부드러운 변을 볼 때까지 서서히 증량하세요. 효과는 2–3일 후 나타날 수 있습니다. 최대 17 g/일(표준 Lax-A-Day / RestoraLAX 1봉지 또는 뚜껑 1개). 1일 1회 또는 2회로 나누어 투여 가능합니다. 서서히 줄이기 전에 규칙적인 배변 습관이 잘 자리 잡을 때까지 <strong>수주에서 수개월</strong> 동안 지속하세요.",

    "mix_heading": "PEG 3350 (Lax-A-Day / RestoraLAX) 타는 방법",
    "mix_body_html": "분말을 <strong>250 mL (1컵)</strong>의 물, 주스 또는 우유에 녹입니다. 완전히 녹을 때까지 저어주세요 — <strong>무미무취</strong>입니다. 아이가 좋아하는 음료에 섞을 수 있습니다. 탄산음료에 혼합하지 마세요. <strong>≥ 6개월</strong> 소아에 적합합니다.",

    "s3_heading": "근거 중심의 기타 전략",
    "strat_fibre_title": "식이 섬유",
    "strat_fibre_target_html": "<strong>목표:</strong> 아이의 나이(세) + 5 g/일 (예: 4세 아이는 하루 ~9 g 필요)",
    "strat_fibre_foods_html": "<strong>섬유질이 풍부한 식품:</strong> 배, 자두, 사과(껍질 포함), 베리류, 브로콜리, 당근, 완두콩, 오트밀, 통밀빵, 밀기울 시리얼, 콩류, 렌틸",
    "strat_fibre_dairy": "유제품(우유, 치즈)을 너무 많이 먹지 마세요 — 변비를 악화시킬 수 있습니다",
    "strat_fibre_gradual": "가스와 팽만감을 방지하기 위해 섬유질을 서서히 늘리세요",
    "strat_fluid_title": "수분 섭취",
    "fluid_col_age": "나이",
    "fluid_col_amount": "목표 / 일",
    "fluid_age_1": "1–3세",
    "fluid_amt_1": "~4컵 (1 L)",
    "fluid_age_2": "4–8세",
    "fluid_amt_2": "~5컵 (1.2 L)",
    "fluid_age_3": "9–13세",
    "fluid_amt_3": "~7–8컵 (1.7 L)",
    "strat_fluid_best": "물과 우유가 가장 좋습니다; 영아는 주스를 ≤ 125 mL/일로 제한하세요",
    "strat_fluid_prune_html": "<strong>자두 주스</strong>는 가벼운 변비에 근거가 있습니다: >1개월 영아 60–120 mL/일; 유아 125 mL/일",
    "strat_toilet_title": "화장실 루틴",
    "strat_toilet_gcr_html": "<strong>식후</strong> 규칙적 앉기 — 위결장 반사는 식사 후 20–30분에 가장 강합니다",
    "strat_toilet_sit": "5–10분 앉아 있기; 아이를 서두르게 하거나 압박하지 마세요",
    "strat_toilet_stool_html": "<strong>발 받침대</strong>를 사용하여 무릎이 엉덩이보다 높게 하세요 — 쪼그려 앉는 자세가 치골직장근을 이완시킵니다",
    "strat_toilet_praise": "긍정적 강화 — 성공만이 아니라 시도도 칭찬하세요",
    "strat_activity_title": "신체 활동",
    "strat_activity_motility": "규칙적인 신체 활동이 장 운동을 촉진합니다",
    "strat_activity_goal": "학령기 아동은 하루 60분 중등도 활동을 목표로 하세요",
    "strat_activity_walk": "식후 짧은 산책도 도움이 될 수 있습니다",
    "strat_behav_title": "행동 전략",
    "strat_behav_diary": "배변 빈도, 굳기, 통증을 기록하는 배변 일지를 작성하세요",
    "strat_behav_chart": "화장실 앉기 보상 차트 (배변에 대한 보상이 아님 — 수행 불안 감소)",
    "strat_behav_accidents": "실수를 벌하지 마세요 — 참는 것은 종종 의도적이지 않습니다",
    "strat_behav_training": "화장실 훈련 연령의 아이: 훈련 전 준비 상태를 확인하세요; 변비가 있을 때 훈련 중 퇴행은 흔합니다",

    "s4_heading": "의료 도움이 필요한 경우",
    "emerg_title": "의료 도움이 필요한 경우",
    "emerg_tier_ed": "응급실로 가세요:",
    "emerg_ed_1": "변에 혈액 (상당한 양)",
    "emerg_ed_2": "심한 복통 또는 팽만",
    "emerg_ed_3": "변비와 함께 담즙성(녹색) 구토",
    "emerg_ed_4": "아이가 매우 아파 보이거나 기력이 없어 보임",
    "emerg_tier_doc": "의사 또는 전문 간호사에게 진료 받으세요:",
    "emerg_doc_1": "가정 관리에도 불구하고 1주일 이상 배변이 없는 경우",
    "emerg_doc_2": "출생 시 또는 초기 영아기부터 변비가 있는 경우",
    "emerg_doc_3": "아이가 체중을 잃거나 성장이 잘 안 되는 경우",
    "emerg_doc_4": "통증이 있는 항문 열창 또는 직장 탈출증",
    "emerg_doc_5": "비뇨기 증상: 반복적 요로감염 또는 낮 동안 요실금",
    "emerg_doc_6": "어떤 이유로든 걱정이 되는 경우",

    "footer_html": "<strong>면책 조항:</strong> 이 안내서는 임상 참고 자료입니다. PEG 3350 용량은 캐나다 소아과 가이드라인(SickKids AboutKidsHealth, CHEO, CPS)에 기반합니다. 나이, 장기 기능, 동반 약물, 임상 상황 등 개별 환자 요인을 항상 고려해야 합니다. 이 도구는 임상적 판단이나 개별화된 의학적 조언을 대체하지 않습니다.",

    "unit_g": "g",
    "unit_tsp": "찻숟가락",
    "unit_cap": "뚜껑",
    "dash": "—",
    "enter_weight": "위에 체중을 입력하세요"
  },

  /* ═══════════════════════════════════════════════════
     POLISH
  ═══════════════════════════════════════════════════ */
  "pl": {
    "page_title": "Karta Zaparcia — Leczenie Zaparcia u Dzieci",
    "header_emoji": "💩",
    "header_title": "Karta",
    "header_title_highlight": "Zaparcia",
    "header_subtitle": "Oparte na dowodach strategie i dawkowanie PEG 3350 według masy ciała w leczeniu zaparcia u dzieci, na podstawie wytycznych SickKids AboutKidsHealth, CHEO i CPS.",
    "print_btn": "Drukuj",
    "lang_selector_label": "Język",

    "s1_heading": "Czym jest zaparcie?",
    "defn_box_heading": "Definicja kliniczna",
    "bss_chip_1_label": "Bristol 1–2",
    "bss_chip_1_desc": "Zaparcie",
    "bss_chip_34_label": "Bristol 3–4",
    "bss_chip_34_desc": "Idealne",
    "bss_chip_67_label": "Bristol 6–7",
    "bss_chip_67_desc": "Biegunka",
    "defn_note_html": "<strong>Zaparcie</strong> definiuje się jako mniej niż 2 wypróżnienia tygodniowo lub stolce twarde, suche i bolesne przy oddawaniu (typ Bristol 1–2). Typy Bristol 3–4 to docelowa konsystencja — miękki, dobrze uformowany i łatwy do oddania stolec. Typy 6–7 wskazują na biegunkę. Zaparcie jest bardzo częste u dzieci i zazwyczaj nie jest poważne — większość przypadków dobrze reaguje na zmiany diety i środki przeczyszczające.",
    "redflag_title": "Objawy alarmowe — Szukaj pomocy medycznej",
    "redflag_1": "Krew w stolcu",
    "redflag_2": "Stolce w kształcie wstążki lub ołówka",
    "redflag_3": "Ciężkie wzdęcie brzucha",
    "redflag_4": "Wymioty z towarzyszącym zaparciem",
    "redflag_5": "Brak smółki w ciągu 48 godzin od urodzenia",
    "redflag_6": "Zaparcie od pierwszego miesiąca życia",
    "redflag_7": "Objawy neurologiczne (osłabienie, obniżone napięcie mięśniowe)",

    "s2_heading": "Kalkulator dawkowania PEG 3350",
    "peg_box_heading": "O PEG 3350",
    "peg_box_html": "PEG 3350 sprzedawany jest w Kanadzie pod nazwami <strong>Lax-A-Day</strong> i <strong>RestoraLAX</strong> (oraz jako generyk). Jest to środek przeczyszczający osmotyczny — bez smaku i zapachu. Odpowiedni dla dzieci <strong>≥ 6 miesięcy</strong>. Jedna standardowa saszetka lub pełna zakrętka RestoraLAX = <strong>17 g</strong>.",
    "label_weight": "Masa ciała dziecka",
    "weight_placeholder": "—",
    "warn_low_weight": "⚠️ Masa ciała poniżej 5 kg — przed rozpoczęciem PEG 3350 potwierdź wiek ≥ 6 miesięcy.",

    "phase_disimp_label": "Faza 1 — Odblokowanie",
    "phase_maint_label": "Faza 2 — Leczenie podtrzymujące",

    "disimp_dose_label": "Dawka odblokowania",
    "disimp_dose_sub": "1,5 g/kg/dobę · maks. 100 g/dobę",
    "disimp_duration_label": "Czas trwania",
    "disimp_duration_val": "3–6 dni",
    "disimp_duration_sub": "Do potwierdzenia odblokowania",
    "disimp_max_label": "Maksimum dobowe",
    "disimp_max_val": "100 g / 10 zakrętek",
    "disimp_max_sub": "Wymagana kontrola lekarska",

    "disimp_result_heading": "Dawka odblokowania — obliczona",
    "res_disimp_g": "Dawka dobowa (g)",
    "res_disimp_cap": "Dawka dobowa (zakrętki)",
    "res_disimp_cap_sub": "17 g na zakrętkę",
    "res_disimp_split": "Dawka podzielona (g)",
    "res_disimp_split_cap": "Dawka podzielona (zakrętki)",
    "res_disimp_cap_sub2": "17 g na zakrętkę",
    "disimp_group_daily": "Jedna dawka dobowa",
    "disimp_group_split": "Podzielona — dwa razy dziennie (każda dawka)",
    "disimp_note_html": "<strong>Wymagana kontrola lekarska.</strong> Przed rozpoczęciem potwierdź zaleganie stolca. Podawaj 1,5 g/kg/dobę przez <strong>3–6 dni</strong>. Można podawać jako jedną dawkę dobową lub podzielić na dwie. Po potwierdzeniu odblokowania (miękki stolec, miękki brzuch) odstawiaj i natychmiast przejdź do dawki podtrzymującej. Maksimum 100 g/dobę.",

    "maint_low_label": "Dolna granica",
    "maint_low_sub": "0,4 g/kg/dobę",
    "maint_high_label": "Górna granica",
    "maint_high_sub": "0,8 g/kg/dobę",
    "maint_duration_label": "Czas trwania",
    "maint_duration_val": "Tygodnie–miesiące",
    "maint_duration_sub": "Do utrwalenia regularnych nawyków",
    "maint_max_label": "Maksimum dobowe",
    "maint_max_sub": "1 standardowa saszetka / 1 pełna zakrętka",

    "maint_result_heading": "Dawka podtrzymująca — obliczona",
    "res_low_g": "Dolna granica (g/dobę)",
    "res_high_g": "Górna granica (g/dobę)",
    "res_cap_low": "Miara zakrętką (niska)",
    "res_cap_high": "Miara zakrętką (wysoka)",
    "res_cap_unit": "zakrętki 17 g",
    "res_cap_unit2": "zakrętki 17 g",
    "maint_note_html": "<strong>Zacznij od dolnej dawki</strong> i stopniowo zwiększaj, aby osiągnąć jeden miękki stolec dziennie. Efekty mogą pojawić się po 2–3 dniach. Maksimum 17 g/dobę (jedna standardowa saszetka Lax-A-Day / RestoraLAX lub pełna zakrętka). Można podawać jako jedną dawkę lub podzielić. Kontynuuj przez <strong>tygodnie do miesięcy</strong>, aż regularne nawyki jelitowe zostaną dobrze ustalone, a następnie stopniowo odstawiaj.",

    "mix_heading": "Jak przygotować PEG 3350 (Lax-A-Day / RestoraLAX)",
    "mix_body_html": "Rozpuść proszek w <strong>250 mL (1 szklance)</strong> wody, soku lub mleka. Mieszaj do całkowitego rozpuszczenia — jest <strong>bez smaku i zapachu</strong>. Można dodać do ulubionego napoju dziecka. Nie mieszać z napojami gazowanymi. Odpowiedni dla dzieci <strong>≥ 6 miesięcy</strong>.",

    "s3_heading": "Inne strategie oparte na dowodach",
    "strat_fibre_title": "Błonnik pokarmowy",
    "strat_fibre_target_html": "<strong>Cel:</strong> wiek dziecka w latach + 5 g/dobę (np. 4-latek potrzebuje ~9 g/dobę)",
    "strat_fibre_foods_html": "<strong>Produkty bogate w błonnik:</strong> gruszki, śliwki, jabłka (ze skórką), jagody, brokuły, marchew, groszek, płatki owsiane, chleb pełnoziarnisty, płatki otrębowe, fasola, soczewica",
    "strat_fibre_dairy": "Unikaj nadmiaru nabiału (mleko, ser) — może nasilać zaparcie",
    "strat_fibre_gradual": "Wprowadzaj błonnik stopniowo, aby uniknąć gazów i wzdęć",
    "strat_fluid_title": "Spożycie płynów",
    "fluid_col_age": "Wiek",
    "fluid_col_amount": "Cel / dobę",
    "fluid_age_1": "1–3 lata",
    "fluid_amt_1": "~4 szklanki (1 L)",
    "fluid_age_2": "4–8 lat",
    "fluid_amt_2": "~5 szklanek (1,2 L)",
    "fluid_age_3": "9–13 lat",
    "fluid_amt_3": "~7–8 szklanek (1,7 L)",
    "strat_fluid_best": "Woda i mleko są najlepsze; ogranicz sok do ≤ 125 mL/dobę dla małych dzieci",
    "strat_fluid_prune_html": "<strong>Sok śliwkowy</strong> ma udokumentowane działanie w łagodnym zaparciu: 60–120 mL/dobę dla niemowląt >1 miesiąca; 125 mL/dobę dla małych dzieci",
    "strat_toilet_title": "Rutyna toaletowa",
    "strat_toilet_gcr_html": "Regularne siadanie <strong>po posiłkach</strong> — odruch żołądkowo-okrężniczy jest najsilniejszy 20–30 min po jedzeniu",
    "strat_toilet_sit": "Siedź przez 5–10 minut; unikaj pośpiechu lub wywierania presji na dziecko",
    "strat_toilet_stool_html": "Używaj <strong>podnóżka</strong>, aby kolana były powyżej bioder — pozycja przykucnięcia rozluźnia mięsień łonowo-odbytniczy",
    "strat_toilet_praise": "Pozytywne wzmocnienie — chwal próbę, nie tylko sukces",
    "strat_activity_title": "Aktywność fizyczna",
    "strat_activity_motility": "Regularna aktywność fizyczna pobudza perystaltykę jelit",
    "strat_activity_goal": "Dąż do 60 minut umiarkowanej aktywności dziennie dla dzieci w wieku szkolnym",
    "strat_activity_walk": "Nawet krótkie spacery po posiłkach mogą pomóc",
    "strat_behav_title": "Strategie behawioralne",
    "strat_behav_diary": "Prowadź dziennik stolców, śledząc częstotliwość, konsystencję i ewentualny ból",
    "strat_behav_chart": "Tablice nagród za siedzenie na toalecie (nie za oddanie stolca — zmniejsza lęk przed wykonaniem)",
    "strat_behav_accidents": "Unikaj karania za wypadki — zatrzymywanie jest często mimowolne i niecelowe",
    "strat_behav_training": "Dla dzieci uczących się korzystać z toalety: upewnij się, że są gotowe przed treningiem; regresja podczas treningu jest częsta przy zaparciach",

    "s4_heading": "Kiedy szukać pomocy medycznej",
    "emerg_title": "Kiedy szukać pomocy medycznej",
    "emerg_tier_ed": "Jedź na Izbę Przyjęć, jeśli:",
    "emerg_ed_1": "Krew w stolcu (znaczna ilość)",
    "emerg_ed_2": "Silny ból brzucha lub wzdęcie",
    "emerg_ed_3": "Wymioty żółciowe (zielone) z towarzyszącym zaparciem",
    "emerg_ed_4": "Dziecko wygląda na bardzo chore lub apatyczne",
    "emerg_tier_doc": "Zgłoś się do lekarza lub pielęgniarki z uprawnieniami, jeśli:",
    "emerg_doc_1": "Brak stolca przez ponad 1 tydzień mimo leczenia domowego",
    "emerg_doc_2": "Zaparcie od urodzenia lub wczesnego niemowlęctwa",
    "emerg_doc_3": "Dziecko traci na wadze lub nie rośnie prawidłowo",
    "emerg_doc_4": "Bolesne szczeliny odbytu lub wypadanie odbytnicy",
    "emerg_doc_5": "Objawy ze strony układu moczowego: nawracające ZUM lub moczenie dzienne",
    "emerg_doc_6": "Martwisz się z jakiegokolwiek powodu",

    "footer_html": "<strong>Zastrzeżenie:</strong> Ta karta jest pomocą referencyjną dla klinicystów. Dawki PEG 3350 oparte są na opublikowanych kanadyjskich wytycznych pediatrycznych (SickKids AboutKidsHealth, CHEO, CPS). Zawsze należy uwzględniać indywidualne czynniki pacjenta, w tym wiek, funkcję narządów, jednocześnie stosowane leki i kontekst kliniczny. Narzędzie to nie zastępuje oceny klinicznej ani indywidualnej porady medycznej.",

    "unit_g": "g",
    "unit_tsp": "łyżeczka",
    "unit_cap": "zakrętka",
    "dash": "—",
    "enter_weight": "Wprowadź masę ciała powyżej"
  },

  /* ═══════════════════════════════════════════════════
     ITALIAN
  ═══════════════════════════════════════════════════ */
  "it": {
    "page_title": "Scheda Stitichezza — Gestione della Stitichezza Pediatrica",
    "header_emoji": "💩",
    "header_title": "Scheda",
    "header_title_highlight": "Stitichezza",
    "header_subtitle": "Strategie basate su evidenze e dosaggio del PEG 3350 in base al peso per la stitichezza nei bambini, basate sulle linee guida di SickKids AboutKidsHealth, CHEO e CPS.",
    "print_btn": "Stampa",
    "lang_selector_label": "Lingua",

    "s1_heading": "Che cos'è la stitichezza?",
    "defn_box_heading": "Definizione clinica",
    "bss_chip_1_label": "Bristol 1–2",
    "bss_chip_1_desc": "Stitichezza",
    "bss_chip_34_label": "Bristol 3–4",
    "bss_chip_34_desc": "Ideale",
    "bss_chip_67_label": "Bristol 6–7",
    "bss_chip_67_desc": "Diarrea",
    "defn_note_html": "<strong>La stitichezza</strong> è definita come meno di 2 evacuazioni a settimana, o feci dure, secche e dolorose da espellere (tipi Bristol 1–2). I tipi Bristol 3–4 sono la consistenza target — morbida, ben formata e facile da espellere. I tipi 6–7 indicano diarrea. La stitichezza è estremamente comune nei bambini e di solito non è grave — la maggior parte dei casi risponde bene ai cambiamenti alimentari e ai lassativi.",
    "redflag_title": "Segnali di allarme — Cercare assistenza medica",
    "redflag_1": "Sangue nelle feci",
    "redflag_2": "Feci a nastro o sottili come una matita",
    "redflag_3": "Distensione addominale grave",
    "redflag_4": "Vomito con stitichezza",
    "redflag_5": "Mancata emissione di meconio entro 48 ore dalla nascita",
    "redflag_6": "Stitichezza dall'inizio del primo mese di vita",
    "redflag_7": "Sintomi neurologici (debolezza, tono muscolare ridotto)",

    "s2_heading": "Calcolatore di dosaggio del PEG 3350",
    "peg_box_heading": "Sul PEG 3350",
    "peg_box_html": "Il PEG 3350 è venduto in Canada come <strong>Lax-A-Day</strong> e <strong>RestoraLAX</strong> (e generico). È un lassativo osmotico — insapore e inodore. Adatto ai bambini <strong>≥ 6 mesi</strong>. Una bustina standard o un tappo pieno di RestoraLAX = <strong>17 g</strong>.",
    "label_weight": "Peso del bambino",
    "weight_placeholder": "—",
    "warn_low_weight": "⚠️ Peso inferiore a 5 kg — confermare l'età ≥ 6 mesi prima di iniziare il PEG 3350.",

    "phase_disimp_label": "Fase 1 — Disimpattazione",
    "phase_maint_label": "Fase 2 — Mantenimento",

    "disimp_dose_label": "Dose di disimpattazione",
    "disimp_dose_sub": "1,5 g/kg/giorno · max 100 g/giorno",
    "disimp_duration_label": "Durata",
    "disimp_duration_val": "3–6 giorni",
    "disimp_duration_sub": "Fino alla conferma della disimpattazione",
    "disimp_max_label": "Massimo giornaliero",
    "disimp_max_val": "100 g / 10 tappi",
    "disimp_max_sub": "Richiede supervisione medica",

    "disimp_result_heading": "Dose di disimpattazione — Calcolata",
    "res_disimp_g": "Dose giornaliera (g)",
    "res_disimp_cap": "Dose giornaliera (tappi)",
    "res_disimp_cap_sub": "17 g per tappo",
    "res_disimp_split": "Dose frazionata (g)",
    "res_disimp_split_cap": "Dose frazionata (tappi)",
    "res_disimp_cap_sub2": "17 g per tappo",
    "disimp_group_daily": "Dose unica giornaliera",
    "disimp_group_split": "Frazionata — Due volte al giorno (ogni dose)",
    "disimp_note_html": "<strong>Richiede supervisione medica.</strong> Confermare l'impattazione prima di iniziare. Somministrare 1,5 g/kg/giorno per <strong>3–6 giorni</strong>. Può essere somministrato come dose unica giornaliera o suddiviso in due dosi. Una volta confermata la disimpattazione (feci morbide, addome morbido), interrompere e passare immediatamente alla dose di mantenimento sottostante. Massimo 100 g/giorno.",

    "maint_low_label": "Limite inferiore",
    "maint_low_sub": "0,4 g/kg/giorno",
    "maint_high_label": "Limite superiore",
    "maint_high_sub": "0,8 g/kg/giorno",
    "maint_duration_label": "Durata",
    "maint_duration_val": "Settimane–mesi",
    "maint_duration_sub": "Fino all'instaurazione di abitudini regolari",
    "maint_max_label": "Massimo giornaliero",
    "maint_max_sub": "1 bustina standard / 1 tappo pieno",

    "maint_result_heading": "Dose di mantenimento — Calcolata",
    "res_low_g": "Limite inferiore (g/giorno)",
    "res_high_g": "Limite superiore (g/giorno)",
    "res_cap_low": "Misura in tappi (bassa)",
    "res_cap_high": "Misura in tappi (alta)",
    "res_cap_unit": "di un tappo da 17 g",
    "res_cap_unit2": "di un tappo da 17 g",
    "maint_note_html": "<strong>Iniziare dalla dose più bassa</strong> e aumentare gradualmente per ottenere una evacuazione morbida al giorno. Gli effetti possono richiedere 2–3 giorni. Il massimo è 17 g/giorno (una bustina standard Lax-A-Day / RestoraLAX o un tappo pieno). Può essere somministrato in dose unica o suddiviso in due. Continuare per <strong>settimane o mesi</strong> fino all'instaurazione di abitudini intestinali regolari prima di ridurre gradualmente.",

    "mix_heading": "Come preparare il PEG 3350 (Lax-A-Day / RestoraLAX)",
    "mix_body_html": "Sciogliere la polvere in <strong>250 mL (1 tazza)</strong> di acqua, succo o latte. Mescolare fino a completa dissoluzione — è <strong>insapore e inodore</strong>. Può essere miscelato nella bevanda preferita del bambino. Non mescolare con bevande gassate. Adatto ai bambini <strong>≥ 6 mesi</strong>.",

    "s3_heading": "Altre strategie basate su evidenze",
    "strat_fibre_title": "Fibre alimentari",
    "strat_fibre_target_html": "<strong>Obiettivo:</strong> età del bambino in anni + 5 g/giorno (es. un bambino di 4 anni ha bisogno di ~9 g/giorno)",
    "strat_fibre_foods_html": "<strong>Alimenti ricchi di fibre:</strong> pere, prugne secche, mele (con buccia), frutti di bosco, broccoli, carote, piselli, fiocchi d'avena, pane integrale, cereali di crusca, fagioli, lenticchie",
    "strat_fibre_dairy": "Evitare latticini in eccesso (latte, formaggio) — possono peggiorare la stitichezza",
    "strat_fibre_gradual": "Introdurre le fibre gradualmente per evitare gas e gonfiore",
    "strat_fluid_title": "Assunzione di liquidi",
    "fluid_col_age": "Età",
    "fluid_col_amount": "Obiettivo / giorno",
    "fluid_age_1": "1–3 anni",
    "fluid_amt_1": "~4 tazze (1 L)",
    "fluid_age_2": "4–8 anni",
    "fluid_amt_2": "~5 tazze (1,2 L)",
    "fluid_age_3": "9–13 anni",
    "fluid_amt_3": "~7–8 tazze (1,7 L)",
    "strat_fluid_best": "Acqua e latte sono le opzioni migliori; limitare il succo a ≤ 125 mL/giorno per i bambini piccoli",
    "strat_fluid_prune_html": "<strong>Il succo di prugna</strong> ha evidenze per la stitichezza lieve: 60–120 mL/giorno per i lattanti >1 mese; 125 mL/giorno per i bambini piccoli",
    "strat_toilet_title": "Routine al bagno",
    "strat_toilet_gcr_html": "Seduta programmata <strong>dopo i pasti</strong> — il riflesso gastro-colico è più forte 20–30 min dopo aver mangiato",
    "strat_toilet_sit": "Stare seduti per 5–10 minuti; evitare di affrettare o mettere pressione al bambino",
    "strat_toilet_stool_html": "Usare uno <strong>sgabello per i piedi</strong> in modo che le ginocchia siano sopra i fianchi — la posizione accovacciata rilassa il muscolo puborettale",
    "strat_toilet_praise": "Rinforzo positivo — lodare il tentativo, non solo il successo",
    "strat_activity_title": "Attività fisica",
    "strat_activity_motility": "L'attività fisica regolare stimola la motilità intestinale",
    "strat_activity_goal": "Mirare a 60 minuti di attività moderata al giorno per i bambini in età scolare",
    "strat_activity_walk": "Anche brevi passeggiate dopo i pasti possono aiutare",
    "strat_behav_title": "Strategie comportamentali",
    "strat_behav_diary": "Tenere un diario delle feci per monitorare frequenza, consistenza e dolore",
    "strat_behav_chart": "Tabelle dei premi per stare seduti sul wc (non per fare la cacca — riduce l'ansia da prestazione)",
    "strat_behav_accidents": "Evitare di punire gli incidenti — la ritenzione è spesso involontaria e non deliberata",
    "strat_behav_training": "Per i bambini in età da addestramento: assicurarsi della prontezza prima dell'addestramento; la regressione durante l'addestramento è comune con la stitichezza",

    "s4_heading": "Quando cercare assistenza medica",
    "emerg_title": "Quando cercare assistenza medica",
    "emerg_tier_ed": "Recarsi al Pronto Soccorso se:",
    "emerg_ed_1": "Sangue nelle feci (quantità significativa)",
    "emerg_ed_2": "Dolore addominale grave o distensione",
    "emerg_ed_3": "Vomito biliare (verde) con stitichezza",
    "emerg_ed_4": "Il bambino sembra molto malato o letargico",
    "emerg_tier_doc": "Consultare il medico o l'infermiere specializzato se:",
    "emerg_doc_1": "Nessuna evacuazione per più di 1 settimana nonostante la gestione domiciliare",
    "emerg_doc_2": "Stitichezza presente dalla nascita o dalla prima infanzia",
    "emerg_doc_3": "Il bambino sta perdendo peso o non cresce bene",
    "emerg_doc_4": "Ragadi anali dolorose o prolasso rettale",
    "emerg_doc_5": "Sintomi urinari: infezioni urinarie ricorrenti o incontinenza diurna",
    "emerg_doc_6": "Sei preoccupato per qualsiasi motivo",

    "footer_html": "<strong>Avvertenza:</strong> Questa scheda è un ausilio di riferimento clinico. Le dosi di PEG 3350 si basano sulle linee guida pediatriche canadesi pubblicate (SickKids AboutKidsHealth, CHEO, CPS). I fattori individuali del paziente, tra cui età, funzionalità degli organi, farmaci concomitanti e contesto clinico, devono essere sempre considerati. Questo strumento non sostituisce il giudizio clinico né il consiglio medico individualizzato.",

    "unit_g": "g",
    "unit_tsp": "cucchiaino",
    "unit_cap": "tappo",
    "dash": "—",
    "enter_weight": "Inserire il peso sopra"
  },

  /* ═══════════════════════════════════════════════════
     FARSI / PERSIAN (RTL)
  ═══════════════════════════════════════════════════ */
  "fa": {
    "page_title": "راهنمای یبوست — مدیریت یبوست در کودکان",
    "header_emoji": "💩",
    "header_title": "راهنمای",
    "header_title_highlight": "یبوست",
    "header_subtitle": "راهکارهای مبتنی بر شواهد و دوزبندی PEG 3350 بر اساس وزن برای یبوست در کودکان، بر اساس رهنمودهای SickKids AboutKidsHealth، CHEO و CPS.",
    "print_btn": "چاپ",
    "lang_selector_label": "زبان",

    "s1_heading": "یبوست چیست؟",
    "defn_box_heading": "تعریف بالینی",
    "bss_chip_1_label": "Bristol 1–2",
    "bss_chip_1_desc": "یبوست",
    "bss_chip_34_label": "Bristol 3–4",
    "bss_chip_34_desc": "ایده‌آل",
    "bss_chip_67_label": "Bristol 6–7",
    "bss_chip_67_desc": "اسهال",
    "defn_note_html": "<strong>یبوست</strong> به صورت کمتر از ۲ بار اجابت مزاج در هفته یا مدفوع سفت، خشک و دردناک (انواع Bristol 1–2) تعریف می‌شود. انواع Bristol 3–4 قوام هدف هستند — نرم، خوش‌شکل و آسان برای دفع. انواع 6–7 نشان‌دهنده اسهال هستند. یبوست در کودکان بسیار شایع است و معمولاً جدی نیست — اکثر موارد با تغییر رژیم غذایی و ملین‌ها به خوبی پاسخ می‌دهند.",
    "redflag_title": "علائم هشدار — به پزشک مراجعه کنید",
    "redflag_1": "خون در مدفوع",
    "redflag_2": "مدفوع نواری یا مداد مانند",
    "redflag_3": "نفخ شدید شکم",
    "redflag_4": "استفراغ همراه با یبوست",
    "redflag_5": "عدم دفع مکونیوم در ۴۸ ساعت اول پس از تولد",
    "redflag_6": "یبوست از اولین ماه زندگی",
    "redflag_7": "علائم عصبی (ضعف، کاهش تونوس عضلانی)",

    "s2_heading": "ماشین حساب دوز PEG 3350",
    "peg_box_heading": "درباره PEG 3350",
    "peg_box_html": "PEG 3350 در کانادا با نام‌های <strong>Lax-A-Day</strong> و <strong>RestoraLAX</strong> (و ژنریک) فروخته می‌شود. این یک ملین اسمزی است — بی‌طعم و بی‌بو. مناسب برای کودکان <strong>≥ ۶ ماه</strong>. یک ساشه استاندارد یا یک درپوش پر RestoraLAX = <strong>۱۷ g</strong>.",
    "label_weight": "وزن کودک",
    "weight_placeholder": "—",
    "warn_low_weight": "⚠️ وزن زیر ۵ kg — قبل از شروع PEG 3350 سن ≥ ۶ ماه را تأیید کنید.",

    "phase_disimp_label": "مرحله ۱ — رفع انسداد",
    "phase_maint_label": "مرحله ۲ — نگهداری",

    "disimp_dose_label": "دوز رفع انسداد",
    "disimp_dose_sub": "۱.۵ g/kg/روز · حداکثر ۱۰۰ g/روز",
    "disimp_duration_label": "مدت",
    "disimp_duration_val": "۳–۶ روز",
    "disimp_duration_sub": "تا تأیید رفع انسداد",
    "disimp_max_label": "حداکثر روزانه",
    "disimp_max_val": "۱۰۰ g / ۱۰ درپوش",
    "disimp_max_sub": "نیاز به راهنمایی پزشک",

    "disimp_result_heading": "دوز رفع انسداد — محاسبه‌شده",
    "res_disimp_g": "دوز روزانه (g)",
    "res_disimp_cap": "دوز روزانه (درپوش)",
    "res_disimp_cap_sub": "۱۷ g در هر درپوش",
    "res_disimp_split": "دوز تقسیم‌شده (g)",
    "res_disimp_split_cap": "دوز تقسیم‌شده (درپوش)",
    "res_disimp_cap_sub2": "۱۷ g در هر درپوش",
    "disimp_group_daily": "دوز یک‌بار روزانه",
    "disimp_group_split": "تقسیم‌شده — دو بار در روز (هر دوز)",
    "disimp_note_html": "<strong>نیاز به راهنمایی پزشک.</strong> قبل از شروع انسداد را تأیید کنید. ۱.۵ g/kg/روز به مدت <strong>۳–۶ روز</strong> بدهید. می‌توان به صورت دوز یک‌بار روزانه یا دو دوز تقسیم‌شده داد. پس از تأیید رفع انسداد (مدفوع نرم، شکم نرم)، قطع کنید و فوراً به دوز نگهداری زیر بروید. حداکثر ۱۰۰ g/روز.",

    "maint_low_label": "حداقل",
    "maint_low_sub": "۰.۴ g/kg/روز",
    "maint_high_label": "حداکثر",
    "maint_high_sub": "۰.۸ g/kg/روز",
    "maint_duration_label": "مدت",
    "maint_duration_val": "هفته‌ها–ماه‌ها",
    "maint_duration_sub": "تا تثبیت عادات منظم",
    "maint_max_label": "حداکثر روزانه",
    "maint_max_sub": "۱ ساشه استاندارد / ۱ درپوش پر",

    "maint_result_heading": "دوز نگهداری — محاسبه‌شده",
    "res_low_g": "حداقل (g/روز)",
    "res_high_g": "حداکثر (g/روز)",
    "res_cap_low": "اندازه درپوش (کم)",
    "res_cap_high": "اندازه درپوش (زیاد)",
    "res_cap_unit": "از درپوش ۱۷ g",
    "res_cap_unit2": "از درپوش ۱۷ g",
    "maint_note_html": "<strong>از دوز کمتر شروع کنید</strong> و به تدریج افزایش دهید تا روزانه یک مدفوع نرم داشته باشید. اثر ممکن است ۲–۳ روز طول بکشد. حداکثر ۱۷ g/روز (یک ساشه استاندارد Lax-A-Day / RestoraLAX یا یک درپوش پر). می‌توان به صورت یک یا دو دوز داد. تا زمانی که عادات منظم روده به خوبی تثبیت شود، <strong>هفته‌ها تا ماه‌ها</strong> ادامه دهید سپس به تدریج کاهش دهید.",

    "mix_heading": "نحوه تهیه PEG 3350 (Lax-A-Day / RestoraLAX)",
    "mix_body_html": "پودر را در <strong>۲۵۰ mL (۱ لیوان)</strong> آب، آبمیوه یا شیر حل کنید. هم بزنید تا کاملاً حل شود — <strong>بی‌طعم و بی‌بو</strong> است. می‌توان با نوشیدنی مورد علاقه کودک مخلوط کرد. با نوشیدنی‌های گازدار مخلوط نکنید. مناسب برای کودکان <strong>≥ ۶ ماه</strong>.",

    "s3_heading": "سایر راهکارهای مبتنی بر شواهد",
    "strat_fibre_title": "فیبر غذایی",
    "strat_fibre_target_html": "<strong>هدف:</strong> سن کودک به سال + ۵ g/روز (مثلاً کودک ۴ ساله به ~۹ g/روز نیاز دارد)",
    "strat_fibre_foods_html": "<strong>غذاهای پرفیبر:</strong> گلابی، آلو، سیب (با پوست)، توت، کلم بروکلی، هویج، نخود فرنگی، بلغور جو دوسر، نان گندم کامل، غلات سبوس‌دار، لوبیا، عدس",
    "strat_fibre_dairy": "از لبنیات زیاد (شیر، پنیر) پرهیز کنید — می‌توانند یبوست را بدتر کنند",
    "strat_fibre_gradual": "فیبر را به تدریج افزایش دهید تا از نفخ و باد شکم جلوگیری شود",
    "strat_fluid_title": "دریافت مایعات",
    "fluid_col_age": "سن",
    "fluid_col_amount": "هدف / روز",
    "fluid_age_1": "۱–۳ سال",
    "fluid_amt_1": "~۴ لیوان (۱ L)",
    "fluid_age_2": "۴–۸ سال",
    "fluid_amt_2": "~۵ لیوان (۱.۲ L)",
    "fluid_age_3": "۹–۱۳ سال",
    "fluid_amt_3": "~۷–۸ لیوان (۱.۷ L)",
    "strat_fluid_best": "آب و شیر بهترین هستند؛ آبمیوه را برای کودکان کوچک به ≤ ۱۲۵ mL/روز محدود کنید",
    "strat_fluid_prune_html": "<strong>آب آلو</strong> برای یبوست خفیف شواهدی دارد: ۶۰–۱۲۰ mL/روز برای نوزادان >۱ ماه؛ ۱۲۵ mL/روز برای کودکان کوچک",
    "strat_toilet_title": "روتین دستشویی",
    "strat_toilet_gcr_html": "نشستن منظم <strong>بعد از غذا</strong> — رفلکس معده-روده بزرگ ۲۰–۳۰ دقیقه پس از خوردن قوی‌ترین است",
    "strat_toilet_sit": "۵–۱۰ دقیقه بنشینید؛ از عجله دادن یا فشار به کودک پرهیز کنید",
    "strat_toilet_stool_html": "از <strong>زیرپایی</strong> استفاده کنید تا زانوها بالاتر از باسن باشند — وضعیت چمباتمه عضله پوبورکتالیس را شل می‌کند",
    "strat_toilet_praise": "تقویت مثبت — تلاش را تحسین کنید، نه فقط موفقیت را",
    "strat_activity_title": "فعالیت بدنی",
    "strat_activity_motility": "فعالیت بدنی منظم حرکت روده را تحریک می‌کند",
    "strat_activity_goal": "برای کودکان مدرسه‌ای ۶۰ دقیقه فعالیت متوسط در روز هدف‌گذاری کنید",
    "strat_activity_walk": "حتی پیاده‌روی‌های کوتاه بعد از غذا می‌توانند کمک کنند",
    "strat_behav_title": "راهکارهای رفتاری",
    "strat_behav_diary": "دفترچه مدفوع نگه دارید تا تناوب، قوام و هر دردی را ثبت کنید",
    "strat_behav_chart": "جدول پاداش برای نشستن در دستشویی (نه برای دفع — اضطراب عملکرد را کاهش می‌دهد)",
    "strat_behav_accidents": "از تنبیه کردن بابت تصادفات پرهیز کنید — نگه داشتن اغلب غیرارادی است",
    "strat_behav_training": "برای کودکان در سن آموزش دستشویی: قبل از آموزش آمادگی را اطمینان حاصل کنید؛ پسرفت در طول آموزش با یبوست شایع است",

    "s4_heading": "چه زمانی به پزشک مراجعه کنیم",
    "emerg_title": "چه زمانی به پزشک مراجعه کنیم",
    "emerg_tier_ed": "به اورژانس بروید اگر:",
    "emerg_ed_1": "خون در مدفوع (مقدار قابل توجه)",
    "emerg_ed_2": "درد یا نفخ شدید شکم",
    "emerg_ed_3": "استفراغ صفراوی (سبز) همراه با یبوست",
    "emerg_ed_4": "کودک بسیار بیمار یا بی‌حال به نظر می‌رسد",
    "emerg_tier_doc": "به پزشک یا پرستار متخصص مراجعه کنید اگر:",
    "emerg_doc_1": "با وجود مراقبت در خانه بیش از ۱ هفته اجابت مزاج نداشته باشد",
    "emerg_doc_2": "یبوست از بدو تولد یا اوایل نوزادی وجود داشته باشد",
    "emerg_doc_3": "کودک وزن کم می‌کند یا رشد خوبی ندارد",
    "emerg_doc_4": "شقاق مقعدی دردناک یا پرولاپس رکتوم",
    "emerg_doc_5": "علائم ادراری: عفونت‌های مکرر ادراری یا بی‌اختیاری ادرار در روز",
    "emerg_doc_6": "به هر دلیلی نگران هستید",

    "footer_html": "<strong>سلب مسئولیت:</strong> این راهنما یک ابزار مرجع بالینی است. دوزهای PEG 3350 بر اساس رهنمودهای منتشرشده اطفال کانادا (SickKids AboutKidsHealth, CHEO, CPS) هستند. عوامل فردی بیمار از جمله سن، عملکرد اعضا، داروهای همزمان و زمینه بالینی باید همیشه در نظر گرفته شوند. این ابزار جایگزین قضاوت بالینی یا مشاوره پزشکی فردی نمی‌شود.",

    "unit_g": "g",
    "unit_tsp": "قاشق چایخوری",
    "unit_cap": "درپوش",
    "dash": "—",
    "enter_weight": "وزن را در بالا وارد کنید"
  },

  /* ═══════════════════════════════════════════════════
     UKRAINIAN
  ═══════════════════════════════════════════════════ */
  "uk": {
    "page_title": "Аркуш про Закреп — Лікування Закрепу у Дітей",
    "header_emoji": "💩",
    "header_title": "Аркуш про",
    "header_title_highlight": "Закреп",
    "header_subtitle": "Науково обґрунтовані стратегії та дозування PEG 3350 за масою тіла для лікування закрепу у дітей на основі рекомендацій SickKids AboutKidsHealth, CHEO та CPS.",
    "print_btn": "Друкувати",
    "lang_selector_label": "Мова",

    "s1_heading": "Що таке закреп?",
    "defn_box_heading": "Клінічне визначення",
    "bss_chip_1_label": "Bristol 1–2",
    "bss_chip_1_desc": "Закреп",
    "bss_chip_34_label": "Bristol 3–4",
    "bss_chip_34_desc": "Ідеально",
    "bss_chip_67_label": "Bristol 6–7",
    "bss_chip_67_desc": "Пронос",
    "defn_note_html": "<strong>Закреп</strong> визначається як менше 2 випорожнень на тиждень або тверді, сухі та болючі випорожнення (типи Bristol 1–2). Типи Bristol 3–4 — цільова консистенція: м'який, добре сформований і легкий у виведенні кал. Типи 6–7 вказують на пронос. Закреп дуже поширений у дітей і зазвичай не є серйозним — більшість випадків добре реагує на зміни харчування та проносні засоби.",
    "redflag_title": "Тривожні симптоми — Зверніться за медичною допомогою",
    "redflag_1": "Кров у калі",
    "redflag_2": "Стрічкоподібний або дуже тонкий кал",
    "redflag_3": "Виражене здуття живота",
    "redflag_4": "Блювання разом із закрепом",
    "redflag_5": "Відсутність меконію протягом 48 годин після народження",
    "redflag_6": "Закреп з першого місяця життя",
    "redflag_7": "Неврологічні симптоми (слабкість, знижений м'язовий тонус)",

    "s2_heading": "Калькулятор дозування PEG 3350",
    "peg_box_heading": "Про PEG 3350",
    "peg_box_html": "PEG 3350 продається в Канаді під назвами <strong>Lax-A-Day</strong> і <strong>RestoraLAX</strong> (та у вигляді генерика). Це осмотичний проносний засіб — без смаку та запаху. Підходить для дітей <strong>≥ 6 місяців</strong>. Один стандартний сашет або повна кришечка RestoraLAX = <strong>17 г</strong>.",
    "label_weight": "Маса тіла дитини",
    "weight_placeholder": "—",
    "warn_low_weight": "⚠️ Маса тіла менше 5 кг — перед початком PEG 3350 підтвердіть вік ≥ 6 місяців.",

    "phase_disimp_label": "Фаза 1 — Видалення калового завалу",
    "phase_maint_label": "Фаза 2 — Підтримувальна терапія",

    "disimp_dose_label": "Доза для видалення завалу",
    "disimp_dose_sub": "1,5 г/кг/добу · макс. 100 г/добу",
    "disimp_duration_label": "Тривалість",
    "disimp_duration_val": "3–6 днів",
    "disimp_duration_sub": "До підтвердження видалення завалу",
    "disimp_max_label": "Добовий максимум",
    "disimp_max_val": "100 г / 10 кришечок",
    "disimp_max_sub": "Потрібне керівництво лікаря",

    "disimp_result_heading": "Доза для видалення завалу — Розрахована",
    "res_disimp_g": "Добова доза (г)",
    "res_disimp_cap": "Добова доза (кришечки)",
    "res_disimp_cap_sub": "17 г на кришечку",
    "res_disimp_split": "Розділена доза (г)",
    "res_disimp_split_cap": "Розділена доза (кришечки)",
    "res_disimp_cap_sub2": "17 г на кришечку",
    "disimp_group_daily": "Одноразова добова доза",
    "disimp_group_split": "Розділена — двічі на добу (кожна доза)",
    "disimp_note_html": "<strong>Потрібне керівництво лікаря.</strong> Підтвердьте наявність завалу перед початком. Давайте 1,5 г/кг/добу протягом <strong>3–6 днів</strong>. Можна давати як одноразову добову дозу або розділити на дві. Після підтвердження видалення завалу (м'який кал, м'який живіт) зупиніть і одразу перейдіть на підтримувальну дозу нижче. Максимум 100 г/добу.",

    "maint_low_label": "Нижня межа",
    "maint_low_sub": "0,4 г/кг/добу",
    "maint_high_label": "Верхня межа",
    "maint_high_sub": "0,8 г/кг/добу",
    "maint_duration_label": "Тривалість",
    "maint_duration_val": "Тижні–місяці",
    "maint_duration_sub": "До встановлення регулярних звичок",
    "maint_max_label": "Добовий максимум",
    "maint_max_sub": "1 стандартний сашет / 1 повна кришечка",

    "maint_result_heading": "Підтримувальна доза — Розрахована",
    "res_low_g": "Нижня межа (г/добу)",
    "res_high_g": "Верхня межа (г/добу)",
    "res_cap_low": "Міра кришечкою (нижня)",
    "res_cap_high": "Міра кришечкою (верхня)",
    "res_cap_unit": "кришечки 17 г",
    "res_cap_unit2": "кришечки 17 г",
    "maint_note_html": "<strong>Починайте з нижньої дози</strong> і поступово збільшуйте до одного м'якого випорожнення на день. Ефект може наступити через 2–3 дні. Максимум 17 г/добу (один стандартний сашет Lax-A-Day / RestoraLAX або повна кришечка). Можна давати як одну дозу або розділити на дві. Продовжуйте <strong>тижні або місяці</strong>, поки регулярні звички кишечника не встановляться, після чого поступово знижуйте дозу.",

    "mix_heading": "Як розчинити PEG 3350 (Lax-A-Day / RestoraLAX)",
    "mix_body_html": "Розчиніть порошок у <strong>250 мл (1 склянці)</strong> води, соку або молока. Перемішуйте до повного розчинення — він <strong>без смаку і запаху</strong>. Можна додати до улюбленого напою дитини. Не змішуйте з газованими напоями. Підходить для дітей <strong>≥ 6 місяців</strong>.",

    "s3_heading": "Інші науково обґрунтовані стратегії",
    "strat_fibre_title": "Харчові волокна",
    "strat_fibre_target_html": "<strong>Мета:</strong> вік дитини в роках + 5 г/добу (напр. 4-річній дитині потрібно ~9 г/добу)",
    "strat_fibre_foods_html": "<strong>Продукти, багаті клітковиною:</strong> груші, чорнослив, яблука (зі шкіркою), ягоди, броколі, морква, горох, вівсяна каша, цільнозерновий хліб, висівкові крупи, квасоля, сочевиця",
    "strat_fibre_dairy": "Уникайте надмірного споживання молочних продуктів (молоко, сир) — можуть погіршити закреп",
    "strat_fibre_gradual": "Додавайте клітковину поступово, щоб уникнути газоутворення та здуття",
    "strat_fluid_title": "Споживання рідини",
    "fluid_col_age": "Вік",
    "fluid_col_amount": "Мета / добу",
    "fluid_age_1": "1–3 роки",
    "fluid_amt_1": "~4 склянки (1 л)",
    "fluid_age_2": "4–8 років",
    "fluid_amt_2": "~5 склянок (1,2 л)",
    "fluid_age_3": "9–13 років",
    "fluid_amt_3": "~7–8 склянок (1,7 л)",
    "strat_fluid_best": "Вода та молоко найкращі; обмежте сік до ≤ 125 мл/добу для малюків",
    "strat_fluid_prune_html": "<strong>Сік чорносливу</strong> має докази ефективності при легкому закрепі: 60–120 мл/добу для дітей >1 місяця; 125 мл/добу для малюків",
    "strat_toilet_title": "Туалетний режим",
    "strat_toilet_gcr_html": "Планові висадження <strong>після їжі</strong> — гастроколічний рефлекс найсильніший через 20–30 хв після їди",
    "strat_toilet_sit": "Сидіти 5–10 хвилин; уникайте поспіху або тиску на дитину",
    "strat_toilet_stool_html": "Використовуйте <strong>підставку для ніг</strong>, щоб коліна були вище стегон — поза навпочіпки розслабляє лобково-прямокишковий м'яз",
    "strat_toilet_praise": "Позитивне підкріплення — хваліть спробу, а не лише успіх",
    "strat_activity_title": "Фізична активність",
    "strat_activity_motility": "Регулярна фізична активність стимулює перистальтику кишечника",
    "strat_activity_goal": "Для дітей шкільного віку — мета 60 хвилин помірної активності на день",
    "strat_activity_walk": "Навіть короткі прогулянки після їжі можуть допомогти",
    "strat_behav_title": "Поведінкові стратегії",
    "strat_behav_diary": "Ведіть щоденник випорожнень для відстеження частоти, консистенції та болю",
    "strat_behav_chart": "Таблиці нагород за висадження на горщик (не за результат — знижує тривожність)",
    "strat_behav_accidents": "Уникайте покарань за «аварії» — затримка калу часто є мимовільною",
    "strat_behav_training": "Для дітей у віці привчання до туалету: переконайтесь у готовності перед навчанням; регрес під час навчання при закрепі — норма",

    "s4_heading": "Коли звертатися за медичною допомогою",
    "emerg_title": "Коли звертатися за медичною допомогою",
    "emerg_tier_ed": "Зверніться до відділення швидкої допомоги якщо:",
    "emerg_ed_1": "Кров у калі (значна кількість)",
    "emerg_ed_2": "Сильний біль або здуття живота",
    "emerg_ed_3": "Жовчне (зелене) блювання разом із закрепом",
    "emerg_ed_4": "Дитина виглядає дуже хворою або в'ялою",
    "emerg_tier_doc": "Зверніться до лікаря або медсестри-практика якщо:",
    "emerg_doc_1": "Відсутність випорожнення більше 1 тижня, незважаючи на домашній догляд",
    "emerg_doc_2": "Закреп з народження або раннього дитинства",
    "emerg_doc_3": "Дитина втрачає вагу або погано росте",
    "emerg_doc_4": "Болючі анальні тріщини або випадіння прямої кишки",
    "emerg_doc_5": "Сечові симптоми: рецидивуючі інфекції сечових шляхів або денне нетримання",
    "emerg_doc_6": "Ви стурбовані з будь-якої причини",

    "footer_html": "<strong>Застереження:</strong> Цей аркуш є клінічним довідковим інструментом. Дози PEG 3350 ґрунтуються на опублікованих канадських педіатричних рекомендаціях (SickKids AboutKidsHealth, CHEO, CPS). Завжди слід враховувати індивідуальні фактори пацієнта, зокрема вік, функцію органів, супутні препарати та клінічний контекст. Цей інструмент не замінює клінічне судження або індивідуальну медичну консультацію.",

    "unit_g": "г",
    "unit_tsp": "чайна ложка",
    "unit_cap": "кришечка",
    "dash": "—",
    "enter_weight": "Введіть масу тіла вище"
  }

};

/* ═══════════════════════════════════════════════════════
   LANGUAGE CONFIGURATION
═══════════════════════════════════════════════════════ */
const LANGUAGES = [
  { code: 'en',    label: 'English',              dir: 'ltr' },
  { code: 'fr',    label: 'Français',             dir: 'ltr' },
  { code: 'es',    label: 'Español',              dir: 'ltr' },
  { code: 'pt',    label: 'Português',            dir: 'ltr' },
  { code: 'zh-CN', label: '中文 (简体)',           dir: 'ltr' },
  { code: 'zh-TW', label: '中文 (繁體)',           dir: 'ltr' },
  { code: 'pa',    label: 'ਪੰਜਾਬੀ',               dir: 'ltr' },
  { code: 'hi',    label: 'हिन्दी',               dir: 'ltr' },
  { code: 'ur',    label: 'اردو',                  dir: 'rtl' },
  { code: 'ar',    label: 'العربية',              dir: 'rtl' },
  { code: 'tl',    label: 'Filipino',             dir: 'ltr' },
  { code: 'ta',    label: 'தமிழ்',                dir: 'ltr' },
  { code: 'vi',    label: 'Tiếng Việt',           dir: 'ltr' },
  { code: 'ko',    label: '한국어',                dir: 'ltr' },
  { code: 'pl',    label: 'Polski',               dir: 'ltr' },
  { code: 'it',    label: 'Italiano',             dir: 'ltr' },
  { code: 'fa',    label: 'فارسی',                dir: 'rtl' },
  { code: 'uk',    label: 'Українська',           dir: 'ltr' }
];

/* ─────────────────────────────────────
   TRANSLATION STATE & LOOKUP
───────────────────────────────────── */
let currentLangData = TRANSLATIONS['en'];

function t(key) {
  if (currentLangData && currentLangData[key] !== undefined) return currentLangData[key];
  if (TRANSLATIONS['en'][key] !== undefined) return TRANSLATIONS['en'][key];
  return key;
}

/* ─────────────────────────────────────
   APPLY TRANSLATIONS TO DOM
───────────────────────────────────── */
function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    el.textContent = t(el.getAttribute('data-i18n'));
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    el.innerHTML = t(el.getAttribute('data-i18n-html'));
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    el.placeholder = t(el.getAttribute('data-i18n-placeholder'));
  });
  document.title = t('page_title');
  calculate();
}

/* ─────────────────────────────────────
   SWITCH LANGUAGE
───────────────────────────────────── */
function switchLanguage(code) {
  const config = LANGUAGES.find(l => l.code === code) || LANGUAGES[0];
  currentLangData = TRANSLATIONS[code] || TRANSLATIONS['en'];
  document.documentElement.setAttribute('lang', config.code);
  document.documentElement.setAttribute('dir', config.dir);
  try { localStorage.setItem('ps_lang', code); } catch(_) {}
  applyTranslations();
  const sel = document.getElementById('langSelect');
  if (sel && sel.value !== code) sel.value = code;
}

/* ─────────────────────────────────────
   POPULATE LANGUAGE DROPDOWN
───────────────────────────────────── */
function populateLangSelect(currentCode) {
  const select = document.getElementById('langSelect');
  if (!select) return;
  select.innerHTML = '';
  LANGUAGES.forEach(lang => {
    const opt = document.createElement('option');
    opt.value = lang.code;
    opt.textContent = lang.label;
    if (lang.code === currentCode) opt.selected = true;
    select.appendChild(opt);
  });
  select.addEventListener('change', () => switchLanguage(select.value));
}

/* ═══════════════════════════════════════════════════════
   CALCULATOR STATE
═══════════════════════════════════════════════════════ */
let unit = 'kg';

function setUnit(u) {
  unit = u;
  document.getElementById('btnKg').classList.toggle('active', u === 'kg');
  document.getElementById('btnLbs').classList.toggle('active', u === 'lbs');
  calculate();
}

function getWeightKg() {
  const raw = parseFloat(document.getElementById('weightInput').value);
  if (isNaN(raw) || raw <= 0) return null;
  return unit === 'lbs' ? raw * 0.453592 : raw;
}

/* ─────────────────────────────────────
   FORMAT HELPERS
───────────────────────────────────── */
/* Round to 1 decimal, drop trailing .0 */
function fmtG(g) {
  if (g === null) return t('dash');
  const r = Math.round(g * 10) / 10;
  return r % 1 === 0 ? r.toFixed(0) : r.toFixed(1);
}

/* Express grams as teaspoons (1 tsp ≈ 4 g), rounded to nearest 0.25 */
function fmtTsp(g) {
  if (g === null) return '';
  const tsp = g / 4;
  const rounded = Math.round(tsp * 4) / 4;           // nearest quarter tsp
  const whole = Math.floor(rounded);
  const frac  = rounded - whole;
  const fracStr = frac === 0.25 ? '¼' : frac === 0.5 ? '½' : frac === 0.75 ? '¾' : '';
  let str = '';
  if (whole > 0) str += whole;
  if (fracStr)   str += (whole > 0 ? ' ' : '') + fracStr;
  if (!str)      str = '< ¼';
  return str + ' tsp';
}

/* Express grams as caps (17 g each).
   For doses ≥ 1 cap shows whole/half caps; for sub-cap doses shows fraction. */
function fmtCap(g) {
  if (g === null) return t('dash');
  const caps = g / 17;
  // For doses >= 1 full cap, show as whole + optional half
  if (caps >= 1) {
    const whole = Math.floor(caps);
    const frac  = caps - whole;
    if (frac < 0.15)          return whole + (whole === 1 ? ' cap' : ' caps');
    if (frac < 0.65)          return whole + '½ caps';
    return (whole + 1) + (whole + 1 === 1 ? ' cap' : ' caps');
  }
  // Sub-cap: show as fraction of 1 cap
  const quarters = Math.round(caps * 4) / 4;
  if (quarters <= 0)     return '< ¼ cap';
  if (quarters === 0.25) return '¼ cap';
  if (quarters === 0.5)  return '½ cap';
  if (quarters === 0.75) return '¾ cap';
  return '1 cap';
}

/* ─────────────────────────────────────
   SET / CLEAR HELPERS
───────────────────────────────────── */
function setEl(id, text) {
  const el = document.getElementById(id);
  if (el) el.textContent = text;
}

function setPending(ids) {
  ids.forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;
    el.textContent = t('enter_weight');
    el.classList.add('pending');
    el.style.color = '';
  });
}

function clearPending(ids) {
  ids.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.classList.remove('pending');
  });
}

/* ─────────────────────────────────────
   DEBOUNCED INPUT HANDLER
   Waits 400 ms after the last keystroke before calculating,
   so partial two-digit inputs (e.g. "1", "2") don't flash
   the low-weight warning mid-entry.
───────────────────────────────────── */
let _calcTimer = null;
function debouncedCalculate() {
  clearTimeout(_calcTimer);
  _calcTimer = setTimeout(calculate, 400);
}

/* ═══════════════════════════════════════════════════════
   MAIN CALCULATE
═══════════════════════════════════════════════════════ */
function calculate() {
  const wKg    = getWeightKg();
  const isEmpty = wKg === null;

  /* ── Low-weight advisory note ── */
  const noteEl = document.getElementById('inputAgeNote');
  if (noteEl) {
    if (!isEmpty && wKg < 5) {
      noteEl.className = 'input-age-note';
      noteEl.style.background = 'var(--red-light)';
      noteEl.style.color = '#7a1818';
      noteEl.style.border = '1px solid #f0c5c2';
      noteEl.textContent = t('warn_low_weight');
    } else {
      noteEl.className = 'input-age-note hidden';
      noteEl.style.background = '';
      noteEl.style.color = '';
      noteEl.style.border = '';
      noteEl.textContent = '';
    }
  }

  /* ── DISIMPACTION ─────────────────────────────────── */
  // 1.5 g/kg/day, max 100 g/day
  const disimpRaw   = isEmpty ? null : Math.min(wKg * 1.5, 100);
  const disimpSplit = disimpRaw === null ? null : disimpRaw / 2;

  // Banner summary value
  setEl('disimpDose', isEmpty ? t('dash') : fmtG(disimpRaw) + ' g/day');

  // Result card values
  const disimpValueEl = document.getElementById('disimpDoseG');
  const disimpSplitEl = document.getElementById('disimpSplitG');

  if (isEmpty) {
    if (disimpValueEl) { disimpValueEl.textContent = t('enter_weight'); disimpValueEl.classList.add('pending'); }
    if (disimpSplitEl) { disimpSplitEl.textContent = t('enter_weight'); disimpSplitEl.classList.add('pending'); }
    setEl('disimpDoseTsp',  '');
    setEl('disimpSplitTsp', '');
    const dcap = document.getElementById('disimpDoseCap');
    const scap = document.getElementById('disimpSplitCap');
    if (dcap) { dcap.textContent = t('enter_weight'); dcap.classList.add('pending'); }
    if (scap) { scap.textContent = t('enter_weight'); scap.classList.add('pending'); }
  } else {
    if (disimpValueEl) { disimpValueEl.textContent = fmtG(disimpRaw) + ' g'; disimpValueEl.classList.remove('pending'); }
    if (disimpSplitEl) { disimpSplitEl.textContent = fmtG(disimpSplit) + ' g'; disimpSplitEl.classList.remove('pending'); }
    setEl('disimpDoseTsp',  fmtTsp(disimpRaw));
    setEl('disimpSplitTsp', fmtTsp(disimpSplit));
    const dcap = document.getElementById('disimpDoseCap');
    const scap = document.getElementById('disimpSplitCap');
    if (dcap) { dcap.textContent = fmtCap(disimpRaw);   dcap.classList.remove('pending'); }
    if (scap) { scap.textContent = fmtCap(disimpSplit);  scap.classList.remove('pending'); }
  }

  /* ── MAINTENANCE ──────────────────────────────────── */
  // 0.4–0.8 g/kg/day, max 17 g/day
  const maintLowRaw  = isEmpty ? null : Math.min(wKg * 0.4, 17);
  const maintHighRaw = isEmpty ? null : Math.min(wKg * 0.8, 17);

  // Banner summary values
  setEl('maintLow',  isEmpty ? t('dash') : fmtG(maintLowRaw)  + ' g/day');
  setEl('maintHigh', isEmpty ? t('dash') : fmtG(maintHighRaw) + ' g/day');

  // Result card values
  const maintLowGEl  = document.getElementById('maintLowG');
  const maintHighGEl = document.getElementById('maintHighG');
  const maintLowCEl  = document.getElementById('maintLowCap');
  const maintHighCEl = document.getElementById('maintHighCap');

  if (isEmpty) {
    [maintLowGEl, maintHighGEl, maintLowCEl, maintHighCEl].forEach(el => {
      if (el) { el.textContent = t('enter_weight'); el.classList.add('pending'); }
    });
    setEl('maintLowTsp',  '');
    setEl('maintHighTsp', '');
  } else {
    if (maintLowGEl)  { maintLowGEl.textContent  = fmtG(maintLowRaw)  + ' g'; maintLowGEl.classList.remove('pending'); }
    if (maintHighGEl) { maintHighGEl.textContent = fmtG(maintHighRaw) + ' g'; maintHighGEl.classList.remove('pending'); }
    if (maintLowCEl)  { maintLowCEl.textContent  = fmtCap(maintLowRaw);  maintLowCEl.classList.remove('pending'); }
    if (maintHighCEl) { maintHighCEl.textContent = fmtCap(maintHighRaw); maintHighCEl.classList.remove('pending'); }
    setEl('maintLowTsp',  fmtTsp(maintLowRaw));
    setEl('maintHighTsp', fmtTsp(maintHighRaw));
  }
}

/* ═══════════════════════════════════════════════════════
   INIT — runs after all functions/arrays are declared
═══════════════════════════════════════════════════════ */
(function init() {
  let saved = 'en';
  try { saved = localStorage.getItem('ps_lang') || 'en'; } catch(_) {}
  if (!LANGUAGES.find(l => l.code === saved)) saved = 'en';
  populateLangSelect(saved);
  switchLanguage(saved);
})();
