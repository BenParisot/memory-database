const uuid = require('uuid/v4');

class MemoryDatabase {
  constructor() {
    this.store = {};
  }
  create(objectToSave) {
    const uid = uuid();
    const userObject = { ...objectToSave, _id: uid };
    this.store[uid] = userObject;
    return userObject;
  }
}

module.exports = MemoryDatabase;
