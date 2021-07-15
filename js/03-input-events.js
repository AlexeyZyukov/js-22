/*
 * Паттерн «Объект ссылок»
 *
 * События
 * - focus и blur
 * - input и change
 * - Чекбоксы и свойство checked
 */

const refs = {
  input: document.querySelector('.js-input'),
  nameLabel: document.querySelector('.js-button > span'),
  licenseCheckbox: document.querySelector('.js-license'),
  btn: document.querySelector('.js-button'),
};
//refs - это объект ссылок на элементы. Запись в refs эквивалентна указанной ниже:
  // input = document.querySelector('.js-input'),
  // nameLabel = document.querySelector('.js-button > span'),
  // licenseCheckbox = document.querySelector('.js-license'),
  // btn = document.querySelector('.js-button'),

// refs.input.addEventListener('focus', onInputFocus);
// refs.input.addEventListener('blur', onInputBlur);
// refs.input.addEventListener('change', onInputChange);
// refs.input.addEventListener('input', onInputChange);

refs.input.addEventListener('input', onInputChange);
refs.licenseCheckbox.addEventListener('change', onLicenseChange);

function onInputFocus() {
  console.log('Инпут получил фокус - событие focus');
}

function onInputBlur() {
  console.log('Инпут потерял фокус - событие blur');
}

function onInputChange(event) {
  refs.nameLabel.textContent = event.currentTarget.value;
} //при вводе в поле input данных, выводит их на кнопке в поле span
//callback-функция "связывает" 2 элемента, приводя к изменению 2-го, при изменении 1-го

function onLicenseChange(event) {
  refs.btn.disabled = !event.currentTarget.checked;
} //при отметке чек-бокса, меняет состояние кнопки из не активного в активное
//callback-функция "связывает" 2 элемента, приводя к изменению 2-го, при изменении 1-го
