import './style.css';
import {
  draghandler, dragoverhandler, drophandler, dragstarthandler,
} from './draganddrop.js';
import checkboxtest from './checkbox.js';
import { getList, setData } from './localstorage.js';
import getFormInput from './helpermethod.js';

getFormInput();
setData();
const toDoList = document.querySelector('#toDoList');
const list = getList();
for (let i = 0; i < list.length; i += 1) {
  const li = document.createElement('li');
  li.draggable = true;
  li.ondrag = () => draghandler({ i });
  li.ondragover = dragoverhandler;
  li.ondrop = () => drophandler({ i });
  li.ondragstart = dragstarthandler;
  li.classList.add('toDoElement');
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
checkboxtest();