import SlimSelect from 'slim-select';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import 'slim-select/dist/slimselect.css';
import { fetchBreeds, fetchCatByBreed } from './cat-api';

export const select = document.querySelector('.breed-select');
const catContainer = document.querySelector('.cat-info');

fetchBreeds().then(renderCatOption).catch(onRenderError);

select.addEventListener('change', onOptionCLick);

function onOptionCLick(e) {
  const selectedOption = e.currentTarget.value;
  catContainer.innerHTML = '';
  Loading.hourglass('Loading...');
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
