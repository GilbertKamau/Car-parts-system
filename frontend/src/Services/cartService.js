// cartService.js

const cartService = {
    cart: [],
  
    addToCart: (item) => {
      // Add item to cart
      cartService.cart.push(item);
    },
  
    removeFromCart: (itemId) => {
      // Remove item from cart by itemId
      cartService.cart = cartService.cart.filter((item) => item.id !== itemId);
    },
  
    updateItemQuantity: (itemId, quantity) => {
      // Update quantity of an item in the cart
      cartService.cart = cartService.cart.map((item) =>
        item.id === itemId ? { ...item, quantity } : item
      );
    },
  
    getCartContents: () => {
      // Return the current cart contents
      return cartService.cart;
    },
  
    calculateTotalPrice: () => {
      // Calculate total price of items in the cart
      return cartService.cart.reduce((total, item) => total + item.price * item.quantity, 0);
    },
  
    clearCart: () => {
      // Clear the cart
      cartService.cart = [];
    },
  
    // Simulated backend API interaction for persistent storage
    saveCartToBackend: () => {
      // Simulate sending the cart data to a backend API
      console.log('Saving cart to backend:', cartService.cart);
      // You would typically make a network request to save the cart data
    },
  
    // Simulated backend API interaction for loading cart from persistent storage
    loadCartFromBackend: () => {
      // Simulate fetching the cart data from a backend API
      const savedCart = [{ id: 1, name: 'Item 1', price: 10, quantity: 1 }]; // Example cart data
      cartService.cart = savedCart;
    },
  };
  
  export default cartService;
  