'use scrict';

const kamilStochSelector = document.getElementById('kamilStoch');
const robertLewandowskiSelector = document.getElementById('robertLewandowski');
const mariuszPudzianowskiSelector = document.getElementById(
  'mariuszPudzianowski'
);
const igaSwiatekSelector = document.getElementById('igaSwiatek');
const krzysztofKrawczykSelector = document.getElementById('krzysztofKrawczyk');
const marcinGortatSelector = document.getElementById('marcinGortat');
const iframeSelector = document.getElementById('frame');
const toMainPageSelector = document.querySelector('.toMainPage');

kamilStochSelector.addEventListener('click', function () {
  iframeSelector.src = '/frameKamilStoch/main/kamilStochMain.html';
});

robertLewandowskiSelector.addEventListener('click', function () {
  iframeSelector.src =
    '/frameRobertLewandowski/main/robertLewandowskiMain.html';
});

mariuszPudzianowskiSelector.addEventListener('click', function () {
  iframeSelector.src =
    '/frameMariuszPudzianowski/main/mariuszPudzianowskiMain.html';
});

igaSwiatekSelector.addEventListener('click', function () {
  iframeSelector.src = '/frameIgaSwiatek/main/igaSwiatekMain.html';
});

krzysztofKrawczykSelector.addEventListener('click', function () {
  iframeSelector.src =
    '/frameKrzysztofKrawczyk/main/krzysztofKrawczykMain.html';
});

marcinGortatSelector.addEventListener('click', function () {
  iframeSelector.src = '/frameMarcinGortat/main/marcinGortatMain.html';
});

toMainPageSelector.addEventListener('click', function () {
  window.open('/mainPage/index.html', '_self');
});
