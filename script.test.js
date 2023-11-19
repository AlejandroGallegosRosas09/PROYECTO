// tests/script.test.js
const { validateLoginForm, validateRegisterForm } = require('../script-server'); // Adjust the path as needed

test('validateLoginForm should return true for a valid email', () => {
  const result = validateLoginForm('test@example.com');
  expect(result).toBe(true);
});

test('validateLoginForm should return false for an invalid email', () => {
  const result = validateLoginForm('testexample.com');
  expect(result).toBe(false);
});

test('validateRegisterForm should return true for a valid email', () => {
  const result = validateRegisterForm('test@example.com');
  expect(result).toBe(true);
});

test('validateRegisterForm should return false for an invalid email', () => {
  const result = validateRegisterForm('testexample.com');
  expect(result).toBe(false);
});
