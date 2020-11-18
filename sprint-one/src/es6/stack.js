class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  constructor() {
    this.count = 0;
    this.currentIndex = 0;
    this.stored = {};
  }

  push(value) {
    this.stored[this.currentIndex] = value;
    this.currentIndex++;
    this.count++;
  }

  pop() {
    if (this.count > 0) {
      let result = this.stored[this.currentIndex - 1];
      this.count--;
      delete this.stored[this.currentIndex - 1];
      this.currentIndex--;
      return result;
    }

  }

  size() {
    return this.count;
  }
}
