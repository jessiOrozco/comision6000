import { getCartItems } from "./cart.js";

const products = [
    {
        id: 1,
        name: "Cafe",
        price: 10,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/1200px-A_small_cup_of_coffee.JPG"
    },
    {
        id: 2,
        name: "Cafe con leche",
        price: 20,
        image: "https://i.blogs.es/421374/cafe-con-leche2/450_1000.jpg"
    },
    {
        id: 3,
        name: "Té",
        price: 40,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6e61krKMDX3eMCv626q25pZauJK_f3U9MQQ&s"
    },
    {
        id:4,
        name: "Sandwich",
        price: 60,
        image: "https://www.unileverfoodsolutions.com.mx/dam/global-ufs/mcos/NOLA/calcmenu/recipes/MX-recipes/In-Development/FULL-SAND.png"
    },
    {
        id:5,
        name: "Chapata",
        price: 80,
        image: "https://editorialtelevisa.brightspotcdn.com/0f/32/18c73dfb4154b2d737ddc65e2e9d/chapatas-receta-facil-y-rapida.jpg"
    },
    {
        id:6,
        name: "Pan Dulce",
        price: 50,
        image: "https://www.victordzul.com/wp-content/uploads/2023/12/image-12.png"
    }
];

export const renderProducts = () => {
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
     <div class="cart__item">
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
};