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

  // 색깔
  { hanzi: "红色", pinyin: "hóng sè", tones: [2,4], meaning: "빨간색", category: "색깔",
    example: { zh: "我喜欢红色。", pinyin: "Wǒ xǐhuan hóngsè.", ko: "저는 빨간색을 좋아해요." } },
  { hanzi: "橙色", pinyin: "chéng sè", tones: [2,4], meaning: "주황색", category: "색깔" },
  { hanzi: "黄色", pinyin: "huáng sè", tones: [2,4], meaning: "노란색", category: "색깔" },
  { hanzi: "绿色", pinyin: "lǜ sè", tones: [4,4], meaning: "초록색", category: "색깔" },
  { hanzi: "蓝色", pinyin: "lán sè", tones: [2,4], meaning: "파란색", category: "색깔",
    example: { zh: "天空是蓝色的。", pinyin: "Tiānkōng shì lánsè de.", ko: "하늘은 파란색이에요." } },
  { hanzi: "紫色", pinyin: "zǐ sè", tones: [3,4], meaning: "보라색", category: "색깔" },
  { hanzi: "白色", pinyin: "bái sè", tones: [2,4], meaning: "흰색", category: "색깔" },
  { hanzi: "黑色", pinyin: "hēi sè", tones: [1,4], meaning: "검은색", category: "색깔" },

  // 동물
  { hanzi: "狗", pinyin: "gǒu", tones: [3], meaning: "개", category: "동물" },
  { hanzi: "猫", pinyin: "māo", tones: [1], meaning: "고양이", category: "동물",
    example: { zh: "我家有一只猫。", pinyin: "Wǒ jiā yǒu yì zhī māo.", ko: "우리 집에는 고양이가 한 마리 있어요." } },
  { hanzi: "鸟", pinyin: "niǎo", tones: [3], meaning: "새", category: "동물" },
  { hanzi: "鱼", pinyin: "yú", tones: [2], meaning: "물고기", category: "동물" },
  { hanzi: "马", pinyin: "mǎ", tones: [3], meaning: "말(동물)", category: "동물" },
  { hanzi: "牛", pinyin: "niú", tones: [2], meaning: "소", category: "동물" },
  { hanzi: "老虎", pinyin: "lǎo hǔ", tones: [3,3], meaning: "호랑이", category: "동물" },
  { hanzi: "熊猫", pinyin: "xióng māo", tones: [2,1], meaning: "판다", category: "동물",
    example: { zh: "熊猫很可爱。", pinyin: "Xióngmāo hěn kě'ài.", ko: "판다는 정말 귀여워요." } },

  // 시간
  { hanzi: "今天", pinyin: "jīn tiān", tones: [1,1], meaning: "오늘", category: "시간" },
  { hanzi: "明天", pinyin: "míng tiān", tones: [2,1], meaning: "내일", category: "시간",
    example: { zh: "明天见。", pinyin: "Míngtiān jiàn.", ko: "내일 봐요." } },
  { hanzi: "昨天", pinyin: "zuó tiān", tones: [2,1], meaning: "어제", category: "시간" },
  { hanzi: "星期一", pinyin: "xīng qī yī", tones: [1,1,1], meaning: "월요일", category: "시간" },
  { hanzi: "星期天", pinyin: "xīng qī tiān", tones: [1,1,1], meaning: "일요일", category: "시간" },
  { hanzi: "现在", pinyin: "xiàn zài", tones: [4,4], meaning: "지금", category: "시간" },
  { hanzi: "早上", pinyin: "zǎo shang", tones: [3,5], meaning: "아침", category: "시간" },
  { hanzi: "晚上", pinyin: "wǎn shang", tones: [3,5], meaning: "저녁", category: "시간",
    example: { zh: "晚上一起吃饭吧。", pinyin: "Wǎnshang yìqǐ chīfàn ba.", ko: "저녁에 같이 밥 먹어요." } },

  // 장소
  { hanzi: "学校", pinyin: "xué xiào", tones: [2,4], meaning: "학교", category: "장소" },
  { hanzi: "医院", pinyin: "yī yuàn", tones: [1,4], meaning: "병원", category: "장소" },
  { hanzi: "餐厅", pinyin: "cān tīng", tones: [1,1], meaning: "식당", category: "장소" },
  { hanzi: "商店", pinyin: "shāng diàn", tones: [1,4], meaning: "상점", category: "장소" },
  { hanzi: "家", pinyin: "jiā", tones: [1], meaning: "집", category: "장소" },
  { hanzi: "公司", pinyin: "gōng sī", tones: [1,1], meaning: "회사", category: "장소" },
  { hanzi: "机场", pinyin: "jī chǎng", tones: [1,3], meaning: "공항", category: "장소",
    example: { zh: "机场离这儿很远。", pinyin: "Jīchǎng lí zhèr hěn yuǎn.", ko: "공항은 여기서 멀어요." } },
  { hanzi: "车站", pinyin: "chē zhàn", tones: [1,4], meaning: "정류장/역", category: "장소" },
];

// 예문집(프레이즈북): 상황별 실생활 회화 문장
const CHINESE_PHRASES = [
  // 인사
  { category: "인사", zh: "你好吗?", pinyin: "Nǐ hǎo ma?", ko: "잘 지내요?" },
  { category: "인사", zh: "我很好,谢谢。", pinyin: "Wǒ hěn hǎo, xièxie.", ko: "저는 잘 지내요, 감사해요." },
  { category: "인사", zh: "很高兴认识你。", pinyin: "Hěn gāoxìng rènshi nǐ.", ko: "만나서 반가워요." },
  { category: "인사", zh: "好久不见!", pinyin: "Hǎojiǔ bújiàn!", ko: "오랜만이에요!" },
  { category: "인사", zh: "慢走。", pinyin: "Màn zǒu.", ko: "조심히 가세요." },

  // 쇼핑
  { category: "쇼핑", zh: "这个多少钱?", pinyin: "Zhège duōshao qián?", ko: "이거 얼마예요?" },
  { category: "쇼핑", zh: "太贵了。", pinyin: "Tài guì le.", ko: "너무 비싸요." },
  { category: "쇼핑", zh: "可以便宜一点吗?", pinyin: "Kěyǐ piányi yìdiǎn ma?", ko: "조금 싸게 해줄 수 있나요?" },
  { category: "쇼핑", zh: "我要这个。", pinyin: "Wǒ yào zhège.", ko: "이거 주세요." },
  { category: "쇼핑", zh: "可以刷卡吗?", pinyin: "Kěyǐ shuākǎ ma?", ko: "카드 되나요?" },

  // 식당
  { category: "식당", zh: "我要点菜。", pinyin: "Wǒ yào diǎncài.", ko: "주문할게요." },
  { category: "식당", zh: "这个好吃吗?", pinyin: "Zhège hǎochī ma?", ko: "이거 맛있어요?" },
  { category: "식당", zh: "不要辣。", pinyin: "Búyào là.", ko: "맵지 않게 해주세요." },
  { category: "식당", zh: "买单。", pinyin: "Mǎidān.", ko: "계산할게요." },
  { category: "식당", zh: "再来一碗。", pinyin: "Zài lái yì wǎn.", ko: "한 그릇 더 주세요." },

  // 길찾기
  { category: "길찾기", zh: "洗手间在哪儿?", pinyin: "Xǐshǒujiān zài nǎr?", ko: "화장실이 어디예요?" },
  { category: "길찾기", zh: "怎么走?", pinyin: "Zěnme zǒu?", ko: "어떻게 가요?" },
  { category: "길찾기", zh: "离这儿远吗?", pinyin: "Lí zhèr yuǎn ma?", ko: "여기서 멀어요?" },
  { category: "길찾기", zh: "一直走。", pinyin: "Yìzhí zǒu.", ko: "직진하세요." },
  { category: "길찾기", zh: "往左拐。", pinyin: "Wǎng zuǒ guǎi.", ko: "왼쪽으로 도세요." },

  // 감정표현
  { category: "감정표현", zh: "我很高兴。", pinyin: "Wǒ hěn gāoxìng.", ko: "저는 기뻐요." },
  { category: "감정표현", zh: "我有点儿累。", pinyin: "Wǒ yǒudiǎnr lèi.", ko: "저는 좀 피곤해요." },
  { category: "감정표현", zh: "别担心。", pinyin: "Bié dānxīn.", ko: "걱정하지 마세요." },
  { category: "감정표현", zh: "我很想你。", pinyin: "Wǒ hěn xiǎng nǐ.", ko: "네가 많이 보고 싶어." },
  { category: "감정표현", zh: "加油!", pinyin: "Jiāyóu!", ko: "힘내!" },
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
