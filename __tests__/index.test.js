import reverse from '../src/index.js';

test('reverse', () => {
  // TODO: здесь будет чтение файла и запись его содержимого в константу
  const text = 'Hello';
  const result = 'olleH';

  expect(reverse(text)).toEqual(result);
});
