
export function createHeader() {
  const header = document.createElement('header');
  header.className = 'site-header';

  header.innerHTML = `
    <div class="container header-content">
      <a href="/" class="logo">
        <img src="/logo.png" alt="La Delicio Logo" class="logo-img" style="height: 45px;">
      </a>
      
      <!-- Desktop Menu -->
      <nav class="main-nav desktop-nav">
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

  // Create mobile menu overlay and nav outside container (for full screen)
  const overlay = document.createElement('div');
  overlay.className = 'mobile-menu-overlay';
  
  const mobileNav = document.createElement('nav');
  mobileNav.className = 'main-nav mobile-nav';
  mobileNav.innerHTML = `
    <ul class="nav-list">
      <li><a href="/" class="nav-link">Home</a></li>
      <li><a href="/about" class="nav-link">About Us</a></li>
      <li><a href="/menu" class="nav-link">Menu</a></li>
      <li><a href="/occasions" class="nav-link">Occasions</a></li>
      <li><a href="/gallery" class="nav-link">Gallery</a></li>
      <li><a href="/contact" class="nav-link">Contact</a></li>
    </ul>
  `;
  
  // Create close button separately for better control
  const closeButton = document.createElement('button');
  closeButton.className = 'mobile-menu-close';
  closeButton.setAttribute('aria-label', 'Close Menu');
  closeButton.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18 6L6 18M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  mobileNav.appendChild(closeButton);
  
  // Append overlay and mobile nav to body, not header
  document.body.appendChild(overlay);
  document.body.appendChild(mobileNav);

  // Mobile menu logic
  const headerActions = header.querySelector('.header-actions');
  const toggle = header.querySelector('.mobile-menu-toggle');
  const desktopNav = header.querySelector('.desktop-nav');
  const body = document.body;

  // Force hamburger button visibility on mobile
  const mobileNavList = mobileNav ? mobileNav.querySelector('.nav-list') : null;
  const ensureMobileMenuVisible = () => {
    if (window.innerWidth <= 768) {
      // Mobile: Hide desktop nav, show hamburger
      if (desktopNav) {
        desktopNav.style.display = 'none';
      }
      if (headerActions) {
        headerActions.style.display = 'flex';
        headerActions.style.alignItems = 'center';
        headerActions.style.gap = '0.5rem';
        headerActions.style.visibility = 'visible';
        headerActions.style.opacity = '1';
      }
      if (toggle) {
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
        toggle.style.background = 'transparent';
        toggle.style.border = 'none';
        
        // Ensure spans are visible
        const spans = toggle.querySelectorAll('span');
        spans.forEach(span => {
          span.style.display = 'block';
          span.style.width = '24px';
          span.style.height = '2px';
          span.style.backgroundColor = '#333';
          span.style.borderRadius = '2px';
        });
      }
    } else {
      // Desktop: Show desktop nav, hide hamburger
      if (desktopNav) {
        desktopNav.style.display = 'block';
      }
      if (toggle) {
        toggle.style.display = 'none';
      }
      // Close mobile menu on desktop
      if (mobileNav) {
        mobileNav.classList.remove('active');
      }
      if (toggle) {
        toggle.classList.remove('active');
      }
      if (overlay) {
        overlay.classList.remove('active');
      }
      body.style.overflow = '';
    }
  };

  // Run on load and resize
  ensureMobileMenuVisible();
  window.addEventListener('resize', ensureMobileMenuVisible);
  setTimeout(ensureMobileMenuVisible, 100);
  setTimeout(ensureMobileMenuVisible, 500);

  if (toggle && mobileNav) {
    // Get close button reference
    const closeBtn = mobileNav.querySelector('.mobile-menu-close');
    const openMenu = () => {
      // Reset all styles first to ensure clean state
      mobileNav.style.display = 'flex';
      mobileNav.style.visibility = 'visible';
      mobileNav.style.opacity = '1';
      mobileNav.style.transform = 'translateX(0)';
      
      // Add active class
      mobileNav.classList.add('active');
      toggle.classList.add('active');
      overlay.classList.add('active');
      body.style.overflow = 'hidden';
      
      // Force menu to be visible and positioned correctly with inline styles
      mobileNav.style.position = 'fixed';
      mobileNav.style.top = '0';
      mobileNav.style.left = '0';
      mobileNav.style.right = '0';
      mobileNav.style.width = '100vw';
      mobileNav.style.height = '100vh';
      mobileNav.style.zIndex = '1001';
      mobileNav.style.background = 'linear-gradient(135deg, #E0F2F1 0%, #FFF0E5 100%)';
      mobileNav.style.flexDirection = 'column';
      mobileNav.style.transition = 'right 0.3s ease';
      mobileNav.style.padding = '0';
      mobileNav.style.margin = '0';
      
      // Ensure menu slides in
      setTimeout(() => {
        mobileNav.style.right = '0';
      }, 10);
      
      // Ensure nav-list displays vertically when opening menu with proper spacing and centered
      if (mobileNavList) {
        mobileNavList.style.display = 'flex';
        mobileNavList.style.flexDirection = 'column';
        mobileNavList.style.gap = '1.5rem';
        mobileNavList.style.padding = '3rem 2rem 2rem 2rem';
        mobileNavList.style.margin = '0 auto';
        mobileNavList.style.marginTop = '120px';
        mobileNavList.style.width = '100%';
        mobileNavList.style.maxWidth = '600px';
        mobileNavList.style.alignItems = 'center';
        mobileNavList.style.justifyContent = 'center';
        mobileNavList.style.boxSizing = 'border-box';
      }
      
      // Show close button with proper styling in top right
      if (closeBtn) {
        closeBtn.style.display = 'flex';
        closeBtn.style.visibility = 'visible';
        closeBtn.style.opacity = '1';
        closeBtn.style.position = 'fixed';
        closeBtn.style.top = '1.5rem';
        closeBtn.style.right = '1.5rem';
        closeBtn.style.zIndex = '1003';
        closeBtn.style.pointerEvents = 'auto';
        closeBtn.style.cursor = 'pointer';
      }
      
      // Force overlay to be visible
      overlay.style.display = 'block';
      overlay.style.opacity = '1';
      overlay.style.visibility = 'visible';
      overlay.style.pointerEvents = 'auto';
    };

    let documentCloseHandler = null;
    
    const closeMenu = () => {
      // Remove active classes
      mobileNav.classList.remove('active');
      toggle.classList.remove('active');
      overlay.classList.remove('active');
      
      // Reset body overflow
      body.style.overflow = '';
      
      // Force menu to slide out completely
      mobileNav.style.right = '-100vw';
      mobileNav.style.left = 'auto';
      mobileNav.style.transform = 'translateX(100%)';
      
      // Hide overlay completely
      overlay.style.opacity = '0';
      overlay.style.visibility = 'hidden';
      overlay.style.pointerEvents = 'none';
      overlay.style.display = 'none';
      
      // Hide close button immediately
      if (closeBtn) {
        closeBtn.style.display = 'none';
        closeBtn.style.visibility = 'hidden';
        closeBtn.style.opacity = '0';
      }
      
      // After transition completes, reset menu position but keep it in DOM
      setTimeout(() => {
        if (!mobileNav.classList.contains('active')) {
          // Don't set display: none, just keep it off-screen
          mobileNav.style.right = '-100vw';
          mobileNav.style.visibility = 'hidden';
          // Keep display: flex so it can be opened again
        }
      }, 350); // After transition duration
      
      // Remove document listener if it exists
      if (documentCloseHandler) {
        document.removeEventListener('click', documentCloseHandler, true);
        documentCloseHandler = null;
      }
    };
    
    // Event delegation on document for maximum reliability
    documentCloseHandler = (e) => {
      if (e.target.closest('.mobile-menu-close') || e.target.classList.contains('mobile-menu-close')) {
        e.preventDefault();
        e.stopPropagation();
        closeMenu();
        return false;
      }
    };
    
    document.addEventListener('click', documentCloseHandler, true);

    // Ensure menu starts hidden
    mobileNav.style.right = '-100vw';
    
    toggle.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (mobileNav.classList.contains('active')) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    // Close menu when clicking on nav link
    const navLinks = mobileNav.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        closeMenu();
      });
    });

    // Close menu when clicking on overlay
    overlay.addEventListener('click', () => {
      closeMenu();
    });

    // Close button handler - simple and direct
    if (closeBtn) {
      const handleClose = (e) => {
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();
        
        // Immediately hide button
        closeBtn.style.display = 'none';
        
        // Close menu
        closeMenu();
        
        return false;
      };
      
      // Direct onclick handler
      closeBtn.onclick = handleClose;
      
      // Click event with capture
      closeBtn.addEventListener('click', handleClose, { capture: true, once: false });
      
      // Mousedown for immediate response
      closeBtn.addEventListener('mousedown', handleClose, { capture: true });
      
      // Touch support
      closeBtn.addEventListener('touchend', handleClose, { capture: true });
    }
    
    // Event delegation on document for maximum reliability
    documentCloseHandler = (e) => {
      if (e.target.closest('.mobile-menu-close') || e.target.classList.contains('mobile-menu-close')) {
        e.preventDefault();
        e.stopPropagation();
        closeMenu();
        return false;
      }
    };
    
    document.addEventListener('click', documentCloseHandler, true);
  }

  return header;
}
