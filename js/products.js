// Product Data - 20+ products in 3 categories
const products = [
    // Handmade Jewelry Category
    {
        id: 1,
        name: "Silver Moon Necklace",
        description: "Beautiful handcrafted silver necklace featuring a crescent moon pendant. Made with sterling silver and natural moonstone. Perfect for everyday wear or special occasions.",
        price: 89.99,
        category: "jewelry",
        image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400",
        rating: 4.8,
        reviews: []
    },
    {
        id: 2,
        name: "Amethyst Crystal Bracelet",
        description: "Elegant handmade bracelet with genuine amethyst crystals. Each bead is carefully selected for its unique color and clarity. Benefits: promotes calmness and relaxation.",
        price: 65.00,
        category: "jewelry",
        image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=400",
        rating: 4.6,
        reviews: []
    },
    {
        id: 3,
        name: "Gold Leaf Earrings",
        description: "Delicate 24k gold-plated leaf-shaped earrings. Lightweight design comfortable for all-day wear. Each piece is uniquely handcrafted.",
        price: 45.50,
        category: "jewelry",
        image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400",
        rating: 4.9,
        reviews: []
    },
    {
        id: 4,
        name: "Boho Bohemian Ring",
        description: "Unique handmade ring with intricate bohemian design. Features natural turquoise stone set in oxidized silver. Adjustable size fits most.",
        price: 55.00,
        category: "jewelry",
        image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400",
        rating: 4.7,
        reviews: []
    },
    {
        id: 5,
        name: "Pearl Drop Pendant",
        description: "Timeless elegance with freshwater pearl pendant on fine gold chain. Classic design that never goes out of style. Length: 45cm.",
        price: 120.00,
        category: "jewelry",
        image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400",
        rating: 5.0,
        reviews: []
    },
    {
        id: 6,
        name: "Hammered Gold Bangle",
        description: "Stunning hammered gold bangle with texture that catches light beautifully. Handcrafted with love. Width: 8mm. Available in various sizes.",
        price: 78.00,
        category: "jewelry",
        image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400",
        rating: 4.5,
        reviews: []
    },
    {
        id: 7,
        name: "Rose Quartz Heart Pendant",
        description: "Beautiful rose quartz heart-shaped pendant. Known as the stone of unconditional love. Comes on an 18-inch silver chain.",
        price: 52.00,
        category: "jewelry",
        image: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=400",
        rating: 4.8,
        reviews: []
    },
    // Eco-Friendly Food Category
    {
        id: 8,
        name: "Organic Raw Honey",
        description: "Pure, raw, unfiltered honey from local beekeepers. No additives or preservatives. Perfect for tea, baking, or as a natural sweetener. 500g jar.",
        price: 18.50,
        category: "food",
        image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=400",
        rating: 4.9,
        reviews: []
    },
    {
        id: 9,
        name: "Organic Green Tea",
        description: "Premium organic green tea leaves from sustainable farms. Rich in antioxidants. Brews a delicate, refreshing cup. Contains 100 tea bags.",
        price: 12.99,
        category: "food",
        image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400",
        rating: 4.7,
        reviews: []
    },
    {
        id: 10,
        name: "Organic Olive Oil",
        description: "Extra virgin olive oil from organic olives. Cold-pressed to preserve nutrients and flavor. Perfect for salads, cooking, or dipping. 750ml bottle.",
        price: 24.00,
        category: "food",
        image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400",
        rating: 4.8,
        reviews: []
    },
    {
        id: 11,
        name: "Organic Dark Chocolate",
        description: "72% cocoa dark chocolate made with ethically sourced cacao. Dairy-free and vegan. Rich, smooth flavor. 100g bar.",
        price: 8.50,
        category: "food",
        image: "https://images.unsplash.com/photo-1606312619070-d48b4c652a52?w=400",
        rating: 4.6,
        reviews: []
    },
    {
        id: 12,
        name: "Organic Dried Mango",
        description: " Naturally sweet dried mango slices. No added sugar or preservatives. Perfect healthy snack. 200g pack.",
        price: 9.99,
        category: "food",
        image: "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?w=400",
        rating: 4.5,
        reviews: []
    },
    {
        id: 13,
        name: "Organic Almond Butter",
        description: "Creamy almond butter made from dry-roasted almonds. No oils or additives. Perfect for toast, smoothies, or baking. 340g jar.",
        price: 16.00,
        category: "food",
        image: "https://images.unsplash.com/photo-1612187715474-5e78a3723fb2?w=400",
        rating: 4.7,
        reviews: []
    },
    {
        id: 14,
        name: "Organic Granola Mix",
        description: "Crunchy granola with organic oats, nuts, and dried fruits. Perfect for breakfast with yogurt or milk. 400g bag.",
        price: 11.50,
        category: "food",
        image: "https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?w=400",
        rating: 4.8,
        reviews: []
    },
    // Home Decor Category
    {
        id: 15,
        name: "Handwoven Basket",
        description: "Beautiful handwoven storage basket made from natural seagrass. Perfect for organizing blankets, toys, or linens. Dimensions: 30x30x25cm.",
        price: 35.00,
        category: "decor",
        image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=400",
        rating: 4.6,
        reviews: []
    },
    {
        id: 16,
        name: "Ceramic Plant Pot",
        description: "Handcrafted ceramic pot with drainage hole. Perfect for succulents or small plants. Available in earth tones. Height: 12cm.",
        price: 22.00,
        category: "decor",
        image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=400",
        rating: 4.8,
        reviews: []
    },
    {
        id: 17,
        name: "Soy Wax Candle Set",
        description: "Set of 3 hand-poured soy wax candles in relaxing scents: lavender, vanilla, and sandalwood. Long-lasting burn time. 200g each.",
        price: 28.00,
        category: "decor",
        image: "https://images.unsplash.com/photo-1602607434848-727ac1e8c569?w=400",
        rating: 4.9,
        reviews: []
    },
    {
        id: 18,
        name: "Macrame Wall Hanging",
        description: "Bohemian-style macrame wall hanging. Handcrafted with 100% cotton rope. Adds texture and warmth to any room. Size: 60x90cm.",
        price: 65.00,
        category: "decor",
        image: "https://images.unsplash.com/photo-1522758971460-1d21eed7dc1d?w=400",
        rating: 4.7,
        reviews: []
    },
    {
        id: 19,
        name: "Wooden Photo Frame",
        description: "Rustic wooden photo frame made from reclaimed wood. Perfect for displaying your favorite memories. Fits 5x7 inch photos.",
        price: 19.50,
        category: "decor",
        image: "https://images.unsplash.com/photo-1513519245088-0e12902e35ca?w=400",
        rating: 4.5,
        reviews: []
    },
    {
        id: 20,
        name: "Linen Table Runner",
        description: "Elegant hand-stitched linen table runner. Natural, breathable fabric. Perfect for special occasions or everyday dining. Size: 14x72 inches.",
        price: 42.00,
        category: "decor",
        image: "https://images.unsplash.com/photo-1616627561839-7c758f7f1c8e?w=400",
        rating: 4.8,
        reviews: []
    },
    {
        id: 21,
        name: "Handmade Soap Set",
        description: "Set of 4 handmade natural soaps with essential oils. Lavender, rosemary, citrus, and mint. Vegan and cruelty-free. 100g each.",
        price: 24.00,
        category: "decor",
        image: "https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?w=400",
        rating: 4.6,
        reviews: []
    },
    {
        id: 22,
        name: "Woven Table Lamp",
        description: "Unique woven rattan table lamp with natural shade. Creates warm, ambient lighting. Includes fabric cord and wooden base. Height: 45cm.",
        price: 55.00,
        category: "decor",
        image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400",
        rating: 4.7,
        reviews: []
    }
];

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = products;
}
