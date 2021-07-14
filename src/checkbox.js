const checkboxs = document.querySelectorAll(".checkboxes");
checkboxs.forEach((checkbox) => {
  checkbox.addEventListener("change", (e) => {
    list[e.target.id].completed
      ? (list[e.target.id].completed = false)
      : (list[e.target.id].completed = true);
    localStorage.setItem("todo", JSON.stringify(list));
    console.log(list);
  });
});