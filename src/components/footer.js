
export function createFooter() {
    const footer = document.createElement('footer');
    footer.className = 'site-footer';

    footer.innerHTML = `
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <h3>La Delicio</h3>
          <p>Slice • Scoop • Sip • Smile</p>
          <p class="footer-desc">Handcrafted gourmet desserts made with passion and the finest ingredients.</p>
        </div>
        
        <div class="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/menu">Menu</a></li>
            <li><a href="/occasions">Occasion Cakes</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>
        
        <div class="footer-contact">
          <h4>Contact Us</h4>
          <p>📍 123 Gourmet Street, Sweet City</p>
          <p>📞 +91 98765 43210</p>
          <p>✉️ hello@ladelicio.com</p>
          <div class="social-icons">
            <a href="#" aria-label="Instagram">Instagram</a>
            <a href="#" aria-label="Facebook">Facebook</a>
          </div>
        </div>
        
        <div class="footer-hours">
          <h4>Opening Hours</h4>
          <p>Mon - Sun: 10:00 AM - 10:00 PM</p>
        </div>
      </div>
      
      <div class="footer-bottom text-center">
        <p>&copy; ${new Date().getFullYear()} La Delicio. All rights reserved.</p>
      </div>
    </div>
  `;

    return footer;
}
