import {
  list,
} from './index.js';

export const checkboxtest = () => {

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
};
