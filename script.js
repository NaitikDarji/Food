// Initialize the cart
let cart = [];

// Function to add items to the cart
function addToCart(item) {
    cart.push(item);
    displayCart();
}

// Function to display the cart items
function displayCart() {
    const cartItemsList = document.getElementById("cart-items");
    cartItemsList.innerHTML = "";  // Clear current items

    cart.forEach(item => {
        const listItem = document.createElement("li");
        listItem.textContent = item;
        cartItemsList.appendChild(listItem);
    });
}

// Function to place the order
function placeOrder() {
    if (cart.length > 0) {
        alert("Your order has been placed! Thank you for choosing FastFood Delivery.");
        cart = [];  // Clear cart after placing order
        displayCart();  // Update cart display
    } else {
        alert("Your cart is empty! Please add items to the cart.");
    }
}
