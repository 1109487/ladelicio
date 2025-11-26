
import './style.css';
import { createHeader } from './src/components/header.js';
import { createFooter } from './src/components/footer.js';

const app = document.querySelector('#app');

// Router Logic
const routes = {
    '/': () => import('./src/pages/home.js').then(m => m.renderHome()),
    '/about': () => import('./src/pages/about.js').then(m => m.renderAbout()),
    '/menu': () => import('./src/pages/menu.js').then(m => m.renderMenu()),
    '/occasions': () => import('./src/pages/occasions.js').then(m => m.renderOccasions()),
    '/gallery': () => import('./src/pages/gallery.js').then(m => m.renderGallery()),
    '/contact': () => import('./src/pages/contact.js').then(m => m.renderContact()),
};

async function renderApp() {
    app.innerHTML = ''; // Clear app

    // Append Header
    app.appendChild(createHeader());

    // Main Content Area
    const main = document.createElement('main');
    main.className = 'site-main';
    app.appendChild(main);

    // Route Handling
    const path = window.location.pathname;
    const renderer = routes[path] || routes['/']; // Default to home

    try {
        const pageContent = await renderer();
        if (pageContent instanceof Node) {
            main.appendChild(pageContent);
        } else if (typeof pageContent === 'string') {
            main.innerHTML = pageContent;
        }
    } catch (error) {
        console.error('Page load error:', error);
        main.innerHTML = '<div class="container section-padding text-center"><h2>Page Not Found</h2><p>Coming Soon!</p></div>';
    }

    // Append Footer
    app.appendChild(createFooter());
}

// Handle Navigation Links (SPA behavior)
document.addEventListener('click', (e) => {
    if (e.target.matches('a') && e.target.href.startsWith(window.location.origin)) {
        e.preventDefault();
        const href = e.target.getAttribute('href');
        window.history.pushState({}, '', href);
        renderApp();
    }
});

window.addEventListener('popstate', renderApp);

// Initial Render
renderApp();
