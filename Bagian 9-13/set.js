const products = [
  { id: 1, title: "Laptop", category: "laptops", brand: "TechPro", tags: ["computer", "office"] },
  { id: 2, title: "Smartphone", category: "phones", brand: "PhoneMax", tags: ["mobile", "electronics"] },
  { id: 3, title: "Headphones", category: "audio", brand: "SoundBox", tags: ["audio", "electronics"] },
  { id: 4, title: "Keyboard", category: "accessories", brand: "TechPro", tags: ["computer", "office"] },
  { id: 5, title: "Mouse", category: "accessories", brand: "TechPro", tags: ["computer", "gaming"] },
  { id: 6, title: "Tablet", category: "tablets", tags: ["mobile", "electronics"] }
];

function getUniqueCategories(products) {
  return [...new Set(products.map(product => product.category))];
}

function getUniqueBrands(products) {
  return [...new Set(
    products.filter(product => product.brand).map(product => product.brand)
  )];
}

function getUniqueTags(products) {
  return [...new Set(products.flatMap(product => product.tags))];
}

const uniqueCategories = getUniqueCategories(products);
const uniqueBrands = getUniqueBrands(products);
const uniqueTags = getUniqueTags(products);

console.log("Unique category:", uniqueCategories);
console.log("Unique brand:", uniqueBrands);
console.log("Unique tags:", uniqueTags);
console.log("Apakah tag 'computer' tersedia?", new Set(uniqueTags).has("computer"));
