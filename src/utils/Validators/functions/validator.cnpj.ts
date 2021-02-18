export function ValidarCNPJ(str: string) {
  const firstDigito = str.substring(12, 13);
  const secDigito = str.substring(13, 14);

  let primDigitoValido = false;
  let secDigitoValido = false;

  const primParte = str.substring(0, 12);
  const secParte = str.substring(0, 13);
  let soma = 0;

  let j = 0;
  let numbers;

  let resto;
  let result;

  for (let i = 5; i >= 2; i--) {
    numbers = primParte.substring(j, j + 1);
    soma = soma + parseInt(numbers, 10) * i;
    j++;
  }

  for (let i = 9; i >= 2; i--) {
    numbers = primParte.substring(j, j + 1);
    soma = soma + parseInt(numbers, 10) * i;
    j++;
  }

  resto = soma % 11;
  result = 11 - resto;
  if (resto < 2 && firstDigito === '0') {
    primDigitoValido = true;
  } else if (resto >= 2 && parseInt(firstDigito, 10) === result) {
    primDigitoValido = true;
  } else {
    return false;
  }

  // segundo digito
  j = 0;
  soma = 0;
  for (let i = 6; i >= 2; i--) {
    numbers = secParte.substring(j, j + 1);
    soma = soma + parseInt(numbers, 10) * i;
    j++;
  }

  for (let i = 9; i >= 2; i--) {
    numbers = secParte.substring(j, j + 1);
    soma = soma + parseInt(numbers, 10) * i;
    j++;
  }

  resto = soma % 11;
  result = 11 - resto;

  if (resto < 2 && secDigito === '0') {
    secDigitoValido = true;
  } else if (resto >= 2 && parseInt(secDigito, 10) === result) {
    secDigitoValido = true;
  } else {
    return false;
  }

  return secDigitoValido && primDigitoValido;
}
