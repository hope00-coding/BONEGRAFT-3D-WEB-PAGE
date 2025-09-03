 // Debug fonksiyonu
        function updateDebugInfo(message) {
            const debugInfo = document.getElementById('debugInfo');
            if (debugInfo) {
                const timestamp = new Date().toLocaleTimeString();
                debugInfo.innerHTML += `<br>[${timestamp}] ${message}`;
                debugInfo.scrollTop = debugInfo.scrollHeight;
            }
            console.log(`[DEBUG] ${message}`);
        }

        // Ürün verisi
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
            updateDebugInfo('DOM yüklendi - başlatılıyor...');
            
            setTimeout(() => {
                setupCatalog();
            }, 100);
        });

        // Katalog kurulum fonksiyonu
        function setupCatalog() {
            updateDebugInfo('Katalog sistemi başlatılıyor...');
            
            const catalogGrid = document.getElementById('catalogGrid');
            const paginationContainer = document.getElementById('paginationContainer');
            const searchInput = document.getElementById('searchInput');
            
            // Element kontrolü
            updateDebugInfo(`catalogGrid: ${!!catalogGrid ? '✅ Bulundu' : '❌ Bulunamadı'}`);
            updateDebugInfo(`paginationContainer: ${!!paginationContainer ? '✅ Bulundu' : '❌ Bulunamadı'}`);
            updateDebugInfo(`searchInput: ${!!searchInput ? '✅ Bulundu' : '❌ Bulunamadı'}`);
            
            if (!catalogGrid) {
                updateDebugInfo('❌ HATA: catalogGrid elementi bulunamadı!');
                return;
            }
            
            // İlk render
            renderCatalog();
            initializeFilters();
            
            updateDebugInfo('✅ Katalog sistemi başarıyla kuruldu');
        }

        // Katalog render fonksiyonu
        function renderCatalog() {
            const catalogGrid = document.getElementById('catalogGrid');
            const paginationContainer = document.getElementById('paginationContainer');
            
            if (!catalogGrid) {
                updateDebugInfo('❌ renderCatalog: catalogGrid element bulunamadı!');
                return;
            }

            const startIndex = (activePage - 1) * itemsPerPage;
            const endIndex = startIndex + itemsPerPage;
            const itemsToDisplay = filteredCatalog.slice(startIndex, endIndex);

            updateDebugInfo(`Render işlemi: ${itemsToDisplay.length} ürün gösteriliyor (Sayfa ${activePage})`);

            catalogGrid.innerHTML = '';

            if (itemsToDisplay.length === 0) {
                catalogGrid.innerHTML = `
                    <div style="grid-column: 1 / -1; text-align: center; padding: 40px; color: #7f8c8d; font-size: 18px;">
                        <div>😔 Ürün bulunamadı</div>
                        <div style="font-size: 14px; margin-top: 10px;">Filtreleri kontrol edin veya arama terimini değiştirin</div>
                    </div>
                `;
                if (paginationContainer) {
                    paginationContainer.innerHTML = '';
                }
                updateDebugInfo('ℹ️ Hiç ürün bulunamadı');
                return;
            }

            itemsToDisplay.forEach((item, index) => {
                const itemCard = document.createElement('div');
                itemCard.className = 'catalog-card';
                
                // İkon seçimi
                let icon = '📦';
                switch(item.type) {
                    case 'elektronik': icon = '📱'; break;
                    case 'giyim': icon = '👕'; break;
                    case 'ev': icon = '🏠'; break;
                    case 'spor': icon = '⚽'; break;
                }
                
                itemCard.innerHTML = `
                    <div class="catalog-image">${icon}</div>
                    <div class="catalog-title">${item.title}</div>
                    <div class="catalog-type">${item.type}</div>
                `;
                
                // Tıklama event'i
                itemCard.addEventListener('click', () => {
                    updateDebugInfo(`🔗 ${item.title} (ID: ${item.id}) tıklandı - Blog sayfasına yönlendiriliyor`);
                    
                    // Gerçek projede blog.html'e yönlendirme
                    // window.open(`blog.html?id=${item.id}`, '_blank');
                    
                    // Demo için alert
                    alert(`${item.title} detay sayfasına yönlendiriliyorsunuz!\n\nID: ${item.id}\nKategori: ${item.type}\nMarka: ${item.manufacturer}`);
                });
                
                // Animasyon için delay
                setTimeout(() => {
                    itemCard.style.opacity = '1';
                    itemCard.style.transform = 'translateY(0)';
                }, index * 100);
                
                itemCard.style.opacity = '0';
                itemCard.style.transform = 'translateY(20px)';
                itemCard.style.transition = 'all 0.6s ease';
                
                catalogGrid.appendChild(itemCard);
            });

            renderPagination();
            updateDebugInfo(`✅ ${itemsToDisplay.length} ürün başarıyla render edildi`);
        }

        // Sayfalama render fonksiyonu
        function renderPagination() {
            const totalPages = Math.ceil(filteredCatalog.length / itemsPerPage);
            const paginationContainer = document.getElementById('paginationContainer');
            
            if (!paginationContainer) {
                updateDebugInfo('❌ renderPagination: paginationContainer element bulunamadı!');
                return;
            }

            paginationContainer.innerHTML = '';

            if (totalPages <= 1) {
                updateDebugInfo('ℹ️ Tek sayfa olduğu için sayfalama gösterilmiyor');
                return;
            }

            updateDebugInfo(`📄 ${totalPages} sayfa için sayfalama oluşturuluyor`);

            for (let i = 1; i <= totalPages; i++) {
                const pageButton = document.createElement('button');
                pageButton.className = `pagination-btn ${i === activePage ? 'active' : ''}`;
                pageButton.textContent = i;
                pageButton.onclick = () => navigateToPage(i);
                paginationContainer.appendChild(pageButton);
            }
        }

        // Sayfa navigasyonu
        function navigateToPage(page) {
            updateDebugInfo(`📄 Sayfa ${page}'ye geçiliyor`);
            activePage = page;
            renderCatalog();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        // Filtreleri başlat
        function initializeFilters() {
            const searchInput = document.getElementById('searchInput');
            if (searchInput) {
                searchInput.addEventListener('input', applyFilters);
                updateDebugInfo('🔍 Arama kutusu event listener eklendi');
            }
            
            const checkboxes = document.querySelectorAll('input[type="checkbox"]');
            checkboxes.forEach(checkbox => {
                checkbox.addEventListener('change', applyFilters);
            });
            
            updateDebugInfo(`☑️ ${checkboxes.length} filtre checkbox'ı bulundu ve event listener eklendi`);
        }

        // Filtreleri uygula
        function applyFilters() {
            updateDebugInfo('🔧 Filtreler uygulanıyor...');
            
            const searchInput = document.getElementById('searchInput');
            const searchQuery = searchInput ? searchInput.value.toLowerCase() : '';
            
            const selectedTypes = Array.from(document.querySelectorAll('#cat1:checked, #cat2:checked, #cat3:checked, #cat4:checked')).map(cb => cb.value);
            const selectedManufacturers = Array.from(document.querySelectorAll('#brand1:checked, #brand2:checked, #brand3:checked')).map(cb => cb.value);

            updateDebugInfo(`Arama: "${searchQuery}"`);
            updateDebugInfo(`Seçili kategoriler: [${selectedTypes.join(', ')}]`);
            updateDebugInfo(`Seçili markalar: [${selectedManufacturers.join(', ')}]`);

            filteredCatalog = catalogItems.filter(item => {
                const matchesSearch = item.title.toLowerCase().includes(searchQuery);
                const matchesType = selectedTypes.length === 0 || selectedTypes.includes(item.type);
                const matchesManufacturer = selectedManufacturers.length === 0 || selectedManufacturers.includes(item.manufacturer);
                
                return matchesSearch && matchesType && matchesManufacturer;
            });

            activePage = 1;
            renderCatalog();
            
            updateDebugInfo(`✅ Filtre uygulandı: ${filteredCatalog.length}/${catalogItems.length} ürün bulundu`);
        }

        // Filtreleri sıfırla
        function resetFilters() {
            updateDebugInfo('🔄 Filtreler sıfırlanıyor...');
            
            const searchInput = document.getElementById('searchInput');
            if (searchInput) {
                searchInput.value = '';
            }
            
            document.querySelectorAll('input[type="checkbox"]').forEach(cb => cb.checked = false);
            
            filteredCatalog = [...catalogItems];
            activePage = 1;
            renderCatalog();
            
            updateDebugInfo('✅ Filtreler sıfırlandı - tüm ürünler gösteriliyor');
        }

        // Global fonksiyonlar
        window.resetFilters = resetFilters;
        window.navigateToPage = navigateToPage;

        // Sayfa yüklendiğinde debug panelini kapat butonu ekle
        window.addEventListener('load', () => {
            const debugPanel = document.getElementById('debugPanel');
            if (debugPanel) {
                const closeBtn = document.createElement('button');
                closeBtn.innerHTML = '✕';
                closeBtn.style.cssText = 'position:absolute;top:5px;right:5px;background:none;border:none;color:white;cursor:pointer;font-size:16px;';
                closeBtn.onclick = () => debugPanel.style.display = 'none';
                debugPanel.appendChild(closeBtn);
            }
        });
    