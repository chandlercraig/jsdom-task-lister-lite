document.addEventListener("DOMContentLoaded", () => {
  // your code here

document.getElementById("create-task-form").addEventListener("submit", function(e) {
    const txt = document.getElementById("new-task-description").value;
    const lstSec = document.getElementById("tasks");
    const nwLstEl = document.createElement('li');
    const tskLn = lstSec.appendChild(nwLstEl);

    tskLn.innerHTML = txt;

    e.preventDefault();
  });
});
