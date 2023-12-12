
// // SACAR TURNOS PARA CONSULTORIO DE PSICOMOTRICIDAD



 // CONSTRUCTOR PARA PACIENTES
const Persona = function (nombre, apellido, nacimiento, telefono, email){
    this.nombre = nombre.toUpperCase()
    this.apellido = apellido.toUpperCase()
    this.nacimiento = nacimiento
    this.telefono = telefono
    this.email = email.toLowerCase()
}

let persona1 = new Persona("camila", "borges", '1990-05-15', '3512269484', 'camila@gmail.com')
let persona2 = new Persona("fernando", "ayala", '1970-10-18', '3519669484', 'fernando@gmail.com')
let persona3 = new Persona("ailin", "morales", '1997-03-24', '3548264884', 'ailin@gmail.com')
let persona4 = new Persona("rodrigo", "carazo", '1987-08-05', '3565269154', 'rodrigo@gmail.com')

let pacientes = [persona1, persona2, persona3, persona4]


// CONSTRUCTOR DE TURNOS
const TurnosPacientes = function (dia, horario){
    this.dia = dia
    this.horario = horario
}

let turno1 = new TurnosPacientes ('martes', '15:00')
let turnosConfirmados = [turno1]



// DOM
const formulario = document.getElementById('container-form')
const inputNombre = document.querySelector('#nombre_input')
const inputApellido = document.querySelector('#apellido_input')
const inputNacimiento = document.querySelector('#nacimiento_input')
const inputTelefono = document.querySelector('#telefono_input')
const inputEmail = document.querySelector('#email_input')
const botonEnviar = document.querySelector('#enviar_boton')
const resultadoRegistro = document.querySelector('#resultadoRegistro')
// formulario turnos
const formularioTurnos = document.getElementById('formularioTurnos')
const diaSeleccionado = document.getElementById('diaSemana');
const horarioSeleccionado = document.getElementById('horarioSemana');
const botonEnviar2 = document.getElementById('enviar_boton2')
const resultadoTurnos = document.getElementById('resultadoTurnos')



// CARGO EL VALOR ALMACENADO EN LOCALSTORAGE AL CARGAR LA PAGINA
window.onload = function () {
    let listaPacientes = localStorage.getItem("claveForm");
    if (listaPacientes) {
        pacientes = JSON.parse(listaPacientes)
    }

    let listaTurnos = localStorage.getItem('claveTurnos');
    if (listaTurnos) {
        turnosConfirmados = JSON.parse(listaTurnos)
    }
    console.log(turnosConfirmados)
};



// EVENTO PARA PREVENIR EL ENVIO, ENVIAR Y GUARDAR EL FORMULARIO
formulario.addEventListener('submit', function(event) {
    event.preventDefault()
    guardarFormulario()
    cargarFormulario()
    agregarNuevoPaciente();
    }
)

formularioTurnos.addEventListener('submit', function(event) {
    event.preventDefault()
    guardarTurnos()
    cargarFormulario()
    generarTurnos()
})

// EVENTO PARA CAPTURAR y ENVIAR EL TURNO SELECCIONADO


// // FUNCION PARA REGISTRAR A UN NUEVO PACIENTE
function agregarNuevoPaciente() {
    let nombre = inputNombre.value
    let apellido = inputApellido.value
    let nacimiento = inputNacimiento.value
    let telefono = inputTelefono.value
    let email = inputEmail.value

    if (nombre && apellido && nacimiento) {
        let nuevoUsuario = new Persona(nombre, apellido, nacimiento, telefono, email)
        pacientes.push(nuevoUsuario);
        localStorage.setItem("claveForm", JSON.stringify(pacientes));

        resultadoRegistro.innerHTML = `BIENVENIDO/A ${nombre.toUpperCase()}`
        console.table(pacientes)

        }
        else {
            alert('Te faltaron datos')
            }
        }

        // // FUNCION PARA GENERAR TURNOS
function generarTurnos() {
    let dia = diaSeleccionado.value;
    let horario = horarioSeleccionado.value;

    if (dia && horario) {
        let turnoElegido = new TurnosPacientes(dia, horario);

        turnosConfirmados.push(turnoElegido);
        localStorage.setItem('claveTurnos', JSON.stringify(turnosConfirmados));
        resultadoTurnos.innerHTML = `Gracias por confirmar. Su turno es el día ${dia} a las ${horario}hs`;
    }
}


// GUARDAR DATOS DE FORMULARIO EN JSON
function guardarFormulario() {
    const datosDelFormulario = {
        nombre: inputNombre.value,
        apellido: inputApellido.value,
        nacimiento: inputNacimiento.value,
        telefono: inputTelefono.value,
        email: inputEmail.value
    }

    let resultadoForm = JSON.stringify(datosDelFormulario)
    localStorage.setItem('claveForm', resultadoForm)
    console.log(resultadoForm)
}





// TRAER DATOS DE FORMULARIO Y PARSEARLO CON JSON A OBJETO
function cargarFormulario() {
    const datosJSON = localStorage.getItem('claveForm')
    const datosJSON2 = localStorage.getItem('claveTurnos')


    if(datosJSON && datosJSON2) {
        const datosDelFormulario = JSON.parse(datosJSON)
        inputNombre.value = datosDelFormulario.nombre
        inputApellido.value = datosDelFormulario.apellido
        inputNacimiento.value = datosDelFormulario.nacimiento
        inputTelefono.value = datosDelFormulario.telefono
        inputEmail.value = datosDelFormulario.email

        const datosTurnos = JSON.parse(datosJSON2)
        diaSeleccionado.value = datosTurnos.dia
        horarioSeleccionado.value = datosTurnos.horario
    }
}

// // GUARDAR DATOS DE TURNOS EN JSON
function guardarTurnos() {
    const datosTurnos = {
        dia: diaSeleccionado.value,
        horario: horarioSeleccionado.value
    }

    let resultadoTurnos = JSON.stringify(datosTurnos)
    localStorage.setItem('claveTurnos', resultadoTurnos)

}



//     // BUSCAR PACIENTES REGISTRADOS
//     function buscarPacientes () {
//         let buscarPaciente = prompt('Ingrese apellido')
//         let resultado = pacientes.find((x) => x.apellido.toUpperCase().includes(buscarPaciente.toUpperCase()))
//         console.log(resultado)

//     }

//     buscarPacientes()
