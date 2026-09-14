// Bagian 17 - DOM Manipulation

function renderProducts(products, container = document.querySelector("#product-list")) {
  if (!container) {
    throw new Error("Element #product-list tidak ditemukan.");
  }

  container.replaceChildren();

  for (const product of products) {
    const card = document.createElement("article");
    card.classList.add("product-card");

    const image = document.createElement("img");
    image.src = product.thumbnail || "";
    image.alt = product.title;

    const title = document.createElement("h3");
    title.textContent = product.title;

    const category = document.createElement("p");
    category.textContent = `Kategori: ${product.category}`;

    const price = document.createElement("p");
    price.textContent = `Harga: $${product.price}`;

    const rating = document.createElement("p");
    rating.textContent = `Rating: ${product.rating ?? "Tidak tersedia"}`;

    const stock = document.createElement("p");
    stock.textContent = `Stok: ${product.stock ?? "Tidak tersedia"}`;

    card.append(image, title, category, price, rating, stock);
    container.append(card);
  }
}

const demoProducts = [
  {
    title: "Laptop",
    category: "laptops",
    price: 1200,
    rating: 4.8,
    stock: 5,
    thumbnail: "https://dummyjson.com/image/200x120/ddd/000&text=Laptop"
  },
  {
    title: "Smartphone",
    category: "phones",
    price: 800,
    rating: 4.6,
    stock: 15,
    thumbnail: "https://dummyjson.com/image/200x120/ddd/000&text=Phone"
  }
];

if (typeof document !== "undefined") {
  const productList = document.querySelector("#product-list");

  if (productList) {
    renderProducts(demoProducts, productList);
  }
}
