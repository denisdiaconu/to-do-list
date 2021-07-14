import "./style.css";
import ls from "./localstorage";
import dandd from "./dragdrop";
import chk from "./checkbox";

ls.setdata();
const toDoList = document.querySelector("#toDoList");

const list = ls.handleGetData();
for (let i = 0; i < list.length; i += 1) {
  const li = document.createElement("li");
  li.draggable = true;
  li.ondrag = () => dandd.drag_handler({ i });
  li.ondragover = dandd.dragover_handler();
  li.ondrop = () => dandd.drop_handler({ i });
  li.ondragstart = dandd.dragstart_handler();
  li.classList.add("toDoElement");
  li.id = i;
  li.innerHTML = `
      <div id='${list[i].id}'>
      ${
        list[i].completed
          ? `<input
            id="${i}"
            type="checkbox"
            class="checkboxes"
            checked
          />`
          : `<input id="${i}" type="checkbox" class="checkboxes" />`
      }
      <p>${list[i].description}</p>
      <button class="btn" id="${
        list[i].id
      }")"><i class="fas fa-ellipsis-v"></i></button>
      </div>`;
  toDoList.appendChild(li);
}
const checkboxs = document.querySelectorAll(".checkboxes");
checkboxs.forEach((checkbox) => {
  checkbox.addEventListener("change", (e) => {
    list[e.target.id].completed
      ? (list[e.target.id].completed = false)
      : (list[e.target.id].completed = true);
    localStorage.setItem("todo", JSON.stringify(list));
    console.log(list);
  });
});
console.log(checkboxes)