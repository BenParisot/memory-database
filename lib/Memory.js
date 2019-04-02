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
  findById(id) {
    if(!this.store[id]) {
      return null;
    }
    return this.store[id];
  }
}

module.exports = MemoryDatabase;
