
export function renderContact() {
    const contactContainer = document.createElement('div');
    contactContainer.className = 'contact-page';

    // 1. Header
    const header = document.createElement('section');
    header.className = 'page-header text-center section-padding';
    header.innerHTML = `
    <div class="container">
      <h1 class="section-title">Get in Touch</h1>
      <p class="section-desc">We'd love to hear from you</p>
    </div>
  `;

    // 2. Contact Content
    const content = document.createElement('section');
    content.className = 'contact-content container section-padding';
    content.innerHTML = `
    <div class="contact-grid">
      <div class="contact-info">
        <h2>Visit Us</h2>
        <div class="info-item">
          <span class="icon">📍</span>
          <p>123 Gourmet Street, Sweet City, SC 12345</p>
        </div>
        <div class="info-item">
          <span class="icon">📞</span>
          <p>+91 98765 43210</p>
        </div>
        <div class="info-item">
          <span class="icon">✉️</span>
          <p>hello@ladelicio.com</p>
        </div>
        <div class="info-item">
          <span class="icon">⏰</span>
          <p>Mon - Sun: 10:00 AM - 10:00 PM</p>
        </div>
        
        <div class="map-container mt-lg">
          <!-- Placeholder Map -->
          <div class="map-placeholder">Google Map Integration</div>
        </div>
      </div>
      
      <div class="contact-form-container">
        <h2>Send us a Message</h2>
        <form class="inquiry-form" onsubmit="event.preventDefault(); alert('Message Sent!');">
          <div class="form-group">
            <label for="c-name">Name</label>
            <input type="text" id="c-name" required>
          </div>
          <div class="form-group">
            <label for="c-email">Email</label>
            <input type="email" id="c-email" required>
          </div>
          <div class="form-group">
            <label for="c-message">Message</label>
            <textarea id="c-message" rows="5" required></textarea>
          </div>
          <button type="submit" class="btn btn-primary full-width">Send Message</button>
        </form>
      </div>
    </div>
  `;

    contactContainer.appendChild(header);
    contactContainer.appendChild(content);

    return contactContainer;
}
