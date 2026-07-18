// 라틴어 품사(기초 문법) 데이터
const GRAMMAR_SECTIONS = [
  {
    id: "noun", nameKo: "명사", nameLa: "Nomen", icon: "📦",
    intro: "라틴어 명사는 성(性)·수(數)·격(格)에 따라 형태가 바뀝니다. 어미만 보고도 문장 속 역할(주어인지 목적어인지 등)을 알 수 있는 것이 라틴어의 핵심 특징이에요.",
    points: [
      "성(Genus): 남성(masculinum) · 여성(femininum) · 중성(neutrum) 3가지",
      "수(Numerus): 단수(singularis) · 복수(pluralis) 2가지",
      "격(Casus): 6가지 — 주격(문장의 주어), 속격(~의, 소유), 여격(~에게, 간접목적어), 대격(~을/를, 직접목적어), 탈격(~으로/~에서, 수단·장소·원인), 호격(부를 때)",
      "명사는 어간에 따라 5가지 변화(declinatio)로 나뉘며, 변화마다 어미 패턴이 다릅니다.",
    ],
    tables: [
      {
        title: "1변화 — rosa, rosae (장미, 여성)",
        cols: ["격", "단수", "복수"],
        rows: [
          ["주격", "rosa", "rosae"],
          ["속격", "rosae", "rosārum"],
          ["여격", "rosae", "rosīs"],
          ["대격", "rosam", "rosās"],
          ["탈격", "rosā", "rosīs"],
          ["호격", "rosa", "rosae"],
        ],
      },
      {
        title: "2변화 — dominus, dominī (주인, 남성)",
        cols: ["격", "단수", "복수"],
        rows: [
          ["주격", "dominus", "dominī"],
          ["속격", "dominī", "dominōrum"],
          ["여격", "dominō", "dominīs"],
          ["대격", "dominum", "dominōs"],
          ["탈격", "dominō", "dominīs"],
          ["호격", "domine", "dominī"],
        ],
      },
      {
        title: "2변화(중성) — bellum, bellī (전쟁)",
        cols: ["격", "단수", "복수"],
        rows: [
          ["주격", "bellum", "bella"],
          ["속격", "bellī", "bellōrum"],
          ["여격", "bellō", "bellīs"],
          ["대격", "bellum", "bella"],
          ["탈격", "bellō", "bellīs"],
          ["호격", "bellum", "bella"],
        ],
      },
      {
        title: "3변화 — rēx, rēgis (왕, 남성)",
        cols: ["격", "단수", "복수"],
        rows: [
          ["주격", "rēx", "rēgēs"],
          ["속격", "rēgis", "rēgum"],
          ["여격", "rēgī", "rēgibus"],
          ["대격", "rēgem", "rēgēs"],
          ["탈격", "rēge", "rēgibus"],
          ["호격", "rēx", "rēgēs"],
        ],
      },
      {
        title: "4변화 — manus, manūs (손, 여성)",
        cols: ["격", "단수", "복수"],
        rows: [
          ["주격", "manus", "manūs"],
          ["속격", "manūs", "manuum"],
          ["여격", "manuī", "manibus"],
          ["대격", "manum", "manūs"],
          ["탈격", "manū", "manibus"],
          ["호격", "manus", "manūs"],
        ],
      },
      {
        title: "5변화 — rēs, reī (사물, 여성)",
        cols: ["격", "단수", "복수"],
        rows: [
          ["주격", "rēs", "rēs"],
          ["속격", "reī", "rērum"],
          ["여격", "reī", "rēbus"],
          ["대격", "rem", "rēs"],
          ["탈격", "rē", "rēbus"],
          ["호격", "rēs", "rēs"],
        ],
      },
    ],
  },

  {
    id: "verb", nameKo: "동사", nameLa: "Verbum", icon: "⚡",
    intro: "라틴어 동사는 인칭·수·시제·법·태에 따라 어미가 변합니다(활용, conjugatio). 어미 하나에 \"누가·언제·어떻게\"라는 정보가 모두 들어있는 셈이에요.",
    points: [
      "인칭(Persona) · 수(Numerus): 1/2/3인칭 × 단수/복수 = 6가지 형태",
      "시제(Tempus): 현재 · 미완료 · 미래 · 완료 · 과거완료 · 미래완료 6가지",
      "법(Modus): 직설법(사실) · 접속법(가정·바람) · 명령법(명령)",
      "태(Vōx): 능동태(~한다) · 수동태(~되다)",
      "동사는 어간 끝 모음에 따라 4가지 활용(conjugatio)으로 나뉩니다.",
    ],
    tables: [
      {
        title: "1활용 — amō, amāre (사랑하다) · 현재 직설법 능동",
        cols: ["인칭", "단수", "복수"],
        rows: [
          ["1인칭", "amō (나는 사랑한다)", "amāmus (우리는 사랑한다)"],
          ["2인칭", "amās (너는 사랑한다)", "amātis (너희는 사랑한다)"],
          ["3인칭", "amat (그는 사랑한다)", "amant (그들은 사랑한다)"],
        ],
      },
      {
        title: "2활용 — videō, vidēre (보다) · 현재 직설법 능동",
        cols: ["인칭", "단수", "복수"],
        rows: [
          ["1인칭", "videō", "vidēmus"],
          ["2인칭", "vidēs", "vidētis"],
          ["3인칭", "videt", "vident"],
        ],
      },
      {
        title: "3활용 — mittō, mittere (보내다) · 현재 직설법 능동",
        cols: ["인칭", "단수", "복수"],
        rows: [
          ["1인칭", "mittō", "mittimus"],
          ["2인칭", "mittis", "mittitis"],
          ["3인칭", "mittit", "mittunt"],
        ],
      },
      {
        title: "4활용 — audiō, audīre (듣다) · 현재 직설법 능동",
        cols: ["인칭", "단수", "복수"],
        rows: [
          ["1인칭", "audiō", "audīmus"],
          ["2인칭", "audīs", "audītis"],
          ["3인칭", "audit", "audiunt"],
        ],
      },
      {
        title: "sum, esse (~이다) · 불규칙 be동사, 현재 직설법",
        cols: ["인칭", "단수", "복수"],
        rows: [
          ["1인칭", "sum (나는 ~이다)", "sumus (우리는 ~이다)"],
          ["2인칭", "es (너는 ~이다)", "estis (너희는 ~이다)"],
          ["3인칭", "est (그는 ~이다)", "sunt (그들은 ~이다)"],
        ],
      },
    ],
  },

  {
    id: "adjective", nameKo: "형용사", nameLa: "Adiectīvum", icon: "🎨",
    intro: "형용사는 꾸며주는 명사와 성·수·격을 일치시켜야 합니다. 명사처럼 어미가 변화하며, 크게 두 그룹으로 나뉩니다.",
    points: [
      "1·2변화형 형용사: 남성은 2변화(-us), 여성은 1변화(-a), 중성은 2변화(-um) 어미를 따름 (예: bonus, bona, bonum = 좋은)",
      "3변화형 형용사: 성에 관계없이 3변화 어미를 따름 (예: omnis, omne = 모든)",
      "형용사는 항상 꾸며주는 명사와 성·수·격이 일치해야 합니다 (예: rosa bona = 좋은 장미, 둘 다 여성 단수 주격)",
      "비교급/최상급도 존재: bonus(좋은) → melior(더 좋은) → optimus(가장 좋은)",
    ],
    tables: [
      {
        title: "bonus, -a, -um (좋은) · 단수형",
        cols: ["격", "남성", "여성", "중성"],
        rows: [
          ["주격", "bonus", "bona", "bonum"],
          ["속격", "bonī", "bonae", "bonī"],
          ["여격", "bonō", "bonae", "bonō"],
          ["대격", "bonum", "bonam", "bonum"],
          ["탈격", "bonō", "bonā", "bonō"],
        ],
      },
      {
        title: "omnis, omne (모든) · 3변화형, 단수",
        cols: ["격", "남성/여성", "중성"],
        rows: [
          ["주격", "omnis", "omne"],
          ["속격", "omnis", "omnis"],
          ["여격", "omnī", "omnī"],
          ["대격", "omnem", "omne"],
          ["탈격", "omnī", "omnī"],
        ],
      },
    ],
  },

  {
    id: "pronoun", nameKo: "대명사", nameLa: "Prōnōmen", icon: "👤",
    intro: "명사를 대신하는 말입니다. 인칭대명사·지시대명사·소유대명사 등 종류가 다양하고, 명사처럼 격변화를 합니다.",
    points: [
      "인칭대명사: ego(나) · tū(너) · is/ea/id(그/그녀/그것)",
      "소유대명사: meus(나의) · tuus(너의) · suus(자신의) — 형용사처럼 명사와 성·수·격 일치",
      "지시대명사: hic, haec, hoc(이것) · ille, illa, illud(저것)",
      "의문대명사: quis?(누구?) · quid?(무엇?)",
    ],
    tables: [
      {
        title: "인칭대명사 ego(나) / tū(너) — 격변화",
        cols: ["격", "나(1인칭)", "너(2인칭)"],
        rows: [
          ["주격", "ego", "tū"],
          ["속격", "meī", "tuī"],
          ["여격", "mihi", "tibi"],
          ["대격", "mē", "tē"],
          ["탈격", "mē", "tē"],
        ],
      },
    ],
  },

  {
    id: "adverb", nameKo: "부사", nameLa: "Adverbium", icon: "🏃",
    intro: "동사·형용사·다른 부사를 꾸며주는 말로, 형태가 변하지 않는(불변화) 품사입니다.",
    points: [
      "형용사에서 부사를 만드는 규칙: 1·2변화 형용사는 어간 + -ē (예: lātus→lātē, 넓게)",
      "3변화 형용사는 어간 + -ter (예: fortis→fortiter, 용감하게)",
      "독립적인 부사도 많음: semper(항상) · numquam(결코 ~않다) · hodiē(오늘) · nunc(지금)",
    ],
    tables: [],
  },

  {
    id: "preposition", nameKo: "전치사", nameLa: "Praepositiō", icon: "🧭",
    intro: "명사(주로 대격 또는 탈격)와 함께 쓰여 위치·방향·수단 등을 나타냅니다. 라틴어 전치사는 어떤 격을 지배하는지가 정해져 있어요.",
    points: [
      "대격 지배 전치사: ad(~을 향해) · in(~안으로, 방향) · per(~을 통해) · post(~후에)",
      "탈격 지배 전치사: ā/ab(~로부터) · cum(~와 함께) · dē(~에 관하여) · in(~안에, 정지) · ē/ex(~로부터/~밖으로)",
      "같은 전치사 in이라도 대격과 함께면 \"~안으로(이동)\", 탈격과 함께면 \"~안에(정지)\"로 뜻이 달라집니다.",
    ],
    tables: [],
  },

  {
    id: "conjunction", nameKo: "접속사", nameLa: "Coniunctiō", icon: "🔗",
    intro: "단어와 단어, 문장과 문장을 이어주는 말입니다.",
    points: [
      "등위접속사: et(그리고) · sed(그러나) · aut(또는) · nam(왜냐하면)",
      "종속접속사: quod/quia(~때문에) · sī(만약 ~라면) · ut(~하도록, ~해서) · cum(~할 때, ~이므로)",
    ],
    tables: [],
  },

  {
    id: "interjection", nameKo: "감탄사", nameLa: "Interiectiō", icon: "❗",
    intro: "감정을 즉각적으로 표현하는 말로, 문법적으로 문장에 종속되지 않습니다.",
    points: [
      "ō (오!, 감탄이나 부름) · eheu(아아, 슬픔) · ecce(보라, 여기) · vae(화 있을진저, 경고/한탄)",
    ],
    tables: [],
  },
];
