import './contact.css';

export function renderContact() {
  const contactContainer = document.createElement('div');
  contactContainer.className = 'contact-page';

  // Header Section
  contactContainer.innerHTML = `
    <section class="contact-header">
      <div class="container">
        <span class="header-icon">🍰</span>
        <h1 class="section-title">Get in Touch</h1>
        <p class="section-desc">We'd love to hear from you and make your celebrations sweeter</p>
      </div>
    </section>

    <!-- Contact Grid -->
    <section class="contact-section container">
      <div class="contact-grid">
        
        <!-- Form -->
        <div class="contact-card">
          <h2 class="card-title">Send us a Message</h2>
          <form id="contact-form">
            
            <div class="form-group">
              <label for="c-name">Your Name *</label>
              <div class="input-box">
                <span class="icon">👤</span>
                <input type="text" id="c-name" name="name" required placeholder="John Doe">
              </div>
            </div>

            <div class="form-group">
              <label for="c-phone">Phone Number *</label>
              <div class="input-box">
                <span class="icon">📞</span>
                <input type="tel" id="c-phone" name="phone" required placeholder="+91 98765 43210">
              </div>
            </div>

            <div class="form-group">
              <label for="c-email">Email *</label>
              <div class="input-box">
                <span class="icon">✉️</span>
                <input type="email" id="c-email" name="email" required placeholder="john@example.com">
              </div>
            </div>

            <div class="form-group">
              <label for="c-message">Message *</label>
              <textarea id="c-message" name="message" rows="4" required placeholder="Tell us how we can help you..."></textarea>
            </div>

            <button type="submit" class="btn-submit">Send Message →</button>
          </form>
        </div>

        <!-- Store Info -->
        <div class="contact-card">
          <h2 class="card-title">Visit Our Store</h2>

          <div class="info-item">
            <span class="icon">📍</span>
            <div class="info-content">
              <p>123 Gourmet Street,<br> Sweet City, SC 12345</p>
              <a href="https://maps.google.com" target="_blank" class="info-link">Get Directions →</a>
            </div>
          </div>

          <div class="info-item">
            <span class="icon">📞</span>
            <div class="info-content">
              <p><a href="tel:+919876543210" class="info-value">+91 98765 43210</a></p>
              <a href="https://wa.me/919876543210" target="_blank" class="info-link">WhatsApp Chat →</a>
            </div>
          </div>

          <div class="info-item">
            <span class="icon">✉️</span>
            <div class="info-content">
              <p><a href="mailto:hello@ladelicio.com" class="info-value">hello@ladelicio.com</a></p>
              <span class="hint">We respond within 24 hours</span>
            </div>
          </div>

          <div class="info-item">
            <span class="icon">⏰</span>
            <div class="info-content">
              <p class="info-value">Mon - Sun: 10 AM - 10 PM</p>
              <span class="hint">Open all week</span>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- Map -->
    <section class="map-section container">
      <div class="map-container">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.066496831498!2d77.20902131508246!3d28.62779398241964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd37b741d057%3A0xcdee88e47393c3f1!2sConnaught%20Place%2C%20New%20Delhi%2C%20Delhi%20110001!5e0!3m2!1sen!2sin!4v1625567890123!5m2!1sen!2sin" 
          width="100%" 
          height="100%" 
          style="border:0;" 
          allowfullscreen="" 
          loading="lazy"
          title="La Delicio Bakery Location">
        </iframe>
      </div>
    </section>

    <!-- Floating Buttons -->
    <div class="floating-actions">
      <a href="tel:+919876543210" class="fab" aria-label="Call Now">📞</a>
      <a href="https://wa.me/919876543210" target="_blank" class="fab fab-green" aria-label="WhatsApp Chat">💬</a>
    </div>
  `;

  // Add form submission handler
  const form = contactContainer.querySelector('#contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const formData = new FormData(e.target);
      const data = Object.fromEntries(formData);
      
      // Show success message
      const button = form.querySelector('button[type="submit"]');
      const originalText = button.innerHTML;
      button.innerHTML = 'Message Sent! ✓';
      button.disabled = true;
      button.style.opacity = '0.7';
      
      setTimeout(() => {
        button.innerHTML = originalText;
        button.disabled = false;
        button.style.opacity = '1';
        form.reset();
      }, 3000);
    });
  }

  return contactContainer;
}
