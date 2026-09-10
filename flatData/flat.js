const tags = [
    ["computer", "office"],
    ["electronics"],
    ["gaming", "computer"]
];
console.log(tags.flat()); 
tags.flat();
// ["computer", "office", "electronics", "gaming", "computer"]

//nambahin comment buat review
const products = [
{
    title: "Laptop",
    tags: ["computer", "office"],
    reviews: [
        { comment: "Good product" },
        { comment: "Worth it" }
    ]
},

{
    title: "Phone",
    tags: ["mobile"],
    reviews: [
        { comment: "Nice camera" }
    ]
}
];
const allTags = products.flatMap(p => p.tags);
// ["computer", "office", "mobile"]

//Ambil seluruh tags dari semua produk menjadi satu array menggunakan flatMap().
const semuaTags = products.flatMap(p => p.tags);
console.log(semuaTags);

//Ambil seluruh comment dari semua review di semua produk menjadi satu array of strings.
const semuaComment = products.flatMap(p => p.reviews.map(r => r.comment));
console.log(semuaComment);