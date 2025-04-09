// Sample data for items for sale
const itemsForSale = [
    { id: 'item1', name: 'Apple', price: 1.99, image: 'apple.jpg' },
    { id: 'item2', name: 'Banana', price: 0.99, image: 'banana.jpg' },
    { id: 'item3', name: 'Orange', price: 2.49, image: 'orange.jpg' }
];

// Cart to hold the added items
let cart = [];

// Function to display items for sale
function displayItems() {
    const itemList = document.getElementById('item-list');
    itemList.innerHTML = '';  // Clear existing items
    
    itemsForSale.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('item');
        itemDiv.innerHTML = `
            <img src="${item.image}" alt="${item.name}" width="50" height="50">
            <span>${item.name}</span>
            <span>$${item.price}</span>
            <button onclick="addToCart('${item.id}')">Add to Cart</button>
        `;
        itemList.appendChild(itemDiv);
    });
}

// Function to add an item to the cart
function addToCart(itemId) {
    const item = itemsForSale.find(item => item.id === itemId);
    if (item) {
        cart.push(item);
        displayCart();
    }
}

// Function to display the cart contents and total price
function displayCart() {
    const cartSummary = document.getElementById('cart-summary');
    cartSummary.innerHTML = '';  // Clear existing cart summary

    if (cart.length === 0) {
        cartSummary.innerHTML = 'Your cart is empty.';
        return;
    }

    let total = 0;
    cart.forEach((item, index) => {
        const cartItemDiv = document.createElement('div');
        cartItemDiv.classList.add('cart-item');
        cartItemDiv.innerHTML = `
            <img src="${item.image}" alt="${item.name}" width="50" height="50">
            <span>${item.name}</span>
            <span>$${item.price}</span>
            <button onclick="removeFromCart(${index})">Remove from Cart</button>
        `;
        cartSummary.appendChild(cartItemDiv);
        total += item.price;
    });

    const totalDiv = document.createElement('div');
    totalDiv.innerHTML = `<strong>Total: $${total.toFixed(2)}</strong>`;
    cartSummary.appendChild(totalDiv);
}

// Function to remove an item from the cart
function removeFromCart(index) {
    cart.splice(index, 1);  // Remove item from cart
    displayCart();  // Re-display the updated cart
}

// Initial display of items
displayItems();

