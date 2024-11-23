import { getCartItems } from "./cart.js";

let products = []

async function cargaMenu(){
    const response = await fetch("./data/menu.json");
    products = await response.json();
}

export const renderProducts = async () => {
    await cargaMenu()
    const productList = document.getElementById("productList");
    products.forEach((product) => {
        const productCard = document.createElement("article");
        productCard.classList.add("product");
        productCard.setAttribute("data-id", product.id);

        productCard.innerHTML = `
      <div>
        <img class="product__image" src="${product.image}" alt="${
            product.name
        }" />
      </div>
      <div>
        <h5 class="product__title">${product.name}</h5>
        <p class="product__price">$${product.price.toFixed(2)}</p>
      </div>
      <button class="product__add">Agregar</button>
    `;
        productList.append(productCard);
    });
};

export const updateCartUi = () => {
    const cartContainer = document.querySelector(".cart__container");

    cartContainer.innerHTML = "";
    const cartItems = getCartItems();

    cartItems.forEach((item) => {
        const cartItem = document.createElement("div");
        cartItem.classList.add("cart__item");
        cartItem.setAttribute("data-id", item.id);

        cartItem.innerHTML = `
     <div>
        <div class="cart__item-title">${item.title}</div>
        <div>${item.price}</div>
        <div>${item.quantity}</div>
        <div>
          <button class="cart__increase">+</button>
          <button class="cart__decrease">-</button>
          <button class="cart__remove">Eliminar</button>
        </div>
      </div>
    
    `;
        cartContainer.appendChild(cartItem);
    });
    updateTotalCart()
};

const updateTotalCart = () => {
    let total = 0;
    const cartTotal = document.querySelector(".cart__totalPrice");

    const cartItems = getCartItems()
    cartItems.forEach((item) => {
        let priceitem = item.price.replace("$", "");
        let priceNumber = Number(priceitem);
        total = total + priceNumber*item.quantity;
    })
    cartTotal.innerHTML = "Total: $" + total.toFixed(2);

}