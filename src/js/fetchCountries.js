import { Notify } from 'notiflix/build/notiflix-notify-aio';
export { fetchCountries };

const BASE_URL = 'https://restcountries.com/v3.1/name';
const SEARCH_PARAM = 'name,capital,population,flags.svg,languages';

function fetchCountries(name) {
  // console.log(`hello ${name}`);
  return (
    fetch(`${BASE_URL}/${name}?fields=${SEARCH_PARAM}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(response.status);
        }
        return response.json();
      })
      // .then(data => {
      //   console.log(data);
      // })
      .catch(error => {
        Notify.failure('Oops, there is no country with that name');
      })
  );
}
