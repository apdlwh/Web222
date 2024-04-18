
function addToCart(product) {
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];


    cartItems.push(product);

   
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    alert(product.name + ' is added to cart');
}
function calculateTotal() {
    let subtotal = 0;
    let taxRate = 0.13; 
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    cartItems.forEach(item => {
        subtotal += parseFloat(item.price);
    });
    let tax = subtotal * taxRate;
    let total = subtotal + tax;
    return {
        subtotal: (subtotal / 100).toFixed(2), 
        tax: (tax / 100).toFixed(2), 
        total: (total / 100).toFixed(2) 
    };
}


function displayCartItems() {
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    let cartItemsContainer = document.getElementById('cart-items');

    cartItemsContainer.innerHTML = '';

    cartItems.forEach(item => {
        let itemElement = document.createElement('div');
        itemElement.classList.add('item');
        let itemName = document.createElement('div');
        itemName.classList.add('item-name');
        itemName.textContent = item.name;

        let itemPrice = document.createElement('div');
        itemPrice.classList.add('item-price');
        itemPrice.textContent = `$${(item.price / 100).toFixed(2)}`;

        let removeButton = document.createElement('button');
        removeButton.textContent = 'X';
        removeButton.classList.add('remove-button');
        removeButton.onclick = function() {
            removeItem(item);
        };
        itemElement.appendChild(itemName);
        itemElement.appendChild(itemPrice);
        itemElement.appendChild(removeButton);
        cartItemsContainer.appendChild(itemElement);
    });
    let summary = calculateTotal();
    document.getElementById('subtotal').textContent = `Subtotal: $${summary.subtotal}`;
    document.getElementById('tax').textContent = `Tax (13%): $${summary.tax}`;
    document.getElementById('total').textContent = `Total: $${summary.total}`;
}



document.addEventListener('DOMContentLoaded', function() {
    displayCartItems();
});

function clearCart() {
    localStorage.removeItem('cartItems');
    window.location.reload();
}

function removeItem(item) {
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    let index = cartItems.findIndex(cartItem => cartItem.id === item.id);
    if (index !== -1) {
        cartItems.splice(index, 1);
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        displayCartItems();
    }
}
function checkout() {
    window.location.href = 'checkout.html';
}














