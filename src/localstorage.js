if(!localStorage.getItem("todo")) {
    localStorage.setItem('todo', JSON.stringify([
      {
        description: "have fun",
        completed: false,
        id: 1,
      },
      {
        description: "study a lot",
        completed: false,
        id: 2,
      },
      {
        description: "learn more",
        completed: false,
        id: 3,
      },
    ]))
  }
  
  const handleGetData = () => {
    const list = localStorage.getItem("todo");
    if (list) {
      return JSON.parse(list);
    } else {
      return [];
    }
  };
  const handleSaveData = (data) => {
    const list = handleGetData();
    list.push(data);
    localStorage.setItem("todo", JSON.stringify(list));
  };
  