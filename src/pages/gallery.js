import './gallery.css';

export function renderGallery() {
  const galleryContainer = document.createElement('div');
  galleryContainer.className = 'gallery-page';

  const images = [
    { id: 1, category: 'cakes', imgUrl: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=600&h=600&fit=crop&q=80', title: 'Chocolate Delight' },
    { id: 2, category: 'cupcakes', imgUrl: 'https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?w=600&h=600&fit=crop&q=80', title: 'Vanilla Dream' },
    { id: 3, category: 'icecream', imgUrl: 'https://images.unsplash.com/photo-1562440499-64c9a111f713?w=600&h=600&fit=crop&q=80', title: 'Strawberry Swirl' },
    { id: 4, category: 'cakes', imgUrl: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&h=600&fit=crop&q=80', title: 'Red Velvet' },
    { id: 5, category: 'beverages', imgUrl: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=600&h=600&fit=crop&q=80', title: 'Mint Shake' },
    { id: 6, category: 'cupcakes', imgUrl: 'https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=600&h=600&fit=crop&q=80', title: 'Caramel Cupcake' },
    { id: 7, category: 'icecream', imgUrl: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600&h=600&fit=crop&q=80', title: 'Chocolate Chip' },
    { id: 8, category: 'cakes', imgUrl: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=600&h=600&fit=crop&q=80', title: 'Cheesecake' },
    { id: 9, category: 'beverages', imgUrl: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=600&h=600&fit=crop&q=80', title: 'Berry Smoothie' },
    { id: 10, category: 'cakes', imgUrl: 'https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=600&h=600&fit=crop&q=80', title: 'Wedding Cake' },
    { id: 11, category: 'pastries', imgUrl: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=600&h=600&fit=crop&q=80', title: 'Chocolate Éclair' },
    { id: 12, category: 'pastries', imgUrl: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=600&h=600&fit=crop&q=80', title: 'Macaron Collection' },
    { id: 13, category: 'pastries', imgUrl: 'https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=600&h=600&fit=crop&q=80', title: 'Fruit Tart' },
    { id: 14, category: 'cakes', imgUrl: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&h=600&fit=crop&q=80', title: 'Birthday Special' },
    { id: 15, category: 'icecream', imgUrl: 'https://images.unsplash.com/photo-1562440499-64c9a111f713?w=600&h=600&fit=crop&q=80', title: 'Vanilla Bean' },
  ];

  galleryContainer.innerHTML = `
    <!-- Header Section -->
    <section class="gallery-header">
      <div class="container">
        <span class="header-icon">📸</span>
        <h1 class="section-title">Sweet Moments</h1>
        <p class="section-desc">A visual feast of our finest creations</p>
      </div>
    </section>

    <!-- Gallery Section -->
    <section class="gallery-section container">
      <!-- Filter Buttons -->
      <div class="gallery-filters">
        <button class="filter-btn active" data-filter="all">
          <span>All</span>
        </button>
        <button class="filter-btn" data-filter="cakes">
          <span>🍰</span>
          <span>Cakes</span>
        </button>
        <button class="filter-btn" data-filter="cupcakes">
          <span>🧁</span>
          <span>Cupcakes</span>
        </button>
        <button class="filter-btn" data-filter="icecream">
          <span>🍦</span>
          <span>Ice Cream</span>
        </button>
        <button class="filter-btn" data-filter="beverages">
          <span>🥤</span>
          <span>Beverages</span>
        </button>
      </div>
      
      <!-- Gallery Grid -->
      <div class="gallery-grid">
        ${images.map(img => `
          <div class="gallery-item" data-category="${img.category}">
            <div class="gallery-image-wrapper">
              <img src="${img.imgUrl}" alt="${img.title}" class="gallery-image">
              <div class="gallery-overlay">
                <div class="gallery-info">
                  <h3 class="gallery-title">${img.title}</h3>
                  <span class="gallery-category">${img.category}</span>
                </div>
                <button class="gallery-view-btn" aria-label="View ${img.title}">
                  <span>👁️</span>
                </button>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    </section>
    
    <!-- Lightbox -->
    <div class="lightbox" id="lightbox">
      <button class="lightbox-close" aria-label="Close lightbox">&times;</button>
      <button class="lightbox-prev" aria-label="Previous image">‹</button>
      <button class="lightbox-next" aria-label="Next image">›</button>
      <div class="lightbox-content">
        <img src="" alt="" class="lightbox-image">
        <div class="lightbox-info">
          <h3 class="lightbox-title"></h3>
          <span class="lightbox-category"></span>
        </div>
      </div>
    </div>
  `;

  // Filter Logic
  const filterBtns = galleryContainer.querySelectorAll('.filter-btn');
  const items = galleryContainer.querySelectorAll('.gallery-item');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      items.forEach((item, index) => {
        if (filter === 'all' || item.getAttribute('data-category') === filter) {
          item.style.display = 'block';
          setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'scale(1)';
          }, index * 50);
        } else {
          item.style.opacity = '0';
          item.style.transform = 'scale(0.8)';
          setTimeout(() => {
            item.style.display = 'none';
          }, 300);
        }
      });
    });
  });

  // Lightbox Logic
  const lightbox = galleryContainer.querySelector('#lightbox');
  const lightboxImage = lightbox.querySelector('.lightbox-image');
  const lightboxTitle = lightbox.querySelector('.lightbox-title');
  const lightboxCategory = lightbox.querySelector('.lightbox-category');
  const closeBtn = lightbox.querySelector('.lightbox-close');
  const prevBtn = lightbox.querySelector('.lightbox-prev');
  const nextBtn = lightbox.querySelector('.lightbox-next');
  
  let currentIndex = 0;
  let filteredImages = [...images];

  function openLightbox(index) {
    currentIndex = index;
    const img = filteredImages[index];
    lightboxImage.src = img.imgUrl;
    lightboxImage.alt = img.title;
    lightboxTitle.textContent = img.title;
    lightboxCategory.textContent = img.category;
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  }

  function showNext() {
    currentIndex = (currentIndex + 1) % filteredImages.length;
    openLightbox(currentIndex);
  }

  function showPrev() {
    currentIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    openLightbox(currentIndex);
  }

  items.forEach((item, index) => {
    const viewBtn = item.querySelector('.gallery-view-btn');
    viewBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const category = item.getAttribute('data-category');
      filteredImages = images.filter(img => 
        filterBtns[0].classList.contains('active') || img.category === category
      );
      const itemIndex = filteredImages.findIndex(img => 
        img.imgUrl === item.querySelector('img').src
      );
      openLightbox(itemIndex >= 0 ? itemIndex : 0);
    });
  });

  closeBtn.addEventListener('click', closeLightbox);
  nextBtn.addEventListener('click', showNext);
  prevBtn.addEventListener('click', showPrev);

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (lightbox.classList.contains('active')) {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') showNext();
      if (e.key === 'ArrowLeft') showPrev();
    }
  });

  return galleryContainer;
}
