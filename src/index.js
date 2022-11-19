import './css/styles.css';
import debounce from 'lodash.debounce';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { fetchCountries } from './js/fetchCountries';

const DEBOUNCE_DELAY = 300;

const inputForm = document.querySelector('input#search-box');
const countriesListElement = document.querySelector('.country-list');
const countriesInfoElement = document.querySelector('.country-info');

inputForm.addEventListener('input', debounce(fetchCountry, DEBOUNCE_DELAY));

function fetchCountry(event) {
  const result = event.target.value.trim();

  if (!result) {
    clearAllRender();
    return;
  }

  fetchCountries(result)
    .then(data => {
      console.log(data);
      if (data.length > 10) {
        Notify.info(
          'Too many matches found. Please enter a more specific name.'
        );
        clearAllRender();
        return;
      } else {
        showResults(data);
      }
    })
    .catch(error => {
      Notify.failure('Oops, there is no country with that name');
    });
}

function showResults(countries) {
  if (countries.length === 1) {
    countriesListElement.innerHTML = '';
    countriesInfoElement.innerHTML = renderElem(countries[0]);
  } else {
    countriesInfoElement.innerHTML = '';
    countriesListElement.innerHTML = renderManyElem(countries).join('');
  }
}

function renderElem(country) {
  return `<ul>
	<li>
		<img src="${country.flags.svg}" alt="${country.name.common}">
		<h1>${country.name.official}</h1>
	</li>
	<li><b>Capital:</b> ${country.capital}</li>
	<li><b>Population:</b>  ${country.population}</li>
	<li><b>Languages: </b>  ${Object.values(country.languages)}</li>
</ul>`;
}

function renderManyElem(countries) {
  return countries.map(
    country =>
      `<li><img src="${country.flags.svg}" alt="${country.name.common}"/><span>${country.name.official}</span></li>`
  );
}

function clearAllRender() {
  countriesListElement.innerHTML = '';
  countriesInfoElement.innerHTML = '';
}
