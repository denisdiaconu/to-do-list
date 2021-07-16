import {
  getList, updateList,
} from './localstorage.js';

export const checkOrNot = (completed) => {
  let checker = '';
  if (completed === true) {
    checker = 'checked';
  }
  return checker;
};

export const addEventCheckbox = () => {
  const checkboxs = document.querySelectorAll('.checkboxes');
  checkboxs.forEach((checkbox) => {
    checkbox.addEventListener('click', (e) => {
      const list = getList();
      const target = e.target.classList[0];
      if (list[target].completed === true) {
        list[target].completed = false;
      } else {
        list[target].completed = true;
      }
      updateList(list);
    });
  });
};

export const addEventToSave = () => {
  const saveButtons = document.querySelectorAll('.save');
  saveButtons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const target = e.target.classList[0];
      const inputField = document.getElementById(target);
      const saveInput = inputField.value;
      const list = getList();
      list.forEach((todo) => {
        if (todo.id.toString() === target.toString()) {
          todo.description = saveInput;
        }
      });
      updateList(list);
      inputField.disabled = true;
    });
  });
};

export const addEventToEdit = () => {
  const editButtons = document.querySelectorAll('.edit');
  editButtons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const target = e.target.classList[0];
      const targetinput = document.getElementById(target);
      targetinput.disabled = false;
    });
  });
};

export const addEventToRemove = () => {
  const removeButtons = document.querySelectorAll('.remove');
  removeButtons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.target.parentElement.parentElement.remove();
      const list = getList();
      const target = e.target.classList[0];
      const newList = list.filter((todo) => todo.id.toString() !== target.toString());
      updateList(newList);
    });
  });
};

export const addToDom = (obj) => {
  const toDoList = document.querySelector('#toDoList');
  const li = document.createElement('li');
  li.innerHTML = `
      <div>
          <input class="${obj.id} checkboxes" type="checkbox" ${checkOrNot(obj.completed)}>
          <input type='text' id =${obj.id} value=${obj.description} disabled>
          <button class='${obj.id} edit'>edit</button>
          <button class='${obj.id} remove'>remove</button>
          <button class='${obj.id} save'>save</button>
      </div>
      `;
  toDoList.appendChild(li);
};
