const localstorage = {
    setdata: () => {
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

    },
    handleGetData: () => {
        const list = localStorage.getItem("todo");
        if (list) {
          return JSON.parse(list);
        } else {
          return [];
        }
      },
      handleSaveData: (data) => {
        const list = this.handleGetData();
        list.push(data);
        localStorage.setItem("todo", JSON.stringify(list));
      }
}
export default localstorage;