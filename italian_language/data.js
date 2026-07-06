// ── 이탈리아어 학습 데이터 ──
// TTS는 speak() 헬퍼(Web Speech API, lang='it-IT')로 재생한다. (Day 2에서 구현 예정)

// 1. 문법 비교: 한글 문법 ↔ 이탈리아 문법
const grammarCompare = [
  {
    title: "어순",
    ko: "한국어는 '주어+목적어+동사'(SOV) 순서예요.",
    it: "이탈리아어는 '주어+동사+목적어'(SVO) 순서예요.",
    example: { ko: "나는 사과를 먹는다", it: "Io mangio una mela" }
  },
  {
    title: "조사",
    ko: "한국어는 조사(을/를, 이/가, 에)로 문법 관계를 표시해요.",
    it: "이탈리아어는 조사가 없고, 어순과 전치사로 표시해요.",
    example: { ko: "학교에 간다", it: "Vado a scuola (a = ~에)" }
  },
  {
    title: "명사의 성",
    ko: "한국어 명사는 성(性) 구분이 없어요.",
    it: "이탈리아어 명사는 모두 남성/여성으로 나뉘고, 관사·형용사가 성에 맞춰 변해요.",
    example: { ko: "책", it: "il libro (남성) / la penna (여성)" }
  },
  {
    title: "존댓말",
    ko: "한국어는 높임말/반말 체계가 발달해 있어요.",
    it: "이탈리아어는 2인칭 대명사로 격식을 구분해요 (tu=반말, Lei=존댓말).",
    example: { ko: "안녕하세요 / 안녕", it: "Come sta? (존댓말) / Come stai? (반말)" }
  },
  {
    title: "동사 활용",
    ko: "한국어 동사는 어미를 바꿔 시제·높임을 표현해요 (먹다→먹어요→먹었어요).",
    it: "이탈리아어 동사는 주어 인칭에 따라 어미가 6가지로 바뀌어요 (인칭변화).",
    example: { ko: "먹다 (주어와 무관)", it: "mangiare → io mangio, tu mangi, lui mangia..." }
  },
  {
    title: "형용사 위치",
    ko: "한국어는 형용사가 명사 앞에 와요.",
    it: "이탈리아어는 대부분 형용사가 명사 뒤에 와요 (일부 예외 있음).",
    example: { ko: "빨간 자동차", it: "la macchina rossa (자동차 빨간)" }
  },
  {
    title: "관사",
    ko: "한국어는 관사가 없어요.",
    it: "이탈리아어는 명사의 성·수·첫소리에 따라 정관사(il/lo/la/i/gli/le), 부정관사(un/uno/una)가 달라져요.",
    example: { ko: "사과 (하나)", it: "una mela" }
  },
  {
    title: "의문문",
    ko: "한국어는 어미에 '~까/~니'를 붙이거나 억양으로 의문문을 만들어요.",
    it: "이탈리아어는 평서문과 어순이 같고, 억양(또는 물음표)만 달라요. 별도의 의문 조동사가 필요 없어요.",
    example: { ko: "너는 학생이니?", it: "Sei studente?" }
  }
];

// 2. 품사별 문법
const grammarTopics = {
  noun: {
    title: "명사의 성과 수",
    icon: "📦",
    explain: "이탈리아어 명사는 모두 남성(maschile) 또는 여성(femminile) 중 하나의 성을 가지며, 단수/복수 형태가 있어요. 대부분 -o로 끝나면 남성, -a로 끝나면 여성이고, 복수형은 어미가 -i(남성) 또는 -e(여성)로 바뀌어요.",
    table: [
      { it: "libro → libri", desc: "남성 단수 -o → 복수 -i (책)" },
      { it: "penna → penne", desc: "여성 단수 -a → 복수 -e (펜)" },
      { it: "studente → studenti", desc: "-e로 끝나는 명사는 성 구분 없이 복수 -i (학생)" },
      { it: "la mano", desc: "예외: -o로 끝나지만 여성명사 (손)" }
    ]
  },
  adjective: {
    title: "형용사의 성·수 일치",
    icon: "🎨",
    explain: "이탈리아어 형용사는 꾸미는 명사의 성과 수에 맞춰 어미가 바뀌어요. 보통 명사 뒤에 위치해요.",
    table: [
      { it: "un ragazzo alto", desc: "남성 단수 (키 큰 남자아이)" },
      { it: "una ragazza alta", desc: "여성 단수 (키 큰 여자아이)" },
      { it: "ragazzi alti / ragazze alte", desc: "남성/여성 복수" },
      { it: "un libro grande", desc: "-e로 끝나는 형용사(grande)는 남녀 동형" }
    ]
  },
  pronoun: {
    title: "인칭대명사",
    icon: "👤",
    explain: "주어 인칭대명사는 동사 활용만으로도 주어가 드러나기 때문에 자주 생략돼요. 2인칭은 반말(tu)과 존댓말(Lei)이 구분돼요.",
    table: [
      { it: "io / tu / lui, lei", desc: "나 / 너(반말) / 그, 그녀" },
      { it: "Lei", desc: "당신(존댓말, 3인칭 동사 형태 사용)" },
      { it: "noi / voi / loro", desc: "우리 / 너희 / 그들" },
      { it: "mi, ti, lo, la...", desc: "목적격 대명사 (나를, 너를, 그를/그녀를)" }
    ]
  },
  verb: {
    title: "동사 현재시제",
    icon: "🏃",
    explain: "이탈리아어 동사는 원형 어미에 따라 -are, -ere, -ire 세 그룹으로 나뉘고, 주어 인칭에 맞춰 6가지로 활용돼요. essere(~이다)와 avere(가지다)는 불규칙 활용을 하는 가장 중요한 동사예요.",
    table: [
      { it: "parlare(말하다): parlo, parli, parla, parliamo, parlate, parlano", desc: "-are 규칙 동사" },
      { it: "essere(~이다): sono, sei, è, siamo, siete, sono", desc: "불규칙, 가장 많이 쓰임" },
      { it: "avere(가지다): ho, hai, ha, abbiamo, avete, hanno", desc: "불규칙, 소유·나이 표현에 사용" }
    ]
  }
};

// 3. 카테고리별 단어 (총 60개)
const words = {
  noun: [
    { it: "casa", pron: "카자", ko: "집", emoji: "🏠" },
    { it: "acqua", pron: "아꾸아", ko: "물", emoji: "💧" },
    { it: "pane", pron: "파네", ko: "빵", emoji: "🍞" },
    { it: "amico", pron: "아미코", ko: "친구(남)", emoji: "👬" },
    { it: "famiglia", pron: "파밀리아", ko: "가족", emoji: "👪" },
    { it: "scuola", pron: "스쿠올라", ko: "학교", emoji: "🏫" },
    { it: "lavoro", pron: "라보로", ko: "일, 직장", emoji: "💼" },
    { it: "tempo", pron: "템포", ko: "시간, 날씨", emoji: "⏰" },
    { it: "città", pron: "치따", ko: "도시", emoji: "🏙️" },
    { it: "strada", pron: "스트라다", ko: "길, 거리", emoji: "🛣️" },
    { it: "macchina", pron: "마끼나", ko: "자동차", emoji: "🚗" },
    { it: "libro", pron: "리브로", ko: "책", emoji: "📖" }
  ],
  adjective: [
    { it: "buono", pron: "부오노", ko: "좋은", emoji: "👍" },
    { it: "bello", pron: "벨로", ko: "아름다운, 멋진", emoji: "😍" },
    { it: "grande", pron: "그란데", ko: "큰", emoji: "🔼" },
    { it: "piccolo", pron: "피꼴로", ko: "작은", emoji: "🔽" },
    { it: "nuovo", pron: "누오보", ko: "새로운", emoji: "✨" },
    { it: "vecchio", pron: "베끼오", ko: "오래된, 나이든", emoji: "👴" },
    { it: "felice", pron: "펠리체", ko: "행복한", emoji: "😊" },
    { it: "triste", pron: "트리스테", ko: "슬픈", emoji: "😢" },
    { it: "caldo", pron: "칼도", ko: "더운, 뜨거운", emoji: "🥵" },
    { it: "freddo", pron: "프레도", ko: "추운, 차가운", emoji: "🥶" },
    { it: "facile", pron: "파칠레", ko: "쉬운", emoji: "✅" },
    { it: "difficile", pron: "디피칠레", ko: "어려운", emoji: "❗" }
  ],
  number: [
    { it: "zero", pron: "제로", ko: "0", emoji: "0️⃣" },
    { it: "uno", pron: "우노", ko: "1", emoji: "1️⃣" },
    { it: "due", pron: "두에", ko: "2", emoji: "2️⃣" },
    { it: "tre", pron: "트레", ko: "3", emoji: "3️⃣" },
    { it: "quattro", pron: "꽈트로", ko: "4", emoji: "4️⃣" },
    { it: "cinque", pron: "친퀘", ko: "5", emoji: "5️⃣" },
    { it: "sei", pron: "세이", ko: "6", emoji: "6️⃣" },
    { it: "sette", pron: "세떼", ko: "7", emoji: "7️⃣" },
    { it: "otto", pron: "오또", ko: "8", emoji: "8️⃣" },
    { it: "nove", pron: "노베", ko: "9", emoji: "9️⃣" },
    { it: "dieci", pron: "디에치", ko: "10", emoji: "🔟" },
    { it: "venti", pron: "벤티", ko: "20", emoji: "🔢" },
    { it: "cento", pron: "첸토", ko: "100", emoji: "💯" }
  ],
  verb: [
    { it: "essere", pron: "에쎄레", ko: "~이다", emoji: "🟰" },
    { it: "avere", pron: "아베레", ko: "가지다", emoji: "🤲" },
    { it: "andare", pron: "안다레", ko: "가다", emoji: "🚶" },
    { it: "venire", pron: "베니레", ko: "오다", emoji: "🙋" },
    { it: "mangiare", pron: "만자레", ko: "먹다", emoji: "🍽️" },
    { it: "bere", pron: "베레", ko: "마시다", emoji: "🥤" },
    { it: "parlare", pron: "파를라레", ko: "말하다", emoji: "🗣️" },
    { it: "volere", pron: "볼레레", ko: "원하다", emoji: "🙏" },
    { it: "potere", pron: "포테레", ko: "~할 수 있다", emoji: "💪" },
    { it: "fare", pron: "파레", ko: "하다, 만들다", emoji: "🔨" },
    { it: "vedere", pron: "베데레", ko: "보다", emoji: "👀" },
    { it: "dormire", pron: "도르미레", ko: "자다", emoji: "😴" }
  ],
  fruitveg: [
    { it: "mela", pron: "멜라", ko: "사과", svg: `<svg viewBox="0 0 64 64"><path d="M32 22c-9 0-16 8-16 19 0 9 6 15 12 15 3 0 4-2 4-2s1 2 4 2c6 0 12-6 12-15 0-11-7-19-16-19z" fill="#e63946"/><rect x="30" y="10" width="3" height="12" rx="1.5" fill="#6b4226"/><path d="M33 14c4-4 10-3 10 2-5 2-8 0-10-2z" fill="#4CAF50"/></svg>` },
    { it: "banana", pron: "바나나", ko: "바나나", svg: `<svg viewBox="0 0 64 64"><path d="M14 44c6 10 30 12 38-2 2-4-1-7-4-5-8 12-26 10-30 2-1-2-5-1-4 5z" fill="#FFD54F"/><path d="M48 42c2-1 4-1 5 1-2 2-4 3-6 2z" fill="#C9A227"/></svg>` },
    { it: "arancia", pron: "아란챠", ko: "오렌지", svg: `<svg viewBox="0 0 64 64"><circle cx="32" cy="36" r="18" fill="#FB8C00"/><rect x="30" y="16" width="3" height="6" fill="#6b4226"/><path d="M33 18c4-3 9-1 8 3-4 1-7-1-8-3z" fill="#4CAF50"/></svg>` },
    { it: "fragola", pron: "프라골라", ko: "딸기", svg: `<svg viewBox="0 0 64 64"><path d="M32 24c12 0 16 12 12 22-3 8-9 12-12 12s-9-4-12-12c-4-10 0-22 12-22z" fill="#E53935"/><path d="M20 24l6 6M32 22l0 8M44 24l-6 6" stroke="#4CAF50" stroke-width="2" fill="none"/><circle cx="26" cy="34" r="1.4" fill="#FFF59D"/><circle cx="34" cy="30" r="1.4" fill="#FFF59D"/><circle cx="38" cy="40" r="1.4" fill="#FFF59D"/><circle cx="28" cy="46" r="1.4" fill="#FFF59D"/></svg>` },
    { it: "uva", pron: "우바", ko: "포도", svg: `<svg viewBox="0 0 64 64"><circle cx="26" cy="30" r="6" fill="#7B1FA2"/><circle cx="36" cy="30" r="6" fill="#7B1FA2"/><circle cx="22" cy="40" r="6" fill="#7B1FA2"/><circle cx="32" cy="40" r="6" fill="#7B1FA2"/><circle cx="42" cy="40" r="6" fill="#7B1FA2"/><circle cx="28" cy="50" r="6" fill="#7B1FA2"/><circle cx="38" cy="50" r="6" fill="#7B1FA2"/><path d="M30 18c4-4 10-2 8 3-4 1-7-1-8-3z" fill="#4CAF50"/></svg>` },
    { it: "pomodoro", pron: "포모도로", ko: "토마토", svg: `<svg viewBox="0 0 64 64"><circle cx="32" cy="36" r="17" fill="#E53935"/><path d="M32 16l2 5 5-2-2 5 5 2-5 2 2 5-5-2-2 5-2-5-5 2 2-5-5-2 5-2-2-5 5 2z" fill="#4CAF50"/></svg>` },
    { it: "carota", pron: "카로타", ko: "당근", svg: `<svg viewBox="0 0 64 64"><path d="M28 26l8 0 4 26c0 4-3 8-8 8s-8-4-8-8z" fill="#FB8C00"/><path d="M30 26c-2-8 0-14 2-16 2 2 4 8 2 16z" fill="#4CAF50"/><path d="M26 24c-2-6 0-11 3-13 1 3 2 8 0 13z" fill="#4CAF50"/><path d="M38 24c2-6 0-11-3-13-1 3-2 8 0 13z" fill="#4CAF50"/></svg>` },
    { it: "patata", pron: "파타타", ko: "감자", svg: `<svg viewBox="0 0 64 64"><ellipse cx="32" cy="34" rx="18" ry="13" fill="#C8A165"/><circle cx="24" cy="30" r="1.5" fill="#8D6E42"/><circle cx="36" cy="38" r="1.5" fill="#8D6E42"/><circle cx="40" cy="28" r="1.5" fill="#8D6E42"/></svg>` },
    { it: "cipolla", pron: "치폴라", ko: "양파", svg: `<svg viewBox="0 0 64 64"><path d="M32 20c10 0 16 10 16 20s-7 12-16 12-16-4-16-12 6-20 16-20z" fill="#F3E5F5"/><path d="M20 30c3-6 5-9 12-10M44 30c-3-6-5-9-12-10" stroke="#CE93D8" stroke-width="2" fill="none"/><path d="M30 18c1-4 2-6 2-6s1 2 2 6z" fill="#7CB342"/></svg>` },
    { it: "melanzana", pron: "멜란자나", ko: "가지", svg: `<svg viewBox="0 0 64 64"><path d="M30 22c-10 4-14 16-9 26 3 6 9 8 12 5 6-6 10-20 5-29-2-3-5-3-8-2z" fill="#6A1B9A"/><path d="M28 20c2-4 6-5 9-3-2 3-5 4-9 3z" fill="#4CAF50"/></svg>` },
    { it: "limone", pron: "리모네", ko: "레몬", svg: `<svg viewBox="0 0 64 64"><ellipse cx="32" cy="34" rx="17" ry="13" fill="#FDD835"/><path d="M15 34c-2 0-3-1-3-2s1-2 3-2z" fill="#FBC02D"/><path d="M49 34c2 0 3-1 3-2s-1-2-3-2z" fill="#FBC02D"/></svg>` },
    { it: "pera", pron: "페라", ko: "배", svg: `<svg viewBox="0 0 64 64"><path d="M32 20c3 0 4 4 3 7-6 3-9 8-9 15 0 8 6 12 12 12s12-4 12-12c0-9-6-13-9-16 1-3 0-6-3-6z" fill="#9CCC65"/><rect x="30" y="14" width="3" height="7" rx="1.5" fill="#6b4226"/></svg>` }
  ],
  greeting: [
    { it: "ciao", pron: "챠오", ko: "안녕 (반말 인사)", emoji: "👋" },
    { it: "buongiorno", pron: "부온조르노", ko: "안녕하세요 (아침~낮)", emoji: "🌅" },
    { it: "buonasera", pron: "부오나세라", ko: "안녕하세요 (저녁)", emoji: "🌆" },
    { it: "buonanotte", pron: "부오나노떼", ko: "잘 자요", emoji: "🌙" },
    { it: "grazie", pron: "그라찌에", ko: "감사합니다", emoji: "🙏" },
    { it: "prego", pron: "프레고", ko: "천만에요", emoji: "🤝" },
    { it: "scusa", pron: "스쿠자", ko: "미안해 (반말)", emoji: "😅" },
    { it: "scusi", pron: "스쿠지", ko: "실례합니다 (존댓말)", emoji: "🙇" },
    { it: "per favore", pron: "페르 파보레", ko: "부탁합니다", emoji: "🙏" },
    { it: "sì", pron: "씨", ko: "네", emoji: "✅" },
    { it: "no", pron: "노", ko: "아니요", emoji: "❌" },
    { it: "arrivederci", pron: "아리베데르치", ko: "안녕히 가세요", emoji: "👋" }
  ]
};

// 3-1. 문장 속 단어 hover 툴팁용 추가 어휘 (회화·패턴 예문에 등장하지만 위 단어장에는 없는 문법 단어·활용형)
const glossary = {
  "come":     { ko: "어떻게, 무엇처럼", pos: "의문사" },
  "bene":     { ko: "잘 (sto bene = 잘 지내요, va bene = 좋아요)", pos: "부사", emoji: "👍" },
  "io":       { ko: "나, 저", pos: "대명사" },
  "libri":    { ko: "책들 (libro의 복수형)", pos: "명사", emoji: "📖" },
  "stai":     { ko: "(너는) 지내다, 있다 — stare 활용형", pos: "동사" },
  "sto":      { ko: "(나는) 지내다, 있다 — stare 활용형", pos: "동사" },
  "e":        { ko: "그리고", pos: "접속사" },
  "tu":       { ko: "너", pos: "대명사" },
  "anch'io":  { ko: "나도", pos: "표현" },
  "ci":       { ko: "서로, 거기에", pos: "대명사/부사" },
  "vediamo":  { ko: "(우리는) 본다 — vedere 활용형 (ci vediamo = 또 봐요)", pos: "동사" },
  "domani":   { ko: "내일", pos: "부사", emoji: "📅" },
  "ti":       { ko: "너를, 너에게", pos: "대명사" },
  "chiami":   { ko: "(네가) 부르다 — chiamare 활용형", pos: "동사" },
  "mi":       { ko: "나를, 나에게", pos: "대명사" },
  "chiamo":   { ko: "(내가) 부르다 — chiamare 활용형", pos: "동사" },
  "piacere":  { ko: "기쁨, 반갑습니다", pos: "명사/감탄사", emoji: "🤝" },
  "mio":      { ko: "나의 (남성)", pos: "소유형용사" },
  "mia":      { ko: "나의 (여성)", pos: "소유형용사" },
  "di":       { ko: "~의, ~로부터", pos: "전치사" },
  "dove":     { ko: "어디", pos: "의문사", emoji: "📍" },
  "sei":      { ko: "(너는) ~이다 — essere 활용형", pos: "동사" },
  "sono":     { ko: "(나는/그들은) ~이다 — essere 활용형", pos: "동사" },
  "coreana":  { ko: "한국인의 (여성형)", pos: "형용사", emoji: "🇰🇷" },
  "coreano":  { ko: "한국인의 (남성형)", pos: "형용사", emoji: "🇰🇷" },
  "cosa":     { ko: "무엇", pos: "의문사" },
  "desidera": { ko: "원하시다 — desiderare 존댓말 활용형", pos: "동사" },
  "vorrei":   { ko: "원해요 — volere 조건법", pos: "동사" },
  "un":       { ko: "하나의 (남성)", pos: "관사" },
  "una":      { ko: "하나의 (여성)", pos: "관사" },
  "un'acqua": { ko: "물 한 병", pos: "표현", emoji: "💧" },
  "caffè":    { ko: "커피", pos: "명사", emoji: "☕" },
  "subito":   { ko: "즉시, 바로", pos: "부사" },
  "altro":    { ko: "다른 것", pos: "형용사/대명사" },
  "favore":   { ko: "부탁, 호의", pos: "명사" },
  "quanto":   { ko: "얼마나", pos: "의문사", emoji: "💰" },
  "costa":    { ko: "값이 나가다 — costare 활용형", pos: "동사" },
  "euro":     { ko: "유로 (화폐)", pos: "명사", emoji: "💶" },
  "dov'è":    { ko: "~는 어디에 있나요", pos: "표현", emoji: "📍" },
  "la":       { ko: "그 (여성 단수)", pos: "관사" },
  "il":       { ko: "그 (남성 단수)", pos: "관사" },
  "i":        { ko: "그 (남성 복수)", pos: "관사" },
  "gli":      { ko: "그 (남성 복수, 특정 발음 앞)", pos: "관사" },
  "stazione": { ko: "역", pos: "명사", emoji: "🚉" },
  "vada":     { ko: "가세요 — andare 명령형(존댓말)", pos: "동사" },
  "dritto":   { ko: "곧장", pos: "부사" },
  "giri":     { ko: "도세요 — girare 명령형", pos: "동사" },
  "a":        { ko: "~로, ~에", pos: "전치사" },
  "al":       { ko: "~에 (a+il 축약)", pos: "전치사+관사" },
  "destra":   { ko: "오른쪽", pos: "명사", emoji: "➡️" },
  "è":        { ko: "(그는/그녀는/이것은) ~이다 — essere 활용형", pos: "동사" },
  "lontano":  { ko: "먼", pos: "형용사" },
  "da":       { ko: "~로부터", pos: "전치사" },
  "qui":      { ko: "여기", pos: "부사", emoji: "📍" },
  "minuti":   { ko: "분 (시간)", pos: "명사", emoji: "⏱️" },
  "piedi":    { ko: "발 (a piedi = 걸어서)", pos: "명사", emoji: "🚶" },
  "mille":    { ko: "천 (grazie mille = 정말 감사해요)", pos: "숫자" },
  "avete":    { ko: "너희는 가지고 있다 — avere 활용형", pos: "동사" },
  "tavolo":   { ko: "테이블", pos: "명사", emoji: "🪑" },
  "per":      { ko: "~를 위해", pos: "전치사" },
  "questa":   { ko: "이 (여성)", pos: "지시형용사" },
  "questo":   { ko: "이 (남성) / 이것", pos: "지시형용사/대명사" },
  "quella":   { ko: "저것 (여성)", pos: "지시대명사" },
  "parte":    { ko: "쪽, 부분", pos: "명사" },
  "consiglia":{ ko: "추천하다 — consigliare 존댓말 활용형", pos: "동사" },
  "pasta":    { ko: "파스타", pos: "명사", emoji: "🍝" },
  "ottima":   { ko: "최고의", pos: "형용사" },
  "oggi":     { ko: "오늘", pos: "부사", emoji: "📅" },
  "va":       { ko: "가다 — andare 활용형 (va bene = 좋아요)", pos: "동사" },
  "prendo":   { ko: "잡다, 고르다 — prendere 활용형", pos: "동사" },
  "fai":      { ko: "(네가) 하다 — fare 활용형", pos: "동사" },
  "weekend":  { ko: "주말", pos: "명사", emoji: "🏖️" },
  "penso":    { ko: "(내가) 생각하다 — pensare 활용형", pos: "동사" },
  "mare":     { ko: "바다", pos: "명사", emoji: "🌊" },
  "con":      { ko: "~와 함께", pos: "전치사" },
  "che":      { ko: "정말, 무엇", pos: "감탄사/의문사" },
  "invece":   { ko: "반면에", pos: "부사" },
  "devo":     { ko: "해야 한다 — dovere 활용형", pos: "동사" },
  "studiare": { ko: "공부하다", pos: "동사(원형)", emoji: "📚" },
  "esame":    { ko: "시험", pos: "명사", emoji: "📝" },
  "l'esame":  { ko: "그 시험", pos: "표현", emoji: "📝" },
  "in":       { ko: "~안에", pos: "전치사" },
  "bocca":    { ko: "입", pos: "명사", emoji: "👄" },
  "lupo":     { ko: "늑대 (in bocca al lupo = 행운을 빌어요)", pos: "명사", emoji: "🐺" },
  "crepi":    { ko: "고마워 — 위 관용표현에 대한 정해진 대답", pos: "표현" },
  "piace":    { ko: "좋아하다 (대상이 단수일 때) — piacere 활용형", pos: "동사" },
  "piacciono":{ ko: "좋아하다 (대상이 복수일 때) — piacere 활용형", pos: "동사" },
  "musica":   { ko: "음악", pos: "명사", emoji: "🎵" },
  "animali":  { ko: "동물들", pos: "명사", emoji: "🐾" },
  "c'è":      { ko: "~가 있다 (단수)", pos: "표현" },
  "problema": { ko: "문제", pos: "명사", emoji: "❗" },
  "farmacia": { ko: "약국", pos: "명사", emoji: "💊" },
  "vicino":   { ko: "가까운", pos: "형용사" },
  "gatti":    { ko: "고양이들", pos: "명사", emoji: "🐱" },
  "bagno":    { ko: "화장실, 욕실", pos: "명사", emoji: "🚽" },
  "l'hotel":  { ko: "그 호텔", pos: "표현", emoji: "🏨" },
  "biglietto":{ ko: "표", pos: "명사", emoji: "🎫" },
  "camera":   { ko: "방", pos: "명사", emoji: "🛏️" },
  "studente": { ko: "학생", pos: "명사", emoji: "🎓" },
  "stanco":   { ko: "피곤한", pos: "형용사", emoji: "😪" },
  "ho":       { ko: "가지고 있다 — avere 활용형", pos: "동사" },
  "anni":     { ko: "나이, 살 (년)", pos: "명사", emoji: "🎂" },
  "trenta":   { ko: "30", pos: "숫자", emoji: "🔢" },
  "sole":       { ko: "해, 태양", pos: "명사", emoji: "☀️" },
  "dorme":      { ko: "(그는/그녀는) 자다 — dormire 활용형", pos: "동사" },
  "sul":        { ko: "~위에 (su+il 축약)", pos: "전치사+관사" },
  "letto":      { ko: "침대", pos: "명사", emoji: "🛏️" },
  "legge":      { ko: "(그는/그녀는) 읽다 — leggere 활용형", pos: "동사" },
  "gatto":      { ko: "고양이", pos: "명사", emoji: "🐱" },
  "bambini":    { ko: "아이들", pos: "명사", emoji: "🧒" },
  "giocano":    { ko: "(그들은) 놀다 — giocare 활용형", pos: "동사" },
  "giardino":   { ko: "정원", pos: "명사", emoji: "🌳" },
  "cane":       { ko: "개", pos: "명사", emoji: "🐶" },
  "nero":       { ko: "검은", pos: "형용사" },
  "cielo":      { ko: "하늘", pos: "명사", emoji: "☁️" },
  "azzurro":    { ko: "파란", pos: "형용사" },
  "madre":      { ko: "어머니", pos: "명사", emoji: "👩" },
  "cucina":     { ko: "(그는/그녀는) 요리하다 — cucinare 활용형 (명사로는 '부엌'이라는 뜻도 있음)", pos: "동사" },
  "studenti":   { ko: "학생들 (studente의 복수형)", pos: "명사", emoji: "🎓" },
  "studiano":   { ko: "(그들은) 공부하다 — studiare 활용형", pos: "동사" },
  "italiano":   { ko: "이탈리아어, 이탈리아인(남성)", pos: "명사/형용사" },
  "l'italiano": { ko: "이탈리아어 (그것)", pos: "표현" },
  "treno":      { ko: "기차", pos: "명사", emoji: "🚆" },
  "arriva":     { ko: "(그것은) 도착하다 — arrivare 활용형", pos: "동사" },
  "alle":       { ko: "~시에 (a+le 축약, 시간 표현)", pos: "전치사+관사" },
  "lavora":     { ko: "(그는/그녀는) 일하다 — lavorare 활용형", pos: "동사" },
  "ufficio":    { ko: "사무실", pos: "명사", emoji: "🏢" },
  "ragazza":    { ko: "소녀, 여자아이", pos: "명사", emoji: "👧" },
  "canta":      { ko: "(그는/그녀는) 노래하다 — cantare 활용형", pos: "동사" },
  "bella":      { ko: "아름다운 (여성형, bello의 여성형)", pos: "형용사" },
  "canzone":    { ko: "노래", pos: "명사", emoji: "🎵" },
  "noi":        { ko: "우리", pos: "대명사" },
  "abitiamo":   { ko: "(우리는) 살다 — abitare 활용형", pos: "동사" },
  "inverno":    { ko: "겨울", pos: "명사", emoji: "❄️" },
  "l'inverno":  { ko: "겨울 (그것)", pos: "표현", emoji: "❄️" },
  "estate":     { ko: "여름", pos: "명사", emoji: "☀️" },
  "l'estate":   { ko: "여름 (그것)", pos: "표현", emoji: "☀️" },
  "calda":      { ko: "더운, 뜨거운 (여성형, caldo의 여성형)", pos: "형용사" }
};

// 4. 회화 (초급 3세트 + 중급 3세트)
const dialogues = {
  beginner: [
    {
      title: "인사하기",
      lines: [
        { speaker: "A", it: "Ciao! Come stai?", ko: "안녕! 어떻게 지내?" },
        { speaker: "B", it: "Sto bene, grazie. E tu?", ko: "잘 지내, 고마워. 너는?" },
        { speaker: "A", it: "Anch'io sto bene.", ko: "나도 잘 지내." },
        { speaker: "B", it: "Ci vediamo domani!", ko: "내일 봐!" }
      ]
    },
    {
      title: "자기소개",
      lines: [
        { speaker: "A", it: "Come ti chiami?", ko: "이름이 뭐야?" },
        { speaker: "B", it: "Mi chiamo Marco. E tu?", ko: "내 이름은 마르코야. 너는?" },
        { speaker: "A", it: "Mi chiamo Sara. Piacere!", ko: "내 이름은 사라야. 반가워!" },
        { speaker: "B", it: "Piacere mio! Di dove sei?", ko: "나도 반가워! 어디 출신이야?" },
        { speaker: "A", it: "Sono coreana.", ko: "나는 한국인이야." }
      ]
    },
    {
      title: "카페에서 주문하기",
      lines: [
        { speaker: "A", it: "Buongiorno, cosa desidera?", ko: "안녕하세요, 뭘 드릴까요?" },
        { speaker: "B", it: "Vorrei un caffè, per favore.", ko: "커피 한 잔 주세요." },
        { speaker: "A", it: "Subito. Altro?", ko: "바로 드릴게요. 더 필요한 거 있으세요?" },
        { speaker: "B", it: "No, grazie. Quanto costa?", ko: "아니요, 괜찮아요. 얼마예요?" },
        { speaker: "A", it: "Sono due euro.", ko: "2유로입니다." }
      ]
    }
  ],
  intermediate: [
    {
      title: "길 묻기",
      lines: [
        { speaker: "A", it: "Scusi, dov'è la stazione?", ko: "실례합니다, 역이 어디예요?" },
        { speaker: "B", it: "Vada dritto e giri a destra.", ko: "직진하다가 오른쪽으로 도세요." },
        { speaker: "A", it: "È lontano da qui?", ko: "여기서 멀어요?" },
        { speaker: "B", it: "No, è a cinque minuti a piedi.", ko: "아니요, 걸어서 5분이에요." },
        { speaker: "A", it: "Grazie mille!", ko: "정말 감사합니다!" }
      ]
    },
    {
      title: "식당에서",
      lines: [
        { speaker: "A", it: "Avete un tavolo per due?", ko: "2인용 테이블 있나요?" },
        { speaker: "B", it: "Sì, da questa parte, prego.", ko: "네, 이쪽으로 오세요." },
        { speaker: "A", it: "Cosa ci consiglia?", ko: "뭘 추천해 주시나요?" },
        { speaker: "B", it: "La pasta al pomodoro è ottima oggi.", ko: "오늘은 토마토 파스타가 아주 좋아요." },
        { speaker: "A", it: "Va bene, prendo quella.", ko: "좋아요, 그걸로 할게요." }
      ]
    },
    {
      title: "계획 이야기하기",
      lines: [
        { speaker: "A", it: "Cosa fai questo weekend?", ko: "이번 주말에 뭐 해?" },
        { speaker: "B", it: "Penso di andare al mare con la mia famiglia.", ko: "가족이랑 바다에 갈 생각이야." },
        { speaker: "A", it: "Che bello! Io invece devo studiare per l'esame.", ko: "좋겠다! 나는 시험 공부해야 해." },
        { speaker: "B", it: "In bocca al lupo!", ko: "행운을 빌어! (관용표현, 직역: 늑대 입 속에서)" },
        { speaker: "A", it: "Crepi!", ko: "고마워! (위 관용표현에 대한 정해진 대답)" }
      ]
    }
  ]
};

// 5. 패턴 학습
const patterns = [
  {
    template: "Mi chiamo ___",
    ko: "내 이름은 ~입니다",
    examples: [
      { it: "Mi chiamo Sara", ko: "내 이름은 사라입니다" },
      { it: "Mi chiamo Marco", ko: "내 이름은 마르코입니다" },
      { it: "Mi chiamo Luca", ko: "내 이름은 루카입니다" }
    ]
  },
  {
    template: "Vorrei ___",
    ko: "저는 ~를 원해요 (주문할 때)",
    examples: [
      { it: "Vorrei un caffè", ko: "커피 한 잔 주세요" },
      { it: "Vorrei un'acqua", ko: "물 한 병 주세요" },
      { it: "Vorrei la pasta", ko: "파스타 주세요" },
      { it: "Vorrei un tavolo", ko: "테이블 하나 주세요" }
    ]
  },
  {
    template: "Mi piace ___ / Mi piacciono ___",
    ko: "나는 ~를 좋아해요 (단수/복수)",
    examples: [
      { it: "Mi piace il caffè", ko: "나는 커피를 좋아해요" },
      { it: "Mi piace la musica", ko: "나는 음악을 좋아해요" },
      { it: "Mi piacciono i libri", ko: "나는 책들을 좋아해요" },
      { it: "Mi piacciono gli animali", ko: "나는 동물들을 좋아해요" }
    ]
  },
  {
    template: "C'è ___ / Ci sono ___",
    ko: "~가 있어요 (단수/복수)",
    examples: [
      { it: "C'è un problema", ko: "문제가 있어요" },
      { it: "C'è una farmacia qui vicino", ko: "이 근처에 약국이 있어요" },
      { it: "Ci sono due gatti", ko: "고양이 두 마리가 있어요" }
    ]
  },
  {
    template: "Dov'è ___?",
    ko: "~는 어디에 있나요?",
    examples: [
      { it: "Dov'è il bagno?", ko: "화장실이 어디예요?" },
      { it: "Dov'è la stazione?", ko: "역이 어디예요?" },
      { it: "Dov'è l'hotel?", ko: "호텔이 어디예요?" }
    ]
  },
  {
    template: "Quanto costa ___?",
    ko: "~는 얼마예요?",
    examples: [
      { it: "Quanto costa questo?", ko: "이거 얼마예요?" },
      { it: "Quanto costa il biglietto?", ko: "표는 얼마예요?" },
      { it: "Quanto costa la camera?", ko: "방은 얼마예요?" }
    ]
  },
  {
    template: "Sono ___",
    ko: "저는 ~예요 (직업/상태/형용사)",
    examples: [
      { it: "Sono studente", ko: "저는 학생이에요" },
      { it: "Sono felice", ko: "저는 행복해요" },
      { it: "Sono stanco", ko: "저는 피곤해요" },
      { it: "Sono coreano", ko: "저는 한국인이에요" }
    ]
  },
  {
    template: "Ho ___ anni",
    ko: "저는 ~살이에요",
    examples: [
      { it: "Ho dieci anni", ko: "저는 열 살이에요" },
      { it: "Ho venti anni", ko: "저는 스무 살이에요" },
      { it: "Ho trenta anni", ko: "저는 서른 살이에요" }
    ]
  }
];

// 6. 발음 규칙 (이탈리아어는 철자-발음이 거의 1:1로 대응하는 표음 언어라
//    영어식 "파닉스표" 대신 "글자 조합 규칙표"로 정리)
const pronunciationRules = [
  { rule: "모음 a, e, i, o, u", sound: "아·에·이·오·우", example: "casa (카자)", note: "항상 같은 소리로 발음돼요. 영어처럼 흐려지는 애매모음이 없어요." },
  { rule: "c + a, o, u", sound: "ㅋ", example: "casa(카자), cosa(코자)", note: "c 뒤에 a/o/u가 오면 항상 ㅋ 발음이에요." },
  { rule: "c + e, i", sound: "ㅊ", example: "cena(체나), ciao(챠오)", note: "c 뒤에 e/i가 오면 ㅊ 발음이에요." },
  { rule: "ch + e, i", sound: "ㅋ", example: "che(케), chi(키)", note: "h가 붙으면 다시 ㅋ 소리로 돌아와요." },
  { rule: "g + a, o, u", sound: "ㄱ", example: "gatto(가또), gonna(곤나)", note: "g 뒤에 a/o/u가 오면 ㄱ 발음이에요." },
  { rule: "g + e, i", sound: "ㅈ", example: "gelato(젤라토), giorno(죠르노)", note: "g 뒤에 e/i가 오면 ㅈ 발음이에요." },
  { rule: "gh + e, i", sound: "ㄱ", example: "spaghetti(스파게티), ghiaccio(기아쵸)", note: "h가 붙으면 다시 ㄱ 소리로 돌아와요." },
  { rule: "gn", sound: "냐·뇨·뉴", example: "gnocchi(뇨끼), bagno(바뇨)", note: "스페인어 ñ와 비슷한 콧소리예요." },
  { rule: "gli", sound: "리 (구개음)", example: "famiglia(파밀리아), figlio(필리오)", note: "혀를 입천장에 붙여 굴리는 '리' 소리예요." },
  { rule: "sc + a, o, u", sound: "스ㅋ", example: "scuola(스쿠올라)", note: "sc 뒤에 a/o/u가 오면 스ㅋ 발음이에요." },
  { rule: "sc + e, i", sound: "쉬", example: "pesce(페셰), scienza(쉬엔자)", note: "영어 sh와 비슷한 소리예요." },
  { rule: "이중자음 (더블 컨소넌트)", sound: "길고 강하게", example: "nonno(논노=할아버지) vs nono(노노=아홉번째)", note: "자음을 한 박자 길게 끌어 발음해요. 뜻이 아예 달라지기도 해요." },
  { rule: "강세 (accento)", sound: "대부분 뒤에서 2번째 음절", example: "amico (아MI코)", note: "accent 표기(à,è,ì,ò,ù)가 있으면 그 모음에 강세가 있어요." }
];

// 7. 퀴즈 - 단어 퀴즈는 words 데이터에서 자동 생성(Day 6), 아래는 문법/발음/패턴 전용 수동 문항
const quizExtra = [
  { question: "이탈리아어의 기본 어순은?", choices: ["주어-목적어-동사", "주어-동사-목적어", "동사-주어-목적어", "목적어-동사-주어"], answer: 1 },
  { question: "'책'을 뜻하는 libro의 성(性)은?", choices: ["남성", "여성", "중성", "성 구분 없음"], answer: 0 },
  { question: "'penna(펜)'의 복수형은?", choices: ["penni", "penne", "pennae", "pennos"], answer: 1 },
  { question: "존댓말로 상대에게 안부를 물을 때 맞는 표현은?", choices: ["Come stai?", "Come sta?", "Come siete?", "Come sei?"], answer: 1 },
  { question: "essere 동사의 1인칭 단수(나는) 형태는?", choices: ["sei", "è", "sono", "siamo"], answer: 2 },
  { question: "c 다음에 e나 i가 오면 어떤 소리가 날까요?", choices: ["ㅋ", "ㅊ", "ㄱ", "ㅅ"], answer: 1 },
  { question: "gn이 들어간 gnocchi의 발음에 가장 가까운 것은?", choices: ["그노끼", "뇨끼", "지노끼", "고찌"], answer: 1 },
  { question: "'Vorrei un caffè'의 뜻은?", choices: ["커피가 있어요", "커피 한 잔 주세요", "커피를 좋아해요", "커피는 얼마예요?"], answer: 1 },
  { question: "'C'è' 다음에는 보통 어떤 명사가 올까요?", choices: ["복수 명사만", "단수 명사", "동사만", "형용사만"], answer: 1 },
  { question: "nonno와 nono의 차이를 만드는 이탈리아어 발음 규칙은?", choices: ["강세 위치", "이중자음", "모음 조화", "성조"], answer: 1 }
];

// 8. 짧은 문장 (책·교재 속 서술형 예문 — 대화체가 아닌 3인칭 묘사 문장으로 문법을 복습)
const sentences = [
  { it: "Il sole è caldo.", ko: "해는 따뜻하다." },
  { it: "Il gatto dorme sul letto.", ko: "고양이가 침대 위에서 잔다." },
  { it: "Maria legge un libro.", ko: "마리아는 책을 읽는다." },
  { it: "I bambini giocano in giardino.", ko: "아이들이 정원에서 논다." },
  { it: "Il cane è piccolo e nero.", ko: "그 개는 작고 검다." },
  { it: "Oggi il cielo è azzurro.", ko: "오늘 하늘은 파랗다." },
  { it: "Mia madre cucina la pasta.", ko: "우리 엄마는 파스타를 요리한다." },
  { it: "Gli studenti studiano l'italiano.", ko: "학생들은 이탈리아어를 공부한다." },
  { it: "Il treno arriva alle otto.", ko: "기차는 8시에 도착한다." },
  { it: "Marco lavora in un ufficio.", ko: "마르코는 사무실에서 일한다." },
  { it: "Il libro è sul tavolo.", ko: "책은 테이블 위에 있다." },
  { it: "La ragazza canta una bella canzone.", ko: "그 소녀는 아름다운 노래를 부른다." },
  { it: "Noi abitiamo in città.", ko: "우리는 도시에 산다." },
  { it: "L'inverno è freddo, l'estate è calda.", ko: "겨울은 춥고, 여름은 덥다." }
];
