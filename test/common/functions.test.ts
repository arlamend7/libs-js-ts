import {Paginar} from "../../src/common"

test('Paginar', () => {
  expect(Paginar([])).toStrictEqual({Total : 0, Registros : []});
  expect(Paginar([1])).toStrictEqual({Total : 1, Registros : [1]});
});