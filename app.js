const form = document.getElementById('item-form'); //  This will grab the value from input becasue the type is submit
const itemInput = document.getElementById('item'); // This Where the user will type
const filter = document.getElementById('filter');
const itemList = document.getElementsByClassName('collection');
const clearItemsBtn = document.querySelector('.clear-items');
const add = document.getElementById('add');
const emptySpace = document.getElementById('emptySpace');
const ingredient = document.getElementById('ingredient');
const submitBtn = document.getElementById('submit');

const ui = new UI();
//------
// Question for David when i use document.getElementByclass, i get a error
//-----

loadEventListeners();
function loadEventListeners() {
  // causing the entire form to submit
  // form.addEventListener('submit', addItem);
  // itemList[0].addEventListener('click', removeTask);

  // clearItemsBtn.addEventListener('click', removeItems);
  add.addEventListener('click', addIngredeint);
  submitBtn.addEventListener('click', addItem);
}

function addItem(e) {
  if (itemInput.value === '' && itemInput.value === '') {
    alert('Please add Item');
  }

  // Clear Ingridients Input
  ingredient[0 - 10].value = '';
  // Clear input
  itemInput.value = '';

  e.preventDefault();
}

function removeItems() {}

function removeTask(e) {
  if (e.target.parentElement.classList.contains('delete-item')) {
    if (confirm('Are You Sure?')) {
      e.target.parentElement.parentElement.parentElement.remove();
    }
  }
}

// Creating a  Input to store in
function addIngredeint(e) {
  e.preventDefault();
  if (ingredient.value === '' || itemInput.value === '') {
    alert('Please Fill both of the fields');
    return;
  }
  const input = document.createElement('input');
  input.className = 'inputOne';

  emptySpace.appendChild(input);
}
