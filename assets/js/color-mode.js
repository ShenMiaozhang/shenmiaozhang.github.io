(function () {
  'use strict';

  var control = document.querySelector('.color-mode-switch');
  if (!control) return;

  var buttons = control.querySelectorAll('[data-color-mode-choice]');

  function setMode(mode) {
    document.documentElement.setAttribute('data-color-mode', mode);
    buttons.forEach(function (button) {
      button.setAttribute('aria-pressed', String(button.getAttribute('data-color-mode-choice') === mode));
    });
  }

  buttons.forEach(function (button) {
    button.addEventListener('click', function () {
      setMode(button.getAttribute('data-color-mode-choice'));
    });
  });

  setMode('monochrome');
  control.hidden = false;
}());
