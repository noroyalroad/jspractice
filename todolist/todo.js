const printvalue = () => {
  const sss = document.getElementById("title").value;
  console.log(sss);
};
let cnt = 0;
const add = () => {
  let todo = document.getElementById("title");
  let todoValue = todo.value;

  const list = document.querySelector(".list-t");
  const li = document.createElement("li");
  li.className = cnt += 1;
  const checkBox = document.createElement("input");
  checkBox.type = "checkbox";
  checkBox.id = cnt += 1;
  // checkBox.onchange = del();
  checkBox.addEventListener("click", function () {
    del(checkBox.id);
  });

  li.appendChild(checkBox);
  const textNode = document.createTextNode(todoValue);
  li.appendChild(textNode);

  list.appendChild(li);
  todo.value = "";
};

const del = (id) => {
  const flag = document.getElementById(id);
  const parent = flag.parentElement;

  parent.remove();
};
