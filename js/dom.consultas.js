const agarroNombre = document.getElementById("nombre")
const agarroHorario = document.getElementById("horario")
const agarroEdad = document.getElementById("edad")
const datosPublicos = []

const obtenerCursos = () => {
    fetch(URL)
    .then((response) => response.json())
    .then((data) =>datosPublicos.push(...data))
    .catch(() => {
        mensajeCargando()
    })
}
obtenerCursos()


/* BUSCAR POR NOMBRE*/
for (const elemento of nombreCursos){
    const opcion = document.createElement("option")
    opcion.innerHTML = `<option value="${elemento}">${elemento}</option>`
    agarroNombre.appendChild(opcion)
}

/*BUSCAR POR HORARIO*/
for (const elemento of horarios){
    const opcion = document.createElement("option")
    opcion.innerHTML = `<option value="${elemento}">${elemento}</option>`
    agarroHorario.appendChild(opcion)
}

/*BUSCAR POR EDAD*/
for (const elemento of grupoEdad){
    const opcion = document.createElement("option")
    opcion.value = elemento.valor
    opcion.textContent = elemento.mostrar
    agarroEdad.appendChild(opcion)
}

/*FUNCIONES*/
const tabla = document.createElement('tbody')
const mostrarResultados = document.getElementById("resultados")
tabla.setAttribute("id", "IDtabla")
mostrarResultados.append(tabla)


function filtrarNombre(){    
    let elegirNombre = agarroNombre.value
    let eleccion = datosPublicos.filter((curso) => curso.nombre === elegirNombre) 
    generarTabla(eleccion)
}

function filtrarHorario(){
    let elegirHorario = agarroHorario.value
    let eleccion = datosPublicos.filter((curso)=> curso.turno === elegirHorario)
    generarTabla(eleccion)
}

function filtrarEdad(){ 
    let elegirEdad = agarroEdad.value
    let eleccion = datosPublicos.filter((curso) => {return curso.edad === elegirEdad})
    generarTabla(eleccion)
    
} 

function generarTabla(eleccion){

    Swal.fire({
        text: 'Buscando resultados',
        timer: 1500,
        didOpen: () => {
          Swal.showLoading()
        }

    })

    setTimeout(()=>{
        if (eleccion.length >0){
            
            
            eleccion.forEach(elemento => {       
            tabla.innerHTML += ` <tr>  
                                    <td>${elemento.nombre}</td>
                                    <td>${elemento.dificultad}</td>
                                    <td>${elemento.edad}</td>
                                    <td>${elemento.turno}</td>
                                    <td>${elemento.horario}</td>
                                </tr>`
            })
            mostrarResultados.appendChild(tabla)
        }else{
            Swal.fire({
                text: 'Lo sentimos. No se encontró un curso con estos parámetros',
                icon: 'error',
                timer: 3000,
                confirmButtonText: 'Ok',
                confirmButtonColor: "#fa78f3"
            })
        }
    }, 1500)
}


/*JUNTAR FUNCIONES*/
let buscarTotal = document.getElementById("botonTotal")
buscarTotal.addEventListener("click", buscar)
let botonBorrarBusq = document.getElementById("botonBorrarBusq")
botonBorrarBusq.addEventListener("click", borrarBusqueda)

function buscar(){
    const mostrarTabla = document.getElementById("IDtabla")
    mostrarTabla.innerHTML = ""
    let elegirNombre = agarroNombre.value
    let elegirHorario = agarroHorario.value
    let elegirEdad = agarroEdad.value

    if (elegirNombre === "" && elegirEdad === ""){
        filtrarHorario()
        
    }else if (elegirHorario ==="" && elegirEdad === ""){
        filtrarNombre()
        
    }else if (elegirEdad ==="") {
        
        let eleccion = datosPublicos.filter((curso)=> curso.turno === elegirHorario && curso.nombre === elegirNombre )
        generarTabla(eleccion)
         
    } else if (elegirNombre === "" && elegirHorario === ""){
        filtrarEdad()
    } else if (elegirHorario === ""){
        let eleccion = datosPublicos.filter((curso)=> curso.edad === elegirEdad && curso.nombre === elegirNombre )
        generarTabla(eleccion)
    } else if (elegirNombre === "") {
        let eleccion = datosPublicos.filter((curso)=> curso.edad === elegirEdad && curso.turno === elegirHorario )
        generarTabla(eleccion)
    } else {
        let eleccion = datosPublicos.filter((curso)=> curso.edad === elegirEdad && curso.turno === elegirHorario && curso.nombre === elegirNombre )
        generarTabla(eleccion)
    }
}

function borrarBusqueda() {
    const mostrarTabla = document.getElementById("IDtabla")
    mostrarTabla.innerHTML = "" 
}
    
/*ENVIAR FORMULARIO */
/*EMAIL JS*/
(function() {
    emailjs.init('kHIj_9PsmqbGchRXG');
})();

window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        this.contact_number.value = Math.random() * 100000 | 0;
        emailjs.sendForm('contact_service', 'contact_form', this)
            .then(function() {
                
                Swal.fire({
                    text: 'Su consulta fue enviada. Nos comunicaremos a la brevedad',
                    icon: 'success',
                    timer: 3000,
                    confirmButtonText: 'Ok',
                    confirmButtonColor: "#fa78f3"
                  })

            }, function() {
                Swal.fire({
                    text: 'Error al cargar el mensaje, por favor intente de nuevo.',
                    icon: 'error',
                    timer: 3000,
                    confirmButtonText: 'Ok',
                    confirmButtonColor: "#fa78f3"
                  });
            });
    });
}