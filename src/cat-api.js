export function fetchBreeds() {
  const options = {
    //   // headers: {
    //   // Authorization: 'Bearer E44IIOmyRgiAd04FpMeR',
    //   // },
  };
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

export function markup(arr) {
  return arr
    .map(
      ({ id, name }) => `
        <option>
            ${name}
        </option>`
    )
    .join('');
}

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
