export const styles = [
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
        prompts: {
            en: "Professional business headshot, man in suit, neutral grey background, studio lighting, 85mm lens, sharp focus --ar 4:5",
            zh: "专业商务头像，穿西装男士，中性灰背景，摄影棚光效，85mm镜头，锐利对焦 --ar 4:5"
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
        img: "https://images.unsplash.com/photo-1626785774573-4b799314348d?q=80&w=600&auto=format&fit=crop",
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

export const packs = [
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
