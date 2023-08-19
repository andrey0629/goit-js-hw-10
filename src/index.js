import axios from 'axios';

axios.defaults.headers.common['x-api-key'] =
  'live_5gcBxYGBeGtVnTe4tRQVLU3tQgzVUm9OvGjso2ptqnap9avv66fdGiowLO59glmR';

import { fetchBreeds } from './cat-api.js';
import { markup } from './cat-api.js';

const select = document.querySelector('.breed-select');
// console.log(select);

const loader = document.querySelector('.loader');
// console.log(loader);

const guard = document.querySelector('.js-guard');

fetchBreeds().then(data => {
  console.log(data);
  // select.insertAdjacentHTML(
  // 'beforeend'
  // `data.map(({ name,id }) => ${data}).join('')`
  // );
  select.innerHTML += markup(data);
  // observer.observe(guard);
});
