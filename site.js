// Inputs creation =========================>

let addButton = document.querySelector(".board-input__input-button");
let input = document.querySelector(".board-input__text-area");
let itemPlace = document.querySelector(".board-list");

class item {

  constructor(value) {
    this.createDiv(value);
  }

  createDiv(value) {
    let itemBox = document.createElement('div');
    itemBox.classList.add('board-list__item');

    let input = document.createElement('p');
    input.innerHTML = value;
    input.classList.add('item-input');
    input.classList.add('appear');

    itemPlace.appendChild(itemBox);

    itemBox.appendChild(input);

    setTimeout(() => {
      input.classList.remove('appear');
    }, 0)
  }
}

function check() {
  if (input.value != "") {
    new item(input.value);
    input.value = "";
  }
}

addButton.addEventListener('click', check);

// Clock creation =========================>

setInterval(() => {
  const clock = document.querySelector('.time')
  let time = new Date()
  let hours = time.getHours()
  let minutes = time.getMinutes()
  let seconds = time.getSeconds()
  clock.textContent = hours + ':' + minutes + ':' + seconds
}, 1000)
