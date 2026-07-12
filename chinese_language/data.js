// 중국어 단어 데이터
// hanzi: 한자, pinyin: 성조 병음(공백으로 음절 구분), tones: 음절별 성조(1~4, 5=경성)
// meaning: 한국어 뜻, category: 분류, example: 예문(선택) {zh, pinyin, ko}
const CHINESE_WORDS = [
  // 인사
  { hanzi: "你好", pinyin: "nǐ hǎo", tones: [3,3], meaning: "안녕하세요", category: "인사",
    example: { zh: "你好,很高兴认识你。", pinyin: "Nǐ hǎo, hěn gāoxìng rènshi nǐ.", ko: "안녕하세요, 만나서 반가워요." } },
  { hanzi: "谢谢", pinyin: "xiè xie", tones: [4,5], meaning: "감사합니다", category: "인사",
    example: { zh: "谢谢你的帮助。", pinyin: "Xièxie nǐ de bāngzhù.", ko: "도와줘서 고마워요." } },
  { hanzi: "不客气", pinyin: "bú kè qi", tones: [4,4,5], meaning: "천만에요", category: "인사",
    example: { zh: "不客气,应该的。", pinyin: "Bú kèqi, yīnggāi de.", ko: "천만에요, 당연히 해야죠." } },
  { hanzi: "再见", pinyin: "zài jiàn", tones: [4,4], meaning: "안녕히 가세요", category: "인사",
    example: { zh: "明天见,再见!", pinyin: "Míngtiān jiàn, zàijiàn!", ko: "내일 봐요, 안녕!" } },
  { hanzi: "对不起", pinyin: "duì bu qǐ", tones: [4,5,3], meaning: "미안합니다", category: "인사",
    example: { zh: "对不起,我迟到了。", pinyin: "Duìbuqǐ, wǒ chídào le.", ko: "죄송해요, 늦었어요." } },
  { hanzi: "没关系", pinyin: "méi guān xi", tones: [2,1,5], meaning: "괜찮아요", category: "인사",
    example: { zh: "没关系,不用担心。", pinyin: "Méiguānxi, búyòng dānxīn.", ko: "괜찮아요, 걱정하지 마세요." } },
  { hanzi: "早上好", pinyin: "zǎo shang hǎo", tones: [3,5,3], meaning: "좋은 아침이에요", category: "인사",
    example: { zh: "早上好,你吃早饭了吗?", pinyin: "Zǎoshang hǎo, nǐ chī zǎofàn le ma?", ko: "좋은 아침, 아침 먹었어요?" } },
  { hanzi: "晚安", pinyin: "wǎn ān", tones: [3,1], meaning: "잘 자요", category: "인사",
    example: { zh: "晚安,做个好梦。", pinyin: "Wǎn'ān, zuò ge hǎo mèng.", ko: "잘 자요, 좋은 꿈 꿔요." } },

  // 숫자
  { hanzi: "一", pinyin: "yī", tones: [1], meaning: "하나(1)", category: "숫자" },
  { hanzi: "二", pinyin: "èr", tones: [4], meaning: "둘(2)", category: "숫자" },
  { hanzi: "三", pinyin: "sān", tones: [1], meaning: "셋(3)", category: "숫자" },
  { hanzi: "四", pinyin: "sì", tones: [4], meaning: "넷(4)", category: "숫자" },
  { hanzi: "五", pinyin: "wǔ", tones: [3], meaning: "다섯(5)", category: "숫자" },
  { hanzi: "六", pinyin: "liù", tones: [4], meaning: "여섯(6)", category: "숫자" },
  { hanzi: "七", pinyin: "qī", tones: [1], meaning: "일곱(7)", category: "숫자" },
  { hanzi: "八", pinyin: "bā", tones: [1], meaning: "여덟(8)", category: "숫자" },
  { hanzi: "九", pinyin: "jiǔ", tones: [3], meaning: "아홉(9)", category: "숫자" },
  { hanzi: "十", pinyin: "shí", tones: [2], meaning: "열(10)", category: "숫자",
    example: { zh: "我今年十岁。", pinyin: "Wǒ jīnnián shí suì.", ko: "저는 올해 열 살이에요." } },

  // 가족
  { hanzi: "妈妈", pinyin: "mā ma", tones: [1,5], meaning: "엄마", category: "가족" },
  { hanzi: "爸爸", pinyin: "bà ba", tones: [4,5], meaning: "아빠", category: "가족" },
  { hanzi: "哥哥", pinyin: "gē ge", tones: [1,5], meaning: "형/오빠", category: "가족" },
  { hanzi: "姐姐", pinyin: "jiě jie", tones: [3,5], meaning: "누나/언니", category: "가족" },
  { hanzi: "弟弟", pinyin: "dì di", tones: [4,5], meaning: "남동생", category: "가족" },
  { hanzi: "妹妹", pinyin: "mèi mei", tones: [4,5], meaning: "여동생", category: "가족",
    example: { zh: "这是我妹妹。", pinyin: "Zhè shì wǒ mèimei.", ko: "이 사람은 제 여동생이에요." } },
  { hanzi: "朋友", pinyin: "péng you", tones: [2,5], meaning: "친구", category: "가족",
    example: { zh: "他是我的好朋友。", pinyin: "Tā shì wǒ de hǎo péngyou.", ko: "그는 제 좋은 친구예요." } },

  // 음식
  { hanzi: "米饭", pinyin: "mǐ fàn", tones: [3,4], meaning: "쌀밥", category: "음식" },
  { hanzi: "面条", pinyin: "miàn tiáo", tones: [4,2], meaning: "국수", category: "음식" },
  { hanzi: "茶", pinyin: "chá", tones: [2], meaning: "차(음료)", category: "음식" },
  { hanzi: "咖啡", pinyin: "kā fēi", tones: [1,1], meaning: "커피", category: "음식",
    example: { zh: "我想喝一杯咖啡。", pinyin: "Wǒ xiǎng hē yì bēi kāfēi.", ko: "커피 한 잔 마시고 싶어요." } },
  { hanzi: "水", pinyin: "shuǐ", tones: [3], meaning: "물", category: "음식" },
  { hanzi: "好吃", pinyin: "hǎo chī", tones: [3,1], meaning: "맛있다", category: "음식",
    example: { zh: "这个菜很好吃。", pinyin: "Zhège cài hěn hǎochī.", ko: "이 음식은 정말 맛있어요." } },

  // 일상 표현
  { hanzi: "我爱你", pinyin: "wǒ ài nǐ", tones: [3,4,3], meaning: "사랑해요", category: "일상표현",
    example: { zh: "我爱你,永远爱你。", pinyin: "Wǒ ài nǐ, yǒngyuǎn ài nǐ.", ko: "사랑해요, 영원히 사랑해요." } },
  { hanzi: "你叫什么名字", pinyin: "nǐ jiào shén me míng zi", tones: [3,4,2,5,2,5], meaning: "이름이 뭐예요?", category: "일상표현",
    example: { zh: "你好,你叫什么名字?", pinyin: "Nǐ hǎo, nǐ jiào shénme míngzi?", ko: "안녕하세요, 이름이 뭐예요?" } },
  { hanzi: "我是韩国人", pinyin: "wǒ shì hán guó rén", tones: [3,4,2,2,2], meaning: "저는 한국인이에요", category: "일상표현" },
  { hanzi: "多少钱", pinyin: "duō shao qián", tones: [1,5,2], meaning: "얼마예요?", category: "일상표현",
    example: { zh: "这个多少钱?", pinyin: "Zhège duōshao qián?", ko: "이거 얼마예요?" } },
  { hanzi: "我不知道", pinyin: "wǒ bù zhī dào", tones: [3,4,1,4], meaning: "잘 모르겠어요", category: "일상표현" },
  { hanzi: "现在几点", pinyin: "xiàn zài jǐ diǎn", tones: [4,4,3,3], meaning: "지금 몇 시예요?", category: "일상표현",
    example: { zh: "现在几点了?", pinyin: "Xiànzài jǐ diǎn le?", ko: "지금 몇 시예요?" } },
  { hanzi: "我喜欢你", pinyin: "wǒ xǐ huan nǐ", tones: [3,3,5,3], meaning: "나는 네가 좋아", category: "일상표현" },
  { hanzi: "加油", pinyin: "jiā yóu", tones: [1,2], meaning: "힘내(파이팅)", category: "일상표현",
    example: { zh: "加油,你可以的!", pinyin: "Jiāyóu, nǐ kěyǐ de!", ko: "힘내, 넌 할 수 있어!" } },
];

// 성조 색상 (교육용 관례): 1성 빨강 / 2성 주황 / 3성 초록 / 4성 파랑 / 경성(5) 회색
const TONE_COLORS = {
  1: "#e63946", // 1성: 평탄(높고 일정)
  2: "#f4a300", // 2성: 상승
  3: "#2a9d8f", // 3성: 내렸다 올라감
  4: "#4361ee", // 4성: 급격히 하강
  5: "#9aa0a6", // 경성: 짧고 가볍게
};
const TONE_DESC = {
  1: "1성 · 평탄하고 높게 유지",
  2: "2성 · 중간에서 위로 올라감",
  3: "3성 · 낮게 내려갔다가 다시 올라감",
  4: "4성 · 높은 곳에서 빠르게 내려감",
  5: "경성 · 짧고 가볍게 발음",
};
