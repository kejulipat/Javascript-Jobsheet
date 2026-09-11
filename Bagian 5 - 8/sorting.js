// Sorting dengan built-in method.
const numbers = [5, 3, 8, 1];
const ascendingNumbers = [...numbers].sort((a, b) => a - b);
const descendingNumbers = [...numbers].sort((a, b) => b - a);

console.log(ascendingNumbers);
console.log(descendingNumbers);

// Latihan 8.1: Bubble sort tanpa memutasi array input.
function bubbleSort(numbers) {
	const sortedNumbers = [...numbers];

	for (let i = 0; i < sortedNumbers.length - 1; i++) {
		let swapped = false;

		for (let j = 0; j < sortedNumbers.length - 1 - i; j++) {
			if (sortedNumbers[j] > sortedNumbers[j + 1]) {
				[sortedNumbers[j], sortedNumbers[j + 1]] = [
					sortedNumbers[j + 1],
					sortedNumbers[j]
				];
				swapped = true;
			}
		}

		if (!swapped) {
			break;
		}
	}

	return sortedNumbers;
}

console.log(bubbleSort(numbers));
console.log(numbers);

// Latihan 8.2: Mengurutkan produk berdasarkan pilihan sortBy.
function sortProducts(products, sortBy) {
	const sortedProducts = [...products];

	if (sortBy === "price-asc") {
		return sortedProducts.sort((a, b) => a.price - b.price);
	}

	if (sortBy === "price-desc") {
		return sortedProducts.sort((a, b) => b.price - a.price);
	}

	if (sortBy === "rating") {
		return sortedProducts.sort((a, b) => b.rating - a.rating);
	}

	if (sortBy === "title") {
		return sortedProducts.sort((a, b) => a.title.localeCompare(b.title));
	}

	return sortedProducts;
}

const products = [
	{ id: 1, title: "Laptop Asus", price: 1200, rating: 4.8 },
	{ id: 2, title: "Laptop Lenovo", price: 900, rating: 4.5 },
	{ id: 3, title: "Smartphone", price: 800, rating: 4.6 },
	{ id: 4, title: "Keyboard", price: 75, rating: 4.2 }
];

console.log(sortProducts(products, "price-asc"));
console.log(sortProducts(products, "price-desc"));
console.log(sortProducts(products, "rating"));
console.log(sortProducts(products, "title"));
