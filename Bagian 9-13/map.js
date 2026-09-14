const products = [
  { id: 1, title: "Laptop", price: 1200, category: "laptops", stock: 5 },
  { id: 2, title: "Smartphone", price: 800, category: "phones", stock: 15 },
  { id: 3, title: "Headphones", price: 100, category: "audio", stock: 3 },
  { id: 4, title: "Keyboard", price: 75, category: "accessories", stock: 12 },
  { id: 5, title: "Mouse", price: 35, category: "accessories", stock: 20 }
];

function buildProductLookup(products) {
  const productMap = new Map();

  for (const product of products) {
    productMap.set(product.id, product);
  }

  return productMap;
}

function groupProductsByCategory(products) {
  const categoryMap = new Map();

  for (const product of products) {
    if (!categoryMap.has(product.category)) {
      categoryMap.set(product.category, []);
    }

    categoryMap.get(product.category).push(product);
  }

  return categoryMap;
}

const productLookup = buildProductLookup(products);
const categoryMap = groupProductsByCategory(products);
const foundProduct = productLookup.get(2);

console.log("Produk dengan id 2:", foundProduct);
console.log("Apakah id 99 tersedia?", productLookup.has(99));
console.log("Jumlah produk dalam lookup:", productLookup.size);
console.log("Grouping berdasarkan kategori:", [...categoryMap.entries()]);
