const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const cities = [];

fetch(endpoint)
  .then(res => res.json())
  .then(data => cities.push(...data))
  .catch(function(err) {
    console.log(err);
});

function findMatches(filterKeyword, addresses) {
  return addresses.filter(address => normalize(address.city).toLowerCase().includes(filterKeyword) || normalize(address.state).toLowerCase().includes(filterKeyword));
}

function showMatches() {
  const matchArray = findMatches(this.value, cities);
  const html = matchArray.map(match => {
    const regex = new RegExp(this.value, 'gi'); // global ignore capital case
    const cityName = match.city.replace(regex, `<span class="hl">${this.value}</span>`);
    const stateName = match.state.replace(regex, `<span class="hl">${this.value}</span>`);
    return `
      <li>
        <span class="name">${cityName}, ${stateName}</span>
        <span class="population">${match.population}</span>
      </ul>
    `;
  }).join('');
  suggestions.innerHTML = html;
}

// removes accents and diacritics to the string
function normalize(str) {
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
}

const input = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

input.addEventListener('change', showMatches);
input.addEventListener('keyup', showMatches);
