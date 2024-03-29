import { fetchBreeds, fetchCatByBreed } from "./js/cat-api";
import './css/common.css';

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

const search = document.querySelector('.breed-select');
const markup = document.querySelector('.cat-info');
const loader = document.querySelector('.loader');
const error = document.querySelector('.error');

let storedBreeds = [];

search.addEventListener('click', onSearchBreed);

function onSearchBreed(evt) {
  evt.preventDefault();
  // let storedBreeds = [];
  // const { breed } = evt.curenttarget.breed.id.value;
  fetchBreeds()
    .then(data => {
      search.insertAdjacentHTML('beforeend', createMarkup(data.id.name) )
      // search = data.currentTarget.id;
    //     for (let i = 0; i < search.length; i++) {
    //   const breed = search[i];
    //       // let option = document.createElement('option');

    //   // if (!breed.image) continue
     
    //   //use the current array index
    //   // option.value = i;
    //   // option.innerHTML = `${breed.name}`;
    //   // document.getElementById('breed_selector').appendChild(option);
    // }
        console.log(search)   
    
    })
    .catch(error => console.log(error));
  
}



function createMarkup(array) {
  return array.map(({ name }) => `<option 
  value="breed-name">${name} 
  </option>`).join('');
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




