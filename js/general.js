const URL = "https://64442e90466f7c2b4b6398cc.mockapi.io/cursos"
const nombreCursos = ["Ballet", "Stretching", "Kpop", "Contempo", "Esferodinamia", "Pilates", "Entrenamiento"]
const horarios = ["Mañana", "Tarde", "Noche"]
const grupoEdad = [{valor: "inicial", mostrar: "3 a 5 años"},
                 {valor: "infantil", mostrar: "6 a 10 años"},
                 {valor: "teen", mostrar: "11 a 14 años"},
                 {valor: "juvenil", mostrar: "15 a 17 años"},
                 {valor: "adulto", mostrar: "18 a 40 años"},
                 {valor: "mayor", mostrar: "+41 años"}]

function mensajeCargando(){
    let cargando =document.getElementById("cargando")
    let contenedor = document.createElement('div')
        contenedor.innerHTML = `<h2>Hubo un error al cargar los datos, por favor vuelva en unos minutos. </h2>`
        cargando.appendChild(contenedor)
}

function generarFooter() {
    let footer =document.getElementById("footer")
    let contenedor = document.createElement('div')
        contenedor.innerHTML = `<div class="container">
        <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <div class="col-md-4 d-flex align-items-center">
            <a href="/" class="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
              <svg class="bi" width="30" height="24"><use xlink:href="#bootstrap"></use></svg>
            </a>
            <span class="mb-3 mb-md-0 text-body-secondary">© 2023 Company, Inc</span>
          </div>
      
          <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li class="ms-3"><a class="text-body-secondary" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#twitter"></use></svg></a></li>
            <li class="ms-3"><a class="text-body-secondary" href="#"><svg class="bi" width="24" height="24"><use xlink:href="https://instagram.com/estudioglams"></use></svg></a></li>
            <li class="ms-3"><a class="text-body-secondary" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#facebook"></use></svg></a></li>
          </ul>
        </footer>
      </div>`
        footer.appendChild(contenedor)
                    
}
generarFooter()
