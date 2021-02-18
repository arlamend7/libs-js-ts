import { ValidarCNPJ } from './functions/validator.cnpj';
import { ValidarCPF } from './functions/validator.cpf';
import '../../common';
class Validator {
  private invalidString = (str: string) =>
    str === undefined || str === null || !str.length || str === str[0].repeat(str.length);
  public CPF(str: string): boolean {
    if (this.invalidString(str)) {
      return false;
    }
    return ValidarCPF(str.JustNumbers());
  }
  public CNPJ(str: string): boolean {
    if (this.invalidString(str)) {
      return false;
    }
    return ValidarCNPJ(str.JustNumbers());
  }
  public CellPhone(str: string): boolean {
    if (this.invalidString(str)) {
      return false;
    }
    return str.JustNumbers().length > 10;
  }
}

export const validator = new Validator();
