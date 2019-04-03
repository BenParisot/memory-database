const MemoryDatabase = require('../lib/Memory');

describe('Memory Database', () => {
  let memory = null;
  beforeEach(() => {
    memory = new MemoryDatabase();
  });
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
    console.log(memory.store);
  });
  it('finds object by id', () => {
    const input = 
      {
        name:'Vanessa',
        title:'ceo'
      };
    const object = memory.create(input);
    const uid = object['_id'];
    const result = memory.findById(uid);
    expect(result).toEqual(object);
  });
  it('returns null on invalid id', () => {
    const result = memory.findById('jkdjkjdfag');
    expect(result).toEqual(null);
  });
  it('returns what is stored in store', () => {
    const input = 
    {
      name:'Vanessa',
      title:'ceo'
    };
    const input2 = 
    {
      name:'Banessa',
      title:'cfo'
    };
    const object = memory.create(input);
    const object2 = memory.create(input2);
    const result = memory.find();
    expect(result).toEqual([object, object2]);
    console.log(result);
  });
});
