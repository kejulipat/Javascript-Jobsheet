const products = [
  { id: 1, title: "Laptop", category: "laptops", tags: ["computer", "office"], rating: 4.5, brand: "TechPro" },
  { id: 2, title: "Smartphone", category: "phones", tags: ["mobile", "electronics"], rating: 4.2, brand: "PhoneMax" },
  { id: 3, title: "Headphones", category: "audio", tags: ["audio", "electronics"], rating: 4.5, brand: "SoundBox" },
  { id: 4, title: "Keyboard", category: "accessories", tags: ["computer", "office"], rating: 4.0, brand: "TechPro" },
  { id: 5, title: "Mouse", category: "accessories", tags: ["computer", "gaming"], rating: 4.2, brand: "TechPro" },
  { id: 6, title: "Monitor", category: "displays", tags: ["computer", "office"], rating: 4.8, brand: "ViewMax" },
  { id: 7, title: "Tablet", category: "tablets", tags: ["mobile", "electronics"], rating: 4.0 },
  { id: 8, title: "Camera", category: "cameras", tags: ["photography", "electronics"], rating: 4.8, brand: "ViewMax" }
];

function countFrequency(array) {
  return array.reduce((counts, item) => {
    counts[item] = (counts[item] || 0) + 1;
    return counts;
  }, {});
}

const categoryFrequency = countFrequency(products.map(product => product.category));
const tagFrequency = countFrequency(products.flatMap(product => product.tags));
const ratingFrequency = countFrequency(products.map(product => Math.round(product.rating)));
const brandFrequency = countFrequency(
  products.filter(product => product.brand).map(product => product.brand)
);

console.log("Frekuensi category:", categoryFrequency);
console.log("Frekuensi tags:", tagFrequency);
console.log("Frekuensi rating:", ratingFrequency);
console.log("Frekuensi brand:", brandFrequency);
