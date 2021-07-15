
export const setData = () => {
  if (!localStorage.getItem('todo')) {
    localStorage.setItem('todo', JSON.stringify([]));
  }
  if (!localStorage.getItem('count')) {
    localStorage.setItem('count', JSON.stringify(0));
  }
};
export const getList = () => {
  return localStorage.getItem("todo");
}
export const updateList = (list) => {
  localStorage.setItem("todo", list);
}
export const addToDo = (obj) => {
  const list = getList();
  list.push(obj);
  console.log(updateList(list))
  updateList(list);
}

export const getCount = () => JSON.parse(localStorage.getItem('count'));
