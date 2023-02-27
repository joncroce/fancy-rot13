import './style.css';
import { rotate } from './rot13';
import useToast from './useToast';

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
  <div id="toast" data-visible="false"></div>
`;

const inputEl = document.querySelector<HTMLTextAreaElement>('#input');
const resultEl = document.querySelector<HTMLDivElement>('#result');
const clearButton = document.querySelector<HTMLButtonElement>('#clear-button');
const copyButton = document.querySelector<HTMLButtonElement>('#copy-button');

const { start } = useToast();

clearButton!.addEventListener('click', () => {
  inputEl!.value = '';
  resultEl!.innerHTML = '';
  start('Cleared!');
});

copyButton!.addEventListener('click', async () => {
  await navigator.clipboard.writeText(resultEl!.innerText).then(() => { start('Copied!'); })
    .catch(error => console.error(error));
});

inputEl!.addEventListener('input', () => {
  resultEl!.innerHTML = rotate(inputEl!.value);
});

