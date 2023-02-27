import './style.css';
import { rotate } from './rot13';
import useToast from './useToast';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <h2 class="title"><span class="italic">Fancy</span> ROT 13</h2>
  <details>
    <summary>Details</summary>
    <p>An implementation of everyone's favorite no-security cryptographic algorithm that works with accented letters of the alphabet.</p>
  </details>
  <section id="rotater">
    <label for="input">
      Input
      <textarea
        id="input"
        autocomplete="off"
        autofocus
      ></textarea>
    </label>
    <label for="output">
      Output
      <div id="output"></div>
    </label>
  </section>
  <section id="controls">
    <button id="clear-button" type="button">Clear</button>
    <button id="copy-button" type="button">Copy</button>
  </section>
  <div id="toast" data-visible="false"></div>
`;

const inputEl = document.querySelector<HTMLTextAreaElement>('#input');
const resultEl = document.querySelector<HTMLDivElement>('#output');
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

