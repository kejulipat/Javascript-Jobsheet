class Stack {
  constructor() {
    this.items = [];
  }

  push(item) {
    this.items.push(item);
  }

  pop() {
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

const searchHistory = new Stack();
searchHistory.push("laptop");
searchHistory.push("phone");
searchHistory.push("tablet");

console.log("Pencarian terakhir:", searchHistory.peek());
console.log("Undo search:", searchHistory.pop());
console.log("Pencarian setelah undo:", searchHistory.peek());
console.log("Isi search history:", searchHistory.items);
console.log("Apakah search history kosong?", searchHistory.isEmpty());
