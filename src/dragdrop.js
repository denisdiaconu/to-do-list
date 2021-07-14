const drag_handler = ({ i }) => {
    selectedIndex = i;
    console.log(i);
  };
  const dragover_handler = (ev) => {
    ev.preventDefault();
  };
  const drop_handler = ({ i }) => {
    const list = handleGetData();
    const tmp = list[selectedIndex];
    list[selectedIndex] = list[i];
    list[i] = tmp;
    localStorage.setItem("todo", JSON.stringify(list));
    location.reload();
  };
  const dragstart_handler = (ev) => {
    console.log("drag is starting");
  };