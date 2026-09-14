// Bagian 18 - State Management Sederhana

const products = [
  { id: 1, title: "Laptop", price: 1200, category: "laptops", rating: 4.8, stock: 5 },
  { id: 2, title: "Smartphone", price: 800, category: "phones", rating: 4.6, stock: 15 },
  { id: 3, title: "Headphones", price: 100, category: "audio", rating: 4.5, stock: 3 },
  { id: 4, title: "Keyboard", price: 75, category: "accessories", rating: 4.2, stock: 12 }
];

const state = {
  products,
  search: "",
  category: "all",
  sortBy: "default",
  favorites: [],
  status: "success"
};

function getVisibleProducts(currentState) {
  const search = currentState.search.trim().toLowerCase();

  const filteredProducts = currentState.products.filter(product => {
    const matchesSearch = product.title.toLowerCase().includes(search);
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

    if (currentState.sortBy === "rating") {
      return secondProduct.rating - firstProduct.rating;
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
    console.log("State saat ini:", currentState);
    console.log("Produk terlihat:", visibleProducts);
    return visibleProducts;
  }

  container.replaceChildren();

  if (currentState.status === "loading") {
    container.textContent = "Loading...";
    return visibleProducts;
  }

  if (currentState.status === "error") {
    container.textContent = "Gagal memuat produk.";
    return visibleProducts;
  }

  if (visibleProducts.length === 0) {
    container.textContent = "Produk tidak ditemukan.";
    return visibleProducts;
  }

  for (const product of visibleProducts) {
    const card = document.createElement("article");
    card.classList.add("product-card");
    card.textContent = `${product.title} - $${product.price} - ${product.category}`;
    container.append(card);
  }

  return visibleProducts;
}

function updateSearch(search) {
  state.search = search;
  return render(state);
}

function updateCategory(category) {
  state.category = category;
  return render(state);
}

function updateSort(sortBy) {
  state.sortBy = sortBy;
  return render(state);
}

render(state);
updateSearch("phone");
updateSearch("");
updateSort("price-desc");
