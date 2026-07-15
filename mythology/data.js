// 그리스·로마 신화 데이터: 12 티탄 + 12 올림포스 신
// 이미지 출처: Wikimedia Commons (고대 조각/부조/모자이크/고전 회화, 저작권 만료 및 CC 이미지)
const MYTH_GODS = [
  // ── 12 티탄 ──
  { id: "cronus", group: "titan", nameKo: "크로노스", nameEn: "Cronus", romanName: "사투르누스(Saturn)",
    epithet: "시간과 수확의 신",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Rhea_handing_a_swaddled_stone_to_Cronus%2C_Attic_terracotta_pelike%2C_c._460%E2%80%93450_BC%2C_Met_06.1021.144.jpg_%28cropped%29.jpg/500px-Rhea_handing_a_swaddled_stone_to_Cronus%2C_Attic_terracotta_pelike%2C_c._460%E2%80%93450_BC%2C_Met_06.1021.144.jpg_%28cropped%29.jpg",
    imageCredit: "아티카 적화식 도기, 기원전 460년경 (메트로폴리탄 미술관)",
    story: "우라노스(하늘)와 가이아(대지) 사이에서 태어난 막내 티탄으로, 아버지의 폭정에 맞서 낫으로 거세시키고 티탄족의 왕좌에 올랐다. 그의 통치 시기는 인간에게 황금시대로 기억되었지만, 정작 크로노스 자신은 \"자식에게 왕좌를 빼앗긴다\"는 예언이 두려워 태어나는 자식들을 차례로 삼켜버렸다. 그러나 아내 레아가 막내아들 제우스를 몰래 크레타 섬에 숨기고 대신 강보에 싼 돌덩이를 건네면서 운명은 뒤바뀐다. 훗날 장성한 제우스는 형제자매를 모두 구해내고, 크로노스를 타르타로스에 가두며 올림포스 시대를 연다." },

  { id: "rhea", group: "titan", nameKo: "레아", nameEn: "Rhea", romanName: "옵스(Ops)",
    epithet: "신들의 어머니",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/08/Rhea_MKL1888.png",
    imageCredit: "19세기 백과사전 삽화 (Meyers Konversations-Lexikon, 1888)",
    story: "크로노스의 누이이자 아내로, \"신들의 어머니\"라 불리는 티탄이다. 헤스티아, 데메테르, 헤라, 하데스, 포세이돈, 제우스까지 훗날 올림포스를 이끌 여섯 남매를 모두 낳았다. 남편 크로노스가 자식들을 차례로 삼켜버리자, 막내 제우스만은 지키기 위해 크레타의 동굴에 몰래 숨기고 강보에 돌을 싸서 대신 건네는 지혜를 발휘했다. 이 선택이 훗날 올림포스 신들의 승리로 이어지게 된다." },

  { id: "oceanus", group: "titan", nameKo: "오케아노스", nameEn: "Oceanus", romanName: "오케아누스(Oceanus)",
    epithet: "대양의 신",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Head_of_Oceanus%2C_found_at_Hadrian%27s_Villa%2C_Vatican_Museums_%2812014574136%29.jpg/500px-Head_of_Oceanus%2C_found_at_Hadrian%27s_Villa%2C_Vatican_Museums_%2812014574136%29.jpg",
    imageCredit: "로마 시대 대리석 두상, 하드리아누스 별장 출토 (바티칸 박물관)",
    story: "세상을 둥글게 감싸고 흐른다고 여겨진 거대한 강이자 대양 그 자체를 의인화한 티탄이다. 우라노스와 가이아의 장남으로, 누이이자 아내인 테티스와 함께 헤아릴 수 없이 많은 자식을 낳았는데, 그중 3천 명의 오케아니데스(바다 요정)와 세상의 모든 강을 다스리는 강의 신들이 포함된다. 다른 티탄들과 달리 크로노스의 반란이나 티타노마키아(신들의 전쟁)에 적극적으로 가담하지 않고 중립을 지켰다고 전해진다. 고대 그리스인에게 그는 세상의 끝, 즉 알려진 세계의 경계 그 자체였다." },

  { id: "tethys", group: "titan", nameKo: "테티스", nameEn: "Tethys", romanName: "테티스(Tethys)",
    epithet: "민물의 여신",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/60/Tethys_83d40m_AntakyaMuseum_Turkey.JPG",
    imageCredit: "로마 시대 모자이크, 안타키아 박물관(튀르키예)",
    story: "오케아노스의 누이이자 아내로, 맑은 물과 샘물의 근원이 되는 티탄 여신이다. 남편과 함께 세상의 모든 강과 3천 명의 바다 요정 오케아니데스를 낳아 \"생명을 길러내는 물\"의 어머니로 여겨졌다. 독자적인 신앙이나 신전은 거의 남아있지 않지만, 로마 시대에는 목욕탕이나 저수조를 장식하는 모자이크에 즐겨 그려지며 물의 풍요로움을 상징했다. 이름이 비슷한 바다의 님프 테티스(아킬레우스의 어머니)와 자주 혼동되지만 서로 다른 신격이다." },

  { id: "hyperion", group: "titan", nameKo: "히페리온", nameEn: "Hyperion", romanName: "히페리온(Hyperion)",
    epithet: "빛의 감시자",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Cornelis_Cornelisz._van_Haarlem_-_The_Fall_of_the_Titans_-_Google_Art_Project.jpg/960px-Cornelis_Cornelisz._van_Haarlem_-_The_Fall_of_the_Titans_-_Google_Art_Project.jpg",
    imageCredit: "코르넬리스 판 하를럼, <티탄의 몰락>, 1588-90 (독자적 도상이 남아있지 않아 티탄 전체를 그린 작품으로 대신함)",
    story: "\"높은 곳에서 바라보는 자\"라는 뜻의 이름을 가진 빛의 티탄으로, 누이이자 아내인 테이아와 함께 태양신 헬리오스, 달의 여신 셀레네, 새벽의 여신 에오스를 낳았다. 하늘을 가로지르는 천체의 운행을 관장하는 존재로 여겨졌으며, 훗날 아들 헬리오스에게 태양을 이끄는 역할을 물려주었다. 그의 이름은 훗날 토성의 위성 이름으로도 채택될 만큼 \"빛나는 하늘\"의 상징으로 기억된다." },

  { id: "theia", group: "titan", nameKo: "테이아", nameEn: "Theia", romanName: "테이아(Theia)",
    epithet: "광채의 여신",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Altar_P%C3%A9rgamo_Theia_02.JPG/500px-Altar_P%C3%A9rgamo_Theia_02.JPG",
    imageCredit: "페르가몬 대제단 부조 (베를린 페르가몬 박물관)",
    story: "\"에우리파에사(널리 빛나는 자)\"라고도 불리는 티탄 여신으로, 눈으로 보는 능력과 하늘의 광채를 관장했다. 오라비 히페리온과 결합해 태양신 헬리오스, 달의 여신 셀레네, 새벽의 여신 에오스를 낳으며 하늘의 빛을 상징하는 삼남매의 어머니가 되었다. 금과 은, 보석이 반짝이는 광택 역시 그녀가 부여한 광채에서 비롯된다고 여겨졌다." },

  { id: "coeus", group: "titan", nameKo: "코이오스", nameEn: "Coeus", romanName: "코이오스(Coeus)",
    epithet: "지성과 신탁의 신",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Cornelis_Cornelisz._van_Haarlem_-_The_Fall_of_the_Titans_-_Google_Art_Project.jpg/960px-Cornelis_Cornelisz._van_Haarlem_-_The_Fall_of_the_Titans_-_Google_Art_Project.jpg",
    imageCredit: "코르넬리스 판 하를럼, <티탄의 몰락>, 1588-90 (독자적 도상이 남아있지 않아 티탄 전체를 그린 작품으로 대신함)",
    story: "\"폴로스(축)\"라고도 불리며, 천구의 축과 지혜로운 질문을 상징하는 티탄이다. 누이이자 아내인 포이베와 결합해 레토와 아스테리아를 낳았는데, 레토는 훗날 제우스와의 사이에서 아폴론과 아르테미스 남매를 낳게 된다. 즉 코이오스는 올림포스의 주요 신 두 명의 외할아버지가 되는 셈이다. 열두 티탄 중에서도 가장 베일에 싸인 존재로 남아있다." },

  { id: "phoebe", group: "titan", nameKo: "포이베", nameEn: "Phoebe", romanName: "포이베(Phoebe)",
    epithet: "예언의 여신",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Altar_P%C3%A9rgamo_Phoibe_01.JPG/500px-Altar_P%C3%A9rgamo_Phoibe_01.JPG",
    imageCredit: "페르가몬 대제단 부조 (베를린 페르가몬 박물관)",
    story: "\"빛나는 자\"라는 뜻의 이름을 가진 티탄 여신으로, 예언과 신탁의 지혜를 상징한다. 오라비 코이오스와의 사이에서 레토와 아스테리아를 낳았으며, 특히 델포이의 신탁소를 손자인 아폴론에게 \"탄생 선물\"로 물려주었다는 전승으로 유명하다. 이 덕분에 아폴론의 별칭 \"포이보스(Phoebus)\" 역시 할머니 포이베의 이름에서 유래했다고 전해진다." },

  { id: "crius", group: "titan", nameKo: "크리오스", nameEn: "Crius", romanName: "크리오스(Crius)",
    epithet: "별자리의 신",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Cornelis_Cornelisz._van_Haarlem_-_The_Fall_of_the_Titans_-_Google_Art_Project.jpg/960px-Cornelis_Cornelisz._van_Haarlem_-_The_Fall_of_the_Titans_-_Google_Art_Project.jpg",
    imageCredit: "코르넬리스 판 하를럼, <티탄의 몰락>, 1588-90 (독자적 도상이 남아있지 않아 티탄 전체를 그린 작품으로 대신함)",
    story: "열두 티탄 중에서도 가장 개성이 드러나지 않는 신으로, 하늘의 별자리와 계절의 척도를 상징한다고 여겨진다. 바다의 여신 에우리비아와 결혼해 아스트라이오스(별의 신), 팔라스, 페르세스를 낳았으며, 이 자손들을 통해 별과 힘, 파괴를 상징하는 개념들이 이어진다. 그를 단독으로 묘사한 고대 미술품은 거의 발견되지 않아, 이름과 계보 정도로만 기억되는 신비로운 티탄이다." },

  { id: "themis", group: "titan", nameKo: "테미스", nameEn: "Themis", romanName: "테미스(Themis)",
    epithet: "율법과 정의의 여신",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/50/0029MAN-Themis.jpg",
    imageCredit: "고대 대리석 조각상 (아테네 국립고고학박물관)",
    story: "신들의 질서와 관습, 정의를 관장하는 티탄 여신으로, 델포이의 신탁을 아폴론에게 넘기기 전 최초로 주관했던 신 중 하나로 전해진다. 티타노마키아 이후에도 올림포스에서 존경받는 자리를 유지했으며, 제우스의 두 번째 아내가 되어 계절의 여신 호라이와 운명의 여신 모이라이를 낳았다. 그녀가 들고 있는 저울은 오늘날까지도 \"정의의 여신(Lady Justice)\"이라는 상징으로 서양 법정 곳곳에 남아있다." },

  { id: "iapetus", group: "titan", nameKo: "이아페토스", nameEn: "Iapetus", romanName: "이아페투스(Iapetus)",
    epithet: "인류의 조상신",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Cornelis_Cornelisz._van_Haarlem_-_The_Fall_of_the_Titans_-_Google_Art_Project.jpg/960px-Cornelis_Cornelisz._van_Haarlem_-_The_Fall_of_the_Titans_-_Google_Art_Project.jpg",
    imageCredit: "코르넬리스 판 하를럼, <티탄의 몰락>, 1588-90 (독자적 도상이 남아있지 않아 티탄 전체를 그린 작품으로 대신함)",
    story: "\"서쪽의 티탄\"이라고도 불리며, 유한한 생명과 기술, 장인정신을 상징하는 신이다. 그의 아들들인 아틀라스(하늘을 떠받치는 벌을 받은 티탄), 프로메테우스(인간에게 불을 전해준 은인), 에피메테우스가 그리스 신화 속 인류의 기원과 깊이 얽혀 있어, 이아페토스는 사실상 \"인류의 신화적 조상\"으로 여겨진다. 정작 그를 단독으로 그린 고대 미술 작품은 거의 남아있지 않지만, 아들 프로메테우스의 이야기를 통해 그 존재감이 오늘날까지 전해진다." },

  { id: "mnemosyne", group: "titan", nameKo: "므네모시네", nameEn: "Mnemosyne", romanName: "모네타(Moneta)",
    epithet: "기억의 여신",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Mosa%C3%AFque_murale_Mn%C3%A9mosyne.jpg/500px-Mosa%C3%AFque_murale_Mn%C3%A9mosyne.jpg",
    imageCredit: "고대 벽 모자이크",
    story: "\"기억\"이라는 단어(mnemonic의 어원)를 그대로 신격화한 티탄 여신이다. 제우스와 아흐레 밤을 함께 보내 아홉 명의 무사이(뮤즈)를 낳았으며, 이들은 각각 시, 음악, 역사, 천문학 등 인간 문명의 지적 유산을 관장하게 된다. 문자가 흔치 않던 고대 그리스에서는 시를 암송하기 전 므네모시네에게 먼저 기도를 올렸을 만큼, 구전 문화의 수호자로 여겨졌다." },

  // ── 12 올림포스 신 ──
  { id: "zeus", group: "olympian", nameKo: "제우스", nameEn: "Zeus", romanName: "유피테르(Jupiter)",
    epithet: "신들의 왕",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Zeus_Otricoli_Pio-Clementino_Inv257.jpg/500px-Zeus_Otricoli_Pio-Clementino_Inv257.jpg",
    imageCredit: "\"오트리콜리의 제우스\" 흉상 (바티칸 박물관)",
    story: "크로노스와 레아의 막내아들로, 아버지에게 삼켜질 뻔한 위기를 어머니의 지혜 덕분에 피하고 크레타 섬에서 몰래 자라났다. 장성한 뒤 형제자매를 모두 구해내고 티탄들과의 대전쟁, 티타노마키아를 승리로 이끌며 올림포스의 새로운 왕좌에 올랐다. 하늘과 천둥, 번개를 다스리며 독수리와 참나무를 상징으로 삼고, 정의와 손님 접대, 맹세의 수호자 역할도 겸했다. 수많은 신과 인간 여성 사이에서 아테나, 아폴론, 아르테미스, 헤라클레스 등 무수한 자손을 낳아 그리스 신화 대부분의 계보가 그로부터 뻗어나간다." },

  { id: "hera", group: "olympian", nameKo: "헤라", nameEn: "Hera", romanName: "유노(Juno)",
    epithet: "가정의 여신",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Hera_Campana_Louvre_Ma2283.jpg/500px-Hera_Campana_Louvre_Ma2283.jpg",
    imageCredit: "\"헤라 캄파나\" 대리석 두상 (루브르 박물관)",
    story: "크로노스와 레아의 딸로 태어나 훗날 남매이자 남편인 제우스와 함께 올림포스를 다스리는 여왕이 되었다. 결혼과 여성, 가정을 수호하는 여신으로 신성한 결혼 서약과 가족의 질서를 상징하며, 공작새와 왕관, 석류를 그녀의 상징으로 삼는다. 그러나 남편 제우스가 끊임없이 다른 여신과 인간 여성에게 한눈을 팔면서, 헤라는 신화 속에서 가장 유명한 \"질투하는 아내\"로도 그려진다. 제우스의 연인이었던 이오를 암소로 만들어 괴롭히거나, 영웅 헤라클레스(제우스와 인간 여성 알크메네의 아들)를 평생 방해하는 등, 가정을 지키려는 강한 의지가 때로는 냉혹한 복수로 표출되기도 했다. 오늘날 6월을 뜻하는 영어 단어 \"June\"도 그녀의 이름에서 유래했다고 전해진다." },

  { id: "poseidon", group: "olympian", nameKo: "포세이돈", nameEn: "Poseidon", romanName: "넵투누스(Neptune)",
    epithet: "바다의 지배자",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Statue_of_Poseidon_NAMA_235_%28DerHexer%29%2C_part_2.JPG/500px-Statue_of_Poseidon_NAMA_235_%28DerHexer%29%2C_part_2.JPG",
    imageCredit: "고대 청동/대리석 조각상 (아테네 국립고고학박물관)",
    story: "제우스, 하데스와 함께 크로노스를 무찌른 삼형제 중 한 명으로, 제비뽑기를 통해 바다를 다스리는 몫을 얻었다. 삼지창을 휘두르며 폭풍과 지진을 일으키는 \"대지를 흔드는 자\"로 불렸고, 말(馬)을 만들어낸 신으로도 전해져 뱃사람과 기수들 모두의 수호신이었다. 아테네의 수호신 자리를 두고 아테나와 경쟁했다가, 짠물 샘을 선물한 포세이돈 대신 올리브 나무를 선물한 아테나가 시민들의 선택을 받아 패배한 일화로도 유명하다." },

  { id: "demeter", group: "olympian", nameKo: "데메테르", nameEn: "Demeter", romanName: "케레스(Ceres)",
    epithet: "대지와 곡물의 여신",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Demeter_Altemps_Inv8546.jpg/500px-Demeter_Altemps_Inv8546.jpg",
    imageCredit: "고대 대리석 조각상 (로마 팔라초 알템프스)",
    story: "크로노스와 레아의 딸로, 대지의 풍요와 곡식·수확을 관장하는 여신이다. 하나뿐인 딸 페르세포네가 저승의 신 하데스에게 납치되자 슬픔에 잠겨 온 대지를 시들게 만들었고, 결국 제우스의 중재로 페르세포네가 한 해의 일부만 지상에서 지내는 것으로 합의하며 사계절이 생겨났다는 이야기로 유명하다. 엘레우시스 밀교라는 고대의 신비 종교 의식 역시 그녀와 딸의 이야기를 중심으로 치러졌다. 곡물을 뜻하는 영어 단어 \"cereal\"이 로마 이름 케레스에서 유래했다." },

  { id: "athena", group: "olympian", nameKo: "아테나", nameEn: "Athena", romanName: "미네르바(Minerva)",
    epithet: "지혜와 전략의 여신",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Mattei_Athena_Louvre_Ma530_n2.jpg/500px-Mattei_Athena_Louvre_Ma530_n2.jpg",
    imageCredit: "\"마테이 아테나\" 조각상 (루브르 박물관)",
    story: "제우스가 첫 아내 메티스를 통째로 삼켜버린 뒤, 그의 머리에서 완전 무장한 채로 태어났다는 독특한 탄생 신화를 가진 여신이다. 지혜와 전략적인 전쟁을 관장하며, 아레스의 무모한 폭력성과 대비되는 \"이성적인 전쟁의 신\"으로 여겨졌다. 아테네의 수호신 자리를 두고 포세이돈과 경쟁할 때 올리브 나무를 선물해 시민들의 마음을 얻었고, 그 결과 도시의 이름도 그녀를 따 \"아테네\"가 되었다고 전해진다. 부엉이와 올리브 나무, 아이기스(방패)를 상징으로 삼는다." },

  { id: "apollo", group: "olympian", nameKo: "아폴론", nameEn: "Apollo", romanName: "아폴로(Apollo, 동일)",
    epithet: "빛과 예언의 신",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Italy-3104_-_Apollo_%285378415112%29.jpg/500px-Italy-3104_-_Apollo_%285378415112%29.jpg",
    imageCredit: "고대 대리석 조각상 (이탈리아)",
    story: "제우스와 티탄 여신 레토의 아들로, 쌍둥이 누이 아르테미스와 함께 태어났다. 태양과 빛, 예언, 의술, 음악과 시를 두루 관장하는 다재다능한 신으로, 델포이의 신탁소를 다스리며 인간에게 신의 뜻을 전했다. 리라를 연주하는 모습으로 자주 그려지며, 젊음과 이상적인 남성미를 상징하는 \"쿠로스\" 조각상의 전형이 되기도 했다. 그리스와 로마 신화 모두에서 이름이 같은 유일한 올림포스 신이기도 하다." },

  { id: "artemis", group: "olympian", nameKo: "아르테미스", nameEn: "Artemis", romanName: "디아나(Diana)",
    epithet: "사냥의 여신",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Diane_de_Versailles_-_Mus%C3%A9e_du_Louvre_AGER_Ma_589.jpg/500px-Diane_de_Versailles_-_Mus%C3%A9e_du_Louvre_AGER_Ma_589.jpg",
    imageCredit: "\"베르사유의 디아나\" 조각상 (루브르 박물관)",
    story: "아폴론의 쌍둥이 누이로, 태어나자마자 어머니 레토가 남동생 아폴론을 낳는 것을 도왔다는 전승 때문에 출산의 수호신으로도 여겨졌다. 활과 화살을 든 채 사슴과 님프들을 거느리고 숲과 야생을 누비는 사냥의 여신으로, 순결과 독립을 상징하며 결혼을 거부하고 평생 처녀신으로 남았다. 어린 소녀들과 사냥꾼들의 수호자 역할도 겸했다." },

  { id: "ares", group: "olympian", nameKo: "아레스", nameEn: "Ares", romanName: "마르스(Mars)",
    epithet: "전쟁의 신",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Ares_Canope_Villa_Adriana_b.jpg/500px-Ares_Canope_Villa_Adriana_b.jpg",
    imageCredit: "로마 시대 조각상, 하드리아누스 별장 카노푸스 (이탈리아)",
    story: "제우스와 헤라 사이에서 태어난 아들로, 폭력적이고 저돌적인 전쟁의 화신이다. 전략적인 아테나와 달리 피와 혼란 그 자체를 즐기는 성향 때문에 다른 올림포스 신들에게도 그다지 환영받지 못하는 존재였다. 미의 여신 아프로디테와 은밀한 관계를 맺다가, 그녀의 남편인 대장장이 신 헤파이스토스가 쳐놓은 보이지 않는 그물에 걸려 신들 앞에서 망신을 당한 일화로 특히 유명하다. 로마에서는 마르스로 불리며, 그리스에서보다 훨씬 존경받는 국가적 수호신으로 여겨졌다." },

  { id: "aphrodite", group: "olympian", nameKo: "아프로디테", nameEn: "Aphrodite", romanName: "베누스(Venus)",
    epithet: "사랑과 미의 여신",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Cnidus_Aphrodite_Altemps_Inv8619.jpg/500px-Cnidus_Aphrodite_Altemps_Inv8619.jpg",
    imageCredit: "\"크니도스의 아프로디테\" 로마 시대 복제상 (팔라초 알템프스)",
    story: "헤시오도스에 따르면 우라노스가 거세될 때 바다에 떨어진 살점에서 태어난 물거품의 여신이며, 호메로스의 전승에서는 제우스와 디오네의 딸로 전해진다. 사랑과 아름다움, 욕망을 관장하며 조가비와 도금양, 장미, 비둘기를 상징으로 삼는다. 장인의 신 헤파이스토스와 결혼했지만 전쟁의 신 아레스와의 밀회로 더 유명하며, 트로이 전쟁의 발단이 된 \"가장 아름다운 여신에게\" 황금 사과 사건의 주인공이기도 하다." },

  { id: "hephaestus", group: "olympian", nameKo: "헤파이스토스", nameEn: "Hephaestus", romanName: "불카누스(Vulcan)",
    epithet: "불과 대장간의 신",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Hephaistos_Thetis_at_Kylix_by_the_Foundry_Painter_Antikensammlung_Berlin_F2294.jpg/500px-Hephaistos_Thetis_at_Kylix_by_the_Foundry_Painter_Antikensammlung_Berlin_F2294.jpg",
    imageCredit: "아티카 적화식 킬릭스(잔), 파운드리 화가 작 (베를린 고대미술박물관)",
    story: "헤라가 남편 제우스 없이 홀로 낳았다는 전승과, 제우스와 헤라 사이의 아들이라는 전승이 함께 전해지는 신이다. 태어날 때부터 다리를 절었다는 이유로 어머니 헤라(혹은 아버지 제우스)에게 올림포스산에서 내던져졌지만, 오히려 이 시련을 딛고 신들 중 최고의 장인이 되었다. 제우스의 번개창, 아킬레우스의 갑옷 등 신화 속 명품들을 두루 만들어낸 대장장이의 신이며, 불과 화산, 금속 세공을 관장한다. 미의 여신 아프로디테를 아내로 맞았으나 그녀의 외도로 마음고생을 하기도 했다." },

  { id: "hermes", group: "olympian", nameKo: "헤르메스", nameEn: "Hermes", romanName: "메르쿠리우스(Mercury)",
    epithet: "전령의 신",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Hermes_Ingenui_Pio-Clementino_Inv544.jpg/500px-Hermes_Ingenui_Pio-Clementino_Inv544.jpg",
    imageCredit: "\"헤르메스 인제누이\" 조각상 (바티칸 박물관)",
    story: "제우스와 님프 마이아 사이에서 태어난 아들로, 태어난 지 하루 만에 아폴론의 소 떼를 훔칠 만큼 영특하고 재빠른 신이었다. 날개 달린 신발(탈라리아)을 신고 지팡이 카두케우스를 든 채 신들의 뜻을 전하는 전령이자, 여행자와 상인, 심지어 도둑들의 수호신으로도 여겨졌다. 죽은 자의 영혼을 저승으로 인도하는 \"프시코폼포스(영혼의 안내자)\" 역할도 맡아, 삶과 죽음의 경계를 자유로이 넘나드는 유일한 올림포스 신이었다." },

  { id: "hestia", group: "olympian", nameKo: "헤스티아", nameEn: "Hestia", romanName: "베스타(Vesta)",
    epithet: "화로의 여신",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Hestia_Giustiniani.jpg",
    imageCredit: "\"헤스티아 주스티니아니\" 조각상",
    story: "크로노스와 레아의 첫째 딸로, 열두 올림포스 신 중 가장 맏이이면서도 가장 조용한 신이다. 가정의 화로와 공동체의 중심을 지키는 처녀신으로, 아폴론과 포세이돈 모두에게 청혼을 받았지만 영원히 독신으로 남겠다고 맹세했다. 신들 사이의 다툼이 잦아지자 스스로 자리를 술의 신 디오니소스에게 양보했다는 전승이 있어, 훗날 \"12 올림포스 신\" 명단에 헤스티아 대신 디오니소스가 오르내리는 경우도 있다. 로마의 베스타 신전에서 꺼지지 않는 불을 지키는 사제들의 전통으로 오늘날까지 그 이름이 이어진다." },
];

// 12 올림포스 신 명단은 전승에 따라 헤스티아 대신 디오니소스가 포함되기도 함
const DIONYSUS_NOTE = "일부 전승에서는 헤스티아가 스스로 자리를 양보하며, 포도주와 축제의 신 디오니소스(로마명 바쿠스)가 12번째 올림포스 신으로 꼽히기도 합니다. 제우스와 인간 여성 세멜레 사이에서 태어난 디오니소스는 포도 재배와 연극의 신이기도 합니다.";
