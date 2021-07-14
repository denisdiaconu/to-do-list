import './style.css';

const toDoList = document.querySelector('#toDoList');
let selectedIndex;

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
const handleGetData = () => {
  const list = localStorage.getItem('todo');
  if (list) {
    return JSON.parse(list);
  }
  return [];
};

const draghandler = ({ i }) => {
  selectedIndex = i;
};
const dragoverhandler = (ev) => {
  ev.preventDefault();
};
const drophandler = ({ i }) => {
  const list = handleGetData();
  const tmp = list[selectedIndex];
  list[selectedIndex] = list[i];
  list[i] = tmp;
  localStorage.setItem('todo', JSON.stringify(list));
  window.location.reload();
};
const dragstarthandler = () => {

};
const list = handleGetData();
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
const checkboxs = document.querySelectorAll('.checkboxes');
checkboxs.forEach((checkbox) => {
  checkbox.addEventListener('change', (e) => {
    if (list[e.target.id].completed === true) {
      list[e.target.id].completed = false;
    } else {
      list[e.target.id].completed = true;
    }
    localStorage.setItem('todo', JSON.stringify(list));
  });
});
