
export function renderOccasions() {
  const occasionsContainer = document.createElement('div');
  occasionsContainer.className = 'occasions-page';

  // 1. Header
  const header = document.createElement('section');
  header.className = 'page-header text-center section-padding';
  header.innerHTML = `
    <div class="container">
      <h1 class="section-title">Celebrate with Us</h1>
      <p class="section-desc">Custom cakes for your special moments</p>
    </div>
  `;

  // 2. Occasions Gallery
  const gallery = document.createElement('section');
  gallery.className = 'occasions-gallery container section-padding';

  const occasions = [
    { title: 'Weddings', price: '₹3000', imgUrl: 'https://placehold.co/600x800/A7D7C5/ffffff?text=Wedding+Cakes' },
    { title: 'Birthdays', price: '₹1200', imgUrl: 'https://placehold.co/600x800/FFDAC1/ffffff?text=Birthday+Cakes' },
    { title: 'Anniversaries', price: '₹1500', imgUrl: 'https://placehold.co/600x800/A7D7C5/ffffff?text=Anniversary' },
    { title: 'Corporate Events', price: '₹2500', imgUrl: 'https://placehold.co/600x800/FFDAC1/ffffff?text=Corporate' }
  ];

  gallery.innerHTML = `
    <div class="text-center mb-lg">
      <p class="pricing-note">Custom cakes start from <strong>₹1200</strong> per kg</p>
    </div>
    <div class="occasions-grid">
      ${occasions.map(occ => `
        <div class="occasion-card">
          <div class="occasion-image-container">
            <img src="${occ.imgUrl}" alt="${occ.title}" class="occasion-image-img">
            <div class="occasion-overlay">
              <h3>${occ.title}</h3>
              <p>Starts from ${occ.price}</p>
            </div>
          </div>
        </div>
      `).join('')}
    </div>
  `;

  // 3. Inquiry Form
  const inquiry = document.createElement('section');
  inquiry.className = 'inquiry-section section-padding';
  inquiry.innerHTML = `
    <div class="container">
      <div class="form-container">
        <h2 class="text-center mb-md">Customize Your Cake</h2>
        <form class="inquiry-form" onsubmit="event.preventDefault(); alert('Inquiry Sent! We will contact you shortly.');">
          <div class="form-group">
            <label for="name">Name</label>
            <input type="text" id="name" required placeholder="Your Name">
          </div>
          <div class="form-group">
            <label for="date">Date Required</label>
            <input type="date" id="date" required>
          </div>
          <div class="form-group">
            <label for="type">Occasion Type</label>
            <select id="type">
              <option>Birthday</option>
              <option>Wedding</option>
              <option>Anniversary</option>
              <option>Other</option>
            </select>
          </div>
          <div class="form-group">
            <label for="details">Additional Details</label>
            <textarea id="details" rows="4" placeholder="Flavor preferences, theme, etc."></textarea>
          </div>
          <button type="submit" class="btn btn-primary full-width">Send Inquiry</button>
        </form>
      </div>
    </div>
  `;

  occasionsContainer.appendChild(header);
  occasionsContainer.appendChild(gallery);
  occasionsContainer.appendChild(inquiry);

  return occasionsContainer;
}
