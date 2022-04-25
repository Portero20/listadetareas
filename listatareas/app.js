// Crear variables
const dateNumber = document.getElementById('dateNumber');
const dateText = document.getElementById('dateText');
const dateMonth = document.getElementById('dateMonth');
const dateYear = document.getElementById('dateYear');

// Tasks Container donde van a ir todas las tareas que agreguemos
const tasksContainer = document.getElementById('tasksContainer');

const setDate = () => {   //setear la fecha 
    const date = new Date();
    dateNumber.textContent = date.toLocaleString('es', { day: 'numeric' });
    dateText.textContent = date.toLocaleString('es', { weekday: 'long' });
    dateMonth.textContent = date.toLocaleString('es', { month: 'short' });
    dateYear.textContent = date.toLocaleString('es', { year: 'numeric' });
};



const addNewTask = event => {   //evento para agregar una nueva tarea

    event.preventDefault();  //para que no nos lleve a otra pagina 
    const { value } = event.target.taskText;  //obtenemos el valor que tiene dentro del input
    if(!value) return; //si el usuario no ingreso nada, no hara nada la funcion de agregar tarea
    const task = document.createElement('div');  //creamos un elemento de tipo div
    task.classList.add('task','roundBorder');  //agregamos dos clases
    task.addEventListener('click', changeTaskState); //cuando hagamos click llamamos a la funcion changeTaskState (cambiar el estado)
    task.textContent = value;  //texto que ingreso el usuario
    tasksContainer.prepend(task);  //para agregar al principio de la lista asi cada elemento se agregue arriba del todo
    event.target.reset();  //reseteamos la form para que nos quede vacio el input (cada vez que el usuario agregue una tarea el input se limpia para que agregue otra)




};

const changeTaskState = event =>{  //funcion para que me agregue la tarea

    event.target.classList.toggle('done');   //si no tiene la clase done se la agregamos y si la tiene se la sacamos


};

const order = () => {     //ordenar las tareas

    const done = [];      //tareas hechas
    const toDo = [];      // tareas por hacer

    tasksContainer.childNodes.forEach ( el => {   //Acceder a cada una de las tareas

        el.classList.contains('done') ? done.push(el) : toDo.push(el)    //preguntar si esta done agregar el elemento y si no por hacerse



    })
    return [...toDo, ...done];  //hacemos un sprend primero del toDo para que las tareas que estan por hacer queden primero y luego el done para que las tareas ya hechas queden despues



}

const renderOrderedTasks = () => {


    order().forEach(el => tasksContainer.appendChild(el))   //ordenar las tareas


}


setDate(); //llamamos a la funcion