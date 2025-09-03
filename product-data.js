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
        }
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
        }
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
        }
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
        }
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
        }
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
        }
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
        }
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
        }
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
        }
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
        }
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
        }
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
        }
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
        }
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
        }
    },
    15: {
        title: 'Tablet',
        description: 'Samsung Galaxy Tab S9, 11" AMOLED ekran ve S Pen desteği ile yaratıcılık ve verimlilik için ideal.',
        secondaryTitle: 'S Pen Desteği',
        secondaryDescription: 'Gelişmiş S Pen ile not alma, çizim ve hassas dokunmatik kontrol imkanı.',
        thirdTitle: 'AMOLED Ekran',
        thirdDescription: '11" Super AMOLED ekran, HDR10+ desteği ve 120Hz yenileme hızı ile mükemmel görüntü.',
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
        }
    }
};

// URL'den ID'yi al
function getProductIdFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    console.log('🔍 URL\'den alınan ID:', id);
    return id;
}

// Ürün bilgilerini yükle
function loadProduct() {
    console.log('📦 Ürün yükleme başlıyor...');
    
    const productId = getProductIdFromUrl();
    
    if (!productId) {
        console.error('❌ Ürün ID\'si bulunamadı!');
        showError('Ürün ID\'si bulunamadı. Lütfen geçerli bir ürün linkini kullanın.');
        return;
    }
    
    const product = productDatabase[productId];
    
    if (!product) {
        console.error('❌ Ürün bulunamadı:', productId);
        showError('Ürün bulunamadı. Lütfen geçerli bir ürün ID\'si kullanın.');
        return;
    }
    
    console.log('✅ Ürün bulundu:', product);
    updateProductContent(product);
}

// Ürün içeriğini güncelle
function updateProductContent(product) {
    console.log('🔄 İçerik güncelleniyor...');
    
    try {
        // Ana başlık ve açıklama
        updateElement('title', product.title);
        updateElement('description', product.description);
        
        // Ana ürün görseli
        updateImage('product-image', product.images.main, product.title);
        
        // İkincil başlık ve açıklama
        updateElement('secondary-title', product.secondaryTitle);
        updateElement('secondary-description', product.secondaryDescription);
        
        // İkincil görsel
        updateImage('product-image-2', product.images.secondary, product.secondaryTitle);
        
        // Seçenekler bölümü başlığı
        updateElement('third-title', product.thirdTitle);
        updateElement('third-description', product.thirdDescription);
        
        // Kart bölümü
        updateElement('card-title', product.cardTitle);
        updateElement('card-description', product.cardDescription);
        updateElement('card-details', product.cardDetails);
        updateElement('card-specs', product.cardSpecs);
        updateElement('card-link', product.cardLink);
        updateImage('card-image', product.images.card, product.cardTitle);
        
        // Benzer ürünler
        updateSimilarItems(product.items);
        
        console.log('✅ İçerik başarıyla güncellendi!');
        
    } catch (error) {
        console.error('❌ İçerik güncellenirken hata:', error);
        showError('İçerik yüklenirken bir hata oluştu.');
    }
}

// Element içeriğini güncelle
function updateElement(id, content) {
    const element = document.getElementById(id);
    if (element) {
        element.textContent = content;
        console.log(`✅ ${id} güncellendi:`, content);
    } else {
        console.warn(`⚠️ Element bulunamadı: ${id}`);
    }
}

// Görsel güncelle
function updateImage(id, src, alt) {
    const element = document.getElementById(id);
    if (element) {
        element.src = src;
        element.alt = alt;
        console.log(`✅ ${id} görseli güncellendi:`, src);
    } else {
        console.warn(`⚠️ Görsel elementi bulunamadı: ${id}`);
    }
}

// Link güncelle
function updateLink(id, href, text) {
    const element = document.getElementById(id);
    if (element) {
        element.href = href;
        if (text) element.textContent = text;
        console.log(`✅ ${id} linki güncellendi:`, href);
    } else {
        console.warn(`⚠️ Link elementi bulunamadı: ${id}`);
    }
}

// Benzer ürünleri güncelle
function updateSimilarItems(items) {
    console.log('🔄 Benzer ürünler güncelleniyor...');
    
    // Item 1
    updateElement('item-1-name', items.item1.name);
    updateImage('item-1-image', items.item1.image, items.item1.name);
    updateLink('item-1-link', items.item1.link);
    
    // Item 2
    updateElement('item-2-name', items.item2.name);
    updateImage('item-2-image', items.item2.image, items.item2.name);
    updateLink('item-2-link', items.item2.link);
    
    // Item 3
    updateElement('item-3-name', items.item3.name);
    updateImage('item-3-image', items.item3.image, items.item3.name);
    updateLink('item-3-link', items.item3.link);
    
    console.log('✅ Benzer ürünler güncellendi!');
}

// Hata mesajı göster
function showError(message) {
    console.error('❌ Hata:', message);
    
    // Ana başlığa hata mesajını yaz
    const titleElement = document.getElementById('title');
    if (titleElement) {
        titleElement.textContent = 'Hata Oluştu';
        titleElement.style.color = '#ef4444';
    }
    
    // Açıklama alanına hata detayını yaz
    const descriptionElement = document.getElementById('description');
    if (descriptionElement) {
        descriptionElement.textContent = message;
        descriptionElement.style.color = '#6b7280';
    }
}

// Seçenek içeriğini göster (mevcut fonksiyon güncellemesi)
function showContent(optionIndex) {
    console.log('🔄 Seçenek değiştiriliyor:', optionIndex);
    
    const productId = getProductIdFromUrl();
    const product = productDatabase[productId];
    
    if (!product) {
        console.error('❌ Ürün bulunamadı');
        return;
    }
    
    // Tüm seçeneklerin aktif sınıfını kaldır
    const options = document.querySelectorAll('.option');
    options.forEach(option => option.classList.remove('active'));
    
    // Tıklanan seçeneği aktif yap
    if (options[optionIndex]) {
        options[optionIndex].classList.add('active');
    }
    
    // İçeriği güncelle (örnek içerik)
    const contents = [
        {
            title: product.thirdTitle,
            description: product.thirdDescription
        },
        {
            title: 'Seçenek 2 Başlığı',
            description: 'Seçenek 2 için özel açıklama metni. Bu bölümde ürünün farklı özelliklerini vurgulayabilirsiniz.'
        },
        {
            title: 'Seçenek 3 Başlığı', 
            description: 'Seçenek 3 için özel açıklama metni. Bu bölümde ürünün teknik detaylarını paylaşabilirsiniz.'
        }
    ];
    
    const selectedContent = contents[optionIndex] || contents[0];
    updateElement('third-title', selectedContent.title);
    updateElement('third-description', selectedContent.description);
}

// Mobil menü toggle fonksiyonu
function toggleMedicalMobileMenu() {
    const nav = document.querySelector('.medical-main-nav');
    if (nav) {
        nav.classList.toggle('mobile-active');
        console.log('📱 Mobil menü toggle edildi');
    }
}

// Dil seçici toggle fonksiyonu  
function toggleMedicalLanguage() {
    const dropdown = document.querySelector('.medical-language-dropdown');
    if (dropdown) {
        dropdown.classList.toggle('active');
        console.log('🌐 Dil menüsü toggle edildi');
    }
}

// Dil seçme fonksiyonu
function selectMedicalLanguage(lang) {
    const langBtn = document.querySelector('.medical-language-btn');
    const options = document.querySelectorAll('.medical-language-option');
    const dropdown = document.querySelector('.medical-language-dropdown');
    
    if (langBtn) {
        langBtn.textContent = lang;
    }
    
    // Tüm seçeneklerin aktif sınıfını kaldır
    options.forEach(option => option.classList.remove('active'));
    
    // Seçilen dili aktif yap
    const selectedOption = document.querySelector(`[onclick="selectMedicalLanguage('${lang}')"]`);
    if (selectedOption) {
        selectedOption.classList.add('active');
    }
    
    // Dropdown'ı kapat
    if (dropdown) {
        dropdown.classList.remove('active');
    }
    
    console.log('🌐 Dil değiştirildi:', lang);
}

// Sayfa yüklendiğinde ürünü yükle
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Sayfa yüklendi, ürün yükleniyor...');
    loadProduct();
});

// Sayfa görünürlüğü değiştiğinde kontrol et
document.addEventListener('visibilitychange', function() {
    if (!document.hidden) {
        console.log('👀 Sayfa aktif, ürün kontrolü yapılıyor...');
        loadProduct();
    }
});

// Hata yakalama
window.addEventListener('error', function(e) {
    console.error('🚨 Genel hata yakalandı:', e.error);
    showError('Beklenmeyen bir hata oluştu. Sayfa yenilemeyi deneyin.');
});

// URL değişikliklerini dinle (SPA desteği)
window.addEventListener('popstate', function() {
    console.log('🔄 URL değişti, ürün yeniden yükleniyor...');
    loadProduct();
});

console.log('📝 JavaScript kodu hazır!');