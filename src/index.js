import './css/styles.css';
import debounce from 'lodash.debounce';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { fetchCountries } from './js/fetchCountries';

const DEBOUNCE_DELAY = 300;

const inputForm = document.querySelector('input#search-box');

inputForm.addEventListener('input', debounce(fetchCountry, DEBOUNCE_DELAY));

function fetchCountry(event) {
  const result = event.target.value.trim();
  // console.log(result);

  fetchCountries(result).then(data => {
    // console.log(data.length);
    if (data.length > 10) {
      Notify.info('Too many matches found. Please enter a more specific name.');
    } else if (data.length > 1 && data.length < 11) {
      showShortResults(data);
    } else {
      showFullResults(data);
    }
  });
}

function showShortResults(countries) {
  console.log(countries);
}

function showFullResults(countries) {
  console.log(countries);
}
