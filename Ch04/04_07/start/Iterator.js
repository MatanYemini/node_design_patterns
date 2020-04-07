class Iterator {
  constructor(items = []) {
    this.index = 0;
    this.items = items;
  }

  first() {
    var [first] = this.items;
    return first;
  }

  last() {
    var [last] = [...this.items].reverse();
    return last;
  }

  prev() {}

  next() {}

  current() {
    return this.items[this.index];
  }

  hasNext() {
    return this.index < this.items.length - 1;
  }

  hasPrev() {
    return this.index !== 0;
  }
}

module.exports = Iterator;
