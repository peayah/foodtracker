# Tracking Daily Food Intake

This app is for personal use to help me eat a varied diet and
drink enough water.

B - Bread in 1/2 cups

G - Vegetables in 1/2 cups

M - Meat in ounces

F - Fruit

C - Caffeinated Drinks

O - Oil in tbsp.

W - Water

To change the number of the different food groups one would change for
example, the "b1" in both id='b1' and for='b1', so that the id is unique
for
each input / label tag:

```
<div class="toggle-switch">
  <input type="checkbox"
         class="checkbox"
         id="b1"
         onclick="myfunction(this);">
    <label class="label"
           for='b1'>
      <span class= "bread inner"></span>
      <span class="switch" ></span>
    </label>
</div>

```
