// State
let currentCardIndex = 0;
let isFlipped = false;
let isReviewMode = false;
let activeFlashcards = []; // For filtering

// DOM Elements
// DOM Elements
const views = {
    dashboard: document.getElementById('view-dashboard'),
    flashcards: document.getElementById('view-flashcards'),
    anatomy: document.getElementById('view-anatomy'),
    detective: document.getElementById('view-detective'),
    profile: document.getElementById('view-profile')
};

const navItems = {
    dashboard: document.getElementById('nav-dashboard'),
    flashcards: document.getElementById('nav-flashcards'),
    anatomy: document.getElementById('nav-anatomy'),
    detective: document.getElementById('nav-detective'),
    profile: document.getElementById('nav-profile')
};

const cardElement = document.getElementById('current-flashcard');
const cardControls = document.getElementById('card-controls');

// Anatomy Elements
const anatomyModal = document.getElementById('anatomy-modal');

// Init
document.addEventListener('DOMContentLoaded', () => {
    loadDailyTerm();

    // Initialize User Flashcards
    loadUserCards();

    // Default active set
    activeFlashcards = appData.flashcards;

    // Load last viewed card or default to 0
    const lastIndex = parseInt(localStorage.getItem('vetlite_last_card_index') || '0');
    loadCard(lastIndex);

    setupInteractions();

    // Initialize Anatomy with default states
    switchSpecies('dog');

    // Initialize Detective if available
    // Initialize Detective if available
    if (appData.clinicalCases) loadCase(0);

    // Initialize Profile Stats (Sync Header)
    updateProfileStats();
});

function loadUserCards() {
    const saved = localStorage.getItem('vetlite_user_cards');
    if (saved) {
        const userCards = JSON.parse(saved);
        // Append user cards to default cards
        appData.flashcards = [...appData.flashcards, ...userCards];
        // Reload card view in case we want to show updated count or shuffle
        loadCard(0);
    }
}

// Add Card Modal Logic
const addCardModal = document.getElementById('add-card-modal');

function openAddCardModal() {
    addCardModal.classList.remove('hidden');
}

function closeAddCardModal() {
    addCardModal.classList.add('hidden');
    // Clear inputs
    document.getElementById('new-card-q').value = '';
    document.getElementById('new-card-a').value = '';
    document.getElementById('new-card-e').value = '';
}

function saveNewCard() {
    const q = document.getElementById('new-card-q').value.trim();
    const a = document.getElementById('new-card-a').value.trim();
    const e = document.getElementById('new-card-e').value.trim();

    if (!q || !a) {
        alert('請至少填寫題目與答案！');
        return;
    }

    const newCard = {
        question: q,
        answer: a,
        explanation: e || "（使用者自訂筆記）",
        difficulty: "user"
    };

    // 1. Update Runtime State
    appData.flashcards.push(newCard);

    // 2. Save to Local Storage (Only user cards)
    const saved = localStorage.getItem('vetlite_user_cards');
    const userCards = saved ? JSON.parse(saved) : [];
    userCards.push(newCard);
    localStorage.setItem('vetlite_user_cards', JSON.stringify(userCards));

    // 3. Feedback
    alert('卡片已新增！');
    closeAddCardModal();

    // Optional: Jump to the new card
    loadCard(appData.flashcards.length - 1);
}

// Global Exports
window.openAddCardModal = openAddCardModal;
window.closeAddCardModal = closeAddAddCardModal;
window.saveNewCard = saveNewCard;

// Navigation
function switchTab(tabName) {
    // If switching to profile, check logic
    if (tabName === 'profile') {
        updateProfileStats();
    }

    if (!views[tabName] && !document.getElementById(`view-${tabName}`)) {
        alert('此功能正在開發中 (Phase 3)');
        return;
    }

    // Hide all views
    document.querySelectorAll('.view').forEach(el => el.classList.remove('active-view'));
    document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));

    // Show target view
    const targetView = document.getElementById(`view-${tabName}`);
    const targetNav = document.getElementById(`nav-${tabName}`);

    if (targetView) targetView.classList.add('active-view');
    if (targetNav) targetNav.classList.add('active');
}

// Daily Term Logic
function loadDailyTerm() {
    if (!appData.dailyTerms) return;
    const termData = appData.dailyTerms[Math.floor(Math.random() * appData.dailyTerms.length)];
    const container = document.getElementById('daily-term-content');

    if (container) {
        container.innerHTML = `
            <span class="term-tag">${termData.tag}</span>
            <h4>${termData.term}</h4>
            <p>${termData.description}</p>
        `;
    }
}

// Flashcard Logic
function setupInteractions() {
    if (cardElement) {
        cardElement.addEventListener('click', () => {
            if (!isFlipped) {
                flashcardFlip(true);
            } else {
                flashcardFlip(false);
            }
        });
    }
}

function flashcardFlip(flip) {
    isFlipped = flip;
    if (flip) {
        cardElement.classList.add('flipped');
        // Show controls after a slight delay
        setTimeout(() => {
            cardControls.style.display = 'block';
        }, 300);

        // [TRACKING] Mark card as seen
        trackFlashcardSeen(currentCardIndex);

    } else {
        cardElement.classList.remove('flipped');
        cardControls.style.display = 'none';
    }
}

function trackFlashcardSeen(index) {
    const seen = new Set(JSON.parse(localStorage.getItem('vetlite_flashcards_seen') || '[]'));
    seen.add(index);
    localStorage.setItem('vetlite_flashcards_seen', JSON.stringify([...seen]));
}

function loadCard(index) {
    if (!activeFlashcards || activeFlashcards.length === 0) {
        if (isReviewMode) {
            alert("錯題本是空的！請先去練習並標記一些「還不熟」的卡片。");
            toggleReviewMode();
        }
        return;
    }

    if (index >= activeFlashcards.length) {
        index = 0; // Loop back
    }
    currentCardIndex = index;
    const data = activeFlashcards[index];

    // Update text
    const qEl = document.getElementById('card-question');
    const aEl = document.getElementById('card-answer');
    const eEl = document.getElementById('card-explanation');
    const audioBtn = document.getElementById('card-audio-btn');

    if (qEl) qEl.innerText = data.question;
    if (aEl) aEl.innerText = data.answer;
    if (eEl) eEl.innerText = data.explanation;

    // Audio Button Logic
    if (audioBtn) {
        if (data.audio) {
            audioBtn.classList.remove('hidden');
        } else {
            audioBtn.classList.add('hidden');
        }
    }

    // Reset state
    flashcardFlip(false);

    // Save progress (Reference index in current set)
    // In review mode we don't save index to main progress
    if (!isReviewMode) {
        localStorage.setItem('vetlite_last_card_index', index);
    }
}

function nextCard() {
    loadCard(currentCardIndex + 1);
}

function handleCardResult(result) {
    console.log(`User marked card ${currentCardIndex} as ${result}`);

    const currentCard = activeFlashcards[currentCardIndex];

    if (result === 'hard') {
        // Add to review list
        const reviewList = JSON.parse(localStorage.getItem('vetlite_review_list') || '[]');
        if (!reviewList.includes(currentCard.id)) {
            reviewList.push(currentCard.id);
            localStorage.setItem('vetlite_review_list', JSON.stringify(reviewList));
        }
    } else if (result === 'easy' && isReviewMode) {
        // Remove from review list if mastered
        let reviewList = JSON.parse(localStorage.getItem('vetlite_review_list') || '[]');
        reviewList = reviewList.filter(id => id !== currentCard.id);
        localStorage.setItem('vetlite_review_list', JSON.stringify(reviewList));

        // Update current view list
        activeFlashcards = activeFlashcards.filter(c => c.id !== currentCard.id);
        if (activeFlashcards.length === 0) {
            alert('恭喜！你已經複習完所有錯題了！');
            toggleReviewMode();
            return;
        }
    }

    nextCard();
}

function toggleReviewMode() {
    isReviewMode = !isReviewMode;
    const btn = document.getElementById('btn-review-toggle');

    if (isReviewMode) {
        btn.classList.add('active-mode');
        // Filter cards
        const reviewList = JSON.parse(localStorage.getItem('vetlite_review_list') || '[]');
        activeFlashcards = appData.flashcards.filter(c => reviewList.includes(c.id));

        if (activeFlashcards.length === 0) {
            alert('目前沒有標記為「還不熟」的卡片喔！');
            toggleReviewMode(); // revert
            return;
        }
    } else {
        btn.classList.remove('active-mode');
        activeFlashcards = appData.flashcards;
    }

    loadCard(0);
}

// Audio Logic
function playAudio(e, type = 'card') {
    e.stopPropagation(); // prevent card flip
    const btn = e.currentTarget;
    if (btn.classList.contains('playing')) return;

    btn.classList.add('playing');

    // Simulate playing (Since we don't have real files)
    const originalText = btn.innerHTML;
    btn.innerHTML = '<ion-icon name="volume-high"></ion-icon> 播放中...';

    setTimeout(() => {
        btn.classList.remove('playing');
        btn.innerHTML = originalText;
    }, 2000);
}

// Level Up Logic
function closeLevelUp() {
    document.getElementById('level-up-overlay').classList.add('hidden');
}

function createConfetti() {
    const container = document.querySelector('.confetti-container');
    if (!container) return;
    container.innerHTML = '';

    const colors = ['#38BDF8', '#34D399', '#F43F5E', '#FBBF24', '#A78BFA'];

    for (let i = 0; i < 50; i++) {
        const dot = document.createElement('div');
        dot.style.position = 'absolute';
        dot.style.width = '10px';
        dot.style.height = '10px';
        dot.style.background = colors[Math.floor(Math.random() * colors.length)];
        dot.style.left = Math.random() * 100 + '%';
        dot.style.top = '-10px';
        dot.style.borderRadius = '50%';
        dot.style.opacity = Math.random();
        dot.style.animation = `fall ${Math.random() * 3 + 2}s linear forwards`;
        container.appendChild(dot);
    }

    // Dynamically add keyframes if not exists
    if (!document.getElementById('confetti-style')) {
        const style = document.createElement('style');
        style.id = 'confetti-style';
        style.innerHTML = `
            @keyframes fall {
                to { transform: translateY(100vh) rotate(720deg); }
            }
        `;
        document.head.appendChild(style);
    }
}

// Anatomy Logic
let currentSpecies = 'dog';

function switchSpecies(species) {
    currentSpecies = species;

    // Update Tab UI
    const speciesList = ['dog', 'cat', 'bird', 'horse', 'fish'];
    const tabs = document.querySelectorAll('.species-tab');

    tabs.forEach(tab => tab.classList.remove('active'));

    // Find tab index logic might need adjustment if tabs order changes, keeping it simple:
    // Actually simpler to just check text content or data attr, but let's stick to index based on HTML assumption or class check.
    // For robustness, let's just highlight the one clicked.
    // Since this function is called by onclick, we might update UI logic separately or assume structure.
    // Re-implementing original logic:
    const map = ['dog', 'cat', 'bird', 'horse', 'fish'];
    const activeIndex = map.indexOf(species);
    if (activeIndex >= 0 && tabs[activeIndex]) tabs[activeIndex].classList.add('active');


    // Update Visuals
    ['dog', 'cat', 'bird', 'horse', 'fish'].forEach(s => {
        const el = document.getElementById(`silhouette-${s}`);
        if (el) el.classList.add('hidden');
    });
    const target = document.getElementById(`silhouette-${species}`);
    if (target) target.classList.remove('hidden');

    // Reload Points
    setupAnatomy();
}

function setupAnatomy() {
    const layer = document.getElementById('hotspots-layer');
    if (!layer || !appData.anatomyPoints) return;

    layer.innerHTML = ''; // clear

    const points = appData.anatomyPoints[currentSpecies];
    if (!points) return;

    points.forEach(point => {
        const spot = document.createElement('div');
        spot.className = 'hotspot';
        // Add specific theme classes
        if (currentSpecies === 'cat') spot.classList.add('cat-theme');
        if (currentSpecies === 'bird') spot.classList.add('bird-theme');
        if (currentSpecies === 'horse') spot.classList.add('horse-theme');
        if (currentSpecies === 'fish') spot.classList.add('fish-theme');

        spot.style.left = point.x + '%';
        spot.style.top = point.y + '%';
        spot.innerHTML = '<ion-icon name="add"></ion-icon>';

        spot.addEventListener('click', () => openAnatomyModal(point));

        layer.appendChild(spot);
    });
}

function openAnatomyModal(pointData) {
    const catEl = document.getElementById('anatomy-category');
    const titleEl = document.getElementById('anatomy-title');
    const descEl = document.getElementById('anatomy-desc');

    if (catEl) catEl.innerText = pointData.category;
    if (titleEl) titleEl.innerText = pointData.title;
    if (descEl) descEl.innerText = pointData.content;

    if (anatomyModal) anatomyModal.classList.remove('hidden');

    // [TRACKING] Mark anatomy point as seen
    const uniqueId = `${currentSpecies}-${pointData.title}`;
    trackAnatomySeen(uniqueId);
}

function trackAnatomySeen(id) {
    const seen = new Set(JSON.parse(localStorage.getItem('vetlite_anatomy_seen') || '[]'));
    seen.add(id);
    localStorage.setItem('vetlite_anatomy_seen', JSON.stringify([...seen]));
}

function closeAnatomyModal() {
    if (anatomyModal) anatomyModal.classList.add('hidden');
}

// Clinical Detective Logic (Loader part)
function loadCase(index) {
    if (!appData.clinicalCases) return;

    if (index >= appData.clinicalCases.length) {
        index = 0; // Loop back
    }
    currentCaseIndex = index;
    isCaseSolved = false;

    const caseData = appData.clinicalCases[index];

    // Update Header
    const patientEl = document.getElementById('case-patient');
    const symptomEl = document.getElementById('case-symptom');
    const iconEl = document.getElementById('case-icon');

    if (patientEl) patientEl.innerText = caseData.patient;
    if (symptomEl) symptomEl.innerText = caseData.symptom;

    // Icon Logic
    const icons = { dog: '🐶', cat: '🐱', bird: '🐦', horse: '🐴', fish: '🐠' };
    if (iconEl) iconEl.innerText = icons[caseData.species] || '🐾';

    // Reset State
    const feedbackEl = document.getElementById('case-feedback');
    if (feedbackEl) {
        feedbackEl.classList.add('hidden');
        feedbackEl.className = 'case-feedback hidden';
    }

    // Render Options
    const optionsContainer = document.getElementById('case-options');
    if (optionsContainer) {
        optionsContainer.innerHTML = '';

        caseData.options.forEach(opt => {
            const btn = document.createElement('button');
            btn.className = 'choice-btn';
            btn.innerHTML = `<span>${opt.text}</span> <ion-icon name="help-circle-outline"></ion-icon>`;
            btn.onclick = () => checkCaseAnswer(opt, btn);
            optionsContainer.appendChild(btn);
        });
    }
}

function loadNextCase() {
    loadCase(currentCaseIndex + 1);
}

function checkCaseAnswer(option, btnElement) {
    if (isCaseSolved) return; // Prevent multiple clicks after solve

    const feedbackEl = document.getElementById('case-feedback');
    feedbackEl.classList.remove('hidden');

    // Reset all buttons style
    document.querySelectorAll('.choice-btn').forEach(b => {
        b.classList.remove('correct', 'wrong');
        b.querySelector('ion-icon').name = 'ellipse-outline';
    });

    if (option.correct) {
        // WINNER
        isCaseSolved = true;
        btnElement.classList.add('correct');
        btnElement.querySelector('ion-icon').name = 'checkmark-circle';

        feedbackEl.className = 'case-feedback correct';
        feedbackEl.innerHTML = `<h4>診斷正確！</h4> ${option.feedback}`;

        // Track stats
        let doneCount = parseInt(localStorage.getItem('vetlite_cases_done') || '0');
        localStorage.setItem('vetlite_cases_done', doneCount + 1);

    } else {
        // TRY AGAIN
        btnElement.classList.add('wrong');
        btnElement.querySelector('ion-icon').name = 'close-circle';

        feedbackEl.className = 'case-feedback wrong';
        feedbackEl.innerHTML = `<h4>診斷錯誤</h4> ${option.feedback}`;
    }
}

// ... (loadNextCase)

// Profile Logic
function updateProfileStats() {
    // 1. Flashcards Progress (Seen / Total)
    const seenCards = JSON.parse(localStorage.getItem('vetlite_flashcards_seen') || '[]').length;

    const savedUserCards = localStorage.getItem('vetlite_user_cards');
    const userCount = savedUserCards ? JSON.parse(savedUserCards).length : 0;
    const totalCards = 100 + userCount;

    const fcEl = document.getElementById('stat-flashcards');
    if (fcEl) fcEl.innerText = `${seenCards} / ${totalCards}`;

    // 2. Cases Done
    const casesDone = localStorage.getItem('vetlite_cases_done') || '0';
    const casesEl = document.getElementById('stat-cases');
    if (casesEl) casesEl.innerText = casesDone;

    // 3. Anatomy Progress (Seen / Total Points)
    const seenAnatomy = JSON.parse(localStorage.getItem('vetlite_anatomy_seen') || '[]').length;

    // Calculate total anatomy points dynamically
    let totalPoints = 0;
    if (appData.anatomyPoints) {
        Object.values(appData.anatomyPoints).forEach(arr => totalPoints += arr.length);
    }
    const percent = totalPoints > 0 ? Math.round((seenAnatomy / totalPoints) * 100) : 0;

    // Use specific selector for anatomy card or add ID in HTML if possible. 
    // Assuming structure: .stat-card:nth-child(3) .stat-value
    const anatomyEl = document.querySelectorAll('.stat-card')[2].querySelector('.stat-value');
    if (anatomyEl) anatomyEl.innerText = `${percent}%`;

    // XP Calculation
    // Simple logic: Seen = 5XP, Case = 50XP
    const xp = (seenCards * 5) + (parseInt(casesDone) * 50);
    const xpBar = document.querySelector('.xp-bar');
    const xpText = document.querySelector('.xp-text');
    const roleEl = document.getElementById('profile-role');

    // Cap at 1000 for Lv 5
    const maxXp = 1000;
    const currentXp = Math.min(xp, maxXp);
    const progress = (currentXp / maxXp) * 100;

    let role = "Lv. 1 見習生";
    if (currentXp >= 200) role = "Lv. 2 實習醫生";
    if (currentXp >= 400) role = "Lv. 3 總醫師";
    if (currentXp >= 700) role = "Lv. 4 專科醫師";
    if (currentXp >= 1000) role = "Lv. 5 院長級";

    // Gamification Check: Level Up
    const previousRole = localStorage.getItem('vetlite_last_role') || "Lv. 1 見習生";
    if (role !== previousRole && currentXp > 0) {
        // Trigger Level Up Modal
        const overlay = document.getElementById('level-up-overlay');
        const badgeTitle = document.getElementById('new-level-title');

        if (overlay && badgeTitle) {
            badgeTitle.innerText = role;
            overlay.classList.remove('hidden');
            createConfetti();
        }
        localStorage.setItem('vetlite_last_role', role);
    }

    if (xpBar) xpBar.style.width = `${progress}%`;
    if (xpText) xpText.innerText = `EXP: ${currentXp} / ${maxXp}`;
    if (roleEl) roleEl.innerText = role;

    // Sync header badge if user goes to dashboard
    // Sync header badge
    const headerBadge = document.querySelector('header .level-badge');
    if (headerBadge) {
        headerBadge.innerText = role;
    }
}

function resetData() {
    if (confirm('確定要清除所有學習紀錄與自訂卡片嗎？\n此動作將重置：\n- 自訂卡片\n- 卡片閱讀進度\n- 臨床病例診斷紀錄\n- 解剖探索進度')) {
        localStorage.removeItem('vetlite_user_cards');
        localStorage.removeItem('vetlite_cases_done');
        localStorage.removeItem('vetlite_flashcards_seen');
        localStorage.removeItem('vetlite_anatomy_seen');
        location.reload();
    }
}

// Global scope for onclick handlers in HTML
window.switchTab = switchTab;
window.nextCard = nextCard;
window.handleCardResult = handleCardResult;
window.closeAnatomyModal = closeAnatomyModal;
window.switchSpecies = switchSpecies;
window.loadCase = loadCase;
window.checkCaseAnswer = checkCaseAnswer;
window.loadNextCase = loadNextCase;
window.resetData = resetData;
window.toggleReviewMode = toggleReviewMode;
window.playAudio = playAudio;
window.closeLevelUp = closeLevelUp;
