import axios from 'axios';

axios.defaults.headers.common['x-api-key'] =
  'live_5gcBxYGBeGtVnTe4tRQVLU3tQgzVUm9OvGjso2ptqnap9avv66fdGiowLO59glmR';

import SlimSelect from 'slim-select';
import 'slim-select/dist/slimselect.css';

import Notiflix from 'notiflix';

// import { Notify } from 'notiflix/build/notiflix-notify-aio';
// import { Loading } from 'notiflix/build/notiflix-loading-aio';

import { fetchBreeds, fetchCatByBreed } from './cat-api.js';

import { markup } from './cat-api.js';
import { markup2 } from './cat-api.js';

const select = document.querySelector('.breed-select');

const loader = document.querySelector('.loader');
// console.log(loader);

const catInfo = document.querySelector('.cat-info');
// console.log(catInfo);

// const guard = document.querySelector('.js-guard');

fetchBreeds().then(data => {
  console.log(data);
  // select.insertAdjacentHTML(
  // 'beforeend'
  // `data.map(({ name,id }) => ${data}).join('')`
  // );
  select.innerHTML += markup(data);
  // const cat = document.querySelector('option');
  // console.log(cat);
  // cat.addEventListener('click', fetchCatByBreed());
  // observer.observe(guard);
});

fetchCatByBreed().then(data => {
  console.log(data);
  catInfo.innerHTML += markup2(data);
});

// export function searchCats(arr) {
//   // for (i = 0; i <= 67; i += 1) {
//   return arr
//     .map(
//       ({ id, name }) =>
//         `<option class="catList" data-id="${id}">
//             ${name}
//         </option>`
//     )
//     .join('');
// }

// searchCats().then(data => {
//   console.log(data);
//   // select.insertAdjacentHTML(
//   // 'beforeend'
//   // `data.map(({ name,id }) => ${data}).join('')`
//   // );
//   select.innerHTML += markup2(data);
//   // observer.observe(guard);
// });
