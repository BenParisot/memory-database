const MemoryDatabase = require('../lib/Memory');

describe('Memory Database', () => {
  it('creates an empty store object', () => {
    const memory = new MemoryDatabase();
    expect(memory.store).toEqual({});
  });
});
