
export function renderMenu() {
  const menuContainer = document.createElement('div');
  menuContainer.className = 'menu-page';

  // 1. Header
  const header = document.createElement('section');
  header.className = 'page-header text-center section-padding';
  header.innerHTML = `
    <div class="container">
      <h1 class="section-title">Our Menu</h1>
      <p class="section-desc">Indulge in our signature creations</p>
    </div>
  `;

  // 2. Menu Categories
  const menuContent = document.createElement('section');
  menuContent.className = 'menu-content container section-padding';

  const categories = [
    {
      id: 'cakes',
      title: 'Gourmet Cakes',
      items: [
        { name: 'Truffle Bliss', price: '₹1200', desc: 'Rich chocolate truffle with gold dust', imgUrl: 'https://placehold.co/400x300/A7D7C5/ffffff?text=Truffle+Bliss' },
        { name: 'Red Velvet', price: '₹1400', desc: 'Classic red velvet with cream cheese frosting', imgUrl: 'https://placehold.co/400x300/FFDAC1/ffffff?text=Red+Velvet' },
        { name: 'Mango Delight', price: '₹1100', desc: 'Seasonal fresh mango cake', imgUrl: 'https://placehold.co/400x300/A7D7C5/ffffff?text=Mango+Delight' }
      ]
    },
    {
      id: 'pastries',
      title: 'Pastries & Éclairs',
      items: [
        { name: 'Chocolate Éclair', price: '₹150', desc: 'Filled with vanilla custard', imgUrl: 'https://placehold.co/400x300/FFDAC1/ffffff?text=Eclair' },
        { name: 'Fruit Tart', price: '₹180', desc: 'Fresh fruits on almond cream', imgUrl: 'https://placehold.co/400x300/A7D7C5/ffffff?text=Fruit+Tart' },
        { name: 'Macaron Box (6pc)', price: '₹450', desc: 'Assorted flavors', imgUrl: 'https://placehold.co/400x300/FFDAC1/ffffff?text=Macarons' }
      ]
    },
    {
      id: 'icecream',
      title: 'Ice Cream Delights',
      items: [
        { name: 'Belgian Chocolate', price: '₹120', desc: 'Single scoop', imgUrl: 'https://placehold.co/400x300/A7D7C5/ffffff?text=Belgian+Choc' },
        { name: 'Strawberry Swirl', price: '₹110', desc: 'Fresh strawberry chunks', imgUrl: 'https://placehold.co/400x300/FFDAC1/ffffff?text=Strawberry' }
      ]
    }
  ];

  let menuHTML = '<div class="menu-categories">';

  categories.forEach(cat => {
    menuHTML += `
      <div class="menu-category" id="${cat.id}">
        <h2 class="category-title text-center">${cat.title}</h2>
        <div class="menu-grid">
          ${cat.items.map(item => `
            <div class="menu-item">
              <img src="${item.imgUrl}" alt="${item.name}" class="item-image-img">
              <div class="item-details">
                <div class="item-header">
                  <h3>${item.name}</h3>
                  <span class="price">${item.price}</span>
                </div>
                <p class="item-desc">${item.desc}</p>
                <button class="btn-text" onclick="alert('Request to order: ${item.name}')">Request to Order</button>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  });

  menuHTML += '</div>';
  menuContent.innerHTML = menuHTML;

  menuContainer.appendChild(header);
  menuContainer.appendChild(menuContent);

  return menuContainer;
}
