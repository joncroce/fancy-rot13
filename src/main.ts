import './style.css';
import { rotate } from './rot13';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <h2 class='title'>ROT 13</h2>
  <section class="main">
    <textarea
      id='input'
      autocomplete='off'
      autofocus
    ></textarea>
    <div id='result'></div>
  </section>
  <section class="controls">
    <button id="clear-button" type='button'>Clear</button>
    <button id="copy-button" type='button'>Copy</button>
  </section>
`;

const inputEl = document.querySelector<HTMLTextAreaElement>('#input');
const resultEl = document.querySelector<HTMLDivElement>('#result');
const clearButton = document.querySelector<HTMLButtonElement>('#clear-button');
const copyButton = document.querySelector<HTMLButtonElement>('#copy-button');

clearButton!.addEventListener('click', () => {
  inputEl!.value = '';
});

copyButton!.addEventListener('click', async () => {
  await navigator.clipboard.writeText(resultEl!.innerText)
    .catch(error => console.error(error));
});

inputEl!.addEventListener('input', () => {
  resultEl!.innerHTML = rotate(inputEl!.value);
});
