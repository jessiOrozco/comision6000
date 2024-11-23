let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

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

export const removeFromCart = (product) => {
    console.log(product);
    console.log(cartItems);
    let existsInTheCart = cartItems.find((item) => item.title === product);
    console.log(existsInTheCart);
    if (existsInTheCart) {
        if (existsInTheCart.quantity > 1) {
            existsInTheCart.quantity -= 1;
            localStorage.setItem("cartItems", JSON.stringify(cartItems));
        }else if (existsInTheCart.quantity <= 1) {
            Toastify({
                text: "No se puede reducir mas la cantidad",
                duration: 3000,
                close: true,
                gravity: "top",
            }).showToast()
        }else{
            Toastify({
                text: "No funciona",
                duration: 3000,
                close: true,
                gravity: "top",
            }).showToast()
        }
    }
}

export const increaseFromCart = (product) => {
    const existsInTheCart = cartItems.find((item) => item.title === product);
    if (existsInTheCart) {
        existsInTheCart.quantity += 1;
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }
}

export const deleteFromCart = (product) => {
    cartItems = cartItems.filter((item) => item.title !== product);
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
}