//add tasks - form

const addForm = document.querySelector('.add');
addForm.addEventListener('submit', e => {
  
  e.preventDefault();
  const task = addForm.add.value;
  console.log(task);
})