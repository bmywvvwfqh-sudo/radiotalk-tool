// RadioTalk - Core Application Logic

// Preset Commands Dictionary
const PRESET_COMMANDS = {
    breathing: [
        {
            id: 'inhale_hold',
            type: 'breath-hold',
            icon: 'fa-lungs',
            title: '吸氣，憋住氣',
            translations: {
                taiwanese: { text: '吸氣，共氣頂咧', romaji: 'Suh-khuì, kā khuì tíng--leh' },
                english: { text: 'Breathe in, and hold your breath', romaji: 'Breathe in and hold' },
                vietnamese: { text: 'Hít vào, và nín thở', romaji: 'Hít vào, nín thở' },
                thai: { text: 'หายใจเข้าแล้วกลั้นหายใจไว้', romaji: 'Hai-chai-khao laew klan hai-chai wai' },
                indonesian: { text: 'Tarik napas, dan tahan napas Anda', romaji: 'Tarik napas, tahan napas' },
                filipino: { text: 'Huminga nang malalim, at pigilan ang paghinga', romaji: 'Huminga, pigilan ang paghinga' },
                korean: { text: '숨을 들이마시고 참으세요', romaji: 'Sum-eul deurimasigo chameuseyo' },
                japanese: { text: '息を吸って、止めてください', romaji: 'Iki wo sutte, tomete kudasai' }
            }
        },
        {
            id: 'exhale_hold',
            type: 'breath-hold',
            icon: 'fa-lungs-virus',
            title: '吐氣，憋住氣',
            translations: {
                taiwanese: { text: '吐氣，共氣頂咧', romaji: 'Thòo-khuì, kā khuì tíng--leh' },
                english: { text: 'Breathe out, and hold your breath', romaji: 'Breathe out and hold' },
                vietnamese: { text: 'Thở ra, và nín thở', romaji: 'Thở ra, nín thở' },
                thai: { text: 'หายใจออกแล้วกลั้นหายใจไว้', romaji: 'Hai-chai-ok laew klan hai-chai wai' },
                indonesian: { text: 'Hembuskan napas, dan tahan napas Anda', romaji: 'Hembuskan napas, tahan napas' },
                filipino: { text: 'Huminga nang palabas, at pigilan ang paghinga', romaji: 'Huminga nang palabas, pigilan ang paghinga' },
                korean: { text: '숨을 내쉬고 참으세요', romaji: 'Sum-eul naeswigo chameuseyo' },
                japanese: { text: '息を吐いて、止めてください', romaji: 'Iki wo haite, tomete kudasai' }
            }
        },
        {
            id: 'breathe_normal',
            type: 'breath-normal',
            icon: 'fa-wind',
            title: '可以正常呼吸了',
            translations: {
                taiwanese: { text: '可以正常呼吸矣', romaji: 'Khó-í tsìng-siông hoo-hip--ah' },
                english: { text: 'You can breathe normally now', romaji: 'Breathe normally' },
                vietnamese: { text: 'Bây giờ bạn có thể thở bình thường', romaji: 'Thở bình thường' },
                thai: { text: 'หายใจตามปกติได้แล้วครับ / ค่ะ', romaji: 'Hai-chai tam pok-ka-ti dai laew' },
                indonesian: { text: 'Anda bisa bernapas dengan normal sekarang', romaji: 'Bernapas normal' },
                filipino: { text: 'Maaari ka nang huminga nang normal', romaji: 'Huminga nang normal' },
                korean: { text: '이제 편하게 숨 쉬세요', romaji: 'Ije pyeonhage sum swiseyo' },
                japanese: { text: '息を吐いて、楽にしてください', romaji: 'Iki wo haite, raku ni shite kudasai' }
            }
        },
        {
            id: 'deep_breath',
            type: 'breath-normal',
            icon: 'fa-expand',
            title: '請深呼吸',
            translations: {
                taiwanese: { text: '請深呼吸', romaji: 'Tshiánn tshin-hoo-hip' },
                english: { text: 'Please take a deep breath', romaji: 'Take a deep breath' },
                vietnamese: { text: 'Vui lòng hít thở sâu', romaji: 'Hít thở sâu' },
                thai: { text: 'กรุณาสูดหายใจเข้าลึกๆ ครับ / ค่ะ', romaji: 'Ka-ru-na sut hai-chai khao luek-luek' },
                indonesian: { text: 'Silakan tarik napas dalam-dalam', romaji: 'Tarik napas dalam-dalam' },
                filipino: { text: 'Mangyaring huminga nang malalim', romaji: 'Huminga nang malalim' },
                korean: { text: '심호흡 해주세요', romaji: 'Sim-ho-heup hae-juseyo' },
                japanese: { text: '深呼吸をしてください', romaji: 'Shin-kokyuu wo shite kudasai' }
            }
        }
    ],
    posture: [
        {
            id: 'lie_down',
            type: 'posture',
            icon: 'fa-bed',
            title: '請躺下',
            translations: {
                taiwanese: { text: '請倒落來', romaji: 'Tshiánn tó--lo̍h-lâi' },
                english: { text: 'Please lie down', romaji: 'Lie down' },
                vietnamese: { text: 'Vui lòng nằm xuống', romaji: 'Nằm xuống' },
                thai: { text: 'กรุณานอนลงครับ / ค่ะ', romaji: 'Ka-ru-na non long' },
                indonesian: { text: 'Silakan berbaring', romaji: 'Silakan berbaring' },
                filipino: { text: 'Mangyaring humiga', romaji: 'Huminga o humiga' },
                korean: { text: '누워 주세요', romaji: 'Nuweo juseyo' },
                japanese: { text: '横になってください', romaji: 'Yoko ni natte kudasai' }
            }
        },
        {
            id: 'do_not_move',
            type: 'posture',
            icon: 'fa-hand',
            title: '請不要動',
            translations: {
                taiwanese: { text: '請毋通郁', romaji: 'Tshiánn m̄-thang ut' },
                english: { text: 'Please do not move', romaji: 'Do not move' },
                vietnamese: { text: 'Vui lòng không cử động', romaji: 'Không cử động' },
                thai: { text: 'กรุณาอย่าขยับครับ / ค่ะ', romaji: 'Ka-ru-na ya kha-yap' },
                indonesian: { text: 'Harap jangan bergerak', romaji: 'Jangan bergerak' },
                filipino: { text: 'Mangyaring huwag gumalaw', romaji: 'Huwag gumalaw' },
                korean: { text: '움직이지 마세요', romaji: 'Umjigiji maseyo' },
                japanese: { text: '動かないでください', romaji: 'Ugokanaide kudasai' }
            }
        },
        {
            id: 'move_up',
            type: 'posture',
            icon: 'fa-arrow-up',
            title: '請往上移一點',
            translations: {
                taiwanese: { text: '請往上行一步', romaji: 'Tshiánn往上移一點' },
                english: { text: 'Please move up a little bit', romaji: 'Move up a bit' },
                vietnamese: { text: 'Vui lòng di chuyển lên trên một chút', romaji: 'Di chuyển lên một chút' },
                thai: { text: 'กรุณาขยับขึ้นไปข้างบนหน่อยครับ / ค่ะ', romaji: 'Ka-ru-na kha-yap khuen pai khang bon noi' },
                indonesian: { text: 'Silakan geser ke atas sedikit', romaji: 'Geser ke atas sedikit' },
                filipino: { text: 'Mangyaring umusog pataas nang kaunti', romaji: 'Umusog pataas nang kaunti' },
                korean: { text: '위로 조금만 움직여 주세요', romaji: 'Wiro jogeumman umjigyeo juseyo' },
                japanese: { text: 'もう少し上へ移動してください', romaji: 'Mou sukoshi ue he idou shite kudasai' }
            }
        },
        {
            id: 'lie_right_side',
            type: 'posture',
            icon: 'fa-user-nurse',
            title: '請向右側躺',
            translations: {
                taiwanese: { text: '請倒正爿', romaji: 'Tshiánn tó tsiànn-pîng' },
                english: { text: 'Please lie on your right side', romaji: 'Lie on right side' },
                vietnamese: { text: 'Vui lòng nằm nghiêng sang bên phải', romaji: 'Nằm nghiêng bên phải' },
                thai: { text: 'กรุณานอนตะแคงขวาครับ / ค่ะ', romaji: 'Ka-ru-na non ta-khaeng khwa' },
                indonesian: { text: 'Silakan berbaring miring ke kanan', romaji: 'Miring ke kanan' },
                filipino: { text: 'Mangyaring humiga nang nakatagilid sa kanan', romaji: 'Nakatagilid sa kanan' },
                korean: { text: '오른쪽으로 돌아누워 주세요', romaji: 'Oreunjogeuro doranuweo juseyo' },
                japanese: { text: '右側を下にして横になってください', romaji: 'Migi gawa wo shita ni shite yoko ni' }
            }
        },
        {
            id: 'hands_up_head',
            type: 'posture',
            icon: 'fa-hands',
            title: '請雙手抬高抱頭',
            translations: {
                taiwanese: { text: '請手攑起來抱頭殼', romaji: 'Tshiánn tshiú gia̍h--khí-lâi phō thâu-khak' },
                english: { text: 'Please raise both hands and hold your head', romaji: 'Hands up and hold head' },
                vietnamese: { text: 'Vui lòng giơ hai tay lên và ôm đầu', romaji: 'Giơ hai tay ôm đầu' },
                thai: { text: 'กรุณายกมือทั้งสองข้างขึ้นกอดศีรษะไว้ครับ / ค่ะ', romaji: 'Ka-ru-na yok mue thang song khang khuen kot si-sa' },
                indonesian: { text: 'Silakan angkat kedua tangan dan pegang kepala Anda', romaji: 'Kedua tangan pegang kepala' },
                filipino: { text: 'Mangyaring itaas ang dalawang kamay at hawakan ang iyong ulo', romaji: 'Itaas ang kamay at hawakan ang ulo' },
                korean: { text: '양손을 머리 위로 올려서 머리를 감싸주세요', romaji: 'Yang-soneul meori wiro' },
                japanese: { text: '両手を上げて頭の後ろで組んでください', romaji: 'Ryoute wo agete atama no ushiro de' }
            }
        },
        {
            id: 'lie_face_down',
            type: 'posture',
            icon: 'fa-person-falling-burst',
            title: '請趴著',
            translations: {
                taiwanese: { text: '請伏咧', romaji: 'Tshiánn pho̍k--leh' },
                english: { text: 'Please lie face down', romaji: 'Lie face down' },
                vietnamese: { text: 'Vui lòng nằm sấp', romaji: 'Nằm sấp' },
                thai: { text: 'กรุณานอนคว่ำครับ / ค่ะ', romaji: 'Ka-ru-na non khwam' },
                indonesian: { text: 'Silakan berbaring tengkurap', romaji: 'Berbaring tengkurap' },
                filipino: { text: 'Mangyaring humiga nang nakadapa', romaji: 'Humiga nang nakadapa' },
                korean: { text: '엎드려 주세요', romaji: 'Eopdeuryeo juseyo' },
                japanese: { text: 'うつ伏せになってください', romaji: 'Utsubuse ni natte kudasai' }
            }
        }
    ],
    general: [
        {
            id: 'remove_metals',
            type: 'general',
            icon: 'fa-ban',
            title: '請移除金屬物品',
            translations: {
                taiwanese: { text: '請共金屬物件提落來', romaji: 'Tshiánn kā kim-sio̍k mi̍h-kiānn thê-lo̍h-lâi' },
                english: { text: 'Please remove all metal objects', romaji: 'Remove metal objects' },
                vietnamese: { text: 'Vui lòng tháo bỏ các vật dụng bằng kim loại', romaji: 'Tháo bỏ đồ kim loại' },
                thai: { text: 'กรุณาถอดสิ่งของที่เป็นโลหะออกครับ / ค่ะ', romaji: 'Ka-ru-na thot sing-khong thi pen lo-ha ok' },
                indonesian: { text: 'Silakan lepaskan semua benda logam Anda', romaji: 'Lepaskan benda logam' },
                filipino: { text: 'Mangyaring alisin ang anumang bagay na metal', romaji: 'Alisin ang bagay na metal' },
                korean: { text: '금속 물질을 모두 제거해 주세요', romaji: 'Geumsok muljireul modu jegyeohae juseyo' },
                japanese: { text: '金属類をすべて外してください', romaji: 'Kinzokurui wo subete hazushite kudasai' }
            }
        },
        {
            id: 'take_off_bra',
            type: 'general',
            icon: 'fa-shirt',
            title: '請脫掉內衣',
            translations: {
                taiwanese: { text: '請共內衣剝落來', romaji: 'Tshiánn kā lāi-i pak-lo̍h-lâi' },
                english: { text: 'Please take off your bra', romaji: 'Take off your bra' },
                vietnamese: { text: 'Vui lòng cởi áo ngực', romaji: 'Cởi áo ngực' },
                thai: { text: 'กรุณาถอดเสื้อชั้นในออกครับ / ค่ะ', romaji: 'Ka-ru-na thot suea-chan-nai ok' },
                indonesian: { text: 'Silakan lepaskan bra Anda', romaji: 'Lepaskan bra Anda' },
                filipino: { text: 'Mangyaring tanggalin ang iyong bra', romaji: 'Tanggalin ang iyong bra' },
                korean: { text: '속옷(브래지어)을 벗어 주세요', romaji: 'Sogot(bra-zier)eul beoseo juseyo' },
                japanese: { text: 'ブラジャーを外してください', romaji: 'Burajaa wo hazushite kudasai' }
            }
        },
        {
            id: 'come_in',
            type: 'general',
            icon: 'fa-door-open',
            title: '請進來',
            translations: {
                taiwanese: { text: '請入來', romaji: 'Tshiánn ji̍p--lâi' },
                english: { text: 'Please come in', romaji: 'Come in' },
                vietnamese: { text: 'Vui lòng vào trong', romaji: 'Mời vào' },
                thai: { text: 'เชิญข้างในครับ / ค่ะ', romaji: 'Choen khang nai' },
                indonesian: { text: 'Silakan masuk', romaji: 'Silakan masuk' },
                filipino: { text: 'Mangyaring pumasok', romaji: 'Mangyaring pumasok' },
                korean: { text: '들어오세요', romaji: 'Deureo-oseyo' },
                japanese: { text: '中に入ってください', romaji: 'Naka ni haitte kudasai' }
            }
        },
        {
            id: 'stand_here',
            type: 'general',
            icon: 'fa-person-rays',
            title: '請站在這裡',
            translations: {
                taiwanese: { text: '請徛佇遮', romaji: 'Tshiánn khiā tī tsia' },
                english: { text: 'Please stand here', romaji: 'Stand here' },
                vietnamese: { text: 'Vui lòng đứng ở đây', romaji: 'Đứng ở đây' },
                thai: { text: 'กรุณายืนตรงนี้ครับ / ค่ะ', romaji: 'Ka-ru-na yuen trong ni' },
                indonesian: { text: 'Silakan berdiri di sini', romaji: 'Berdiri di sini' },
                filipino: { text: 'Mangyaring tumayo dito', romaji: 'Tumayo dito' },
                korean: { text: '여기에 서 주세요', romaji: 'Yeogiye seo juseyo' },
                japanese: { text: 'ここに立ってください', romaji: 'Koko ni tatte kudasai' }
            }
        },
        {
            id: 'wait_moment',
            type: 'general',
            icon: 'fa-clock',
            title: '請稍等一下',
            translations: {
                taiwanese: { text: '請小等一下', romaji: 'Tshiánn sió-tán tsi̍t-ē' },
                english: { text: 'Please wait a moment', romaji: 'Wait a moment' },
                vietnamese: { text: 'Vui lòng đợi một lát', romaji: 'Đợi một lát' },
                thai: { text: 'กรุณารอสักครู่ครับ / ค่ะ', romaji: 'Ka-ru-na ro sak-khru' },
                indonesian: { text: 'Tolong tunggu sebentar', romaji: 'Tunggu sebentar' },
                filipino: { text: 'Mangyaring maghintay nang sandali', romaji: 'Maghintay sandali' },
                korean: { text: '잠시만 기다려 주세요', romaji: 'Jamsiman gidaryeo juseyo' },
                japanese: { text: '少々お待ちください', romaji: 'Shou-shou omachi kudasai' }
            }
        },
        {
            id: 'finished_thank_you',
            type: 'general',
            icon: 'fa-circle-check',
            title: '檢查結束了，辛苦了',
            translations: {
                taiwanese: { text: '檢查好矣，辛苦矣', romaji: 'Kiám-tsa hó--ah, sin-khóo--ah' },
                english: { text: 'The exam is finished, thank you for your cooperation', romaji: 'Finished, thank you' },
                vietnamese: { text: 'Kiểm tra đã xong, cảm ơn sự hợp tác của bạn', romaji: 'Xong rồi, cám ơn' },
                thai: { text: 'ตรวจเสร็จเรียบร้อยแล้ว ขอบคุณมากครับ / ค่ะ', romaji: 'Truat set laew, khob-khun mak' },
                indonesian: { text: 'Pemeriksaan sudah selesai, terima kasih atas kerja samanya', romaji: 'Selesai, terima kasih' },
                filipino: { text: 'Tapos na ang pagsusuri, salamat sa iyong pakikipagtulungan', romaji: 'Tapos na, salamat' },
                korean: { text: '검사가 끝났습니다. 수고하셨습니다', romaji: 'Geomsaga kkeunnatseum-nida. Sugohasyeotseum-nida' },
                japanese: { text: '検査は終わりました。お疲れ様でした', romaji: 'Kensa wa owarimashita. Otsukaresama deshita' }
            }
        }
    ]
};

// Global State
let currentLanguage = 'english';
let synth = window.speechSynthesis;
let voices = [];
let recognition = null;
let overlayTimeout = null;
let audioUnlocked = false;

// Speech Synthesis Languages Map
const LANG_VOICES = {
    english: ['en-US', 'en-GB', 'en'],
    vietnamese: ['vi-VN', 'vi'],
    thai: ['th-TH', 'th'],
    indonesian: ['id-ID', 'id'],
    filipino: ['fil-PH', 'tl-PH', 'tl'],
    korean: ['ko-KR', 'ko'],
    japanese: ['ja-JP', 'ja']
};

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
    initVoices();
    initSpeechRecognition();
    setupEventListeners();
    renderCards();
    checkOfflineStatus();
});

// Load TTS Voices
function initVoices() {
    if (!synth) return;
    
    // Load voices immediately
    voices = synth.getVoices();
    
    // Triggered on voice updates (especially in Chrome)
    synth.onvoiceschanged = () => {
        voices = synth.getVoices();
    };
}

// Check and Set up Web Speech API Recognition (Voice Input)
function initSpeechRecognition() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
        recognition = new SpeechRecognition();
        recognition.continuous = false;
        recognition.lang = 'zh-TW'; // Input in Traditional Chinese
        recognition.interimResults = false;
        recognition.maxAlternatives = 1;

        recognition.onstart = () => {
            const micBtn = document.getElementById('micBtn');
            if (micBtn) micBtn.classList.add('listening');
            showToast('語音辨識中，請說話...', 'fa-microphone');
        };

        recognition.onerror = (event) => {
            console.error('Speech recognition error:', event.error);
            showToast('語音辨識失敗，請再試一次', 'fa-triangle-exclamation');
            stopListening();
        };

        recognition.onend = () => {
            stopListening();
        };

        recognition.onresult = (event) => {
            const text = event.results[0][0].transcript;
            const inputField = document.getElementById('translateInput');
            if (inputField) {
                inputField.value = text;
                translateAndPlayCustom(text);
            }
        };
    } else {
        console.warn('Speech recognition not supported in this browser.');
        const micBtn = document.getElementById('micBtn');
        if (micBtn) micBtn.style.display = 'none';
    }
}

function stopListening() {
    const micBtn = document.getElementById('micBtn');
    if (micBtn) micBtn.classList.remove('listening');
}

// Setup Interaction Listeners
function setupEventListeners() {
    // Unlock audio context on mobile devices on the very first tap
    document.addEventListener('click', unlockAudio, { once: true });

    // Language Buttons Selection
    const langBtns = document.querySelectorAll('.lang-btn');
    langBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const lang = e.currentTarget.dataset.lang;
            changeLanguage(lang);
        });
    });

    // Category Tabs Switch
    const tabBtns = document.querySelectorAll('.tab-btn');
    tabBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const category = e.currentTarget.dataset.tab;
            switchCategory(category);
        });
    });

    // Custom Translation Box buttons
    const micBtn = document.getElementById('micBtn');
    if (micBtn) {
        micBtn.addEventListener('click', () => {
            if (recognition) {
                if (micBtn.classList.contains('listening')) {
                    recognition.stop();
                } else {
                    recognition.start();
                }
            }
        });
    }

    const playBtn = document.getElementById('playBtn');
    if (playBtn) {
        playBtn.addEventListener('click', () => {
            const inputField = document.getElementById('translateInput');
            if (inputField && inputField.value.trim() !== '') {
                translateAndPlayCustom(inputField.value);
            } else {
                showToast('請輸入要翻譯的句子', 'fa-keyboard');
            }
        });
    }

    const inputField = document.getElementById('translateInput');
    if (inputField) {
        inputField.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                translateAndPlayCustom(inputField.value);
            }
        });
    }

    // Patient Screen Overlay Closer
    const closeBtn = document.getElementById('closeOverlay');
    if (closeBtn) {
        closeBtn.addEventListener('click', hideOverlay);
    }

    // Keyboard escape to close overlay
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            hideOverlay();
        }
    });

    // Watch offline status
    window.addEventListener('online', checkOfflineStatus);
    window.addEventListener('offline', checkOfflineStatus);
}

// Handle Language Switch
function changeLanguage(lang) {
    currentLanguage = lang;
    
    // Update Active Class in CSS
    document.querySelectorAll('.lang-btn').forEach(btn => {
        if (btn.dataset.lang === lang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    // Re-render UI cards with selected language text
    renderCards();
    
    // Auto-update the active custom translation result if visible
    const resultCard = document.getElementById('resultCard');
    if (resultCard && resultCard.classList.contains('active')) {
        const inputField = document.getElementById('translateInput');
        if (inputField && inputField.value.trim() !== '') {
            translateAndPlayCustom(inputField.value);
        }
    }

    showToast(`切換語言：${getLanguageName(lang)}`, 'fa-language');
}

// Handle Category Switch
function switchCategory(category) {
    document.querySelectorAll('.tab-btn').forEach(btn => {
        if (btn.dataset.tab === category) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    document.querySelectorAll('.instruction-section').forEach(section => {
        if (section.id === `${category}Section`) {
            section.classList.add('active');
        } else {
            section.classList.remove('active');
        }
    });
}

// Check Network Status and Show Offline Warning
function checkOfflineStatus() {
    const offlineBanner = document.getElementById('offlineBanner');
    if (offlineBanner) {
        if (!navigator.onLine) {
            offlineBanner.classList.add('active');
        } else {
            offlineBanner.classList.remove('active');
        }
    }
}

// Helper to translate Language ID to display text
function getLanguageName(lang) {
    const names = {
        english: 'English',
        vietnamese: 'Tiếng Việt',
        thai: 'ไทย',
        indonesian: 'Bahasa Indonesia',
        filipino: 'Filipino',
        korean: '한국어',
        japanese: '日本語'
    };
    return names[lang] || lang;
}

// Render Grid Cards based on currentLanguage
function renderCards() {
    for (const [category, commands] of Object.entries(PRESET_COMMANDS)) {
        const section = document.getElementById(`${category}Grid`);
        if (!section) continue;

        section.innerHTML = ''; // Clear previous content

        commands.forEach(command => {
            const card = document.createElement('div');
            card.className = `command-card ${command.type}`;
            
            // Fetch translation content
            const trans = command.translations[currentLanguage] || { text: command.title, romaji: '' };

            card.innerHTML = `
                <div class="card-header">
                    <div class="card-title">${command.title}</div>
                    <div class="card-icon"><i class="fa-solid ${command.icon}"></i></div>
                </div>
                <div class="card-translation">${trans.text}</div>
                ${trans.romaji ? `<div class="card-pronunciation">${trans.romaji}</div>` : ''}
            `;

            // Click event to speak and show overlay
            card.addEventListener('click', () => {
                triggerCommand(command);
            });

            section.appendChild(card);
        });
    }
}

// Action: Play Voice and Show Large Visual Screen
function triggerCommand(command) {
    const trans = command.translations[currentLanguage];
    if (!trans) return;

    // Show Visual Overlay Screen
    showOverlay(command.title, trans.text, trans.romaji, command.type);

    // Speak (pass command ID for local audio check)
    speakText(trans.text, currentLanguage, command.id);
}

// Text-to-Speech Engine
// Mobile Audio Unlocker: pre-plays silent audio & silent synthesis to bypass autoplay blocks
function unlockAudio() {
    if (audioUnlocked) return;
    
    // 1. Unlock Web Speech Synthesis
    if (synth) {
        try {
            // A single space character triggers a silent voice synthesis to unlock context
            const silentUtterance = new SpeechSynthesisUtterance(' ');
            synth.speak(silentUtterance);
        } catch (e) {
            console.warn("Failed to unlock SpeechSynthesis:", e);
        }
    }
    
    // 2. Unlock HTML5 Audio Context using the dummy player
    const dummy = document.getElementById('dummyUnlockPlayer');
    if (dummy) {
        dummy.src = "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAAA";
        dummy.play()
            .then(() => {
                console.log("Global audio player context unlocked successfully via dummy player.");
                audioUnlocked = true;
            })
            .catch(err => {
                console.warn("Failed to unlock global audio context:", err);
            });
    }
}

// Text-to-Speech Engine
function speakText(text, langKey, commandId = null) {
    const player = document.getElementById('globalAudioPlayer');
    if (!player) return;

    // 1. Stop current playing custom audio and Web Speech Synthesis
    player.pause();
    if (synth) {
        synth.cancel();
    }

    // 2. Try to play local custom pre-recorded audio files if it is a preset command
    if (commandId) {
        const localAudioUrl = `audio/${langKey}/${commandId}.mp3`;
        player.src = localAudioUrl;
        
        player.play()
            .then(() => {
                console.log(`Playing local custom audio: ${localAudioUrl}`);
            })
            .catch(err => {
                // If local audio file is not found (404) or fails, fall back to online neural voice (Google TTS)
                console.log(`Local audio play failed (${localAudioUrl}), falling back to online TTS.`);
                playOnlineTTS(text, langKey, player);
            });
    } else {
        playOnlineTTS(text, langKey, player);
    }
}

// Play high-quality neural voice via Google Translate TTS reusing global player
function playOnlineTTS(text, langKey, player) {
    if (!player) player = document.getElementById('globalAudioPlayer');
    
    if (navigator.onLine && player) {
        const googleLangCodes = {
            english: 'en',
            vietnamese: 'vi',
            thai: 'th',
            indonesian: 'id',
            filipino: 'tl',
            korean: 'ko',
            japanese: 'ja'
        };
        const langCode = googleLangCodes[langKey] || 'en';
        const ttsUrl = `https://translate.google.com/translate_tts?ie=UTF-8&tl=${langCode}&client=tw-ob&q=${encodeURIComponent(text)}`;
        
        player.src = ttsUrl;
        player.play()
            .then(() => {
                console.log(`Playing Google Translate Neural TTS (${langKey}): "${text}"`);
            })
            .catch(err => {
                console.warn("Google TTS failed to play, falling back to local Web Speech API:", err);
                playWebSpeech(text, langKey);
            });
    } else {
        // Offline: Fall back directly to Web Speech API
        playWebSpeech(text, langKey);
    }
}

// Helper to find high-quality female voices by filtering locales and voice names
function findFemaleVoice(localeCode) {
    // Standard female voice name keywords across macOS, iOS, Windows, Android
    const femaleKeywords = [
        'samantha', 'zira', 'hazel', 'victoria', 'karen', 'moira', 'tessa', 'veena', 'fiona', 
        'kyoko', 'haruka', 'nanami', 'ayumi', 'sayaka', 'yuna', 'heami', 'sunhi', 
        'kanya', 'pattara', 'achara', 'damayanti', 'gadis', 'siti', 'linh', 'hoaimy', 'blessica',
        'female', 'woman', 'girl', 'lady', 'miss'
    ];
    
    // Male keywords to explicitly exclude
    const maleKeywords = [
        'david', 'george', 'ravi', 'oops', 'mark', 'otoya', 'keita', 'naofumi', 'injoon', 
        'namminh', 'ardi', 'angelo', 'male', 'man', 'boy', 'guy'
    ];

    const matchingVoices = voices.filter(v => v.lang.toLowerCase().startsWith(localeCode.toLowerCase()));
    
    if (matchingVoices.length === 0) return null;
    if (matchingVoices.length === 1) return matchingVoices[0];

    // Try to find a voice that matches female keywords and does not match male keywords
    let femaleVoice = matchingVoices.find(v => {
        const nameLower = v.name.toLowerCase();
        const matchesFemale = femaleKeywords.some(kw => nameLower.includes(kw));
        const matchesMale = maleKeywords.some(kw => nameLower.includes(kw));
        return matchesFemale && !matchesMale;
    });

    if (femaleVoice) return femaleVoice;

    // Fallback: If no explicit female keyword matched, find one that simply does not match male keywords
    femaleVoice = matchingVoices.find(v => {
        const nameLower = v.name.toLowerCase();
        return !maleKeywords.some(kw => nameLower.includes(kw));
    });

    return femaleVoice || matchingVoices[0];
}

// Play robotic voice using native browser Web Speech API
function playWebSpeech(text, langKey) {
    if (!synth) {
        showToast('此瀏覽器不支援語音合成', 'fa-circle-xmark');
        return;
    }

    const utterance = new SpeechSynthesisUtterance(text);
    const targetLocales = LANG_VOICES[langKey] || [];
    
    let voiceFound = null;
    for (const locale of targetLocales) {
        voiceFound = findFemaleVoice(locale);
        if (voiceFound) break;
    }
    
    if (voiceFound) {
        utterance.voice = voiceFound;
        console.log(`Web Speech using female voice: ${voiceFound.name} (${voiceFound.lang})`);
    }

    // Set voice parameters
    utterance.rate = langKey === 'thai' ? 0.85 : 0.95; // Speak medical commands slightly slower
    utterance.pitch = 1.05; // Slightly higher pitch for standard female voice clarity
    utterance.volume = 1.0;

    utterance.onerror = (e) => {
        console.error('Speech Synthesis Error:', e);
    };

    synth.speak(utterance);
}

// Show Large Visual Overlay for Patients
function showOverlay(original, translated, pronunciation, type) {
    const overlay = document.getElementById('patientOverlay');
    const origEl = document.getElementById('overlayOriginal');
    const targetEl = document.getElementById('overlayTarget');
    const pronEl = document.getElementById('overlayPronunciation');
    const visual = document.getElementById('breathingVisual');
    const label = document.getElementById('breathingLabel');

    if (!overlay || !origEl || !targetEl || !pronEl || !visual || !label) return;

    // Reset current timeout
    if (overlayTimeout) clearTimeout(overlayTimeout);

    origEl.textContent = original;
    targetEl.textContent = translated;
    pronEl.textContent = pronunciation || '';

    // Setup visual animations for breathing commands
    visual.className = 'breathing-visual'; // Reset
    
    if (type === 'breath-hold') {
        visual.classList.add('hold');
        visual.querySelector('.breathing-icon').className = 'breathing-icon fa-solid fa-lungs-virus';
        label.textContent = 'Hold Breath / 憋氣';
        label.style.color = 'var(--danger)';
    } else if (type === 'breath-normal') {
        visual.classList.add('normal');
        visual.querySelector('.breathing-icon').className = 'breathing-icon fa-solid fa-wind';
        label.textContent = 'Breathe / 呼吸';
        label.style.color = 'var(--success)';
    } else {
        // General or posture - hide breathing layout
        visual.classList.add('inhale');
        visual.querySelector('.breathing-icon').className = 'breathing-icon fa-solid fa-person-arrow-down-to-line';
        label.textContent = 'Follow / 請配合';
        label.style.color = 'var(--primary)';
    }

    // Open Screen
    overlay.classList.add('active');

    // Auto-close after 8 seconds (enough time for most commands to finish)
    overlayTimeout = setTimeout(() => {
        hideOverlay();
    }, 8000);
}

function hideOverlay() {
    const overlay = document.getElementById('patientOverlay');
    if (overlay) {
        overlay.classList.remove('active');
    }
    if (overlayTimeout) clearTimeout(overlayTimeout);
    
    // Stop global audio player playback if playing
    const player = document.getElementById('globalAudioPlayer');
    if (player) {
        player.pause();
    }
    
    // Stop speaking when closed manually
    if (synth) synth.cancel();
}

// Custom Input Text Translation & Playback
function translateAndPlayCustom(text) {
    const resultCard = document.getElementById('resultCard');
    const resultText = document.getElementById('resultText');
    const resultLang = document.getElementById('resultLang');

    if (!resultCard || !resultText || !resultLang) return;

    if (!navigator.onLine) {
        // Offline translation fallback
        showToast('自訂翻譯需要網路連線', 'fa-wifi');
        return;
    }

    resultLang.textContent = `${getLanguageName(currentLanguage)} 翻譯中...`;
    resultText.textContent = 'Translating...';
    resultCard.classList.add('active');

    // Use free public translation API (MyMemory Translation API - fully client-side safe, no keys required!)
    const fromLang = 'zh-TW';
    // Map currentLanguage to API codes
    const langCodes = {
        taiwanese: 'zh-TW', // Falls back to Chinese script, then we read it via synthesis
        english: 'en',
        vietnamese: 'vi',
        thai: 'th',
        indonesian: 'id',
        filipino: 'tl',
        korean: 'ko',
        japanese: 'ja'
    };
    
    const targetCode = langCodes[currentLanguage] || 'en';
    
    // Special Min Nan handling for Custom Translation (we translate to Traditional Chinese, but present it for Taiwanese fallback)
    let apiTarget = targetCode;
    if (currentLanguage === 'taiwanese') {
        apiTarget = 'zh-TW'; // Custom Min Nan TTS is not easily translated via public API
    }

    const apiUrl = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${fromLang}|${apiTarget}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.responseData && data.responseData.translatedText) {
                let translated = data.responseData.translatedText;
                
                // MyMemory fallback warning check
                if (translated.includes("MYMEMORY WARNING")) {
                    translated = "Translation unavailable offline.";
                }

                resultText.textContent = translated;
                resultLang.textContent = getLanguageName(currentLanguage);
                
                // Show on screen
                showOverlay(text, translated, '', 'general');

                // Speak translated text
                speakText(translated, currentLanguage);
            } else {
                throw new Error('Invalid API response');
            }
        })
        .catch(err => {
            console.error('Translation error:', err);
            resultText.textContent = '翻譯失敗，請檢查網路連線或稍後再試。';
            resultLang.textContent = '錯誤';
            showToast('翻譯服務暫時無法使用', 'fa-triangle-exclamation');
        });
}

// Toast Notifications
function showToast(message, iconClass = 'fa-info-circle') {
    const toast = document.getElementById('toastNotification');
    if (!toast) return;

    toast.innerHTML = `<i class="fa-solid ${iconClass}"></i><span>${message}</span>`;
    toast.classList.add('show');

    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}
