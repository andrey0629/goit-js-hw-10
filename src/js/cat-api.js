import { Loading } from 'notiflix/build/notiflix-loading-aio';
import axios from 'axios';
import { select } from '.';
const instance = axios.create({
  baseURL: 'https://api.thecatapi.com/v1/',
  headers: {
    'x-api-key':
      'live_5gcBxYGBeGtVnTe4tRQVLU3tQgzVUm9OvGjso2ptqnap9avv66fdGiowLO59glmR',
  },
});

Loading.hourglass('Loading...');

export function fetchBreeds() {
  return instance
    .get('breeds')
    .then(r => r.data, Loading.remove(), (select.hidden = true))
    .catch(err => new Error(err.response.statusText));
}

export function fetchCatByBreed(breedId) {
  return instance
    .get(`images/search?breed_ids=${breedId}`)
    .then(r => r.data[0])
    .catch(err => new Error(err.response.statusText));
}
