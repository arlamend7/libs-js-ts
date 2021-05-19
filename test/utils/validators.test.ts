import { validator} from '../../src/utils'

test('Validar CPF', () => {
    expect(validator.CPF('10161280706')).toBe(true);
    expect(validator.CPF('101.612.807-06')).toBe(true);
    expect(validator.CPF('10161280703')).toBe(false);
    expect(validator.CPF('77777777777')).toBe(false);
});

test('Validar CNPJ', () => {
    expect(validator.CNPJ('50.638.487/0001-00')).toBe(true);
    expect(validator.CNPJ('0'.repeat(14))).toBe(false);
    expect(validator.CNPJ('50638487000100')).toBe(true);
    expect(validator.CNPJ('5063848700010')).toBe(false);
    expect(validator.CNPJ('77777777777773')).toBe(false);
});

test('Validar CellPhone', () => {
    expect(validator.CellPhone('(27) 992284737')).toBe(true);
    expect(validator.CellPhone('27992284737')).toBe(true);
    expect(validator.CellPhone('(27) 99228473')).toBe(false);
    expect(validator.CellPhone('992284737')).toBe(false);
});
