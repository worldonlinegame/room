import { db } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
const db = firebase.firestore();


//

const taskForm = document.getElementById('task-form');

taskForm.addEventListener('submit', async (e) =>{
    e.preventDefault();
    
   const title = taskForm['task-title'].value;
   const descripcion = taskForm['task-descripcion'].value;
   const response = await db.collection('tasks').doc().set({
        title,
        descripcion
    })

    console.log(response);
})