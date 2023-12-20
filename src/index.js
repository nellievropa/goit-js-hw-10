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

// const headers = new Headers({
//   "Content-Type": "application/json",
//   "x-api-key": "live_z6eGqgD1UKta40zwjx9gIJFQe07jIJtgN9xqenG2iTX9aiF4AElDeCIQ3o4r162B"
// });

// var requestOptions = {
//   method: 'GET',
//   headers: headers,
//   redirect: 'follow'
// };

// fetch("https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=44", requestOptions)
//   .then(response => response.text())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));

const search = document.querySelector('.js-breed-select');
const markup = document.querySelector('.cat-info');
search.addEventListener('click', onSearchBreed);
let storedBreeds = [];

function onSearchBreed(evt) {
  evt.preventDefault();
  // const { breed } = evt.curenttarget.breed.id.value;
  fetchBreeds()
    .then(storedBreeds => (option.innerHTML = createMarkup(data.name)))
    .catch(error => console.log(error));
   console.log(storedBreeds)
}

function fetchBreeds(id) {
  const BASE_URL = 'https://api.thecatapi.com/v1';
  const API_KEY = 'live_z6eGqgD1UKta40zwjx9gIJFQe07jIJtgN9xqenG2iTX9aiF4AElDeCIQ3o4r162B';

  return fetch(
    `${BASE_URL}/breeds?${API_KEY}&id=${id}`
  ).then(response => {
    console.log(response.json())
      if (!response.ok) {
      throw new Error(response.statusText)
      }
    return response.json();
    
    })
 
}

function createMarkup(array) {
  return array.map(({ name  }) => `<option 
  value="breed-name">${ name} 
  </option>`).join('')
}

// fetchBreeds()
//   .then((data) => {
//     // data = data.filter(img=> img.image?.url!=null)
   
//   storedBreeds = data.currentTarget.id;
   
//     for (let i = 0; i < storedBreeds.length; i++) {
//       const breed = storedBreeds[i];
//       let option = document.createElement('option');
     
//       //skip any breeds that don't have an image
//       if (!breed.image) continue
     
//       //use the current array index
//       option.value = i;
//       option.innerHTML = `${breed.name}`;
//       document.getElementById('breed_selector').appendChild(option);
//     }
//     console.log(storedBreeds)
//   })
//   .catch(error => console.log(error));


