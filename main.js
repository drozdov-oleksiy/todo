const form = document.querySelector("form.addElement");
const input = document.querySelector(".addElement input");
const ul = document.querySelector("ul.container");
const tasks = [];

const update = () => {
  tasks.forEach((task, i) => {
    task.dataset.key = i;
    ul.appendChild(task);
  });
  input.value = "";
};

const addTask = e => {
  e.preventDefault();
  if (input.value === "") return;
  const li = document.createElement("li");
  li.innerHTML = input.value + " <button>usun</button>";
  tasks.push(li);
  update();
};

form.addEventListener("submit", addTask);
