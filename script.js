let inputBox = document.querySelector("#inputBox");
let list = document.querySelector("#list");

// window.onload = getLocalStorage();
document.addEventListener("DOMContentLoaded", (e) => {
  // e.preventDefault();
  console.log("the Dom fully loaded");
  getLocalStorage();
  setLocalStorage();
});

let inputData = [];

inputBox.addEventListener("keyup", function (e) {
  if (e.key === "Enter" && isValidInput(this.value)) {
    addItem(this.value);
    this.value = "";
  }
});

const addItem = (inputBox) => {
  let listItem = document.createElement("li");
  listItem.innerHTML = `${inputBox} <i></i>`;
  listItem.addEventListener("click", function () {
    this.classList.toggle("done");
  });

  listItem.querySelector("i").addEventListener("click", function (e) {
    e.stopPropagation();
    listItem.remove();
  });
  list.appendChild(listItem);

  inputData.push(inputBox);
  console.log(inputData);
  setLocalStorage();
};

const setLocalStorage = () => {
  const data = localStorage.setItem("ListItem", JSON.stringify(inputData));
};

const getLocalStorage = () => {
  const data = JSON.parse(localStorage.getItem("ListItem"));
  if (!data) return;
  inputData = data;
  inputData.forEach((item) => addItem(item, false));
};

const reset = () => {
  localStorage.removeItem("ListItem");
  location.reload();
};

const isValidInput = (value) => {
  return value !== null && value.trim() !== " ";
};
