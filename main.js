// ==========================================
// 1. 角色資料庫設定 (已固定各角色光點顏色)
// ==========================================
const GODS = [
    { 
        id: 'liu', name: '劉振豪', color: '#1E90FF', // 藍色 (DodgerBlue)
        audioIntro: ['劉振豪1.wav', '劉振豪2.wav', '劉振豪3.wav'], 
        audioBgm: '劉振豪BGM.mp3', 
        imgIntro: ['https://res.cloudinary.com/dsfkpn8ww/image/upload/v1782257408/%E5%8A%89%E6%8C%AF%E8%B1%AA1_pxmkjd.png', 'https://res.cloudinary.com/dsfkpn8ww/image/upload/v1782257412/%E5%8A%89%E6%8C%AF%E8%B1%AA2_cabhn9.png', 'https://res.cloudinary.com/dsfkpn8ww/image/upload/v1782257416/%E5%8A%89%E6%8C%AF%E8%B1%AA3_bstmuv.png'],
        scripts: ['你好，我是劉振豪。', '世人總以為規則是種束縛。', '這枚護身符是我的續命信物。']
    },
    { 
        id: 'wen', name: '溫青', color: '#FFF799', // 淡黃色 (Light Yellow)
        audioIntro: ['溫青1.wav', '溫青2.wav', '溫青3.wav'], 
        audioBgm: '溫青BGM.mp3', 
        imgIntro: ['https://res.cloudinary.com/dsfkpn8ww/image/upload/v1782257393/%E6%BA%AB%E9%9D%921_bdqi2u.png', 'https://res.cloudinary.com/dsfkpn8ww/image/upload/v1782257401/%E6%BA%AB%E9%9D%922_s5sdxz.png', 'https://res.cloudinary.com/dsfkpn8ww/image/upload/v1782257398/%E6%BA%AB%E9%9D%923_makdjo.png'],
        scripts: ['你好，我是溫青。', '真正的財富是守護重要事物的能力。','等一下還要去打工。']
    },
    { 
        id: 'ni', name: '倪燄', color: '#FF4D4D', // 紅色 (Bright Red)
        audioIntro: ['倪燄1.wav', '倪燄2.wav', '倪燄3.wav'], 
        audioBgm: '倪燄BGM.mp3', 
        imgIntro: ['https://res.cloudinary.com/dsfkpn8ww/image/upload/v1782257376/%E5%80%AA%E7%87%841_kqaz3b.png', 'https://res.cloudinary.com/dsfkpn8ww/image/upload/v1782257381/%E5%80%AA%E7%87%842_kxipnc.png', 'https://res.cloudinary.com/dsfkpn8ww/image/upload/v1782257387/%E5%80%AA%E7%87%843_unmpbd.png'],
        scripts: ['配音君趕工中。', '配音君趕工中。', '配音君趕工中。']
    },
    { 
        id: 'lin', name: '林願初', color: '#98FB98', // 淡綠色 (PaleGreen)
        audioIntro: ['林願初1.wav', '林願初2.wav', '林願初3.wav'], 
        audioBgm: '林願初BGM.mp3', 
        imgIntro: ['https://res.cloudinary.com/dsfkpn8ww/image/upload/f_auto,q_auto/林願初1_exwylt', 'https://res.cloudinary.com/dsfkpn8ww/image/upload/v1782257363/%E6%9E%97%E9%A1%98%E5%88%9D2_loadj5.png', 'https://res.cloudinary.com/dsfkpn8ww/image/upload/v1782257368/%E6%9E%97%E9%A1%98%E5%88%9D3_t39cof.png'],
        scripts: ['你好呀，我是林願初。', '菩薩說我因果未了。', '坐著看世界。']
    },
    { 
        id: 'su', name: '蘇映安', color: '#FFB6C1', // 粉紅色 (LightPink)
        audioIntro: ['蘇映安1.wav', '蘇映安2.wav', '蘇映安3.wav'], 
        audioBgm: '蘇映安BGM.mp3', 
        imgIntro: ['https://res.cloudinary.com/dsfkpn8ww/image/upload/v1782257404/%E8%98%87%E6%98%A0%E5%AE%891_t1mxcm.png', 'https://res.cloudinary.com/dsfkpn8ww/image/upload/v1782257420/%E8%98%87%E6%98%A0%E5%AE%892_lojif4.png', 'https://res.cloudinary.com/dsfkpn8ww/image/upload/v1782257425/%E8%98%87%E6%98%A0%E5%AE%893_mutygc.png'],
        scripts: ['我是護理師蘇映安。', '無論發生什麼，太陽都會照常升起。', '生死就像四季輪迴。']
    },
    { 
        id: 'zhou', name: '周宛辭', color: '#D68AED', // 紫色 (Light Purple)
        audioIntro: ['周宛辭1.wav', '周宛辭2.wav', '周宛辭3.wav'], 
        audioBgm: '周宛辭BGM.mp3', 
        imgIntro: ['https://res.cloudinary.com/dsfkpn8ww/image/upload/v1782257705/%E5%91%A8%E5%AE%9B%E8%BE%AD1_p0vqcd.png', 'https://res.cloudinary.com/dsfkpn8ww/image/upload/v1782257707/%E5%91%A8%E5%AE%9B%E8%BE%AD2_j0clzi.png', 'https://res.cloudinary.com/dsfkpn8ww/image/upload/v1782257710/%E5%91%A8%E5%AE%9B%E8%BE%AD3_bnwt8g.png'],
        scripts: ['配音君趕工中。', '配音君趕工中。', '配音君趕工中。']
    }
];

// ==========================================
// 2. 全域變數與系統狀態
// ==========================================
const pages = {
    home: document.getElementById('page-home'),
    intro: document.getElementById('page-intro'),
    profile: document.getElementById('page-profile')
};

let currentGod = null;       // 記錄目前選擇的神使

// 音訊播放器初始化
let audioPlayer = new Audio(); // 專門處理幻燈片語音
let bgmPlayer = new Audio();   // 專門處理神使背景音樂 (BGM)
let homeBgmPlayer = new Audio('pagehomebgm.mp3'); // 首頁專屬星空 BGM

// 音量設定：語音 1.0 (最大)，BGM 類維持 0.1
audioPlayer.volume = 1.0; 
bgmPlayer.volume = 0.1;
homeBgmPlayer.volume = 1;
homeBgmPlayer.loop = true;

let slideTimeout = null;     // 幻燈片無語音時的防呆計時器
let timerIdle = null;        // 閒置防呆計時器

// ==========================================
// 3. 核心流轉邏輯
// ==========================================

// 初始化執行
function init() {
    renderHomeGods();
    initCanvasParticles();
    
    // 將返回按鈕移至 body 層級，使其能跨越 page-intro 顯示，並預設隱藏
    const btnBack = document.getElementById('btn-back');
    if (btnBack) {
        document.body.appendChild(btnBack);
        btnBack.style.display = 'none';
    }
    
    // 綁定返回按鈕
    document.getElementById('btn-back').addEventListener('click', goHome);
    
    // 綁定防呆機制：任何點擊都會重置閒置時間
    document.body.addEventListener('click', resetIdleTimer);

    // --- 新增：處理進入彈窗邏輯 ---
    const entryOverlay = document.getElementById('entry-overlay');
    const btnEnter = document.getElementById('btn-enter');

    // 確保首頁 BGM 音量設定正確
    homeBgmPlayer.volume = 0.8;

    // 點擊「進入星空」按鈕
    btnEnter.addEventListener('click', () => {
        // 1. 解鎖並播放首頁 BGM
        homeBgmPlayer.play().catch(() => console.log('首頁 BGM 播放失敗'));
        
        // 2. 隱藏互動彈窗，露出後方的星空首頁
        entryOverlay.classList.remove('active');
    });
}

// 全域變數：儲存游離神使的狀態與動畫 ID
let driftingGods = [];
let driftAnimationId = null;

// 渲染首頁神使按鈕並初始化物理狀態 (規劃安全區，避開字體與Logo，微調游動速度提升質感)
function renderHomeGods() {
    const container = document.getElementById('gods-container');
    container.innerHTML = ''; // 清空容器
    driftingGods = [];

    const w = window.innerWidth;
    const h = window.innerHeight;

    GODS.forEach((god, index) => {
        const btn = document.createElement('div');
        btn.className = 'god-btn';
        btn.style.setProperty('--god-color', god.color);
        btn.innerHTML = `<div class="god-dot"></div><div class="god-name">${god.name}</div>`;
        btn.addEventListener('click', () => startJourney(god));
        container.appendChild(btn);

        let startX, startY, speedX, speedY;
        
        // 【修改重點】：微調基礎速度與初始推力，讓動態更沉穩優雅
        const speedBase = 0.7; // 原為 1.2，降低亂數最高速
        const pushForce = 0.3; // 原為 0.5，降低從邊緣進場時的最低保底速度
        
        // 將神使平均分配到左方、右方、下方(角落)三個安全區域進入
        let edge = index % 3; 

        if (edge === 0) { 
            // 1. 從左方游入
            startX = -100;
            startY = h * 0.2 + Math.random() * (h * 0.6);
            speedX = Math.random() * speedBase + pushForce; // 向右
            speedY = (Math.random() - 0.5) * speedBase;
        } else if (edge === 1) { 
            // 2. 從右方游入
            startX = w + 100;
            startY = h * 0.2 + Math.random() * (h * 0.6);
            speedX = -(Math.random() * speedBase + pushForce); // 向左
            speedY = (Math.random() - 0.5) * speedBase;
        } else { 
            // 3. 從下方游入
            startX = Math.random() > 0.5 
                ? Math.random() * (w / 2 - 150) 
                : (w / 2 + 150) + Math.random() * (w / 2 - 150);
            startY = h + 100;
            
            speedX = (startX < w / 2 ? 1 : -1) * (Math.random() * speedBase + 0.1); 
            speedY = -(Math.random() * speedBase + pushForce); // 向上
        }

        driftingGods.push({ 
            el: btn, 
            dot: btn.querySelector('.god-dot'),
            x: startX, 
            y: startY, 
            vx: speedX, 
            vy: speedY 
        });
    });

    startDrifting();
}

// 啟動緩速游離與光影拖曳效果 (包含防重疊碰撞邏輯、避開 Logo 與頂部引言)
function startDrifting() {
    if (driftAnimationId) cancelAnimationFrame(driftAnimationId);
    
    const minDistance = 120;
    const logoEl = document.getElementById('logo-container');
    const quoteEl = document.getElementById('home-quote'); // 取得頂部文字元素

    function animate() {
        const w = window.innerWidth;
        const h = window.innerHeight;
        
        // 動態取得 Logo 目前的中心座標與排斥半徑
        const logoRect = logoEl.getBoundingClientRect();
        const logoX = logoRect.left + logoRect.width / 2;
        const logoY = logoRect.top + logoRect.height / 2;
        const logoRadius = Math.max(logoRect.width, logoRect.height) / 2 + 30;

        // 動態取得頂部文字的矩形範圍 (加上 40px 的安全排斥緩衝區)
        let quoteBounds = { left: 0, right: 0, top: 0, bottom: 0 };
        if (quoteEl) {
            const qr = quoteEl.getBoundingClientRect();
            quoteBounds.left = qr.left - 40;
            quoteBounds.right = qr.right + 40;
            quoteBounds.top = qr.top - 20;
            quoteBounds.bottom = qr.bottom + 40;
        }

        for (let i = 0; i < driftingGods.length; i++) {
            let node1 = driftingGods[i];

            // 1. 與 Logo 的圓形碰撞排斥邏輯
            let dxLogo = node1.x - logoX;
            let dyLogo = node1.y - logoY;
            let distLogo = Math.sqrt(dxLogo * dxLogo + dyLogo * dyLogo);

            if (distLogo > 0 && distLogo < logoRadius) {
                let overlap = logoRadius - distLogo;
                let nx = dxLogo / distLogo;
                let ny = dyLogo / distLogo;

                node1.x += nx * overlap;
                node1.y += ny * overlap;

                let vDotN = node1.vx * nx + node1.vy * ny;
                if (vDotN < 0) {
                    node1.vx -= 2 * vDotN * nx;
                    node1.vy -= 2 * vDotN * ny;
                }
            }

            // 2. 新增：與頂部文字的矩形碰撞排斥邏輯
            if (quoteEl) {
                if (node1.x > quoteBounds.left && node1.x < quoteBounds.right && 
                    node1.y > quoteBounds.top && node1.y < quoteBounds.bottom) {
                    
                    // 找出光點距離文字矩形哪一個邊緣最近，就往哪個邊緣推出去並反彈
                    let dLeft = Math.abs(node1.x - quoteBounds.left);
                    let dRight = Math.abs(node1.x - quoteBounds.right);
                    let dTop = Math.abs(node1.y - quoteBounds.top);
                    let dBottom = Math.abs(node1.y - quoteBounds.bottom);
                    
                    let minD = Math.min(dLeft, dRight, dTop, dBottom);
                    
                    if (minD === dLeft) { 
                        node1.x = quoteBounds.left; 
                        if (node1.vx > 0) node1.vx *= -1; 
                    } else if (minD === dRight) { 
                        node1.x = quoteBounds.right; 
                        if (node1.vx < 0) node1.vx *= -1; 
                    } else if (minD === dTop) { 
                        node1.y = quoteBounds.top; 
                        if (node1.vy > 0) node1.vy *= -1; 
                    } else if (minD === dBottom) { 
                        node1.y = quoteBounds.bottom; 
                        if (node1.vy < 0) node1.vy *= -1; 
                    }
                }
            }

            // 3. 神使節點之間的互斥碰撞邏輯
            for (let j = i + 1; j < driftingGods.length; j++) {
                let node2 = driftingGods[j];
                let dx = node2.x - node1.x;
                let dy = node2.y - node1.y;
                let dist = Math.sqrt(dx * dx + dy * dy);

                if (dist === 0) dist = 0.01; 

                if (dist < minDistance) {
                    let overlap = minDistance - dist;
                    let nx = dx / dist;
                    let ny = dy / dist;

                    node1.x -= nx * (overlap / 2);
                    node1.y -= ny * (overlap / 2);
                    node2.x += nx * (overlap / 2);
                    node2.y += ny * (overlap / 2);

                    let p = (node1.vx * nx + node1.vy * ny) - (node2.vx * nx + node2.vy * ny);
                    
                    node1.vx -= p * nx;
                    node1.vy -= p * ny;
                    node2.vx += p * nx;
                    node2.vy += p * ny;
                }
            }
        }

       // 4. 更新座標與柔和的邊界反彈 (允許從螢幕外進入，但出去會被彈回)
        driftingGods.forEach(godData => {
            godData.x += godData.vx;
            godData.y += godData.vy;

            // --- 修正邊界反彈邏輯 ---
            // 由於頂部有文字障礙物，我們將上方邊界 (top limit) 放寬，
            // 允許光點稍微跑到螢幕外一點點去繞過文字，才不會因為同時撞壁又撞字而卡住抖動。
            
            const edgeLimitX = 60;
            const edgeLimitYTop = -40; // 將上方邊界放寬到螢幕外 -40px
            const edgeLimitYBottom = h - 180;

            if (godData.x < edgeLimitX) {
                if (godData.vx < 0) godData.vx *= -1;
            } else if (godData.x > w - edgeLimitX) {
                if (godData.vx > 0) godData.vx *= -1;
            }

            if (godData.y < edgeLimitYTop) {
                if (godData.vy < 0) godData.vy *= -1; // 碰觸放寬後的上邊界才反彈
            } else if (godData.y > edgeLimitYBottom) {
                if (godData.vy > 0) godData.vy *= -1;
            }

            // 更新實際位置
            godData.el.style.transform = `translate(${godData.x}px, ${godData.y}px)`;
            
            let shadowOffsetX = -godData.vx * 15;
            let shadowOffsetY = -godData.vy * 15;
            
            godData.dot.style.boxShadow = `
                ${shadowOffsetX}px ${shadowOffsetY}px 25px 8px var(--god-color), 
                0 0 15px 5px var(--god-color)
            `;
        });
        
        driftAnimationId = requestAnimationFrame(animate);
    }
    animate();
}

// 修改原有的 switchPage，在離開首頁時暫停運算節省資源
const originalSwitchPage = switchPage;
switchPage = function(pageKey) {
    originalSwitchPage(pageKey);
    if (pageKey === 'home') {
        startDrifting();
    } else {
        cancelAnimationFrame(driftAnimationId);
    }
};

// 切換頁面 (強制關閉其他頁面，只顯示指定頁面)
function switchPage(pageKey) {
    Object.values(pages).forEach(p => p.classList.remove('active'));
    pages[pageKey].classList.add('active');
}

// 點擊神使：啟動過場
function startJourney(god) {
    if (currentGod !== null) return; // 鎖定狀態，防止連點
    currentGod = god;

    // 離開首頁，暫停首頁星空 BGM
    homeBgmPlayer.pause();

    document.body.classList.add('warping');

    setTimeout(() => {
        document.body.classList.remove('warping');
        playIntro(god);
    }, 1000);
}

// 進入前導展演
function playIntro(god) {
    // 確保進入幻燈片時返回按鈕是隱藏的
    document.getElementById('btn-back').style.display = 'none';

    switchPage('intro');
    
    const bgEl = document.getElementById('intro-bg');
    const subEl = document.getElementById('intro-subtitle');
    const introPage = document.getElementById('page-intro'); 
    let step = 0;
    let fadeTimeout = null; // 新增：控制漸顯漸隱的計時器

    // 啟動神使 BGM 並維持 0.1 音量
    if (god.audioBgm) {
        bgmPlayer.src = god.audioBgm;
        bgmPlayer.volume = 0.1; 
        bgmPlayer.loop = true;
        bgmPlayer.play().catch(() => console.log('BGM 播放失敗'));
    }

    // 單張投影片切換邏輯
    function nextSlide() {
        clearTimeout(slideTimeout); // 清除防呆計時
        clearTimeout(fadeTimeout);  // 清除未完成的漸變計時
        audioPlayer.onended = null; // 解除上一張音檔的結束監聽事件

        if (step >= 3) { 
            // 3張配音播完或點擊打斷後，停留在第三張畫面，清除點擊事件
            introPage.onclick = null;
            // 在左上角顯示返回按鍵
            document.getElementById('btn-back').style.display = 'block';
            
            // 👉 補上這兩行：強制把最後一張的畫面和字幕顯示回來
            bgEl.style.opacity = 1; 
            subEl.classList.add('show');

            // 同步啟動 3 分鐘無人操作自動回到星空的閒置防呆機制
            resetIdleTimer();
            return;
        }
        
        let currentStep = step; // 記住當前的 step，避免快速點擊產生錯亂
        step++;

        let hasValidAudio = false;

        // 判斷並掛載對應幻燈片的語音
        if (Array.isArray(god.audioIntro) && god.audioIntro[currentStep]) {
            audioPlayer.src = god.audioIntro[currentStep];
            hasValidAudio = true;
        } else if (typeof god.audioIntro === 'string' && currentStep === 0) {
            audioPlayer.src = god.audioIntro;
            hasValidAudio = true;
        }

        if (hasValidAudio) {
            audioPlayer.volume = 1.0; // 確保語音維持 1.0 音量
            audioPlayer.loop = false;
            
            // 播放音檔，並在播放完畢時觸發 nextSlide
            audioPlayer.play().then(() => {
                audioPlayer.onended = nextSlide; 
            }).catch(() => {
                console.log(`第 ${currentStep + 1} 張幻燈片音檔播放失敗`);
                // 若播放被阻擋或失敗，啟動 4 秒後自動切換防呆機制
                slideTimeout = setTimeout(nextSlide, 4000);
            });
        } else {
            // 若未配置音檔，啟動 4 秒後自動切換
            slideTimeout = setTimeout(nextSlide, 4000);
        }

        // --- 視覺切換：加入漸顯漸隱與黑色底 ---
        bgEl.style.opacity = 0; // 圖片與底色先漸隱
        subEl.classList.remove('show'); // 字幕漸隱

        fadeTimeout = setTimeout(() => {
            // 等待 400ms (漸隱快結束時) 替換圖片與文字
            bgEl.style.backgroundImage = `url(${god.imgIntro[currentStep]})`;
            bgEl.style.backgroundColor = '#000000'; // 強制確保底色為純黑
            
            bgEl.style.opacity = 1; // 換圖後重新漸顯

            subEl.innerText = god.scripts[currentStep];
            subEl.classList.add('show');
        }, 400); // 配合 CSS 中設定的 0.4s 漸變時間
    }

    // 立即執行第一張
    nextSlide();

    // 點擊畫面任意處：強制打斷目前播放進度，直接跳下一張
    introPage.onclick = () => {
        clearTimeout(slideTimeout); 
        clearTimeout(fadeTimeout);  // 避免漸變過程被點擊干擾
        audioPlayer.pause();        // 打斷目前語音
        audioPlayer.onended = null; // 移除未觸發的結束監聽
        
        // 使用者點擊時，立刻進入全黑狀態準備下一張
        bgEl.style.opacity = 0;
        subEl.classList.remove('show');
        
        nextSlide();                // 立即手動執行切換
    };
}

// 進入角色介紹內頁 (此功能依需求已由 nextSlide 內部判斷取代，不再主動切換)
function goProfile(god) {
    clearTimeout(slideTimeout); 
    audioPlayer.pause();
    document.getElementById('intro-subtitle').classList.remove('show'); 

    switchPage('profile');
    
    const profileEl = document.getElementById('profile-content');
    profileEl.style.backgroundImage = `url(${god.imgProfile})`;
    profileEl.style.backgroundColor = god.color;

    // 確認內頁 BGM 依然是 0.1
    bgmPlayer.volume = 0.1; 
    
    resetIdleTimer(); 
}

// 返回首頁與重置狀態
function goHome() {
    clearTimeout(slideTimeout);
    clearTimeout(timerIdle);
    
    audioPlayer.pause();
    bgmPlayer.pause(); 
    bgmPlayer.currentTime = 0; 
    
    // 返回首頁時隱藏返回按鈕
    document.getElementById('btn-back').style.display = 'none';
    
    currentGod = null;
    switchPage('home');

    // 恢復首頁星空 BGM
    homeBgmPlayer.play().catch(() => console.log('首頁 BGM 恢復失敗'));
}

// 閒置防呆機制：停留超過 3 分鐘自動回首頁
function resetIdleTimer() {
    clearTimeout(timerIdle);
    if (currentGod !== null) {
        timerIdle = setTimeout(goHome, 3 * 60 * 1000);
    }
}

// ==========================================
// 4. 背景星空粒子系統 (極簡安全版)
// ==========================================
function initCanvasParticles() {
    const canvas = document.getElementById('bg-canvas');
    const ctx = canvas.getContext('2d');
    let width, height;
    const particles = [];

    function resize() {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resize);
    resize();

    for (let i = 0; i < 100; i++) {
        particles.push({
            x: Math.random() * width,
            y: Math.random() * height,
            vx: (Math.random() - 0.5) * 0.5,
            vy: (Math.random() - 0.5) * 0.5,
            size: Math.random() * 2
        });
    }

    for (let i = 0; i < 100; i++) {
        particles.push({
            x: Math.random() * width,
            y: Math.random() * height,
            vx: (Math.random() - 0.5) * 0.5,
            vy: (Math.random() - 0.5) * 0.5,
            size: Math.random() * 2
        });
    }

    function draw() {
        ctx.clearRect(0, 0, width, height);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
        
        particles.forEach(p => {
            p.x += p.vx;
            p.y += p.vy;
            
            if (p.x < 0 || p.x > width) p.vx *= -1;
            if (p.y < 0 || p.y > height) p.vy *= -1;

            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fill();
        });
        requestAnimationFrame(draw);
    }
    draw();
}

// 啟動系統
init();