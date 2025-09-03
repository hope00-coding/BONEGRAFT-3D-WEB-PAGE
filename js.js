// Dil çevirileri
const translations = {
    en: {
        'logo': '',
        'nav-home': 'Home',
        'nav-pages': 'Pages', 
        'nav-services': 'Services',
        'nav-research': 'Research',
        'nav-blog': 'Blog',
        'nav-contact': 'Contact Us',
        'appointment-btn': 'DIGITAL CATALOGUE'
    },
    tr: {
        'logo': '',
        'nav-home': 'Ana Sayfa',
        'nav-pages': 'Sayfalar',
        'nav-services': 'Hizmetler',
        'nav-research': 'Araştırma',
        'nav-blog': 'Blog',
        'nav-contact': 'İletişim',
        'appointment-btn': 'DİJİTAL KATALOG'
    },
    es: {
        'logo': '',
        'nav-home': 'Inicio',
        'nav-pages': 'Páginas',
        'nav-services': 'Servicios',
        'nav-research': 'Investigación',
        'nav-blog': 'Blog',
        'nav-contact': 'Contacto',
        'appointment-btn': 'CATÁLOGO DIGITAL'
    },
    de: {
        'logo': '',
        'nav-home': 'Startseite',
        'nav-pages': 'Seiten',
        'nav-services': 'Dienstleistungen',
        'nav-research': 'Forschung',
        'nav-blog': 'Blog',
        'nav-contact': 'Kontakt',
        'appointment-btn': 'DIGITALER KATALOG'
    }
};

let currentLanguage = 'en';

// Tüm kodları tek bir DOMContentLoaded içinde topla
document.addEventListener('DOMContentLoaded', function() {
    // Dil fonksiyonları
    setupLanguage();
    
    // Mobil menü
    setupMobileMenu();
    
    // Video oynatma
    setupVideoPlayer();
    
    // 3D Modeller
    if (typeof THREE !== 'undefined') {
        setup3DModels();
    }
    
    // Animasyonlar
    setupAnimations();
});

// Dil ayarları
function setupLanguage() {
    const languageSelector = document.getElementById('languageSelector');
    const currentLangBtn = document.getElementById('currentLang');
    const languageOptions = document.querySelectorAll('.language-option');
    
    // Başlangıç dilini ayarla
    changeLanguage('en');
    
    currentLangBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        languageSelector.classList.toggle('active');
    });

    document.addEventListener('click', () => {
        languageSelector.classList.remove('active');
    });

    languageOptions.forEach(option => {
        option.addEventListener('click', () => {
            const selectedLang = option.getAttribute('data-lang');
            updateLanguageSelection(selectedLang);
            changeLanguage(selectedLang);
            languageSelector.classList.remove('active');
        });
    });
}

function updateLanguageSelection(lang) {
    document.querySelectorAll('.language-option').forEach(opt => opt.classList.remove('active'));
    document.querySelector(`.language-option[data-lang="${lang}"]`).classList.add('active');
    document.getElementById('currentLang').textContent = lang.toUpperCase();
}

function changeLanguage(lang) {
    currentLanguage = lang;
    document.documentElement.lang = lang;
    
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang]?.[key]) {
            element.textContent = translations[lang][key];
        }
    });
}

// Mobil menü ayarları
function setupMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    if (!hamburger || !navLinks) return;
    
    hamburger.addEventListener('click', toggleMenu);
    
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                toggleMenu();
            }
        });
    });
    
    function toggleMenu() {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    }
}

// Video oynatıcı
function setupVideoPlayer() {
    const videoPreview = document.querySelector('.clinic-video-preview');
    if (!videoPreview) return;
    
    videoPreview.addEventListener('click', playHospitalVideo);
}

function playHospitalVideo() {
    const video = document.getElementById('hospitalVideo');
    const videoPreview = document.querySelector('.clinic-video-preview');
    
    if (!video || !videoPreview) return;
    
    video.style.display = 'block';
    videoPreview.querySelector('.video-play-indicator').style.display = 'none';
    
    if (video.requestFullscreen) {
        video.requestFullscreen().catch(err => {
            console.error('Tam ekran hatası:', err);
        });
    }
    
    video.play().catch(err => {
        console.error('Video oynatma hatası:', err);
    });
    
    video.onended = function() {
        video.style.display = 'none';
        videoPreview.querySelector('.video-play-indicator').style.display = 'flex';
        video.currentTime = 0;
    };
}
















// Animation trigger
        document.addEventListener('DOMContentLoaded', function() {
            const section = document.querySelector('.healthcare-section');
            
            // Intersection Observer for scroll animations
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        section.classList.add('animated');
                    }
                });
            }, { threshold: 0.3 });
            
            observer.observe(section);
            
            // Trigger animation after a short delay for immediate visibility
            setTimeout(() => {
                section.classList.add('animated');
            }, 500);
        });






































         // Add smooth interactions
        const cards = document.querySelectorAll('.service-card');
        const dots = document.querySelectorAll('.dot');

        cards.forEach((card, index) => {
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-8px) scale(1.02)';
            });

            card.addEventListener('mouseleave', () => {
                card.style.transform = 'translateY(0) scale(1)';
            });
        });

        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                dots.forEach(d => d.classList.remove('active'));
                dot.classList.add('active');
                
                // Add carousel functionality here if needed
                console.log(`Switched to slide ${index + 1}`);
            });
        });

        // Add subtle animations on scroll
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        });

        cards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            card.style.transition = `all 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.1}s`;
            observer.observe(card);
        });


















         // Optional: Add pause/resume functionality on mouse enter/leave
        const container = document.querySelector('.showcase-container');
        const track = document.querySelector('.showcase-track');

        container.addEventListener('mouseenter', () => {
            track.style.animationPlayState = 'paused';
        });

        container.addEventListener('mouseleave', () => {
            track.style.animationPlayState = 'running';
        });

        // Responsive animation speed adjustment
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

        // Adjust on load and resize
        adjustAnimationSpeed();
        window.addEventListener('resize', adjustAnimationSpeed);



















//URUN SEPETI KISMIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII





       // Örnek ürün verisi
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

        // DOM yüklendiğinde çalıştır
        document.addEventListener('DOMContentLoaded', function() {
            renderCatalog();
            initializeFilters();
        });

        function renderCatalog() {
            const startIndex = (activePage - 1) * itemsPerPage;
            const endIndex = startIndex + itemsPerPage;
            const itemsToDisplay = filteredCatalog.slice(startIndex, endIndex);

            const catalogGrid = document.getElementById('catalogGrid');
            if (!catalogGrid) {
                console.error('catalogGrid element bulunamadı!');
                return;
            }

            catalogGrid.innerHTML = '';

            if (itemsToDisplay.length === 0) {
                catalogGrid.innerHTML = '<div style="grid-column: 1 / -1; text-align: center; padding: 40px; color: #7f8c8d; font-size: 18px;">Ürün bulunamadı</div>';
                document.getElementById('paginationContainer').innerHTML = '';
                return;
            }

            itemsToDisplay.forEach(item => {
                const itemCard = document.createElement('div');
                itemCard.className = 'catalog-card';
                itemCard.innerHTML = `
                    <div class="catalog-image">📦</div>
                    <div class="catalog-title">${item.title}</div>
                `;
                catalogGrid.appendChild(itemCard);
            });

            renderPagination();
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
            
            // Kategori filtreleri
            document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
                checkbox.addEventListener('change', applyFilters);
            });
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
        }






























          // Interactive map functionality
        document.getElementById('interactiveMap').addEventListener('click', function() {
            const latitude = 38.41873631398992;
            const longitude = 27.114285595297824;
            const locationName = "Konak, İzmir";
            
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
        });

        // Form submission
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const submitBtn = this.querySelector('.submit-btn');
            const originalContent = submitBtn.innerHTML;
            
            submitBtn.innerHTML = '<span>Sending...</span>';
            submitBtn.style.pointerEvents = 'none';
            submitBtn.style.opacity = '0.8';
            
            setTimeout(() => {
                submitBtn.innerHTML = '<span>✓ Sent</span>';
                submitBtn.style.background = '#10b981';
                
                setTimeout(() => {
                    this.reset();
                    submitBtn.innerHTML = originalContent;
                    submitBtn.style.background = '#1f2937';
                    submitBtn.style.pointerEvents = 'auto';
                    submitBtn.style.opacity = '1';
                }, 2000);
            }, 1500);
        });

        // Input interactions
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
                this.parentElement.style.transform = 'translateY(-2px)';
            });

            input.addEventListener('blur', function() {
                this.parentElement.style.transform = 'translateY(0)';
            });
        });

        // Intersection Observer for animations
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