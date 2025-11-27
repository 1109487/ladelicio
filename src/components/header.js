
export function createHeader() {
  const header = document.createElement('header');
  header.className = 'site-header';

  header.innerHTML = `
    <div class="container header-content">
      <a href="/" class="logo">
        <img src="/logo.png" alt="La Delicio Logo" class="logo-img" style="height: 45px;">
      </a>
      
      <div class="mobile-menu-overlay"></div>
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

  // Mobile menu logic
  const headerActions = header.querySelector('.header-actions');
  const toggle = header.querySelector('.mobile-menu-toggle');
  const nav = header.querySelector('.main-nav');
  const overlay = header.querySelector('.mobile-menu-overlay');
  const body = document.body;
  
  // Force hamburger button visibility on mobile
  if (headerActions && toggle) {
    const checkMobile = () => {
      if (window.innerWidth <= 768) {
        headerActions.style.display = 'flex';
        headerActions.style.alignItems = 'center';
        headerActions.style.gap = '0.5rem';
        headerActions.style.visibility = 'visible';
        headerActions.style.opacity = '1';
        
        toggle.style.display = 'flex';
        toggle.style.visibility = 'visible';
        toggle.style.opacity = '1';
        toggle.style.width = '40px';
        toggle.style.height = '40px';
        toggle.style.minWidth = '40px';
        toggle.style.minHeight = '40px';
        toggle.style.justifyContent = 'center';
        toggle.style.alignItems = 'center';
        toggle.style.flexDirection = 'column';
        toggle.style.gap = '4px';
        toggle.style.padding = '8px';
        toggle.style.zIndex = '1002';
        toggle.style.position = 'relative';
        toggle.style.cursor = 'pointer';
        
        // Ensure spans are visible
        const spans = toggle.querySelectorAll('span');
        spans.forEach(span => {
          span.style.display = 'block';
          span.style.width = '24px';
          span.style.height = '2px';
          span.style.backgroundColor = '#333';
          span.style.borderRadius = '2px';
        });
      } else {
        toggle.style.display = 'none';
      }
    };
    
    // Run immediately and on resize
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    // Also check after a short delay to ensure DOM is ready
    setTimeout(checkMobile, 100);
    setTimeout(checkMobile, 500);
  }

  if (toggle && nav) {
    const openMenu = () => {
      nav.classList.add('active');
      toggle.classList.add('active');
      if (overlay) overlay.classList.add('active');
      body.style.overflow = 'hidden';
    };

    const closeMenu = () => {
      nav.classList.remove('active');
      toggle.classList.remove('active');
      if (overlay) overlay.classList.remove('active');
      body.style.overflow = '';
    };

    toggle.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (nav.classList.contains('active')) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    // Close menu when clicking on nav link
    const navLinks = nav.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        closeMenu();
      });
    });

    // Close menu when clicking on overlay
    if (overlay) {
      overlay.addEventListener('click', () => {
        closeMenu();
      });
    }
  }

  return header;
}
