const uid = require('uuid/v4');

class MemoryDatabase {
  constructor() {
    this.store = {};
  }
  create(objectToSave) {
    // const uid = uid();
    const userObject = { ...objectToSave, _id: uid() };
    return userObject;
  }
}

module.exports = MemoryDatabase;
