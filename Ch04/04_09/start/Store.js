class Store {
  constructor(name) {
    this.name = name;
    this.subscribes = [];
  }

  subscribe(observer) {
    this.subscribes.push(observer);
  }

  sale(discount) {
    this.subscribes.forEach(observer => observer.notify(this.name, discount));
  }
}

module.exports = Store;
