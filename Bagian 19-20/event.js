// Bagian 19 - Event Handling

const products = [
  { id: 1, title: "Laptop", price: 1200, category: "laptops" },
  { id: 2, title: "Smartphone", price: 800, category: "phones" },
  { id: 3, title: "Headphones", price: 100, category: "audio" },
  { id: 4, title: "Keyboard", price: 75, category: "accessories" }
];

const state = {
  products,
  search: "",
  category: "all",
  sortBy: "default"
};

function getVisibleProducts(currentState) {
  const keyword = currentState.search.trim().toLowerCase();
  const filteredProducts = currentState.products.filter(product => {
    const matchesSearch = product.title.toLowerCase().includes(keyword);
    const matchesCategory = currentState.category === "all"
      || product.category === currentState.category;

    return matchesSearch && matchesCategory;
  });

  return filteredProducts.sort((firstProduct, secondProduct) => {
    if (currentState.sortBy === "price-asc") {
      return firstProduct.price - secondProduct.price;
    }

    if (currentState.sortBy === "price-desc") {
      return secondProduct.price - firstProduct.price;
    }

    if (currentState.sortBy === "title") {
      return firstProduct.title.localeCompare(secondProduct.title);
    }

    return 0;
  });
}

function render(currentState) {
  const visibleProducts = getVisibleProducts(currentState);
  const container = typeof document !== "undefined"
    ? document.querySelector("#product-list")
    : null;

  if (!container) {
    console.log("Produk terlihat:", visibleProducts);
    return visibleProducts;
  }

  container.replaceChildren();

  if (visibleProducts.length === 0) {
    container.textContent = "Produk tidak ditemukan.";
    return visibleProducts;
  }

  for (const product of visibleProducts) {
    const item = document.createElement("article");
    item.classList.add("product-card");
    item.textContent = `${product.title} - $${product.price} - ${product.category}`;
    container.append(item);
  }

  return visibleProducts;
}

function connectEvents() {
  const searchInput = document.querySelector("#search-input");
  const categorySelect = document.querySelector("#category-select");
  const sortSelect = document.querySelector("#sort-select");

  searchInput?.addEventListener("input", event => {
    state.search = event.target.value;
    render(state);
  });

  categorySelect?.addEventListener("change", event => {
    state.category = event.target.value;
    render(state);
  });

  sortSelect?.addEventListener("change", event => {
    state.sortBy = event.target.value;
    render(state);
  });

  render(state);
}

if (typeof document !== "undefined") {
  connectEvents();
} else {
  render(state);
}
