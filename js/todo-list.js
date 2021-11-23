let input = document.querySelector("#task");

let ul = document.querySelector("ul");

let todoList =
  localStorage.getItem("task") != null
    ? JSON.parse(localStorage.getItem("task"))
    : [];

// li elemeti oluşturma
const liMarker = (text) => {
  const li = document.createElement("li");
  li.textContent = text;
  ul.appendChild(li);
  let closeButton = document.createElement("span");
  closeButton.textContent = "\u00D7";
  closeButton.classList.add("close");
  closeButton.onclick = removeTask;
  li.append(closeButton);
  ul.append(li);
};

function inputHandler() {
  if (
    input.value != null &&
    input.value != KeyboardEvent.DOM_KEY_LOCATION_STANDARD
  ) {
    newElement();
    input.value = "";
  } else {
    $(".error").toast("show");
  }
  input.value = "";
}

// yeni task ekleme
function newElement() {
  todoList.push(input.value)
  $(".success").toast("show");
  localStorage.setItem("task", JSON.stringify(todoList));
  liMarker(input.value);
}

// listeleme
todoList == null
  ? todoList
  : todoList.forEach((element) => {
      liMarker(element);
    });

// yapıldı fonksiyonu
ul.addEventListener("click", function checkList(e) {
  e.target.classList.toggle("checked");
});

// delete fonksiyonu
function removeTask(e) {
  todoList = todoList.filter((x) => x !== e.target.previousSibling.textContent);
  e.target.parentElement.remove();
  saveToLocalStorage(todoList);
}
// sildikten sonra güncel listeyi kaydetme
function saveToLocalStorage() {
  localStorage.setItem("task", JSON.stringify(todoList));
}