function binarySearch(sortedArray, target) {
	let left = 0;
	let right = sortedArray.length - 1;

	while (left <= right) {
		const mid = Math.floor((left + right) / 2);

		if (sortedArray[mid] === target) {
			return mid;
		}

		if (sortedArray[mid] < target) {
			left = mid + 1;
		} else {
			right = mid - 1;
		}
	}

	return -1;
}

const sortedNumbers = [10, 20, 30, 40, 50, 60, 70];

console.log(binarySearch(sortedNumbers, 40));
console.log(binarySearch(sortedNumbers, 45));


