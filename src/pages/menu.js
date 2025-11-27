
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
        { name: 'Truffle Bliss', price: '₹1200', desc: 'Rich chocolate truffle with gold dust', imgUrl: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&h=300&fit=crop&q=80' },
        { name: 'Red Velvet', price: '₹1400', desc: 'Classic red velvet with cream cheese frosting', imgUrl: 'https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?w=400&h=300&fit=crop&q=80' },
        { name: 'Mango Delight', price: '₹1100', desc: 'Seasonal fresh mango cake', imgUrl: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400&h=300&fit=crop&q=80' }
      ]
    },
    {
      id: 'pastries',
      title: 'Pastries & Éclairs',
      items: [
        { name: 'Chocolate Éclair', price: '₹150', desc: 'Filled with vanilla custard', imgUrl: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400&h=300&fit=crop&q=80' },
        { name: 'Fruit Tart', price: '₹180', desc: 'Fresh fruits on almond cream', imgUrl: 'https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=400&h=300&fit=crop&q=80' },
        { name: 'Macaron Box (6pc)', price: '₹450', desc: 'Assorted flavors', imgUrl: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=400&h=300&fit=crop&q=80' }
      ]
    },
    {
      id: 'icecream',
      title: 'Ice Cream Delights',
      items: [
        { name: 'Belgian Chocolate', price: '₹120', desc: 'Single scoop', imgUrl: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&h=300&fit=crop&q=80' },
        { name: 'Strawberry Swirl', price: '₹110', desc: 'Fresh strawberry chunks', imgUrl: 'https://images.unsplash.com/photo-1562440499-64c9a111f713?w=400&h=300&fit=crop&q=80' }
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
