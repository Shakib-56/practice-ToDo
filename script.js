let inputBox = document.querySelector("#inputBox");
let list = document.querySelector("#list");
const modal = document.querySelector(".modal");

// // window.onload = getLocalStorage();
// document.addEventListener("DOMContentLoaded", (e) => {
//   // e.preventDefault();
//   console.log("the Dom fully loaded");
//   getLocalStorage();
//   setLocalStorage();
// });

// let inputData = [];

const addItem = () => {
  if (inputBox.value === "") {
    alert("You must write something");
  } else {
    let listItem = document.createElement("li");
    listItem.innerHTML = inputBox.value;
    list.appendChild(listItem);
    let i = document.createElement("i");
    listItem.appendChild(i);
  }
  inputBox.value = "";
  setLocalStorage();
};

list.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("done");
      setLocalStorage();
    } else if (e.target.tagName === "I") {
      e.target.parentElement.remove();
      setLocalStorage();
    }
  },
  false
);

const setLocalStorage = () => {
  localStorage.setItem("ListItem", list.innerHTML);
};

const showTask = () => {
  list.innerHTML = localStorage.getItem("ListItem");
};
showTask();

// const reset = () => {
//   localStorage.removeItem("ListItem");
//   location.reload();
// };

const isValidInput = (value) => {
  return value !== null && value.trim() !== " ";
};

inputBox.addEventListener("keyup", function (e) {
  if (e.key === "Enter" && isValidInput(this.value)) {
    addItem(this.value);
    this.value = "";
    setLocalStorage();
  }
});
