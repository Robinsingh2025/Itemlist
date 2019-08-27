const form = document.getElementById('item-form'); //  This will grab the value from input becasue the type is submit
const itemInput = document.getElementById('item'); // This Where the user will type
const filter = document.getElementById('filter');
const itemList = document.querySelector('.collection');
const clearItemsBtn = document.querySelector('.clear-items');

const ui = new UI();
//------
// Question for David when i use document.getElementByclass, i get a error
//-----

loadEventListeners();
function loadEventListeners() {
  form.addEventListener('submit', addItem);
  itemList.addEventListener('click', removeTask);
  clearItemsBtn.addEventListener('click', removeItems);
}

function addItem(e) {
  if (itemInput.value === '') {
    alert('Please add Item');
  }

  // After the Item is submited we need to add it to the items list
  const li = document.createElement('li');
  // Class Name given to New Element
  li.className = 'collection-item';
  // Creating a text node to hold the value in Ul element
  li.appendChild(document.createTextNode(itemInput.value));
  itemList.appendChild(li);
  const link = document.createElement('a');
  // Add class
  link.className = 'delete-item secondary-content';
  // Add icon html
  link.innerHTML = '<i class="fa fa-remove"></i>';
  // Append the link to li
  li.appendChild(link);
  ui.showIngredient();
  // Append li to ul
  itemList.appendChild(li);

  // in ui i can pass parameter and then i can call it later so once the new item gets added it automatically shows UL

  //-----------------------

  //---------

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
