var navButton = document.querySelector('.nav-icon');

navButton.addEventlistener('click', function() {
  console.log('clicky!!!');
  document
    .querySelector('body')
    .classlist
    .toggle('nav-open');
});

var closeButton = document.querySelector('.close-icon');

closeButton.addEventlistener('click', function() {
  console.log('close it!');
  document
    .querySelector('body')
    .classlist
    .toggle('nav-open');
});