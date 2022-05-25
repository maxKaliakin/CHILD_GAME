const russianAlphabet = [
  'а',
  'б',
  'в',
  'г',
  'д',
  'е',
  'ё',
  'ж',
  'з',
  'и',
  'й',
  'к',
  'л',
  'м',
  'н',
  'о',
  'п',
  'р',
  'с',
  'т',
  'у',
  'ф',
  'х',
  'ц',
  'ч',
  'ш',
  'щ',
  'ъ',
  'ы',
  'ь',
  'э',
  'ю',
  'я',
];

russianAlphabet.forEach((el) => {
  const button = document.createElement('button');
  button.className = 'keypadButton';
  console.log('YO');
  button.type = 'button';
  button.addEventListener('click', () => console.log(el));
  button.textContent = JSON.stringify(el);
  document.getElementById('keypad').appendChild(button);
});
