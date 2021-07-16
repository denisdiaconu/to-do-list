export const setLocalStorage = () => {
  if (!localStorage.getItem('todo')) {
    localStorage.setItem('todo', '[]');
  }
  if (!localStorage.getItem('count')) {
    localStorage.setItem('count', '0');
  }
};

export const getList = () => JSON.parse(localStorage.getItem('todo'));

export const getCount = () => JSON.parse(localStorage.getItem('count'));

export const updateList = (list) => localStorage.setItem('todo', JSON.stringify(list));

export const updateCount = (count) => localStorage.setItem('count', JSON.stringify(count + 1));
