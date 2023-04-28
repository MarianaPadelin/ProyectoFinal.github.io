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
        contenedor.innerHTML = `© 2023 | Danzas Mariana Padelin | Instagam: <a href="https://www.instagram.com/pas.de.lin/" target="_blank">@pas.de.lin</a> | Whatsapp: 1169551441`
        footer.appendChild(contenedor)
                    
}
generarFooter()
