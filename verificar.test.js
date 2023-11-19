// verificar.test.js
const { validarCorreo } = require('./verificar');

test('Validar correo con "@" debería retornar "Correo Validado"', () => {
  const result = validarCorreo('test@example.com');
  expect(result).toBe('Correo Validado con Éxito');
});

test('Validar correo sin "@" debería retornar mensaje de error', () => {
  const result = validarCorreo('testexample.com');
  expect(result).toBe('La dirección de correo electrónico debe contener el símbolo \'@\'.');
});

test('Validar correo vacío debería retornar mensaje de error', () => {
  const result = validarCorreo('');
  expect(result).toBe('La dirección de correo electrónico debe contener el símbolo \'@\'.');
});

test('Validar correo con espacios en blanco debería retornar mensaje de error', () => {
  const result = validarCorreo('test@example .com');
  expect(result).toBe('La dirección de correo electrónico no debe contener espacios en blanco.');
});

test('Validar correo con varios "@" debería retornar mensaje de error', () => {
  const result = validarCorreo('test@example@.com');
  expect(result).toBe('La dirección de correo electrónico solo puede contener un símbolo \'@\'.');
});
