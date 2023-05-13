let tarjeta = document.getElementById("disponibles")
let carrito = JSON.parse(localStorage.getItem("contenedor")) || []
let total = document.getElementById("total")
total.addEventListener("click",obtenerTotal)
let borrar = document.getElementById("clear")
clear.addEventListener("click", borrarConsola)

const obtenerCursos = () => {
    fetch(URL)
    .then((response) => response.json())
    .then((data) => cargarArrayCursos(data))
    .catch(() => {
        mensajeCargando()
    })
}
obtenerCursos()


function cargarArrayCursos (cursos) {
        cursos.forEach(curso => {
            let contenedor = document.createElement('div')      
                contenedor.innerHTML += `<div class="col-6" id="tarjeta">
                                        <img style="width:200px" src="${curso.imagen}">
                                        <h4>${curso.nombre}</h4>
                                        <p><b>DIFICULTAD: ${curso.dificultad}</b></p>
                                        <p><b>EDAD: ${curso.edad}</b></p>
                                        <p><b>${curso.horario}</b></p>
                                        <button type="button" class="btn btn-secondary"id=info-${curso.id} >+INFO</button>
                                        <br>                            
                                        <button type="button" class="btn btn-primary" id=${curso.id} >SELECCIONAR CLASE</button>
                                        <br>
                                        </div>`;                              
                

                tarjeta.appendChild(contenedor)     
                
        let agregoClase = document.getElementById(`${curso.id}`)
        agregoClase.addEventListener("click", (e)=> {agruparSeleccionados(e.target.id)})
        let info = document.getElementById(`info-${curso.id}`) 
        info.addEventListener("click", mostrarInfo)   
        function mostrarInfo(){
                Swal.fire({
                  text: curso.descripcion,
                  confirmButtonText: "Ok",
                  confirmButtonColor: "#f06565",
                  background: "rgb(216, 208, 213)",
                });
           
       }           
})
              
            
        function agruparSeleccionados(id){
            let resultado = cursos.find(curso => curso.id === parseInt(id))
                carrito.push(resultado)              
                        
                Swal.fire({
                    text: 'Se agregó esta clase a sus seleccionados.',
                    icon: 'success',
                    timer: 3000,
                    confirmButtonText: 'Ok',
                    confirmButtonColor: "#fa78f3"
                    })
                        
                    guardarDatos(carrito)
        }
}


function guardarDatos(carrito){ carrito.length > 0 && localStorage.setItem("contenedor", JSON.stringify(carrito))}

function obtenerTotal(){ 
    if (carrito.length > 0) {
        Swal.fire({
        text: 'Calculando el total...',
        timer: 1500,
        didOpen: () => {
          Swal.showLoading()
        }
        })
        setTimeout (()=> {
            let resultadoPrecios = carrito.reduce((acc, elemento)=>acc + elemento.precio, 0)    
            promocion(resultadoPrecios)
        }, 1500)          
    }else {
            Swal.fire({
                text: 'No se seleccionaron clases',
                icon: 'error',
                timer: 3000,
                confirmButtonText: 'Ok',
                confirmButtonColor: "#fa78f3"
            })
        }
}

function promocion(resultado){
        Swal.fire({
            title: 'LOS ALUMNOS NUEVOS TIENEN 10% DE DESCUENTO EN LA PRIMER CUOTA. \n¿Es usted un alumno nuevo?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Sí',
            cancelButtonText: 'No'
            }).then((result) => {
                if (result.isConfirmed) {
                Swal.fire({
                    title: 'El valor de la cuota es de ' + resultado * 0.9,
                    icon: 'success',
                    confirmButtonText: 'Ok',
                    confirmButtonColor: "#fa78f3"
                })
                } else {
                    Swal.fire({
                    title: 'El valor de la cuota es de ' + resultado,
                    icon: 'success',
                    confirmButtonText: 'Ok',
                    confirmButtonColor: "#fa78f3"
                })
                }
            })

}

function borrarConsola(){
    if (carrito.length > 0) {
        localStorage.clear()
        carrito = []
          Swal.fire({
            text: 'Se ha vaciado el listado de clases',
            icon: 'success',
            timer: 3000,
            confirmButtonText: 'Ok',
            confirmButtonColor: "#fa78f3"
          })
        
    }else {
        Swal.fire({
            text: 'El listado de clases ya está vacio',
            icon: 'error',
            timer: 3000,
            confirmButtonText: 'Ok',
            confirmButtonColor: "#fa78f3"
          })
    }
}     

