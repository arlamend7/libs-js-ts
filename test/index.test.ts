import {Paginar} from "../src/common/index"
import '../src/common/extensions/array.extension'
import '../src/common/extensions/number.extension'
test('Paginar', () => {
  expect(Paginar([])).toStrictEqual({Total : 0, Registros : []});
  expect(Paginar([1])).toStrictEqual({Total : 1, Registros : [1]});
});
test('array extension', () => {
  expect([1,2,3].Sum()).toBe(6);
  expect([...3]).toStrictEqual([0,1,2,3])
})