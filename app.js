import { filters, products } from "./data.js";

const searchInput = document.getElementById("search-input");
const filterContainer = document.querySelector(".filters");
const productsContainer = document.querySelector(".results");
const filterSelects = showFilters();

showProducts(products);

searchInput.oninput = handleChangeFilter;
filterContainer.onchange = handleChangeFilter;

function showFilters() {
  filterContainer.innerHTML = filters.map(buildFilterMarkup).join("");

  return Array.from(filterContainer.querySelectorAll("select"));
}

function buildFilterMarkup(filter) {
  const { id, name, values } = filter;

  return `
    <fieldset>
      <legend>${name}</legend>
      <select data-id="${id}">
        <option value="">Все</option>
        ${values.map(buildOptionMarkup).join("")}
      </select>
    </fieldset>
  `;
}

function buildOptionMarkup(value) {
  return `<option value="${value}">${value}</option>`;
}

function showProducts(products) {
  productsContainer.innerHTML = products.map(buildProductMarkup).join("");
}

function buildProductMarkup(product) {
  const { title, description, params: {year, color, country, category}, count, cost } = product;

  return `
    <li class="card">
      <img src="img/1.jpg" alt="" class="card__img">

      <div class="card__content">
        <h3 class="card_title">${title}</h3>
        <div class="card__description">${description}</div>
        <div class="card__info">
          <div class="card__params">
            <label for="">Год</label>
            <div id="year">${year}</div>
          </div>
          <div class="card__params">
            <label for="">Цвет:</label>
            <div id="color">${color}</div>
          </div>
          
          <div class="card__params">
            <label for="">Страна</label>
            <div id="country">${country}</div>
          </div>
          <div class="card__params">
            <label for="">Категория:</label>
            <div id="color">${category}</div>
          </div>
        </div>
        <div class="card__footer">
          <div class="card__count ${
            count === 0 ? "card__count_empty" : ""
          }">
            <label for="">Количество:</label>
            <div id="count">${count || "Нет в наличии"}</div>
          </div>
          <div class="card__cost">
            <label for="">Цена:</label>
            <div id="count">${cost}</div>
          </div>
        </div>
      </div>
    </li>
  `;
}

function handleChangeFilter() {
  const selectedFilters = filterSelects
    .map(select => [select.dataset.id, select.value]);

  const filteredProducts = products.filter(({ params }) => {
    return selectedFilters.every(([id, value]) => {
      if (!value) return true;

      return params[id] === value;
    });
  });

  showProducts(filteredProducts.filter(satisfiesSearch));
}

function satisfiesSearch(product) {
  const search = searchInput.value.trim().toLowerCase();

  if (!search) return true;

  const { title, description, params: {year, color, country, category} } = product;

  const pruductValues = [title, description, year, color, country, category].map(String).map(value => value.toLowerCase());
  
  return pruductValues.some(value => value.includes(search));
}
