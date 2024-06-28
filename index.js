firebase.firestore();

const taskForm = document.getElementById('task-form');

taskForm.addEventListener('submit', e =>{
    e.preventDefault();
   const title = taskForm['task-title'].value;
   const descripcion = taskForm['task-descripcion'].value;
    console.log(title, descripcion);
})