import "./style.css";
const toDoList = document.querySelector("#toDoList");
let selectedIndex;
const list = handleGetData();
for (let i = 0; i < list.length; i += 1) {
  const li = document.createElement("li");
  li.draggable = true;
  li.ondrag = () => drag_handler({ i });
  li.ondragover = dragover_handler;
  li.ondrop = () => drop_handler({ i });
  li.ondragstart = dragstart_handler;
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
