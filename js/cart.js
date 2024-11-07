const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

export const createProduct = (id, title, price) => ({ id, title, price });

export const getCartItems = () => {
    return JSON.parse(localStorage.getItem("cartItems"));
};

export const addToCart = (product, quantity) => {
    const existsInTheCart = cartItems.find((item) => item.id === product.id);

    if (existsInTheCart) {
        existsInTheCart.quantity += 1;
    } else {
        cartItems.push({ ...product, quantity });
    }
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
};