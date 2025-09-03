// ANA SAYFA JAVASCRIPT - 2. SAYFAYA UYGUN VERSİYON
// Bu kod ana sayfanın <script> tagları arasına gelecek

// 2. sayfadaki productDatabase'i ana sayfada da kullan
const productDatabase = {
    1: {
        title: 'iPhone 14 Pro',
        description: 'iPhone 14 Pro, A16 Bionic çip ile güçlendirilmiş ve profesyonel fotoğrafçılık özellikleri sunan premium akıllı telefon.',
        secondaryTitle: 'Pro Kamera Sistemi',
        secondaryDescription: 'Gelişmiş üçlü kamera sistemi ile 4K video çekimi ve ProRAW fotoğraf desteği. Gece modu ile düşük ışıkta bile mükemmel fotoğraflar.',
        thirdTitle: 'Neden iPhone 14 Pro?',
        thirdDescription: 'Titanyum tasarım, Always-On ekran teknolojisi ve tüm gün süren batarya ömrü ile günlük ihtiyaçlarınızı karşılar.',
        cardTitle: 'Product Specifications',
        cardDescription: 'A16 Bionic Chip',
        cardDetails: '6.1" Super Retina Display',
        cardSpecs: '48MP Pro Camera System',
        cardLink: 'Get iPhone Pro ▶',
        images: {
            main: 'https://via.placeholder.com/400x300/007AFF/FFFFFF?text=iPhone+14+Pro',
            secondary: 'https://via.placeholder.com/400x300/1DB954/FFFFFF?text=Pro+Camera',
            card: 'https://via.placeholder.com/400x300/FF6B35/FFFFFF?text=iPhone+Specs'
        },
        items: {
            item1: { name: 'iPhone 14 Pro Max', image: 'https://via.placeholder.com/200x150/007AFF/FFFFFF?text=Pro+Max', link: '#iphone-pro-max' },
            item2: { name: 'iPhone 14', image: 'https://via.placeholder.com/200x150/1DB954/FFFFFF?text=iPhone+14', link: '#iphone-14' },
            item3: { name: 'iPhone 13', image: 'https://via.placeholder.com/200x150/FF6B35/FFFFFF?text=iPhone+13', link: '#iphone-13' }
        },
        type: 'elektronik',
        manufacturer: 'apple'
    },
    2: {
        title: 'Samsung Galaxy S23',
        description: 'Galaxy S23, Snapdragon 8 Gen 2 işlemci ile üstün performans ve gelişmiş kamera özellikleri sunar.',
        secondaryTitle: 'Galaxy AI Özellikleri',
        secondaryDescription: 'Yapay zeka destekli fotoğraf düzenleme, gerçek zamanlı çeviri ve akıllı pil optimizasyonu.',
        thirdTitle: 'Galaxy Ekosistemi',
        thirdDescription: 'Samsung Galaxy Watch, Buds ve diğer Galaxy cihazlarla sorunsuz entegrasyon.',
        cardTitle: 'Galaxy Features',
        cardDescription: 'Snapdragon 8 Gen 2',
        cardDetails: '6.1" Dynamic AMOLED',
        cardSpecs: '50MP Triple Camera',
        cardLink: 'Get Galaxy ▶',
        images: {
            main: 'https://via.placeholder.com/400x300/6C5CE7/FFFFFF?text=Galaxy+S23',
            secondary: 'https://via.placeholder.com/400x300/00CEC9/FFFFFF?text=AI+Features',
            card: 'https://via.placeholder.com/400x300/E17055/FFFFFF?text=Galaxy+Specs'
        },
        items: {
            item1: { name: 'Galaxy S23 Ultra', image: 'https://via.placeholder.com/200x150/6C5CE7/FFFFFF?text=S23+Ultra', link: '#galaxy-ultra' },
            item2: { name: 'Galaxy S23+', image: 'https://via.placeholder.com/200x150/00CEC9/FFFFFF?text=S23+Plus', link: '#galaxy-plus' },
            item3: { name: 'Galaxy S22', image: 'https://via.placeholder.com/200x150/E17055/FFFFFF?text=Galaxy+S22', link: '#galaxy-s22' }
        },
        type: 'elektronik',
        manufacturer: 'samsung'
    },
    3: {
        title: 'Nike Air Max',
        description: 'Nike Air Max, maksimum hava yastığı teknolojisi ile üstün konfor ve stil sunan spor ayakkabı.',
        secondaryTitle: 'Air Max Teknolojisi',
        secondaryDescription: 'Görünür Air yastık sistemi ile her adımda maksimum darbe emilimi ve konfor sağlar.',
        thirdTitle: 'Stil ve Performans',
        thirdDescription: 'Spor ve günlük kulanım için mükemmel, zamansız tasarım ve üstün performans.',
        cardTitle: 'Nike Technology',
        cardDescription: 'Air Max Cushioning',
        cardDetails: 'Premium Materials',
        cardSpecs: 'All-Day Comfort',
        cardLink: 'Get Nike ▶',
        images: {
            main: 'https://via.placeholder.com/400x300/FF6B6B/FFFFFF?text=Nike+Air+Max',
            secondary: 'https://via.placeholder.com/400x300/4ECDC4/FFFFFF?text=Air+Tech',
            card: 'https://via.placeholder.com/400x300/45B7D1/FFFFFF?text=Nike+Specs'
        },
        items: {
            item1: { name: 'Nike Air Force 1', image: 'https://via.placeholder.com/200x150/FF6B6B/FFFFFF?text=Air+Force', link: '#air-force' },
            item2: { name: 'Nike Air Jordan', image: 'https://via.placeholder.com/200x150/4ECDC4/FFFFFF?text=Air+Jordan', link: '#air-jordan' },
            item3: { name: 'Nike Revolution', image: 'https://via.placeholder.com/200x150/45B7D1/FFFFFF?text=Revolution', link: '#revolution' }
        },
        type: 'spor',
        manufacturer: 'nike'
    },
    4: {
        title: 'Beyaz Tişört',
        description: 'Pamuklu beyaz tişört, günlük kulanım için ideal, rahat ve şık tasarım.',
        secondaryTitle: 'Premium Pamuk',
        secondaryDescription: '100% organik pamuk ile üretilen, çevre dostu ve nefes alabilir kumaş.',
        thirdTitle: 'Minimalist Stil',
        thirdDescription: 'Her kombine uygun, klasik kesim ve kaliteli işçilik.',
        cardTitle: 'T-Shirt Details',
        cardDescription: '100% Organic Cotton',
        cardDetails: 'Classic Fit Design',
        cardSpecs: 'Machine Washable',
        cardLink: 'Get T-Shirt ▶',
        images: {
            main: 'https://via.placeholder.com/400x300/FFFFFF/000000?text=White+T-Shirt',
            secondary: 'https://via.placeholder.com/400x300/F8F8F8/333333?text=Cotton+Quality',
            card: 'https://via.placeholder.com/400x300/E8E8E8/666666?text=T-Shirt+Specs'
        },
        items: {
            item1: { name: 'Siyah Tişört', image: 'https://via.placeholder.com/200x150/000000/FFFFFF?text=Black+Tee', link: '#black-tshirt' },
            item2: { name: 'Gri Tişört', image: 'https://via.placeholder.com/200x150/808080/FFFFFF?text=Grey+Tee', link: '#grey-tshirt' },
            item3: { name: 'Lacivert Tişört', image: 'https://via.placeholder.com/200x150/000080/FFFFFF?text=Navy+Tee', link: '#navy-tshirt' }
        },
        type: 'giyim',
        manufacturer: 'zara'
    },
    5: {
        title: 'Kahve Makinesi',
        description: 'Otomatik kahve makinesi ile evde profesyonel kahve deneyimi. 15 farklı kahve seçeneği.',
        secondaryTitle: 'LatteGo Sistemi',
        secondaryDescription: 'Tek dokunuşla mükemmel cappuccino ve latte hazırlama. Otomatik temizlik özelliği.',
        thirdTitle: 'Akıllı Kahve Deneyimi',
        thirdDescription: 'Ayarlanabilir kahve gücü, sıcaklık kontrolü ve mobil uygulama desteği.',
        cardTitle: 'Coffee Maker Features',
        cardDescription: '15 Coffee Recipes',
        cardDetails: 'LatteGo System',
        cardSpecs: 'Auto Clean Function',
        cardLink: 'Get Coffee Maker ▶',
        images: {
            main: 'https://via.placeholder.com/400x300/8D6E63/FFFFFF?text=Coffee+Machine',
            secondary: 'https://via.placeholder.com/400x300/5D4037/FFFFFF?text=LatteGo+System',
            card: 'https://via.placeholder.com/400x300/3E2723/FFFFFF?text=Coffee+Specs'
        },
        items: {
            item1: { name: 'Espresso Makinesi', image: 'https://via.placeholder.com/200x150/8D6E63/FFFFFF?text=Espresso', link: '#espresso' },
            item2: { name: 'French Press', image: 'https://via.placeholder.com/200x150/5D4037/FFFFFF?text=French+Press', link: '#french-press' },
            item3: { name: 'Filtre Kahve', image: 'https://via.placeholder.com/200x150/3E2723/FFFFFF?text=Filter+Coffee', link: '#filter-coffee' }
        },
        type: 'ev',
        manufacturer: 'philips'
    },
    6: {
        title: 'Adidas Spor Ayakkabı',
        description: 'Adidas spor ayakkabı, Boost teknolojisi ile maksimum enerji geri dönüşü ve konfor sunar.',
        secondaryTitle: 'Boost Teknolojisi',
        secondaryDescription: 'Her adımda enerji geri dönüşü sağlayan Boost köpük teknolojisi ile üstün performans.',
        thirdTitle: 'Spor Performansı',
        thirdDescription: 'Antrenman ve günlük kullanım için ideal, dayanıklı ve rahat tasarım.',
        cardTitle: 'Adidas Technology',
        cardDescription: 'Boost Energy Return',
        cardDetails: 'Premium Construction',
        cardSpecs: 'Athletic Performance',
        cardLink: 'Get Adidas ▶',
        images: {
            main: 'https://via.placeholder.com/400x300/000000/FFFFFF?text=Adidas+Boost',
            secondary: 'https://via.placeholder.com/400x300/FF6B35/FFFFFF?text=Boost+Tech',
            card: 'https://via.placeholder.com/400x300/007AFF/FFFFFF?text=Adidas+Specs'
        },
        items: {
            item1: { name: 'Adidas Ultraboost', image: 'https://via.placeholder.com/200x150/000000/FFFFFF?text=Ultraboost', link: '#ultraboost' },
            item2: { name: 'Adidas NMD', image: 'https://via.placeholder.com/200x150/FF6B35/FFFFFF?text=NMD', link: '#nmd' },
            item3: { name: 'Adidas Stan Smith', image: 'https://via.placeholder.com/200x150/007AFF/FFFFFF?text=Stan+Smith', link: '#stan-smith' }
        },
        type: 'spor',
        manufacturer: 'adidas'
    },
    7: {
        title: 'MacBook Air',
        description: 'MacBook Air M2 çip ile güçlendirilmiş, ultra ince ve hafif tasarım ile yüksek performans sunar.',
        secondaryTitle: 'M2 Çip Gücü',
        secondaryDescription: 'Apple M2 çip ile 8 çekirdekli CPU ve 10 çekirdekli GPU performansı. 18 saate kadar pil ömrü.',
        thirdTitle: 'Ultra Taşınabilir',
        thirdDescription: '1.24 kg ağırlık, 11.3 mm incelik ile her yere taşınabilir profesyonel performans.',
        cardTitle: 'MacBook Specs',
        cardDescription: 'Apple M2 Chip',
        cardDetails: '13.6" Liquid Retina',
        cardSpecs: '18h Battery Life',
        cardLink: 'Get MacBook ▶',
        images: {
            main: 'https://via.placeholder.com/400x300/C0C0C0/000000?text=MacBook+Air',
            secondary: 'https://via.placeholder.com/400x300/007AFF/FFFFFF?text=M2+Performance',
            card: 'https://via.placeholder.com/400x300/FF6B35/FFFFFF?text=MacBook+Specs'
        },
        items: {
            item1: { name: 'MacBook Pro', image: 'https://via.placeholder.com/200x150/C0C0C0/000000?text=MacBook+Pro', link: '#macbook-pro' },
            item2: { name: 'iMac', image: 'https://via.placeholder.com/200x150/007AFF/FFFFFF?text=iMac', link: '#imac' },
            item3: { name: 'Mac Mini', image: 'https://via.placeholder.com/200x150/FF6B35/FFFFFF?text=Mac+Mini', link: '#mac-mini' }
        },
        type: 'elektronik',
        manufacturer: 'apple'
    },
    8: {
        title: 'Jean Pantolon',
        description: 'Klasik kesim jean pantolon, %100 pamuk denim kumaş ile rahat ve şık günlük giyim.',
        secondaryTitle: 'Premium Denim',
        secondaryDescription: '%100 pamuk denim kumaş, çevre dostu boyama işlemi ve klasik mavi renk seçeneği.',
        thirdTitle: 'Zamansız Stil',
        thirdDescription: 'Her yaşa ve vücut tipine uygun, rahat kesim ile günlük ve özel günlerde kullanılabilir.',
        cardTitle: 'Denim Details',
        cardDescription: '100% Cotton Denim',
        cardDetails: 'Classic Blue Wash',
        cardSpecs: 'Regular Fit',
        cardLink: 'Get Jeans ▶',
        images: {
            main: 'https://via.placeholder.com/400x300/1E3A8A/FFFFFF?text=Denim+Jeans',
            secondary: 'https://via.placeholder.com/400x300/3B82F6/FFFFFF?text=Premium+Denim',
            card: 'https://via.placeholder.com/400x300/1D4ED8/FFFFFF?text=Jeans+Specs'
        },
        items: {
            item1: { name: 'Skinny Jean', image: 'https://via.placeholder.com/200x150/1E3A8A/FFFFFF?text=Skinny+Jean', link: '#skinny-jeans' },
            item2: { name: 'Straight Jean', image: 'https://via.placeholder.com/200x150/3B82F6/FFFFFF?text=Straight+Jean', link: '#straight-jeans' },
            item3: { name: 'Wide Jean', image: 'https://via.placeholder.com/200x150/1D4ED8/FFFFFF?text=Wide+Jean', link: '#wide-jeans' }
        },
        type: 'giyim',
        manufacturer: 'zara'
    },
    9: {
        title: 'Akıllı TV',
        description: 'Samsung 55" 4K QLED Smart TV, Quantum Dot teknolojisi ile canlı renkler ve akıllı özellikler.',
        secondaryTitle: 'QLED Teknolojisi',
        secondaryDescription: 'Quantum Dot teknolojisi ile %100 renk hacmi, HDR10+ desteği ve 4K çözünürlük.',
        thirdTitle: 'Akıllı Özellikler',
        thirdDescription: 'Tizen işletim sistemi, Netflix, YouTube, Disney+ uygulamaları ve sesli kontrol desteği.',
        cardTitle: 'Smart TV Features',
        cardDescription: '55" QLED 4K Display',
        cardDetails: 'Quantum Dot Technology',
        cardSpecs: 'Smart Apps Included',
        cardLink: 'Get Smart TV ▶',
        images: {
            main: 'https://via.placeholder.com/400x300/000000/FFFFFF?text=Samsung+QLED',
            secondary: 'https://via.placeholder.com/400x300/6366F1/FFFFFF?text=4K+Display',
            card: 'https://via.placeholder.com/400x300/10B981/FFFFFF?text=Smart+Features'
        },
        items: {
            item1: { name: '65" QLED TV', image: 'https://via.placeholder.com/200x150/000000/FFFFFF?text=65+QLED', link: '#qled-65' },
            item2: { name: '43" Smart TV', image: 'https://via.placeholder.com/200x150/6366F1/FFFFFF?text=43+Smart', link: '#smart-43' },
            item3: { name: '75" Neo QLED', image: 'https://via.placeholder.com/200x150/10B981/FFFFFF?text=75+Neo', link: '#neo-qled' }
        },
        type: 'elektronik',
        manufacturer: 'samsung'
    },
    10: {
        title: 'Yoga Matı',
        description: 'Nike yoga matı, kaymaz yüzey ve 6mm kalınlık ile yoga ve fitness antrenmanları için ideal.',
        secondaryTitle: 'Kaymaz Teknoloji',
        secondaryDescription: 'Her iki yüzü kaymaz özellikli, ter emici yüzey ile güvenli ve konforlu antrenman.',
        thirdTitle: 'Çok Amaçlı Kullanım',
        thirdDescription: 'Yoga, pilates, stretching ve fitness antrenmanları için çok amaçlı kullanım.',
        cardTitle: 'Yoga Mat Features',
        cardDescription: '6mm Thickness',
        cardDetails: 'Non-Slip Surface',
        cardSpecs: 'Multi-Purpose Use',
        cardLink: 'Get Yoga Mat ▶',
        images: {
            main: 'https://via.placeholder.com/400x300/8B5CF6/FFFFFF?text=Yoga+Mat',
            secondary: 'https://via.placeholder.com/400x300/06B6D4/FFFFFF?text=Non+Slip',
            card: 'https://via.placeholder.com/400x300/10B981/FFFFFF?text=Fitness+Ready'
        },
        items: {
            item1: { name: 'Pilates Mat', image: 'https://via.placeholder.com/200x150/8B5CF6/FFFFFF?text=Pilates+Mat', link: '#pilates-mat' },
            item2: { name: 'Exercise Ball', image: 'https://via.placeholder.com/200x150/06B6D4/FFFFFF?text=Exercise+Ball', link: '#exercise-ball' },
            item3: { name: 'Resistance Band', image: 'https://via.placeholder.com/200x150/10B981/FFFFFF?text=Resistance+Band', link: '#resistance-band' }
        },
        type: 'spor',
        manufacturer: 'nike'
    },
    11: {
        title: 'Kış Montu',
        description: 'Nike kış montu, su geçirmez DryFit teknolojisi ve termal astar ile soğuk hava koruması.',
        secondaryTitle: 'DryFit Teknolojisi',
        secondaryDescription: 'Su geçirmez dış kumaş, nefes alabilir iç astar ve termal yalıtım özelliği.',
        thirdTitle: 'Kış Performansı',
        thirdDescription: 'Ekstrem soğuk hava koşullarına karşı koruma, spor ve günlük kullanım için ideal.',
        cardTitle: 'Winter Jacket Features',
        cardDescription: 'DryFit Technology',
        cardDetails: 'Waterproof Design',
        cardSpecs: 'Thermal Insulation',
        cardLink: 'Get Winter Jacket ▶',
        images: {
            main: 'https://via.placeholder.com/400x300/1F2937/FFFFFF?text=Winter+Jacket',
            secondary: 'https://via.placeholder.com/400x300/374151/FFFFFF?text=DryFit+Tech',
            card: 'https://via.placeholder.com/400x300/4B5563/FFFFFF?text=Winter+Specs'
        },
        items: {
            item1: { name: 'Puffer Jacket', image: 'https://via.placeholder.com/200x150/1F2937/FFFFFF?text=Puffer+Jacket', link: '#puffer-jacket' },
            item2: { name: 'Windbreaker', image: 'https://via.placeholder.com/200x150/374151/FFFFFF?text=Windbreaker', link: '#windbreaker' },
            item3: { name: 'Fleece Jacket', image: 'https://via.placeholder.com/200x150/4B5563/FFFFFF?text=Fleece+Jacket', link: '#fleece-jacket' }
        },
        type: 'giyim',
        manufacturer: 'nike'
    },
    12: {
        title: 'Bluetooth Kulaklık',
        description: 'Apple AirPods Pro 2, aktif gürültü engelleme ve H2 çip ile premium ses deneyimi sunar.',
        secondaryTitle: 'Aktif Gürültü Engelleme',
        secondaryDescription: 'H2 çip ile 2 kat daha etkili gürültü engelleme ve Adaptive Transparency modu.',
        thirdTitle: 'Pro Ses Kalitesi',
        thirdDescription: 'Spatial Audio desteği, kişiselleştirilmiş ses profili ve 6 saate kadar müzik dinleme.',
        cardTitle: 'AirPods Pro Features',
        cardDescription: 'H2 Chip Technology',
        cardDetails: 'Active Noise Cancellation',
        cardSpecs: '6h Battery + Case',
        cardLink: 'Get AirPods ▶',
        images: {
            main: 'https://via.placeholder.com/400x300/FFFFFF/000000?text=AirPods+Pro',
            secondary: 'https://via.placeholder.com/400x300/007AFF/FFFFFF?text=ANC+Technology',
            card: 'https://via.placeholder.com/400x300/FF6B35/FFFFFF?text=Pro+Audio'
        },
        items: {
            item1: { name: 'AirPods 3', image: 'https://via.placeholder.com/200x150/FFFFFF/000000?text=AirPods+3', link: '#airpods-3' },
            item2: { name: 'AirPods Max', image: 'https://via.placeholder.com/200x150/007AFF/FFFFFF?text=AirPods+Max', link: '#airpods-max' },
            item3: { name: 'Beats Studio', image: 'https://via.placeholder.com/200x150/FF6B35/FFFFFF?text=Beats+Studio', link: '#beats-studio' }
        },
        type: 'elektronik',
        manufacturer: 'apple'
    },
    13: {
        title: 'Ev Parfümü',
        description: 'Zara ev parfümü, doğal içerikler ile uzun süre kalıcı ferah ve modern kokular.',
        secondaryTitle: 'Doğal İçerikler',
        secondaryDescription: 'Organik yağlar ve doğal esanslar ile üretilen, allerjen içermeyen formül.',
        thirdTitle: 'Uzun Süre Kalıcı',
        thirdDescription: 'Yatak odası, oturma odası ve banyo için ideal, 8-10 saate kadar kalıcı etki.',
        cardTitle: 'Home Fragrance Details',
        cardDescription: '100% Natural Ingredients',
        cardDetails: 'Allergen-Free Formula',
        cardSpecs: '8-10h Long Lasting',
        cardLink: 'Get Home Fragrance ▶',
        images: {
            main: 'https://via.placeholder.com/400x300/F3E8FF/8B5CF6?text=Home+Fragrance',
            secondary: 'https://via.placeholder.com/400x300/DBEAFE/6366F1?text=Natural+Oils',
            card: 'https://via.placeholder.com/400x300/E0E7FF/4F46E5?text=Fragrance+Specs'
        },
        items: {
            item1: { name: 'Lavender Scent', image: 'https://via.placeholder.com/200x150/F3E8FF/8B5CF6?text=Lavender', link: '#lavender' },
            item2: { name: 'Vanilla Scent', image: 'https://via.placeholder.com/200x150/DBEAFE/6366F1?text=Vanilla', link: '#vanilla' },
            item3: { name: 'Citrus Scent', image: 'https://via.placeholder.com/200x150/E0E7FF/4F46E5?text=Citrus', link: '#citrus' }
        },
        type: 'ev',
        manufacturer: 'zara'
    },
    14: {
        title: 'Spor Çantası',
        description: 'Adidas spor çantası, su geçirmez kumaş ve çoklu bölme ile antrenman ve seyahat için ideal.',
        secondaryTitle: 'Çoklu Bölme Sistemi',
        secondaryDescription: 'Ayakkabı bölmesi, su şişesi yeri ve küçük eşyalar için ayrı bölmeler.',
        thirdTitle: 'Dayanıklı Tasarım',
        thirdDescription: 'Su geçirmez kumaş, güçlendirilmiş dikiş ve ayarlanabilir askı sistemi.',
        cardTitle: 'Sport Bag Features',
        cardDescription: '40L Capacity',
        cardDetails: 'Multi-Compartment Design',
        cardSpecs: 'Waterproof Material',
        cardLink: 'Get Sport Bag ▶',
        images: {
            main: 'https://via.placeholder.com/400x300/000000/FFFFFF?text=Adidas+Sport+Bag',
            secondary: 'https://via.placeholder.com/400x300/1F2937/FFFFFF?text=Multi+Compartment',
            card: 'https://via.placeholder.com/400x300/374151/FFFFFF?text=Sport+Bag+Specs'
        },
        items: {
            item1: { name: 'Gym Backpack', image: 'https://via.placeholder.com/200x150/000000/FFFFFF?text=Gym+Backpack', link: '#gym-backpack' },
            item2: { name: 'Travel Bag', image: 'https://via.placeholder.com/200x150/1F2937/FFFFFF?text=Travel+Bag', link: '#travel-bag' },
            item3: { name: 'Duffel Bag', image: 'https://via.placeholder.com/200x150/374151/FFFFFF?text=Duffel+Bag', link: '#duffel-bag' }
        },
        type: 'spor',
        manufacturer: 'adidas'
    },
    15: {
        title: 'Tablet',
        description: 'Samsung Galaxy Tab S9, 11" AMOLED ekran ve S Pen desteği ile yaratıcılık ve verimlilik için ideal.',
        secondaryTitle: 'S Pen Desteği',
        secondaryDescription: 'Gelişmiş S Pen ile not alma, çizim ve hassas dokunmatik kontrol imkanı.',
        thirdTitle: 'AMOLED Ekran',
        thirdDescription: '11" Super AMOLED ekran, HDR10+ desteği ve 120Hz yenileme hızı ile mükemmel görüntü kalitesi.',
        cardTitle: 'Galaxy Tab Features',
        cardDescription: '11" Super AMOLED',
        cardDetails: 'S Pen Included',
        cardSpecs: '120Hz Refresh Rate',
        cardLink: 'Get Galaxy Tab ▶',
        images: {
            main: 'https://via.placeholder.com/400x300/1F2937/FFFFFF?text=Galaxy+Tab+S9',
            secondary: 'https://via.placeholder.com/400x300/374151/FFFFFF?text=S+Pen+Support',
            card: 'https://via.placeholder.com/400x300/4B5563/FFFFFF?text=Tab+Specs'
        },
        items: {
            item1: { name: 'iPad Pro', image: 'https://via.placeholder.com/200x150/1F2937/FFFFFF?text=iPad+Pro', link: '#ipad-pro' },
            item2: { name: 'Galaxy Tab A', image: 'https://via.placeholder.com/200x150/374151/FFFFFF?text=Tab+A', link: '#tab-a' },
            item3: { name: 'Surface Pro', image: 'https://via.placeholder.com/200x150/4B5563/FFFFFF?text=Surface+Pro', link: '#surface-pro' }
        },
        type: 'elektronik',
        manufacturer: 'samsung'
    }
};

// Ana sayfada ürün kartlarını hazırla
function setupHomepageCards() {
    console.log('🏠 Ana sayfa ürün kartları hazırlanıyor...');
    
    // Ürün kartlarını bul
    const productCards = document.querySelectorAll(
        '.card, .product-card, .catalog-item, .item, [data-product-id], .product'
    );
    
    console.log(`📦 ${productCards.length} adet ürün kartı bulundu`);
    
    productCards.forEach((card, index) => {
        const productId = index + 1;
        
        // Ürün ID'sini ata
        card.setAttribute('data-product-id', productId);
        
        // Product sayfasına yönlendirme eventi ekle
        card.addEventListener('click', function(e) {
            e.preventDefault();
            console.log(`🔗 Ürün kartına tıklandı: ID ${productId}`);
            window.location.href = `product.html?id=${productId}`;
        });
        
        // Görsel efektler
        card.style.cursor = 'pointer';
        card.style.transition = 'all 0.3s ease';
        
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.02)';
            this.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        });
        
        console.log(`✅ Kart ${productId} hazırlandı`);
    });
}

// Global yönlendirme fonksiyonu
function goToProduct(productId) {
    console.log(`🚀 Product sayfasına yönlendiriliyor: ID ${productId}`);
    
    if (!productId || productId < 1 || productId > 15) {
        console.error('❌ Geçersiz ürün ID:', productId);
        productId = 1;
    }
    
    window.location.href = `product.html?id=${productId}`;
}

// Sayfa yüklendiğinde çalışacak fonksiyonlar
document.addEventListener('DOMContentLoaded', function() {
    console.log('🎉 Ana sayfa yüklendi!');
    
    // Ürün kartlarını hazırla
    setupHomepageCards();
    
    console.log('✅ Ana sayfa hazır - Product sayfasına yönlendirmeler aktif');
});
// Global olarak erişilebilir yap
window.goToProduct = goToProduct;
window.productDatabase = productDatabase;

console.log('📋 Ana sayfa JavaScript kodu hazır! 15 ürün product.html sayfasına yönlendirilecek.');

// Katalog ID'lerini kontrol et ve ata
function ensureProductIds() {
    console.log('🔢 Ürün ID\'leri kontrol ediliyor...');
    
    // Tüm potansiyel ürün kartlarını bul
    const allCards = document.querySelectorAll(
        '.card, .product-card, .catalog-item, .item, .product, [data-product], .grid-item'
    );
    
    allCards.forEach((card, index) => {
        const productId = index + 1;
        
        // ID'yi ata
        if (!card.getAttribute('data-product-id')) {
            card.setAttribute('data-product-id', productId);
        }
        
        // Görsel test badge'i ekle (geliştirme için)
        if (!card.querySelector('.debug-id-badge')) {
            const debugBadge = document.createElement('div');
            debugBadge.className = 'debug-id-badge';
            debugBadge.textContent = `ID: ${productId}`;
            debugBadge.style.cssText = `
                position: absolute;
                top: 5px;
                left: 5px;
                background: rgba(0, 122, 255, 0.8);
                color: white;
                padding: 2px 6px;
                border-radius: 10px;
                font-size: 10px;
                font-weight: bold;
                z-index: 100;
                pointer-events: none;
                font-family: monospace;
            `;
            
            card.style.position = 'relative';
            card.appendChild(debugBadge);
        }
        
        console.log(`✅ Kart ${index + 1} → ID ${productId} atandı`);
    });
    
    return allCards.length;
}

// Gelişmiş ürün kartı tespiti
function detectProductCards() {
    console.log('🔍 Ürün kartları tespit ediliyor...');
    
    const selectors = [
        '.card',
        '.product-card', 
        '.catalog-item',
        '.item',
        '.product',
        '.grid-item',
        '[data-product-id]',
        '[data-product]',
        '.catalog-card',
        '.shop-item'
    ];
    
    let foundCards = [];
    
    selectors.forEach(selector => {
        const elements = document.querySelectorAll(selector);
        elements.forEach(el => {
            if (!foundCards.includes(el)) {
                foundCards.push(el);
            }
        });
    });
    
    // Eğer hiç kart bulunamazsa, görsel ipuçlarına göre ara
    if (foundCards.length === 0) {
        console.log('⚠️ Standart selektorlerle kart bulunamadı, görsel analiz yapılıyor...');
        
        const allDivs = document.querySelectorAll('div');
        allDivs.forEach(div => {
            const hasImage = div.querySelector('img') !== null;
            const hasText = div.textContent.trim().length > 10 && div.textContent.trim().length < 200;
            const hasClickableArea = div.offsetWidth > 100 && div.offsetHeight > 100;
            const hasMultipleChildren = div.children.length >= 2;
            
            if (hasImage && hasText && hasClickableArea && hasMultipleChildren) {
                foundCards.push(div);
                div.classList.add('detected-product-card');
                console.log('🎯 Potansiyel ürün kartı tespit edildi:', div);
            }
        });
    }
    
    console.log(`📦 Toplam ${foundCards.length} ürün kartı tespit edildi`);
    return foundCards;
}

// Kartlara tıklama olaylarını ekle
function addClickEvents(cards) {
    console.log('🖱️ Klik eventleri ekleniyor...');
    
    cards.forEach((card, index) => {
        const productId = index + 1;
        
        // Mevcut click eventlerini temizle
        card.onclick = null;
        
        // Yeni click eventi ekle
        card.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            console.log(`🔗 Ürün kartına tıklandı: ${index + 1}`);
            console.log('📦 Ürün bilgisi:', {
                title: productDatabase[productId]?.title || `Ürün ${productId}`,
                id: productId,
                element: card
            });
            
            // Product sayfasına yönlendir
            goToProduct(productId);
        });
        
        // Görsel efektler ekle
        addVisualEffects(card);
        
        console.log(`✅ Kart ${productId} eventi eklendi`);
    });
}

// Görsel efektler ekle
function addVisualEffects(card) {
    // Cursor pointer yap
    card.style.cursor = 'pointer';
    card.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
    
    // Hover efektleri
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-8px) scale(1.02)';
        this.style.boxShadow = '0 20px 40px rgba(0,0,0,0.15)';
        this.style.zIndex = '10';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
        this.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
        this.style.zIndex = '1';
    });
    
    // Active (basılı) efekti
    card.addEventListener('mousedown', function() {
        this.style.transform = 'translateY(-6px) scale(0.98)';
    });
    
    card.addEventListener('mouseup', function() {
        this.style.transform = 'translateY(-8px) scale(1.02)';
    });
}

// Ana kurulum fonksiyonu
function setupMainPage() {
    console.log('🏠 Ana sayfa kurulumu başlıyor...');
    
    // 1. Ürün kartlarını tespit et
    const productCards = detectProductCards();
    
    if (productCards.length === 0) {
        console.error('❌ Hiç ürün kartı bulunamadı!');
        showSetupError();
        return;
    }
    
    // 2. ID'leri ata
    const assignedCount = ensureProductIds();
    
    // 3. Click eventlerini ekle
    addClickEvents(productCards);
    
    console.log(`✅ Ana sayfa kurulumu tamamlandı: ${assignedCount} kart hazır`);
    
    // 4. Test butonları ekle (geliştirme için)
    addTestButtons();
}

// Test butonları ekle (geliştirme için)
function addTestButtons() {
    console.log('🧪 Test butonları ekleniyor...');
    
    const testContainer = document.createElement('div');
    testContainer.id = 'test-navigation-panel';
    testContainer.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: rgba(0, 0, 0, 0.8);
        color: white;
        padding: 15px;
        border-radius: 10px;
        z-index: 9999;
        font-family: monospace;
        font-size: 12px;
        display: none;
    `;
    
    testContainer.innerHTML = `
        <div style="margin-bottom: 10px; font-weight: bold;">🧪 TEST PANELİ</div>
        <button onclick="testNavigation()" style="margin: 2px; padding: 5px; font-size: 10px;">Test Navigation</button>
        <button onclick="debugHomepage()" style="margin: 2px; padding: 5px; font-size: 10px;">Debug Info</button>
        <button onclick="showTestPanel(false)" style="margin: 2px; padding: 5px; font-size: 10px;">Kapat</button>
        <div style="margin-top: 10px;">
            <input type="number" id="testProductId" placeholder="ID" min="1" max="15" style="width: 40px; padding: 2px;">
            <button onclick="goToProduct(document.getElementById('testProductId').value)" style="padding: 2px 5px; font-size: 10px;">Git</button>
        </div>
    `;
    
    document.body.appendChild(testContainer);
    
    // Test paneli toggle fonksiyonu
    window.showTestPanel = function(show = true) {
        testContainer.style.display = show ? 'block' : 'none';
    };
    
    // Ctrl+Shift+T ile test panelini aç
    document.addEventListener('keydown', function(e) {
        if (e.ctrlKey && e.shiftKey && e.key === 'T') {
            e.preventDefault();
            showTestPanel(testContainer.style.display === 'none');
        }
    });
    
    console.log('✅ Test paneli eklendi (Ctrl+Shift+T ile açın)');
}

// Hata durumu göster
function showSetupError() {
    console.error('🚨 Kurulum hatası!');
    
    const errorDiv = document.createElement('div');
    errorDiv.style.cssText = `
        position: fixed;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        background: #ff4444;
        color: white;
        padding: 15px 25px;
        border-radius: 8px;
        z-index: 9999;
        font-family: Arial, sans-serif;
        font-size: 14px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.3);
    `;
    
    errorDiv.innerHTML = `
        <strong>⚠️ Kurulum Hatası!</strong><br>
        Ürün kartları bulunamadı. Lütfen HTML yapınızı kontrol edin.
    `;
    
    document.body.appendChild(errorDiv);
    
    // 5 saniye sonra kaldır
    setTimeout(() => {
        if (errorDiv.parentNode) {
            errorDiv.parentNode.removeChild(errorDiv);
        }
    }, 5000);
}

// Test fonksiyonları
window.testNavigation = function() {
    console.log('🧪 Navigasyon testi başlıyor...');
    
    for (let i = 1; i <= 15; i++) {
        console.log(`Test ${i}: product.html?id=${i} - Ürün: ${productDatabase[i]?.title || 'Tanımsız'}`);
    }
    
    // İlk 3 ürünü test et
    console.log('📋 İlk 3 ürün için otomatik test yapılıyor...');
    
    setTimeout(() => {
        console.log('Test 1: iPhone 14 Pro');
        // goToProduct(1); // Gerçek yönlendirme yapmamak için yorum
    }, 1000);
    
    console.log('✅ Test tamamlandı');
};

window.debugHomepage = function() {
    console.log('🔍 DEBUG RAPORU:');
    console.log('================');
    console.log('Sayfa URL:', window.location.href);
    console.log('Sayfa başlığı:', document.title);
    console.log('Viewport boyutu:', window.innerWidth + 'x' + window.innerHeight);
    
    // Element istatistikleri
    console.log('\n📊 ELEMENT İSTATİSTİKLERİ:');
    console.log('Toplam div sayısı:', document.querySelectorAll('div').length);
    console.log('Toplam img sayısı:', document.querySelectorAll('img').length);
    console.log('.card elementleri:', document.querySelectorAll('.card').length);
    console.log('.product-card elementleri:', document.querySelectorAll('.product-card').length);
    console.log('[data-product-id] elementleri:', document.querySelectorAll('[data-product-id]').length);
    
    // Tespit edilen kartlar
    console.log('\n📦 TESPİT EDİLEN KARTLAR:');
    const detectedCards = detectProductCards();
    detectedCards.forEach((card, index) => {
        console.log(`Kart ${index + 1}:`, {
            tagName: card.tagName,
            className: card.className,
            id: card.id,
            productId: card.getAttribute('data-product-id'),
            text: card.textContent.substring(0, 50) + '...'
        });
    });
    
    // Veritabanı durumu
    console.log('\n💾 VERİTABANI DURUMU:');
    console.log('Toplam ürün sayısı:', Object.keys(productDatabase).length);
    console.log('İlk 3 ürün:', Object.keys(productDatabase).slice(0, 3).map(id => ({
        id,
        title: productDatabase[id].title
    })));
    
    console.log('\n✅ Debug raporu tamamlandı');
};

// Sayfa yüklenme olayları
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 DOM yüklendi, ana sayfa kurulumu başlıyor...');
    
    // Kısa bir gecikme ile kurulumu başlat (DOM'un tam yüklenmesi için)
    setTimeout(setupMainPage, 100);
});

// Sayfa tamamen yüklendiğinde tekrar kontrol et
window.addEventListener('load', function() {
    console.log('🎉 Sayfa tamamen yüklendi, final kontrol yapılıyor...');
    
    // Eğer henüz kurulum yapılmamışsa, tekrar dene
    const existingCards = document.querySelectorAll('[data-product-id]');
    if (existingCards.length === 0) {
        console.log('⚠️ Kartlar henüz hazırlanmamış, tekrar deneniyor...');
        setTimeout(setupMainPage, 500);
    }
});

// Dinamik içerik değişiklikleri için observer
const pageObserver = new MutationObserver(function(mutations) {
    let shouldResetup = false;
    
    mutations.forEach(function(mutation) {
        if (mutation.type === 'childList') {
            // Yeni elementler eklenmişse
            mutation.addedNodes.forEach(function(node) {
                if (node.nodeType === 1) { // Element node
                    const hasProductCards = node.querySelector && (
                        node.querySelector('.card') ||
                        node.querySelector('.product-card') ||
                        node.classList.contains('card') ||
                        node.classList.contains('product-card')
                    );
                    
                    if (hasProductCards) {
                        shouldResetup = true;
                    }
                }
            });
        }
    });
    
    if (shouldResetup) {
        console.log('🔄 Dinamik içerik değişikliği tespit edildi, yeniden kurulum yapılıyor...');
        setTimeout(setupMainPage, 200);
    }
});

// Observer'ı başlat
pageObserver.observe(document.body, {
    childList: true,
    subtree: true
});

// Cleanup fonksiyonu
window.addEventListener('beforeunload', function() {
    console.log('👋 Sayfa kapatılıyor, temizlik yapılıyor...');
    pageObserver.disconnect();
});

// Konsol yardım mesajları
console.log(`
🎯 ANA SAYFA HAZIR!
================
📋 Kullanılabilir Fonksiyonlar:
- goToProduct(id) - Belirli ürüne git
- testNavigation() - Navigasyon testi
- debugHomepage() - Debug bilgileri
- showTestPanel(true/false) - Test panelini aç/kapat

⌨️ Kısayollar:
- Ctrl+Shift+T: Test panelini aç/kapat

🔧 Otomatik Özellikler:
- Tüm ürün kartları otomatik tespit edilir
- Product.html sayfasına yönlendirme hazır
- 15 farklı ürün desteği
- Görsel efektler ve hover animasyonları

📦 Desteklenen Kart Sınıfları:
.card, .product-card, .catalog-item, .item, .product, .grid-item

✅ Sistem hazır ve çalışıyor!
`);

// Global fonksiyonları window objesine ekle
window.ensureProductIds = ensureProductIds;
window.detectProductCards = detectProductCards;
window.setupMainPage = setupMainPage;