const uid = require('uuid/v4');

class MemoryDatabase {
  constructor() {
    this.store = {};
  }
  create() {
    return this.uid = uid();
  }
}

module.exports = MemoryDatabase;
