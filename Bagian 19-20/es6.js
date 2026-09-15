// Bagian 20 - Modern JavaScript (ES6+)

const products = [
  {
    id: 1,
    title: "Laptop",
    price: 1200,
    category: "laptops",
    stock: 5,
    dimensions: { width: 30, height: 2, depth: 20 }
  },
  {
    id: 2,
    title: "Smartphone",
    price: 800,
    category: "phones",
    stock: 15,
    dimensions: { width: 7, height: 0.8, depth: 15 }
  },
  {
    id: 3,
    title: "Keyboard",
    price: 75,
    category: "accessories",
    stock: 12
  }
];

function getProductLabel({ title, price }) {
  return `${title} - $${price}`;
}

function sumPrices(...prices) {
  return prices.reduce((total, price) => total + price, 0);
}

function filterByCategory(productList, category = "all") {
  if (category === "all") {
    return [...productList];
  }

  return productList.filter(product => product.category === category);
}

function updateStock(product, newStock) {
  return { ...product, stock: newStock };
}

function getStatistics(productList) {
  if (productList.length === 0) {
    return {
      totalProducts: 0,
      averagePrice: 0,
      totalStock: 0,
      averageWidth: 0
    };
  }

  const totalPrice = productList.reduce((total, { price }) => total + price, 0);
  const totalStock = productList.reduce((total, { stock }) => total + stock, 0);
  const totalWidth = productList.reduce(
    (total, product) => total + (product.dimensions?.width ?? 0),
    0
  );

  return {
    totalProducts: productList.length,
    averagePrice: totalPrice / productList.length,
    totalStock,
    averageWidth: totalWidth / productList.length
  };
}

const [firstProduct, ...remainingProducts] = products;
const mergedProducts = [...products, { id: 4, title: "Mouse", price: 35 }];
const updatedProduct = updateStock(firstProduct, 10);

console.log("Label produk:", getProductLabel(firstProduct));
console.log("Produk pertama:", firstProduct);
console.log("Sisa produk:", remainingProducts);
console.log("Jumlah harga:", sumPrices(...products.map(product => product.price)));
console.log("Produk kategori laptops:", filterByCategory(products, "laptops"));
console.log("Produk tanpa kategori filter:", filterByCategory(products));
console.log("Produk setelah update stock:", updatedProduct);
console.log("Array hasil spread:", mergedProducts);
console.log("Statistik:", getStatistics(products));
