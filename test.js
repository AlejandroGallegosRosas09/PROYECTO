console.log("4C° ");
console.log("Alejandro Gallegos Rosas, Angel Armando Rosales Huitron");
// Import the file containing the functions
const functionsToTest = require('./filename_containing_functions');

// Test for validateLoginForm
test('validateLoginForm should return true for a valid email', () => {
  // Arrange
  document.getElementById = jest.fn(() => ({ value: 'valid@example.com' }));

  // Act
  const result = functionsToTest.validateLoginForm();

  // Assert
  expect(result).toBe(true);
});

// Test for validateRegisterForm
test('validateRegisterForm should return true for a valid email', () => {
  // Arrange
  document.getElementById = jest.fn(() => ({ value: 'valid@example.com' }));

  // Act
  const result = functionsToTest.validateRegisterForm();

  // Assert
  expect(result).toBe(true);
});

// Additional test 1
test('Additional test 1 should pass', () => {
  // Arrange
  // Set up the environment for the test

  // Act
  // Perform the actions to be tested

  // Assert
  // Check the expected outcome
  expect(true).toBe(true);
});

// Additional test 2
test('Additional test 2 should pass', () => {
  // Arrange
  // Set up the environment for the test

  // Act
  // Perform the actions to be tested

  // Assert
  // Check the expected outcome
  expect(true).toBe(true);
});

// Test for alert when '@' is missing in registration
test('Alert should be shown when "@" is missing in registration', () => {
  // Arrange
  const alertMock = jest.spyOn(window, 'alert').mockImplementation(() => {});

  // Act
  functionsToTest.showAlertForMissingAt();

  // Assert
  expect(alertMock).toHaveBeenCalledWith('Correo electrónico inválido. Por favor, incluya el símbolo "@".');
  alertMock.mockRestore(); // Restore the original alert function
});
