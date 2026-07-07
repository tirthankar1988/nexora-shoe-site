/**
 * NEXORA — Shared Application Logic
 * Cart state, product data, utilities
 */

/* ═══════════════════════════════════════
   PRODUCT DATA
═══════════════════════════════════════ */
const NEXORA_PRODUCTS = [
  {
    id: 'air-core-pro',
    name: 'Air Core Pro',
    category: 'Running',
    price: 189,
    oldPrice: 229,
    image: 'assets/air_core_pro_realistic.png',
    images: ['assets/air_core_pro_realistic.png'],
    badge: 'Bestseller',
    badgeType: 'badge-yellow',
    colors: [{name:'Black', hex:'#111625'},{name:'Purple', hex:'#512B71'},{name:'White', hex:'#E5E7EB'}],
    sizes: [6,7,8,9,10,11,12],
    soldOut: [6],
    rating: 4.9,
    reviewCount: 2847,
    description: 'Engineered for peak performance, the Air Core Pro features our proprietary CloudCush midsole for maximum energy return. The breathable mesh upper keeps you cool mile after mile, while the dynamic heel counter provides the support you need.',
    specs: [
      ['Upper', 'Engineered mesh + TPU overlays'],
      ['Midsole', 'CloudCush foam — 35% energy return'],
      ['Outsole', 'Continental rubber (full-contact)'],
      ['Weight', '255g (US 9)'],
      ['Drop', '8mm'],
      ['Best For', 'Road running, tempo, race day'],
    ],
    tags: ['lightweight', 'performance', 'cushioned'],
  },
  {
    id: 'urban-drift',
    name: 'Urban Drift',
    category: 'Street',
    price: 220,
    oldPrice: null,
    image: 'assets/urban_drift_realistic.png',
    images: ['assets/urban_drift_realistic.png'],
    badge: 'New',
    badgeType: 'badge-red',
    colors: [{name:'Orange', hex:'#F97316'},{name:'Black', hex:'#111625'},{name:'White', hex:'#E5E7EB'}],
    sizes: [7,8,9,10,11,12],
    soldOut: [],
    rating: 4.7,
    reviewCount: 1203,
    description: 'Street-ready and style-forward, the Urban Drift blends heritage silhouette with modern construction. Flexible cup sole, padded collar, and premium leather accent panels make these your go-to for any urban environment.',
    specs: [
      ['Upper', 'Premium leather + suede overlays'],
      ['Midsole', 'Comfort EVA'],
      ['Outsole', 'Non-marking rubber'],
      ['Weight', '320g (US 9)'],
      ['Best For', 'Casual, street, lifestyle'],
    ],
    tags: ['street', 'lifestyle', 'premium'],
  },
  {
    id: 'cloud-lite',
    name: 'Cloud Lite',
    category: 'Lifestyle',
    price: 155,
    oldPrice: 185,
    image: 'assets/cloud_lite_realistic.png',
    images: ['assets/cloud_lite_realistic.png'],
    badge: 'Limited',
    badgeType: 'badge-blue',
    colors: [{name:'White', hex:'#E5E7EB'},{name:'Beige', hex:'#D4B896'},{name:'Sky', hex:'#7DD3FC'}],
    sizes: [6,7,8,9,10,11],
    soldOut: [11],
    rating: 4.8,
    reviewCount: 3421,
    description: 'Impossibly light and all-day comfortable. The Cloud Lite\'s signature knit upper conforms to your foot from the first wear. The ultralight foam midsole cushions every step without sacrificing ground feel.',
    specs: [
      ['Upper', '3D knit — no-sew construction'],
      ['Midsole', 'UltraFoam lite'],
      ['Outsole', 'Flex-groove rubber'],
      ['Weight', '198g (US 9)'],
      ['Drop', '6mm'],
      ['Best For', 'All-day wear, travel, lifestyle'],
    ],
    tags: ['lightweight', 'lifestyle', 'comfort'],
  },
  {
    id: 'retro-kick',
    name: 'Retro Kick',
    category: 'Street',
    price: 175,
    oldPrice: null,
    image: 'assets/retro_kick_realistic.png',
    images: ['assets/retro_kick_realistic.png'],
    badge: 'Classic',
    badgeType: 'badge-black',
    colors: [{name:'Red', hex:'#EF4444'},{name:'Navy', hex:'#1E3A5F'},{name:'White', hex:'#E5E7EB'}],
    sizes: [7,8,9,10,11,12],
    soldOut: [],
    rating: 4.6,
    reviewCount: 892,
    description: 'A love letter to the golden era of sneaker design. The Retro Kick features a cupsole construction, vintage branding details, and materials that improve with age. Timeless, for those who know.',
    specs: [
      ['Upper', 'Full-grain leather + canvas'],
      ['Midsole', 'Vulcanized EVA'],
      ['Outsole', 'Gum rubber'],
      ['Weight', '340g (US 9)'],
      ['Best For', 'Heritage, streetwear, everyday'],
    ],
    tags: ['classic', 'street', 'heritage'],
  },
  {
    id: 'velora-run-x1',
    name: 'Velora Run X1',
    category: 'Running',
    price: 210,
    oldPrice: 249,
    image: 'assets/velora_run_x1_realistic.png',
    images: ['assets/velora_run_x1_realistic.png'],
    badge: 'Sale',
    badgeType: 'badge-red',
    colors: [{name:'Purple', hex:'#512B71'},{name:'Black', hex:'#111625'},{name:'Coral', hex:'#F87171'}],
    sizes: [6,7,8,9,10,11,12],
    soldOut: [12],
    rating: 4.9,
    reviewCount: 1567,
    description: 'The pinnacle of NEXORA running technology. Carbon-fiber plate, responsive foam stack, and a race-tuned upper. The Velora Run X1 is built for when every second counts.',
    specs: [
      ['Upper', 'Aeroweave mesh'],
      ['Midsole', 'CloudCush+ with carbon plate'],
      ['Outsole', 'Continental rubber pods'],
      ['Weight', '228g (US 9)'],
      ['Drop', '4mm'],
      ['Best For', 'Racing, tempo, long runs'],
    ],
    tags: ['performance', 'carbon', 'racing'],
  },
  {
    id: 'velora-trail-edge',
    name: 'Velora Trail Edge',
    category: 'Running',
    price: 195,
    oldPrice: null,
    image: 'assets/velora_trail_edge_realistic.png',
    images: ['assets/velora_trail_edge_realistic.png'],
    badge: null,
    badgeType: null,
    colors: [{name:'Forest', hex:'#065F46'},{name:'Earth', hex:'#78350F'},{name:'Black', hex:'#111625'}],
    sizes: [7,8,9,10,11,12],
    soldOut: [],
    rating: 4.7,
    reviewCount: 643,
    description: 'Conquer every terrain. The Trail Edge features a rock-plate midsole, aggressive lugs for maximum grip, and a waterproof upper treatment. From muddy singletracks to rocky ridgelines.',
    specs: [
      ['Upper', 'Abrasion-resistant mesh + TPU cage'],
      ['Midsole', 'RockShield plate + foam'],
      ['Outsole', 'Multi-directional lugs'],
      ['Weight', '310g (US 9)'],
      ['Drop', '6mm'],
      ['Best For', 'Trail running, hiking'],
    ],
    tags: ['trail', 'outdoor', 'performance'],
  },
  {
    id: 'velora-court-pro',
    name: 'Velora Court Pro',
    category: 'Lifestyle',
    price: 165,
    oldPrice: null,
    image: 'assets/velora_court_pro_realistic.png',
    images: ['assets/velora_court_pro_realistic.png'],
    badge: null,
    badgeType: null,
    colors: [{name:'White', hex:'#E5E7EB'},{name:'Black', hex:'#111625'},{name:'Navy', hex:'#1E3A5F'}],
    sizes: [6,7,8,9,10,11,12],
    soldOut: [],
    rating: 4.5,
    reviewCount: 421,
    description: 'From the court to the street with effortless grace. The Court Pro draws inspiration from classic athletic silhouettes and updates them with modern materials and comfort technology.',
    specs: [
      ['Upper', 'Premium canvas + leather trim'],
      ['Midsole', 'Ortholite sockliner'],
      ['Outsole', 'Flat-grip rubber'],
      ['Weight', '295g (US 9)'],
      ['Best For', 'Casual, court, lifestyle'],
    ],
    tags: ['lifestyle', 'classic', 'versatile'],
  },
  {
    id: 'velora-knit-air',
    name: 'Velora Knit Air',
    category: 'Lifestyle',
    price: 145,
    oldPrice: 170,
    image: 'assets/velora_knit_air_realistic.png',
    images: ['assets/velora_knit_air_realistic.png'],
    badge: 'Sale',
    badgeType: 'badge-red',
    colors: [{name:'Sand', hex:'#D4B896'},{name:'Mint', hex:'#A7F3D0'},{name:'Blush', hex:'#FCA5A5'}],
    sizes: [6,7,8,9,10,11],
    soldOut: [6],
    rating: 4.6,
    reviewCount: 786,
    description: 'Lightweight freedom in a minimalist package. The Knit Air\'s seamless upper delivers a sock-like fit with zero break-in time. The responsive foam cradles every step.',
    specs: [
      ['Upper', 'Seamless engineered knit'],
      ['Midsole', 'LiteFoam responsive'],
      ['Outsole', 'Flex-point rubber'],
      ['Weight', '185g (US 9)'],
      ['Best For', 'Lifestyle, travel, everyday'],
    ],
    tags: ['knit', 'lightweight', 'lifestyle'],
  },
];

/* ═══════════════════════════════════════
   CART STATE (localStorage)
═══════════════════════════════════════ */
const CART_KEY = 'nexora_cart_v2';
const ORDER_KEY = 'nexora_order_v1';
const WISHLIST_KEY = 'nexora_wishlist_v1';
const PROMO_CODES = { 'NEXORA10': 10, 'WELCOME20': 20, 'SAVE15': 15 };

function getCart() {
  try { return JSON.parse(localStorage.getItem(CART_KEY)) || []; }
  catch { return []; }
}

function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  updateCartBadge();
}

function addToCart(item) {
  const cart = getCart();
  // item: { id, name, price, image, size, color, colorName, category }
  const key = `${item.id}__${item.size}__${item.color}`;
  const existing = cart.find(c => c.key === key);
  if (existing) {
    existing.qty = Math.min(existing.qty + 1, 10);
  } else {
    cart.push({ ...item, key, qty: 1 });
  }
  saveCart(cart);
  showToast(`${item.name} added to cart!`, 'success');
  popCartBadge();
  return cart;
}

function removeFromCart(key) {
  const cart = getCart().filter(c => c.key !== key);
  saveCart(cart);
  return cart;
}

function updateQty(key, qty) {
  const cart = getCart();
  const item = cart.find(c => c.key === key);
  if (!item) return cart;
  if (qty <= 0) return removeFromCart(key);
  item.qty = Math.min(qty, 10);
  saveCart(cart);
  return getCart();
}

function clearCart() {
  localStorage.removeItem(CART_KEY);
  updateCartBadge();
}

function getCartCount() {
  return getCart().reduce((sum, c) => sum + c.qty, 0);
}

function getCartSubtotal() {
  return getCart().reduce((sum, c) => sum + c.price * c.qty, 0);
}

function applyPromo(code) {
  const pct = PROMO_CODES[code.toUpperCase()];
  if (!pct) return null;
  return pct;
}

/* ═══════════════════════════════════════
   ORDER STATE
═══════════════════════════════════════ */
function saveOrder(order) {
  localStorage.setItem(ORDER_KEY, JSON.stringify(order));
}

function getOrder() {
  try { return JSON.parse(localStorage.getItem(ORDER_KEY)); }
  catch { return null; }
}

function generateOrderNumber() {
  return 'NXR-' + Date.now().toString(36).toUpperCase().slice(-6) + Math.random().toString(36).toUpperCase().slice(2,5);
}

/* ═══════════════════════════════════════
   WISHLIST
═══════════════════════════════════════ */
function getWishlist() {
  try { return JSON.parse(localStorage.getItem(WISHLIST_KEY)) || []; }
  catch { return []; }
}

function toggleWishlist(id) {
  let wl = getWishlist();
  if (wl.includes(id)) { wl = wl.filter(x => x !== id); }
  else { wl.push(id); }
  localStorage.setItem(WISHLIST_KEY, JSON.stringify(wl));
  return wl.includes(id);
}

function isWishlisted(id) {
  return getWishlist().includes(id);
}

/* ═══════════════════════════════════════
   UI HELPERS
═══════════════════════════════════════ */
function updateCartBadge() {
  document.querySelectorAll('.cart-badge').forEach(b => {
    const count = getCartCount();
    b.textContent = count;
    b.style.display = count > 0 ? 'flex' : 'none';
  });
}

function popCartBadge() {
  document.querySelectorAll('.cart-badge').forEach(b => {
    b.classList.remove('pop');
    void b.offsetWidth; // reflow
    b.classList.add('pop');
  });
}

function showToast(message, type = '') {
  let wrap = document.getElementById('toast-wrap');
  if (!wrap) {
    wrap = document.createElement('div');
    wrap.id = 'toast-wrap';
    wrap.className = 'toast-wrap';
    document.body.appendChild(wrap);
  }
  const toast = document.createElement('div');
  const icons = { success: '✓', error: '✕', '': 'ℹ' };
  toast.className = `toast ${type}`;
  toast.innerHTML = `<span>${icons[type] || 'ℹ'}</span>${message}`;
  wrap.appendChild(toast);
  setTimeout(() => {
    toast.classList.add('out');
    setTimeout(() => toast.remove(), 300);
  }, 2800);
}

function formatPrice(n) {
  return '$' + n.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function starsHTML(rating) {
  let html = '<div class="stars">';
  for (let i = 1; i <= 5; i++) {
    if (i <= Math.floor(rating)) {
      html += `<svg viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`;
    } else if (i - rating < 1 && i - rating > 0) {
      html += `<svg viewBox="0 0 24 24" style="opacity:.4"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`;
    } else {
      html += `<svg viewBox="0 0 24 24" style="opacity:.2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`;
    }
  }
  html += '</div>';
  return html;
}

/* ── Product card renderer ── */
function renderProductCard(p, linkBase='pdp.html') {
  const wishActive = isWishlisted(p.id) ? 'active' : '';
  const badgeHTML = p.badge ? `<span class="product-card-badge ${p.badgeType}">${p.badge}</span>` : '';
  const oldPriceHTML = p.oldPrice ? `<span class="product-card-price-old">${formatPrice(p.oldPrice)}</span>` : '';
  return `
  <div class="product-card" data-id="${p.id}" onclick="window.location='${linkBase}?id=${p.id}'">
    <div class="product-card-img-wrap">
      ${badgeHTML}
      <button class="product-card-wish ${wishActive}" onclick="event.stopPropagation();handleWish(this,'${p.id}')" aria-label="Wishlist ${p.name}">
        <svg viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
      </button>
      <img src="${p.image}" alt="${p.name}" class="product-card-img" loading="lazy" onerror="this.style.background='#F5F5F7'">
    </div>
    <div class="product-card-info">
      <div class="product-card-text">
        <span class="product-card-category">${p.category}</span>
        <span class="product-card-name">${p.name}</span>
        <div class="product-card-price-row">
          <span class="product-card-price">${formatPrice(p.price)}</span>
          ${oldPriceHTML}
        </div>
      </div>
      <button class="product-card-add" onclick="event.stopPropagation();quickAdd('${p.id}')" aria-label="Add ${p.name} to cart">Add +</button>
    </div>
  </div>`;
}

function handleWish(btn, id) {
  const active = toggleWishlist(id);
  btn.classList.toggle('active', active);
  showToast(active ? 'Added to wishlist!' : 'Removed from wishlist');
}

function quickAdd(productId) {
  const p = NEXORA_PRODUCTS.find(x => x.id === productId);
  if (!p) return;
  const availSizes = p.sizes.filter(s => !p.soldOut.includes(s));
  const size = availSizes[0] || p.sizes[0];
  const color = p.colors[0];
  addToCart({ id: p.id, name: p.name, price: p.price, image: p.image, category: p.category, size, color: color.hex, colorName: color.name });
}

/* ── Shared Logo Mark ── */
const NEXORA_LOGO_SVG = `<svg width="34" height="34" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <rect x="0.5" y="0.5" width="35" height="35" rx="10" fill="#111625"/>
  <path d="M10 27V9H14.2V27H10Z" fill="#FFFFFF"/>
  <path d="M21.8 27V9H26V27H21.8Z" fill="#FFFFFF"/>
  <path d="M10 9H14.2L26 27H21.8L10 9Z" fill="#7B4FA6"/>
</svg>`;

/* ── Shared Nav renderer ── */
function renderNav(activePage) {
  return `
  <nav class="navbar" role="navigation" aria-label="Main navigation">
    <a href="index.html" class="nav-logo" aria-label="NEXORA home">${NEXORA_LOGO_SVG}<span>NEXORA</span></a>
    <ul class="nav-links">
      <li><a href="index.html" ${activePage==='home'?'class="active"':''}>Home</a></li>
      <li><a href="plp.html"   ${activePage==='plp'?'class="active"':''}>Shop</a></li>
      <li><a href="about.html" ${activePage==='about'?'class="active"':''}>About</a></li>
      <li><a href="contact.html" ${activePage==='contact'?'class="active"':''}>Contact</a></li>
    </ul>
    <div class="nav-utils">
      <button class="nav-cart-btn" onclick="window.location='cart.html'" aria-label="View cart">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
        Cart
        <span class="cart-badge" style="display:none">0</span>
      </button>
      <button class="nav-icon-btn" onclick="window.location='plp.html#wishlist'" aria-label="Wishlist">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#374151" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
      </button>
      <button class="hamburger" id="hamburger-btn" aria-label="Open menu" aria-expanded="false" aria-controls="mobile-nav-panel">
        <span></span><span></span><span></span>
      </button>
    </div>
    <div class="mobile-nav-panel" id="mobile-nav-panel" role="menu">
      <a href="index.html" ${activePage==='home'?'class="active"':''}>Home</a>
      <a href="plp.html" ${activePage==='plp'?'class="active"':''}>Shop</a>
      <a href="about.html" ${activePage==='about'?'class="active"':''}>About</a>
      <a href="contact.html" ${activePage==='contact'?'class="active"':''}>Contact</a>
      <a href="cart.html">Cart</a>
    </div>
  </nav>`;
}

function renderFooter() {
  return `
  <footer class="site-footer">
    <div class="site-footer-inner">
      <div>
        <div class="footer-logo-mark">${NEXORA_LOGO_SVG}<span>NEXORA</span></div>
        <p style="margin-top:12px;font-size:14px;color:var(--gray-text);max-width:240px;line-height:1.6">Premium footwear engineered for performance and designed for life.</p>
      </div>
      <div class="footer-links">
        <div><div class="footer-col-title">Shop</div><div class="footer-col-links"><a href="plp.html">All Products</a><a href="plp.html?category=Running">Running</a><a href="plp.html?category=Street">Street</a><a href="plp.html?category=Lifestyle">Lifestyle</a></div></div>
        <div><div class="footer-col-title">Company</div><div class="footer-col-links"><a href="about.html">About Us</a><a href="contact.html">Contact</a><a href="#">Careers</a><a href="#">Press</a></div></div>
        <div><div class="footer-col-title">Support</div><div class="footer-col-links"><a href="#">Returns</a><a href="#">Size Guide</a><a href="contact.html">FAQ</a></div></div>
      </div>
    </div>
    <div class="footer-bottom">
      <span class="footer-copy">© 2026 Nexora. All rights reserved.</span>
      <div class="footer-social">
        <a href="#" aria-label="Instagram">IG</a>
        <a href="#" aria-label="Twitter">TW</a>
        <a href="#" aria-label="TikTok">TK</a>
      </div>
    </div>
  </footer>`;
}

/* ── Mobile nav toggle (hamburger) ──
   Call once after injecting renderNav() into the page. */
function initNav() {
  const btn = document.getElementById('hamburger-btn');
  const panel = document.getElementById('mobile-nav-panel');
  if (!btn || !panel) return;

  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = panel.classList.toggle('open');
    btn.classList.toggle('open', isOpen);
    btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  panel.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      panel.classList.remove('open');
      btn.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
    });
  });

  document.addEventListener('click', (e) => {
    if (panel.classList.contains('open') && !panel.contains(e.target) && e.target !== btn) {
      panel.classList.remove('open');
      btn.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
    }
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      panel.classList.remove('open');
      btn.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
    }
  });
}

/* ── Mount helper: injects nav + footer and wires up shared behavior.
   Equivalent to doing it by hand, kept for convenience/consistency. ── */
function mountLayout(activePage) {
  const navRoot = document.getElementById('nav-root');
  const footerRoot = document.getElementById('footer-root');
  if (navRoot) navRoot.innerHTML = renderNav(activePage);
  if (footerRoot) footerRoot.innerHTML = renderFooter();
  initNav();
  updateCartBadge();
}

/* ── Init on DOM ready ── */
document.addEventListener('DOMContentLoaded', () => {
  updateCartBadge();
});

/* ── Input formatters ── */
function formatCard(input) {
  let v = input.value.replace(/\D/g,'').slice(0,16);
  input.value = v.replace(/(.{4})/g,'$1 ').trim();
}
function formatExpiry(input) {
  let v = input.value.replace(/\D/g,'').slice(0,4);
  if (v.length >= 3) v = v.slice(0,2) + '/' + v.slice(2);
  input.value = v;
}
function formatCVV(input) {
  input.value = input.value.replace(/\D/g,'').slice(0,4);
}

/* ── Form validation ── */
function validateEmail(v) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v); }
function validateNotEmpty(v) { return v.trim().length > 0; }
function validateCard(v) { return v.replace(/\s/g,'').length === 16; }
function validateExpiry(v) {
  const m = v.match(/^(\d{2})\/(\d{2})$/);
  if (!m) return false;
  const now = new Date(); const month = parseInt(m[1]); const year = 2000 + parseInt(m[2]);
  return month >= 1 && month <= 12 && (year > now.getFullYear() || (year === now.getFullYear() && month >= now.getMonth()+1));
}
function validateCVV(v) { return /^\d{3,4}$/.test(v); }
function validateZip(v) { return /^\d{5}(-\d{4})?$/.test(v.trim()); }

function setFieldError(input, msg) {
  input.classList.add('error');
  let err = input.parentElement.querySelector('.form-error');
  if (!err) { err = document.createElement('div'); err.className = 'form-error'; input.after(err); }
  err.textContent = msg;
  input.addEventListener('input', function clear() {
    input.classList.remove('error');
    err.textContent = '';
    input.removeEventListener('input', clear);
  }, { once: true });
}

function clearFieldError(input) {
  input.classList.remove('error');
  const err = input.parentElement?.querySelector('.form-error');
  if (err) err.textContent = '';
}
