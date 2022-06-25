// DEMO JOKE APP
import generatePerson from './generatePerson'
import './styles/main.scss'


const personBtn = document.getElementById('randomBtn');
personBtn.addEventListener('click', generatePerson);

generatePerson();
