//Bagian 2 — Data Representation dan Array of Objects

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
{ id: 10, title: "Microphone", price: 150, category: "audio", stock: 9 },
{ id: 11, title: "Webcam", price: 80, category: "cameras", stock: 14 },
{ id: 12, title: "Printer", price: 200, category: "office", stock: 6 },
{ id: 13, title: "Router", price: 120, category: "networking", stock: 11 },
{ id: 14, title: "Power Bank", price: 45, category: "accessories", stock: 25 },
{ id: 15, title: "USB Flash Drive", price: 20, category: "storage", stock: 30 },
{ id: 16, title: "External Hard Drive", price: 110, category: "storage", stock: 13 },
{ id: 17, title: "SSD", price: 130, category: "storage", stock: 16 },
{ id: 18, title: "Gaming Chair", price: 350, category: "furniture", stock: 5 },
{ id: 19, title: "Desk Lamp", price: 40, category: "office", stock: 18 },
{ id: 20, title: "Bluetooth Speaker", price: 90, category: "audio", stock: 10 },
{ id: 21, title: "Game Console", price: 500, category: "gaming", stock: 6 },
{ id: 22, title: "Game Controller", price: 65, category: "gaming", stock: 17 },
{ id: 23, title: "VR Headset", price: 600, category: "gaming", stock: 3 },
{ id: 24, title: "E-Reader", price: 180, category: "tablets", stock: 8 },
{ id: 25, title: "Smart TV", price: 700, category: "displays", stock: 4 },
{ id: 26, title: "Projector", price: 400, category: "displays", stock: 5 },
{ id: 27, title: "Tripod", price: 55, category: "cameras", stock: 12 },
{ id: 28, title: "Laptop Stand", price: 60, category: "accessories", stock: 19 },
{ id: 29, title: "Wireless Charger", price: 30, category: "accessories", stock: 22 },
{ id: 30, title: "Noise Cancelling Earbuds", price: 160, category: "audio", stock: 9 }
];

function findProductById(products, id) {
  return products.find(product => product.id === id);
}

function cariProdukDikit(products) {
    return products.filter(product => product.stock < 5);
}

function updateStock(products, id, newStock) {
    return products.map(product => 
        product.id === id ? { ...product, stock: newStock } : product
    );
}

console.log(findProductById(products, 2 ));
console.log(cariProdukDikit(products));
console.log(updateStock(products, 1, 10));