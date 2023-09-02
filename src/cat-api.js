import axios from 'axios';

axios.defaults.headers.common['x-api-key'] =
  'live_5gcBxYGBeGtVnTe4tRQVLU3tQgzVUm9OvGjso2ptqnap9avv66fdGiowLO59glmR';

export function fetchBreeds() {
  const options = {
//     headers: {
//       Authorization: "Bearer E44IIOmyRgiAd04FpMeR",
//     },
//   };

  return fetch('https://api.thecatapi.com/v1/breeds', options).then(
    response => {
      if (!response.ok) {
        throw new Error(response);
      }
      return response.json();
    }
  );
  console.log(response);
}

export function markup(arr) {
  return arr
    .map(
      ({ id, name }) =>
        `<option class="catList" data-id="${id}">
            ${name}
        </option>`
    )
    .join('');
}

export function fetchCatByBreed() {
  // const id = cat.data - id;
  const options = {};
  return fetch(
    // 'https://api.thecatapi.com/v1/images/search?breed_id',
    'https://api.thecatapi.com/v1/images/search?breed_ids=${id}',
    options
  ).then(response => {
    if (!response.ok) {
      throw new Error(response);
    }
    return response.json();
  });
}

export function markup2(arr) {
  return arr
    .map(
      ({ cfa_url, name, description, temperament, id, url }) => `
<img src="${url}" alt="" width="300px">
<h3>${id}
</h3>
  <p>${description}
  </p>
    <h2>${temperament}</h2>`
    )
    .join('');
}

// function serviceCharacter(page = 1) {
//   const options = {
//     headers: {
//       Authorization: 'Bearer E44IIOmyRgiAd04FpMeR',
//     },
//   };
//   return fetch(
//     `https://the-one-api.dev/v2/character?limit=30&page=${page}`,
//     options
//   ).then(response => {
//     if (!response.ok) {
//       throw new Error(response.statusText);
//     }
//     return response.json();
//     console.log(response);
//   });
// }

// // Authorization: Bearer E44IIOmyRgiAd04FpMeR;

// const list = document.querySelector(".js-list");
// const guard = document.querySelector(".js-guard");
// let page = 30;

// const guard = document.querySelector('.breed-select');

// function serviceCharacter(page = 1) {
//   const options = {
//     headers: {
//       Authorization: "Bearer E44IIOmyRgiAd04FpMeR",
//     },
//   };
//   return fetch(
//     `https://the-one-api.dev/v2/character?limit=30&page=${page}`,
//     options
//   ).then((response) => {
//     if (!response.ok) {
//       throw new Error(response.statusText);
//     }
//     return response.json();
//     console.log(response);
//   });
// }

// const options = {
//   //   root: document.querySelector("#scrollArea"),
//   rootMargin: "300px",
//   //   threshold: 1.0,
// };
// function callback(entries, observer) {
//   /* Content excerpted, show below */
//   entries.forEach((entry) => {
//     console.log(entry);
//     if (entry.isIntersecting) {
//       page += 1;
//       serviceCharacter(page).then((data) => {
//         list.insertAdjacentHTML("beforeend", markup(data.docs));
//         if (data.page === data.pages) {
//           observer.unobserve(guard);
//         }
//       });
//     }
//   });
// }
// const observer = new IntersectionObserver(callback, options);

export { fetchBreeds, fetchCatByBreed };