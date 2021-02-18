import '../../src/common';

var array = [1, 2, 3];
var arrayObject = [{ idade: 1 }, { idade: 22 }, { idade: 30 }];
test('array extension', () => {
  expect(array.Sum()).toBe(6);
  expect(array.Min()).toBe(1);
  expect(array.Max()).toBe(3);
  expect(arrayObject.Sum((x) => x.idade)).toBe(53);
  expect(arrayObject.Min((x) => x.idade)).toBe(1);
  expect(arrayObject.Max((x) => x.idade)).toBe(30);
});

test('string extension', () => {
  expect('2a3b4c'.JustNumbers()).toBe('234');
  expect('2a3b4c'.isNullOrWhiteSpace()).toBe(false);
  expect(''.isNullOrWhiteSpace()).toBe(true);
});

test('number extension', () => {
    expect([...10]).toStrictEqual([0,1,2,3,4,5,6,7,8,9,10]);
});

var date = new Date();
test('date extension', () => {
    expect(date.SameAs(date)).toBe(true);
    expect(date.SameAs(new Date(date.valueOf()-10))).toBe(false);
    expect(date.isBeetween(new Date(date.valueOf()-1000),new Date(date.valueOf()+1000))).toBe(true);
    expect(date.isBeetween(new Date(date.valueOf()),new Date(date.valueOf()+10))).toBe(false);
    expect(date.isBeetween(new Date(date.valueOf()-10),new Date(date.valueOf()))).toBe(false);
    expect(date.isBeetween(new Date(date.valueOf()+10),new Date(date.valueOf()-10))).toBe(false);
});