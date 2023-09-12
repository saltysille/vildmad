const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

fetch("https://szmeszolzqvldfshrvhu.supabase.co/rest/v1/vildmad" + id)
  .then((respnse) => respnse.json())
  .then((data) => showProduct(data));

function showProduct(product) {
  console.log(product);
  document.querySelector(".purchaseBox h3").textContent = product.productdisplayname;
  document.querySelector(".purchaseBox .brand").textContent = product.brandname;
  document.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
  document.querySelector("p span").textContent = product.price;
  document.querySelector(".description").textContent = product.description;
}