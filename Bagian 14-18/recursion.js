// Bagian 15 - Recursion

const categories = [
  {
    name: "Electronics",
    children: [
      { name: "Laptop", children: [] },
      {
        name: "Mobile Devices",
        children: [
          { name: "Phone", children: [] },
          { name: "Tablet", children: [] }
        ]
      }
    ]
  },
  { name: "Furniture", children: [] }
];

function printCategories(categories, depth = 0) {
  for (const category of categories) {
    console.log("  ".repeat(depth) + category.name);

    if (category.children.length > 0) {
      printCategories(category.children, depth + 1);
    }
  }
}

function getCategoryNames(categories) {
  return categories.reduce((names, category) => {
    names.push(category.name);

    if (category.children.length > 0) {
      names.push(...getCategoryNames(category.children));
    }

    return names;
  }, []);
}

console.log("Hierarki kategori:");
printCategories(categories);
console.log("Semua nama kategori:", getCategoryNames(categories));
