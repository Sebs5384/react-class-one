import { Tarjeta, BlogPost, MatchName, PasswordInput, ValidationInput, UncontrolledCheckbox, CheckboxList } from "./components/index.js";

/*const imagenPerfil = "https://avatars.githubusercontent.com/u/120617688?s=400&u=6cf55ef8f71d0bb11ec3191ef6a82aee5790767d&v=4";
const nombreDesarrollador = "Sebastian Araya";
const especializacion = "Desarrollador Front End";

ReactDOM.render(<Tarjeta imagen={imagenPerfil} nombre={nombreDesarrollador} titulo={especializacion}  />, document.querySelector("#react-app"));*/

/*const tituloBlogSpot = "Mi Diario";
const parrafo = "Hoy vi una ardilla\nEsta ardilla era negra";
const parrafosBlogSpot = parrafo.split("\n").map((parrafo, index) => <p key={`parrafo-${index}`}>{parrafo}</p>)
const autor = {
    nombre: "Sebastian Araya",
    titulo: "Desarrollador Front End",
    imagen: "https://avatars.githubusercontent.com/u/120617688?s=400&u=6cf55ef8f71d0bb11ec3191ef6a82aee5790767d&v=4"
}

ReactDOM.render(<BlogPost titulo={tituloBlogSpot} parrafos={parrafosBlogSpot} autor={autor} tarjeta={Tarjeta}/>, document.querySelector("#react-app"));*/

/*const nombrePersona = "Sebastian";

ReactDOM.render(<MatchName name={nombrePersona} />, document.querySelector("#react-app"));*/

/*const minimumLength = 7;

ReactDOM.render(<PasswordInput minLength={minimumLength} />, document.querySelector("#react-app"));*/

/*const validateInput = (value) => {
    const isMinimumLength = value => value.length >= 7;
    const hasNoSpaces = value => !value.match(" ");
    const isEmail = value => value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)

    return isMinimumLength(value) && hasNoSpaces(value) && isEmail(value);
};
const typePassword = false;
const isPassword = typePassword ? "password" : "text";
 
ReactDOM.render(
    <ValidationInput validation={validateInput} isPassword={isPassword}/>,
    document.querySelector("#react-app")
);*/

/*ReactDOM.render(
    <UncontrolledCheckbox name={"One"} initialValue={false} />,
    document.querySelector("#react-app")
);*/

const items = {
    one: true,
    two: true,
    three: false
};

ReactDOM.render(
    <CheckboxList items={items} />,
    document.querySelector("#react-app")
);

