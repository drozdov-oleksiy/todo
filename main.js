const form = document.querySelector("form.addElement");

const addTask = e => {
  e.preventDefault();
  console.log("hello");
};

form.addEventListener("submit", addTask);
