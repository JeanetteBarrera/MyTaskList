// Referencias a elementos del HTML
const form = document.getElementById('task-form');
const input = document.getElementById('task-input');
const list = document.getElementById('task-list');

// Array donde guardamos las tareas (solo textos)
let tareas = [];

// Cuando se envía el formulario (al hacer clic en "Agregar")
form.addEventListener('submit', function (event) {
    console.log(event)
    console.log(input.value)
    event.preventDefault(); // Evita que la página se recargue
    const nuevaTarea = input.value.trim(); // Elimina espacios vacíos

    if (nuevaTarea !== '') {
        tareas.push(nuevaTarea); // Agrega al array
        input.value = ''; // Limpia el input
        mostrarTareas(); // Muestra la lista actualizada
    }
});

// Esta función dibuja las tareas en el HTML
function mostrarTareas() {
    list.innerHTML = ''; // Borra todo lo anterior

    // Recorremos el array de tareas y creamos un <li> por cada una
    for (let i = 0; i < tareas.length; i++) {
        const li = document.createElement('li');
        li.innerHTML = `
      <span>${tareas[i]}</span>
      <button onclick="eliminarTarea(${i})">❌</button>
    `;
        list.appendChild(li);
    }
}

// Esta función elimina una tarea del array y vuelve a mostrar la lista
function eliminarTarea(indice) {
    tareas.splice(indice, 1); // Quita una tarea en la posición 'indice'
    mostrarTareas(); // Vuelve a dibujar la lista
}
