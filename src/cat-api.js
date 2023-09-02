// import axios from 'axios';

// axios.defaults.headers.common['x-api-key'] =
//   'live_5gcBxYGBeGtVnTe4tRQVLU3tQgzVUm9OvGjso2ptqnap9avv66fdGiowLO59glmR';

// function fetchBreeds() {
//   const options = {};

//   return fetch('https://api.thecatapi.com/v1/breeds', options).then(
//     response => {
//       if (!response.ok) {
//         throw new Error(response.statusText);
//       }
//       return response.json();
//     }
//   );
// }

// function fetchCatByBreed(breedId) {
//   const options = {};
//   return fetch(
//     'https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}',
//     options
//   ).then(response => {
//     if (!response.ok) {
//       throw new Error(response.statusText);
//     }
//     return response.json();
//   });
// }

export { fetchBreeds, fetchCatByBreed };

// 1
// 2
// 3
import axios from 'axios';
const instance = axios.create({
  baseURL: 'https://api.thecatapi.com/v1/',
  headers: {
    'x-api-key':
      'live_5gcBxYGBeGtVnTe4tRQVLU3tQgzVUm9OvGjso2ptqnap9avv66fdGiowLO59glmR',
  },
});

function fetchBreeds() {
  return instance
    .get('breeds')
    .then(r => r.data)
    .catch(err => new Error(err.response.statusText));
}

function fetchCatByBreed(breedId) {
  return instance
    .get(`images/search?breed_ids=${breedId}`)
    .then(r => r.data[0])
    .catch(err => new Error(err.response.statusText));
}
