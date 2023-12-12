// const API_KEY = 'live_z6eGqgD1UKta40zwjx9gIJFQe07jIJtgN9xqenG2iTX9aiF4AElDeCIQ3o4r162B';
// const BASE_URL = 'https://api.thecatapi.com/v1';
// const options = {
//     headers: {
//         Authorization: API_KEY,
//     },
//     };

// const getBreed = getBreed => {
//     const url = `${BASE_URL}/images/search?breed_ids=${breed.id}`;
//     fetch(url, options).then(res => res.json());
//     return getBreed;
// };

// getBreed(beng).then(breed => console.log(breed));

const headers = new Headers({
  "Content-Type": "application/json",
  "x-api-key": "live_z6eGqgD1UKta40zwjx9gIJFQe07jIJtgN9xqenG2iTX9aiF4AElDeCIQ3o4r162B"
});

var requestOptions = {
  method: 'GET',
  headers: headers,
  redirect: 'follow'
};

fetch("https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=44", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));   