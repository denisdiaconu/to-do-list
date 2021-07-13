import _ from 'lodash';
import './style.css';
import { v4 as uuidv4 } from 'uuid'; 

const toDoInput = document.querySelector('.toDoInput');
const toDoButton = document.querySelector('.toDoButton');
const toDoList = document.querySelector('#toDoList');


const handleSave = (data) => {
  const list = handleGetData ()
  list.push(data)
  localStorage.setItem('list', JSON.stringify(list))
}
  
  
  const handleGetData = () => {
    const list = localStorage.getItem('list')
    if(list) {
    return JSON.parse(list)
    } else {
      return []
    }
  } 

toDoButton.addEventListener('click', () => {
    const newTask = toDoInput.value;
    const newTaskOb = {
        description: newTask,
        completed: false,
        id: uuidv4(),
    }
    handleSave(newTaskOb);
    location.reload();
})

const newlist = handleGetData();
console.log(newlist)
for (let i = 0; i < newlist.length; i += 1) {
    const li = document.createElement('li');
    li.classList.add("toDoElement")
    li.innerHTML = `
      <div id='${newlist[i].id}'>
      <input type="checkbox" class="checkboxes"/>
      <p>${newlist[i].description}</p>
      <button class="btn" id="${newlist[i].id}")"><i class="fas fa-ellipsis-v"></i></button>
      </div>`;
    toDoList.appendChild(li);
  }
