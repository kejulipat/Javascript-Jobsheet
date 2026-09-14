const products = [
  { id: 1, title: "Laptop", price: 1200, category: "laptops", stock: 5 },
  { id: 2, title: "Smartphone", price: 800, category: "phones", stock: 15 },
  { id: 3, title: "Headphones", price: 100, category: "audio", stock: 3 },
  { id: 4, title: "Keyboard", price: 75, category: "accessories", stock: 12 },
  { id: 5, title: "Mouse", price: 35, category: "accessories", stock: 20 },
  { id: 6, title: "Monitor", price: 300, category: "displays", stock: 8 },
  { id: 7, title: "Tablet", price: 450, category: "tablets", stock: 10 },
  { id: 8, title: "Smartwatch", price: 250, category: "wearables", stock: 7 },
  { id: 9, title: "Camera", price: 900, category: "cameras", stock: 4 },
  { id: 10, title: "Microphone", price: 150, category: "audio", stock: 9 }
];

function groupByCategory(products) {
  return products.reduce((groups, product) => {
    const category = product.category;

    if (!groups[category]) {
      groups[category] = [];
    }

    groups[category].push(product);
    return groups;
  }, {});
}

function summarizeCategories(products) {
  return products.reduce((summary, product) => {
    const category = product.category;

    if (!summary[category]) {
      summary[category] = {
        category,
        totalProducts: 0,
        totalStock: 0,
        totalValue: 0
      };
    }

    summary[category].totalProducts += 1;
    summary[category].totalStock += product.stock;
    summary[category].totalValue += product.price * product.stock;
    return summary;
  }, {});
}

const groupedProducts = groupByCategory(products);
const categorySummary = summarizeCategories(products);

console.log("Produk berdasarkan kategori:", groupedProducts);
console.table(Object.values(categorySummary));
