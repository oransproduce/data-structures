class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.count = 0;
    this.front = 0;
    this.currentIndex = 0;
    this.stored = {};
  }

  enqueue(value) {
    this.stored[this.currentIndex] = value;
    this.count++;
    this.currentIndex++;
  }

  dequeue() {
    if (this.count > 0) {
      let result = this.stored[this.front];
      delete this.stored[this.front];
      this.count--;
      this.front++;
      return result;
    }

  }

  size() {
    return this.count;
  }
}

