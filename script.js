
let input = document.getElementById('input');
let list = document.getElementById('list');


function addItem() {
  const taskText = input.value.trim();
  if (taskText === '') {
    alert("Write First");
    return;
  }

  let li = document.createElement("li");
  let spanText = document.createElement("span");
  spanText.textContent = taskText;
  let deleteBtn = document.createElement("button");
  deleteBtn.textContent = 'Delete';
  li.appendChild(spanText);
  li.appendChild(deleteBtn);
  list.appendChild(li);

  input.value = '';
  saveData();
};


list.addEventListener("click", (e) => {
  if (e.target.tagName === "SPAN") {
    e.target.classList.toggle("mark");
    saveData();
  } else if (e.target.tagName === "BUTTON") {
    e.target.parentElement.remove();
    saveData();
  }
}, false);

function saveData() {
  localStorage.setItem("data", list.innerHTML);
};

function showTask() {
  list.innerHTML= localStorage.getItem("data");
}

showTask();