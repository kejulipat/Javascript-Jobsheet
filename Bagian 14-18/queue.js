// Bagian 14 - Queue (FIFO)

class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(item) {
    this.items.push(item);
  }

  dequeue() {
    return this.items.shift();
  }

  peek() {
    return this.items[0];
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

const requestQueue = new Queue();
requestQueue.enqueue("Request produk #1");
requestQueue.enqueue("Request produk #2");
requestQueue.enqueue("Request produk #3");

console.log("Request berikutnya:", requestQueue.peek());
console.log("Request diproses:", requestQueue.dequeue());
console.log("Request diproses:", requestQueue.dequeue());
console.log("Request tersisa:", requestQueue.items);
console.log("Apakah queue kosong?", requestQueue.isEmpty());
