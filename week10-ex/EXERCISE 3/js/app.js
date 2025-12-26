const COLORS = ["red", "blue", "green", "yellow", "orange", "purple", "pink", "black", "white", "gray"];

//
// Get a random color among the list of available colors
//
function randomColor() {
  const randomIndex = Math.floor(Math.random() * COLORS.length);
  return COLORS[randomIndex];
}

//
// Create a new card
//
function createCard() {
 
  // 1 - Random color for card
  let card = document.createElement("div");
  card.className = "card";
  
  let header = document.createElement("div");
  header.style.backgroundColor = randomColor();
  header.style.height = "100px";
  card.appendChild(header);

  // 2 - Set card text
  let text = document.createElement("p");
  text.textContent = "This is a card";
  card.appendChild(text);

  // 3 - Set card footer
  let footer = document.createElement("div");
  footer.className = "card-footer";
  
  // 4 - Manage footer button
  let btn = document.createElement("button");
  btn.textContent = "Delete";
  btn.addEventListener("click", function() {
    card.remove();
  });
  footer.appendChild(btn);
  card.appendChild(footer);

  // 5 - Add card to container
  let container = document.querySelector(".container");
  container.appendChild(card);
}


//--------------------------------------------------
// Code Start
//--------------------------------------------------

const btnCreate = document.querySelector('#create');
btnCreate.addEventListener('click', createCard);