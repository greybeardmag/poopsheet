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
  { code: 'ar',    label: 'العربية',              dir: 'rtl' }
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
