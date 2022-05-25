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

const data = {
  word: 'лошадь',
  image: 'http:///asdasd/horse.jpg',
  video: 'http:///asdasd/horse.mp4',
};

const getRandomNumber = (number) => {
  return Math.floor(Math.random() * number);
};

russianAlphabet.forEach((el) => {
  const button = document.createElement('button');
  button.className = 'keypadButton';
  button.type = 'button';
  button.addEventListener('click', () => console.log(el));
  button.textContent = el;
  document.getElementById('keypad').appendChild(button);
});
