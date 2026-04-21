const { suma, esMayorDeEdad } = require('./suma');

test('suma 2 + 3 debe ser 5', () => {
  expect(suma(2, 3)).toBe(5);
});

test('suma negativa funciona', () => {
  expect(suma(-1, -1)).toBe(-2);
});

test('mayor de edad con 18', () => {
  expect(esMayorDeEdad(18)).toBe(true);
});

test('menor de edad con 17', () => {
  expect(esMayorDeEdad(17)).toBe(false);
});
