export { fetchCountries };

function fetchCountries(name) {
  console.log(`hello ${name}`);
  fetch(`https://restcountries.com/v3.1/name/${name}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      console.log(response);
      return response.json();
    })
    // .then(data => {
    //   console.log(data);
    // })
    .catch(error => {
      console.log('Something wrong 😣');
    });
}
