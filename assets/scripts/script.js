const main = document.querySelector('main');
const slides = document.getElementsByClassName('slide');
const slideBtns = document.getElementsByClassName('slider__button');

main.addEventListener('click', ({ target }) => {
  if (target.classList.contains('slider__button')) {
    const btnId =  parseInt(target.id.match(/\d+/));

    checkId(slides, 'active-slide', btnId);
    checkId(slideBtns, 'active-bth', btnId);
  }
});

function checkId(collection, className, id) {
  for (const element of collection) {
    if(!element.id) return;
    const elementId = parseInt(element.id.match(/\d+/));

    element.classList.remove(className);
    if (id === elementId) {
      element.classList.add(className);
    }
  }
}