
const loader = document.querySelector("div.loader");
const Unloader = document.querySelector("div.unloader");

window.addEventListener ('load', () => {
  loader.classList.add('fondu-out');
  Unloader.classList.add('fondu-in');

})