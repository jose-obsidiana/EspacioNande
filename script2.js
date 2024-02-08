// PAGINA DE "TALLERES"


// FETCH
fetch("../talleres.json")
    .then(response => response.json())
    .then(data => {

        const talleres = data.talleresPsicomotricidad;
        const talleresContainer = document.getElementById('talleres-container');

        talleres.forEach((taller, index) => {
            // Crear un div para cada taller
            const tallerDiv = document.createElement('div');
            tallerDiv.classList.add('taller');

            // Agregar una clase individual a cada taller div basada en su índice
            tallerDiv.classList.add(`taller-${index + 1}`);

            // Crear una lista dentro del div para mostrar la información del taller
            const listaTaller = document.createElement('ul');
            listaTaller.innerHTML =
                `<li><span>Nombre: </span>${taller.nombre}</li>
                <li><span>Descripción: </span>${taller.descripcion}</li>
                <li><span>Horario: </span>${taller.horario}</li>
                <li><span>Lugar: </span>${taller.lugar}</li>`;

            // Agregar la lista al div del taller
            tallerDiv.appendChild(listaTaller);

            // Agregar el div del taller al contenedor principal
            talleresContainer.appendChild(tallerDiv);
        });
    })
    .catch(error => {
        console.error('No se encuentra el archivo solicitado');
    });
