var ingredients = document.getElementById('ingredient-list').childNodes;

var unchecked = '\u2610';
var checked = '\u2611';

for (var i = 0;i < ingredients.length;i++) {
  if (ingredients[i]) {
    ingredients[i].addEventListener('click', toggleChecked);
  }
}

function toggleChecked(event) {
  if (!event.target.checkmarked) {
    event.target.checkmarked = true;
    event.target.style.textDecoration = 'line-through';
    event.target.textContent = replaceCheckbox(event.target.textContent, checked);
  } else {
    event.target.checkmarked = false;
    event.target.style.textDecoration = 'none';
    event.target.textContent = replaceCheckbox(event.target.textContent, unchecked);
  }
}

function replaceCheckbox(string, char) {
    return string.substr(0, 0) + char + string.substr(char.length);
}
