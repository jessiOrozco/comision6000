import {addToCart, createProduct, deleteFromCart, increaseFromCart, removeFromCart} from "./cart.js";
import { renderProducts, updateCartUi } from "./ui.js";

document.addEventListener("DOMContentLoaded", () => {
    renderProducts();
    updateCartUi();
});

//BOTÓN Abrir y cerrar Sidebar
const cartOpenButton = document.querySelector(".cart__openButton");
const cartSidebar = document.querySelector(".cart__sidebar");
const cartCloseButton = document.querySelector(".cart__close");

cartOpenButton.addEventListener("click", () => {
    cartSidebar.classList.add("cart__sidebar--open");
});

cartCloseButton.addEventListener("click", () => {
    cartSidebar.classList.remove("cart__sidebar--open");
});

document.getElementById("productList").addEventListener("click", (event) => {
    if (event.target.classList.contains("product__add")) {
        const card = event.target.closest(".product");
        const productTitle = card.querySelector(".product__title").innerText;
        const productPrice = card.querySelector(".product__price").innerText;
        const productId = card.getAttribute("data-id");

        const product = createProduct(productId, productTitle, productPrice);

        addToCart(product, 1);
        updateCartUi();
    }
});

document.getElementById("cartItems").addEventListener("click", (event) => {
    if (event.target.classList.contains("cart__decrease")) {
        const item = event.target.closest(".cart__item");
        const dataid=item.getAttribute("data-id");
        const productTitle = item.querySelector(".cart__item-title").innerText;
        removeFromCart(productTitle);
        updateCartUi();
    }
})

document.getElementById("cartItems").addEventListener("click", (event) => {
    if (event.target.classList.contains("cart__increase")) {
        const item = event.target.closest(".cart__item");
        console.log(item);
        const dataid=item.getAttribute("data-id");
        const productTitle = item.querySelector(".cart__item-title").innerText;
        increaseFromCart(productTitle);
        updateCartUi();
    }
})

document.getElementById("cartItems").addEventListener("click", (event) => {
    if (event.target.classList.contains("cart__remove")) {
        const item = event.target.closest(".cart__item");
        const dataid=item.getAttribute("data-id");
        const productTitle = item.querySelector(".cart__item-title").innerText;
        deleteFromCart(productTitle);
        updateCartUi();
    }
})