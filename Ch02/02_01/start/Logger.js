class Logger {
  constructor() {
    this.logs = [];
  }

  get count() {
    return this.logs.length;
  }

  log(message) {
    const timestamp = new Date().toISOString();
    this.logs.push({ message, timestamp });
    console.log(`${timestamp} - ${message}`);
  }
}

class Singelton {
  constructor() {
    if (!Singelton.instance) {
      Singelton.instance = new Logger();
    }
  }

  getInstance() {
    return Singelton.instance;
  }
}

module.exports = Singelton;
