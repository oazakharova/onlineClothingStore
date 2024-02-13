"use strict";

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

  const btnAddToCartEl = document.createElement("a");
  btnAddToCartEl.classList.add("btnAddToCart");
  btnAddToCartEl.href = "cart.html";
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
