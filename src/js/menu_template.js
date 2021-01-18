import '../sass/styles.scss';
import itemsTemplate from '../templates/menu.hbs';
import menu from '../menu.json'
const markup = itemsTemplate(menu)
console.log(markup)

const refsList = document.querySelector(".js-menu");
 refsList.insertAdjacentHTML('beforeend', markup)

