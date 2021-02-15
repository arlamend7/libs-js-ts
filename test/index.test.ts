import {Paginar} from "../src/index"

test('Paginar', () => {
  expect(Paginar([])).toStrictEqual({Total : 0, Registros : []});
  expect(Paginar([1])).toStrictEqual({Total : 1, Registros : [1]});
});