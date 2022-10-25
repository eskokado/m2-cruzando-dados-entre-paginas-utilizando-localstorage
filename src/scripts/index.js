import { data } from "./data.js";

const root = document.querySelector('.root');
root.classList.add('container');
root.classList.add('main');

const renderAllProducts = (products) => {
  products.map((elem) => {
    root.insertAdjacentHTML(
      `beforeend`,
      `
    <div data-product="${elem.id}" class="product">
      <img src=${elem.image} alt=${elem.name} >
      <h2>${elem.name}</h2>
      <p>R$ ${elem.price}</p>
    </div>
    `,
    );
  });
};
renderAllProducts(data);