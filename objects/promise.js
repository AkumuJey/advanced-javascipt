const fetchPromise = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json')

console.log(fetchPromise);

// fetchPromise.then((response) => {
//     let jsonPromise = response.json()
//     jsonPromise.then((data) => {
//         console.log(data[0].name);
//     })
// })

//Refactored format
fetchPromise.then(response => {
    if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`)
    }
    return response.json();
}).then((data) => console.log(data[0].name)).catch((error) => console.log(error))


// Combining promises using Promise.all([])
const fetchPromise1 = fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
  );
  const fetchPromise2 = fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found",
  );
  const fetchPromise3 = fetch(
    "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json",
  );
  
  Promise.all([fetchPromise1, fetchPromise2, fetchPromise3])
    .then((responses) => {
      for (const response of responses) {
        console.log(`${response.url}: ${response.status}`);
      }
    })
    .catch((error) => {
      console.error(`Failed to fetch: ${error}`);
    });

// Promise.any()
  