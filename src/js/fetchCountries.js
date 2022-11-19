const BASE_URL = 'https://restcountries.com/v3.1/name';
const SEARCH_PARAM = 'name,capital,population,flags,languages';

function fetchCountries(name) {
  return fetch(`${BASE_URL}/${name}?fields=${SEARCH_PARAM}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .catch(error => {
      console.log(error);
    });
}

export { fetchCountries };
