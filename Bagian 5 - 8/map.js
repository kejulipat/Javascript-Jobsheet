const products = [
  { id: 1, title: "Laptop Asus", price: 1200, category: "laptops", stock: 5, rating: 4.8 },
  { id: 2, title: "Laptop Lenovo", price: 900, category: "laptops", stock: 8, rating: 4.5 },
  { id: 3, title: "Smartphone", price: 800, category: "phones", stock: 15, rating: 4.6 },
  { id: 4, title: "Keyboard", price: 75, category: "accessories", stock: 12, rating: 4.2 },
  { id: 5, title: "Monitor", price: 300, category: "displays", stock: 8, rating: 4.4 }
];

function getStatistics(products) {
  if (products.length === 0) {
    return {
      totalProducts: 0,
      averagePrice: 0,
      highestPrice: 0,
      lowestPrice: 0,
      totalStock: 0,
      averageRating: 0
    };
  }

  const prices = products.map(product => product.price);
  const totalPrice = prices.reduce((sum, price) => sum + price, 0);
  const totalRating = products.reduce((sum, product) => sum + product.rating, 0);

  return {
    totalProducts: products.length,
    averagePrice: totalPrice / products.length,
    highestPrice: Math.max(...prices),
    lowestPrice: Math.min(...prices),
    totalStock: products.reduce((sum, product) => sum + product.stock, 0),
    averageRating: totalRating / products.length
  };
}

const titles = products.map(p => p.title);
const expensiveProducts = products.filter(p => p.price > 500);
const totalStock = products.reduce((sum, p) => sum + p.stock, 0);

const laptopPrices = products
  .filter(p => p.category === "laptops")
  .map(p => p.price);

const averageLaptopPrice = laptopPrices.reduce((a, b) => a + b, 0) / laptopPrices.length;

console.log(averageLaptopPrice);
console.log(getStatistics(products));