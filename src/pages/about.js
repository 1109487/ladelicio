
export function renderAbout() {
  const aboutContainer = document.createElement('div');
  aboutContainer.className = 'about-page';

  // 1. Header/Title
  const header = document.createElement('section');
  header.className = 'page-header text-center section-padding';
  header.innerHTML = `
    <div class="container">
      <h1 class="section-title">Our Story</h1>
      <p class="section-desc">Passion baked into every slice</p>
    </div>
  `;

  // 2. Brand Story & Chef
  const story = document.createElement('section');
  story.className = 'story-section container section-padding';
  story.innerHTML = `
    <div class="story-grid">
      <img src="https://placehold.co/600x600/A7D7C5/ffffff?text=Our+Story" alt="Our Story" class="story-image-img">
      <div class="story-content">
        <h2>A Passion for Gourmet</h2>
        <p>
          La Delicio started with a simple dream: to bring the authentic taste of European patisseries 
          to your doorstep. Founded by Chef [Name], our journey is one of flavor, artistry, and love.
        </p>
        <p>
          "Baking is not just a process; it's an emotion. We strive to make every celebration sweeter 
          with our handcrafted delights."
        </p>
        <div class="chef-signature">
          <span class="chef-icon">👨‍🍳</span>
          <span class="chef-name">Chef [Name]</span>
        </div>
      </div>
    </div>
  `;

  // 3. Mission & Values
  const mission = document.createElement('section');
  mission.className = 'mission-section section-padding';
  mission.innerHTML = `
    <div class="container text-center">
      <h2 class="section-title">Our Values</h2>
      <div class="values-grid">
        <div class="value-item">
          <div class="value-icon">❤️</div>
          <h3>Heartwarming</h3>
          <p>Baked with love and care.</p>
        </div>
        <div class="value-item">
          <div class="value-icon">🌿</div>
          <h3>Finest Ingredients</h3>
          <p>Only the best for you.</p>
        </div>
        <div class="value-item">
          <div class="value-icon">😊</div>
          <h3>Happiness</h3>
          <p>Smiles in every bite.</p>
        </div>
      </div>
    </div>
  `;

  aboutContainer.appendChild(header);
  aboutContainer.appendChild(story);
  aboutContainer.appendChild(mission);

  return aboutContainer;
}
