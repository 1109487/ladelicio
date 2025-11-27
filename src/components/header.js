
export function createHeader() {
  const header = document.createElement('header');
  header.className = 'site-header';

  header.innerHTML = `
    <div class="container header-content">
      <a href="/" class="logo">
        <img src="/logo.png" alt="La Delicio Logo" class="logo-img" style="height: 45px;">
      </a>
      
      <nav class="main-nav">
        <ul class="nav-list">
          <li><a href="/" class="nav-link">Home</a></li>
          <li><a href="/about" class="nav-link">About Us</a></li>
          <li><a href="/menu" class="nav-link">Menu</a></li>
          <li><a href="/occasions" class="nav-link">Occasions</a></li>
          <li><a href="/gallery" class="nav-link">Gallery</a></li>
          <li><a href="/contact" class="nav-link">Contact</a></li>
        </ul>
      </nav>
      
      <div class="header-actions">
        <a href="https://wa.me/1234567890" target="_blank" class="btn btn-primary">Order Now</a>
        <button class="mobile-menu-toggle" aria-label="Toggle Menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>
  `;

  // Mobile menu logic can be added here
  const toggle = header.querySelector('.mobile-menu-toggle');
  const nav = header.querySelector('.main-nav');

  toggle.addEventListener('click', () => {
    nav.classList.toggle('active');
    toggle.classList.toggle('active');
  });

  return header;
}
