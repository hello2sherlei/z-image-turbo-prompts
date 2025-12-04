// Data & Locales (Merged for Local Compatibility)
const styles = [
    // Portrait
    {
        id: "neon-portrait",
        category: "portrait",
        pack: "Starter",
        img: "https://images.unsplash.com/photo-1535295972055-1c762f4483e5?q=80&w=600&auto=format&fit=crop",
        prompts: {
            en: "Cyberpunk neon portrait, female cyborg, glowing circuitry, rain-slicked streets, cinematic lighting --ar 9:16 --v 6.0",
            zh: "赛博朋克霓虹人像，女性机械改造人，发光电路，雨湿街道，电影级光效 --ar 9:16 --v 6.0"
        },
        params: "AR 9:16 • Style Raw"
    },
    {
        id: "portrait-business",
        category: "portrait",
        pack: "Complete",
        img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&auto=format&fit=crop",
        align: "top", // Explicitly set alignment for this image
        prompts: {
            en: "Professional business headshot, man in suit, neutral grey background, studio lighting, 85mm lens, sharp focus --ar 4:5",
            zh: "专业商务头像，穿西装的男人，中性灰色背景，摄影棚灯光，85mm镜头，对焦清晰 --ar 4:5"
        },
        params: "AR 4:5 • Quality 2"
    },
    {
        id: "portrait-fashion",
        category: "portrait",
        pack: "Complete",
        img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop",
        prompts: {
            en: "High fashion photography, avant-garde makeup, dramatic shadows, red lighting, editorial style, vogue magazine --ar 2:3",
            zh: "高级时尚摄影，前卫妆容，戏剧性阴影，红色灯光，杂志社论风格，Vogue风格 --ar 2:3"
        },
        params: "AR 2:3 • Stylize 250"
    },

    // Product
    {
        id: "product-minimal",
        category: "product",
        pack: "Starter",
        img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=600&auto=format&fit=crop",
        prompts: {
            en: "Minimalist product photography, white watch on geometric pedestal, soft shadows, pastel background, 8k resolution --ar 4:5",
            zh: "极简产品摄影，白色手表置于几何基座，柔和阴影，粉彩背景，8k分辨率 --ar 4:5"
        },
        params: "AR 4:5 • Quality 2"
    },
    {
        id: "product-skincare",
        category: "product",
        pack: "Complete",
        img: "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?q=80&w=600&auto=format&fit=crop",
        prompts: {
            en: "Luxury skincare bottle, water splash, botanical elements, fresh green lighting, macro shot, commercial advertisement --ar 1:1",
            zh: "奢华护肤品瓶，水花飞溅，植物元素，清新绿光，微距拍摄，商业广告 --ar 1:1"
        },
        params: "AR 1:1 • Style Raw"
    },
    {
        id: "product-tech",
        category: "product",
        pack: "Complete",
        img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=600&auto=format&fit=crop",
        prompts: {
            en: "Modern headphones floating, dark background with blue rim light, sleek design, 3d render style, 4k --ar 16:9",
            zh: "现代耳机悬浮，深色背景配蓝色轮廓光，流线型设计，3D渲染风格，4k --ar 16:9"
        },
        params: "AR 16:9 • Chaos 10"
    },

    // Anime
    {
        id: "anime-girl",
        category: "anime",
        pack: "Starter",
        img: "https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=600&auto=format&fit=crop",
        prompts: {
            en: "Anime style illustration, magical girl, starry sky background, vibrant colors, detailed eyes, Makoto Shinkai style --niji 6",
            zh: "日系动漫插画，魔法少女，星空背景，鲜艳色彩，细节眼部，新海诚风格 --niji 6"
        },
        params: "Niji 6 • Chaos 20"
    },
    {
        id: "anime-mecha",
        category: "anime",
        pack: "Complete",
        img: "https://images.unsplash.com/photo-1612152605347-f93296cb657d?q=80&w=600&auto=format&fit=crop",
        prompts: {
            en: "Giant mecha robot, futuristic city ruins, sunset, lens flare, detailed mechanical parts, Studio Ghibli vibes --niji 6",
            zh: "巨型机甲机器人，未来城市废墟，日落，镜头光晕，精细机械部件，吉卜力氛围 --niji 6"
        },
        params: "Niji 6 • Stylize 100"
    },
    {
        id: "anime-cyber",
        category: "anime",
        pack: "Subscription",
        img: "https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=600&auto=format&fit=crop",
        prompts: {
            en: "Cyberpunk hacker girl, multiple screens, neon glasses, digital rain, dark room, lo-fi aesthetic --niji 6",
            zh: "赛博朋克黑客少女，多重屏幕，霓虹眼镜，数字雨，暗室，Lo-fi美学 --niji 6"
        },
        params: "Niji 6 • AR 16:9"
    },

    // Logo
    {
        id: "logo-tech",
        category: "logo",
        pack: "Starter",
        img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=600&auto=format&fit=crop", // Replaced broken link with Cyberpunk/Tech abstract
        prompts: {
            en: "Tech startup logo, letter Z, gradient blue and purple, vector style, flat design, white background --no shadow",
            zh: "科技初创公司Logo，字母Z，蓝紫渐变，矢量风格，扁平设计，白底 --no shadow"
        },
        params: "Square • No Text"
    },
    {
        id: "logo-coffee",
        category: "logo",
        pack: "Complete",
        img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=600&auto=format&fit=crop",
        prompts: {
            en: "Coffee shop logo, minimal line art cup, steam, warm brown colors, vintage badge style, white background",
            zh: "咖啡店Logo，极简线条咖啡杯，蒸汽，暖褐色调，复古徽章风格，白底"
        },
        params: "Square • Minimal"
    },
    {
        id: "logo-eco",
        category: "logo",
        pack: "Complete",
        img: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=600&auto=format&fit=crop",
        prompts: {
            en: "Eco-friendly brand logo, leaf shape combined with water drop, green gradients, modern abstract, vector",
            zh: "环保品牌Logo，叶子形状结合水滴，绿色渐变，现代抽象，矢量"
        },
        params: "Square • Vector"
    },

    // Social
    {
        id: "social-cover",
        category: "social",
        pack: "Starter",
        img: "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&w=600&auto=format&fit=crop",
        prompts: {
            en: "Youtube channel banner, abstract fluid shapes, neon gradients, 3d render, text space in center --ar 16:9",
            zh: "Youtube频道封面，抽象流体形状，霓虹渐变，3D渲染，中间留白 --ar 16:9"
        },
        params: "AR 16:9 • Stylize 500"
    },
    {
        id: "social-insta",
        category: "social",
        pack: "Complete",
        img: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=600&auto=format&fit=crop",
        prompts: {
            en: "Instagram story background, aesthetic pastel clouds, soft texture, dreamlike, vertical format --ar 9:16",
            zh: "Instagram快拍背景，唯美粉彩云朵，柔和纹理，梦幻般，竖屏格式 --ar 9:16"
        },
        params: "AR 9:16 • Tile"
    },
    {
        id: "social-linkedin",
        category: "social",
        pack: "Complete",
        img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=600&auto=format&fit=crop",
        prompts: {
            en: "LinkedIn banner, modern office architecture, glass building, blue sky, professional corporate vibe --ar 4:1",
            zh: "LinkedIn背景图，现代办公建筑，玻璃大楼，蓝天，专业企业氛围 --ar 4:1"
        },
        params: "AR 4:1 • Quality 2"
    }
];

const packs = [
    {
        id: "starter",
        price: "$5",
        features: {
            en: ["20 Curated Prompts", "Social Covers & Products", "Bilingual & Parameters"],
            zh: ["20条 精选提示词", "社媒封面与产品", "双语对照与参数"]
        },
        comparison: {
            count: "20",
            scenarios: "2 (Social, Product)",
            updates: "None",
            license: "Personal"
        },
        link: "#buy-starter",
        popular: false
    },
    {
        id: "complete",
        price: "$29",
        features: {
            en: ["100+ Premium Prompts", "All 5 Scenarios", "PDF Index & Negative Prompts"],
            zh: ["100+ 高级提示词", "覆盖所有5大场景", "PDF索引与负面词"]
        },
        comparison: {
            count: "100+",
            scenarios: "All 5",
            updates: "None",
            license: "Commercial"
        },
        link: "#buy-complete",
        popular: true
    },
    {
        id: "subscription",
        price: "$7/mo",
        features: {
            en: ["10 New Prompts Weekly", "Member Area Access", "Priority Support"],
            zh: ["每周新增10条提示词", "会员专区下载", "优先支持"]
        },
        comparison: {
            count: "10/week",
            scenarios: "All + Trending",
            updates: "Weekly",
            license: "Commercial"
        },
        link: "#subscribe",
        popular: false
    }
];

const translations = {
    en: {
        nav_home: "Home",
        nav_styles: "Styles",
        nav_packs: "Packs",
        nav_pricing: "Pricing",
        nav_faq: "FAQ",
        hero_title: "Create On-Brand Visuals in Minutes",
        hero_subtitle: "Curated bilingual prompt packs for social covers, product shots, and logos — tested and ready to copy.",
        hero_cta_primary: "Buy Prompt Packs",
        hero_cta_secondary: "Try Demo",
        hero_bullet_1: "Professionally-curated prompts",
        hero_bullet_2: "Bilingual copy-paste",
        hero_bullet_3: "Weekly updates",
        demo_fallback_title: "Try These Prompts Now",
        why_us_title: "What makes our prompts different?",
        why_us_1_title: "Time Saving",
        why_us_1_desc: "Copy and paste directly, no trial and error needed.",
        why_us_2_title: "Consistent Style",
        why_us_2_desc: "Reusable styles across different subjects.",
        why_us_3_title: "Tested & Verified",
        why_us_3_desc: "Every prompt comes with example images and parameters.",
        sample_pack_title: "Not sure yet? Get a Free Sample Pack",
        sample_pack_cta: "Download 5 Free Prompts",
        tab_all: "All",
        tab_portrait: "Portrait",
        tab_product: "Product",
        tab_anime: "Anime",
        tab_logo: "Logo",
        tab_social: "Social",
        card_copy_en: "Copy Prompt",
        card_copy_zh: "Copy Prompt", // Fallback or specific if needed
        card_copied: "Copied!",
        card_from_pack: "From",
        pack_title: "Choose Your Pack",
        pack_subtitle: "Get professionally crafted prompt packs to accelerate your workflow.",
        pack_buy: "Buy Now",
        comp_count: "Prompt Count",
        comp_scenarios: "Scenarios",
        comp_updates: "Updates",
        comp_license: "License",
        faq_title: "Frequently Asked Questions",
        faq_q1: "Which models are supported?",
        faq_a1: "Optimized for Z-Image Turbo. Compatible with Midjourney v6.",
        faq_q2: "Are results 100% reproducible?",
        faq_a2: "Due to AI nature, slight variations exist. We provide parameters to minimize this.",
        faq_q3: "Can I use images commercially?",
        faq_a3: "Yes, generated images follow platform commercial policies.",
        footer_rights: "© 2025 Z-Image Turbo. All rights reserved. Model: Z-Image Turbo v1.0.",
        footer_privacy: "Privacy Policy",
        footer_terms: "Terms of Service",
        footer_refund: "Refund Policy"
    },
    zh: {
        nav_home: "首页",
        nav_styles: "风格库",
        nav_packs: "提示词包",
        nav_pricing: "价格",
        nav_faq: "常见问题",
        hero_title: "分钟级生成品牌统一的高质视觉",
        hero_subtitle: "专业策划的中英提示词包，社媒封面/产品静物/Logo 即复制即出图。",
        hero_cta_primary: "购买提示词包",
        hero_cta_secondary: "试用演示",
        hero_bullet_1: "专业策划提示词",
        hero_bullet_2: "中英双语复制",
        hero_bullet_3: "每周更新",
        demo_fallback_title: "立即尝试这些提示词",
        why_us_title: "为什么选择我们的提示词？",
        why_us_1_title: "节省时间",
        why_us_1_desc: "直接复制粘贴，无需反复试错。",
        why_us_2_title: "风格统一",
        why_us_2_desc: "同一风格可复用于不同素材，保证品牌一致性。",
        why_us_3_title: "经过验证",
        why_us_3_desc: "每条提示词都配有示例图和参数说明。",
        sample_pack_title: "还在犹豫？获取免费样包",
        sample_pack_cta: "下载5条免费提示词",
        tab_all: "全部",
        tab_portrait: "人像",
        tab_product: "产品",
        tab_anime: "动漫",
        tab_logo: "Logo",
        tab_social: "社媒",
        card_copy_en: "复制提示词",
        card_copy_zh: "复制提示词",
        card_copied: "已复制!",
        card_from_pack: "来自",
        pack_title: "选择你的提示词包",
        pack_subtitle: "获取专业制作的提示词包，加速你的工作流。",
        pack_buy: "立即购买",
        comp_count: "提示词数量",
        comp_scenarios: "覆盖场景",
        comp_updates: "更新频率",
        comp_license: "授权类型",
        faq_title: "常见问题",
        faq_q1: "支持哪些模型版本？",
        faq_a1: "专为 Z-Image Turbo 优化，兼容 Midjourney v6。",
        faq_q2: "示例图能100%复现吗？",
        faq_a2: "因AI特性会有细微差异，但我们提供参数建议以最小化偏差。",
        faq_q3: "生成的图片可以商用吗？",
        faq_a3: "可以，生成的图片遵循平台的商用政策。",
        footer_rights: "© 2025 Z-Image Turbo. 保留所有权利。模型版本: Z-Image Turbo v1.0。",
        footer_privacy: "隐私政策",
        footer_terms: "服务条款",
        footer_refund: "退款说明"
    }
};

// State
let currentLang = localStorage.getItem('z-image-lang') || 'en';
let currentCategory = 'all';

// DOM Elements
const langSwitchBtn = document.getElementById('lang-switch');
const galleryGrid = document.getElementById('gallery-grid');
const pricingGrid = document.getElementById('pricing-grid');
const galleryTabs = document.getElementById('gallery-tabs');
const toast = document.getElementById('toast');

// Initialization
document.addEventListener('DOMContentLoaded', () => {
    updateLanguage(currentLang);
    renderGallery(currentCategory);
    renderPricing();
    renderComparisonTable();
    renderDemoFallback();
    updateSEO(); // Initial SEO update

    // Event Listeners
    document.getElementById('lang-switch').addEventListener('click', toggleLanguage);

    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const category = e.target.dataset.category;
            currentCategory = category;

            // Update UI
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');

            renderGallery(category);
            updateSEO(); // Update SEO on category change
            trackEvent('style_tab_change', { category });
        });
    });
});

// Language Logic
function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'zh' : 'en';
    localStorage.setItem('z-image-lang', currentLang);
    updateLanguage(currentLang);
    renderGallery(currentCategory); // Re-render to update dynamic content
    renderPricing(); // Re-render pricing
    renderComparisonTable(); // Re-render comparison
    renderDemoFallback(); // Re-render demo
}

function updateLanguage(lang) {
    // Update static text
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        if (translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });

    // Update button text
    langSwitchBtn.textContent = lang === 'en' ? 'EN / 中文' : '中文 / EN';
}

// Rendering Logic
function renderDemoFallback() {
    const demoGrid = document.getElementById('demo-fallback-grid');
    if (!demoGrid) return;

    demoGrid.innerHTML = '';
    // Pick 5 random styles for demo
    const demoStyles = styles.slice(0, 5);

    demoStyles.forEach(style => {
        const card = createCardElement(style);
        demoGrid.appendChild(card);
    });
}

function renderComparisonTable() {
    const table = document.getElementById('comparison-table');
    if (!table) return;

    const labels = {
        count: translations[currentLang]['comp_count'],
        scenarios: translations[currentLang]['comp_scenarios'],
        updates: translations[currentLang]['comp_updates'],
        license: translations[currentLang]['comp_license']
    };

    let html = `
        <thead>
            <tr>
                <th></th>
                ${packs.map(p => `<th>${p.id.toUpperCase()}</th>`).join('')}
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>${labels.count}</td>
                ${packs.map(p => `<td>${p.comparison.count}</td>`).join('')}
            </tr>
            <tr>
                <td>${labels.scenarios}</td>
                ${packs.map(p => `<td>${p.comparison.scenarios}</td>`).join('')}
            </tr>
            <tr>
                <td>${labels.updates}</td>
                ${packs.map(p => `<td>${p.comparison.updates}</td>`).join('')}
            </tr>
            <tr>
                <td>${labels.license}</td>
                ${packs.map(p => `<td>${p.comparison.license}</td>`).join('')}
            </tr>
        </tbody>
    `;

    table.innerHTML = html;
}

// Analytics
function trackEvent(eventName, params = {}) {
    console.log(`[Analytics] Event: ${eventName}`, params);
    // In production, send to GA/Mixpanel
    // gtag('event', eventName, params);
}

function createCardElement(style) {
    const card = document.createElement('div');
    card.className = 'style-card';

    const fromLabel = translations[currentLang]['card_from_pack'];
    // Use specific label for the button, or generic "Copy" if preferred. 
    // Keeping "Copy EN"/"Copy ZH" for clarity on what is being copied, 
    // or we could simplify to just "Copy" since the context is clear.
    // Let's use the existing keys for now.
    const copyLabel = translations[currentLang][`card_copy_${currentLang}`];
    const displayPrompt = style.prompts[currentLang];

    // Fix: Use data-driven alignment. 
    // Only 'portrait-business' has align: 'top' set in data.
    // Others default to center (CSS default).
    const imgStyle = style.align ? `style="object-position: ${style.align};"` : '';

    card.innerHTML = `
        <img src="${style.img}" alt="${style.id}" loading="lazy" ${imgStyle}>
        <div class="card-content">
            <div class="card-params">
                <span>${style.params}</span>
                <span class="pack-label">${fromLabel} ${style.pack}</span>
            </div>
            
            <div class="prompt-box">
                ${displayPrompt}
            </div>

            <div class="card-actions">
                <button class="copy-btn" data-prompt="${displayPrompt}" data-lang="${currentLang}">${copyLabel}</button>
            </div>
        </div>
    `;

    // Add event listener for the single copy button
    const btn = card.querySelector('.copy-btn');
    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const text = btn.dataset.prompt;
        const lang = btn.dataset.lang;

        // Clipboard Fallback Logic
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(text).then(() => {
                showToast(translations[currentLang]['card_copied']);
                trackEvent(`prompt_copy_${lang}`, { style_id: style.id, category: style.category });
            }).catch(() => {
                selectText(card.querySelector('.prompt-box'));
                showToast("Select to copy");
            });
        } else {
            selectText(card.querySelector('.prompt-box'));
            showToast("Select to copy");
        }
    });

    return card;
}

function selectText(element) {
    const range = document.createRange();
    range.selectNodeContents(element);
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
}

function renderGallery(category) {
    galleryGrid.innerHTML = '';

    const filteredStyles = category === 'all'
        ? styles
        : styles.filter(s => s.category === category);

    filteredStyles.forEach(style => {
        const card = createCardElement(style);
        galleryGrid.appendChild(card);
    });
}

function renderPricing() {
    pricingGrid.innerHTML = '';

    packs.forEach(pack => {
        const card = document.createElement('div');
        card.className = `price-card ${pack.popular ? 'popular' : ''}`;

        card.innerHTML = `
        <div class="price-header">
            <h3>${pack.id.toUpperCase()}</h3>
            <div class="price-tag">${pack.price}</div>
        </div>
        <ul class="features-list">
            ${pack.features[currentLang].map(f => `<li>${f}</li>`).join('')}
        </ul>
        <a href="${pack.link}" class="buy-btn" data-pack="${pack.id}">${translations[currentLang]['pack_buy']}</a>
    `;

        // Add tracking
        const btn = card.querySelector('.buy-btn');
        btn.addEventListener('click', (e) => {
            trackEvent('purchase_click', { pack_id: pack.id, price: pack.price });
        });

        pricingGrid.appendChild(card);
    });
}

function updateSEO() {
    const seoData = {
        en: {
            title: "Z-Image Turbo | Professional AI Prompts",
            desc: "Curated bilingual prompt packs for Midjourney & Z-Image. Create on-brand visuals in minutes."
        },
        zh: {
            title: "Z-Image Turbo | 专业AI提示词库",
            desc: "专业策划的中英双语提示词包，适用于Midjourney与Z-Image。分钟级生成品牌视觉。"
        }
    };

    // If a specific category is selected, append it
    let title = seoData[currentLang].title;
    let desc = seoData[currentLang].desc;

    if (currentCategory !== 'all') {
        const catName = translations[currentLang][`tab_${currentCategory}`];
        title = `${catName} Prompts | ${title}`;
        desc = `${catName} - ${desc}`;
    }

    document.title = title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', desc);

    // Update URL hash for "routing"
    window.location.hash = currentCategory === 'all' ? '' : currentCategory;
}

// Utilities
function showToast(msg) {
    toast.textContent = msg || translations[currentLang]['card_copied'];
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, 2000);
}
