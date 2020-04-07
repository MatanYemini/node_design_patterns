class CatalogGroup {
  constructor(name, comoposites = []) {
    this.name = name;
    this.comoposites = comoposites;
  }
  get total() {
    return this.comoposites.reduce(
      (total, nextItem) => total + nextItem.total,
      0
    );
  }

  print() {
    console.log(`\n${this.name.toUpperCase()}`);
    this.comoposites.forEach(item => item.print());
  }
}

module.exports = CatalogGroup;
