const fetchPromise = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json')

console.log(fetchPromise);

// fetchPromise.then((response) => {
//     let jsonPromise = response.json()
//     jsonPromise.then((data) => {
//         console.log(data[0].name);
//     })
// })

//Refactored format
fetchPromise.then(response => response.json()).then((data) => console.log(data[0].name))