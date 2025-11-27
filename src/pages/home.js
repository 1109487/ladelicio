
export function renderHome() {
  const homeContainer = document.createElement('div');
  homeContainer.className = 'home-page';

  // 1. Hero Section
  const hero = document.createElement('section');
  hero.className = 'hero-section';
  hero.innerHTML = `
    <!-- Hero Image Row -->
    <div class="hero-image-row">
      <img src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=1920&h=1080&fit=crop&q=80" alt="Beautiful Bakery Display" class="hero-image-full">
    </div>
  `;

  // 2. Intro Section
  const intro = document.createElement('section');
  intro.className = 'intro-section section-padding container text-center';
  intro.innerHTML = `
    <div class="intro-content">
      <h2 class="section-title">Welcome to La Delicio</h2>
      <p class="section-desc">
        At La Delicio, we believe in the magic of sweetness. Our passion for gourmet desserts 
        blends elegance with artistry to bring you a heartwarming experience. 
        From delicate macarons to rich, creamy cakes, every bite is a celebration.
      </p>
      <div class="signature-icon">👨‍🍳</div>
    </div>
  `;

  // 3. Signature Items Showcase
  const showcase = document.createElement('section');
  showcase.className = 'showcase-section section-padding';
  showcase.innerHTML = `
    <div class="container">
      <h2 class="section-title text-center mb-lg">Signature Delights</h2>
      <div class="showcase-grid">
        <!-- Item 1 -->
        <div class="showcase-card">
          <img src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&h=400&fit=crop&q=80" alt="Gourmet Cakes" class="card-image-img">
          <div class="card-content">
            <h3>Gourmet Cakes</h3>
            <p>Handcrafted with the finest ingredients.</p>
          </div>
        </div>
        <!-- Item 2 -->
        <div class="showcase-card">
          <img src="https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600&h=400&fit=crop&q=80" alt="Scoop Ice Cream" class="card-image-img">
          <div class="card-content">
            <h3>Scoop Ice Cream</h3>
            <p>Rich, creamy, and full of flavor.</p>
          </div>
        </div>
        <!-- Item 3 -->
        <div class="showcase-card">
          <img src="https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=600&h=400&fit=crop&q=80" alt="Signature Shakes" class="card-image-img">
          <div class="card-content">
            <h3>Signature Shakes</h3>
            <p>Sip into a world of happiness.</p>
          </div>
        </div>
      </div>
      <div class="text-center mt-lg" style="margin-top: var(--spacing-lg);">
        <a href="https://wa.me/1234567890" class="btn btn-primary">Order on WhatsApp</a>
      </div>
    </div>
  `;

  homeContainer.appendChild(hero);
  homeContainer.appendChild(intro);
  homeContainer.appendChild(showcase);

  return homeContainer;
}

