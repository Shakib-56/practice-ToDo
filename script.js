let inputBox = document.querySelector("#inputBox");
let list = document.querySelector("#list");

let inputData = [];

inputBox.addEventListener("keyup", function (e) {
  if (e.key === "Enter") {
    addItem(this.value);
    this.value = "";
  }
});

const addItem = (inputBox, saveToStorage = true) => {
  let listItem = document.createElement("li");
  listItem.innerHTML = `${inputBox} <i></i>`;
  listItem.addEventListener("click", function () {
    this.classList.toggle("done");
  });

  listItem.querySelector("i").addEventListener("click", function (e) {
    e.stopPropagation();
    listItem.remove();
    removeFromLocal();
  });
  list.appendChild(listItem);

  if (saveToStorage) {
    inputData.push(inputBox);
  }
  inputData.push(inputBox);
  console.log(inputData);
  setLocalStorage();
};

const setLocalStorage = () => {
  localStorage.setItem("ListItem", JSON.stringify(inputData));
};

const getLocalStorage = () => {
  const data = JSON.parse(localStorage.getItem("ListItem"));
  if (!data) return;
  inputData = data;
  data.forEach((item) => addItem(item, false));
};

// window.onload = getLocalStorage();
document.addEventListener("DOMContentLoaded", (e) => {
  e.preventDefault();
  getLocalStorage();
});

const removeFromLocal = () => {
  localStorage.removeItem("ListItem");
};
