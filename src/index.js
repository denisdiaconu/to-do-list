import './style.css';

const toDoList = document.querySelector('#toDoList');

const list = [
  {
    description: 'have fun',
    completed: false,
    id: 1,
  },
  {
    description: 'study a lot',
    completed: false,
    id: 2,
  },
  {
    description: 'learn more',
    completed: false,
    id: 3,
  },
];

for (let i = 0; i < list.length; i += 1) {
  const li = document.createElement('li');
  li.classList.add('toDoElement');
  li.innerHTML = `
      <div id='${list[i].id}'>
      <input type="checkbox" class="checkboxes"/>
      <p>${list[i].description}</p>
      <button class="btn" id="${list[i].id}")"><i class="fas fa-ellipsis-v"></i></button>
      </div>`;
  toDoList.appendChild(li);
}
