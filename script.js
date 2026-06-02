//22张大阿尔卡纳

const tarotDeck = [
    {
        id: 0,
        nameZh: "愚者",
        nameEn: "The Fool",
        icon: "🃏",
        meaningZh: "旅途始于悬崖边缘。并非不计后果，而是对深渊诚实。",
        meaningEn: "The journey begins at the cliff's edge. Not recklessness, but honesty toward the abyss.",
        dailyZh: "今日宜向犹豫已久的行动迈出一步。世界不会为你暂停，但勇气会嘉奖你。",
        dailyEn: "Today favors the step long hesitated. The world shall not pause for you, yet courage will reward you."
    },
    {
        id: 1,
        nameZh: "魔术师",
        nameEn: "The Magician",
        icon: "🔮",
        meaningZh: "四元素已齐聚，只待意志落座。你是自己的炼金术士。",
        meaningEn: "The four elements stand ready, awaiting only the will to take its seat. You are your own alchemist.",
        dailyZh: "让世界面对你的才华、永恒的生命力与无限可能性。",
        dailyEn: "Let the world witness your talent, eternal vitality and boundless possibilities."
    },
    {
        id: 2,
        nameZh: "女祭司",
        nameEn: "The High Priestess",
        icon: "🌙",
        meaningZh: "知识藏于帷幕之后。有些答案不在追问中获得，而在沉默里浮现。",
        meaningEn: "Knowledge dwells behind the veil. Some answers emerge not from inquiry, but from silence.",
        dailyZh: "不必急于表态。让直觉在暗处发酵，它比你以为的更精确。",
        dailyEn: "No haste to declare. Let intuition ferment in the dark—it is more precise than you presume."
    },
    {
        id: 3,
        nameZh: "女皇",
        nameEn: "The Empress",
        icon: "🌹",
        meaningZh: "拥抱一派生机的自然。孕育比征服更需要勇气。",
        meaningEn: "To embrace nature in all its living, breathing bloom. Gestation demands more courage than conquest.",
        dailyZh: "今日适合培育而非收割。给正在生长的事物多一点耐心，它们记得你的善意。",
        dailyEn: "Today favors cultivation over harvest. Grant patience to what grows; it remembers your kindness."
    },
    {
        id: 4,
        nameZh: "皇帝",
        nameEn: "The Emperor",
        icon: "⚔️",
        meaningZh: "秩序是权力的外衣，也是牢笼的栅栏。统治与被统治，皆是选择。",
        meaningEn: "Order is the raiment of power, and also the bars of the cage. To rule and to be ruled—both are choices.",
        dailyZh: "建立边界不是冷漠，是给真正重要的事物留出空间。",
        dailyEn: "Setting boundaries is not coldness; it is making room for what truly matters."
    },
    {
        id: 5,
        nameZh: "教皇",
        nameEn: "The Hierophant",
        icon: "📜",
        meaningZh: "传统是桥梁，也是枷锁。过桥时，记得你随时可以建造自己的渡口。",
        meaningEn: "Tradition is bridge and shackle both. While crossing, remember you may build your own ford at any hour.",
        dailyZh: "有人向你寻求指引。给出的建议越简短，留下的空间越宽广。",
        dailyEn: "Someone seeks your guidance. The briefer the counsel, the wider the space you leave."
    },
    {
        id: 6,
        nameZh: "恋人",
        nameEn: "The Lovers",
        icon: "💞",
        meaningZh: "选择本身即是代价。没有完美的选项，只有你愿意为之破碎的那一边。",
        meaningEn: "The choice itself is the price. There is no perfect option, only the side you are willing to fracture for.",
        dailyZh: "必须诚实问自己：这是想要，还是需要？",
        dailyEn: "It must be honest. Ask: is this want, or need?"
    },
    {
        id: 7,
        nameZh: "战车",
        nameEn: "The Chariot",
        icon: "🏛️",
        meaningZh: "前进不需要所有答案，只需要两个对立面同时拉车。驾驭矛盾，而非消除它。",
        meaningEn: "Forward motion requires not all answers. Steer the contradiction, do not erase it.",
        dailyZh: "今日的动力来自张力。别急着调和冲突，让它推动你。",
        dailyEn: "Today's momentum springs from tension. Do not rush to reconcile; let it push you a while."
    },
    {
        id: 8,
        nameZh: "力量",
        nameEn: "Strength",
        icon: "🦁",
        meaningZh: "真正的力量不是征服野兽，是与它共享同一片阴影。温柔是最锋利的牙齿。",
        meaningEn: "True strength is not the conquest of the beast, but sharing the same shadow with it. Gentleness is the sharpest tooth.",
        dailyZh: "今日需要以柔克刚。不是退缩，是用耐心瓦解对方的棱角。",
        dailyEn: "Today calls for overcoming hardness with softness. Not retreat, but dissolving edges with patience."
    },
    {
        id: 9,
        nameZh: "隐者",
        nameEn: "The Hermit",
        icon: "🏔️",
        meaningZh: "孤独不是惩罚，是灯笼。你提着它走夜路，不是为了被看见，是为了看见。",
        meaningEn: "Solitude is a lantern. You carry it through the night not to be seen, but to see.",
        dailyZh: "今日适合独处。给内心的声音一个不被打断的听众。",
        dailyEn: "Today favors solitude. Granting your inner voice an uninterrupted listener."
    },
    {
        id: 10,
        nameZh: "命运之轮",
        nameEn: "Wheel of Fortune",
        icon: "☸️",
        meaningZh: "上升与下沉是同一枚硬币的两面。在顶端时记得低头，在谷底时记得仰望。",
        meaningEn: "Rise and fall are two faces of the same coin. Remember to look down at the summit, and up from the valley.",
        dailyZh: "变化正在发生，不必抵抗。踏足山巅和跌落山谷都使你受益良多",
        dailyEn: "Change is underway; resistance is unnecessary. The peak you climb and the valley you fall into — both teach you more than you knew."
    },
    {
        id: 11,
        nameZh: "正义",
        nameEn: "Justice",
        icon: "⚖️",
        meaningZh: "天平从不撒谎，但拿天平的人可以。追求公正之前，先确认自己没有倾斜。",
        meaningEn: "The scales never lie, but the one who holds them may. Before pursuing justice, confirm you do not lean.",
        dailyZh: "砍断自欺，听到每个选择背后的业力回响。",
        dailyEn: "Break your self-deception. Hear the karma behind every choice."
    },
    {
        id: 12,
        nameZh: "倒吊人",
        nameEn: "The Hanged Man",
        icon: "🙃",
        meaningZh: "换个角度看世界。血液流向头部时，想法会不同。",
        meaningEn: "To view the world from another angle. When blood flows to the head, thoughts differ.",
        dailyZh: "今日宜暂停。不是放弃，是让惯性停下来，看看还有什么别的可能。",
        dailyEn: "Today favors pause. Halting momentum to see what other possibilities remain."
    },
    {
        id: 13,
        nameZh: "死神",
        nameEn: "Death",
        icon: "💀",
        meaningZh: "终结是唯一的诚实。万物腐朽，但腐朽处有新芽的座位。",
        meaningEn: "Ending is the only honesty. All things decay, yet decay reserves a seat for new shoots.",
        dailyZh: "今日适合放手。不是遗忘，是给新事物腾出位置。结束是开始的礼貌。",
        dailyEn: "Today favors release. Making room for the new. Ending is the courtesy of beginning."
    },
    {
        id: 14,
        nameZh: "节制",
        nameEn: "Temperance",
        icon: "🏺",
        meaningZh: "创造第三种物质，使万物保持平衡。水火相容之处，有炼金术发生。",
        meaningEn: "Seek the third path that keeps all things in harmony. Where fire and water meet, alchemy occurs.",
        dailyZh: "适度，节制，审视内心.寻求让对立面共存的温度",
        dailyEn: "Moderation. Restraint. Look within. Seek the temperature where opposites meet."
    },
    {
        id: 15,
        nameZh: "恶魔",
        nameEn: "The Devil",
        icon: "⛓️",
        meaningZh: "锁链是自愿佩戴的装饰品。看清自己的成瘾，然后决定它是否仍值得侍奉。",
        meaningEn: "Chains are ornaments worn by choice. See your addiction clearly, then decide if it still merits service.",
        dailyZh: "今日宜审视执念。你的欲望是否蠢蠢欲动，想要挣脱束缚？它们是否仍被你掌控？",
        dailyEn: "Today favors examining obsessions. Are your desires twitching to break free? And are they still yours to command?"
    },
    {
        id: 16,
        nameZh: "塔",
        nameEn: "The Tower",
        icon: "🌩️",
        meaningZh: "崩塌是建筑的语言。有些结构必须倒塌，才能让光进来。",
        meaningEn: "Collapse is the language of architecture. Some structures must fall to let light enter.",
        dailyZh: "不可抗拒的变革即将到来，寻找新的契机。",
        dailyEn: "Change you cannot refuse is on its way. Go find the new chance waiting within."
    },
    {
        id: 17,
        nameZh: "星星",
        nameEn: "The Star",
        icon: "⭐",
        meaningZh: "希望是危险的，但绝望更危险。在两者之间，选择让你继续前行的。",
        meaningEn: "Hope is dangerous, yet despair more so. Between the two, choose the one that keeps you moving.",
        dailyZh: "今日宜许愿。不是向星空索取，是向自己确认：我仍想要这个。",
        dailyEn: "Today favors wishing. Confirming to yourself: I still want this."
    },
    {
        id: 18,
        nameZh: "月亮",
        nameEn: "The Moon",
        icon: "🌕",
        meaningZh: "幻觉是真实的另一种形式。在月光下行走，接受道路会变形。",
        meaningEn: "Illusion is another form of the real. Walking by moonlight, accept that the path will distort.",
        dailyZh: "今日直觉敏锐，但别全信。让感觉和事实互相质疑，真相在它们的缝隙里。",
        dailyEn: "Today intuition is keen. Let feeling and fact interrogate each other; truth lies in their gap."
    },
    {
        id: 19,
        nameZh: "太阳",
        nameEn: "The Sun",
        icon: "☀️",
        meaningZh: "光明不是答案，是让问题变得可见。晒晒太阳，然后决定要不要解决它们。",
        meaningEn: "Light is not the answer, which makes questions visible. Bask, then decide whether to solve them.",
        dailyZh: "今日能量充沛，但别浪费在琐事上。把阳光留给真正需要照亮的地方。",
        dailyEn: "Today's energy is ample; waste it not on trifles. Reserve sunlight for what truly needs illumination."
    },
    {
        id: 20,
        nameZh: "审判",
        nameEn: "Judgement",
        icon: "🎺",
        meaningZh: "号角响起时，你听到的不是召唤，是回声。那是过去的你在催促现在的你。",
        meaningEn: "When the trumpet sounds, you hear not summons but echo. It is your past self, urging the present.",
        dailyZh: "今日适合复盘。不是审判自己，是听听过去的决定想告诉你什么。",
        dailyEn: "Today favors review. Listening to what past decisions wish to tell you."
    },
    {
        id: 21,
        nameZh: "世界",
        nameEn: "The World",
        icon: "🌍",
        meaningZh: "完成不是终点，是循环的接口。你画完这个圆，是为了从圆心再次出发。",
        meaningEn: "Completion is not the end, but the interface of the cycle. You finish this circle to depart again from its center.",
        dailyZh: "今日宜庆祝阶段性胜利。然后记住：终点即起点，别停留太久。",
        dailyEn: "Today favors celebrating interim victories. The end is the beginning. Do not linger too long."
    }
];

// ===== 月相数据 =====
const moonPhases = [
    { icon: "🌑", name: "新月", en: "New Moon" },
    { icon: "🌒", name: "娥眉月", en: "Waxing Crescent" },
    { icon: "🌓", name: "上弦月", en: "First Quarter" },
    { icon: "🌔", name: "盈凸月", en: "Waxing Gibbous" },
    { icon: "🌕", name: "满月", en: "Full Moon" },
    { icon: "🌖", name: "亏凸月", en: "Waning Gibbous" },
    { icon: "🌗", name: "下弦月", en: "Last Quarter" },
    { icon: "🌘", name: "残月", en: "Waning Crescent" }
];

// ===== 全局状态 =====
let currentLang = 'zh';
let shuffledCards = [];
let revealedSlots = { past: false, present: false, future: false };
let dailyDrawnToday = false;
let todayCard = null;

// ===== 初始化 =====
document.addEventListener('DOMContentLoaded', () => {
    // 加载动画
    setTimeout(() => {
        document.getElementById('loading').classList.add('hidden');
    }, 1500);
    
    // 初始化粒子
    initParticles();
    
    // 初始化日期
    initDate();
    
    // 初始化月相
    initMoonPhase();
    
    // 检查今日是否已抽取
    checkDailyStatus();
    
    // 重置牌阵
    resetSpread();
    
    // 初始化牌义指南
    initGuide();
});

// ===== 粒子背景 =====
function initParticles() {
    const container = document.getElementById('particles');
    const symbols = ['✦', '✧', '❦', '❧', '☽', '☉', '☆', '✶'];
    
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.textContent = symbols[Math.floor(Math.random() * symbols.length)];
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDuration = (15 + Math.random() * 20) + 's';
        particle.style.animationDelay = Math.random() * 15 + 's';
        particle.style.fontSize = (0.8 + Math.random() * 1.2) + 'rem';
        container.appendChild(particle);
    }
}

// ===== 日期初始化 =====
function initDate() {
    const now = new Date();
    const dateStr = currentLang === 'zh' 
        ? `${now.getFullYear()}年${now.getMonth() + 1}月${now.getDate()}日`
        : now.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    document.getElementById('daily-date').textContent = dateStr;
}

// ===== 月相初始化 =====
function initMoonPhase() {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const day = now.getDate();
    
    const c = Math.floor((year - 1900) / 100);
    const e = Math.floor((year - 1900) % 100);
    const phase = (((month + 9) % 12) * 30 + day + c * 5 + e) % 8;
    
    const moon = moonPhases[phase];
    document.getElementById('moon-phase').textContent = moon.icon;
    
    const moonEl = document.getElementById('moon-phase');
    moonEl.title = currentLang === 'zh' ? moon.name : moon.en;
}

// ===== 检查今日运势状态 =====
function checkDailyStatus() {
    const saved = localStorage.getItem('dailyTarot');
    if (saved) {
        const data = JSON.parse(saved);
        const today = new Date().toDateString();
        
        if (data.date === today) {
            dailyDrawnToday = true;
            todayCard = tarotDeck[data.cardId];
            
            // 显示已抽取状态
            const btn = document.querySelector('.daily-frame .mucha-btn');
            btn.disabled = true;
            btn.textContent = currentLang === 'zh' ? '今日已抽取' : 'Already Drawn Today';
            
            // 显示之前的结果
            showDailyResult(todayCard, false);
        }
    }
}

// ===== 语言切换 =====
function setLang(lang) {
    currentLang = lang;
    
    document.getElementById('btn-zh').classList.toggle('active', lang === 'zh');
    document.getElementById('btn-en').classList.toggle('active', lang === 'en');
    document.body.classList.toggle('lang-en', lang === 'en');
    
    document.querySelectorAll('[data-zh]').forEach(el => {
        el.textContent = el.getAttribute(`data-${lang}`);
    });
    
    initDate();
    initMoonPhase();
    
    // 更新按钮文字
    const dailyBtn = document.querySelector('.daily-frame .mucha-btn');
    if (dailyBtn.disabled) {
        dailyBtn.textContent = lang === 'zh' ? '今日已抽取' : 'Already Drawn Today';
    }
    
    updateExistingResults();
}

// ===== 更新已有结果 =====
function updateExistingResults() {
    const dailyResult = document.getElementById('daily-result');
    if (!dailyResult.classList.contains('hidden') && todayCard) {
        showDailyResult(todayCard, false);
    }
    
    ['past', 'present', 'future'].forEach(slot => {
        if (revealedSlots[slot]) {
            const cardId = parseInt(document.getElementById(`slot-${slot}`).dataset.cardId);
            const card = tarotDeck[cardId];
            updateCardDisplay(slot, card);
        }
    });
      const summary = document.getElementById('spread-summary');
    if (summary) {
        summary.remove();
        showSpreadSummary();
    }
}

// ===== 抽取每日运势 =====
function drawDaily() {
    if (dailyDrawnToday) return;
    
    const randomCard = tarotDeck[Math.floor(Math.random() * tarotDeck.length)];
    todayCard = randomCard;
    dailyDrawnToday = true;
    
    // 保存到本地存储
    localStorage.setItem('dailyTarot', JSON.stringify({
        date: new Date().toDateString(),
        cardId: randomCard.id
    }));
    
    // 禁用按钮
    const btn = document.querySelector('.daily-frame .mucha-btn');
    btn.disabled = true;
    btn.textContent = currentLang === 'zh' ? '今日已抽取' : 'Already Drawn Today';
    
    showDailyResult(randomCard, true);
}

// ===== 显示每日运势结果 =====
function showDailyResult(card, animate) {
    const resultDiv = document.getElementById('daily-result');
    resultDiv.classList.remove('hidden');
    
    resultDiv.innerHTML = `
        <div class="result-card" style="${animate ? 'animation: fadeIn 0.8s ease;' : ''}">
            <div style="font-size: 2.5rem; margin-bottom: 15px; animation: float 3s ease-in-out infinite;">${card.icon}</div>
            <div style="font-family: 'Cinzel', 'Noto Serif SC', serif; color: var(--crimson); font-size: 1.3rem; margin-bottom: 15px; letter-spacing: 2px;">
                ${currentLang === 'zh' ? card.nameZh : card.nameEn}
            </div>
            <div style="font-style: italic; line-height: 1.8; color: var(--ink);">
                ${currentLang === 'zh' ? card.dailyZh : card.dailyEn}
            </div>
        </div>
    `;
}

// ===== 生成穆夏曼陀罗图案 =====
function generateMandala(cardId, containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = '';
    
    const mandala = document.createElement('div');
    mandala.className = 'mandala-art';
    
    // 基于cardId生成独特图案
    const seed = cardId * 137; // 伪随机种子
    const ringCount = 3 + (seed % 3);
    const petalCount = 6 + (seed % 8);
    const rotation = (seed % 360);
    
    // 外环
    for (let i = 0; i < ringCount; i++) {
        const ring = document.createElement('div');
        ring.className = 'mandala-ring';
        const size = 90 - i * 20;
        ring.style.width = size + 'px';
        ring.style.height = size + 'px';
        ring.style.borderWidth = (1 + i * 0.5) + 'px';
        ring.style.opacity = 0.3 + i * 0.2;
        mandala.appendChild(ring);
    }
    
    // 花瓣
    const petals = document.createElement('div');
    petals.className = 'mandala-petals';
    for (let i = 0; i < petalCount; i++) {
        const petal = document.createElement('div');
        petal.className = 'mandala-petal';
        const angle = (360 / petalCount) * i + rotation;
        petal.style.transform = `translate(-50%, -100%) rotate(${angle}deg)`;
        petal.style.height = (20 + (seed % 15)) + 'px';
        petal.style.opacity = 0.5 + (i % 3) * 0.15;
        petals.appendChild(petal);
    }
    mandala.appendChild(petals);
    
    // 装饰点
    const dots = document.createElement('div');
    dots.className = 'mandala-dots';
    const dotCount = 8 + (seed % 6);
    for (let i = 0; i < dotCount; i++) {
        const dot = document.createElement('div');
        dot.className = 'mandala-dot';
        const angle = (360 / dotCount) * i;
        const radius = 35;
        const x = Math.cos(angle * Math.PI / 180) * radius;
        const y = Math.sin(angle * Math.PI / 180) * radius;
        dot.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`;
        dots.appendChild(dot);
    }
    mandala.appendChild(dots);
    
    // 中心
    const center = document.createElement('div');
    center.className = 'mandala-center';
    mandala.appendChild(center);
    
    container.appendChild(mandala);
}

// ===== 洗牌 =====
function shuffleCards() {
    resetSpread();
    
    const deck = [...tarotDeck];
    shuffledCards = [];
    for (let i = 0; i < 3; i++) {
        const index = Math.floor(Math.random() * deck.length);
        shuffledCards.push(deck[index]);
        deck.splice(index, 1);
    }
    
    const slots = ['past', 'present', 'future'];
    slots.forEach((slot, index) => {
        const slotEl = document.getElementById(`slot-${slot}`);
        slotEl.classList.add('shuffling');
        slotEl.dataset.cardId = shuffledCards[index].id;
        
        setTimeout(() => {
            slotEl.classList.remove('shuffling');
        }, 500 + index * 200);
    });
    
    revealedSlots = { past: false, present: false, future: false };
}

// ===== 翻开单张牌 =====
function revealCard(slot) {
    if (shuffledCards.length === 0) {
        shuffleCards();
        return;
    }
    
    if (revealedSlots[slot]) return;
    
    const slotEl = document.getElementById(`slot-${slot}`);
    const cardId = parseInt(slotEl.dataset.cardId);
    const card = tarotDeck[cardId];
    
    // 生成曼陀罗图案
    generateMandala(cardId, `art-${slot}`);
    
    // 更新牌面内容
    updateCardDisplay(slot, card);
    
    // 翻转动画
    slotEl.classList.add('flipped');
    revealedSlots[slot] = true;
    
    if (Object.values(revealedSlots).every(v => v)) {
        setTimeout(() => {
            showSpreadSummary();
        }, 800);
    }
}

// ===== 更新牌面显示 =====
function updateCardDisplay(slot, card) {
    document.getElementById(`icon-${slot}`).textContent = card.icon;
    document.getElementById(`name-${slot}`).textContent = currentLang === 'zh' ? card.nameZh : card.nameEn;
    document.getElementById(`meaning-${slot}`).textContent = currentLang === 'zh' ? card.meaningZh : card.meaningEn;
}

// ===== 显示牌阵总结 =====
function showSpreadSummary() {
    const readingSection = document.querySelector('.reading-section');
    
    const oldSummary = document.getElementById('spread-summary');
    if (oldSummary) oldSummary.remove();
    
    const summary = document.createElement('div');
    summary.id = 'spread-summary';
    summary.style.cssText = `
        margin-top: 40px;
        padding: 30px;
        border: 2px solid var(--gold);
        background: linear-gradient(135deg, var(--parchment) 0%, var(--parchment-dark) 100%);
        max-width: 600px;
        margin-left: auto;
        margin-right: auto;
        animation: fadeIn 1s ease;
        position: relative;
    `;
    
    const cards = ['past', 'present', 'future'].map(slot => {
        const cardId = parseInt(document.getElementById(`slot-${slot}`).dataset.cardId);
        return tarotDeck[cardId];
    });
    
    const title = currentLang === 'zh' ? '时光之阵解读' : 'The Array of Hours';
    const subtitle = currentLang === 'zh' ? '三张牌编织的叙事' : 'A narrative woven by three cards';
    
    summary.innerHTML = `
        <div style="font-family: 'Cinzel', 'Noto Serif SC', serif; color: var(--crimson); font-size: 1.4rem; margin-bottom: 8px; letter-spacing: 3px;">
            ${title}
        </div>
        <div style="font-style: italic; color: var(--ink-light); margin-bottom: 20px; font-size: 0.95rem;">
            ${subtitle}
        </div>
        <div style="line-height: 2; color: var(--ink);">
            ${currentLang === 'zh' 
                ? `<p><strong>${cards[0].nameZh}</strong> 从身后推动你——${cards[0].meaningZh}</p>
                   <p><strong>${cards[1].nameZh}</strong> 正与你并肩——${cards[1].meaningZh}</p>
                   <p><strong>${cards[2].nameZh}</strong> 在前方等候——${cards[2].meaningZh}</p>`
                : `<p><strong>${cards[0].nameEn}</strong> pushes from behind—${cards[0].meaningEn}</p>
                   <p><strong>${cards[1].nameEn}</strong> walks beside you—${cards[1].meaningEn}</p>
                   <p><strong>${cards[2].nameEn}</strong> awaits ahead—${cards[2].meaningEn}</p>`
            }
        </div>
        <div style="margin-top: 20px; padding-top: 15px; border-top: 1px solid var(--gold); font-style: italic; color: var(--ink-light); font-size: 0.9rem;">
            ${currentLang === 'zh' 
                ? '牌阵已记录于本地。刷新页面可开启新的占卜。' 
                : 'The spread is recorded locally. Refresh to begin anew.'}
        </div>
    `;
    
    readingSection.appendChild(summary);
}

// ===== 重置牌阵 =====
function resetSpread() {
    shuffledCards = [];
    revealedSlots = { past: false, present: false, future: false };
    
    ['past', 'present', 'future'].forEach(slot => {
        const slotEl = document.getElementById(`slot-${slot}`);
        slotEl.classList.remove('flipped');
        slotEl.removeAttribute('data-card-id');
        
        document.getElementById(`art-${slot}`).innerHTML = '';
        document.getElementById(`icon-${slot}`).textContent = slot === 'past' ? '☽' : slot === 'present' ? '☉' : '☆';
        document.getElementById(`name-${slot}`).textContent = '';
        document.getElementById(`meaning-${slot}`).textContent = '';
    });
    
    const summary = document.getElementById('spread-summary');
    if (summary) summary.remove();
}

// ===== 牌义指南 =====
function initGuide() {
    const grid = document.getElementById('guide-grid');
    
    tarotDeck.forEach(card => {
        const item = document.createElement('div');
        item.className = 'guide-item';
        item.innerHTML = `
            <div class="guide-item-icon">${card.icon}</div>
            <div class="guide-item-info">
                <div class="guide-item-name" data-zh="${card.nameZh}" data-en="${card.nameEn}">${card.nameZh}</div>
                <div class="guide-item-en">${card.nameEn}</div>
            </div>
        `;
        item.onclick = () => showCardDetail(card);
        grid.appendChild(item);
    });
}

function toggleGuide() {
    const panel = document.getElementById('guide-panel');
    const icon = document.getElementById('guide-icon');
    
    panel.classList.toggle('hidden');
    panel.classList.toggle('open');
    icon.classList.toggle('open');
    
    icon.textContent = panel.classList.contains('open') ? '×' : '+';
}

function showCardDetail(card) {
    const detail = document.getElementById('guide-detail');
    const title = currentLang === 'zh' ? card.nameZh : card.nameEn;
    const subTitle = currentLang === 'zh' ? card.nameEn : card.nameZh;
    const meaning = currentLang === 'zh' ? card.meaningZh : card.meaningEn;
    
    detail.innerHTML = `
        <div style="display: flex; align-items: center; gap: 20px; margin-bottom: 20px;">
            <div style="font-size: 3rem;">${card.icon}</div>
            <div>
                <div style="font-family: 'Cinzel', 'Noto Serif SC', serif; color: var(--crimson); font-size: 1.4rem; letter-spacing: 2px; margin-bottom: 5px;">${title}</div>
                <div style="font-family: 'Cormorant Garamond', serif; color: var(--ink-light); font-style: italic; font-size: 1rem;">${subTitle}</div>
            </div>
        </div>
        <div style="font-style: italic; line-height: 1.8; color: var(--ink); padding: 20px 0; border-top: 1px solid var(--gold); border-bottom: 1px solid var(--gold); margin-bottom: 20px;">
            ${meaning}
        </div>
        <button onclick="closeGuideDetail()" class="mucha-btn" style="padding: 10px 24px; font-size: 0.85rem; margin: 0;">
            ${currentLang === 'zh' ? '收起详情' : 'Close Detail'}
        </button>
    `;
    
    detail.classList.remove('hidden');
    detail.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function closeGuideDetail() {
    document.getElementById('guide-detail').classList.add('hidden');
}
