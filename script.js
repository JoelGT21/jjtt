let cart = [];
let cartCount = 0;

// Función para alternar el modal del carrito
function toggleCart() {
    const cartModal = document.getElementById('cart-modal');
    const overlay = document.getElementById('overlay');

    if (cartModal.style.display === 'block') {
        cartModal.style.display = 'none';
        overlay.style.display = 'none';
    } else {
        cartModal.style.display = 'block';
        overlay.style.display = 'block';
    }
}

// Función para añadir productos al carrito
function addToCart(name, price) {
    const item = cart.find(item => item.name === name);
    if (item) {
        item.quantity += 1;
    } else {
        cart.push({ name, price, quantity: 1 });
    }
    cartCount++;
    updateCartDisplay();
}

// Función para actualizar el contenido del carrito
function updateCartDisplay() {
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = '';

    cart.forEach(item => {
        const itemRow = document.createElement('div');
        itemRow.textContent = `${item.name} - $${item.price} x ${item.quantity}`;
        cartItemsContainer.appendChild(itemRow);
    });

    document.getElementById('cart-count').textContent = cartCount;
}

// Función de pago
function checkout() {
    alert("Dirigiéndose a la pasarela de pagos (esto es una simulación)");
}

// Cerrar el modal cuando se hace clic en el overlay
document.getElementById('overlay').addEventListener('click', toggleCart);
