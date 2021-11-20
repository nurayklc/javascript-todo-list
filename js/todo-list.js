let inputDOM = document.querySelector("#task");

let todolistDOM = document.querySelector("#list");

function isEmpty(event) {
  event.preventDefault();
  if (inputDOM.value && inputDOM.value != KeyboardEvent.DOM_KEY_LOCATION_STANDARD) {
    newElement();
    inputDOM.value = "";
  }
  else{
      //toast
  }
  inputDOM.value = ""
}
// yeni eleman ekleme
function newElement(event) {
  let liDOM = document.createElement("li");
  liDOM.innerHTML = inputDOM.value;
  todolistDOM.append(liDOM);
  localStorage.setItem(`${inputDOM.value}`, inputDOM.value);
}

// eleman silme

// yapıldı function
function taskCheck(li) {
    console.log("girdi")
    li.style.color = "blue"
}