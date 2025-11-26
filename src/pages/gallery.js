
export function renderGallery() {
  const galleryContainer = document.createElement('div');
  galleryContainer.className = 'gallery-page';

  // 1. Header
  const header = document.createElement('section');
  header.className = 'page-header text-center section-padding';
  header.innerHTML = `
    <div class="container">
      <h1 class="section-title">Sweet Moments</h1>
      <p class="section-desc">A visual feast of our finest creations</p>
    </div>
  `;

  // 2. Gallery Grid with Filters
  const galleryContent = document.createElement('section');
  galleryContent.className = 'gallery-content container section-padding';

  const images = [
    { id: 1, category: 'cakes', imgUrl: 'https://placehold.co/600x600/A7D7C5/ffffff?text=Cake+1' },
    { id: 2, category: 'cupcakes', imgUrl: 'https://placehold.co/600x600/FFDAC1/ffffff?text=Cupcake+1' },
    { id: 3, category: 'icecream', imgUrl: 'https://placehold.co/600x600/A7D7C5/ffffff?text=Ice+Cream+1' },
    { id: 4, category: 'cakes', imgUrl: 'https://placehold.co/600x600/FFDAC1/ffffff?text=Cake+2' },
    { id: 5, category: 'beverages', imgUrl: 'https://placehold.co/600x600/A7D7C5/ffffff?text=Beverage+1' },
    { id: 6, category: 'cupcakes', imgUrl: 'https://placehold.co/600x600/FFDAC1/ffffff?text=Cupcake+2' },
  ];

  galleryContent.innerHTML = `
    <div class="gallery-filters text-center mb-lg">
      <button class="filter-btn active" data-filter="all">All</button>
      <button class="filter-btn" data-filter="cakes">Cakes</button>
      <button class="filter-btn" data-filter="cupcakes">Cupcakes</button>
      <button class="filter-btn" data-filter="icecream">Ice Cream</button>
      <button class="filter-btn" data-filter="beverages">Beverages</button>
    </div>
    
    <div class="gallery-grid">
      ${images.map(img => `
        <div class="gallery-item" data-category="${img.category}">
          <img src="${img.imgUrl}" alt="Gallery Image" class="gallery-image-img">
        </div>
      `).join('')}
    </div>
    
    <!-- Lightbox (Hidden by default) -->
    <div class="lightbox" id="lightbox">
      <span class="close-lightbox">&times;</span>
      <div class="lightbox-content"></div>
    </div>
  `;

  // Filter Logic
  const filterBtns = galleryContent.querySelectorAll('.filter-btn');
  const items = galleryContent.querySelectorAll('.gallery-item');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remove active class
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      items.forEach(item => {
        if (filter === 'all' || item.getAttribute('data-category') === filter) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

  // Lightbox Logic (Basic)
  const lightbox = galleryContent.querySelector('#lightbox');
  const closeBtn = galleryContent.querySelector('.close-lightbox');

  items.forEach(item => {
    item.addEventListener('click', () => {
      lightbox.classList.add('active');
      // In a real app, we'd clone the image into lightbox-content
    });
  });

  closeBtn.addEventListener('click', () => {
    lightbox.classList.remove('active');
  });

  galleryContainer.appendChild(header);
  galleryContainer.appendChild(galleryContent);

  return galleryContainer;
}
