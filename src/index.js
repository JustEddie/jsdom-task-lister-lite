document.addEventListener("DOMContentLoaded", () => {
  // your code here
});


document.getElementById("submit").addEventListener("click",function(event) {
  event.preventDefault();
},false)

function getItem() {
  const input = document.getElementById("task-item");

  addItem(input);
}

function addItem(task) {
  const listNode = document.getElementById("tasks");
  const node = document.createElement('li');
  node.innerText = task;
  listNode.appendChild(node);
  
}