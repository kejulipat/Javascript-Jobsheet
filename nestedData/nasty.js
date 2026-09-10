//Bagian 3 — Nested Data

const products = [
  {
    id: 1,
    title: "Laptop",
    price: 1200,
    rating: 4.5,
    stock: 10,
    category: "laptops",
    tags: ["computer", "electronics", "office"],
    dimensions: { width: 30, height: 2, depth: 20 },
    reviews: [
      { user: "A", rating: 5, comment: "Good product" },
      { user: "B", rating: 4, comment: "Worth it" }
    ]
  },
  {
    id: 2,
    title: "Smartphone",
    price: 800,
    rating: 4.2,
    stock: 15,
    category: "phones",
    tags: ["mobile", "electronics"],
    dimensions: { width: 7, height: 0.8, depth: 15 },
    reviews: [
      { user: "C", rating: 4, comment: "Nice camera" },
      { user: "D", rating: 5, comment: "Fast" },
      { user: "E", rating: 3, comment: "Battery so-so" }
    ]
  }
];

//Ambil semua tag dari seluruh produk menjadi satu array.
//(boleh masih berbentuk array di dalam array, akan diratakan pada Bagian 4).
const semuaTags = products.map(product => product.tags).flat();
console.log("semua:", semuaTags);

//Buat function findProductsByTag(products, tag) yang mengembalikan semua produk yang memiliki tag tertentu.
function cariProdukTag(products, tag) {
  return products.filter(product => product.tags.includes(tag));
}
console.log("produk elektronik:", cariProdukTag(products, "electronics"));

//Hitung jumlah review pada setiap produk, hasilkan { id, title, totalReviews }.
const jumlahReview = products.map(product => ({
  id: product.id,
  title: product.title,
  totalReviews: product.reviews.length
}));
console.log(jumlahReview);

//Dari seluruh produk, kumpulkan review yang ratingnya 5.
const reviewBintangLima = products.flatMap(product =>
  product.reviews.filter(review => review.rating === 5)
);
console.log(reviewBintangLima);

//Hitung rata-rata rating dari array reviews pada setiap produk 
// (bukan dari field rating yang sudah tersedia, tapi dihitung ulang secara manual).
const ratingRata = products.map(product => {
  let totalRating = 0;

  for (const review of product.reviews) {
    totalRating += review.rating;
  }

  return {
    id: product.id,
    title: product.title,
    averageRating: totalRating / product.reviews.length
  };
});
console.log(ratingRata);

//Temukan produk dengan jumlah review terbanyak.
const produkBanyakReview = products.reduce((mostReviewed, product) =>
  product.reviews.length > mostReviewed.reviews.length
    ? product
    : mostReviewed
);
console.log(produkBanyakReview);

//Kumpulkan seluruh nilai rating dari semua review di semua produk menjadi satu array datar.
const semuaReview = products.flatMap(product =>
  product.reviews.map(review => review.rating)
);
console.log(semuaReview);