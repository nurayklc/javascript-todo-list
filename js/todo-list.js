let input = document.querySelector("#task");

let ul = document.querySelector("ul");

let todoList =
  localStorage.getItem("task") != null
    ? JSON.parse(localStorage.getItem("task"))
    : [];

const button = document.querySelector("#liveToastBtn");

button.addEventListener("click", inputHandler);

const alertEmpty = document.querySelector("#alertEmpty");

// li elemeti oluşturma
const liMarker = (text) => {
  const li = document.createElement("li");
  li.textContent = text;
  ul.appendChild(li);
};

function inputHandler(event) {
  event.preventDefault();
  if (input.value != null && input.value != KeyboardEvent.DOM_KEY_LOCATION_STANDARD) {
    newElement();
    input.value = ""
  } else {
    $('.error').toast('show')
  }
  input.value = "";
}

// yeni task ekleme
function newElement() {
  todoList.push(input.value);
  $('.success').toast('show')
  localStorage.setItem("task", JSON.stringify(todoList));
  liMarker(input.value);
}

// listeleme
todoList == null ? todoList : todoList.forEach((element) => {
  liMarker(element);
});

// yapıldı fonksiyonu
ul.addEventListener("click", checkList)
function checkList() {
  ul.style.textDecoration = "line-through" 
  let removeButton = document.createElement("button")
  removeButton.innerHTML = "x"
}

// delete fonksiyonu
function removeTask() {
  localStorage.removeItem("task",todoList)
}