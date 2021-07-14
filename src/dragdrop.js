import ls from "./localstorage"

let selectedIndex;
const dragdrop = {
    drag_handler: ({ i }) => {
        selectedIndex = i;
        console.log(i);
      },
      dragover_handler: (ev) => {
        ev.preventDefault();
      },
      drop_handler: ({ i }) => {
        const list = ls.handleGetData();
        const tmp = list[selectedIndex];
        list[selectedIndex] = list[i];
        list[i] = tmp;
        localStorage.setItem("todo", JSON.stringify(list));
        location.reload();
      },
      dragstart_handler: (ev) => {
        console.log("drag is starting");
      }
}
export default dragdrop;