import {
  getList, updateList,
} from './localstorage.js';

export const checkboxfun = (e) => {
  const list = getList();
  const id = e.target.classList[0];
  list.forEach((object) => {
    if (String(object.id) === String(id)) {
      object.completed = !object.completed;
    }
  });
  updateList(list);
};
export const addToDom = (obj) => {
  const toDoList = document.querySelector('#toDoList');
  const li = document.createElement('li');
  const inputField = document.createElement('input');
  inputField.type = 'text';
  inputField.id = obj.id;
  inputField.value = obj.description;
  inputField.disabled = true;
  if (obj.completed === true) {
    inputField.checked = true;
  }
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.classList.add(obj.id);
  checkbox.addEventListener('click', (e) => {
    checkboxfun(e);
  });
  const edit = document.createElement('button');
  edit.classList.add(obj.id);
  edit.textContent = 'edit';
  edit.addEventListener('click', (e) => {
    const target = e.target.classList[0];
    const targetinput = document.getElementById(target);
    targetinput.disabled = false;
  });
  const remove = document.createElement('button');
  remove.classList.add(obj.id);
  remove.textContent = 'remove';
  remove.addEventListener('click', (e) => {
    e.target.parentElement.remove();
    const list = getList();
    const target = e.target.classList[0];
    const newList = list.filter((todo) => todo.id.toString() !== target.toString());
    updateList(newList);
  });
  const save = document.createElement('button');
  save.classList.add(obj.id);
  save.textContent = 'save';
  save.addEventListener('click', (e) => {
    const target = e.target.classList[0];
    const inputField = document.getElementById(target);
    const newValue = inputField.value;
    const list = getList();
    list.forEach((todo) => {
      if (todo.id.toString() === target.toString()) {
        todo.description = newValue;
      }
    });
    updateList(list);
    inputField.disabled = true;
  });
  li.appendChild(checkbox);
  li.appendChild(inputField);
  li.appendChild(edit);
  li.appendChild(remove);
  li.appendChild(save);
  toDoList.appendChild(li);
};
export const clearAll = () => {
  const clearCheckedBtn = document.getElementById('clearChecked');
  clearCheckedBtn.addEventListener('click', () => {
    const list = getList();
    const newList = list.filter((todo) => todo.completed !== true);
    updateList(newList);
    window.location.reload();
  });
};
export const displayAll = () => {
  const list = getList();
  list.forEach((obj) => {
    addToDom(obj);
  });
};