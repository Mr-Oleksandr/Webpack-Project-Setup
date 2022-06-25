import axios from 'axios'

function generatePerson() {

  let randomId = Math.floor(Math.random()*10) || 1;
  const config = {
    headers: {
      Accept: 'application/json',
    },
  };
  axios.get(`https://starwars-visualguide.com/assets/img/characters/${randomId}.jpg`).then((res) => {
    document.getElementById('personImg').src = `https://starwars-visualguide.com/assets/img/characters/${randomId}.jpg`
  });

  axios.get(`https://swapi.dev/api/people/${randomId}/`, config).then((res) => {
    document.getElementById('person-name').innerHTML = res.data.name
  })
}

export default generatePerson
