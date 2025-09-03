// Dil çevirileri
const translations = {
   en: {
       'who-we-are': 'Who We Are',
       'our-services': 'Our Services',
       'fair-events': 'Fair Events',
       'products': 'Products',
       'contact': 'Contact Us',
       'digital-catalogue': 'DIGITAL CATALOGUE',
       'dental': 'DENTAL',
       'orthopedic': 'ORTHOPEDIC',
       'spinal': 'SPINAL'
   },
   tr: {
       'who-we-are': 'Biz Kimiz',
       'our-services': 'Hizmetlerimiz',
       'fair-events': 'Fuar Etkinlikleri',
       'products': 'Ürünler',
       'contact': 'İletişim',
       'digital-catalogue': 'DİJİTAL KATALOG',
       'dental': 'DİŞ HEKİMLİĞİ',
       'orthopedic': 'ORTOPEDİK',
       'spinal': 'OMURGA'
   },
   de: {
       'who-we-are': 'Wer wir sind',
       'our-services': 'Unsere Dienstleistungen',
       'fair-events': 'Messe-Veranstaltungen',
       'products': 'Produkte',
       'contact': 'Kontakt',
       'digital-catalogue': 'DIGITALER KATALOG',
       'dental': 'ZAHNMEDIZIN',
       'orthopedic': 'ORTHOPÄDISCH',
       'spinal': 'WIRBELSÄULE'
   }
};

let currentLanguage = 'en';

// Ürün verisi - Blog sayfasına yönlendirmek için ID'ler
let catalogItems = [
   {id: 1, title: 'iPhone 14 Pro', type: 'elektronik', manufacturer: 'apple'},
   {id: 2, title: 'Samsung Galaxy S23', type: 'elektronik', manufacturer: 'samsung'},
   {id: 3, title: 'Nike Air Max', type: 'spor', manufacturer: 'nike'},
   {id: 4, title: 'Beyaz Tişört', type: 'giyim', manufacturer: 'zara'},
   {id: 5, title: 'Kahve Makinesi', type: 'ev', manufacturer: 'philips'},
   {id: 6, title: 'Adidas Spor Ayakkabı', type: 'spor', manufacturer: 'adidas'},
   {id: 7, title: 'MacBook Air', type: 'elektronik', manufacturer: 'apple'},
   {id: 8, title: 'Jean Pantolon', type: 'giyim', manufacturer: 'zara'},
   {id: 9, title: 'Akıllı TV', type: 'elektronik', manufacturer: 'samsung'},
   {id: 10, title: 'Yoga Matı', type: 'spor', manufacturer: 'nike'},
   {id: 11, title: 'Kış Montu', type: 'giyim', manufacturer: 'nike'},
   {id: 12, title: 'Bluetooth Kulaklık', type: 'elektronik', manufacturer: 'apple'},
   {id: 13, title: 'Ev Parfümü', type: 'ev', manufacturer: 'zara'},
   {id: 14, title: 'Spor Çantası', type: 'spor', manufacturer: 'adidas'},
   {id: 15, title: 'Tablet', type: 'elektronik', manufacturer: 'samsung'},
];

let filteredCatalog = [...catalogItems];
let activePage = 1;
const itemsPerPage = 8;

// Ana başlatma fonksiyonu
document.addEventListener('DOMContentLoaded', function() {
   console.log('DOM yüklendi - başlatılıyor...');
   
   setTimeout(() => {
       initializeAll();
   }, 100);
});

function initializeAll() {
   console.log('Tüm sistemler başlatılıyor...');
   
   // Header sistemleri
   setupLanguage();
   setupMobileMenu();
   setupHeaderScroll();
   
   // Video oynatma
   setupVideoPlayer();
   
   // Healthcare animasyonları
   setupHealthcareAnimations();
   
   // Servis kartları animasyonları
   setupServiceAnimations();
   
   // Showcase animasyonları
   setupShowcaseAnimations();
   
   // Ürün katalogu
   setupCatalog();
   
   // İletişim formu
   setupContactForm();
   
   console.log('Tüm sistemler başlatıldı');
}

// Medical Header Language System
function setupLanguage() {
   const languageSelector = document.querySelector('.medical-language-selector');
   const languageBtn = document.querySelector('.medical-language-btn');
   const languageOptions = document.querySelectorAll('.medical-language-option');
   
   if (!languageSelector || !languageBtn) {
       console.log('Dil seçici elementleri bulunamadı');
       return;
   }
   
   // Başlangıç dilini ayarla
   changeLanguage('en');
   
   languageBtn.addEventListener('click', (e) => {
       e.stopPropagation();
       toggleMedicalLanguage();
   });

   document.addEventListener('click', () => {
       languageSelector.classList.remove('active');
   });

   languageOptions.forEach(option => {
       option.addEventListener('click', () => {
           const selectedLang = option.textContent === 'English' ? 'EN' : 
                                option.textContent === 'Türkçe' ? 'TR' : 'DE';
           selectMedicalLanguage(selectedLang);
       });
   });
   
   console.log('Dil sistemi kuruldu');
}

function toggleMedicalLanguage() {
   const selector = document.querySelector('.medical-language-selector');
   if (selector) {
       selector.classList.toggle('active');
   }
}

function selectMedicalLanguage(lang) {
   const btn = document.querySelector('.medical-language-btn');
   if (btn) {
       btn.textContent = lang;
   }
   
   document.querySelectorAll('.medical-language-option').forEach(option => {
       option.classList.remove('active');
   });
   
   const options = document.querySelectorAll('.medical-language-option');
   options.forEach(option => {
       if (option.textContent.includes(lang) || 
           (lang === 'EN' && option.textContent.includes('English')) ||
           (lang === 'TR' && option.textContent.includes('Türkçe')) ||
           (lang === 'DE' && option.textContent.includes('Deutsch'))) {
           option.classList.add('active');
       }
   });
   
   // Dil değiştirme
   const langCode = lang.toLowerCase();
   changeLanguage(langCode);
   
   toggleMedicalLanguage();
}

function changeLanguage(lang) {
   if (!translations[lang]) {
       console.warn(`Dil kodu '${lang}' desteklenmiyor`);
       return;
   }
   
   currentLanguage = lang;
   document.documentElement.lang = lang;
   
   // Navigation linklerini güncelle
   const navLinks = document.querySelectorAll('.medical-nav-links a');
   navLinks.forEach(link => {
       const href = link.getAttribute('href');
       if (href === '#who-we-are' && translations[lang]['who-we-are']) {
           link.textContent = translations[lang]['who-we-are'];
       } else if (href === '#our-services' && translations[lang]['our-services']) {
           link.textContent = translations[lang]['our-services'];
       } else if (href === '#fair-events' && translations[lang]['fair-events']) {
           link.textContent = translations[lang]['fair-events'];
       } else if (href === '#products' && translations[lang]['products']) {
           link.textContent = translations[lang]['products'];
       } else if (href === '#contact' && translations[lang]['contact']) {
           link.textContent = translations[lang]['contact'];
       }
   });
   
   // Dropdown menü linklerini güncelle
   const dropdownLinks = document.querySelectorAll('.medical-dropdown-menu a');
   dropdownLinks.forEach(link => {
       const href = link.getAttribute('href');
       if (href === '#dental' && translations[lang]['dental']) {
           link.textContent = translations[lang]['dental'];
       } else if (href === '#orthopedic' && translations[lang]['orthopedic']) {
           link.textContent = translations[lang]['orthopedic'];
       } else if (href === '#spinal' && translations[lang]['spinal']) {
           link.textContent = translations[lang]['spinal'];
       }
   });
   
   // Digital Catalogue button'ı güncelle
   const catalogueBtn = document.querySelector('.medical-catalogue-btn');
   if (catalogueBtn && translations[lang]['digital-catalogue']) {
       catalogueBtn.textContent = translations[lang]['digital-catalogue'];
   }
}

// Medical Header Mobile Menu
function setupMobileMenu() {
   const hamburger = document.querySelector('.medical-hamburger');
   const navLinks = document.querySelector('.medical-main-nav');
   
   if (!hamburger || !navLinks) {
       console.log('Mobil menü elementleri bulunamadı');
       return;
   }
   
   hamburger.addEventListener('click', toggleMedicalMobileMenu);
   
   document.querySelectorAll('.medical-nav-links a').forEach(link => {
       link.addEventListener('click', () => {
           if (window.innerWidth <= 992) {
               toggleMedicalMobileMenu();
           }
       });
   });
   
   console.log('Mobil menü kuruldu');
}

function toggleMedicalMobileMenu() {
   const nav = document.querySelector('.medical-main-nav');
   const hamburger = document.querySelector('.medical-hamburger');
   
   if (nav) {
       nav.classList.toggle('active');
   }
   if (hamburger) {
       hamburger.classList.toggle('active');
   }
}

// Medical Header Scroll Effect
function setupHeaderScroll() {
   let lastScrollTop = 0;
   
   window.addEventListener('scroll', function() {
       let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
       const header = document.querySelector('.medical-header');
       
       if (header) {
           if (scrollTop > lastScrollTop && scrollTop > 100) {
               header.style.transform = 'translateY(-100%)';
           } else {
               header.style.transform = 'translateY(0)';
           }
       }
       lastScrollTop = scrollTop;
   });
   
   // Smooth scroll for anchor links
   document.querySelectorAll('a[href^="#"]').forEach(anchor => {
       anchor.addEventListener('click', function (e) {
           e.preventDefault();
           const target = document.querySelector(this.getAttribute('href'));
           if (target) {
               target.scrollIntoView({
                   behavior: 'smooth',
                   block: 'start'
               });
           }
       });
   });
   
   console.log('Header scroll efektleri kuruldu');
}

// Video oynatıcı
function setupVideoPlayer() {
   const videoPreview = document.querySelector('.clinic-video-preview');
   if (!videoPreview) {
       console.log('Video oynatıcı bulunamadı');
       return;
   }
   
   videoPreview.addEventListener('click', playHospitalVideo);
   console.log('Video oynatıcı kuruldu');
}

function playHospitalVideo() {
   const video = document.getElementById('hospitalVideo');
   const videoPreview = document.querySelector('.clinic-video-preview');
   
   if (!video || !videoPreview) return;
   
   video.style.display = 'block';
   const playIndicator = videoPreview.querySelector('.video-play-indicator');
   if (playIndicator) {
       playIndicator.style.display = 'none';
   }
   
   // Fullscreen özelliğini kontrol et
   if (video.requestFullscreen) {
       video.requestFullscreen().catch(err => {
           console.error('Tam ekran hatası:', err);
       });
   } else if (video.webkitRequestFullscreen) {
       video.webkitRequestFullscreen();
   } else if (video.mozRequestFullScreen) {
       video.mozRequestFullScreen();
   } else if (video.msRequestFullscreen) {
       video.msRequestFullscreen();
   }
   
   video.play().catch(err => {
       console.error('Video oynatma hatası:', err);
   });
   
   video.onended = function() {
       video.style.display = 'none';
       if (playIndicator) {
           playIndicator.style.display = 'flex';
       }
       video.currentTime = 0;
   };
}

// Healthcare section animasyonları
function setupHealthcareAnimations() {
   const healthcareSection = document.querySelector('.healthcare-section');
   
   if (!healthcareSection) {
       console.log('Healthcare section bulunamadı');
       return;
   }
   
   const observer = new IntersectionObserver((entries) => {
       entries.forEach(entry => {
           if (entry.isIntersecting) {
               entry.target.classList.add('animated');
               console.log('Healthcare section animasyonu tetiklendi');
           }
       });
   }, { threshold: 0.3 });
   
   observer.observe(healthcareSection);
   
   setTimeout(() => {
       healthcareSection.classList.add('animated');
   }, 500);
   
   console.log('Healthcare animasyonları kuruldu');
}

// Servis kartları animasyonları
function setupServiceAnimations() {
   const cards = document.querySelectorAll('.service-card');
   const dots = document.querySelectorAll('.dot');

   if (cards.length === 0) {
       console.log('Servis kartları bulunamadı');
       return;
   }

   cards.forEach((card, index) => {
       card.addEventListener('mouseenter', () => {
           card.style.transform = 'translateY(-8px) scale(1.02)';
       });

       card.addEventListener('mouseleave', () => {
           card.style.transform = 'translateY(0) scale(1)';
       });
       
       card.style.opacity = '0';
       card.style.transform = 'translateY(30px)';
       card.style.transition = `all 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.1}s`;
   });

   dots.forEach((dot, index) => {
       dot.addEventListener('click', () => {
           dots.forEach(d => d.classList.remove('active'));
           dot.classList.add('active');
           console.log(`Switched to slide ${index + 1}`);
       });
   });

   const observer = new IntersectionObserver((entries) => {
       entries.forEach((entry) => {
           if (entry.isIntersecting) {
               entry.target.style.opacity = '1';
               entry.target.style.transform = 'translateY(0)';
           }
       });
   });

   cards.forEach(card => observer.observe(card));
   
   console.log('Servis animasyonları kuruldu');
}

// Showcase animasyonları
function setupShowcaseAnimations() {
   const container = document.querySelector('.showcase-container');
   const track = document.querySelector('.showcase-track');

   if (!container || !track) {
       console.log('Showcase elementleri bulunamadı');
       return;
   }

   container.addEventListener('mouseenter', () => {
       track.style.animationPlayState = 'paused';
   });

   container.addEventListener('mouseleave', () => {
       track.style.animationPlayState = 'running';
   });

   function adjustAnimationSpeed() {
       const screenWidth = window.innerWidth;
       let duration = '20s';
       
       if (screenWidth <= 480) {
           duration = '15s';
       } else if (screenWidth <= 768) {
           duration = '17s';
       } else if (screenWidth <= 1200) {
           duration = '18s';
       }
       
       track.style.animationDuration = duration;
   }

   adjustAnimationSpeed();
   window.addEventListener('resize', adjustAnimationSpeed);
   
   console.log('Showcase animasyonları kuruldu');
}







// Ürün katalogu sistemi - DÜZELTILMIŞ VERSİYON
function setupCatalog() {
   const catalogGrid = document.getElementById('catalogGrid');
   const paginationContainer = document.getElementById('paginationContainer');
   const searchInput = document.getElementById('searchInput');
   
   console.log('Katalog elementleri kontrol ediliyor:');
   console.log('- catalogGrid:', !!catalogGrid);
   console.log('- paginationContainer:', !!paginationContainer);
   console.log('- searchInput:', !!searchInput);
   
   if (!catalogGrid) {
       console.error('catalogGrid elementi bulunamadı!');
       return;
   }
   
   // Katalog ID'lerini kontrol et
   ensureCatalogIds();
   
   renderCatalog();
   initializeFilters();
   
   console.log('Katalog sistemi kuruldu');
}

// DÜZELTME: Katalog ID'lerinin doğru atandığından emin ol
function ensureCatalogIds() {
    if (typeof catalogItems !== 'undefined' && Array.isArray(catalogItems)) {
        catalogItems.forEach((item, index) => {
            if (!item.id) {
                item.id = index + 1;
            }
        });
        console.log('Katalog ID\'leri kontrol edildi:', catalogItems.map(item => ({title: item.title, id: item.id})));
    } else {
        console.warn('catalogItems dizisi bulunamadı veya tanımsız!');
    }
}

// DÜZELTILMIŞ renderCatalog fonksiyonu - Temiz product.html yönlendirmesi
function renderCatalog() {
   const catalogGrid = document.getElementById('catalogGrid');
   const paginationContainer = document.getElementById('paginationContainer');
   
   if (!catalogGrid) {
       console.error('catalogGrid element bulunamadı!');
       return;
   }

   const startIndex = (activePage - 1) * itemsPerPage;
   const endIndex = startIndex + itemsPerPage;
   const itemsToDisplay = filteredCatalog.slice(startIndex, endIndex);

   catalogGrid.innerHTML = '';

   if (itemsToDisplay.length === 0) {
       catalogGrid.innerHTML = '<div style="grid-column: 1 / -1; text-align: center; padding: 40px; color: #7f8c8d; font-size: 18px;">Ürün bulunamadı</div>';
       if (paginationContainer) {
           paginationContainer.innerHTML = '';
       }
       return;
   }

   itemsToDisplay.forEach((item, index) => {
       const itemCard = document.createElement('div');
       itemCard.className = 'catalog-card product-card';
       itemCard.innerHTML = `
           <div class="catalog-image">📦</div>
           <div class="catalog-title">${item.title}</div>
       `;
       
       // TEMİZLENMİŞ PRODUCT SAYFASI YÖNLENDİRMESİ
       itemCard.style.cursor = 'pointer';
       itemCard.style.transition = 'all 0.3s ease';
       
       // Hover efekti
       itemCard.addEventListener('mouseenter', () => {
           itemCard.style.transform = 'translateY(-4px)';
           itemCard.style.boxShadow = '0 12px 35px rgba(0,0,0,0.15)';
       });
       
       itemCard.addEventListener('mouseleave', () => {
           itemCard.style.transform = 'translateY(0)';
           itemCard.style.boxShadow = '0 4px 15px rgba(0,0,0,0.08)';
       });
       
       // Product sayfasına yönlendirme - DÜZELTILDI
       itemCard.addEventListener('click', () => {
           // ID'yi doğru şekilde al
           const productId = item.id || (startIndex + index + 1);
           console.log(`Ürün kartına tıklandı: ${item.title} (ID: ${productId})`);
           
           // Product sayfasına yönlendir
           window.location.href = `product.html?id=${productId}`;
       });
       
       catalogGrid.appendChild(itemCard);
   });

   renderPagination();
   console.log(`${itemsToDisplay.length} ürün render edildi - product.html yönlendirmeleri eklendi`);
}

function renderPagination() {
   const totalPages = Math.ceil(filteredCatalog.length / itemsPerPage);
   const paginationContainer = document.getElementById('paginationContainer');
   
   if (!paginationContainer) {
       console.error('paginationContainer element bulunamadı!');
       return;
   }

   paginationContainer.innerHTML = '';

   if (totalPages <= 1) return;

   for (let i = 1; i <= totalPages; i++) {
       const pageButton = document.createElement('button');
       pageButton.className = `pagination-btn ${i === activePage ? 'active' : ''}`;
       pageButton.textContent = i;
       pageButton.onclick = () => navigateToPage(i);
       paginationContainer.appendChild(pageButton);
   }
}

function navigateToPage(page) {
   activePage = page;
   renderCatalog();
   window.scrollTo({ top: 0, behavior: 'smooth' });
}

function initializeFilters() {
   const searchInput = document.getElementById('searchInput');
   if (searchInput) {
       searchInput.addEventListener('input', applyFilters);
   }
   
   const checkboxes = document.querySelectorAll('input[type="checkbox"]');
   checkboxes.forEach(checkbox => {
       checkbox.addEventListener('change', applyFilters);
   });
   
   console.log(`${checkboxes.length} filtre checkbox'ı bulundu`);
}

function applyFilters() {
   const searchInput = document.getElementById('searchInput');
   const searchQuery = searchInput ? searchInput.value.toLowerCase() : '';
   
   const selectedTypes = Array.from(document.querySelectorAll('#cat1:checked, #cat2:checked, #cat3:checked, #cat4:checked')).map(cb => cb.value);
   const selectedManufacturers = Array.from(document.querySelectorAll('#brand1:checked, #brand2:checked, #brand3:checked')).map(cb => cb.value);

   filteredCatalog = catalogItems.filter(item => {
       const matchesSearch = item.title.toLowerCase().includes(searchQuery);
       const matchesType = selectedTypes.length === 0 || selectedTypes.includes(item.type);
       const matchesManufacturer = selectedManufacturers.length === 0 || selectedManufacturers.includes(item.manufacturer);
       
       return matchesSearch && matchesType && matchesManufacturer;
   });

   activePage = 1;
   renderCatalog();
   
   console.log(`Filtre uygulandı: ${filteredCatalog.length} ürün bulundu`);
}

function resetFilters() {
   const searchInput = document.getElementById('searchInput');
   if (searchInput) {
       searchInput.value = '';
   }
   
   document.querySelectorAll('input[type="checkbox"]').forEach(cb => cb.checked = false);
   
   filteredCatalog = [...catalogItems];
   activePage = 1;
   renderCatalog();
   
   console.log('Filtreler sıfırlandı');
}

// İletişim formu
function setupContactForm() {
   const contactForm = document.getElementById('contactForm');
   const interactiveMap = document.getElementById('interactiveMap');
   
   if (contactForm) {
       contactForm.addEventListener('submit', handleContactSubmit);
   }
   
   if (interactiveMap) {
       interactiveMap.addEventListener('click', handleMapClick);
   }
   
   const inputs = document.querySelectorAll('.form-input, .form-textarea');
   
   inputs.forEach(input => {
       input.addEventListener('input', function() {
           if(this.value.length > 0) {
               this.classList.add('filled');
           } else {
               this.classList.remove('filled');
           }
       });

       input.addEventListener('focus', function() {
           if (this.parentElement) {
               this.parentElement.style.transform = 'translateY(-2px)';
           }
       });

       input.addEventListener('blur', function() {
           if (this.parentElement) {
               this.parentElement.style.transform = 'translateY(0)';
           }
       });
   });

   const observerOptions = {
       threshold: 0.1,
       rootMargin: '0px 0px -50px 0px'
   };

   const observer = new IntersectionObserver((entries) => {
       entries.forEach(entry => {
           if (entry.isIntersecting) {
               entry.target.style.animationPlayState = 'running';
           }
       });
   }, observerOptions);

   document.querySelectorAll('.form-group').forEach(el => {
       observer.observe(el);
   });
   
   console.log('İletişim formu kuruldu');
}

function handleContactSubmit(e) {
   e.preventDefault();
   
   const submitBtn = e.target.querySelector('.submit-btn');
   if (!submitBtn) return;
   
   const originalContent = submitBtn.innerHTML;
   
   submitBtn.innerHTML = '<span>Gönderiliyor...</span>';
   submitBtn.style.pointerEvents = 'none';
   submitBtn.style.opacity = '0.8';
   
   setTimeout(() => {
       submitBtn.innerHTML = '<span>✓ Gönderildi</span>';
       submitBtn.style.background = '#10b981';
       
       setTimeout(() => {
           e.target.reset();
           submitBtn.innerHTML = originalContent;
           submitBtn.style.background = '#1f2937';
           submitBtn.style.pointerEvents = 'auto';
           submitBtn.style.opacity = '1';
       }, 2000);
   }, 1500);
}

function handleMapClick() {
   const latitude = 38.41873631398992;
   const longitude = 27.114285595297824;
   
   const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
   
   if (isMobile) {
       const googleMapsUrl = `https://www.google.com/maps?q=${latitude},${longitude}&z=15&hl=tr`;
       window.open(googleMapsUrl, '_blank');
   } else {
       const googleMapsUrl = `https://www.google.com/maps/@${latitude},${longitude},15z?hl=tr`;
       window.open(googleMapsUrl, '_blank');
   }
   
   if (typeof gtag !== 'undefined') {
       gtag('event', 'map_click', {
           'event_category': 'engagement',
           'event_label': 'contact_map_interaction'
       });
   }
}

// DÜZELTILMIŞ: Ana sayfa için ürün kartları yönlendirmesi
document.addEventListener('DOMContentLoaded', function() {
    console.log('🏠 Sayfa yüklendi, ürün kartları hazırlanıyor...');
    
    // Önce katalog ID'lerini kontrol et
    ensureCatalogIds();
    
    // Katalog sayfasında mıyız kontrol et
    if (document.getElementById('catalogGrid')) {
        console.log('📦 Katalog sayfası tespit edildi');
        setupCatalog();
        return;
    }
    
    // Ana sayfada ürün kartlarını bul
    const productCards = document.querySelectorAll(
        '.card, .product-card, .catalog-item, .item, [data-product-id], .product'
    );
    
    console.log(`📦 ${productCards.length} adet ürün kartı bulundu`);
    
    if (productCards.length > 0) {
        productCards.forEach((card, index) => {
            // Her karta tıklama eventi ekle
            card.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Ürün ID'sini al
                let productId = this.getAttribute('data-product-id') || 
                               this.getAttribute('data-id') || 
                               this.getAttribute('id') ||
                               (index + 1);
                
                // ID'yi temizle (sadece sayı kalsın)
                productId = String(productId).replace(/\D/g, '') || (index + 1);
                
                console.log(`🔗 Ürün kartına tıklandı: Index ${index}, ID: ${productId}`);
                
                // Product sayfasına yönlendir
                const productUrl = `product.html?id=${productId}`;
                console.log(`🚀 Yönlendiriliyor: ${productUrl}`);
                
                window.location.href = productUrl;
            });
            
            // Görsel efektler ekle
            card.style.cursor = 'pointer';
            card.style.transition = 'all 0.3s ease';
            
            // Hover efektleri
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-5px) scale(1.02)';
                this.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
                this.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
            });
            
            console.log(`✅ Kart ${index + 1} hazırlandı`);
        });
    } else {
        console.warn('⚠️ Hiç ürün kartı bulunamadı! Manuel yöntem kullanılıyor...');
        setupManualNavigation();
    }
});

// Manuel yönlendirme kurulumu
function setupManualNavigation() {
    console.log('🔧 Manuel yönlendirme kuruluyor...');
    
    const allDivs = document.querySelectorAll('div');
    
    allDivs.forEach((div, index) => {
        const hasImage = div.querySelector('img');
        const hasText = div.textContent.trim().length > 10;
        const hasChildren = div.children.length > 0;
        
        if (hasImage && hasText && hasChildren) {
            console.log(`🎯 Potansiyel ürün kartı bulundu: ${index}`);
            
            div.addEventListener('click', function() {
                const productId = index + 1;
                console.log(`📦 Manuel yönlendirme: ID ${productId}`);
                window.location.href = `product.html?id=${productId}`;
            });
            
            div.style.cursor = 'pointer';
        }
    });
}

// Global yönlendirme fonksiyonu
function goToProduct(productId) {
    console.log(`🚀 goToProduct çağrıldı: ID ${productId}`);
    
    if (!productId || productId < 1 || productId > 15) {
        console.error('❌ Geçersiz ürün ID\'si:', productId);
        productId = 1;
    }
    
    const productUrl = `product.html?id=${productId}`;
    console.log(`📍 Yönlendiriliyor: ${productUrl}`);
    
    window.location.href = productUrl;
}

// DÜZELTILMIŞ: goBack fonksiyonu - doğru ana sayfa referansı
function goBack() {
    console.log('🔙 Geri dön butonu tıklandı');
    
    if (document.referrer && document.referrer.indexOf(window.location.hostname) !== -1) {
        console.log('📍 Referrer bulundu, geri gidiliyor...');
        window.history.back();
    } else {
        console.log('🏠 Ana sayfaya yönlendiriliyor...');
        // DÜZELTME: Doğru ana sayfa dosya adı
        window.location.href = 'index.html'; // Kendi ana sayfa dosyanızın adını buraya yazın
    }
}

// Ürün kartlarına ID atama fonksiyonu
function assignProductIds() {
    console.log('🔢 Ürün kartlarına ID atanıyor...');
    
    const cards = document.querySelectorAll('.card, .product-card, .catalog-item');
    
    cards.forEach((card, index) => {
        const productId = index + 1;
        card.setAttribute('data-product-id', productId);
        
        console.log(`🏷️ Kart ${index} → ID ${productId} atandı`);
        
        // Test için görsel badge (isteğe bağlı)
        if (!card.querySelector('.product-id-badge')) {
            const badge = document.createElement('div');
            badge.className = 'product-id-badge';
            badge.textContent = productId;
            badge.style.cssText = `
                position: absolute;
                top: 10px;
                right: 10px;
                background: #007AFF;
                color: white;
                padding: 5px 10px;
                border-radius: 15px;
                font-size: 12px;
                font-weight: bold;
                z-index: 10;
                pointer-events: none;
            `;
            
            card.style.position = 'relative';
            card.appendChild(badge);
        }
    });
}

// Test fonksiyonu
function testNavigation() {
    console.log('🧪 Navigasyon test ediliyor...');
    
    for (let i = 1; i <= 15; i++) {
        console.log(`Test ${i}: product.html?id=${i}`);
    }
    
    console.log('✅ Test tamamlandı. Konsolu kontrol edin.');
}

// Debug fonksiyonu
function debugHomepage() {
    console.log('🔍 DEBUG BILGILERI:');
    console.log('- Mevcut URL:', window.location.href);
    console.log('- Sayfa başlığı:', document.title);
    console.log('- Toplam div sayısı:', document.querySelectorAll('div').length);
    console.log('- Card class\'lı elementler:', document.querySelectorAll('.card').length);
    console.log('- data-product-id\'li elementler:', document.querySelectorAll('[data-product-id]').length);
    
    const potentialCards = document.querySelectorAll(
        '.card, .product-card, .catalog-item, .item, [data-product-id]'
    );
    
    console.log(`📦 Toplam muhtemel ürün kartı: ${potentialCards.length}`);
    potentialCards.forEach((card, index) => {
        console.log(`  ${index + 1}. Kart:`, card.className, card.id);
    });
}

// Global fonksiyonlar
window.goToProduct = goToProduct;
window.goBack = goBack;
window.resetFilters = resetFilters;
window.navigateToPage = navigateToPage;
window.assignProductIds = assignProductIds;
window.testNavigation = testNavigation;
window.debugHomepage = debugHomepage;
window.setupCatalog = setupCatalog;

// Sayfa yüklendikten sonra ID'leri ata
setTimeout(() => {
    if (typeof assignProductIds === 'function') {
        assignProductIds();
    }
    console.log('🎉 Sistem hazır! Test için: testNavigation() veya debugHomepage() yazın');
}, 1000);

console.log(`
🎯 KULLANIM TALİMATLARI:
1. Ana sayfa dosyanızın adını 'index.html' olarak değiştirin veya goBack() fonksiyonunda doğru adı yazın
2. Ürün kartlarınızın class'ını kontrol edin (.card, .product-card vs.)
3. Test için: testNavigation() yazın
4. Debug için: debugHomepage() yazın
5. Manuel yönlendirme: goToProduct(1) gibi

📋 HTML ÖRNEK KULLANIM:
<div class="card" data-product-id="1" onclick="goToProduct(1)">
    <!-- Ürün 1 -->
</div>
`);