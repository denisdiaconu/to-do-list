import './style.css';
import {
  draghandler,dragoverhandler,drophandler,dragstarthandler,
} from './draganddrop.js';
import {
  checkboxtest,
} from './checkbox.js'
const toDoList = document.querySelector('#toDoList');

if (!localStorage.getItem('todo')) {
  localStorage.setItem('todo', JSON.stringify([
    {
      description: 'have fun',
      completed: false,
      id: 1,
    },
    {
      description: 'study a lot',
      completed: false,
      id: 2,
    },
    {
      description: 'learn more',
      completed: false,
      id: 3,
    },
  ]));
}
export const handleGetData = () => {
  const list = localStorage.getItem('todo');
  if (list) {
    return JSON.parse(list);
  }
  return [];
};

export const list = handleGetData();
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