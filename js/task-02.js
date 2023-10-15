const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listEl = document.querySelector(`#ingredients`);
const itemEl = ingredients.map(ingredient => {
  const li = document.createElement("li");
  li.classList.add(`item`);
  li.textContent = ingredient;
  return li
});
   
listEl.append(...itemEl);

