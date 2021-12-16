'use scrict';
const backToMainPageSelector = document.getElementById('backToMainPage');
const achievementsSelector = document.getElementById('achievements');
const biographySelector = document.getElementById('biography');
const iframeSelector = document.getElementById('frame');

backToMainPageSelector.addEventListener('click', function () {
  parent.window.open('/mainPage/index.html', '_self');
});

biographySelector.addEventListener('click', function () {
  iframeSelector.src = '/frameRobertLewandowski/biography/biographyMain.html';
});

achievementsSelector.addEventListener('click', function () {
  iframeSelector.src =
    '/frameRobertLewandowski/achievements/achievementsMain.html';
});
