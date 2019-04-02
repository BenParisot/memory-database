const MemoryDatabase = require('../lib/Memory');
const memory = new MemoryDatabase();

describe('Memory Database', () => {
  it('creates an empty store object', () => {
    expect(memory.store).toEqual({});
  });
  it('creates a unique identifier for the object', () => {
    expect(memory.create()).toEqual(expect.any(String));
  });
});
