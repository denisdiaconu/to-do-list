import './style.css';
import {
  setLocalStorage, getList, getCount, updateList, updateCount,
} from './localstorage.js';
import {
  addToDom, displayAll, clearAll,
} from './dom.js';

setLocalStorage();
displayAll();
clearAll();
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
  toDoInput.value = '';
});