const name = "Budi";
console.log(`Halo, ${name}`);

// fungsi hitung harga diskon
function calculateDiscountedPrice(price, discountPercent) {
  return price - (price * discountPercent) / 100;
}

//  
const cart = [
  {title: "Laptop", price: 1000, discountPercent: 10 },
  {title: "Mouse", price: 20, discountPercent: 5 },
  {title: "Keyboard", price: 50, discountPercent: 0 }
];

// fungsi hitung harga
function applyDiscounts(cart) {
  const result = [];
  for (const item of cart) {
    result.push(item.price - (item.price * item.discountPercent) / 100);
  }
  return result;
}
// nampilin diskon
console.log(applyDiscounts(cart));