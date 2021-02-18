export function ValidarCPF(strCPF: string) {
  let firstDigito = strCPF.substring(9, 10);
  let secDigito = strCPF.substring(10, 11);

  let primDigitoValido = false;
  let secDigitoValido = false;

  let primParte = strCPF.substring(0, 9);
  let secParte = strCPF.substring(0, 10);
  let soma = 0;

  let j = 0;
  let number;

  let resto;
  let result;

  for (let i = 10; i >= 2; i--) {
    number = primParte.substring(j, j + 1);
    soma = soma + parseInt(number, 10) * i;
    j++;
  }

  resto = soma % 11;
  result = 11 - resto;
  if (result > 9 && firstDigito === '0') {
    primDigitoValido = true;
  } else if (result <= 9 && parseInt(firstDigito, 10) === result) {
    primDigitoValido = true;
  } else {
    return false;
  }

  // segundo digito
  j = 0;
  soma = 0;
  for (let i = 11; i >= 2; i--) {
    number = secParte.substring(j, j + 1);
    soma = soma + parseInt(number, 10) * i;
    j++;
  }

  resto = soma % 11;
  result = 11 - resto;
  if (result > 9 && secDigito === '0') {
    secDigitoValido = true;
  } else if (result <= 9 && parseInt(secDigito, 10) === result) {
    secDigitoValido = true;
  } else {
    return false;
  }
  return secDigitoValido && primDigitoValido;
}
