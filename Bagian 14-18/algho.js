// Bagian 16 - Algorithm Complexity (Big-O)

function linearSearchWithSteps(array, target) {
  let steps = 0;

  for (let index = 0; index < array.length; index++) {
    steps += 1;

    if (array[index] === target) {
      return { index, steps };
    }
  }

  return { index: -1, steps };
}

function binarySearchWithSteps(sortedArray, target) {
  let left = 0;
  let right = sortedArray.length - 1;
  let steps = 0;

  while (left <= right) {
    const middle = Math.floor((left + right) / 2);
    steps += 1;

    if (sortedArray[middle] === target) {
      return { index: middle, steps };
    }

    if (sortedArray[middle] < target) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }

  return { index: -1, steps };
}

function findPairsWithNestedLoop(products) {
  const pairs = [];

  for (let first = 0; first < products.length; first++) {
    for (let second = first + 1; second < products.length; second++) {
      if (products[first].category === products[second].category) {
        pairs.push([products[first], products[second]]);
      }
    }
  }

  return pairs;
}

function findPairsWithGrouping(products) {
  const groups = new Map();
  const pairs = [];

  for (const product of products) {
    if (!groups.has(product.category)) {
      groups.set(product.category, []);
    }

    const sameCategoryProducts = groups.get(product.category);
    for (const previousProduct of sameCategoryProducts) {
      pairs.push([previousProduct, product]);
    }
    sameCategoryProducts.push(product);
  }

  return pairs;
}

const numbers = Array.from({ length: 10000 }, (_, index) => index + 1);
const target = 10000;

console.log("Linear search:", linearSearchWithSteps(numbers, target));
console.log("Binary search:", binarySearchWithSteps(numbers, target));

const products = [
  { id: 1, category: "audio" },
  { id: 2, category: "office" },
  { id: 3, category: "audio" },
  { id: 4, category: "office" }
];

console.log("Pasangan dengan nested loop:", findPairsWithNestedLoop(products));
console.log("Pasangan dengan grouping:", findPairsWithGrouping(products));
