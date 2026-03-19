// Reviews functionality
let productReviews = {};
let allReviews = [];

// Initialize reviews from localStorage
function initReviews() {
    const savedReviews = localStorage.getItem('ecohandmade_reviews');
    if (savedReviews) {
        productReviews = JSON.parse(savedReviews);
    }

    // Add some sample reviews
    const sampleReviews = [
        {
            productId: 1,
            author: "Emma Wilson",
            rating: 5,
            text: "Absolutely stunning necklace! The moonstone has beautiful shimmer. Fast shipping too.",
            date: "2024-01-15"
        },
        {
            productId: 1,
            author: "Sarah Johnson",
            rating: 4,
            text: "Lovely piece, very elegant. The chain is a bit delicate but overall satisfied.",
            date: "2024-01-10"
        },
        {
            productId: 8,
            author: "Michael Brown",
            rating: 5,
            text: "Best honey I've ever tasted! So pure and natural. Will definitely order again.",
            date: "2024-01-12"
        },
        {
            productId: 8,
            author: "Lisa Davis",
            rating: 5,
            text: "This honey is amazing! Perfect sweetness level. Great for tea.",
            date: "2024-01-08"
        },
        {
            productId: 17,
            author: "Anna Martinez",
            rating: 5,
            text: "These candles smell wonderful! Long-lasting and great quality.",
            date: "2024-01-05"
        },
        {
            productId: 15,
            author: "John Smith",
            rating: 4,
            text: "Beautiful basket, exactly as described. Great for storing blankets.",
            date: "2024-01-03"
        },
        {
            productId: 2,
            author: "Sophie Lee",
            rating: 5,
            text: "The amethyst bracelet is gorgeous! Love the purple color.",
            date: "2024-01-01"
        },
        {
            productId: 10,
            author: "David Chen",
            rating: 5,
            text: "Excellent olive oil! Fresh taste and great quality packaging.",
            date: "2023-12-28"
        }
    ];

    // Add sample reviews to products
    sampleReviews.forEach(review => {
        if (!productReviews[review.productId]) {
            productReviews[review.productId] = [];
        }
        productReviews[review.productId].push(review);
    });

    // Collect all reviews for the reviews section
    allReviews = [];
    Object.keys(productReviews).forEach(productId => {
        const reviews = productReviews[productId];
        reviews.forEach(review => {
            const product = products.find(p => p.id === parseInt(productId));
            allReviews.push({
                ...review,
                productName: product ? product.name : 'Unknown Product'
            });
        });
    });

    // Sort by date (newest first)
    allReviews.sort((a, b) => new Date(b.date) - new Date(a.date));

    saveReviews();
}

// Save reviews to localStorage
function saveReviews() {
    localStorage.setItem('ecohandmade_reviews', JSON.stringify(productReviews));
}

// Get reviews for a specific product
function getProductReviews(productId) {
    return productReviews[productId] || [];
}

// Add review to a product
function addReview(productId, author, rating, text) {
    const review = {
        productId,
        author,
        rating: parseInt(rating),
        text,
        date: new Date().toISOString().split('T')[0]
    };

    if (!productReviews[productId]) {
        productReviews[productId] = [];
    }
    
    productReviews[productId].push(review);
    saveReviews();

    // Update product rating
    const product = products.find(p => p.id === productId);
    if (product) {
        const reviews = productReviews[productId];
        const totalRating = reviews.reduce((sum, r) => sum + r.rating, 0);
        product.rating = totalRating / reviews.length;
    }

    return review;
}

// Display reviews in modal
function displayProductReviews(productId) {
    const reviews = getProductReviews(productId);
    const product = products.find(p => p.id === productId);

    if (reviews.length === 0) {
        return `
            <p>No reviews yet. Be the first to review this product!</p>
        `;
    }

    return reviews.map(review => `
        <div class="review-item">
            <div class="review-header">
                <span class="review-author">${review.author}</span>
                <span class="review-rating">${'★'.repeat(review.rating)}${'☆'.repeat(5 - review.rating)}</span>
            </div>
            <p>${review.text}</p>
            <small style="color: #999;">${review.date}</small>
        </div>
    `).join('');
}

// Display all reviews in reviews section
function displayAllReviews() {
    const container = document.getElementById('reviews-container');
    
    if (!container) return;

    if (allReviews.length === 0) {
        container.innerHTML = '<p>No reviews yet.</p>';
        return;
    }

    container.innerHTML = allReviews.slice(0, 6).map(review => `
        <div class="review-card">
            <div class="review-card-header">
                <div>
                    <div class="review-card-author">${review.author}</div>
                    <div class="review-card-product">${review.productName}</div>
                </div>
                <div class="review-card-rating">${'★'.repeat(review.rating)}${'☆'.repeat(5 - review.rating)}</div>
            </div>
            <p class="review-card-text">${review.text}</p>
        </div>
    `).join('');
}

// Submit review from form
function submitReview(productId) {
    const authorInput = document.getElementById('review-author');
    const ratingInput = document.getElementById('review-rating');
    const textInput = document.getElementById('review-text');

    const author = authorInput.value.trim();
    const rating = ratingInput.value;
    const text = textInput.value.trim();

    if (!author || !rating || !text) {
        alert('Please fill in all fields!');
        return;
    }

    addReview(productId, author, rating, text);
    
    // Clear form
    authorInput.value = '';
    ratingInput.value = '5';
    textInput.value = '';

    // Refresh modal content
    openModal(productId);

    alert('Thank you for your review!');
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    initReviews();
    displayAllReviews();
});
