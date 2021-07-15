import getList from './localstorage.js';

const checkboxtest = () => {
  const list = getList();
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
export default checkboxtest;