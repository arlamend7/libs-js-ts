import { formatter } from '../../src/utils';

test('formatter CPF', () => {
  expect(formatter.CPF('10161280706')).toBe('101.612.807-06');
  expect(formatter.CPF('101.612.80706')).toBe('101.612.807-06');
  expect(formatter.CPF('101.61280706')).toBe('101.612.807-06');
  expect(formatter.CPF('101612')).toBe('101.612');
  expect(formatter.CPF('101612807')).toBe('101.612.807');
});
test('formatter CNPJ', () => {
    expect(formatter.CNPJ("50638487000100")).toBe("50.638.487/0001-00");
    expect(formatter.CNPJ("506384870001")).toBe("50.638.487/0001");
});

test('formatter CellPhone', () => {
  expect(formatter.CellPhone('27992284737')).toBe('(27) 99228-4737');
  expect(formatter.CellPhone('2799228')).toBe('(27) 99228');
  expect(formatter.CellPhone('27992284')).toBe('(27) 99228-4');
});
