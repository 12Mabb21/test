let phrases = [
  { text: 'отправить другу меню ресторана', image: 'premium-icon-restaurant-5921708.png' },
  { text: 'посмотреть на цены видеокарт', image: 'free-icon-graphic-card-908725.png' },
  { text: 'разобраться в коде', image: 'male-head-side-view-with-cogwheels-thinking-about-dollar-symbol.png' },
  { text: 'Геймпад', image: 'console.png' },
  { text: 'расставить книги на полке по названию', image: 'book.png' },
  { text: 'читать про зарплаты в Франции', image: 'flag.png' },
  { text: 'прочитать новости о России с Украиной', image: 'conflict.png' },
  { text: 'послушать музыку', image: 'musical-note.png' },
  { text: 'посмотреть трейлер сериала и заодно первый сезон (не, ну это да)', image: '1038100.png' },
  { text: 'проверить непрочитанное в непрочитанных', image: '2190552.png' }
];

function getRandomElement(arr) {
  let randIndex = Math.floor(Math.random() * arr.length);
  return arr[randIndex];
}

let button = document.querySelector('.button');
let phrase = document.querySelector('.phrase');
let advice = document.querySelector('.advice');
let image = document.querySelector('.image');

button.addEventListener('click', function () {
  let randomElement = getRandomElement(phrases);
  smoothly(phrase, 'textContent', randomElement.text)
  smoothly(image, 'src', randomElement.image)

  if (randomElement.text.length > 40) {
    advice.style.fontSize = '33px';
  } else {
    advice.style.fontSize = '42px';
  }
});

for (let i = 0; i <= 2; i = i + 1) {
  // выводите элементы массива в консоль, используя i
 // console.log(phrases[i]);
  smoothly(phrase, 'textContent', phrases[i].text); 
  smoothly(image, 'src', phrases[i].image); 
} 