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
  image: './image/horse.jpeg',
  video: 'http:///asdasd/horse.mp4',
};

let lettersArray = data.word.split('');
let secretWord = new Array(data.word.length).fill('');

// Получаем рендомный номер (number)
const getRandomNumber = (number) => {
  return Math.floor(Math.random() * number);
};

const checkLetterInSecretWord = (letter) => {
  // Проверяем есть ли буква в массиве букв из отгадываемого слова
  if (lettersArray.includes(letter)) {
    //Если да - проверяем по какому индексу и добавляем сразу в скрытое слово
    lettersArray.findIndex((element, index) => {
      if (element === letter) {
        openRandomImagePart(index, letter);
        openLetter(index, letter);
        updateCss(letter);
        secretWord[index] = letter;
      }
    });
  } else {
    downdataCss (letter)
  }
};
const downdataCss = (em) =>{
  russianAlphabet.findIndex((element, index) => {
    if (element === em) {
      const button = document.getElementById('keypad').childNodes[index];
      button.style.backgroundColor = 'red';
    }
  });
};

const updateCss = (el) => {
  russianAlphabet.findIndex((element, index) => {
    if (element === el) {
      const button = document.getElementById('keypad').childNodes[index];
      button.style.backgroundColor = 'green';
    }
  });
};

const renderLetters = () => {
  secretWord.forEach((el) => {
    const letterBox = document.createElement('li');
    letterBox.className = el ? 'open' : '';
    letterBox.textContent = el;
    document.getElementById('word').appendChild(letterBox);
  });

  // Добавляем подсказку
  document.getElementById('hint').textContent = data.hint;

  // Добавляем картинку, которую отгадываем
  document.getElementById('image').style.backgroundImage = `url(${data.image})`;
};

// Открываем уже в HTML букву по индексу
const openLetter = (index, letter) => {
  const element = document.getElementById('word').childNodes[index];
  element.className = 'open';
  element.textContent = letter;
};

// Отрисовываем слово, которое будем отгадывать и подсказку к ней
renderLetters();

// Отрисовываем "крышки" поверх картинки
const renderImageOverlayBlocks = () => {
  lettersArray.forEach(() => {
    const block = document.createElement('div');
    block.className = 'block';
    block.style.width = `calc(${100 / (lettersArray.length / 2)}%)`;
    document.getElementById('overlay').appendChild(block);
  });
};

// Открываем рендомный кусок картинки
const openRandomImagePart = (index, letter) => {
  const openBlock = () => {
    let generateRandomNumber = () => getRandomNumber(lettersArray.length);
    const el =
      document.getElementById('overlay').childNodes[generateRandomNumber()];

    if (!el.classList.contains('open')) {
      el.className = 'open';
    } else {
      openBlock();
    }
  };

  if (letter !== secretWord[index]) {
    openBlock();
  }
};

renderImageOverlayBlocks();

// Добавляем буквы - кнопки
russianAlphabet.forEach((el) => {
  const button = document.createElement('button');
  button.className = 'keypadButton';
  button.type = 'button';
  button.addEventListener('click', () => checkLetterInSecretWord(el));
  button.textContent = el;
  document.getElementById('keypad').appendChild(button);
});
