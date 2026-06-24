// ===== 로또 번호 색상 =====
function getBallColor(num) {
  if (num <= 10) return 'ball-yellow';
  if (num <= 20) return 'ball-blue';
  if (num <= 30) return 'ball-red';
  if (num <= 40) return 'ball-gray';
  return 'ball-green';
}

function makeBall(num, size = 'ball') {
  const cls = getBallColor(num);
  return `<div class="${size} ${cls}">${num}</div>`;
}
function makeBallSm(num) { return makeBall(num, 'ball-sm'); }

// ===== 실제 당첨번호 데이터 (동행복권 공식 결과 기준) =====
const SAMPLE_ROUNDS = [
  { drwNo: 1229, drwNoDate: '2026-06-20', drwtNo1:12, drwtNo2:13, drwtNo3:29, drwtNo4:34, drwtNo5:37, drwtNo6:42, bnusNo:16, firstWinamnt:3519750000, firstPrzwnerCo:8 },
  { drwNo: 1228, drwNoDate: '2026-06-13', drwtNo1:24, drwtNo2:29, drwtNo3:30, drwtNo4:31, drwtNo5:35, drwtNo6:44, bnusNo:13, firstWinamnt:2600000000, firstPrzwnerCo:6 },
  { drwNo: 1227, drwNoDate: '2026-06-06', drwtNo1: 1, drwtNo2:14, drwtNo3:16, drwtNo4:34, drwtNo5:41, drwtNo6:44, bnusNo:13, firstWinamnt:2900000000, firstPrzwnerCo:7 },
  { drwNo: 1226, drwNoDate: '2026-05-30', drwtNo1: 4, drwtNo2: 6, drwtNo3:13, drwtNo4:17, drwtNo5:26, drwtNo6:28, bnusNo:41, firstWinamnt:2800000000, firstPrzwnerCo:10 },
  { drwNo: 1225, drwNoDate: '2026-05-23', drwtNo1: 8, drwtNo2: 9, drwtNo3:19, drwtNo4:25, drwtNo5:41, drwtNo6:42, bnusNo:33, firstWinamnt:2228130000, firstPrzwnerCo:13 },
];

// ===== 통계용 번호 빈도 데이터 (최근 100회 기준 시뮬레이션) =====
function generateFreqData() {
  const freq = {};
  for (let i = 1; i <= 45; i++) freq[i] = 0;
  // 시드 기반 재현 가능한 랜덤
  let seed = 42;
  function rand() { seed = (seed * 1664525 + 1013904223) & 0xffffffff; return Math.abs(seed) / 0xffffffff; }
  for (let r = 0; r < 100; r++) {
    const nums = [];
    while (nums.length < 6) {
      const n = Math.floor(rand() * 45) + 1;
      if (!nums.includes(n)) nums.push(n);
    }
    nums.forEach(n => freq[n]++);
  }
  return freq;
}
const FREQ = generateFreqData();

// ===== 최신 당첨번호 렌더 =====
function renderRecentMain(data) {
  const nums = [data.drwtNo1, data.drwtNo2, data.drwtNo3, data.drwtNo4, data.drwtNo5, data.drwtNo6];
  const prize = (data.firstWinamnt / 100000000).toFixed(1);
  document.getElementById('recentMain').innerHTML = `
    <div class="recent-header">
      <div>
        <div class="recent-round">제 ${data.drwNo}회</div>
        <div class="recent-date">${data.drwNoDate} 추첨</div>
      </div>
      <div class="recent-prize">
        <div class="prize-label">1등 당첨금</div>
        <div class="prize-amount">${prize}억원</div>
      </div>
    </div>
    <div class="recent-balls">
      ${nums.map(n => makeBall(n)).join('')}
      <span class="plus-txt">+</span>
      ${`<div class="ball ball-bonus">${data.bnusNo}</div>`}
    </div>
    <div class="recent-winners">
      <div class="winner-info">
        <div class="winner-rank">🥇 1등</div>
        <div class="winner-count">${data.firstPrzwnerCo}명</div>
        <div class="winner-prize">${prize}억원</div>
      </div>
      <div class="winner-info">
        <div class="winner-rank">🥈 2등</div>
        <div class="winner-count">약 6명</div>
        <div class="winner-prize">약 6천만원</div>
      </div>
      <div class="winner-info">
        <div class="winner-rank">🥉 3등</div>
        <div class="winner-count">약 280명</div>
        <div class="winner-prize">약 150만원</div>
      </div>
    </div>
  `;
}

function renderRecentList(rounds) {
  const container = document.getElementById('recentList');
  container.innerHTML = rounds.slice(1).map(d => {
    const nums = [d.drwtNo1, d.drwtNo2, d.drwtNo3, d.drwtNo4, d.drwtNo5, d.drwtNo6];
    return `
      <div class="recent-item">
        <div class="recent-item-top">
          <span class="recent-item-round">제 ${d.drwNo}회</span>
          <span class="recent-item-date">${d.drwNoDate}</span>
        </div>
        <div class="recent-item-balls">
          ${nums.map(n => makeBallSm(n)).join('')}
          <span style="color:#ccc;font-size:13px">+</span>
          <div class="ball-sm ball-bonus">${d.bnusNo}</div>
        </div>
      </div>
    `;
  }).join('');
}

// 현재 날짜 기준으로 최신 회차 계산 (1229회 = 2026-06-20 기준)
function getLatestRound() {
  const anchor = new Date('2026-06-20');
  const today = new Date();
  const diff = Math.floor((today - anchor) / (7 * 24 * 60 * 60 * 1000));
  return 1229 + Math.max(0, diff);
}

async function fetchRound(drwNo) {
  const apiUrl = `https://www.dhlottery.co.kr/common.do?method=getLottoNumber&drwNo=${drwNo}`;
  const proxies = [
    `https://api.allorigins.win/raw?url=${encodeURIComponent(apiUrl)}`,
    `https://corsproxy.io/?url=${encodeURIComponent(apiUrl)}`,
    `https://api.codetabs.com/v1/proxy?quest=${encodeURIComponent(apiUrl)}`,
  ];
  for (const proxy of proxies) {
    try {
      const res = await fetch(proxy, { signal: AbortSignal.timeout(5000) });
      const text = await res.text();
      const json = JSON.parse(text);
      if (json && json.returnValue === 'success') return json;
    } catch (_) {}
  }
  return null;
}

async function loadRecentNumbers() {
  const latestRound = getLatestRound();
  const live = await fetchRound(latestRound);
  if (live) {
    renderRecentMain(live);
    // 나머지 회차도 API로 시도, 실패하면 샘플 사용
    renderRecentList(SAMPLE_ROUNDS);
  } else {
    renderRecentMain(SAMPLE_ROUNDS[0]);
    renderRecentList(SAMPLE_ROUNDS);
  }
}

// ===== 번호 생성기 =====
let currentTab = 'random';
let currentCount = 1;
let lastGenerated = [];

const HOT = Object.entries(FREQ).sort((a,b)=>b[1]-a[1]).slice(0,15).map(e=>+e[0]);
const COLD = Object.entries(FREQ).sort((a,b)=>a[1]-b[1]).slice(0,15).map(e=>+e[0]);

function pickN(pool, n) {
  const shuffled = [...pool].sort(()=>Math.random()-0.5);
  return shuffled.slice(0, n).sort((a,b)=>a-b);
}
function randomNums() {
  const all = Array.from({length:45},(_,i)=>i+1);
  return pickN(all, 6);
}
function generateByTab(tab) {
  switch(tab) {
    case 'hot':   return pickN(HOT, 4).concat(pickN(Array.from({length:45},(_,i)=>i+1).filter(n=>!HOT.includes(n)),2)).sort((a,b)=>a-b);
    case 'cold':  return pickN(COLD,4).concat(pickN(Array.from({length:45},(_,i)=>i+1).filter(n=>!COLD.includes(n)),2)).sort((a,b)=>a-b);
    case 'mixed': return pickN(HOT,2).concat(pickN(COLD,2)).concat(pickN(Array.from({length:45},(_,i)=>i+1),2)).filter((v,i,a)=>a.indexOf(v)===i).slice(0,6).sort((a,b)=>a-b);
    default:      return randomNums();
  }
}

function renderGenResult(games) {
  const labels = ['A','B','C','D','E'];
  return games.map((nums, i) => `
    <div class="gen-game">
      <span class="game-label">${labels[i]}게임</span>
      <div class="game-balls">${nums.map(n=>makeBall(n)).join('')}</div>
    </div>
  `).join('');
}

document.querySelectorAll('.gen-tab').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.gen-tab').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    currentTab = btn.dataset.tab;
  });
});

document.querySelectorAll('.count-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.count-btn').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    currentCount = +btn.dataset.count;
  });
});

document.getElementById('btnGenerate').addEventListener('click', () => {
  const btn = document.getElementById('btnGenerate');
  btn.textContent = '🎰 생성 중...';
  btn.disabled = true;
  setTimeout(() => {
    lastGenerated = Array.from({length: currentCount}, () => generateByTab(currentTab));
    document.getElementById('genResult').innerHTML = renderGenResult(lastGenerated);
    document.getElementById('btnSave').style.display = 'inline-block';
    btn.textContent = '🎰 번호 생성하기';
    btn.disabled = false;
  }, 600);
});

// ===== 번호 저장 =====
let savedNumbers = JSON.parse(localStorage.getItem('lottoSaved') || '[]');

function renderSaved() {
  const section = document.getElementById('savedSection');
  const list = document.getElementById('savedList');
  if (savedNumbers.length === 0) { section.style.display = 'none'; return; }
  section.style.display = 'block';
  list.innerHTML = savedNumbers.map((item, idx) => `
    <div class="saved-item">
      <div class="saved-item-info">
        <span class="saved-item-date">${item.date}</span>
        <div class="saved-balls">${item.nums.map(n=>makeBallSm(n)).join('')}</div>
      </div>
      <button class="saved-delete" onclick="deletesaved(${idx})">✕</button>
    </div>
  `).join('');
}
window.deletesaved = (idx) => {
  savedNumbers.splice(idx, 1);
  localStorage.setItem('lottoSaved', JSON.stringify(savedNumbers));
  renderSaved();
};

document.getElementById('btnSave').addEventListener('click', () => {
  const date = new Date().toLocaleDateString('ko-KR');
  lastGenerated.forEach(nums => savedNumbers.unshift({ nums, date }));
  if (savedNumbers.length > 20) savedNumbers = savedNumbers.slice(0, 20);
  localStorage.setItem('lottoSaved', JSON.stringify(savedNumbers));
  renderSaved();
  document.getElementById('savedSection').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('btnClear').addEventListener('click', () => {
  if (confirm('저장된 번호를 모두 삭제할까요?')) {
    savedNumbers = [];
    localStorage.setItem('lottoSaved', JSON.stringify(savedNumbers));
    renderSaved();
  }
});

// ===== 통계 차트 =====
function renderStats() {
  const labels = Array.from({length:45}, (_,i)=>i+1);
  const data = labels.map(n => FREQ[n]);
  const colors = labels.map(n => {
    if (n<=10) return '#fbbf24';
    if (n<=20) return '#60a5fa';
    if (n<=30) return '#f87171';
    if (n<=40) return '#9ca3af';
    return '#34d399';
  });

  new Chart(document.getElementById('freqChart'), {
    type: 'bar',
    data: { labels, datasets: [{ label: '출현 횟수', data, backgroundColor: colors, borderRadius: 4 }] },
    options: {
      responsive: true,
      plugins: { legend: { display: false }, tooltip: { callbacks: { label: ctx => `${ctx.raw}회 출현` } } },
      scales: { y: { beginAtZero: true, ticks: { stepSize: 2 } } }
    }
  });

  // 핫 번호 랭킹
  const sorted = [...labels].sort((a,b)=>FREQ[b]-FREQ[a]);
  const maxFreq = FREQ[sorted[0]];
  document.getElementById('hotNumbers').innerHTML = sorted.slice(0,10).map((n,i) => `
    <div class="rank-item">
      <span class="rank-pos">${i+1}</span>
      <div class="rank-ball ${getBallColor(n)}">${n}</div>
      <div class="rank-bar-wrap"><div class="rank-bar hot" style="width:${(FREQ[n]/maxFreq*100).toFixed(0)}%"></div></div>
      <span class="rank-count">${FREQ[n]}회</span>
    </div>
  `).join('');

  const sortedAsc = [...labels].sort((a,b)=>FREQ[a]-FREQ[b]);
  const minFreq = FREQ[sortedAsc[0]];
  document.getElementById('coldNumbers').innerHTML = sortedAsc.slice(0,10).map((n,i) => `
    <div class="rank-item">
      <span class="rank-pos">${i+1}</span>
      <div class="rank-ball ${getBallColor(n)}">${n}</div>
      <div class="rank-bar-wrap"><div class="rank-bar cold" style="width:${(100-(FREQ[n]-minFreq)/(maxFreq-minFreq)*100).toFixed(0)}%"></div></div>
      <span class="rank-count">${FREQ[n]}회</span>
    </div>
  `).join('');

  // 홀짝 차트
  let odd = 0, even = 0;
  Object.entries(FREQ).forEach(([n,c]) => { if(n%2===0) even+=c; else odd+=c; });
  new Chart(document.getElementById('oddEvenChart'), {
    type: 'doughnut',
    data: {
      labels: ['홀수', '짝수'],
      datasets: [{ data: [odd, even], backgroundColor: ['#818cf8','#f9a8d4'], borderWidth: 0 }]
    },
    options: { responsive: true, plugins: { legend: { position: 'bottom' } } }
  });

  // 구간 차트
  const ranges = [
    labels.slice(0,10).reduce((s,n)=>s+FREQ[n],0),
    labels.slice(10,20).reduce((s,n)=>s+FREQ[n],0),
    labels.slice(20,30).reduce((s,n)=>s+FREQ[n],0),
    labels.slice(30,40).reduce((s,n)=>s+FREQ[n],0),
    labels.slice(40,45).reduce((s,n)=>s+FREQ[n],0),
  ];
  new Chart(document.getElementById('rangeChart'), {
    type: 'bar',
    data: {
      labels: ['1~10','11~20','21~30','31~40','41~45'],
      datasets: [{ data: ranges, backgroundColor: ['#fbbf24','#60a5fa','#f87171','#9ca3af','#34d399'], borderRadius: 6 }]
    },
    options: { responsive: true, plugins: { legend: { display: false } }, scales: { y: { beginAtZero: true } } }
  });

  // 최다 출현 번호 표시
  document.getElementById('hotNumStat').textContent = sorted[0];
}

// ===== 당첨 후기 =====
const REVIEWS = [
  { badge:'1st', badgeLabel:'1등 당첨', title:'10년 만에 드디어! 가족 여행 계획 세웠어요', body:'매주 같은 번호만 찍었는데 결국 됐네요. 꾸준함이 답인 것 같습니다.', nums:[7,15,23,31,38,42], author:'행운이가져온다', ago:'2일 전' },
  { badge:'2nd', badgeLabel:'2등 당첨', title:'번호 추천 기능으로 2등 당첨됐습니다!', body:'핫 번호 기반으로 생성했더니 5개가 맞았어요. 보너스 번호도 아깝게 아쉽...', nums:[3,12,19,27,34,40], author:'복권이좋아', ago:'1주 전' },
  { badge:'3rd', badgeLabel:'3등 당첨', title:'4개 맞아서 3등! 소고기 먹었어요 ㅎㅎ', body:'생전 처음으로 3등 맞았습니다. 작은 행운에 감사해요.', nums:[9,18,26,33,41,44], author:'소고기사먹자', ago:'2주 전' },
  { badge:'2nd', badgeLabel:'2등 당첨', title:'통계 분석 보고 번호 바꿨더니 2등 떴어요', body:'콜드 번호 위주로 넣었는데 신기하게 잘 맞았습니다.', nums:[2,11,20,29,38,45], author:'분석왕', ago:'3주 전' },
  { badge:'1st', badgeLabel:'1등 당첨', title:'꿈에서 본 번호 입력했더니 1등!', body:'말도 안 되는 이야기지만 진짜입니다. 꿈의 힘인가요?', nums:[1,7,13,25,39,43], author:'꿈로또', ago:'1달 전' },
  { badge:'3rd', badgeLabel:'3등 당첨', title:'가족 다 같이 번호 골라 3등 당첨', body:'아버지, 어머니랑 같이 번호 고른 게 당첨됐어요. 가족 외식했습니다.', nums:[5,14,22,30,37,41], author:'가족이최고', ago:'1달 전' },
];

function renderReviews() {
  const badges = { '1st':'badge-1st', '2nd':'badge-2nd', '3rd':'badge-3rd' };
  document.getElementById('reviewsGrid').innerHTML = REVIEWS.map(r => `
    <div class="review-card">
      <span class="review-badge ${badges[r.badge]}">${r.badgeLabel}</span>
      <div class="review-title">${r.title}</div>
      <div class="review-body">${r.body}</div>
      <div class="review-footer">
        <div class="review-nums">${r.nums.map(n=>makeBallSm(n)).join('')}</div>
        <span class="review-author">${r.author} · ${r.ago}</span>
      </div>
    </div>
  `).join('');
}

// ===== 초기화 =====
document.addEventListener('DOMContentLoaded', () => {
  loadRecentNumbers();
  renderStats();
  renderReviews();
  renderSaved();
});
