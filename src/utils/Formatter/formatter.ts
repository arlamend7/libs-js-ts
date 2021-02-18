class Formatter {
  get CONST_REGEX() {
    return {
      CPF: /^(\d{3})?\.?(\d{3})?\.?(\d{3})?\-?(\d{2})?$/,
      CNPJ: /^(\d{2})?\.?(\d{3})?\.?(\d{3})?\/?(\d{4})?\-?(\d{2})?$/,
      CELLPHONE: /\(?(\d{2})?\)?(\d{5})?\-?(\d{4})?/,
    };
  }
  public CPF(text: string): string {
    return this.Format(text, this.CONST_REGEX.CPF, '$1.$2.$3-$4');
  }
  public CNPJ(text: string): string {
    return this.Format(text, this.CONST_REGEX.CNPJ, '$1.$2.$3/$4-$5');
  }
  public CellPhone(text: string): string {
    return this.Format(text, this.CONST_REGEX.CELLPHONE, '($1) $2-$3');
  }

  private Format(text: string, type: RegExp, newTextRegex: string) {
    return this.RemoveNotNumber(text.replace(type, newTextRegex));
  }
  private RemoveNotNumber(text: string): string {
    return /([^0-9]*)$/.exec(text)?.shift() ? this.RemoveNotNumber(text.substring(0, text.length - 1)) : text;
  }
}

export const formatter = new Formatter();
