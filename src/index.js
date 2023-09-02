// import SlimSelect from 'slim-select';
// import 'slim-select/dist/slimselect.css';

// import Notiflix from 'notiflix';

// import { Notify } from 'notiflix/build/notiflix-notify-aio';
// import { Loading } from 'notiflix/build/notiflix-loading-aio';

// import { fetchBreeds, fetchCatByBreed } from './cat-api.js';

// const select = document.querySelector('.breed-select');

// const loader = document.querySelector('.loader');

// const catInfo = document.querySelector('.cat-info');

// function markup(arr) {
//   return arr
//     .map(
//       ({ id, name }) =>
//         `<option class="catList" data-id="${id}">
//             ${name}
//         </option>`
//     )
//     .join('');
// }

// fetchBreeds().then(data => {
//   console.log(data);

//   select.innerHTML += markup(data);
//   new SlimSelect({ select: select });
// });

// select.addEventListener('change', onCLick);

// function onCLick(e) {
//   const breedId = e.currentTarget.value;
//   catInfo.innerHTML = '';
//   Loading.dots();
//   fetchCatByBreed(breedId).then(markup2).catch(Err);
// }

// function Err() {
//   return Notify.failure('Oops! Something went wrong! Try reloading the page!');
// }

// function markup2(res) {
//   Loading.remove();
//   const { name, description, temperament } = res.breeds[0];
//   const markup = `
//     <h2 class="header">${name}</h2>
//     <div class="card">
//       <img src="${res.url}" alt="${name}" class="image" width=400>
//       <div class="description">
//         <p class="text">${description}</p>
//         <p class="text"><b>Temperament:</b> ${temperament}</p>
//       </div>
//     </div>
//   `;
//   catInfo.innerHTML = markup;
// }

// 1
// 2
// 3
import SlimSelect from 'slim-select';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import 'slim-select/dist/slimselect.css';
import { fetchBreeds, fetchCatByBreed } from './cat-api';

const select = document.querySelector('.breed-select');
const catContainer = document.querySelector('.cat-info');

fetchBreeds().then(renderCatOption).catch(onRenderError);

select.addEventListener('change', onOptionCLick);

function onOptionCLick(e) {
  const selectedOption = e.currentTarget.value;
  catContainer.innerHTML = '';
  Loading.hourglass();
  fetchCatByBreed(selectedOption).then(renderCatCard).catch(onRenderError);
}

function onRenderError() {
  return Notify.failure('Oops! Something went wrong, please try again.');
}

function renderCatOption(res) {
  const markup = res.map(
    ({ id, name }) => `<option value="${id}">${name}</option>`
  );
  select.insertAdjacentHTML('beforeend', markup);
  new SlimSelect({
    select: select,
    settings: {
      placeholderText: 'Select a cat breed',
      hideSelected: true,
    },
    events: {
      afterChange: fetchBreeds,
    },
  });

  //   settings: {
  //     placeholderText: 'Select a cat breed',
  //     hideSelected: true,
  //   },
  //   events: {
  //     afterChange: fetchBreed,
  //   },
  // });

  // new SlimSelect({ select: select });
}

function renderCatCard(res) {
  Loading.remove();
  const { name, description, temperament } = res.breeds[0];
  const markup = `
    <h2 class="header">${name}</h2>
    <div class="card">
      <img src="${res.url}" alt="${name}" class="image" width=400>
      <div class="description">
        <p class="text">${description}</p>
        <p class="text"><b>Temperament:</b> ${temperament}</p>
      </div>
    </div>
  `;
  catContainer.innerHTML = markup;
}
