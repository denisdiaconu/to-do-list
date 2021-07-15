import { getCount, addToDo } from './localstorage.js';

const getFormInput = () => {
  const btnEvent = document.querySelector('.toDoButton');
  btnEvent.addEventListener('click', () => {
    const input = document.querySelector('.toDoInput');
    const newTaskOb = {
      description: input.value,
      completed: false,
      id: getCount(),
    };
    addToDo(newTaskOb);
    input.value = '';
  });
};
export default getFormInput;