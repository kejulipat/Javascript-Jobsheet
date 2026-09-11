function linearSearch(array, target) {
	for (let i = 0; i < array.length; i++) {
		if (array[i] === target) {
			return i;
		}
	}

	return -1;
}

const numbers = [10, 25, 30, 45, 50];

console.log(linearSearch(numbers, 30));
console.log(linearSearch(numbers, 99));

const products = [
	{ id: 1, title: "Laptop Asus", price: 1200 },
	{ id: 2, title: "Laptop Lenovo", price: 900 },
	{ id: 3, title: "Smartphone", price: 800 },
	{ id: 4, title: "Keyboard", price: 75 }
];

function findProductById(products, targetId) {
	for (let i = 0; i < products.length; i++) {
		if (products[i].id === targetId) {
			return products[i];
		}
	}

	return -1;
}

console.log(findProductById(products, 2));
console.log(findProductById(products, 99));
