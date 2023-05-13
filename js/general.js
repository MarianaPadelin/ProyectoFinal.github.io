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
        contenedor.innerHTML = `<div class="container d-flex flex-wrap justify-content-between align-items-center py-3 my-4">
                                    <div class="col-lg-4 d-flex align-items-center">
                                        <a href="#" title="Volver arriba"><img src="media\icono.jpg" width=40 id="icono"></a>
                                        <span class="navbar-brand text-dark text-body-secondary">&copy; 2023 Estudio de danzas Mariana Padelin</span>
                                    </div>
                                    <ul class="nav list-unstyled d-flex justify-content-between align-items-center">
                                         <li class="ms-3"><a class="navbar-brand text-dark" href="https://www.instagram.com/pas.de.lin/?hl=es" title="Visitá nuestro instagram!" target="_blank"><img src="https://www.citypng.com/public/uploads/preview/-51609193448mids70tdmp.png" width=40 id="instagram"></a></li>
                                    </ul>
                                    </div>`;
        footer.appendChild(contenedor)
                    
}
generarFooter()
