import handleGetData from './localstorage.js';

let selectedIndex;
export const draghandler = ({ i }) => {
  selectedIndex = i;
};
export const dragoverhandler = (ev) => {
  ev.preventDefault();
};
export const drophandler = ({ i }) => {
  const list = handleGetData();
  const tmp = list[selectedIndex];
  list[selectedIndex] = list[i];
  list[i] = tmp;
  localStorage.setItem('todo', JSON.stringify(list));
  window.location.reload();
};
export const dragstarthandler = () => {
};