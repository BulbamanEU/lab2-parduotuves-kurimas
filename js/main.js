// Main application logic

// Current filter
let currentFilter = 'all';

// Toast notification system
function showToast(title, message, type = 'info') {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    
    let icon = 'fa-info-circle';
    if (type === 'success') icon = 'fa-check-circle';
    if (type === 'error') icon = 'fa-exclamation-circle';

    toast.innerHTML = `
        <i class="fas ${icon} toast-icon"></i>
        <div class="toast-content">
            <div class="toast-title">${title}</div>
            <div class="toast-message">${message}</div>
        </div>
        <button class="toast-close" onclick="this.parentElement.remove()">&times;</button>
    `;

    container.appendChild(toast);

    // Auto remove after 4 seconds
    setTimeout(() => {
        toast.classList.add('hiding');
        setTimeout(() => toast.remove(), 300);
    }, 4000);
}

// Initialize application
document.addEventListener('DOMContentLoaded', function() {
    initReviews();
    renderProducts('all');
    displayAllReviews();
    initCart();
});

// Render products to the grid
function renderProducts(filter) {
    const productGrid = document.getElementById('product-grid');
    if (!productGrid) return;

    currentFilter = filter;
    
    const filteredProducts = filter === 'all' 
        ? products 
        : products.filter(p => p.category === filter);

    productGrid.innerHTML = filteredProducts.map(product => {
        const rating = calculateRating(product.id);
        const reviewCount = getReviewCount(product.id);
        return `
        <div class="product-card" data-category="${product.category}">
            <img src="${product.image}" alt="${product.name}" class="product-image" onclick="openModal(${product.id})" onerror="this.src='https://via.placeholder.com/400x300?text=Image+Not+Available'">
            <div class="product-info">
                <span class="product-category">${getCategoryName(product.category)}</span>
                <h3 class="product-title" onclick="openModal(${product.id})">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-rating">
                    ${getStarRating(rating, reviewCount)}
                    <span class="review-count">(${reviewCount} ${reviewCount === 1 ? 'review' : 'reviews'})</span>
                </div>
                <div class="product-price">€${product.price.toFixed(2)}</div>
                <button class="add-to-cart" onclick="addToCart(${product.id})">
                    <i class="fas fa-cart-plus"></i> Add to Cart
                </button>
            </div>
        </div>
    `}).join('');

    // Update filter buttons
    updateFilterButtons(filter);
}

// Get category display name
function getCategoryName(category) {
    const names = {
        'jewelry': 'Handmade Jewelry',
        'food': 'Eco-Friendly Food',
        'decor': 'Home Decor'
    };
    return names[category] || category;
}

// Calculate rating from reviews
function calculateRating(productId) {
    const reviews = getProductReviews(productId);
    if (reviews.length === 0) return 0;
    const totalRating = reviews.reduce((sum, r) => sum + r.rating, 0);
    return totalRating / reviews.length;
}

// Get star rating HTML with numeric rating
function getStarRating(rating, reviewCount) {
    if (reviewCount === 0) {
        return '<span class="no-rating">No reviews yet</span>';
    }
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    let stars = '★'.repeat(fullStars);
    if (hasHalfStar) stars += '½';
    stars += '☆'.repeat(5 - fullStars - (hasHalfStar ? 1 : 0));
    return `<span class="stars">${stars}</span> <span class="rating-number">${rating.toFixed(1)}</span>`;
}

// Get review count for a product
function getReviewCount(productId) {
    const reviews = getProductReviews(productId);
    return reviews.length;
}

// Filter products by category
function filterProducts(category) {
    renderProducts(category);
    
    // Smooth scroll to products
    document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
}

// Update filter button styles
function updateFilterButtons(filter) {
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.textContent.toLowerCase().includes(filter) || 
            (filter === 'all' && btn.textContent === 'All')) {
            btn.classList.add('active');
        }
    });
}

// Open product modal
function openModal(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const modal = document.getElementById('product-modal');
    const modalBody = document.getElementById('modal-body');

    const rating = calculateRating(productId);
    const reviewCount = getReviewCount(productId);
    
    modalBody.innerHTML = `
        <div class="modal-product">
            <img src="${product.image}" alt="${product.name}" class="modal-product-image" onerror="this.src='https://via.placeholder.com/400x400?text=Image+Not+Available'">
            <div class="modal-product-info">
                <h2>${product.name}</h2>
                <span class="product-category">${getCategoryName(product.category)}</span>
                <div class="product-rating">
                    ${getStarRating(rating, reviewCount)}
                    <span class="review-count">(${reviewCount} ${reviewCount === 1 ? 'review' : 'reviews'})</span>
                </div>
                <p class="product-description">${product.description}</p>
                <div class="product-price">€${product.price.toFixed(2)}</div>
                <button class="add-to-cart" onclick="addToCart(${product.id})">
                    <i class="fas fa-cart-plus"></i> Add to Cart
                </button>
            </div>
        </div>
        <div class="product-reviews">
            <h3>Product Reviews</h3>
            <div class="review-form">
                <input type="text" id="review-author" placeholder="Your Name" required>
                <input type="number" id="review-rating" min="1" max="5" value="5" placeholder="Rating (1-5)">
                <textarea id="review-text" rows="3" placeholder="Write your review..."></textarea>
                <button onclick="submitReview(${product.id})">Submit Review</button>
            </div>
            <div id="modal-reviews">
                ${displayProductReviews(productId)}
            </div>
        </div>
    `;

    modal.style.display = 'block';
}

// Close modal
function closeModal() {
    const modal = document.getElementById('product-modal');
    modal.style.display = 'none';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('product-modal');
    if (event.target === modal) {
        closeModal();
    }
};

// Contact form submission
function submitContact(event) {
    event.preventDefault();
    showToast('Message Sent!', 'Thank you for your message! We will get back to you soon.', 'success');
    event.target.reset();
}

// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Mobile menu toggle (for future enhancement)
function toggleMobileMenu() {
    const nav = document.querySelector('.nav ul');
    nav.classList.toggle('mobile-open');
}
