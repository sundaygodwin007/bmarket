
// Product Data
const initialProducts = [
    { id: 1, name: 'Rose Bouquet', category: 'Flowers', price: 45.99, image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=400&h=400&fit=crop', description: 'Beautiful red roses', stock: 15, rating: 4.5, reviews: 89, images: ['https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=400&h=400&fit=crop', 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=400&h=400&fit=crop', 'https://images.unsplash.com/photo-1455659817273-f96807779a8a?w=400&h=400&fit=crop', 'https://images.unsplash.com/photo-1464297162577-f5295c892194?w=400&h=400&fit=crop'], details: 'Premium fresh red roses carefully selected and arranged. Perfect for any romantic occasion. Includes 12 long-stemmed roses with complementary greenery. Vase not included.' },
    { id: 2, name: 'Tulip Mix', category: 'Flowers', price: 35.99, image: 'https://images.unsplash.com/photo-1520763185298-1b434c919102?w=400&h=400&fit=crop', description: 'Colorful tulips', stock: 20, rating: 4.7, reviews: 124, images: ['https://images.unsplash.com/photo-1520763185298-1b434c919102?w=400&h=400&fit=crop', 'https://images.unsplash.com/photo-1524386416438-98b9b2d4b433?w=400&h=400&fit=crop', 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=400&h=400&fit=crop', 'https://images.unsplash.com/photo-1517258968161-15d1b6c29c0e?w=400&h=400&fit=crop'], details: 'A vibrant mix of colorful tulips including red, yellow, pink, and white varieties. Freshly cut and ready to brighten any space. Bundle of 15 tulips with care instructions included.' },
    { id: 3, name: 'Sunflower Bundle', category: 'Flowers', price: 29.99, image: 'https://images.unsplash.com/photo-1597848212624-e530d4e5b2b7?w=400&h=400&fit=crop', description: 'Bright sunflowers', stock: 12, rating: 4.8, reviews: 156, images: ['https://images.unsplash.com/photo-1597848212624-e530d4e5b2b7?w=400&h=400&fit=crop', 'https://images.unsplash.com/photo-1470509037663-253afd7f0f51?w=400&h=400&fit=crop', 'https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=400&h=400&fit=crop', 'https://images.unsplash.com/photo-1593642532400-2682810df593?w=400&h=400&fit=crop'], details: 'Cheerful sunflowers that bring sunshine indoors. Large blooms measuring 6-8 inches across. Bundle of 8 sunflowers with stems up to 24 inches long. Perfect for adding a pop of color to any room.' },
    { id: 4, name: 'Orchid Plant', category: 'Plants', price: 55.99, image: 'https://images.unsplash.com/photo-1540990915194-c2b4b6d5f485?w=400&h=400&fit=crop', description: 'Elegant orchid', stock: 8, rating: 4.6, reviews: 67, images: ['https://images.unsplash.com/photo-1540990915194-c2b4b6d5f485?w=400&h=400&fit=crop', 'https://images.unsplash.com/photo-1547972151-0d2c2655dba7?w=400&h=400&fit=crop', 'https://images.unsplash.com/photo-1507297230445-ff678f10b524?w=400&h=400&fit=crop', 'https://images.unsplash.com/photo-1551207480-e4b77f8bafd8?w=400&h=400&fit=crop'], details: 'Exotic phalaenopsis orchid in full bloom. Low maintenance and long-lasting beauty. Comes in decorative pot with care guide. Blooms can last 2-3 months with proper care.' },
    { id: 5, name: 'Succulent Set', category: 'Plants', price: 24.99, image: 'https://images.unsplash.com/photo-1459156212016-c812468e2115?w=400&h=400&fit=crop', description: 'Assorted succulents', stock: 25, rating: 4.9, reviews: 203, images: ['https://images.unsplash.com/photo-1459156212016-c812468e2115?w=400&h=400&fit=crop', 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=400&h=400&fit=crop', 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=400&h=400&fit=crop', 'https://images.unsplash.com/photo-1452570053594-1b985d6ea890?w=400&h=400&fit=crop'], details: 'Collection of 5 different succulent varieties in mini ceramic pots. Drought-tolerant and perfect for beginners. Includes care instructions and soil recommendations.' },
    { id: 6, name: 'Herb Garden Kit', category: 'Seeds', price: 18.99, image: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=400&h=400&fit=crop', description: 'Grow your own herbs', stock: 30, rating: 4.4, reviews: 91, images: ['https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=400&h=400&fit=crop', 'https://images.unsplash.com/photo-1509587584298-0f3b3a3a1797?w=400&h=400&fit=crop', 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=400&h=400&fit=crop', 'https://images.unsplash.com/photo-1585641554503-ae7366cd8ed6?w=400&h=400&fit=crop'], details: 'Complete herb garden starter kit with basil, cilantro, parsley, and mint seeds. Includes biodegradable pots, soil pellets, and growing instructions. Perfect for kitchen gardens.' },
    { id: 7, name: 'Lavender Bunch', category: 'Flowers', price: 32.99, image: 'https://images.unsplash.com/photo-1595430274952-64c5703fa1d1?w=400&h=400&fit=crop', description: 'Fragrant lavender', stock: 18, rating: 4.7, reviews: 143, images: ['https://images.unsplash.com/photo-1595430274952-64c5703fa1d1?w=400&h=400&fit=crop', 'https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=400&h=400&fit=crop', 'https://images.unsplash.com/photo-1611462185194-6b400c90e382?w=400&h=400&fit=crop', 'https://images.unsplash.com/photo-1464297162577-f5295c892194?w=400&h=400&fit=crop'], details: 'Fresh-cut lavender bunches with incredible fragrance. Can be dried for long-lasting use. Bundle contains approximately 100 stems. Excellent for aromatherapy and decoration.' },
    { id: 8, name: 'Bonsai Tree', category: 'Plants', price: 89.99, image: 'https://images.unsplash.com/photo-1519764622345-23439dd774f7?w=400&h=400&fit=crop', description: 'Miniature bonsai', stock: 5, rating: 4.8, reviews: 45, images: ['https://images.unsplash.com/photo-1519764622345-23439dd774f7?w=400&h=400&fit=crop', 'https://images.unsplash.com/photo-1558293842-c0fd3db86157?w=400&h=400&fit=crop', 'https://images.unsplash.com/photo-1521334726092-b509a19597c6?w=400&h=400&fit=crop', 'https://images.unsplash.com/photo-1508856836661-0ca5ec09b2e2?w=400&h=400&fit=crop'], details: 'Authentic juniper bonsai tree, 5 years old. Comes in traditional ceramic pot with drainage. Includes pruning scissors and detailed care manual. A living work of art.' },
    { id: 9, name: 'Wildflower Seeds', category: 'Seeds', price: 12.99, image: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=400&h=400&fit=crop', description: 'Mixed wildflower seeds', stock: 40, rating: 4.5, reviews: 178, images: ['https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=400&h=400&fit=crop', 'https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=400&h=400&fit=crop', 'https://images.unsplash.com/photo-1597848212624-e530d4e5b2b7?w=400&h=400&fit=crop', 'https://images.unsplash.com/photo-1470509037663-253afd7f0f51?w=400&h=400&fit=crop'], details: 'Premium wildflower seed mix covering 50 sq ft. Attracts bees and butterflies. Contains 20+ varieties of native wildflowers. Easy to grow, just scatter and water.' },
    { id: 10, name: 'Lily Collection', category: 'Flowers', price: 42.99, image: 'https://images.unsplash.com/photo-1455659817273-f96807779a8a?w=400&h=400&fit=crop', description: 'Assorted lilies', stock: 14, rating: 4.6, reviews: 98, images: ['https://images.unsplash.com/photo-1455659817273-f96807779a8a?w=400&h=400&fit=crop', 'https://images.unsplash.com/photo-1517258968161-15d1b6c29c0e?w=400&h=400&fit=crop', 'https://images.unsplash.com/photo-1464297162577-f5295c892194?w=400&h=400&fit=crop', 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=400&h=400&fit=crop'], details: 'Elegant lily collection featuring asiatic and oriental varieties. Strong fragrance and long vase life. Bundle of 10 stems in various colors including white, pink, and coral.' },
    { id: 11, name: 'Fern Plant', category: 'Plants', price: 28.99, image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=400&h=400&fit=crop', description: 'Lush green fern', stock: 22, rating: 4.3, reviews: 134, images: ['https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=400&h=400&fit=crop', 'https://images.unsplash.com/photo-1517238684900-8a8371e87fbb?w=400&h=400&fit=crop', 'https://images.unsplash.com/photo-1452570053594-1b985d6ea890?w=400&h=400&fit=crop', 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=400&h=400&fit=crop'], details: 'Boston fern in hanging basket. Natural air purifier and humidity booster. Low-light tolerant and pet-friendly. Perfect for bathrooms and shaded areas.' },
    { id: 12, name: 'Vegetable Seeds', category: 'Seeds', price: 15.99, image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=400&h=400&fit=crop', description: 'Garden vegetable mix', stock: 35, rating: 4.7, reviews: 212, images: ['https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=400&h=400&fit=crop', 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=400&h=400&fit=crop', 'https://images.unsplash.com/photo-1585641554503-ae7366cd8ed6?w=400&h=400&fit=crop', 'https://images.unsplash.com/photo-1509587584298-0f3b3a3a1797?w=400&h=400&fit=crop'], details: 'Complete vegetable garden seed collection. Includes tomatoes, carrots, lettuce, cucumbers, and peppers. Non-GMO heirloom varieties. Enough to plant a 10x10 ft garden.' },
    { id: 13, name: 'Garden Clothing Set', category: 'Clothes', price: 15.99, image: 'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=400&h=400&fit=crop', description: 'Gardening apparel', stock: 35, rating: 4.9, reviews: 87, images: ['https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=400&h=400&fit=crop', 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop', 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop', 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=400&h=400&fit=crop'], details: 'Comfortable gardening clothing set. Durable fabric perfect for outdoor work. Includes shirt and gloves. Available in sizes S-XXL. Perfect for garden enthusiasts.' }
];

// Application State
let state = {
    searchQuery: '',
    selectedCategory: 'All',
    sortBy: 'name',
    priceRange: [0, 100],
    cart: [],
    showCart: false,
    showCheckout: false,
    orderComplete: false,
    showAdvertiseModal: false,
    advertiseComplete: false,
    selectedProduct: null,
    selectedImageIndex: 0,
    formData: {
        fullName: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        state: '',
        zipCode: '',
        cardNumber: '',
        expiryDate: '',
        cvv: '',
        deliveryOption: 'standard'
    },
    advertiseData: {
        productName: '',
        category: 'Flowers',
        price: '',
        description: '',
        stock: '',
        sellerName: '',
        sellerEmail: '',
        sellerPhone: '',
        cardNumber: '',
        expiryDate: '',
        cvv: '',
        adDuration: '30'
    }
};

// Ad Pricing
const adPricing = {
    '7': 19.99,
    '30': 49.99,
    '90': 129.99
};

// Helper Functions
function getCategories() {
    const categories = ['All', ...new Set(initialProducts.map(p => p.category))];
    return categories;
}

function filterAndSortProducts() {
    let filtered = initialProducts.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
                            product.description.toLowerCase().includes(state.searchQuery.toLowerCase());
        const matchesCategory = state.selectedCategory === 'All' || product.category === state.selectedCategory;
        const matchesPrice = product.price >= state.priceRange[0] && product.price <= state.priceRange[1];
        
        return matchesSearch && matchesCategory && matchesPrice;
    });

    filtered.sort((a, b) => {
        switch(state.sortBy) {
            case 'price-low':
                return a.price - b.price;
            case 'price-high':
                return b.price - a.price;
            case 'rating':
                return b.rating - a.rating;
            case 'name':
            default:
                return a.name.localeCompare(b.name);
        }
    });

    return filtered;
}

function getCartTotal() {
    return state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
}

function getCartItemCount() {
    return state.cart.reduce((sum, item) => sum + item.quantity, 0);
}

function getDeliveryCost() {
    if (state.formData.deliveryOption === 'express') return 15.99;
    if (state.formData.deliveryOption === 'standard') return 5.99;
    return 0;
}

function getAdFee() {
    return adPricing[state.advertiseData.adDuration] || 49.99;
}

// DOM Rendering Functions
function renderProducts() {
    const products = filterAndSortProducts();
    const grid = document.getElementById('productsGrid');
    const noResults = document.getElementById('noResults');
    const countDiv = document.getElementById('productCountDiv');

    countDiv.textContent = `Found ${products.length} products`;

    if (products.length === 0) {
        grid.innerHTML = '';
        noResults.classList.remove('hidden');
        return;
    }

    noResults.classList.add('hidden');
    grid.innerHTML = products.map(product => `
        <div class="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer" data-product-id="${product.id}">
            <div class="bg-gradient-to-br from-green-100 to-emerald-100 p-8 sm:p-12 lg:p-16 flex items-center justify-center" style="height: 250px;">
                <img src="${product.image}" alt="${product.name}" class="w-full h-full object-cover rounded-lg group-hover:scale-110 transition-transform duration-300" />
            </div>
            
            <div class="p-3 sm:p-4">
                <div class="flex justify-between items-start mb-2">
                    <div class="flex-1 min-w-0">
                        <h3 class="font-bold text-base sm:text-lg text-gray-800 truncate">${product.name}</h3>
                        <p class="text-xs sm:text-sm text-gray-500">${product.category}</p>
                    </div>
                    <div class="flex items-center space-x-1 ml-2 flex-shrink-0">
                        <span class="text-yellow-500">★</span>
                        <span class="text-xs sm:text-sm font-medium">${product.rating}</span>
                    </div>
                </div>
                
                <p class="text-xs sm:text-sm text-gray-600 mb-3 line-clamp-2">${product.description}</p>
                
                <div class="flex justify-between items-center">
                    <div>
                        <p class="text-xl sm:text-2xl font-bold text-green-600">$${product.price}</p>
                        <p class="text-xs text-gray-500">${product.stock} in stock</p>
                    </div>
                    
                    <button class="addToCartBtn bg-green-600 text-white px-3 sm:px-4 py-2 rounded-lg hover:bg-green-700 transition-all duration-200 hover:scale-105 active:scale-95 flex items-center space-x-1 sm:space-x-2 font-medium text-sm sm:text-base" data-product-id="${product.id}">
                        <span>➕</span>
                        <span>Add</span>
                    </button>
                </div>
            </div>
        </div>
    `).join('');

    // Attach event listeners
    document.querySelectorAll('[data-product-id]').forEach(el => {
        el.addEventListener('click', (e) => {
            if (!e.target.closest('.addToCartBtn')) {
                const productId = parseInt(el.dataset.productId);
                openProductModal(productId);
            }
        });
    });

    document.querySelectorAll('.addToCartBtn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const productId = parseInt(btn.dataset.productId);
            const product = initialProducts.find(p => p.id === productId);
            addToCart(product);
        });
    });
}

function renderCategories() {
    const container = document.getElementById('categoriesContainer');
    const categories = getCategories();

    container.innerHTML = categories.map(category => `
        <button class="categoryBtn w-full text-left px-3 py-2 rounded-lg transition-colors ${
            state.selectedCategory === category
                ? 'bg-green-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
        }" data-category="${category}">
            ${category}
        </button>
    `).join('');

    document.querySelectorAll('.categoryBtn').forEach(btn => {
        btn.addEventListener('click', () => {
            state.selectedCategory = btn.dataset.category;
            renderProducts();
            renderCategories();
        });
    });
}

function renderCart() {
    const cartCount = document.getElementById('cartCount');
    const count = getCartItemCount();
    
    if (count > 0) {
        cartCount.textContent = count;
        cartCount.classList.remove('hidden');
    } else {
        cartCount.classList.add('hidden');
    }

    const cartItems = document.getElementById('cartItems');
    const emptyCart = document.getElementById('emptyCart');
    const cartContent = document.getElementById('cartContent');
    const cartTotal = document.getElementById('cartTotal');

    if (state.cart.length === 0) {
        cartContent.classList.add('hidden');
        emptyCart.classList.remove('hidden');
    } else {
        cartContent.classList.remove('hidden');
        emptyCart.classList.add('hidden');

        cartItems.innerHTML = state.cart.map(item => `
            <div class="bg-gray-50 rounded-lg p-3 sm:p-4">
                <div class="flex items-start space-x-3 sm:space-x-4">
                    <div class="bg-gradient-to-br from-green-100 to-emerald-100 rounded-lg overflow-hidden flex items-center justify-center flex-shrink-0" style="width: 80px; height: 80px;">
                        <img src="${item.image}" alt="${item.name}" class="w-full h-full object-cover" />
                    </div>
                    
                    <div class="flex-1 min-w-0">
                        <h3 class="font-bold text-sm sm:text-base text-gray-800 truncate">${item.name}</h3>
                        <p class="text-xs sm:text-sm text-gray-500">${item.category}</p>
                        <p class="text-green-600 font-bold mt-1 text-sm sm:text-base">$${item.price}</p>
                        
                        <div class="flex items-center space-x-2 mt-2">
                            <button class="quantityBtn bg-gray-200 hover:bg-gray-300 rounded-lg p-1" data-product-id="${item.id}" data-action="decrease">
                                <span>➖</span>
                            </button>
                            <span class="font-medium px-2 sm:px-3 text-sm sm:text-base">${item.quantity}</span>
                            <button class="quantityBtn bg-gray-200 hover:bg-gray-300 rounded-lg p-1" data-product-id="${item.id}" data-action="increase">
                                <span>➕</span>
                            </button>
                            <button class="removeBtn ml-auto text-red-500 hover:text-red-700" data-product-id="${item.id}">
                                <span class="text-lg">✕</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `).join('');

        cartTotal.textContent = `$${getCartTotal().toFixed(2)}`;

        // Attach event listeners
        document.querySelectorAll('.quantityBtn').forEach(btn => {
            btn.addEventListener('click', () => {
                const productId = parseInt(btn.dataset.productId);
                const action = btn.dataset.action;
                if (action === 'increase') {
                    updateQuantity(productId, 1);
                } else {
                    updateQuantity(productId, -1);
                }
            });
        });

        document.querySelectorAll('.removeBtn').forEach(btn => {
            btn.addEventListener('click', () => {
                const productId = parseInt(btn.dataset.productId);
                removeFromCart(productId);
            });
        });
    }
}

function renderCheckoutSummary() {
    const checkoutItems = document.getElementById('checkoutItems');
    const cartTotal = getCartTotal();
    const deliveryCost = getDeliveryCost();
    const tax = cartTotal * 0.08;
    const grandTotal = cartTotal + deliveryCost + tax;

    checkoutItems.innerHTML = state.cart.map(item => `
        <div class="flex items-center space-x-2 sm:space-x-3 bg-white rounded-lg p-2 sm:p-3">
            <div class="rounded overflow-hidden flex-shrink-0" style="width: 50px; height: 50px;">
                <img src="${item.image}" alt="${item.name}" class="w-full h-full object-cover" />
            </div>
            <div class="flex-1 min-w-0">
                <p class="font-medium text-xs sm:text-sm truncate">${item.name}</p>
                <p class="text-xs text-gray-500">Qty: ${item.quantity}</p>
            </div>
            <p class="font-bold text-green-600 text-xs sm:text-sm flex-shrink-0">$${(item.price * item.quantity).toFixed(2)}</p>
        </div>
    `).join('');

    document.getElementById('subtotal').textContent = `$${cartTotal.toFixed(2)}`;
    document.getElementById('deliveryCost').textContent = `$${deliveryCost.toFixed(2)}`;
    document.getElementById('taxAmount').textContent = `$${tax.toFixed(2)}`;
    document.getElementById('grandTotal').textContent = `$${grandTotal.toFixed(2)}`;
}

// Event Handlers
function addToCart(product) {
    const existingItem = state.cart.find(item => item.id === product.id);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        state.cart.push({ ...product, quantity: 1 });
    }
    renderCart();
}

function updateQuantity(productId, change) {
    const item = state.cart.find(item => item.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            renderCart();
        }
    }
}

function removeFromCart(productId) {
    state.cart = state.cart.filter(item => item.id !== productId);
    renderCart();
}

function openProductModal(productId) {
    const product = initialProducts.find(p => p.id === productId);
    if (!product) return;

    state.selectedProduct = product;
    state.selectedImageIndex = 0;

    const modal = document.getElementById('productModal');
    document.getElementById('productModalTitle').textContent = product.name;
    document.getElementById('productMainImage').innerHTML = `<img src="${product.images[0]}" alt="${product.name}" class="w-full h-full object-cover rounded-lg" style="max-height: 400px;" />`;
    document.getElementById('productCategoryBadge').textContent = product.category;
    document.getElementById('productPrice').textContent = `$${product.price}`;
    document.getElementById('productRating').textContent = product.rating;
    document.getElementById('productReviews').textContent = `(${product.reviews} reviews)`;
    
    const stockText = product.stock > 10 
        ? `<span class="text-green-600">In Stock</span>` 
        : `<span class="text-orange-600">Only ${product.stock} left!</span>`;
    document.getElementById('productStock').innerHTML = stockText;
    
    document.getElementById('productDescription').textContent = product.description;
    document.getElementById('productDetails').textContent = product.details;

    const thumbnails = document.getElementById('productThumbnails');
    thumbnails.innerHTML = product.images.map((img, index) => `
        <button class="imageThumbnail bg-gradient-to-br from-green-100 to-emerald-100 rounded-lg p-2 flex items-center justify-center transition-all overflow-hidden ${
            index === 0 ? 'ring-4 ring-green-600' : 'hover:ring-2 ring-green-300'
        }" data-index="${index}" style="height: 80px;">
            <img src="${img}" alt="${product.name}" class="w-full h-full object-cover rounded" />
        </button>
    `).join('');

    document.querySelectorAll('.imageThumbnail').forEach(btn => {
        btn.addEventListener('click', () => {
            const index = parseInt(btn.dataset.index);
            state.selectedImageIndex = index;
            document.getElementById('productMainImage').innerHTML = `<img src="${product.images[index]}" alt="${product.name}" class="w-full h-full object-cover rounded-lg" style="max-height: 400px;" />`;
            
            document.querySelectorAll('.imageThumbnail').forEach(b => {
                b.classList.remove('ring-4', 'ring-green-600');
                b.classList.add('hover:ring-2', 'ring-green-300');
            });
            btn.classList.add('ring-4', 'ring-green-600');
            btn.classList.remove('hover:ring-2', 'ring-green-300');
        });
    });

    modal.classList.remove('hidden');
    setTimeout(() => {
        modal.classList.remove('opacity-0');
        modal.classList.add('opacity-100');
        modal.querySelector('.bg-white').classList.remove('scale-95');
        modal.querySelector('.bg-white').classList.add('scale-100');
    }, 10);
}

function closeProductModal() {
    const modal = document.getElementById('productModal');
    modal.classList.remove('opacity-100');
    modal.classList.add('opacity-0');
    modal.querySelector('.bg-white').classList.remove('scale-100');
    modal.querySelector('.bg-white').classList.add('scale-95');
    setTimeout(() => {
        modal.classList.add('hidden');
    }, 300);
    state.selectedProduct = null;
}

function openAdvertiseModal() {
    const modal = document.getElementById('advertiseModal');
    modal.classList.remove('hidden');
    state.advertiseComplete = false;
    document.getElementById('advertiseForm').style.display = 'block';
    document.getElementById('advertiseComplete').classList.add('hidden');
    updateAdFeeDisplay();
    
    setTimeout(() => {
        modal.classList.remove('opacity-0');
        modal.classList.add('opacity-100');
        modal.querySelector('.bg-white').classList.remove('scale-95');
        modal.querySelector('.bg-white').classList.add('scale-100');
    }, 10);
}

function closeAdvertiseModal() {
    const modal = document.getElementById('advertiseModal');
    modal.classList.remove('opacity-100');
    modal.classList.add('opacity-0');
    modal.querySelector('.bg-white').classList.remove('scale-100');
    modal.querySelector('.bg-white').classList.add('scale-95');
    setTimeout(() => {
        modal.classList.add('hidden');
    }, 300);
}

function updateAdFeeDisplay() {
    const fee = getAdFee();
    const total = fee + 2.99;
    document.getElementById('adFee').textContent = `$${fee.toFixed(2)}`;
    document.getElementById('adTotal').textContent = `$${total.toFixed(2)}`;
}

function openCheckoutModal() {
    // Close cart with animation first
    const cartSidebar = document.getElementById('cartSidebar');
    const cartPanel = document.getElementById('cartSidebarPanel');
    cartSidebar.classList.remove('opacity-100');
    cartSidebar.classList.add('opacity-0');
    cartPanel.classList.remove('translate-x-0');
    cartPanel.classList.add('translate-x-full');
    
    setTimeout(() => {
        cartSidebar.classList.add('hidden');
        cartSidebar.style.display = 'none';
        
        // Open checkout modal
        const modal = document.getElementById('checkoutModal');
        modal.classList.remove('hidden');
        renderCheckoutSummary();
        state.showCheckout = true;
        
        setTimeout(() => {
            modal.classList.remove('opacity-0');
            modal.classList.add('opacity-100');
            modal.querySelector('.bg-white').classList.remove('scale-95');
            modal.querySelector('.bg-white').classList.add('scale-100');
        }, 10);
    }, 500);
}

function closeCheckoutModal() {
    const modal = document.getElementById('checkoutModal');
    modal.classList.remove('opacity-100');
    modal.classList.add('opacity-0');
    modal.querySelector('.bg-white').classList.remove('scale-100');
    modal.querySelector('.bg-white').classList.add('scale-95');
    setTimeout(() => {
        modal.classList.add('hidden');
        state.showCheckout = false;
    }, 300);
}

function toggleCart() {
    console.log('toggleCart called, current state:', state.showCart);
    state.showCart = !state.showCart;
    const cartSidebar = document.getElementById('cartSidebar');
    const cartPanel = document.getElementById('cartSidebarPanel');
    console.log('Cart sidebar element:', cartSidebar);
    
    if (state.showCart) {
        // Show and fade in
        cartSidebar.classList.remove('hidden');
        cartSidebar.style.display = 'block';
        
        // Trigger animations with slight delay for smooth effect
        setTimeout(() => {
            cartSidebar.classList.remove('opacity-0');
            cartSidebar.classList.add('opacity-100');
            cartPanel.classList.remove('translate-x-full');
            cartPanel.classList.add('translate-x-0');
        }, 10);
        console.log('Cart opened - should be visible now');
    } else {
        // Fade out and slide away
        cartSidebar.classList.remove('opacity-100');
        cartSidebar.classList.add('opacity-0');
        cartPanel.classList.remove('translate-x-0');
        cartPanel.classList.add('translate-x-full');
        
        // Wait for transition to complete before hiding
        setTimeout(() => {
            cartSidebar.classList.add('hidden');
            cartSidebar.style.display = 'none';
        }, 500);
        console.log('Cart closed');
    }
}

function toggleFilters() {
    const filtersSidebar = document.getElementById('filtersSidebar');
    const filterToggleBtn = document.getElementById('filterToggleBtn');
    const isVisible = !filtersSidebar.classList.contains('hidden');
    
    // Add click animation
    filterToggleBtn.style.transform = 'scale(0.95)';
    setTimeout(() => {
        filterToggleBtn.style.transform = 'scale(1)';
    }, 150);
    
    if (isVisible) {
        filtersSidebar.classList.add('-translate-x-full');
        filtersSidebar.classList.remove('translate-x-0');
        filterToggleBtn.classList.remove('active');
        setTimeout(() => {
            filtersSidebar.classList.add('hidden');
        }, 500);
    } else {
        filtersSidebar.classList.remove('hidden');
        setTimeout(() => {
            filtersSidebar.classList.remove('-translate-x-full');
            filtersSidebar.classList.add('translate-x-0');
        }, 10);
        filterToggleBtn.classList.add('active');
    }
}

function closeFilters() {
    const filtersSidebar = document.getElementById('filtersSidebar');
    const filterToggleBtn = document.getElementById('filterToggleBtn');
    
    filtersSidebar.classList.add('-translate-x-full');
    filtersSidebar.classList.remove('translate-x-0');
    filterToggleBtn.classList.remove('active');
    setTimeout(() => {
        filtersSidebar.classList.add('hidden');
    }, 500);
}

// Form Handlers
function handleFormInputChange(e) {
    const { name, value } = e.target;
    state.formData[name] = value;
    renderCheckoutSummary();
}

function handleAdvertiseInputChange(e) {
    const { name, value } = e.target;
    state.advertiseData[name] = value;
    if (name === 'adDuration') {
        updateAdFeeDisplay();
    }
}

function handleCheckoutSubmit(e) {
    e.preventDefault();
    
    const requiredFields = ['fullName', 'email', 'phone', 'address', 'city', 'state', 'zipCode', 'cardNumber', 'expiryDate', 'cvv'];
    const allFilled = requiredFields.every(field => state.formData[field].trim() !== '');
    
    if (!allFilled) {
        alert('Please fill in all required fields');
        return;
    }

    // Show completion screen
    document.getElementById('checkoutForm').style.display = 'none';
    document.getElementById('orderComplete').classList.remove('hidden');

    const orderNumber = `BL-${Math.floor(Math.random() * 1000000)}`;
    const cartTotal = getCartTotal();
    const deliveryCost = getDeliveryCost();
    const tax = cartTotal * 0.08;
    const grandTotal = cartTotal + deliveryCost + tax;

    document.getElementById('orderThankYou').textContent = `Thank you, ${state.formData.fullName}!`;
    document.getElementById('orderConfirmation').innerHTML = `A confirmation email has been sent to <span class="font-medium">${state.formData.email}</span>`;
    document.getElementById('orderNumber').innerHTML = `Order Number: <span class="font-bold">${orderNumber}</span>`;
    document.getElementById('orderTotal').innerHTML = `Total Paid: <span class="font-bold text-green-600">$${grandTotal.toFixed(2)}</span>`;
    document.getElementById('orderAddress').innerHTML = `<p>Your order will be delivered to:</p><p class="font-medium">${state.formData.address}, ${state.formData.city}, ${state.formData.state} ${state.formData.zipCode}</p>`;

    // Reset after 5 seconds
    setTimeout(() => {
        state.cart = [];
        state.formData = {
            fullName: '',
            email: '',
            phone: '',
            address: '',
            city: '',
            state: '',
            zipCode: '',
            cardNumber: '',
            expiryDate: '',
            cvv: '',
            deliveryOption: 'standard'
        };
        closeCheckoutModal();
        document.getElementById('checkoutForm').style.display = 'block';
        document.getElementById('orderComplete').classList.add('hidden');
        renderCart();
    }, 5000);
}

function handleAdvertiseSubmit(e) {
    e.preventDefault();
    
    const requiredFields = ['productName', 'price', 'description', 'stock', 'sellerName', 'sellerEmail', 'sellerPhone', 'cardNumber', 'expiryDate', 'cvv'];
    const allFilled = requiredFields.every(field => state.advertiseData[field].toString().trim() !== '');
    
    if (!allFilled) {
        alert('Please fill in all required fields');
        return;
    }

    // Show completion screen
    document.getElementById('advertiseForm').style.display = 'none';
    document.getElementById('advertiseComplete').classList.remove('hidden');

    const listingId = `BL-AD-${Math.floor(Math.random() * 100000)}`;
    const fee = getAdFee();
    const total = fee + 2.99;

    document.getElementById('advertiseThankYou').textContent = `Thank you, ${state.advertiseData.sellerName}!`;
    document.getElementById('advertiseProductName').innerHTML = `Your product <span class="font-medium">${state.advertiseData.productName}</span> is now live on Bloomland`;
    document.getElementById('advertiseListingId').innerHTML = `Listing ID: <span class="font-bold">${listingId}</span>`;
    document.getElementById('advertiseDuration').innerHTML = `Duration: <span class="font-bold">${state.advertiseData.adDuration} days</span>`;
    document.getElementById('advertisePaid').innerHTML = `Amount Paid: <span class="font-bold text-emerald-600">$${total.toFixed(2)}</span>`;
    document.getElementById('advertiseEmail').innerHTML = `<p>Confirmation email sent to:</p><p class="font-medium">${state.advertiseData.sellerEmail}</p>`;

    // Reset after 5 seconds
    setTimeout(() => {
        state.advertiseData = {
            productName: '',
            category: 'Flowers',
            price: '',
            description: '',
            stock: '',
            sellerName: '',
            sellerEmail: '',
            sellerPhone: '',
            cardNumber: '',
            expiryDate: '',
            cvv: '',
            adDuration: '30'
        };
        closeAdvertiseModal();
        document.getElementById('advertiseForm').style.display = 'block';
        document.getElementById('advertiseComplete').classList.add('hidden');
        document.querySelector('form#advertiseFormElement').reset();
        document.querySelector('input[name="adDuration"][value="30"]').checked = true;
    }, 5000);
}

// Initialize App
function init() {
    console.log('Initializing Bloomland Market...');
    
    // Render initial content
    renderProducts();
    renderCategories();
    renderCart();
    
    console.log('Initial render complete');

    // Event Listeners - Search
    document.getElementById('searchInput').addEventListener('input', (e) => {
        state.searchQuery = e.target.value;
        renderProducts();
    });

    // Event Listeners - Sort
    document.getElementById('sortSelect').addEventListener('change', (e) => {
        state.sortBy = e.target.value;
        renderProducts();
    });

    // Event Listeners - Price Range
    document.getElementById('priceRange').addEventListener('input', (e) => {
        state.priceRange = [0, parseInt(e.target.value)];
        document.getElementById('maxPrice').textContent = e.target.value;
        renderProducts();
    });

    // Event Listeners - Cart
    const cartBtn = document.getElementById('cartBtn');
    console.log('Setting up cart button:', cartBtn);
    
    if (cartBtn) {
        // Remove any existing listeners
        cartBtn.onclick = null;
        
        // Add click listener directly
        cartBtn.onclick = function(e) {
            console.log('Cart button clicked!');
            e.preventDefault();
            e.stopPropagation();
            toggleCart();
            return false;
        };
        
        // Also add addEventListener as backup
        cartBtn.addEventListener('click', function(e) {
            console.log('Cart button clicked via addEventListener!');
            e.preventDefault();
            e.stopPropagation();
        });
    } else {
        console.error('Cart button not found!');
    }
    
    const checkoutBtn = document.getElementById('checkoutBtn');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', openCheckoutModal);
    }

    // Event Listeners - Close Cart
    document.querySelectorAll('.closeCart').forEach(btn => {
        btn.addEventListener('click', toggleCart);
    });

    // Click outside cart to close
    document.getElementById('cartSidebar').addEventListener('click', (e) => {
        if (e.target === document.getElementById('cartSidebar')) {
            toggleCart();
        }
    });

    // Event Listeners - Mobile Filters
    document.getElementById('filterToggleBtn')?.addEventListener('click', toggleFilters);
    document.getElementById('filterCloseBtn')?.addEventListener('click', closeFilters);

    // Close filters when clicking on a category
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('categoryBtn')) {
            const filtersSidebar = document.getElementById('filtersSidebar');
            if (!filtersSidebar.classList.contains('hidden') && window.innerWidth < 1024) {
                closeFilters();
            }
        }
    });

    // Event Listeners - Product Modal
    document.querySelectorAll('.closeProductModal').forEach(btn => {
        btn.addEventListener('click', closeProductModal);
    });

    document.getElementById('productModal').addEventListener('click', (e) => {
        if (e.target === document.getElementById('productModal')) {
            closeProductModal();
        }
    });

    document.getElementById('addToCartFromModal').addEventListener('click', () => {
        if (state.selectedProduct) {
            addToCart(state.selectedProduct);
            closeProductModal();
        }
    });

    document.getElementById('buyNowFromModal').addEventListener('click', () => {
        if (state.selectedProduct) {
            addToCart(state.selectedProduct);
            closeProductModal();
            toggleCart();
            setTimeout(() => {
                toggleCart();
                openCheckoutModal();
            }, 100);
        }
    });

    // Event Listeners - Advertise Modal
    document.getElementById('sellBtn').addEventListener('click', openAdvertiseModal);

    document.querySelectorAll('.closeAdvertiseModal').forEach(btn => {
        btn.addEventListener('click', closeAdvertiseModal);
    });

    document.getElementById('advertiseModal').addEventListener('click', (e) => {
        if (e.target === document.getElementById('advertiseModal')) {
            closeAdvertiseModal();
        }
    });

    document.getElementById('advertiseFormElement').addEventListener('submit', handleAdvertiseSubmit);
    document.getElementById('advertiseFormElement').addEventListener('change', handleAdvertiseInputChange);

    // Event Listeners - Checkout Modal
    document.querySelectorAll('.closeCheckout').forEach(btn => {
        btn.addEventListener('click', closeCheckoutModal);
    });

    document.getElementById('checkoutModal').addEventListener('click', (e) => {
        if (e.target === document.getElementById('checkoutModal')) {
            closeCheckoutModal();
        }
    });

    document.getElementById('checkoutFormElement').addEventListener('submit', handleCheckoutSubmit);
    document.getElementById('checkoutFormElement').addEventListener('change', handleFormInputChange);
    document.getElementById('checkoutFormElement').addEventListener('input', handleFormInputChange);
}

// Start App
document.addEventListener('DOMContentLoaded', init);
