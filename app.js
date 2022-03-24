//add tasks - form

const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');

const generateTemplate = task => {
  const html = `
      <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${task}</span>
        <i class="far fa-trash-alt delete"></i>
      </li>
  `;

  list.innerHTML += html;

};

addForm.addEventListener('submit', e => {
  
  e.preventDefault();
  const task = addForm.add.value.trim();
  // console.log(task);
  
  if(task.length){
    generateTemplate(task);
    addForm.reset();
  }

});