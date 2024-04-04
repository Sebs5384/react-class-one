import { Tarjeta, BlogPost } from "./components/index.js";

/*const imagenPerfil = "https://avatars.githubusercontent.com/u/120617688?s=400&u=6cf55ef8f71d0bb11ec3191ef6a82aee5790767d&v=4";
const nombreDesarrollador = "Sebastian Araya";
const especializacion = "Desarrollador Front End";

ReactDOM.render(<Tarjeta imagen={imagenPerfil} nombre={nombreDesarrollador} titulo={especializacion}  />, document.querySelector("#react-app"));*/

const tituloBlogSpot = "Mi Diario";
const parrafo = "Hoy vi una ardilla\nEsta ardilla era negra";
const parrafosBlogSpot = parrafo.split("\n").map((parrafo, index) => <p key={`parrafo-${index}`}>{parrafo}</p>)
const autor = {
    nombre: "Sebastian Araya",
    titulo: "Desarrollador Front End",
    imagen: "https://avatars.githubusercontent.com/u/120617688?s=400&u=6cf55ef8f71d0bb11ec3191ef6a82aee5790767d&v=4"
}

ReactDOM.render(<BlogPost titulo={tituloBlogSpot} parrafos={parrafosBlogSpot} autor={autor} tarjeta={Tarjeta}/>, document.querySelector("#react-app"));

