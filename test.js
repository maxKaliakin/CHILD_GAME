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
  hint: 'Четыре ноги, пятый хвост, шестая грива',
  image: 'http:///asdasd/horse.jpg',
  video: 'http:///asdasd/horse.mp4',
};

let lettersArray = data.word.split('');
let secretWord = new Array(data.word.length).fill('');

// Получаем рендомный номер (number)
const getRandomNumber = (number) => {
  return Math.floor(Math.random() * number);
};

// Открываем рендомный кусок картинки
const openRandomImagePart = () => {
  console.log(
    'Открываем этот кусочек ===>>>',
    getRandomNumber(lettersArray.length),
  );
  // TODO:  Добавить проверку - была ли цифра уже открыта
};

// Открываем букву на табло
const openRightLetter = () => {
  // TODO: Перерисовываем слово на табло с учетом открытых букв в secretWord
};

const checkLetterInSecretWord = (letter) => {
  // Проверяем есть ли буква в массиве букв из отгадываемого слова
  if (lettersArray.includes(letter)) {
    //Если да - проверяем по какому индексу и добавляем сразу в скрытое слово
    lettersArray.findIndex((element, index) => {
      if (element === letter) {
        secretWord[index] = letter;
        openLetter(index, letter);
        openRandomImagePart();
      }
    });
  }
  // Если нет - просто говорим что FAIL
  else {
    console.log('FAIl', secretWord);
  }
};

const renderLetters = () => {
  secretWord.forEach((el) => {
    const letterBox = document.createElement('li');
    letterBox.className = el ? 'open' : '';
    letterBox.textContent = el;
    document.getElementById('word').appendChild(letterBox);
  });

  document.getElementById('hint').textContent = data.hint;
};

// Открываем уже в HTML букву по индексу
const openLetter = (index, letter) => {
  const element = document.getElementById('word').childNodes[index];
  element.className = 'open';
  element.textContent = letter;
};

// Отрисовываем слово, которое будем отгадывать и подсказку к ней
renderLetters();

// Добавляем буквы - кнопки
russianAlphabet.forEach((el) => {
  const button = document.createElement('button');
  button.className = 'keypadButton';
  button.type = 'button';
  button.addEventListener('click', () => checkLetterInSecretWord(el));
  button.textContent = el;
  document.getElementById('keypad').appendChild(button);
});



// function calculatorAge (a) {
//   return a*365;
// };
// const calculatorAge = (a) =>{
//   a % 2 == 0 ? console.log("norm") : console.log("nenorm");
// }
// console.log (calculatorAge(5));

