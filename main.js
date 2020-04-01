const form = document.querySelector("form.addElement");
const input = document.querySelector(".addElement input");

const addTask = e => {
  e.preventDefault();
  console.log(input.value);
};

form.addEventListener("submit", addTask);
