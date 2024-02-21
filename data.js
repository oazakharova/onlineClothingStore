"use strict";

// заполнение раздела товарами из json

const dataProductsJSON = `[
  {
    "productId": "1",
    "productImage": "images/1.png",
    "productAlt":"item",
    "productLink" : "product.html",
    "productName": "MANGO PEOPLE T-SHIRT",
    "productDescription":"Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
    "productPrice": "300",
    "productPriceCurrency":"$",
    "productColor": "Red",
    "productSize": "XL",
    "productQuantity": "2"
  },
  {
    "productId": "2",
    "productImage": "images/2.png",
    "productAlt":"item",
    "productLink" : "product.html",
    "productName": "ELLERY X M'O CAPSULE",
    "productDescription":"Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
    "productPrice": "300",
    "productPriceCurrency":"$",
    "productColor": "Red",
    "productSize": "XL",
    "productQuantity": "2"
  },
  {
    "productId": "3",
    "productImage": "images/3.png",
    "productAlt":"item",
    "productLink" : "product.html",
    "productName": "ELLERY X M'O CAPSULE",
    "productDescription":"Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
    "productPrice": "300",
    "productPriceCurrency":"$",
    "productColor": "Red",
    "productSize": "XL",
    "productQuantity": "2"
  }
  ,
  {
    "productId": "4",
    "productImage": "images/4.png",
    "productAlt":"item",
    "productLink" : "product.html",
    "productName": "ELLERY X M'O CAPSULE",
    "productDescription":"Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
    "productPrice": "300",
    "productPriceCurrency":"$",
    "productColor": "Red",
    "productSize": "XL",
    "productQuantity": "2"
  },
  {
    "productId": "5",
    "productImage": "images/5.png",
    "productAlt":"item",
    "productLink" : "product.html",
    "productName": "ELLERY X M'O CAPSULE",
    "productDescription":"Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
    "productPrice": "300",
    "productPriceCurrency":"$",
    "productColor": "Red",
    "productSize": "XL",
    "productQuantity": "2"
  },
  {
    "productId": "6",
    "productImage": "images/6.png",
    "productAlt":"item",
    "productLink" : "product.html",
    "productName": "ELLERY X M'O CAPSULE",
    "productDescription":"Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
    "productPrice": "300",
    "productPriceCurrency":"$",
    "productColor": "Red",
    "productSize": "XL",
    "productQuantity": "2"
  }
]`;

const dataProducts = JSON.parse(dataProductsJSON);

const featuredWrapContainerEl = document
  .querySelector(".featuredWrap")
  .querySelector(".container");

dataProducts.forEach((el) => {
  const featuredItemEl = document.createElement("article");
  featuredItemEl.classList.add("featuredItem");
  featuredItemEl.id = el.productId;
  featuredWrapContainerEl.append(featuredItemEl);

  const featuredItemLinkEl = document.createElement("a");
  featuredItemLinkEl.classList.add("featuredItemLink");
  featuredItemLinkEl.href = el.productLink;
  featuredItemEl.append(featuredItemLinkEl);

  const productImgEl = document.createElement("img");
  productImgEl.src = el.productImage;
  productImgEl.alt = el.productAlt;
  featuredItemLinkEl.append(productImgEl);

  const btnAddToCartWrapEl = document.createElement("div");
  btnAddToCartWrapEl.classList.add("btnAddToCartWrap");
  featuredItemEl.append(btnAddToCartWrapEl);

  const btnAddToCartEl = document.createElement("button");
  btnAddToCartEl.classList.add("btnAddToCart");
  // btnAddToCartEl.href = "cart.html";
  btnAddToCartWrapEl.append(btnAddToCartEl);

  const btnAddToCartIconEl = document.createElement("i");
  btnAddToCartIconEl.classList.add(
    "fa-solid",
    "fa-cart-arrow-down",
    "btnAddToCart__icon"
  );
  btnAddToCartEl.append(btnAddToCartIconEl);

  const btnAddToCartCallEl = document.createElement("div");
  btnAddToCartCallEl.classList.add("btnAddToCart__call");
  btnAddToCartCallEl.textContent = "Add To Cart";
  btnAddToCartEl.append(btnAddToCartCallEl);

  const featuredItemNameEl = document.createElement("a");
  featuredItemNameEl.classList.add("featuredItemName");
  featuredItemNameEl.href = el.productLink;
  featuredItemNameEl.textContent = el.productName;
  featuredItemEl.append(featuredItemNameEl);

  const featuredItemDescriptionEl = document.createElement("div");
  featuredItemDescriptionEl.classList.add("featuredItemDescription");
  featuredItemDescriptionEl.textContent = el.productDescription;
  featuredItemEl.append(featuredItemDescriptionEl);

  const featuredItemPriceEl = document.createElement("div");
  featuredItemPriceEl.classList.add("featuredItemPrice");
  featuredItemEl.append(featuredItemPriceEl);

  const featuredItemPriceCurrencyEl = document.createElement("span");
  featuredItemPriceCurrencyEl.classList.add("featuredItemPriceCurrency");
  featuredItemPriceCurrencyEl.textContent = el.productPriceCurrency;
  featuredItemPriceEl.append(featuredItemPriceCurrencyEl);

  const featuredItemPriceValueEl = document.createElement("span");
  featuredItemPriceValueEl.classList.add("featuredItemPriceValue");
  featuredItemPriceValueEl.textContent = el.productPrice;
  featuredItemPriceEl.append(featuredItemPriceValueEl);
});

const btnAddToCartElements = document.querySelectorAll(".btnAddToCart");
btnAddToCartElements.forEach((el) => {
  el.addEventListener("click", () => {
    // открытие превью корзины при добавлении товара в корзину,
    // так как на лого корзины в хедере пока ссылка на страницу с корзиной
    cartWrapEl.classList.add("transparentBcg");
    cartEl.classList.add("showCart");

    // запоминание товара, по кнопке которого был клик
    const selectedItemWrapId = el.parentElement.parentElement.id;

    const selectedProduct = dataProducts.find((o) => {
      if (o.productId === selectedItemWrapId) {
        return o;
      }
    });
    const previewCartСontentEl = document.querySelector(".previewCartСontent");

    // добавление товара в корзину
    const selectedItem = document.createElement("div");
    selectedItem.innerHTML = `
    <div class="selectedItemWrap" id="${selectedProduct.productId}">
          <i class="fa-solid fa-xmark toCloseButton"></i>
          <img src="${selectedProduct.productImage}" alt="selected item">
          <div class="selectedItemWrapDescription">
            <a class="featuredItemLink" href="#">
              ${selectedProduct.productName}
            </a>
            <div class="userChoiсePrice">
              <div>Price: </div>
              <div>$${selectedProduct.productPrice}</div>
            </div>
            <div class="userChoiсeColor">
              <div>Color:</div>
              <div>${selectedProduct.productColor}</div>
            </div>
            <div class="userChoiсeSize">
              <div>Size:</div>
              <div>${selectedProduct.productSize}</div>
            </div>
            <div class="userChoiсeQuantity">
              <div>Quantity:</div>
              <input type="number" class="itemQuality" min="1" max="${selectedProduct.productQuantity}" value="1">
            </div>
          </div>
        </div>
    `;
    previewCartСontentEl.append(selectedItem);

    // удаление товара из корзины
    const toCloseItemButtonEl = document.querySelector(".toCloseButton");
    toCloseItemButtonEl.addEventListener("click", (e) => {
      e.target.parentElement.remove();
    });
  });
});

// закрытие корзины
const cartWrapEl = document.querySelector(".previewCartWrap");
const cartEl = document.querySelector(".cart");
const closeCartBtnEl = document.querySelector(".closeСart");

closeCartBtnEl.addEventListener("click", () => {
  cartWrapEl.classList.remove("transparentBcg");
  cartEl.classList.remove("showCart");
});
