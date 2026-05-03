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
  }
};

/* ═══════════════════════════════════════════════════════
   LANGUAGE CONFIGURATION
═══════════════════════════════════════════════════════ */
const LANGUAGES = [
  { code: 'en', label: 'English', dir: 'ltr' }
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
