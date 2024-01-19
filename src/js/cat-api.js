const BASE_URL = 'https://api.thecatapi.com/v1';
const API_KEY = 'live_z6eGqgD1UKta40zwjx9gIJFQe07jIJtgN9xqenG2iTX9aiF4AElDeCIQ3o4r162B';

export function fetchBreeds() {
  return fetch(
    `${BASE_URL}/breeds?api_key=${API_KEY}`
  ).then(response => {
    console.log(response.json())
      if (!response.ok) {
      throw new Error(response.status)
      }
    return response.json();
    
  })
 
}


export function fetchCatByBreed(breedId) {
  return fetch(`${BASE_URL}/images/search?api_key=${API_KEY}&breed_ids=${breedId}`
  ).then(response => {
    console.log(response.json())
    if (!response.ok) {
      throw new Error(response.status)
    }
    return response.json();
  })
}
