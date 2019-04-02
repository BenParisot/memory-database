const MemoryDatabase = require('../lib/Memory');
const memory = new MemoryDatabase();

describe('Memory Database', () => {
  it('creates an empty store object', () => {
    expect(memory.store).toEqual({});
  });
  it('creates a unique identifier for the object', () => {
    expect(memory.create()._id).toEqual(expect.any(String));
  });
  it('creates a unique identifier for the object', () => {
    const object = 
    {
      name:'Bob',
      title:'president'
    };
    const expected = {
      name:'Bob',
      title:'president',
      _id: expect.any(String)
    };
    expect(memory.create(object)).toEqual(expected);
  });
  it('creates a unique identifier for the object', () => {
    const object = 
    {
      name:'Vanessa',
      title:'ceo'
    };
    const expected = {
      name:'Vanessa',
      title:'ceo',
      _id: expect.any(String)
    };
    expect(memory.create(object)).toEqual(expected);
  });
});
