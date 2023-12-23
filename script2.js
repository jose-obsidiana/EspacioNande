// PAGINA DE "TALLERES"


// FETCH
fetch( "../talleres.json")
.then ((response) => response.json() )
.then ( data => {

    const talleres = data.talleresPsicomotricidad
    const talleresContainer = document.getElementById('talleres-container')

    talleres.forEach (taller => {
        const talleresDisponibles = document.createElement('ul')
        talleresDisponibles.classList.add('taller')
        talleresDisponibles.innerHTML = 
        `<li> <span>Nombre: </span>${taller.nombre}</li>
        <li> <span>Descripción: </span>${taller.descripcion}</li>
        <li> <span>Horario: </span>${taller.horario}</li>
        <li> <span>Lugar: </span>${taller.lugar}</li>` 
    talleresContainer.appendChild(talleresDisponibles)
    })
})

.catch( (error) => {
    console.error('No se encuentra el archivo solicitado')
} )