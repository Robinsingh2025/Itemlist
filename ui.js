class UI {
  // Most of the time need constructor
  constructor() {
    this.ingredient = document.getElementById('ingredient');
  }

  showIngredient() {
    this.ingredient.innerHTML = ` <div class="container">
    <ul>
      <li><input id="one" type="text" placeholder="ingredient  1" /> </li>
      <li><input  id="two" type="text" placeholder="ingredient  2" /></li>
      <li><input type="text" placeholder="ingredient  3" /></li>
      <li><input type="text" placeholder="ingredient  4" /></li>
      <li><input type="text" placeholder="ingredient  5" /></li>
     
    </ul>

    <input type="submit" value="Add Ingredient" class="btn Two" />
  </div>`;
  }
}
