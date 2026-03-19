# EcoHandmade - E-Commerce Store Project

## Project Overview

An e-commerce website for small/medium businesses specializing in handmade jewelry and eco-friendly products. This project demonstrates a fully functional online store with product catalog, shopping cart, and user reviews functionality.

## Features

### Core Functionality
- **Product Catalog**: 22 products across 3 categories
- **Product Reviews**: Read and write reviews with star ratings
- **Shopping Cart**: Add, remove, update quantities
- **Category Filtering**: Filter products by category
- **Data Persistence**: Cart and reviews saved in localStorage
- **Responsive Design**: Works on mobile, tablet, and desktop

### Product Categories
1. **Handmade Jewelry** (7 products) - €45.50 - €120.00
2. **Eco-Friendly Food** (7 products) - €8.50 - €24.00
3. **Home Decor** (8 products) - €19.50 - €65.00

## Technology Stack

- **HTML5**: Semantic markup
- **CSS3**: Responsive design with custom properties
- **JavaScript (ES6+)**: Modern JavaScript features
- **Local Storage**: Data persistence without server
- **Unsplash API**: High-quality product images

## Project Structure

```
lab2-parduotuves kurimas/
├── index.html          # Main HTML file
├── css/
│   └── styles.css      # All styles (725 lines)
├── js/
│   ├── products.js     # Product data (22 products)
│   ├── cart.js        # Shopping cart logic
│   ├── reviews.js     # Reviews functionality
│   └── main.js        # Main application logic
├── README.md          # Project readme
├── REPORT.md          # Detailed evaluation report
└── .gitignore        # Git ignore file
```

## Data Preparation

The product catalog was created using a systematic procedure:
1. Market research for eco-friendly products
2. Category selection (Jewelry, Food, Decor)
3. Product attribute definition
4. Image sourcing from Unsplash
5. Description writing and pricing
6. Sample review population

## Testing

The application has been tested for:
- Product loading and display
- Category filtering functionality
- Cart operations (add, remove, update)
- Review submission and display
- Local storage persistence
- Cross-browser compatibility
- Responsive design

**Test Results**: All tests passed (100%)

## Installation

Simply open `index.html` in any modern web browser:
- Chrome 120+
- Firefox 121+
- Edge 120+
- Safari 17+

No server or installation required.

## User Guide

### Browsing Products
- Use category buttons to filter products
- Click on product image or title for details
- View product ratings and reviews

### Writing Reviews
1. Click on a product to open details
2. Scroll to reviews section
3. Enter your name, rating (1-5), and review text
4. Click "Submit Review"

### Shopping Cart
1. Click "Add to Cart" on any product
2. Click cart icon to view cart sidebar
3. Adjust quantities or remove items
4. Click "Checkout" to complete order (demo)

## Innovative Features

- Slide-in cart sidebar with animation
- Modal-based product quick view
- Dynamic star rating calculation
- Local storage data persistence
- No-server architecture
- Offline-capable after initial load

## License

MIT License

## Course Information

- **Course**: E-Business Web Development (EWB)
- **Assignment**: Lab 2 - E-commerce Store Creation
- **Evaluation**: Based on data preparation, functionality, testing, innovation, and report quality
