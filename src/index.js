import './style.css';
import {
  setLocalStorage, getList, getCount, updateList, updateCount,
} from './localstorage.js';

import {
  addToDom, addEventToEdit, addEventToRemove, addEventToSave, addEventCheckbox,
} from './dom.js';

setLocalStorage();

const AddToDo = document.querySelector('.AddToDo');
AddToDo.addEventListener('click', () => {
  const toDoInput = document.querySelector('.toDoInput');
  const count = getCount();
  const toDoObj = {
    id: count,
    description: toDoInput.value,
    completed: false,
  };

  const list = getList();
  list.push(toDoObj);
  updateList(list);
  updateCount(count);
  addToDom(toDoObj);
  addEventCheckbox();
  addEventToEdit();
  addEventToRemove();
  addEventToSave();
  toDoInput.value = '';
});
